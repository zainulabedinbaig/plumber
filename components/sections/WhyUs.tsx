import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { COMMITMENTS } from "@/lib/site";

export function WhyUs() {
  return (
    <section className="bg-canal">
      <div className="grid lg:grid-cols-12">
        {/* Photo bleeds to the left edge of the viewport */}
        <div className="relative min-h-[26rem] lg:col-span-5 lg:min-h-[44rem]">
          <Photo name="bridge" parallax reveal caption={false} className="absolute inset-0" sizes="100vw" imgClassName="object-[30%_50%]" />
        </div>
        <Container rail={false} className="py-[var(--space-section)] lg:col-span-7 lg:pl-16 lg:pr-10 xl:pr-[max(2.5rem,calc((100vw-84rem)/2+2.5rem))]">
          <div className="reveal max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="t-h2 mt-4">Straightforward, start to finish.</h2>
            <p className="mt-5 max-w-lg text-lg text-bone/75">
              You’re letting someone into your home, often at a bad moment. These are the standards we work to.
            </p>
          </div>
          <ol className="reveal mt-12 max-w-2xl border-t border-bone/30">
            {COMMITMENTS.map((c, i) => (
              <li key={c.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-bone/15 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-4xl font-semibold leading-none text-copper">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 max-w-md text-bone/75">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    </section>
  );
}
