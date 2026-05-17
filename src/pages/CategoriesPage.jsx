import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const CATEGORY_META = {
  immunity:       { icon: 'shield',    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&q=80', chips: ['Medicinal','Adaptogen'],  nameKey: 'cat_immunity_name',    taglineKey: 'cat_immunity_tagline' },
  digestive:      { icon: 'nutrition', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80', chips: ['Digestive','Culinary'],   nameKey: 'cat_digestive_name',   taglineKey: 'cat_digestive_tagline' },
  respiratory:    { icon: 'air',       image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', chips: ['Nervines','Adaptogens'], nameKey: 'cat_respiratory_name', taglineKey: 'cat_respiratory_tagline' },
  'womens-health':{ icon: 'favorite',  image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=600&q=80', chips: ['Adaptogens','Nervines'], nameKey: 'cat_womens_name',      taglineKey: 'cat_womens_tagline' },
};
const CAT_IDS = ['womens-health','digestive','respiratory','immunity'];

export default function CategoriesPage() {
  const { t, isAr } = useLanguage();
  return (
    <div className="page-enter pt-20">
      <section className="section-container py-16 text-center">
        <h1 className="font-caslon text-headline-lg text-primary mb-4">{t('cats_title')}</h1>
        <p className="font-manrope text-body-md text-on-surface-variant max-w-xl mx-auto">{t('cats_sub')}</p>
      </section>

      <section className="section-container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAT_IDS.map((id) => {
            const meta = CATEGORY_META[id];
            return (
              <div key={id} className="group">
                <div className="flex flex-col rounded-xl overflow-hidden border border-surface-container-high shadow-botanical hover:shadow-botanical-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-56 bg-surface-container overflow-hidden">
                    <img src={meta.image} alt={t(meta.nameKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy" />
                  </div>
                  <div className="bg-surface-container-lowest p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary">{meta.icon}</span>
                      <h2 className="font-caslon text-headline-sm text-primary">{t(meta.nameKey)}</h2>
                    </div>
                    <p className="font-manrope text-sm text-on-surface-variant leading-relaxed mb-4">{t(meta.taglineKey)}</p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {meta.chips.map(c => <span key={c} className="chip text-xs">{c}</span>)}
                    </div>
                    <hr className="border-outline-variant mb-4" />
                    <Link
                      to={`/category/${id}`}
                      className={`flex items-center gap-2 font-manrope text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 group/link ${isAr ? 'flex-row-reverse justify-end' : ''}`}
                    >
                      {t('cats_explore')}
                      <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform"
                        style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
