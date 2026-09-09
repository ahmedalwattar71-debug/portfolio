import { CheckCircle2, Layers } from 'lucide-react';
import { projects } from '../data/profile';
import { DoorEstimatorPreview } from '../components/DoorEstimatorPreview';
import { RadiusArchitecture } from '../components/RadiusArchitecture';
import { Reveal } from '../components/Reveal';
import { Badge, Section, SectionHeading } from '../components/primitives';

export function Projects() {
  const radius = projects.find((p) => p.id === 'radius-server');
  const door = projects.find((p) => p.id === 'door-estimator');

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Two builds, one theme"
        description="Systems where the interface, the logic and the environment underneath all had to be reasoned about together."
      />

      {radius ? (
        <Reveal as="article" className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-line bg-base-850/50">
            <div className="border-b border-line bg-white/[0.02] px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-accent/15 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-cyan">
                  Hero case study
                </span>
                <span className="font-mono text-[11px] text-slate-500">{radius.category}</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{radius.title}</h3>
              <p className="mt-1.5 text-sm text-slate-400">{radius.tagline}</p>
            </div>

            <div className="grid gap-8 p-6 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:py-8">
              <div>
                <div className="space-y-3.5">
                  {radius.overview.map((paragraph, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-slate-300">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Stack
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {radius.stack.map((tech) => (
                      <Badge key={tech.label} title={tech.note}>
                        {tech.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-line bg-base-900/50 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Layers className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
                    Why this project matters
                  </p>
                  <ul className="mt-3 space-y-2">
                    {radius.significance?.map((point) => (
                      <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-400">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent/70"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {radius.architecture ? <RadiusArchitecture nodes={radius.architecture} /> : null}
            </div>
          </div>
        </Reveal>
      ) : null}

      {door ? (
        <Reveal as="article" className="mt-6" delay={80}>
          <div className="grid gap-8 rounded-3xl border border-line bg-base-850/50 p-6 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-10 lg:py-8">
            <div>
              <span className="font-mono text-[11px] text-slate-500">{door.category}</span>
              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{door.title}</h3>
              <p className="mt-1.5 text-sm text-slate-400">{door.tagline}</p>

              <div className="mt-4 space-y-3">
                {door.overview.map((paragraph, i) => (
                  <p key={i} className="text-[14px] leading-relaxed text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="mt-5 space-y-2">
                {door.significance?.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-400">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent/70"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <DoorEstimatorPreview />
          </div>
        </Reveal>
      ) : null}
    </Section>
  );
}
