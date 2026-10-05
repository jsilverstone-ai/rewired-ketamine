import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spravato in Aventura | Esketamine Nasal Spray",
  description: "Spravato (esketamine) at our REMS-certified Aventura clinic. FDA-approved for treatment-resistant depression in adults. Prior authorization with Cigna, United, and Aetna. ¡Hablamos Español!",
  openGraph: {
    title: "Spravato in Aventura | Rewired Ketamine",
    description: "In-clinic esketamine nasal spray with monitoring. Coverage depends on your plan.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/spravato",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}