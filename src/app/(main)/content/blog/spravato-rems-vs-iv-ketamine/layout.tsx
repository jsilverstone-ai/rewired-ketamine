import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spravato REMS vs IV Ketamine | Aventura",
  description: "How Spravato (esketamine) works under REMS at our Aventura clinic, and how it differs from IV ketamine. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Spravato REMS vs IV Ketamine | Rewired Ketamine Aventura",
    description: "In-clinic esketamine under REMS, and how it differs from IV ketamine.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/spravato-rems-vs-iv-ketamine",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}