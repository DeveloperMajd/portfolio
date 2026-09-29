import { NotFoundChat, type NotFoundCopy } from "@/components/NotFoundChat";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";

// not-found gets no params, so both languages go to the client, which picks
// one from the URL. Only these few strings are sent, not the dictionaries.
export default async function NotFound() {
  const entries = await Promise.all(
    locales.map(async (lang) => {
      const dict = await getDictionary(lang);
      const copy: NotFoundCopy = {
        ...dict.notFound,
        typing: dict.hero.typing,
        links: [
          { href: `/${lang}`, label: dict.notFound.home },
          { href: `/${lang}#work`, label: dict.nav.work },
          { href: `/${lang}#experience`, label: dict.nav.experience },
          { href: `/${lang}#contact`, label: dict.nav.contact },
        ],
      };
      return [lang, copy] as const;
    }),
  );

  return <NotFoundChat copy={Object.fromEntries(entries) as Record<Locale, NotFoundCopy>} />;
}
