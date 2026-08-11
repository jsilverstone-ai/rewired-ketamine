import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Therapy for Anxiety | Aventura, FL",
  description: "Exploring ketamine therapy for anxiety at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Therapy for Anxiety | Rewired Ketamine",
    description: "Supportive ketamine options for anxiety in South Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog/ketamine-therapy-for-anxiety",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}