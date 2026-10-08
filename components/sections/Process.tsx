import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Rich } from "@/components/ui/Placeholder";

type Step = { title: string; text: string };

/** Sticky heading on the left, oversized numerals on the right. */
export function Process({ eyebrow = "The process", title, steps, tone = "dark" }: { eyebrow?: string; title: string; steps: Step[]; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <section className={`${light ? "on-bone bg-bone text-canal" : "bg-brick"} py-[var(--space-section)]`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="reveal lg:sticky lg:top-32">
              <Eyebrow tone={light ? "bone" : "canal"}>{eyebrow}</Eyebrow>
              <h2 className="t-h2 mt-4">{title}</h2>
            </div>
          </div>
          <ol className="lg:col-span-8">
            {steps.map((s, i) => (
              <li key={s.title} className={`reveal grid grid-cols-[4.5rem_1fr] gap-4 border-t py-8 sm:grid-cols-[8rem_1fr] sm:gap-8 ${light ? "border-canal/30" : "border-bone/25"}`}>
                <span className={`font-display text-6xl font-semibold leading-none tracking-tighter sm:text-8xl ${light ? "text-copper-deep" : "text-copper"}`}>{i + 1}</span>
                <div className="pt-1 sm:pt-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{s.title}</h3>
                  <p className={`mt-3 max-w-md ${light ? "text-graphite" : "text-bone/75"}`}><Rich text={s.text} /></p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
