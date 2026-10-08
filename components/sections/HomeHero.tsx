import { CallButton, GhostButton, TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Placeholder } from "@/components/ui/Placeholder";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const STRIP = [
  ["Gas Safe", "[INSERT]"],
  ["Insured", "[INSERT]"],
  ["Reviews", "[INSERT SCORE]"],
  ["Quotes", "[CONFIRM]"],
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-canal text-bone">
      {/* Full-bleed photograph, slow parallax, flat canal overlay for legibility */}
      <div className="absolute inset-0">
        <Photo name="mill" priority sizes="100vw" className="hero-bg size-full" imgClassName="object-[60%_40%]" />
        <div className="absolute inset-0 bg-canal/68" />
      </div>

      <Container className="relative pb-10 pt-12 md:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="t-label rise flex items-center gap-3 text-copper">
              <span className="pulse relative inline-block size-2 rounded-full bg-copper" aria-hidden />
              Plumbers · Manchester &amp; Greater Manchester
            </p>

            <h1 className="t-display mt-6 text-[clamp(3.4rem,11vw,9.5rem)]">
              <span className="mask-line"><span className="mask-in">Plumbing</span></span>
              <span className="mask-line"><span className="mask-in">problems</span></span>
              <span className="mask-line"><span className="mask-in">don’t <em className="font-medium text-copper">wait.</em></span></span>
            </h1>

            <p className="rise rise-2 mt-8 max-w-[34rem] text-lg leading-relaxed text-bone/85 md:text-xl">
              Burst pipe, blocked toilet, no heating. Call a local Manchester plumber and we’ll get it sorted.
            </p>

            <div className="rise rise-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} className="w-full sm:w-auto" />
              <GhostButton href="/request-a-quote" className="w-full sm:w-auto">Request a quote</GhostButton>
            </div>
            <div className="rise rise-3 mt-4">
              <TextLink href="/services/emergency-plumbing#do-now">Water escaping? What to do right now</TextLink>
            </div>
          </div>

          {/* Floating information: overlapping photo + status card */}
          <div className="relative hidden lg:col-span-4 lg:block">
            <div className="clip-load absolute right-0 top-4 w-3/4">
              <Photo name="leak" priority className="aspect-[4/5] w-full" sizes="45vw" />
            </div>
            <aside className="rise rise-3 absolute bottom-0 left-0 right-0 border border-bone/20 bg-canal p-6 shadow-[0_28px_56px_-16px_rgba(0,0,0,0.7)] xl:-left-6 xl:right-auto xl:w-[22rem]">
              <p className="t-label flex items-center gap-2 text-copper">
                <span className="pulse relative inline-block size-2 rounded-full bg-copper" aria-hidden /> Right now
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div><dt className="t-label text-[0.65rem] text-slate">Open</dt><dd className="mt-1 text-bone"><Placeholder>{SITE.hours}</Placeholder></dd></div>
                <div><dt className="t-label text-[0.65rem] text-slate">Covering</dt><dd className="mt-1 text-bone">Manchester · Salford · Trafford · Stockport <span className="text-slate">(to be confirmed)</span></dd></div>
                <div><dt className="t-label text-[0.65rem] text-slate">Typical response</dt><dd className="mt-1 text-bone"><Placeholder>[CONFIRM RESPONSE TIME]</Placeholder></dd></div>
              </dl>
            </aside>
          </div>
        </div>

        {/* Trust strip */}
        <dl className="mt-16 grid grid-cols-2 border-t border-bone/25 md:mt-24 md:grid-cols-4">
          {STRIP.map(([k, v]) => (
            <div key={k} className="border-b border-bone/15 py-4 pr-4 md:border-b-0">
              <dt className="t-label text-[0.65rem] text-slate">{k}</dt>
              <dd className="mt-1 font-display text-lg"><Placeholder>{v}</Placeholder></dd>
            </div>
          ))}
        </dl>
        <p className="t-label mt-3 text-[0.6rem] text-slate/80">Photo: {IMAGES.mill.credit?.author} · {IMAGES.mill.credit?.license}</p>
      </Container>
    </section>
  );
}
