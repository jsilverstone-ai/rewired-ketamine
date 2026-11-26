import Link from "next/link";
import ScreenerPromo from "@/components/tools/ScreenerPromo";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";
import { CrisisNote } from "@/components/RelatedQuestions";

export default function SpanishDepressionPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* HERO */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Depresión</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">Apoyo con ketamina totalmente guiada para la depresión.</p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#555] mb-6">La depresión puede sentirse pesada, persistente y difícil de manejar solo con tratamientos tradicionales. En nuestra clínica de propiedad local en Aventura, ofrecemos terapia con ketamina como una opción de apoyo para personas que buscan alivio cuando otros enfoques no han sido suficientes.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Cómo la ketamina puede ayudar con la depresión</h2>
          <p className="text-[#555] mb-4">La ketamina funciona de manera diferente a los antidepresivos estándar. Interactúa con el sistema de glutamato y puede apoyar el crecimiento de nuevas conexiones neuronales. Muchas personas notan un cambio en el estado de ánimo y la perspectiva más rápidamente que con las terapias convencionales.</p>
          <p className="text-[#555] mb-6">Las sesiones totalmente guiadas están disponibles para quienes prefieren apoyo adicional durante el tratamiento. Nuestro enfoque se centra en la seguridad, la comodidad y el cuidado individualizado en un entorno privado y calmado.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Cuando los tratamientos tradicionales no han sido suficientes</h2>
          <p className="text-[#555] mb-6">Para algunas personas, los medicamentos estándar y la terapia brindan un alivio limitado. La terapia con ketamina puede ofrecer otro camino, especialmente en casos de depresión resistente al tratamiento. Los resultados a menudo se notan más rápidamente que con los enfoques tradicionales. Los resultados individuales varían.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Cuidado en nuestra clínica de Aventura</h2>
          <p className="text-[#555] mb-6">Como práctica de propiedad local que sirve a Miami, Fort Lauderdale y el Sur de Florida, priorizamos un cuidado cuidadoso y médicamente supervisado. ¡Hablamos Español!</p>
          <p className="text-[#555]">Visite nuestra <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">página de inicio</Link> o la página de <Link href="/es/services" className="text-[#C9A66B] font-semibold hover:underline">servicios</Link> para saber cómo comienzan las visitas.</p>
        </div>
      </section>

      <section className="pb-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <CrisisNote lang="es" />
        </div>
      </section>

      <ScreenerPromo lang="es" tool="phq9" />


      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para explorar apoyo para la depresión?</h2>
        <p className="text-lg text-[#555] mb-6">Programe una consulta gratuita en nuestra clínica de Aventura. Sin presión — solo información clara y orientación compasiva.</p>
        <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">Reservar Consulta Gratuita</Link>
      </section>

      {/* FOOTER */}
      <SiteFooterEs />
    </main>
  );
}
