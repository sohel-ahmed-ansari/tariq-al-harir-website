import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import dryFruits from "../../assets/products/dry-fruits.webp";
import eggs from "../../assets/products/eggs.avif";
import freshFruits from "../../assets/products/fresh-fruits.avif";
import meat from "../../assets/products/meat.avif";
import rice from "../../assets/products/rice.avif";
import wheat from "../../assets/products/wheat.avif";
import { CONTACT } from "../../constants";
import { WhatsAppIcon } from "../icons";
import { Button, Container } from "../ui";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Fruits & Vegetables",
    description:
      "Premium quality fresh produce sourced from trusted farms worldwide. Apples, oranges, mangoes, tomatoes, onions, and more.",
    image: freshFruits,
    category: "Fresh Produce",
  },
  {
    id: 2,
    name: "Frozen Meat",
    description:
      "High-quality frozen and chilled meat products including beef, lamb, chicken, and mutton from certified suppliers.",
    image: meat,
    category: "Meat Products",
  },
  {
    id: 3,
    name: "Eggs",
    description:
      "Fresh and packaged eggs in bulk quantities. Sourced from quality poultry farms with proper cold chain management.",
    image: eggs,
    category: "Poultry",
  },
  {
    id: 4,
    name: "Sugar & Rice",
    description:
      "Premium quality sugar and rice varieties including Basmati, Jasmine, and other specialty grains for wholesale.",
    image: rice,
    category: "Grains & Sugar",
  },
  {
    id: 5,
    name: "Flour & Bakery Products",
    description:
      "All-purpose flour, wheat flour, and specialty baking ingredients for commercial bakeries and food industries.",
    image: wheat,
    category: "Bakery",
  },
  {
    id: 6,
    name: "Dried Fruits & Snacks",
    description:
      "Premium dried fruits, nuts, and healthy snack products. Perfect for retail and wholesale distribution.",
    image: dryFruits,
    category: "Snacks",
  },
];

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="bg-gray-50 py-16 md:py-24"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#1a5f2a]" />
            <span className="font-medium tracking-wider text-[#1a5f2a] uppercase">
              Our Products
            </span>
            <span className="h-px w-8 bg-[#1a5f2a]" />
          </div>
          <h2 className="font-display mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Premium Foodstuff Products
          </h2>
          <p className="text-lg text-gray-600">
            We trade a diverse range of high-quality food products, connecting
            global suppliers with markets across the UAE and beyond.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#1a5f2a] backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display mb-3 text-xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="mb-4 text-gray-600">{product.description}</p>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-[#1a5f2a] transition-colors hover:text-[#0d3d16]"
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Looking for a specific product? We can source it for you.
          </p>
          <Button
            as="a"
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            Contact Us for Custom Orders
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Products;
