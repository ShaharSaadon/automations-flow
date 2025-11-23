'use client';

import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Pause,
  Play,
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    client: 'SuperPower',
    project: 'Kibbo – Community Automation System',
    text: 'Automations Flow built our WhatsApp-based community engine end-to-end. The workflow is modular, scalable, and ready for future AI enhancements. It completely transformed how we manage community operations.',
    rating: 5,
    tags: ['WhatsApp Automation', 'Multi-User System', 'Community Ops'],
    featured: true,
    logo: '/images/clients/superpower.png',
  },
  {
    id: 2,
    client: 'Windmill Growth',
    project: 'Startup Directory Scraper & Enrichment Engine',
    text: 'The Automations Flow team built us a reliable scraping and data enrichment engine with daily backups and error reporting. It became the foundation for our startup research workflow and saved us countless hours.',
    rating: 5,
    tags: ['Data Enrichment', 'Scraping Engine', 'Automation Infrastructure'],
    logo: '/images/clients/windmill.png',
  },
  {
    id: 3,
    client: 'SaleUp',
    project: 'WhatsApp Bot Router & CRM Integration',
    text: 'The bot routing system they built for us manages multiple WhatsApp bots, prevents spam, applies rate-limits, and routes leads intelligently into our CRM. Zero downtime and insane reliability.',
    rating: 5,
    tags: ['Bot Routing', 'CRM Integration', 'Lead Management'],
    logo: '/images/clients/saleup.png',
  },
];

const SWIPE_THRESHOLD = 50;

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-rotate with pause support
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
      }
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
      if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleDragEnd = (
    _: any,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) > SWIPE_THRESHOLD || Math.abs(velocity) > 500) {
      if (offset > 0 || velocity > 0) {
        prevTestimonial();
      } else {
        nextTestimonial();
      }
    }
    x.set(0);
  };

  return (
    <section
      id="testimonials"
      className="py-32 bg-navy-900 relative overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from businesses we've upgraded with AI and automation
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] as const }}
                style={{ x, opacity }}
                className="touch-none"
              >
                <Card
                  hover
                  className="bg-navy-800/80 border border-navy-600 p-8 md:p-12 rounded-xl shadow-xl overflow-hidden relative group"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Decorative Quote */}
                  <Quote className="absolute top-6 right-6 w-20 h-20 md:w-24 md:h-24 text-cyan-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300" />

                  {/* Featured tag */}
                  {testimonials[currentIndex].featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="absolute top-6 left-6 z-20"
                    >
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Featured
                      </div>
                    </motion.div>
                  )}

                  {/* Rating */}
                  <div
                    className="flex gap-1 mb-6"
                    aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: i * 0.1,
                            type: 'spring',
                            stiffness: 200,
                          }}
                        >
                          <Star className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed relative z-10">
                    <span className="text-cyan-500 text-4xl md:text-5xl leading-none mr-2">
                      "
                    </span>
                    {testimonials[currentIndex].text}
                    <span className="text-cyan-500 text-4xl md:text-5xl leading-none ml-2">
                      "
                    </span>
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-6">
                    {testimonials[currentIndex].logo ? (
                      <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                        src={testimonials[currentIndex].logo}
                        alt={`${testimonials[currentIndex].client} logo`}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-navy-600 group-hover:border-cyan-500 transition-colors duration-300"
                      />
                    ) : (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      >
                        {testimonials[currentIndex].client[0]}
                      </motion.div>
                    )}

                    <div>
                      <div className="text-white font-semibold text-lg md:text-xl">
                        {testimonials[currentIndex].client}
                      </div>
                      <div className="text-gray-400 italic text-sm md:text-base">
                        {testimonials[currentIndex].project}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {testimonials[currentIndex].tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-navy-600 text-gray-300 bg-navy-700/50 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            {testimonials.length > 1 && (
              <>
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="sm"
                  className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 border-navy-600 hover:border-cyan-500 hover:bg-navy-700 z-20"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="sm"
                  className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 border-navy-600 hover:border-cyan-500 hover:bg-navy-700 z-20"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </>
            )}
          </div>

          {/* Controls */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Play/Pause button */}
              <Button
                onClick={() => setIsPaused((prev) => !prev)}
                variant="outline"
                size="sm"
                className="border-navy-600 hover:border-cyan-500"
                aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
              >
                {isPaused ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <Pause className="w-4 h-4" />
                )}
              </Button>

              {/* Dots */}
              <div
                className="flex justify-center gap-2"
                role="tablist"
                aria-label="Testimonial navigation"
              >
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 ${
                      index === currentIndex
                        ? 'bg-cyan-500 w-8 h-2 shadow-glow'
                        : 'bg-navy-600 w-2 h-2 hover:bg-navy-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-selected={index === currentIndex}
                    role="tab"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
