import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { flagships, caseStudyPath, type Flagship } from "@/data/flagships";
import { accentText, accentBorder, type ProjectAccent } from "@/lib/accents";
import { MetaGrid, type MetaItem } from "@/components/system/MetaGrid";
import { StatusLabel } from "@/components/system/StatusLabel";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { useMotionPreference } from "@/lib/useMotionPreference";
import { easeEditorial } from "@/lib/motion";

interface CaseStudyLayoutProps {
  flagship: Flagship;
  /** The 30-second read: problem, thesis, key decisions, outcome. */
  tldr: { label: string; text: string }[];
  /** Mandatory collaborator-credit slot; "Solo" is a valid, honest value. */
  credit: string;
  children: ReactNode;
}

/** Numbered editorial section — the systematic rhythm all five studies share. */
export const CSSection = ({
  n,
  title,
  accent,
  children,
  width = "prose",
}: {
  n: number;
  title: string;
  accent: ProjectAccent;
  children: ReactNode;
  width?: "prose" | "grid";
}) => (
  <section className={cn("py-10 md:py-14", width === "prose" ? "prose-col" : "grid-col")}>
    <h2 className="mb-6 flex items-baseline gap-3 text-xl font-semibold tracking-tight md:text-2xl">
      <span className={cn("annotation", accentText[accent])}>{String(n).padStart(2, "0")}</span>
      {title}
    </h2>
    <div className="space-y-5 text-[0.9375rem] leading-relaxed text-foreground/85 md:text-base">
      {children}
    </div>
  </section>
);

export const CaseStudyLayout = ({ flagship, tldr, credit, children }: CaseStudyLayoutProps) => {
  const { reduceMotion } = useMotionPreference();
  useDocumentMeta(
    `${flagship.title} — Allyson Keightley`,
    `${flagship.question} ${flagship.thesis}`
  );

  const index = flagships.findIndex((f) => f.slug === flagship.slug);
  const prev = flagships[(index - 1 + flagships.length) % flagships.length];
  const next = flagships[(index + 1) % flagships.length];

  const meta: MetaItem[] = [
    { label: "Role", value: flagship.role },
    { label: "Timeline", value: flagship.year },
    { label: "Status", value: flagship.status },
    { label: "Stack", value: flagship.stack.join(" · ") },
    { label: "Credit", value: credit },
  ];

  return (
    <article className="pb-24">
      {/* Header block */}
      <header className="grid-col pt-16 md:pt-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeEditorial }}
          className="space-y-8"
        >
          <div className="flex flex-wrap items-baseline justify-end gap-4">
            <StatusLabel accent={flagship.accent}>{flagship.status}</StatusLabel>
          </div>

          <h1 className="display text-display">{flagship.title}</h1>

          <p className={cn("thesis max-w-3xl", accentText[flagship.accent])}>
            {flagship.question}
          </p>

          <MetaGrid items={meta} columns={3} />

          {(flagship.links?.demo || flagship.links?.repo) && (
            <div className="flex items-center gap-6 text-sm">
              {flagship.links?.demo && (
                <a
                  href={flagship.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Live product
                </a>
              )}
              {flagship.links?.repo && (
                <a
                  href={flagship.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* TL;DR — the guaranteed 30-second read */}
        <div
          className={cn(
            "mt-12 space-y-4 border-l-2 py-2 pl-6 md:pl-8",
            accentBorder[flagship.accent]
          )}
        >
          <h2 className="annotation">TL;DR</h2>
          <dl className="max-w-3xl space-y-3">
            {tldr.map((item) => (
              <div key={item.label} className="grid gap-1 md:grid-cols-[120px_1fr] md:gap-6">
                <dt className="annotation pt-0.5">{item.label}</dt>
                <dd className="text-[0.9375rem] leading-relaxed text-foreground/85">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* The authored body */}
      <div className="mt-8 md:mt-12">{children}</div>

      {/* Prev / next */}
      <nav className="grid-col mt-16 border-t border-foreground/15 pt-8" aria-label="Case studies">
        <div className="flex items-center justify-between gap-6">
          <Link
            to={caseStudyPath(prev.slug)}
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span>
              <span className="annotation mr-2 hidden sm:inline">Previous</span>
              {prev.title}
            </span>
          </Link>
          <Link
            to={caseStudyPath(next.slug)}
            className="group inline-flex items-center gap-2 text-right text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>
              <span className="annotation mr-2 hidden sm:inline">Next</span>
              {next.title}
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </nav>
    </article>
  );
};
