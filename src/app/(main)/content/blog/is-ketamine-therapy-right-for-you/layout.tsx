import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Ketamine Therapy Right For You? | Aventura",
  description: "Wondering if ketamine therapy is right for you? Learn what a good candidate may look like at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Is Ketamine Therapy Right For You? | Rewired Ketamine",
    description: "A consult-focused guide for patients in Miami and Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/is-ketamine-therapy-right-for-you",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}