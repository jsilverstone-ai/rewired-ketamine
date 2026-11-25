import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Ketamine Lower Blood Pressure? What to Expect",
  description: "Ketamine usually raises blood pressure for a short time rather than lowering it. How we screen and monitor blood pressure at our Aventura clinic, and what to tell us. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Does Ketamine Lower Blood Pressure? | Rewired Ketamine",
    description: "How ketamine affects blood pressure and heart rate, and how we keep sessions safe.",
    type: "article",
    url: "https://www.rewiredketamine.com/content/blog/does-ketamine-lower-blood-pressure",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/does-ketamine-lower-blood-pressure",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
