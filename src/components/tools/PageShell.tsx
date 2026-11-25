import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";
import { JsonLd } from "@/components/JsonLd";
import { ReviewedBy } from "./ReviewAndSources";

/** Shared layout for the tool, HSA/FSA and insurer pages (same design system as the cost/insurance pages). */
export default function PageShell({
  lang,
  title,
  subtitle,
  jsonLd,
  altHref,
  children,
}: {
  lang: "en" | "es";
  title: string;
  subtitle: string;
  jsonLd: Record<string, unknown>;
  /** Matching page in the other language (for the header language switch). */
  altHref: string;
  children: React.ReactNode;
}) {
  const es = lang === "es";
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
        {es ? <SiteHeaderEs englishHref={altHref} /> : <SiteHeader spanishHref={altHref} />}
        <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
          <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">{es ? "AVENTURA • SUR DE FLORIDA" : "AVENTURA • SOUTH FLORIDA"}</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">{title}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">{subtitle}</p>
          <p className="text-[#C9A66B] font-bold text-lg">
            <Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link>
          </p>
        </section>
        <section id="main-content" className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <ReviewedBy lang={lang} />
            </div>
            {children}
          </div>
        </section>
        <section className="py-16 px-6 bg-[#F8F5F0] text-center">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">{es ? "¿Listo(a) para el siguiente paso?" : "Ready to take the next step?"}</h2>
          <p className="text-lg text-[#555] mb-6 max-w-3xl mx-auto">
            {es
              ? "Reserve una consulta gratuita. Sin presión, solo respuestas honestas."
              : "Book a free consultation. No pressure — just honest answers."}
          </p>
          <Link
            href={es ? "/es#contact" : "/#contact"}
            className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition"
          >
            {es ? "Consulta Gratuita" : "Book Free Consultation"}
          </Link>
          <p className="mt-4 text-sm text-[#555]">
            {es ? "O llame o envíe un mensaje de texto al " : "Or call/text "}
            <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B] transition">(305) 676-6070</a>
          </p>
        </section>
        {es ? <SiteFooterEs /> : <SiteFooter />}
      </main>
    </>
  );
}
