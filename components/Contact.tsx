import type { Dictionary } from "@/app/[lang]/dictionaries/en";
import { site } from "@/lib/site";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact({ contact, cvLabel }: { contact: Dictionary["contact"]; cvLabel: string }) {
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
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a href={site.linkedin} className="btn btn-secondary h-13">
              <LinkedInIcon size={17} />
              LinkedIn
            </a>
            <a href={site.github} className="btn btn-secondary h-13">
              <GitHubIcon size={17} />
              GitHub
            </a>
            <a href={site.cv} download hrefLang="de" type="application/pdf" className="btn btn-secondary h-13">
              <DownloadIcon size={17} />
              {cvLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
