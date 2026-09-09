import { ArrowUpRight, Mail } from 'lucide-react';
import { contactChannels, profile } from '../data/profile';
import { CVDownloadMenu } from '../components/CVDownloadMenu';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/primitives';

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-base-850/60 p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(59,130,246,0.14),transparent_75%)]" />

          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-cyan">Contact</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&rsquo;s build something that connects software and infrastructure
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              Open to full-stack, backend, network engineering and ISP / infrastructure roles.
              The fastest way to reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Ahmad
              </a>
              <CVDownloadMenu variant="ghost" align="left" />
            </div>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="bg-base-850 p-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    {channel.label}
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={channel.href}
                      {...(channel.href.startsWith('http')
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                      className="group inline-flex items-center gap-1 text-sm text-slate-200 transition-colors hover:text-accent-cyan"
                    >
                      {channel.value}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-slate-600 transition-colors group-hover:text-accent-cyan"
                        aria-hidden="true"
                      />
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
