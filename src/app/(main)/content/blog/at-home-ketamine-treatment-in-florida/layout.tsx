import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "At-Home Ketamine Treatment in Florida: Options, Safety, and Cost",
  description: "Oral, nasal, and rectal at-home ketamine options at our Aventura clinic. Starting prices, screening requirements, and when in-clinic guided care is a better fit. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "At-Home Ketamine in Florida | Rewired Ketamine Aventura",
    description: "Clear options and pricing for at-home ketamine from our locally owned South Florida clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/at-home-ketamine-treatment-in-florida",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}