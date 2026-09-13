import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Flagship } from "@/data/flagships";
import { caseStudyPath } from "@/data/flagships";
import { accentText } from "@/lib/accents";
import { StatusLabel } from "@/components/system/StatusLabel";

interface FeatureShellProps {
  flagship: Flagship;
  index: number;
  /** Screen-reader narrative for the visual sequence. */
  srNarrative: string;
  children: ReactNode;
  className?: string;
}

/**
 * The systematic skeleton every feature moment shares:
 * mono index + name eyebrow → serif thesis → staged composition (children)
 * → metadata → case-study link. Everything between the bones is project-specific.
 */
export const FeatureShell = ({ flagship, index, srNarrative, children, className }: FeatureShellProps) => (
  <section
    id={`feature-${flagship.slug}`}
    className={cn("scroll-mt-20 py-16 outline-none md:py-24", className)}
    aria-label={`${flagship.title} — featured project`}
  >
    {/* Header bones */}
    <div className="grid-col mb-10 space-y-6 md:mb-14">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <span className="eyebrow">
          <span className={cn("font-medium", accentText[flagship.accent])}>
            {String(index).padStart(2, "0")}
          </span>
          {flagship.title}
        </span>
        <StatusLabel accent={flagship.accent}>{flagship.status}</StatusLabel>
      </div>
      <h3 className="display max-w-4xl text-display-sm">{flagship.question}</h3>
    </div>

    {/* Screen-reader narrative for the visual staging */}
    <p className="sr-only">{srNarrative}</p>

    {/* The project-specific composition */}
    {children}

    {/* Footer bones */}
    <div className="grid-col mt-10 flex flex-wrap items-center justify-between gap-6 md:mt-14">
      <p className="annotation">
        {flagship.role} · {flagship.stack.slice(0, 4).join(" · ")}
      </p>
      <Link
        to={caseStudyPath(flagship.slug)}
        className="group inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
      >
        Read the case study
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  </section>
);
