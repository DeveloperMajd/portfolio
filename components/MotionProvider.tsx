"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// Visitors who ask their OS for reduced motion get no transform animations.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
