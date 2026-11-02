import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IV Ketamine vs Spravato | Rewired Ketamine Aventura",
  description: "Clinical comparison of IV ketamine and Spravato (esketamine) at our Aventura clinic. Serving Miami, Fort Lauderdale & South Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "IV Ketamine vs Spravato | Rewired Ketamine Aventura",
    description: "Short clinical comparison of IV ketamine and Spravato at our South Florida clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/iv-ketamine-vs-spravato",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}