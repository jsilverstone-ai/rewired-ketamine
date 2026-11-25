import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Ketamine-Assisted Therapy and How Does It Work?",
  description: "A clear explanation of ketamine-assisted therapy from our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "What Is Ketamine-Assisted Therapy? | Rewired Ketamine Aventura",
    description: "Understanding ketamine-assisted therapy and the process at our South Florida clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-is-ketamine-assisted-therapy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}