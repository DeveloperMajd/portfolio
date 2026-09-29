import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ContactDetails, LegalPage } from "@/components/LegalPage";
import { isLocale, type Locale } from "@/lib/i18n";
import { legalMetadata } from "@/lib/legal";
import { getDictionary } from "../dictionaries";

const content = {
  en: (
    <>
      <p>Information under Section 5 of the German Digital Services Act (DDG):</p>
      <ContactDetails lang="en" />
    </>
  ),
  de: (
    <>
      <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG):</p>
      <ContactDetails lang="de" />
    </>
  ),
} satisfies Record<Locale, ReactNode>;

export async function generateMetadata({ params }: PageProps<"/[lang]/impressum">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { legal } = await getDictionary(lang);

  return legalMetadata(lang, "impressum", legal.impressum.title);
}

export default async function Impressum({ params }: PageProps<"/[lang]/impressum">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { legal } = await getDictionary(lang);

  return <LegalPage title={legal.impressum.title}>{content[lang]}</LegalPage>;
}
