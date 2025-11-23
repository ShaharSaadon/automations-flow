'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
      {/* Refined light background */}
      <div className="absolute inset-0">
        {/* Soft gradient accent */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as const,
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-radial from-violet-200/40 via-purple-100/20 to-transparent blur-3xl"
        />

        {/* Ultra subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Floating particles - subtle */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1] as const,
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl"
      />

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6">
          {/* Refined badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full mb-6 sm:mb-8 shadow-sm"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            </motion.div>
            <span className="text-xs text-violet-900 font-medium tracking-wide">Elite AI Automation Studio</span>
          </motion.div>

          {/* Main headline - clean & elegant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display text-neutral-900 mb-4 sm:mb-6 tracking-tight leading-[0.95]">
              <span className="block">Automations</span>
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
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
            Boutique AI consultancy crafting{' '}
            <span className="text-violet-700 font-semibold">
              enterprise-grade automation
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base text-neutral-500 mb-10 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            Data-driven. Battle-tested. Zero fluff.
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
                className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 px-10 py-6 font-medium shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
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

          {/* Stats grid - clean light design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-violet-200/50 max-w-3xl mx-auto rounded-xl overflow-hidden border border-violet-200/80 shadow-sm"
          >
            {[
              { label: 'Response Time', value: '< 30s', sublabel: 'Avg. automation response' },
              { label: 'Uptime', value: '99.9%', sublabel: 'System reliability' },
              { label: 'Active Clients', value: '25+', sublabel: 'High-growth companies' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 text-center group hover:bg-violet-50/50 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-display text-neutral-900 mb-1 sm:mb-2 group-hover:text-violet-700 transition-all">
                  {item.value}
                </div>
                <div className="text-[11px] sm:text-xs text-violet-600 font-medium uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-[9px] sm:text-[10px] text-neutral-500 px-2">
                  {item.sublabel}
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
          transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
          className="w-6 h-10 border border-violet-300 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ['30%', '50%', '30%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
            className="w-1 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
