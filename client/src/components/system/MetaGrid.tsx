import { cn } from "@/lib/utils";

export interface MetaItem {
  label: string;
  value: string;
}

interface MetaGridProps {
  items: MetaItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}

/** Compact mono metadata grid — role, timeline, team, status, stack. */
export const MetaGrid = ({ items, className, columns = 3 }: MetaGridProps) => (
  <dl
    className={cn(
      "grid gap-x-8 gap-y-5 border-y border-foreground/15 py-5",
      columns === 2 && "grid-cols-2",
      columns === 3 && "grid-cols-2 md:grid-cols-3",
      columns === 4 && "grid-cols-2 md:grid-cols-4",
      className
    )}
  >
    {items.map((item) => (
      <div key={item.label} className="space-y-1.5">
        <dt className="annotation">{item.label}</dt>
        <dd className="text-sm leading-snug">{item.value}</dd>
      </div>
    ))}
  </dl>
);
