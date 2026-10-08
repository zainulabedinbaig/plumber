import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Placeholder } from "@/components/ui/Placeholder";
import { TRUST_SPEC } from "@/lib/site";

/** Trust laid out as a spec sheet. Every value is a placeholder until supplied. */
export function TrustSpec({ tone = "light" }: { tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <section className={`${light ? "on-bone bg-bone text-canal" : "bg-canal"} py-[var(--space-section)]`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead tone={light ? "bone" : "canal"} eyebrow="Spec sheet" title="Who you’re letting in."
              lead={light ? undefined : "You’re inviting someone into your home. Here is what you should know before you do."} />
            {light && <p className="reveal mt-5 max-w-sm text-graphite">You’re inviting someone into your home. Here is what you should know before you do.</p>}
          </div>
          <dl className={`reveal border-t-2 lg:col-span-7 ${light ? "border-canal" : "border-bone/40"}`}>
            {TRUST_SPEC.map((r) => (
              <div key={r.label} className={`grid gap-1 border-b py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 ${light ? "border-canal/20" : "border-bone/15"}`}>
                <dt className={`t-label pt-1 ${light ? "text-graphite" : "text-slate"}`}>{r.label}</dt>
                <dd className="font-display text-xl font-medium tracking-tight sm:text-2xl"><Placeholder>{r.value}</Placeholder></dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
