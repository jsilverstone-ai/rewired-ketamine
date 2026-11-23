import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootHtml({
  lang,
  children,
}: {
  lang: "en" | "es";
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
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
        <script
          defer
          type="application/javascript"
          src="https://pulse.clickguard.com/s/acczNAeLbdZ5F/astJamLAqIGye"
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>
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
