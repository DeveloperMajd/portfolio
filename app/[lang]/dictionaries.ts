import type { Locale } from "@/lib/i18n";

const dictionaries = {
  en: () => import("./dictionaries/en").then((module) => module.en),
  de: () => import("./dictionaries/de").then((module) => module.de),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
