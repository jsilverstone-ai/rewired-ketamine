import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";


const faqs: { q: string; a: string; link?: { text: string; href: string } }[] = [
  { q: "¿El seguro cubre la terapia con ketamina?", a: "Depende del tratamiento. Spravato (esketamina) está aprobado por la FDA para la depresión resistente al tratamiento y a menudo se cubre con autorización previa. La ketamina IV no está aprobada por la FDA para la depresión, y los planes generalmente no la cubren. La cobertura nunca está garantizada y la establece su póliza." },
  { q: "¿Con qué planes de seguro factura Rewired Spravato?", a: "Facturamos Spravato dentro de la red con UnitedHealthcare, Cigna y Aetna. Otros planes pueden revisarse en su consulta gratuita. La aprobación depende de su evaluación médica y de la autorización previa de su aseguradora." },
  { q: "¿Se acepta Florida Blue o BCBS para Spravato?", a: "Los planes de Blue Cross Blue Shield, incluido Florida Blue, están fuera de la red para Spravato en Rewired. Algunos planes ofrecen beneficios fuera de la red, pero lo que pagan varía y no está garantizado. Llame al número de su tarjeta y pídanos que revisemos su plan en su consulta." },
  { q: "¿El seguro cubre la ketamina IV?", a: "Generalmente no. La ketamina IV para la depresión es fuera de indicación, y las aseguradoras normalmente no la pagan, por lo que es de pago en efectivo en Rewired. Algunos pacientes presentan nuestra superfactura para solicitar un posible reembolso fuera de la red." },
  { q: "¿Qué es una superfactura de ketamina y me reembolsará mi aseguradora?", a: "Una superfactura es un estado de cuenta detallado de los servicios que usted recibió y lo que pagó. Se la entregamos a los pacientes que pagan en efectivo para que la presenten a su aseguradora. El reembolso no está garantizado y depende de los beneficios fuera de la red y del deducible de su plan." },
  { q: "¿Usar el seguro puede costar más que pagar en efectivo?", a: "A veces, sí. Los deducibles, copagos y coseguros pueden sumar, sobre todo al inicio del año del plan o en un tratamiento corto. En otros casos el seguro cuesta menos. Revise su propio plan. Los ejemplos de esta página son hipotéticos." },
  { q: "¿Cuánto cuesta la ketamina IV sin seguro?", a: "Nuestro protocolo IV de salud mental de 1 hora, publicado, cuesta $440 por sesión individual y $2,300 por un paquete de 6. Las opciones guiadas y de 2 horas están en la página de costos. Se requiere una consulta antes del tratamiento.", link: { text: "página de costos", href: "/es/services/ketamine-therapy-cost" } },
];

const insuranceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.rewiredketamine.com/#clinic",
      name: "Rewired Ketamine",
      url: "https://www.rewiredketamine.com",
      telephone: "+1-305-676-6070",
      email: "info@rewiredketamine.com",
      image: "https://www.rewiredketamine.com/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2820 NE 214th Street, Suite 1002",
        addressLocality: "Aventura",
        addressRegion: "FL",
        postalCode: "33180",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 25.9730993, longitude: -80.1475594 },
      areaServed: ["Aventura", "Miami", "Fort Lauderdale", "South Florida"],
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.rewiredketamine.com/es/services/ketamine-insurance#webpage",
      url: "https://www.rewiredketamine.com/es/services/ketamine-insurance",
      name: "Seguro y Ketamina en Aventura: Spravato e IV | Rewired",
      headline: "Terapia con Ketamina y Seguro Médico en Aventura: Lo Que Realmente Podría Pagar",
      description: "Spravato se factura dentro de la red con UnitedHealthcare, Cigna y Aetna. La ketamina IV es de pago directo con superfactura. ¡Hablamos Español!",
      inLanguage: "es-US",
      isPartOf: { "@id": "https://www.rewiredketamine.com/#clinic" },
      about: [
        { "@type": "Drug", name: "Spravato (esketamine nasal spray)" },
        { "@type": "MedicalTherapy", name: "Intravenous ketamine infusion" },
      ],
      dateModified: "2026-11-23",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.rewiredketamine.com/es" },
        { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.rewiredketamine.com/es/services" },
        { "@type": "ListItem", position: 3, name: "Seguro de Ketamina", item: "https://www.rewiredketamine.com/es/services/ketamine-insurance" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function KetamineInsuranceEsPage() {
  return (
    <>
    <JsonLd data={insuranceJsonLd} />
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terapia con Ketamina y Seguro Médico en Aventura: Lo Que Realmente Podría Pagar</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Respuestas claras sobre lo que cubre el seguro para Spravato y la ketamina IV, y por qué usar el seguro no siempre es la opción más económica. Atendemos a Miami, Fort Lauderdale y el Sur de Florida.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F8F5F0] border-l-4 border-[#C9A66B] rounded-2xl p-6 mb-8">
            <h2 className="font-semibold text-lg text-[#0B1D36] mb-3">Respuesta rápida</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#555]"><li><strong>Spravato (espray nasal de esketamina):</strong> aprobado por la FDA y a menudo cubierto con autorización previa. Facturamos dentro de la red con <strong>UnitedHealthcare, Cigna y Aetna</strong>. <strong>BCBS, incluido Florida Blue, está fuera de la red</strong> para Spravato. La aprobación nunca está garantizada, y su póliza determina sus costos.</li><li><strong>Ketamina IV:</strong> <strong>pago en efectivo.</strong> No está aprobada por la FDA para la depresión, y los planes generalmente no la cubren. A los pacientes que pagan en efectivo les entregamos una <strong>superfactura (superbill)</strong> para que la presenten a su aseguradora y soliciten un posible reembolso fuera de la red. El reembolso no está prometido.</li><li><strong>El seguro puede costar más de lo que espera.</strong> Los deducibles, copagos y coseguros pueden sumar rápidamente. Los ejemplos a continuación son hipotéticos; revise su propio plan.</li></ul>
          </div>
          <p className="text-[#555] mb-4">Preferimos que usted entienda las cifras antes de reservar a que se lleve una sorpresa después de su primera visita. Esta página explica cómo funciona la cobertura de ambos tratamientos, muestra con ejemplos hipotéticos cómo un plan puede cambiar su costo y enumera qué preguntarle a su aseguradora. Para ver los precios publicados de la ketamina IV, consulte nuestra página de <Link href="/es/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">costo de la terapia con ketamina</Link>.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Spravato y el seguro médico</h2>
          <p className="text-[#555] mb-4">Spravato es la marca del espray nasal de esketamina. La etiqueta aprobada por la FDA indica dos usos en adultos: depresión resistente al tratamiento (como monoterapia o junto con un antidepresivo oral) y síntomas depresivos del trastorno depresivo mayor con ideación o conducta suicida aguda (junto con un antidepresivo oral) <sup><a href="#source-1" className="text-[#C9A66B] hover:underline">[1]</a></sup>. Debido a los riesgos de sedación y disociación, solo está disponible mediante un programa restringido, el REMS de Spravato. Los pacientes deben ser monitoreados durante al menos dos horas después de cada dosis <sup><a href="#source-1" className="text-[#C9A66B] hover:underline">[1]</a></sup>. Nuestra clínica está certificada REMS. Consulte nuestra página de <Link href="/es/services/spravato" className="text-[#C9A66B] font-semibold hover:underline">Spravato en Aventura</Link> para saber cómo funciona el tratamiento.</p>
          <p className="text-[#555] mb-4"><strong>A quién facturamos.</strong> Rewired Ketamine factura Spravato <strong>dentro de la red con UnitedHealthcare, Cigna y Aetna.</strong> <strong>Los planes de Blue Cross Blue Shield, incluido Florida Blue, están fuera de la red</strong> para Spravato en nuestra clínica. Algunos planes tienen beneficios fuera de la red y otros no, y lo que paga el suyo depende de su póliza. Otros planes pueden revisarse en su consulta.</p>
          <p className="text-[#555] mb-4"><strong>Autorización previa.</strong> Significa que su plan debe aprobar un servicio antes de que usted lo reciba <sup><a href="#source-2" className="text-[#C9A66B] hover:underline">[2]</a></sup>. Las políticas de cobertura publicadas por UnitedHealthcare, Aetna y Cigna exigen autorización previa o precertificación para Spravato <sup><a href="#source-3" className="text-[#C9A66B] hover:underline">[3]</a></sup><sup><a href="#source-4" className="text-[#C9A66B] hover:underline">[4]</a></sup><sup><a href="#source-5" className="text-[#C9A66B] hover:underline">[5]</a></sup>. Sus criterios suelen incluir un diagnóstico de depresión mayor resistente al tratamiento o grave, antecedentes de respuesta inadecuada a al menos dos antidepresivos, una escala de depresión documentada y un prescriptor que sea psiquiatra o consulte con uno <sup><a href="#source-3" className="text-[#C9A66B] hover:underline">[3]</a></sup><sup><a href="#source-4" className="text-[#C9A66B] hover:underline">[4]</a></sup><sup><a href="#source-5" className="text-[#C9A66B] hover:underline">[5]</a></sup>. Los detalles varían según la aseguradora y el plan, y cambian con el tiempo; considere esto una descripción general, no una promesa sobre su plan. Medicare y Medicaid siguen reglas distintas.</p>
          <p className="text-[#555] mb-4"><strong>Qué sucede en Rewired.</strong></p>
          <ol className="list-decimal pl-5 space-y-2 text-[#555] mb-4">
            <li><strong>Consulta gratuita.</strong> Revisamos su historial, sus medicamentos y si Spravato corresponde a un uso aprobado.</li>
            <li><strong>Registros.</strong> Reunimos lo que su plan solicita.</li>
            <li><strong>Autorización previa.</strong> La enviamos a su plan. La aprobación no está garantizada, y el tiempo depende de la aseguradora.</li>
            <li><strong>Primera visita,</strong> solo después de la autorización.</li>
          </ol>
          <p className="text-[#555] mb-4"><strong>El número de visitas afecta el costo.</strong> El calendario indicado en la etiqueta para la depresión resistente al tratamiento es dos veces por semana en las semanas 1–4, una vez por semana en las semanas 5–8 y, después, cada una o dos semanas si corresponde <sup><a href="#source-1" className="text-[#C9A66B] hover:underline">[1]</a></sup>. Son 12 visitas en los primeros dos meses, y su deducible, copago o coseguro pueden aplicarse a cada una.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Ketamina IV y la superfactura (superbill)</h2>
          <p className="text-[#555] mb-4"><strong>La ketamina IV es de pago en efectivo en Rewired.</strong> La ketamina inyectable está aprobada por la FDA como anestésico. La FDA indica que la ketamina no está aprobada para el tratamiento de ningún trastorno psiquiátrico <sup><a href="#source-6" className="text-[#C9A66B] hover:underline">[6]</a></sup>. Su uso para la depresión u otras condiciones de salud mental es fuera de indicación (“off-label”). Las aseguradoras generalmente no pagan los usos fuera de indicación. La política publicada por una aseguradora nacional, por ejemplo, clasifica la ketamina inyectable para trastornos psiquiátricos como en investigación y no comprobada ni médicamente necesaria <sup><a href="#source-3" className="text-[#C9A66B] hover:underline">[3]</a></sup>. Por eso la ketamina IV es de pago directo aquí.</p>
          <p className="text-[#555] mb-4">Nuestro protocolo IV de salud mental de 1 hora, publicado, cuesta <strong>$440 por sesión individual</strong> y <strong>$2,300 por un paquete de 6</strong>. Las sesiones guiadas, las opciones de 2 horas y los demás paquetes están en la página de <Link href="/es/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">costo de la terapia con ketamina</Link>. Para comparar ambos tratamientos, vea <Link href="/es/services/iv-ketamine-vs-spravato" className="text-[#C9A66B] font-semibold hover:underline">ketamina IV vs Spravato</Link>.</p>
          <p className="text-[#555] mb-4"><strong>¿Qué es una superfactura (superbill)?</strong> Es un estado de cuenta detallado de los servicios que usted recibió y lo que pagó. Entregamos una a cada paciente que paga en efectivo. Usted puede presentarla a su aseguradora para preguntar si parte del costo puede reembolsarse según los beneficios fuera de la red de su plan. La decisión es de la aseguradora. Usted presenta el reclamo, y nosotros no podemos predecir qué pagará su plan, si es que paga algo.</p>
          <p className="text-[#555] mb-4">El reembolso depende de si su plan tiene beneficios fuera de la red, de si considera la ketamina IV para su condición como un servicio elegible, de si usted ha cubierto su deducible fuera de la red, de su coseguro fuera de la red y del monto permitido del plan, que puede ser menor que lo que usted pagó <sup><a href="#source-7" className="text-[#C9A66B] hover:underline">[7]</a></sup>. Para muchos pacientes el resultado será poco o nada, así que por favor no cuente con un reembolso al decidir si la ketamina IV es adecuada para usted.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Por qué usar el seguro puede costar más de lo que espera</h2>
          <p className="text-[#555] mb-4">Usar el seguro no siempre significa pagar menos. Estos son los términos que determinan lo que usted debe:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
            <li><strong>Deducible:</strong> lo que usted paga cada año por servicios cubiertos antes de que su plan comience a pagar <sup><a href="#source-8" className="text-[#C9A66B] hover:underline">[8]</a></sup>.</li>
            <li><strong>Copago:</strong> una cantidad fija, como $30, por un servicio cubierto <sup><a href="#source-9" className="text-[#C9A66B] hover:underline">[9]</a></sup>.</li>
            <li><strong>Coseguro:</strong> un porcentaje del costo, como 20%, que usted paga después de cubrir su deducible <sup><a href="#source-10" className="text-[#C9A66B] hover:underline">[10]</a></sup>.</li>
            <li><strong>Monto permitido:</strong> lo máximo que su plan reconoce por un servicio. Los proveedores fuera de su red pueden cobrarle la diferencia <sup><a href="#source-7" className="text-[#C9A66B] hover:underline">[7]</a></sup><sup><a href="#source-11" className="text-[#C9A66B] hover:underline">[11]</a></sup>.</li>
            <li><strong>Máximo de gastos de bolsillo:</strong> lo máximo que usted paga por servicios cubiertos en un año del plan. No incluye la atención fuera de la red, los servicios que su plan no cubre ni los costos por encima del monto permitido <sup><a href="#source-12" className="text-[#C9A66B] hover:underline">[12]</a></sup>.</li>
            <li><strong>Coseguro fuera de la red:</strong> el porcentaje que usted paga a proveedores fuera de la red de su plan, generalmente más que el coseguro dentro de la red <sup><a href="#source-13" className="text-[#C9A66B] hover:underline">[13]</a></sup>.</li>
          </ul>
          <p className="text-[#555] mb-4">Los ejemplos siguientes son <strong>ejemplos hipotéticos con cifras redondas</strong>. No son precios de Rewired, ni tarifas de ninguna aseguradora, ni una predicción para su plan.</p>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Ejemplo hipotético 1: deducible y coseguro</h3>
            <p className="text-[#555]">Suponga que su plan tiene un deducible de $3,000, un coseguro de 20% y un máximo de gastos de bolsillo dentro de la red de $6,000. Suponga que el monto permitido por cada visita de tratamiento es de $1,000. Usted pagaría los $1,000 completos en cada una de sus primeras tres visitas, con lo cual cubre el deducible. Después pagaría 20%, es decir, $200 por visita. En las 8 visitas de las primeras cuatro semanas, su parte sería $3,000 + (5 × $200) = <strong>$4,000</strong>. En las 12 visitas de los primeros dos meses sería <strong>$4,800</strong>.</p>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Ejemplo hipotético 2: un plan con copago</h3>
            <p className="text-[#555]">Suponga que otro plan cobra un copago fijo de $50 por visita después de que usted haya cubierto su deducible. Las mismas 12 visitas costarían <strong>$600</strong>.</p>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Ejemplo hipotético 3: seguro frente a efectivo</h3>
            <p className="text-[#555]">Suponga que su plan tiene un deducible de $5,000 y un coseguro de 20%, y que el monto permitido es de $1,000 por visita. Suponga que el precio en efectivo de un servicio similar es de $600 por visita. Para 4 visitas, el seguro le costaría <strong>$4,000</strong> (aún estaría dentro del deducible) y el efectivo, <strong>$2,400</strong>. Para 12 visitas, el seguro costaría $5,000 + (7 × $200) = <strong>$6,400</strong> y el efectivo, <strong>$7,200</strong>. Un tratamiento corto puede costar más con el seguro y uno más largo, menos, según el plan.</p>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Ejemplo hipotético 4: una superfactura</h3>
            <p className="text-[#555]">Suponga que usted paga $2,000 en efectivo por un curso de sesiones IV y envía la superfactura a su aseguradora. Suponga que su plan tiene un deducible fuera de la red de $1,000 que usted aún no ha cubierto, un coseguro fuera de la red de 50% y un monto permitido de $1,200 para esos servicios. El plan contaría $1,200 de sus $2,000. Después del deducible de $1,000, el 50% de los $200 restantes es <strong>$100</strong> de reembolso, por lo que su costo neto sería de $1,900. Si su plan no tiene beneficios fuera de la red o no cubre el servicio, el reembolso sería de <strong>$0</strong>.</p>
          </div>
          <p className="text-[#555] mb-4"><strong>Conclusión.</strong> Los deducibles suelen reiniciarse cada año del plan, así que el mes en que usted comienza importa. Las únicas cifras confiables son las de su propio plan.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Preguntas para su aseguradora</h2>
          <p className="text-[#555] mb-4">Llame al número de servicio a miembros que aparece en su tarjeta del seguro y pregunte:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
            <li>¿Spravato está cubierto por mi plan, bajo mi beneficio médico o de farmacia, y requiere autorización previa?</li>
            <li>¿Rewired Ketamine, una clínica certificada REMS en Aventura, está dentro de la red de mi plan?</li>
            <li>¿Cuáles son mi deducible, copago y coseguro para este servicio? ¿Cuánto de mi deducible he cubierto este año?</li>
            <li>¿Cuál es mi máximo de gastos de bolsillo y cuánto he usado?</li>
            <li>¿Qué documentación exigen, y cuánto tarda y cuánto dura la autorización previa?</li>
            <li>¿Tengo beneficios fuera de la red? ¿Cuáles son mi deducible y coseguro fuera de la red, y cómo se fija el monto permitido?</li>
            <li>Si presento una superfactura, ¿considerarán reembolsar la ketamina IV para mi diagnóstico? ¿Hay un formulario de reclamo o una fecha límite?</li>
            <li>¿Cuándo se reinicia el año de mi plan?</li>
          </ul>
          <p className="text-[#555] mb-4">Pida un número de referencia de la llamada.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Cómo verificar sus beneficios con Rewired</h2>
          <ol className="list-decimal pl-5 space-y-2 text-[#555] mb-4">
            <li><strong>Reserve una consulta gratuita</strong> e indíquenos su plan de seguro.</li>
            <li><strong>Traiga su tarjeta.</strong> Usamos los datos de su plan para iniciar el proceso de autorización previa de Spravato.</li>
            <li><strong>Revisemos juntos sus cifras.</strong> Su aseguradora, no la clínica, establece su copago, coseguro y deducible. Si sus costos parecen mayores de lo esperado, o si Spravato no está cubierto, se lo diremos.</li>
          </ol>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Atención local en Aventura</h2>
          <p className="text-[#555] mb-4">Nuestra clínica está ubicada en 2820 NE 214th Street, Suite 1002, Aventura, FL 33180, a unos 25–45 minutos del área de Miami y a unos 20–35 minutos de Fort Lauderdale, según el tráfico. Ofrecemos atención en español. Somos de propiedad local, no una cadena de varias sucursales.</p>
          <p className="text-[#555] mb-4">Rewired Ketamine figura como la clínica de ketamina n.º 1 en Miami en la reseña 2026 de HealingMaps sobre clínicas del área. Puede leer la lista aquí: <a href="https://healingmaps.com/the-best-ketamine-clinics-in-miami/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">8 Best Ketamine Clinics in Miami (2026)</a> (en inglés).</p>
          <p className="text-[#555] mb-4">Conozca más sobre nuestra <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">clínica de ketamina en Aventura</Link> o llámenos al (305) 676-6070. Si está en crisis, llame o envíe un mensaje de texto al 988.</p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-[#0B1D36] mb-2">{faq.q}</h3>
                <p className="text-[#555]">
                  {faq.link && faq.a.includes(faq.link.text) ? (
                    <>
                      {faq.a.slice(0, faq.a.indexOf(faq.link.text))}
                      <Link href={faq.link.href} className="text-[#C9A66B] font-semibold hover:underline">{faq.link.text}</Link>
                      {faq.a.slice(faq.a.indexOf(faq.link.text) + faq.link.text.length)}
                    </>
                  ) : (
                    faq.a
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* TODO: add Medically reviewed by NAME, CREDENTIALS */}

          <p className="text-sm text-[#555] italic mt-8"><em>¿El seguro cubre la terapia con ketamina?</em></p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Fuentes</h2>
            <p className="text-[#555] text-sm mb-3">Las fuentes son las mismas que en la versión en inglés (se enlazan en su idioma original).</p>
          <ol className="list-decimal pl-5 space-y-2 text-[#555] text-sm">
            <li id="source-1">Información de prescripción de SPRAVATO (esketamina), Janssen Pharmaceuticals, aprobada por la FDA, vía DailyMed. <a href="https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">dailymed.nlm.nih.gov</a></li>
            <li id="source-2">HealthCare.gov, glosario: “Prior authorization.” <a href="https://www.healthcare.gov/glossary/prior-authorization/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-3">UnitedHealthcare, política 2026D0069Q, “Ketalar (Ketamine) and Spravato (Esketamine),” vigente desde el 1 de mayo de 2026. <a href="https://www.uhcprovider.com/content/dam/provider/docs/public/policies/comm-medical-drug/ketalar-spravato.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">uhcprovider.com</a>; programa de autorización previa: <a href="https://www.uhcprovider.com/content/dam/provider/docs/public/prior-auth/drugs-pharmacy/commercial/r-z/PA-Med-Nec-Spravato.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">uhcprovider.com</a></li>
            <li id="source-4">Aetna, Clinical Policy Bulletin 0950, “Esketamine (Spravato).” <a href="https://www.aetna.com/cpb/medical/data/900_999/0950.html" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">aetna.com</a></li>
            <li id="source-5">Cigna, “Psychiatry – Spravato Prior Authorization Policy,” revisión del 29 de abril de 2026. <a href="https://static.cigna.com/assets/chcp/pdf/coveragePolicies/cnf/cnf_606_coveragepositioncriteria_psychiatry_spravato_pa.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">static.cigna.com</a></li>
            <li id="source-6">FDA, 10 de octubre de 2023, alerta sobre productos de ketamina compuesta para trastornos psiquiátricos (copia archivada). <a href="https://web.archive.org/web/20260530025451/https://www.fda.gov/drugs/human-drug-compounding/fda-warns-patients-and-health-care-providers-about-potential-risks-associated-compounded-ketamine" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">web.archive.org</a></li>
            <li id="source-7">HealthCare.gov, “Allowed amount.” <a href="https://www.healthcare.gov/glossary/allowed-amount/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-8">HealthCare.gov, “Deductible.” <a href="https://www.healthcare.gov/glossary/deductible/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-9">HealthCare.gov, “Copayment.” <a href="https://www.healthcare.gov/glossary/co-payment/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-10">HealthCare.gov, “Coinsurance.” <a href="https://www.healthcare.gov/glossary/co-insurance/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-11">HealthCare.gov, “Balance billing.” <a href="https://www.healthcare.gov/glossary/balance-billing/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-12">HealthCare.gov, “Out-of-pocket maximum/limit.” <a href="https://www.healthcare.gov/glossary/out-of-pocket-maximum-limit/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-13">HealthCare.gov, “Out-of-network coinsurance.” <a href="https://www.healthcare.gov/glossary/out-of-network-coinsurance/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-[#555] mb-6">Reserve una consulta gratuita. Le diremos si Spravato es una opción, qué necesita su plan y cuánto cuesta la ketamina IV. Sin presión: solo respuestas honestas.</p>
        <Link href="/es#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">
          Reservar Consulta Gratuita
        </Link>
        <p className="mt-4 text-sm text-[#555]">O llame o envíe un mensaje al <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B] transition">(305) 676-6070</a></p>
      </section>

      {/* Footer */}
      <SiteFooterEs />
    </main>
    </>
  );
}

