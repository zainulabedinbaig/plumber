import type { ReactNode } from "react";

/** Max-width wrapper. `rail` reserves the left gutter used by the copper run. */
export function Container({ children, className = "", rail = true }: { children: ReactNode; className?: string; rail?: boolean }) {
  return <div className={`mx-auto w-full max-w-[84rem] ${rail ? "rail-pad" : "px-5 md:px-10"} ${className}`}>{children}</div>;
}
