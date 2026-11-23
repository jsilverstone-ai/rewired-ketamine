import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishContent() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeaderEs />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contenido</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          Artículos, videos y noticias sobre terapia de ketamina. ¡Hablamos Español!
        </p>
      </section>

      {/* CONTENT LINKS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <Link href="/es/content/blog" className="bg-[#F8F5F0] rounded-2xl p-8 text-center hover:shadow-md transition">
            <h2 className="text-xl font-bold text-[#0B1D36] mb-2">Blog</h2>
            <p className="text-[#555] text-sm">Artículos educativos</p>
          </Link>
          <Link href="/es/content/videos" className="bg-[#F8F5F0] rounded-2xl p-8 text-center hover:shadow-md transition">
            <h2 className="text-xl font-bold text-[#0B1D36] mb-2">Videos</h2>
            <p className="text-[#555] text-sm">Videos educativos</p>
          </Link>
          <Link href="/es/content/ketamine-in-the-news" className="bg-[#F8F5F0] rounded-2xl p-8 text-center hover:shadow-md transition">
            <h2 className="text-xl font-bold text-[#0B1D36] mb-2">En las Noticias</h2>
            <p className="text-[#555] text-sm">Últimas investigaciones</p>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooterEs />
    </main>
  );
}
