'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { Check, ArrowRight, Sparkles, Star } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Small Project',
    price: 'Up to $1,000',
    range: 'Up to $1,000',
    description: 'Perfect for testing automation or single workflow',
    features: [
      'Single workflow automation',
      'Basic integrations',
      'Email support',
      'Complete documentation',
      '1 month support included',
    ],
    highlighted: false,
    cta: 'Start Small',
  },
  {
    name: 'Medium Project',
    price: 'Up to $5,000',
    range: 'Up to $5,000',
    description: 'Most popular for growing teams',
    features: [
      'Multi-workflow system',
      'Advanced AI integration',
      'Priority support',
      'Custom solutions',
      'Comprehensive docs',
      '3 months support included',
    ],
    highlighted: true,
    cta: 'Most Popular Choice',
  },
  {
    name: 'Large Project',
    price: '$10,000+',
    range: '$10,000+',
    description: 'Enterprise-scale automation infrastructure',
    features: [
      'Full-scale automation system',
      'Unlimited integrations',
      '24/7 dedicated support',
      'Advanced AI & ML pipelines',
      'Team training sessions',
      '6 months support included',
      'Dedicated account manager',
    ],
    highlighted: false,
    cta: 'Go Enterprise',
  },
]

const Pricing = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-20 md:py-32 section-light border-t border-violet-100">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bg-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-violet-100/40 to-transparent rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <div className="badge mb-4 sm:mb-6 shadow-sm">
            <Star className="w-4 h-4 mr-1" />
            <span>Investment Tiers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Clear,{' '}
            <span className="text-gradient">
              Transparent
            </span>{' '}
            Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Fixed-price projects with clear deliverables. No surprises, no hidden costs. ROI-focused solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.highlighted && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-full shadow-violet-lg z-10"
                  >
                    <span className="text-xs sm:text-sm font-black text-white flex items-center uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      Most Popular • Best Value
                    </span>
                  </motion.div>
                  {/* Pulsing ring effect */}
                  <motion.div
                    animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl border-2 border-violet-400 pointer-events-none"
                  />
                </>
              )}

              <motion.div
                whileHover={{ scale: tier.highlighted ? 1.02 : 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className={`card h-full p-6 sm:p-8 transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-violet-300 shadow-violet-lg scale-105'
                    : 'border-violet-100 hover:border-violet-300 hover:shadow-violet'
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl transition-all duration-300 ${
                  tier.highlighted
                    ? 'from-violet-50/50 to-purple-50/50'
                    : 'from-violet-50/0 to-purple-50/0 hover:from-violet-50/30 hover:to-purple-50/30'
                }`} />

                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                    <p className="text-neutral-600 mb-4 text-sm">{tier.description}</p>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl sm:text-5xl font-black text-gradient">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500">One-time project cost</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.highlighted ? 'primary' : 'outline'}
                    className={`w-full group ${
                      tier.highlighted
                        ? 'shadow-violet'
                        : ''
                    }`}
                    onClick={() => scrollToSection('contact')}
                  >
                    <span className="flex items-center justify-center">
                      {tier.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Flexible Options & Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-8 sm:mb-12 space-y-4 sm:space-y-6 px-4 sm:px-0"
        >
          {/* Flexible Options Banner */}
          <div className="card border-green-200 bg-gradient-to-br from-green-50/50 to-violet-50/50 shadow-soft p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 flex items-center justify-center">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-600" />
              Flexible, No-Risk Options
            </h3>
            <p className="text-neutral-700 text-base sm:text-lg mb-4">
              Curious? Try our service for a month! All plans are billed monthly with{' '}
              <span className="text-green-600 font-bold">no long-term contracts</span>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ No upfront commitment
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ Start with pilot project
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ Cancel anytime
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ Money-back guarantee
              </span>
            </div>
          </div>

          {/* Ongoing Support */}
          <div className="card border-violet-200 bg-gradient-to-br from-violet-50/50 to-purple-50/50 shadow-soft p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 flex items-center justify-center md:justify-start">
                  <Sparkles className="w-5 h-5 mr-2 text-violet-600" />
                  Ongoing Support
                </h3>
                <p className="text-neutral-700">
                  Keep your systems running perfectly with ongoing maintenance, updates, and optimization
                </p>
              </div>
              <div className="flex-shrink-0 text-center">
                <p className="text-4xl sm:text-5xl font-black text-gradient">
                  10%
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">of project cost / month</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <div className="card border-violet-200 shadow-soft-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-neutral-700 mb-6">
              Every business is unique. Let's discuss your specific needs and create a tailored automation roadmap.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group shadow-violet"
            >
              <span className="flex items-center">
                Book Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Pricing
