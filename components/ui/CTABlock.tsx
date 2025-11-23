'use client'

import { motion } from 'framer-motion'
import Button from './Button'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface CTABlockProps {
  title: string
  description: string
  primaryCTA: {
    label: string
    onClick: () => void
    icon?: LucideIcon
  }
  secondaryCTA?: {
    label: string
    onClick: () => void
  }
  variant?: 'default' | 'highlighted' | 'minimal'
  className?: string
}

const CTABlock = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
  className = ''
}: CTABlockProps) => {
  const PrimaryIcon = primaryCTA.icon || ArrowRight

  const variantClasses = {
    default: 'bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-700/50',
    highlighted: 'bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-electric-500/50',
    minimal: 'bg-purple-900/30 border-purple-800/30'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mx-auto ${className}`}
    >
      <div
        className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 text-center ${variantClasses[variant]}`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={primaryCTA.onClick}
            className="group bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-electric-600 text-white border-0 shadow-glow-electric px-8 md:px-10 py-4 md:py-5 font-bold text-base md:text-lg w-full sm:w-auto"
          >
            <span className="flex items-center justify-center">
              {primaryCTA.label}
              <PrimaryIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

          {secondaryCTA && (
            <Button
              size="lg"
              variant="outline"
              onClick={secondaryCTA.onClick}
              className="border-2 border-purple-500/50 hover:border-electric-500 text-white hover:bg-purple-900/50 font-semibold px-8 md:px-10 py-4 md:py-5 text-base md:text-lg w-full sm:w-auto"
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default CTABlock
