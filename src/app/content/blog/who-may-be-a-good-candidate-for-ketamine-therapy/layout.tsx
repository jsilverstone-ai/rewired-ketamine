import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who May Be A Good Candidate for Ketamine Therapy?",
  description: "Learn who may benefit from ketamine therapy at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Who May Be A Good Candidate for Ketamine Therapy? | Rewired Ketamine",
    description: "Guidance on candidacy for ketamine therapy in Aventura, Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog/who-may-be-a-good-candidate-for-ketamine-therapy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}