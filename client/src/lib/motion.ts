import type { Variants, Transition } from 'framer-motion';

/** Shared editorial easing — a refined ease-out curve. */
export const easeEditorial: Transition['ease'] = [0.22, 1, 0.36, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeEditorial },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeEditorial } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Default viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, margin: '-80px' } as const;
