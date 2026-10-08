import Link from "next/link";
import { Suspense } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bone/15 bg-canal">
      <div className="rail-pad mx-auto flex h-16 w-full max-w-[84rem] items-center justify-between gap-6 md:h-20">
        <Link href="/" className="whitespace-nowrap font-display text-xl font-semibold tracking-tight md:text-2xl">
          {SITE.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm lg:flex xl:gap-3">
          {NAV.map((n) =>
            "mega" in n ? (
              <div key={n.href} className="has-mega relative">
                <Link href={n.href} className="flex min-h-12 items-center gap-1 px-3 text-bone/85 transition-colors hover:text-copper-hi">
                  {n.label}
                  <ChevronDown aria-hidden className="size-3.5" />
                </Link>
                <div className="mega absolute left-1/2 top-full w-[40rem] -translate-x-1/2 pt-2">
                  <div className="border border-bone/15 bg-canal p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]">
                    <ul className="grid grid-cols-2 gap-x-8">
                      {SERVICES.map((s) => (
                        <li key={s.slug} className="border-b border-bone/10 last:border-0 [&:nth-last-child(2)]:border-0">
                          <Link href={`/services/${s.slug}`} className="group block py-3">
                            <span className="font-display text-lg font-semibold group-hover:text-copper-hi">{s.name}</span>
                            <span className="mt-0.5 block text-xs leading-snug text-slate">{s.group}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/services" className="u-link mt-4 inline-block text-sm text-copper">All services</Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={n.href} href={n.href} className="flex min-h-12 items-center px-3 text-bone/85 transition-colors hover:text-copper-hi">
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="btn flex min-h-11 items-center gap-2.5 whitespace-nowrap bg-copper px-4 font-display text-base font-semibold text-canal md:min-h-12 md:px-5 md:text-lg"
          >
            <Phone aria-hidden className="size-4" strokeWidth={2.25} />
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline lg:hidden xl:inline">{SITE.phoneDisplay}</span>
            <span className="hidden lg:inline xl:hidden">Call now</span>
          </a>
          <Suspense fallback={null}><MobileMenu /></Suspense>
        </div>
      </div>
    </header>
  );
}
