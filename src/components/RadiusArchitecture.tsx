import { ChevronDown } from 'lucide-react';
import type { ArchitectureNode } from '../types';
import { cn } from '../lib/cn';

const ACCENTS = [
  'text-accent-cyan',
  'text-accent',
  'text-accent',
  'text-accent-violet',
  'text-accent-violet',
  'text-accent-cyan',
];

/**
 * Vertical request/data-flow diagram for the RADIUS case study, drawn entirely
 * with HTML + SVG connectors. Shows only the path described in the CV:
 * subscriber → network access → RADIUS → backend → database → admin interface.
 */
export function RadiusArchitecture({ nodes }: { nodes: ArchitectureNode[] }) {
  return (
    <div className="rounded-2xl border border-line bg-base-900/60 p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
          architecture
        </p>
        <p className="font-mono text-[11px] text-slate-600">AAA flow</p>
      </div>

      <ol className="mt-5">
        {nodes.map((node, index) => (
          <li key={node.id}>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    'grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-base-800 font-mono text-xs font-semibold',
                    ACCENTS[index % ACCENTS.length],
                  )}
                >
                  {index + 1}
                </span>
                {index < nodes.length - 1 ? (
                  <span className="relative my-1 flex-1">
                    <span className="block h-full w-px bg-gradient-to-b from-accent/60 to-accent-cyan/30" />
                    <ChevronDown
                      className="absolute -left-[7px] bottom-0 h-4 w-4 text-accent-cyan/70"
                      aria-hidden="true"
                    />
                  </span>
                ) : null}
              </div>
              <div className={cn('min-w-0 pb-6', index === nodes.length - 1 && 'pb-0')}>
                <p className="text-sm font-semibold text-slate-100">{node.label}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{node.detail}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
