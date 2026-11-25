import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Prepare Mentally and Physically For Ketamine Therapy",
  description: "How to prepare for your first ketamine session at our locally owned Aventura clinic serving Miami. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "How To Prepare For Ketamine Therapy | Rewired Ketamine",
    description: "Practical first-session preparation for Aventura patients.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/how-to-prepare-mentally-and-physically-for-ketamine-therapy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}