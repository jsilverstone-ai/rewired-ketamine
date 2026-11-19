import Link from "next/link";

export default function SpravatoEsPage() {
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
        <Link href="/services/spravato" className="underline hover:text-amber-300">
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
            Spravato (esketamina) en Aventura
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Un espray nasal aprobado por la FDA para adultos con depresión resistente al tratamiento, administrado en nuestra clínica certificada REMS y monitoreado en el sitio. Pacientes vienen de Miami, Fort Lauderdale y el Sur de Florida.
          </p>
          <p className="mt-3 text-sm font-medium text-amber-700">¡Hablamos Español!</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-4">¿Qué es Spravato?</h2>
          <p className="text-slate-700 mb-4">
            Spravato se autoadministra bajo observación. No se lleva a casa.
          </p>
          <p className="text-slate-700 mb-4">
            Spravato es el nombre comercial del espray nasal de esketamina, fabricado por Johnson & Johnson. No es la misma visita que una infusión de ketamina IV. La prescripción en esta clínica es dirigida por nuestro equipo de salud mental. La oficina está certificada REMS, lo cual es requerido antes de que alguien pueda recibir una dosis.
          </p>
          <p className="text-slate-700 mb-10">
            Somos de propiedad local en Aventura. Nuestra consulta inicial siempre es gratuita. La aprobación de Spravato depende de tu evaluación médica, revisión de historial y autorización del seguro.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Aprobación de la FDA, en lenguaje claro</h2>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left">Fecha</th>
                  <th className="border border-slate-200 px-4 py-2 text-left">Lo que aprobó la FDA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">5 de marzo de 2019</td>
                  <td className="border border-slate-200 px-4 py-2">Depresión resistente al tratamiento en adultos, con un antidepresivo oral.</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">3 de agosto de 2020</td>
                  <td className="border border-slate-200 px-4 py-2">Síntomas depresivos en adultos con trastorno depresivo mayor e ideación o comportamiento suicida agudo, junto con un antidepresivo oral. No está probado que prevenga el suicidio.</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">21 de enero de 2025</td>
                  <td className="border border-slate-200 px-4 py-2">Depresión resistente al tratamiento en adultos como monoterapia — ya no se requiere un antidepresivo oral para ese uso.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 mb-10">Spravato no está aprobado para niños.</p>

          <h2 className="text-2xl font-semibold mb-4">Cómo se ve un curso</h2>
          <p className="text-slate-700 mb-4">
            Esto sigue el programa etiquetado para depresión resistente al tratamiento. Tu clínico confirma la dosis.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left">Fase</th>
                  <th className="border border-slate-200 px-4 py-2 text-left">Con qué frecuencia</th>
                  <th className="border border-slate-200 px-4 py-2 text-left">En el sitio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">Semanas 1–4</td>
                  <td className="border border-slate-200 px-4 py-2">Dos veces a la semana</td>
                  <td className="border border-slate-200 px-4 py-2">Espray nasal bajo observación, luego al menos 2 horas de monitoreo. Podemos personalizar el plan de tratamiento según tus necesidades.</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">Semanas 5–8</td>
                  <td className="border border-slate-200 px-4 py-2">Una vez a la semana</td>
                  <td className="border border-slate-200 px-4 py-2">Misma observación y monitoreo.</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">Semana 9 en adelante</td>
                  <td className="border border-slate-200 px-4 py-2">Cada 1–2 semanas</td>
                  <td className="border border-slate-200 px-4 py-2">Continuado solo si sigue siendo apropiado. Spravato no está aprobado para uso en casa.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Seguro y aprobación</h2>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left">Paso</th>
                  <th className="border border-slate-200 px-4 py-2 text-left">Qué suele suceder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">1. Consulta</td>
                  <td className="border border-slate-200 px-4 py-2">Historial, medicamentos actuales y si Spravato coincide con un uso aprobado.</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">2. Registros</td>
                  <td className="border border-slate-200 px-4 py-2">La mayoría de los planes quieren depresión mayor que no mejoró después de al menos dos ensayos de antidepresivos, más un puntaje de depresión. Recopilamos lo que tu plan solicita.</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">3. Autorización previa</td>
                  <td className="border border-slate-200 px-4 py-2">Enviamos al plan. La aprobación no está garantizada. Desafortunadamente, el tiempo depende de la aseguradora.</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2">4. Primera visita</td>
                  <td className="border border-slate-200 px-4 py-2">Solo después de la autorización, en este entorno certificado.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 mb-10">
            Actualmente enviamos autorizaciones de Spravato para Cigna, UnitedHealthcare y Aetna, y Blue Cross Blue Shield fuera de red. Otros planes pueden revisarse en la consulta. La cobertura, copagos y deducibles son establecidos por tu póliza, no por la clínica.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Comienza con una consulta gratuita</h2>
          <p className="text-slate-700">
            Te diremos si Spravato es una opción y qué necesita tu plan. ¡Hablamos Español!
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mt-3 text-slate-600">
            Reserva una consulta gratuita. Sin presión — solo respuestas honestas con experiencia líder en la industria. Te diremos si Spravato es una opción y qué necesita tu plan. ¡Hablamos Español!
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
