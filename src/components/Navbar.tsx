'use client';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-[var(--border)] bg-white/75 dark:bg-slate-950/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(37,99,235,0.08)] dark:shadow-[0_12px_32px_rgba(2,6,23,0.4)]">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-400 shadow-lg shadow-blue-500/30 ring-2 ring-white dark:ring-slate-900">
            <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
              <rect x="16" y="18" width="32" height="24" rx="8" fill="white" opacity="0.14" />
              <rect x="20" y="22" width="24" height="16" rx="6" fill="white" />
              <circle cx="26" cy="30" r="2.5" fill="#1d4ed8" />
              <circle cx="38" cy="30" r="2.5" fill="#1d4ed8" />
              <path d="M28 36c2 2 6 2 8 0" stroke="#1d4ed8" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              <path d="M15 24l-7 8 7 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
              <path d="M49 24l7 8-7 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
            </svg>
          </div>
          <div>
            <h1 className="font-black text-lg leading-none text-slate-900 dark:text-white tracking-tight">
              Azril AI Asisten
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-300 mt-0.5">
              smart assistant for every idea
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-xl border border-blue-200 dark:border-sky-800 bg-white/70 dark:bg-slate-900/80 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 flex items-center justify-center shadow-sm"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} sm:mr-1.5 text-blue-600 dark:text-sky-300`} />
            <span className="hidden sm:inline text-xs font-semibold">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="px-3 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800/70 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors text-emerald-700 dark:text-emerald-300 flex items-center justify-center shadow-sm"
            title="API Status"
          >
            <i className="fas fa-circle text-emerald-500 sm:mr-1.5" style={{ fontSize: '0.65rem' }}></i>
            <span className="hidden sm:inline text-xs font-semibold">Live</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
