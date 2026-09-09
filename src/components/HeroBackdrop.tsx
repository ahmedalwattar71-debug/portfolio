import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/cn';

const NODES = [
  { cx: 120, cy: 90 },
  { cx: 340, cy: 60 },
  { cx: 560, cy: 140 },
  { cx: 250, cy: 220 },
  { cx: 480, cy: 280 },
  { cx: 700, cy: 210 },
  { cx: 90, cy: 300 },
];

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [4, 5],
  [3, 1],
  [6, 3],
  [2, 5],
];

/**
 * Subtle abstract network graph behind the hero. Static geometry, gentle node
 * pulse only — no matrix rain, no fake terminal. Fully hidden from a11y tree.
 */
export function HeroBackdrop() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(70% 60% at 50% 30%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(70% 60% at 50% 30%, #000 40%, transparent 100%)',
        }}
      />
      <svg
        className="absolute right-0 top-8 hidden h-[380px] w-[760px] max-w-full lg:block"
        viewBox="0 0 780 360"
        fill="none"
      >
        <g stroke="rgba(59,130,246,0.25)" strokeWidth="1">
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].cx}
              y1={NODES[a].cy}
              x2={NODES[b].cx}
              y2={NODES[b].cy}
            />
          ))}
        </g>
        {NODES.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="9"
              fill="rgba(34,211,238,0.08)"
              className={cn(!reducedMotion && 'animate-pulse-node')}
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <circle cx={node.cx} cy={node.cy} r="2.5" fill="#22d3ee" />
          </g>
        ))}
      </svg>
    </div>
  );
}
