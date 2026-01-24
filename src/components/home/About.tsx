import { useScrollReveal } from "../../hooks/useScrollReveal";

export function About() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const contentRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#faf9f6] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Side */}
          <div ref={imageRef} className="reveal-left order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#faf9f6] to-white">
                  {/* Placeholder with pattern - in production, replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 text-6xl">🌍</div>
                      <p className="font-serif text-xl text-[#b8860b]">
                        Global Trade
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        Connecting Markets Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -right-6 -bottom-6 rounded-xl border border-gray-100 bg-white p-6 shadow-xl">
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-[#b8860b]">
                    9+
                  </p>
                  <p className="mt-1 font-sans text-sm text-gray-600">
                    Trading Activities
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full border-2 border-[#b8860b]/30" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div ref={titleRef} className="reveal mb-8">
              <span className="mb-4 inline-block font-sans text-sm font-semibold tracking-widest text-[#b8860b] uppercase">
                About Us
              </span>
              <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                The Silk Road of
                <span className="gold-gradient-text"> Modern Trade</span>
              </h2>
              <div className="section-divider mt-6 !ml-0" />
            </div>

            <div ref={contentRef} className="reveal space-y-6">
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                <strong className="text-[#b8860b]">Tariq Al Harir</strong> -
                meaning &quot;The Silk Road&quot; in Arabic - embodies the rich
                heritage of trade routes that connected civilizations for
                centuries. Just as the ancient Silk Road facilitated the
                exchange of precious goods between East and West, we continue
                this legacy in the modern era.
              </p>

              <p className="font-sans leading-relaxed text-gray-600">
                Based in Dubai, the commercial heart of the Middle East, we
                specialize in importing and exporting premium quality foodstuff.
                Our commitment to excellence ensures that every product we trade
                meets the highest standards of quality and freshness.
              </p>

              <p className="font-sans leading-relaxed text-gray-600">
                As a licensed company under the Dubai Department of Economic
                Development and a proud member of the Dubai Chamber of Commerce
                & Industry, we bring credibility, reliability, and expertise to
                every business relationship.
              </p>

              {/* Key Points */}
              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#b8860b]/10">
                    <svg
                      className="h-4 w-4 text-[#b8860b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-900">
                      DED Licensed
                    </p>
                    <p className="text-sm text-gray-500">License #1591141</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#b8860b]/10">
                    <svg
                      className="h-4 w-4 text-[#b8860b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-900">
                      DCCI Member
                    </p>
                    <p className="text-sm text-gray-500">Member #666965</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#b8860b]/10">
                    <svg
                      className="h-4 w-4 text-[#b8860b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-900">
                      Dubai Based
                    </p>
                    <p className="text-sm text-gray-500">Industrial City</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#b8860b]/10">
                    <svg
                      className="h-4 w-4 text-[#b8860b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gray-900">
                      Global Network
                    </p>
                    <p className="text-sm text-gray-500">Worldwide Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
