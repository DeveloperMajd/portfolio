import type { Dictionary } from "@/app/[lang]/dictionaries/en";
import { site } from "@/lib/site";
import { ExternalLink } from "./ExternalLink";

export function Experience({ experience, newTab }: { experience: Dictionary["experience"]; newTab: string }) {
  const rec = experience.recommendation;
  const source = `${site.linkedin}/details/recommendations/`;

  return (
    <section id="experience" aria-labelledby="experience-title" className="wrap pt-28 md:pt-36">
      <h2 id="experience-title" className="section-title">
        {experience.title}
      </h2>

      <ol className="mt-10 border-t border-line md:mt-12">
        {experience.jobs.map((job, index) => (
          <li
            key={job.company}
            className="grid gap-x-10 gap-y-3 border-b border-line py-8 md:grid-cols-[170px_minmax(0,1fr)] lg:grid-cols-[170px_300px_minmax(0,1fr)]"
          >
            <p className="font-mono text-sm leading-7 text-fg-3">
              {job.start} – {job.end ?? <span className="text-accent-text">{experience.now}</span>}
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-[22px] leading-tight font-semibold tracking-[-0.01em]">{job.company}</h3>
              <p className="text-[15px] text-fg-2">{job.role}</p>
            </div>
            <ul className="flex flex-col gap-2.5 md:col-start-2 lg:col-start-3">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3.5 text-base leading-relaxed text-fg-2">
                  <span
                    aria-hidden="true"
                    className={`mt-2.5 size-1.5 shrink-0 rounded-xs ${index === 0 ? "bg-accent" : "bg-line-3"}`}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <figure className="mt-12 flex max-w-248 flex-col gap-6 md:mt-16">
        <blockquote cite={source}>
          <p className="font-display text-[clamp(1.25rem,1.05rem+1vw,1.875rem)] leading-snug font-medium tracking-[-0.015em] text-pretty text-fg">
            {rec.quote}
          </p>
        </blockquote>
        <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-3">
          {/* Initials stay beside the name; only the link wraps below on phones. */}
          <span className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-sm font-medium text-accent-text"
            >
              CG
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[15px] font-semibold text-fg">{rec.name}</span>
              <span className="text-sm text-fg-3">{rec.role}</span>
              {rec.note && <span className="text-sm text-fg-3 italic">{rec.note}</span>}
            </span>
          </span>
          <ExternalLink
            href={source}
            newTabLabel={newTab}
            className="text-sm font-medium text-fg-2 underline decoration-line-3 underline-offset-4 transition-colors hover:text-fg sm:ml-auto"
          >
            {rec.link}
          </ExternalLink>
        </figcaption>
      </figure>
    </section>
  );
}
