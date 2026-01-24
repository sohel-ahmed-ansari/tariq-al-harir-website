import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Products", path: "/#products" },
  { name: "Why Us", path: "/#why-us" },
  { name: "Videos", path: "/videos" },
  { name: "Contact", path: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (path: string) => {
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      if (location.pathname === "/") {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Tariq Al Harir Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="group relative font-sans text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-[#b8860b]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <a
              href="tel:+971544646134"
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "translate-y-2 rotate-45 bg-white"
                    : "bg-gray-800"
                }`}
              />
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "bg-gray-800"
                }`}
              />
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-translate-y-2 -rotate-45 bg-white"
                    : "bg-gray-800"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1a1a2e] transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className="font-serif text-2xl text-white transition-colors hover:text-[#d4af37]"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+971544646134"
            className="mt-4 rounded-lg bg-[#d4af37] px-8 py-3 text-lg font-semibold text-[#1a1a2e]"
          >
            Call +971 54 464 6134
          </a>
        </div>
      </div>
    </nav>
  );
}
