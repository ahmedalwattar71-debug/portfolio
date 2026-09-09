import { about } from '../data/profile';
import { Reveal } from '../components/Reveal';
import { Section, SectionHeading } from '../components/primitives';

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="An engineer on both sides of the wire"
        description="Most people pick software or infrastructure. My work has always needed both at once."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <div className="space-y-5">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} as="div" delay={i * 60}>
              <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="divide-y divide-line rounded-2xl border border-line bg-base-850/60">
            {about.highlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium text-slate-100">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
