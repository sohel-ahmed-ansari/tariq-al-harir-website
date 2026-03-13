import { Play } from "lucide-react";

import type { VideoItem } from "./types";

interface VideoCardProps {
  video: VideoItem;
  onClick: () => void;
  isVisible: boolean;
  animationDelay: number;
}

const VideoCard = ({
  video,
  onClick,
  isVisible,
  animationDelay,
}: VideoCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`group cursor-pointer overflow-hidden rounded-2xl bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:ring-2 focus:ring-[#1a5f2a] focus:ring-offset-2 focus:outline-none ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{ transitionDelay: `${animationDelay}ms` }}
  >
    <div className="relative aspect-video overflow-hidden bg-black">
      <video
        src={video.src}
        preload="metadata"
        playsInline
        muted
        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        aria-label={video.title}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#1a5f2a] shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play className="h-7 w-7 fill-current pl-1" />
        </span>
      </div>
      <div className="absolute top-3 left-3">
        <span className="rounded-full bg-[#1a5f2a] px-3 py-1 text-xs font-medium text-white">
          {video.product}
        </span>
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-display mb-1 text-lg font-bold text-gray-900">
        {video.title}
      </h3>
      <p className="text-sm text-gray-600">{video.description}</p>
    </div>
  </button>
);

export default VideoCard;
