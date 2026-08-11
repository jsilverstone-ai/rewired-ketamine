import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Ketamine Therapy in Aventura",
  description: "Explore ketamine infusion, home ketamine, functional wellness, medical management, and talk therapy at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Our Services | Rewired Ketamine Aventura",
    description: "Ketamine infusion, home ketamine options, functional wellness and more at our locally owned Aventura clinic. Serving Miami & Fort Lauderdale.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}