import { useLanguage } from '../contexts/LanguageContext.jsx';

const TEAM = [
  { name: 'Hana Mahmoud Emam',            image: '/images/team/hana-mahmoud.jpeg',   role: ['Team Leader of 3D', 'Graduation Project 2026', 'MTI University'] },
  { name: 'Mariam Ahmed Mohammed ElFeqi', image: '/images/team/mariam-elfeqi.jpeg'   },
  { name: 'Hagar Reda Salah Amin',        image: '/images/team/hagar-reda.jpeg'      },
  { name: 'Manar Magdy Sabry',            image: '/images/team/manar-magdy.jpeg'      },
  { name: 'Mariam Nashat Mohammed Elnahta',image: '/images/team/mariam-elnahta.jpeg' },
  { name: 'Mariam Tharwat Lotfy',         image: '/images/team/mariam-tharwat.jpeg' },
  { name: 'Mary Romany Yousef',           image: '/images/team/mary-romany.jpeg'      },
  { name: 'Mai Ahmed Saeed',              image: '/images/team/mai-ahmed.jpeg'       },
  { name: 'Hagar Salah Abdelzaher',       image: '/images/team/hagar-salah.jpeg'     },
  { name: 'Mahmoud Ayman Hassan Amer',    image: '/images/team/mahmoud-ayman.jpeg'   },
];

function getInitials(name) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('');
}

export default function AboutPage() {
  const { t, isAr } = useLanguage();

  const cards = [
    { icon: 'science', titleKey: 'about_evidence', descKey: 'about_evidence_desc' },
    { icon: 'eco',     titleKey: 'about_sourced',  descKey: 'about_sourced_desc'  },
    { icon: 'school',  titleKey: 'about_education',descKey: 'about_education_desc'},
  ];

  return (
    <div className="page-enter pt-20">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
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
              <div className="flex mb-4 justify-start">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-fixed">{c.icon}</span>
                </div>
              </div>
              <h3 className="font-caslon text-xl text-primary mb-2">{t(c.titleKey)}</h3>
              <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{t(c.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────────────── */}
      <section className="section-container pb-20">
        <div className={`mb-10 ${isAr ? 'text-right' : 'text-left'}`}>
          <h2 className="font-caslon text-headline-sm text-primary mb-2">{t('about_team_title')}</h2>
          <p className="font-manrope text-sm text-on-surface-variant">{t('about_team_sub')}</p>
        </div>

        {/* ── Supervisor spotlight ─────────────────────────────────────── */}
        <div className="mb-10 animate-slide-up">
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-amber-400 via-primary to-secondary shadow-xl">
            <div className={`bg-surface rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 ${isAr ? 'sm:flex-row-reverse text-right' : 'text-left'}`}>

              {/* Photo */}
              <div className="flex-none w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-amber-400/40 shadow-lg bg-surface-container">
                <img
                  src="/images/dr-radwa-mahrous.jpg"
                  alt="Ass.Prof. Dr. Radwa Mahrous"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <span className={`inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 border border-amber-300 rounded-full px-3 py-1 font-manrope text-xs font-semibold mb-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <span className="material-symbols-outlined text-sm">workspace_premium</span>
                  {t('team_supervisor')}
                </span>
                <h3 className="font-caslon text-2xl md:text-3xl text-primary leading-tight mb-1">
                  Ass.Prof. Dr. Radwa Mahrous
                </h3>
                <p className="font-manrope text-sm text-secondary font-medium">{t('team_supervisor')}</p>
              </div>

              {/* Decorative corner leaf */}
              <span className={`material-symbols-outlined absolute text-7xl text-primary/5 pointer-events-none select-none bottom-2 ${isAr ? 'left-4' : 'right-4'}`}>psychiatry</span>
            </div>
          </div>
        </div>

        {/* ── Team grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {TEAM.map((member, i) => {
            const initials = getInitials(member.name);
            return (
              <div
                key={member.name}
                className="bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden shadow-botanical-sm animate-slide-up hover:-translate-y-1 transition-transform duration-200 flex flex-col"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Photo area */}
                <div className="relative bg-gradient-to-br from-secondary-fixed/40 to-primary-fixed/20 min-h-[11rem] flex items-center justify-center overflow-hidden">
                  <span className="font-caslon text-4xl text-secondary/30 select-none py-10">{initials}</span>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                    onError={e => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Info */}
                <div className={`p-3 flex-1 flex flex-col justify-center ${isAr ? 'text-right' : 'text-left'}`}>
                  <p className="font-manrope font-semibold text-xs text-primary leading-snug">{member.name}</p>
                  {member.role ? (
                    <div className="mt-0.5">
                      {member.role.map((line, li) => (
                        <p key={li} className="font-manrope text-xs text-secondary leading-tight">{line}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="font-manrope text-xs text-secondary mt-0.5">{t('team_member')}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Disclaimer ────────────────────────────────────────────────── */}
      <section className="section-container pb-20">
        <div className="bg-primary-fixed rounded-xl p-8 text-center">
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
