import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CATEGORIES, PLANTS } from '../data/plants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { PLANT_TRANSLATIONS } from '../contexts/LanguageContext.jsx';
import PlantCard from '../components/PlantCard.jsx';
import { fetchPlantViews, trackPlantView } from '../services/firestoreService.js';

const NAME_KEY = { immunity:'cat_immunity_name', digestive:'cat_digestive_name', respiratory:'cat_respiratory_name', 'womens-health':'cat_womens_name', uti:'cat_uti_name' };
const SUB_NAME_KEY = {
  'menstrual-health':'sub_menstrual','pregnancy-support':'sub_pregnancy','breast-feeding':'sub_breastfeeding',
  'hair-care':'sub_haircare','skin-care':'sub_skincare','constipation-relief':'sub_constipation',
  'diarrhea-support':'sub_diarrhea','dyspepsia':'sub_dyspepsia','ibs':'sub_ibs',
  'cold':'sub_cold','rhinitis':'sub_rhinitis','sinusitis':'sub_sinusitis','cough':'sub_cough',
  'immune-boosting':'sub_immune','anti-oxidant-rich':'sub_antioxidant','anti-inflammatory':'sub_antiinflammatory',
  'anti-septic':'sub_antiseptic','diuretics':'sub_diuretics','bph':'sub_bph',
};
const SUB_DESC_KEY = {
  'menstrual-health':'sub_menstrual_desc','pregnancy-support':'sub_pregnancy_desc','breast-feeding':'sub_breastfeeding_desc',
  'hair-care':'sub_haircare_desc','skin-care':'sub_skincare_desc','constipation-relief':'sub_constipation_desc',
  'diarrhea-support':'sub_diarrhea_desc','dyspepsia':'sub_dyspepsia_desc','ibs':'sub_ibs_desc',
  'cold':'sub_cold_desc','rhinitis':'sub_rhinitis_desc','sinusitis':'sub_sinusitis_desc','cough':'sub_cough_desc',
  'immune-boosting':'sub_immune_desc','anti-oxidant-rich':'sub_antioxidant_desc','anti-inflammatory':'sub_antiinflammatory_desc',
  'anti-septic':'sub_antiseptic_desc','diuretics':'sub_diuretics_desc','bph':'sub_bph_desc',
};

export default function SubcategoryPage() {
  const { id, subId }    = useParams();
  const { t, isAr }      = useLanguage();
  const [popularPlant, setPopularPlant] = useState(null);

  const category    = CATEGORIES.find(c => c.id === id);
  const subcategory = category?.subcategories?.find(s => s.id === subId);

  const categoryPlants = subcategory?.plants
    ? subcategory.plants.map(pid => PLANTS[pid]).filter(Boolean)
    : Object.values(PLANTS).filter(p => p.subcategory === subId);

  useEffect(() => {
    if (categoryPlants.length === 0) return;
    // Show local result immediately
    const localViews = (() => {
      try { return JSON.parse(localStorage.getItem('plantViews') || '{}'); } catch { return {}; }
    })();
    const pickBest = (views) => categoryPlants.reduce(
      (best, p) => (views[p.id] || 0) > (views[best.id] || 0) ? p : best,
      categoryPlants[0]
    );
    setPopularPlant(pickBest(localViews));
    // Update async with merged Firebase data
    fetchPlantViews().then(merged => {
      if (merged && Object.keys(merged).length > 0) setPopularPlant(pickBest(merged));
    }).catch(() => {});
  }, [subId]);

  if (!category || !subcategory) return <Navigate to="/categories" />;

  const subName  = t(SUB_NAME_KEY[subId]) ?? subcategory.name;
  const catName  = t(NAME_KEY[id])        ?? category.name;

  return (
    <div className="page-enter pt-20">
      {/* Header */}
      <section className="section-container pt-10 pb-8">
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          <Link to={`/category/${id}`} className="chip text-xs hover:bg-primary-fixed transition-colors">
            {catName}
          </Link>
          <span className="text-outline text-xs">/</span>
          <span className="chip text-xs bg-primary-fixed text-on-primary-fixed">{subName}</span>
        </div>
        <h1 className="font-caslon text-headline-md md:text-headline-lg text-primary mb-4">
          {subName}
        </h1>
        <p className="font-manrope text-body-md text-on-surface-variant max-w-xl leading-relaxed">
          {t(SUB_DESC_KEY[subId]) ?? subcategory.description}
        </p>
      </section>

      {/* Popular plant spotlight */}
      {popularPlant && (
        <section className="section-container pb-12">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-botanical animate-slide-up anim-delay-100">
            <div className="w-full md:w-1/3 h-48 md:h-64 rounded-xl overflow-hidden relative flex-shrink-0">
              <img src={popularPlant.image} alt={(isAr ? PLANT_TRANSLATIONS.ar[popularPlant.id]?.name : null) ?? popularPlant.name}
                className="w-full h-full object-cover" />
              <div className={`absolute top-3 ${isAr ? 'right-3' : 'left-3'} bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-bold`}>
                {t('most_popular')}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-caslon text-headline-sm text-primary mb-1">
                {(isAr ? PLANT_TRANSLATIONS.ar[popularPlant.id]?.name : null) ?? popularPlant.name}
              </h2>
              <p className="font-manrope text-sm text-on-surface-variant italic mb-4">{popularPlant.latinName}</p>
              <p className="font-manrope text-body-md text-on-surface-variant mb-6">
                {(isAr ? PLANT_TRANSLATIONS.ar[popularPlant.id]?.shortDescription : null) ?? popularPlant.shortDescription}
              </p>
              <Link
                to={`/plant/${popularPlant.id}`}
                onClick={() => trackPlantView(popularPlant.id)}
                className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-manrope text-sm font-semibold hover:opacity-90 transition-opacity inline-block"
              >
                {t('plant_view_profile')}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Directory grid */}
      <section className="section-container pb-20">
        <h2 className="font-caslon text-headline-sm text-primary mb-6 border-b border-outline-variant pb-3">
          {t('botanical_directory')}
        </h2>
        {categoryPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryPlants.map((plant, i) => (
              <div key={plant.id} className="animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <PlantCard plant={plant} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface-container rounded-xl border border-dashed border-outline-variant">
            <span className="material-symbols-outlined text-5xl text-outline mb-3 block">eco</span>
            <p className="font-manrope text-on-surface-variant">{t('more_profiles')}</p>
          </div>
        )}
      </section>
    </div>
  );
}
