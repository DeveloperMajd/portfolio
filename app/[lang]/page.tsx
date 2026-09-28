import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/hero/Hero";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/work/Work";
import { isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { getDictionary } from "./dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero hero={dict.hero} newTab={dict.a11y.newTab} />
      <Work work={dict.work} newTab={dict.a11y.newTab} />
      <Experience experience={dict.experience} newTab={dict.a11y.newTab} />
      <Stack stack={dict.stack} />
      <Contact contact={dict.contact} cv={{ href: site.cv[lang], label: dict.nav.cv, lang }} newTab={dict.a11y.newTab} />
    </>
  );
}
