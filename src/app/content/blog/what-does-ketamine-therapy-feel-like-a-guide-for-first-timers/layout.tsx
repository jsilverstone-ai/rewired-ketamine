import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does Ketamine Therapy Feel Like? | First-Timers Guide",
  description: "A first-timer’s guide to what ketamine therapy may feel like at our locally owned Aventura clinic serving Miami. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "What Ketamine Therapy Feels Like | Rewired Ketamine",
    description: "What first-time patients in Miami and Aventura can expect.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-does-ketamine-therapy-feel-like-a-guide-for-first-timers",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}