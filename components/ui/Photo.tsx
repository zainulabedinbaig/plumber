import Image from "next/image";
import { IMAGES, type ImageKey } from "@/lib/images";

type Props = {
  name: ImageKey;
  /** CSS aspect-ratio / sizing classes for the frame, e.g. "aspect-[4/5]" */
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Extra classes on the <img> (object-position etc.) */
  imgClassName?: string;
  /** Wrap in a scroll-driven clip reveal */
  reveal?: boolean;
  /** Add a parallax drift inside the frame */
  parallax?: boolean;
  /** Show a small credit line under the image */
  caption?: boolean;
  zoom?: boolean;
};

/** Photograph in a fixed frame. Credit comes from lib/images.ts. */
export function Photo({ name, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority, imgClassName = "", reveal, parallax, caption, zoom }: Props) {
  const img = IMAGES[name];
  const frame = (
    <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-brick ${zoom ? "zoom" : ""} ${reveal ? "clip-view" : ""} ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        preload={priority}
        loading={priority ? "eager" : undefined}
        className={`object-cover ${parallax ? "parallax scale-[1.18]" : ""} ${imgClassName}`}
      />
    </div>
  );
  if (!caption || !img.credit) return frame;
  return (
    <figure>
      {frame}
      <figcaption className="t-label mt-3 text-[0.65rem] text-slate">
        Photo: {img.credit.author} · {img.credit.license}
      </figcaption>
    </figure>
  );
}
