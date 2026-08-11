import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for PTSD in Aventura | South Florida",
  description: "Ketamine therapy support for PTSD at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for PTSD | Rewired Ketamine Aventura",
    description: "Thoughtful ketamine support for individuals living with PTSD in South Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/ptsd",
  },
};

export default function PTSDLayout({ children }: { children: React.ReactNode }) {
  return children;
}