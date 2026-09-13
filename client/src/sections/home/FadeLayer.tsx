import type { ReactNode } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeLayerProps {
  progress: MotionValue<number>;
  /** Visible window in scroll progress [0..1] */
  start: number;
  end: number;
  /** Stay visible from the very beginning / until the very end */
  holdStart?: boolean;
  holdEnd?: boolean;
  className?: string;
  children: ReactNode;
}

/** A layer that fades in/out within a scroll-progress window. */
export const FadeLayer = ({
  progress,
  start,
  end,
  holdStart = false,
  holdEnd = false,
  className,
  children,
}: FadeLayerProps) => {
  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.03), Math.min(1, start + 0.05), Math.max(0, end - 0.05), Math.min(1, end + 0.03)],
    [holdStart ? 1 : 0, 1, 1, holdEnd ? 1 : 0]
  );
  const y = useTransform(progress, [Math.max(0, start - 0.03), Math.min(1, start + 0.05)], [holdStart ? 0 : 14, 0]);

  return (
    <motion.div style={{ opacity, y }} className={cn(className)}>
      {children}
    </motion.div>
  );
};
