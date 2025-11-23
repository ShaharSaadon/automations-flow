'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { fadeInUp, floatingOrb } from '@/lib/animations'

const HeroImproved = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified Background - Less Visual Noise */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-black" />

        {/* Single radial spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-electric-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl" />

        {/* Reduced floating orbs - only 2 instead of 3 */}
        <motion.div
          {...floatingOrb}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-electric-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as const
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-20" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto px-4">
          {/* Honest Trust Badge - No Scarcity Manipulation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-purple-900/40 backdrop-blur-sm border border-electric-500/40 rounded-full mb-8"
          >
            <CheckCircle className="w-4 h-4 text-electric-400" />
            <span className="text-sm font-medium text-electric-300">
              Trusted by 25+ companies • 99.8% uptime • Enterprise-grade
            </span>
          </motion.div>

          {/* Clearer, Outcome-Focused Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-6 leading-[1.1] tracking-tighter"
          >
            <span className="block text-white mb-2">
              Build AI Systems
            </span>
            <span className="block bg-gradient-to-r from-electric-400 via-electric-500 to-purple-500 bg-clip-text text-transparent">
              That Actually Work
            </span>
          </motion.h1>

          {/* Concrete Value Proposition */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Enterprise-grade automation for growing teams.
            <br className="hidden sm:block" />
            <span className="text-electric-400 font-semibold">From discovery to deployment in 2-4 weeks.</span>
          </motion.p>

          {/* Single Primary CTA + Softer Secondary */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('process')}
                className="group relative bg-gradient-to-r from-electric-600 via-electric-500 to-purple-600 hover:from-electric-500 hover:via-electric-600 hover:to-purple-500 text-white border-0 shadow-glow-electric px-10 py-6 text-lg font-bold"
              >
                <span className="relative z-10 flex items-center">
                  See How We Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('proof')}
                className="border-2 border-electric-500/50 hover:border-electric-400 text-white bg-purple-950/50 hover:bg-purple-900/70 px-10 py-6 text-lg font-semibold backdrop-blur-md"
              >
                View Case Studies
              </Button>
            </motion.div>
          </motion.div>

          {/* Key Differentiators - Simple 3-Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm"
          >
            {[
              { label: '2-4 weeks', sublabel: 'to deployment' },
              { label: '99.8% uptime', sublabel: 'guaranteed' },
              { label: '10x avg ROI', sublabel: 'year one' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <p className="text-electric-400 font-bold text-lg mb-1">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
          className="w-6 h-10 border-2 border-electric-500/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ['30%', '50%', '30%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
            className="w-1 bg-electric-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroImproved
