import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can Ketamine Help with Chronic Fatigue? | Aventura",
  description: "A recent Rutgers study explores whether ketamine may help reduce symptoms of chronic fatigue. Learn what this could mean for patients seeking ketamine treatment in Aventura, Miami, and South Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine and Chronic Fatigue | Rewired Ketamine Aventura",
    description: "New research suggests ketamine may help with chronic fatigue. Local care available in Aventura and South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-chronic-fatigue-south-florida",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}