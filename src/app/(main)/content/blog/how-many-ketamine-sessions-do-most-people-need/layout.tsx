import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Ketamine Sessions Do Most People Need — and What Does That Cost in Aventura?",
  description: "Most people begin with a 6-session induction. See why packages exist, how boosters are decided, and real pricing at our locally owned Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "How Many Ketamine Sessions Do Most People Need? | Rewired Ketamine",
    description: "Typical 6-session induction and package pricing at our Aventura clinic serving Miami and South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/how-many-ketamine-sessions-do-most-people-need",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}