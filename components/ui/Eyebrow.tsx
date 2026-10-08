import type { ReactNode } from "react";

/** Mono section label. `tone="bone"` for light sections (AA-safe copper). */
export function Eyebrow({ children, tone = "canal", className = "" }: { children: ReactNode; tone?: "canal" | "bone"; className?: string }) {
  return <p className={`t-label ${tone === "bone" ? "text-copper-deep" : "text-copper"} ${className}`}>{children}</p>;
}
