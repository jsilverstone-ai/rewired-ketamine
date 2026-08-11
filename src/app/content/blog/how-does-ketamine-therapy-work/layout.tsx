import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Does Ketamine Therapy Work?",
  description: "Understanding the science behind ketamine therapy at our locally owned Aventura clinic. Fully guided sessions available. Serving South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "How Does Ketamine Therapy Work? | Rewired Ketamine",
    description: "A clear explanation of how ketamine may support mental wellness.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog/how-does-ketamine-therapy-work",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}