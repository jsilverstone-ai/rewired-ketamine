import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Burnout & High-Stress Professionals | Aventura, FL",
  description:
    "Guided IV ketamine sessions for high-functioning professionals in Aventura. Transparent package pricing. Serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!",
  keywords:
    "ketamine for burnout Aventura, ketamine therapy for professionals Miami, high-stress ketamine Fort Lauderdale, ketamine clinic Aventura, locally owned ketamine clinic",
  openGraph: {
    title: "Ketamine for Burnout & High-Stress Professionals | Rewired Ketamine",
    description:
      "Guided IV sessions with published package rates. Private monitored rooms in Aventura.",
  },
};

export default function BurnoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
