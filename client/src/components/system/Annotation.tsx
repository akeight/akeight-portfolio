import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { accentText, type ProjectAccent } from "@/lib/accents";

type AnnotationKind =
  | "note"
  | "constraint"
  | "decision"
  | "credit"
  | "not-done"
  | "implementation";

const kindLabel: Record<AnnotationKind, string> = {
  note: "Note",
  constraint: "Constraint",
  decision: "Decision",
  credit: "Credit",
  "not-done": "Not done",
  implementation: "Implementation",
};

interface AnnotationProps {
  kind?: AnnotationKind;
  accent?: ProjectAccent;
  children: ReactNode;
  className?: string;
}

/**
 * The mono margin-note voice used site-wide:
 * `CONSTRAINT — 150-minute timebox` · `CREDIT — creative direction: Vincent`
 */
export const Annotation = ({ kind, accent = "ochre", children, className }: AnnotationProps) => (
  <p className={cn("annotation max-w-[38ch]", className)}>
    {kind && (
      <span className={cn("font-medium", accentText[accent])}>
        {kindLabel[kind]}
        {" — "}
      </span>
    )}
    <span className="normal-case tracking-[0.04em]">{children}</span>
  </p>
);
