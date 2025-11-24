import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CaseStudiesEnhanced from '@/components/sections/CaseStudiesEnhanced';
import TechStack from '@/components/sections/TechStack';
import CaseStudyLeaders from '@/components/sections/CaseStudyLeaders';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden page-gradient">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      {/* <CaseStudiesEnhanced /> */}
      <TechStack />
      <CaseStudyLeaders />
      {/* <Team /> */}
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
