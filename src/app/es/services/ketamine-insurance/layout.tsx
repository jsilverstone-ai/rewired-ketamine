import type { Metadata } from "next";

const canonical = "https://www.rewiredketamine.com/es/services/ketamine-insurance";
const ogImage = "https://www.rewiredketamine.com/og/og-home-es.png";

export const metadata: Metadata = {
  title: "Seguro y Ketamina en Aventura: Spravato e IV | Rewired",
  description:
    "Spravato se factura dentro de la red con UnitedHealthcare, Cigna y Aetna. La ketamina IV es de pago directo con superfactura. ¡Hablamos Español!",
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
    locale: "es_US",
    alternateLocale: ["en_US"],
    title: "Seguro y Ketamina en Aventura | Rewired Ketamine",
    description:
      "Cómo funcionan el seguro, los deducibles y la superfactura para Spravato y la ketamina IV en nuestra clínica de Aventura.",
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
    title: "Seguro y Ketamina en Aventura | Rewired Ketamine",
    description:
      "Cómo funcionan el seguro, los deducibles y la superfactura para Spravato y la ketamina IV en nuestra clínica de Aventura.",
    images: [ogImage],
  },
};

export default function KetamineInsuranceEsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
