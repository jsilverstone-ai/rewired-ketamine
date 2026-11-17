import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Infusion Near Me: Aventura Clinic Serving North Miami and Miami",
  description: "Looking for ketamine infusion near me in North Miami or Miami? Our Aventura clinic offers fully guided IV sessions. Address, parking, and next steps. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Infusion Near Me | Rewired Ketamine Aventura",
    description: "In-clinic IV ketamine at our Aventura office for patients from North Miami, Miami, and Fort Lauderdale.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-infusion-near-me-aventura-north-miami",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}