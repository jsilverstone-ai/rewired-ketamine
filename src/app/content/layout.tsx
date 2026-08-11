import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content | Blog, Videos & News | Rewired Ketamine Aventura",
  description: "Explore our blog, educational videos, and the latest ketamine news from our locally owned Aventura clinic. Serving Miami, Fort Lauderdale & South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Content | Rewired Ketamine Aventura",
    description: "Blog, videos, and news about ketamine therapy from our South Florida clinic.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content",
  },
};

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return children;
}