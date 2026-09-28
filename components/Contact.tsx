import type { Dictionary } from "@/app/[lang]/dictionaries/en";
import { site } from "@/lib/site";
import { ExternalLink } from "./ExternalLink";
import { CalendarIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

type Props = {
  contact: Dictionary["contact"];
  cv: { href: string; label: string; lang: string };
  newTab: string;
};

export function Contact({ contact, cv, newTab }: Props) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="wrap pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="grid gap-10 border-t border-line pt-12 md:pt-16 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end lg:gap-16">
        <div className="flex flex-col gap-6">
          <h2
            id="contact-title"
            className="font-display text-[clamp(2.5rem,1.8rem+3vw,3.75rem)] leading-[1.04] font-semibold tracking-[-0.035em] text-balance"
          >
            {contact.title}
          </h2>
          <p className="max-w-[56ch] text-lg leading-relaxed text-fg-2">{contact.body}</p>
          <dl className="mt-2 grid gap-6 sm:grid-cols-2">
            {contact.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <dt className="text-sm text-fg-3">{fact.label}</dt>
                <dd className="text-[15px] text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-primary h-16 justify-start gap-3 px-5 text-base">
            <MailIcon size={20} />
            <span className="truncate">{site.email}</span>
          </a>
          {/* A plain link, not Calendly's embed: no third-party script or cookies until someone clicks. */}
          <ExternalLink href={site.calendly} newTabLabel={newTab} className="btn btn-secondary h-16 justify-start gap-3 px-5 text-base">
            <CalendarIcon size={20} />
            {contact.book}
          </ExternalLink>
          {/* Sized to their labels: equal thirds are too narrow for "Download CV". */}
          <div className="grid grid-cols-1 gap-3 sm:flex">
            <ExternalLink href={site.linkedin} newTabLabel={newTab} className="btn btn-secondary h-13 sm:flex-auto">
              <LinkedInIcon size={17} />
              LinkedIn
            </ExternalLink>
            <ExternalLink href={site.github} newTabLabel={newTab} className="btn btn-secondary h-13 sm:flex-auto">
              <GitHubIcon size={17} />
              GitHub
            </ExternalLink>
            <a href={cv.href} download hrefLang={cv.lang} type="application/pdf" className="btn btn-secondary h-13 sm:flex-auto">
              <DownloadIcon size={17} />
              {cv.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
