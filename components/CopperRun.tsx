"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * The one visual idea: a copper pipe run travelling down the page like a plumbing
 * schematic. Elbows are placed at the top of each section so the line reads as
 * structure, not decoration. Measured in real pixels (no stretched strokes);
 * the draw-on-scroll is CSS (animation-timeline) with a fully drawn fallback.
 */
export function CopperRun() {
  const wrap = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [geo, setGeo] = useState<{ w: number; h: number; d: string } | null>(null);

  useEffect(() => {
    const el = wrap.current;
    const main = el?.closest("main");
    if (!el || !main) return;

    const build = () => {
      const w = el.clientWidth;
      const h = main.clientHeight;
      const narrow = window.innerWidth < 768;
      const a = w * (narrow ? 0.35 : 0.3);
      const b = w * (narrow ? 0.75 : 0.8);
      const tops = Array.from(main.querySelectorAll<HTMLElement>(".page-in > section"))
        .map((s) => s.offsetTop + (narrow ? 40 : 64));
      let d = `M${a} 0`;
      let x = a;
      tops.slice(1).forEach((y) => {
        const nx = x === a ? b : a;
        d += ` V${y} H${nx}`;
        x = nx;
      });
      d += ` V${h}`;
      setGeo({ w, h, d });
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(main);
    const t = window.setTimeout(build, 400); // after fonts/images settle
    return () => { ro.disconnect(); window.clearTimeout(t); };
  }, [pathname]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-[84rem]">
      <div ref={wrap} className="absolute inset-y-0 left-0 w-9 md:w-24">
      {geo && (
        <svg width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w} ${geo.h}`} fill="none" className="absolute inset-0">
          <path
            className="run-path"
            pathLength={1}
            d={geo.d}
            stroke="var(--copper)"
            strokeWidth={2.5}
            strokeLinejoin="miter"
          />
        </svg>
      )}
      </div>
    </div>
  );
}
