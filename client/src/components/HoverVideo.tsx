import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface VideoSources {
  mp4: string;
  webm: string;
  poster: string;
}

interface HoverVideoProps {
  video: VideoSources;
  alt?: string;
  className?: string;
  videoClassName?: string;
  /** When true, plays whenever in view instead of only on hover. */
  autoPlayInView?: boolean;
  /** A hover target ref (e.g. a parent card) to trigger playback from. */
  hoverTargetRef?: React.RefObject<HTMLElement>;
}

/** Poster image that lazily loads and plays a video on hover (or when in view). */
export const HoverVideo = ({
  video,
  alt,
  className,
  videoClassName,
  autoPlayInView = false,
  hoverTargetRef,
}: HoverVideoProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsVisible(inView);
        if (inView) setShouldLoad(true);
        if (autoPlayInView) {
          if (inView) videoRef.current?.play().catch(() => {});
          else videoRef.current?.pause();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [autoPlayInView]);

  useEffect(() => {
    const target = hoverTargetRef?.current;
    if (!target || autoPlayInView) return;

    const play = () => {
      setShouldLoad(true);
      if (isVisible) videoRef.current?.play().catch(() => {});
    };
    const stop = () => {
      const v = videoRef.current;
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    };
    target.addEventListener('mouseenter', play);
    target.addEventListener('mouseleave', stop);
    return () => {
      target.removeEventListener('mouseenter', play);
      target.removeEventListener('mouseleave', stop);
    };
  }, [hoverTargetRef, isVisible, autoPlayInView]);

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden bg-muted', className)}>
      <video
        ref={videoRef}
        className={cn('h-full w-full object-cover', videoClassName)}
        poster={video.poster}
        preload={shouldLoad ? 'metadata' : 'none'}
        muted
        loop
        playsInline
        controls={false}
        aria-label={alt}
      >
        {shouldLoad && (
          <>
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
          </>
        )}
      </video>
    </div>
  );
};
