import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Happens During Your First Visit To A Ketamine Clinic | Aventura",
  description: "A practical walkthrough of your first visit to our locally owned ketamine clinic in Aventura, serving Miami and South Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Your First Visit to a Ketamine Clinic | Rewired Ketamine",
    description: "What to expect at your first visit in Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-happens-during-your-first-visit-to-a-ketamine-clinic",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}