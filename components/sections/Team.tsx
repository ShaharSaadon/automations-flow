'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Zap, Users } from 'lucide-react'

const team = [
  {
    name: 'Shahar Saadon',
    role: 'Founder & Lead Architect',
    badge: 'SS',
    expertise: ['AI & Automation', 'Data Engineering', 'System Architecture', 'WhatsApp Integration'],
    description: 'Expert in AI automation, data engineering, and scalable system architecture. Passionate about building reliable, data-driven solutions that transform business operations.',
  },
  {
    name: 'Liran Neta',
    role: 'Co-Founder & Strategy Lead',
    badge: 'LN',
    expertise: ['Business Strategy', 'CRM Integration', 'Process Optimization', 'GTM & Analytics'],
    description: 'Specializes in business automation strategy, CRM integration, and digital transformation. Focused on delivering measurable ROI through intelligent automation.',
  },
]

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 section-gradient border-t border-violet-100">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
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
            <Users className="w-3.5 h-3.5 mr-2 text-violet-600" />
            <span>Our Experts</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Meet Our{' '}
            <span className="text-gradient">
              Team
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to delivering exceptional automation solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0 mb-12 sm:mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card card-hover h-full relative overflow-hidden">
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-50 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-2 group-hover:text-violet-700 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-violet-600 font-medium text-sm sm:text-base">{member.role}</p>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl shadow-violet flex-shrink-0">
                      <span className="text-lg sm:text-xl font-bold text-white">{member.badge}</span>
                    </div>
                  </div>

                  <p className="text-neutral-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {member.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-3">Core Expertise</p>
                    <div className="grid grid-cols-2 gap-2">
                      {member.expertise.map((skill) => (
                        <div key={skill} className="flex items-center text-xs sm:text-sm">
                          <Zap className="w-3.5 h-3.5 text-violet-500 mr-2 flex-shrink-0" />
                          <span className="text-neutral-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 sm:px-0"
        >
          <div className="card text-center p-4 sm:p-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-700 mb-1 sm:mb-2">10+</p>
            <p className="text-xs sm:text-sm text-neutral-600">Years Combined</p>
          </div>
          <div className="card text-center p-4 sm:p-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-700 mb-1 sm:mb-2">50+</p>
            <p className="text-xs sm:text-sm text-neutral-600">Projects Delivered</p>
          </div>
          <div className="card text-center p-4 sm:p-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-700 mb-1 sm:mb-2">15+</p>
            <p className="text-xs sm:text-sm text-neutral-600">Technologies</p>
          </div>
          <div className="card text-center p-4 sm:p-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-700 mb-1 sm:mb-2">100%</p>
            <p className="text-xs sm:text-sm text-neutral-600">Client Success</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Team
