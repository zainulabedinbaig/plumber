import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import { Placeholder } from "@/components/ui/Placeholder";

const col = "t-label text-copper";
const link = "u-link block py-1.5 text-bone/80 hover:text-bone";

export function Footer() {
  return (
    <footer className="bg-canal pb-28 md:pb-12">
      {/* Emergency band */}
      <div className="border-y border-bone/15">
        <div className="rail-pad mx-auto flex w-full max-w-[84rem] flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <p className={col}>Emergency plumbing</p>
            <p className="t-display mt-4 text-5xl md:text-7xl">
              Don’t mop. <em className="font-medium text-copper">Call.</em>
            </p>
          </div>
          <a
            href={SITE.phoneHref}
            className="btn inline-flex min-h-20 items-center justify-center gap-4 bg-copper px-9 font-display text-3xl font-semibold tracking-tight text-canal md:text-4xl"
          >
            <Phone aria-hidden className="size-7" strokeWidth={2.25} />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="rail-pad mx-auto grid w-full max-w-[84rem] gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-3xl font-semibold tracking-tight">{SITE.name}</p>
          <p className="mt-3 max-w-xs text-slate">{SITE.tagline}</p>
          <dl className="mt-8 space-y-3 text-bone/80">
            <div><dt className={col}>Phone</dt><dd><a href={SITE.phoneHref} className="font-display text-2xl hover:text-copper-hi">{SITE.phoneDisplay}</a></dd></div>
            <div><dt className={col}>Email</dt><dd><Placeholder>{SITE.email}</Placeholder></dd></div>
            <div><dt className={col}>Address</dt><dd><Placeholder>{SITE.address}</Placeholder></dd></div>
            <div><dt className={col}>Opening hours</dt><dd><Placeholder>{SITE.hours}</Placeholder></dd></div>
          </dl>
        </div>

        <div className="lg:col-span-3">
          <p className={col}>Services</p>
          <ul className="mt-4">
            {SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className={link}>{s.name}</Link></li>)}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className={col}>Areas we cover</p>
          <ul className="mt-4 columns-2 gap-6">
            {AREAS.map((a) => <li key={a.slug}><Link href={`/areas#${a.slug}`} className={link}>{a.name}</Link></li>)}
          </ul>
          <p className="t-label mt-3 text-[0.65rem] text-slate">Suggested · to be confirmed</p>
        </div>

        <div className="lg:col-span-2">
          <p className={col}>Company</p>
          <ul className="mt-4">
            {[["/about", "About"], ["/areas", "Areas"], ["/contact", "Contact"], ["/request-a-quote", "Request a quote"]].map(([h, l]) => (
              <li key={h}><Link href={h} className={link}>{l}</Link></li>
            ))}
          </ul>
          <p className={`${col} mt-8`}>Follow</p>
          <ul className="mt-4">
            {SITE.social.map((s) => <li key={s.label} className="py-1.5 text-bone/80">{s.label}: <Placeholder>{s.href}</Placeholder></li>)}
          </ul>
        </div>
      </div>

      <div className="rail-pad mx-auto flex w-full max-w-[84rem] flex-col gap-4 border-t border-bone/15 pt-8 text-sm text-slate md:flex-row md:items-center md:justify-between">
        <p>© {SITE.name}. Registered in England &amp; Wales: <Placeholder>{SITE.companyNumber}</Placeholder></p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li><Link href="/privacy" className="u-link hover:text-bone">Privacy</Link></li>
          <li><Link href="/terms" className="u-link hover:text-bone">Terms</Link></li>
          <li><Link href="/credits" className="u-link hover:text-bone">Photo credits</Link></li>
        </ul>
      </div>
    </footer>
  );
}
