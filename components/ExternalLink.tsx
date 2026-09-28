import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> & {
  href: string;
  // "(opens in a new tab)" in the page's language, for screen readers.
  newTabLabel: string;
  children: ReactNode;
};

// Links that leave the site open in a new tab and say so to screen readers.
export function ExternalLink({ newTabLabel, children, ...props }: Props) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> {newTabLabel}</span>
    </a>
  );
}
