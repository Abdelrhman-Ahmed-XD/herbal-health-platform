import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function AboutPage() {
  const { t, isAr } = useLanguage();
  const cards = [
    { icon: 'science', titleKey: 'about_evidence', descKey: 'about_evidence_desc' },
    { icon: 'eco',     titleKey: 'about_sourced',  descKey: 'about_sourced_desc'  },
    { icon: 'school',  titleKey: 'about_education',descKey: 'about_education_desc'},
  ];
  return (
    <div className="page-enter pt-20">
      <section className="section-container py-20 text-center">
        <h1 className="font-caslon text-headline-md md:text-headline-lg text-primary mb-6 animate-slide-up">{t('about_title')}</h1>
        <p className="font-manrope text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up anim-delay-100">{t('about_sub')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((c, i) => (
            <div
              key={c.titleKey}
              className={`bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 shadow-botanical-sm animate-slide-up hover:-translate-y-1 transition-transform duration-300 ${isAr ? 'text-right' : 'text-left'}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className={`flex mb-4 ${isAr ? 'justify-end' : 'justify-start'}`}>
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-fixed">{c.icon}</span>
                </div>
              </div>
              <h3 className="font-caslon text-xl text-primary mb-2">{t(c.titleKey)}</h3>
              <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{t(c.descKey)}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-primary-fixed rounded-xl p-8">
          <p className="font-manrope text-sm font-semibold text-on-primary-fixed uppercase tracking-wider mb-2">
            {t('about_disclaimer_title')}
          </p>
          <p className="font-manrope text-sm text-on-primary-fixed/80 leading-relaxed max-w-xl mx-auto">
            {t('about_disclaimer')}
          </p>
        </div>
      </section>
    </div>
  );
}
