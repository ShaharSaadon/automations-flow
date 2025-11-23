'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Container from '../ui/Container'
import { Bot, MessageSquare, Database, Rocket, Workflow, PlayCircle, X } from 'lucide-react'

interface Service {
  icon: typeof Bot
  title: string
  tagline: string
  description: string
  features: string[]
  outcomes: string[]
  videoUrl?: string
  videoPlaceholder?: string
}

const services: Service[] = [
  {
    icon: Bot,
    title: 'AI & Automation',
    tagline: 'Your AI workforce that works 24/7',
    description: 'Deploy intelligent AI agents that handle complex decision-making, automate repetitive tasks, and scale your operations without scaling headcount.',
    features: [
      'Custom AI agent development with RAG (Retrieval-Augmented Generation)',
      'Workflow automation using LangChain, LangGraph, and CrewAI',
      'Intelligent document processing and data extraction',
      'Predictive analytics and forecasting models',
      'Natural language processing for customer interactions',
    ],
    outcomes: [
      '70% reduction in manual processing time',
      '24/7 automated decision-making',
      '10x faster customer response rates',
    ],
    videoPlaceholder: 'https://placehold.co/800x450/685bff/ffffff?text=AI+Agent+Demo',
  },
  {
    icon: MessageSquare,
    title: 'CRM Automation',
    tagline: 'Never lose a lead or miss a follow-up',
    description: 'Connect your entire revenue stack with intelligent automation that captures, enriches, and nurtures leads while your team focuses on closing deals.',
    features: [
      'Automated lead capture and enrichment pipelines',
      'Real-time dashboards with Monday.com, HubSpot, Salesforce',
      'Multi-platform CRM synchronization and data unification',
      'Customer journey automation with smart triggers',
      'Sales pipeline optimization with AI-powered insights',
    ],
    outcomes: [
      '3x improvement in lead response time',
      '40% increase in qualified opportunities',
      'Zero data entry for sales teams',
    ],
    videoPlaceholder: 'https://placehold.co/800x450/8b7fff/ffffff?text=CRM+Automation+Demo',
  },
  {
    icon: Database,
    title: 'Data Enrichment',
    tagline: 'Turn incomplete data into actionable intelligence',
    description: 'Automatically enrich, validate, and maintain data quality across your entire tech stack with advanced parsing and multi-source integration.',
    features: [
      'Automated data validation and cleansing pipelines',
      'Multi-source enrichment (LinkedIn, Clearbit, Apollo, ZoomInfo)',
      'Contact and company information enhancement',
      'Duplicate detection and intelligent merging',
      'Real-time data quality monitoring and alerts',
    ],
    outcomes: [
      '95% data accuracy across all systems',
      '60% reduction in data maintenance costs',
      'Real-time enrichment in under 2 seconds',
    ],
    videoPlaceholder: 'https://placehold.co/800x450/acb0ff/ffffff?text=Data+Enrichment+Demo',
  },
  {
    icon: Rocket,
    title: 'GTM & Social Media',
    tagline: 'Automate your go-to-market engine',
    description: 'Scale your marketing and sales outreach with intelligent automation that personalizes at scale and optimizes based on real-time data.',
    features: [
      'Multi-channel social media automation and scheduling',
      'Content distribution across LinkedIn, Twitter, Facebook',
      'Social listening and sentiment analysis',
      'Campaign performance tracking and optimization',
      'Influencer identification and audience analytics',
    ],
    outcomes: [
      '5x increase in social engagement',
      '80% time saved on content distribution',
      'Data-driven campaign optimization',
    ],
    videoPlaceholder: 'https://placehold.co/800x450/685bff/ffffff?text=GTM+Automation+Demo',
  },
  {
    icon: Workflow,
    title: 'MCP (Model Context Protocol)',
    tagline: 'Give your AI the power to use your tools',
    description: 'Build custom MCP servers that let AI agents interact with your internal tools, databases, and APIs - making AI truly productive in your environment.',
    features: [
      'Custom MCP server development for your tech stack',
      'AI model context management and optimization',
      'Multi-model orchestration (OpenAI, Anthropic, Gemini)',
      'Context-aware AI applications with tool access',
      'Enterprise AI infrastructure setup and scaling',
    ],
    outcomes: [
      'AI agents that use your internal tools',
      '90% reduction in integration complexity',
      'Seamless human-AI collaboration',
    ],
    videoPlaceholder: 'https://placehold.co/800x450/8b7fff/ffffff?text=MCP+Demo',
  },
]

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
    setSelectedVideo(null)
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
          className="text-center mb-16 sm:mb-20 px-4"
        >
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 bg-white border border-violet-200 rounded-full mb-4 sm:mb-6 shadow-sm">
            <span className="text-[10px] sm:text-xs text-violet-700 font-medium tracking-wider uppercase">Our Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Enterprise-grade automation solutions that deliver measurable results
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-0 space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedIndex === index
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Enhanced service card with premium feel */}
                <div className="bg-white border border-violet-100 hover:border-violet-300 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-violet-100/50">
                  {/* Header - Always visible with more breathing room */}
                  <div className="p-8 sm:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                      {/* Left side - Icon, Title, Description */}
                      <div className="flex-1">
                        <div className="flex items-start space-x-5 mb-6">
                          {/* Larger, more prominent icon */}
                          <div className="flex-shrink-0">
                            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 group-hover:border-violet-200 group-hover:shadow-lg group-hover:shadow-violet-100/50 transition-all duration-300">
                              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-violet-600 group-hover:text-violet-700 transition-colors" />
                            </div>
                          </div>

                          {/* Title & Tagline */}
                          <div className="flex-1 pt-1">
                            <h3 className="text-2xl sm:text-3xl font-display text-neutral-900 mb-2 tracking-tight group-hover:text-violet-700 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm sm:text-base text-violet-600 font-medium mb-3">
                              {service.tagline}
                            </p>
                            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Key Outcomes - Always visible */}
                        <div className="bg-gradient-to-br from-violet-50/50 to-purple-50/30 rounded-2xl p-6 border border-violet-100/50">
                          <p className="text-xs font-medium text-violet-700 uppercase tracking-wider mb-3">
                            Key Outcomes
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {service.outcomes.map((outcome, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <span className="text-violet-500 mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-xs sm:text-sm text-neutral-700 font-medium">
                                  {outcome}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right side - Video thumbnail */}
                      {service.videoPlaceholder && (
                        <div className="mt-6 lg:mt-0 lg:w-80 xl:w-96 flex-shrink-0">
                          <button
                            onClick={() => openVideoModal(service.videoPlaceholder!)}
                            className="relative group/video w-full aspect-video rounded-2xl overflow-hidden border-2 border-violet-100 hover:border-violet-300 transition-all duration-300 hover:shadow-xl"
                          >
                            <img
                              src={service.videoPlaceholder}
                              alt={`${service.title} demonstration`}
                              className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-500"
                            />
                            {/* Play overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-violet-900/20 to-transparent flex items-center justify-center">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl"
                              >
                                <PlayCircle className="w-8 h-8 text-violet-600" />
                              </motion.div>
                            </div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white text-xs font-medium drop-shadow-lg">
                                Watch Demo
                              </p>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Toggle button for detailed features */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-6 w-full flex items-center justify-center space-x-2 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors group/expand"
                    >
                      <span>{isExpanded ? 'Show Less' : 'View All Features'}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                  </div>

                  {/* Expandable detailed features */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 sm:px-10 pb-8 sm:pb-10">
                          <div className="border-t border-violet-100 pt-8">
                            <p className="text-sm font-medium text-violet-700 mb-6 uppercase tracking-wider">
                              Detailed Capabilities
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {service.features.map((feature, idx) => (
                                <motion.div
                                  key={feature}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex items-start space-x-3 p-4 rounded-xl bg-violet-50/50 border border-violet-100/50 hover:border-violet-200 hover:bg-violet-50 transition-all"
                                >
                                  <span className="text-violet-500 mt-0.5 flex-shrink-0 text-lg">▸</span>
                                  <span className="text-sm text-neutral-700 leading-relaxed">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom accent gradient */}
                  <div className={`h-1.5 bg-gradient-to-r from-[#685bff] via-[#8b7fff] to-[#acb0ff] transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 text-white hover:text-violet-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Video container */}
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for now - replace with actual video embed */}
                <img
                  src={selectedVideo}
                  alt="Service demonstration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <PlayCircle className="w-20 h-20 mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-75">Video demo coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Services
