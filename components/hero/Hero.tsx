import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries/en";
import { site } from "@/lib/site";
import { GitHubIcon } from "../icons";
import { ChatIntro } from "./ChatIntro";

export function Hero({ hero }: { hero: Dictionary["hero"] }) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="wrap grid gap-12 pt-12 md:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-20 lg:pt-20"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1
            id="hero-title"
            className="font-display text-[3.25rem] leading-[0.98] font-semibold tracking-[-0.04em] sm:text-7xl lg:text-[5.5rem]"
          >
            Majd Kalthoum
          </h1>
          <p className="font-display text-2xl font-medium tracking-[-0.02em] text-fg-2 sm:text-[2rem]">
            {hero.role}
          </p>
        </div>

        <ChatIntro messages={hero.messages} typing={hero.typing} status={hero.status} />

        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-primary">
            {hero.contact}
          </a>
          <a href={site.github} className="btn btn-secondary">
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>

      <div className="dots relative mx-auto aspect-4/5 w-full max-w-110 overflow-hidden rounded-card border border-line bg-inset lg:mx-0">
        <Image
          src="/images/portrait.webp"
          alt={hero.portraitAlt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 480px) 440px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
