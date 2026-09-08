import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IV & At-Home Ketamine Therapy | Services in Aventura",
  description: "Explore ketamine infusion, home ketamine, functional wellness, medical management, and talk therapy at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Infusion and At-Home Therapy in Aventura",
    description: "Ketamine clinic in Aventura serving Miami and South Florida. IV ketamine infusion, at-home options, and fully guided sessions available. ¡Hablamos Español!",
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