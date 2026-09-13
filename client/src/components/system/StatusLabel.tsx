import { cn } from "@/lib/utils";
import { accentText, type ProjectAccent } from "@/lib/accents";

interface StatusLabelProps {
  /** Controlled status vocabulary, e.g. "Prototype · 150 min", "Shipped · Live" */
  children: string;
  accent?: ProjectAccent;
  className?: string;
}

/**
 * The honest-attribution device: tells the reviewer exactly what kind of
 * claim a project makes before they click.
 */
export const StatusLabel = ({ children, accent, className }: StatusLabelProps) => (
  <span
    className={cn(
      "annotation whitespace-nowrap",
      accent ? accentText[accent] : "text-muted-foreground",
      className
    )}
  >
    {children}
  </span>
);
