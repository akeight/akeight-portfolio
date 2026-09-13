import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { getFlagship } from "@/data/flagships";
import { Annotation } from "@/components/system/Annotation";
import { useMotionPreference } from "@/lib/useMotionPreference";
import { FeatureShell } from "../FeatureShell";
import { Phone, IntroScreen, CalibrationScreen, DiscoverScreen, TuesdayScreen } from "./ScoutScreens";

const beats = [
  {
    kicker: "The thesis",
    line: "Don't choose the major first. Experience the work first.",
    note: "Traditional tools start with course catalogs and aptitude tests. Scout starts with what the work actually feels like.",
    kind: undefined as undefined | "decision" | "constraint",
  },
  {
    kicker: "Calibration",
    line: "Reactions instead of a career quiz.",
    note: "A ten-second gut reaction tells you more about an 18-year-old than a forty-question assessment.",
    kind: "decision" as const,
  },
  {
    kicker: "Discover",
    line: "People before majors.",
    note: "You don't meet 'Human-Computer Interaction.' You meet Maya, who does it for a living.",
    kind: "decision" as const,
  },
  {
    kicker: "The experience",
    line: "A Tuesday you can try on.",
    note: "Designed and engineered in ~150 minutes. React Native / Expo.",
    kind: "constraint" as const,
  },
];

const screens: { node: ReactNode; x: string; rotate: number }[] = [
  { node: <IntroScreen />, x: "-135%", rotate: -7 },
  { node: <CalibrationScreen />, x: "-45%", rotate: -2.5 },
  { node: <DiscoverScreen />, x: "45%", rotate: 2.5 },
  { node: <TuesdayScreen />, x: "135%", rotate: 7 },
];

/** Window for beat i in scroll progress [0..1]. */
const win = (i: number) => ({ start: i * 0.25, end: (i + 1) * 0.25 });

const ScreenLayer = ({
  progress,
  i,
  children,
  x,
  rotate,
}: {
  progress: MotionValue<number>;
  i: number;
  children: ReactNode;
  x: string;
  rotate: number;
}) => {
  const { start, end } = win(i);
  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.08), start + 0.02, end, Math.min(1, end + 0.1)],
    [i === 0 ? 1 : 0.45, 1, 1, 0.5]
  );
  const scale = useTransform(
    progress,
    [Math.max(0, start - 0.08), start + 0.02, end, Math.min(1, end + 0.1)],
    [i === 0 ? 1 : 0.93, 1, 1, 0.95]
  );
  const y = useTransform(
    progress,
    [Math.max(0, start - 0.08), start + 0.02, end, Math.min(1, end + 0.1)],
    [i === 0 ? 0 : 36, 0, 0, -22]
  );

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        opacity,
        scale,
        y,
        x: `calc(-50% + ${x})`,
        translateY: "-50%",
        rotate,
        zIndex: i,
      }}
    >
      {children}
    </motion.div>
  );
};

const CaptionLayer = ({
  progress,
  i,
}: {
  progress: MotionValue<number>;
  i: number;
}) => {
  const { start, end } = win(i);
  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.03), start + 0.04, end - 0.04, Math.min(1, end + 0.03)],
    [i === 0 ? 1 : 0, 1, 1, i === beats.length - 1 ? 1 : 0]
  );
  const y = useTransform(
    progress,
    [Math.max(0, start - 0.03), start + 0.04],
    [i === 0 ? 0 : 14, 0]
  );
  const beat = beats[i];

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 space-y-4">
      <span className="annotation text-ochre">{beat.kicker}</span>
      <p className="font-serif text-2xl italic leading-snug tracking-tight lg:text-3xl">{beat.line}</p>
      <Annotation kind={beat.kind} accent="ochre">
        {beat.note}
      </Annotation>
    </motion.div>
  );
};

/** The pinned desktop sequence — reaction → person → experience. */
const PinnedSequence = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} className="relative h-[320vh]" aria-hidden>
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-hidden">
        <div className="grid-col grid w-full grid-cols-12 gap-8">
          {/* Narrative column */}
          <div className="relative col-span-4 h-64 self-center">
            {beats.map((_, i) => (
              <CaptionLayer key={i} progress={scrollYProgress} i={i} />
            ))}
          </div>
          {/* Stage */}
          <div className="relative col-span-8 h-[calc(100vh-8rem)] max-h-[640px] self-center">
            {screens.map((s, i) => (
              <ScreenLayer key={i} progress={scrollYProgress} i={i} x={s.x} rotate={s.rotate}>
                <Phone>{s.node}</Phone>
              </ScreenLayer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/** Static / mobile composition — the same story as an authored sequence. */
const StaticSequence = () => (
  <div className="grid-col">
    <div className="-mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-14 md:overflow-visible md:px-0 xl:grid-cols-4">
      {screens.map((s, i) => (
        <div key={i} className="w-[240px] shrink-0 snap-center space-y-5 md:w-auto">
          <Phone className="mx-auto" >{s.node}</Phone>
          <div className="space-y-2">
            <span className="annotation text-ochre">{beats[i].kicker}</span>
            <p className="font-serif text-lg italic leading-snug tracking-tight">{beats[i].line}</p>
            <Annotation kind={beats[i].kind} accent="ochre" className="max-w-full">
              {beats[i].note}
            </Annotation>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ScoutFeature = () => {
  const flagship = getFlagship("scout-society")!;
  const { reduceMotion } = useMotionPreference();

  return (
    <FeatureShell
      flagship={flagship}
      index={1}
      srNarrative="A sequence of four recreated app screens tells Scout's story: an intro stating the thesis, a calibration screen collecting gut reactions instead of quiz answers, a discovery screen introducing Maya — a real UX researcher — and finally Maya's Tuesday, an hour-by-hour experience of her working day that a student can try on and save to a shortlist."
    >
      {reduceMotion ? (
        <StaticSequence />
      ) : (
        <>
          <div className="hidden lg:block">
            <PinnedSequence />
          </div>
          <div className="lg:hidden">
            <StaticSequence />
          </div>
        </>
      )}
    </FeatureShell>
  );
};
