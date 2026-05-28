import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PLANTS, CATEGORIES } from '../data/plants.js';
import { useLanguage, PLANT_TRANSLATIONS, TAG_TRANSLATIONS } from '../contexts/LanguageContext.jsx';
import PlantCard from '../components/PlantCard.jsx';

const NAME_KEY = {
  immunity: 'cat_immunity_name', digestive: 'cat_digestive_name',
  respiratory: 'cat_respiratory_name', 'womens-health': 'cat_womens_name',
  uti: 'cat_uti_name',
};
const SUB_NAME_KEY = {
  'menstrual-health': 'sub_menstrual', 'pregnancy-support': 'sub_pregnancy',
  'breast-feeding': 'sub_breastfeeding', 'hair-care': 'sub_haircare',
  'skin-care': 'sub_skincare', 'constipation-relief': 'sub_constipation',
  'diarrhea-support': 'sub_diarrhea', dyspepsia: 'sub_dyspepsia', ibs: 'sub_ibs',
  cold: 'sub_cold', rhinitis: 'sub_rhinitis', sinusitis: 'sub_sinusitis', cough: 'sub_cough',
  'immune-boosting': 'sub_immune', 'anti-oxidant-rich': 'sub_antioxidant',
  'anti-inflammatory': 'sub_antiinflammatory',
  'anti-septic': 'sub_antiseptic', diuretics: 'sub_diuretics', bph: 'sub_bph',
};

function MoaAccordionItem({ title, detail }) {
  const { isAr } = useLanguage();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isOpen = open || hovered;
  return (
    <div
      className="border border-surface-container-high rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center justify-between gap-3 px-5 py-4 bg-surface-container-lowest hover:bg-surface-container transition-colors ${isAr ? 'text-right' : 'text-left'}`}
      >
        <span className="font-manrope font-semibold text-sm text-primary">{title}</span>
        <span
          className="material-symbols-outlined text-secondary text-base flex-shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
        >expand_more</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '500px' : '0px' }}
      >
        <p className={`font-manrope text-sm text-on-surface-variant leading-relaxed px-5 py-4 border-t border-surface-container-high ${isAr ? 'text-right' : ''}`}>
          {detail}
        </p>
      </div>
    </div>
  );
}

export default function PlantDetailPage() {
  const { id }      = useParams();
  const { t, isAr } = useLanguage();
  const plant       = PLANTS[id];
  const arData      = isAr ? PLANT_TRANSLATIONS.ar[id] : null;

  if (!plant) return (
    <div className="pt-32 section-container text-center">
      <p className="font-caslon text-2xl text-primary">{t('not_found')}</p>
      <Link to="/categories" className="text-secondary mt-4 inline-block">{t('back_categories')}</Link>
    </div>
  );

  const category    = CATEGORIES.find(c => c.id === plant.category);
  const subcategory = category?.subcategories?.find(s => s.id === plant.subcategory);
  const related     = (plant.relatedPlants ?? []).map(rid => PLANTS[rid]).filter(Boolean);

  const name             = arData?.name            ?? plant.name;
  const shortDescription = arData?.shortDescription ?? plant.shortDescription;
  const description      = arData?.description      ?? plant.description;
  const history          = arData?.history          ?? plant.history;
  const symptoms         = arData?.symptoms         ?? plant.symptoms;
  const benefitsData     = arData?.benefits         ?? plant.benefits;
  const prepData         = arData?.preparation      ?? plant.preparation;
  const botFacts         = arData?.botanicalFacts   ?? plant.botanicalFacts;

  // If Arabic field is a plain string (not yet structured), fall back to English structured data
  const arArr = (arField, enField) => Array.isArray(arField) ? arField : enField;
  const arObj = (arField, enField) => (arField && typeof arField === 'object' && !Array.isArray(arField)) ? arField : enField;

  const activeConstituents = arArr(arData?.activeConstituents, plant.activeConstituents);
  const moa               = arArr(arData?.moa,               plant.moa);
  const uses              = arArr(arData?.uses,              plant.uses);
  const howToUse          = arArr(arData?.howToUse,          plant.howToUse);
  const suitableAgeGroups = arArr(arData?.suitableAgeGroups, plant.suitableAgeGroups);
  const dosage            = arObj(arData?.dosage,            plant.dosage);
  const overdose          = arObj(arData?.overdose,          plant.overdose);
  const sideEffects       = arArr(arData?.sideEffects,       plant.sideEffects);
  const contraindications = arArr(arData?.contraindications, plant.contraindications);
  const drugInteractions  = arArr(arData?.drugInteractions,  plant.drugInteractions);
  const storage           = arObj(arData?.storage,           plant.storage);
  const { marketedProducts } = plant;
  const warnings          = arArr(arData?.warnings,          plant.warnings);
  const factsAndMyths     = arArr(arData?.factsAndMyths,     plant.factsAndMyths);

  const factLabels = {
    family:           t('plant_family'),
    nativeRegion:     t('plant_native'),
    growthHabit:      t('plant_growth'),
    activeCompounds:  t('plant_compounds'),
    clinicalEvidence: t('plant_clinical_evidence'),
  };

  return (
    <div className="page-enter pt-20">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-container pt-10 pb-16 animate-slide-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex gap-2 mb-4 flex-wrap">
              {plant.tags.map(tag => (
                <span key={tag} className="chip text-xs">
                  {isAr ? (TAG_TRANSLATIONS[tag] ?? tag) : tag}
                </span>
              ))}
            </div>
            <h1 className="font-caslon text-headline-md md:text-headline-lg text-primary mb-1">{name}</h1>
            <p className="font-caslon italic text-on-surface-variant text-lg mb-5">{plant.latinName}</p>
            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed mb-8 max-w-lg">
              {shortDescription}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden h-72 md:h-96 bg-surface-container shadow-botanical-lg">
            <img src={plant.image} alt={name} className={`w-full h-full ${plant.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover plant-hero-img'}`} loading="eager" />
          </div>
        </div>
      </section>

      {/* ── Demo Banner ───────────────────────────────────────────────────── */}
      {plant.isDemo && (
        <section className="section-container pb-24">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-10 text-center max-w-xl mx-auto">
            <span className="material-symbols-outlined text-amber-500 text-5xl mb-4 block">science</span>
            <h2 className="font-caslon text-headline-sm text-amber-800 mb-3">{t('demo_badge')}</h2>
            <p className="font-manrope text-body-md text-amber-700 leading-relaxed">{description}</p>
          </div>
        </section>
      )}

      {/* ── Real plant content ────────────────────────────────────────────── */}
      {!plant.isDemo && (
        <section className="section-container pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

            {/* ── Main column ─────────────────────────────────────────────── */}
            <div className="space-y-12 animate-slide-up anim-delay-100">

              {/* Description + History */}
              {(description || history) && (
                <div>
                  {description && (
                    <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed mb-6">{description}</p>
                  )}
                  {history && (
                    <>
                      <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_history')}</h2>
                      <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">{history}</p>
                    </>
                  )}
                </div>
              )}

              {/* Warnings */}
              {warnings?.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-red-600">warning</span>
                    <h2 className="font-manrope font-bold text-red-800">{t('plant_warnings')}</h2>
                  </div>
                  <ul className="space-y-2">
                    {warnings.map((w, i) => (
                      <li key={i} className={`font-manrope text-sm text-red-700 flex gap-2 items-start ${isAr ? 'text-right' : ''}`}>
                        <span className="material-symbols-outlined text-red-400 text-base flex-shrink-0 mt-0.5"
                          style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>chevron_right</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Active Constituents */}
              {activeConstituents?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_active_constituents')}</h2>
                  <div className="space-y-3">
                    {activeConstituents.map((c, i) => (
                      <div key={i} className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5 transition-shadow duration-200 hover:shadow-md">
                        <div className={`flex items-start gap-4 mb-2 ${isAr ? 'text-right' : ''}`}>
                          <h4 className="font-manrope font-semibold text-sm text-primary flex-1">{c.name}</h4>
                          {c.percentage && (
                            <span className="bg-secondary-fixed text-on-secondary-fixed font-manrope text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                              {c.percentage}
                            </span>
                          )}
                        </div>
                        <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{c.effect}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mechanism of Action — accordion */}
              {moa?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_moa')}</h2>
                  <div className="space-y-2">
                    {moa.map((item, i) => (
                      <MoaAccordionItem key={i} title={item.title} detail={item.detail} />
                    ))}
                  </div>
                </div>
              )}

              {/* Uses & Indications */}
              {uses?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_uses')}</h2>
                  <ul className="space-y-2">
                    {uses.map((u, i) => (
                      <li key={i} className={`flex gap-3 font-manrope text-body-md text-on-surface-variant items-start ${isAr ? 'text-right' : ''}`}>
                        <span className="material-symbols-outlined text-secondary text-base mt-0.5 flex-shrink-0">check_circle</span>
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How to Use */}
              {howToUse?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_how_to_use')}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {howToUse.map((h, i) => (
                      <div key={i} className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5">
                        <h4 className="font-caslon text-lg text-primary mb-2">{h.method}</h4>
                        <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{h.instruction}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suitable Age Groups */}
              {suitableAgeGroups?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_age_groups')}</h2>
                  <div className="space-y-3">
                    {suitableAgeGroups.map((ag, i) => (
                      <div key={i} className="flex gap-4 bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 items-start transition-shadow duration-200 hover:shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-on-primary-fixed text-sm">person</span>
                        </div>
                        <div className={isAr ? 'text-right flex-1' : 'flex-1'}>
                          <h4 className="font-manrope font-semibold text-sm text-primary mb-1">{ag.group}</h4>
                          <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{ag.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dosage */}
              {dosage && (dosage.standard || dosage.forms?.length > 0) && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_dosage')}</h2>
                  {dosage.standard && (
                    <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed mb-4">{dosage.standard}</p>
                  )}
                  {dosage.forms?.length > 0 && (
                    <div className="space-y-3">
                      {dosage.forms.map((f, i) => (
                        <div key={i} className="flex gap-4 bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 items-start transition-shadow duration-200 hover:shadow-sm">
                          <span className="material-symbols-outlined text-secondary text-base flex-shrink-0 mt-0.5">medication</span>
                          <div className={isAr ? 'text-right flex-1' : 'flex-1'}>
                            <h4 className="font-manrope font-semibold text-sm text-primary mb-1">{f.form}</h4>
                            <p className="font-manrope text-sm text-on-surface-variant">{f.dose}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Side Effects */}
              {sideEffects?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_side_effects')}</h2>
                  <ul className="space-y-2">
                    {sideEffects.map((s, i) => (
                      <li key={i} className={`flex gap-3 font-manrope text-body-md text-on-surface-variant items-start ${isAr ? 'text-right' : ''}`}>
                        <span className="material-symbols-outlined text-amber-500 text-base mt-0.5 flex-shrink-0">info</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Overdose */}
              {(overdose?.symptoms?.length > 0 || overdose?.management?.length > 0) && (
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-orange-600">emergency</span>
                    <h2 className="font-caslon text-headline-sm text-orange-800">{t('plant_overdose')}</h2>
                  </div>
                  {overdose.intro && (
                    <p className={`font-manrope text-sm text-orange-700 mb-4 italic ${isAr ? 'text-right' : ''}`}>{overdose.intro}</p>
                  )}
                  {overdose.symptoms?.length > 0 && (
                    <div className="mb-4">
                      <h4 className={`font-manrope font-semibold text-sm text-orange-700 mb-2 uppercase tracking-wide ${isAr ? 'text-right' : ''}`}>{t('plant_overdose_symptoms')}</h4>
                      <ul className="space-y-1">
                        {overdose.symptoms.map((s, i) => (
                          <li key={i} className={`font-manrope text-sm text-orange-700 flex gap-2 items-start ${isAr ? 'text-right' : ''}`}>
                            <span className="material-symbols-outlined text-orange-400 text-base flex-shrink-0 mt-0.5"
                              style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>chevron_right</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {overdose.management?.length > 0 && (
                    <div>
                      <h4 className={`font-manrope font-semibold text-sm text-orange-700 mb-2 uppercase tracking-wide ${isAr ? 'text-right' : ''}`}>{t('plant_overdose_management')}</h4>
                      <ul className="space-y-1">
                        {overdose.management.map((m, i) => (
                          <li key={i} className={`font-manrope text-sm text-orange-700 flex gap-2 items-start ${isAr ? 'text-right' : ''}`}>
                            <span className="material-symbols-outlined text-orange-400 text-base flex-shrink-0 mt-0.5"
                              style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>chevron_right</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Contraindications */}
              {contraindications?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_contraindications')}</h2>
                  <ul className="space-y-2">
                    {contraindications.map((c, i) => (
                      <li key={i} className={`flex gap-3 font-manrope text-body-md text-on-surface-variant items-start ${isAr ? 'text-right' : ''}`}>
                        <span className="material-symbols-outlined text-red-400 text-base mt-0.5 flex-shrink-0">block</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Drug Interactions */}
              {drugInteractions?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_drug_interactions')}</h2>
                  <ul className="space-y-2">
                    {drugInteractions.map((d, i) => (
                      <li key={i} className={`flex gap-3 font-manrope text-body-md text-on-surface-variant items-start ${isAr ? 'text-right' : ''}`}>
                        <span className="material-symbols-outlined text-purple-400 text-base mt-0.5 flex-shrink-0">pill</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Storage */}
              {storage?.forms?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_storage')}</h2>
                  <div className="space-y-3">
                    {storage.forms.map((f, i) => (
                      <div key={i} className="flex gap-4 bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 items-start">
                        <span className="material-symbols-outlined text-secondary text-base flex-shrink-0 mt-0.5">inventory_2</span>
                        <div className={isAr ? 'text-right flex-1' : 'flex-1'}>
                          <h4 className="font-manrope font-semibold text-sm text-primary mb-1">{f.form}</h4>
                          <p className="font-manrope text-sm text-on-surface-variant">{f.instructions}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Marketed Products */}
              {marketedProducts?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_marketed')}</h2>
                  {marketedProducts.some(p => p?.image) ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {marketedProducts.map((p, i) => (
                        p?.image ? (
                          <div key={i} className="bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden flex flex-col items-center gap-2 p-3 hover:shadow-md transition-shadow duration-200">
                            <img src={p.image} alt={p.name} className="w-full h-32 object-contain rounded-lg" />
                            <p className="font-manrope text-xs text-on-surface-variant text-center leading-snug">{p.name}</p>
                          </div>
                        ) : (
                          <span key={i} className="bg-surface-container border border-surface-container-high font-manrope text-sm text-on-surface-variant px-4 py-2 rounded-full">
                            {p.name}
                          </span>
                        )
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {marketedProducts.map((p, i) => (
                        <span key={i} className="bg-surface-container border border-surface-container-high font-manrope text-sm text-on-surface-variant px-4 py-2 rounded-full">
                          {typeof p === 'string' ? p : p.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Benefits */}
              {benefitsData?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_benefits')}</h2>
                  <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed mb-6">
                    {t('plant_pharmacology_intro')}
                  </p>
                  <div className="space-y-3">
                    {benefitsData.map((b, i) => (
                      <div key={i} className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-on-secondary-fixed text-sm">{b.icon}</span>
                          </div>
                          <div className={isAr ? 'text-right flex-1' : 'flex-1'}>
                            <h4 className="font-manrope font-semibold text-sm text-primary mb-1">{b.title}</h4>
                            <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{b.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preparation Methods */}
              {prepData?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_preparation')}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prepData.map((prep, i) => (
                      <div key={i} className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5">
                        <h4 className="font-caslon text-lg text-primary mb-2">{prep.method}</h4>
                        <p className="font-manrope text-sm text-on-surface-variant leading-relaxed mb-3">{prep.desc}</p>
                        {prep.bestFor && (
                          <p className="font-manrope text-label-sm text-secondary uppercase tracking-wider">
                            {t('plant_best_for')} {prep.bestFor}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Symptoms */}
              {symptoms?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_symptoms')}</h2>
                  <div className="flex flex-wrap gap-2">
                    {symptoms.map(s => (
                      <span key={s} className="bg-primary-fixed text-on-primary-fixed font-manrope text-sm font-medium px-4 py-2 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Facts & Myths */}
              {factsAndMyths?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_facts_myths')}</h2>
                  <div className="space-y-4">
                    {factsAndMyths.map((item, i) => (
                      <div key={i} className="bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden">
                        <div className={`flex gap-3 items-start p-4 bg-red-50 border-b border-surface-container-high ${isAr ? 'text-right' : ''}`}>
                          <span className="material-symbols-outlined text-red-500 text-base flex-shrink-0 mt-0.5">close</span>
                          <div>
                            <p className="font-manrope text-xs font-bold text-red-700 uppercase tracking-wider mb-1">{t('plant_myth')}</p>
                            <p className="font-manrope text-sm text-red-700 leading-relaxed">{item.myth}</p>
                          </div>
                        </div>
                        <div className={`flex gap-3 items-start p-4 ${isAr ? 'text-right' : ''}`}>
                          <span className="material-symbols-outlined text-secondary text-base flex-shrink-0 mt-0.5">check_circle</span>
                          <div>
                            <p className="font-manrope text-xs font-bold text-secondary uppercase tracking-wider mb-1">{t('plant_fact')}</p>
                            <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{item.fact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scientific References */}
              {plant.references?.length > 0 && (
                <div>
                  <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_references')}</h2>
                  <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5 space-y-3">
                    {plant.references.map((ref, i) => (
                      <div key={i} className={`flex gap-3 items-start ${isAr ? 'text-right' : ''}`}>
                        <span className="font-manrope text-xs font-bold text-secondary bg-secondary-fixed px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{ref.text}</p>
                          {ref.url && (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-manrope text-xs text-secondary hover:text-primary transition-colors mt-1"
                            >
                              <span className="material-symbols-outlined text-sm">open_in_new</span>
                              {ref.url.includes('doi.org') ? 'View DOI' : ref.url.includes('pubmed') ? 'PubMed' : 'View Source'}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* ── Sidebar ─────────────────────────────────────────────────── */}
            <aside className="lg:sticky lg:top-24 self-start space-y-4 animate-fade-right anim-delay-200">

              {botFacts && Object.keys(botFacts).length > 0 && (
                <div className="bg-tertiary-fixed rounded-xl p-6">
                  <h3 className="font-caslon text-xl text-primary mb-4">{t('plant_botanical_facts')}</h3>
                  <div className="space-y-4">
                    {Object.entries(botFacts)
                      .filter(([k]) => k !== 'cultivationNotes' && botFacts[k])
                      .map(([k, v]) => (
                        <div key={k} className="border-b border-on-tertiary-fixed/20 pb-3 last:border-0 last:pb-0">
                          <p className="font-manrope text-xs text-on-tertiary-fixed-variant uppercase tracking-wider mb-0.5">
                            {factLabels[k] ?? k}
                          </p>
                          <p className="font-manrope text-sm font-semibold text-tertiary">{v}</p>
                        </div>
                      ))}
                  </div>
                  {botFacts.cultivationNotes && (
                    <div className="mt-4 pt-4 border-t border-on-tertiary-fixed/20">
                      <p className="font-manrope text-xs text-on-tertiary-fixed-variant uppercase tracking-wider mb-1">
                        {t('plant_cultivation')}
                      </p>
                      <p className="font-manrope text-sm text-tertiary leading-relaxed">{botFacts.cultivationNotes}</p>
                    </div>
                  )}
                </div>
              )}

              {category && subcategory && (
                <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4">
                  <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                    {t('plant_part_of')}
                  </p>
                  <Link
                    to={`/category/${category.id}/${subcategory.id}`}
                    className="flex items-center justify-between font-caslon text-primary hover:text-secondary transition-colors"
                  >
                    {t(SUB_NAME_KEY[subcategory.id]) ?? subcategory.name}
                    <span className="material-symbols-outlined text-base"
                      style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
                  </Link>
                </div>
              )}

              {category && (
                <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4">
                  <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                    {t('part_of_collection')}
                  </p>
                  <Link
                    to={`/category/${category.id}`}
                    className="flex items-center justify-between font-caslon text-primary hover:text-secondary transition-colors"
                  >
                    {t(NAME_KEY[category.id]) ?? category.name}
                    <span className="material-symbols-outlined text-base"
                      style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
                  </Link>
                </div>
              )}

            </aside>
          </div>
        </section>
      )}

      {/* ── Related Plants ───────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section-container pb-20">
          <h2 className="font-caslon text-headline-sm text-primary mb-6">{t('plant_related')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(rp => <PlantCard key={rp.id} plant={rp} />)}
          </div>
        </section>
      )}

    </div>
  );
}
