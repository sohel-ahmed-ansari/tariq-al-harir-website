import { ChevronRight, Film } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "../ui";

const VideosHero = () => (
  <section className="relative overflow-hidden bg-gray-900">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#1a5f2a]/10 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#c9a227]/10 blur-3xl" />

    {/* Content */}
    <Container className="relative z-10 py-24 md:py-28">
      {/* Breadcrumb */}
      <nav className="mb-8 flex">
        <ol className="flex items-center gap-2 text-sm text-white/60">
          <li>
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4" />
          </li>
          <li className="text-white">Videos</li>
        </ol>
      </nav>

      <div className="max-w-2xl">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <Film className="h-4 w-4 text-[#6fcf7c]" />
          <span className="text-sm font-medium text-white/90">
            Behind the scenes
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Product <span className="text-[#6fcf7c]">Videos</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-lg leading-relaxed text-white/80">
          See the quality of products we trade — from bananas and green chillies
          to coconuts. Watch our handling, inspection, and storage process.
        </p>
      </div>
    </Container>
  </section>
);

export default VideosHero;
