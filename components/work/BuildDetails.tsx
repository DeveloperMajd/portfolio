"use client";

import { motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronIcon } from "../icons";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function BuildDetails({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-t border-line">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-12 w-full items-center justify-between gap-4 pt-3 text-left text-[15px] font-semibold text-fg transition-colors hover:text-accent-text"
      >
        {label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25, ease: easeOut }}>
          <ChevronIcon />
        </motion.span>
      </button>

      {/* Always in the HTML (for search engines); inert while collapsed. */}
      <motion.div
        id={panelId}
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: easeOut }}
        inert={!open}
        className="overflow-hidden"
      >
        <ul className="flex flex-col gap-3 pt-3 pb-1">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-fg-2">
              <span className="mt-2.25 size-1.5 shrink-0 rounded-xs bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
