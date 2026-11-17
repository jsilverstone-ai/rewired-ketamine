import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Myths About Ketamine Therapy For PTSD | Aventura",
  description: "Clearing up common myths about ketamine therapy for PTSD at our locally owned Aventura clinic serving Miami and South Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Myths About Ketamine Therapy for PTSD | Rewired Ketamine",
    description: "Trust-building, educational content on ketamine and PTSD.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/common-myths-about-ketamine-therapy-for-ptsd",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}