import type { ReactNode } from "react";
import { ExternalIcon } from "../icons";
import { BuildDetails } from "./BuildDetails";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  note?: string;
  live: { href: string; label: string };
  code: { href: string; label: string }[];
  details: { label: string; items: string[] };
  media: ReactNode;
  mediaFirst?: boolean;
};

export function ProjectCard({ title, subtitle, description, tags, note, live, code, details, media, mediaFirst = false }: Props) {
  return (
    <article
      className={`grid gap-8 rounded-card border border-line bg-card p-5 sm:p-8 lg:gap-14 lg:p-12 ${
        mediaFirst ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
      }`}
    >
      <div className={`flex flex-col gap-6 ${mediaFirst ? "lg:order-2" : ""}`}>
        <header className="flex flex-col gap-1.5">
          <h3 className="font-display text-4xl font-semibold tracking-tight lg:text-[2.5rem]">{title}</h3>
          <p className="text-lg text-fg-2">{subtitle}</p>
        </header>

        <p className="text-[17px] leading-relaxed text-pretty text-fg-2">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-control border border-line bg-raised-2 px-2.5 py-1 font-mono text-xs text-fg-2"
            >
              {tag}
            </li>
          ))}
        </ul>

        {note && <p className="text-sm leading-relaxed text-fg-3">{note}</p>}

        <div className="flex flex-wrap gap-2.5">
          <a href={live.href} className="btn btn-primary h-11 px-4">
            {live.label}
            <ExternalIcon size={16} />
          </a>
          {code.map((link) => (
            <a key={link.href} href={link.href} className="btn btn-secondary h-11 px-4">
              {link.label}
            </a>
          ))}
        </div>

        <BuildDetails label={details.label} items={details.items} />
      </div>

      <div className={mediaFirst ? "lg:order-1" : ""}>{media}</div>
    </article>
  );
}
