import type { VideoItem } from "./types";

export const videos: VideoItem[] = [
  {
    id: "banana-1",
    src: "/videos/banana-1.mp4",
    title: "Banana shipment",
    product: "Banana",
    description: "Fresh bananas container opening and quality check.",
  },
  {
    id: "banana-2",
    src: "/videos/banana-2.mp4",
    title: "Banana shipment (2)",
    product: "Banana",
    description: "Premium bananas from our trusted suppliers.",
  },
  {
    id: "green-chillies-1",
    src: "/videos/green-chillies-1.mp4",
    title: "Green chillies",
    product: "Green Chillies",
    description: "Fresh green chillies container opening and inspection.",
  },
  {
    id: "green-chillies-2",
    src: "/videos/green-chillies-2.mp4",
    title: "Green chillies (2)",
    product: "Green Chillies",
    description: "Quality green chillies readyfor distribution.",
  },
  {
    id: "coconut-1",
    src: "/videos/coconut-1.mp4",
    title: "Coconut shipment",
    product: "Coconut",
    description: "Premium coconuts ready for market.",
  },
  {
    id: "coconut-2",
    src: "/videos/coconut-2.mp4",
    title: "Coconut shipment (2)",
    product: "Coconut",
    description: "Coconuts loading for shipment.",
  },
];

export const productOrder = ["Banana", "Green Chillies", "Coconut"] as const;

/** Path to background music played over lightbox videos (in public folder)*/
export const BACKGROUND_MUSIC_SRC = "/videos/background-music.m4a";
