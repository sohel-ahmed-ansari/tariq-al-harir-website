import { Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useRef } from "react";

import type { VideoItem } from "./types";

interface VideoLightboxProps {
  video: VideoItem;
  onClose: () => void;
  backgroundAudioRef: React.RefObject<HTMLAudioElement | null>;
  isBackgroundMuted: boolean;
  onToggleBackgroundMute: () => void;
}

const VideoLightbox = ({
  video,
  onClose,
  backgroundAudioRef,
  isBackgroundMuted,
  onToggleBackgroundMute,
}: VideoLightboxProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const a = backgroundAudioRef.current;
    if (!v || !a) return;

    v.muted = true;

    const onPlay = () => a.play().catch(() => {});
    const onPause = () => a.pause();

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      a.pause();
    };
  }, [video.src, backgroundAudioRef]);

  useEffect(() => {
    const a = backgroundAudioRef.current;
    if (a) a.muted = isBackgroundMuted;
  }, [isBackgroundMuted, backgroundAudioRef]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Watch ${video.title}`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-label="Close"
      />
      <div className="relative z-10 h-full w-full max-w-4xl md:h-auto">
        <div className="h-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <div
            className="relative aspect-video h-full w-full bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-3 right-3 z-10 flex gap-2">
              <button
                type="button"
                onClick={onToggleBackgroundMute}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus:ring-2 focus:ring-white focus:outline-none"
                aria-label={
                  isBackgroundMuted
                    ? "Unmute background music"
                    : "Mute background music"
                }
              >
                {isBackgroundMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus:ring-2 focus:ring-white focus:outline-none"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <video
              ref={videoRef}
              src={video.src}
              controls
              autoPlay
              muted
              preload="auto"
              playsInline
              className="video-no-volume h-full w-full object-contain"
              aria-label={video.title}
            />
          </div>
          <div className="bg-gray-900 px-4 py-3 text-white">
            <span className="rounded-full bg-[#1a5f2a] px-2 py-0.5 text-xs font-medium">
              {video.product}
            </span>
            <h3 className="font-display mt-2 text-lg font-bold">
              {video.title}
            </h3>
            <p className="text-sm text-gray-400">{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;
