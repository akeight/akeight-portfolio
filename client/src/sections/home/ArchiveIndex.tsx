import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { archiveProjects } from "@/data/archive";

/**
 * Section 10 — the quiet archive teaser. Honest hierarchy:
 * she chose what not to feature, and that editing is visible.
 */
export const ArchiveIndex = () => (
  <section className="grid-col py-16 md:py-20" aria-label="More things I've built">
    <div className="mb-8 flex items-baseline justify-between">
      <span className="eyebrow">More things I&rsquo;ve built</span>
      <Link
        to="/work"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Everything
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>

    <ul className="border-t border-foreground/15">
      {archiveProjects.slice(0, 5).map((p) => {
        const href = p.links?.demo || p.links?.repo;
        const inner = (
          <>
            <span className="font-medium tracking-tight">{p.title}</span>
            <span className="hidden max-w-xl text-sm text-muted-foreground md:block">
              {p.description}
            </span>
            <span className="annotation md:text-right">{p.year}</span>
          </>
        );
        return (
          <li key={p.slug}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-foreground/10 py-4 transition-colors hover:bg-surface-elevated md:grid-cols-[220px_1fr_auto]"
              >
                {inner}
              </a>
            ) : (
              <div className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-foreground/10 py-4 md:grid-cols-[220px_1fr_auto]">
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </section>
);
