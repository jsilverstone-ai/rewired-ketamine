import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spravato for Treatment-Resistant Depression | Aventura",
  description: "What a 2025 review says about Spravato (esketamine) for treatment-resistant depression. In-clinic, REMS-certified care in Aventura. ¡Hablamos Español!",
  openGraph: {
    title: "Spravato for Treatment-Resistant Depression | Rewired Ketamine",
    description: "In-clinic esketamine for treatment-resistant depression at our Aventura clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/spravato-for-treatment-resistant-depression",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}