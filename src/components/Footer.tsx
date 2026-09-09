import { profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex w-full max-w-content flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-xs text-slate-500">
          © {year} {profile.name}. Built with React, TypeScript, Vite &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-[11px] text-slate-600">software · infrastructure</p>
      </div>
    </footer>
  );
}
