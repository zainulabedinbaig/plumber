import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Placeholder } from "@/components/ui/Placeholder";
import { TESTIMONIALS } from "@/lib/site";

/**
 * Placeholder reviews only. Replace the entries in lib/site.ts with real, attributable
 * customer reviews (e.g. Google). Do not publish invented testimonials.
 */
export function Testimonials() {
  return (
    <section className="on-bone overflow-hidden bg-bone py-[var(--space-section)] text-canal">
      <Container>
        <SectionHead tone="bone" eyebrow="Customer reviews" title="What customers say." lead="Real reviews go here once the client supplies them." />
      </Container>
      <ul className="strip rail-pad mx-auto mt-14 flex max-w-[96rem] gap-10 overflow-x-auto pb-4">
        {TESTIMONIALS.map((t, i) => (
          <li key={i} className="w-[84vw] shrink-0 border-t-2 border-canal pt-6 sm:w-[30rem]">
            <span aria-hidden className="font-display text-7xl leading-none text-copper-deep">“</span>
            <blockquote className="-mt-4 font-display text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
              <Placeholder>{t.quote}</Placeholder>
            </blockquote>
            <p className="mt-8 text-graphite">
              <Placeholder>{t.name}</Placeholder>, <Placeholder>{t.where}</Placeholder>
              <span className="t-label mt-2 block text-xs"><Placeholder>{t.source}</Placeholder></span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
