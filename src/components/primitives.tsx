import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Consistent vertical rhythm + scroll offset for every page section. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-20 border-t border-line/60 py-20 sm:py-28', className)}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}

interface BadgeProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Badge({ children, className, title }: BadgeProps) {
  return (
    <span
      title={title}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300',
        className,
      )}
    >
      {children}
    </span>
  );
}
