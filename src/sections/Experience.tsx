import { experience } from '../data/profile';
import { Reveal } from '../components/Reveal';
import { Section, SectionHeading } from '../components/primitives';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Professional Experience"
        title="Career inside internet providers"
        description="Every role so far has been hands-on ISP work — the environment where infrastructure problems are immediate and real."
      />

      <ol className="mt-12 space-y-14 border-l border-line sm:space-y-16">
        {experience.map((item, i) => (
          <Reveal key={item.id} as="li" delay={i * 70}>
            <div className="relative pl-6 sm:pl-8">
              <span
                className="absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-accent bg-base-950"
                aria-hidden="true"
              />

              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-cyan">
                {item.period}
              </p>

              <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                {item.role}
                <span className="font-normal text-slate-500"> — {item.company}</span>
              </h3>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-600">
                {item.companyNote}
              </p>

              <ul className="mt-4 space-y-1.5">
                {item.contributions.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-[13.5px] leading-relaxed text-slate-400 before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-accent-cyan/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-line bg-white/[0.02] px-1.5 py-0.5 font-mono text-[10.5px] text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
