import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

/** Persistent thumb-reach call bar for phones; slides in after the hero CTA has scrolled away. */
export function MobileCallBar() {
  return (
    <div className="callbar fixed inset-x-0 bottom-0 z-30 border-t border-bone/15 bg-canal p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a href={SITE.phoneHref} className="btn flex min-h-14 items-center justify-center gap-3 bg-copper font-display text-lg font-semibold text-canal">
        <Phone aria-hidden className="size-5" strokeWidth={2.25} />
        Call now · {SITE.phoneDisplay}
      </a>
    </div>
  );
}
