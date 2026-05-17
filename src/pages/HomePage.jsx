import { Link } from 'react-router-dom';
import { PLANTS } from '../data/plants.js';
import { useLanguage, PLANT_TRANSLATIONS } from '../contexts/LanguageContext.jsx';
import heroBackground from '../assets/hero-bg.jpeg';

const FEATURED_ID = 'echinacea';

export default function HomePage() {
  const { t, isAr } = useLanguage();
  const featured = PLANTS[FEATURED_ID];
  const arFeatured = isAr ? PLANT_TRANSLATIONS.ar[FEATURED_ID] : null;
  const heroLines = (t('home_hero_title') || '').split('\n');

  return (
      <div className="page-enter">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div
              className="absolute inset-0 bg-cover bg-center opacity-45"
              style={{
                backgroundImage: `url(${heroBackground})`,
              }}
          />

          {/* Main Container - Pushed down on mobile to clear navbar */}
          <div className="relative section-container w-full text-center pt-32 md:pt-20 pb-16 md:pb-0 px-4 md:px-0">
            <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed font-manrope text-label-sm px-4 py-1.5 rounded-full mb-8 mx-auto">
              {t('tagline')}
            </div>

            {/* FIX: Scaled mobile font down to text-3xl to contain long words. Added break-words. Jumps back to text-display-lg on desktop. */}
            <h1 className="font-caslon text-3xl sm:text-4xl md:text-display-lg text-primary w-full max-w-3xl mx-auto mb-6 leading-tight px-2 break-words">
              {heroLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < heroLines.length - 1 && <br className="hidden md:block" />}
                  </span>
              ))}
            </h1>

            <p className="font-manrope text-base sm:text-lg md:text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">
              {t('home_hero_sub')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/categories"
                    className="bg-primary-container text-on-primary-container font-manrope font-semibold text-sm tracking-wide px-8 py-4 rounded-full hover:opacity-80 transition-all duration-200 hover:-translate-y-0.5 shadow-botanical w-full sm:w-auto text-center">
                {t('home_cta_explore')}
              </Link>
              <Link to="/questionnaire"
                    className="border border-outline text-on-surface-variant font-manrope font-semibold text-sm tracking-wide px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-200 w-full sm:w-auto text-center">
                {t('home_cta_journal')}
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Grid - Desktop layout entirely untouched */}
        <section className="section-container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_280px] gap-6">

            {/* Plant of Month */}
            <Link to={`/plant/${featured.id}`} className="block group/card card-botanical shadow-botanical relative lg:col-span-1 lg:row-span-2 hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-64 lg:h-[320px] bg-surface-container overflow-hidden">
                <img src={featured.image} alt={arFeatured?.name ?? featured.name}
                     className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" loading="eager" />
                <div className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} flex items-center gap-1.5 bg-surface/90 backdrop-blur-sm rounded-full px-3 py-1.5`}>
                  <span className="material-symbols-outlined text-primary text-sm">star</span>
                  <span className="font-manrope text-xs font-semibold text-primary">{t('home_potm_badge')}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-manrope text-label-sm text-secondary tracking-widest uppercase mb-1">
                  {t('home_potm_latin')}
                </p>
                <h2 className="font-caslon text-headline-sm text-primary mb-3">
                  {arFeatured?.name ?? featured.name}
                </h2>
                <p className="font-manrope text-sm text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                  {t('home_potm_desc')}
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {featured.symptoms.slice(0, 2).map(tag => (
                      <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
                <div className={`flex items-center gap-2 font-manrope text-sm font-semibold text-primary group-hover/card:gap-3 transition-all duration-200 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
                  {t('home_view_profile')}
                  <span className="material-symbols-outlined text-base group-hover/card:translate-x-1 transition-transform"
                        style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Sleep & Calm */}
            <Link to="/categories" className="block group/card card-botanical shadow-botanical overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-surface-container overflow-hidden">
                <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
                     alt={t('home_sleep_title')} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-lg">nightlight</span>
                  <h3 className="font-caslon text-headline-sm text-primary group-hover/card:text-secondary transition-colors">{t('home_sleep_title')}</h3>
                </div>
                <p className="font-manrope text-sm text-on-surface-variant mb-3">{t('home_sleep_desc')}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="chip">Nervines</span>
                  <span className="chip">Adaptogens</span>
                </div>
              </div>
            </Link>

            {/* Immunity mini */}
            <Link to="/categories" className="block group/card card-botanical shadow-botanical hover:-translate-y-1 transition-transform duration-300">
              <div className="h-40 bg-surface-container overflow-hidden">
                <img src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&q=80"
                     alt={t('home_immunity_title')} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="material-symbols-outlined text-primary text-lg">shield</span>
                  <h3 className="font-caslon text-xl text-primary group-hover/card:text-secondary transition-colors">{t('home_immunity_title')}</h3>
                </div>
                <p className="font-manrope text-sm text-on-surface-variant mb-3">{t('home_immunity_desc')}</p>
                <hr className="border-outline-variant mb-3" />
                <div className={`flex items-center gap-2 font-manrope text-xs font-semibold text-primary group-hover/card:gap-3 transition-all duration-200 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
                  {t('home_explore')}
                  <span className="material-symbols-outlined text-sm group-hover/card:translate-x-1 transition-transform"
                        style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Vitality */}
            <Link to="/categories" className="block group/card card-botanical shadow-botanical overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-surface-container overflow-hidden">
                <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80"
                     alt={t('home_vitality_title')} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-lg">bolt</span>
                  <h3 className="font-caslon text-headline-sm text-primary group-hover/card:text-secondary transition-colors">{t('home_vitality_title')}</h3>
                </div>
                <p className="font-manrope text-sm text-on-surface-variant mb-3">{t('home_vitality_desc')}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="chip">Stimulants</span>
                  <span className="chip">Tonics</span>
                </div>
              </div>
            </Link>

            {/* Digestion mini */}
            <Link to="/categories" className="block group/card card-botanical shadow-botanical hover:-translate-y-1 transition-transform duration-300">
              <div className="h-40 bg-surface-container overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                     alt={t('home_digestion_title')} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="material-symbols-outlined text-primary text-lg">nutrition</span>
                  <h3 className="font-caslon text-xl text-primary group-hover/card:text-secondary transition-colors">{t('home_digestion_title')}</h3>
                </div>
                <p className="font-manrope text-sm text-on-surface-variant mb-3">{t('home_digestion_desc')}</p>
                <hr className="border-outline-variant mb-3" />
                <div className={`flex items-center gap-2 font-manrope text-xs font-semibold text-primary hover:text-primary group-hover/card:gap-3 transition-all duration-200 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
                  {t('home_explore')}
                  <span className="material-symbols-outlined text-sm group-hover/card:translate-x-1 transition-transform"
                        style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
                </div>
              </div>
            </Link>

          </div>
        </section>
      </div>
  );
}