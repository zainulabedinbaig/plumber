import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import type { ImageKey } from "@/lib/images";

type Props = {
  trail: { name: string; href: string }[];
  eyebrow: string;
  lines: string[];
  lead: string;
  image?: ImageKey;
  children?: React.ReactNode;
};

/** Editorial page header for About / Areas / Contact / Services index. */
export function InnerHero({ trail, eyebrow, lines, lead, image, children }: Props) {
  return (
    <section className="relative bg-canal pb-16 pt-8 md:pb-24 md:pt-12">
      <Container>
        <Breadcrumbs trail={trail} />
        <div className="mt-10 grid items-end gap-12 lg:grid-cols-12">
          <div className={image ? "lg:col-span-7" : "lg:col-span-10"}>
            <p className="t-label rise text-copper">{eyebrow}</p>
            <h1 className={`t-display mt-5 ${image ? "text-[clamp(2.75rem,7vw,6rem)]" : "text-[clamp(3rem,9vw,7.5rem)]"}`}>
              {lines.map((l) => <span key={l} className="mask-line"><span className="mask-in">{l}</span></span>)}
            </h1>
            <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-bone/80 md:text-xl">{lead}</p>
            {children && <div className="rise rise-3 mt-8">{children}</div>}
          </div>
          {image && (
            <div className="clip-load lg:col-span-5">
              <Photo name={image} priority caption className="aspect-[4/3] w-full lg:aspect-[4/5]" sizes="(min-width:1024px) 60vw, 100vw" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
