import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for PTSD: First Responders & Veterans in Florida",
  description: "A guide for Florida firefighters, police, EMS, and veterans considering ketamine for PTSD: screening, confidentiality, what sessions look like, and costs. Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for PTSD: First Responders & Veterans | Rewired Ketamine",
    description: "What firefighters, police, EMS, and veterans should know before considering ketamine for PTSD in South Florida.",
    type: "article",
    url: "https://www.rewiredketamine.com/content/blog/ketamine-ptsd-first-responders-veterans-florida",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-ptsd-first-responders-veterans-florida",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
