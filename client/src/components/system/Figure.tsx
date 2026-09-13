import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FigureProps {
  /** Figure number within the page, e.g. 3 renders "FIG. 03" */
  n?: number;
  caption?: ReactNode;
  /** The three sanctioned widths */
  width?: "prose" | "grid" | "bleed";
  /** Draw a hairline keyline around the media (for white-on-paper screenshots) */
  keyline?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Every image, video, or diagram is a numbered figure with a mono caption.
 * Three sizes only: prose-width, grid-width, full-bleed.
 */
export const Figure = ({ n, caption, width = "grid", keyline = false, children, className }: FigureProps) => (
  <figure
    className={cn(
      width === "prose" && "prose-col",
      width === "grid" && "grid-col",
      className
    )}
  >
    <div className={cn(keyline && "border border-foreground/15", "overflow-hidden")}>{children}</div>
    {(caption || n !== undefined) && (
      <figcaption className="caption mt-3 flex gap-3 px-1">
        {n !== undefined && (
          <span className="shrink-0 uppercase text-ochre">Fig. {String(n).padStart(2, "0")}</span>
        )}
        <span>{caption}</span>
      </figcaption>
    )}
  </figure>
);
