import Link from "next/link";

export default function TalkTherapyEsPage() {
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
        <Link href="/services/talk-therapy" className="underline hover:text-amber-300">
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
            Terapia de Conversación
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Terapia centrada en la integración para ayudar a que los insights echen raíces.
          </p>
          <p className="mt-3 text-sm font-medium text-amber-700">¡Hablamos Español!</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <p>
            La terapia de conversación es una parte esencial del proceso de sanación. Ofrecemos conversaciones de apoyo centradas en la integración que te ayudan a procesar las experiencias de tus sesiones y convertir los insights en cambios duraderos.
          </p>
          <p>
            Puedes trabajar con nuestros terapeutas internos o ser conectado con especialistas cuidadosamente seleccionados que entienden los psicodélicos y la neuroplasticidad. Esto asegura que tu apoyo terapéutico esté alineado con la naturaleza única de este trabajo.
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
