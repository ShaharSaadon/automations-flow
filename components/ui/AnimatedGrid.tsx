'use client'

import { motion } from 'framer-motion'

export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Vertical lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric-500/20 to-transparent"
          style={{ left: `${i * 5}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: [0.42, 0, 0.58, 1] as const,
          }}
        />
      ))}

      {/* Horizontal lines */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          style={{ top: `${i * 10}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: [0.42, 0, 0.58, 1] as const,
          }}
        />
      ))}

      {/* Diagonal accent */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-electric-500/5 via-transparent to-purple-500/5 transform rotate-12 scale-150"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1.5, 1.6, 1.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1] as const,
        }}
      />
    </div>
  )
}
