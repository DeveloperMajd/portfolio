import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries/en";
import type { Locale } from "@/lib/i18n";

export function Footer({ lang, legal }: { lang: Locale; legal: Dictionary["legal"] }) {
  const items = [
    { href: `/${lang}/impressum`, label: legal.impressum.link },
    { href: `/${lang}/datenschutz`, label: legal.privacy.link },
  ];

  return (
    <footer className="border-t border-line">
      <nav aria-label={legal.nav} className="wrap py-6">
        <ul className="flex flex-wrap gap-x-6">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="inline-block py-2 text-sm text-fg-3 transition-colors hover:text-fg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
