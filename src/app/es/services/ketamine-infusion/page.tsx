import Link from "next/link";

export default function KetamineInfusionEsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
      >
        Saltar al contenido principal
      </a>

      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <Link href="/es" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Rewired Ketamine"
              width={600}
              height={180}
              className="h-16 md:h-20 w-auto"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            <a
              href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#C9A66B] transition"
            >
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
            <Link href="/services/ketamine-infusion" className="text-[#C9A66B] font-semibold hover:underline">
              English
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky header with nav */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/es" className="hover:text-[#C9A66B] transition">Inicio</Link>

            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Nuestros Servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/es/services" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Todos los Servicios</Link>
                  <Link href="/es/services/ketamine-infusion" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Infusión de Ketamina</Link>
                  <Link href="/es/services/home-ketamine" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamina en Casa</Link>
                  <Link href="/es/services/spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Spravato</Link>
                  <Link href="/es/services/iv-ketamine-vs-spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">IV vs Spravato</Link>
                  <Link href="/es/services/ketamine-therapy-cost" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Costo</Link>
                  <Link href="/es/services/ketamine-insurance" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Seguro Médico</Link>
                  <Link href="/es/services/functional-wellness" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Bienestar Funcional</Link>
                  <Link href="/es/services/medical-management" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Manejo Médico</Link>
                  <Link href="/es/services/talk-therapy" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Terapia de Conversación</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Tratamientos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
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
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/rewired_ketamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* other social icons abbreviated for brevity in this response; copy full set from services page */}
            </div>
            <Link href="/es#contact" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#b8955e] transition">
              Consulta Gratuita
            </Link>
          </div>
        </div>
      </header>

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
              <li><Link href="/es/services/ketamine-insurance" className="hover:text-[#C9A66B]">Seguro Médico</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Síguenos</h3>
            {/* social icons here matching the header */}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · Todos los derechos reservados
        </div>
      </footer>
    </main>
  );
}
