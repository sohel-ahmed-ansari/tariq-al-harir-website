import {
  ArrowRightLeft,
  CircleDollarSign,
  Download,
  FileText,
  Globe,
  Mail,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect } from "react";

import dryFruits from "../assets/products/dry-fruits.webp";
import eggs from "../assets/products/eggs.avif";
import freshFruits from "../assets/products/fresh-fruits.avif";
import meat from "../assets/products/meat.avif";
import rice from "../assets/products/rice.avif";
import wheat from "../assets/products/wheat.avif";
import { WhatsAppIcon } from "../components/icons";
import { COMPANY, CONTACT } from "../constants";

const products = [
  {
    name: "Fresh Fruits & Vegetables",
    description:
      "Premium quality fresh produce sourced from trusted farms worldwide. Apples, oranges, mangoes, tomatoes, onions, and more.",
    image: freshFruits,
    category: "Fresh Produce",
  },
  {
    name: "Frozen Meat",
    description:
      "High-quality frozen and chilled meat products including beef, lamb, chicken, and mutton from certified suppliers.",
    image: meat,
    category: "Meat Products",
  },
  {
    name: "Eggs",
    description:
      "Fresh and packaged eggs in bulk quantities. Sourced from quality poultry farms with proper cold chain management.",
    image: eggs,
    category: "Poultry",
  },
  {
    name: "Sugar & Rice",
    description:
      "Premium quality sugar and rice varieties including Basmati, Jasmine, and other specialty grains for wholesale.",
    image: rice,
    category: "Grains & Sugar",
  },
  {
    name: "Flour & Bakery Products",
    description:
      "All-purpose flour, wheat flour, and specialty baking ingredients for commercial bakeries and food industries.",
    image: wheat,
    category: "Bakery",
  },
  {
    name: "Dried Fruits & Snacks",
    description:
      "Premium dried fruits, nuts, and healthy snack products. Perfect for retail and wholesale distribution.",
    image: dryFruits,
    category: "Snacks",
  },
];

const strengths = [
  {
    title: "Strategic Location",
    description:
      "Based in Dubai, UAE — a global trade hub connecting Asia, Europe, and Africa.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensure only the finest products reach you.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct relationships with producers enable us to offer the best prices.",
    icon: <CircleDollarSign className="h-5 w-5" />,
  },
  {
    title: "Licensed & Compliant",
    description:
      "Fully licensed by Dubai DED with all necessary certifications.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Reliable Logistics",
    description:
      "Efficient supply chain with proper cold storage and timely delivery.",
    icon: <ArrowRightLeft className="h-5 w-5" />,
  },
  {
    title: "Customer Focus",
    description:
      "Dedicated support team available to ensure smooth transactions.",
    icon: <Users className="h-5 w-5" />,
  },
];

const Brochure = () => {
  // Set page title for the PDF filename when printing
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Tariq Al Harir - Brochure";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      {/* Download Button - Fixed */}
      <div className="fixed right-6 bottom-6 z-50 print:hidden">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 rounded-full bg-[#1a5f2a] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#0d3d16] hover:shadow-xl active:scale-95"
        >
          <Download className="h-5 w-5" />
          Download PDF
        </button>
      </div>

      {/* Brochure Content */}
      <div className="brochure-content mx-auto max-w-[210mm] bg-white shadow-2xl print:max-w-none print:shadow-none">
        {/* ===== PAGE 1: Cover ===== */}
        <div className="relative overflow-hidden bg-linear-to-br from-[#1a5f2a] via-[#1a5f2a] to-[#0d3d16] px-10 py-16 text-white print:break-after-page">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#c9a227]/10 blur-3xl" />

          {/* Header */}
          <div className="relative flex items-center justify-between">
            <img
              src="/logo.png"
              alt={COMPANY.shortName}
              className="h-20 w-auto brightness-0 invert"
            />
            <div className="text-right text-sm text-white/70">
              <p>License No. {COMPANY.licenseNo}</p>
              <p>DCCI No. {COMPANY.dcciNo}</p>
            </div>
          </div>

          {/* Main Title */}
          <div className="relative mt-16 mb-12">
            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-[#c9a227] uppercase">
              {COMPANY.location} &bull; Import &amp; Export
            </p>
            <h1 className="mb-4 text-5xl leading-tight font-bold">
              {COMPANY.name}
            </h1>
            <div className="mb-6 h-1 w-20 rounded bg-[#c9a227]" />
            <p className="max-w-lg text-xl leading-relaxed text-white/80">
              &ldquo;{COMPANY.tagline}&rdquo; — Continuing the ancient tradition
              of connecting the world through quality trade in premium foodstuff
              products.
            </p>
          </div>

          {/* Key Stats */}
          <div className="relative mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-10">
            <div>
              <p className="text-3xl font-bold text-[#c9a227]">6+</p>
              <p className="mt-1 text-sm text-white/70">Product Categories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#c9a227]">UAE</p>
              <p className="mt-1 text-sm text-white/70">Based in Dubai</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#c9a227]">100%</p>
              <p className="mt-1 text-sm text-white/70">Quality Commitment</p>
            </div>
          </div>
        </div>

        {/* ===== PAGE 2: About & Why Choose Us ===== */}
        <div className="px-10 py-14">
          {/* About Section */}
          <div className="mb-12">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-6 bg-[#1a5f2a]" />
              <span className="text-xs font-semibold tracking-[0.15em] text-[#1a5f2a] uppercase">
                About Us
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Connecting Global Markets Through Quality Trade
            </h2>
            <div className="grid gap-6 text-[15px] leading-relaxed text-gray-600 md:grid-cols-2">
              <p>
                <strong className="text-gray-900">Tariq Al Harir</strong> —
                &ldquo;The Silk Road&rdquo; — evokes the legendary trade routes
                that connected civilizations. Based in Dubai, we continue this
                proud tradition by facilitating the import and export of premium
                foodstuff products.
              </p>
              <p>
                As a licensed LLC in the UAE, we specialize in trading fresh
                fruits, vegetables, frozen meat, eggs, sugar, flour, and a wide
                range of food products. Our strategic location in Dubai provides
                access to global markets, ensuring the finest products reach
                your doorstep.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gray-200" />

          {/* Why Choose Us */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-6 bg-[#1a5f2a]" />
              <span className="text-xs font-semibold tracking-[0.15em] text-[#1a5f2a] uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Your Trusted Trading Partner
            </h2>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
              {strengths.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-5"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a5f2a]/10 text-[#1a5f2a]">
                    {s.icon}
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-500">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== PAGE 3: Products ===== */}
        <div className="bg-gray-50 px-10 py-14 print:break-before-page print:px-8 print:py-8">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-6 bg-[#1a5f2a]" />
            <span className="text-xs font-semibold tracking-[0.15em] text-[#1a5f2a] uppercase">
              Our Products
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-bold text-gray-900 print:text-2xl">
            Premium Foodstuff Products
          </h2>
          <p className="mb-10 text-[15px] text-gray-600 print:mb-4 print:text-xs">
            We trade a diverse range of high-quality food products, connecting
            global suppliers with markets across the UAE and beyond.
          </p>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 print:grid-cols-2 print:gap-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="break-inside-avoid overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-36 w-full object-cover print:h-24"
                />
                <div className="p-4 print:p-2.5">
                  <span className="mb-1 inline-block rounded-full bg-[#1a5f2a]/10 px-2 py-0.5 text-[10px] font-medium text-[#1a5f2a]">
                    {product.category}
                  </span>
                  <h3 className="mb-1 text-sm font-bold text-gray-900 print:text-xs">
                    {product.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-500 print:text-[10px] print:leading-snug">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PAGE 4: Contact / Back Cover ===== */}
        <div className="relative overflow-hidden bg-linear-to-br from-[#1a5f2a] via-[#1a5f2a] to-[#0d3d16] px-10 py-16 text-white print:break-before-page">
          {/* Decorative */}
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-6 bg-[#c9a227]" />
              <span className="text-xs font-semibold tracking-[0.15em] text-[#c9a227] uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mb-10 max-w-lg text-white/70">
              Whether you&apos;re looking to import quality foodstuff to Dubai
              or export UAE products globally, we&apos;re here to help. Reach
              out for competitive quotes and reliable service.
            </p>

            {/* Contact Cards */}
            <div className="mb-12 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <Phone className="mb-3 h-6 w-6 text-[#c9a227]" />
                <p className="mb-1 text-xs text-white/60">Call Us</p>
                <p className="font-semibold">{CONTACT.phoneDisplay}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <WhatsAppIcon className="mb-3 h-6 w-6 text-[#c9a227]" />
                <p className="mb-1 text-xs text-white/60">WhatsApp</p>
                <p className="font-semibold">{CONTACT.phoneDisplay}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <Mail className="mb-3 h-6 w-6 text-[#c9a227]" />
                <p className="mb-1 text-xs text-white/60">Email Us</p>
                <p className="text-sm font-semibold break-all">
                  {CONTACT.email}
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <Globe className="mb-3 h-6 w-6 text-[#c9a227]" />
                <p className="mb-1 text-xs text-white/60">Website</p>
                <p className="font-semibold">tariqalharir.com</p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/20 pt-8">
              <div className="flex items-center justify-between">
                <img
                  src="/logo.png"
                  alt={COMPANY.shortName}
                  className="h-14 w-auto brightness-0 invert"
                />
                <div className="text-right text-xs text-white/50">
                  <p>License No. {COMPANY.licenseNo}</p>
                  <p>DCCI No. {COMPANY.dcciNo}</p>
                  <p>Register No. {COMPANY.registerNo}</p>
                  <p className="mt-1">
                    &copy; {new Date().getFullYear()} {COMPANY.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
