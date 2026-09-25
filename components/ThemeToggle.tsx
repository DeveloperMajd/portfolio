"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

const root = () => document.documentElement;

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(root(), { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function storedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

export function ThemeToggle({ label }: { label: string }) {
  const isDark = useSyncExternalStore(
    subscribe,
    () => root().dataset.theme === "dark",
    () => false,
  );

  // Follow the OS setting until the visitor picks a theme here.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = () => {
      if (!storedTheme()) root().dataset.theme = media.matches ? "dark" : "light";
    };
    media.addEventListener("change", follow);
    return () => media.removeEventListener("change", follow);
  }, []);

  function toggle() {
    const next = root().dataset.theme === "dark" ? "light" : "dark";
    root().dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked: the choice lasts for this page view only.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={isDark}
      className="relative grid size-10 place-items-center rounded-control border border-line-2 text-fg-2 transition-colors hover:border-line-3 hover:text-fg"
    >
      <MoonIcon className="col-start-1 row-start-1 transition duration-300 motion-reduce:transition-none dark:scale-50 dark:-rotate-90 dark:opacity-0" />
      <SunIcon className="col-start-1 row-start-1 scale-50 rotate-90 opacity-0 transition duration-300 motion-reduce:transition-none dark:scale-100 dark:rotate-0 dark:opacity-100" />
    </button>
  );
}
