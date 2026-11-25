import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Migraine and Mental Health Connection",
  description: "Understanding the link between migraines and mental health, and how ketamine may fit into care at our Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Migraine and Mental Health Connection | Rewired Ketamine",
    description: "Exploring the relationship between migraines and mental wellness.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/migraine-and-mental-health-connection",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}