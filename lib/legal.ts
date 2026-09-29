import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { site } from "./site";

// Both languages share the slug, so the language switch keeps the visitor on the same page.
export function legalMetadata(lang: Locale, slug: "impressum" | "datenschutz", title: string): Metadata {
  return {
    title: `${title} | ${site.name}`,
    alternates: {
      canonical: `/${lang}/${slug}`,
      languages: { en: `/en/${slug}`, de: `/de/${slug}` },
    },
    // Linked from every page, but kept out of search results: they carry the home address.
    robots: { index: false, follow: true },
  };
}
