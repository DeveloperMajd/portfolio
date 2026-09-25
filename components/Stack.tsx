import type { Dictionary } from "@/app/[lang]/dictionaries/en";

export function Stack({ stack }: { stack: Dictionary["stack"] }) {
  return (
    <section id="stack" aria-labelledby="stack-title" className="wrap pt-28 md:pt-36">
      <h2 id="stack-title" className="section-title">
        {stack.title}
      </h2>
      <p className="mt-4 text-lg text-fg-2">{stack.intro}</p>

      <div className="mt-10 grid gap-x-12 gap-y-10 md:mt-12 md:grid-cols-3">
        {stack.groups.map((group) => (
          <div key={group.title}>
            <h3 className="border-b border-line pb-3 text-[15px] font-semibold text-fg-2">{group.title}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="block text-[17px] font-medium text-fg">{item.name}</span>
                  <span className="block text-sm text-fg-3">{item.where}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-12 max-w-[70ch] text-base leading-relaxed text-fg-2">
        <span className="font-semibold text-fg">{stack.alsoTitle}</span> {stack.also.join(", ")}
      </p>
    </section>
  );
}
