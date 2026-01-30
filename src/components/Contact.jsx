import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
      return;
    }

    setIsLoading(true);

    // Submit logic here
    console.log(formData);

    setIsLoading(false);
  };

  return (
    <section className="bg-gray-900/30 py-20 lg:py-32" id="contact">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-soft-green/20">

          <h2 className="text-3xl font-bold text-white mb-2">
            Contact Insura
          </h2>
          <p className="text-gray-300 mb-8">
            Have questions or want a demo? Fill out the form and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              {errors.name && (
                <p className="mb-1 text-sm text-red-400">
                  {errors.name}
                </p>
              )}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-xl bg-deep-black text-white placeholder-gray-400 border-2 px-4 py-3 focus:outline-none focus:ring-2
                  ${errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-soft-green/50 focus:ring-soft-green"
                  }`}
              />
            </div>

            {/* Email */}
            <div>
              {errors.email && (
                <p className="mb-1 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-xl bg-deep-black text-white placeholder-gray-400 border-2 px-4 py-3 focus:outline-none focus:ring-2
                  ${errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-soft-green/50 focus:ring-soft-green"
                  }`}
              />
            </div>



            {/* Message */}
            <div>
              {errors.message && (
                <p className="mb-1 text-sm text-red-400">
                  {errors.message}
                </p>
              )}
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-xl bg-deep-black text-white placeholder-gray-400 border-2 px-4 py-3 focus:outline-none focus:ring-2 resize-none
                  ${errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-soft-green/50 focus:ring-soft-green"
                  }`}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-spotify-green text-white px-6 py-3 rounded-xl font-bold hover:bg-soft-green transition-all disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
