'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Shield, ActivitySquare, AlertCircle, HardDrive, Layers, FileText, Lock } from 'lucide-react'

const infrastructure = [
  {
    icon: Layers,
    title: 'Microservices Architecture',
    description: 'Modular, loosely coupled design for scale',
  },
  {
    icon: ActivitySquare,
    title: 'Monitoring',
    description: 'Execution logs, alerts, and performance dashboards',
  },
  {
    icon: AlertCircle,
    title: 'Error Handling',
    description: 'Centralized catch flows and recovery triggers',
  },
  {
    icon: HardDrive,
    title: 'Daily Backups',
    description: 'GitHub-based automated backup routines',
  },
  {
    icon: Layers,
    title: 'Multi-Layer Logic',
    description: 'API layer, data layer, and automation layer separation',
  },
  {
    icon: FileText,
    title: 'Project Documentation',
    description: 'Every project includes technical and user documentation',
  },
  {
    icon: Lock,
    title: 'Security by Design',
    description: 'Built with software security principles in mind',
  },
]

const Infrastructure = () => {
  return (
    <section className="py-20 md:py-32 section-accent border-t border-violet-100">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <div className="badge mb-4 sm:mb-6 shadow-sm">
            <Shield className="w-3.5 h-3.5 mr-2 text-violet-600" />
            <span>Security by Design</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Best Practice{' '}
            <span className="text-gradient">
              Infrastructure
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Enterprise-grade reliability and modular design in every system we build
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
          {infrastructure.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="card card-hover h-full">
                  {/* Icon */}
                  <div className="icon-container mb-4 sm:mb-6 group-hover:border-violet-200 transition-all">
                    <Icon className="w-6 h-6 text-violet-600 group-hover:text-violet-700 transition-colors" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900 mb-2 tracking-tight group-hover:text-violet-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <div className="card border-violet-200 shadow-soft inline-block px-8 py-4">
            <p className="text-neutral-600 text-sm sm:text-base">
              <span className="text-violet-700 font-bold">Production-grade standards</span> from day one
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Infrastructure
