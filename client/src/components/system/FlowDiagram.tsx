import { Fragment } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { accentText, accentBorder, type ProjectAccent } from "@/lib/accents";

export interface FlowStep {
  label: string;
  note?: string;
  emphasis?: boolean;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  accent: ProjectAccent;
  className?: string;
}

/**
 * An annotated flow drawn in the site's own language — ink boxes on paper,
 * mono labels, one accent. Horizontal on desktop, vertical on mobile.
 */
export const FlowDiagram = ({ steps, accent, className }: FlowDiagramProps) => (
  <div
    className={cn(
      "flex flex-col items-stretch gap-2 md:flex-row md:items-start md:gap-3",
      className
    )}
  >
    {steps.map((step, i) => (
      <Fragment key={step.label}>
        <div
          className={cn(
            "flex-1 space-y-1.5 border bg-surface-elevated px-3.5 py-3",
            step.emphasis ? accentBorder[accent] : "border-foreground/15"
          )}
        >
          <p
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.1em]",
              step.emphasis ? cn("font-medium", accentText[accent]) : "text-foreground/80"
            )}
          >
            {step.label}
          </p>
          {step.note && <p className="text-xs leading-snug text-muted-foreground">{step.note}</p>}
        </div>
        {i < steps.length - 1 && (
          <span className="flex shrink-0 items-center justify-center self-center text-muted-foreground">
            <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden />
            <ArrowDown className="h-4 w-4 md:hidden" aria-hidden />
          </span>
        )}
      </Fragment>
    ))}
  </div>
);
