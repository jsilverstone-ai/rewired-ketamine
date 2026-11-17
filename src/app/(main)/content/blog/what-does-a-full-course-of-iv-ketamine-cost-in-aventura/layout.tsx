import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does a Full Course of IV Ketamine Cost in Aventura and Miami?",
  description: "See real package pricing for IV ketamine at our locally owned Aventura clinic. Compare single sessions vs packages, guided options, and how total cost differs from national at-home programs. ¡Hablamos Español!",
  openGraph: {
    title: "IV Ketamine Cost in Aventura & Miami | Rewired Ketamine",
    description: "Transparent package pricing for fully guided IV sessions at our Aventura clinic serving Miami and South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-does-a-full-course-of-iv-ketamine-cost-in-aventura",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}