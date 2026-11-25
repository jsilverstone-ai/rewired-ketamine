import type { Metadata } from "next";

const canonical = "https://www.rewiredketamine.com/services/ketamine-insurance";
const ogImage = "https://www.rewiredketamine.com/og/og-home.png";

export const metadata: Metadata = {
  title: "Ketamine & Spravato Insurance in Aventura | Rewired",
  description:
    "Spravato is billed in-network with UnitedHealthcare, Cigna and Aetna. IV ketamine is cash-pay with a superbill. See how costs add up. ¡Hablamos Español!",
  robots: { index: true, follow: true },
  alternates: {
    canonical,
    languages: {
      en: "https://www.rewiredketamine.com/services/ketamine-insurance",
      es: "https://www.rewiredketamine.com/es/services/ketamine-insurance",
      "x-default": "https://www.rewiredketamine.com/services/ketamine-insurance",
    },
  },
  openGraph: {
    type: "website",
    url: canonical,
    siteName: "Rewired Ketamine",
    locale: "en_US",
    alternateLocale: ["es_US"],
    title: "Ketamine & Spravato Insurance in Aventura | Rewired Ketamine",
    description:
      "How insurance, deductibles, and superbills work for Spravato and IV ketamine at our Aventura clinic.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Rewired Ketamine — Aventura, Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketamine & Spravato Insurance in Aventura | Rewired Ketamine",
    description:
      "How insurance, deductibles, and superbills work for Spravato and IV ketamine at our Aventura clinic.",
    images: [ogImage],
  },
};

export default function KetamineInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
