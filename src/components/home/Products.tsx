import { useEffect, useRef, useState } from "react";

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
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    category: "Fresh Produce",
  },
  {
    id: 2,
    name: "Frozen Meat",
    description:
      "High-quality frozen and chilled meat products including beef, lamb, chicken, and mutton from certified suppliers.",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    category: "Meat Products",
  },
  {
    id: 3,
    name: "Eggs",
    description:
      "Fresh and packaged eggs in bulk quantities. Sourced from quality poultry farms with proper cold chain management.",
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    category: "Poultry",
  },
  {
    id: 4,
    name: "Sugar & Rice",
    description:
      "Premium quality sugar and rice varieties including Basmati, Jasmine, and other specialty grains for wholesale.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    category: "Grains & Sugar",
  },
  {
    id: 5,
    name: "Flour & Bakery Products",
    description:
      "All-purpose flour, wheat flour, and specialty baking ingredients for commercial bakeries and food industries.",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    category: "Bakery",
  },
  {
    id: 6,
    name: "Dried Fruits & Snacks",
    description:
      "Premium dried fruits, nuts, and healthy snack products. Perfect for retail and wholesale distribution.",
    image:
      "https://images.unsplash.com/photo-1596273312810-2e3817d5a3d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
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
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
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
              className={`product-card transition-all duration-700 ${
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
                  className="product-image"
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
                  href="#contact"
                  className="inline-flex items-center font-medium text-[#1a5f2a] transition-colors hover:text-[#0d3d16]"
                >
                  Request Quote
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
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
          <a href="#contact" className="btn-outline">
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Us for Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
