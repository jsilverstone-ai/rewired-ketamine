import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Therapy vs Traditional Talk Therapy | Aventura",
  description: "How ketamine-assisted therapy differs from traditional talk therapy — and how the two can work together at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine Therapy vs Talk Therapy | Rewired Ketamine",
    description: "Ketamine-assisted therapy can complement talk therapy, not replace it.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-makes-ketamine-therapy-different-from-traditional-talk-therapy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}