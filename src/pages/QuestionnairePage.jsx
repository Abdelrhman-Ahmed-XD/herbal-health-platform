import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LabelList,
} from 'recharts';
import { PLANTS } from '../data/plants.js';
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
const SYM_AR_MAP  = {
  // Legacy keys
  Immunity:'مناعة', Stress:'توتر', Fatigue:'إرهاق', Sleep:'نوم', IBS:'قولون', Cough:'سعال', PMS:'دورة', Constipation:'إمساك',
  // New sub_concern slugs (AR)
  'menstrual-health':'الدورة الشهرية', 'pregnancy-support':'الحمل', 'breast-feeding':'الرضاعة',
  'hair-care':'الشعر', 'skin-care':'البشرة', 'cold':'البرد', 'rhinitis':'التهاب الأنف',
  'sinusitis':'الجيوب الأنفية', 'cough':'السعال', 'immune-boosting':'المناعة',
  'immune-recover':'التعافي', 'anti-oxidant-rich':'مضادات الأكسدة', 'wellness':'الصحة العامة',
};
const SYM_EN_MAP  = {
  // New sub_concern slugs (EN display)
  'menstrual-health':'Menstrual', 'pregnancy-support':'Pregnancy', 'breast-feeding':'Breastfeeding',
  'hair-care':'Hair Care', 'skin-care':'Skin Care', 'cold':'Cold & Flu', 'rhinitis':'Rhinitis',
  'sinusitis':'Sinusitis', 'cough':'Cough', 'immune-boosting':'Immunity',
  'immune-recover':'Recovery', 'anti-oxidant-rich':'Antioxidant', 'wellness':'Wellness',
};
const CAT_AR_MAP  = { immunity:'المناعة', digestive:'الهضم', respiratory:'الجهاز التنفسي', 'womens-health':'صحة المرأة', stress:'التوتر', sleep:'النوم' };
const CAT_EN_MAP  = { immunity:'Immunity', digestive:'Digestive', respiratory:'Respiratory', 'womens-health':"Women's", stress:'Stress', sleep:'Sleep' };

function buildSymptomChart(raw, isAr) {
  if (!raw || Object.keys(raw).length === 0) return [];
  return Object.entries(raw).sort(([,a],[,b])=>b-a).slice(0,6).map(([k,v],i)=>({
    name: isAr ? (SYM_AR_MAP[k] || k) : (SYM_EN_MAP[k] || k),
    count: v, fill: SYM_PALETTE[i%SYM_PALETTE.length],
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
          <div className="xl:col-span-2 bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 shadow-botanical-sm">
            <h3 className="font-caslon text-xl text-primary mb-1">{t('q_chart_symptoms')}</h3>
            <p className="font-manrope text-xs text-on-surface-variant mb-5">{t('q_chart_symptoms_sub')}</p>
            {symptomData.length > 0 ? (
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={symptomData} margin={{ top: 20, right: 8, bottom: 60, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#c3c8c1" strokeOpacity={0.5} vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fontFamily: 'Cairo, Manrope, sans-serif', fontSize: 11, fill: '#434843' }}
                    interval={0}
                    angle={-35}
                    textAnchor="end"
                    height={65}
                  />
                  <YAxis allowDecimals={false} tick={{ fontFamily: 'Manrope, sans-serif', fontSize: 11, fill: '#434843' }} />                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="count" position="top" style={{ fill: '#536346', fontSize: 11, fontFamily: 'Manrope, sans-serif', fontWeight: 600 }} />
                    {symptomData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <EmptyChart message={emptyMsg} />
            )}
          </div>
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

/* ── Recommendation engine ──────────────────────────────────────────────── */
const EVIDENCE = {
  'ginger': 'high', 'dill-seed': 'high', 'cinnamon': 'high',
  'echinacea': 'high', 'black-seed': 'high',
  'aloe-vera': 'moderate', 'tea-tree': 'moderate', 'licorice': 'moderate',
  'green-tea': 'moderate', 'fenugreek': 'moderate', 'fennel': 'moderate',
  'butterbur': 'moderate', 'stinging-nettle': 'moderate',
  'eucalyptus': 'moderate', 'lemon': 'moderate',
  'rosemary': 'preliminary', 'moringa': 'preliminary', 'astragalus': 'preliminary',
};

// Plants excluded for each safety flag
const SAFETY_EXCLUDE = {
  pregnant:      new Set(['fenugreek', 'dill-seed', 'butterbur', 'stinging-nettle', 'black-seed']),
  nut_allergy:   new Set(['fenugreek']),
};
// Plants flagged with a warning for each safety flag (not excluded, but caution needed)
const SAFETY_WARN = {
  pregnant:      new Set(['cinnamon', 'ginger', 'licorice']),
  breastfeeding: new Set(['dill-seed']),
  diabetes:      new Set(['fenugreek', 'cinnamon', 'black-seed']),
  blood_thinners:new Set(['ginger', 'black-seed']),
  liver:         new Set(['licorice', 'echinacea']),
};
// Sub-concerns that cross subcategory boundaries — explicit plant lists
const CONCERN_OVERRIDE = {
  'resp-both':        ['eucalyptus', 'lemon', 'butterbur', 'stinging-nettle'],
  'immune-recover':   ['echinacea', 'astragalus'],
  'anti-oxidant-rich':['green-tea', 'rosemary', 'moringa', 'lemon'],
  'wellness':         ['ginger', 'green-tea', 'lemon', 'rosemary'],
};

function getFormInfo(plant, preferredForm) {
  if (!plant.howToUse?.length) return null;
  if (!preferredForm || preferredForm === 'unsure' || preferredForm === 'both') return plant.howToUse[0];
  const match = plant.howToUse.find(h => {
    const m = h.method.toLowerCase();
    if (preferredForm === 'tea')      return m.includes('tea') || m.includes('infusion') || m.includes('decoction') || m.includes('brew');
    if (preferredForm === 'capsules') return m.includes('capsul') || m.includes('supplement') || m.includes('extract');
    return false;
  });
  return match || plant.howToUse[0];
}

function getRecommendations(answers) {
  const { primary_concern, sub_concern, safety_flags = [], preferred_form } = answers;
  const activeFlags = safety_flags.filter(f => f !== 'none');

  if (primary_concern === 'digestive') return []; // coming soon

  const key = (sub_concern === 'both' && primary_concern === 'respiratory')
    ? 'resp-both'
    : (sub_concern || primary_concern);

  let candidateIds;
  if (CONCERN_OVERRIDE[key]) {
    candidateIds = [...CONCERN_OVERRIDE[key]];
  } else {
    candidateIds = Object.values(PLANTS)
      .filter(p => !p.isDemo && p.subcategory === key)
      .map(p => p.id);
  }

  const excluded = new Set(activeFlags.flatMap(f => [...(SAFETY_EXCLUDE[f] ?? new Set())]));
  const warned   = new Set(activeFlags.flatMap(f => [...(SAFETY_WARN[f]   ?? new Set())]));

  return candidateIds
    .filter(id => !excluded.has(id) && PLANTS[id] && !PLANTS[id].isDemo)
    .slice(0, 4)
    .map(id => ({
      plant:          PLANTS[id],
      evidenceLevel:  EVIDENCE[id] || 'preliminary',
      isWarned:       warned.has(id),
      keyConstituent: PLANTS[id].activeConstituents?.[0] ?? null,
      formInfo:       getFormInfo(PLANTS[id], preferred_form),
      dosage:         PLANTS[id].dosage?.standard ?? '',
    }));
}

/* ── Question definitions ───────────────────────────────────────────────── */
function buildQuestions(t, answers = {}) {
  const q1 = answers.primary_concern;
  const subOptionsMap = {
    'womens-health': [
      { value: 'skin-care',        label: t('opt_wh_skin'),      icon: 'face_retouching_natural', desc: t('opt_wh_skin_desc') },
      { value: 'breast-feeding',   label: t('opt_wh_bf'),        icon: 'baby_changing_station',   desc: t('opt_wh_bf_desc') },
      { value: 'menstrual-health', label: t('opt_wh_menstrual'), icon: 'spa',                     desc: t('opt_wh_menstrual_desc') },
    ],
    'respiratory': [
      { value: 'cold',     label: t('opt_resp_cold'),     icon: 'coronavirus', desc: t('opt_resp_cold_desc') },
      { value: 'rhinitis', label: t('opt_resp_rhinitis'), icon: 'air',         desc: t('opt_resp_rhinitis_desc') },
      { value: 'both',     label: t('opt_resp_both'),     icon: 'healing',     desc: t('opt_resp_both_desc') },
    ],
    'immunity': [
      { value: 'immune-boosting',   label: t('opt_imm_prevent'),     icon: 'shield',  desc: t('opt_imm_prevent_desc') },
      { value: 'immune-recover',    label: t('opt_imm_recover'),     icon: 'healing', desc: t('opt_imm_recover_desc') },
      { value: 'anti-oxidant-rich', label: t('opt_imm_antioxidant'), icon: 'spa',     desc: t('opt_imm_antioxidant_desc') },
    ],
  };

  return [
    {
      id: 'primary_concern', type: 'single',
      skipCheck: () => false,
      question: t('qq1_q'), subtitle: t('qq1_sub'),
      options: [
        { value: 'womens-health', label: t('opt_womens'),         icon: 'favorite',  desc: t('opt_womens_desc') },
        { value: 'respiratory',   label: t('opt_respiratory'),    icon: 'air',       desc: t('opt_respiratory_desc') },
        { value: 'immunity',      label: t('opt_immunity'),       icon: 'shield',    desc: t('opt_immunity_desc') },
        { value: 'digestive',     label: t('opt_digestive_soon'), icon: 'nutrition', desc: t('opt_digestive_soon_desc') },
        { value: 'wellness',      label: t('opt_wellness'),       icon: 'spa',       desc: t('opt_wellness_desc') },
      ],
    },
    {
      id: 'sub_concern', type: 'single',
      skipCheck: (ans) => !ans.primary_concern || !subOptionsMap[ans.primary_concern],
      question: t('qq2_new_q'), subtitle: t('qq2_new_sub'),
      options: subOptionsMap[q1] ?? [],
    },
    {
      id: 'safety_flags', type: 'multi',
      skipCheck: () => false,
      question: t('qq3_new_q'), subtitle: t('qq3_new_sub'),
      options: [
        { value: 'pregnant',       label: t('opt_pregnant'),       icon: 'child_care' },
        { value: 'breastfeeding',  label: t('opt_breastfeeding'),  icon: 'baby_changing_station' },
        { value: 'diabetes',       label: t('opt_diabetes'),       icon: 'bloodtype' },
        { value: 'blood_thinners', label: t('opt_blood_thinners'), icon: 'medication' },
        { value: 'liver',          label: t('opt_liver'),          icon: 'monitor_heart' },
        { value: 'nut_allergy',    label: t('opt_nut_allergy'),    icon: 'no_food' },
        { value: 'none',           label: t('opt_none_apply'),     icon: 'check_circle' },
      ],
    },
    {
      id: 'age_group', type: 'single',
      skipCheck: () => false,
      question: t('qq4_new_q'), subtitle: t('qq4_new_sub'),
      options: [
        { value: 'under18', label: t('opt_age_under18'), icon: 'child_care', desc: t('opt_age_under18_desc') },
        { value: '18_40',   label: t('opt_age_18_40'),   icon: 'person',     desc: '' },
        { value: '40_65',   label: t('opt_age_40_65'),   icon: 'person_4',   desc: '' },
        { value: 'over65',  label: t('opt_age_over65'),  icon: 'elderly',    desc: t('opt_age_over65_desc') },
      ],
    },
    {
      id: 'preferred_form', type: 'single',
      skipCheck: () => false,
      question: t('qq5_new_q'), subtitle: t('qq5_new_sub'),
      options: [
        { value: 'tea',      label: t('opt_form_tea'),      icon: 'local_cafe',   desc: t('opt_form_tea_desc') },
        { value: 'capsules', label: t('opt_form_capsules'), icon: 'medication',   desc: t('opt_form_capsules_desc') },
        { value: 'both',     label: t('opt_form_both'),     icon: 'spa',          desc: t('opt_form_both_desc') },
        { value: 'unsure',   label: t('opt_form_unsure'),   icon: 'help_outline', desc: t('opt_form_unsure_desc') },
      ],
    },
  ];
}

/* ── Wizard ─────────────────────────────────────────────────────────────── */
function QuestionnaireWizard({ onComplete }) {
  const { t, isAr } = useLanguage();
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState({});

  // Rebuild on every render so Q2 options update instantly with Q1 selection
  const questions = buildQuestions(t, answers);
  const visible   = questions.filter(q => !q.skipCheck(answers));
  const current   = visible[step] ?? visible[visible.length - 1];
  const total     = visible.length;

  const handleSelect = (value) => {
    if (current.type === 'multi') {
      setAnswers(prev => {
        const existing = prev[current.id] ?? [];
        let next;
        if (value === 'none') {
          next = existing.includes('none') ? [] : ['none'];
        } else {
          const withoutNone = existing.filter(v => v !== 'none');
          next = withoutNone.includes(value)
            ? withoutNone.filter(v => v !== value)
            : [...withoutNone, value];
        }
        return { ...prev, [current.id]: next };
      });
    } else {
      setAnswers(prev => {
        const updated = { ...prev, [current.id]: value };
        if (current.id === 'primary_concern') delete updated.sub_concern;
        return updated;
      });
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
            className={`flex items-center gap-4 p-4 rounded-xl border-2 text-start transition-all duration-200 hover:-translate-y-0.5 ${
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
      <div className={`flex items-center justify-between`}>
        <button
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
          className={`flex items-center gap-2 font-manrope text-sm text-on-surface-variant disabled:opacity-30 hover:text-primary transition-colors`}
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

/* ── Evidence badge ─────────────────────────────────────────────────────── */
function EvidenceBadge({ level, t }) {
  const cfg = {
    high:        { label: t('res_evidence_high'),        cls: 'bg-primary-fixed/30 border-primary/20 text-primary' },
    moderate:    { label: t('res_evidence_moderate'),    cls: 'bg-secondary-fixed/40 border-secondary/20 text-secondary' },
    preliminary: { label: t('res_evidence_preliminary'), cls: 'bg-surface-container border-outline-variant text-on-surface-variant' },
  };
  const { label, cls } = cfg[level] || cfg.preliminary;
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-manrope font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 flex-shrink-0" />
      {label}
    </span>
  );
}

/* ── Results ────────────────────────────────────────────────────────────── */
function Results({ answers, onReset }) {
  const { t, isAr } = useLanguage();
  const recs = getRecommendations(answers);
  const isComingSoon      = answers.primary_concern === 'digestive';
  const hasContraindication = (answers.safety_flags ?? []).some(f => f !== 'none');

  const summaryItems = [
    answers.primary_concern && { label: t('res_focus'),     value: answers.primary_concern.replace(/-/g, ' ') },
    answers.sub_concern     && { label: t('res_your_focus'),value: answers.sub_concern.replace(/-/g, ' ') },
    answers.age_group       && { label: t('res_your_age'),  value: t(`opt_age_${answers.age_group}`) || answers.age_group },
    answers.preferred_form  && { label: t('res_your_form'), value: t(`opt_form_${answers.preferred_form}`) || answers.preferred_form },
  ].filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto page-enter">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-on-secondary-fixed text-3xl">eco</span>
        </div>
        <h2 className="font-caslon text-headline-sm md:text-headline-md text-primary mb-2">{t('res_title')}</h2>
        <p className="font-manrope text-sm text-on-surface-variant">{t('res_sub')}</p>
      </div>

      {/* Answer summary */}
      <div className="bg-surface-container rounded-xl p-5 mb-6 flex flex-wrap gap-5">
        {summaryItems.map(item => (
          <div key={item.label}>
            <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">{item.label}</p>
            <span className="chip capitalize">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Contraindication warning */}
      {hasContraindication && (
        <div className="flex gap-3 bg-tertiary-fixed/30 border border-tertiary/30 rounded-xl p-4 mb-6">
          <span className="material-symbols-outlined text-tertiary flex-shrink-0 mt-0.5">warning</span>
          <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">{t('res_contraindication_warning')}</p>
        </div>
      )}

      {/* Coming soon */}
      {isComingSoon && (
        <div className="text-center py-16 bg-surface-container-lowest border border-dashed border-outline-variant rounded-2xl mb-8">
          <span className="material-symbols-outlined text-5xl text-outline mb-3 block">construction</span>
          <h3 className="font-caslon text-xl text-primary mb-2">{t('res_coming_soon_title')}</h3>
          <p className="font-manrope text-sm text-on-surface-variant max-w-sm mx-auto">{t('res_coming_soon_desc')}</p>
        </div>
      )}

      {/* No plants found (excluded by safety) */}
      {!isComingSoon && recs.length === 0 && (
        <div className="text-center py-12 bg-surface-container-lowest border border-dashed border-outline-variant rounded-2xl mb-8">
          <span className="material-symbols-outlined text-5xl text-outline mb-3 block">search_off</span>
          <p className="font-manrope text-sm text-on-surface-variant">{t('res_no_plants_found')}</p>
        </div>
      )}

      {/* Recommendation cards */}
      {recs.length > 0 && (
        <>
          <h3 className="font-caslon text-xl text-primary mb-4">{t('res_recommended')}</h3>
          <div className="space-y-4 mb-8">
            {recs.map(({ plant, evidenceLevel, isWarned, keyConstituent, formInfo, dosage }) => {
              const arData = isAr ? PLANT_TRANSLATIONS.ar[plant.id] : null;
              return (
                <div key={plant.id}
                  className={`bg-surface-container-lowest border rounded-2xl overflow-hidden shadow-botanical-sm ${
                    isWarned ? 'border-tertiary/40' : 'border-surface-container-high'
                  }`}
                >
                  {/* Top: image + name + evidence */}
                  <div className="flex gap-4 p-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container">
                      <img src={plant.image} alt={arData?.name ?? plant.name}
                        className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                        <div>
                          <h4 className="font-caslon text-lg text-primary leading-tight">
                            {arData?.name ?? plant.name}
                          </h4>
                          <p className="font-manrope text-xs italic text-on-surface-variant">{plant.latinName}</p>
                        </div>
                        <EvidenceBadge level={evidenceLevel} t={t} />
                      </div>
                      <p className="font-manrope text-xs text-on-surface-variant leading-relaxed mt-1">
                        <span className="font-semibold text-on-surface">{t('res_match_reason_label')}: </span>
                        {isAr
                          ? `يعالج: ${plant.symptoms.slice(0, 3).join('، ')}`
                          : `Addresses: ${plant.symptoms.slice(0, 3).join(', ')}`
                        }
                      </p>
                    </div>
                  </div>

                  {/* Detail grid */}
                  <div className="border-t border-outline-variant/50 px-4 py-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {keyConstituent && (
                      <div>
                        <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wide mb-0.5">
                          {t('res_key_constituent_label')}
                        </p>
                        <p className="font-manrope text-xs font-semibold text-on-surface">{keyConstituent.name}</p>
                        <p className="font-manrope text-xs text-on-surface-variant leading-relaxed line-clamp-2">{keyConstituent.effect}</p>
                      </div>
                    )}
                    {formInfo && (
                      <div>
                        <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wide mb-0.5">
                          {t('res_recommended_form_label')}
                        </p>
                        <p className="font-manrope text-xs font-semibold text-on-surface">{formInfo.method}</p>
                        <p className="font-manrope text-xs text-on-surface-variant leading-relaxed line-clamp-2">{formInfo.instruction}</p>
                      </div>
                    )}
                    {dosage && (
                      <div className="sm:col-span-2">
                        <p className="font-manrope text-xs text-on-surface-variant uppercase tracking-wide mb-0.5">
                          {t('res_dose_label')}
                        </p>
                        <p className="font-manrope text-xs text-on-surface leading-relaxed">{dosage}</p>
                      </div>
                    )}
                    {isWarned && plant.warnings?.[0] && (
                      <div className="sm:col-span-2 bg-tertiary-fixed/20 border border-tertiary/20 rounded-lg px-3 py-2">
                        <p className="font-manrope text-xs text-on-surface-variant leading-relaxed">
                          <span className="font-semibold text-tertiary">{t('res_safety_note_label')}: </span>
                          {plant.warnings[0]}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* View profile */}
                  <div className="px-4 pb-4 pt-1">
                    <Link to={`/plant/${plant.id}`}
                      className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-primary hover:gap-2.5 transition-all duration-150">
                      {t('res_view_plant')}
                      <span className="material-symbols-outlined text-sm"
                        style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Evidence footnote */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-8">
        <p className="font-manrope text-xs text-on-surface-variant leading-relaxed text-center">
          {isAr
            ? 'تستند هذه التوصيات إلى المكونات الفعّالة والأدلة السريرية الموثّقة في قاعدة بيانات نبتة. تعكس مستويات الأدلة الوضع الراهن للبحث العلمي.'
            : 'These recommendations are based on active constituents and clinical evidence documented in the Nabta plant database. Evidence levels reflect current scientific research.'}
        </p>
      </div>

      {/* Actions */}
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
  const { t }                     = useLanguage();
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers]     = useState(null);
  const [activeTab, setActiveTab] = useState('questionnaire');

  const handleComplete = useCallback((ans) => {
    setAnswers(ans);
    setCompleted(true);
    setActiveTab('results');
    saveQuestionnaire({
      ...ans,
      symptoms: ans.sub_concern ? [ans.sub_concern] : [],
    });
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
