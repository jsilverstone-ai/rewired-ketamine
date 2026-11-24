import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function KetamineTherapyCostEsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">¿Cuánto cuesta la terapia con ketamina en Aventura y Miami?</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Información clara sobre los precios de ketamina IV y Spravato en nuestra clínica de propiedad local en Aventura. Sirviendo a Miami, Fort Lauderdale y el Sur de Florida.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">¿Cuánto cuesta la terapia con ketamina en Aventura y Miami?</h2>
          <p className="text-[#555] mb-10">
            En Rewired Ketamine mostramos precios reales y explicamos qué está incluido. Compara el cuidado total — guía, monitoreo, salas privadas y próximos pasos — no solo el precio de la infusión.
          </p>

          <h3 className="text-xl font-semibold text-[#0B1D36] mb-6">Precios de Ketamina IV</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#F8F5F0] rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-[#0B1D36]">Protocolo de Salud Mental</h4>
              <p className="text-sm text-[#555] mt-1 mb-4">Infusión de Ketamina IV de 1 hora</p>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Sesión individual</span><span className="font-semibold">$440</span></div>
                <div className="flex justify-between"><span>Paquete de 3</span><span className="font-semibold">$1,200</span></div>
                <div className="flex justify-between"><span>Paquete de 6</span><span className="font-semibold">$2,300</span></div>
              </div>
            </div>
            <div className="bg-[#F8F5F0] rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-[#0B1D36]">Protocolo de Dolor Crónico</h4>
              <p className="text-sm text-[#555] mt-1 mb-4">Infusión de Ketamina IV de 2 horas</p>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Sesión individual</span><span className="font-semibold">$590</span></div>
                <div className="flex justify-between"><span>Paquete de 3</span><span className="font-semibold">$1,700</span></div>
                <div className="flex justify-between"><span>Paquete de 6</span><span className="font-semibold">$3,200</span></div>
              </div>
            </div>
            <div className="bg-[#F8F5F0] rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-[#0B1D36]">Sesiones Guiadas</h4>
              <p className="text-sm text-[#555] mt-1 mb-4">1 hora IV + Guía</p>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Sesión individual</span><span className="font-semibold">$590</span></div>
                <div className="flex justify-between"><span>Paquete de 3</span><span className="font-semibold">$1,500</span></div>
                <div className="flex justify-between"><span>Paquete de 6</span><span className="font-semibold">$2,900</span></div>
              </div>
            </div>
            <div className="bg-[#F8F5F0] rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-[#0B1D36]">Sesiones Guiadas</h4>
              <p className="text-sm text-[#555] mt-1 mb-4">2 horas IV + Guía</p>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Sesión individual</span><span className="font-semibold">$690</span></div>
                <div className="flex justify-between"><span>Paquete de 3</span><span className="font-semibold">$1,925</span></div>
                <div className="flex justify-between"><span>Paquete de 6</span><span className="font-semibold">$4,000</span></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#555] mb-10">Pregúntanos sobre descuentos disponibles. Se requiere consulta antes del tratamiento.</p>

          <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">¿Qué cambia el precio?</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#555] mb-10">
            <li>Protocolo de salud mental de 1 hora vs protocolo de dolor crónico de 2 horas</li>
            <li>Sesión estándar vs sesión completamente guiada (un miembro del equipo clínico permanece contigo)</li>
            <li>Sesión individual vs paquete de 3 o 6</li>
            <li>Consulta, monitoreo continuo, sala de tratamiento privada y seguimiento</li>
            <li>Apoyo de integración (incluido en opciones guiadas o disponible por separado)</li>
          </ul>

          <p className="text-[#555] mb-6">
            Nuestro protocolo IV de salud mental publicado comienza en $440 por sesión y $2,300 por seis. Las opciones guiadas se listan por separado para que puedas ver el costo total de un curso típico.
          </p>
          <p className="text-[#555] mb-10">
            La ketamina IV suele ser de pago en efectivo. Spravato (espray nasal de esketamina) puede estar cubierto por algunos planes de seguro cuando se cumplen los criterios REMS. La cobertura no está garantizada y generalmente se requiere autorización previa.
          </p>

          <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">Si estás comparando clínicas de ketamina en Aventura, haz estas preguntas</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#555]">
            <li>¿La clínica se enfoca en salud mental, o la ketamina es uno de muchos servicios de bienestar?</li>
            <li>¿Quién permanece contigo durante la infusión?</li>
            <li>¿La sesión es completamente guiada?</li>
            <li>¿Qué monitoreo se utiliza?</li>
            <li>¿Qué sucede después de la infusión?</li>
            <li>¿La integración está incluida o es separada?</li>
            <li>¿Cuál es el costo total de un curso típico de inducción?</li>
            <li>Si se discute Spravato, ¿la clínica está certificada REMS y manejarán la autorización previa?</li>
          </ul>
          <p className="mt-8 text-[#555]">
            Rewired Ketamine hace claros los precios, la guía, el monitoreo y los próximos pasos. Somos una clínica de propiedad local en Aventura que sirve a Miami, Fort Lauderdale y el Sur de Florida.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-[#555] mb-6">Reserve una consulta gratuita. Sin presión — solo respuestas honestas y un camino claro hacia adelante.</p>
        <Link href="/es#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">
          Reservar Consulta Gratuita
        </Link>
        <p className="mt-4 text-sm text-[#555]">O llama/texto al (305) 676-6070</p>
      </section>

      {/* Footer */}
      <SiteFooterEs />
    </main>
  );
}
