'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '../ui/Container'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import Button from '../ui/Button'
import { Mail, Calendar, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectSize: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-32 bg-navy-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-cyan-500/5 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Automation Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Ready to transform your business with AI and automation?
              <br />
              Start with a free consultation.
            </p>

            <div className="space-y-6 mb-8">
              <a
                href="mailto:shahar@automationsflow.com"
                className="flex items-center space-x-4 text-gray-400 hover:text-cyan-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-navy-800 border border-navy-600 rounded-lg flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us</p>
                  <p className="font-medium">shahar@automationsflow.com</p>
                </div>
              </a>

              <button className="flex items-center space-x-4 text-gray-400 hover:text-cyan-500 transition-colors group w-full text-left">
                <div className="w-12 h-12 bg-navy-800 border border-navy-600 rounded-lg flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Book a call</p>
                  <p className="font-medium">Schedule a strategy session</p>
                </div>
              </button>
            </div>

            <div className="bg-navy-800/50 border border-cyan-500/30 rounded-lg p-6">
              <h3 className="font-bold text-white mb-2">Consulting & Strategy</h3>
              <p className="text-sm text-gray-400">
                Not ready for a full project? We offer consulting services to help you plan your automation strategy.
              </p>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="projectSize" className="block text-sm font-medium text-gray-400 mb-2">
                  Project Size
                </label>
                <select
                  id="projectSize"
                  name="projectSize"
                  value={formData.projectSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select project size</option>
                  <option value="starter">Starter ($1,000)</option>
                  <option value="growth">Growth ($5,000)</option>
                  <option value="enterprise">Enterprise ($10,000)</option>
                  <option value="custom">Custom / Not sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and challenges..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-gray-400 text-center">
                We typically respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
