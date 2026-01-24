import { useParallax } from "../../hooks/useScrollReveal";

export function Hero() {
  useParallax();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#faf9f6] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8860b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Blobs */}
      <div
        className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"
        data-parallax="0.3"
      />
      <div
        className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-[#b8860b]/5 blur-3xl"
        data-parallax="0.2"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#b8860b]/30 bg-[#b8860b]/10 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#b8860b]" />
                <span className="font-sans text-sm font-medium text-[#b8860b]">
                  Trusted Food Trading Partner in Dubai
                </span>
              </div>

              {/* Heading */}
              <h1 className="animate-fade-in-up mb-6 font-serif text-4xl leading-tight font-bold text-gray-900 delay-100 sm:text-5xl lg:text-6xl">
                <span className="gold-gradient-text">Tariq Al Harir</span>
                <br />
                <span className="text-gray-800">The Silk Road of</span>
                <br />
                <span className="text-gray-800">Premium Food Trade</span>
              </h1>

              {/* Description */}
              <p className="animate-fade-in-up mx-auto mb-8 max-w-xl font-sans text-lg leading-relaxed text-gray-600 delay-200 lg:mx-0">
                Connecting global markets with Dubai&apos;s finest foodstuff
                trading services. We import and export premium quality fruits,
                vegetables, frozen meat, eggs, sugar, rice, and more.
              </p>

              {/* CTAs */}
              <div className="animate-fade-in-up flex flex-col justify-center gap-4 delay-300 sm:flex-row lg:justify-start">
                <button onClick={scrollToContact} className="btn-primary">
                  Get a Quote
                </button>
                <button onClick={scrollToProducts} className="btn-secondary">
                  Explore Products
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="animate-fade-in-up mt-12 flex flex-wrap items-center justify-center gap-8 delay-400 lg:justify-start">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-[#b8860b]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-sans text-sm text-gray-500">
                    DED Licensed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-[#b8860b]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-sans text-sm text-gray-500">
                    DCCI Member
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-[#b8860b]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-sans text-sm text-gray-500">
                    Premium Quality
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Logo/Visual */}
            <div className="relative hidden lg:block">
              <div className="animate-float relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 scale-110 rounded-full bg-[#d4af37]/10 blur-3xl" />

                {/* Logo Container */}
                <div className="relative mx-auto flex h-96 w-96 items-center justify-center rounded-full border border-[#b8860b]/20 bg-gradient-to-br from-white to-[#faf9f6] p-8 shadow-2xl shadow-[#b8860b]/10">
                  <img
                    src="/logo.png"
                    alt="Tariq Al Harir Foodstuff Trading"
                    className="h-auto w-full max-w-xs drop-shadow-lg"
                  />
                </div>

                {/* Decorative Circles */}
                <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full border border-[#b8860b]/20" />
                <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full border border-[#b8860b]/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-xs tracking-widest text-gray-400 uppercase">
            Scroll
          </span>
          <div className="h-12 w-6 rounded-full border border-gray-300 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#b8860b]" />
          </div>
        </div>
      </div>
    </section>
  );
}
