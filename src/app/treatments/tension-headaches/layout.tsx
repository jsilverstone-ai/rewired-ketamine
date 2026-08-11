import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Tension Headaches | Aventura, FL",
  description: "Ketamine support for tension headaches and related pain at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Tension Headaches | Rewired Ketamine",
    description: "Exploring ketamine as part of care for persistent tension headaches.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/tension-headaches",
  },
};

export default function TensionHeadachesLayout({ children }: { children: React.ReactNode }) {
  return children;
}