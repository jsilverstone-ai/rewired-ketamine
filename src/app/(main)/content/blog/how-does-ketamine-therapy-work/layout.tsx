import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Does Ketamine Therapy Work?",
  description: "Understanding the science behind ketamine therapy at our locally owned Aventura clinic. Fully guided sessions available. Serving South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "How Does Ketamine Therapy Work? | Rewired Ketamine",
    description: "A clear explanation of how ketamine may support mental wellness.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/how-does-ketamine-therapy-work",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

