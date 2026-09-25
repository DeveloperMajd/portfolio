"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

const names: Record<Locale, string> = { en: "English", de: "Deutsch" };

export function LanguageSwitch({ current, label }: { current: Locale; label: string }) {
  // Same page in the other language, keeping any sub-path after the locale.
  const rest = usePathname().slice(current.length + 1);

  return (
    <nav aria-label={label} className="flex rounded-full border border-line-2 p-0.75">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest}`}
            hrefLang={locale}
            lang={locale}
            aria-label={names[locale]}
            aria-current={active ? "true" : undefined}
            // Remembered by proxy.ts the next time someone opens "/".
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={`grid h-8 min-w-10 place-items-center rounded-full px-2.5 font-mono text-xs font-medium tracking-wide transition-colors ${
              active ? "bg-accent-soft text-fg" : "text-fg-3 hover:text-fg"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
