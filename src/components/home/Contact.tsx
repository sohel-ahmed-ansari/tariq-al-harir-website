import { useState, type FormEvent } from "react";

import { useScrollReveal } from "../../hooks/useScrollReveal";

export function Contact() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLFormElement>();
  const infoRef = useScrollReveal<HTMLDivElement>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "import",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, you would send this to your backend
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        inquiryType: "import",
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#b8860b]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#b8860b]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <span className="mb-4 inline-block font-sans text-sm font-semibold tracking-widest text-[#b8860b] uppercase">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Let&apos;s Start <span className="gold-gradient-text">Trading</span>
          </h2>
          <div className="section-divider mt-6" />
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-gray-600">
            Whether you&apos;re looking to import quality foodstuff to your
            market or export products to Dubai and beyond, we&apos;re here to
            help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="reveal-left rounded-2xl border border-gray-100 bg-white p-8 shadow-lg"
          >
            <h3 className="mb-6 font-serif text-xl font-semibold text-gray-900">
              Send us a Message
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-sans text-sm font-medium text-gray-700"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-gray-900 placeholder-gray-400 transition-all focus:border-[#b8860b] focus:bg-white focus:ring-1 focus:ring-[#b8860b] focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-sans text-sm font-medium text-gray-700"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-gray-900 placeholder-gray-400 transition-all focus:border-[#b8860b] focus:bg-white focus:ring-1 focus:ring-[#b8860b] focus:outline-none"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-sans text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-gray-900 placeholder-gray-400 transition-all focus:border-[#b8860b] focus:bg-white focus:ring-1 focus:ring-[#b8860b] focus:outline-none"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block font-sans text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-gray-900 placeholder-gray-400 transition-all focus:border-[#b8860b] focus:bg-white focus:ring-1 focus:ring-[#b8860b] focus:outline-none"
                  placeholder="Your Company Ltd."
                />
              </div>

              {/* Inquiry Type */}
              <div className="sm:col-span-2">
                <label className="mb-2 block font-sans text-sm font-medium text-gray-700">
                  Inquiry Type *
                </label>
                <div className="flex flex-wrap gap-4">
                  {["import", "export", "both", "other"].map((type) => (
                    <label
                      key={type}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type}
                        checked={formData.inquiryType === type}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            inquiryType: e.target.value,
                          })
                        }
                        className="h-4 w-4 border-gray-300 text-[#b8860b] focus:ring-[#b8860b]"
                      />
                      <span className="font-sans text-sm text-gray-600 capitalize">
                        {type === "both" ? "Import & Export" : type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block font-sans text-sm font-medium text-gray-700"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-gray-900 placeholder-gray-400 transition-all focus:border-[#b8860b] focus:bg-white focus:ring-1 focus:ring-[#b8860b] focus:outline-none"
                  placeholder="Tell us about your requirements, products of interest, quantities, etc."
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`btn-primary w-full ${
                    isSubmitted ? "!bg-green-600" : ""
                  } disabled:cursor-not-allowed disabled:opacity-70`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Contact Information */}
          <div ref={infoRef} className="reveal-right space-y-8">
            {/* Quick Contact */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="mb-6 font-serif text-xl font-semibold text-gray-900">
                Quick Contact
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+971544646134"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#b8860b]/10 text-[#b8860b] transition-all group-hover:bg-[#1a1a2e] group-hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-900">Phone</p>
                    <p className="font-sans text-[#b8860b]">+971 54 464 6134</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/971544646134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-all group-hover:bg-[#25D366] group-hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-900">
                      WhatsApp
                    </p>
                    <p className="font-sans text-[#25D366]">Chat with us now</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:sameermehfooz@gmail.com"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#b8860b]/10 text-[#b8860b] transition-all group-hover:bg-[#1a1a2e] group-hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-900">Email</p>
                    <p className="font-sans text-[#b8860b]">
                      sameermehfooz@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Address */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="mb-4 font-serif text-xl font-semibold text-gray-900">
                Office Location
              </h3>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#b8860b]/10 text-[#b8860b]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-gray-600">
                    Office 236SH-R16
                    <br />
                    Dubai Industrial City
                    <br />
                    Saih Shuaib 2
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="mb-4 font-serif text-xl font-semibold text-gray-900">
                Business Hours
              </h3>
              <div className="space-y-2 font-sans text-gray-600">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span className="font-medium text-[#b8860b]">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-[#b8860b]">
                    10:00 AM - 2:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
