import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { CallButton } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaqList } from "@/components/sections/FaqList";
import { SITE } from "@/lib/site";
import { GENERAL_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, message or send an enquiry to a local Manchester plumber. Phone, email, opening hours and the areas we cover.",
  alternates: { canonical: "/contact" },
};

const ROWS: [string, React.ReactNode][] = [
  ["Phone", <a key="p" href={SITE.phoneHref} className="u-link font-display text-3xl hover:text-copper-hi">{SITE.phoneDisplay}</a>],
  ["Email", <Placeholder key="e">{SITE.email}</Placeholder>],
  ["WhatsApp", <Placeholder key="w">{SITE.whatsapp}</Placeholder>],
  ["Address", <Placeholder key="a">{SITE.address}</Placeholder>],
  ["Opening hours", <Placeholder key="h">{SITE.hours}</Placeholder>],
  ["Emergency hours", <Placeholder key="eh">{SITE.emergencyHours}</Placeholder>],
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-canal pb-16 pt-8 md:pb-24 md:pt-12">
        <Container>
          <Breadcrumbs trail={[{ name: "Contact", href: "/contact" }]} />
          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="t-label rise text-copper">Contact</p>
              <h1 className="t-display mt-5 text-[clamp(3rem,9vw,7.5rem)]">
                <span className="mask-line"><span className="mask-in">Call first.</span></span>
                <span className="mask-line"><span className="mask-in">Write second.</span></span>
              </h1>
              <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-bone/80 md:text-xl">
                A phone call is the quickest way to get help. If it’s not urgent, send us the details and we’ll come back to you.
              </p>
              <div className="rise rise-3 mt-8"><CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} className="w-full sm:w-auto" /></div>
            </div>
            <dl className="rise rise-3 border-t border-bone/30 lg:col-span-5">
              {ROWS.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 border-b border-bone/15 py-4">
                  <dt className="t-label pt-1 text-slate">{k}</dt>
                  <dd className="text-bone/90">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="on-bone bg-bone-deep py-[var(--space-section)] text-canal">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="reveal lg:col-span-4">
              <h2 className="t-h2">Send us the details.</h2>
              <p className="mt-5 max-w-xs text-graphite">Tell us what’s wrong and where. Photos help. We’ll ask for them when we reply.</p>
            </div>
            <div className="lg:col-span-8"><EnquiryForm full /></div>
          </div>
        </Container>
      </section>

      <FaqList faqs={GENERAL_FAQS.slice(0, 5)} title="Quick answers." tone="dark" />
    </>
  );
}
