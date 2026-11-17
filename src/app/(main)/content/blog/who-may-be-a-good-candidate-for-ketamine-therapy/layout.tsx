import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who May Be A Good Candidate For Ketamine Therapy? | Aventura",
  description: "Learn who may be a good candidate for ketamine therapy at our locally owned Aventura clinic serving Miami and South Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Who May Be A Good Candidate For Ketamine Therapy? | Rewired Ketamine",
    description: "An educational guide for patients considering ketamine treatment in Miami and Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/who-may-be-a-good-candidate-for-ketamine-therapy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}