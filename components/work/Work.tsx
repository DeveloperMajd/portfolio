import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries/en";
import { site } from "@/lib/site";
import { ExternalLink } from "../ExternalLink";
import { ExternalIcon } from "../icons";
import { DesignoDiagram } from "./DesignoDiagram";
import { ProjectCard } from "./ProjectCard";

export function Work({ work, newTab }: { work: Dictionary["work"]; newTab: string }) {
  const { rtm, designo } = work;

  return (
    <section id="work" aria-labelledby="work-title" className="wrap pt-28 md:pt-36">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <h2 id="work-title" className="section-title">
          {work.title}
        </h2>
        <ExternalLink
          href={site.github}
          newTabLabel={newTab}
          className="inline-flex items-center gap-2 border-b border-line-2 pb-1.5 text-[15px] font-medium transition-colors hover:border-fg"
        >
          {work.allRepos}
          <ExternalIcon size={16} />
        </ExternalLink>
      </div>

      <div className="mt-10 flex flex-col gap-6 md:mt-12">
        <ProjectCard
          newTab={newTab}
          title={rtm.title}
          subtitle={rtm.subtitle}
          description={rtm.description}
          tags={rtm.tags}
          live={{ href: "https://rtm.developermajd.com", label: work.liveSite }}
          code={[
            { href: "https://github.com/DeveloperMajd/rtm_frontend", label: work.frontendCode },
            { href: "https://github.com/DeveloperMajd/rtm_backend", label: work.backendCode },
          ]}
          details={{ label: work.details, items: rtm.details }}
          media={
            <div className="dots relative h-full min-h-75 overflow-hidden rounded-card border border-line bg-inset sm:min-h-110 lg:min-h-135">
              <Image
                src="/images/rtm-desktop.webp"
                alt={rtm.desktopAlt}
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 560px, 84vw"
                className="absolute top-[8%] left-[5%] w-[84%] rounded-control border border-line-2 shadow-e3"
              />
              <Image
                src="/images/rtm-mobile.webp"
                alt={rtm.mobileAlt}
                width={430}
                height={932}
                sizes="(min-width: 1024px) 170px, 26vw"
                className="absolute right-[5%] bottom-[6%] w-[26%] rounded-card border border-line-2 shadow-e3"
              />
            </div>
          }
        />

        <ProjectCard
          newTab={newTab}
          mediaFirst
          title={designo.title}
          subtitle={designo.subtitle}
          description={designo.description}
          tags={designo.tags}
          note={designo.note}
          live={{ href: "https://designo.developermajd.com", label: work.liveSite }}
          code={[
            { href: "https://github.com/DeveloperMajd/designo-frontend", label: work.frontendCode },
            { href: "https://github.com/DeveloperMajd/designo-backend", label: work.backendCode },
          ]}
          details={{ label: work.details, items: designo.details }}
          media={<DesignoDiagram labels={designo.diagram} />}
        />
      </div>
    </section>
  );
}
