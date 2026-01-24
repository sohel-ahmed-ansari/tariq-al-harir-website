import { useScrollReveal } from "../../hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Tariq Al Harir has been our trusted partner for importing fresh produce. Their quality standards and reliable delivery have helped us grow our business.",
    author: "Ahmed Al-Rashid",
    role: "Restaurant Chain Owner",
    location: "Abu Dhabi, UAE",
  },
  {
    quote:
      "Excellent service and competitive pricing. They handle all the logistics seamlessly, making international trade hassle-free for us.",
    author: "Priya Sharma",
    role: "Wholesale Distributor",
    location: "Mumbai, India",
  },
  {
    quote:
      "Professional team, quality products. They've been instrumental in helping us source the best frozen meat products for our supermarkets.",
    author: "Mohammed Hassan",
    role: "Supermarket Director",
    location: "Riyadh, Saudi Arabia",
  },
];

export function Testimonials() {
  const titleRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8860b]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <span className="mb-4 inline-block font-sans text-sm font-semibold tracking-widest text-[#b8860b] uppercase">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            What Our <span className="gold-gradient-text">Partners</span> Say
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className="reveal group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Quote Icon */}
      <div className="mb-6 text-[#b8860b]/20">
        <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote */}
      <p className="mb-6 font-sans leading-relaxed text-gray-600 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b8860b]/10 font-serif text-lg font-bold text-[#b8860b]">
          {testimonial.author
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-sans font-medium text-gray-900">
            {testimonial.author}
          </p>
          <p className="font-sans text-sm text-gray-500">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-tl-3xl border-t-2 border-l-2 border-gray-100 transition-all duration-500 group-hover:border-[#b8860b]/30" />
    </div>
  );
}
