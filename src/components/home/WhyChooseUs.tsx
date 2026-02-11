import {
  ArrowRightLeft,
  CircleDollarSign,
  FileText,
  Globe,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container } from "../ui";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Strategic Location",
    description:
      "Based in Dubai, UAE - a global trade hub connecting Asia, Europe, and Africa with world-class port facilities.",
    icon: <Globe className="h-7 w-7" />,
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensure only the finest products reach our customers. We maintain strict standards.",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct relationships with producers and efficient logistics enable us to offer the best prices in the market.",
    icon: <CircleDollarSign className="h-7 w-7" />,
  },
  {
    title: "Licensed & Compliant",
    description:
      "Fully licensed by Dubai DED with all necessary certifications for legal and compliant trading operations.",
    icon: <FileText className="h-7 w-7" />,
  },
  {
    title: "Reliable Logistics",
    description:
      "Efficient supply chain management with proper cold storage and timely delivery to maintain product freshness.",
    icon: <ArrowRightLeft className="h-7 w-7" />,
  },
  {
    title: "Customer Focus",
    description:
      "Dedicated support team available 24/7 to address your queries and ensure smooth transactions every time.",
    icon: <Users className="h-7 w-7" />,
  },
];

const WhyChooseUs = () => {
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

  return (
    <section id="why-us" ref={sectionRef} className="bg-white py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#1a5f2a]" />
            <span className="font-medium tracking-wider text-[#1a5f2a] uppercase">
              Why Choose Us
            </span>
            <span className="h-px w-8 bg-[#1a5f2a]" />
          </div>
          <h2 className="font-display mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Your Trusted Trading Partner
          </h2>
          <p className="text-lg text-gray-600">
            Experience the difference of working with a professional, licensed
            foodstuff trading company dedicated to your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-700 hover:border-[#1a5f2a]/20 hover:shadow-xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a5f2a]/10 text-[#1a5f2a] transition-colors group-hover:bg-[#1a5f2a] group-hover:text-white">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-display mb-3 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
