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

export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL(`/${preferredLocale(request)}`, request.url));
}

// Every page lives under /en or /de; only the bare root needs a redirect.
// /defaultsite is where IONOS's parking page sends browsers; they cache that
// page for months, so rescue them here (never back to /, which would loop).
export const config = { matcher: ["/", "/defaultsite"] };
