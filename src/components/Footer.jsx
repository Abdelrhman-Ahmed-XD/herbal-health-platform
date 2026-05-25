import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const PlantLogoFooter = () => (
  <svg className="w-10 h-10 text-[#436F4D] me-2 -mt-1" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const NAV_LINKS = [
    { label: t('nav_discover'),   href: '/' },
    { label: t('nav_categories'), href: '/categories' },
    { label: t('nav_journal'),    href: '/questionnaire' },
    { label: t('nav_about'),      href: '/about' },
  ];

  return (
    <footer className="bg-surface-container-low w-full pt-16 pb-8 border-t border-outline-variant relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#436F4D]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 max-w-container mx-auto gap-10 text-center md:text-start">
        <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
          <PlantLogoFooter />
          <span className="font-caslon text-4xl font-bold text-[#436F4D] tracking-tight">
            {t('brand')}
          </span>
        </Link>

        <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-manrope text-base text-on-surface-variant hover:text-[#436F4D] transition-all duration-300 hover:-translate-y-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-12 pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row justify-between items-center px-5 md:px-16 max-w-container mx-auto gap-4">
        <p className="font-manrope text-sm text-on-surface-variant">
          {t('footer_copy')}
        </p>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block h-4 w-px bg-outline-variant" />
          <a
            href="https://www.linkedin.com/in/abdelrhman-ahmed-fathy2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-xs text-on-surface-variant hover:text-[#436F4D] flex items-center gap-1.5 transition-colors group"
          >
            <span className="text-[#0077B5] group-hover:scale-110 transition-transform duration-300">
              <LinkedInIcon />
            </span>
            <span>Developed by <span className="font-semibold tracking-wide">Abdelrhman Ahmed</span></span>
          </a>
        </div>
      </div>

    </footer>
  );
}
