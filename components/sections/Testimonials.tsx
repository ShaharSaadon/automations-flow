'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    company: 'Windmill Growth',
    companyInfo: 'Digital Marketing Agency | Growth Partners for B2B Companies',
    background: 'Founded by industry veterans who departed from traditional agency models to build a data-driven growth consultancy, Windmill Growth specializes in helping B2B companies scale their outbound sales through intelligent automation and personalized outreach.',
    logo: '/assets/profile-icons/windmill-growth-logo.jpeg',
    amount: '$42,000',
    amountLabel: 'Revenue Generated',
    description: 'The lead generation engine we built for Windmill Growth combined deep scraping, custom ICP targeting, and intelligent email personalization. We expanded their lead universe with a scraper tailored to their exact ideal customer profile, enriched every contact with unique data points, and generated hyper-personalized outreach sequences using top-tier email infrastructure. The result: a sharp increase in meetings, stable sales pipeline, and real revenue growth.',
    quote: 'The AI lead generation system with custom email campaigns and intelligent data enrichment delivered extraordinary results. This system completely transformed how we approach outbound sales — it\'s a game changer.',
    metrics: [
      { value: '35', label: 'Meetings', color: 'violet' },
      { value: '$42K', label: 'Revenue', color: 'emerald' },
      { value: '100%', label: 'Automated', color: 'violet' },
    ],
  },
  {
    id: 2,
    company: 'SaleUp',
    companyInfo: 'Sales Automation Platform | B2B Lead Management',
    background: 'A fast-growing sales enablement company that departed from manual lead routing to build an automated, scalable infrastructure for managing high-volume lead flow and sales operations.',
    logo: '/assets/profile-icons/sale-up-logo.png',
    amount: 'Automated Lead Routing',
    amountLabel: 'For Scale',
    description: 'SaleUp came to us after their Make system couldn\'t handle the volume of leads and automations. We migrated the entire system to n8n, built a central Router managing all lead flow, added notification mechanisms, controls, logs, and modules for bot building — all in a modern, fast, and stable infrastructure. The result: a new system that saves hours of operations, reduces errors, and generates hot leads consistently.',
    quote: 'The new system eliminated all incidents and saved us countless hours every week. Lead response time improved dramatically.',
    metrics: [
      { value: '0', label: 'Incidents', color: 'emerald' },
      { value: '15+', label: 'Hours Saved/Week', color: 'violet' },
      { value: '100%', label: 'Uptime', color: 'violet' },
    ],
  },
  {
    id: 3,
    company: 'SuperPower',
    companyInfo: 'Community Management Platform | Kibbutz Digital Solutions',
    background: 'A community-focused technology company that departed from traditional communication methods to build modern, automated systems for managing large-scale community interactions and member engagement.',
    logo: '/assets/profile-icons/super-power-logo.png',
    amount: 'WhatsApp System',
    amountLabel: 'Community Management',
    description: 'Kibbo needed a way to manage dozens of daily interactions with community members — without overload and chaos. We built them a complete WhatsApp system: message routing, smart tags, management interfaces, reminders, registration processes, student communication, and real-time updates. The system manages all kibbutz communication automatically, saves hours for the team, and elevates service quality.',
    quote: 'This WhatsApp system handles all our community communication seamlessly. It\'s completely automated and saves us so much time.',
    metrics: [
      { value: '100+', label: 'Active Users', color: 'violet' },
      { value: '20+', label: 'Hours Saved/Month', color: 'emerald' },
      { value: '100%', label: 'Centralized', color: 'violet' },
    ],
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 section-overlay-light border-t border-violet-100/60">
      {/* Subtle background decoration - layers on page gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-pattern opacity-15" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="text-center mb-12 sm:mb-16">
            <div className="badge mb-4 sm:mb-6 shadow-sm">
              <span>Client Success</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
              Real Results, <span className="text-gradient">Real Impact</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600">
              Real results from real projects
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="space-y-8 sm:space-y-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute top-0 left-0 -translate-x-2 sm:-translate-x-4 -translate-y-2 sm:-translate-y-4">
                  <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-violet-200" />
                </div>

                <div className="card border-violet-200 shadow-soft-lg p-6 sm:p-8 md:p-10">
                  {/* Company Info Header */}
                  <div className="mb-4 sm:mb-5">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg border-2 border-violet-200 flex items-center justify-center shadow-md p-2">
                        <img
                          src={testimonial.logo}
                          alt={testimonial.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-neutral-900 text-lg sm:text-xl">
                          {testimonial.company}
                        </p>
                        <p className="text-xs sm:text-sm text-violet-600 font-medium">
                          {testimonial.companyInfo}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic border-l-2 border-violet-200 pl-3">
                      {testimonial.background}
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-300 rounded-full mb-4 sm:mb-6 shadow-md">
                    <span className="text-base sm:text-lg md:text-xl font-black bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">
                      {testimonial.amount}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-700 font-semibold">
                      {testimonial.amountLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed mb-4 sm:mb-6">
                    {testimonial.description}
                  </p>

                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg md:text-xl text-neutral-900 leading-relaxed mb-6 sm:mb-8 italic border-l-4 border-violet-300 pl-4">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Key Metrics */}
                  <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm pt-4 border-t border-violet-100">
                    {testimonial.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className={`font-bold text-lg sm:text-xl ${
                          metric.color === 'emerald' ? 'text-emerald-600' : 'text-violet-700'
                        }`}>
                          {metric.value}
                        </p>
                        <p className="text-neutral-500 text-[10px] sm:text-xs whitespace-nowrap">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 rotate-180">
                  <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-violet-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Testimonials
