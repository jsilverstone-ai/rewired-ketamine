import Image from "next/image";
import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Terapia de ketamina en casa",
  "description": "Ketamina en casa supervisada por nuestro equipo clínico (oral, nasal, rectal y subcutánea), después de una consulta y evaluación médica, desde una clínica de propiedad local en Aventura, Florida.",
  "url": "https://www.rewiredketamine.com/es/services/home-ketamine",
  "inLanguage": "es-US",
  "provider": {
    "@type": "MedicalClinic",
    "name": "Rewired Ketamine",
    "url": "https://www.rewiredketamine.com",
    "telephone": "+1-305-676-6070",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2820 NE 214th St #1002",
      "addressLocality": "Aventura",
      "addressRegion": "FL",
      "postalCode": "33180",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "State",
    "name": "Florida"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es legal la ketamina en casa en Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cuando la receta un profesional con licencia después de una evaluación. La ketamina es un medicamento controlado, así que solo debe venir de un proveedor que lo evalúe y le dé seguimiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Quién es buen candidato para la ketamina en casa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adultos con salud estable, que pasaron bien la evaluación y que tienen un lugar seguro y un adulto de confianza en casa durante las dosis. Si tiene presión alta no controlada, ciertas condiciones del corazón o antecedentes de consumo problemático de sustancias, puede ser mejor tratarse en la clínica o con otra opción."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito a alguien conmigo durante la dosis en casa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le pedimos que un adulto de confianza esté en casa durante cada dosis. No tiene que vigilarlo cada minuto, solo estar cerca y disponible."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta la ketamina en casa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los paquetes de varias dosis empiezan en $225 la oral, $275 la rectal, $325 la nasal y $600 la subcutánea. El precio exacto se confirma después de la evaluación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo cambiar entre el tratamiento en casa y en la clínica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Algunas personas empiezan en la clínica y luego pasan a casa, y otras al revés. Ajustamos el plan según cómo se sienta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Me pueden atender en español?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. La consulta, las instrucciones y el seguimiento son en español. ¡Hablamos Español, de verdad!"
      }
    }
  ]
};

export default function HomeKetamineEsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeaderEs />

      {/* ===== HERO ===== */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">
            Aventura • Atendemos en toda Florida
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Terapia de Ketamina en Casa en Florida
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Ketamina que usted toma en casa, con supervisión clínica, después de una consulta y evaluación médica real con nuestra clínica en Aventura.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">
            <Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link>
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#eee] mb-12">
            <Image
              src="/services/home-ketamine-therapy-miami.jpg"
              alt="Ambiente cómodo en casa para terapia de ketamina en casa en Miami y el sur de Florida"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>La ketamina en casa ha crecido mucho en Florida, y gran parte se vende por internet con muy poco seguimiento. Nosotros lo hacemos diferente. Su atención empieza con una consulta y una evaluación médica con nuestro equipo en Aventura. Si el tratamiento en casa es una buena opción para usted, se lo recetamos, le enseñamos cómo usarlo y estamos en contacto durante todo el proceso.</p>
            <p>Para muchas personas, en casa es más cómodo, más privado y más fácil de acomodar con el trabajo y la familia. También puede costar menos que una serie completa de infusiones en la clínica o que pagar copagos de Spravato una y otra vez. Si el tratamiento en casa no es la opción más segura para usted, se lo diremos con claridad, y siempre tenemos sesiones totalmente guiadas en la clínica.</p>
          </div>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-4">
            Opciones y precios iniciales
          </h2>
          <p className="text-center text-[#666] mb-12">
            Paquetes de varias dosis con guía clínica — precios iniciales a continuación
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Oral (tabletas RDT)</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Desde</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$225</p>
                <p className="text-sm text-[#555]">
                  Varias dosis con guía clínica y apoyo
                </p>
              </div>
            </div>
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Nasal</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Desde</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$325</p>
                <p className="text-sm text-[#555]">
                  Varias dosis con guía clínica y apoyo
                </p>
              </div>
            </div>
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Rectal</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Desde</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$275</p>
                <p className="text-sm text-[#555]">
                  Varias dosis con guía clínica y apoyo
                </p>
              </div>
            </div>
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Subcutánea</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Desde</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$600</p>
                <p className="text-sm text-[#555] mb-4">
                  Varias dosis con guía clínica y apoyo
                </p>
                <Link
                  href="/es/content/videos"
                  className="text-sm text-[#C9A66B] font-semibold hover:underline"
                >
                  Video informativo — haga clic aquí
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center text-[#666] text-sm mt-10">
            Incluye consulta, medicamento y seguimiento. El precio exacto se confirma después de la evaluación. Vea la <Link href="/es/services/ketamine-therapy-cost" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">página de costos</Link> para más detalles.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS / SAFETY / COMPARISON ===== */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">¿Qué opción en casa es la adecuada para usted?</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Oral (tabletas de disolución rápida):</strong> fácil de tomar y, por lo general, la opción más económica para empezar.</li>
              <li><strong>Nasal:</strong> un aerosol que, en algunas personas, se absorbe mejor que una tableta.</li>
              <li><strong>Rectal:</strong> una opción cuando la absorción oral es limitada o cuando otra vía resulta más cómoda.</li>
              <li><strong>Subcutánea:</strong> una pequeña inyección debajo de la piel, para quienes necesitan una absorción más constante. Le enseñamos cómo aplicarla.</li>
            </ul>
            <p>La vía adecuada depende de su historial, de sus metas y de cómo responde su cuerpo al medicamento. Lo decidimos juntos en la consulta, no con un paquete igual para todos.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Cómo funciona el tratamiento en casa</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1. Consulta gratuita.</strong> Cuéntenos qué está viviendo y qué ha intentado hasta ahora.</li>
              <li><strong>2. Evaluación médica.</strong> Revisamos su historial de salud, sus medicamentos, su presión arterial y su historial de consumo de sustancias. El tratamiento en casa no es para todos.</li>
              <li><strong>3. Su plan.</strong> Si es una buena opción, elegimos la vía y la dosis, y le explicamos con detalle cómo y cuándo tomarla.</li>
              <li><strong>4. Seguimiento.</strong> Estamos en contacto, ajustamos el plan cuando hace falta y le acompañamos en la integración para que el trabajo se refleje en su vida diaria.</li>
            </ul>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Cómo cuidarse en casa</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Tome cada dosis en un lugar tranquilo y seguro, con un adulto de confianza en casa.</li>
              <li>No maneje, no trabaje, no nade ni tome decisiones importantes hasta que el efecto haya pasado por completo.</li>
              <li>Guarde el medicamento en un lugar seguro, lejos de niños, visitas y mascotas. Nunca lo comparta.</li>
              <li>Nunca cambie su dosis por su cuenta. Llámenos y la revisamos juntos.</li>
              <li>La presión arterial importa: la ketamina normalmente la sube por un rato. Si tiene presión alta, coméntenoslo en la consulta.</li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">¿En casa o en la clínica?</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#eee] bg-white">
            <table className="w-full text-left text-[#444]">
              <thead className="bg-[#0B1D36] text-white">
                <tr><th className="text-left p-4 font-semibold"></th><th className="text-left p-4 font-semibold">En casa</th><th className="text-left p-4 font-semibold">En la clínica (IV)</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Lugar</td><td className="p-4 align-top">Su casa, con un adulto de confianza cerca</td><td className="p-4 align-top">Sala privada de tratamiento en Aventura</td></tr>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Supervisión</td><td className="p-4 align-top">Evaluación primero, luego seguimiento</td><td className="p-4 align-top">Monitoreo continuo durante la sesión</td></tr>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Traslado</td><td className="p-4 align-top">No necesita viajar ni que lo lleven</td><td className="p-4 align-top">Necesita que alguien lo lleve a casa</td></tr>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Costo</td><td className="p-4 align-top">Precios iniciales más bajos</td><td className="p-4 align-top">Más alto por sesión; hay paquetes</td></tr>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Ideal para</td><td className="p-4 align-top">Salud estable y comodidad con dosis en casa</td><td className="p-4 align-top">Más supervisión o una experiencia totalmente guiada</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">¿Por qué una clínica local en Florida y no un programa por correo?</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Los programas nacionales de ketamina en casa suelen anunciar precios mensuales más bajos. A cambio, normalmente hay menos evaluación, menos seguimiento y ninguna opción presencial si las cosas cambian. Con nosotros tiene un equipo médico local en Aventura, un número de teléfono donde le contestan personas reales y la opción de venir a la clínica cuando lo necesite.</p>
            <p>Atendemos a pacientes de Miami, Fort Lauderdale, North Miami Beach, Hollywood y de toda Florida, en español y en inglés.</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Ketamina en casa: preguntas frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">¿Es legal la ketamina en casa en Florida?</h3>
              <p className="text-[#555] leading-relaxed">Sí, cuando la receta un profesional con licencia después de una evaluación. La ketamina es un medicamento controlado, así que solo debe venir de un proveedor que lo evalúe y le dé seguimiento.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">¿Quién es buen candidato para la ketamina en casa?</h3>
              <p className="text-[#555] leading-relaxed">Adultos con salud estable, que pasaron bien la evaluación y que tienen un lugar seguro y un adulto de confianza en casa durante las dosis. Si tiene presión alta no controlada, ciertas condiciones del corazón o antecedentes de consumo problemático de sustancias, puede ser mejor tratarse en la clínica o con otra opción.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">¿Necesito a alguien conmigo durante la dosis en casa?</h3>
              <p className="text-[#555] leading-relaxed">Le pedimos que un adulto de confianza esté en casa durante cada dosis. No tiene que vigilarlo cada minuto, solo estar cerca y disponible.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">¿Cuánto cuesta la ketamina en casa?</h3>
              <p className="text-[#555] leading-relaxed">Los paquetes de varias dosis empiezan en $225 la oral, $275 la rectal, $325 la nasal y $600 la subcutánea. El precio exacto se confirma después de la evaluación.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">¿Puedo cambiar entre el tratamiento en casa y en la clínica?</h3>
              <p className="text-[#555] leading-relaxed">Sí. Algunas personas empiezan en la clínica y luego pasan a casa, y otras al revés. Ajustamos el plan según cómo se sienta.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">¿Me pueden atender en español?</h3>
              <p className="text-[#555] leading-relaxed">Sí. La consulta, las instrucciones y el seguimiento son en español. ¡Hablamos Español, de verdad!</p>
            </div>
          </div>

          <p className="text-sm text-[#777] mt-12 leading-relaxed">
            La ketamina no es para todos y los resultados varían. Muchos usos de la ketamina en salud mental son fuera de indicación (off-label). Una evaluación médica decide si el tratamiento, y en qué lugar, es adecuado para usted. Si está en crisis, llame o envíe un mensaje al 988 (oprima 2 para español) o llame al 911.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quiere saber si la ketamina en casa es para usted?</h2>
          <p className="text-xl text-white/80 mb-10">
            Reserve una consulta gratuita con nuestra clínica de propiedad local en Aventura. Sin presión — solo respuestas honestas y un plan claro.
          </p>
          <Link
            href="/es#contact"
            className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition"
          >
            Reserve su consulta gratuita
          </Link>
          <p className="text-white/70 mt-6">Llame o envíe un mensaje al <a href="tel:+13056766070" className="underline hover:text-[#C9A66B]">(305) 676-6070</a> · Aventura, FL</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <SiteFooterEs />
    </main>
  );
}
