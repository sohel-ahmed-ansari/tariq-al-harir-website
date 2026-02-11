import { Mail, /* MapPin, */ Phone } from "lucide-react";
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
    // TODO: Uncomment when office address is finalised
    // {
    //   title: "Visit Us",
    //   value: "Office 16, Building 236SH-R, Dubai Industrial City, Dubai, UAE",
    //   href: "#",
    //   icon: <MapPin className="h-6 w-6" />,
    // },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-gray-50 py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Section Label */}
          <div
            className={`mb-4 inline-flex items-center gap-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
          >
            <span className="h-px w-8 bg-[#1a5f2a]" />
            <span className="font-medium tracking-wider text-[#1a5f2a] uppercase">
              Contact Us
            </span>
            <span className="h-px w-8 bg-[#1a5f2a]" />
          </div>

          {/* Title */}
          <h2
            className={`font-display mb-6 text-3xl font-bold text-gray-900 transition-all delay-100 duration-700 md:text-4xl lg:text-5xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Let&apos;s Start a Conversation
          </h2>

          {/* Description */}
          <p
            className={`mb-10 text-lg leading-relaxed text-gray-600 transition-all delay-200 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Whether you&apos;re looking to import quality foodstuff to Dubai or
            export UAE products globally, we&apos;re here to help. Reach out to
            us on WhatsApp for quick responses and competitive quotes.
          </p>

          {/* WhatsApp CTA */}
          <div
            className={`mb-12 transition-all delay-300 duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <Button
              as="a"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="inline-flex px-8 py-4 text-lg"
            >
              <WhatsAppIcon className="mr-3 h-6 w-6" />
              Chat With Us on WhatsApp
            </Button>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {contactInfo.map((info, index) => (
            <a
              key={info.title}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={
                info.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`group flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-6 text-center transition-all duration-500 hover:border-[#1a5f2a]/20 hover:shadow-lg ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a5f2a]/10 text-[#1a5f2a] transition-colors group-hover:bg-[#1a5f2a] group-hover:text-white">
                {info.icon}
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500">
                  {info.title}
                </p>
                <p className="font-medium break-all text-gray-900">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Contact;
