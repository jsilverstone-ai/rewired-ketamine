import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import RootHtml from "@/components/RootHtml";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rewiredketamine.com"),
  title: {
    default: "Ketamine Clinic Miami & Aventura | Guided IV Therapy | Rewired Ketamine",
    template: "%s | Rewired Ketamine Aventura",
  },
  description:
    "Rewired Ketamine is a leading ketamine clinic Miami patients trust, located in Aventura. Fully guided sessions available for treatment-resistant depression, anxiety, PTSD, and chronic pain. Serving Miami, Fort Lauderdale & South Florida. ¡Hablamos Español!",
  keywords: [
    "ketamine therapy Miami",
    "ketamine clinic Miami",
    "ketamine therapy Aventura",
    "ketamine infusion South Florida",
    "treatment resistant depression Aventura",
    "ketamine for anxiety Fort Lauderdale",
    "locally owned ketamine clinic",
    "hablamos español ketamine",
  ],
  authors: [{ name: "Rewired Ketamine" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Rewired Ketamine | Ketamine Therapy in Aventura, South Florida",
    description:
      "Locally owned ketamine clinic in Aventura offering fully guided sessions for depression, anxiety, PTSD and chronic pain. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
    url: "https://www.rewiredketamine.com",
    siteName: "Rewired Ketamine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.rewiredketamine.com/og/og-home.png"],
    title: "Rewired Ketamine | Ketamine Therapy in Aventura",
    description:
      "Locally owned ketamine clinic in Aventura, FL. Fully guided sessions available. ¡Hablamos Español!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com",
    languages: {
      en: "https://www.rewiredketamine.com",
      es: "https://www.rewiredketamine.com/es",
      "x-default": "https://www.rewiredketamine.com",
    },
  },
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <RootHtml lang="en">
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </RootHtml>
  );
}
