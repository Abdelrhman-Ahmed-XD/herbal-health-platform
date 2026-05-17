import { useParams, Link } from 'react-router-dom';
import { PLANTS, CATEGORIES } from '../data/plants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { PLANT_TRANSLATIONS } from '../contexts/LanguageContext.jsx';
import PlantCard from '../components/PlantCard.jsx';

const NAME_KEY = { immunity:'cat_immunity_name', digestive:'cat_digestive_name', respiratory:'cat_respiratory_name', 'womens-health':'cat_womens_name' };
const SUB_NAME_KEY = {
  'menstrual-health':'sub_menstrual','pregnancy-support':'sub_pregnancy','breast-feeding':'sub_breastfeeding',
  'hair-care':'sub_haircare','skin-care':'sub_skincare','constipation-relief':'sub_constipation',
  'diarrhea-support':'sub_diarrhea','dyspepsia':'sub_dyspepsia','ibs':'sub_ibs',
  'cold':'sub_cold','rhinitis':'sub_rhinitis','sinusitis':'sub_sinusitis','cough':'sub_cough',
  'immune-boosting':'sub_immune','anti-oxidant-rich':'sub_antioxidant','anti-inflammatory':'sub_antiinflammatory',
};

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

  const category      = CATEGORIES.find(c => c.id === plant.category);
  const subcategory   = category?.subcategories?.find(s => s.id === plant.subcategory);
  const relatedPlants = (plant.relatedPlants ?? []).map(rid => PLANTS[rid]).filter(Boolean);

  // Translated fields (fall back to English)
  const name        = arData?.name            ?? plant.name;
  const description = arData?.description     ?? plant.description;
  const history     = arData?.history         ?? plant.history;
  const benefits    = arData?.benefits        ?? plant.benefits;
  const botFacts    = arData?.botanicalFacts  ?? plant.botanicalFacts;
  const preparation = arData?.preparation     ?? plant.preparation;
  const symptoms    = arData?.symptoms        ?? plant.symptoms;

  const factLabels = {
    family:          t('plant_family'),
    nativeRegion:    t('plant_native'),
    growthHabit:     t('plant_growth'),
    activeCompounds: t('plant_compounds'),
  };

  return (
    <div className="page-enter pt-20">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="section-container pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex gap-2 mb-4 flex-wrap">
              {plant.tags.map(tag => <span key={tag} className="chip text-xs">{tag}</span>)}
            </div>
            <h1 className="font-caslon text-headline-md md:text-headline-lg text-primary mb-1">{name}</h1>
            <p className="font-caslon italic text-on-surface-variant text-lg mb-5">{plant.latinName}</p>
            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed mb-8 max-w-lg">
              {description}
            </p>
            <button className="bg-primary text-on-primary font-manrope font-semibold text-sm tracking-wide px-6 py-3 rounded-full hover:opacity-80 transition-all hover:-translate-y-0.5 shadow-botanical-sm">
              {t('plant_save_journal')}
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden h-72 md:h-96 bg-surface-container shadow-botanical-lg">
            <img src={plant.image} alt={name} className="w-full h-full object-cover" loading="eager" />
          </div>
        </div>
      </section>

      {/* ── Content + Sidebar ───────────────────────────────────────────── */}
      <section className="section-container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Main */}
          <div className="space-y-12">

            {/* History */}
            <div>
              <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_history')}</h2>
              <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed mb-6">{history}</p>
              {plant.secondaryImage && (
                <div className="rounded-xl overflow-hidden h-56 bg-surface-container">
                  <img src={plant.secondaryImage} alt={`${name} preparation`}
                    className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_benefits')}</h2>
              <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed mb-6">
                {t('plant_pharmacology_intro')}
              </p>
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-on-secondary-fixed text-sm">{b.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-manrope font-semibold text-sm text-primary mb-1">{b.title}</h4>
                        <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation */}
            <div>
              <h2 className="font-caslon text-headline-sm text-primary mb-4">{t('plant_preparation')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {preparation.map((prep, i) => (
                  <div key={i} className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5">
                    <h4 className="font-caslon text-lg text-primary mb-2">{prep.method}</h4>
                    <p className="font-manrope text-sm text-on-surface-variant leading-relaxed mb-3">{prep.desc}</p>
                    <p className="font-manrope text-label-sm text-secondary uppercase tracking-wider">
                      {t('plant_best_for')} {prep.bestFor}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Symptoms */}
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
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            <div className="bg-tertiary-fixed rounded-xl p-6">
              <h3 className="font-caslon text-xl text-primary mb-4">{t('plant_botanical_facts')}</h3>
              <div className="space-y-4">
                {Object.entries(botFacts)
                  .filter(([k]) => k !== 'cultivationNotes')
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

            {/* Subcategory link */}
            {category && subcategory && (
              <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4">
                <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                  {t('plant_part_of')}
                </p>
                <Link
                  to={`/category/${category.id}/${subcategory.id}`}
                  className={`flex items-center justify-between font-caslon text-primary hover:text-secondary transition-colors ${isAr ? 'flex-row-reverse' : ''}`}
                >
                  {t(SUB_NAME_KEY[subcategory.id]) ?? subcategory.name}
                  <span className="material-symbols-outlined text-base"
                    style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
                </Link>
              </div>
            )}

            {/* Category link */}
            {category && (
              <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4">
                <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                  {t('part_of_collection')}
                </p>
                <Link
                  to={`/category/${category.id}`}
                  className={`flex items-center justify-between font-caslon text-primary hover:text-secondary transition-colors ${isAr ? 'flex-row-reverse' : ''}`}
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

      {/* ── Related Plants ───────────────────────────────────────────────── */}
      {relatedPlants.length > 0 && (
        <section className="section-container pb-20">
          <h2 className="font-caslon text-headline-sm text-primary mb-6">{t('plant_related')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPlants.map(rp => <PlantCard key={rp.id} plant={rp} />)}
          </div>
        </section>
      )}
    </div>
  );
}
