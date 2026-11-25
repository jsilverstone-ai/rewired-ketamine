import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can Ketamine Therapy Help Anxiety Disorders? | Miami",
  description: "Exploring how ketamine therapy may support anxiety disorders at our locally owned Aventura clinic serving Miami and South Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine Therapy for Anxiety | Rewired Ketamine",
    description: "A calm look at ketamine for anxiety in Miami and Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/can-ketamine-therapy-help-anxiety-disorders",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}