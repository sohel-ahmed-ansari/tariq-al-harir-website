import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { COMPANY, CONTACT } from "../../constants";
import { WhatsAppIcon } from "../icons";
import { Button, Container } from "../ui";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
                  alt="Fresh produce at market"
                  className="h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all delay-300 duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            {/* Section Label */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#1a5f2a]" />
              <span className="font-medium tracking-wider text-[#1a5f2a] uppercase">
                About Us
              </span>
              <span className="h-px w-8 bg-[#1a5f2a]" />
            </div>

            {/* Title */}
            <h2 className="font-display mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Connecting Global Markets Through Quality Trade
            </h2>

            {/* Description */}
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              <span className="font-semibold text-[#1a5f2a]">
                {COMPANY.shortName}
              </span>{" "}
              - &quot;The {COMPANY.tagline}&quot; - evokes the legendary trade
              routes that connected civilizations. Based in{" "}
              {COMPANY.location.split(", ")[0]}, we continue this proud
              tradition by facilitating the import and export of premium
              foodstuff products.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              As a licensed LLC in the UAE, we specialize in trading fresh
              fruits, vegetables, frozen meat, eggs, sugar, flour, and a wide
              range of food products. Our strategic location in Dubai provides
              access to global markets, ensuring the finest products reach your
              doorstep.
            </p>

            {/* Features */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1a5f2a]/10">
                  <Check className="h-5 w-5 text-[#1a5f2a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    DED Licensed Company
                  </h4>
                  <p className="text-sm text-gray-600">
                    Fully licensed and compliant
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1a5f2a]/10">
                  <Check className="h-5 w-5 text-[#1a5f2a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Quality Assurance
                  </h4>
                  <p className="text-sm text-gray-600">
                    Premium products guaranteed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1a5f2a]/10">
                  <Check className="h-5 w-5 text-[#1a5f2a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Global Network
                  </h4>
                  <p className="text-sm text-gray-600">
                    Worldwide sourcing capabilities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1a5f2a]/10">
                  <Check className="h-5 w-5 text-[#1a5f2a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Competitive Pricing
                  </h4>
                  <p className="text-sm text-gray-600">
                    Best value for bulk orders
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              as="a"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
