import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/plants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const NAME_KEY    = { immunity:'cat_immunity_name', digestive:'cat_digestive_name', respiratory:'cat_respiratory_name', 'womens-health':'cat_womens_name' };
const LONG_KEY    = { immunity:'cat_immunity_long', digestive:'cat_digestive_long', respiratory:'cat_respiratory_long', 'womens-health':'cat_womens_long' };
const SUB_NAME_KEY = {
  'menstrual-health':'sub_menstrual','pregnancy-support':'sub_pregnancy','breast-feeding':'sub_breastfeeding',
  'hair-care':'sub_haircare','skin-care':'sub_skincare','constipation-relief':'sub_constipation',
  'diarrhea-support':'sub_diarrhea','dyspepsia':'sub_dyspepsia','ibs':'sub_ibs',
  'cold':'sub_cold','rhinitis':'sub_rhinitis','sinusitis':'sub_sinusitis','cough':'sub_cough',
  'immune-boosting':'sub_immune','anti-oxidant-rich':'sub_antioxidant','anti-inflammatory':'sub_antiinflammatory',
};

export default function CategoryPage() {
  const { id }       = useParams();
  const { t, isAr }  = useLanguage();
  const category     = CATEGORIES.find(c => c.id === id);

  if (!category) return (
    <div className="pt-32 section-container text-center">
      <p className="font-caslon text-2xl text-primary">{t('not_found')}</p>
      <Link to="/categories" className="text-secondary mt-4 inline-block">{t('back_categories')}</Link>
    </div>
  );

  return (
    <div className="page-enter pt-20">
      <section className="section-container pt-10 pb-12">
        <div className="flex items-center gap-2 mb-5">
          <span className="chip text-xs">{t('botanical_category')}</span>
        </div>
        <h1 className="font-caslon text-headline-md md:text-headline-lg text-primary mb-4">
          {t(NAME_KEY[id]) ?? category.name}
        </h1>
        <p className="font-manrope text-body-md text-on-surface-variant max-w-xl leading-relaxed">
          {t(LONG_KEY[id]) ?? category.longDescription}
        </p>
      </section>

      <section className="section-container pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(category.subcategories ?? []).map(sub => (
            <Link key={sub.id} to={`/category/${category.id}/${sub.id}`} className="block group">
              <div className="card-botanical shadow-botanical hover:shadow-botanical-lg">
                <div className="relative h-52 overflow-hidden bg-surface-container">
                  <img src={sub.image} alt={t(SUB_NAME_KEY[sub.id]) ?? sub.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-caslon text-xl text-primary group-hover:text-secondary transition-colors">
                    {t(SUB_NAME_KEY[sub.id]) ?? sub.name}
                  </h3>
                  <p className="font-manrope text-sm text-on-surface-variant leading-relaxed line-clamp-2 mt-2">
                    {sub.description}
                  </p>
                  <div className={`flex items-center gap-1.5 mt-4 text-primary font-manrope text-sm font-semibold tracking-wide group-hover:gap-3 transition-all duration-200 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
                    {t('view_collection')}
                    <span className="material-symbols-outlined text-base"
                      style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {(!category.subcategories || category.subcategories.length === 0) && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-outline mb-4 block">eco</span>
            <p className="font-caslon text-xl text-on-surface-variant">{t('coming_soon')}</p>
          </div>
        )}
      </section>
    </div>
  );
}
