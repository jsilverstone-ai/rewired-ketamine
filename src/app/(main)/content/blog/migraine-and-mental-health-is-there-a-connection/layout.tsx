import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migraine and Mental Health: Is There A Connection? | Aventura",
  description: "How migraines and mental health can overlap. Locally owned Aventura clinic serving Miami. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Migraine and Mental Health | Rewired Ketamine",
    description: "Understanding the connection between migraines and mental wellness.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/migraine-and-mental-health-is-there-a-connection",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}