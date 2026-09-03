import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Benefits Of Ketamine Treatment For PTSD Patients | Miami",
  description: "A careful overview of ketamine therapy for PTSD at our locally owned Aventura clinic serving Miami. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Treatment for PTSD Patients | Rewired Ketamine",
    description: "Educational benefits overview without over-promising.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/top-benefits-of-ketamine-treatment-for-ptsd-patients",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}