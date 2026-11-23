import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function KetamineInfusionEsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Infusión de Ketamina</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Sesiones IV totalmente guiadas en un entorno privado y tranquilo diseñado alrededor de usted.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p>
            Ofrecemos terapia de infusión de ketamina totalmente guiada en un entorno privado y tranquilo diseñado alrededor de usted. Cada sala se puede ajustar para crear el espacio que se sienta correcto: iluminación, sonido, temperatura y atmósfera son flexibles para que el entorno apoye su proceso.
          </p>
          <p>
            Los pacientes que buscan <strong>infusión de ketamina en Miami</strong> suelen venir de la ciudad y barrios cercanos a nuestra clínica de Aventura — las mismas salas, el mismo equipo. Si desea el menú más amplio de opciones IV y en casa, comience con <Link href="/es/services" className="text-[#C9A66B] font-semibold hover:underline">nuestros servicios</Link> o la <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">página de inicio</Link>. Las sesiones totalmente guiadas están disponibles.
          </p>
          <p>
            Nuestro enfoque de guía se basa en la compasión y una verdadera asociación. Caminamos junto a usted con cuidado e intención, creando las condiciones para insights significativos y cambios duraderos. Cada sesión es cuidadosamente supervisada para que se sienta seguro, apoyado y nunca solo.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1D36] mb-10">Precios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0B1D36]">Protocolo de Salud Mental</h3>
              <p className="text-sm text-[#555] mt-1 mb-4">Infusión de Ketamina IV de 1 hora</p>
              <div className="space-y-2 text-[#1a1a1a]">
                <div className="flex justify-between"><span>Sesión individual</span><span className="font-semibold">$440</span></div>
                <div className="flex justify-between"><span>Paquete de 3</span><span className="font-semibold">$1,200</span></div>
                <div className="flex justify-between"><span>Paquete de 6</span><span className="font-semibold">$2,300</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0B1D36]">Protocolo de Dolor Crónico</h3>
              <p className="text-sm text-[#555] mt-1 mb-4">Infusión de Ketamina IV de 2 horas</p>
              <div className="space-y-2 text-[#1a1a1a]">
                <div className="flex justify-between"><span>Sesión individual</span><span className="font-semibold">$590</span></div>
                <div className="flex justify-between"><span>Paquete de 3</span><span className="font-semibold">$1,700</span></div>
                <div className="flex justify-between"><span>Paquete de 6</span><span className="font-semibold">$3,200</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0B1D36]">Sesiones Guiadas</h3>
              <p className="text-sm text-[#555] mt-1 mb-4">1 hora IV + Guía</p>
              <div className="space-y-2 text-[#1a1a1a]">
                <div className="flex justify-between"><span>Sesión individual</span><span className="font-semibold">$590</span></div>
                <div className="flex justify-between"><span>Paquete de 3</span><span className="font-semibold">$1,500</span></div>
                <div className="flex justify-between"><span>Paquete de 6</span><span className="font-semibold">$2,900</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0B1D36]">Sesiones Guiadas</h3>
              <p className="text-sm text-[#555] mt-1 mb-4">2 horas IV + Guía</p>
              <div className="space-y-2 text-[#1a1a1a]">
                <div className="flex justify-between"><span>Sesión individual</span><span className="font-semibold">$690</span></div>
                <div className="flex justify-between"><span>Paquete de 3</span><span className="font-semibold">$1,925</span></div>
                <div className="flex justify-between"><span>Paquete de 6</span><span className="font-semibold">$4,000</span></div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-[#555] mt-8">Pregúntanos sobre descuentos disponibles. Se requiere consulta.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-[#555] mb-6">Reserve una consulta gratuita. Sin presión — solo respuestas honestas y un camino claro hacia adelante.</p>
        <Link href="/es#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">
          Reservar Consulta Gratuita
        </Link>
      </section>

      {/* Footer – copy the full footer from your existing Spanish pages for perfect match */}
      <SiteFooterEs />
    </main>
  );
}
