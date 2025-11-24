'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Container from '../ui/Container'
import { TrendingUp, Clock, DollarSign, Users, MessageSquare, Zap, ChevronLeft, ChevronRight } from 'lucide-react'

const caseStudies = [
  {
    title: '$42K Revenue Generated',
    subtitle: 'Windmill Growth - AI Lead Generation Success',
    industry: 'B2B SaaS',
    challenge: 'Manual lead generation and email outreach was time-consuming and inconsistent, resulting in low meeting conversion rates',
    solution: 'Custom AI-powered lead generation system with data enrichment and personalized email campaigns tailored per client',
    icon: TrendingUp,
    stats: [
      { icon: DollarSign, label: 'Revenue Generated', value: '$42,000', change: 'in campaign' },
      { icon: Users, label: 'Sales Meetings', value: '35', change: 'booked & closed' },
      { icon: Zap, label: 'Email Personalization', value: '100%', change: 'AI-generated' },
    ],
    company: 'Windmill Growth',
    person: 'Ben Buaron, CEO'
  },
  {
    title: '10x Lead Generation',
    subtitle: 'SaaS Automation Infrastructure',
    industry: 'SaaS',
    challenge: 'Manual lead qualification taking 20+ hours per week, missing hot leads',
    solution: 'Multi-channel automation with AI scoring, CRM integration, and instant routing',
    icon: TrendingUp,
    stats: [
      { icon: Zap, label: 'Lead Processing', value: '10x faster', change: 'qualification' },
      { icon: Users, label: 'Conversion Rate', value: '+45%', change: 'increase' },
      { icon: DollarSign, label: 'Revenue Impact', value: '$500K', change: 'ARR increase' },
    ],
  },
  {
    title: '200 Hours Saved Monthly',
    subtitle: 'Healthcare Practice Management',
    industry: 'Healthcare',
    challenge: 'Staff spending 50 hours/week on appointment scheduling and patient follow-ups',
    solution: 'HIPAA-compliant automation for scheduling, reminders, and patient communications',
    icon: Clock,
    stats: [
      { icon: Clock, label: 'Time Saved', value: '200 hrs', change: 'per month' },
      { icon: Users, label: 'Patient Satisfaction', value: '+35%', change: 'improvement' },
      { icon: DollarSign, label: 'Cost Reduction', value: '$95K', change: 'annually' },
    ],
  }
]

const CaseStudiesEnhanced = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection
      if (newIndex < 0) newIndex = caseStudies.length - 1
      if (newIndex >= caseStudies.length) newIndex = 0
      return newIndex
    })
  }

  const study = caseStudies[currentIndex]
  const Icon = study.icon

  return (
    <section id="case-studies" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 bg-white border border-violet-200 rounded-full mb-4 sm:mb-6 shadow-sm">
            <span className="text-[10px] sm:text-xs text-violet-700 font-medium tracking-wider uppercase">Case Studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Proven Results
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Real outcomes from real implementations
          </p>
        </motion.div>

        {/* Carousel - Clean Light Design */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-0">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="relative bg-white border border-violet-200 hover:border-violet-300 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 shadow-lg shadow-violet-100/50 hover:shadow-xl hover:shadow-violet-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 sm:gap-10 md:gap-12">
                {/* Left: Story */}
                <div>
                  <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-violet-50 border border-violet-200 rounded-full text-[9px] sm:text-[10px] font-medium text-violet-700 uppercase tracking-wider mb-4 sm:mb-6">
                    {study.industry}
                  </span>

                  <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display text-neutral-900 mb-1 sm:mb-2 tracking-tight">
                        {study.title}
                      </h3>
                      <p className="text-sm sm:text-base text-violet-600 mb-2">
                        {study.subtitle}
                      </p>
                      {study.person && (
                        <p className="text-xs sm:text-sm text-neutral-500 italic">
                          {study.person}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-medium text-violet-700 uppercase tracking-wider mb-1.5 sm:mb-2">
                        Challenge
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-medium text-violet-700 uppercase tracking-wider mb-1.5 sm:mb-2">
                        Solution
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-900 leading-relaxed font-medium">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Stats */}
                <div className="space-y-3 sm:space-y-4 mt-6 md:mt-0">
                  <p className="text-[10px] sm:text-[11px] font-medium text-violet-700 uppercase tracking-wider mb-4 sm:mb-6">
                    Impact Metrics
                  </p>
                  {study.stats.map((stat, i) => {
                    const StatIcon = stat.icon
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        className="relative bg-violet-50/50 border border-violet-100 rounded-xl p-4 sm:p-5 hover:border-violet-200 hover:bg-violet-50 transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <StatIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-600" />
                          <span className="text-[11px] sm:text-xs text-neutral-600">{stat.label}</span>
                        </div>
                        <p className="text-3xl sm:text-4xl font-display text-violet-700 mb-0.5 sm:mb-1">
                          {stat.value}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-neutral-500">{stat.change}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Clean */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => paginate(-1)}
              className="p-2.5 border border-violet-200 bg-white rounded-lg hover:bg-violet-50 hover:border-violet-300 transition-all shadow-sm"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-4 h-4 text-violet-600" />
            </button>

            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-12 bg-gradient-to-r from-violet-600 to-purple-600'
                      : 'w-1.5 bg-violet-200 hover:bg-violet-300'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="p-2.5 border border-violet-200 bg-white rounded-lg hover:bg-violet-50 hover:border-violet-300 transition-all shadow-sm"
              aria-label="Next case study"
            >
              <ChevronRight className="w-4 h-4 text-violet-600" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CaseStudiesEnhanced
