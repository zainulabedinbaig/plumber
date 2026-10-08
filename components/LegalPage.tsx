import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";

/** Shell for legal pages. The text itself must come from the client / a solicitor. */
export function LegalPage({ title, path, sections }: { title: string; path: string; sections: string[] }) {
  return (
    <section className="bg-canal pb-24 pt-8 md:pt-12">
      <Container>
        <Breadcrumbs trail={[{ name: title, href: path }]} />
        <h1 className="t-display mt-10 text-[clamp(2.75rem,8vw,6rem)]">{title}</h1>
        <p className="mt-6 max-w-xl text-bone/80"><Placeholder>[INSERT {title.toUpperCase()} TEXT: to be supplied or approved by the client]</Placeholder></p>
        <ol className="mt-12 max-w-2xl border-t border-bone/30">
          {sections.map((s) => (
            <li key={s} className="border-b border-bone/15 py-5">
              <h2 className="font-display text-2xl font-semibold tracking-tight">{s}</h2>
              <p className="mt-2 text-slate"><Placeholder>[INSERT]</Placeholder></p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
