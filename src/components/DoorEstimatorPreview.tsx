import { Calculator } from 'lucide-react';

/**
 * Conceptual UI sketch for the Door Installation Cost Estimator. This is an
 * illustrative representation of the input → calculation → estimate flow, not a
 * screenshot of the real application.
 */
export function DoorEstimatorPreview() {
  const fields = [
    { label: 'Opening width', value: '96 cm' },
    { label: 'Opening height', value: '210 cm' },
    { label: 'Wall thickness', value: '18 cm' },
    { label: 'Frame material', value: 'Steel' },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-base-900/60">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="ml-2 font-mono text-[11px] text-slate-500">cost estimator — concept</span>
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-2">
        <div className="space-y-2.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
            Structural measurements
          </p>
          {fields.map((field) => (
            <div
              key={field.label}
              className="flex items-center justify-between rounded-lg border border-line bg-white/[0.02] px-3 py-2"
            >
              <span className="text-xs text-slate-400">{field.label}</span>
              <span className="font-mono text-xs text-slate-200">{field.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-accent/30 bg-accent/[0.06] p-4">
          <div>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-cyan">
              <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
              Estimated cost
            </span>
            <p className="mt-3 text-3xl font-bold text-white">
              —<span className="ml-1 text-base font-normal text-slate-500">/ calculated</span>
            </p>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
            Deterministic: the same measurements always produce the same estimate.
          </p>
        </div>
      </div>
    </div>
  );
}
