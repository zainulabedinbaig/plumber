"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function MobileMenu() {
  // Open state is tied to the page it was opened on, so navigating closes it.
  const pathname = usePathname();
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => {
    const next = typeof v === "function" ? v(open) : v;
    setOpenAt(next ? pathname : null);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenAt(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="burger relative z-50 flex size-11 flex-col items-center justify-center gap-[5px] border border-bone/25"
      >
        <span /><span /><span />
      </button>

      <div
        id="mobile-menu"
        data-open={open}
        inert={!open}
        className="menu-panel fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-canal md:top-20"
      >
        <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-xl flex-col px-5 pb-10 pt-6">
          <ul>
            {NAV.map((n, i) => (
              <li key={n.href} className="border-b border-bone/15">
                <Link
                  href={n.href}
                  style={{ transitionDelay: open ? `${0.15 + i * 0.05}s` : "0s" }}
                  className="block py-4 font-display text-4xl font-semibold tracking-tight"
                >
                  {n.label}
                </Link>
                {"mega" in n && (
                  <ul className="-mt-1 mb-4 grid grid-cols-2 gap-x-4">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          style={{ transitionDelay: open ? "0.35s" : "0s" }}
                          className="block py-2 text-sm text-bone/70"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <a
              href={SITE.phoneHref}
              className="btn flex min-h-16 items-center justify-center gap-3 bg-copper font-display text-xl font-semibold text-canal"
            >
              <Phone aria-hidden className="size-5" strokeWidth={2.25} />
              Call {SITE.phoneDisplay}
            </a>
            <Link href="/request-a-quote" className="mt-3 block py-3 text-center text-bone/80 underline underline-offset-4">
              Or request a quote
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
