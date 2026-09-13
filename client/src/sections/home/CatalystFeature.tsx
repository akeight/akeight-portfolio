import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { getFlagship } from "@/data/flagships";
import { Annotation } from "@/components/system/Annotation";
import { useMotionPreference } from "@/lib/useMotionPreference";
import { FeatureShell } from "./FeatureShell";
import { FadeLayer } from "./FadeLayer";

const columns = ["Discovery", "Applied", "Interview", "Offer"] as const;

type Artifact = {
  text: string;
  mono?: boolean;
  /** Scattered position (percent of stage) + rotation */
  scatter: { x: number; y: number; r: number };
  /** Column index and row it lands in */
  col: number;
  row: number;
};

const artifacts: Artifact[] = [
  { text: "23 tabs open", mono: true, scatter: { x: 8, y: 6, r: -8 }, col: 0, row: 0 },
  { text: "SWE Intern — LinkedIn", scatter: { x: 55, y: 2, r: 5 }, col: 0, row: 1 },
  { text: "tracker_v3.xlsx", mono: true, scatter: { x: 80, y: 18, r: 9 }, col: 1, row: 0 },
  { text: "Applied 09/14 — no reply", scatter: { x: 20, y: 38, r: -5 }, col: 1, row: 1 },
  { text: "follow up??", mono: true, scatter: { x: 62, y: 45, r: -10 }, col: 2, row: 0 },
  { text: "Interview Tue · 2:00 PM", scatter: { x: 38, y: 66, r: 7 }, col: 2, row: 1 },
  { text: "glassdoor-notes.docx", mono: true, scatter: { x: 6, y: 74, r: 6 }, col: 2, row: 2 },
  { text: "Offer deadline: Oct 15", scatter: { x: 74, y: 78, r: -6 }, col: 3, row: 0 },
];

const target = (a: Artifact) => ({
  x: a.col * 25 + 2.5, // percent
  y: 22 + a.row * 17,
});

const Chip = ({ a, className }: { a: Artifact; className?: string }) => (
  <span
    className={cn(
      "inline-block whitespace-nowrap border border-foreground/15 bg-background px-2.5 py-1.5 text-[11px] shadow-sm",
      a.mono && "font-mono text-[10px]",
      className
    )}
  >
    {a.text}
  </span>
);

const ArtifactLayer = ({ progress, a }: { progress: MotionValue<number>; a: Artifact }) => {
  const t = target(a);
  const x = useTransform(progress, [0.12, 0.62], [`${a.scatter.x}%`, `${t.x}%`]);
  const y = useTransform(progress, [0.12, 0.62], [`${a.scatter.y}%`, `${t.y}%`]);
  const rotate = useTransform(progress, [0.12, 0.62], [a.scatter.r, 0]);

  return (
    <motion.div className="absolute w-[22%]" style={{ left: x, top: y, rotate }}>
      <Chip a={a} className="max-w-full overflow-hidden text-ellipsis" />
    </motion.div>
  );
};

const beats = [
  {
    start: 0,
    end: 0.3,
    holdStart: true,
    kicker: "The problem",
    line: "An internship search fragments across tabs, spreadsheets, and memory.",
    note: "Job boards, deadlines, statuses, interview notes — none of it lives together.",
  },
  {
    start: 0.34,
    end: 0.62,
    kicker: "The thesis",
    line: "What if the whole journey lived in one workspace?",
    note: "Discovery → application → interview → offer, as one system.",
  },
  {
    start: 0.66,
    end: 1,
    holdEnd: true,
    kicker: "The system",
    line: "A pipeline, not a to-do list.",
    note: "Six relational Prisma models under one workflow — statuses, saved roles, favorites, and what comes next.",
  },
];

const PinnedAssembly = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const frameOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <div ref={ref} className="relative h-[240vh]" aria-hidden>
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-hidden">
        <div className="grid-col grid w-full grid-cols-12 gap-8">
          {/* Narrative */}
          <div className="relative col-span-4 h-56 self-center">
            {beats.map((b) => (
              <FadeLayer
                key={b.kicker}
                progress={scrollYProgress}
                start={b.start}
                end={b.end}
                holdStart={b.holdStart}
                holdEnd={b.holdEnd}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 space-y-4"
              >
                <span className="annotation text-plum">{b.kicker}</span>
                <p className="font-serif text-2xl italic leading-snug tracking-tight lg:text-3xl">
                  {b.line}
                </p>
                <Annotation accent="plum">{b.note}</Annotation>
              </FadeLayer>
            ))}
          </div>

          {/* Stage */}
          <div className="relative col-span-8 h-[70vh] max-h-[560px] self-center">
            {/* Workspace frame + column headers, resolving in */}
            <motion.div
              style={{ opacity: frameOpacity }}
              className="absolute inset-0 overflow-hidden border border-foreground/15 bg-surface-elevated/60"
            >
              <div className="flex items-center gap-1.5 border-b border-foreground/10 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-foreground/15" />
                <span className="h-2 w-2 rounded-full bg-foreground/15" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Catalyst — workspace
                </span>
              </div>
              <div className="grid h-full grid-cols-4">
                {columns.map((c) => (
                  <div key={c} className="border-r border-foreground/10 px-3 pt-3 last:border-r-0">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-plum">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The artifacts, converging */}
            {artifacts.map((a) => (
              <ArtifactLayer key={a.text} progress={scrollYProgress} a={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/** Static / mobile: the chaos and the system, side by side. */
const StaticAssembly = () => (
  <div className="grid-col space-y-10">
    <div className="grid gap-8 md:grid-cols-[1fr_auto_1.2fr] md:items-center">
      {/* Scatter */}
      <div className="relative h-56">
        {artifacts.slice(0, 6).map((a) => (
          <div
            key={a.text}
            className="absolute"
            style={{ left: `${a.scatter.x}%`, top: `${a.scatter.y}%`, transform: `rotate(${a.scatter.r}deg)` }}
          >
            <Chip a={a} />
          </div>
        ))}
      </div>
      <span className="annotation hidden text-center md:block">→</span>
      {/* Organized */}
      <div className="border border-foreground/15 bg-surface-elevated/60">
        <div className="border-b border-foreground/10 px-4 py-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Catalyst — workspace
          </span>
        </div>
        <div className="grid grid-cols-2 gap-px sm:grid-cols-4">
          {columns.map((c, ci) => (
            <div key={c} className="space-y-2 px-3 py-3">
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-plum">
                {c}
              </span>
              {artifacts
                .filter((a) => a.col === ci)
                .map((a) => (
                  <Chip key={a.text} a={a} className="block whitespace-normal" />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="max-w-2xl space-y-3">
      <p className="font-serif text-xl italic leading-snug tracking-tight md:text-2xl">
        What if the whole journey lived in one workspace?
      </p>
      <Annotation accent="plum">
        Six relational Prisma models under one workflow — discovery, application, interview, offer.
      </Annotation>
    </div>
  </div>
);

export const CatalystFeature = () => {
  const flagship = getFlagship("catalyst")!;
  const { reduceMotion } = useMotionPreference();

  return (
    <FeatureShell
      flagship={flagship}
      index={2}
      srNarrative="Scattered fragments of a job search — open tabs, a spreadsheet, an unanswered application, interview notes, an offer deadline — organize themselves into the four columns of the Catalyst workspace: discovery, applied, interview, offer. The composition explains why the product exists: a fragmented workflow becoming one coherent system."
      className="bg-surface-elevated/40"
    >
      {reduceMotion ? (
        <StaticAssembly />
      ) : (
        <>
          <div className="hidden lg:block">
            <PinnedAssembly />
          </div>
          <div className="lg:hidden">
            <StaticAssembly />
          </div>
        </>
      )}
    </FeatureShell>
  );
};
