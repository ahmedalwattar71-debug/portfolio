import { Code2, Network, Server, ShieldCheck } from 'lucide-react';
import type { ExpertiseIcon } from '../types';
import { expertiseAreas } from '../data/profile';
import { Reveal } from '../components/Reveal';
import { Section, SectionHeading } from '../components/primitives';

const ICONS: Record<ExpertiseIcon, typeof Code2> = {
  code: Code2,
  network: Network,
  shield: ShieldCheck,
  server: Server,
};

export function Expertise() {
  return (
    <Section id="expertise">
      <SectionHeading
        eyebrow="Engineering DNA"
        title="What I actually do"
        description="Four connected areas — not four separate jobs. Each one feeds the others."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {expertiseAreas.map((area, i) => {
          const Icon = ICONS[area.icon];
          return (
            <Reveal key={area.index} as="article" delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-base-850/60 p-6 transition-colors hover:border-accent/40">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-base-800 text-accent-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm text-slate-600">{area.index}</span>
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-white">{area.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                  {area.summary}
                </p>
                <ul className="relative mt-4 flex flex-wrap gap-1.5">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-md border border-line bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
