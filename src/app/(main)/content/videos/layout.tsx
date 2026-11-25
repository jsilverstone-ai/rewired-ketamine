import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Ketamine Therapy Education | Aventura",
  description: "Watch educational videos about ketamine therapy, what to expect, and mental wellness from our locally owned Aventura clinic. ¡Hablamos Español!",
  openGraph: {
images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
title: "Videos | What to Expect at Rewired Ketamine",
description: "Watch videos about visits, care, and education from our locally owned ketamine clinic in Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/videos",
    languages: {
      en: "https://www.rewiredketamine.com/content/videos",
      es: "https://www.rewiredketamine.com/es/content/videos",
      "x-default": "https://www.rewiredketamine.com/content/videos",
    },
  },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return children;
}