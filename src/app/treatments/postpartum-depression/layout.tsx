import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Postpartum Depression | Aventura, FL",
  description: "Support for postpartum depression with ketamine therapy at our locally owned Aventura clinic. Fully guided sessions available. Serving South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Postpartum Depression | Rewired Ketamine",
    description: "Thoughtful care during a critical time for new mothers in South Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/postpartum-depression",
  },
};

export default function PostpartumDepressionLayout({ children }: { children: React.ReactNode }) {
  return children;
}