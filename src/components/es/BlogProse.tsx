import Link from "next/link";

/** Small typography helpers for the Spanish blog posts (same design system as the English posts). */

export function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-[#0B1D36] mt-8 mb-3">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-lg leading-relaxed text-[#333] mb-6">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed text-[#333] mb-6">{children}</ul>;
}

export function OL({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal pl-6 space-y-2 text-lg leading-relaxed text-[#333] mb-6">{children}</ol>;
}

/** Internal link. */
export function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#C9A66B] font-semibold hover:underline">
      {children}
    </Link>
  );
}

/** Citation marker that jumps to the numbered source list at the end of the post. */
export function Ref({ n }: { n: number | number[] }) {
  const list = Array.isArray(n) ? n : [n];
  return (
    <sup className="text-xs ml-0.5">
      [
      {list.map((x, i) => (
        <span key={x}>
          {i > 0 ? ", " : ""}
          <a href={`#source-${x}`} className="text-[#C9A66B] hover:underline" aria-label={`Fuente ${x}`}>
            {x}
          </a>
        </span>
      ))}
      ]
    </sup>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8F5F0] border-l-4 border-[#C9A66B] rounded-r-xl p-6 my-8 text-lg leading-relaxed text-[#333]">
      {children}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  return (
    <div className="space-y-4 mb-6">
      {items.map((it) => (
        <div key={it.q} className="bg-white rounded-xl p-6 border border-[#eee]">
          <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">{it.q}</h3>
          <div className="text-[#444] leading-relaxed">{it.a}</div>
        </div>
      ))}
    </div>
  );
}

/** Crisis resources for blog posts (Spanish). */
export function CrisisNote() {
  return (
    <div className="bg-white border-2 border-[#7A1F1F]/40 rounded-2xl p-6 my-10">
      <h2 className="font-bold mb-3 text-lg text-[#7A1F1F]">Si está pasando por una crisis, busque ayuda hoy</h2>
      <ul className="space-y-2 text-[#333]">
        <li>
          <strong>
            Llame al <a href="tel:988" className="underline">988</a> y oprima 2
          </strong>{" "}
          para hablar en español con la Línea 988 de Prevención del Suicidio y Crisis, las 24 horas.
        </li>
        <li>
          <strong>
            Envíe la palabra AYUDA por mensaje de texto al <a href="sms:988" className="underline">988</a>
          </strong>
          .
        </li>
        <li>
          <strong>
            Si está en peligro inmediato, llame al <a href="tel:911" className="underline">911</a>
          </strong>{" "}
          o vaya a la sala de emergencias más cercana.
        </li>
      </ul>
    </div>
  );
}
