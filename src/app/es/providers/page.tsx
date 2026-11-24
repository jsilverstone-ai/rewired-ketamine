import Image from "next/image";
import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishProviders() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Equipo Clínico</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Proveedores experimentados dedicados a un cuidado reflexivo y médicamente supervisado en nuestra clínica de propiedad local en Aventura.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        <p className="mt-4 text-sm text-white/70">Cuidado médicamente supervisado • Propiedad local en Aventura • Sesiones totalmente guiadas disponibles • Certificado LegitScript</p>
      </section>

      {/* Providers */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Kelsey */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/providers/kelsey-vivatson.jpg" alt="Kelsey Vivatson, PMHNP-BC, APRN - Directora Clínica en Rewired Ketamine en Aventura" width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Directora Clínica</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mb-1">Kelsey Vivatson, PMHNP-BC, APRN</h2>
              <p className="text-[#666] text-sm mb-4">Enfermera Practicante de Salud Mental Psiquiátrica Certificada</p>
              <p className="text-[#555] leading-relaxed mb-4">
                Kelsey Vivatson, PMHNP-BC, APRN es una Enfermera Practicante de Salud Mental Psiquiátrica certificada, licenciada en Florida y Dakota del Norte. Sirve como Directora Clínica en Rewired Ketamine en Aventura y se enfoca en un cuidado reflexivo e individualizado que combina el manejo de medicamentos, terapia de apoyo y colaboración clara con pacientes y familias.
              </p>
              <p className="text-[#555] leading-relaxed mb-4">
                Su enfoque combina evaluación diagnóstica, prescripción basada en evidencia y planificación de tratamiento personalizada para apoyar a individuos a lo largo de la vida.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-sm text-[#666]">
                  <span className="font-semibold text-[#0B1D36]">Educación y Credenciales:</span> MSN en Salud Mental Psiquiátrica (Walden University) • BSN (University of Mary) • PMHNP Certificada por ANCC • Licenciada en Florida y Dakota del Norte
                </p>
              </div>
            </div>
          </div>

          {/* Jacob */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl md:order-2">
              <Image src="/providers/jacob-silverstone.jpg" alt="Jacob Silverstone, DPM - Director Médico en Rewired Ketamine en Aventura" width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="md:order-1">
              <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Director Médico</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mb-1">Jacob Silverstone, DPM</h2>
              <p className="text-[#666] text-sm mb-4">Director Médico · Autor Publicado</p>
              <p className="text-[#555] leading-relaxed mb-4">
                Jacob Silverstone, DPM, sirve como Director Médico en Rewired Ketamine. Sociólogo publicado y ex Jefe de División y Director de Residencia de Pie y Tobillo en Mount Sinai Medical Center, aporta un amplio liderazgo clínico y un profundo interés en el bienestar mental, la neuroplasticidad y enfoques de cuidado de apoyo.
              </p>
              <p className="text-[#555] leading-relaxed mb-4">
                Ha servido como investigador principal en numerosos estudios farmacéuticos avanzados e innovaciones de procedimientos. Su trabajo se enfoca en ayudar a las personas a comprender mejor su camino de salud mental y explorar opciones cuando los enfoques tradicionales no han proporcionado suficiente alivio.
              </p>
              <p className="text-[#555] leading-relaxed mb-4">
                El Dr. Silverstone también es el autor de <em>Chronically Misunderstood</em> y <em>Stuck in Reverse: Rewiring Your ADHD Brain</em>.
              </p>
              <a href="https://a.co/d/0753tyCg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#C9A66B] font-semibold hover:underline mb-4">
                Ver libro en Amazon →
              </a>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-sm text-[#666]">
                  <span className="font-semibold text-[#0B1D36]">Educación y Formación:</span> BA en Sociología, Hunter College (CUNY) · DPM, New York College of Podiatric Medicine · Residencia de Cirugía Reconstructiva de Pie y Tobillo, Long Island Jewish Medical Center en Hofstra School of Medicine
                </p>
              </div>
            </div>
          </div>

          {/* Shlomo */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/providers/shlomo-slatus.jpg" alt="Shlomo Slatus, RCSWI - Equipo Clínico en Rewired Ketamine en Aventura" width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Equipo Clínico</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mb-1">Shlomo Slatus, RCSWI</h2>
              <p className="text-[#666] text-sm mb-4">Trabajador Social Clínico Registrado en Prácticas</p>
              <p className="text-[#555] leading-relaxed mb-4">
                Shlomo Slatus, RCSWI es un Trabajador Social Clínico Registrado en Prácticas con una Maestría en Trabajo Social de la Wurzweiler School of Social Work de Yeshiva University. Se graduó como valedictorian de su programa de MSW con una certificación especializada en Práctica Informada en Trauma y fue inducido en la Phi Alpha Honor Society por excelencia académica.
              </p>
              <p className="text-[#555] leading-relaxed mb-4">
                Shlomo cree que expresar pensamientos, sentimientos y experiencias en un entorno seguro y de apoyo puede servir como un poderoso catalizador para el cambio. Está comprometido a establecer un rapport terapéutico genuino que fomente un espacio confidencial donde las personas puedan comunicarse abierta y honestamente.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-sm text-[#666] font-semibold text-[#0B1D36] mb-2">Áreas de Enfoque:</p>
                <ul className="text-sm text-[#555] space-y-1">
                  <li>• Adicción y uso indebido de sustancias</li>
                  <li>• Trastornos de ansiedad y pánico</li>
                  <li>• Depresión</li>
                  <li>• Desafíos en las relaciones</li>
                  <li>• Crecimiento personal y autoestima</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sorelle */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl md:order-2">
              <Image src="/providers/sorelle-silverstone.jpg" alt="Sorelle Silverstone - Coach de Vida y Apoyo de Integración en Rewired Ketamine en Aventura" width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="md:order-1">
              <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Experiencia del Paciente</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mb-1">Sorelle Silverstone</h2>
              <p className="text-[#666] text-sm mb-4">Coach de Vida y Apoyo de Integración</p>
              <p className="text-[#555] leading-relaxed mb-4">
                Sorelle Silverstone es una coach de vida que integra experiencia empresarial, inteligencia emocional y bienestar holístico para apoyar a los clientes en el crecimiento personal y profesional. Como madre de cinco, extrae de la perspectiva de la vida real para ayudar a las personas a navegar desafíos como el equilibrio entre trabajo y vida, la resiliencia y el establecimiento de metas significativas.
              </p>
              <p className="text-[#555] leading-relaxed mb-4">
                Su enfoque combina experiencia en planificación estratégica con coaching empático, mindfulness y herramientas prácticas que apoyan la alineación auténtica del yo y el desarrollo personal duradero.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-sm text-[#666]">
                  <span className="font-semibold text-[#0B1D36]">Educación:</span> Licenciatura en Organización de Negocios, Nyack University
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Standards */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-10">Nuestros Estándares Clínicos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0B1D36] mb-3">Médicamente Supervisado</h3>
              <p className="text-[#555]">Cada sesión se realiza bajo monitoreo profesional en un entorno calmado y privado.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0B1D36] mb-3">Opciones Totalmente Guiadas</h3>
              <p className="text-[#555]">Las sesiones totalmente guiadas están disponibles para quienes prefieren apoyo adicional durante el tratamiento.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0B1D36] mb-3">Propiedad Local</h3>
              <p className="text-[#555]">Somos una práctica de propiedad local con sede en Aventura, que sirve a Miami, Fort Lauderdale y el Sur de Florida. ¡Hablamos Español!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-white/80 mb-8">Reserve una consulta gratuita en nuestra clínica de propiedad local en Aventura.</p>
        <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-4 rounded-lg hover:bg-[#b8955e] transition">Reservar Consulta Gratuita</Link>
      </section>

      {/* FOOTER */}
      <SiteFooterEs />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-[#e6e0d6] bg-[#F6F1E8]/90 backdrop-blur-sm">
        <div className="max-w-lg mx-auto px-4 py-3 grid grid-cols-2 gap-3">
          <a href="tel:+13056766070" className="text-center border border-[#0B1D36] text-[#0B1D36] py-3 text-sm font-semibold">Llamar o Mensaje</a>
          <Link href="/es/#contact" className="text-center bg-[#C9A66B] text-[#0B1D36] py-3 text-sm font-semibold">Consulta Gratuita</Link>
        </div>
      </div>
    </main>
  );
}
