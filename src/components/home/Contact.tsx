import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { CONTACT } from "../../constants";
import { WhatsAppIcon } from "../icons";
import { Button, Container } from "../ui";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      title: "Call Us",
      value: CONTACT.phoneDisplay,
      href: CONTACT.phoneLink,
      icon: <Phone className="h-6 w-6" />,
    },
    {
      title: "WhatsApp",
      value: CONTACT.phoneDisplay,
      href: CONTACT.whatsapp,
      icon: <WhatsAppIcon className="h-6 w-6" />,
    },
    {
      title: "Email Us",
      value: CONTACT.email,
      href: CONTACT.emailLink,
      icon: <Mail className="h-6 w-6" />,
    },
    {
      title: "Visit Us",
      value: "Office 16, Building 236SH-R, Dubai Industrial City, Dubai, UAE",
      href: "#",
      icon: <MapPin className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-gray-50 py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Info */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            {/* Section Label */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#1a5f2a]" />
              <span className="font-medium tracking-wider text-[#1a5f2a] uppercase">
                Contact Us
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Let&apos;s Start a Conversation
            </h2>

            {/* Description */}
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Whether you&apos;re looking to import quality foodstuff to Dubai
              or export UAE products globally, we&apos;re here to help. Get in
              touch with our team for competitive quotes and reliable service.
            </p>

            {/* Contact Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`group flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all duration-500 hover:border-[#1a5f2a]/20 hover:shadow-lg ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a5f2a]/10 text-[#1a5f2a] transition-colors group-hover:bg-[#1a5f2a] group-hover:text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-gray-500">
                      {info.title}
                    </p>
                    <p className="font-medium text-gray-900">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={`transition-all delay-300 duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="rounded-2xl bg-white p-8 shadow-xl md:p-10">
              <h3 className="font-display mb-6 text-2xl font-bold text-gray-900">
                Request a Quote
              </h3>

              <form
                action={`https://formsubmit.co/${CONTACT.email}`}
                method="POST"
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Quote Request from Website"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://tariqalharir.com/#contact"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-[#1a5f2a] focus:ring-2 focus:ring-[#1a5f2a]/20 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-[#1a5f2a] focus:ring-2 focus:ring-[#1a5f2a]/20 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-[#1a5f2a] focus:ring-2 focus:ring-[#1a5f2a]/20 focus:outline-none"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                {/* Product Interest */}
                <div>
                  <label
                    htmlFor="product"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Product Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-[#1a5f2a] focus:ring-2 focus:ring-[#1a5f2a]/20 focus:outline-none"
                  >
                    <option value="">Select a product category</option>
                    <option value="fruits-vegetables">
                      Fresh Fruits & Vegetables
                    </option>
                    <option value="frozen-meat">Frozen Meat</option>
                    <option value="eggs">Eggs</option>
                    <option value="sugar-rice">Sugar & Rice</option>
                    <option value="flour-bakery">
                      Flour & Bakery Products
                    </option>
                    <option value="dried-snacks">Dried Fruits & Snacks</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-[#1a5f2a] focus:ring-2 focus:ring-[#1a5f2a]/20 focus:outline-none"
                    placeholder="Tell us about your requirements, quantities, and any specific needs..."
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
