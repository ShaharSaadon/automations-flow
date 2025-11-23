'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '../ui/Container'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Most projects go from discovery to launch in 2-4 weeks. Small projects can be completed in as little as 1 week, while large enterprise systems may take 6-8 weeks. We use agile methodology with weekly sprints, so you see progress immediately and can provide feedback throughout.'
  },
  {
    question: 'What if we need changes after launch?',
    answer: 'All projects include a support period (1-6 months depending on tier) where changes and adjustments are included. After that, you can opt for our ongoing support plan at 10% of project cost per month, which covers unlimited changes, optimizations, and feature additions. We also offer one-off change requests if you prefer.'
  },
  {
    question: 'Do you work with our industry/tech stack?',
    answer: 'We specialize in automation across E-commerce, SaaS, Healthcare, Professional Services, and Financial Services. Our tech stack includes Python, Node.js, Next.js, MongoDB, Supabase, PostgreSQL, WhatsApp Business API, Make.com, n8n, and all major APIs (Stripe, Shopify, HubSpot, Salesforce, etc.). If you have a unique requirement, we can adapt.'
  },
  {
    question: 'What happens after the initial project?',
    answer: 'You have three options: (1) Self-manage with our comprehensive documentation and training, (2) Subscribe to our ongoing support plan for continuous optimization and monitoring, or (3) Come back for new projects as needed. There\'s no pressure—our systems are built to run independently.'
  },
  {
    question: 'How do you ensure data security and compliance?',
    answer: 'We follow industry best practices including encryption at rest and in transit, secure API key management, role-based access control, and regular security audits. For healthcare clients, we ensure HIPAA compliance. For finance clients, we meet SOC 2 requirements. All systems include comprehensive logging and monitoring.'
  },
  {
    question: 'Can we start with a pilot project?',
    answer: 'Absolutely! Our Small Project tier (up to $1,000) is perfect for pilot projects. We can automate a single workflow to prove value before expanding. Many clients start small, see the ROI, then scale to multiple workflows. No long-term commitment required.'
  },
  {
    question: 'What\'s included in the fixed price?',
    answer: 'Everything you need for a production-ready system: discovery & planning, custom development, testing & QA, deployment to your infrastructure, comprehensive documentation, team training, and the included support period. No surprise costs or hidden fees. The only additional cost is ongoing support if you choose it.'
  },
  {
    question: 'Do you provide training for our team?',
    answer: 'Yes! Every project includes training sessions tailored to your team. We create video tutorials, written documentation, and conduct live training calls. We ensure your team can manage, monitor, and understand the system even without technical expertise.'
  },
  {
    question: 'What if the automation breaks or stops working?',
    answer: 'All systems include error monitoring with instant alerts. During your support period, we fix issues immediately at no cost. After the support period, our ongoing support plan (10%/month) includes proactive monitoring and unlimited fixes. We also build redundancy and fallbacks into critical workflows.'
  },
  {
    question: 'How do you measure ROI?',
    answer: 'We establish KPIs during discovery: time saved, cost reduction, revenue increase, error reduction, or customer satisfaction improvements. We track these metrics throughout implementation and provide a post-launch report. On average, clients see 10x ROI within the first year through time savings and efficiency gains.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-32 section-accent border-t border-violet-100">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-violet-100/30 to-transparent rounded-full blur-3xl" />
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
            <HelpCircle className="w-4 h-4 mr-1" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Everything You{' '}
            <span className="text-gradient">
              Need to Know
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here's what most clients ask before getting started.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group"
            >
              <div
                className={`card overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'border-violet-300 shadow-violet'
                    : 'border-violet-100 hover:border-violet-200'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 md:p-8 text-left group/button"
                >
                  <span className="text-base sm:text-lg md:text-xl font-bold text-neutral-900 pr-6 sm:pr-8 group-hover/button:text-violet-700 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-violet-500 group-hover/button:text-violet-600 transition-colors" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] as const }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8">
                    <div className="h-px bg-gradient-to-r from-violet-200 via-purple-200 to-transparent mb-4 sm:mb-6" />
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative corner accent */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-violet-100 to-transparent rounded-xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <div className="card border-violet-200 shadow-soft-lg p-6 sm:p-8 inline-block">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-neutral-700 mb-6">
              Book a free consultation and we'll answer everything you need to know
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-violet hover:scale-105"
            >
              Schedule Free Discovery Call
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default FAQ
