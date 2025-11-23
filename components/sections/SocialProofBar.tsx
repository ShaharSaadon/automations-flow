'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Shield, Zap, TrendingUp, CheckCircle, Award } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'

const SocialProofBar = () => {
  const stats = [
    { icon: Zap, value: '2M+', label: 'Messages Processed' },
    { icon: TrendingUp, value: '99.8%', label: 'System Uptime' },
    { icon: Shield, value: '10x', label: 'Average ROI' }
  ]

  const trustBadges = [
    { icon: CheckCircle, text: 'Enterprise Security' },
    { icon: Award, text: 'HIPAA Compliant' },
    { icon: CheckCircle, text: 'ISO Standards' }
  ]

  return (
    <section className="relative py-12 md:py-16 border-y border-purple-800/30 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900/50 to-purple-950" />
        <div className="absolute inset-0 bg-noise opacity-10" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="text-center"
                >
                  <Icon className="w-6 h-6 text-electric-400 mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-black text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Trust Badges Row */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-purple-800/30"
          >
            {trustBadges.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.text}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-900/30 backdrop-blur-sm border border-purple-700/40 rounded-lg"
                >
                  <Icon className="w-4 h-4 text-electric-500" />
                  <span className="text-xs md:text-sm font-medium text-gray-300">
                    {badge.text}
                  </span>
                </div>
              )
            })}
          </motion.div>

          {/* Trust Statement */}
          <motion.p
            variants={staggerItem}
            className="text-center text-sm text-gray-400 max-w-2xl mx-auto"
          >
            Trusted by companies in <span className="text-electric-400 font-semibold">E-commerce, SaaS, Healthcare</span>, and Professional Services
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

export default SocialProofBar
