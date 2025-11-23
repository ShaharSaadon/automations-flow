'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import AnimatedCounter from '../ui/AnimatedCounter'
import { TrendingUp, Workflow, Zap, Shield } from 'lucide-react'

const stats = [
  {
    icon: Workflow,
    value: 1200,
    suffix: '+',
    decimals: 0,
    label: 'Workflows Deployed',
    description: 'Production systems',
  },
  {
    icon: Zap,
    value: 2,
    suffix: 'M+',
    label: 'Messages Processed',
    description: 'Daily volume',
  },
  {
    icon: TrendingUp,
    value: 99.8,
    suffix: '%',
    decimals: 1,
    label: 'System Uptime',
    description: 'Reliability',
  },
  {
    icon: Shield,
    value: 10,
    suffix: 'x',
    label: 'Average ROI',
    description: 'Client returns',
  },
]

const Stats = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white border-y border-violet-100">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/30 via-white to-violet-50/30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Stats Grid - Clean & Minimal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-5 bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200 rounded-xl group-hover:border-violet-300 group-hover:shadow-md transition-all duration-300"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-violet-600" />
                </motion.div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-display text-neutral-900 mb-2 group-hover:text-violet-700 transition-colors">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                  />
                </div>
                <div className="text-xs md:text-sm text-violet-600 font-medium mb-1 px-2">{stat.label}</div>
                <div className="text-[10px] md:text-xs text-neutral-500 px-2">{stat.description}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Social Proof - Clean */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 md:mt-20 px-4"
        >
          <p className="text-violet-700 font-semibold text-sm md:text-base mb-2">
            Driven By Data, Proven By Results
          </p>
          <p className="text-neutral-500 text-xs md:text-sm max-w-2xl mx-auto">
            Trusted by industry leaders in E-commerce, SaaS, Healthcare, and Professional Services
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

export default Stats
