import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";

const STEPS = [
  ["Turn off the stopcock", "Under the kitchen sink or where the pipe enters the house. Clockwise to close."],
  ["Keep clear of electrics", "Don’t touch sockets or the fuse box if there’s water near them."],
  ["Open the cold taps", "It drains the pipes and takes pressure off the leak."],
];

const NEXT = [
  ["You call", "A person answers and asks what’s happening."],
  ["We talk you through it", "What to shut off and how to limit damage."],
  ["We arrange the visit", "[CONFIRM RESPONSE TIME]"],
];

/** Solid copper band: the emergency pathway (call / what to do now / what happens next). */
export function EmergencyBand() {
  return (
    <section id="do-now" className="on-bone bg-copper text-canal">
      <Container className="py-[var(--space-section)]">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <p className="t-label text-canal/80">Emergency</p>
            <h2 className="t-display mt-4 text-5xl sm:text-6xl md:text-7xl">Water where it shouldn’t be?</h2>
            <div className="mt-8">
              <a
                href={SITE.phoneHref}
                className="btn inline-flex min-h-16 w-full items-center justify-center bg-canal px-8 font-display text-2xl font-semibold tracking-tight text-bone sm:w-auto [&::before]:bg-bone hover:text-canal"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
            <p className="mt-6 max-w-sm border-l-4 border-canal pl-4 text-sm font-medium">
              Smell gas? Leave the property, open doors and windows, and call the National Gas Emergency Service on 0800 111 999.
            </p>
            <Link href="/request-a-quote" className="u-link mt-5 inline-block font-medium">Not an emergency? Request a quote</Link>
          </div>

          <div className="reveal grid gap-12 sm:grid-cols-2 lg:col-span-7">
            <div>
              <h3 className="t-label">What to do now</h3>
              <ol className="mt-5 border-t border-canal/40">
                {STEPS.map(([t, d], i) => (
                  <li key={t} className="flex gap-4 border-b border-canal/25 py-5">
                    <span className="font-display text-3xl font-semibold leading-none">{i + 1}</span>
                    <p><strong className="block font-semibold">{t}</strong><span className="mt-1 block text-canal/85">{d}</span></p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="t-label">What happens next</h3>
              <ol className="mt-5 border-t border-canal/40">
                {NEXT.map(([t, d], i) => (
                  <li key={t} className="flex gap-4 border-b border-canal/25 py-5">
                    <span className="t-label pt-1.5">0{i + 1}</span>
                    <p><strong className="block font-semibold">{t}</strong><span className="mt-1 block text-canal/85">{d.startsWith("[") ? <span className="font-mono text-sm underline decoration-dashed underline-offset-4">{d}</span> : d}</span></p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
