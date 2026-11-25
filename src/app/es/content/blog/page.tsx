import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";
import { blogPostsEs, BLOG_ES_BASE } from "@/data/blog-posts-es";

export default function SpanishBlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeaderEs />

      {/* HERO */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Blog en Español</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
          Artículos escritos en español sobre la depresión, la ansiedad, el trauma y la terapia con ketamina, con revisión
          médica y fuentes confiables. Desde nuestra clínica de propiedad local en Aventura, para Miami y el Sur de Florida.
        </p>
        <p className="text-[#C9A66B] font-bold text-lg">
          <Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link>
        </p>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsEs.map((post) => (
              <Link
                key={post.slug}
                href={`${BLOG_ES_BASE}/${post.slug}`}
                className="block bg-white border border-[#eee] rounded-2xl p-6 hover:shadow-lg transition"
              >
                <p className="text-sm text-[#C9A66B] font-semibold mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-[#0B1D36] mb-3">{post.title}</h2>
                <p className="text-[#555] text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-[#555] mt-12">
            ¿Busca más artículos? También tenemos un{" "}
            <Link href="/content/blog" className="text-[#C9A66B] font-semibold hover:underline" hrefLang="en">
              blog en inglés
            </Link>{" "}
            con más temas.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Tiene preguntas?</h2>
        <p className="text-lg text-[#555] mb-6 max-w-3xl mx-auto">
          Reserve una consulta gratuita, en español. Sin presión, solo respuestas honestas.
        </p>
        <Link
          href="/es#contact"
          className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition"
        >
          Reservar Consulta Gratuita
        </Link>
        <p className="mt-4 text-sm text-[#555]">
          O llame o envíe un mensaje de texto al{" "}
          <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B] transition">(305) 676-6070</a>
        </p>
      </section>

      <SiteFooterEs />
    </main>
  );
}
