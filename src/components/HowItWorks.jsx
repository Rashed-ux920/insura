import React from 'react'

/**
 * How It Works Section Component
 * Step-by-step process explanation
 */
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Capture Client Information',
      description: 'Import or manually enter client data into Insura\'s centralized database. Our intuitive interface makes data entry fast and error-free.',
    },
    {
      number: '02',
      title: 'Automatically Generate ACORD-Compliant Forms',
      description: 'Select a form type and watch as Insura automatically populates all fields using your client data. ACORD schema validation ensures compliance.',
    },
    {
      number: '03',
      title: 'Export PDFs and Reuse Data',
      description: 'Generate professional PDF forms instantly. All data is stored and can be reused across multiple forms, saving hours of repetitive work.',
    },
    {
      number: '04',
      title: 'Launch Targeted Email Campaigns',
      description: 'Use your client data to create segmented email campaigns. Track performance, automate follow-ups, and grow your client relationships.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How <span className="text-spotify-green">Insura</span> Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Four simple steps to transform your insurance workflow
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 group"
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-spotify-green/10 border-2 border-spotify-green flex items-center justify-center group-hover:bg-spotify-green/20 transition-colors">
                    <span className="text-spotify-green font-bold text-xl lg:text-2xl">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-6 lg:p-8 group-hover:border-spotify-green/50 transition-all">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-white group-hover:text-spotify-green transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
