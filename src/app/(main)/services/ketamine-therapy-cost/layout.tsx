import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Therapy Cost in Aventura | Rewired Ketamine",
  description: "IV ketamine is usually cash-pay. Spravato may be covered when REMS criteria are met. Clear cost information at our Aventura clinic serving Miami and South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Therapy Cost | Rewired Ketamine Aventura",
    description: "Cost and insurance information for IV ketamine and Spravato at our South Florida clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/ketamine-therapy-cost",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}