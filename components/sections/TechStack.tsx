'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Code2 } from 'lucide-react'

// Technology logos - combined into 2 rows for optimal height
const topRowTechnologies = [
  { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'LangGraph', logo: 'https://cdn.simpleicons.org/langchain/8A2BE2' },
  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3FCF8E' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Airtable', logo: 'https://cdn.simpleicons.org/airtable/18BFFF' },
  { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/412991' },
  { name: 'Gemini', logo: 'https://cdn.simpleicons.org/googlegemini/4285F4' },
  { name: 'Anthropic', logo: 'https://cdn.simpleicons.org/anthropic/D4A574' },
]

const bottomRowTechnologies = [
  { name: 'Monday.com', logo: 'https://cdn.simpleicons.org/monday/FF3D57' },
  { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
  { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce/00A1E0' },
  { name: 'WhatsApp', logo: 'https://cdn.simpleicons.org/whatsapp/25D366' },
  { name: 'Twilio', logo: 'https://cdn.simpleicons.org/twilio/F22F46' },
  { name: 'OpenRouter', logo: 'https://cdn.simpleicons.org/openrouter/6366F1' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
]

// Infinite scrolling logo row component
const LogoRow = ({ logos, direction = 'left', speed = 40 }: { logos: typeof topRowTechnologies; direction?: 'left' | 'right'; speed?: number }) => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex space-x-8 sm:space-x-12"
        animate={{
          x: direction === 'left' ? [0, -100 / 3 + '%'] : [-100 / 3 + '%', 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedLogos.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 group"
          >
            <div className="flex items-center justify-center w-24 sm:w-28 h-24 sm:h-28 bg-white rounded-2xl border-2 border-violet-100 hover:border-violet-400 transition-all duration-300 hover:shadow-xl hover:shadow-violet-200/60 hover:scale-105 p-5">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 filter group-hover:drop-shadow-lg"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const TechStack = () => {
  return (
    <section id="technology" className="py-20 md:py-32 section-light border-t border-violet-100/60">
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
          className="text-center mb-10 sm:mb-12 px-4"
        >
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 bg-white border border-violet-200 rounded-full mb-4 sm:mb-6 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-violet-600" />
            <span className="text-[10px] sm:text-xs text-violet-700 font-medium tracking-wider uppercase">Technology Stack</span>
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
      </Container>

      {/* Infinite scrolling logo rows - only 2 rows for compact design */}
      <div className="space-y-6 sm:space-y-8">
        {/* Row 1: Top technologies - Left scroll */}
        <LogoRow logos={topRowTechnologies} direction="left" speed={40} />

        {/* Row 2: Bottom technologies - Right scroll */}
        <LogoRow logos={bottomRowTechnologies} direction="right" speed={42} />
      </div>

      {/* Bottom CTA */}
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 text-center px-4"
        >
          <div className="inline-block px-8 py-4 bg-white border border-violet-200 rounded-2xl shadow-sm">
            <p className="text-neutral-600 text-sm sm:text-base">
              <span className="text-violet-700 font-bold">20+ technologies</span> in our stack
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default TechStack
