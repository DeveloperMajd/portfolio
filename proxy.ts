import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

// A language picked on the site wins; otherwise the browser's Accept-Language.
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("NEXT_LOCALE")?.value;
  if (saved && isLocale(saved)) return saved;

  const ranked = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((param) => param.trim().startsWith("q="));
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((entry) => entry.lang && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  return ranked.map((entry) => entry.lang).find(isLocale) ?? defaultLocale;
}

// Every page lives under /en or /de, so a path without one gets the
// visitor's language put in front: /impressum opens /de/impressum, and a typo
// lands on the site's own 404 page instead of Next's bare one.
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  // Where IONOS's parking page sends browsers; they cache that page for
  // months, so send them to the home page.
  const rest = pathname === "/" || pathname === "/defaultsite" ? "" : pathname;
  return NextResponse.redirect(new URL(`/${preferredLocale(request)}${rest}${search}`, request.url));
}

// Everything except paths that already start with a locale (keep in step with
// lib/i18n.ts; matchers must be literal), Next internals (/_next, /__nextjs,
// /_vercel) and files (anything with a dot: /robots.txt, /cv/*.pdf, …).
export const config = { matcher: ["/((?!(?:en|de)(?:/|$)|_|.*\\.).*)"] };
