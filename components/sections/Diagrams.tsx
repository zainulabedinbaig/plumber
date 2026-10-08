import { AREAS } from "@/lib/areas";

/** Stopcock / pipe-run schematic: an explanatory drawing, not a fake photo. */
export function PipeDiagram({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Diagram of a pipe run with a stopcock valve"
      className={`relative overflow-hidden bg-brick ${className}`}
      style={{
        backgroundImage: "linear-gradient(rgba(237,232,223,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(237,232,223,.07) 1px, transparent 1px)",
        backgroundSize: "100% 2.25rem, 6rem 4.5rem",
      }}
    >
      <svg aria-hidden viewBox="0 0 400 500" fill="none" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        <path d="M40 110 H250 V250 H120 V390 H360" stroke="var(--copper)" strokeWidth="22" strokeLinejoin="miter" />
        <path d="M40 110 H250 V250 H120 V390 H360" stroke="var(--brick)" strokeWidth="16" strokeLinejoin="miter" />
        <path d="M130 94 L160 126 V94 L130 126 Z" fill="var(--canal)" stroke="var(--bone)" strokeWidth="1.5" />
        <path d="M145 94 V70 M133 70 H157" stroke="var(--bone)" strokeWidth="1.5" />
        <g stroke="var(--slate)" strokeWidth="1"><path d="M250 150 V210 M244 150 H256 M244 210 H256" /><path d="M120 290 V350 M114 290 H126 M114 350 H126" /></g>
        <g fill="var(--slate)" fontFamily="var(--font-plex-mono)" fontSize="11" letterSpacing="1.5">
          <text x="262" y="184">Ø22</text><text x="132" y="324">Ø22</text><text x="104" y="60">STOPCOCK</text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Schematic coverage map: Manchester at the centre, areas as nodes on pipe runs.
 * Positions are illustrative (see lib/areas.ts), not geographic.
 */
export function AreasMap({ className = "" }: { className?: string }) {
  const centre = AREAS[0];
  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden border border-bone/20 bg-brick ${className}`}
      style={{
        backgroundImage: "linear-gradient(rgba(237,232,223,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(237,232,223,.06) 1px, transparent 1px)",
        backgroundSize: "2.5rem 2.5rem",
      }}
      role="img"
      aria-label="Schematic map: Manchester at the centre, with Salford, Stretford, Chorlton, Didsbury, Wythenshawe, Sale, Altrincham and Stockport around it"
    >
      <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full" fill="none">
        {/* Trunk main with a branch to each area: a manifold, not a tangle */}
        <path d={`M${centre.x} ${Math.min(...AREAS.map((a) => a.y))} V${Math.max(...AREAS.map((a) => a.y))}`} stroke="var(--copper)" strokeWidth={2.5} vectorEffect="non-scaling-stroke" />
        {AREAS.slice(1).map((a) => (
          <path key={a.slug} d={`M${centre.x} ${a.y} H${a.x}`} stroke="var(--copper)" strokeWidth={2} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      {AREAS.map((a, i) => (
        <span key={a.slug} aria-hidden className="absolute" style={{ left: `${a.x}%`, top: `${a.y}%` }}>
          <span className={`absolute -translate-x-1/2 -translate-y-1/2 border-2 border-copper bg-canal ${i === 0 ? "size-4 bg-copper" : "size-2.5"}`} />
          <span className={`t-label absolute top-0 -translate-y-1/2 whitespace-nowrap text-[0.65rem] ${a.x < centre.x ? "right-3" : "left-3"} ${i === 0 ? "text-bone" : "text-bone/80"}`}>{a.name}</span>
        </span>
      ))}
      <p className="t-label absolute bottom-3 left-4 text-[0.6rem] text-slate">Schematic · not to scale</p>
    </div>
  );
}
