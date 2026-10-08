import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CallButton, GhostButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { PipeDiagram } from "@/components/sections/Diagrams";
import { SITE } from "@/lib/site";
import type { Service } from "@/lib/services";

const Headline = ({ s, size }: { s: Service; size: string }) => (
  <h1 className={`t-display mt-5 ${size}`}>
    {s.h1.map((l) => <span key={l} className="mask-line"><span className="mask-in">{l}</span></span>)}
  </h1>
);

const trail = (s: Service) => [{ name: "Services", href: "/services" }, { name: s.name, href: `/services/${s.slug}` }];

/** Three distinct hero compositions, chosen by service.variant. */
export function ServiceHero({ s }: { s: Service }) {
  if (s.variant === "urgent") {
    return (
      <section className="relative bg-canal pb-14 pt-8 md:pb-24 md:pt-12">
        <Container>
          <Breadcrumbs trail={trail(s)} />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="t-label rise flex items-center gap-3 text-copper">
                <span className="pulse relative inline-block size-2 rounded-full bg-copper" aria-hidden /> Emergency plumbing · Manchester
              </p>
              <Headline s={s} size="text-[clamp(3rem,8vw,7.25rem)]" />
              <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-bone/85 md:text-xl">{s.lead}</p>
              <div className="rise rise-3 mt-10 flex flex-col gap-3 sm:flex-row">
                <CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} className="w-full sm:w-auto" />
                <GhostButton href="#do-now" className="w-full sm:w-auto">What to do now</GhostButton>
              </div>
            </div>
            <div className="clip-load lg:col-span-5"><PipeDiagram className="aspect-[4/5] w-full" /></div>
          </div>
        </Container>
      </section>
    );
  }

  if (s.variant === "technical") {
    return (
      <section className="relative isolate overflow-hidden bg-canal">
        {s.image && <Photo name={s.image} priority className="hero-bg absolute inset-0 -z-10" sizes="100vw" />}
        <div className="absolute inset-0 -z-10 bg-canal/78" />
        <Container className="flex min-h-[34rem] flex-col justify-between pb-8 pt-8 md:min-h-[44rem] md:pt-12">
          <Breadcrumbs trail={trail(s)} />
          <div className="py-16">
            <p className="t-label rise text-copper">{s.group} · {s.short}</p>
            <Headline s={s} size="text-[clamp(3rem,9.5vw,8rem)]" />
            <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-bone/85 md:text-xl">{s.lead}</p>
            <div className="rise rise-3 mt-10"><CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} className="w-full sm:w-auto" /></div>
          </div>
          <dl className="t-label grid grid-cols-2 gap-4 border-t border-bone/30 pt-4 text-[0.7rem] md:grid-cols-4">
            <div><dt className="text-slate">Service</dt><dd>{s.name}</dd></div>
            <div><dt className="text-slate">Area</dt><dd>Manchester &amp; GM</dd></div>
            <div><dt className="text-slate">Quote</dt><dd>Before work starts</dd></div>
            <div><dt className="text-slate">Call</dt><dd>{SITE.phoneDisplay}</dd></div>
          </dl>
        </Container>
      </section>
    );
  }

  // editorial: split hero, photo overhangs into the next section
  return (
    <section className="relative bg-canal pt-8 md:pt-12">
      <Container>
        <Breadcrumbs trail={trail(s)} />
        <div className="mt-10 grid items-end gap-12 lg:grid-cols-12">
          <div className="pb-14 lg:col-span-6 lg:pb-24">
            <p className="t-label rise text-copper">{s.group}</p>
            <Headline s={s} size="text-[clamp(3rem,8.5vw,7rem)]" />
            <p className="rise rise-2 mt-8 max-w-lg text-lg leading-relaxed text-bone/85 md:text-xl">{s.lead}</p>
            <div className="rise rise-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} className="w-full sm:w-auto" />
              <GhostButton href="/request-a-quote" className="w-full sm:w-auto">Request a quote</GhostButton>
            </div>
          </div>
          {s.image && (
            <div className="clip-load relative z-10 lg:col-span-6 lg:-mb-24">
              <Photo name={s.image} priority caption className="aspect-[4/3] w-full lg:aspect-[4/5]" sizes="(min-width:1024px) 70vw, 100vw" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
