import type { Dictionary } from "@/app/[lang]/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { DownloadIcon } from "./icons";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ lang, nav }: { lang: Locale; nav: Dictionary["nav"] }) {
  // Absolute to the locale's home page so they also work from the 404 page.
  const items = [
    { href: `/${lang}#work`, label: nav.work },
    { href: `/${lang}#experience`, label: nav.experience },
    { href: `/${lang}#stack`, label: nav.stack },
    { href: `/${lang}#contact`, label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page">
      <div className="wrap flex h-18 items-center justify-between gap-6">
        <a
          href={`/${lang}#top`}
          aria-label={nav.home}
          className="font-display text-lg font-semibold tracking-[-0.01em] text-fg"
        >
          Majd Kalthoum
        </a>

        <nav aria-label={nav.primary} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] font-medium text-fg-2 transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch current={lang} label={nav.language} />
          <ThemeToggle label={nav.theme} />
          <a
            href={site.cv}
            download
            hrefLang="de"
            type="application/pdf"
            className="btn btn-secondary hidden h-10 px-4 text-sm lg:inline-flex"
          >
            <DownloadIcon size={16} />
            {nav.cv}
          </a>
          <MobileMenu
            items={items}
            cv={{ href: site.cv, label: nav.cv }}
            labels={{ nav: nav.primary, open: nav.openMenu, close: nav.closeMenu }}
          />
        </div>
      </div>
    </header>
  );
}
