'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  badge?: string
  badgeIcon?: LucideIcon
  title: string
  titleAccent?: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

const SectionHeader = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleAccent,
  description,
  align = 'center',
  className = ''
}: SectionHeaderProps) => {
  const alignmentClasses = align === 'center' ? 'text-center' : 'text-left'
  const containerClasses = align === 'center' ? 'items-center' : 'items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${containerClasses} mb-16 ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`inline-flex items-center space-x-2 px-4 py-2 bg-purple-900/40 border border-electric-500/30 rounded-full mb-6 ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {BadgeIcon && <BadgeIcon className="w-4 h-4 text-electric-400" />}
          <span className="text-sm text-electric-300 font-medium">{badge}</span>
        </motion.div>
      )}

      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 uppercase tracking-tighter ${alignmentClasses}`}
      >
        {title}
        {titleAccent && (
          <>
            {' '}
            <span className="block md:inline bg-gradient-to-r from-electric-400 via-electric-500 to-purple-400 bg-clip-text text-transparent">
              {titleAccent}
            </span>
          </>
        )}
      </h2>

      <p className={`text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed ${alignmentClasses}`}>
        {description}
      </p>
    </motion.div>
  )
}

export default SectionHeader
