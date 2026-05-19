import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PLANTS } from '../data/plants.js';
import { useLanguage, PLANT_TRANSLATIONS } from '../contexts/LanguageContext.jsx';
import heroBackground from '../assets/hero-bg.jpeg';
import { fetchPlantViews, trackPlantView } from '../services/firestoreService.js';

// ── Curated defaults shown instantly before Firebase responds ─────────────
const DEFAULT_POTM   = 'moringa';
const CATEGORY_SLOTS = [
  { category: 'digestive',     fallback: 'ginger',      badge: 'nutrition' },
  { category: 'immunity',      fallback: 'black-seed',  badge: 'shield' },
  { category: 'respiratory',   fallback: 'eucalyptus',  badge: 'air' },
  { category: 'womens-health', fallback: 'fenugreek',   badge: 'favorite' },
];

// Pick the most-viewed plant from a given category, excluding `exclude`
function topInCategory(views, category, exclude = '') {
  const plants = Object.values(PLANTS).filter(p => p.category === category && p.id !== exclude);
  if (!plants.length) return null;
  return plants.reduce((best, p) =>
    (views[p.id] || 0) > (views[best.id] || 0) ? p : best
  , plants[0]);
}

// Pick the globally most-viewed plant
function topGlobal(views) {
  const plants = Object.values(PLANTS);
  if (!plants.length) return PLANTS[DEFAULT_POTM];
  return plants.reduce((best, p) =>
    (views[p.id] || 0) > (views[best.id] || 0) ? p : best
  , plants[0]);
}

// ── Shared small plant card ───────────────────────────────────────────────
function PlantSpotCard({ plant, badgeIcon, isAr, t, imageClass = 'h-48' }) {
  if (!plant) return null;
  const arData = isAr ? PLANT_TRANSLATIONS.ar[plant.id] : null;
  const name   = arData?.name ?? plant.name;
  const desc   = arData?.shortDescription ?? plant.shortDescription;

  return (
    <Link
      to={`/plant/${plant.id}`}
      onClick={() => trackPlantView(plant.id)}
      className="block group/card card-botanical card-lift shadow-botanical h-full overflow-hidden"
    >
      <div className={`relative ${imageClass} bg-surface-container overflow-hidden`}>
        <img
          src={plant.image} alt={name}
          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className={`absolute top-3 ${isAr ? 'right-3' : 'left-3'} flex items-center gap-1.5 bg-surface/85 backdrop-blur-sm rounded-full px-2.5 py-1`}>
          <span className="material-symbols-outlined text-primary text-sm">{badgeIcon}</span>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none`} />
      </div>
      <div className="p-5">
        <p className="font-manrope text-xs text-secondary tracking-widest uppercase mb-1 truncate">{plant.latinName}</p>
        <h3 className="font-caslon text-xl text-primary mb-2 group-hover/card:text-secondary transition-colors leading-tight">
          {name}
        </h3>
        <p className="font-manrope text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-4">{desc}</p>
        <div className={`flex items-center gap-1.5 font-manrope text-sm font-semibold text-primary group-hover/card:gap-3 transition-all duration-200 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
          {t('plant_view_profile')}
          <span
            className="material-symbols-outlined text-base transition-transform duration-200 group-hover/card:translate-x-1"
            style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}
          >arrow_forward</span>
        </div>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { t, isAr } = useLanguage();
  const heroLines   = (t('home_hero_title') || '').split('\n');

  // Start with local view data (zero-latency)
  const localViews = (() => {
    try { return JSON.parse(localStorage.getItem('plantViews') || '{}'); } catch { return {}; }
  })();

  const [views,    setViews]    = useState(localViews);
  const [potm,     setPotm]     = useState(() => {
    const top = topGlobal(localViews);
    return top?.id ? top : PLANTS[DEFAULT_POTM];
  });
  const [slots, setSlots] = useState(() =>
    CATEGORY_SLOTS.map(s => ({
      ...s,
      plant: topInCategory(localViews, s.category, potm?.id) ?? PLANTS[s.fallback],
    }))
  );

  // Fetch Firebase views async — update cards smoothly if different
  useEffect(() => {
    fetchPlantViews().then(merged => {
      if (!merged || Object.keys(merged).length === 0) return;
      setViews(merged);
      const newPotm = topGlobal(merged);
      if (newPotm?.id !== potm?.id) setPotm(newPotm);
      setSlots(CATEGORY_SLOTS.map(s => ({
        ...s,
        plant: topInCategory(merged, s.category, newPotm?.id) ?? PLANTS[s.fallback],
      })));
    }).catch(() => {});
  }, []);

  const potmAr = isAr ? PLANT_TRANSLATIONS.ar[potm?.id] : null;
  const potmName = potmAr?.name ?? potm?.name ?? '';
  const potmDesc = potmAr?.shortDescription ?? potm?.shortDescription ?? '';

  return (
    <div className="page-enter">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="relative section-container w-full text-center pt-32 md:pt-20 pb-16 md:pb-0 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed font-manrope text-label-sm px-4 py-1.5 rounded-full mb-8 mx-auto">
            {t('tagline')}
          </div>
          <h1 className="font-caslon text-3xl sm:text-4xl md:text-display-lg text-primary w-full max-w-3xl mx-auto mb-6 leading-tight px-2 break-words">
            {heroLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < heroLines.length - 1 && <br className="hidden md:block" />}
              </span>
            ))}
          </h1>
          <p className="font-manrope text-sm sm:text-lg md:text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8 sm:mb-10 px-2">
            {t('home_hero_sub')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/categories"
              className="bg-primary-container text-on-primary-container font-manrope font-semibold text-xs sm:text-sm tracking-wide px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:opacity-80 transition-all duration-200 hover:-translate-y-0.5 shadow-botanical w-[85%] sm:w-auto text-center">
              {t('home_cta_explore')}
            </Link>
            <Link to="/questionnaire"
              className="border border-outline text-on-surface-variant font-manrope font-semibold text-xs sm:text-sm tracking-wide px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-200 w-[85%] sm:w-auto text-center">
              {t('home_cta_journal')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Grid ────────────────────────────────────────────────── */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_280px] gap-6">

          {/* Plant of the Month — large, spans 2 rows */}
          {potm && (
            <Link
              to={`/plant/${potm.id}`}
              onClick={() => trackPlantView(potm.id)}
              className="block group/card card-botanical card-lift shadow-botanical lg:col-span-1 lg:row-span-2 overflow-hidden"
            >
              <div className="relative h-64 lg:h-[340px] bg-surface-container overflow-hidden">
                <img
                  src={potm.image} alt={potmName}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} flex items-center gap-1.5 bg-surface/90 backdrop-blur-sm rounded-full px-3 py-1.5`}>
                  <span className="material-symbols-outlined text-primary text-sm">star</span>
                  <span className="font-manrope text-xs font-semibold text-primary">{t('home_potm_badge')}</span>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/25 to-transparent pointer-events-none`} />
              </div>
              <div className="p-6">
                <p className="font-manrope text-label-sm text-secondary tracking-widest uppercase mb-1 truncate">
                  {potm.latinName}
                </p>
                <h2 className="font-caslon text-headline-sm text-primary mb-3 group-hover/card:text-secondary transition-colors">
                  {potmName}
                </h2>
                <p className="font-manrope text-sm text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                  {potmDesc}
                </p>
                <div className={`flex flex-wrap gap-1.5 mb-4 ${isAr ? 'flex-row-reverse' : ''}`}>
                  {potm.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="chip text-xs">{tag}</span>
                  ))}
                </div>
                <div className={`flex items-center gap-2 font-manrope text-sm font-semibold text-primary group-hover/card:gap-3 transition-all duration-200 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
                  {t('home_view_profile')}
                  <span
                    className="material-symbols-outlined text-base transition-transform duration-200 group-hover/card:translate-x-1"
                    style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}
                  >arrow_forward</span>
                </div>
              </div>
            </Link>
          )}

          {/* Slot A — digestive (large) */}
          <PlantSpotCard
            plant={slots[0]?.plant}
            badgeIcon={slots[0]?.badge}
            isAr={isAr} t={t}
            imageClass="h-48"
          />

          {/* Slot B — immunity (narrow) */}
          <PlantSpotCard
            plant={slots[1]?.plant}
            badgeIcon={slots[1]?.badge}
            isAr={isAr} t={t}
            imageClass="h-40"
          />

          {/* Slot C — respiratory (large) */}
          <PlantSpotCard
            plant={slots[2]?.plant}
            badgeIcon={slots[2]?.badge}
            isAr={isAr} t={t}
            imageClass="h-48"
          />

          {/* Slot D — women's health (narrow) */}
          <PlantSpotCard
            plant={slots[3]?.plant}
            badgeIcon={slots[3]?.badge}
            isAr={isAr} t={t}
            imageClass="h-40"
          />

        </div>
      </section>
    </div>
  );
}
