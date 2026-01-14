import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TechnicalHighlights from './components/TechnicalHighlights'
import DashboardPreview from './components/DashboardPreview'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Pricing from './components/Pricing'


function App() {
  return (
    <div className="min-h-screen bg-deep-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TechnicalHighlights />
        <DashboardPreview />
        <Pricing />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
