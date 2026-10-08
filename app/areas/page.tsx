import type { Metadata } from "next";
import { TriangleAlert } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CallButton, TextLink } from "@/components/ui/Button";
import { AreasMap } from "@/components/sections/Diagrams";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { FaqList } from "@/components/sections/FaqList";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { AREAS, BOROUGHS } from "@/lib/areas";
import { GENERAL_FAQS } from "@/lib/faqs";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Areas We Cover in Manchester and Greater Manchester",
  description: "Plumbing across Manchester, Salford, Trafford and Stockport, including Didsbury, Chorlton, Sale, Altrincham, Stretford and Wythenshawe.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-canal pb-16 pt-8 md:pb-24 md:pt-12">
        <Container>
          <Breadcrumbs trail={[{ name: "Areas", href: "/areas" }]} />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="t-label rise text-copper">Areas we cover</p>
              <h1 className="t-display mt-5 text-[clamp(3rem,9vw,7.5rem)]">
                <span className="mask-line"><span className="mask-in">Local to</span></span>
                <span className="mask-line"><span className="mask-in">Manchester.</span></span>
              </h1>
              <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-bone/80 md:text-xl">
                Across the city and the boroughs around it. Find your area below, or call and ask if you’re near the edge.
              </p>
              <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} className="w-full sm:w-auto" />
                <TextLink href="/request-a-quote">Request a quote</TextLink>
              </div>
            </div>
            <div className="clip-load lg:col-span-5"><AreasMap /></div>
          </div>
        </Container>
      </section>

      {/* Coverage confirmation banner: remove once the client confirms the list */}
      <section className="bg-bone-deep text-canal">
        <Container className="py-5">
          <p className="flex items-start gap-3 text-sm">
            <TriangleAlert aria-hidden className="mt-0.5 size-4 shrink-0 text-copper-deep" />
            <span><strong>Suggested coverage.</strong> These areas are proposals and haven’t been confirmed with the client. Edit <code className="font-mono">lib/areas.ts</code> to confirm or remove them, then delete this banner.</span>
          </p>
        </Container>
      </section>

      <section className="on-bone bg-bone py-[var(--space-section)] text-canal">
        <Container>
          {BOROUGHS.map((b) => (
            <div key={b} className="grid gap-8 border-t-2 border-canal py-12 first:border-t-2 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <h2 className="reveal t-label text-copper-deep lg:sticky lg:top-32">{b}</h2>
              </div>
              <ul className="lg:col-span-9">
                {AREAS.filter((a) => a.borough === b).map((a) => (
                  <li key={a.slug} id={a.slug} className="reveal scroll-mt-28 border-b border-canal/15 py-8 first:pt-0 last:border-0">
                    <h3 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{a.name}</h3>
                    <p className="mt-3 max-w-xl text-lg leading-relaxed text-graphite">{a.note}</p>
                    <p className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-sm">
                      <span className="t-label text-[0.65rem] text-graphite">Often needed here</span>
                      {a.jobs.map((j) => {
                        const s = SERVICES.find((x) => x.slug === j)!;
                        return <Link key={j} href={`/services/${j}`} className="u-link text-copper-deep">{s.name}</Link>;
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <PhotoBand image="castlefield" eyebrow="Greater Manchester" align="right">
        Not on the list? Call anyway. If we can get to you, we will.
      </PhotoBand>

      <FaqList faqs={GENERAL_FAQS.filter((f) => /areas|quick|payment/i.test(f.q))} title="About our coverage." tone="dark" />
      <EnquirySection />
    </>
  );
}
