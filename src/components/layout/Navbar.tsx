import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      if (location.pathname === "/") {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
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
                className={`nav-link font-medium ${
                  isScrolled ? "text-gray-700" : "text-gray-800"
                } ${location.pathname === link.path ? "active" : ""}`}
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
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? "rotate-90" : ""} ${isScrolled ? "text-gray-800" : "text-gray-800"}`}
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
