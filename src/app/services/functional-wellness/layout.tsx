import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Functional Wellness | Rewired Ketamine Aventura",
  description: "Custom vitamins and functional wellness support integrated with ketamine therapy at our locally owned Aventura clinic. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    title: "Functional Wellness | Rewired Ketamine",
    description: "Personalized functional wellness and custom vitamin support alongside ketamine care.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/services/functional-wellness",
  },
};

export default function FunctionalWellnessLayout({ children }: { children: React.ReactNode }) {
  return children;
}