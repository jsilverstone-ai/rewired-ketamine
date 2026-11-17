import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Conditions Can Ketamine Therapy Help Treat? | South Florida",
  description: "An overview of conditions people explore ketamine for, including depression, anxiety, PTSD, OCD, and chronic pain. Locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Conditions Ketamine Therapy May Support | Rewired Ketamine",
    description: "Depression, anxiety, PTSD, OCD, chronic pain, and more.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-conditions-can-ketamine-therapy-help-treat",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}