import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Makes A Ketamine Clinic Trustworthy? | Aventura",
  description: "How to choose a safe ketamine clinic in Florida. What to look for at a locally owned Aventura practice serving Miami. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "What Makes A Ketamine Clinic Trustworthy? | Rewired Ketamine",
    description: "Trust signals for choosing a ketamine clinic in South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-makes-a-ketamine-clinic-trustworthy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}