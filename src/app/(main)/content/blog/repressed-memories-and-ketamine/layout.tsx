import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repressed Memories and Ketamine: What to Know | Aventura",
  description: "Can ketamine bring up repressed memories? What people sometimes notice in sessions, what the research does and does not show, and how we support you in Aventura. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Repressed Memories and Ketamine | Rewired Ketamine",
    description: "What people sometimes notice during ketamine sessions, and how we help you make sense of it.",
    type: "article",
    url: "https://www.rewiredketamine.com/content/blog/repressed-memories-and-ketamine",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/repressed-memories-and-ketamine",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
