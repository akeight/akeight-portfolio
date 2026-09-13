/**
 * Catalyst's relational core, drawn in the site's own ink-on-paper language.
 * Six models, one workflow — the diagram supports the adjacent prose claim
 * that the product is a system, not a to-do list.
 */

const box = {
  fill: "hsl(var(--surface-elevated))",
  stroke: "hsl(var(--foreground) / 0.35)",
  strokeWidth: 1,
};

const line = {
  stroke: "hsl(var(--foreground) / 0.3)",
  strokeWidth: 1,
  fill: "none",
};

const Entity = ({ x, y, label, emphasis }: { x: number; y: number; label: string; emphasis?: boolean }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={150}
      height={44}
      {...box}
      stroke={emphasis ? "hsl(var(--plum))" : box.stroke}
      strokeWidth={emphasis ? 1.5 : 1}
    />
    <text
      x={x + 75}
      y={y + 27}
      textAnchor="middle"
      className="font-mono"
      fontSize={12}
      letterSpacing={1}
      fill={emphasis ? "hsl(var(--plum))" : "hsl(var(--foreground) / 0.85)"}
    >
      {label}
    </text>
  </g>
);

const Rel = ({ d, label, lx, ly }: { d: string; label?: string; lx?: number; ly?: number }) => (
  <g>
    <path d={d} {...line} />
    {label && lx !== undefined && ly !== undefined && (
      <text x={lx} y={ly} className="font-mono" fontSize={9} fill="hsl(var(--muted-foreground))">
        {label}
      </text>
    )}
  </g>
);

export const CatalystDataModel = () => (
  <svg viewBox="0 0 760 320" className="w-full" role="img" aria-label="Catalyst data model: a User owns Applications, saved Opportunities, and Favorites; each Application carries a Status history and Interviews; Favorites connect users back to opportunities.">
    {/* Relations */}
    <Rel d="M 190 160 L 300 84" label="1 — n" lx={228} ly={112} />
    <Rel d="M 190 182 L 300 182" label="1 — n" lx={232} ly={174} />
    <Rel d="M 190 204 L 300 272" label="1 — n" lx={228} ly={250} />
    <Rel d="M 450 62 L 560 62" label="1 — n" lx={492} ly={54} />
    <Rel d="M 450 84 C 510 84, 510 150, 560 160" label="1 — n" lx={500} ly={122} />
    <Rel d="M 450 272 L 560 204" label="n — 1" lx={496} ly={250} />
    <Rel d="M 375 160 L 375 84" label="n — 1" lx={382} ly={126} />

    {/* Entities */}
    <Entity x={40} y={160} label="User" emphasis />
    <Entity x={300} y={40} label="Application" emphasis />
    <Entity x={560} y={40} label="StatusEvent" />
    <Entity x={300} y={160} label="Opportunity" />
    <Entity x={560} y={160} label="Interview" />
    <Entity x={300} y={250} label="Favorite" />
  </svg>
);
