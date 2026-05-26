import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PLANTS } from '../data/plants.js';
import { useLanguage, PLANT_TRANSLATIONS, TAG_TRANSLATIONS } from '../contexts/LanguageContext.jsx';
import heroBackground from '../assets/hero-bg.jpeg';
import { trackPlantView, trackSiteVisit, subscribeToSiteStats } from '../services/firestoreService.js';

// ── Stat card for platform statistics ────────────────────────────────────
function StatCard({ icon, label, value, sub, color, delay = 0, isAr = false, className = '' }) {
  const v = {
    teal:   { grad: 'from-teal-50 to-teal-100/30',    iconBg: 'bg-teal-100',    iconFg: 'text-teal-600',    numFg: 'text-teal-900',    dot: 'bg-teal-400'    },
    green:  { grad: 'from-emerald-50 to-emerald-100/30', iconBg: 'bg-emerald-100', iconFg: 'text-emerald-600', numFg: 'text-emerald-900', dot: 'bg-emerald-400'  },
    blue:   { grad: 'from-sky-50 to-sky-100/30',      iconBg: 'bg-sky-100',     iconFg: 'text-sky-600',     numFg: 'text-sky-900',     dot: 'bg-sky-400'     },
    amber:  { grad: 'from-amber-50 to-amber-100/30',  iconBg: 'bg-amber-100',   iconFg: 'text-amber-600',   numFg: 'text-amber-900',   dot: 'bg-amber-400'   },
    purple: { grad: 'from-violet-50 to-violet-100/30',iconBg: 'bg-violet-100',  iconFg: 'text-violet-600',  numFg: 'text-violet-900',  dot: 'bg-violet-400'  },
  }[color] ?? { grad:'from-emerald-50 to-emerald-100/30', iconBg:'bg-emerald-100', iconFg:'text-emerald-600', numFg:'text-emerald-900', dot:'bg-emerald-400' };

  return (
    <div
      className={`${className} relative bg-gradient-to-br ${v.grad} rounded-2xl p-4 sm:p-5 border border-surface-container-high/60 shadow-botanical-sm hover:shadow-botanical hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-slide-up flex flex-col`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Ghost watermark — flipped to correct corner for RTL */}
      <span className={`material-symbols-outlined absolute -bottom-2 ${isAr ? '-left-2' : '-right-2'} text-7xl ${v.iconFg} opacity-[0.07] pointer-events-none select-none`}>{icon}</span>

      <div className="flex items-start justify-between mb-4">
        <div className={`${v.iconBg} ${v.iconFg} w-10 h-10 rounded-xl flex items-center justify-center shadow-sm`}>
          <span className="material-symbols-outlined text-lg">{icon}</span>
        </div>
        <span className={`w-2 h-2 rounded-full ${v.dot} mt-1.5 animate-pulse`} />
      </div>

      <p className="font-manrope text-xs text-on-surface-variant leading-tight mb-2 flex-none">{label}</p>
      <p className={`font-caslon text-xl sm:text-2xl lg:text-3xl font-bold ${v.numFg} leading-none mb-3 truncate`}>{value}</p>

      <div className="h-px w-full bg-surface-container-high/80 mb-2" />
      <p className={`font-manrope text-xs font-semibold ${v.iconFg}`}>{sub}</p>
    </div>
  );
}

// ── Curated defaults shown instantly before Firebase responds ─────────────
const DEFAULT_POTM   = 'moringa';
const CATEGORY_SLOTS = [
  { category: 'digestive',     fallback: 'ginger',      badge: 'nutrition',    labelKey: 'cat_digestive_name'   },
  { category: 'immunity',      fallback: 'black-seed',  badge: 'shield',       labelKey: 'cat_immunity_name'    },
  { category: 'respiratory',   fallback: 'eucalyptus',  badge: 'air',          labelKey: 'cat_respiratory_name' },
  { category: 'womens-health', fallback: 'fenugreek',   badge: 'favorite',     labelKey: 'cat_womens_name'      },
  { category: 'uti',           fallback: 'dandelion',   badge: 'water_drop',   labelKey: 'cat_uti_name'         },
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
function PlantSpotCard({ plant, badgeIcon, badgeLabel, isAr, t, imageClass = 'h-48' }) {
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
          {badgeLabel && (
            <span className="font-manrope text-xs font-semibold text-primary">{badgeLabel}</span>
          )}
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none`} />
      </div>
      <div className="p-5">
        <p className="font-manrope text-xs text-secondary tracking-widest uppercase mb-1 truncate">{plant.latinName}</p>
        <h3 className="font-caslon text-xl text-primary mb-2 group-hover/card:text-secondary transition-colors leading-tight">
          {name}
        </h3>
        <p className="font-manrope text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-4">{desc}</p>
        <div className={`flex items-center gap-1.5 font-manrope text-sm font-semibold text-primary group-hover/card:gap-3 transition-all duration-200`}>
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
  const [topPlantName, setTopPlantName] = useState(null);
  const [questionnaireCount, setQCount] = useState(null);
  const [siteVisitors, setSiteVisitors] = useState(() => {
    try {
      const cached = JSON.parse(localStorage.getItem('nabta_site_visits_v1') || 'null');
      return cached?.count ? cached.count.toLocaleString() : null;
    } catch { return null; }
  });

  // Real-time Firebase stats — fires immediately with current data, then on every change
  useEffect(() => {
    trackSiteVisit();

    const unsub = subscribeToSiteStats(({ visitors, questionnaires, plantViews }) => {
      if (visitors !== undefined) {
        setSiteVisitors(visitors.toLocaleString());
      }
      if (questionnaires !== undefined && questionnaires > 0) {
        setQCount(questionnaires.toLocaleString());
      }
      if (plantViews !== undefined) {
        const merged = { ...localViews };
        Object.entries(plantViews).forEach(([k, v]) => { merged[k] = Math.max(merged[k] || 0, v); });
        if (Object.keys(merged).length === 0) return;
        setViews(merged);
        const newPotm = topGlobal(merged);
        setPotm(prev => newPotm?.id !== prev?.id ? newPotm : prev);
        setSlots(CATEGORY_SLOTS.map(s => ({
          ...s,
          plant: topInCategory(merged, s.category, newPotm?.id) ?? PLANTS[s.fallback],
        })));
        const arData = isAr ? PLANT_TRANSLATIONS.ar[newPotm.id] : null;
        setTopPlantName(isAr ? (arData?.name ?? newPotm.name) : newPotm.name);
      }
    });

    return unsub;
  }, []);

  const potmAr = isAr ? PLANT_TRANSLATIONS.ar[potm?.id] : null;
  const potmName = potmAr?.name ?? potm?.name ?? '';
  const potmDesc = potmAr?.shortDescription ?? potm?.shortDescription ?? '';

  return (
    <div className="page-enter">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="relative section-container w-full text-center py-16 px-4 md:px-0">
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

      {/* ── Platform Statistics ──────────────────────────────────────────── */}
      <section className="section-container py-16">
        <div className={`flex items-end justify-between mb-10 gap-4 flex-wrap ${isAr ? 'flex-row-reverse' : ''}`}>
          <div className={isAr ? 'text-right' : ''}>
            <p className="font-manrope text-xs font-bold text-secondary tracking-widest uppercase mb-1">
              {isAr ? 'بالأرقام' : 'By the Numbers'}
            </p>
            <h2 className="font-caslon text-headline-sm text-primary">{t('about_stats_title')}</h2>
          </div>
          <div className={`flex items-center gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-manrope text-xs text-on-surface-variant">
              {isAr ? 'بيانات حية' : 'Live data'}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <StatCard icon="people"        label={t('about_stats_visitors')}       value={siteVisitors ?? t('about_stats_loading')}                                                                                       sub={t('about_stats_visitors_sub')}       color="teal"   delay={0}   isAr={isAr} />
          <StatCard icon="local_florist" label={t('about_stats_plants')}         value={Object.keys(PLANTS).length.toString()}                                                                                          sub={t('about_stats_plants_sub')}         color="green"  delay={80}  isAr={isAr} />
          <StatCard icon="assignment"    label={t('about_stats_questionnaires')} value={questionnaireCount ?? t('about_stats_loading')}                                                                                 sub={t('about_stats_questionnaires_sub')} color="blue"   delay={160} isAr={isAr} />
          <StatCard icon="visibility"    label={t('about_stats_top_plant')}      value={topPlantName ?? (potm ? (isAr ? (PLANT_TRANSLATIONS.ar[potm.id]?.name ?? potm.name) : potm.name) : t('about_stats_loading'))} sub={t('about_stats_top_sub')}            color="amber"  delay={240} isAr={isAr} />
          <StatCard icon="category"      label={t('about_stats_categories')}     value="5"                                                                                                                              sub={t('about_stats_categories_sub')}     color="purple" delay={320} isAr={isAr} className="col-span-2 sm:col-span-1" />
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
              className="block group/card card-botanical card-lift shadow-botanical lg:col-span-1 lg:row-span-3 overflow-hidden"
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
                <div className={`flex flex-wrap gap-1.5 mb-4`}>
                  {potm.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="chip text-xs">{isAr ? (TAG_TRANSLATIONS[tag] ?? tag) : tag}</span>
                  ))}
                </div>
                <div className={`flex items-center gap-2 font-manrope text-sm font-semibold text-primary group-hover/card:gap-3 transition-all duration-200`}>
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
            badgeLabel={t(slots[0]?.labelKey)}
            isAr={isAr} t={t}
            imageClass="h-48"
          />

          {/* Slot B — immunity (narrow) */}
          <PlantSpotCard
            plant={slots[1]?.plant}
            badgeIcon={slots[1]?.badge}
            badgeLabel={t(slots[1]?.labelKey)}
            isAr={isAr} t={t}
            imageClass="h-40"
          />

          {/* Slot C — respiratory (large) */}
          <PlantSpotCard
            plant={slots[2]?.plant}
            badgeIcon={slots[2]?.badge}
            badgeLabel={t(slots[2]?.labelKey)}
            isAr={isAr} t={t}
            imageClass="h-48"
          />

          {/* Slot D — women's health (narrow) */}
          <PlantSpotCard
            plant={slots[3]?.plant}
            badgeIcon={slots[3]?.badge}
            badgeLabel={t(slots[3]?.labelKey)}
            isAr={isAr} t={t}
            imageClass="h-40"
          />

          {/* Slot E — UTI (spans both columns in 3rd row) */}
          <div className="lg:col-span-2">
            <PlantSpotCard
              plant={slots[4]?.plant}
              badgeIcon={slots[4]?.badge}
              badgeLabel={t(slots[4]?.labelKey)}
              isAr={isAr} t={t}
              imageClass="h-48"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
