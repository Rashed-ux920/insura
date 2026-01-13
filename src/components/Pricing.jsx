import React from 'react'

const Pricing = () => {
  return (
<section className="bg-gray-900/30 py-20 lg:py-32" id="pricing">
  <div className="max-w-5xl mx-auto px-4">
    <div className="bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-spotify-green">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-soft-green">
          Our Plans
        </h2>
        <p className="text-gray-300 mt-3">
          Fill out the form and our team will get back to you shortly.
        </p>
      </div>

      {/* Pricing Card */}
      <div className="flex justify-center m-4 ">
        <div className="w-full max-w-sm rounded-xl border border-spotify-green bg-deep-black p-8 shadow-lg">
          
          <h3 className="text-soft-green text-center font-bold text-2xl mb-2">
            <i className="fa-solid fa-circle-user text-white mr-2"></i>
            Starter
          </h3>

          <p className="text-3xl font-bold text-soft-green text-center mb-2">
            $29<span className="text-sm font-medium text-gray-400"> / month</span>
          </p>

          <p className="text-gray-300 text-center mb-6">
            Best for solo agents & small agencies
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-300 text-sm mb-8">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              Client data management
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              ACORD form auto-filling (limited)
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              Basic contact & policy storage
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              Email support
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              Secure cloud storage
            </li>
          </ul>

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href="#"
              className="flex-1 text-center rounded-lg border border-spotify-green py-2 text-sm text-soft-green hover:bg-spotify-green hover:text-deep-black transition"
            >
              Learn More
            </a>
            <a
              href="#"
              className="flex-1 text-center rounded-lg bg-spotify-green py-2 text-sm font-semibold text-deep-black hover:bg-soft-green transition"
            >
              Get the Plan
            </a>
          </div>

        </div>
      </div>
      {/* Pricing Card */}
      <div className="flex justify-center m-4 ">
        <div className="w-full max-w-sm rounded-xl border border-spotify-green bg-deep-black p-8 shadow-lg">
          
          <h3 className="text-soft-green text-center font-bold text-2xl mb-2">
            <i className="fa-solid fa-circle-user text-white mr-2"></i>
            Starter
          </h3>

          <p className="text-3xl font-bold text-soft-green text-center mb-2">
            $29<span className="text-sm font-medium text-gray-400"> / month</span>
          </p>

          <p className="text-gray-300 text-center mb-6">
            Best for solo agents & small agencies
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-300 text-sm mb-8">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              Client data management
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              ACORD form auto-filling (limited)
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              Basic contact & policy storage
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              Email support
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-soft-green"></i>
              Secure cloud storage
            </li>
          </ul>

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href="#"
              className="flex-1 text-center rounded-lg border border-spotify-green py-2 text-sm text-soft-green hover:bg-spotify-green hover:text-deep-black transition"
            >
              Learn More
            </a>
            <a
              href="#"
              className="flex-1 text-center rounded-lg bg-spotify-green py-2 text-sm font-semibold text-deep-black hover:bg-soft-green transition"
            >
              Get the Plan
            </a>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</section>

  )
}

export default Pricing