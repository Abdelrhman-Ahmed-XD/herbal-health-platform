import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import { PLANTS, SYMPTOM_TAG_MAP } from '../data/plants.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { PLANT_TRANSLATIONS } from '../contexts/LanguageContext.jsx';
import { saveQuestionnaire, fetchAnalytics, invalidateAnalyticsCache } from '../services/firestoreService.js';


const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 shadow-botanical font-manrope text-sm">
      <p className="font-semibold text-primary mb-1">{label}</p>
      {payload.map((p, i) => <p key={i} style={{ color: p.color }} className="text-xs">{p.name}: {p.value}</p>)}
    </div>
  );
};

/* ── Dashboard ─────────────────────────────────────────────────────────── */
const SYM_PALETTE = ['#1b3022','#536346','#4d6453','#364c3c','#59694b','#819986'];
const CAT_PALETTE = ['#f4dfcb','#d6e9c3','#b4cdb8','#d7c3b0'];
const SYM_AR_MAP  = { Immunity:'مناعة', Stress:'توتر', Fatigue:'إرهاق', Sleep:'نوم', IBS:'قولون', Cough:'سعال', PMS:'دورة', Constipation:'إمساك' };
const CAT_AR_MAP  = { immunity:'المناعة', digestive:'الهضم', respiratory:'الجهاز التنفسي', 'womens-health':'صحة المرأة', stress:'التوتر', sleep:'النوم' };
const CAT_EN_MAP  = { immunity:'Immunity', digestive:'Digestive', respiratory:'Respiratory', 'womens-health':"Women's", stress:'Stress', sleep:'Sleep' };

function buildSymptomChart(raw, isAr) {
  if (!raw || Object.keys(raw).length === 0) return [];
  return Object.entries(raw).sort(([,a],[,b])=>b-a).slice(0,6).map(([k,v],i)=>({
    name: isAr ? (SYM_AR_MAP[k]||k) : k, count: v, fill: SYM_PALETTE[i%SYM_PALETTE.length],
  }));
}

function buildCategoryChart(raw, isAr) {
  if (!raw || Object.keys(raw).length === 0) return [];
  const total = Object.values(raw).reduce((s,v)=>s+v,0)||1;
  return Object.entries(raw).sort(([,a],[,b])=>b-a).slice(0,4).map(([k,v],i)=>({
    name: isAr ? (CAT_AR_MAP[k]||k) : (CAT_EN_MAP[k]||k),
    value: Math.round((v/total)*100),
    fill: CAT_PALETTE[i%CAT_PALETTE.length],
  }));
}

const EmptyChart = ({ message }) => (
  <div className="flex flex-col items-center justify-center h-44 gap-2">
    <span className="material-symbols-outlined text-4xl text-outline">bar_chart</span>
    <p className="font-manrope text-xs text-on-surface-variant text-center max-w-xs">{message}</p>
  </div>
);

function AnalyticsDashboard() {
  const { t, isAr } = useLanguage();
  const [liveData, setLiveData] = useState(null);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    fetchAnalytics()
      .then(d => { if (d) setLiveData(d); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const symptomData  = buildSymptomChart(liveData?.symptoms, isAr);
  const categoryData = buildCategoryChart(liveData?.categories, isAr);
  const noData       = !loading && symptomData.length === 0 && categoryData.length === 0;

  const emptyMsg = isAr
    ? 'لا توجد بيانات بعد. كن أول من يساهم بإكمال الاستبيان!'
    : 'No data yet. Be the first to contribute by completing the questionnaire!';

  return (
    <div className="space-y-8 mb-16">
      <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
          <h2 className="font-caslon text-headline-sm text-primary mb-1">{t('q_title')}</h2>
          <p className="font-manrope text-sm text-on-surface-variant">{t('q_sub')}</p>
        </div>
        {loading && (
          <div className="flex items-center gap-2 font-manrope text-xs text-on-surface-variant">
            <span className="w-3 h-3 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            {isAr ? 'تحميل البيانات...' : 'Loading data...'}
          </div>
        )}
      </div>

      {noData ? (
        <div className="bg-surface-container-lowest border border-dashed border-outline-variant rounded-2xl p-12 text-center">
          <span className="material-symbols-outlined text-5xl text-outline mb-3 block">monitoring</span>
          <p className="font-manrope text-sm text-on-surface-variant max-w-sm mx-auto">{emptyMsg}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* Bar – symptoms */}
          <div className="xl:col-span-2 bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 shadow-botanical-sm">
            <h3 className="font-caslon text-xl text-primary mb-1">{t('q_chart_symptoms')}</h3>
            <p className="font-manrope text-xs text-on-surface-variant mb-5">{t('q_chart_symptoms_sub')}</p>
            {symptomData.length > 0 ? (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={symptomData} margin={{ top:0, right:0, bottom:0, left:-20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#c3c8c1" strokeOpacity={0.5} />
                  <XAxis dataKey="name" tick={{ fontFamily:'Cairo, Manrope', fontSize:11, fill:'#434843' }} />
                  <YAxis tick={{ fontFamily:'Manrope', fontSize:11, fill:'#434843' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" radius={[4,4,0,0]}>
                    {symptomData.map((e,i) => <Cell key={i} fill={e.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <EmptyChart message={emptyMsg} />
            )}
          </div>

          {/* Pie – categories */}
          <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 shadow-botanical-sm">
            <h3 className="font-caslon text-xl text-primary mb-1">{t('q_chart_categories')}</h3>
            <p className="font-manrope text-xs text-on-surface-variant mb-4">{t('q_chart_categories_sub')}</p>
            {categoryData.length > 0 ? (
              <>
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                      {categoryData.map((e,i) => <Cell key={i} fill={e.fill} stroke="#fbf9f4" strokeWidth={2} />)}
                    </Pie>
                    <Tooltip formatter={(v) => `${v}%`} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categoryData.map(d => (
                    <span key={d.name} className="flex items-center gap-1.5 font-manrope text-xs text-on-surface-variant">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.fill }} />
                      {d.name} ({d.value}%)
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <EmptyChart message={emptyMsg} />
            )}
          </div>

        </div>
      )}
    </div>
  );
}

/* ── Build translated questions ─────────────────────────────────────────── */
const buildQuestions = (t) => [
  {
    id:'primary_concern', step:1, type:'single',
    question: t('qq1_q'), subtitle: t('qq1_sub'),
    options:[
      { value:'immunity',      label:t('opt_immunity'),    icon:'shield',      desc:t('opt_immunity_desc') },
      { value:'digestive',     label:t('opt_digestive'),   icon:'nutrition',   desc:t('opt_digestive_desc') },
      { value:'respiratory',   label:t('opt_respiratory'), icon:'air',         desc:t('opt_respiratory_desc') },
      { value:'womens-health', label:t('opt_womens'),      icon:'favorite',    desc:t('opt_womens_desc') },
      { value:'stress',        label:t('opt_stress'),      icon:'psychology',  desc:t('opt_stress_desc') },
      { value:'sleep',         label:t('opt_sleep'),       icon:'bedtime',     desc:t('opt_sleep_desc') },
    ],
  },
  {
    id:'symptoms', step:2, type:'multi',
    question: t('qq2_q'), subtitle: t('qq2_sub'),
    options:[
      { value:'Fatigue',     label:t('opt_fatigue'),          icon:'energy_savings_leaf' },
      { value:'Stress',      label:t('opt_anxiety'),          icon:'psychology' },
      { value:'Sleep',       label:t('opt_poor_sleep'),       icon:'bedtime' },
      { value:'Constipation',label:t('opt_digestive_issues'), icon:'nutrition' },
      { value:'IBS',         label:t('opt_ibs'),              icon:'healing' },
      { value:'Cough',       label:t('opt_cough'),            icon:'coronavirus' },
      { value:'Immunity',    label:t('opt_low_immunity'),     icon:'shield' },
      { value:'PMS',         label:t('opt_hormonal'),         icon:'favorite' },
    ],
  },
  {
    id:'lifestyle', step:3, type:'single',
    question: t('qq3_q'), subtitle: t('qq3_sub'),
    options:[
      { value:'sedentary',   label:t('opt_sedentary'),   icon:'chair',           desc:t('opt_sedentary_desc') },
      { value:'moderate',    label:t('opt_moderate'),    icon:'directions_walk', desc:t('opt_moderate_desc') },
      { value:'active',      label:t('opt_active'),      icon:'fitness_center',  desc:t('opt_active_desc') },
      { value:'high_stress', label:t('opt_high_stress'), icon:'bolt',            desc:t('opt_high_stress_desc') },
    ],
  },
  {
    id:'experience', step:4, type:'single',
    question: t('qq4_q'), subtitle: t('qq4_sub'),
    options:[
      { value:'beginner',    label:t('opt_beginner'),    icon:'eco',           desc:t('opt_beginner_desc') },
      { value:'some',        label:t('opt_some'),        icon:'local_florist', desc:t('opt_some_desc') },
      { value:'experienced', label:t('opt_experienced'), icon:'science',       desc:t('opt_experienced_desc') },
    ],
  },
  {
    id:'goal', step:5, type:'single',
    question: t('qq5_q'), subtitle: t('qq5_sub'),
    options:[
      { value:'prevention', label:t('opt_prevention'), icon:'shield',    desc:t('opt_prevention_desc') },
      { value:'acute',      label:t('opt_acute'),      icon:'healing',   desc:t('opt_acute_desc') },
      { value:'longterm',   label:t('opt_longterm'),   icon:'spa',       desc:t('opt_longterm_desc') },
      { value:'education',  label:t('opt_education'),  icon:'menu_book', desc:t('opt_education_desc') },
    ],
  },
];

/* ── Wizard ─────────────────────────────────────────────────────────────── */
function QuestionnaireWizard({ onComplete }) {
  const { t, isAr }   = useLanguage();
  const questions      = buildQuestions(t);
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState({});
  const current = questions[step];
  const total   = questions.length;

  const handleSelect = (value) => {
    if (current.type === 'multi') {
      setAnswers(prev => {
        const ex = prev[current.id] ?? [];
        return { ...prev, [current.id]: ex.includes(value) ? ex.filter(v => v !== value) : [...ex, value] };
      });
    } else {
      setAnswers(prev => ({ ...prev, [current.id]: value }));
    }
  };

  const isSelected = (value) => {
    const a = answers[current.id];
    return Array.isArray(a) ? a.includes(value) : a === value;
  };

  const canProgress = () => {
    const a = answers[current.id];
    return Array.isArray(a) ? a.length > 0 : Boolean(a);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between font-manrope text-xs text-on-surface-variant mb-2">
          <span>{t('q_step_of')} {step + 1} {t('q_of')} {total}</span>
          <span>{Math.round(((step + 1) / total) * 100)}% {t('q_complete')}</span>
        </div>
        <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / total) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="font-caslon text-headline-sm md:text-headline-md text-primary mb-2">{current.question}</h2>
        <p className="font-manrope text-sm text-on-surface-variant">{current.subtitle}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {current.options.map(opt => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 hover:-translate-y-0.5 ${
              isSelected(opt.value)
                ? 'border-primary bg-primary-fixed/30 shadow-botanical-sm'
                : 'border-surface-container-high bg-surface-container-lowest hover:border-outline hover:bg-surface-container-low'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
              isSelected(opt.value) ? 'bg-primary text-on-primary' : 'bg-secondary-fixed text-on-secondary-fixed'
            }`}>
              <span className="material-symbols-outlined text-xl">{opt.icon}</span>
            </div>
            <div className="text-start">
              <p className={`font-manrope font-semibold text-sm ${isSelected(opt.value) ? 'text-primary' : 'text-on-surface'}`}>
                {opt.label}
              </p>
              {opt.desc && <p className="font-manrope text-xs text-on-surface-variant mt-0.5">{opt.desc}</p>}
            </div>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className={`flex items-center justify-between ${isAr ? 'flex-row-reverse' : ''}`}>
        <button
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
          className={`flex items-center gap-2 font-manrope text-sm text-on-surface-variant disabled:opacity-30 hover:text-primary transition-colors ${isAr ? 'flex-row-reverse' : ''}`}
        >
          <span className="material-symbols-outlined text-base"
            style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_back</span>
          {t('q_back')}
        </button>
        <button
          onClick={() => step < total - 1 ? setStep(s => s + 1) : onComplete(answers)}
          disabled={!canProgress()}
          className="bg-primary text-on-primary font-manrope font-semibold text-sm tracking-wide px-8 py-3 rounded-full disabled:opacity-40 hover:opacity-80 transition-all hover:-translate-y-0.5 shadow-botanical-sm"
        >
          {step === total - 1 ? t('q_finish') : t('q_continue')}
        </button>
      </div>
    </div>
  );
}

/* ── Results ────────────────────────────────────────────────────────────── */
function Results({ answers, onReset }) {
  const { t, isAr } = useLanguage();
  const symptoms  = answers.symptoms ?? [];
  const category  = answers.primary_concern;

  const recommendedIds = new Set();
  symptoms.forEach(sym => (SYMPTOM_TAG_MAP[sym] ?? []).forEach(id => recommendedIds.add(id)));
  if (category) {
    Object.values(PLANTS).filter(p => p.category === category).slice(0, 3).forEach(p => recommendedIds.add(p.id));
  }
  const recommendedPlants = [...recommendedIds].map(id => PLANTS[id]).filter(Boolean).slice(0, 4);

  return (
    <div className="max-w-3xl mx-auto page-enter">
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-on-secondary-fixed text-3xl">eco</span>
        </div>
        <h2 className="font-caslon text-headline-sm md:text-headline-md text-primary mb-2">{t('res_title')}</h2>
        <p className="font-manrope text-sm text-on-surface-variant">{t('res_sub')}</p>
      </div>

      <div className="bg-surface-container rounded-xl p-5 mb-8 flex flex-wrap gap-5">
        <div>
          <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">{t('res_focus')}</p>
          <span className="chip capitalize">{(category ?? 'General').replace('-', ' ')}</span>
        </div>
        {symptoms.length > 0 && (
          <div>
            <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">{t('res_symptoms')}</p>
            <div className="flex flex-wrap gap-1.5">
              {symptoms.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        )}
      </div>

      <h3 className="font-caslon text-xl text-primary mb-4">{t('res_recommended')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {recommendedPlants.map(plant => {
          const arData = isAr ? PLANT_TRANSLATIONS.ar[plant.id] : null;
          return (
            <Link key={plant.id} to={`/plant/${plant.id}`}
              className="flex gap-4 bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 hover:shadow-botanical transition-all hover:-translate-y-0.5 group">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                <img src={plant.image} alt={arData?.name ?? plant.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-caslon text-lg text-primary group-hover:text-secondary transition-colors">
                  {arData?.name ?? plant.name}
                </h4>
                <p className="font-caslon italic text-xs text-on-surface-variant mb-1">{plant.latinName}</p>
                <p className="font-manrope text-xs text-on-surface-variant line-clamp-2">
                  {arData?.shortDescription ?? plant.shortDescription}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/categories"
          className="text-center font-manrope text-sm font-semibold px-6 py-3 rounded-full bg-primary-container text-on-primary-container hover:opacity-80 transition-all">
          {t('res_explore_all')}
        </Link>
        <button
          onClick={onReset}
          className="border border-outline text-on-surface-variant font-manrope font-semibold text-sm tracking-wide px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all">
          {t('res_retake')}
        </button>
      </div>
      <p className="font-manrope text-xs text-center text-outline mt-6">{t('res_disclaimer')}</p>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function QuestionnairePage() {
  const { t }                           = useLanguage();
  const [completed, setCompleted]       = useState(false);
  const [answers, setAnswers]           = useState(null);
  const [activeTab, setActiveTab]       = useState('questionnaire');

  const handleComplete = useCallback((ans) => {
    setAnswers(ans);
    setCompleted(true);
    setActiveTab('results');
    // Fire-and-forget: never blocks the results from showing
    saveQuestionnaire(ans);
    invalidateAnalyticsCache();
  }, []);

  const handleReset = useCallback(() => {
    setAnswers(null);
    setCompleted(false);
    setActiveTab('questionnaire');
  }, []);

  return (
    <div className="page-enter pt-20">
      <section className="section-container pt-10 pb-4">
        <AnalyticsDashboard />
      </section>
      <div className="border-t border-outline-variant" />
      <section className="section-container py-16">
        {/* Tabs */}
        <div className="flex gap-1 bg-surface-container p-1 rounded-full w-fit mx-auto mb-12">
          {[
            { key:'questionnaire', label: t('q_tab_questionnaire') },
            { key:'results',       label: t('q_tab_results') },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              disabled={tab.key === 'results' && !completed}
              className={`font-manrope text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 disabled:opacity-40 ${
                activeTab === tab.key
                  ? 'bg-primary text-on-primary shadow-botanical-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'questionnaire' && <QuestionnaireWizard onComplete={handleComplete} />}
        {activeTab === 'results' && answers && <Results answers={answers} onReset={handleReset} />}
        {activeTab === 'results' && !answers && (
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-5xl text-outline mb-3 block">quiz</span>
            <p className="font-caslon text-xl text-on-surface-variant">{t('q_no_results')}</p>
            <button onClick={() => setActiveTab('questionnaire')}
              className="mt-4 font-manrope text-sm text-primary font-semibold hover:underline">
              {t('q_start')}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
