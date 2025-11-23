import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
          {
            // Primary - Elegant violet gradient
            'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md hover:shadow-violet hover:from-violet-700 hover:to-purple-700 hover:-translate-y-0.5 active:translate-y-0':
              variant === 'primary',

            // Secondary - Softer gradient for supporting actions
            'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-sm hover:shadow-md hover:from-violet-600 hover:to-purple-600':
              variant === 'secondary',

            // Outline - Clean border with subtle hover
            'border-2 border-violet-300 text-violet-700 bg-white hover:border-violet-400 hover:bg-violet-50 hover:text-violet-800':
              variant === 'outline',

            // Ghost - Minimal for tertiary actions
            'text-neutral-600 hover:bg-violet-50 hover:text-violet-700':
              variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm rounded-lg': size === 'sm',
            'px-6 py-3 text-base rounded-xl': size === 'md',
            'px-8 py-4 text-lg rounded-xl': size === 'lg',
            'px-10 py-5 text-xl rounded-2xl': size === 'xl',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
