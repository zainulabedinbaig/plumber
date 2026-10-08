import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { Rich } from "@/components/ui/Placeholder";
import { SectionHead } from "@/components/ui/SectionHead";
import { InnerHero } from "@/components/sections/InnerHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { TrustSpec } from "@/components/sections/TrustSpec";
import { WhyUs } from "@/components/sections/WhyUs";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "A local Manchester plumbing company. How we work, what to expect when we visit, and the people behind the van.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  { t: "Customer service", d: "Pick up the phone, turn up when we say, and explain things so they make sense. Most of what makes a plumber good has nothing to do with pipes." },
  { t: "Workmanship", d: "Pipework gets cut square, supported properly and pressure-tested before it’s covered. The best repairs are the ones you never think about again." },
  { t: "Honesty", d: "If a small repair will do, we’ll say so. If something is past saving, we’ll tell you why, and what the options are." },
];

const EXPECT = [
  ["Before we arrive", "You’ll know who’s coming and roughly when. [CONFIRM APPOINTMENT AND ARRIVAL PROCESS]"],
  ["When we’re there", "We look at the problem, explain what’s wrong and what it will take to fix, and agree it with you before starting."],
  ["Afterwards", "The work tested, the area cleared up, and a plain explanation of what we did and what to watch for."],
];

const TEAM = ["[TEAM MEMBER NAME]", "[TEAM MEMBER NAME]", "[TEAM MEMBER NAME]"];

export default function AboutPage() {
  return (
    <>
      <InnerHero
        trail={[{ name: "About", href: "/about" }]}
        eyebrow="About us"
        lines={["Local plumbers.", "Straight answers."]}
        lead="A Manchester plumbing company that answers the phone, turns up and does the job properly."
        image="castlefield"
      />

      <section className="on-bone bg-bone py-[var(--space-section)] text-canal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="reveal lg:col-span-5">
              <Eyebrow tone="bone">Who we are</Eyebrow>
              <h2 className="t-h2 mt-4">A Manchester plumbing company.</h2>
            </div>
            <div className="reveal space-y-5 text-lg leading-relaxed text-graphite lg:col-span-6 lg:col-start-7">
              <p><Rich text="[INSERT COMPANY INTRODUCTION: who you are, where you’re based, and what you’re known for. Written by the client, not invented.]" /></p>
              <p>We work across Manchester and the boroughs around it, in homes that range from Victorian terraces to new-build apartments. The jobs change; the way we approach them doesn’t.</p>
              <p><Rich text="[INSERT COMPANY STORY / HISTORY IF THE CLIENT WANTS TO SHARE IT]" /></p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-canal py-[var(--space-section)]">
        <Container>
          <SectionHead eyebrow="Our approach" title="What we care about." />
          <ol className="reveal mt-14 grid gap-x-10 border-t border-bone/30 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <li key={p.t} className="border-b border-bone/15 py-8 md:border-b-0">
                <span className="t-label text-copper">0{i + 1}</span>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">{p.t}</h3>
                <p className="mt-3 text-bone/75">{p.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <PhotoBand image="mill" eyebrow="Local positioning">
        We’re from here. We know the houses, the streets and the weather.
      </PhotoBand>

      <section className="on-bone bg-bone py-[var(--space-section)] text-canal">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5"><Photo name="fittings" reveal caption className="aspect-[4/3] w-full" sizes="(min-width:1024px) 40vw, 100vw" /></div>
            <div className="lg:col-span-6 lg:col-start-7">
              <SectionHead tone="bone" eyebrow="What to expect" title="When we come to your home." />
              <ol className="reveal mt-10 border-t-2 border-canal">
                {EXPECT.map(([t, d]) => (
                  <li key={t} className="border-b border-canal/20 py-6">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{t}</h3>
                    <p className="mt-2 max-w-md text-graphite"><Rich text={d} /></p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <WhyUs />
      <TrustSpec tone="light" />

      <section className="bg-canal py-[var(--space-section)]">
        <Container>
          <SectionHead eyebrow="The team" title="The people behind the van." lead="Real names and photographs go here, supplied by the client. Please don’t publish stock photos of people as the team." />
          <ul className="reveal mt-14 grid gap-8 sm:grid-cols-3">
            {TEAM.map((n, i) => (
              <li key={i}>
                <div role="img" aria-label="Team photograph placeholder" className="relative aspect-[3/4] w-full border border-bone/25 bg-brick">
                  <span className="t-label absolute inset-x-4 bottom-4 text-[0.65rem] text-slate"><span className="text-copper">[PHOTO]</span> Portrait, natural light</span>
                </div>
                <p className="mt-4 font-display text-2xl font-semibold"><Rich text={n} /></p>
                <p className="text-slate"><Rich text="[ROLE]" /></p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-copper text-canal">
        <Container className="flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <h2 className="t-display max-w-xl text-5xl md:text-6xl">Got a problem? Let’s talk.</h2>
          <a href={SITE.phoneHref} className="btn inline-flex min-h-16 w-full items-center justify-center bg-canal px-8 font-display text-2xl font-semibold text-bone hover:text-canal md:w-auto [&::before]:bg-bone">Call {SITE.phoneDisplay}</a>
        </Container>
      </section>
      <EnquirySection />
    </>
  );
}
