import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface StateCell {
  caption: string;
  children: ReactNode;
}

interface StateMatrixProps {
  cells: StateCell[];
  className?: string;
  columns?: 2 | 3;
}

/**
 * A specimen sheet: one component under every condition production produces.
 * Each cell is captioned in mono like a labeled specimen.
 */
export const StateMatrix = ({ cells, className, columns = 3 }: StateMatrixProps) => (
  <div
    className={cn(
      "grid gap-5",
      columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
      className
    )}
  >
    {cells.map((cell) => (
      <figure key={cell.caption} className="flex flex-col gap-2.5">
        <div className="flex-1">{cell.children}</div>
        <figcaption className="caption px-1">{cell.caption}</figcaption>
      </figure>
    ))}
  </div>
);
