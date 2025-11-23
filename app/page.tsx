import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import CaseStudiesEnhanced from '@/components/sections/CaseStudiesEnhanced'
import TechStack from '@/components/sections/TechStack'
import Infrastructure from '@/components/sections/Infrastructure'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden page-gradient">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <CaseStudiesEnhanced />
      <Process />
      <TechStack />
      <Infrastructure />
      <Team />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
