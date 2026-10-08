import type { ReactNode } from "react";

/** Marks content that still needs client confirmation. Deliberately visible. */
export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-mono text-[0.9em] underline decoration-dashed decoration-1 underline-offset-4">{children}</span>;
}

/**
 * Renders a string, turning any [BRACKETED] segments into visible placeholders.
 * Lets content live as plain strings in lib/ while staying obviously replaceable.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return <>{parts.map((p, i) => (p.startsWith("[") ? <Placeholder key={i}>{p}</Placeholder> : p))}</>;
}
