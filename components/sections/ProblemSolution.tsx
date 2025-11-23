'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import CTABlock from '../ui/CTABlock'
import { AlertCircle, Bot, MessageSquare, Database, CheckCircle, ArrowDown } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'

const ProblemSolution = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const problems = [
    {
      icon: AlertCircle,
      title: 'Manual Work Overload',
      description: 'Teams spending 20+ hours per week on repetitive tasks that could be automated'
    },
    {
      icon: AlertCircle,
      title: 'Fragmented Communication',
      description: 'Customer inquiries scattered across platforms, leading to slow response times and inconsistency'
    },
    {
      icon: AlertCircle,
      title: 'Disconnected Data',
      description: 'Critical business data trapped in silos across multiple tools with no unified view'
    }
  ]

  const solutions = [
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent systems that handle repetitive work 24/7, freeing your team for strategic tasks',
      features: ['RAG-powered decision engines', 'Custom AI workflows', 'Real-time monitoring']
    },
    {
      icon: MessageSquare,
      title: 'Unified Communication',
      description: 'WhatsApp automation that manages 1,000+ conversations simultaneously with consistent quality',
      features: ['Multi-channel integration', 'Smart routing', 'Instant responses']
    },
    {
      icon: Database,
      title: 'Smart Data Pipelines',
      description: 'Automated data flows that enrich, sync, and provide real-time insights across your entire stack',
      features: ['CRM integration', 'Auto-enrichment', 'Unified analytics']
    }
  ]

  return (
    <SectionWrapper
      id="solutions"
      background="gradient"
      showNoise
      showGlow
      glowPosition="center"
    >
      <SectionHeader
        badge="The Challenge"
        title="Scaling Without"
        titleAccent="Adding Headcount"
        description="Your team is maxed out. Manual processes are bottlenecks. Here's how we solve it."
      />

      {/* Problems Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Common Growing Pains
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                variants={staggerItem}
                className="relative bg-red-900/10 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 hover:border-red-500/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-red-500/20 rounded-lg">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{problem.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Transition Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-16"
      >
        <div className="flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-red-500/50 to-electric-500/50 mb-4" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-gradient-to-br from-electric-600 to-purple-600 rounded-full"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </motion.div>
          <div className="w-px h-12 bg-gradient-to-b from-electric-500/50 to-transparent mt-4" />
        </div>
      </motion.div>

      {/* Solutions Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Our <span className="text-electric-400">Solutions</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.title}
                variants={staggerItem}
                className="relative group bg-purple-900/30 backdrop-blur-sm border border-purple-700/50 rounded-xl p-6 hover:border-electric-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-500/0 to-purple-500/0 group-hover:from-electric-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-xl mb-5 bg-gradient-to-br from-electric-600 to-purple-600 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-electric-400 transition-colors">
                    {solution.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-5 text-sm">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-electric-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* CTA */}
      <CTABlock
        title="Ready to Automate Your Operations?"
        description="See exactly how we'll transform your workflows in a free 30-minute strategy session"
        primaryCTA={{
          label: 'See Our Process',
          onClick: () => scrollToSection('process')
        }}
        secondaryCTA={{
          label: 'View Pricing',
          onClick: () => scrollToSection('pricing')
        }}
        variant="highlighted"
      />
    </SectionWrapper>
  )
}

export default ProblemSolution
