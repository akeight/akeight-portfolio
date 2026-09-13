import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveStripProps {
  /** Render the component for a given simulated width label. */
  render: (width: string) => ReactNode;
  widths?: string[];
  className?: string;
}

/**
 * The same view at three breakpoints, side by side — proof that responsive
 * behavior is recomposed, not merely shrunk.
 */
export const ResponsiveStrip = ({
  render,
  widths = ["Desktop · 1120px", "Tablet · 768px", "Mobile · 360px"],
  className,
}: ResponsiveStripProps) => (
  <div className={cn("grid items-start gap-6 md:grid-cols-3", className)}>
    {widths.map((w, i) => (
      <figure key={w} className="space-y-2.5">
        <div className={cn("mx-auto", i === 1 && "max-w-[300px]", i === 2 && "max-w-[220px]")}>
          {render(w)}
        </div>
        <figcaption className="caption text-center">{w}</figcaption>
      </figure>
    ))}
  </div>
);
