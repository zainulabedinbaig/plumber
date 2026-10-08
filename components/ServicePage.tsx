import Link from "next/link";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { Rich } from "@/components/ui/Placeholder";
import { SectionHead } from "@/components/ui/SectionHead";
import { CallButton } from "@/components/ui/Button";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { Process } from "@/components/sections/Process";
import { FaqList } from "@/components/sections/FaqList";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { relatedServices, type Service } from "@/lib/services";
import { SITE } from "@/lib/site";

function IntroBlock({ s }: { s: Service }) {
  const overhang = s.variant === "editorial";
  return (
    <section className={`on-bone bg-bone pb-[var(--space-section)] text-canal ${overhang ? "pt-16 lg:pt-44" : "pt-[var(--space-section)]"}`}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-6">
            <Eyebrow tone="bone">The problem</Eyebrow>
            <h2 className="t-h2 mt-4">{s.intro.heading}</h2>
          </div>
          <div className="reveal space-y-5 text-lg leading-relaxed text-graphite lg:col-span-5 lg:col-start-8">
            {s.intro.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>

        <div className="reveal mt-16 border-t-2 border-canal pt-8">
          <h3 className="t-label text-copper-deep">What we can help with</h3>
          <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
            {s.helps.map((h) => (
              <li key={h.title} className="border-b border-canal/20 py-5">
                <h4 className="font-display text-2xl font-semibold tracking-tight"><Rich text={h.title} /></h4>
                <p className="mt-1 max-w-md text-graphite"><Rich text={h.text} /></p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Symptoms({ s }: { s: Service }) {
  if (s.variant === "urgent") {
    return (
      <section className="bg-canal py-[var(--space-section)]">
        <Container>
          <SectionHead eyebrow="Is it an emergency?" title={s.symptomsHeading} />
          <ul className="reveal mt-12 grid gap-x-12 border-t border-bone/30 md:grid-cols-2">
            {s.symptoms.map((x, i) => (
              <li key={x} className="flex gap-5 border-b border-bone/15 py-6">
                <span className="t-label pt-2 text-copper">0{i + 1}</span>
                <span className="font-display text-2xl font-medium leading-snug tracking-tight">{x}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    );
  }
  if (s.variant === "technical") {
    return (
      <section className="on-bone bg-bone-deep py-[var(--space-section)] text-canal">
        <Container>
          <SectionHead tone="bone" eyebrow="Symptoms" title={s.symptomsHeading} />
          <table className="reveal mt-12 w-full border-t-2 border-canal text-left">
            <caption className="sr-only">{s.symptomsHeading}</caption>
            <tbody>
              {s.symptoms.map((x, i) => (
                <tr key={x} className="border-b border-canal/20">
                  <th scope="row" className="t-label w-20 py-5 align-top text-copper-deep sm:w-28">S-0{i + 1}</th>
                  <td className="py-5 font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl">{x}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>
    );
  }
  return (
    <section className="bg-brick py-[var(--space-section)]">
      <Container>
        <SectionHead eyebrow="Signs to look for" title={s.symptomsHeading} />
        <ul className="reveal mt-12 flex flex-wrap gap-3">
          {s.symptoms.map((x) => (
            <li key={x} className="border border-bone/30 px-5 py-4 text-lg">{x}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function DoNow({ s }: { s: Service }) {
  if (!s.doNow) return null;
  const urgent = s.variant === "urgent";
  return (
    <section id="do-now" className={`${urgent ? "on-bone bg-copper text-canal" : "bg-canal"} py-[var(--space-section)]`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <p className={`t-label ${urgent ? "text-canal/80" : "text-copper"}`}>What to do now</p>
            <h2 className="t-h2 mt-4">{s.doNow.heading}</h2>
            {s.doNow.warning && (
              <p className={`mt-8 flex gap-3 border-l-4 py-1 pl-4 ${urgent ? "border-canal" : "border-copper"}`}>
                <TriangleAlert aria-hidden className="mt-1 size-5 shrink-0" />
                <span className="max-w-sm">{s.doNow.warning}</span>
              </p>
            )}
          </div>
          <ol className={`reveal border-t lg:col-span-7 ${urgent ? "border-canal/40" : "border-bone/30"}`}>
            {s.doNow.steps.map((st, i) => (
              <li key={st.title} className={`grid grid-cols-[3.5rem_1fr] gap-4 border-b py-7 sm:grid-cols-[5rem_1fr] ${urgent ? "border-canal/25" : "border-bone/15"}`}>
                <span className={`font-display text-5xl font-semibold leading-none sm:text-6xl ${urgent ? "" : "text-copper"}`}>{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{st.title}</h3>
                  <p className={`mt-2 max-w-md ${urgent ? "text-canal/85" : "text-bone/75"}`}>{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function OnCall({ s }: { s: Service }) {
  return (
    <section className="bg-brick py-[var(--space-section)]">
      <Container>
        <SectionHead eyebrow="When you call" title="What happens next." />
        <ol className={`reveal mt-12 grid gap-x-8 border-t border-bone/30 ${s.onCall.length > 3 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
          {s.onCall.map((c, i) => (
            <li key={c.title} className="border-b border-bone/15 py-6 md:border-b-0">
              <span className="t-label text-copper">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight">{c.title}</h3>
              <p className="mt-2 text-bone/75"><Rich text={c.text} /></p>
            </li>
          ))}
        </ol>
        <div className="reveal mt-10"><CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} className="w-full sm:w-auto" /></div>
      </Container>
    </section>
  );
}

function WhyPro({ s }: { s: Service }) {
  const copy = (
    <div className="reveal max-w-xl">
      <Eyebrow>Why it matters</Eyebrow>
      <h2 className="t-h2 mt-4">{s.whyPro.heading}</h2>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-bone/80">{s.whyPro.body.map((p) => <p key={p}>{p}</p>)}</div>
    </div>
  );
  if (!s.image) {
    return <section className="bg-canal py-[var(--space-section)]"><Container>{copy}</Container></section>;
  }
  const flip = s.variant === "technical";
  return (
    <section className="bg-canal">
      <div className="grid lg:grid-cols-2">
        <div className={`relative min-h-[22rem] lg:min-h-[34rem] ${flip ? "lg:order-2" : ""}`}>
          <Photo name={s.image} parallax reveal className="absolute inset-0" sizes="100vw" />
        </div>
        <div className={`flex items-center py-[var(--space-section)] ${flip ? "rail-pad lg:order-1 lg:pr-16" : "px-5 lg:px-16"}`}>{copy}</div>
      </div>
    </section>
  );
}

function Related({ s }: { s: Service }) {
  return (
    <section className="on-bone bg-bone py-[var(--space-section)] text-canal">
      <Container>
        <SectionHead tone="bone" eyebrow="Related" title="You might also need." />
        <ul className="reveal mt-12 border-t-2 border-canal">
          {relatedServices(s).map((r) => (
            <li key={r.slug}>
              <Link href={`/services/${r.slug}`} className="group grid gap-2 border-b border-canal/20 py-6 transition-colors hover:bg-bone-deep sm:grid-cols-[1fr_1.2fr_auto] sm:items-center sm:gap-8 sm:px-3">
                <span className="font-display text-3xl font-semibold tracking-tight">{r.name}</span>
                <span className="max-w-md text-graphite">{r.blurb}</span>
                <ArrowRight aria-hidden className="arrow size-6 text-copper-deep transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ServicePage({ s }: { s: Service }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    provider: { "@type": "Plumber", name: SITE.name, url: SITE.url },
    areaServed: ["Manchester", "Salford", "Trafford", "Stockport"].map((n) => ({ "@type": "AdministrativeArea", name: n })),
  };
  const urgent = s.variant === "urgent";
  return (
    <>
      <ServiceHero s={s} />
      {urgent && <DoNow s={s} />}
      <IntroBlock s={s} />
      <Symptoms s={s} />
      {!urgent && <DoNow s={s} />}
      <OnCall s={s} />
      <WhyPro s={s} />
      <Process title={s.processHeading} steps={s.process} tone={urgent ? "dark" : "light"} />
      <FaqList faqs={s.faqs} title={`${s.short}: your questions.`} tone={urgent ? "light" : "dark"} />
      <Related s={s} />
      <EnquirySection title="Tell us what’s wrong." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
