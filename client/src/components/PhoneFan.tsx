import { motion } from 'framer-motion';
import { easeEditorial } from '@/lib/motion';
import { useMotionPreference } from '@/lib/useMotionPreference';

export type PhoneFanScreen = { src: string; alt: string };

/** Horizontal step between adjacent phones, in % of phone width. */
const STEP_X = 90;
/** Rotation per step away from center, in degrees. */
const STEP_ROTATE = 4.5;

/**
 * Fanned deck of portrait app screens, centered on the card's media area.
 * Phones spread out from the center on first reveal; reduced-motion users
 * get the same composition without the entrance animation.
 */
export const PhoneFan = ({ screens }: { screens: PhoneFanScreen[] }) => {
  const { reduceMotion } = useMotionPreference();
  const mid = (screens.length - 1) / 2;

  return (
    <div className="relative h-full w-full">
      {screens.map((screen, i) => {
        const step = i - mid;
        const x = step * STEP_X;
        const rotate = step * STEP_ROTATE;

        const frame = (
          <div className="h-full rounded-[1.6rem] border border-foreground/15 bg-foreground/90 p-1.5 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
            <img
              src={screen.src}
              alt={screen.alt}
              loading="lazy"
              className="h-full w-auto rounded-[1.15rem] object-cover"
            />
          </div>
        );

        return (
          <div
            key={screen.src}
            className="absolute left-1/2 top-1/2 h-[70%] sm:h-[80%]"
            style={{ transform: `translate(calc(-50% + ${x}%), -50%)`, zIndex: i }}
          >
            {reduceMotion ? (
              <div className="h-full" style={{ transform: `rotate(${rotate}deg)` }}>
                {frame}
              </div>
            ) : (
              <motion.div
                className="h-full"
                initial={{ opacity: 0, x: `${-x}%`, y: 24, rotate: 0 }}
                whileInView={{ opacity: 1, x: '0%', y: 0, rotate }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: easeEditorial }}
              >
                {frame}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};
