import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { accentBorder, accentText, type ProjectAccent } from "@/lib/accents";

interface DecisionBlockProps {
  n: number;
  title: string;
  chose: ReactNode;
  alternatives?: ReactNode;
  why: ReactNode;
  tradeoff?: ReactNode;
  accent?: ProjectAccent;
  className?: string;
}

const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="grid gap-1.5 md:grid-cols-[140px_1fr] md:gap-6">
    <span className="annotation pt-0.5">{label}</span>
    <p className="text-[0.9375rem] leading-relaxed text-foreground/85">{children}</p>
  </div>
);

/**
 * The repeating structure for key decisions — skimmable decision-to-decision.
 * "What I chose / What else I considered / Why / The tradeoff I accepted."
 */
export const DecisionBlock = ({
  n,
  title,
  chose,
  alternatives,
  why,
  tradeoff,
  accent = "ochre",
  className,
}: DecisionBlockProps) => (
  <section
    className={cn("space-y-5 border-l-2 py-1 pl-6 md:pl-8", accentBorder[accent], className)}
    aria-label={`Decision ${n}: ${title}`}
  >
    <h4 className="flex items-baseline gap-3 text-lg font-semibold tracking-tight">
      <span className={cn("annotation", accentText[accent])}>Decision {String(n).padStart(2, "0")}</span>
      {title}
    </h4>
    <div className="space-y-4">
      <Row label="I chose">{chose}</Row>
      {alternatives && <Row label="Instead of">{alternatives}</Row>}
      <Row label="Because">{why}</Row>
      {tradeoff && <Row label="The tradeoff">{tradeoff}</Row>}
    </div>
  </section>
);
