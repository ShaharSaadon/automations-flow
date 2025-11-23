'use client'

import Container from '../ui/Container'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-navy-900 border-t border-navy-700 relative">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <Container className="relative z-10">
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-xl">AF</span>
                </div>
                <span className="text-xl font-bold text-white">Automations Flow</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Building the future of AI-powered automation.
                <br />
                Boutique consultancy delivering enterprise-grade solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('technology')}
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    Technology
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('team')}
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-4">Get Started</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:shahar@automationsflow.com"
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-cyan-500 transition-colors">
                    Book a Call
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-navy-700 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Automations Flow. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-500 transition-colors group"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 bg-navy-800 border border-navy-600 rounded-lg flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
