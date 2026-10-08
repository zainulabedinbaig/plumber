import { Container } from "@/components/ui/Container";
import { CallButton, GhostButton } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-canal py-24 md:py-32">
      <Container>
        <p className="t-label text-copper">404</p>
        <h1 className="t-display mt-5 text-[clamp(3rem,9vw,7rem)]">That page has<br />gone down the drain.</h1>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <GhostButton href="/">Back to the homepage</GhostButton>
          <CallButton href={SITE.phoneHref} label={`Call ${SITE.phoneDisplay}`} />
        </div>
      </Container>
    </section>
  );
}
