import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { CVDownloadMenu } from '../components/CVDownloadMenu';
import { HeroBackdrop } from '../components/HeroBackdrop';
import { SystemFlow } from '../components/SystemFlow';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-36">
      <HeroBackdrop />

      <div className="mx-auto grid w-full max-w-content gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            {profile.location}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium text-slate-300 sm:text-xl">
            <span>{profile.roles[0]}</span>
            <span className="text-slate-600" aria-hidden="true">
              /
            </span>
            <span>{profile.roles[1]}</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.positioning}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <CVDownloadMenu variant="ghost" align="left" />
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/60 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-slate-300"
          >
            <ArrowDown className="h-3.5 w-3.5 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
            Explore my work
          </button>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <SystemFlow />
        </div>
      </div>
    </section>
  );
}
