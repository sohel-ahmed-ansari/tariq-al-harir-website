import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "../components/ui";
import {
  VideoCard,
  VideoLightbox,
  VideosCTA,
  VideosHero,
  VideosIntro,
  BACKGROUND_MUSIC_SRC,
  productOrder,
  videos,
  type VideoItem,
} from "../components/videos";

const Videos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openVideo, setOpenVideo] = useState<VideoItem | null>(null);
  const [isBackgroundMuted, setIsBackgroundMuted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundAudioRef = useRef<HTMLAudioElement>(null);

  const openLightbox = useCallback((video: VideoItem) => {
    setOpenVideo(video);
    backgroundAudioRef.current?.play().catch(() => {});
  }, []);

  const closeModal = useCallback(() => {
    const a = backgroundAudioRef.current;
    if (a) {
      a.pause();
      a.currentTime = 0;
    }
    setOpenVideo(null);
  }, []);

  const toggleBackgroundMute = useCallback(() => {
    const a = backgroundAudioRef.current;
    if (a) {
      a.muted = !a.muted;
      setIsBackgroundMuted(a.muted);
    }
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (openVideo) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [openVideo, closeModal]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const videosByProduct = productOrder.map((product) => ({
    product,
    items: videos.filter((v) => v.product === product),
  }));

  return (
    <main>
      <VideosHero />

      <section ref={sectionRef} className="bg-gray-50 py-16 md:py-24">
        <Container>
          <VideosIntro />

          {videosByProduct.map(({ product, items }) => (
            <div key={product} className="mb-16 last:mb-0">
              <h2 className="font-display mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
                {product}
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((video, index) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onClick={() => openLightbox(video)}
                    isVisible={isVisible}
                    animationDelay={index * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <audio
        ref={backgroundAudioRef}
        src={BACKGROUND_MUSIC_SRC}
        loop
        preload="metadata"
        className="hidden"
        aria-hidden
      />
      {openVideo && (
        <VideoLightbox
          video={openVideo}
          onClose={closeModal}
          backgroundAudioRef={backgroundAudioRef}
          isBackgroundMuted={isBackgroundMuted}
          onToggleBackgroundMute={toggleBackgroundMute}
        />
      )}

      <VideosCTA />
    </main>
  );
};

export default Videos;
