import type { Locale } from "./i18n";

export const site = {
  url: "https://developermajd.com",
  name: "Majd Kalthoum",
  email: "majd@developermajd.com",
  // Impressum and Datenschutz only.
  phone: "+49 176 63637249",
  address: {
    street: "Schwyzer Straße 15",
    city: "13349 Berlin",
    country: { en: "Germany", de: "Deutschland" } satisfies Record<Locale, string>,
  },
  github: "https://github.com/DeveloperMajd",
  linkedin: "https://www.linkedin.com/in/majd-kalthoum",
  calendly: "https://calendly.com/developermajd/30min",
  // Each locale offers the CV in its own language.
  cv: {
    en: "/cv/majd-kalthoum-cv-en.pdf",
    de: "/cv/majd-kalthoum-cv-de.pdf",
  } satisfies Record<Locale, string>,
};
