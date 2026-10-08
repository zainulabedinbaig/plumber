import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InnerHero } from "@/components/sections/InnerHero";
import { PipeDiagram } from "@/components/sections/Diagrams";
import { Problems } from "@/components/sections/Problems";
import { EmergencyBand } from "@/components/sections/EmergencyBand";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Plumbing Services in Manchester",
  description: "Emergency plumbing, burst pipes, leak detection, blocked drains, boiler and heating, and bathroom plumbing across Manchester and Greater Manchester.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        trail={[{ name: "Services", href: "/services" }]}
        eyebrow="Services"
        lines={["Plumbing,", "done properly."]}
        lead="Six services, from the 2am burst pipe to the new bathroom. Pick the one that sounds like your problem, or call and we’ll work it out together."
        image="fittings"
      />

      <section className="on-bone bg-bone py-[var(--space-section)] text-canal">
        <Container>
          <ol className="space-y-24 md:space-y-32">
            {SERVICES.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <li key={s.slug} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  <div className={`reveal lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                    <Link href={`/services/${s.slug}`} className="block">
                      {s.image ? <Photo name={s.image} reveal zoom className="aspect-[4/3] w-full" sizes="(min-width:1024px) 45vw, 100vw" /> : <PipeDiagram className="aspect-[4/3] w-full" />}
                    </Link>
                  </div>
                  <div className={`reveal lg:col-span-5 ${flip ? "lg:order-1" : "lg:col-start-8"}`}>
                    <Eyebrow tone="bone">0{i + 1} · {s.group}</Eyebrow>
                    <h2 className="t-h2 mt-3">{s.name}</h2>
                    <p className="mt-4 max-w-md text-lg text-graphite">{s.blurb}</p>
                    <ul className="mt-6 border-t border-canal/30">
                      {s.helps.slice(0, 3).map((h) => <li key={h.title} className="border-b border-canal/15 py-2.5 text-graphite">{h.title}</li>)}
                    </ul>
                    <Link href={`/services/${s.slug}`} className="arrow-link mt-6 inline-flex min-h-12 items-center gap-2 font-medium text-copper-deep">
                      <span className="u-link u-link-on">Read about {s.name.toLowerCase()}</span>
                      <ArrowRight aria-hidden className="arrow size-4" />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <EmergencyBand />
      <Problems />
      <EnquirySection />
    </>
  );
}
