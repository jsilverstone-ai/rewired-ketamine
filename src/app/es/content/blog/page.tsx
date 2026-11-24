import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishBlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content"><p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p><h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1><p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">Artículos educativos sobre terapia con ketamina.</p><p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p></section>
      <section className="py-16 px-6 bg-white"><div className="max-w-3xl mx-auto"><p className="text-lg text-[#555] mb-6">Nuestro blog ofrece artículos educativos sobre terapia con ketamina, cómo funciona, qué esperar y cómo puede apoyar el cuidado de la salud mental. Visite la versión en inglés para los artículos completos, o explore nuestro <Link href="/es/content" className="text-[#C9A66B] font-semibold hover:underline">contenido</Link> en español.</p><p className="text-[#555]">Para más información, visite nuestra <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">página de inicio</Link> o <Link href="/es/services" className="text-[#C9A66B] font-semibold hover:underline">servicios</Link>.</p></div></section>
      <section className="py-16 px-6 bg-[#F8F5F0] text-center"><h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para aprender más?</h2><Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">Reservar Consulta Gratuita</Link></section>
      <SiteFooterEs />
    </main>
  );
}
