import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";
import { JsonLd } from "@/components/JsonLd";
import { ReviewedBy, SourceList, EducationNote } from "@/components/tools/ReviewAndSources";
import { pageJsonLd } from "@/data/page-meta";
import type { Source } from "@/data/medical-review";

const TITLE = "Spravato (esketamina) en Aventura";
const DESCRIPTION =
  "Spravato (esketamina) en nuestra clínica certificada REMS en Aventura. Aprobado por la FDA para la depresión resistente al tratamiento en adultos, solo o junto con un antidepresivo oral. Dentro de la red con UnitedHealthcare, Cigna y Aetna; Florida Blue está fuera de la red.";

const SOURCES: Source[] = [
  {
    label: "Información de prescripción de SPRAVATO (esketamina), Janssen Pharmaceuticals. Etiqueta aprobada por la FDA en DailyMed (indicaciones, monitoreo REMS, calendario de dosis y precauciones para conducir, revisada el 25 de noviembre de 2026).",
    href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed",
    site: "dailymed.nlm.nih.gov",
  },
  {
    label: "Administración de Alimentos y Medicamentos de EE. UU. (FDA). Carta de aprobación suplementaria de Spravato (esketamina) en espray nasal, NDA 211243/S-016, 17 de enero de 2025 (monoterapia para la depresión resistente al tratamiento en adultos).",
    href: "https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2025/211243Orig1s016ltr.pdf",
    site: "accessdata.fda.gov",
  },
  {
    label: "MedlinePlus en español. Aerosol nasal de esketamina: información para pacientes.",
    href: "https://medlineplus.gov/spanish/druginfo/meds/a619017-es.html",
    site: "medlineplus.gov",
  },
];

const A = "text-[#C9A66B] font-semibold hover:underline";

export default function SpravatoEsPage() {
  const jsonLd = pageJsonLd({
    lang: "es",
    path: "/es/services/spravato",
    name: TITLE,
    description: DESCRIPTION,
    about: {
      "@type": "Substance",
      name: "Spravato (esketamine nasal spray)",
      nonProprietaryName: "esketamine",
      administrationRoute: "nasal",
      prescriptionStatus: "PrescriptionOnly",
    },
    crumbs: [
      { name: "Inicio", path: "/es" },
      { name: "Servicios", path: "/es/services" },
      { name: "Spravato", path: "/es/services/spravato" },
    ],
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
        <SiteHeaderEs englishHref="/services/spravato" />

        <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • Sur de Florida</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{TITLE}</h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto mb-8">
            Un espray nasal aprobado por la FDA para adultos con depresión resistente al tratamiento, que puede usarse solo o
            junto con un antidepresivo oral. Se administra en nuestra clínica certificada REMS y se monitorea en el sitio.
            Pacientes vienen de Miami, Fort Lauderdale y el Sur de Florida.
          </p>
          <p className="text-[#C9A66B] font-semibold text-lg mb-8">
            <Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link>
          </p>
          <Link href="/es#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
            Preguntar por una consulta de Spravato
          </Link>
        </section>

        <section id="main-content" className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <ReviewedBy lang="es" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-4 mb-5">¿Qué es Spravato?</h2>
            <p className="text-[#555] mb-4">Spravato se autoadministra bajo observación. No se lleva a casa.</p>
            <p className="text-[#555] mb-4">
              Spravato es el nombre comercial del espray nasal de esketamina, fabricado por Johnson &amp; Johnson. No es la misma
              visita que una infusión de ketamina IV. La prescripción en esta clínica la dirige nuestro equipo de salud mental.
              La oficina está certificada REMS, lo cual es necesario antes de que alguien pueda recibir una dosis.
            </p>
            <p className="text-[#555] mb-4">
              Somos de propiedad local en Aventura. Nuestra consulta inicial siempre es gratuita. Si Spravato es apropiado
              depende de su evaluación médica, la revisión de su historial y la autorización de su seguro.
            </p>
            <p className="text-[#555] mb-10">
              Spravato <strong>puede ayudar</strong> a algunos adultos con depresión resistente al tratamiento. No funciona en
              todas las personas y no es una cura. Los resultados varían de una persona a otra.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Usos actuales aprobados por la FDA</h2>
            <p className="text-[#555] mb-4">
              La etiqueta actual de la FDA indica dos usos en adultos<sup><a href="#source-1" className={A}>[1]</a></sup>
              <sup><a href="#source-2" className={A}>[2]</a></sup>:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[#555] mb-6">
              <li>
                <strong>Depresión resistente al tratamiento (DRT)</strong> — depresión que no mejoró lo suficiente después de
                al menos dos antidepresivos orales. Desde el 17 de enero de 2025, Spravato puede usarse{" "}
                <strong>solo o junto con un antidepresivo oral</strong> para este uso.
              </li>
              <li>
                <strong>Síntomas depresivos en adultos con trastorno depresivo mayor (TDM) e ideación o conducta suicida
                aguda</strong>, <strong>junto con un antidepresivo oral</strong>. No está probado que Spravato prevenga el
                suicidio, y no sustituye la atención de emergencia ni la hospitalización cuando se necesitan.
              </li>
            </ul>
            <p className="text-[#555] mb-10">Spravato no está aprobado para niños ni adolescentes.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Historia de las aprobaciones de la FDA</h2>
            <p className="text-[#555] mb-4">Esta es la historia de las aprobaciones. La etiqueta actual está resumida arriba.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#eee] mb-10">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-[#0B1D36] text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Fecha</th>
                    <th className="px-4 py-3 font-semibold">Lo que aprobó la FDA</th>
                  </tr>
                </thead>
                <tbody className="text-[#444]">
                  <tr className="border-t border-[#eee]">
                    <td className="px-4 py-4 align-top whitespace-nowrap">5 de marzo de 2019</td>
                    <td className="px-4 py-4">Depresión resistente al tratamiento en adultos, con un antidepresivo oral.</td>
                  </tr>
                  <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                    <td className="px-4 py-4 align-top whitespace-nowrap">3 de agosto de 2020</td>
                    <td className="px-4 py-4">
                      Síntomas depresivos en adultos con trastorno depresivo mayor e ideación o conducta suicida aguda, junto
                      con un antidepresivo oral. No está probado que prevenga el suicidio.
                    </td>
                  </tr>
                  <tr className="border-t border-[#eee]">
                    <td className="px-4 py-4 align-top whitespace-nowrap">17 de enero de 2025</td>
                    <td className="px-4 py-4">
                      Depresión resistente al tratamiento en adultos como monoterapia: ya no se requiere un antidepresivo oral
                      para ese uso<sup><a href="#source-2" className={A}>[2]</a></sup>.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Cómo es una visita y un curso</h2>
            <p className="text-[#555] mb-4">
              Por los riesgos de sedación, disociación, depresión respiratoria y cambios en la presión arterial, Spravato solo
              está disponible a través de un programa restringido llamado Spravato REMS. Nuestra clínica está certificada en ese
              programa<sup><a href="#source-1" className={A}>[1]</a></sup>
              <sup><a href="#source-3" className={A}>[3]</a></sup>.
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[#555] mb-6">
              <li>Procure no comer durante al menos 2 horas ni beber líquidos durante al menos 30 minutos antes de la dosis.</li>
              <li>Revisamos su presión arterial antes del espray.</li>
              <li>Usted mismo se aplica el espray nasal en la clínica, con la guía de nuestro equipo.</li>
              <li>
                Permanece <strong>al menos 2 horas en observación</strong> después de cada dosis, hasta que el equipo confirme
                que puede irse.
              </li>
              <li>
                Se va con alguien que pueda manejar. <strong>No debe manejar ni operar maquinaria hasta el día siguiente,
                después de una noche de buen descanso.</strong>
              </li>
            </ol>
            <p className="text-[#555] mb-4">
              Para la depresión resistente al tratamiento, el calendario de la etiqueta es dos veces por semana en las semanas
              1 a 4, una vez por semana en las semanas 5 a 8, y luego cada 1 o 2 semanas si sigue siendo apropiado. Su
              profesional de salud confirma la dosis y el plan. Spravato no está aprobado para uso en casa.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[#eee] mb-10">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-[#0B1D36] text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Fase</th>
                    <th className="px-4 py-3 font-semibold">Con qué frecuencia</th>
                    <th className="px-4 py-3 font-semibold">En el sitio</th>
                  </tr>
                </thead>
                <tbody className="text-[#444]">
                  <tr className="border-t border-[#eee]">
                    <td className="px-4 py-4">Semanas 1–4</td>
                    <td className="px-4 py-4">Dos veces a la semana</td>
                    <td className="px-4 py-4">Espray nasal bajo observación, luego al menos 2 horas de monitoreo.</td>
                  </tr>
                  <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                    <td className="px-4 py-4">Semanas 5–8</td>
                    <td className="px-4 py-4">Una vez a la semana</td>
                    <td className="px-4 py-4">Misma observación y monitoreo.</td>
                  </tr>
                  <tr className="border-t border-[#eee]">
                    <td className="px-4 py-4">Semana 9 en adelante</td>
                    <td className="px-4 py-4">Cada 1–2 semanas</td>
                    <td className="px-4 py-4">Solo si sigue siendo apropiado. No es para uso en casa.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Seguro y autorización previa</h2>
            <p className="text-[#555] mb-4">
              Facturamos Spravato <strong>dentro de la red con UnitedHealthcare, Cigna y Aetna</strong>.{" "}
              <strong>Florida Blue (Blue Cross Blue Shield) está fuera de la red</strong>. Otros planes se pueden revisar en la
              consulta. La cobertura no está garantizada. Los copagos, el coseguro y el deducible los establece su póliza, no la
              clínica. Por lo general se requiere autorización previa.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555] mb-6">
              <li>
                <Link href="/es/services/ketamine-insurance" className={A}>Guía de seguros para ketamina y Spravato</Link>
              </li>
              <li>
                <Link href="/es/services/ketamine-insurance/spravato-unitedhealthcare" className={A}>UnitedHealthcare</Link>
                {" · "}
                <Link href="/es/services/ketamine-insurance/spravato-cigna" className={A}>Cigna</Link>
                {" · "}
                <Link href="/es/services/ketamine-insurance/spravato-aetna" className={A}>Aetna</Link>
              </li>
              <li>
                <Link href="/es/services/ketamine-insurance/spravato-florida-blue-bcbs" className={A}>Florida Blue (BCBS)</Link>
                {" · "}
                <Link href="/es/services/ketamine-insurance/spravato-medicare" className={A}>Medicare</Link>
                {" · "}
                <Link href="/es/services/ketamine-insurance/spravato-florida-medicaid" className={A}>Medicaid de Florida</Link>
              </li>
              <li>
                <Link href="/es/tools/ketamine-cost-calculator" className={A}>Calculadora de costos</Link>
                {" · "}
                <Link href="/es/services/iv-ketamine-vs-spravato" className={A}>Ketamina IV vs. Spravato</Link>
              </li>
            </ul>
            <div className="overflow-x-auto rounded-2xl border border-[#eee] mb-6">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-[#0B1D36] text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Paso</th>
                    <th className="px-4 py-3 font-semibold">Qué suele suceder</th>
                  </tr>
                </thead>
                <tbody className="text-[#444]">
                  <tr className="border-t border-[#eee]">
                    <td className="px-4 py-4 align-top">1. Consulta</td>
                    <td className="px-4 py-4">Historial, medicamentos actuales y si Spravato coincide con un uso aprobado.</td>
                  </tr>
                  <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                    <td className="px-4 py-4 align-top">2. Registros</td>
                    <td className="px-4 py-4">
                      La mayoría de los planes quieren depresión mayor que no mejoró después de al menos dos ensayos de
                      antidepresivos, más un puntaje de depresión. Recopilamos lo que su plan solicita.
                    </td>
                  </tr>
                  <tr className="border-t border-[#eee]">
                    <td className="px-4 py-4 align-top">3. Autorización previa</td>
                    <td className="px-4 py-4">La enviamos al plan. La aprobación no está garantizada. El tiempo depende de la aseguradora.</td>
                  </tr>
                  <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                    <td className="px-4 py-4 align-top">4. Primera visita</td>
                    <td className="px-4 py-4">Solo después de la autorización, en este entorno certificado.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Preguntas frecuentes</h2>
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-[#eee]">
                <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">¿Tengo que seguir tomando un antidepresivo oral?</h3>
                <p className="text-[#444] leading-relaxed">
                  No siempre, y nunca lo deje por su cuenta. Para la depresión resistente al tratamiento, Spravato puede usarse
                  solo o junto con un antidepresivo oral. Para el TDM con ideación o conducta suicida aguda, se usa junto con un
                  antidepresivo oral. Esa decisión se toma con su profesional de salud.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#eee]">
                <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">¿Puedo usar Spravato en casa?</h3>
                <p className="text-[#444] leading-relaxed">
                  No. Por las reglas del programa REMS, solo se administra en una clínica certificada, con al menos dos horas de
                  monitoreo después de cada dosis.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#eee]">
                <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">¿Puedo manejar yo mismo a casa?</h3>
                <p className="text-[#444] leading-relaxed">
                  No. Organice a alguien que lo lleve. No debe manejar ni operar maquinaria hasta el día siguiente, después de
                  una noche de buen descanso.
                </p>
              </div>
            </div>

            <SourceList lang="es" sources={SOURCES} />
            <EducationNote lang="es" />
          </div>
        </section>

        <section className="py-16 px-6 bg-[#F8F5F0] text-center">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para dar el siguiente paso?</h2>
          <p className="text-lg text-[#555] mb-6 max-w-3xl mx-auto">
            Reserve una consulta gratuita. Sin presión, solo respuestas honestas. Le diremos si Spravato es una opción y qué
            necesita su plan. ¡Hablamos Español!
          </p>
          <Link
            href="/es#contact"
            className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition"
          >
            Reservar Consulta Gratuita
          </Link>
          <p className="mt-4 text-sm text-[#555]">
            O llame o envíe un mensaje de texto al{" "}
            <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B] transition">(305) 676-6070</a>
          </p>
        </section>

        <SiteFooterEs />
      </main>
    </>
  );
}
