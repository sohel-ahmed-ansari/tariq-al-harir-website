import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { About } from "../components/home/About";
import { Contact } from "../components/home/Contact";
import { Hero } from "../components/home/Hero";
import { Products } from "../components/home/Products";
import { Stats } from "../components/home/Stats";
import { Testimonials } from "../components/home/Testimonials";
import { WhyChooseUs } from "../components/home/WhyChooseUs";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const elementId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Scroll to top when navigating to home without hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
