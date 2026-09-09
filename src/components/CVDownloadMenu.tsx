import { useEffect, useId, useRef, useState } from 'react';
import { Check, Download, FileText } from 'lucide-react';
import { cvVariants } from '../data/profile';
import { cn } from '../lib/cn';

interface CVDownloadMenuProps {
  /** Visual weight of the trigger button. */
  variant?: 'solid' | 'ghost';
  align?: 'left' | 'right';
  className?: string;
  label?: string;
}

/**
 * "Download CV" control. Because there are two distinct CV versions, this opens
 * a small menu so the visitor picks the one relevant to them — the files are
 * never merged into a third combined document.
 */
export function CVDownloadMenu({
  variant = 'solid',
  align = 'right',
  className,
  label = 'Download CV',
}: CVDownloadMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors',
          variant === 'solid'
            ? 'bg-accent text-white hover:bg-accent/90'
            : 'border border-line text-slate-200 hover:border-accent/60 hover:text-white',
        )}
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label="Choose a CV version"
        className={cn(
          'absolute z-50 mt-2 w-72 origin-top overflow-hidden rounded-xl border border-line bg-base-850 shadow-2xl shadow-black/40 transition duration-150',
          align === 'right' ? 'right-0' : 'left-0',
          open
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0',
        )}
      >
        <p className="border-b border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
          Two versions — pick one
        </p>
        <ul className="p-1.5">
          {cvVariants.map((cv) => (
            <li key={cv.id}>
              <a
                role="menuitem"
                href={cv.href}
                download={cv.filename}
                onClick={() => setOpen(false)}
                className="group flex gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.04] focus-visible:bg-white/[0.04] focus-visible:outline-none"
              >
                <FileText
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan"
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-slate-100">
                    {cv.label}
                    <Check
                      className="h-3.5 w-3.5 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                    {cv.description}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
