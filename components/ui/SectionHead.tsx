import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Eyebrow + h2 (+ optional lead). `tone` picks the AA-safe copper. */
export function SectionHead({ eyebrow, title, lead, tone = "canal", className = "" }: { eyebrow: string; title: ReactNode; lead?: ReactNode; tone?: "canal" | "bone"; className?: string }) {
  return (
    <div className={`reveal max-w-3xl ${className}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="t-h2 mt-4">{title}</h2>
      {lead && <p className={`mt-5 max-w-xl text-lg leading-relaxed ${tone === "bone" ? "text-graphite" : "text-bone/75"}`}>{lead}</p>}
    </div>
  );
}
