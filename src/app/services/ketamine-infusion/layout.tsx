import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Infusion Therapy in Aventura",
  description: "IV ketamine infusion therapy at our locally owned Aventura clinic. Fully guided sessions available for depression, anxiety, PTSD and chronic pain. Serving Miami & South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Infusion Therapy | Rewired Ketamine Aventura",
    description: "Professional IV ketamine infusions in a calm, private setting. Fully guided sessions available.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/services/ketamine-infusion",
  },
};

export default function KetamineInfusionLayout({ children }: { children: React.ReactNode }) {
  return children;
}