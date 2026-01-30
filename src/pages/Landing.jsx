import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import TechnicalHighlights from '../components/TechnicalHighlights'
import DashboardPreview from '../components/DashboardPreview'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'

const Landing = () =>  {
  return (
   <>
        <Hero />
        <Features />
        <HowItWorks />
        <TechnicalHighlights />
        <DashboardPreview />
        <Pricing />
        <Contact />
        <CTA />
   </>
  )
}

export default Landing