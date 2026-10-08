import { CallButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SITE } from "@/lib/site";

export function EnquirySection({ title = "Tell us what’s wrong.", full = false }: { title?: string; full?: boolean }) {
  return (
    <section id="quote" className="on-bone bg-bone-deep py-[var(--space-section)] text-canal">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead tone="bone" eyebrow="Get a quote" title={title} lead="A few lines is plenty. If water is escaping now, don’t fill in a form. Call." />
            <div className="reveal mt-8"><CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} className="w-full sm:w-auto" /></div>
          </div>
          <div className="lg:col-span-7"><EnquiryForm full={full} /></div>
        </div>
      </Container>
    </section>
  );
}
