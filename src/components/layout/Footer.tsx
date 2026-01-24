import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { COMPANY, CONTACT } from "../../constants";
import { WhatsAppIcon } from "../icons";
import { Container } from "../ui";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "Products", path: "/#products" },
    { name: "Videos", path: "/videos" },
    { name: "Contact", path: "/#contact" },
  ];

  const products = [
    "Fresh Fruits & Vegetables",
    "Frozen Meat",
    "Eggs",
    "Sugar & Rice",
    "Flour",
    "Bakery Products",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt={`${COMPANY.shortName} Logo`}
              className="mb-6 h-16 w-auto brightness-0 invert"
            />
            <p className="mb-6 leading-relaxed text-gray-400">
              {COMPANY.shortName} - meaning &quot;{COMPANY.tagline}&quot; -
              continues the ancient tradition of connecting the world through
              quality trade. Your trusted partner for premium foodstuff in{" "}
              {COMPANY.location}.
            </p>
            <div className="flex gap-4">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#25D366]"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.emailLink}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#1a5f2a]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display mb-6 text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display mb-6 text-lg font-semibold">
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-gray-400">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display mb-6 text-lg font-semibold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#1a5f2a]" />
                <span className="text-gray-400">
                  Office 16, Building 236SH-R
                  <br />
                  Dubai Industrial City
                  <br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#1a5f2a]" />
                <a
                  href={CONTACT.phoneLink}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#1a5f2a]" />
                <a
                  href={CONTACT.emailLink}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            License No. {COMPANY.licenseNo} | {COMPANY.location}
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
