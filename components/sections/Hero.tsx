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
            background: 'radial-gradient(circle, rgba(104, 91, 255, 0.06) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.05) 0%, rgba(168, 85, 247, 0.03) 50%, transparent 100%)',
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
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
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
            <span className="text-xs text-violet-900 font-medium tracking-wide">Boutique AI Automation Consultancy</span>
          </motion.div>

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
            Your next{' '}
            <span className="bg-gradient-to-r from-[#685bff] to-[#acb0ff] bg-clip-text text-transparent font-semibold">
              10x employee
            </span>{' '}
            is an AI agent
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base text-neutral-500 mb-10 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            A boutique AI and automation consultancy. Building the future of AI-powered automation.
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
                  Book Free AI Audit
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
