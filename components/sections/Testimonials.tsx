'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 section-overlay-light">
      {/* Subtle background decoration - layers on page gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-pattern opacity-15" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="text-center mb-8 sm:mb-12">
            <div className="badge mb-4 sm:mb-6 shadow-sm">
              <span>Client Success</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
              Real Results, <span className="text-gradient">Real Impact</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600">
              Real results from real projects
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 -translate-x-2 sm:-translate-x-4 -translate-y-2 sm:-translate-y-4">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-violet-200" />
            </div>

            <div className="card border-violet-200 shadow-soft-lg p-6 sm:p-8 md:p-12">
              {/* Dollar Amount Badge */}
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-50 to-violet-50 border border-green-200 rounded-full mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">$85,000+</span>
                <span className="text-xs sm:text-sm text-neutral-700">Saved in Manual Labor Costs</span>
              </div>

              <blockquote className="text-lg sm:text-xl md:text-2xl text-neutral-900 leading-relaxed mb-6 sm:mb-8">
                "Automations Flow built our entire community communication system on WhatsApp —{' '}
                <span className="text-violet-700 font-semibold">modular, scalable, and ready for future AI extensions.</span>{' '}
                We're now processing 500+ member interactions daily with zero manual intervention.
                <span className="text-green-600 font-bold"> This has saved us over $85,000 in operational costs.</span>{' '}
                This works."
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4 sm:gap-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-base sm:text-lg">SK</span>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-sm sm:text-base">SuperPower</p>
                    <p className="text-xs sm:text-sm text-neutral-600">Kibbo Project — WhatsApp Community System</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div>
                    <p className="text-violet-700 font-bold text-sm sm:text-base">500+</p>
                    <p className="text-neutral-500 text-[10px] sm:text-xs">Daily Interactions</p>
                  </div>
                  <div>
                    <p className="text-violet-700 font-bold text-sm sm:text-base">100%</p>
                    <p className="text-neutral-500 text-[10px] sm:text-xs">Automated</p>
                  </div>
                  <div>
                    <p className="text-violet-700 font-bold text-sm sm:text-base">200hrs</p>
                    <p className="text-neutral-500 text-[10px] sm:text-xs">Saved/Month</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 rotate-180">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-violet-200" />
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 text-center"
          >
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-700 mb-1 sm:mb-2">100%</p>
              <p className="text-xs sm:text-sm text-neutral-600">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-700 mb-1 sm:mb-2">99.9%</p>
              <p className="text-xs sm:text-sm text-neutral-600">System Uptime</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-700 mb-1 sm:mb-2">24/7</p>
              <p className="text-xs sm:text-sm text-neutral-600">Monitoring</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Testimonials
