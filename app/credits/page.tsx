import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = { title: "Photo Credits", robots: { index: false } };

export default function Page() {
  const items = Object.values(IMAGES).filter((i) => i.credit);
  return (
    <section className="bg-canal pb-24 pt-8 md:pt-12">
      <Container>
        <Breadcrumbs trail={[{ name: "Photo credits", href: "/credits" }]} />
        <h1 className="t-display mt-10 text-[clamp(2.75rem,8vw,6rem)]">Photo credits</h1>
        <p className="mt-6 max-w-xl text-bone/80">Photographs are used under open licences from Wikimedia Commons. These are stand-ins until the client supplies its own photography.</p>
        <ul className="mt-12 max-w-3xl border-t border-bone/30">
          {items.map((i) => (
            <li key={i.src} className="grid gap-1 border-b border-bone/15 py-5 sm:grid-cols-[1fr_auto] sm:gap-8">
              <span>{i.alt}</span>
              <span className="text-slate">
                {i.credit!.author} · <a href={i.credit!.licenseUrl} className="u-link hover:text-bone" rel="noreferrer">{i.credit!.license}</a> · <a href={i.credit!.source} className="u-link hover:text-bone" rel="noreferrer">source</a>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
