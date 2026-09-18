import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Don’t Wait on Schedule I: Ketamine vs the Psychedelic Pipeline | Aventura",
  description: "What the Trump-era psychedelic policy push means for patients in Miami and Aventura — and why ketamine and esketamine are already available. ¡Hablamos Español!",
  openGraph: {
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