'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Shield } from 'lucide-react'

// Technology logos - organized by category
const aiFrameworks = [
  { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/412991' },
  { name: 'Anthropic Claude', logo: 'https://cdn.simpleicons.org/anthropic/CC9B7A' },
  { name: 'Google Gemini', logo: 'https://cdn.simpleicons.org/google/4285F4' },
  { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'Hugging Face', logo: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
  { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
  { name: 'PyTorch', logo: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
]

const databases = [
  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3FCF8E' },
  { name: 'Redis', logo: 'https://cdn.simpleicons.org/redis/DC382D' },
  { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Pinecone', logo: 'https://cdn.simpleicons.org/pinecone/000000' },
  { name: 'Airtable', logo: 'https://cdn.simpleicons.org/airtable/18BFFF' },
]

const platforms = [
  { name: 'Monday.com', logo: 'https://cdn.simpleicons.org/monday/FF3D57' },
  { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
  { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce/00A1E0' },
  { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FF4A00' },
  { name: 'Make', logo: 'https://cdn.simpleicons.org/make/6D00CC' },
  { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
  { name: 'Retool', logo: 'https://cdn.simpleicons.org/retool/3D3D3D' },
]

const messagingAPIs = [
  { name: 'Twilio', logo: 'https://cdn.simpleicons.org/twilio/F22F46' },
  { name: 'WhatsApp', logo: 'https://cdn.simpleicons.org/whatsapp/25D366' },
  { name: 'Telegram', logo: 'https://cdn.simpleicons.org/telegram/26A5E4' },
  { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B' },
  { name: 'Discord', logo: 'https://cdn.simpleicons.org/discord/5865F2' },
  { name: 'SendGrid', logo: 'https://cdn.simpleicons.org/sendgrid/3368FA' },
  { name: 'Mailgun', logo: 'https://cdn.simpleicons.org/mailgun/F06B66' },
]

const infrastructure = [
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
  { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'Railway', logo: 'https://cdn.simpleicons.org/railway/0B0D0E' },
  { name: 'GitHub Actions', logo: 'https://cdn.simpleicons.org/githubactions/2088FF' },
]

const languages = [
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
]

// Infinite scrolling logo row component
const LogoRow = ({ logos, direction = 'left', speed = 40 }: { logos: typeof aiFrameworks; direction?: 'left' | 'right'; speed?: number }) => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex space-x-12 sm:space-x-16"
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
            <div className="flex flex-col items-center justify-center w-24 sm:w-32 h-20 sm:h-24 bg-white rounded-xl border border-violet-100 hover:border-violet-300 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100/50 p-4">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity mb-2"
              />
              <span className="text-[10px] sm:text-xs text-neutral-600 font-medium text-center line-clamp-1">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const Infrastructure = () => {
  return (
    <section id="tech-stack" className="py-20 md:py-32 section-overlay-accent border-t border-violet-100/60">
      {/* Background decoration - layers on page gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 bg-white border border-violet-200 rounded-full mb-4 sm:mb-6 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-violet-600" />
            <span className="text-[10px] sm:text-xs text-violet-700 font-medium tracking-wider uppercase">Enterprise Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Powered by{' '}
            <span className="text-gradient">
              Industry Leaders
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            We build with the most powerful and reliable technologies in the ecosystem
          </p>
        </motion.div>
      </Container>

      {/* Infinite scrolling logo rows */}
      <div className="space-y-6 sm:space-y-8">
        {/* Row 1: AI & ML Frameworks - Left scroll */}
        <LogoRow logos={aiFrameworks} direction="left" speed={35} />

        {/* Row 2: Databases & Data - Right scroll */}
        <LogoRow logos={databases} direction="right" speed={40} />

        {/* Row 3: Automation Platforms - Left scroll */}
        <LogoRow logos={platforms} direction="left" speed={38} />

        {/* Row 4: Messaging & Communication - Right scroll */}
        <LogoRow logos={messagingAPIs} direction="right" speed={36} />

        {/* Row 5: Cloud Infrastructure - Left scroll */}
        <LogoRow logos={infrastructure} direction="left" speed={42} />

        {/* Row 6: Languages & Frameworks - Right scroll */}
        <LogoRow logos={languages} direction="right" speed={37} />
      </div>

      {/* Bottom CTA */}
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <div className="inline-block px-8 py-4 bg-white border border-violet-200 rounded-2xl shadow-sm">
            <p className="text-neutral-600 text-sm sm:text-base">
              <span className="text-violet-700 font-bold">40+ technologies</span> in our stack
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Infrastructure
