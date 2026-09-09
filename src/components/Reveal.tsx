import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'article';
}

/**
 * Fades and lifts its children into view the first time they intersect.
 *
 * Robustness matters here: content must never stay hidden. If IntersectionObserver
 * is unavailable, the element is already in view on mount, or nothing has
 * triggered within a short grace period, the content is revealed anyway.
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      setShown(true);
      return;
    }

    // Already on screen (or above it) when mounted — show without animating in.
    if (node.getBoundingClientRect().top < window.innerHeight * 0.95) {
      setShown(true);
      return;
    }

    const reveal = () => setShown(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    );
    observer.observe(node);

    // Safety net: never leave content hidden even if the observer never fires.
    const fallback = window.setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (shown) return;
    const onScroll = () => {
      const node = ref.current;
      if (node && node.getBoundingClientRect().top < window.innerHeight) {
        setShown(true);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [shown]);

  const Tag = as as ElementType;

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 motion-reduce:opacity-100',
        className,
      )}
      style={shown && !reducedMotion ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
