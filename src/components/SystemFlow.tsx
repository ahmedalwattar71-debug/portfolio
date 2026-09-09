import { AppWindow, Database, Radio, Server } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/cn';

const LAYERS = [
  { id: 'application', label: 'Application', sub: 'React · TypeScript', Icon: AppWindow },
  { id: 'backend', label: 'Backend', sub: 'Laravel · Python', Icon: Server },
  { id: 'network', label: 'Network', sub: 'RADIUS · MikroTik', Icon: Radio },
  { id: 'infrastructure', label: 'Infrastructure', sub: 'ISP · PTP links', Icon: Database },
] as const;

/**
 * Abstract visual for the hero: the path a request travels from the interface a
 * user touches down to the infrastructure it runs on. Not a dashboard — a
 * schematic of the layers Ahmad works across.
 */
export function SystemFlow({ className }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={cn(
        'relative rounded-2xl border border-line bg-base-850/60 p-5 sm:p-6',
        className,
      )}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-accent-violet/10 blur-3xl" />
      </div>

      <p className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
        request path
      </p>

      <ol className="relative mt-4 space-y-2.5">
        {LAYERS.map((layer, index) => (
          <li key={layer.id}>
            <div className="flex items-center gap-3.5 rounded-xl border border-line bg-white/[0.02] px-3.5 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-base-800 text-accent-cyan">
                <layer.Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-slate-100">{layer.label}</span>
                <span className="block font-mono text-[11px] text-slate-500">{layer.sub}</span>
              </span>
              <span className="font-mono text-[11px] text-slate-600">
                0{index + 1}
              </span>
            </div>
            {index < LAYERS.length - 1 ? (
              <div className="ml-[30px] flex h-4 items-center">
                <svg width="2" height="16" viewBox="0 0 2 16" className="overflow-visible">
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="16"
                    stroke="url(#flow-grad)"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    className={cn(!reducedMotion && 'animate-dash-flow')}
                  />
                  <defs>
                    <linearGradient id="flow-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
