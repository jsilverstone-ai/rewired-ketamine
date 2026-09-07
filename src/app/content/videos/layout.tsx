import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Ketamine Therapy Education | Aventura",
  description: "Watch educational videos about ketamine therapy, what to expect, and mental wellness from our locally owned Aventura clinic. ¡Hablamos Español!",
  openGraph: {
title: "Videos | What to Expect at Rewired Ketamine",
description: "Watch videos about visits, care, and education from our locally owned ketamine clinic in Aventura.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/videos",
  },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return children;
}