import { LucideIcon } from 'lucide-react'

/**
 * Shared type definitions for landing page components
 */

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  gradient: string
}

export interface Stat {
  icon: LucideIcon
  label: string
  value: string
  change?: string
}

export interface CaseStudy {
  title: string
  subtitle: string
  industry: string
  challenge: string
  solution: string
  icon: LucideIcon
  stats: Stat[]
  color: string
  bgColor: string
  testimonial?: Testimonial
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  metrics?: {
    label: string
    value: string
  }[]
}

export interface ProcessStep {
  number: string
  icon: LucideIcon
  title: string
  description: string
  details: string[]
  color: string
}

export interface PricingTier {
  name: string
  price: string
  range?: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
  popular?: boolean
}

export interface FAQ {
  question: string
  answer: string
  category?: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  avatar?: string
  expertise: string[]
  badges?: {
    icon: LucideIcon
    text: string
    color?: string
  }[]
}

export interface TrustBadge {
  icon: LucideIcon
  text: string
  description?: string
}

export interface NavLink {
  label: string
  id: string
  external?: boolean
  href?: string
}

/**
 * Utility types
 */

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Alignment = 'left' | 'center' | 'right'
export type BackgroundVariant = 'default' | 'darker' | 'darkest' | 'gradient'
