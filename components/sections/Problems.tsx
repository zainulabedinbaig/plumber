import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

const ROWS = [
  ["Water pouring from a pipe", "A burst or failed joint", "burst-pipes", "Burst pipes"],
  ["A damp patch spreading on a ceiling or wall", "A hidden leak, often well away from the stain", "leak-detection", "Leak detection"],
  ["Sink or bath draining slowly", "A build-up of fat, hair or soap in the waste pipe", "blocked-drains", "Blocked drains"],
  ["Toilet gurgles or won’t flush", "A blockage in the toilet or the drain beyond it", "blocked-drains", "Blocked drains"],
  ["Radiators cold at the top", "Trapped air, or sludge if they’re cold at the bottom", "boiler-heating", "Boiler & heating"],
  ["Boiler pressure keeps dropping", "A leak somewhere in the heating system", "boiler-heating", "Boiler & heating"],
  ["Tap dripping, shower lost its pressure", "Worn parts or limescale", "bathroom-plumbing", "Bathroom plumbing"],
] as const;

export function Problems() {
  return (
    <section className="on-bone bg-bone py-[var(--space-section)] text-canal">
      <Container>
        <SectionHead tone="bone" eyebrow="Common problems" title="What you’re seeing, and what it usually means." />
        <ul className="reveal mt-14 border-t-2 border-canal">
          {ROWS.map(([sym, cause, slug, label]) => (
            <li key={sym}>
              <Link
                href={`/services/${slug}`}
                className="group grid gap-2 border-b border-canal/20 py-6 transition-colors hover:bg-bone-deep sm:grid-cols-[1.2fr_1fr_auto] sm:items-center sm:gap-8 sm:px-3"
              >
                <span className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{sym}</span>
                <span className="max-w-sm text-graphite">{cause}</span>
                <span className="arrow-link inline-flex items-center gap-2 font-medium text-copper-deep">
                  <span className="u-link u-link-on">{label}</span>
                  <ArrowRight aria-hidden className="arrow size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
