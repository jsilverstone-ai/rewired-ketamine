import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ketamine Clinic Miami & Aventura | Guided IV Therapy | Rewired Ketamine",
    template: "%s | Rewired Ketamine Aventura"
  },
  description: "Rewired Ketamine is a leading ketamine clinic Miami patients trust, located in Aventura. Fully guided sessions available for treatment-resistant depression, anxiety, PTSD, and chronic pain. Serving Miami, Fort Lauderdale & South Florida. ¡Hablamos Español!",  keywords: [
    "ketamine therapy Miami",
    "ketamine clinic Miami",
    "ketamine therapy Aventura",
    "ketamine infusion South Florida",
    "treatment resistant depression Aventura",
    "ketamine for anxiety Fort Lauderdale",
    "locally owned ketamine clinic",
    "hablamos español ketamine"
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
    title: "Rewired Ketamine | Ketamine Therapy in Aventura, South Florida",
    description: "Locally owned ketamine clinic in Aventura offering fully guided sessions for depression, anxiety, PTSD and chronic pain. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
    url: "https://rewiredketamine.com",
    siteName: "Rewired Ketamine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewired Ketamine | Ketamine Therapy in Aventura",
    description: "Locally owned ketamine clinic in Aventura, FL. Fully guided sessions available. ¡Hablamos Español!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rewiredketamine.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLD85SC9');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLD85SC9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}