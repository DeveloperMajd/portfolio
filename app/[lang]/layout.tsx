import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { BootScript } from "@/components/BootScript";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/MotionProvider";
import { isLocale, locales } from "@/lib/i18n";
import { site } from "@/lib/site";
import "../globals.css";
import { getDictionary } from "./dictionaries";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const sans = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = await getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", de: "/de", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      // Lets Next turn smooth scrolling off during route transitions.
      data-scroll-behavior="smooth"
      // BootScript adds data-theme / data-intro before React hydrates.
      suppressHydrationWarning
    >
      <head>
        <BootScript />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-accent-solid focus:px-4 focus:py-2.5 focus:text-on-accent"
        >
          {dict.nav.skip}
        </a>
        <MotionProvider>
          <Header lang={lang} nav={dict.nav} />
          <main id="main">{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
