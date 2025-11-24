'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'

const caseStudies = [
  {
    id: 1,
    quote: "The AI lead generation system with custom email campaigns and data enrichment delivered extraordinary results. We closed 35 sales meetings and generated $42,000 in revenue. This system transformed how we approach outbound sales.",
    name: "Ben Buaron",
    title: "CEO, Windmill Growth",
    company: "Windmill Growth",
    initial: "B",
    metric: "$42K Revenue",
    secondaryMetric: "35 Meetings",
    color: "bg-gradient-to-br from-blue-600 to-violet-600",
    logo: "https://windmillgrowth.com/logo.png"
  },
  {
    id: 2,
    quote: "The integration was flawless. Our sales team has enriched data instantly, allowing them to focus on closing.",
    name: "Shahar",
    title: "Founder, SaleUp",
    company: "SaleUp",
    initial: "S",
    metric: "WhatsApp Bot Infrastructure",
    color: "bg-violet-500"
  },
  {
    id: 3,
    quote: "We were drowning in tickets. The AI bot solved 80% of queries in week one. It's been a game changer.",
    name: "Elena Rodriguez",
    title: "Head of Support",
    company: "TechServe",
    initial: "E",
    metric: "40hrs Saved",
    color: "bg-purple-500"
  }
]

const CaseStudyLeaders = () => {
  return (
    <section className="py-20 md:py-32 section-light border-t border-violet-100/60">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Trusted by{' '}
            <span className="text-gradient">
              Industry Leaders
            </span>
          </h2>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover group relative overflow-hidden"
            >
              {/* Quote */}
              <p className="text-neutral-600 italic mb-8 text-sm sm:text-base leading-relaxed">
                "{study.quote}"
              </p>

              {/* Person Info */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center space-x-3 flex-1">
                  {/* Avatar */}
                  <div className={`${study.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                    {study.initial}
                  </div>

                  {/* Name & Title */}
                  <div className="min-w-0">
                    <h4 className="font-bold text-neutral-900 text-sm sm:text-base">
                      {study.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      {study.title}
                    </p>
                  </div>
                </div>

                {/* Metrics - Stacked if secondary metric exists */}
                <div className="text-right flex-shrink-0">
                  {study.secondaryMetric ? (
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-lg shadow-sm">
                        <p className="text-xs font-bold text-emerald-700 whitespace-nowrap">
                          {study.metric}
                        </p>
                      </div>
                      <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-300 rounded-lg shadow-sm">
                        <p className="text-xs font-bold text-violet-700 whitespace-nowrap">
                          {study.secondaryMetric}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-lg">
                      <p className="text-xs font-bold text-violet-700 whitespace-nowrap">
                        {study.metric}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CaseStudyLeaders
