import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Ketamine Clinics Treat Treatment-Resistant Depression | Aventura",
  description: "How ketamine clinics may support treatment-resistant depression at our locally owned Aventura clinic serving Miami. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine Clinics and Treatment-Resistant Depression | Rewired Ketamine",
    description: "A calm look at ketamine for treatment-resistant depression in Miami and Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/how-ketamine-clinics-treat-treatment-resistant-depression",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}