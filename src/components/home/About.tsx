import { useEffect, useRef, useState } from "react";

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
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="container-custom">
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

              {/* Floating Card */}
              <div className="absolute -right-4 -bottom-6 rounded-xl bg-white p-6 shadow-xl md:-right-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a5f2a]/10">
                    <svg
                      className="h-7 w-7 text-[#1a5f2a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-[#1a5f2a]">
                      9+
                    </p>
                    <p className="text-sm text-gray-600">Trading Activities</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl bg-[#1a5f2a]/10" />
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
            </div>

            {/* Title */}
            <h2 className="font-display mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Connecting Global Markets Through Quality Trade
            </h2>

            {/* Description */}
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              <span className="font-semibold text-[#1a5f2a]">
                Tariq Al Harir
              </span>{" "}
              - &quot;The Silk Road&quot; - evokes the legendary trade routes
              that connected civilizations. Based in Dubai, we continue this
              proud tradition by facilitating the import and export of premium
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
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a5f2a]/10">
                  <svg
                    className="h-5 w-5 text-[#1a5f2a]"
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
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a5f2a]/10">
                  <svg
                    className="h-5 w-5 text-[#1a5f2a]"
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
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a5f2a]/10">
                  <svg
                    className="h-5 w-5 text-[#1a5f2a]"
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
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a5f2a]/10">
                  <svg
                    className="h-5 w-5 text-[#1a5f2a]"
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
            <a href="#contact" className="btn-primary">
              Partner With Us
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
