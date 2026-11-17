import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Ketamine Treatment For Depression? | Miami & Aventura",
  description: "Understanding ketamine treatment for depression and treatment-resistant depression at our locally owned Aventura clinic serving Miami. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Treatment For Depression | Rewired Ketamine",
    description: "How ketamine may fit into care for depression in Miami and Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-is-ketamine-treatment-for-depression",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}