import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const PlantLogo = () => (
  <svg className="w-8 h-8 text-[#436F4D] mr-2 -mt-1" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggle, isAr } = useLanguage();
  const location = useLocation();
  const isActive = (href) => location.pathname === href;

  const NAV_LINKS = [
    { label: t('nav_discover'),   href: '/' },
    { label: t('nav_categories'), href: '/categories' },
    { label: t('nav_journal'),    href: '/questionnaire' },
    { label: t('nav_about'),      href: '/about' },
  ];

  return (
    <>
      <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/50">
        <div className="flex justify-between items-center max-w-container mx-auto px-5 md:px-16 h-20">

          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300 group flex-shrink-0">
            <PlantLogo />
            <span className="font-caslon text-3xl font-bold text-[#436F4D] tracking-tight">
              {t('brand')}
            </span>
          </Link>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="lang-btn flex items-center gap-1 border border-outline-variant text-on-surface-variant text-xs font-manrope font-semibold px-2.5 py-1.5 rounded-full hover:border-primary hover:text-primary transition-all"
              aria-label="Switch language"
            >
              <span className="material-symbols-outlined text-sm">translate</span>
              {t('nav_switchLang')}
            </button>
            <button
              className="text-[#436F4D] p-2 rounded-lg hover:bg-surface-container transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-7 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-caslon text-base transition-all duration-200 pb-0.5 whitespace-nowrap ${
                  isActive(link.href)
                    ? 'text-[#436F4D] border-b-2 border-[#436F4D] font-medium'
                    : 'text-on-surface-variant hover:text-[#436F4D]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language toggle — desktop */}
            <button
              onClick={toggle}
              className="lang-btn flex items-center gap-1.5 border border-outline-variant text-on-surface-variant text-sm font-manrope font-semibold px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-all duration-200"
              aria-label="Switch language"
            >
              <span className="material-symbols-outlined text-base">translate</span>
              {t('nav_switchLang')}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 pt-20">
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <nav className="relative bg-surface border-b border-outline-variant shadow-botanical-lg px-5 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-caslon text-xl py-3 border-b border-outline-variant/40 transition-colors ${
                  isActive(link.href) ? 'text-[#436F4D] font-medium' : 'text-on-surface-variant'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
