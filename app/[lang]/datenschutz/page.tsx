import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { isLocale } from "@/lib/i18n";
import { legalMetadata } from "@/lib/legal";
import { getDictionary } from "../dictionaries";
import { content } from "./content";

export async function generateMetadata({ params }: PageProps<"/[lang]/datenschutz">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { legal } = await getDictionary(lang);

  return legalMetadata(lang, "datenschutz", legal.privacy.title);
}

export default async function Datenschutz({ params }: PageProps<"/[lang]/datenschutz">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { legal } = await getDictionary(lang);

  return <LegalPage title={legal.privacy.title}>{content[lang]}</LegalPage>;
}
