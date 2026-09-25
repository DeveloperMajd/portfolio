import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/hero/Hero";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/work/Work";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero hero={dict.hero} />
      <Work work={dict.work} />
      <Experience experience={dict.experience} />
      <Stack stack={dict.stack} />
      <Contact contact={dict.contact} cvLabel={dict.nav.cv} />
    </>
  );
}
