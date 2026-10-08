import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { CallButton } from "@/components/ui/Button";
import { Rich } from "@/components/ui/Placeholder";
import { SITE } from "@/lib/site";
import type { Faq } from "@/lib/faqs";

export function FaqList({ faqs, title = "Before you call.", eyebrow = "Questions", tone = "light" }: { faqs: Faq[]; title?: string; eyebrow?: string; tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <section className={`${light ? "on-bone bg-bone text-canal" : "bg-canal"} py-[var(--space-section)]`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHead tone={light ? "bone" : "canal"} eyebrow={eyebrow} title={title} />
              <p className={`reveal mt-6 max-w-xs ${light ? "text-graphite" : "text-bone/75"}`}>Not here? Call and ask. A straight answer costs nothing.</p>
              <div className="reveal mt-6"><CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} size="md" /></div>
            </div>
          </div>
          <div className={`reveal border-t-2 lg:col-span-8 ${light ? "border-canal" : "border-bone/40"}`}>
            {faqs.map((f) => (
              <details key={f.q} className={`faq border-b ${light ? "border-canal/20" : "border-bone/15"}`}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {f.q}
                  <Plus aria-hidden className={`plus size-6 shrink-0 ${light ? "text-copper-deep" : "text-copper"}`} />
                </summary>
                <p className={`max-w-2xl pb-6 leading-relaxed ${light ? "text-graphite" : "text-bone/75"}`}><Rich text={f.a} /></p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
