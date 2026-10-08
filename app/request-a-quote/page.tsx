import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Rich } from "@/components/ui/Placeholder";
import { CallButton } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Tell a local Manchester plumber what you need and get a quote. For emergencies, call instead.",
  alternates: { canonical: "/request-a-quote" },
};

const NEXT = [
  ["You send the details", "Tell us what the job is and where. The more you can tell us, the better."],
  ["We come back to you", "[CONFIRM HOW QUICKLY ENQUIRIES ARE ANSWERED]"],
  ["We agree the work and price", "[CONFIRM QUOTING PROCESS: SURVEY / FIXED PRICE / HOURLY RATE]"],
];
const HELPFUL = ["What’s wrong, and when it started", "Photos of the problem, if you can", "The make and model of a boiler or fitting", "Whether you’re a homeowner, tenant, landlord or business", "Any access issues, such as parking or key holders"];

export default function QuotePage() {
  return (
    <>
      <section className="bg-canal pb-12 pt-8 md:pb-16 md:pt-12">
        <Container>
          <Breadcrumbs trail={[{ name: "Request a quote", href: "/request-a-quote" }]} />
          <h1 className="t-display mt-10 text-[clamp(3rem,9vw,7.5rem)]">
            <span className="mask-line"><span className="mask-in">Tell us the job.</span></span>
            <span className="mask-line"><span className="mask-in">We’ll price it.</span></span>
          </h1>
        </Container>
      </section>

      <section className="on-bone bg-bone py-[var(--space-section)] text-canal">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="border border-canal bg-bone-deep p-6">
                  <p className="t-label text-copper-deep">Water escaping now?</p>
                  <p className="mt-3 max-w-xs text-graphite">Don’t fill in a form. Call, and we’ll tell you what to do.</p>
                  <div className="mt-5"><CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} size="md" className="w-full" /></div>
                </div>
                <h2 className="t-label mt-12 text-copper-deep">What happens next</h2>
                <ol className="mt-4 border-t border-canal">
                  {NEXT.map(([t, d], i) => (
                    <li key={t} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-canal/20 py-4">
                      <span className="t-label pt-1">0{i + 1}</span>
                      <p><strong className="block font-display text-xl font-semibold">{t}</strong><span className="text-graphite"><Rich text={d} /></span></p>
                    </li>
                  ))}
                </ol>
                <h2 className="t-label mt-10 text-copper-deep">Helpful to include</h2>
                <ul className="mt-4 border-t border-canal">
                  {HELPFUL.map((h) => <li key={h} className="border-b border-canal/15 py-2.5 text-graphite">{h}</li>)}
                </ul>
              </div>
            </aside>
            <div className="lg:col-span-8"><EnquiryForm full /></div>
          </div>
        </Container>
      </section>
    </>
  );
}
