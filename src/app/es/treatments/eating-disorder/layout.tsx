import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trastorno Alimentario | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Cuidado sensible y colaborativo con ketamina para trastornos alimentarios en Aventura, FL. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/eating-disorder",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/eating-disorder",
      "es": "https://www.rewiredketamine.com/es/treatments/eating-disorder",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
