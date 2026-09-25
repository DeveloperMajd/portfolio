"use client";

import { useLayoutEffect } from "react";

// Self-contained on purpose: it is also serialised into the inline script below.
function applyBootState(markIntro: boolean) {
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    root.dataset.theme =
      saved === "dark" || saved === "light"
        ? saved
        : matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
  } catch {}
  if (!markIntro) return;
  try {
    if (!sessionStorage.getItem("intro-seen") && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.dataset.intro = "";
      // If the app's JS never arrives, show the intro text anyway.
      setTimeout(() => delete root.dataset.intro, 4000);
    }
  } catch {}
}

const inlineScript = `(${applyBootState.toString()})(true)`;

/**
 * Sets data-theme (and data-intro on a first visit) on <html> before first
 * paint, so there is no theme flash. On a client-side language switch the
 * [lang] layout remounts, React resets <html>'s attributes and inline scripts
 * don't re-run, so the theme is applied again in a layout effect.
 */
export function BootScript() {
  useLayoutEffect(() => applyBootState(false), []);

  return (
    <script
      // Only the server-rendered copy should run; a script React creates on
      // the client never executes and triggers a dev warning, so it is inert.
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: inlineScript }}
    />
  );
}
