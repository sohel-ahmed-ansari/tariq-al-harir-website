import { useScrollReveal } from "../../hooks/useScrollReveal";

const products = [
  {
    title: "Fresh Fruits & Vegetables",
    description:
      "Premium quality fresh and seasonal produce sourced from trusted farms worldwide.",
    icon: "🍎",
    items: ["Apples", "Oranges", "Bananas", "Tomatoes", "Onions", "Potatoes"],
  },
  {
    title: "Frozen Meat & Poultry",
    description:
      "High-grade frozen meat products maintaining freshness and nutritional value.",
    icon: "🥩",
    items: ["Beef", "Chicken", "Lamb", "Goat", "Turkey", "Fish"],
  },
  {
    title: "Eggs & Dairy",
    description:
      "Farm-fresh eggs and dairy products with strict quality control standards.",
    icon: "🥚",
    items: ["Fresh Eggs", "Processed Eggs", "Egg Products"],
  },
  {
    title: "Sugar & Sweeteners",
    description:
      "Refined and raw sugar products for commercial and retail distribution.",
    icon: "🍬",
    items: ["White Sugar", "Brown Sugar", "Raw Sugar", "Sweeteners"],
  },
  {
    title: "Rice & Grains",
    description:
      "Premium rice varieties and grain products from select origins.",
    icon: "🍚",
    items: ["Basmati Rice", "Long Grain", "Short Grain", "Brown Rice"],
  },
  {
    title: "Flour & Bakery",
    description:
      "High-quality flour and bakery products for commercial baking needs.",
    icon: "🍞",
    items: ["All-Purpose Flour", "Bread Flour", "Pastry Flour", "Wheat Flour"],
  },
  {
    title: "Dried Fruits & Nuts",
    description:
      "Carefully selected dried fruits and nuts with extended shelf life.",
    icon: "🥜",
    items: ["Dates", "Raisins", "Almonds", "Cashews", "Pistachios"],
  },
  {
    title: "Snacks & Confectionery",
    description:
      "Popular snack foods and confectionery items for retail distribution.",
    icon: "🍫",
    items: ["Chips", "Biscuits", "Chocolates", "Candies"],
  },
  {
    title: "Fragrances & Flavors",
    description:
      "Food-grade fragrances and flavoring agents for food industry.",
    icon: "✨",
    items: ["Natural Flavors", "Essences", "Food Colors", "Aromatics"],
  },
];

export function Products() {
  const titleRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#faf9f6] py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-1/2 w-1/3 bg-gradient-to-br from-[#b8860b]/5 to-transparent" />
        <div className="absolute right-0 bottom-0 h-1/2 w-1/3 bg-gradient-to-tl from-[#b8860b]/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <span className="mb-4 inline-block font-sans text-sm font-semibold tracking-widest text-[#b8860b] uppercase">
            What We Trade
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Premium <span className="gold-gradient-text">Products</span>
          </h2>
          <div className="section-divider mt-6" />
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-gray-600">
            We specialize in importing and exporting a wide range of premium
            quality foodstuff, ensuring the highest standards from source to
            destination.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 font-sans text-gray-600">
            Looking for specific products or bulk orders?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Request a Quote
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: (typeof products)[0];
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className="reveal card-hover group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#b8860b]/10 to-[#d4af37]/5 text-3xl transition-transform group-hover:scale-110">
        {product.icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">
        {product.title}
      </h3>

      {/* Description */}
      <p className="mb-4 font-sans text-sm leading-relaxed text-gray-500">
        {product.description}
      </p>

      {/* Items */}
      <div className="flex flex-wrap gap-2">
        {product.items.slice(0, 4).map((item) => (
          <span
            key={item}
            className="rounded-full bg-[#b8860b]/10 px-3 py-1 font-sans text-xs text-[#b8860b]"
          >
            {item}
          </span>
        ))}
        {product.items.length > 4 && (
          <span className="rounded-full bg-gray-100 px-3 py-1 font-sans text-xs text-gray-500">
            +{product.items.length - 4} more
          </span>
        )}
      </div>
    </div>
  );
}
