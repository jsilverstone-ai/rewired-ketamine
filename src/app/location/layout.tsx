import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | Ketamine Clinic in Aventura, South Florida",
  description: "Visit Rewired Ketamine at 2820 NE 214th St #1002, Aventura, FL 33180. Locally owned clinic serving Miami, Fort Lauderdale and South Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Location | Rewired Ketamine Aventura",
    description: "Conveniently located in Aventura, Florida. Easy access for patients from Miami and Fort Lauderdale.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/location",
  },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}