'use client'

import { cn } from '@/lib/utils'
import { ArrowRight, Calendar } from 'lucide-react'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg' | 'xl'
  showIcon?: boolean
  pulse?: boolean
}

/**
 * High-converting CTA button with premium styling
 * UX Strategy: Bold, irresistible design with visual hierarchy and micro-interactions
 */
const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'lg',
    children,
    showIcon = true,
    pulse = false,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex items-center justify-center gap-3',
          'font-bold tracking-tight transition-all duration-300',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric-400/50',
          {
            // Primary - Maximum conversion design
            'bg-gradient-to-r from-pink-500 via-electric-500 to-purple-500 text-white shadow-xl hover:shadow-glow-electric hover:scale-[1.02] active:scale-[0.98]':
              variant === 'primary',

            // Secondary - Elegant alternative
            'bg-white text-purple-900 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]':
              variant === 'secondary',
          },
          {
            'px-6 py-3 text-base rounded-xl': size === 'md',
            'px-8 py-4 text-lg rounded-xl': size === 'lg',
            'px-10 py-5 text-xl rounded-2xl': size === 'xl',
          },
          pulse && 'animate-pulse-slow',
          className
        )}
        {...props}
      >
        {/* Shimmer effect overlay */}
        {variant === 'primary' && (
          <span
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s linear infinite'
            }}
          />
        )}

        {/* Glow effect */}
        <span className="absolute inset-0 rounded-xl blur-xl bg-gradient-to-r from-pink-500 via-electric-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-3">
          {showIcon && variant === 'primary' && (
            <Calendar className="w-5 h-5" />
          )}
          {children}
          {showIcon && (
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </span>
      </button>
    )
  }
)

CTAButton.displayName = 'CTAButton'

export default CTAButton
