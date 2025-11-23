'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Card from '../ui/Card'
import { Award, Code2, Database } from 'lucide-react'

const team = [
  {
    name: 'Shahar Saadon',
    role: 'Senior Full-Stack Developer & AI/Automation Architect',
    expertise: ['Backend Systems', 'Workflow Design', 'LLM-based Automations'],
    description: 'Specialized in building scalable AI agents and complex workflow orchestration systems.',
  },
  {
    name: 'Liran Neta',
    role: 'Data Engineer & Automation Specialist',
    badge: 'ex-8200',
    expertise: ['Data Enrichment', 'Analytics', 'ML Pipelines'],
    description: 'Expert in data processing pipelines and analytics infrastructure from military intelligence background.',
  },
]

const Team = () => {
  return (
    <section id="team" className="py-32 bg-navy-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Expert Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Battle-tested engineers with proven track records in AI, automation, and data engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-500 font-medium mb-3">{member.role}</p>
                  </div>
                  {member.badge && (
                    <div className="flex items-center space-x-2 px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-full">
                      <Award className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-bold text-orange-500">{member.badge}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">{member.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-400 mb-3">Core Expertise:</p>
                  {member.expertise.map((skill) => (
                    <div key={skill} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3" />
                      <span className="text-gray-400">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <Code2 className="w-8 h-8 text-cyan-500 mb-2" />
            <p className="text-2xl font-bold text-white">10+ Years</p>
            <p className="text-sm text-gray-400">Combined Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <Database className="w-8 h-8 text-cyan-500 mb-2" />
            <p className="text-2xl font-bold text-white">50+ Projects</p>
            <p className="text-sm text-gray-400">Successfully Delivered</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-8 h-8 text-cyan-500 mb-2" />
            <p className="text-2xl font-bold text-white">Enterprise</p>
            <p className="text-sm text-gray-400">Certified Partners</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Team
