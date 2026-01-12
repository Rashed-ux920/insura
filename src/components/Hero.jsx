import React from 'react'

/**
 * Hero Section Component
 * Main landing section with headline, subheading, and CTAs
 */
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-deep-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-radial from-spotify-green/5 via-transparent to-transparent"></div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-spotify-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-spotify-green/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Automate Insurance Workflows.</span>
            <br />
            <span className="text-spotify-green">Eliminate Manual Forms.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Insura is a powerful SaaS platform designed for insurance agencies. 
            Automate client data management, generate ACORD-compliant forms instantly, 
            and launch targeted email campaigns—all from one centralized dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#cta"
              className="w-full sm:w-auto bg-spotify-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-soft-green transition-all green-glow-hover transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border-2 border-spotify-green text-spotify-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-spotify-green/10 transition-all"
            >
              Request Demo
            </a>
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-4">Trusted by insurance agencies nationwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-gray-500 font-semibold">ACORD Compliant</div>
              <div className="text-gray-500 font-semibold">SOC 2 Certified</div>
              <div className="text-gray-500 font-semibold">GDPR Ready</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
