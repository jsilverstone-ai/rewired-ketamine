import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpravatoEsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Spravato (esketamina) en Aventura</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Un espray nasal aprobado por la FDA para adultos con depresión resistente al tratamiento, administrado en nuestra clínica certificada REMS y monitoreado en el sitio. Pacientes vienen de Miami, Fort Lauderdale y el Sur de Florida.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
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
            Somos de propiedad local en Aventura. Nuestra consulta inicial siempre es gratuita. La aprobación de Spravato depende de su evaluación médica, revisión de historial y autorización del seguro.
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
          <p className="text-[#555] mb-4">Esto sigue el programa etiquetado para depresión resistente al tratamiento. Su clínico confirma la dosis.</p>
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
                  <td className="border border-gray-200 px-4 py-2">Espray nasal bajo observación, luego al menos 2 horas de monitoreo. Podemos personalizar el plan de tratamiento según sus necesidades.</td>
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
                  <td className="border border-gray-200 px-4 py-2">La mayoría de los planes quieren depresión mayor que no mejoró después de al menos dos ensayos de antidepresivos, más un puntaje de depresión. Recopilamos lo que su plan solicita.</td>
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
            Actualmente enviamos autorizaciones de Spravato para Cigna, UnitedHealthcare y Aetna, y Blue Cross Blue Shield fuera de red. Otros planes pueden revisarse en la consulta. La cobertura, copagos y deducibles son establecidos por su póliza, no por la clínica.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-[#555] mb-6">Reserve una consulta gratuita. Le diremos si Spravato es una opción y qué necesita su plan. ¡Hablamos Español!</p>
        <Link href="/es#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">
          Reservar Consulta Gratuita
        </Link>
      </section>

      {/* Footer */}
      <SiteFooterEs />
    </main>
  );
}
