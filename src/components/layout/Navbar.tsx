import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

// Section IDs to observe for scroll spy
const SECTION_IDS = ["about", "products", "why-us", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy using Intersection Observer
  const updateActiveSection = useCallback(() => {
    // Only run on home page
    if (location.pathname !== "/") return;

    // If at the very top, set to null (Home)
    if (window.scrollY < 100) {
      setActiveSection(null);
      return;
    }

    // Find the section that's most visible in the viewport
    let currentSection: string | null = null;
    let maxVisibility = 0;

    for (const id of SECTION_IDS) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const top = Math.max(0, rect.top);
      const bottom = Math.min(viewportHeight, rect.bottom);
      const visibleHeight = Math.max(0, bottom - top);

      // Consider a section "active" if its top is near the top of viewport
      // or if it has significant visibility
      if (rect.top <= viewportHeight * 0.4 && rect.bottom > 100) {
        if (visibleHeight > maxVisibility || rect.top < 150) {
          maxVisibility = visibleHeight;
          currentSection = id;
        }
      }
    }

    setActiveSection(currentSection);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    // Initial check
    updateActiveSection();

    // Listen to scroll events for scroll spy
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [location.pathname, updateActiveSection]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Products", path: "/#products" },
    { name: "Why Us", path: "/#why-us" },
    { name: "Videos", path: "/videos" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      setActiveSection(elementId);
      if (location.pathname === "/") {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (path === "/") {
      setActiveSection(null);
    }
  };

  const isActive = (path: string) => {
    // For the Videos page (or any non-hash route other than home)
    if (path === "/videos") {
      return location.pathname === "/videos";
    }
    // For Home, active only when on home page with no active section
    if (path === "/") {
      return location.pathname === "/" && activeSection === null;
    }
    // For hash-based links on the home page
    if (path.startsWith("/#")) {
      const sectionId = path.substring(2);
      return location.pathname === "/" && activeSection === sectionId;
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Tariq Al Harir Logo"
              className={`h-14 w-auto transition-all duration-300 ${
                isScrolled
                  ? ""
                  : "brightness-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`nav-link font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#1a5f2a]"
                    : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                } ${isActive(link.path) ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+971544646134"
              className="btn-primary !px-6 !py-3 text-sm"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-sm md:hidden ${
              isScrolled ? "bg-gray-100" : "bg-white/20"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? "rotate-90" : ""} ${isScrolled ? "text-gray-800" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#1a5f2a]"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+971544646134"
              className="btn-primary mt-4 w-full !py-3 text-center text-sm"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
