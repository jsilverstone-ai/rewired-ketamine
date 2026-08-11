import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for OCD in Aventura | South Florida",
  description: "Ketamine therapy support for OCD at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for OCD | Rewired Ketamine Aventura",
    description: "Exploring ketamine as part of a broader plan for OCD.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/ocd",
  },
};

export default function OCDLayout({ children }: { children: React.ReactNode }) {
  return children;
}