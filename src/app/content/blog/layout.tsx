import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ketamine Therapy Insights from Aventura",
  description: "Read articles about ketamine therapy, mental wellness, depression, anxiety, PTSD and more from our locally owned Aventura clinic. Serving Miami & South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Blog | Rewired Ketamine Aventura",
    description: "Helpful insights on ketamine therapy and mental health from our South Florida clinic.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}