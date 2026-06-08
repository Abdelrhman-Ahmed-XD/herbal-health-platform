import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { PLANTS, CATEGORIES } from '../data/plants.js';
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

// ── Category color / name maps (used by PlantSpotCard + SearchBar) ────────
const CAT_EN_NAMES = {
  'womens-health': "Women's Health",
  'digestive': 'Digestive Health',
  'respiratory': 'Respiratory Health',
  'immunity': 'Immunity',
  'uti': 'Urinary Tract Health',
};

const CAT_AR_NAMES = {
  'womens-health': 'صحة المرأة',
  'digestive': 'صحة الجهاز الهضمي',
  'respiratory': 'صحة الجهاز التنفسي',
  'immunity': 'المناعة',
  'uti': 'صحة المسالك البولية',
};

const CAT_ICON_COLORS = {
  'womens-health': { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200', chip: 'bg-pink-50 text-pink-600 border-pink-200' },
  'digestive':     { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', chip: 'bg-amber-50 text-amber-700 border-amber-200' },
  'respiratory':   { bg: 'bg-sky-100', text: 'text-sky-600', border: 'border-sky-200', chip: 'bg-sky-50 text-sky-600 border-sky-200' },
  'immunity':      { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', chip: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  'uti':           { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', chip: 'bg-blue-50 text-blue-600 border-blue-200' },
};

const CAT_ICONS = {
  'womens-health': 'favorite',
  'digestive': 'nutrition',
  'respiratory': 'air',
  'immunity': 'shield',
  'uti': 'water_drop',
};

// ── Shared small plant card ───────────────────────────────────────────────
function PlantSpotCard({ plant, badgeIcon, badgeLabel, isAr, t, imageClass = 'h-48' }) {
  if (!plant) return null;
  const arData = isAr ? PLANT_TRANSLATIONS.ar[plant.id] : null;
  const name   = arData?.name ?? plant.name;
  const desc   = arData?.shortDescription ?? plant.shortDescription;
  const catColors = CAT_ICON_COLORS[plant.category] ?? { bg: 'bg-surface/85', text: 'text-primary', border: 'border-transparent', chip: 'bg-surface/85 text-primary border-transparent' };

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
        <div className={`absolute top-3 ${isAr ? 'right-3' : 'left-3'} flex items-center gap-1.5 ${catColors.chip} border backdrop-blur-sm rounded-full px-2.5 py-1`}>
          <span className={`material-symbols-outlined ${catColors.text} text-sm`}>{badgeIcon}</span>
          {badgeLabel && (
            <span className={`font-manrope text-xs font-semibold ${catColors.text}`}>{badgeLabel}</span>
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

// ── SearchBar component ───────────────────────────────────────────────────
function SearchBar({ isAr, t }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Build plant index once
  const plantIndex = useMemo(() => Object.values(PLANTS).map(p => {
    const arData = PLANT_TRANSLATIONS.ar[p.id];
    return {
      type: 'plant',
      id: p.id,
      name: p.name,
      nameAr: arData?.name ?? p.name,
      latinName: p.latinName,
      shortDescription: p.shortDescription,
      category: p.category,
      image: p.image,
      searchText: [p.name, p.latinName, arData?.name ?? '', p.category].join(' ').toLowerCase(),
    };
  }), []);

  // Build category index once
  const catIndex = useMemo(() => {
    const items = [];
    CATEGORIES.forEach(cat => {
      const colors = CAT_ICON_COLORS[cat.id] ?? CAT_ICON_COLORS['immunity'];
      items.push({
        type: 'category',
        id: cat.id,
        name: cat.name,
        nameAr: CAT_AR_NAMES[cat.id] ?? cat.name,
        icon: CAT_ICONS[cat.id] ?? 'eco',
        colors,
        plantCount: cat.subcategories?.reduce((s, sub) => s + (sub.plants?.length ?? 0), 0) ?? 0,
        url: `/category/${cat.id}`,
        searchText: [cat.name, CAT_AR_NAMES[cat.id] ?? '', cat.description ?? ''].join(' ').toLowerCase(),
      });
      cat.subcategories?.forEach(sub => {
        items.push({
          type: 'subcategory',
          id: sub.id,
          name: sub.name,
          nameAr: sub.name,
          parentName: cat.name,
          parentNameAr: CAT_AR_NAMES[cat.id] ?? cat.name,
          icon: CAT_ICONS[cat.id] ?? 'eco',
          colors,
          plantCount: sub.plants?.length ?? 0,
          url: `/category/${cat.id}/${sub.id}`,
          searchText: [sub.name, cat.name, CAT_AR_NAMES[cat.id] ?? '', sub.description ?? ''].join(' ').toLowerCase(),
        });
      });
    });
    return items;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { plants: [], categories: [] };
    const plants = plantIndex.filter(p => p.searchText.includes(q)).slice(0, 5);
    const categories = catIndex.filter(c => c.searchText.includes(q)).slice(0, 3);
    return { plants, categories };
  }, [query, plantIndex, catIndex]);

  const allResults = [...results.plants, ...results.categories];
  const hasResults = allResults.length > 0;
  const hasQuery = query.trim().length > 0;
  const showDropdown = isFocused && (hasQuery || true);

  // Click outside closes dropdown
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsFocused(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsFocused(true);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const goToResult = useCallback((result) => {
    if (!result) return;
    const url = result.type === 'plant' ? `/plant/${result.id}` : result.url;
    navigate(url);
    setQuery('');
    setIsFocused(false);
    setActiveIndex(-1);
  }, [navigate]);

  const handleKeyDown = (e) => {
    if (!isFocused) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, allResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0) goToResult(allResults[activeIndex]);
      else if (allResults.length > 0) goToResult(allResults[0]);
    } else if (e.key === 'Escape') {
      setQuery('');
      setIsFocused(false);
      setActiveIndex(-1);
      inputRef.current?.blur();
    }
  };

  // Quick-access categories shown when focused + empty
  const quickCats = CATEGORIES.slice(0, 5);

  return (
    <div ref={containerRef} className={`relative w-full max-w-2xl mx-auto mb-8 sm:mb-10 z-40`}>
      {/* Input */}
      <div className={`flex items-center gap-3 bg-white/90 backdrop-blur-md border-2 rounded-2xl px-4 py-3 shadow-botanical transition-all duration-200 ${isFocused ? 'border-primary shadow-xl ring-4 ring-primary/10' : 'border-white/60 hover:border-primary/40'} ${isAr ? 'flex-row-reverse' : ''}`}>
        <span className="material-symbols-outlined text-primary/70 text-xl flex-none">search</span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setActiveIndex(-1); }}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={t('search_placeholder')}
          dir={isAr ? 'rtl' : 'ltr'}
          className={`flex-1 bg-transparent font-manrope text-sm text-on-surface placeholder:text-on-surface-variant/60 outline-none min-w-0 ${isAr ? 'text-right' : 'text-left'}`}
        />
        {query ? (
          <button
            onClick={() => { setQuery(''); setActiveIndex(-1); inputRef.current?.focus(); }}
            className="flex-none w-5 h-5 rounded-full bg-on-surface-variant/20 flex items-center justify-center hover:bg-on-surface-variant/30 transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-sm leading-none">close</span>
          </button>
        ) : (
          <img src="/images/nabta-logo.png" alt="Nabta" className="h-6 w-auto object-contain flex-none opacity-50" />
        )}
      </div>

      {/* Dropdown */}
      {isFocused && (
        <div className={`absolute top-full mt-2 w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden animate-slide-up`}>
          {/* No query: quick access */}
          {!hasQuery && (
            <div className="p-4">
              <p className={`font-manrope text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-3 ${isAr ? 'text-right' : 'text-left'}`}>
                {t('search_quick_access')}
              </p>
              <div className={`flex flex-wrap gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
                {quickCats.map(cat => {
                  const colors = CAT_ICON_COLORS[cat.id] ?? CAT_ICON_COLORS['immunity'];
                  return (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.id}`}
                      onClick={() => setIsFocused(false)}
                      className={`inline-flex items-center gap-1.5 ${colors.chip} border rounded-full px-3 py-1.5 font-manrope text-xs font-semibold hover:opacity-80 transition-opacity ${isAr ? 'flex-row-reverse' : ''}`}
                    >
                      <span className="material-symbols-outlined text-sm">{CAT_ICONS[cat.id]}</span>
                      {isAr ? (CAT_AR_NAMES[cat.id] ?? cat.name) : cat.name}
                    </Link>
                  );
                })}
              </div>
              <p className={`font-manrope text-xs text-on-surface-variant/50 mt-3 ${isAr ? 'text-right' : 'text-left'}`}>
                {t('search_hint')}
              </p>
            </div>
          )}

          {/* Has query + results */}
          {hasQuery && hasResults && (
            <div className="py-2">
              {/* Plants */}
              {results.plants.length > 0 && (
                <div>
                  <p className={`font-manrope text-xs font-semibold text-on-surface-variant uppercase tracking-widest px-4 py-2 ${isAr ? 'text-right' : 'text-left'}`}>
                    {t('search_plants')}
                  </p>
                  {results.plants.map((p, i) => {
                    const isActive = activeIndex === i;
                    const colors = CAT_ICON_COLORS[p.category] ?? CAT_ICON_COLORS['immunity'];
                    return (
                      <button
                        key={p.id}
                        onMouseDown={() => goToResult(p)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors ${isActive ? 'bg-primary/5' : 'hover:bg-surface-container/50'} ${isAr ? 'flex-row-reverse text-right' : 'text-left'}`}
                      >
                        <div className="flex-none w-10 h-10 rounded-xl overflow-hidden bg-surface-container shadow-sm">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-manrope text-sm font-semibold text-on-surface truncate">{isAr ? p.nameAr : p.name}</p>
                          <p className="font-manrope text-xs text-on-surface-variant italic truncate">{p.latinName}</p>
                        </div>
                        <span className={`flex-none font-manrope text-xs font-semibold ${colors.chip} border rounded-full px-2 py-0.5`}>
                          {isAr ? (CAT_AR_NAMES[p.category] ?? p.category) : (CAT_EN_NAMES[p.category] ?? p.category)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Categories */}
              {results.categories.length > 0 && (
                <div>
                  <p className={`font-manrope text-xs font-semibold text-on-surface-variant uppercase tracking-widest px-4 py-2 ${isAr ? 'text-right' : 'text-left'}`}>
                    {t('search_categories')}
                  </p>
                  {results.categories.map((c, i) => {
                    const idx = results.plants.length + i;
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={c.id}
                        onMouseDown={() => goToResult(c)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors ${isActive ? 'bg-primary/5' : 'hover:bg-surface-container/50'} ${isAr ? 'flex-row-reverse text-right' : 'text-left'}`}
                      >
                        <div className={`flex-none w-10 h-10 rounded-xl ${c.colors.bg} ${c.colors.text} flex items-center justify-center shadow-sm`}>
                          <span className="material-symbols-outlined text-xl">{c.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-manrope text-sm font-semibold text-on-surface truncate">{isAr ? c.nameAr : c.name}</p>
                          {c.type === 'subcategory' && (
                            <p className="font-manrope text-xs text-on-surface-variant truncate">
                              {isAr ? c.parentNameAr : c.parentName}
                            </p>
                          )}
                        </div>
                        <span className="flex-none font-manrope text-xs text-on-surface-variant/60 bg-surface-container rounded-full px-2 py-0.5 border border-outline-variant/30">
                          {c.plantCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* No results */}
          {hasQuery && !hasResults && (
            <div className={`px-4 py-6 text-center`}>
              <span className="material-symbols-outlined text-3xl text-on-surface-variant/40 mb-2 block">search_off</span>
              <p className="font-manrope text-sm text-on-surface-variant">
                {t('search_no_results')} <span className="font-semibold text-on-surface">"{query}"</span>
              </p>
            </div>
          )}

          {/* Footer link */}
          <div className={`border-t border-outline-variant/20 px-4 py-2.5 flex items-center gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
            <button
              type="button"
              onMouseDown={() => { navigate('/categories'); setIsFocused(false); setQuery(''); setActiveIndex(-1); }}
              className={`flex-1 flex items-center gap-1.5 font-manrope text-xs text-primary font-semibold hover:underline ${isAr ? 'flex-row-reverse justify-end' : ''}`}
            >
              <span className="material-symbols-outlined text-sm">grid_view</span>
              {t('search_browse_all')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Egyptian Medicine static data ─────────────────────────────────────────
const EGYPTIAN_RECIPES = [
  {
    ref: 'Eb 714',
    title: 'Chemical Microdermabrasion',
    context: "To smooth textured skin and clear sun damage, Egyptians formulated the world's first recorded chemical peel.",
    ingredients: ['Honey', 'Sodium carbonate', 'Sea salt', 'Alabaster flour'],
    recipeText: 'Equal parts honey, sodium carbonate, sea salt, and finely ground alabaster flour mixed into a gritty paste and scrubbed into the skin.',
    image: '/images/egyptian-skin.jpg',
    ar: {
      title: 'التقشير الكيميائي الدقيق',
      context: 'لتنعيم الجلد الخشن ومعالجة أضرار الشمس، ابتكر المصريون القدماء أول تقشير كيميائي مسجّل في التاريخ.',
      ingredients: ['العسل', 'كربونات الصوديوم', 'ملح البحر', 'دقيق الألاباستر المطحون'],
      recipeText: 'أجزاء متساوية من العسل وكربونات الصوديوم وملح البحر ودقيق الألاباستر المطحون ناعماً تُخلط لتكوين عجينة حبيبية تُدلَّك على الجلد.',
    },
  },
  {
    ref: 'Eb 716–721',
    title: 'Sun Protection & Hyperpigmentation',
    context: 'To counteract the harsh desert sun and treat dark spots, both nobles and laborers used protective barrier oils.',
    ingredients: ['Lupin seed oil', 'Bitter almond oil', 'Wild cardamom'],
    recipeText: 'Cold-pressed Lupin seed oil blended with bitter almond oil and wild cardamom.',
    image: '/images/egyptian-sun.jpg',
    ar: {
      title: 'الحماية من الشمس وفرط التصبغ',
      context: 'لمواجهة أشعة الشمس الصحراوية القاسية وعلاج البقع الداكنة، استخدم النبلاء والعمال على حدٍّ سواء زيوتاً واقية.',
      ingredients: ['زيت بذور الترمس', 'زيت اللوز المر', 'الهيل البري'],
      recipeText: 'زيت بذور الترمس المعصور على البارد يُمزج مع زيت اللوز المر والهيل البري.',
    },
  },
  {
    ref: 'Eb 771–777',
    title: 'Alopecia & Hair Regrowth',
    context: 'To combat balding and strengthen hair follicles, a complex scalp stimulant was applied.',
    ingredients: ['Fenugreek seeds', 'Castor oil', 'Rosemary'],
    recipeText: 'A warm oil infusion made from fenugreek seeds, castor oil, and rosemary.',
    image: '/images/egyptian-hair.jpg',
    ar: {
      title: 'الثعلبة وإعادة نمو الشعر',
      context: 'لمكافحة الصلع وتقوية بصيلات الشعر، كان يُطبَّق منشّط مركّب لفروة الرأس.',
      ingredients: ['بذور الحلبة', 'زيت الخروع', 'إكليل الجبل'],
      recipeText: 'منقوع زيتي دافئ مصنوع من بذور الحلبة وزيت الخروع وإكليل الجبل.',
    },
  },
];

const EGYPTIAN_REFS = [
  { label: 'Doctors, Ills & Herbs of Ancient Egypt', url: 'https://share.google/v01oBWv8zvirXsIXp' },
  { label: 'Ebers Papyrus — Britannica', url: 'https://www.britannica.com/topic/Ebers-papyrus' },
  { label: 'Source 3', url: 'https://share.google/dmkJW7CaPgBmbgimY' },
  { label: 'Source 4', url: 'https://share.google/p2ebT75XaAFqiTKby' },
  { label: 'Source 5', url: 'https://share.google/7ygc7GkEiIbqYNw8y' },
];

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
      <section className="relative min-h-screen flex items-center pt-28">
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
          <SearchBar isAr={isAr} t={t} />
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
        <div className={`flex items-end justify-between mb-10 gap-4 flex-wrap ${isAr ? 'flex-row-reverse' : ''}`}>
          <div className={isAr ? 'text-right' : ''}>
            <p className="font-manrope text-xs font-bold text-secondary tracking-widest uppercase mb-1">
              {t('home_featured_overline')}
            </p>
            <h2 className="font-caslon text-headline-sm text-primary">{t('home_featured_title')}</h2>
          </div>
          <Link
            to="/categories"
            className={`flex items-center gap-1.5 font-manrope text-sm font-semibold text-secondary hover:text-primary transition-colors duration-200 ${isAr ? 'flex-row-reverse' : ''}`}
          >
            {t('home_featured_link')}
            <span
              className="material-symbols-outlined text-base"
              style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}
            >arrow_forward</span>
          </Link>
        </div>
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
                  {(potm.tags ?? []).slice(0, 3).map(tag => (
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

      {/* ── Ancient Egyptian Medicine ─────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#061b0e] via-[#0a2212] to-[#061b0e] pt-6 pb-20">
        <div className="section-container">

          {/* Header */}
          <div className={`flex items-end justify-between mb-12 gap-4 flex-wrap ${isAr ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
              <span className="text-3xl text-amber-400 select-none leading-none">☥</span>
              <div className={isAr ? 'text-right' : ''}>
                <p className="font-manrope text-xs font-bold text-amber-400/70 tracking-widest uppercase mb-1">
                  {t('home_egyptian_overline')}
                </p>
                <h2 className="font-caslon text-headline-sm text-primary-fixed leading-tight">
                  {t('home_egyptian_title')}
                </h2>
              </div>
            </div>
            <span className="font-manrope text-xs font-semibold text-primary-fixed-dim bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              {t('egyptian_year')}
            </span>
          </div>

          {/* Intro: papyrus image + text */}
          <div className={`flex flex-col md:flex-row gap-8 mb-14 items-center ${isAr ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-60 flex-shrink-0">
              <div className="rounded-xl overflow-hidden border border-amber-600/20 shadow-[0_0_40px_rgba(217,119,6,0.12)]">
                <img
                  src="/images/ebers-papyrus.jpg"
                  alt="Ebers Papyrus"
                  className="w-full h-56 md:h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-manrope text-xs text-amber-400/50 text-center mt-2 tracking-widest uppercase">
                {t('egyptian_papyrus_label')} · c. 1550 BCE
              </p>
            </div>
            <div className={`flex-1 ${isAr ? 'text-right' : ''}`}>
              <p className="font-manrope text-base text-primary-fixed leading-relaxed mb-4">
                {t('egyptian_intro1')}
              </p>
              <p className="font-manrope text-sm text-primary-fixed-dim leading-relaxed">
                {t('egyptian_intro2')}
              </p>
            </div>
          </div>

          {/* Recipe cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {EGYPTIAN_RECIPES.map((recipe, i) => {
              const r = (isAr && recipe.ar) ? recipe.ar : recipe;
              return (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <span className={`absolute top-3 ${isAr ? 'left-3' : 'right-3'} font-mono text-xs font-bold text-amber-300 bg-amber-900/70 backdrop-blur-sm border border-amber-600/40 px-2.5 py-1 rounded-full`}>
                    {recipe.ref}
                  </span>
                </div>
                <div className={`p-5 ${isAr ? 'text-right' : ''}`}>
                  <h3 className="font-caslon text-lg text-primary-fixed mb-1 leading-tight">{r.title}</h3>
                  <p className="font-manrope text-xs text-primary-fixed-dim mb-4 leading-relaxed">{r.context}</p>
                  <div className="h-px bg-amber-600/20 mb-4" />
                  <p className="font-manrope text-xs font-bold text-amber-400 uppercase tracking-widest mb-2.5">
                    {t('egyptian_recipe_label')}
                  </p>
                  <div className={`flex flex-wrap gap-1.5 ${isAr ? 'flex-row-reverse' : ''}`}>
                    {r.ingredients.map((ing, j) => (
                      <span key={j} className="font-manrope text-xs text-primary-fixed-dim bg-white/10 border border-white/15 px-2.5 py-1 rounded-full">
                        {ing}
                      </span>
                    ))}
                  </div>
                  {r.recipeText && (
                    <p className="font-manrope text-xs text-primary-fixed-dim/70 mt-3 leading-relaxed italic">{r.recipeText}</p>
                  )}
                </div>
              </div>
              );
            })}
          </div>

          {/* References */}
          <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${isAr ? 'flex-row-reverse' : ''}`}>
            <span className="font-manrope text-xs text-primary-fixed-dim/40 uppercase tracking-widest">
              {t('egyptian_refs_label')}:
            </span>
            {EGYPTIAN_REFS.map((ref, i) => (
              <a
                key={i}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope text-xs text-primary-fixed-dim/50 hover:text-amber-400 flex items-center gap-1 transition-colors duration-200"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>open_in_new</span>
                {ref.label}
              </a>
            ))}
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
          <StatCard icon="local_florist" label={t('about_stats_plants')}         value="58"                                                                                          sub={t('about_stats_plants_sub')}         color="green"  delay={80}  isAr={isAr} />
          <StatCard icon="assignment"    label={t('about_stats_questionnaires')} value={questionnaireCount ?? t('about_stats_loading')}                                                                                 sub={t('about_stats_questionnaires_sub')} color="blue"   delay={160} isAr={isAr} />
          <StatCard icon="visibility"    label={t('about_stats_top_plant')}      value={topPlantName ?? (potm ? (isAr ? (PLANT_TRANSLATIONS.ar[potm.id]?.name ?? potm.name) : potm.name) : t('about_stats_loading'))} sub={t('about_stats_top_sub')}            color="amber"  delay={240} isAr={isAr} />
          <StatCard icon="category"      label={t('about_stats_categories')}     value="5"                                                                                                                              sub={t('about_stats_categories_sub')}     color="purple" delay={320} isAr={isAr} className="col-span-2 sm:col-span-1" />
        </div>
      </section>
    </div>
  );
}
