import { motion } from "framer-motion";
import { getFlagship } from "@/data/flagships";
import { Annotation } from "@/components/system/Annotation";
import { IrisCard, type IrisState } from "@/components/iris/IrisCard";
import { useMotionPreference } from "@/lib/useMotionPreference";
import { easeEditorial } from "@/lib/motion";
import { FeatureShell } from "./FeatureShell";

const cells: { state: IrisState; caption: string }[] = [
  { state: "loading", caption: "Loading — data arrives late" },
  { state: "empty", caption: "Empty — no sample yet" },
  { state: "critical", caption: "Critical — reading below range" },
  { state: "long-labels", caption: "Long labels — real chemistry names" },
  { state: "compact", caption: "Compact — tablet & mobile" },
];

/**
 * Todd Iris — design intent → dynamic production system.
 * One pristine screen multiplies into a specimen sheet of the same
 * component under real conditions. Restrained motion; the matrix is the argument.
 */
export const ToddIrisFeature = () => {
  const flagship = getFlagship("todd-iris")!;
  const { reduceMotion } = useMotionPreference();

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { delay, duration: 0.55, ease: easeEditorial },
        };

  return (
    <FeatureShell
      flagship={flagship}
      index={5}
      srNarrative="A single ideal dashboard card — a soil-mineral reading with its value inside the ideal range — multiplies into a grid of the same component under real production conditions: loading skeletons, an empty zone with no sample, a critical below-range reading, extreme label lengths, and compact tablet sizing. The design showed one state; production had to answer every other one."
    >
      <div className="grid-col space-y-12">
        {/* Beat 1 — the design */}
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div {...reveal(0)} className="lg:col-span-4">
            <IrisCard state="ideal" className="max-w-sm shadow-md" />
            <p className="caption mt-3 px-1">
              <span className="uppercase text-sage">The design</span> — one viewport, one dataset,
              one ideal condition.
            </p>
          </motion.div>
          <motion.div {...reveal(0.15)} className="space-y-5 lg:col-span-8">
            <p className="font-serif text-2xl italic leading-snug tracking-tight lg:text-3xl">
              The design showed one state. Production had to answer every other one.
            </p>
            <Annotation kind="credit" accent="sage">
              Creative direction: Vincent and Todd&rsquo;s brand collaborators. My work is the
              system that carries it — states, data, breakpoints, behavior.
            </Annotation>
          </motion.div>
        </div>

        {/* Beat 2 — the states production actually produces */}
        <div>
          <motion.p {...reveal(0)} className="annotation mb-5 text-sage">
            The same component, under real conditions
          </motion.p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {cells.map((cell, i) => (
              <motion.figure key={cell.state} {...reveal(0.08 * i)} className="space-y-2.5">
                <IrisCard state={cell.state} className="h-full" />
                <figcaption className="caption px-1">{cell.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <Annotation kind="note" accent="sage" className="max-w-xl">
          These cards are abstracted recreations — the production UI belongs to Todd. The state
          system, responsive behavior, and implementation are the work.
        </Annotation>
      </div>
    </FeatureShell>
  );
};
