import { cn } from "@/lib/utils";

export type IrisState = "ideal" | "loading" | "empty" | "critical" | "long-labels" | "compact";

interface IrisCardProps {
  state: IrisState;
  className?: string;
}

/**
 * An abstracted recreation of an Iris reading card — the same component
 * under every condition production actually produces. The real product UI
 * belongs to Todd; this recreation demonstrates the state system I built
 * without exposing it.
 */
export const IrisCard = ({ state, className }: IrisCardProps) => {
  const compact = state === "compact";

  if (state === "loading") {
    return (
      <div className={cn("space-y-3 border border-foreground/15 bg-surface-elevated p-4", className)}>
        <div className="flex items-center justify-between">
          <span className="h-3 w-24 animate-pulse rounded bg-foreground/10" />
          <span className="h-3 w-12 animate-pulse rounded bg-foreground/10" />
        </div>
        <span className="block h-7 w-20 animate-pulse rounded bg-foreground/10" />
        <span className="block h-2 w-full animate-pulse rounded-full bg-foreground/10" />
        <span className="block h-2.5 w-32 animate-pulse rounded bg-foreground/10" />
      </div>
    );
  }

  if (state === "empty") {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-2.5 border border-dashed border-foreground/25 p-4",
          className
        )}
      >
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-medium">Nitrogen (N)</span>
          <span className="annotation">Zone 4</span>
        </div>
        <p className="text-xs text-muted-foreground">No sample collected for this zone yet.</p>
        <span className="mt-1 border border-foreground/25 px-2.5 py-1 text-[11px] font-medium">
          Request sampling
        </span>
      </div>
    );
  }

  const isCritical = state === "critical";
  const isLong = state === "long-labels";

  const label = isLong ? "Phosphorus pentoxide equivalent (P₂O₅)" : "Nitrogen (N)";
  const zone = isLong ? "Zone 12 — Southeast drainage remediation block" : "Zone 4 — North field";
  const value = isCritical ? "8" : "42";
  const pct = isCritical ? 9 : 58;

  return (
    <div className={cn("space-y-2.5 border border-foreground/15 bg-surface-elevated p-4", className)}>
      <div className={cn("flex items-baseline justify-between gap-3", isLong && "flex-col gap-1")}>
        <span className={cn("text-sm font-medium leading-snug", compact && "text-xs")}>{label}</span>
        <span className="annotation shrink-0 normal-case">{zone}</span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className={cn("font-mono text-2xl", compact && "text-xl", isCritical && "text-oxblood")}>
          {value}
        </span>
        <span className="annotation">ppm</span>
      </div>
      {/* Gauge with ideal-range band */}
      <div className="relative h-1.5 w-full rounded-full bg-foreground/10">
        <span className="absolute left-[35%] top-0 h-full w-[40%] rounded-full bg-sage/25" />
        <span
          className={cn(
            "absolute top-1/2 h-3 w-0.5 -translate-y-1/2 rounded",
            isCritical ? "bg-oxblood" : "bg-sage"
          )}
          style={{ left: `${pct}%` }}
        />
      </div>
      <span
        className={cn(
          "inline-block px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em]",
          isCritical ? "bg-oxblood/10 text-oxblood" : "bg-sage/10 text-sage"
        )}
      >
        {isCritical ? "Below range — action needed" : "Within ideal range"}
      </span>
    </div>
  );
};
