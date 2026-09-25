"use client";

import { useAnimate, useInView, useReducedMotion, type AnimationSequence } from "motion/react";
import { useEffect } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries/en";

type Labels = Dictionary["work"]["designo"]["diagram"];
type BoxLabels = Labels["browser"];

function Box({ ring, accent = false, labels }: { ring: string; accent?: boolean; labels: BoxLabels }) {
  return (
    <div
      className={`relative flex flex-col gap-1.5 rounded-control border bg-card px-4 py-3.5 ${
        accent ? "border-line-accent" : "border-line-2"
      }`}
    >
      <span className={`${ring} pointer-events-none absolute -inset-px rounded-control border-2 border-accent opacity-0`} />
      <span
        className={`flex justify-between gap-3 font-mono text-[11px] ${accent ? "text-accent-text" : "text-fg-3"}`}
      >
        <span>{labels.tag}</span>
        <span>{labels.meta}</span>
      </span>
      <span className="text-base font-semibold text-fg">{labels.title}</span>
      <span className="text-[13px] leading-snug text-fg-2">{labels.body}</span>
    </div>
  );
}

function Connection({ packet, label }: { packet: string; label: string }) {
  return (
    <div className="relative flex h-13 items-center gap-3 pl-6.5 text-fg-3">
      <svg width="12" height="52" viewBox="0 0 12 52" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v46" />
        <path d="m1 8 5-5 5 5" />
        <path d="m1 44 5 5 5-5" />
      </svg>
      <span className={`${packet} absolute top-1 left-7 size-2 rounded-full bg-accent opacity-0`} />
      <span className="font-mono text-[11px]">{label}</span>
    </div>
  );
}

export function DesignoDiagram({ labels }: { labels: Labels }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const flash = { opacity: [0, 1, 0] };
    const down = { opacity: [0, 1, 1, 0], y: [0, 36] };
    const up = { opacity: [0, 1, 1, 0], y: [36, 0] };
    const sequence: AnimationSequence = [
      // A visitor's request: Vercel answers with static HTML right away...
      [".ring-browser", flash, { duration: 0.6 }],
      [".packet-request", down, { duration: 0.55, at: 0.25 }],
      [".ring-vercel", flash, { duration: 0.6, at: 0.7 }],
      [".packet-request", up, { duration: 0.55, at: 1 }],
      [".ring-browser", flash, { duration: 0.6, at: 1.45 }],
      // ...and refreshes the page from Strapi separately, in the background.
      [".packet-refresh", down, { duration: 0.55, at: 2.1 }],
      [".ring-strapi", flash, { duration: 0.6, at: 2.55 }],
      [".packet-refresh", up, { duration: 0.55, at: 2.85 }],
      [".ring-vercel", flash, { duration: 0.6, at: 3.3 }],
    ];
    const controls = animate(sequence);
    return () => controls.stop();
  }, [inView, reduceMotion, animate]);

  const [formTitle, ...formLines] = labels.form;

  return (
    <div
      ref={scope}
      role="img"
      aria-label={labels.label}
      className="dots flex h-full flex-col justify-center rounded-card border border-line bg-inset p-5 sm:p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_28px_7.5rem]">
        {/* Contact form bracket, spanning Browser to Strapi. */}
        <div className="col-start-2 row-span-5 row-start-1 my-11 hidden rounded-r-control border-[1.5px] border-l-0 border-dashed border-line-3 sm:block" />
        <div className="col-start-3 row-span-5 row-start-1 hidden flex-col gap-0.5 self-center pl-3 font-mono text-[11px] leading-normal text-fg-3 sm:flex">
          <span className="text-fg">{formTitle}</span>
          {formLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>

        <Box ring="ring-browser" labels={labels.browser} />
        <Connection packet="packet-request" label={labels.request} />
        <Box ring="ring-vercel" accent labels={labels.vercel} />
        <Connection packet="packet-refresh" label={labels.refresh} />
        <Box ring="ring-strapi" labels={labels.strapi} />
      </div>
      <p className="mt-4 font-mono text-[11px] text-fg-3 sm:hidden">{labels.form.join(" ")}</p>
    </div>
  );
}
