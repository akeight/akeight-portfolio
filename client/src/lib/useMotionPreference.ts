import { useReducedMotion } from "framer-motion";

/**
 * Single source of truth for motion preference across the site.
 * Every animated component consumes this hook; reduced-motion users
 * get the designed static composition, not a broken sequence.
 */
export const useMotionPreference = () => {
  const prefersReduced = useReducedMotion();
  return { reduceMotion: !!prefersReduced };
};
