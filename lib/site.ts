import type { Locale } from "./i18n";

export const site = {
  url: "https://developermajd.com",
  name: "Majd Kalthoum",
  email: "majd@developermajd.com",
  github: "https://github.com/DeveloperMajd",
  linkedin: "https://www.linkedin.com/in/majd-kalthoum",
  calendly: "https://calendly.com/developermajd/30min",
  // Each locale offers the CV in its own language.
  cv: {
    en: "/cv/majd-kalthoum-cv-en.pdf",
    de: "/cv/majd-kalthoum-cv-de.pdf",
  } satisfies Record<Locale, string>,
};
