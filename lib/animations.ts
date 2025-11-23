import { Variants } from 'framer-motion'

/**
 * Shared animation variants for consistent motion across the landing page
 */

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

/**
 * Hover animations for interactive elements
 */
export const hoverLift = {
  scale: 1.02,
  y: -2,
  transition: { duration: 0.2 }
}

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(217, 70, 239, 0.5)',
  transition: { duration: 0.3 }
}

/**
 * Background animation variants
 */
export const floatingOrb = {
  animate: {
    y: [0, -30, 0],
    x: [0, 20, 0],
    opacity: [0.15, 0.3, 0.15]
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: [0.42, 0, 0.58, 1] as const
  }
}

export const pulseGlow = {
  animate: {
    opacity: [0.3, 0.6, 0.3]
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: [0.42, 0, 0.58, 1] as const
  }
}

/**
 * Viewport configuration for scroll-triggered animations
 */
export const defaultViewport = {
  once: true,
  margin: '-100px'
}
