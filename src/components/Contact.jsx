import React,{useState} from 'react'

const Contact = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // TODO: connect to backend (Laravel / API)
  };
  return (
  <section className="bg-gray-900/30 py-20 lg:py-32" id='contact'>
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white ">
            Contact Insura
          </h2>
          <p className="text-gray-300 mb-8">
            Have questions or want a demo? Fill out the form and we’ll get back
            to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-[2px] border-soft-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-[2px] border-soft-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              name="company"
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border-[2px] border-soft-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border-[2px] border-soft-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-spotify-green text-white px-6 py-2.5 rounded-lg font-bold hover:bg-soft-green transition-all text-center" 
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact