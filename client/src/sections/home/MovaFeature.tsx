import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getFlagship } from "@/data/flagships";
import { Annotation } from "@/components/system/Annotation";
import { useMotionPreference } from "@/lib/useMotionPreference";
import { easeEditorial } from "@/lib/motion";
import { FeatureShell } from "./FeatureShell";

const evidence = [
  { label: "Course", value: "Data Structures — done" },
  { label: "Work", value: "Mobile intern — Kahani" },
  { label: "Project", value: "RAG document explorer" },
  { label: "Skill", value: "TypeScript · React" },
];

/* Branch geometry in a 640×420 viewBox. The origin sits at the resume artifact. */
const faintPaths = [
  "M 24 210 C 140 210, 180 80, 320 72",
  "M 24 210 C 150 210, 190 340, 330 352",
  "M 24 210 C 130 210, 200 150, 316 148",
];
const mainPath = "M 24 210 C 160 210, 220 250, 340 252 S 500 224, 566 220";

const nodes = [
  { x: 320, y: 72, label: "Data Analyst", faded: true },
  { x: 316, y: 148, label: "UX Engineer", faded: true },
  { x: 330, y: 352, label: "ML Engineer", faded: true },
  { x: 340, y: 252, label: "Full-stack Developer", faded: false },
  { x: 566, y: 220, label: "Product Engineer", main: true, faded: false },
];

/**
 * MOVA — experience → possibilities → path.
 * Thin ink lines branch out of a student's real evidence; one trajectory
 * gains weight and color. Drawn on scroll; fully drawn for reduced motion.
 */
export const MovaFeature = () => {
  const flagship = getFlagship("mova")!;
  const { reduceMotion } = useMotionPreference();

  const draw = (delay: number, duration = 1.4) =>
    reduceMotion
      ? {}
      : {
          initial: { pathLength: 0 },
          whileInView: { pathLength: 1 },
          viewport: { once: true, margin: "-100px" },
          transition: { delay, duration, ease: easeEditorial },
        };

  const appear = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, scale: 0.96 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, margin: "-100px" },
          transition: { delay, duration: 0.5, ease: easeEditorial },
        };

  return (
    <FeatureShell
      flagship={flagship}
      index={3}
      srNarrative="A student's existing evidence — a completed course, an internship, a project, a skill — sits at the left. Thin lines branch rightward into possible roles: data analyst, UX engineer, ML engineer. One path gains weight and color, leading through full-stack developer to product engineer. The model proposes the paths; the student decides."
    >
      <div className="grid-col grid items-center gap-10 lg:grid-cols-12">
        {/* The evidence artifact */}
        <motion.div {...appear(0)} className="space-y-0 lg:col-span-3">
          <div className="border border-foreground/15 bg-surface-elevated">
            <div className="border-b border-foreground/10 px-4 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-dusty">
                Your evidence
              </span>
            </div>
            <ul>
              {evidence.map((e) => (
                <li
                  key={e.value}
                  className="grid grid-cols-[64px_1fr] gap-2 border-b border-foreground/10 px-4 py-3 last:border-b-0"
                >
                  <span className="annotation">{e.label}</span>
                  <span className="text-xs leading-snug">{e.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <Annotation accent="dusty" className="mt-4">
            Not a search box asking where you want to go — a reading of where you already are.
          </Annotation>
        </motion.div>

        {/* The branching field */}
        <div className="relative lg:col-span-9" aria-hidden>
          <svg viewBox="0 0 640 420" className="w-full" role="presentation">
            {faintPaths.map((d, i) => (
              <motion.path
                key={d}
                d={d}
                fill="none"
                stroke="hsl(var(--foreground) / 0.25)"
                strokeWidth={1}
                {...draw(0.2 + i * 0.15, 1.1)}
              />
            ))}
            <motion.path
              d={mainPath}
              fill="none"
              stroke="hsl(var(--dusty))"
              strokeWidth={2.5}
              {...draw(0.6, 1.6)}
            />
            {nodes.map((n) => (
              <motion.circle
                key={n.label}
                cx={n.x}
                cy={n.y}
                r={n.main ? 6 : 4}
                fill={n.main ? "hsl(var(--dusty))" : "hsl(var(--background))"}
                stroke={n.faded ? "hsl(var(--foreground) / 0.3)" : "hsl(var(--dusty))"}
                strokeWidth={1.5}
                {...appear(n.main ? 2 : 1.2)}
              />
            ))}
          </svg>

          {/* Node labels */}
          {nodes.map((n) => (
            <motion.span
              key={n.label}
              {...appear(n.main ? 2.1 : 1.3)}
              className={cn(
                "absolute -translate-x-1/2 whitespace-nowrap border bg-background px-2 py-1 font-mono text-[10px] tracking-[0.04em]",
                n.main
                  ? "border-dusty font-medium text-dusty"
                  : n.faded
                    ? "border-foreground/15 text-muted-foreground"
                    : "border-foreground/30 text-foreground/80"
              )}
              style={{
                left: `${(n.x / 640) * 100}%`,
                top: `calc(${(n.y / 420) * 100}% + 12px)`,
              }}
            >
              {n.label}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="grid-col mt-10 grid gap-4 md:grid-cols-2">
        <Annotation kind="decision" accent="dusty" className="max-w-none">
          The model proposes; the student decides. AI ranks the next moves — it never picks the
          destination.
        </Annotation>
        <Annotation accent="dusty" className="max-w-none">
          Every suggestion traces back to real evidence: courses, projects, internships — never a
          personality type.
        </Annotation>
      </div>
    </FeatureShell>
  );
};
