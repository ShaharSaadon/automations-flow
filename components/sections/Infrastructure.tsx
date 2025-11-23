'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Shield, ActivitySquare, AlertCircle, HardDrive, Layers, FileText } from 'lucide-react'

const infrastructure = [
  {
    icon: Layers,
    title: 'Microservices Architecture',
    description: 'Scalable, modular design with isolated services for maximum reliability',
  },
  {
    icon: ActivitySquare,
    title: 'Monitoring & Alerts',
    description: 'Real-time logs, dashboards, and automated alerts for proactive issue detection',
  },
  {
    icon: AlertCircle,
    title: 'Error Handling',
    description: 'Comprehensive catch flows and recovery triggers for fault tolerance',
  },
  {
    icon: HardDrive,
    title: 'Daily Backups',
    description: 'Automated GitHub backups ensuring business continuity and version control',
  },
  {
    icon: Layers,
    title: 'Multi-Layer Logic',
    description: 'Separated API, data, and automation layers for clean architecture',
  },
  {
    icon: FileText,
    title: 'Complete Documentation',
    description: 'Technical and user documentation for seamless knowledge transfer',
  },
]

const Infrastructure = () => {
  return (
    <section className="py-32 bg-navy-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-navy-800/50 border border-cyan-500/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-cyan-500" />
            <span className="text-sm text-gray-400">Security by Design</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Best Practice Infrastructure
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade architecture built for reliability, scalability, and security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructure.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-navy-800/50 border border-navy-600 rounded-lg p-6 h-full group-hover:border-cyan-500/50 transition-all duration-300">
                  <Icon className="w-10 h-10 text-cyan-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
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
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            Every project is built with production-grade standards from day one
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

export default Infrastructure
