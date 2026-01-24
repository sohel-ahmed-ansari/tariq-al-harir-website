import { useEffect, useState, useRef } from "react";

import { useScrollReveal } from "../../hooks/useScrollReveal";

const stats = [
  {
    value: 9,
    suffix: "+",
    label: "Trading Activities",
    description: "Licensed categories",
  },
  {
    value: 50,
    suffix: "+",
    label: "Products Range",
    description: "Premium offerings",
  },
  {
    value: 100,
    suffix: "%",
    label: "Quality Assured",
    description: "Strict standards",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Always reachable",
  },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return { count, ref };
}

export function Stats() {
  const titleRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-[#1a1a2e] py-20">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="reveal mb-12 text-center">
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Trusted by Businesses{" "}
            <span className="text-[#d4af37]">Worldwide</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: (typeof stats)[0];
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37]/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative">
        {/* Value */}
        <div className="mb-2 font-serif text-4xl font-bold text-[#d4af37] lg:text-5xl">
          {count}
          {stat.suffix}
        </div>

        {/* Label */}
        <p className="mb-1 font-sans font-medium text-white">{stat.label}</p>

        {/* Description */}
        <p className="font-sans text-sm text-white/50">{stat.description}</p>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
