import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Ketamine Infusion Therapy A Breakthrough Or Just A Trend?",
  description: "A trust-focused look at ketamine infusion therapy in Florida. Locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Is Ketamine a Breakthrough or a Trend? | Rewired Ketamine",
    description: "Educational guidance for people asking if ketamine is legitimate.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/is-ketamine-infusion-therapy-a-breakthrough-or-just-a-trend",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}