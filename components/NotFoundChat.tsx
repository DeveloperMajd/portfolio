"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries/en";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { BAR_HEIGHTS, corners } from "./hero/ChatIntro";
import { AlertIcon } from "./icons";

export type NotFoundCopy = Dictionary["notFound"] & {
  typing: string;
  links: { href: string; label: string }[];
};

// Seconds; keep in step with the .nf-* animations in globals.css.
const FIRST_REPLY = 2;
const REPLY_STEP = 0.35;

// Shows /de/über rather than /de/%C3%BCber; a malformed escape stays as typed.
function decode(path: string) {
  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
}

/**
 * The address the visitor asked for goes out as their chat message and
 * bounces, then Majd answers with ways back into the site. not-found gets no
 * params, so the language comes from the URL.
 */
export function NotFoundChat({ copy }: { copy: Record<Locale, NotFoundCopy> }) {
  const path = usePathname();
  const segment = path.split("/")[1];
  const text = copy[isLocale(segment) ? segment : defaultLocale];
  const replyDelay = (index: number) => ({ animationDelay: `${FIRST_REPLY + index * REPLY_STEP}s` });

  return (
    <section aria-labelledby="not-found-title" className="wrap pt-20 pb-24 md:pt-28 md:pb-32">
      <h1 id="not-found-title" className="section-title">
        {text.title}
      </h1>

      <div className="mt-12 flex max-w-136 flex-col md:mt-14">
        {/* Long paths wrap after a slash where they can, mid-segment only when they must. */}
        <p className="nf-request max-w-[85%] self-end rounded-bubble rounded-br-md border border-line-2 bg-card px-4 py-3 font-mono text-[15px] wrap-anywhere text-fg">
          {decode(path)
            .split("/")
            .map((part, index) => (
              <Fragment key={index}>
                {index > 0 && (
                  <>
                    /<wbr />
                  </>
                )}
                {part}
              </Fragment>
            ))}
        </p>
        {/* Both states share one grid cell, so the swap never shifts the layout. */}
        <p className="mt-2 grid justify-items-end text-sm">
          <span aria-hidden="true" className="nf-sending col-start-1 row-start-1 text-fg-3">
            {text.sending}
          </span>
          <span className="nf-failed col-start-1 row-start-1 flex items-center gap-1.5 font-medium text-danger">
            <AlertIcon size={15} />
            {text.failed}
          </span>
        </p>

        {/* The replies hold their space while hidden, so the typing line sits where they will appear. */}
        <div className="mt-6 grid">
          <span
            aria-hidden="true"
            className="nf-typing col-start-1 row-start-1 flex items-start gap-2.5 self-start text-[15px] text-accent-text"
          >
            <span className="mt-1 flex h-3.5 shrink-0 items-end gap-0.75">
              {BAR_HEIGHTS.map((height, index) => (
                <span key={index} className="nf-bar w-0.75 origin-bottom rounded-full bg-accent" style={{ height }} />
              ))}
            </span>
            {text.typing}
          </span>

          <div className="col-start-1 row-start-1 flex flex-col items-start gap-1.5">
            {text.messages.map((message, index) => (
              <p
                key={message}
                style={replyDelay(index)}
                className={`nf-reply origin-bottom-left rounded-bubble bg-out px-4 py-3 text-[17px] leading-normal text-pretty text-out-fg ${corners(index, text.messages.length)}`}
              >
                {message}
              </p>
            ))}
            {/* Quick replies, as in a messenger. */}
            <ul style={replyDelay(text.messages.length)} className="nf-reply mt-2 flex flex-wrap gap-2">
              {text.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex h-10 items-center rounded-full border border-line-accent px-4 text-[15px] font-medium text-accent-text transition-colors hover:bg-accent-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
