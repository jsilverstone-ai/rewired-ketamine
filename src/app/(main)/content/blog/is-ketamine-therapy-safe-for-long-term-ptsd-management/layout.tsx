import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Ketamine Therapy Safe For Long-Term PTSD Management?",
  description: "A careful look at ketamine therapy for PTSD and long-term planning at our locally owned Aventura clinic serving Miami. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Therapy and Long-Term PTSD Care | Rewired Ketamine",
    description: "Conservative, educational guidance for PTSD questions.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/is-ketamine-therapy-safe-for-long-term-ptsd-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}