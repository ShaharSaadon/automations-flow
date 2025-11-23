'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { ArrowUpRight, TrendingUp, Clock, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    company: 'E-Commerce Platform',
    industry: 'Retail',
    challenge: 'Manual customer support overwhelmed team with 500+ daily inquiries',
    solution: 'WhatsApp AI agent with RAG-powered knowledge base and CRM integration',
    results: [
      { icon: TrendingUp, metric: '85%', label: 'Response Time Reduction' },
      { icon: Clock, metric: '24/7', label: 'Automated Support' },
      { icon: DollarSign, metric: '$40K', label: 'Monthly Savings' },
    ],
    gradient: 'from-cyan-500/10 to-blue-500/10',
    borderGradient: 'from-cyan-500 to-blue-500',
  },
  {
    company: 'SaaS Startup',
    industry: 'Technology',
    challenge: 'Lead qualification and CRM updates consumed 20 hours/week of sales time',
    solution: 'AI-powered lead enrichment pipeline with Monday.com automation',
    results: [
      { icon: TrendingUp, metric: '10x', label: 'Lead Processing Speed' },
      { icon: Clock, metric: '90%', label: 'Time Saved' },
      { icon: DollarSign, metric: '300%', label: 'ROI in 3 Months' },
    ],
    gradient: 'from-orange-500/10 to-red-500/10',
    borderGradient: 'from-orange-500 to-red-500',
  },
  {
    company: 'Professional Services',
    industry: 'Consulting',
    challenge: 'Complex data extraction from 1000+ client documents monthly',
    solution: 'Custom ML pipeline with intelligent parsing and Airtable integration',
    results: [
      { icon: TrendingUp, metric: '95%', label: 'Accuracy Rate' },
      { icon: Clock, metric: '40hrs', label: 'Saved Weekly' },
      { icon: DollarSign, metric: '99.9%', label: 'Error Reduction' },
    ],
    gradient: 'from-purple-500/10 to-pink-500/10',
    borderGradient: 'from-purple-500 to-pink-500',
  },
]

const CaseStudies = () => {
  return (
    <section className="py-32 bg-navy-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Case studies from clients who transformed their operations with AI automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-navy-700/50 border border-navy-600 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{study.company}</h3>
                      <p className="text-sm text-cyan-500">{study.industry}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  {/* Challenge */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Challenge
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Solution
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="space-y-4 pt-6 border-t border-navy-600">
                    {study.results.map((result) => {
                      const Icon = result.icon
                      return (
                        <div key={result.label} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Icon className="w-4 h-4 text-cyan-500" />
                            <span className="text-xs text-gray-400">{result.label}</span>
                          </div>
                          <span className="text-lg font-bold text-white">{result.metric}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Want to see detailed case studies and technical breakdowns?
          </p>
          <Button
            variant="outline"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Request Full Case Studies
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

export default CaseStudies
