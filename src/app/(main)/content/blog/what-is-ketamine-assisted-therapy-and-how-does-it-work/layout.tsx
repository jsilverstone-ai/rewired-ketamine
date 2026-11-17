import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Ketamine-Assisted Therapy and How Does It Work? | Aventura",
  description: "A clear explainer of ketamine-assisted therapy and how it may work at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "What Is Ketamine-Assisted Therapy? | Rewired Ketamine",
    description: "How ketamine-assisted therapy works at our South Florida clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-is-ketamine-assisted-therapy-and-how-does-it-work",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}