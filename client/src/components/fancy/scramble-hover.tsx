import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

interface ScrambleHoverProps {
  text: string;
  className?: string;
  speed?: number;
}

/** Scrambles characters on hover before settling back to the real text. */
export const ScrambleHover = ({ text, className, speed = 35 }: ScrambleHoverProps) => {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    setDisplay(text);
    return () => clearInterval(intervalRef.current);
  }, [text]);

  const scramble = () => {
    clearInterval(intervalRef.current);
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const next = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < pos) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');
      setDisplay(next);
      pos += 1 / 2;
      if (pos >= text.length) {
        clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, speed);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setDisplay(text);
  };

  return (
    <span
      className={cn('inline-block', className)}
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      {display}
    </span>
  );
};
