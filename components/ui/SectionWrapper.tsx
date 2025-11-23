'use client'

import Container from './Container'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id?: string
  className?: string
  background?: 'default' | 'darker' | 'darkest' | 'gradient'
  showNoise?: boolean
  showGlow?: boolean
  glowPosition?: 'top' | 'center' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
  containerClassName?: string
}

const SectionWrapper = ({
  id,
  className = '',
  background = 'default',
  showNoise = true,
  showGlow = false,
  glowPosition = 'center',
  children,
  containerClassName = ''
}: SectionWrapperProps) => {
  const backgroundClasses = {
    default: 'bg-purple-950',
    darker: 'bg-purple-900',
    darkest: 'bg-black',
    gradient: 'bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950'
  }

  const glowPositionClasses = {
    top: 'top-0 left-1/2 -translate-x-1/2',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2',
    left: 'top-1/2 left-0 -translate-y-1/2',
    right: 'top-1/2 right-0 -translate-y-1/2'
  }

  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-24 lg:py-32 overflow-hidden',
        backgroundClasses[background],
        className
      )}
    >
      {/* Background Effects Layer */}
      <div className="absolute inset-0">
        {showNoise && <div className="absolute inset-0 bg-noise opacity-20" />}

        {showGlow && (
          <div
            className={cn(
              'absolute w-[600px] h-[600px] bg-gradient-radial from-electric-500/10 to-transparent rounded-full blur-3xl',
              glowPositionClasses[glowPosition]
            )}
          />
        )}
      </div>

      {/* Content */}
      <Container className={cn('relative z-10', containerClassName)}>
        {children}
      </Container>
    </section>
  )
}

export default SectionWrapper
