import { Code2, Network, Server } from 'lucide-react';
import type { ExpertiseIcon } from '../types';
import { careerTimeline, skillGroups } from '../data/profile';
import { Reveal } from '../components/Reveal';
import { Section, SectionHeading } from '../components/primitives';

const ICONS: Record<ExpertiseIcon, typeof Code2> = {
  code: Code2,
  network: Network,
  server: Server,
  shield: Server,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools, grouped by where they live"
        description="No proficiency percentages — they measure nothing. This is what I work with, organised by layer."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = ICONS[group.icon];
          return (
            <Reveal key={group.category} delay={i * 60}>
              <div className="h-full rounded-2xl border border-line bg-base-850/60 p-5">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-base-800 text-accent-cyan">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-500">{group.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[11.5px] text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Career timeline */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-cyan">
          Career timeline
        </p>
        <h3 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
          Where software and networking converge
        </h3>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {careerTimeline.map((phase, i) => (
            <Reveal key={phase.title} as="li" delay={i * 60}>
              <div className="flex h-full gap-3 rounded-xl border border-line bg-base-850/60 p-4 lg:flex-col lg:gap-0">
                <span className="w-16 shrink-0 whitespace-nowrap font-mono text-[11px] text-accent-cyan lg:w-auto">
                  {phase.period}
                </span>
                <span
                  className="hidden lg:mt-2 lg:block lg:h-px lg:w-full lg:bg-gradient-to-r lg:from-accent/50 lg:to-transparent"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white lg:mt-3">{phase.title}</h4>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
                    {phase.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
