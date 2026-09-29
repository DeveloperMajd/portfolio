import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

// Long-form text; `.legal` in globals.css styles the headings, paragraphs and links.
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="wrap pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="legal max-w-[70ch]">
        {/* Hyphenated so "Datenschutzerklärung" fits a phone screen. */}
        <h1 className="section-title hyphens-auto">{title}</h1>
        {children}
      </div>
    </article>
  );
}

const labels = {
  en: { phone: "Phone", email: "Email" },
  de: { phone: "Telefon", email: "E-Mail" },
} satisfies Record<Locale, { phone: string; email: string }>;

// Name, postal address, phone and email: shared by the Impressum and the Datenschutzerklärung.
export function ContactDetails({ lang }: { lang: Locale }) {
  const { address } = site;

  return (
    <>
      <address>
        {site.name}
        <br />
        {address.street}
        <br />
        {address.city}
        <br />
        {address.country[lang]}
      </address>
      <p>
        {labels[lang].phone}: <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>
        <br />
        {labels[lang].email}: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </>
  );
}
