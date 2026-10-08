import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/Container";
import type { ImageKey } from "@/lib/images";

/** Full-bleed photograph with overlaid statement. */
export function PhotoBand({ image, eyebrow, children, align = "left" }: { image: ImageKey; eyebrow: string; children: React.ReactNode; align?: "left" | "right" }) {
  return (
    <section className="relative isolate overflow-hidden bg-canal text-bone">
      <Photo name={image} parallax reveal caption={false} className="absolute inset-0 -z-10" sizes="100vw" imgClassName="object-[50%_40%]" />
      <div className="absolute inset-0 -z-10 bg-canal/65" />
      <Container className="flex min-h-[28rem] items-end py-16 md:min-h-[38rem] md:py-24">
        <div className={`reveal max-w-2xl ${align === "right" ? "ml-auto" : ""}`}>
          <p className="t-label text-copper">{eyebrow}</p>
          <p className="t-h2 mt-4 !leading-[1.05]">{children}</p>
        </div>
      </Container>
    </section>
  );
}
