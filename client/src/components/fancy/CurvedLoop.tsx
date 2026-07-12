import { useEffect, useId, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import './CurvedLoop.css';

interface CurvedLoopSegment {
  text: string;
  className?: string;
}

interface CurvedLoopProps {
  marqueeText?: string;
  segments?: CurvedLoopSegment[];
  speed?: number;
  className?: string;
  curveAmount?: number;
  curveType?: 'arc' | 'wave';
  direction?: 'left' | 'right';
  interactive?: boolean;
}

const CurvedLoop = ({
  marqueeText = '',
  segments,
  speed = 2,
  className,
  curveAmount = 400,
  curveType = 'wave',
  direction = 'left',
  interactive = true,
}: CurvedLoopProps) => {
  const prefersReducedMotion = useReducedMotion();
  const baseSegments = useMemo<CurvedLoopSegment[]>(() => {
    if (segments?.length) {
      const normalized = segments.map((segment) => ({ ...segment }));
      const last = normalized[normalized.length - 1];
      if (last && !/\s|\u00A0$/.test(last.text)) {
        normalized[normalized.length - 1] = { ...last, text: `${last.text}\u00A0` };
      }
      return normalized;
    }

    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    const text = (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
    return [{ text }];
  }, [marqueeText, segments]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);

  const uid = useId().replace(/:/g, '');
  const pathId = `curve-${uid}`;
  const pathD =
    curveType === 'wave'
      ? `M-100,60 C340,${60 - curveAmount} 980,${60 + curveAmount} 1540,60`
      : `M-100,60 Q720,${60 + curveAmount} 1540,60`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<'left' | 'right'>(direction);
  const velRef = useRef(0);

  const repeatCount = spacing ? Math.ceil(1800 / spacing) + 2 : 1;
  const ready = spacing > 0;

  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [baseSegments, className]);

  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    const initial = -spacing;
    textPathRef.current.setAttribute('startOffset', `${initial}px`);
    setOffset(initial);
  }, [spacing]);

  useEffect(() => {
    if (!spacing || !ready || prefersReducedMotion || speed === 0) return;
    let frame = 0;

    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === 'right' ? speed : -speed;
        const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
        let newOffset = currentOffset + delta;

        if (newOffset <= -spacing) newOffset += spacing;
        if (newOffset > 0) newOffset -= spacing;

        textPathRef.current.setAttribute('startOffset', `${newOffset}px`);
        setOffset(newOffset);
      }
      frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [prefersReducedMotion, ready, spacing, speed]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive || prefersReducedMotion) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive || prefersReducedMotion || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
    let newOffset = currentOffset + dx;

    if (newOffset <= -spacing) newOffset += spacing;
    if (newOffset > 0) newOffset -= spacing;

    textPathRef.current.setAttribute('startOffset', `${newOffset}px`);
    setOffset(newOffset);
  };

  const endDrag = () => {
    if (!interactive || prefersReducedMotion) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? 'right' : 'left';
  };

  const cursorStyle =
    interactive && !prefersReducedMotion ? (dragRef.current ? 'grabbing' : 'grab') : 'auto';

  return (
    <div
      className="curved-loop-jacket"
      style={{ visibility: ready ? 'visible' : 'hidden', cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg className="curved-loop-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: 'hidden', opacity: 0, pointerEvents: 'none' }}
          className={cn(className)}
        >
          {baseSegments.map((segment, idx) => (
            <tspan key={`measure-${idx}`} className={cn(segment.className)}>
              {segment.text}
            </tspan>
          ))}
        </text>
        <defs>
          <path id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>
        {ready && (
          <text xmlSpace="preserve" className={cn(className)}>
            <textPath ref={textPathRef} href={`#${pathId}`} startOffset={`${offset}px`} xmlSpace="preserve">
              {Array.from({ length: repeatCount }).map((_, cycle) =>
                baseSegments.map((segment, idx) => (
                  <tspan key={`cycle-${cycle}-${idx}`} className={cn(segment.className)}>
                    {segment.text}
                  </tspan>
                ))
              )}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
