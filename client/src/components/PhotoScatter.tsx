import { useEffect, useMemo, useRef, type CSSProperties } from 'react';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { photos, type Photo } from '../data/photos';
import { VerticalCutReveal } from './fancy/vertical-cut-reveal';
import { useMediaQuery } from '@/lib/useMediaQuery';
import { useMotionPreference } from '@/lib/useMotionPreference';
import { cn } from '@/lib/utils';

/** Time for one full idle turn of the cluster. */
const ORBIT_PERIOD_MS = 90_000;
/** Extra rotation added across the section's scroll range. */
const SCROLL_TURN = Math.PI * 0.7;
/** Axis tilt, so photos rise and fall as they come around. */
const AXIS_TILT = 0.22;
/*
 * Heights on the sphere, cycled through as photos are placed around it. They
 * stay away from the equator so the orbit keeps clear of the title's two lines.
 */
const ELEVATIONS = [0.63, -0.55, 0.58, -0.63, 0.68, -0.61, 0.5, -0.45];
/** Per-photo distance from the axis, so orbiting photos rarely line up. */
const RADII = [0.86, 0.94, 1.14, 0.92, 1.15, 1.04, 0.9, 1.08];
/** How far the pointer leans the whole cluster, in pixels. */
const POINTER_LEAN = 16;
/** Static card tilts, so the scrapbook feel survives the orbit. */
const TILTS = [-4, 3, -2, 5, -3, 4, -5, 2];

type Metrics = {
  /** Orbit radii, as a share of the stage. */
  rx: number;
  ry: number;
  /** Photo width, as a share of the stage width. */
  photo: number;
};

const DESKTOP: Metrics = { rx: 0.44, ry: 0.36, photo: 0.15 };
const MOBILE: Metrics = { rx: 0.36, ry: 0.46, photo: 0.33 };

type Point = { x: number; y: number; z: number };

/**
 * Photos sit on a sphere, spaced evenly around its vertical axis so they never
 * clump on screen, at alternating heights so the ring reads as a cluster.
 */
const spherePoint = (index: number, total: number): Point => {
  const y = ELEVATIONS[index % ELEVATIONS.length];
  const radius = Math.sqrt(Math.max(0, 1 - y * y)) * RADII[index % RADII.length];
  const theta = (index / total) * Math.PI * 2;
  return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
};

/** Spin a point around the tilted vertical axis and flatten it onto the screen. */
const project = (p: Point, angle: number) => {
  const x = p.x * Math.cos(angle) + p.z * Math.sin(angle);
  const z = p.z * Math.cos(angle) - p.x * Math.sin(angle);
  return {
    x,
    y: p.y * Math.cos(AXIS_TILT) - z * Math.sin(AXIS_TILT),
    /** -1 at the back of the sphere, 1 at the front. */
    depth: p.y * Math.sin(AXIS_TILT) + z * Math.cos(AXIS_TILT),
  };
};

const PhotoCard = ({ photo, tilt }: { photo: Photo; tilt: number }) => (
  <figure
    tabIndex={0}
    className={cn(
      'group relative rounded-xl border border-foreground/10 bg-surface-elevated p-2 shadow-sm outline-none transition-all duration-300',
      // Tilt rides on a custom property so the hover rule can straighten it —
      // an inline rotate would always win the cascade.
      '[rotate:var(--tilt)] hover:[rotate:0deg] focus:[rotate:0deg]',
      'hover:-translate-y-1 hover:shadow-md focus:-translate-y-1 focus:shadow-md',
      'focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
    )}
    style={{ '--tilt': `${tilt}deg` } as CSSProperties}
  >
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      className="aspect-square w-full rounded-lg object-cover"
    />
    <figcaption className="pointer-events-none absolute inset-x-[-20%] top-full pt-2.5 text-center font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
      {photo.caption}
    </figcaption>
  </figure>
);

const ScatterPhoto = ({
  photo,
  index,
  total,
  angle,
  metrics,
  revealed,
  reduceMotion,
}: {
  photo: Photo;
  index: number;
  total: number;
  angle: MotionValue<number>;
  metrics: Metrics;
  revealed: boolean;
  reduceMotion: boolean;
}) => {
  const point = useMemo(() => spherePoint(index, total), [index, total]);
  /** 0 keeps the photo stacked at the center, 1 places it on the orbit. */
  const spread = useSpring(reduceMotion ? 1 : 0, { stiffness: 55, damping: 18 });

  useEffect(() => {
    if (!revealed) return;
    if (reduceMotion) {
      spread.jump(1);
      return;
    }
    const id = window.setTimeout(() => spread.set(1), index * 70);
    return () => window.clearTimeout(id);
  }, [revealed, reduceMotion, index, spread]);

  // Offsets are percentages of the stage-sized layer, so the composition scales
  // with the section instead of needing pixel measurements.
  const x = useTransform(
    () => `${project(point, angle.get()).x * metrics.rx * spread.get() * 100}%`
  );
  const y = useTransform(
    () => `${project(point, angle.get()).y * metrics.ry * spread.get() * 100}%`
  );
  const zIndex = useTransform(() => Math.round(50 + project(point, angle.get()).depth * 40));
  const opacity = useTransform(() => {
    const { depth } = project(point, angle.get());
    return (0.42 + 0.58 * ((depth + 1) / 2)) * Math.min(1, spread.get() * 1.5);
  });

  return (
    <motion.div className="pointer-events-none absolute inset-0" style={{ x, y, zIndex }}>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: `${metrics.photo * 100}%` }}
      >
        <motion.div className="pointer-events-auto" style={{ opacity }}>
          <PhotoCard photo={photo} tilt={TILTS[index % TILTS.length]} />
        </motion.div>
      </div>
    </motion.div>
  );
};

/**
 * Photos orbit a centered heading on a slowly turning sphere: they fade and fall
 * behind the title as they pass around the back, and scrolling spins the cluster
 * a little faster.
 */
export const PhotoScatter = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { reduceMotion } = useMotionPreference();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const metrics = isMobile ? MOBILE : DESKTOP;

  const inView = useInView(sectionRef, { margin: '10% 0px' });
  const revealed = useInView(sectionRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const angle = useMotionValue(0);
  const idleTurn = useRef(0);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || !inView) return;
    idleTurn.current += (delta / ORBIT_PERIOD_MS) * Math.PI * 2;
    angle.set(idleTurn.current + scrollYProgress.get() * SCROLL_TURN);
  });

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const leanX = useSpring(useTransform(pointerX, (v) => v * POINTER_LEAN), {
    stiffness: 60,
    damping: 18,
  });
  const leanY = useSpring(useTransform(pointerY, (v) => v * POINTER_LEAN), {
    stiffness: 60,
    damping: 18,
  });

  useEffect(() => {
    if (reduceMotion) return;
    const handle = (e: MouseEvent) => {
      pointerX.set(e.clientX / window.innerWidth - 0.5);
      pointerY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-32">
      <div className="relative mx-auto h-[min(200vw,800px)] w-full max-w-[1400px] md:h-[min(82vh,860px)] md:min-h-[620px]">
        {/* Above every photo z-index, so the orbit never hides the title. */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-[100] flex -translate-y-1/2 flex-col items-center gap-4 px-6 text-center md:gap-5">
          {/* Two nowrap lines rather than one wrapping heading: the reveal spans
              are flex containers, so wrapped lines would not center. */}
          <h2 className="font-serif text-[clamp(2.5rem,7.5vw,6rem)] font-normal leading-[0.95] tracking-[-0.03em]">
            <span className="block">
              <VerticalCutReveal text="Beyond the" nowrap />
            </span>
            <span className="block">
              <VerticalCutReveal text="screen." staggerDuration={0.04} nowrap />
            </span>
          </h2>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0"
          style={reduceMotion ? undefined : { x: leanX, y: leanY }}
        >
          {photos.map((photo, i) => (
            <ScatterPhoto
              key={photo.src}
              photo={photo}
              index={i}
              total={photos.length}
              angle={angle}
              metrics={metrics}
              revealed={revealed}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
