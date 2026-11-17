import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Infusion in Miami | Aventura Clinic Guide",
  description: "What IV ketamine infusion looks like for Miami-area patients at our Aventura clinic. Session length, IV vs at-home, and who it may help. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Infusion in Miami | Rewired Ketamine",
    description: "Treatment overview for ketamine infusion Miami searches.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-infusion-in-miami-aventura-clinic",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}