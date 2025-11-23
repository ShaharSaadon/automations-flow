'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Search, FileText, Rocket, TrendingUp, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery Call',
    description: 'We audit your operations and identify automation opportunities',
    details: [
      'Free 30-minute consultation',
      'Operations bottleneck analysis',
      'ROI potential assessment',
      'Technical feasibility review'
    ],
    color: 'from-violet-600 to-violet-500'
  },
  {
    number: '02',
    icon: FileText,
    title: 'Custom Blueprint',
    description: 'Receive a tailored automation roadmap with clear deliverables',
    details: [
      'Detailed technical specification',
      'Architecture & workflow diagrams',
      'Timeline & milestone breakdown',
      'Fixed-price proposal'
    ],
    color: 'from-purple-600 to-purple-500'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Your automation goes live in 2-4 weeks with full documentation',
    details: [
      'Agile development sprints',
      'Weekly progress updates',
      'Comprehensive testing',
      'Team training & handoff'
    ],
    color: 'from-violet-600 to-purple-600'
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Continuous Optimization',
    description: 'We monitor, maintain, and improve your systems ongoing',
    details: [
      '24/7 system monitoring',
      'Proactive error resolution',
      'Performance optimization',
      'Feature enhancements'
    ],
    color: 'from-purple-600 to-fuchsia-600'
  }
]

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-32 section-overlay-accent border-t border-violet-100/60">
      {/* Subtle background decoration - layers on page gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20 px-4"
        >
          <div className="badge mb-4 sm:mb-6 shadow-sm">
            <span>Our Proven Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Simple,{' '}
            <span className="text-gradient">
              Streamlined
            </span>
            , Effective
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            From first call to live system in weeks, not months. Here's exactly how we work.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connecting Line (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-violet-200 to-transparent z-0" />
                )}

                <div className="card card-hover h-full relative overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-50 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-3 right-3 text-5xl sm:text-6xl font-black text-violet-100 font-display">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`icon-container mb-4 sm:mb-6 bg-gradient-to-br ${step.color} border-0 shadow-sm relative z-10`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 mb-2 sm:mb-3 tracking-tight group-hover:text-violet-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-neutral-600">
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto px-4 sm:px-0"
        >
          <div className="card border-violet-200 shadow-soft text-center p-6 sm:p-8">
            <p className="text-neutral-600 mb-2 text-sm sm:text-base">
              <span className="text-violet-700 font-bold text-xl sm:text-2xl">Average Timeline:</span>
            </p>
            <p className="text-neutral-900 text-base sm:text-lg md:text-xl">
              Discovery → Blueprint: <span className="font-bold text-violet-700">1 week</span> •
              Development → Launch: <span className="font-bold text-violet-700">2-4 weeks</span> •
              Ongoing Support: <span className="font-bold text-violet-700">Forever</span>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Process
