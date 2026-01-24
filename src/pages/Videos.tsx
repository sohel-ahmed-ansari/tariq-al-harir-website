import { ChevronRight, Clock, Play, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { WhatsAppIcon } from "../components/icons";
import { Button, Container } from "../components/ui";
import { CONTACT } from "../constants";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  product: string;
}

// Placeholder videos - replace with actual YouTube videos later
const videos: Video[] = [
  {
    id: "placeholder-1",
    title: "Fresh Fruits Container Opening",
    description:
      "Watch us unload a fresh shipment of premium fruits from our trusted suppliers. Quality inspection and storage process.",
    thumbnail:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    date: "Coming Soon",
    product: "Fresh Fruits",
  },
  {
    id: "placeholder-2",
    title: "Vegetable Shipment Arrival",
    description:
      "Container opening of fresh vegetables imported for distribution across UAE markets.",
    thumbnail:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1084&q=80",
    date: "Coming Soon",
    product: "Vegetables",
  },
  {
    id: "placeholder-3",
    title: "Frozen Meat Unloading",
    description:
      "See our cold chain process in action as we unload frozen meat products maintaining optimal temperatures.",
    thumbnail:
      "https://images.unsplash.com/photo-1603048297172-c92544798d5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    date: "Coming Soon",
    product: "Frozen Meat",
  },
  {
    id: "placeholder-4",
    title: "Rice & Grains Shipment",
    description:
      "Bulk rice and grains container opening at Dubai port. Premium quality Basmati and specialty rice varieties.",
    thumbnail:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    date: "Coming Soon",
    product: "Rice & Grains",
  },
  {
    id: "placeholder-5",
    title: "Eggs Container Inspection",
    description:
      "Quality inspection during container opening of fresh eggs. See our careful handling process.",
    thumbnail:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    date: "Coming Soon",
    product: "Eggs",
  },
  {
    id: "placeholder-6",
    title: "Sugar Shipment Arrival",
    description:
      "Bulk sugar shipment unloading at our warehouse. Premium refined sugar for wholesale distribution.",
    thumbnail:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    date: "Coming Soon",
    product: "Sugar",
  },
];

const Videos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a5f2a] py-32 md:py-40">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <Container className="relative z-10 text-center">
          {/* Breadcrumb */}
          <nav className="mb-6 flex justify-center">
            <ol className="flex items-center gap-2 text-sm text-white/70">
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

          {/* Title */}
          <h1 className="font-display mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Container Opening Videos
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Watch our behind-the-scenes videos of container openings in Dubai.
            See the quality of products we import and our careful handling
            process.
          </p>
        </Container>
      </section>

      {/* Videos Grid */}
      <section ref={sectionRef} className="bg-gray-50 py-16 md:py-24">
        <Container>
          {/* Info Banner */}
          <div className="mb-12 rounded-2xl bg-gradient-to-r from-[#1a5f2a]/10 to-[#1a5f2a]/5 p-6 md:p-8">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#1a5f2a]/10">
                <Video className="h-7 w-7 text-[#1a5f2a]" />
              </div>
              <div>
                <h2 className="mb-1 text-xl font-bold text-gray-900">
                  Transparency in Trade
                </h2>
                <p className="text-gray-600">
                  We believe in complete transparency. These videos showcase our
                  container openings, demonstrating the quality of products we
                  import and our commitment to proper handling and storage.
                </p>
              </div>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Thumbnail */}
                <div className="group relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
                      <Play
                        className="h-8 w-8 text-[#1a5f2a]"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-[#1a5f2a] px-3 py-1 text-xs font-medium text-white">
                      {video.product}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="mb-2 text-sm text-gray-500">{video.date}</p>
                  <h3 className="font-display mb-2 text-lg font-bold text-gray-900">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-yellow-50 px-6 py-3 text-yellow-800">
              <Clock className="h-5 w-5" />
              <span className="font-medium">
                More videos coming soon! Follow us for updates.
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-[#1a5f2a] to-[#0d3d16] p-8 md:p-12">
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
              <div className="flex-1">
                <h2 className="font-display mb-4 text-2xl font-bold text-white md:text-3xl">
                  Interested in Our Products?
                </h2>
                <p className="text-white/80">
                  Contact us today for competitive quotes on bulk orders. We
                  deliver quality foodstuff products across the UAE and
                  worldwide.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  as="a"
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button as="link" to="/#contact" variant="secondary">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Videos;
