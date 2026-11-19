import Link from "next/link";

export default function KetamineTherapyCostEsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <div className="bg-slate-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <span>CONSULTA GRATIS</span>
        <Link href="/services/ketamine-therapy-cost" className="underline hover:text-amber-300">
          English
        </Link>
      </div>

      <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/es" className="text-xl font-semibold tracking-tight">
            Rewired Ketamine
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/es" className="hover:text-amber-600">Inicio</Link>
            <Link href="/es/services" className="hover:text-amber-600">Nuestros Servicios</Link>
            <Link href="/es/treatments" className="hover:text-amber-600">Tratamientos</Link>
            <Link href="/es/providers" className="hover:text-amber-600">Proveedores</Link>
            <Link href="/es/content" className="hover:text-amber-600">Contenido</Link>
            <Link href="/es/location" className="hover:text-amber-600">Ubicación</Link>
            <Link href="/es/faq" className="hover:text-amber-600">Preguntas Frecuentes</Link>
            <Link href="/es/#contact" className="rounded-md bg-amber-500 px-4 py-2 text-white hover:bg-amber-600">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-slate-50 border-b border-slate-200 py-16 md:py-24" id="main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium tracking-wide text-amber-600 uppercase">Aventura • Sur de Florida</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Costo de la Terapia con Ketamina en Aventura y Miami
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Información clara sobre los precios de ketamina IV y Spravato en nuestra clínica de propiedad local en Aventura. Sirviendo a Miami, Fort Lauderdale y el Sur de Florida.
          </p>
          <p className="mt-3 text-sm font-medium text-amber-700">¡Hablamos Español!</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            ¿Cuánto cuesta la terapia con ketamina en Aventura y Miami?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            En Rewired Ketamine mostramos precios reales y explicamos qué está incluido. Compara el cuidado total — guía, monitoreo, salas privadas y próximos pasos — no solo el precio de la infusión.
          </p>

          <h3 className="text-xl font-semibold mb-6">Precios de Ketamina IV</h3>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="border border-slate-200 rounded-xl p-6">
              <h4 className="font-semibold text-lg">Protocolo de Salud Mental</h4>
              <p className="text-sm text-slate-500 mt-1">Infusión de Ketamina IV de 1 hora</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>Sesión individual <span className="float-right font-medium">$440</span></li>
                <li>Paquete de 3 <span className="float-right font-medium">$1,200</span></li>
                <li>Paquete de 6 <span className="float-right font-medium">$2,300</span></li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h4 className="font-semibold text-lg">Protocolo de Dolor Crónico</h4>
              <p className="text-sm text-slate-500 mt-1">Infusión de Ketamina IV de 2 horas</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>Sesión individual <span className="float-right font-medium">$590</span></li>
                <li>Paquete de 3 <span className="float-right font-medium">$1,700</span></li>
                <li>Paquete de 6 <span className="float-right font-medium">$3,200</span></li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h4 className="font-semibold text-lg">Sesiones Guiadas</h4>
              <p className="text-sm text-slate-500 mt-1">1 hora IV + Guía</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>Sesión individual <span className="float-right font-medium">$590</span></li>
                <li>Paquete de 3 <span className="float-right font-medium">$1,500</span></li>
                <li>Paquete de 6 <span className="float-right font-medium">$2,900</span></li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h4 className="font-semibold text-lg">Sesiones Guiadas</h4>
              <p className="text-sm text-slate-500 mt-1">2 horas IV + Guía</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>Sesión individual <span className="float-right font-medium">$690</span></li>
                <li>Paquete de 3 <span className="float-right font-medium">$1,925</span></li>
                <li>Paquete de 6 <span className="float-right font-medium">$4,000</span></li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-slate-500 mb-10">
            Pregúntanos sobre descuentos disponibles. Se requiere consulta antes del tratamiento.
          </p>

          <h3 className="text-xl font-semibold mb-4">¿Qué cambia el precio?</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-10">
            <li>Protocolo de salud mental de 1 hora vs protocolo de dolor crónico de 2 horas</li>
            <li>Sesión estándar vs sesión completamente guiada (un miembro del equipo clínico permanece contigo)</li>
            <li>Sesión individual vs paquete de 3 o 6</li>
            <li>Consulta, monitoreo continuo, sala de tratamiento privada y seguimiento</li>
            <li>Apoyo de integración (incluido en opciones guiadas o disponible por separado)</li>
          </ul>

          <p className="text-slate-700 mb-6">
            Nuestro protocolo IV de salud mental publicado comienza en $440 por sesión y $2,300 por seis. Las opciones guiadas se listan por separado para que puedas ver el costo total de un curso típico.
          </p>
          <p className="text-slate-700 mb-10">
            La ketamina IV suele ser de pago en efectivo. Spravato (espray nasal de esketamina) puede estar cubierto por algunos planes de seguro cuando se cumplen los criterios REMS. La cobertura no está garantizada y generalmente se requiere autorización previa.
          </p>

          <h3 className="text-xl font-semibold mb-4">Si estás comparando clínicas de ketamina en Aventura, haz estas preguntas</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>¿La clínica se enfoca en salud mental, o la ketamina es uno de muchos servicios de bienestar?</li>
            <li>¿Quién permanece contigo durante la infusión?</li>
            <li>¿La sesión es completamente guiada?</li>
            <li>¿Qué monitoreo se utiliza?</li>
            <li>¿Qué sucede después de la infusión?</li>
            <li>¿La integración está incluida o es separada?</li>
            <li>¿Cuál es el costo total de un curso típico de inducción?</li>
            <li>Si se discute Spravato, ¿la clínica está certificada REMS y manejarán la autorización previa?</li>
          </ul>

          <p className="mt-8 text-slate-700">
            Rewired Ketamine hace claros los precios, la guía, el monitoreo y los próximos pasos. Somos una clínica de propiedad local en Aventura que sirve a Miami, Fort Lauderdale y el Sur de Florida.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mt-3 text-slate-600">
            Reserva una consulta gratuita. Sin presión — solo respuestas honestas y un camino claro hacia adelante.
          </p>
          <Link
            href="/es/#contact"
            className="mt-6 inline-block rounded-md bg-amber-500 px-6 py-3 text-white font-medium hover:bg-amber-600"
          >
            Reservar Consulta Gratuita
          </Link>
          <p className="mt-4 text-sm text-slate-500">
            O llama/texto al (305) 676-6070
          </p>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-4">
          <div>
            <p className="font-semibold text-white">Rewired Ketamine</p>
            <p className="mt-2">2820 NE 214th Street, Suite 1002<br />Aventura, FL 33180</p>
            <p className="mt-2"><a href="tel:3056766070" className="hover:text-white">(305) 676-6070</a></p>
          </div>
          <div>
            <p className="font-semibold text-white">Servicios</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/es/services/ketamine-infusion" className="hover:text-white">Infusión de Ketamina</Link></li>
              <li><Link href="/es/services/home-ketamine" className="hover:text-white">Ketamina en Casa</Link></li>
              <li><Link href="/es/services/spravato" className="hover:text-white">Spravato</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Clínica</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/es/location" className="hover:text-white">Ubicación y Estacionamiento</Link></li>
              <li><Link href="/es/providers" className="hover:text-white">Proveedores</Link></li>
              <li><Link href="/es/faq" className="hover:text-white">Preguntas Frecuentes</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Legal</p>
            <p className="mt-2 text-xs">Certificado LegitScript. No somos un servicio de emergencia.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-700 text-center text-xs">
          © {new Date().getFullYear()} Rewired Ketamine. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
