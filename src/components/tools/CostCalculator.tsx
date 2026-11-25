"use client";

// Ketamine cost calculator. Client-side only: no network calls, no storage, no analytics.
// Uses only prices published on the site (see src/data/pricing.ts).

import Link from "next/link";
import { useState } from "react";
import { IV_PROTOCOLS, AT_HOME_STARTING, SPRAVATO_VISITS_FIRST_8_WEEKS, type IvProtocol } from "@/data/pricing";

const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

/** Cheapest way to buy `n` sessions from singles, 3-packs and 6-packs. */
function cheapest(p: IvProtocol, n: number) {
  let best = { cost: Infinity, six: 0, three: 0, single: 0 };
  for (let six = 0; six * 6 <= n; six++) {
    for (let three = 0; six * 6 + three * 3 <= n; three++) {
      const single = n - six * 6 - three * 3;
      const cost = six * p.pack6 + three * p.pack3 + single * p.single;
      if (cost < best.cost) best = { cost, six, three, single };
    }
  }
  return best;
}

const T = {
  en: {
    step1: "1. Choose an IV ketamine option",
    step2: "2. How many sessions?",
    sessions: "sessions",
    session: "session",
    compare: "Pay per session vs. packages",
    colOption: "Option",
    colTotal: "Total",
    colPer: "Per session",
    colSave: "Difference vs. single sessions",
    single: "Single session",
    pack3: "Package of 3",
    pack6: "Package of 6",
    singlesx: (n: number) => `${n} single sessions`,
    yourCourse: "Your estimate",
    payAsYouGo: "Paying one session at a time",
    bestMix: "Lowest total using published packages",
    mix: (six: number, three: number, single: number) => {
      const parts = [];
      if (six) parts.push(`${six} × package of 6`);
      if (three) parts.push(`${three} × package of 3`);
      if (single) parts.push(`${single} × single session`);
      return parts.join(" + ");
    },
    mixNote: "Whether packages can be combined for longer courses is confirmed at your consultation.",
    ivNote: "IV ketamine is usually cash-pay. A consultation is required before treatment. Ask us about available discounts.",
    spravatoTitle: "Spravato (esketamine nasal spray)",
    spravatoBody:
      "Spravato does not have a published cash price. Spravato (esketamine nasal spray) may be covered by some insurance plans when REMS criteria are met. Coverage is not guaranteed and prior authorization is usually required. We bill Spravato in-network with UnitedHealthcare, Cigna, and Aetna; Blue Cross Blue Shield plans, including Florida Blue, are out-of-network.",
    spravatoInput: "Optional: your plan’s cost per visit after your deductible (copay or estimated coinsurance)",
    spravatoResult: (v: number, total: string) =>
      `The labeled schedule for treatment-resistant depression is ${v} visits in the first 8 weeks. At that amount per visit, that would be about ${total} for those visits. Deductibles, coinsurance and the plan year can change this, so only your plan can give you the real number.`,
    atHomeTitle: "At-home ketamine (starting prices)",
    atHomeBody: "Multiple-dose packages with clinical guidance. Exact pricing is confirmed after screening.",
    from: "Starts at",
    links: { cost: "/services/ketamine-therapy-cost", insurance: "/services/ketamine-insurance", home: "/services/home-ketamine", hsa: "/services/hsa-fsa-ketamine" },
    linkText: { cost: "cost page", insurance: "insurance guide", home: "at-home ketamine page", hsa: "HSA/FSA guide" },
    seeAlso: "Prices from our",
    and: "and",
    privacy: "Everything is calculated on this device. Nothing you enter is sent or saved.",
  },
  es: {
    step1: "1. Elija una opción de ketamina IV",
    step2: "2. ¿Cuántas sesiones?",
    sessions: "sesiones",
    session: "sesión",
    compare: "Pagar por sesión vs. paquetes",
    colOption: "Opción",
    colTotal: "Total",
    colPer: "Por sesión",
    colSave: "Diferencia vs. sesiones individuales",
    single: "Sesión individual",
    pack3: "Paquete de 3",
    pack6: "Paquete de 6",
    singlesx: (n: number) => `${n} sesiones individuales`,
    yourCourse: "Su estimado",
    payAsYouGo: "Pagando una sesión a la vez",
    bestMix: "Total más bajo con los paquetes publicados",
    mix: (six: number, three: number, single: number) => {
      const parts = [];
      if (six) parts.push(`${six} × paquete de 6`);
      if (three) parts.push(`${three} × paquete de 3`);
      if (single) parts.push(`${single} × sesión individual`);
      return parts.join(" + ");
    },
    mixNote: "Si los paquetes se pueden combinar para tratamientos más largos se confirma en su consulta.",
    ivNote: "La ketamina IV suele ser de pago en efectivo. Se requiere una consulta antes del tratamiento. Pregúntenos sobre los descuentos disponibles.",
    spravatoTitle: "Spravato (espray nasal de esketamina)",
    spravatoBody:
      "Spravato no tiene un precio publicado de pago en efectivo. Spravato (espray nasal de esketamina) puede estar cubierto por algunos planes de seguro cuando se cumplen los criterios REMS. La cobertura no está garantizada y generalmente se requiere autorización previa. Facturamos Spravato dentro de la red con UnitedHealthcare, Cigna y Aetna; los planes de Blue Cross Blue Shield, incluido Florida Blue, están fuera de la red.",
    spravatoInput: "Opcional: lo que paga su plan por visita después del deducible (copago o coseguro estimado)",
    spravatoResult: (v: number, total: string) =>
      `El calendario de la etiqueta para la depresión resistente al tratamiento es de ${v} visitas en las primeras 8 semanas. Con esa cantidad por visita, serían unos ${total} por esas visitas. El deducible, el coseguro y el año del plan pueden cambiar esto; solo su plan puede darle la cifra real.`,
    atHomeTitle: "Ketamina en casa (precios iniciales)",
    atHomeBody: "Paquetes de varias dosis con guía clínica. El precio exacto se confirma después de la evaluación.",
    from: "Desde",
    links: { cost: "/es/services/ketamine-therapy-cost", insurance: "/es/services/ketamine-insurance", home: "/es/services/home-ketamine", hsa: "/es/services/hsa-fsa-ketamine" },
    linkText: { cost: "página de costos", insurance: "guía de seguros", home: "página de ketamina en casa", hsa: "guía de HSA/FSA" },
    seeAlso: "Precios tomados de nuestra",
    and: "y",
    privacy: "Todo se calcula en este dispositivo. Nada de lo que escriba se envía ni se guarda.",
  },
};

export default function CostCalculator({ lang }: { lang: "en" | "es" }) {
  const t = T[lang];
  const es = lang === "es";
  const [protocolId, setProtocolId] = useState(IV_PROTOCOLS[0].id);
  const [n, setN] = useState(6);
  const [copay, setCopay] = useState("");
  const p = IV_PROTOCOLS.find((x) => x.id === protocolId) ?? IV_PROTOCOLS[0];
  const best = cheapest(p, n);
  const payGo = p.single * n;
  const copayNum = Number(copay.replace(/[^0-9.]/g, ""));

  const rows = [
    { label: t.single, total: p.single, count: 1 },
    { label: t.singlesx(3), total: p.single * 3, count: 3 },
    { label: t.pack3, total: p.pack3, count: 3 },
    { label: t.singlesx(6), total: p.single * 6, count: 6 },
    { label: t.pack6, total: p.pack6, count: 6 },
  ];

  return (
    <div className="space-y-10">
      <p className="text-sm text-[#555] bg-[#F8F5F0] rounded-xl p-4">{t.privacy}</p>

      <fieldset>
        <legend className="text-xl font-bold text-[#0B1D36] mb-4">{t.step1}</legend>
        <div className="grid sm:grid-cols-2 gap-3">
          {IV_PROTOCOLS.map((x) => (
            <label
              key={x.id}
              className={`rounded-xl border p-4 cursor-pointer transition ${
                x.id === protocolId ? "border-[#0B1D36] bg-[#0B1D36] text-white" : "border-gray-300 bg-white hover:border-[#C9A66B]"
              }`}
            >
              <input type="radio" name="iv-protocol" value={x.id} checked={x.id === protocolId} onChange={() => setProtocolId(x.id)} className="sr-only" />
              <span className="block font-semibold">{es ? x.nameEs : x.nameEn}</span>
              <span className={`block text-sm ${x.id === protocolId ? "text-white/75" : "text-[#666]"}`}>{es ? x.detailEs : x.detailEn}</span>
              <span className="block text-sm mt-1">{t.single}: {usd(x.single)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <h3 className="text-xl font-bold text-[#0B1D36] mb-4">{t.compare}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[#444] border border-gray-200">
            <thead className="bg-[#0B1D36] text-white text-sm">
              <tr>
                <th className="px-3 py-2">{t.colOption}</th>
                <th className="px-3 py-2">{t.colTotal}</th>
                <th className="px-3 py-2">{t.colPer}</th>
                <th className="px-3 py-2">{t.colSave}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const diff = r.total - p.single * r.count;
                return (
                  <tr key={r.label} className="border-t border-gray-200">
                    <td className="px-3 py-2">{r.label}</td>
                    <td className="px-3 py-2 font-semibold">{usd(r.total)}</td>
                    <td className="px-3 py-2">{usd(r.total / r.count)}</td>
                    <td className="px-3 py-2">{diff < 0 ? `−${usd(-diff)}` : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <label htmlFor="session-count" className="block text-xl font-bold text-[#0B1D36] mb-2">
          {t.step2} <span className="text-[#C9A66B]">{n} {n === 1 ? t.session : t.sessions}</span>
        </label>
        <input
          id="session-count"
          type="range"
          min={1}
          max={12}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="w-full accent-[#C9A66B]"
        />
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-[#F8F5F0] rounded-xl p-5">
            <p className="text-sm text-[#555]">{t.payAsYouGo}</p>
            <p className="text-3xl font-bold text-[#0B1D36]">{usd(payGo)}</p>
          </div>
          <div className="bg-[#0B1D36] text-white rounded-xl p-5">
            <p className="text-sm text-white/75">{t.bestMix}</p>
            <p className="text-3xl font-bold">{usd(best.cost)}</p>
            <p className="text-sm text-white/80 mt-1">{t.mix(best.six, best.three, best.single)}</p>
          </div>
        </div>
        <p className="text-sm text-[#555] mt-3">{t.mixNote} {t.ivNote}</p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-bold text-[#0B1D36] mb-3">{t.spravatoTitle}</h3>
        <p className="text-[#555] mb-4">{t.spravatoBody}</p>
        <label htmlFor="copay" className="block text-sm font-semibold text-[#0B1D36] mb-2">{t.spravatoInput}</label>
        <div className="flex items-center gap-2 max-w-xs">
          <span className="text-[#555]">$</span>
          <input
            id="copay"
            inputMode="decimal"
            autoComplete="off"
            value={copay}
            onChange={(e) => setCopay(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="50"
          />
        </div>
        {copayNum > 0 && (
          <p className="text-[#444] bg-[#F8F5F0] rounded-xl p-4 mt-4" aria-live="polite">
            {t.spravatoResult(SPRAVATO_VISITS_FIRST_8_WEEKS, usd(copayNum * SPRAVATO_VISITS_FIRST_8_WEEKS))}
          </p>
        )}
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-bold text-[#0B1D36] mb-3">{t.atHomeTitle}</h3>
        <p className="text-[#555] mb-4">{t.atHomeBody}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {AT_HOME_STARTING.map((a) => (
            <div key={a.nameEn} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <p className="font-semibold text-[#0B1D36]">{es ? a.nameEs : a.nameEn}</p>
              <p className="text-xs text-[#666]">{t.from}</p>
              <p className="text-2xl font-bold text-[#0B1D36]">{usd(a.from)}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-[#555]">
        {t.seeAlso} <Link href={t.links.cost} className="text-[#C9A66B] font-semibold hover:underline">{t.linkText.cost}</Link> {t.and}{" "}
        <Link href={t.links.home} className="text-[#C9A66B] font-semibold hover:underline">{t.linkText.home}</Link>.{" "}
        {es ? "Vea también nuestra " : "See also our "}
        <Link href={t.links.insurance} className="text-[#C9A66B] font-semibold hover:underline">{t.linkText.insurance}</Link> {t.and}{" "}
        <Link href={t.links.hsa} className="text-[#C9A66B] font-semibold hover:underline">{t.linkText.hsa}</Link>.
      </p>
    </div>
  );
}
