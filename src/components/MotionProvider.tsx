"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Disables transform/layout animations for prefers-reduced-motion users
// while keeping opacity fades — without SSR hydration mismatches.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
