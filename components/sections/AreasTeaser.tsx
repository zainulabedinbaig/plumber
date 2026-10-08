import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { TextLink } from "@/components/ui/Button";
import { AreasMap } from "@/components/sections/Diagrams";
import { AREAS, BOROUGHS } from "@/lib/areas";

export function AreasTeaser() {
  return (
    <section className="bg-canal py-[var(--space-section)]">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5"><AreasMap /></div>
          <div className="lg:col-span-7">
            <SectionHead eyebrow="Where we work" title="Across Manchester and the boroughs around it." />
            <div className="reveal mt-10 grid gap-x-10 border-t border-bone/30 sm:grid-cols-2">
              {BOROUGHS.map((b) => (
                <div key={b} className="border-b border-bone/15 py-5">
                  <h3 className="t-label text-copper">{b}</h3>
                  <ul className="mt-3 space-y-0.5">
                    {AREAS.filter((a) => a.borough === b).map((a) => (
                      <li key={a.slug}><Link href={`/areas#${a.slug}`} className="u-link font-display text-2xl font-medium hover:text-copper-hi">{a.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="t-label mt-6 text-slate">Suggested areas · to be confirmed with the client</p>
            <div className="mt-6"><TextLink href="/areas">Areas in detail</TextLink></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
