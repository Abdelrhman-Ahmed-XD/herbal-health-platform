import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const CATEGORY_META = {
  immunity:        { icon: 'shield',      image: '/images/categories/cat-immunity.jpeg',   cover: false, chips: ['Medicinal','Adaptogen'],  nameKey: 'cat_immunity_name',    taglineKey: 'cat_immunity_tagline' },
  digestive:       { icon: 'nutrition',   image: '/images/categories/cat-digestive.jpeg',  cover: false, chips: ['Digestive','Culinary'],   nameKey: 'cat_digestive_name',   taglineKey: 'cat_digestive_tagline' },
  respiratory:     { icon: 'air',         image: '/images/categories/cat-respiratory.jpeg',cover: false, chips: ['Nervines','Adaptogens'],  nameKey: 'cat_respiratory_name', taglineKey: 'cat_respiratory_tagline' },
  'womens-health': { icon: 'favorite',    image: '/images/categories/cat-womens.jpeg',     cover: true,  chips: ['Adaptogens','Nervines'],  nameKey: 'cat_womens_name',      taglineKey: 'cat_womens_tagline' },
  uti:             { icon: 'water_drop',  image: '/images/categories/cat-urinary.jpeg',    cover: false, chips: ['Diuretic','Antiseptic'],  nameKey: 'cat_uti_name',         taglineKey: 'cat_uti_tagline' },
};
const CAT_IDS = ['womens-health','digestive','respiratory','immunity','uti'];

export default function CategoriesPage() {
  const { t, isAr } = useLanguage();
  return (
    <div className="page-enter pt-20">
      <section className="section-container py-16 text-center animate-slide-up">
        <h1 className="font-caslon text-headline-lg text-primary mb-4">{t('cats_title')}</h1>
        <p className="font-manrope text-body-md text-on-surface-variant max-w-xl mx-auto">{t('cats_sub')}</p>
      </section>

      <section className="section-container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAT_IDS.map((id, i) => {
            const meta = CATEGORY_META[id];
            return (
              <Link
                key={id}
                to={`/category/${id}`}
                className="group block animate-slide-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex flex-col rounded-xl overflow-hidden border border-surface-container-high shadow-botanical hover:shadow-botanical-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="h-56 bg-surface-container overflow-hidden flex items-center justify-center">
                    <img
                      src={meta.image}
                      alt={t(meta.nameKey)}
                      className={`w-full h-full ${meta.cover ? 'object-cover' : 'object-contain'} group-hover:scale-105 transition-transform duration-500`}
                      loading="lazy"
                    />
                  </div>
                  <div className={`bg-surface-container-lowest p-6 flex flex-col flex-1 ${isAr ? 'text-right' : ''}`}>
                    <div className={`flex items-center gap-2 mb-2`}>
                      <span className="material-symbols-outlined text-primary">{meta.icon}</span>
                      <h2 className="font-caslon text-headline-sm text-primary group-hover:text-secondary transition-colors">{t(meta.nameKey)}</h2>
                    </div>
                    <p className="font-manrope text-sm text-on-surface-variant leading-relaxed mb-4">{t(meta.taglineKey)}</p>
                    <div className={`flex gap-2 mb-4 flex-wrap`}>
                      {meta.chips.map(c => <span key={c} className="chip text-xs">{c}</span>)}
                    </div>
                    <hr className="border-outline-variant mb-4 mt-auto" />
                    <div className={`flex items-center gap-2 font-manrope text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200`}>
                      {t('cats_explore')}
                      <span
                        className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1"
                        style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}
                      >arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
