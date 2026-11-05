import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IV Ketamine vs Spravato in Aventura and Miami | Rewired Ketamine",
  description: "Compare IV ketamine and Spravato (esketamine) at Rewired Ketamine in Aventura. Learn the differences in route, setting, monitoring, insurance, and who each option may fit. Free consultation.",
  openGraph: {
    title: "IV Ketamine vs Spravato in Aventura and Miami",
    description: "Compare IV ketamine and Spravato at our Aventura clinic. Serving Miami and South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/iv-ketamine-vs-spravato",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}