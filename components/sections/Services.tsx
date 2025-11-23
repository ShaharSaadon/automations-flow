'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Bot, MessageSquare, Database, BarChart3, Rocket, Workflow } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI & Automation',
    description:
      'RAG-powered AI agents that make decisions using your knowledge base. Built with LangChain, LangGraph, and enterprise-grade monitoring.',
    features: ['Custom AI decision engines', 'Real-time monitoring', 'OpenAI, Gemini, Anthropic integration'],
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Automation',
    description:
      'Handle 1,000+ conversations simultaneously with GreenAPI, Whapi, Twilio, and WhatsApp Business Cloud API.',
    features: ['Community management', 'Customer service automation', 'Operations & logistics'],
  },
  {
    icon: Database,
    title: 'CRM Integration',
    description:
      'Seamless connection to Monday.com, HubSpot, Salesforce with automatic lead enrichment and unified data layer.',
    features: ['Auto lead enrichment', 'Status tracking', 'Unified analytics'],
  },
  {
    icon: BarChart3,
    title: 'Data Enrichment',
    description:
      'Advanced extraction, parsing, and enrichment pipelines with MongoDB, Supabase, PostgreSQL, and AirTable.',
    features: ['Real-time processing', 'Multi-source enrichment', 'Analytics dashboards'],
  },
  {
    icon: Rocket,
    title: 'GTM & Social Media',
    description:
      'Go-to-market automation and social media engineering with advanced analytics loops and optimization.',
    features: ['Sales automation', 'Marketing optimization', 'Engagement analytics'],
  },
  {
    icon: Workflow,
    title: 'MCP (Model Context Protocol)',
    description:
      'Building MCP systems tailored to your business needs, using internal tools in simpler and more efficient ways.',
    features: ['Custom MCP architecture', 'Tool integration', 'Workflow optimization'],
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white">
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
            Enterprise-grade systems that transform operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                {/* Clean card with hover effect */}
                <div className="relative h-full bg-white border border-violet-100 hover:border-violet-300 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-violet-100">

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 group-hover:border-violet-200 transition-all">
                      <Icon className="w-6 h-6 text-violet-600 group-hover:text-violet-700 transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display text-neutral-900 mb-3 tracking-tight group-hover:text-violet-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-xs text-neutral-500">
                        <span className="text-violet-400 mr-2 mt-0.5">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
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
