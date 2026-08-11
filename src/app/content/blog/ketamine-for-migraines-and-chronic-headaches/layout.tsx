import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Migraines and Chronic Headaches | Aventura",
  description: "Exploring ketamine for refractory migraines and chronic headaches at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Migraines | Rewired Ketamine Aventura",
    description: "Supportive care options for persistent migraines and headaches.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog/ketamine-for-migraines-and-chronic-headaches",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}