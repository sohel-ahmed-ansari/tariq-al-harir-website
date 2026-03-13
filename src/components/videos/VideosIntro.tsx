import { Video } from "lucide-react";

const VideosIntro = () => (
  <div className="mb-12 rounded-2xl bg-linear-to-r from-[#1a5f2a]/10 to-[#1a5f2a]/5 p-6 md:p-8">
    <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1a5f2a]/10">
        <Video className="h-7 w-7 text-[#1a5f2a]" />
      </div>
      <div>
        <h2 className="mb-1 text-xl font-bold text-gray-900">
          Transparency in trade
        </h2>
        <p className="text-gray-600">
          These videos show the quality of the products we import and export —
          bananas, green chillies, and coconuts — and how we handle and store
          them.
        </p>
      </div>
    </div>
  </div>
);

export default VideosIntro;
