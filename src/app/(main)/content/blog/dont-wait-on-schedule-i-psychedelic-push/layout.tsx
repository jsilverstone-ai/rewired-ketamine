import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Don’t Wait on Schedule I: Ketamine vs the Psychedelic Pipeline | Aventura",
  description: "What the Trump-era psychedelic policy push means for patients in Miami and Aventura — and why ketamine and esketamine are already available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Don’t Wait on Schedule I | Rewired Ketamine Aventura",
    description: "Policy headlines vs treatments that are already in clinics.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/dont-wait-on-schedule-i-psychedelic-push",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}