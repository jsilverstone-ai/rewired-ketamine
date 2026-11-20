import Link from "next/link";

export default function SpravatoEsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold">
        Saltar al contenido principal
      </a>

      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <Link href="/es" className="flex-shrink-0">
            <img src="/logo.png" alt="Rewired Ketamine" width={600} height={180} className="h-16 md:h-20 w-auto" />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              2820 NE 214th St #1002, Aventura, FL 33180
            </a>
            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@rewiredketamine.com
            </a>
            <a href="tel:+13056766070" className="flex items-center gap-2 font-semibold hover:text-[#C9A66B] transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (305) 676-6070
            </a>
            <Link href="/services/spravato" className="text-[#C9A66B] font-semibold hover:underline">English</Link>
          </div>
        </div>
      </div>

      {/* Sticky header */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/es" className="hover:text-[#C9A66B] transition">Inicio</Link>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Nuestros Servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/es/services" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Todos los Servicios</Link>
                  <Link href="/es/services/ketamine-infusion" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Infusión de Ketamina</Link>
                  <Link href="/es/services/home-ketamine" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamina en Casa</Link>
                  <Link href="/es/services/spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Spravato</Link>
                  <Link href="/es/services/iv-ketamine-vs-spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">IV vs Spravato</Link>
                  <Link href="/es/services/ketamine-therapy-cost" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Costo</Link>
                  <Link href="/es/services/functional-wellness" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Bienestar Funcional</Link>
                  <Link href="/es/services/medical-management" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Manejo Médico</Link>
                  <Link href="/es/services/talk-therapy" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Terapia de Conversación</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Tratamientos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 max-h-80 overflow-y-auto">
                  <Link href="/es/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Todos los Tratamientos</Link>
                  <Link href="/es/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Depresión</Link>
                  <Link href="/es/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ansiedad</Link>
                  <Link href="/es/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">TEPT</Link>
                  <Link href="/es/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Dolor Crónico</Link>
                </div>
              </div>
            </div>
            <Link href="/es/providers" className="hover:text-[#C9A66B] transition">Proveedores</Link>
            <Link href="/es/content" className="hover:text-[#C9A66B] transition">Contenido</Link>
            <Link href="/es/location" className="hover:text-[#C9A66B] transition">Ubicación</Link>
            <Link href="/es/faq" className="hover:text-[#C9A66B] transition">Preguntas Frecuentes</Link>
            <Link href="/es#contact" className="hover:text-[#C9A66B] transition">Contacto</Link>
          </nav>
          <button className="lg:hidden p-2" aria-label="Abrir menú">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/es#contact" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#b8955e] transition">
              Consulta Gratuita
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Spravato (esketamina) en Aventura</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Un espray nasal aprobado por la FDA para adultos con depresión resistente al tratamiento, administrado en nuestra clínica certificada REMS y monitoreado en el sitio. Pacientes vienen de Miami, Fort Lauderdale y el Sur de Florida.
        </p>
        <p className="text-[#C9A66B] font-semibold">¡Hablamos Español!</p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">¿Qué es Spravato?</h2>
          <p className="text-[#555] mb-4">Spravato se autoadministra bajo observación. No se lleva a casa.</p>
          <p className="text-[#555] mb-4">
            Spravato es el nombre comercial del espray nasal de esketamina, fabricado por Johnson & Johnson. No es la misma visita que una infusión de ketamina IV. La prescripción en esta clínica es dirigida por nuestro equipo de salud mental. La oficina está certificada REMS, lo cual es requerido antes de que alguien pueda recibir una dosis.
          </p>
          <p className="text-[#555] mb-10">
            Somos de propiedad local en Aventura. Nuestra consulta inicial siempre es gratuita. La aprobación de Spravato depende de tu evaluación médica, revisión de historial y autorización del seguro.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Aprobación de la FDA, en lenguaje claro</h2>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-[#F8F5F0]">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left">Fecha</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Lo que aprobó la FDA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">5 de marzo de 2019</td>
                  <td className="border border-gray-200 px-4 py-2">Depresión resistente al tratamiento en adultos, con un antidepresivo oral.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">3 de agosto de 2020</td>
                  <td className="border border-gray-200 px-4 py-2">Síntomas depresivos en adultos con trastorno depresivo mayor e ideación o comportamiento suicida agudo, junto con un antidepresivo oral. No está probado que prevenga el suicidio.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">21 de enero de 2025</td>
                  <td className="border border-gray-200 px-4 py-2">Depresión resistente al tratamiento en adultos como monoterapia — ya no se requiere un antidepresivo oral para ese uso.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#555] mb-10">Spravato no está aprobado para niños.</p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Cómo se ve un curso</h2>
          <p className="text-[#555] mb-4">Esto sigue el programa etiquetado para depresión resistente al tratamiento. Tu clínico confirma la dosis.</p>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-[#F8F5F0]">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left">Fase</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Con qué frecuencia</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">En el sitio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Semanas 1–4</td>
                  <td className="border border-gray-200 px-4 py-2">Dos veces a la semana</td>
                  <td className="border border-gray-200 px-4 py-2">Espray nasal bajo observación, luego al menos 2 horas de monitoreo. Podemos personalizar el plan de tratamiento según tus necesidades.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Semanas 5–8</td>
                  <td className="border border-gray-200 px-4 py-2">Una vez a la semana</td>
                  <td className="border border-gray-200 px-4 py-2">Misma observación y monitoreo.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Semana 9 en adelante</td>
                  <td className="border border-gray-200 px-4 py-2">Cada 1–2 semanas</td>
                  <td className="border border-gray-200 px-4 py-2">Continuado solo si sigue siendo apropiado. Spravato no está aprobado para uso en casa.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Seguro y aprobación</h2>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-[#F8F5F0]">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left">Paso</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Qué suele suceder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1. Consulta</td>
                  <td className="border border-gray-200 px-4 py-2">Historial, medicamentos actuales y si Spravato coincide con un uso aprobado.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">2. Registros</td>
                  <td className="border border-gray-200 px-4 py-2">La mayoría de los planes quieren depresión mayor que no mejoró después de al menos dos ensayos de antidepresivos, más un puntaje de depresión. Recopilamos lo que tu plan solicita.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">3. Autorización previa</td>
                  <td className="border border-gray-200 px-4 py-2">Enviamos al plan. La aprobación no está garantizada. Desafortunadamente, el tiempo depende de la aseguradora.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">4. Primera visita</td>
                  <td className="border border-gray-200 px-4 py-2">Solo después de la autorización, en este entorno certificado.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#555] mb-6">
            Actualmente enviamos autorizaciones de Spravato para Cigna, UnitedHealthcare y Aetna, y Blue Cross Blue Shield fuera de red. Otros planes pueden revisarse en la consulta. La cobertura, copagos y deducibles son establecidos por tu póliza, no por la clínica.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-[#555] mb-6">Reserve una consulta gratuita. Te diremos si Spravato es una opción y qué necesita tu plan. ¡Hablamos Español!</p>
        <Link href="/es#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">
          Reservar Consulta Gratuita
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1D36] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <img src="/logo.png" alt="Rewired Ketamine" className="h-12 mb-4" />
            <p className="text-white/70">2820 NE 214th Street, Suite 1002<br />Aventura, FL 33180</p>
            <p className="mt-2"><a href="tel:+13056766070" className="hover:text-[#C9A66B]">(305) 676-6070</a></p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/es" className="hover:text-[#C9A66B]">Inicio</Link></li>
              <li><Link href="/es/services" className="hover:text-[#C9A66B]">Servicios</Link></li>
              <li><Link href="/es/location" className="hover:text-[#C9A66B]">Ubicación</Link></li>
              <li><Link href="/es/faq" className="hover:text-[#C9A66B]">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Servicios</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/es/services/ketamine-infusion" className="hover:text-[#C9A66B]">Infusión de Ketamina</Link></li>
              <li><Link href="/es/services/home-ketamine" className="hover:text-[#C9A66B]">Ketamina en Casa</Link></li>
              <li><Link href="/es/services/spravato" className="hover:text-[#C9A66B]">Spravato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contacto</h3>
            <p className="text-white/70">info@rewiredketamine.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · Todos los derechos reservados
        </div>
      </footer>
    </main>
  );
}
