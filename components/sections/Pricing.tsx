'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { Check, ArrowRight, Sparkles, Crown } from 'lucide-react'

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
            <Crown className="w-4 h-4 mr-1" />
            <span>Boutique Service</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Clear,{' '}
            <span className="text-gradient">
              Transparent
            </span>{' '}
            Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Every solution is custom-engineered for your unique operations. Investment is determined on a project-by-project basis, based on complexity, scope, and measurable ROI. We guarantee a fixed price for all defined projects.
          </p>
        </motion.div>

        {/* Premium Single Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12 sm:mb-16 px-4"
        >
          <div className="relative">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 rounded-full shadow-xl z-10"
            >
              <span className="text-sm font-black text-white flex items-center uppercase tracking-wide">
                <Crown className="w-4 h-4 mr-2" />
                White-Glove Service
              </span>
            </motion.div>

            {/* Main Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="card border-violet-300 shadow-2xl p-8 sm:p-12 bg-gradient-to-br from-white via-violet-50/30 to-purple-50/30"
            >
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-neutral-900 mb-4 tracking-tight">
                  AI Solutions Engineered{' '}
                  <span className="text-gradient">for Your Scale</span>
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
                  As a boutique consultancy, we offer bespoke, white-glove automation infrastructure. We don't use fixed packages because every client's challenge is unique. Your custom <strong className="text-violet-600">Blueprint</strong> details the exact deliverables, architecture, and fixed investment required to achieve your desired outcome.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-violet-200 shadow-sm hover:shadow-md hover:border-violet-300 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-base sm:text-lg mb-1">
                      Custom-Sourced Talent & Technology
                    </h4>
                    <p className="text-sm text-neutral-600">
                      We handpick the right tools and experts for your specific needs
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-violet-200 shadow-sm hover:shadow-md hover:border-violet-300 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-base sm:text-lg mb-1">
                      Fixed-Price Guarantee for Defined Scope
                    </h4>
                    <p className="text-sm text-neutral-600">
                      No surprises—your Blueprint locks in the total investment
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-violet-200 shadow-sm hover:shadow-md hover:border-violet-300 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-base sm:text-lg mb-1">
                      Full Ownership of All IP & Code
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Everything we build belongs to you—complete control and transparency
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-violet-200 shadow-sm hover:shadow-md hover:border-violet-300 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-base sm:text-lg mb-1">
                      Boutique, White-Glove Project Management
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Direct access to senior engineers, not junior account managers
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Primary CTA */}
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="group shadow-2xl hover:shadow-violet-lg text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5"
                >
                  <span className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Book Your Custom Blueprint
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
                <p className="text-sm text-neutral-500 mt-4">
                  Free discovery call • No obligation • Tailored to your needs
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* How It Works Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-8 sm:mb-12 px-4"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-display text-neutral-900 mb-2">
              How the <span className="text-gradient">Blueprint Process</span> Works
            </h3>
            <p className="text-neutral-600">
              Simple, transparent, and designed around your success
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="card p-6 text-center hover:shadow-violet transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-xl">
                1
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Discovery Call</h4>
              <p className="text-sm text-neutral-600">
                We explore your challenges, goals, and desired outcomes together
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card p-6 text-center hover:shadow-violet transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-xl">
                2
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Custom Blueprint</h4>
              <p className="text-sm text-neutral-600">
                Receive a detailed proposal with scope, timeline, and fixed investment
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card p-6 text-center hover:shadow-violet transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-xl">
                3
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Build & Deliver</h4>
              <p className="text-sm text-neutral-600">
                We engineer your solution with full transparency and ongoing communication
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto px-4"
        >
          <div className="card border-violet-200 bg-gradient-to-br from-violet-50/40 to-purple-50/40 shadow-soft-lg p-8 sm:p-10">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-violet-600 mr-2" />
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Why Choose Boutique?
              </h3>
            </div>
            <p className="text-base sm:text-lg text-neutral-700 mb-6 leading-relaxed">
              Unlike agencies that push templated solutions, we invest the time to truly understand your operations. You get senior-level attention, not junior staff. You own everything we build. And you get a guarantee: a fixed price for clearly defined outcomes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm mb-6">
              <span className="px-4 py-2 bg-white/80 border-2 border-violet-200 rounded-lg text-violet-700 font-semibold">
                No Templates
              </span>
              <span className="px-4 py-2 bg-white/80 border-2 border-violet-200 rounded-lg text-violet-700 font-semibold">
                Senior Engineers Only
              </span>
              <span className="px-4 py-2 bg-white/80 border-2 border-violet-200 rounded-lg text-violet-700 font-semibold">
                Full IP Ownership
              </span>
              <span className="px-4 py-2 bg-white/80 border-2 border-violet-200 rounded-lg text-violet-700 font-semibold">
                Fixed Price Guarantee
              </span>
            </div>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group shadow-violet"
            >
              <span className="flex items-center">
                Schedule Your Discovery Call
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
