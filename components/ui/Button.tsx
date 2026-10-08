import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4";

type CallProps = { href: string; label: string; className?: string; size?: "sm" | "md" | "lg" };

/** Primary CTA: the only filled button style. Wipes to bone on hover. */
export function CallButton({ href, label, className = "", size = "lg" }: CallProps) {
  const sizing = { lg: "min-h-16 px-7 text-xl sm:text-2xl", md: "min-h-14 px-6 text-lg", sm: "min-h-11 px-4 text-base" }[size];
  return (
    <a href={href} className={`btn inline-flex items-center justify-center gap-3 whitespace-nowrap bg-copper font-display font-semibold tracking-tight text-canal transition-colors duration-300 ${sizing} ${focus} ${className}`}>
      <Phone aria-hidden className={size === "sm" ? "size-4" : "size-5"} strokeWidth={2.25} />
      {label}
    </a>
  );
}

/** Secondary filled-outline button (internal link). */
export function GhostButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`btn btn-ghost inline-flex min-h-14 items-center justify-center gap-3 px-6 font-display text-lg font-semibold tracking-tight transition-colors duration-300 ${focus} ${className}`}>
      {children}
      <ArrowRight aria-hidden className="arrow size-5" />
    </Link>
  );
}

/** Tertiary CTA: text link with drawn underline and sliding arrow. */
export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const cls = `arrow-link group inline-flex min-h-12 w-fit items-center gap-2 font-medium transition-colors duration-200 hover:text-copper-hi ${focus} ${className}`;
  const inner = (
    <>
      <span className="u-link u-link-on">{children}</span>
      <ArrowRight aria-hidden className="arrow size-4" />
    </>
  );
  return href.startsWith("/") ? <Link href={href} className={cls}>{inner}</Link> : <a href={href} className={cls}>{inner}</a>;
}
