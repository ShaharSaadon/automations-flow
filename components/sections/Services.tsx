'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Container from '../ui/Container'
import { Bot, MessageSquare, Database, BarChart3, Rocket, Workflow, ChevronDown } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions that transform your business processes',
    features: [
      'Custom AI model development and integration',
      'Workflow automation and optimization',
      'Intelligent document processing',
      'Predictive analytics and forecasting',
      'Natural language processing solutions',
    ],
  },
  {
    icon: MessageSquare,
    title: 'CRM Automation',
    description: 'Streamline your customer relationships with powerful automation',
    features: [
      'Automated lead management workflows',
      'Real-time reporting and analytics dashboards',
      'Multi-platform CRM synchronization',
      'Customer journey automation',
      'Sales pipeline optimization',
    ],
  },
  {
    icon: Database,
    title: 'Data Enrichment',
    description: 'Enhance your data quality with intelligent enrichment solutions',
    features: [
      'Automated data validation and cleansing',
      'Third-party data source integration',
      'Contact and company information enrichment',
      'Duplicate detection and merging',
      'Data quality monitoring and reporting',
    ],
  },
  {
    icon: Rocket,
    title: 'GTM & Social Media',
    description: 'Go-to-market strategies and social media automation',
    features: [
      'Multi-channel social media automation',
      'Content scheduling and distribution',
      'Social listening and sentiment analysis',
      'Campaign performance tracking',
      'Influencer and audience analytics',
    ],
  },
  {
    icon: Workflow,
    title: 'MCP',
    description: 'Model Context Protocol implementation for advanced AI integration',
    features: [
      'Custom MCP server development',
      'AI model context management',
      'Multi-model orchestration',
      'Context-aware AI applications',
      'Enterprise AI infrastructure setup',
    ],
  },
]

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="services" className="section-overlay-accent py-20 md:py-32">
      {/* Subtle atmospheric overlay - layers on page gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 bg-white border border-violet-200 rounded-full mb-4 sm:mb-6 shadow-sm">
            <span className="text-[10px] sm:text-xs text-violet-700 font-medium tracking-wider uppercase">Our Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Intelligent solutions that transform your business operations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-0 space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedIndex === index
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                {/* Collapsible card */}
                <div className="bg-white border border-violet-100 hover:border-violet-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-100/50">
                  {/* Header - Always visible */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 group-hover:border-violet-200 transition-all">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 group-hover:text-violet-700 transition-colors" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-display text-neutral-900 mb-1 tracking-tight group-hover:text-violet-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Icon */}
                    <div className="flex-shrink-0 ml-4">
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-violet-600" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                          <div className="border-t border-violet-100 pt-6">
                            <p className="text-xs sm:text-sm text-violet-700 font-medium mb-4">
                              Solutions We Provide:
                            </p>
                            <ul className="space-y-3">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start text-sm text-neutral-600">
                                  <span className="text-violet-400 mr-3 mt-1 flex-shrink-0">▸</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom accent line on hover */}
                  <div className={`h-1 bg-gradient-to-r from-[#685bff] to-[#acb0ff] transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Services
