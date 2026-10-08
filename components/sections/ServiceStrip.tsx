import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHead } from "@/components/ui/SectionHead";
import { PipeDiagram } from "@/components/sections/Diagrams";
import { SERVICES } from "@/lib/services";

/** Horizontal, snap-scrolling service navigation. */
export function ServiceStrip() {
  return (
    <section id="services" className="overflow-hidden bg-brick py-[var(--space-section)]">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="What we do" title="Six ways we can help." />
          <p className="t-label hidden text-slate md:block">Scroll →</p>
        </div>
      </Container>

      <ul className="strip rail-pad mx-auto mt-14 flex max-w-[96rem] gap-6 overflow-x-auto pb-6 md:gap-8">
        {SERVICES.map((s, i) => (
          <li key={s.slug} className="w-[78vw] shrink-0 sm:w-[24rem]">
            <Link href={`/services/${s.slug}`} className="group block">
              <div className="relative">
                {s.image ? (
                  <Photo name={s.image} zoom className="aspect-[4/5] w-full" sizes="(min-width:640px) 36rem, 100vw" />
                ) : (
                  <PipeDiagram className="aspect-[4/5] w-full" />
                )}
                <span className="t-label absolute left-4 top-4 bg-canal px-2 py-1 text-copper">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight">{s.name}</h3>
              <p className="mt-2 max-w-xs text-bone/70">{s.blurb}</p>
              <span className="arrow-link mt-4 inline-flex items-center gap-2 font-medium text-copper">
                <span className="u-link u-link-on">View service</span>
                <ArrowRight aria-hidden className="arrow size-4" />
              </span>
            </Link>
          </li>
        ))}
        <li aria-hidden className="w-4 shrink-0" />
      </ul>
    </section>
  );
}
