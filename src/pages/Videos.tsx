import { useState } from "react";

import { useScrollReveal } from "../hooks/useScrollReveal";

// Placeholder video data - in production, this would come from an API or CMS
const videos = [
  {
    id: "1",
    title: "Fresh Apples Container Opening - January 2026",
    description:
      "Quality inspection of fresh apple shipment from Europe. Premium grade fruits ready for distribution.",
    thumbnail: null,
    youtubeId: null, // Add YouTube video ID when available
    date: "2026-01-20",
    category: "Fruits",
    tags: ["apples", "fresh produce", "import"],
  },
  {
    id: "2",
    title: "Frozen Chicken Container - Quality Check",
    description:
      "Inspection of frozen chicken products. All items meet HACCP standards and temperature requirements.",
    thumbnail: null,
    youtubeId: null,
    date: "2026-01-18",
    category: "Frozen Meat",
    tags: ["chicken", "frozen", "poultry"],
  },
  {
    id: "3",
    title: "Rice Shipment Unloading - Basmati Premium",
    description:
      "High-quality Basmati rice from India. Perfect for restaurants and retail distribution.",
    thumbnail: null,
    youtubeId: null,
    date: "2026-01-15",
    category: "Rice & Grains",
    tags: ["rice", "basmati", "grains"],
  },
  {
    id: "4",
    title: "Fresh Vegetables Container Arrival",
    description:
      "Mixed vegetables shipment including tomatoes, onions, and potatoes. Farm-fresh quality.",
    thumbnail: null,
    youtubeId: null,
    date: "2026-01-12",
    category: "Vegetables",
    tags: ["vegetables", "fresh", "organic"],
  },
  {
    id: "5",
    title: "Sugar Container - Quality Verification",
    description:
      "White refined sugar from Brazil. Premium quality for commercial and retail use.",
    thumbnail: null,
    youtubeId: null,
    date: "2026-01-10",
    category: "Sugar",
    tags: ["sugar", "refined", "wholesale"],
  },
  {
    id: "6",
    title: "Eggs Shipment - Temperature Controlled",
    description:
      "Fresh eggs arriving in temperature-controlled container. Strict quality control measures.",
    thumbnail: null,
    youtubeId: null,
    date: "2026-01-08",
    category: "Eggs",
    tags: ["eggs", "fresh", "farm"],
  },
];

const categories = [
  "All",
  "Fruits",
  "Vegetables",
  "Frozen Meat",
  "Rice & Grains",
  "Sugar",
  "Eggs",
];

export function Videos() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const titleRef = useScrollReveal<HTMLDivElement>();

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf9f6] to-white py-16 lg:py-24">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[#b8860b]/5 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={titleRef} className="reveal text-center">
            <span className="mb-4 inline-block font-sans text-sm font-semibold tracking-widest text-[#b8860b] uppercase">
              Container Opening Videos
            </span>
            <h1 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Watch Our <span className="gold-gradient-text">Imports</span>{" "}
              Arrive
            </h1>
            <div className="section-divider mt-6" />
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-gray-600">
              Transparency is our commitment. Watch our container opening videos
              to see the quality of products we import to Dubai. Every shipment
              is documented for your assurance.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 font-sans text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#1a1a2e] text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#b8860b] hover:text-[#b8860b]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          {filteredVideos.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#b8860b]/10">
                <svg
                  className="h-10 w-10 text-[#b8860b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="font-sans text-lg text-gray-600">
                No videos in this category yet.
              </p>
              <p className="mt-2 font-sans text-gray-400">
                Check back soon for new container opening videos!
              </p>
            </div>
          )}

          {/* Coming Soon Notice */}
          <div className="mt-16 rounded-2xl border border-gray-100 bg-[#faf9f6] p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#b8860b]/10">
              <svg
                className="h-8 w-8 text-[#b8860b]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">
              More Videos Coming Soon
            </h3>
            <p className="mx-auto max-w-xl font-sans text-gray-600">
              We regularly update this page with new container opening videos.
              Subscribe to our updates or follow us to stay informed about our
              latest imports.
            </p>
            <a
              href="https://wa.me/971544646134"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-2"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Updates on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

interface VideoCardProps {
  video: (typeof videos)[0];
  index: number;
}

function VideoCard({ video, index }: VideoCardProps) {
  const cardRef = useScrollReveal<HTMLDivElement>();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      ref={cardRef}
      className="reveal card-hover group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#faf9f6] to-gray-100">
        {video.youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#1a1a2e]/10 transition-all group-hover:scale-110 group-hover:bg-[#1a1a2e]/20">
              <svg
                className="h-8 w-8 text-[#1a1a2e]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-sans text-sm text-gray-400">
              Video Coming Soon
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-[#1a1a2e] px-3 py-1 font-sans text-xs font-medium text-white">
            {video.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <p className="mb-2 font-sans text-xs text-[#b8860b]">
          {formatDate(video.date)}
        </p>

        {/* Title */}
        <h3 className="mb-2 font-serif text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#b8860b]">
          {video.title}
        </h3>

        {/* Description */}
        <p className="mb-4 line-clamp-2 font-sans text-sm text-gray-500">
          {video.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 font-sans text-xs text-gray-500"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
