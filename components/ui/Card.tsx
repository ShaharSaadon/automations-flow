import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  variant?: 'default' | 'bordered' | 'elevated' | 'gradient'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-6 transition-all duration-300',
          {
            // Default - Clean white with subtle shadow
            'bg-white shadow-sm':
              variant === 'default',

            // Bordered - White with violet border
            'bg-white border border-violet-200':
              variant === 'bordered',

            // Elevated - White with prominent shadow
            'bg-white shadow-lg':
              variant === 'elevated',

            // Gradient - Soft violet gradient background
            'bg-gradient-to-br from-white to-violet-50 border border-violet-100':
              variant === 'gradient',
          },
          hover && 'hover:shadow-violet hover:border-violet-300 hover:-translate-y-1',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
