'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'

const caseStudies = [
  {
    id: 1,
    quote: "Working with this team has been transformative. They didn't just build a system—they became a true partner in our growth journey. Their deep understanding of our challenges and their commitment to our success made all the difference. I can call them anytime, and they're always there.",
    name: "Ben Buaron",
    title: "CEO & Founder",
    department: "Windmill Growth",
    company: "Growth Partner Since 2024",
    photo: "/assets/profile-icons/ben-buaron.jpeg",
    relationship: "Strategic Partner",
    connection: "Long-term Collaboration",
    color: "bg-gradient-to-br from-blue-600 to-violet-600"
  },
  {
    id: 2,
    quote: "What stands out most is their genuine care about our success. They took the time to truly understand our business and built something that fit us perfectly. The relationship we've built goes beyond vendor-client—it's a real partnership based on trust.",
    name: "Elad Barak",
    title: "Operations Director",
    department: "SaleUp",
    company: "Trusted Partner",
    photo: "/assets/profile-icons/elad-barak.jpg",
    relationship: "Trusted Advisor",
    connection: "Ongoing Partnership",
    color: "bg-gradient-to-br from-violet-600 to-purple-600"
  },
  {
    id: 3,
    quote: "They're not just developers—they're problem solvers who genuinely care. From day one, they invested time in understanding our community and our vision. Their responsiveness and dedication made this collaboration incredibly smooth and rewarding.",
    name: "Lior Vaknin",
    title: "CEO & Co-Founder",
    department: "SuperPower",
    company: "Innovation Partner",
    photo: "/assets/profile-icons/lior-vaknin.jpg",
    relationship: "Close Collaborator",
    connection: "Continuous Support",
    color: "bg-gradient-to-br from-purple-600 to-pink-600"
  }
]

const CaseStudyLeaders = () => {
  return (
    <section className="py-20 md:py-32 section-light border-t border-violet-100/60">
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
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <div className="badge mb-4 sm:mb-6 shadow-sm">
            <span>Our Partners</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-neutral-900 mb-3 sm:mb-4 tracking-tight">
            Built on{' '}
            <span className="text-gradient">
              Trust & Partnership
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            These aren't just clients—they're partners we've grown with. Here's what they say about working together.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4 md:items-stretch">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover group relative overflow-hidden flex flex-col h-full"
            >
              {/* Relationship Badges - Top */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-300 rounded-lg shadow-sm">
                  <p className="text-xs font-bold text-violet-700 whitespace-nowrap">
                    {study.relationship}
                  </p>
                </div>
                {study.connection && (
                  <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg shadow-sm">
                    <p className="text-xs font-bold text-blue-700 whitespace-nowrap">
                      {study.connection}
                    </p>
                  </div>
                )}
              </div>

              {/* Quote - Grows to fill space */}
              <p className="text-neutral-600 italic mb-6 text-sm sm:text-base leading-relaxed flex-grow">
                "{study.quote}"
              </p>

              {/* Divider */}
              <div className="border-t border-violet-100 my-6"></div>

              {/* Person Info - Bottom - More Prominent */}
              <div className="flex flex-col items-center text-center">
                {/* Avatar with Photo - Enhanced & Centered */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl flex-shrink-0 border-4 border-white ring-4 ring-violet-200 group-hover:ring-violet-300 transition-all duration-300 mb-4">
                  <img
                    src={study.photo}
                    alt={study.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/10 group-hover:to-purple-600/10 transition-all duration-300" />
                </div>

                {/* Name & Details - Centered */}
                <div className="w-full">
                  <h4 className="font-bold text-neutral-900 text-lg sm:text-xl mb-1">
                    {study.name}
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-600 font-medium mb-1">
                    {study.title}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 mb-2">
                    {study.department}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-full">
                    <p className="text-xs font-semibold text-violet-600">
                      {study.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CaseStudyLeaders
