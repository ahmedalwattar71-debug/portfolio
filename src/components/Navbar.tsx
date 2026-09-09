import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../lib/cn';
import { CVDownloadMenu } from './CVDownloadMenu';

const SECTION_IDS = navItems.map((item) => item.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-base-950/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex w-full max-w-content items-center justify-between px-5 transition-all duration-300 sm:px-8',
          scrolled ? 'h-14' : 'h-16 sm:h-20',
        )}
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="group flex items-center gap-2.5"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-white/[0.03] font-mono text-sm font-semibold text-accent-cyan"
            aria-hidden="true"
          >
            A
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            {profile.name}
            <span className="ml-2 hidden font-mono text-[11px] font-normal text-slate-500 md:inline">
              / software · infrastructure
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item.id)}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm transition-colors',
                activeId === item.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-100',
              )}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <CVDownloadMenu />
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-slate-200 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden',
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'fixed inset-0 top-14 bg-base-950 transition-opacity duration-200',
            menuOpen ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className="mx-auto flex max-w-content flex-col gap-1 px-5 py-6 sm:px-8">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                style={{ transitionDelay: menuOpen ? `${i * 30}ms` : '0ms' }}
                className={cn(
                  'flex items-center justify-between rounded-lg border border-line/60 px-4 py-3.5 text-left text-base transition-all duration-300',
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
                  activeId === item.id
                    ? 'bg-white/[0.04] text-white'
                    : 'text-slate-300',
                )}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-slate-600">
                  {String(navItems.indexOf(item) + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
            <div className="mt-4">
              <CVDownloadMenu align="left" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
