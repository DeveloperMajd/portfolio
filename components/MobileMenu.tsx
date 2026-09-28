"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, DownloadIcon, MenuIcon } from "./icons";

type Props = {
  items: { href: string; label: string }[];
  cv: { href: string; label: string; lang: string };
  labels: { nav: string; open: string; close: string };
};

export function MobileMenu({ items, cv, labels }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((value) => !value)}
        className="grid size-10 place-items-center rounded-control border border-line-2 text-fg transition-colors hover:border-line-3"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id={panelId}
            aria-label={labels.nav}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-b border-line bg-page shadow-e3"
          >
            <ul className="wrap flex flex-col pt-2 pb-5">
              {items.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={close}
                    className="flex h-14 items-center font-display text-xl font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-5">
                <a href={cv.href} download hrefLang={cv.lang} type="application/pdf" onClick={close} className="btn btn-secondary w-full">
                  <DownloadIcon size={16} />
                  {cv.label}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
