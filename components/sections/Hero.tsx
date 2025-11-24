'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-base relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero atmospheric layer - integrates with page gradient */}
      <div className="hero-atmosphere" />

      {/* Animated accent orbs - subtle depth */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary animated orb */}
        <motion.div
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.05, 1],
            rotate: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1] as const,
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(104, 91, 255, 0.06) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Secondary animated orb */}
        <motion.div
          animate={{
            opacity: [0.15, 0.28, 0.15],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1] as const,
          }}
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(192, 132, 252, 0.05) 0%, rgba(168, 85, 247, 0.03) 50%, transparent 100%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Refined grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Floating accent orb */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 12, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1] as const,
        }}
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6">
          {/* Main headline - clean & elegant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display text-neutral-900 mb-4 sm:mb-6 tracking-tight leading-[0.95]">
              <span className="block">Automations</span>
              <span className="block bg-gradient-to-r from-[#685bff] via-[#8b7fff] to-[#acb0ff] bg-clip-text text-transparent">
                Flow
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Boost your{' '}
            <span className="bg-gradient-to-r from-[#685bff] to-[#acb0ff] bg-clip-text text-transparent font-semibold">
              revenue
            </span>{' '}
            and scale your business with AI-powered automations
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base text-neutral-500 mb-10 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            A boutique AI and automation consultancy. Building the future of
            AI-powered automation.
          </motion.p>

          {/* CTAs - refined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-gradient-to-r from-[#685bff] to-[#acb0ff] hover:from-[#5a4ceb] hover:to-[#9ca0f5] text-white border-0 px-10 py-6 font-medium shadow-lg shadow-[#685bff]/25 hover:shadow-xl hover:shadow-[#685bff]/30 transition-all"
              >
                <span className="relative z-10 flex items-center">
                  Book a Free Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-violet-300 hover:border-violet-400 text-neutral-700 hover:text-violet-700 bg-white/50 hover:bg-white backdrop-blur-sm px-10 py-6 font-medium transition-all"
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Customer Value Proposition - Premium Impact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
          >
            {[
              {
                metric: '78%',
                label: 'Time Saved',
                subtitle: 'per month',
                impact: 'Reduce handling time on repetitive tasks',
              },
              {
                metric: '~40%',
                label: 'Revenue Boost',
                subtitle: 'average growth',
                impact: 'Through automated lead conversion & nurturing',
              },
              {
                metric: '35%',
                label: 'Cost Reduction',
                subtitle: 'operational',
                impact: 'Cut expenses with intelligent automation',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.9 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                {/* Main card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-7 border border-violet-100/80 group-hover:border-violet-300/60 shadow-sm group-hover:shadow-xl group-hover:shadow-violet-100/40 transition-all duration-300">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-2.5">
                    {/* Metric - Large and Bold */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-[#685bff] via-[#7d6fff] to-[#9580ff] bg-clip-text text-transparent leading-none">
                        {item.metric}
                      </span>
                      <span className="text-xs text-violet-500 font-medium tracking-wide uppercase">
                        {item.subtitle}
                      </span>
                    </div>

                    {/* Label */}
                    <h3 className="text-base sm:text-lg font-bold text-neutral-800 group-hover:text-violet-700 transition-colors">
                      {item.label}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.impact}
                    </p>
                  </div>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-violet-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as const,
          }}
          className="w-6 h-10 border border-violet-300 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ['30%', '50%', '30%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1] as const,
            }}
            className="w-1 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
