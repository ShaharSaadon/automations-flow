'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '../ui/Container'
import { cn } from '@/lib/utils'

const techCategories = {
  Core: [
    { name: 'n8n', purpose: 'Workflow orchestration' },
    { name: 'Node.js', purpose: 'Backend runtime' },
    { name: 'Python', purpose: 'Data processing' },
    { name: 'LangChain', purpose: 'AI orchestration' },
    { name: 'LangGraph', purpose: 'Agent workflows' },
  ],
  Databases: [
    { name: 'MongoDB', purpose: 'Document store' },
    { name: 'Supabase', purpose: 'PostgreSQL + auth' },
    { name: 'PostgreSQL', purpose: 'Relational data' },
    { name: 'Airtable', purpose: 'Flexible data' },
  ],
  'AI Models': [
    { name: 'OpenAI', purpose: 'GPT models' },
    { name: 'Gemini', purpose: 'Google AI' },
    { name: 'Anthropic', purpose: 'Claude models' },
    { name: 'OpenRouter', purpose: 'Multi-model access' },
  ],
  Integrations: [
    { name: 'Monday.com', purpose: 'Project management' },
    { name: 'HubSpot', purpose: 'CRM platform' },
    { name: 'Salesforce', purpose: 'Enterprise CRM' },
  ],
  WhatsApp: [
    { name: 'GreenAPI', purpose: 'WhatsApp Business' },
    { name: 'Whapi', purpose: 'Cloud messaging' },
    { name: 'Twilio', purpose: 'Communication API' },
    { name: 'WhatsApp Cloud', purpose: 'Official API' },
  ],
}

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof techCategories>('Core')

  return (
    <section id="technology" className="py-20 md:py-32 section-light border-y border-violet-100">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
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
            <span>Technology Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            <span className="text-gradient">
              Battle-Tested
            </span>{' '}
            Technology
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Enterprise-grade tools and frameworks powering mission-critical automation
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12 px-4"
        >
          {Object.keys(techCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category as keyof typeof techCategories)}
              className={cn(
                'px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base',
                activeTab === category
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-violet scale-105'
                  : 'bg-white text-neutral-600 hover:text-violet-700 border border-violet-200 hover:border-violet-300 hover:bg-violet-50'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 sm:px-0"
        >
          {techCategories[activeTab].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card card-hover group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-violet-700 transition-colors">
                  {tech.name}
                </h3>
                <div className="w-2 h-2 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:glow-violet transition-all" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-600">{tech.purpose}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default TechStack
