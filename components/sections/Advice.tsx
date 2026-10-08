import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Plus } from "lucide-react";

const TIPS = [
  { t: "Find your stopcock before you need it", d: "It’s usually under the kitchen sink or where the supply enters the house. Turn it clockwise to close, and test it a couple of times a year so it doesn’t seize. If it’s stiff or won’t turn, get it looked at before there’s an emergency." },
  { t: "Stop pipes freezing", d: "Insulate pipes in lofts, garages and outside. In a cold spell, keep the heating on low rather than off, and if you’re away, leave it on at a low setting. Know where your stopcock is, so you can act quickly if one does freeze." },
  { t: "Bleed a radiator", d: "With the heating off and the radiator cool, put a radiator key in the valve at the top and turn it anticlockwise a quarter turn. Air hisses out. Close the valve when water appears, then check your boiler pressure and top it up if it’s dropped." },
  { t: "Keep drains clear", d: "Never pour fat or grease down a sink, bin the wet wipes (even ‘flushable’ ones), and use a strainer in the shower and kitchen sink. Only toilet paper should go down the toilet." },
];

export function Advice() {
  return (
    <section className="on-bone bg-bone-deep py-[var(--space-section)] text-canal">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHead tone="bone" eyebrow="Useful to know" title="Plumbing advice you can use today." /></div>
          <div className="reveal border-t-2 border-canal lg:col-span-8">
            {TIPS.map((x) => (
              <details key={x.t} className="faq border-b border-canal/20">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-display text-2xl font-semibold tracking-tight">
                  {x.t}
                  <Plus aria-hidden className="plus size-6 shrink-0 text-copper-deep" />
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-graphite">{x.d}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
