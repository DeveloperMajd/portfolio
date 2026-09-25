import type { Dictionary } from "@/app/[lang]/dictionaries/en";

export function Experience({ experience }: { experience: Dictionary["experience"] }) {
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
    </section>
  );
}
