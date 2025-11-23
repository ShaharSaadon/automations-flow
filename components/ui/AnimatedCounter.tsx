'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

const AnimatedCounter = ({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  })

  const display = useTransform(springValue, (latest) => {
    return prefix + latest.toFixed(decimals) + suffix
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated, springValue, value])

  return (
    <div ref={ref}>
      <motion.span>{display}</motion.span>
    </div>
  )
}

export default AnimatedCounter
