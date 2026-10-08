import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/Button";

export function Intro() {
  return (
    <section className="on-bone overflow-hidden bg-bone py-[var(--space-section)] text-canal">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-6">
            <Eyebrow tone="bone">Local plumbers</Eyebrow>
            <p className="t-h2 mt-5 !leading-[1.08]">
              Old brick, older pipes, and a lot of rain. We know the houses here.
            </p>
            <div className="mt-8 max-w-lg space-y-4 text-lg leading-relaxed text-graphite">
              <p>
                Manchester’s homes run from Victorian terraces and mill conversions to interwar semis and new apartments. They fail in different ways, and fixing them properly starts with knowing which one you’re in.
              </p>
              <p>
                We fix leaks, burst pipes, blocked drains, boilers and bathrooms across Manchester and the boroughs around it. Call, and you’ll speak to a person who can tell you what to do next.
              </p>
            </div>
            <div className="mt-8"><TextLink href="/about">About the company</TextLink></div>
          </div>

          {/* Overlapping, offset photographs */}
          <div className="relative lg:col-span-6">
            <Photo name="terraces" reveal caption className="aspect-[4/3] w-full lg:ml-12" sizes="(min-width:1024px) 55vw, 100vw" />
            <div className="drift relative -mt-16 ml-0 w-3/5 sm:-mt-24 lg:-mt-28">
              <Photo name="fittings" reveal className="aspect-[3/2] w-full border-8 border-bone" sizes="(min-width:1024px) 24vw, 60vw" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
