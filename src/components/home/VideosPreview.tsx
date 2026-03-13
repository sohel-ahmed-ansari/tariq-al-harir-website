import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "../ui";
import { videos } from "../videos";

const previewVideos = [videos[0], videos[2], videos[4]];

const VideosPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-900 py-16 md:py-24"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#1a5f2a]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#c9a227]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#6fcf7c]" />
              <span className="font-medium tracking-wider text-[#6fcf7c] uppercase">
                See it in action
              </span>
              <span className="h-px w-8 bg-[#6fcf7c]" />
            </div>

            <h2 className="font-display mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Watch Our
              <span className="block text-[#6fcf7c]">Product Videos</span>
            </h2>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-400">
              We believe in transparency. Watch real videos of our products —
              bananas, green chillies, and coconuts — and see the quality we
              deliver to our partners.
            </p>

            <Link
              to="/videos"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1a5f2a] px-8 py-3 font-medium text-white transition-colors hover:bg-[#0d3d16]"
            >
              View All Videos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Right: video previews */}
          <div
            className={`transition-all delay-300 duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large featured video */}
              <Link
                to="/videos"
                className="group relative col-span-2 overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-video bg-black">
                  <video
                    src={previewVideos[0].src}
                    preload="metadata"
                    playsInline
                    muted
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#1a5f2a] shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-8 w-8 fill-current pl-1" />
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-[#1a5f2a] px-3 py-1 text-xs font-medium text-white">
                      {previewVideos[0].product}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Two smaller videos */}
              {previewVideos.slice(1).map((video) => (
                <Link
                  key={video.id}
                  to="/videos"
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="relative aspect-video bg-black">
                    <video
                      src={video.src}
                      preload="metadata"
                      playsInline
                      muted
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#1a5f2a] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-6 w-6 fill-current pl-0.5" />
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <span className="rounded-full bg-[#1a5f2a] px-2 py-0.5 text-xs font-medium text-white">
                        {video.product}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 text-center lg:hidden">
              <Link
                to="/videos"
                className="inline-flex items-center font-medium text-[#6fcf7c] transition-colors hover:text-white"
              >
                View all videos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideosPreview;
