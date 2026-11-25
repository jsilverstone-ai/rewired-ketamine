import { notFound } from "next/navigation";
import InsurerPage, { insurerTitle, insurerDescription } from "@/components/tools/InsurerPage";
import { INSURERS, insurerPath } from "@/data/insurers";
import { pairedMetadata } from "@/data/page-meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return INSURERS.map((i) => ({ insurer: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ insurer: string }> }) {
  const { insurer } = await params;
  const ins = INSURERS.find((i) => i.slug === insurer);
  if (!ins) return {};
  return pairedMetadata("en", insurerPath(ins.slug), insurerTitle(ins, "en"), insurerDescription(ins, "en"));
}

export default async function Page({ params }: { params: Promise<{ insurer: string }> }) {
  const { insurer } = await params;
  const ins = INSURERS.find((i) => i.slug === insurer);
  if (!ins) notFound();
  return <InsurerPage ins={ins} lang="en" />;
}
