import { BadgeCheck, MapPin, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container } from "../ui";

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    value: "9+",
    label: "Trading Categories",
    icon: <Package className="h-8 w-8" strokeWidth={1.5} />,
  },
  {
    value: "UAE",
    label: "Based in Dubai",
    icon: <MapPin className="h-8 w-8" strokeWidth={1.5} />,
  },
  {
    value: "100%",
    label: "Quality Commitment",
    icon: <BadgeCheck className="h-8 w-8" strokeWidth={1.5} />,
  },
];

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 md:py-15"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a5f2a]/90" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
                {stat.icon}
              </div>
              <p className="font-display mb-2 text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="text-lg text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
