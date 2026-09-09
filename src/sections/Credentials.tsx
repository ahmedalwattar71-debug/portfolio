import { Award, GraduationCap, Languages as LanguagesIcon } from 'lucide-react';
import { certification, education, languages } from '../data/profile';
import { Reveal } from '../components/Reveal';
import { Section, SectionHeading } from '../components/primitives';

export function Credentials() {
  return (
    <Section id="credentials">
      <SectionHeading eyebrow="Credentials" title="Education, certification & languages" />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Reveal>
          <article className="h-full rounded-2xl border border-line bg-base-850/60 p-6">
            <GraduationCap className="h-5 w-5 text-accent-cyan" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-white">{education.degree}</h3>
            <p className="mt-1 text-sm text-slate-400">{education.institution}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600">
              {education.timeframe}
            </p>
          </article>
        </Reveal>

        <Reveal delay={70}>
          <article className="h-full rounded-2xl border border-line bg-base-850/60 p-6">
            <Award className="h-5 w-5 text-accent-cyan" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-white">{certification.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{certification.fullName}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600">
              {certification.issuer}
            </p>
          </article>
        </Reveal>

        <Reveal delay={140}>
          <article className="h-full rounded-2xl border border-line bg-base-850/60 p-6">
            <LanguagesIcon className="h-5 w-5 text-accent-cyan" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-white">Languages</h3>
            <ul className="mt-3 space-y-3">
              {languages.map((language) => (
                <li key={language.name}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-slate-200">{language.name}</span>
                    <span className="font-mono text-[11px] text-slate-500">{language.level}</span>
                  </div>
                  <div className="mt-1.5 flex gap-1" aria-hidden="true">
                    {[1, 2, 3, 4].map((step) => (
                      <span
                        key={step}
                        className={
                          step <= language.scaleStep
                            ? 'h-1 flex-1 rounded-full bg-gradient-to-r from-accent to-accent-cyan'
                            : 'h-1 flex-1 rounded-full bg-white/[0.06]'
                        }
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
