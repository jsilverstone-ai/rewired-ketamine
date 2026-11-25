import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Jacob Silverstone on Ketamine Therapy and Trauma Healing",
  description: "Dr. Jacob Silverstone discusses ketamine therapy and trauma healing at our locally owned Aventura clinic. Serving Miami and South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Dr. Jacob Silverstone on Ketamine Therapy | Rewired Ketamine",
    description: "Conversation on ketamine therapy and trauma healing from our Aventura clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/dr-jacob-silverstone-ketamine-therapy-trauma-healing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}