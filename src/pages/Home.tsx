import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Hero,
  About,
  Products,
  Stats,
  WhyChooseUs,
  Contact,
} from "../components/home";

const Home = () => {
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
      <Contact />
    </main>
  );
};

export default Home;
