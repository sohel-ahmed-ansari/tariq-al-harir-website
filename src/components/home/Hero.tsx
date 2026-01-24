import {
  ArrowDown,
  Globe,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "../../assets/hero.png";
import { COMPANY } from "../../constants";
import { Button, Container } from "../ui";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax values
  const backgroundY = offsetY * 0.4;
  const contentY = offsetY * 0.2;
  const contentOpacity = Math.max(0, 1 - offsetY / 600);
  const backgroundScale = 1.1 + offsetY * 0.0002;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="hero-bg-zoom absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${backgroundY}px) scale(${backgroundScale})`,
        }}
      />

      {/* Gradient Overlay - also moves with parallax for depth */}
      <div
        className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-black/40"
        style={{
          transform: `translateY(${backgroundY * 0.5}px)`,
        }}
      />

      {/* Content with parallax and fade */}
      <div
        className="relative z-10 flex min-h-screen items-center will-change-transform"
        style={{
          transform: `translateY(${contentY}px)`,
          opacity: contentOpacity,
        }}
      >
        <Container className="w-full pt-20">
          {/* Text content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm font-medium text-white/90">
                Licensed Trading Company in {COMPANY.location}
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-title font-display mb-6 font-bold text-white">
              Your Gateway to
              <span className="block text-[#6fcf7c]">Premium Foodstuff</span>
              Trading
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
              <span className="font-semibold text-white">
                {COMPANY.shortName}
              </span>{" "}
              - meaning &quot;{COMPANY.tagline}&quot; - continues the ancient
              tradition of connecting the world through quality trade. We
              specialize in importing and exporting fresh fruits, vegetables,
              frozen meat, and essential food products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button as="a" href="#contact" variant="primary">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
              <Button as="a" href="#products" variant="secondary">
                <Package className="mr-2 h-5 w-5" />
                View Products
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <ShieldCheck className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">DED Licensed</p>
                  <p className="text-sm text-white/60">Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Global Network</p>
                  <p className="text-sm text-white/60">Import & Export</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Sparkles className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Premium Quality</p>
                  <p className="text-sm text-white/60">Fresh Products</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Right side - Logo (outside fading container) */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        <Container className="flex h-full items-center justify-end">
          <div className="relative rounded-3xl bg-black/20 p-8 backdrop-blur-md">
            <img
              src="/logo.png"
              alt={COMPANY.name}
              className="relative h-44 w-auto brightness-0 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] invert xl:h-52"
            />
          </div>
        </Container>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
