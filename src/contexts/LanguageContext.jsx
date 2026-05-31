import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('vl_lang') || 'en');
  const isAr = lang === 'ar';

  useEffect(() => {
    localStorage.setItem('vl_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.body.classList.toggle('font-arabic', isAr);
  }, [lang, isAr]);

  const toggle = () => setLang(l => (l === 'en' ? 'ar' : 'en'));
  const t = (key) => {
    const val = TRANSLATIONS[lang]?.[key];
    if (val === undefined) return TRANSLATIONS['en'][key] ?? key;
    return val;
  };

  return (
    <LanguageContext.Provider value={{ lang, isAr, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const TRANSLATIONS = {
  en: {
    brand: 'Nabta', tagline: 'BOTANICAL RESEARCH INSTITUTE',
    nav_discover: 'Discover', nav_categories: 'Categories', nav_journal: 'Community',
    nav_about: 'About', nav_consult: 'Consult Expert', nav_switchLang: 'AR',
    home_hero_title: "Nature's Wisdom,\nScientifically Refined.",
    home_hero_sub: 'Traditional plant knowledge, backed by modern clinical evidence. Browse plant profiles with active compounds, dosage data, and safety information.',
    home_cta_explore: 'Explore Compendium', home_cta_journal: 'Community Insights',
    home_sleep_title: 'Sleep & Calm', home_sleep_desc: 'Botanical allies to quiet the mind, ease tension, and promote restorative rest. Discover tinctures and teas featuring Valerian, Chamomile, and Ashwagandha.',
    home_immunity_title: 'Immunity', home_immunity_desc: 'Fortify your natural defenses with potent extracts of Echinacea, Elderberry, and medicinal mushrooms.',
    home_vitality_title: 'Vitality', home_vitality_desc: 'Awaken natural energy reserves and support endurance. A curated selection of stimulating herbs including Ginseng, Rhodiola, and Eleuthero.',
    home_digestion_title: 'Digestion', home_digestion_desc: 'Soothe and optimize the digestive system with bitter tonics and carminatives like Ginger and Peppermint.',
    home_potm_badge: 'Plant of the Month', home_potm_latin: 'Echinacea purpurea',
    home_potm_desc: 'Renowned for its immunomodulatory properties, Echinacea stands at the forefront of natural prophylactic research. Our latest systematic review examines its...',
    home_view_profile: 'View Full Profile', home_explore: 'Explore Collection',
    cats_title: 'Apothecary Collections',
    cats_sub: "Browse plants grouped by health area. Each profile includes active compounds, mechanisms of action, dosage guidance, and clinical evidence.",
    cats_explore: 'Explore Collection',
    cat_immunity_name: 'Immunity', cat_immunity_tagline: 'Echinacea, Black Seed, and Astragalus: plants with clinical evidence for immune activation and antiviral defense.',
    cat_immunity_long: "Plants with documented effects on immune activation: from T-cell stimulation to interferon production. Each profile includes clinical evidence, dosage ranges, and safety data.",
    cat_digestive_name: 'Digestive Health', cat_digestive_tagline: 'Soothe and optimize the digestive system with bitter tonics and carminatives like Ginger and Peppermint.',
    cat_digestive_long: 'From bitter tonics that trigger digestive enzymes to carminatives that relieve cramping: plants with documented effects on gut function and symptom relief.',
    cat_respiratory_name: 'Respiratory Health', cat_respiratory_tagline: 'Eucalyptus, Butterbur, and Lemon: for colds, rhinitis, and bronchial inflammation.',
    cat_respiratory_long: 'Plants with proven effects on airway clearance, mucus reduction, and bronchial inflammation. Covers colds, seasonal allergies, and chronic respiratory conditions.',
    cat_womens_name: "Women's Health", cat_womens_tagline: 'Ginger, Cinnamon, Fenugreek: menstrual pain, lactation, and skin health with clinical evidence.',
    cat_womens_long: "Plants with clinical evidence for menstrual pain, hormonal regulation, lactation support, and skin health. Each profile includes safety data specific to pregnancy and breastfeeding.",
    cat_uti_name: 'Urinary Tract Health', cat_uti_tagline: 'Clove, Dandelion, Saw Palmetto: antiseptic, diuretic, and prostate-supporting botanicals for urinary wellness.',
    cat_uti_long: 'A specialized collection addressing urinary tract wellness: from antimicrobial herbs that fight urinary pathogens, to aquaretic diuretics that flush the tract, to evidence-based phytomedicines for benign prostatic hyperplasia.',
    plant_view_profile: 'View Profile', plant_save: 'Save plant',
    plant_save_journal: 'Save to Journal', plant_history: 'History & Origin',
    plant_benefits: 'Scientific Benefits',
    plant_pharmacology_intro: 'The therapeutic effects of this plant are attributed to the following active compounds.',
    plant_preparation: 'Preparation Methods', plant_symptoms: 'Associated Conditions',
    plant_related: 'Related Plants', plant_botanical_facts: 'Botanical Facts',
    plant_family: 'Family', plant_native: 'Native Region', plant_growth: 'Growth Habit',
    plant_compounds: 'Active Compounds', plant_cultivation: 'Cultivation Notes', plant_clinical_evidence: 'Scientific Evidence',
    plant_part_of: 'Part of Collection', plant_best_for: 'BEST FOR',
    q_title: 'Community Wellness Insights', q_sub: 'Aggregated data from questionnaire responses, updated in real time.',
    q_chart_symptoms: 'Most Reported Symptoms', q_chart_symptoms_sub: 'Total community responses',
    q_chart_categories: 'Category Interest', q_chart_categories_sub: 'Distribution of user focus areas',
    q_chart_trends: 'Wellness Engagement Trends', q_chart_trends_sub: 'Monthly growth in users & plant profiles explored',
    q_tab_questionnaire: 'Questionnaire', q_tab_results: 'My Results',
    q_step_of: 'Step', q_of: 'of', q_complete: 'complete',
    q_back: 'Back', q_continue: 'Continue', q_finish: 'Get My Recommendations',
    q_start: 'Start Questionnaire →', q_no_results: 'Complete the questionnaire to see your results.',
    q_users: 'Active Users', q_plants_explored: 'Plants Explored',
    qq1_q: 'What is your primary health concern?', qq1_sub: 'Select the area that matters most to you right now.',
    qq2_q: 'Which symptoms are you currently experiencing?', qq2_sub: 'Select all that apply.',
    qq3_q: 'How would you describe your current lifestyle?', qq3_sub: 'This helps us tailor recommendations to your situation.',
    qq4_q: 'What is your experience with herbal medicine?', qq4_sub: "We'll match recommendations to your comfort level.",
    qq5_q: 'What is your primary wellness goal?', qq5_sub: 'Select the outcome most important to you.',
    opt_immunity: 'Immune Support', opt_immunity_desc: 'Strengthening defenses',
    opt_digestive: 'Digestive Health', opt_digestive_desc: 'Gut comfort & function',
    opt_respiratory: 'Respiratory Health', opt_respiratory_desc: 'Breathing & airways',
    opt_womens: "Women's Wellness", opt_womens_desc: 'Hormonal & cycle health',
    opt_stress: 'Stress & Energy', opt_stress_desc: 'Mental & physical vitality',
    opt_sleep: 'Sleep Quality', opt_sleep_desc: 'Rest & recovery',
    opt_fatigue: 'Fatigue', opt_anxiety: 'Anxiety / Stress', opt_poor_sleep: 'Poor Sleep',
    opt_digestive_issues: 'Digestive Issues', opt_ibs: 'IBS / Bloating', opt_cough: 'Cough / Cold',
    opt_low_immunity: 'Low Immunity', opt_hormonal: 'Hormonal Imbalance',
    opt_sedentary: 'Mostly Sedentary', opt_sedentary_desc: 'Desk-based, minimal exercise',
    opt_moderate: 'Moderately Active', opt_moderate_desc: 'Light exercise 2-3x/week',
    opt_active: 'Very Active', opt_active_desc: 'Regular intense exercise',
    opt_high_stress: 'High Stress', opt_high_stress_desc: 'Demanding work/life demands',
    opt_beginner: 'Complete Beginner', opt_beginner_desc: 'New to herbal wellness',
    opt_some: 'Some Experience', opt_some_desc: 'Used teas or supplements',
    opt_experienced: 'Experienced', opt_experienced_desc: 'Familiar with tinctures, herbs',
    opt_prevention: 'Prevention', opt_prevention_desc: 'Maintain and protect health',
    opt_acute: 'Address Acute Issues', opt_acute_desc: 'Resolve current symptoms',
    opt_longterm: 'Long-term Vitality', opt_longterm_desc: 'Build lasting wellness',
    opt_education: 'Learn & Explore', opt_education_desc: 'Understand botanical medicine',
    res_title: 'Your Botanical Profile', res_sub: 'Based on your answers, here are the plants most relevant to your profile.',
    res_focus: 'Focus Area', res_symptoms: 'Key Symptoms', res_recommended: 'Recommended Plants for You',
    res_explore_all: 'Explore All Categories', res_retake: 'Retake Questionnaire',
    res_disclaimer: '⚠️ These recommendations are for educational purposes only. Always consult a qualified healthcare provider.',
    about_title: 'About Nabta', about_sub: 'Nabta documents medicinal plants with clinical evidence, active compound data, dosage guidance, and safety profiles, in both English and Arabic.',
    about_evidence: 'Evidence-Based', about_evidence_desc: 'Every profile includes peer-reviewed research, active constituents, mechanisms of action, and clinical evidence grades.',
    about_sourced: 'Data Sources', about_sourced_desc: 'Plant data is drawn from pharmacopoeias, peer-reviewed journals, and validated traditional medicine records.',
    about_education: 'Botanical Education', about_education_desc: 'Reference material for informed decisions. Not a substitute for medical consultation.',
    about_stats_title: 'Platform Statistics',
    about_stats_visitors: 'Website Visitors', about_stats_visitors_sub: 'Total visits',
    about_stats_plants: 'Plants in Database', about_stats_plants_sub: 'Active this month',
    about_stats_questionnaires: 'Questionnaires Completed', about_stats_questionnaires_sub: 'Community responses',
    about_stats_top_plant: 'Most Viewed Plant', about_stats_top_sub: 'This month',
    about_stats_categories: 'Research Categories', about_stats_categories_sub: 'Health areas covered',
    about_stats_loading: 'Loading...',
    about_team_title: 'Meet the Team',
    about_team_sub: 'The dedicated pharmacists behind Nabta',
    about_disclaimer_title: 'Important Disclaimer',
    about_disclaimer: 'All information on Nabta is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider before starting any herbal regimen, especially if pregnant, nursing, or taking medications.',
    footer_privacy: 'Privacy Policy', footer_sourcing: 'Ethical Sourcing',
    footer_references: 'Scientific References', footer_contact: 'Contact',
    footer_copy: '© 2026 Nabta. All rights reserved.',
    chat_title: 'Botanical Guide', chat_powered: 'Powered by Nabta AI',
    chat_placeholder: 'Ask about herbs, symptoms...',
    chat_disclaimer: 'Educational info only • Not medical advice',
    chat_welcome: "Hello! 🌿 I'm Nabta's herbal assistant. Ask me about a plant, a symptom, or a health condition and I'll answer from the clinical database.",
    chat_suggest_1: 'Boost my immunity', chat_suggest_2: 'Help with digestion',
    chat_suggest_3: "I'm stressed", chat_suggest_4: 'Cough remedies',
    not_found: 'Not found', back_categories: '← Back to Categories',
    botanical_category: 'Botanical Category', coming_soon: 'Plants coming soon to this collection.',
    loading: 'Loading...', view_collection: 'View Collection', most_popular: 'Most Popular',
    botanical_directory: 'Botanical Directory', more_profiles: 'More profiles are currently being researched for this collection.',
    part_of_collection: 'Part of Collection',
    sub_menstrual: 'Menstrual Health', sub_pregnancy: 'Pregnancy Support Plants',
    sub_breastfeeding: 'Breast Feeding Support Plants', sub_haircare: 'Hair Care Plants',
    sub_skincare: 'Skin Care Plants', sub_constipation: 'Constipation Relief Plants',
    sub_diarrhea: 'Diarrhea Support Plants', sub_dyspepsia: 'Dyspepsia',
    sub_ibs: 'IBS', sub_cold: 'Cold', sub_rhinitis: 'Rhinitis',
    sub_sinusitis: 'Sinusitis', sub_cough: 'Cough',
    sub_immune: 'Immune Boosting Plants', sub_antioxidant: 'Anti-Oxidant Rich Plants',
    sub_antiinflammatory: 'Anti-Inflammatory Plants',
    sub_antiseptic: 'Anti-Septic Plants', sub_diuretics: 'Diuretic Plants', sub_bph: 'BPH Support Plants',
    // ── Subcategory descriptions ──────────────────────────────────────────
    sub_menstrual_desc: 'Support for cycle regulation and hormonal balance.',
    sub_pregnancy_desc: 'Gentle, nourishing botanicals for expectant mothers.',
    sub_breastfeeding_desc: 'Herbs to support lactation and nursing.',
    sub_haircare_desc: 'Botanical extracts for scalp health and hair vitality.',
    sub_skincare_desc: 'Botanicals for a radiant, healthy complexion.',
    sub_constipation_desc: 'Support healthy bowel motility and regularity.',
    sub_diarrhea_desc: 'Astringent herbs to soothe and settle the tract.',
    sub_dyspepsia_desc: 'Herbal relief for indigestion and stomach discomfort.',
    sub_ibs_desc: 'Calming carminatives to manage IBS symptoms.',
    sub_cold_desc: 'Herbs to ease cold symptoms and speed recovery.',
    sub_rhinitis_desc: 'Botanical support for nasal inflammation and runny nose.',
    sub_sinusitis_desc: 'Clear congestion and sinus pressure naturally.',
    sub_cough_desc: 'Soothing herbs for irritated throats and airways.',
    sub_immune_desc: 'Deep immune system support with powerful botanicals.',
    sub_antioxidant_desc: 'Protect cells from oxidative stress and damage.',
    sub_antiinflammatory_desc: 'Natural anti-inflammatory plant compounds.',
    sub_antiseptic_desc: 'Antimicrobial botanicals for urinary tract antisepsis.',
    sub_diuretics_desc: 'Aquaretic herbs that flush the urinary tract naturally.',
    sub_bph_desc: 'Phytomedicines for benign prostatic hyperplasia management.',
    // ── Chart display names for new questionnaire sub_concern slugs ───────
    chart_menstrual_health: 'Menstrual', chart_pregnancy_support: 'Pregnancy',
    chart_breast_feeding: 'Breastfeeding', chart_hair_care: 'Hair Care',
    chart_skin_care: 'Skin Care', chart_cold: 'Cold & Flu',
    chart_rhinitis: 'Rhinitis', chart_sinusitis: 'Sinusitis', chart_cough: 'Cough',
    chart_immune_boosting: 'Immunity', chart_immune_recover: 'Recovery',
    chart_anti_oxidant_rich: 'Antioxidant', chart_wellness: 'Wellness',
    plant_active_constituents: 'Active Constituents',
    plant_moa: 'Mechanism of Action',
    plant_moa_show: 'Show Mechanism',
    plant_moa_hide: 'Hide Mechanism',
    plant_how_to_use: 'How to Use',
    plant_age_groups: 'Suitable Age Groups',
    plant_dosage: 'Dosage',
    plant_overdose: 'Overdose',
    plant_side_effects: 'Side Effects',
    plant_contraindications: 'Contraindications',
    plant_drug_interactions: 'Drug Interactions',
    plant_storage: 'Storage',
    plant_marketed: 'Marketed Products',
    plant_crucial_note: 'Pharmacognostical Note',
    plant_warnings: 'Warnings',
    plant_overdose_symptoms: 'Symptoms',
    plant_overdose_management: 'Management',
    demo_badge: 'Demo Data: Full profile coming soon',
    plant_uses: 'Uses & Indications',
    plant_references: 'Scientific References',
    plant_facts_myths: 'Facts & Myths',
    plant_myth: 'Myth',
    plant_fact: 'Fact',
    // ── New questionnaire keys ────────────────────────────────────────────
    opt_digestive_soon: 'Digestive Health', opt_digestive_soon_desc: 'Coming soon database expanding',
    opt_wellness: 'General Wellness', opt_wellness_desc: 'Everyday vitality & balance',
    qq2_new_q: 'What would you like to focus on?', qq2_new_sub: 'Choose the area that best describes your need.',
    opt_wh_skin: 'Skin Care', opt_wh_skin_desc: 'Complexion, acne & skin health',
    opt_wh_bf: 'Breastfeeding Support', opt_wh_bf_desc: 'Lactation & postpartum care',
    opt_wh_menstrual: 'Menstrual Health', opt_wh_menstrual_desc: 'Cycle comfort & regulation',
    opt_resp_cold: 'Cold & Flu', opt_resp_cold_desc: 'Fever, sore throat, runny nose',
    opt_resp_rhinitis: 'Rhinitis / Allergies', opt_resp_rhinitis_desc: 'Nasal congestion & seasonal allergies',
    opt_resp_both: 'Both / General', opt_resp_both_desc: 'Overall respiratory support',
    opt_imm_prevent: 'Prevention', opt_imm_prevent_desc: 'Daily immune fortification',
    opt_imm_recover: 'Recovery Support', opt_imm_recover_desc: 'Speed recovery after illness',
    opt_imm_antioxidant: 'Antioxidant Support', opt_imm_antioxidant_desc: 'Cellular protection & anti-aging',
    qq3_new_q: 'Do any of these apply to you?', qq3_new_sub: 'Select all that apply this ensures safe recommendations.',
    opt_pregnant: 'Pregnant', opt_breastfeeding: 'Breastfeeding',
    opt_diabetes: 'Diabetes', opt_blood_thinners: 'Taking blood thinners',
    opt_liver: 'Liver condition', opt_nut_allergy: 'Nut / legume allergy',
    opt_none_apply: 'None of these apply',
    qq4_new_q: 'What is your age group?', qq4_new_sub: 'Age helps us calibrate dosage guidance.',
    opt_age_under18: 'Under 18', opt_age_under18_desc: 'Parental guidance recommended',
    opt_age_18_40: '18 – 40', opt_age_40_65: '40 – 65',
    opt_age_over65: 'Over 65', opt_age_over65_desc: 'Lower starting doses advised',
    qq5_new_q: 'How do you prefer to take herbal remedies?', qq5_new_sub: "We'll tailor our form recommendations to your preference.",
    opt_form_tea: 'Herbal Tea', opt_form_tea_desc: 'Infusions & decoctions',
    opt_form_capsules: 'Capsules / Extracts', opt_form_capsules_desc: 'Standardised supplements',
    opt_form_both: 'Either / Both', opt_form_both_desc: 'No strong preference',
    opt_form_unsure: "I'm not sure", opt_form_unsure_desc: "We'll show the most common form",
    res_your_focus: 'Your Focus', res_your_age: 'Age Group', res_your_form: 'Preferred Form',
    res_contraindication_warning: 'You have indicated certain health conditions or medications. The plants listed below have been safety-filtered, but please consult a healthcare professional before use.',
    res_evidence_high: 'High Evidence', res_evidence_moderate: 'Moderate Evidence', res_evidence_preliminary: 'Preliminary',
    res_match_reason_label: 'Why it matches',
    res_key_constituent_label: 'Key Constituent',
    res_recommended_form_label: 'Recommended Form',
    res_dose_label: 'Standard Dose',
    res_safety_note_label: 'Safety Note',
    res_coming_soon_title: 'Digestive Database Coming Soon',
    res_coming_soon_desc: 'We are actively researching and adding digestive health plants. Check back soon!',
    res_no_plants_found: 'No plants match your current safety profile. Please consult a qualified herbalist or healthcare provider for personalised advice.',
    res_view_plant: 'View Full Profile',
  },
  ar: {
    brand: 'نبتة', tagline: 'معهد الأبحاث النباتية',
    nav_discover: 'اكتشف', nav_categories: 'التصنيفات', nav_journal: 'المجتمع',
    nav_about: 'عن المعهد', nav_consult: 'استشر خبيراً', nav_switchLang: 'En',
    home_hero_title: 'حكمة الطبيعة،\nمُكتنَزةٌ علمياً.',
    home_hero_sub: 'معرفة نباتية موثّقة ومدعومة بالبحث السريري الحديث. ملفات نباتية تتضمن المركبات الفعّالة والجرعات وبيانات السلامة.',
    home_cta_explore: 'استكشف الموسوعة', home_cta_journal: 'رؤى المجتمع',
    home_sleep_title: 'النوم والهدوء', home_sleep_desc: 'حلفاء نباتيون لتهدئة العقل وتخفيف التوتر وتعزيز النوم التصافي. اكتشف الصبغات والشاي المحتوي على فاليريان والبابونج والأشواغاندا.',
    home_immunity_title: 'المناعة', home_immunity_desc: 'عزّز دفاعاتك الطبيعية بمستخلصات قوية من إشنسا والتوت الأكبر والفطريات الطبية.',
    home_vitality_title: 'الحيوية', home_vitality_desc: 'أيقظ احتياطيات الطاقة الطبيعية وادعم التحمل. مجموعة مختارة من الأعشاب المنشطة بما فيها الجينسنغ والروديولا والإليوثيرو.',
    home_digestion_title: 'الهضم', home_digestion_desc: 'هدّئ الجهاز الهضمي وحسّن أداءه بالمقويات المُرّة والكارميناتيف كالزنجبيل والنعناع.',
    home_potm_badge: 'نبتة الشهر', home_potm_latin: 'Echinacea purpurea',
    home_potm_desc: 'تُعدّ الإشنسا في طليعة الأبحاث الوقائية الطبيعية بفضل خصائصها المُعدِّلة للمناعة. تفحص مراجعتنا المنهجية الأخيرة...',
    home_view_profile: 'عرض الملف الكامل', home_explore: 'استكشف المجموعة',
    cats_title: 'مجموعات الصيدلية',
    cats_sub: 'تصفح النباتات مرتبةً حسب مجال الصحة. يتضمن كل ملف المركبات الفعّالة وآليات الفعل وإرشادات الجرعة والدليل السريري.',
    cats_explore: 'استكشف المجموعة',
    cat_immunity_name: 'المناعة', cat_immunity_tagline: 'الإشنسا والحبة السوداء والأسترغالوس: نباتات ذات دليل سريري لتنشيط المناعة والدفاع الفيروسي.',
    cat_immunity_long: 'نباتات ذات آثار موثّقة على تنشيط المناعة؛ من تفعيل خلايا T إلى إنتاج الإنترفيرون. يتضمن كل ملف الدليل السريري ونطاقات الجرعة وبيانات السلامة.',
    cat_digestive_name: 'صحة الجهاز الهضمي', cat_digestive_tagline: 'هدّئ الجهاز الهضمي وحسّن أداءه بالمقويات المرة والكارميناتيف كالزنجبيل والنعناع.',
    cat_digestive_long: 'من المقويات المرة التي تحفّز إنزيمات الهضم إلى الكارميناتيف التي تخفف التشنجات؛ نباتات ذات آثار موثّقة على وظائف الأمعاء وتخفيف الأعراض.',
    cat_respiratory_name: 'صحة الجهاز التنفسي', cat_respiratory_tagline: 'الإيكاليبتوس والبتربور والليمون: للبرد والتهاب الأنف والالتهاب القصبي.',
    cat_respiratory_long: 'نباتات ذات آثار مثبتة على تصفية مجرى الهواء وتقليل المخاط والالتهاب القصبي. تشمل ملفات للبرد والحساسية الموسمية والحالات التنفسية المزمنة.',
    cat_womens_name: "صحة المرأة", cat_womens_tagline: 'الزنجبيل والقرفة والحلبة: آلام الدورة الشهرية والرضاعة وصحة البشرة بالدليل السريري.',
    cat_womens_long: 'نباتات ذات دليل سريري لآلام الدورة الشهرية وتنظيم الهرمونات ودعم الرضاعة وصحة البشرة. يتضمن كل ملف بيانات السلامة الخاصة بالحمل والرضاعة.',
    cat_uti_name: 'صحة المسالك البولية', cat_uti_tagline: 'القرنفل والهندباء وسو بالميتو: نباتات مطهّرة ومُدرّة وداعمة للبروستات لصحة الجهاز البولي.',
    cat_uti_long: 'مجموعة متخصصة لصحة المسالك البولية؛ من الأعشاب المضادة للميكروبات التي تحارب مسببات التهابات المسالك، إلى المدرّات المائية التي تُنظّف المسالك، إلى الأدوية النباتية المدعومة بالأدلة لتضخّم البروستات الحميد.',
    plant_view_profile: 'عرض الملف', plant_save: 'حفظ النبتة',
    plant_save_journal: 'حفظ في المجلة', plant_history: 'التاريخ والأصل',
    plant_benefits: 'الفوائد العلمية',
    plant_pharmacology_intro: 'تُعزى التأثيرات العلاجية لهذا النبات إلى المركبات الفعّالة التالية.',
    plant_preparation: 'طرق التحضير', plant_symptoms: 'الحالات المصاحبة',
    plant_related: 'نباتات ذات صلة', plant_botanical_facts: 'الحقائق النباتية',
    plant_family: 'العائلة', plant_native: 'المنطقة الأصلية', plant_growth: 'عادة النمو',
    plant_compounds: 'المركبات الفعّالة', plant_cultivation: 'ملاحظات الزراعة', plant_clinical_evidence: 'الدليل العلمي',
    plant_part_of: 'جزء من مجموعة', plant_best_for: 'الأفضل لـ',
    q_title: 'رؤى صحة المجتمع', q_sub: 'بيانات مجمّعة من ردود الاستبيان، تُحدَّث في الوقت الفعلي.',
    q_chart_symptoms: 'الأعراض الأكثر إبلاغاً', q_chart_symptoms_sub: 'مجموع ردود المجتمع',
    q_chart_categories: 'الاهتمام بالتصنيفات', q_chart_categories_sub: 'توزيع مجالات اهتمام المستخدمين',
    q_chart_trends: 'اتجاهات التفاعل الصحي', q_chart_trends_sub: 'النمو الشهري في المستخدمين والنباتات المستكشَفة',
    q_tab_questionnaire: 'الاستبيان', q_tab_results: 'نتائجي',
    q_step_of: 'الخطوة', q_of: 'من', q_complete: 'مكتمل',
    q_back: 'رجوع', q_continue: 'متابعة', q_finish: 'احصل على توصياتي',
    q_start: 'ابدأ الاستبيان →', q_no_results: 'أكمل الاستبيان لرؤية نتائجك.',
    q_users: 'مستخدمون نشطون', q_plants_explored: 'نباتات مستكشَفة',
    qq1_q: 'ما هو اهتمامك الصحي الأساسي؟', qq1_sub: 'اختر المجال الأهم لك الآن.',
    qq2_q: 'ما الأعراض التي تعانيها حالياً؟', qq2_sub: 'اختر كل ما ينطبق عليك.',
    qq3_q: 'كيف تصف نمط حياتك الحالي؟', qq3_sub: 'يساعدنا ذلك في تخصيص التوصيات لوضعك.',
    qq4_q: 'ما مستوى تجربتك في الطب العشبي؟', qq4_sub: 'سنطابق التوصيات مع مستوى راحتك.',
    qq5_q: 'ما هدفك الصحي الأساسي؟', qq5_sub: 'اختر النتيجة الأهم لك.',
    opt_immunity: 'دعم المناعة', opt_immunity_desc: 'تعزيز الدفاعات',
    opt_digestive: 'صحة الجهاز الهضمي', opt_digestive_desc: 'راحة الأمعاء ووظائفها',
    opt_respiratory: 'صحة الجهاز التنفسي', opt_respiratory_desc: 'التنفس والمجاري الهوائية',
    opt_womens: 'صحة المرأة', opt_womens_desc: 'الصحة الهرمونية والدورة الشهرية',
    opt_stress: 'التوتر والطاقة', opt_stress_desc: 'الحيوية الذهنية والجسدية',
    opt_sleep: 'جودة النوم', opt_sleep_desc: 'الراحة والتعافي',
    opt_fatigue: 'الإرهاق', opt_anxiety: 'القلق / التوتر', opt_poor_sleep: 'اضطراب النوم',
    opt_digestive_issues: 'مشاكل هضمية', opt_ibs: 'القولون العصبي / الانتفاخ',
    opt_cough: 'السعال / البرد', opt_low_immunity: 'ضعف المناعة', opt_hormonal: 'خلل هرموني',
    opt_sedentary: 'خامل في الغالب', opt_sedentary_desc: 'جلوس مكتبي، تمارين قليلة',
    opt_moderate: 'نشط باعتدال', opt_moderate_desc: 'تمارين خفيفة 2-3 مرات أسبوعياً',
    opt_active: 'نشط جداً', opt_active_desc: 'تمارين مكثفة منتظمة',
    opt_high_stress: 'ضغط عالٍ', opt_high_stress_desc: 'متطلبات عمل وحياة شاقة',
    opt_beginner: 'مبتدئ تماماً', opt_beginner_desc: 'جديد على عالم الأعشاب',
    opt_some: 'بعض الخبرة', opt_some_desc: 'استخدمت شاياً أو مكملات',
    opt_experienced: 'خبير', opt_experienced_desc: 'ملمّ بالصبغات والأعشاب',
    opt_prevention: 'الوقاية', opt_prevention_desc: 'الحفاظ على الصحة وحمايتها',
    opt_acute: 'معالجة مشاكل حادة', opt_acute_desc: 'حلّ الأعراض الحالية',
    opt_longterm: 'حيوية طويلة الأمد', opt_longterm_desc: 'بناء صحة دائمة',
    opt_education: 'التعلم والاستكشاف', opt_education_desc: 'فهم الطب النباتي',
    res_title: 'ملفك النباتي', res_sub: 'بناءً على إجاباتك، إليك النباتات الأكثر صلةً بملفك الصحي.',
    res_focus: 'مجال التركيز', res_symptoms: 'الأعراض الرئيسية',
    res_recommended: 'النباتات الموصى بها لك', res_explore_all: 'استكشف جميع التصنيفات',
    res_retake: 'أعد الاستبيان',
    res_disclaimer: '⚠️ هذه التوصيات لأغراض تعليمية فقط. استشر دائماً مقدم الرعاية الصحية المؤهل.',
    about_title: 'عن نبتة', about_sub: 'نبتة توثّق النباتات الطبية بالدليل السريري والمركبات الفعّالة وإرشادات الجرعة وملفات السلامة؛ بالعربية والإنجليزية.',
    about_evidence: 'قائم على الأدلة', about_evidence_desc: 'يتضمن كل ملف أبحاثاً محكّمة ومكونات فعّالة وآليات الفعل ودرجات الدليل السريري.',
    about_sourced: 'مصادر البيانات', about_sourced_desc: 'تُستقى بيانات النباتات من الفارماكوبيا والدوريات العلمية المحكّمة وسجلات الطب التقليدي الموثّقة.',
    about_education: 'تعليم نباتي', about_education_desc: 'مرجع للقرارات المبنية على المعرفة. ليس بديلاً عن الاستشارة الطبية.',
    about_stats_title: 'إحصائيات المنصة',
    about_stats_visitors: 'زوّار الموقع', about_stats_visitors_sub: 'إجمالي الزيارات',
    about_stats_plants: 'نباتات في قاعدة البيانات', about_stats_plants_sub: 'نشطة هذا الشهر',
    about_stats_questionnaires: 'استبيانات مكتملة', about_stats_questionnaires_sub: 'استجابات المجتمع',
    about_stats_top_plant: 'أكثر النباتات مشاهدة', about_stats_top_sub: 'هذا الشهر',
    about_stats_categories: 'فئات البحث', about_stats_categories_sub: 'مجالات صحية مُغطّاة',
    about_stats_loading: 'جارٍ التحميل...',
    about_team_title: 'فريق العمل',
    about_team_sub: 'الصيادلة المتخصصون وراء نبتة',
    about_disclaimer_title: 'إخلاء مسؤولية مهم',
    about_disclaimer: 'جميع المعلومات على نبتة لأغراض تعليمية فقط ولا تُعدّ نصيحة طبية. استشر دائماً مقدم رعاية صحية مؤهلاً قبل البدء بأي نظام عشبي.',
    footer_privacy: 'سياسة الخصوصية', footer_sourcing: 'الاستدامة الأخلاقية',
    footer_references: 'المراجع العلمية', footer_contact: 'اتصل بنا',
    footer_copy: '© 2026 نبتة. جميع الحقوق محفوظة.',
    chat_title: 'المرشد النباتي', chat_powered: 'مدعوم من نبتة AI',
    chat_placeholder: 'اسأل عن الأعشاب أو الأعراض...',
    chat_disclaimer: 'معلومات تعليمية فقط • ليست نصيحة طبية',
    chat_welcome: 'مرحباً! 🌿 أنا مساعد نبتة العشبي. اسألني عن نبات أو عرض أو حالة صحية وسأجيبك من قاعدة البيانات السريرية.',
    chat_suggest_1: 'تعزيز مناعتي', chat_suggest_2: 'مساعدة في الهضم',
    chat_suggest_3: 'أعاني من التوتر', chat_suggest_4: 'علاجات السعال',
    not_found: 'غير موجود', back_categories: '← العودة إلى التصنيفات',
    botanical_category: 'تصنيف نباتي', coming_soon: 'النباتات قادمة قريباً إلى هذه المجموعة.',
    loading: 'جارٍ التحميل...', view_collection: 'عرض المجموعة', most_popular: 'الأكثر شيوعاً',
    botanical_directory: 'الدليل النباتي', more_profiles: 'مزيد من الملفات قيد البحث لهذه المجموعة.',
    part_of_collection: 'جزء من مجموعة',
    sub_menstrual: 'صحة الدورة الشهرية', sub_pregnancy: 'نباتات دعم الحمل',
    sub_breastfeeding: 'نباتات دعم الرضاعة', sub_haircare: 'نباتات العناية بالشعر',
    sub_skincare: 'نباتات العناية بالبشرة', sub_constipation: 'نباتات تخفيف الإمساك',
    sub_diarrhea: 'نباتات دعم الإسهال', sub_dyspepsia: 'عسر الهضم',
    sub_ibs: 'القولون العصبي', sub_cold: 'البرد', sub_rhinitis: 'التهاب الأنف',
    sub_sinusitis: 'التهاب الجيوب الأنفية', sub_cough: 'السعال',
    sub_immune: 'نباتات تقوية المناعة', sub_antioxidant: 'نباتات غنية بمضادات الأكسدة',
    sub_antiinflammatory: 'نباتات مضادة للالتهابات',
    sub_antiseptic: 'نباتات مطهّرة', sub_diuretics: 'نباتات مُدرّة للبول', sub_bph: 'نباتات دعم البروستات',
    // ── أوصاف التصنيفات الفرعية ───────────────────────────────────────────
    sub_menstrual_desc: 'دعم تنظيم الدورة الشهرية والتوازن الهرموني.',
    sub_pregnancy_desc: 'نباتات لطيفة ومغذية للأمهات الحوامل.',
    sub_breastfeeding_desc: 'أعشاب لدعم الرضاعة والإرضاع.',
    sub_haircare_desc: 'مستخلصات نباتية لصحة فروة الرأس وحيوية الشعر.',
    sub_skincare_desc: 'نباتات لبشرة صحية ومشرقة.',
    sub_constipation_desc: 'دعم حركة الأمعاء الصحية وانتظامها.',
    sub_diarrhea_desc: 'أعشاب قابضة لتهدئة الجهاز الهضمي.',
    sub_dyspepsia_desc: 'علاج عشبي لعسر الهضم وانزعاج المعدة.',
    sub_ibs_desc: 'كارميناتيف مهدئة لإدارة أعراض القولون العصبي.',
    sub_cold_desc: 'أعشاب لتخفيف أعراض البرد وتسريع الشفاء.',
    sub_rhinitis_desc: 'دعم نباتي لالتهاب الأنف وسيلانه.',
    sub_sinusitis_desc: 'تخفيف احتقان الجيوب الأنفية وضغطها طبيعياً.',
    sub_cough_desc: 'أعشاب مهدئة للحلق والمجاري الهوائية المتهيجة.',
    sub_immune_desc: 'دعم عميق للجهاز المناعي بنباتات فعّالة.',
    sub_antioxidant_desc: 'حماية الخلايا من الإجهاد التأكسدي والتلف.',
    sub_antiinflammatory_desc: 'مركبات نباتية طبيعية مضادة للالتهابات.',
    sub_antiseptic_desc: 'نباتات مضادة للميكروبات لتطهير المسالك البولية.',
    sub_diuretics_desc: 'أعشاب مُدرّة مائية تنظّف المسالك البولية طبيعياً.',
    sub_bph_desc: 'أدوية نباتية لإدارة تضخّم البروستات الحميد.',
    // ── أسماء عرض الرسم البياني للاستبيان الجديد ─────────────────────────
    chart_menstrual_health: 'الدورة الشهرية', chart_pregnancy_support: 'الحمل',
    chart_breast_feeding: 'الرضاعة', chart_hair_care: 'الشعر',
    chart_skin_care: 'البشرة', chart_cold: 'البرد', chart_rhinitis: 'التهاب الأنف',
    chart_sinusitis: 'الجيوب الأنفية', chart_cough: 'السعال',
    chart_immune_boosting: 'المناعة', chart_immune_recover: 'التعافي',
    chart_anti_oxidant_rich: 'مضادات الأكسدة', chart_wellness: 'الصحة العامة',
    plant_active_constituents: 'المكوّنات الفعّالة',
    plant_moa: 'آلية العمل',
    plant_moa_show: 'عرض آلية العمل',
    plant_moa_hide: 'إخفاء آلية العمل',
    plant_how_to_use: 'طريقة الاستخدام',
    plant_age_groups: 'الفئات العمرية المناسبة',
    plant_dosage: 'الجرعة',
    plant_overdose: 'الجرعة الزائدة',
    plant_side_effects: 'الآثار الجانبية',
    plant_contraindications: 'موانع الاستخدام',
    plant_drug_interactions: 'التفاعلات الدوائية',
    plant_storage: 'التخزين',
    plant_marketed: 'المنتجات التجارية',
    plant_crucial_note: 'ملاحظة صيدلانية',
    plant_warnings: 'تحذيرات',
    plant_overdose_symptoms: 'الأعراض',
    plant_overdose_management: 'الإدارة',
    demo_badge: 'بيانات تجريبية: الملف الكامل قريباً',
    plant_uses: 'الاستخدامات والمؤشرات',
    plant_references: 'المراجع العلمية',
    plant_facts_myths: 'حقائق وخرافات',
    plant_myth: 'خرافة',
    plant_fact: 'حقيقة',
    // ── مفاتيح الاستبيان الجديدة ──────────────────────────────────────────
    opt_digestive_soon: 'صحة الجهاز الهضمي', opt_digestive_soon_desc: 'قريباً قاعدة البيانات في توسّع',
    opt_wellness: 'صحة عامة', opt_wellness_desc: 'حيوية يومية وتوازن',
    qq2_new_q: 'على ماذا تودّ التركيز؟', qq2_new_sub: 'اختر المجال الذي يصف احتياجك بشكل أفضل.',
    opt_wh_skin: 'العناية بالبشرة', opt_wh_skin_desc: 'البشرة والحبوب وصحة الجلد',
    opt_wh_bf: 'دعم الرضاعة', opt_wh_bf_desc: 'الإرضاع ورعاية ما بعد الولادة',
    opt_wh_menstrual: 'صحة الدورة الشهرية', opt_wh_menstrual_desc: 'راحة الدورة وانتظامها',
    opt_resp_cold: 'نزلة برد وإنفلونزا', opt_resp_cold_desc: 'حمى، التهاب حلق، سيلان أنف',
    opt_resp_rhinitis: 'التهاب الأنف / الحساسية', opt_resp_rhinitis_desc: 'احتقان الأنف وحساسية الفصول',
    opt_resp_both: 'كلاهما / عام', opt_resp_both_desc: 'دعم تنفسي شامل',
    opt_imm_prevent: 'الوقاية', opt_imm_prevent_desc: 'تعزيز مناعي يومي',
    opt_imm_recover: 'دعم التعافي', opt_imm_recover_desc: 'تسريع التعافي بعد المرض',
    opt_imm_antioxidant: 'دعم مضادات الأكسدة', opt_imm_antioxidant_desc: 'حماية الخلايا ومكافحة الشيخوخة',
    qq3_new_q: 'هل ينطبق عليك أيٌّ مما يلي؟', qq3_new_sub: 'اختر كل ما ينطبق يضمن ذلك توصيات آمنة.',
    opt_pregnant: 'حامل', opt_breastfeeding: 'مرضعة',
    opt_diabetes: 'السكري', opt_blood_thinners: 'أتناول مضادات التخثر',
    opt_liver: 'حالة كبدية', opt_nut_allergy: 'حساسية من المكسرات / البقوليات',
    opt_none_apply: 'لا شيء من هذا ينطبق عليّ',
    qq4_new_q: 'ما هي فئتك العمرية؟', qq4_new_sub: 'يساعدنا العمر في ضبط توجيهات الجرعات.',
    opt_age_under18: 'أقل من 18', opt_age_under18_desc: 'يُنصح بإشراف الوالدين',
    opt_age_18_40: '18 – 40', opt_age_40_65: '40 – 65',
    opt_age_over65: 'أكثر من 65', opt_age_over65_desc: 'يُنصح بجرعات بداية أقل',
    qq5_new_q: 'كيف تفضّل تناول العلاجات العشبية؟', qq5_new_sub: 'سنخصّص توصيات الشكل حسب تفضيلك.',
    opt_form_tea: 'شاي عشبي', opt_form_tea_desc: 'منقوعات ومغليات',
    opt_form_capsules: 'كبسولات / مستخلصات', opt_form_capsules_desc: 'مكملات موحّدة الجرعة',
    opt_form_both: 'كلاهما / لا فرق', opt_form_both_desc: 'ليس لديّ تفضيل محدد',
    opt_form_unsure: 'لست متأكداً', opt_form_unsure_desc: 'سنعرض الشكل الأكثر شيوعاً',
    res_your_focus: 'محور تركيزك', res_your_age: 'الفئة العمرية', res_your_form: 'الشكل المفضّل',
    res_contraindication_warning: 'أشرت إلى حالات صحية معينة أو أدوية. النباتات المدرجة أدناه خضعت لفلترة أمان، لكن يُرجى استشارة مختص صحي قبل الاستخدام.',
    res_evidence_high: 'أدلة قوية', res_evidence_moderate: 'أدلة معتدلة', res_evidence_preliminary: 'أدلة أولية',
    res_match_reason_label: 'سبب التطابق',
    res_key_constituent_label: 'المكوّن الرئيسي',
    res_recommended_form_label: 'الشكل الموصى به',
    res_dose_label: 'الجرعة القياسية',
    res_safety_note_label: 'ملاحظة أمان',
    res_coming_soon_title: 'قاعدة بيانات الجهاز الهضمي قريباً',
    res_coming_soon_desc: 'نعمل بنشاط على إضافة نباتات صحة الجهاز الهضمي. ترقّب التحديثات!',
    res_no_plants_found: 'لا توجد نباتات تتطابق مع ملفك الأمني الحالي. يُرجى استشارة عشّاب مؤهّل أو مختص صحي للحصول على نصيحة مخصّصة.',
    res_view_plant: 'عرض الملف الكامل',
  },
};

export const PLANT_TRANSLATIONS = {
  ar: {
    echinacea: {
      name: 'إشنسا', shortDescription: 'مشهورة بقدرتها على تحفيز الجهاز المناعي، فعّالة بشكل خاص عند تناولها عند أول ظهور للأعراض الموسمية.',
      description: 'ركيزة أساسية في العلاج العشبي التقليدي، تقف الإشنسا في طليعة الأبحاث الوقائية الطبيعية. تم التحقق من خصائصها المناعية في دراسات سريرية عديدة.',
      history: 'يعود الاستخدام الطبي للإشنسا إلى الشعوب الأصلية في أمريكا الشمالية، الذين استخدموها لأمراض متعددة. قُدِّمت للمستوطنين الأوروبيين وأصبحت من أشهر الأعشاب الطبية في الولايات المتحدة.',
      warnings: [
        'الإشنسا ليس لها تأثير مباشر على البكتيريا: تُدرِّب خلايا المناعة على أن تكون أسرع وأكثر شراسة؛ تكاد تكون عديمة الفائدة إذا أُخذت بعد استقرار العدوى تمامًا.',
        'ممنوعة بشكل صارم في أمراض المناعة الذاتية (التصلب المتعدد، الذئبة الحمراء، التهاب المفاصل الروماتويدي): تحفّز المناعة على مهاجمة أنسجة الجسم.',
        'محظورة تمامًا لمرضى زراعة الأعضاء: تتعارض مباشرة مع الأدوية المثبطة للمناعة الضرورية.',
        'الحد الأقصى للاستخدام الحاد: 10 أيام متتالية؛ الحد الأقصى للدورة الوقائية: 8 أسابيع (مع استراحة إلزامية 3 أسابيع بعدها).',
      ],
      activeConstituents: [
        { name: 'الألكيلاميدات (إيزوبيوتيلاميدات دهنية)', percentage: '', effect: 'ترتبط بمستقبلات الكانابينويد من النوع 2 (CB2)؛ المحركات الأساسية للتأثيرات المعدِّلة للمناعة' },
        { name: 'حمض الشيكوريك، حمض الكافتاريك، الإشناكوسيد (فينيل بروبانويدات)', percentage: '', effect: 'مشتقات فينولية مائية؛ مضادات أكسدة قوية وحماية خلوية فعّالة' },
        { name: 'أرابينوغالاكتان وفوكوغالاكتوكسيلوغلوكان (بوليساكاريد عالي الوزن الجزيئي)', percentage: '', effect: 'تراكيب معقدة قابلة للذوبان في الماء تحفّز مباشرة تكاثر الضامّات والعدلات الخلوي' },
        { name: 'الزيوت الأساسية المتطايرة (بورنيول، بورنيل أسيتات، جيرماكرين D)', percentage: '', effect: 'مساهمات عطرية ومضادة للميكروبات ثانوية' },
      ],
      moa: [
        { title: 'تنشيط البلعمة', detail: 'يرفع بشكل ملحوظ الطاقة التشغيلية وسرعة الحركة وكفاءة الابتلاع في البلاعم السنخية والعدلات المتداولة، مما يسرّع تدمير مسببات الأمراض الخلوية.' },
        { title: 'تعديل شلال السيتوكين', detail: 'يحفّز الإطلاق المستهدف لبروتينات الإشارة المناعية بما فيها الإنترفيرون وTNF-α وIL-1 وIL-10، مما يهيئ الجهاز المناعي الفطري للاستجابة السريعة للمسببات المرضية.' },
        { title: 'تثبيط إنزيم الهيالورونيداز', detail: 'يعطّل مباشرة إنزيم الهيالورونيداز البكتيري والفيروسي، مما يُبطل قدرة المُمرِض على تكسير المصفوفة بين الخلايا ويمنع انتشار العدوى إلى الأنسجة السليمة المجاورة.' },
      ],
      uses: [
        'دعم الجهاز التنفسي: الوقاية والعلاج الحاد من نزلات البرد المتكررة والأنفلونزا الموسمية والتهابات الجهاز التنفسي العلوي الحادة',
        'دعم المسالك البولية: علاج داعم مساعد لالتهابات المسالك البولية السفلية المتكررة',
        'الشفاء الموضعي: تطبيق موضعي مباشر للجروح السطحية سيئة الشفاء وحب الشباب الالتهابي الخفيف والحروق البسيطة والخدوش الجلدية والدمامل المتكررة',
      ],
      howToUse: [
        { method: 'نقيع مائي / طبيخ', instruction: 'يُغلى 1.0–2.0 غرام من العشب المجفف في الماء المغلي لمدة 15 دقيقة.' },
        { method: 'التوقيت الحاسم', instruction: 'لتحقيق أقصى فعالية سريرية، يجب بدء العلاج عند أول ظهور لأعراض البرد أو الأنفلونزا (التهاب الحلق، قشعريرة خفيفة). يكاد يكون عديم الفائدة إذا أُخذ بعد استقرار العدوى تمامًا.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال (أقل من سنتين)', notes: 'ممنوع استخدامه بشكل صارم: محظور تمامًا بسبب خطر المضاعفات الجهازية الشديدة.' },
        { group: 'الأطفال (2–12 سنة)', notes: 'غير موصى به دون إشراف طبي مباشر: خطر متزايد لإثارة مظاهر حساسية شديدة بوساطة الخلايا التائية.' },
        { group: 'الحمل والرضاعة', notes: 'تجنّبي الاستخدام تمامًا: لم تُثبت السلامة السريرية ونتائج الأم والجنين.' },
        { group: 'البالغون', notes: 'الفئة المستهدفة الأساسية. الجرعة الوقائية/الحادة للبالغين: 2.5–6.0 غرام من العشب المجفف يوميًا في جرعات مقسّمة.' },
      ],
      dosage: {
        standard: 'الجرعة الوقائية/الحادة للبالغين: 2.5–6.0 غرام من العشب المجفف يوميًا في جرعات مقسّمة. حدود المدة: الحد الأقصى للعلاج الحاد 10 أيام متتالية؛ الدورات الوقائية حد أقصى 8 أسابيع مع استراحة إلزامية 3 أسابيع.',
        forms: [
          { form: 'نقيع مائي / طبيخ', dose: '1.0–2.0 غرام من العشب المجفف في ماء مغلٍ، يُسخَّن 15 دقيقة؛ 2–3 أكواب يوميًا.' },
          { form: 'كبسولات / مستخلصات موحّدة', dose: 'ما يعادل 2.5–6.0 غرام من العشب المجفف يوميًا في جرعات مقسّمة. حد أقصى 10 أيام حادة؛ حد أقصى 8 أسابيع وقائية.' },
        ],
      },
      overdose: {
        symptoms: [
          'لم تُوثَّق حالات سمية حادة مميتة في الأدبيات الطبية البشرية.',
          'خطر نظري من الجرعات الفائقة القصوى (>1000× النطاق العلاجي): قمع مناعي متناقض عكس التأثير المعزز للمناعة وانهيار نشاط خلايا الدم البيضاء.',
        ],
        management: [
          'الإيقاف الفوري للعشب.',
          'الشروع في ترطيب مكثّف عن طريق الفم أو الوريد.',
          'الإدارة العرضية لأي مظاهر حساسية أو فرط حساسية ثانوية.',
        ],
      },
      sideEffects: [
        'متحملة جيدًا عمومًا بالجرعات والمدد الموصى بها',
        'انزعاج معدي معوي خفيف لدى بعض الأفراد',
        'نادرًا: تفاعلات تحسسية، خاصةً لدى الحساسين لنباتات الفصيلة النجمية',
      ],
      contraindications: [
        'اضطرابات المناعة الذاتية الجهازية: ممنوعة بشكل صارم في التصلب المتعدد والذئبة الحمراء وتهاب المفاصل الروماتويدي: قد تحفّز المناعة على مهاجمة أنسجة الجسم',
        'الأمراض الجهازية التدريجية: محظورة في السل والساركويد وأمراض خلايا الدم البيضاء الجهازية (ابيضاض الدم)',
        'زراعة الأعضاء: محظورة تمامًا قبل وأثناء وبعد عمليات الزراعة لأنها تتعارض مباشرة مع الأدوية المثبطة للمناعة (سيكلوسبورين، كورتيكوستيرويدات)',
      ],
      drugInteractions: [
        'سيتوكروم P450: قد يثبّط إنزيمات CYP3A4، مما يغيّر إزالة الأدوية المُستقلَبة بشكل مكثّف',
        'إيكونازول: الاستخدام المتزامن قد يقلل بشكل ملحوظ من التأثير العلاجي الموضعي لكريمات إيكونازول المهبلية',
        'مثبطات المناعة: تتعارض مباشرة مع العلاجات المثبطة للمناعة الأساسية؛ يُجنَّب في مرضى زراعة الأعضاء',
      ],
      storage: {
        forms: [
          { form: 'جميع الأشكال', instructions: 'تُخزَّن في مكان بارد ومظلم وجاف تمامًا في حاويات محكمة الإغلاق للحفاظ على الألكيلاميدات الحساسة من التحلل الحراري.' },
        ],
      },
      benefits: [
        { icon: 'shield', title: 'تحفيز المناعة', desc: 'تنشّط الضامّات وتزيد إنتاج الخلايا التائية، مما يعزز الاستجابة المناعية الفطرية.' },
        { icon: 'healing', title: 'مضاد للالتهابات', desc: 'تحتوي على حمض الشيكوريك والألكيلاميدات التي تقلل السيتوكينات الالتهابية.' },
        { icon: 'coronavirus', title: 'مضاد للفيروسات', desc: 'تُظهر الأبحاث فعاليتها ضد طيف واسع من فيروسات الجهاز التنفسي.' },
      ],
      botanicalFacts: { family: 'الفصيلة النجمية', nativeRegion: 'أمريكا الشمالية', growthHabit: 'نبات عشبي معمر', activeCompounds: 'الألكيلاميدات، مشتقات حمض الكافيك', cultivationNotes: 'تنمو في تربة جيدة التصريف مع أشعة الشمس الكاملة. تُزهر في منتصف الصيف.' },
      preparation: [
        { method: 'الصبغة', desc: 'مستخلص كحولي بجرعة 2-4 مل، 3 مرات يومياً عند ظهور الأعراض.', bestFor: 'التنشيط المناعي السريع' },
        { method: 'الشاي', desc: 'انقع ملعقة إلى ملعقتين من العشب الجاف في ماء مغلٍ لمدة 10 دقائق.', bestFor: 'الدعم الوقائي' },
      ],
      symptoms: ['سعال', 'برد', 'مناعة', 'جهاز تنفسي'],
    },
    elderberry: {
      name: 'التوت الأكبر', shortDescription: 'غني بمضادات الأكسدة والفيتامينات، هذه التوت الداكن تقليد أصيل لتهدئة أعراض البرد وتعزيز المرونة الشتوية.',
      description: 'التوت الأكبر (Sambucus nigra) له تاريخ طويل في الطب العشبي الأوروبي. التوت الداكن غني للغاية بالأنثوسيانين وفيتامين C والفلافونويدات.',
      history: 'عرفه أبقراط بـ"صندوق دواء أهل الريف"، واستُخدم طبياً لآلاف السنين. كان جزءاً محورياً من الطب الشعبي الأوروبي للبرد والأنفلونزا والحمى.',
      benefits: [
        { icon: 'coronavirus', title: 'مضاد للفيروسات', desc: 'ترتبط الفلافونويدات بالجزيئات الفيروسية وتمنعها من دخول خلايا المضيف.' },
        { icon: 'favorite', title: 'غني بمضادات الأكسدة', desc: 'من بين أعلى محتوى مضادات الأكسدة في أي توت، يحمي الخلايا من التلف.' },
        { icon: 'thermostat', title: 'دعم الحمى', desc: 'استخدام تقليدي لخفض الحمى عبر التعرق.' },
      ],
      botanicalFacts: { family: 'فصيلة المسكية', nativeRegion: 'أوروبا، شمال أفريقيا، غرب آسيا', growthHabit: 'شجيرة نفضية', activeCompounds: 'الأنثوسيانين، الكيرستين، الروتين', cultivationNotes: 'تنمو في تربة رطبة خصبة. ضوء شمس كامل إلى جزئي.' },
      preparation: [
        { method: 'الشراب', desc: 'اطبخ التوت مع الماء والعسل حتى يصبح مركّزاً. ملعقة كبيرة يومياً وقائياً.', bestFor: 'صيانة المناعة اليومية' },
        { method: 'الصبغة', desc: 'مستخلص كحولي يوفر تركيزاً من الأنثوسيانين. 2-4 مل، 3 مرات يومياً.', bestFor: 'دعم العدوى الفعّالة' },
      ],
      symptoms: ['برد', 'أنفلونزا', 'مناعة', 'سعال'],
    },
    astragalus: {
      name: 'الأستراغالوس', shortDescription: 'جذر مُكيِّف قوي مستخدم في الطب الصيني التقليدي لبناء المناعة الأساسية والحماية من الإجهاد.',
      description: 'الأستراغالوس من أهم الأعشاب في الطب الصيني التقليدي، مُستخدَم منذ أكثر من 2000 عام. بوصفه مُكيِّفاً، يساعد الجسم على الاستجابة للتوتر مع تعزيز المناعة.',
      history: 'يُعرف بـ"هوانغ تشي" في الطب الصيني التقليدي، واعتُبر عشباً رئيسياً للطب الصيني لآلاف السنين.',
      benefits: [
        { icon: 'shield', title: 'تعديل المناعة', desc: 'تزيد السكريات المتعددة إنتاج خلايا الدم البيضاء وتعزز نشاط خلايا NK.' },
        { icon: 'psychology', title: 'مُكيِّف', desc: 'يساعد في تطبيع الاستجابة الفسيولوجية للجسم للتوتر، ويقلل الكورتيزول.' },
        { icon: 'favorite', title: 'دعم القلب والأوعية', desc: 'تحسّن الأستراغالوسيدات وظيفة القلب وتحمي خلايا عضلة القلب.' },
      ],
      botanicalFacts: { family: 'الفصيلة البقولية', nativeRegion: 'الصين، منغوليا، كوريا', growthHabit: 'نبات عشبي معمر', activeCompounds: 'الأستراغالوسيدات، السكريات المتعددة، الصابونين', cultivationNotes: 'يفضّل التربة الرملية جيدة التصريف. يتحمل الجفاف بعد التأسيس.' },
      preparation: [
        { method: 'الطبيخ', desc: 'اطبخ شرائح الجذر في الماء لمدة 30-45 دقيقة. أضفه للحساء كمقوٍّ يومي.', bestFor: 'بناء المناعة طويل الأمد' },
        { method: 'الكبسولات', desc: 'كبسولات مستخلص موحّد. 500-1500 مغ يومياً.', bestFor: 'التكمّل اليومي المريح' },
      ],
      symptoms: ['مناعة', 'إرهاق', 'توتر'],
      warnings: [
        'لا تبدأ الاستخدام خلال الحمى الشديدة أو الالتهاب الحاد الوخيم: للوقاية والتعافي فقط وليس للعلاج الحاد.',
        'محظور مع زرع الأعضاء: يُعاكس الأدوية المثبِّطة للمناعة مما قد يُسبِّب رفض الزرع.',
        'الحمل: يُجتنب تماماً لعدم كفاية بيانات السلامة.',
      ],
      activeConstituents: [
        { name: 'سكريات أستراغالان المتعددة (غليكانات معقدة)', percentage: '', effect: 'النشاط المُكيِّف والمُنتِج للإنترفيرون الأساسي؛ يُحفِّز مباشرةً تكاثر خلايا المناعة' },
        { name: 'أستراغالوسيدات I-X (صابونين تيربينويدية)', percentage: '', effect: 'مصفوفة كيميائية متخصصة؛ الأستراغالوسيد IV الأكثر نشاطاً دوائياً' },
        { name: 'كيرستين وكامبيفيرول وإيزوفلافونات متخصصة', percentage: '', effect: 'مضادات أكسدة خلوية؛ استقرار وعائي؛ دعم مضاد للالتهاب' },
        { name: 'أسباراجين وβ-سيتوستيرول ونيكل وكروم', percentage: '', effect: 'عناصر نادرة كثيفة تدعم التمثيل الغذائي والمناعة' },
      ],
      moa: [
        { title: 'مُكيِّف حقيقي', detail: 'يزيد المقاومة الفسيولوجية غير النوعية للإجهاد الجسدي والذهني والبيئي.' },
        { title: 'مُنتِج للإنترفيرون', detail: 'يُحفِّز الإنتاج الخلوي الذاتي للإنترفيرون مُنشِّطاً الدفاع الأولي ضد الفيروسات.' },
        { title: 'تنشيط خلايا T', detail: 'يُقوِّي ويُسرِّع تكاثر ونضج ونشاط الخلايا اللمفاوية T وخلايا NK السامة.' },
        { title: 'تآزر مضاد للفيروسات', detail: 'يعمل مع العمليات الخلوية لإيقاف دورات تكاثر الفيروسات (فيروس كوكساكي B، فيروسات البرد الشائعة).' },
      ],
      uses: [
        'استعادة المناعة الوقائية قبل موسم الأمراض',
        'الوقاية من التهابات الجهاز التنفسي',
        'الإرهاق المزمن والتعافي ما بعد الفيروس',
        'مساعد لمرضى العلاج الكيميائي (تحسين جودة الحياة)',
      ],
      howToUse: [
        { method: 'كبسولات مستخلص موحَّد', instruction: '100-150 مغ 3 مرات يومياً. الأفضل كوقاية لا تستخدمه أثناء الحمى الشديدة أو الالتهاب الوخيم.' },
        { method: 'طبيخ الجذر الخام', instruction: 'اغلِ 9-30 غرام من شرائح الجذر المجففة يومياً لمدة 30-45 دقيقة. يمكن إضافته للحساء.' },
        { method: 'مستخلص سائل', instruction: '4.5-8.5 مل يومياً مقسَّمة على جرعتين.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن للاستخدام الوقائي طويل الأمد ضمن الجرعات الموصى بها.' },
        { group: 'الحوامل', notes: 'يُجتنب تماماً لعدم كفاية بيانات السلامة.' },
        { group: 'مرضى الأمراض المناعية الذاتية', notes: 'محظور في الذئبة الحمراء الجهازية النشطة والتهاب المفاصل الروماتويدي يُحفِّز الجهاز المناعي.' },
        { group: 'مرضى زرع الأعضاء', notes: 'محظور تماماً: يُعاكس مثبِّطات المناعة.' },
      ],
      dosage: {
        standard: 'مستخلص موحَّد: 100-150 مغ 3 مرات يومياً. طبيخ الجذر الخام: 9-30 غرام يومياً. الأفضل للوقاية الاستباقية لا يُستخدم خلال الحمى الشديدة.',
        forms: [
          { form: 'كبسولات مستخلص موحَّد', dose: '100-150 مغ 3 مرات يومياً.' },
          { form: 'طبيخ الجذر', dose: '9-30 غرام يومياً مغلية 30-45 دقيقة.' },
          { form: 'مستخلص سائل', dose: '4.5-8.5 مل يومياً في جرعتين مقسَّمتين.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة: عدم راحة هضمي خفيف عند الجرعات العالية.',
          'جرعات مفرطة جداً: اضطرابات محتملة في ضغط الدم وإيقاع القلب.',
        ],
        management: [
          'تقليل الجرعة، مراقبة ضغط الدم وإيقاع القلب عند الاشتباه.',
        ],
      },
      sideEffects: [
        'متحمَّل جداً بشكل عام',
        'عدم راحة هضمي خفيف نادر عند الجرعات العالية',
      ],
      contraindications: [
        'الأمراض المناعية الذاتية النشطة (الذئبة، التهاب المفاصل الروماتويدي)',
        'زرع الأعضاء: يُعاكس مثبِّطات المناعة',
        'الحمل',
      ],
      drugInteractions: [
        'مثبِّطات المناعة (سيكلوسبورين، تاكروليموس): يُعاكس تأثيرها مباشرةً',
        'أدوية ضغط الدم: تأثير تفاعلي محتمل',
      ],
      storage: {
        forms: [
          { form: 'جميع الأشكال', instructions: 'يُخزَّن في مكان بارد جاف بعيداً عن الرطوبة والضوء المباشر.' },
        ],
      },
    },
    reishi: {
      name: 'ريشي', shortDescription: 'يُعرف بـ"فطر الخلود"، يعدّل ريشي وظيفة المناعة ويعزز الاسترخاء العميق وتوازن الجهاز العصبي.',
      description: 'فطر الريشي يُجلَّل في الثقافات الشرق آسيوية منذ أكثر من 2000 عام رمزاً للعمر المديد والقوة الروحية.',
      history: 'يُسمى "لينغ تشي" بالصينية أي "عشب القوة الروحية"، وكان محجوزاً للأباطرة والنبلاء تاريخياً.',
      benefits: [
        { icon: 'shield', title: 'تعديل المناعة', desc: 'تحفّز البيتا-غلوكان الاستجابة المناعية وتنظّمها دون إفراط في التحفيز.' },
        { icon: 'psychology', title: 'مُكيِّف عصبي', desc: 'تعزز التربينات اليقظة الهادئة وتحسّن جودة النوم.' },
        { icon: 'favorite', title: 'حامٍ للكبد', desc: 'يحمي خلايا الكبد من التلف ويدعم نشاط إنزيمات إزالة السموم.' },
      ],
      botanicalFacts: { family: 'فصيلة الغانوديرمية', nativeRegion: 'شرق آسيا، موزّع عالمياً', growthHabit: 'فطر خشبي', activeCompounds: 'البيتا-غلوكان، التربينات، أحماض الغانوديريك', cultivationNotes: 'ينمو على أجذاع الأشجار الصلبة. يفضّل البيئات الدافئة والرطبة.' },
      preparation: [
        { method: 'المستخلص المزدوج', desc: 'استخلاص بالماء الساخن + الكحول. 1-2 مل يومياً.', bestFor: 'الفائدة الشاملة' },
        { method: 'الشاي', desc: 'اطبخ الفطر المقطّع لمدة ساعتين. يمكن إخفاء طعمه المر.', bestFor: 'التحضير التقليدي' },
      ],
      symptoms: ['مناعة', 'توتر', 'نوم', 'إرهاق'],
    },
    oregano: {
      name: 'الأوريغانو', shortDescription: 'قوي وعطري، يُعدّ زيت الأوريغانو بالغ الأهمية لخصائصه القوية المضادة للميكروبات والفيروسات.',
      description: 'رغم كونه عشباً طبخياً مألوفاً، يمتلك الأوريغانو خصائص طبية استثنائية. يُظهر زيته الأساسي نشاطاً قوياً مضاداً للميكروبات والفطريات والفيروسات.',
      history: 'أجلّه الإغريق القدماء رمزاً للسعادة واستخدموه طبياً. اسمه مشتق من "أوروس" (جبل) و"غانوس" (فرح).',
      benefits: [
        { icon: 'coronavirus', title: 'مضاد للميكروبات', desc: 'يُعطّل الكارفاكرول غشاء خلية البكتيريا، مع فعالية ضد السلالات المقاومة للأدوية.' },
        { icon: 'healing', title: 'مضاد للفطريات', desc: 'فعالية موثّقة ضد أنواع المبيضات والعدوى الفطرية الأخرى.' },
        { icon: 'shield', title: 'مضاد للأكسدة', desc: 'من أعلى درجات ORAC بين الأعشاب، بنشاط مضاد للأكسدة يفوق التوت الأزرق 4 مرات.' },
      ],
      botanicalFacts: { family: 'فصيلة الشفوية', nativeRegion: 'البحر المتوسط، غرب آسيا', growthHabit: 'نبات عشبي معمر', activeCompounds: 'الكارفاكرول، الثيمول، حمض الروزمارينيك', cultivationNotes: 'يزدهر في تربة فقيرة جيدة التصريف مع أشعة شمس كاملة.' },
      preparation: [
        { method: 'زيت الأوريغانو', desc: 'زيت أساسي مخفَّف (1-2 قطرات في زيت ناقل). خلال العدوى الحادة فقط.', bestFor: 'عدوى ميكروبية فعّالة' },
        { method: 'الشاي', desc: 'انقع ملعقة صغيرة أوريغانو مجفف في ماء ساخن 5-7 دقائق.', bestFor: 'دعم الجهاز التنفسي والمناعة' },
      ],
      symptoms: ['مناعة', 'سعال', 'جهاز تنفسي'],
    },
    'ginger-menstrual': {
      name: 'الزنجبيل',
      shortDescription: 'مسكِّن بيوكيميائي تعمل الجنجيرولات والشوجاولات فيه كمثبِّطات مزدوجة لـ COX/LOX — مثبَت سريرياً بفاعلية مماثلة للإيبوبروفين (400 مغ) وحمض الميفيناميك (بونستان 250 مغ) في تخفيف عسر الطمث الأولي، فيما يوفر تثبيط مستقبلات 5-HT3 المحيطية تأثيراً مضاداً للقيء قوياً.',
      description: 'تنبثق الفاعلية العلاجية لجذمور الزنجبيل من مستقلباته الثانوية الفعّالة. الجنجيرولات وفيرة في الزنجبيل الطازج ومسؤولة أساساً عن التأثيرات المضادة للقيء، مع امتلاكها نشاطاً تحليلياً ومضاداً للالتهاب. الشوجاولات تتشكل بالتجفيف أو التسخين وتفوق الجنجيرولات بثلاثة أضعاف في تثبيط المؤشرات الالتهابية، فيما تعمل بشكل تآزري لتعزيز الفاعلية المضادة للقيء. الزيوت الطيارة كالزنجيبيرين مسؤولة عن الرائحة العطرية المميزة.',
      activeConstituents: [
        { name: 'الجنجيرولات', percentage: '', effect: 'وفيرة في الزنجبيل الطازج؛ مسؤولة أساساً عن التأثيرات المضادة للقيء، مع امتلاكها نشاطاً تحليلياً ومضاداً للالتهاب.' },
        { name: 'الشوجاولات', percentage: '', effect: 'تتشكل بالتجفيف أو التسخين؛ تفوق الجنجيرولات بثلاثة أضعاف في تثبيط المؤشرات الالتهابية، فيما تعمل بشكل تآزري لتعزيز الفاعلية المضادة للقيء.' },
        { name: 'الزيوت الطيارة (مثل الزنجيبيرين)', percentage: '', effect: 'مسؤولة عن الرائحة العطرية المميزة.' },
      ],
      moa: [
        { title: 'لتسكين الألم (مسكِّن)', detail: 'يعمل كمثبِّط مزدوج لإنزيمات الأكسدة الحلقية (COX-1 وCOX-2) وليبوكسيجيناز (5-LOX). يُقلِّل هذا إنتاج البروستاغلاندينات والليكوترينات، الوسطاء الكيميائيين الأساسيين للألم وتقلصات الرحم الحادة.' },
        { title: 'للغثيان (مضاد للقيء)', detail: 'يعمل أساساً عبر آليات محيطية موضعية داخل الجهاز الهضمي. تُظهر المكوّنات الدهنية الفعّالة (وتحديداً 6-جنجيرول و6-شوجاول) تثبيطاً تنافسياً على مستقبلات السيروتونين المحيطية (5-HT3) والمستقبلات الموسكارينية. يُثبِّط هذا تحفيز المبهم الوارد، ويُعدِّل اضطراب نظم المعدة، ويُسرِّع إفراغ المعدة، مما يُبطِّل إشارات القيء المحيطية دون الإنهاك العصبي المركزي.' },
      ],
      uses: [
        'عسر الطمث الأولي: تخفيف ألم الدورة الشهرية والتشنجات. تؤكد الدراسات السريرية أن فاعليته في تسكين الألم مماثلة للإيبوبروفين (400 مغ) وحمض الميفيناميك (بونستان 250 مغ).',
        'الغثيان والقيء: غثيان الحمل (غثيان الصباح)، وداء الحركة، والغثيان الجراحي.',
        'مضاد للالتهاب: آلام المفاصل (التهاب المفاصل) وآلام العضلات للرياضيين.',
      ],
      howToUse: [
        { method: 'النقيع المائي', instruction: 'انقع الزنجبيل في ماء ساخن (مغطى) لمدة 10 دقائق. يُنصح بشدة بتناول الرواسب المتبقية؛ فهي مصدر غني بالشوجاولات والزيوت الأساسية المحبوسة في ألياف النبات. تناوله مع الطعام لتقليل تهيج الغشاء المخاطي للمعدة.' },
      ],
      suitableAgeGroups: [
        { group: 'الإناث (المراهقات والبالغات)', notes: 'لإدارة عسر الطمث.' },
        { group: 'المسافرون والرياضيون وكبار السن', notes: 'لداء الحركة وآلام المفاصل والعضلات الالتهابية.' },
        { group: 'الأطفال', notes: 'لا يُنصح به للأطفال دون سن 6 سنوات.' },
        { group: 'الحمل', notes: 'علاج غير دوائي من الخط الأول لغثيان الحمل والقيء (NVP)، بشرط ألا تتجاوز الجرعة اليومية 1.0 غرام من معادل المسحوق الجاف. تنطبق سمعة الإجهاض فقط على الزيوت الأساسية النقية المركّزة أو الجرعات الكبيرة السامة (أكثر من 5.0 غرام/اليوم).' },
        { group: 'الرضاعة', notes: 'لم تُحدَّد سلامة الاستخدام خلال الرضاعة. في غياب بيانات كافية، لا يُنصح بالاستخدام خلال الرضاعة.' },
      ],
      dosage: {
        standard: 'الجدول الزمني: ابدأ الاستهلاك قبل يومين من موعد الدورة المتوقع واستمر خلال أول 3 أيام من الحيض. ملاحظة: 1 غرام من مسحوق الزنجبيل يعادل بيولوجياً تقريباً 4 غرامات من الزنجبيل الطازج.',
        forms: [
          { form: 'مسحوق الزنجبيل (مستخلص جاف)', dose: '250 مغ إلى 500 مغ لكل جرعة مفردة (ما يعادل 1/4 ملعقة صغيرة مسطحة)، تُؤخذ 3 إلى 4 مرات يومياً. لا تتجاوز حداً يومياً قدره 4 غرامات في اليوم.' },
          { form: 'الزنجبيل الطازج (الجذمور)', dose: '2 إلى 3 غرامات لكل جرعة مفردة (ما يعادل ملعقة صغيرة ممتلئة من الزنجبيل المبشور الناعم)، تُؤخذ 3 إلى 4 مرات يومياً. لا تتجاوز حداً يومياً قدره 15 إلى 20 غراماً في اليوم.' },
        ],
      },
      overdose: {
        intro: 'حدود الجرعة الزائدة الحادة: مسحوق الزنجبيل: استهلاك أكثر من 5 غرامات يومياً. الزنجبيل الطازج: استهلاك أكثر من 20-25 غراماً يومياً.',
        symptoms: [
          'تهيج حاد في الجهاز الهضمي أو "حرقة المعدة".',
          'زيادة خطر النزيف (بسبب التثبيط القوي للثرومبوكسان).',
          'انخفاض ضغط الدم واكتئاب الجهاز العصبي المركزي (في الحالات القصوى).',
          'تهيج حاد للغشاء المخاطي الفموي.',
        ],
        management: [
          'التوقف الفوري عن تناول الزنجبيل.',
          'إعطاء مضادات الحموضة الفموية أو الحليب البارد لتهدئة بطانة المريء والمعدة.',
          'مراقبة أي علامات لإطالة وقت النزيف.',
        ],
      },
      sideEffects: [
        'حرقة المعدة والتجشؤ ذو الطعم الحار.',
      ],
      contraindications: [
        'المرضى المصابون بحصوات المرارة.',
        'المرضى على علاج بمضادات التخثر بجرعات عالية (مميعات الدم).',
        'حالات ما قبل الجراحة الكبرى (يجب إيقافه قبل 14 يوماً من الجراحة الكبرى).',
        'الاستخدام بحذر عند المعاناة من قرحة المعدة.',
      ],
      drugInteractions: [
        'مضادات التخثر / مميعات الدم (مثل الوارفارين): قد يزيد الزنجبيل من وقت البروثرومبين البلازمي الجزئي وقد يزيد وقت البروثرومبين لدى العملاء الذين يتناولون الوارفارين بشكل متزامن.',
      ],
      storage: {
        forms: [
          { form: 'التخزين العام', instructions: 'يُخزَّن في حاويات زجاجية محكمة الإغلاق معتمة بعيداً عن الرطوبة والضوء المباشر للحفاظ على استقرار المركبات الفعّالة.' },
        ],
      },
      factsAndMyths: [
        {
          myth: '"الزنجبيل يقتل فيروس الأنفلونزا تماماً ويعمل كعلاج بيولوجي فوري للرشح الشائع."',
          fact: 'الزنجبيل لا يُبيد أو يعالج مسببات الأمراض الفيروسية التنفسية في الجسم الحي؛ بل يعمل كعلاج نباتي داعم استثنائي مبني على الأدلة يُخفف بشكل ملحوظ من شدة الأعراض ويُثبط الشلالات الالتهابية ويُحسن راحة المريض التنفسية. بالإضافة: الزنجبيل ليس مجرد "مشروب دافئ"؛ فهو مسكِّن بيوكيميائي ينافس الإيبوبروفين في الفاعلية عند اتباع الجرعة الصحيحة. ملاحظة: تحلية الزنجبيل بالسكر هو "تضاد وظيفي" يُحسِّس مستقبلات الألم لديك ويُلغي الفوائد العلاجية للنبات.',
        },
      ],
      benefits: [
        { icon: 'spa', title: 'تخفيف عسر الطمث', desc: 'التثبيط المزدوج لـ COX/LOX يُقلِّل البروستاغلاندينات والليكوترينات: فاعلية مثبَتة سريرياً مماثلة للإيبوبروفين (400 مغ) وحمض الميفيناميك (بونستان 250 مغ) لآلام الدورة.' },
        { icon: 'favorite', title: 'التأثير المضاد للقيء', desc: 'تثبيط مستقبلات 5-HT3 الموسكارينية المحيطية يُثبِّط تحفيز المبهم الوارد ويُسرِّع إفراغ المعدة دون إنهاك الجهاز العصبي المركزي.' },
        { icon: 'fitness_center', title: 'مضاد للالتهاب', desc: 'فعّال لآلام المفاصل (التهاب المفاصل) وآلام العضلات للرياضيين وكبار السن من خلال التثبيط المزدوج للإنزيمات.' },
      ],
      botanicalFacts: {
        family: 'الفصيلة الزنجبيلية',
        nativeRegion: 'جنوب شرق آسيا؛ يُزرع في المناطق الاستوائية حول العالم',
        growthHabit: 'نبات عشبي معمر يتكاثر من الجذامير العطرة؛ الجذمور هو الجزء الطبي',
        activeCompounds: 'الجنجيرولات (طازج)، الشوجاولات (مجفف/مسخّن، قوة 3×)، الزنجيبيرين (زيت طيار)',
      },
      preparation: [
        { method: 'النقيع المائي (مغطى)', desc: 'انقع الزنجبيل الطازج أو المجفف في ماء ساخن في إناء مغطى لمدة 10 دقائق. تناول الرواسب للحصول على أقصى محتوى من الشوجاولات.', bestFor: 'عسر الطمث، الغثيان، داء الحركة' },
        { method: 'الكبسولات المسحوقة', desc: '250-500 مغ لكل جرعة، 3-4 مرات يومياً؛ يبدأ قبل يومين من بداية الدورة.', bestFor: 'إدارة عسر الطمث بجرعة موحَّدة' },
      ],
      symptoms: ['تشنجات الدورة الشهرية', 'عسر الطمث الأولي', 'الغثيان', 'القيء', 'آلام المفاصل', 'آلام العضلات', 'داء الحركة'],
      warnings: [
        'المرضى المصابون بحصوات المرارة: ممنوع.',
        'علاج بمضادات التخثر بجرعات عالية: ممنوع بسبب تثبيط الثرومبوكسان.',
        'إيقاف الاستخدام قبل 14 يوماً من الجراحة الكبرى.',
        'الاستخدام بحذر مع قرحة المعدة.',
        'لا تتجاوز 4 غرام/يوم من المسحوق أو 15-20 غرام/يوم من الزنجبيل الطازج.',
        'خلال الحمل: لا تتجاوز 1.0 غرام يومياً من معادل المسحوق الجاف.',
      ],
    },
    peppermint: {
      name: 'النعناع', shortDescription: 'عشب هضمي محبوب يرخّي العضلات الملساء ويخفف أعراض القولون العصبي ويوفر راحة منعشة.',
      description: 'النعناع من أكثر الأعشاب الطبية بحثاً علمياً، خاصةً للحالات الهضمية. مادته الفعّالة الأساسية المنثول يعمل كمانع لقنوات الكالسيوم على العضلات الملساء المعوية.',
      history: 'هجين طبيعي من النعناع المائي والنعناع الأخضر، وُصف لأول مرة في إنجلترا عام 1696.',
      benefits: [
        { icon: 'nutrition', title: 'تخفيف القولون العصبي', desc: 'أثبتت كبسولات مغلفة في تجارب سريرية متعددة تخفيفاً ملحوظاً لأعراض القولون العصبي.' },
        { icon: 'psychology', title: 'وضوح ذهني', desc: 'استنشاق المنثول يحسّن اليقظة والذاكرة وسرعة المعالجة.' },
        { icon: 'healing', title: 'مضاد للتشنج', desc: 'يرخّي العضلات الملساء في الجهاز الهضمي، مما يقلل التشنج والانتفاخ.' },
      ],
      botanicalFacts: { family: 'فصيلة الشفوية', nativeRegion: 'أوروبا والشرق الأوسط (هجين)', growthHabit: 'نبات معمر ريزومي', activeCompounds: 'المنثول، المنثون، حمض الروزمارينيك', cultivationNotes: 'ينمو بقوة في تربة رطبة غنية. ينتشر بقوة عبر الجذامير.' },
      preparation: [
        { method: 'الشاي', desc: 'انقع ملعقة إلى ملعقتين من الأوراق لمدة 5-7 دقائق. اشرب بعد الوجبات.', bestFor: 'راحة هضمية بعد الأكل' },
        { method: 'الكبسولات المعوية', desc: 'كبسولات مغلفة تتجاوز المعدة للعمل مباشرةً في الأمعاء. 0.2-0.4 مل، 3 مرات يومياً.', bestFor: 'إدارة أعراض القولون العصبي' },
      ],
      symptoms: ['قولون عصبي', 'إمساك', 'غثيان', 'صداع'],
    },
    chamomile: {
      name: 'البابونج', shortDescription: 'حليف عصبي وهضمي لطيف، يهدّئ ارتباط الأمعاء بالجهاز العصبي بخصائص مضادة للالتهابات ومهدّئة.',
      description: 'مظهر البابونج الرقيق يخفي ملفاً طبياً متطوراً. يحتوي بابونج ألماني على الكامازولين ومركب الأبيجنين الذي يرتبط بمستقبلات GABA في الدماغ.',
      history: 'واحد من أقدم الأعشاب الطبية في التاريخ المسجّل، يظهر في الدساتير الطبية المصرية القديمة واليونانية والرومانية.',
      benefits: [
        { icon: 'psychology', title: 'مضاد للقلق', desc: 'يرتبط الأبيجنين بمستقبلات GABA، محدثاً تأثيرات مهدئة خفيفة دون إدمان.' },
        { icon: 'nutrition', title: 'منشّط هضمي', desc: 'تحفّز المواد المرة إفرازات الجهاز الهضمي بينما تخفف مضادات التشنج التقلصات.' },
        { icon: 'healing', title: 'مضاد للالتهابات', desc: 'يوفر الكامازولين والبيسابولول تأثيراً قوياً مضاداً للالتهابات.' },
      ],
      botanicalFacts: { family: 'الفصيلة النجمية', nativeRegion: 'غرب أوروبا، غرب آسيا', growthHabit: 'عشب حولي', activeCompounds: 'الكامازولين، الأبيجنين، البيسابولول', cultivationNotes: 'نبات ذاتي البذور يزدهر في تربة جافة فقيرة مع أشعة شمس كاملة.' },
      preparation: [
        { method: 'الشاي', desc: 'انقع 2-3 ملاعق من الأزهار في ماء قارب الغليان لمدة 5 دقائق مغطى. اشرب قبل النوم.', bestFor: 'دعم النوم والهدوء الهضمي' },
        { method: 'الصبغة', desc: '2-4 مل في الماء، 3 مرات يومياً للقلق أو الحالات الهضمية.', bestFor: 'القلق والقولون العصبي' },
      ],
      symptoms: ['قولون عصبي', 'توتر', 'نوم', 'قلق', 'إمساك'],
    },
    fennel: {
      name: 'الشمر', shortDescription: 'كارميناتيف هضمي كلاسيكي يخفف الغازات والانتفاخ والتشنجات المعوية.',
      description: 'الشمر واحد من أكثر الأعشاب الهضمية استخداماً. مركبه الأساسي الأنيثول يوفر تأثيراً كارميناتيفاً مباشراً بإرخاء العضلات الملساء في الأمعاء.',
      history: 'زُرع الشمر واستُخدم طبياً وطهوياً منذ 4000 عام على الأقل. استخدمه المصريون والصينيون القدماء للشكاوى الهضمية.',
      benefits: [
        { icon: 'nutrition', title: 'كارميناتيف', desc: 'الأنيثول يرخّي العضلات الملساء المعوية مباشرةً، مُحرِّراً الغازات ومُخفِّفاً الانتفاخ.' },
        { icon: 'restaurant', title: 'منبّه هضمي', desc: 'يحفّز إنتاج الصفراء وإفراز إنزيمات الهضم.' },
        { icon: 'favorite', title: 'مضاد للتشنج', desc: 'فعّال لمغص الرضّع وتشنجات الحيض وتشنجات القولون العصبي.' },
      ],
      botanicalFacts: { family: 'فصيلة الخيمية', nativeRegion: 'البحر المتوسط', growthHabit: 'عشب معمر صلب', activeCompounds: 'الأنيثول، الفنشون، الإستراغول', cultivationNotes: 'أشعة شمس كاملة، تربة جيدة التصريف. ابعده عن الشبت لمنع التلقيح المتقاطع.' },
      preparation: [
        { method: 'شاي البذور', desc: 'احطم ملعقة من البذور وانقعها في ماء مغلٍ لمدة 10 دقائق. اشرب بعد الوجبات.', bestFor: 'الغازات والانتفاخ بعد الأكل' },
        { method: 'العصير الطازج', desc: 'اعصر بصلة شمر طازجة مع التفاح والزنجبيل لتحضير جرعة منشّطة للهضم.', bestFor: 'تنشيط الهضم' },
      ],
      symptoms: ['قولون عصبي', 'إمساك', 'غازات', 'انتفاخ'],
      warnings: [
        'السرطانات الهرمونية (سرطان الثدي / الرحم): تجنّبي الجرعات العلاجية لاحتمال التأثير الإستروجيني.',
        'الحمل: الكميات الغذائية الطهوية آمنة؛ الجرعات العلاجية تُجتنب.',
        'البذور فقط للتأثير العلاجي لا تستخدمي الزيت المركَّز للرضَّع.',
      ],
      activeConstituents: [
        { name: 'ترانس-أنيثول (الأساسي، 50-80% من الزيت الأساسي)', percentage: '50-80%', effect: 'نشاط فيتوإستروجيني؛ مُرخٍّ للعضلات الملساء؛ مُدرّ للحليب؛ طارد للغازات' },
        { name: 'فنشون (كيتون منوتيربيني)', percentage: '', effect: 'مُرخٍّ ثانوي للعضلات الملساء وطارد للغازات؛ مضاد للميكروبات' },
        { name: 'إستراغول (ميثيل شافيكول)', percentage: '', effect: 'مُساهِم ثانوي في التأثير الإستروجيني' },
        { name: 'حمض الروزمارينيك', percentage: '', effect: 'مضاد للالتهاب؛ مضاد للأكسدة' },
      ],
      moa: [
        { title: 'مُرخٍّ للعضلات الملساء', detail: 'ترانس-أنيثول يُرخِّي العضلات الملساء في الجهاز الهضمي والرحم عبر تثبيط قنوات الكالسيوم مما يُخفِّف التشنجات.' },
        { title: 'طارد للغازات', detail: 'الزيوت الأساسية تُحفِّز حركة الجهاز الهضمي وتُرخِّي العضلة العاصرة المريئية السفلى مما يُسرِّع طرح الغازات.' },
        { title: 'مُدرّ للحليب', detail: 'ترانس-أنيثول الفيتوإستروجيني يُقلِّد الإستروجين مما يُحفِّز البرولاكتين وزيادة إنتاج الحليب.' },
      ],
      uses: [
        'مغص الرضَّع (شاي خفيف فقط)',
        'القولون العصبي والانتفاخ لدى البالغين',
        'آلام الدورة الشهرية',
        'دعم الرضاعة الطبيعية',
        'الغازات وعسر الهضم الوظيفي',
      ],
      howToUse: [
        { method: 'شاي البذور للبالغين', instruction: 'اسحقي ملعقة صغيرة من البذور في إناء مغطى، أضيفي ماء مغلياً واتركيه 10 دقائق مغطى. اشربي بعد الوجبات.' },
        { method: 'للرضَّع (مغص)', instruction: 'أعدي شاياً خفيفاً جداً (ربع ملعقة صغيرة بذور لكوب ماء)، بردِّيه تماماً. أعطي 1-2 ملعقة صغيرة مع كل رضعة، 3 مرات يومياً كحد أقصى.' },
        { method: 'مضغ البذور', instruction: 'امضغي بذوراً كاملة بعد الوجبات لتأثير هضمي فوري.' },
      ],
      suitableAgeGroups: [
        { group: 'الرضَّع (>1 شهر)', notes: 'شاي خفيف جداً فقط؛ الزيت المركَّز محظور تماماً.' },
        { group: 'البالغون', notes: 'آمن للاستخدام اليومي المعتدل.' },
        { group: 'الحوامل', notes: 'الكميات الغذائية آمنة؛ الجرعات العلاجية تُجتنب.' },
        { group: 'مرضى السرطانات الهرمونية', notes: 'تجنّبي الجرعات العلاجية لاحتمال التأثير الإستروجيني.' },
      ],
      dosage: {
        standard: 'البالغون: 1-2 كوب شاي يومياً بعد الوجبات. الرضَّع (مغص): 1-2 ملعقة صغيرة شاي خفيف جداً 3 مرات يومياً كحد أقصى.',
        forms: [
          { form: 'شاي بذور مسحوقة', dose: 'ملعقة صغيرة في إناء مغطى، كوبان يومياً للبالغين.' },
          { form: 'شاي خفيف للرضَّع', dose: 'ربع ملعقة صغيرة/كوب ماء، 1-2 ملعقة صغيرة/رضعة، 3 مرات يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة: تفاعلات تحسسية نادرة (خاصةً لمن لديهم حساسية لعائلة الخيمية).',
          'الاستخدام المفرط على المدى البعيد: تأثيرات إستروجينية في الحالات الهرمونية الحساسة.',
        ],
        management: [
          'تقليل الجرعة أو وقف الاستخدام، وعلاج أعراض التحسس إن وُجدت.',
        ],
      },
      sideEffects: [
        'تفاعلات تحسسية نادرة عند الأفراد الحساسين لعائلة الخيمية',
        'تأثيرات إستروجينية محتملة مع الاستخدام المفرط على المدى البعيد',
      ],
      contraindications: [
        'السرطانات الهرمونية الحساسة للإستروجين: تجنّبي الجرعات العلاجية',
        'الحمل: الجرعات العلاجية تُجتنب',
      ],
      drugInteractions: [
        'أدوية سيترالوبرام ومثبطات إعادة امتصاص السيروتونين: تفاعل محتمل نظرياً عند جرعات عالية',
      ],
      storage: {
        forms: [
          { form: 'البذور', instructions: 'يُخزَّن في حاوية محكمة بعيداً عن الضوء للحفاظ على الزيوت المتطايرة.' },
        ],
      },
    },
    dandelion: {
      name: 'الهندباء', shortDescription: 'منشّط مرّ قوي يحفّز وظيفة الكبد ويدعم إنتاج الصفراء ويُطهّر الجهاز الهضمي بلطف.',
      description: 'الهندباء من أكمل النباتات الدوائية المتاحة، إذ تقدم كل أجزائها (الجذر والورق والزهرة) تأثيرات طبية مميزة.',
      history: 'استُخدمت طبياً لأكثر من 1000 عام في التقاليد الأوروبية والصينية والأمريكية الأصلية.',
      benefits: [
        { icon: 'nutrition', title: 'منشّط الكبد', desc: 'المركبات المرة تحفّز إنتاج الصفراء، مما يدعم هضم الدهون وتطهير الكبد.' },
        { icon: 'water_drop', title: 'مُدرّ طبيعي للبول', desc: 'مستخلص الورق يزيد إدرار البول مع توفير البوتاسيوم لتعويض الإلكتروليت.' },
        { icon: 'eco', title: 'كثيف المغذيات', desc: 'غني بالفيتامينات A وC وK والحديد والكالسيوم.' },
      ],
      botanicalFacts: { family: 'الفصيلة النجمية', nativeRegion: 'أوروبا، آسيا (متطبّع عالمياً)', growthHabit: 'نبات عشبي معمر', activeCompounds: 'تاراكسين، تاراكسيرين، إينولين', cultivationNotes: 'ينمو في أي تربة تقريباً. تُحصد الجذور في الخريف للدواء.' },
      preparation: [
        { method: 'طبيخ الجذر', desc: 'اطبخ ملعقة من الجذر المقطّع في كوبين ماء لمدة 20 دقيقة. اشرب 2-3 أكواب يومياً.', bestFor: 'دعم الكبد والهضم' },
        { method: 'شاي الورق', desc: 'انقع الأوراق الطازجة أو المجففة لمدة 10 دقائق. مرّ قليلاً ومنظّف.', bestFor: 'تطهير يومي لطيف' },
      ],
      symptoms: ['إمساك', 'قولون عصبي', 'إرهاق', 'انتفاخ'],
    },
    thyme: {
      name: 'الزعتر', shortDescription: 'عشب تنفسي قوي يطرد المخاط ويهدّئ السعال ويوفر دعماً مضاداً للميكروبات.',
      description: 'الزعتر واحد من أكثر الأعشاب التنفسية تحققاً سريرياً. مركباته الفعّالة الأساسية توفر تأثيرات طاردة للبلغم ومضادة للتشنج ومضادة للميكروبات.',
      history: 'يعود استخدام الزعتر الطبي إلى مصر القديمة حيث استُخدم في التحنيط. كان الإغريق القدماء يحرقونه بخوراً في المعابد.',
      benefits: [
        { icon: 'air', title: 'طارد للبلغم', desc: 'تحفّز الزيوت المتطايرة إفرازات القصبات وحركة الأهداب، مما يُفكّك البلغم ويُخرجه.' },
        { icon: 'coronavirus', title: 'مضاد للميكروبات', desc: 'الثيمول مطهّر قوي يستخدم في غسولات الفم السريرية.' },
        { icon: 'healing', title: 'مضاد للتشنج', desc: 'يرخّي العضلات الملساء القصبية، مما يوفر راحة من السعال المتشنج.' },
      ],
      botanicalFacts: { family: 'فصيلة الشفوية', nativeRegion: 'جنوب أوروبا، البحر المتوسط', growthHabit: 'شجيرة خشبية معمرة', activeCompounds: 'الثيمول، الكارفاكرول، حمض الروزمارينيك', cultivationNotes: 'ينمو في تربة فقيرة جافة جيدة التصريف مع أشعة شمس كاملة.' },
      preparation: [
        { method: 'الشاي', desc: 'انقع ملعقتين من الزعتر في ماء مغلٍ لمدة 10 دقائق مغطى. اشرب 3 مرات يومياً.', bestFor: 'السعال واحتقان الجهاز التنفسي' },
        { method: 'الاستنشاق بالبخار', desc: 'أضف الزعتر والأوكالبتوس إلى وعاء ماء ساخن. استنشق البخار مع منشفة فوق الرأس.', bestFor: 'احتقان الجيوب والقصبات' },
      ],
      symptoms: ['سعال', 'جهاز تنفسي', 'برد', 'التهاب الشعب'],
    },
    mullein: {
      name: 'العصفار', shortDescription: 'منشّط رئوي لطيف وفعّال، يهدّئ مجاري الهواء المتهيجة ويعزز طرد المخاط.',
      description: 'العصفار من أكثر الأعشاب التنفسية احتراماً في الطب العشبي الغربي. تحتوي أوراقه الكبيرة المزغبة على سكريات مخاطية تُطلّي مجاري الجهاز التنفسي وتهدّئها.',
      history: 'يُعرف بـ"العصفار العظيم" لنعومة أوراقه، استُخدم من قِبل أمريكيي الأصل والأوروبيين على حد سواء لأمراض الرئة.',
      benefits: [
        { icon: 'air', title: 'مُلطِّف', desc: 'يُغلّف المخاط مجاري القصبات المتهيجة ويهدّئها، مما يقلل تهيج السعال.' },
        { icon: 'healing', title: 'طارد للبلغم', desc: 'تُرقّق الصابونين إفرازات القصبات، مما يسهّل طرحها ويخفف الاحتقان.' },
        { icon: 'shield', title: 'مضاد للالتهابات', desc: 'يقلل الالتهاب في الجهاز التنفسي، مفيد للحالات المزمنة كالربو.' },
      ],
      botanicalFacts: { family: 'فصيلة العيون الفتوح', nativeRegion: 'أوروبا، آسيا (متطبّع عالمياً)', growthHabit: 'عشب حولي', activeCompounds: 'المخاط، الصابونين، الفيرباسكوصابونين', cultivationNotes: 'ينمو في التربة المضطربة وجوانب الطرق مع أشعة شمس كاملة.' },
      preparation: [
        { method: 'شاي الأوراق', desc: 'انقع ملعقتين من الأوراق المجففة في ماء مغلٍ لمدة 15 دقيقة. صفِّه جيداً.', bestFor: 'السعال الجاف المتهيج' },
        { method: 'صبغة الجذر', desc: 'صبغة الجذر 2-4 مل لدعم أعمق للجهاز التنفسي.', bestFor: 'الحالات التنفسية المزمنة' },
      ],
      symptoms: ['سعال', 'جهاز تنفسي', 'ربو', 'التهاب الشعب'],
    },
    eucalyptus: {
      name: 'اليوكاليبتوس / كافور الورق',
      shortDescription: 'أوراق يوكاليبتوس غنية بـ 1،8-سينيول (إيكاليبتول) بتأثير ثلاثي: حالّ للمخاط ومزيل للاحتقان ومضاد للميكروبات؛ يُرقّق المخاط، يُسرّع التخليص الهدبي، ويُخفّف احتقان الأنف وأعراض الزكام.',
      activeConstituents: [
        { name: '1،8-سينيول (الإيكاليبتول)', detail: 'الكحول الأحادي التربيني الأساسي الرئيسي (70-85% من الزيت). المركّب الرئيسي المسؤول عن النشاط الحال للمخاط والمُفرِّز والمضاد للالتهاب في المسالك التنفسية.' },
        { name: 'ألفا-بينين وليمونين', detail: 'هيدروكربونات أحادية التربين الثانوية تعمل بشكل تآزري لتوفير حماية ثانوية مطهِّرة ومضادة للأكسدة.' },
        { name: 'السيسكوتيربينات (مثل الغلوبولول)', detail: 'تُسهم في الرائحة المميزة والملف المضاد للميكروبات.' },
        { name: 'الفلافونويدات والتانينات القابلة للتحلل', detail: 'موجودة في مستخلصات الأوراق الخام، توفر دعماً قابضاً ومضاداً للأكسدة الخلوية.' },
      ],
      moa: [
        { title: 'التأثير المحرِّك للإفراز والحالّ للمخاط', detail: 'يُحفِّز 1،8-سينيول مباشرةً تردد ضربات الأهداب في ظهارة الجهاز التنفسي. كما يبذل تأثيراً حقيقياً حالاً للمخاط عن طريق تنظيم التعبير الجيني لجينات الميوسين (MUC2 وMUC19) في خلايا الكأس الهوائية، مما يُرقِّق إفرازات المخاط شديدة اللزوجة ويُسهِّل البُصاق الفعّال.' },
        { title: 'التأثير المضاد للالتهاب', detail: 'يُثبِّط بقوة إنتاج سلاسل الالتهاب. يمنع تنشيط عامل النسخ NF-κB، مما يؤدي إلى انخفاض ملحوظ في تخليق TNF-α وIL-1β وLTB4 وثرومبوكسان B2.' },
        { title: 'تأثير مزيل الاحتقان (التعديل الحسي)', detail: 'يُحفِّز بنشاط مستقبلات البرد TRPM8 الموجودة على نهايات العصب الثلاثي التوائم الوارد داخل الغشاء المخاطي الأنفي. يُحدث هذا التفاعل إحساساً بالبرودة الموضعية يُقلِّل الإحساس باحتقان الأنف ومقاومة التنفس دون العمل كموقِّف للأوعية.' },
        { title: 'التأثير المضاد للميكروبات', detail: 'يُعطِّل سلامة غشاء الخلية البكتيرية، مُظهِراً آثاراً جراثيمية وقاتلة للجراثيم ضد مسببات أمراض الجهاز التنفسي الشائعة مثل المكورات الرئوية وجرثومة الهيموفيليا النزلية.' },
      ],
      uses: [
        'التخفيف العَرَضي من السعال المُنتِج: يعمل كطارد فعّال للبلغم لتليين وتصفية مخاط القصبات الهوائية اللزج.',
        'تخفيف احتقان الأنف والجيوب الأنفية: يُريح انسداد المسالك التنفسية العلوية المرتبط بالزكام الحاد والتهاب الجيوب الأنفية الحاد والإنفلونزا.',
        'الحدّ من تهيج الشعب الهوائية: يُهدِّئ النزلة والتشنجات القصبية الخفيفة المرتبطة بالأمراض التنفسية غير الحادة.',
        'العلاج المساعد لالتهاب الحلق: يُستخدم في أقراص المص أو الغرغرة لخصائصه التخديرية الموضعية الخفيفة والمطهِّرة.',
      ],
      howToUse: [
        { method: 'الاستنشاق بالبخار', instruction: 'أضف 2-5 قطرات من زيت اليوكاليبتوس الأساسي النقي في إناء من الماء المتبخر (غير المغلي). استنشق الأبخرة الدوائية عبر الأنف والفم لمدة 5-10 دقائق مع إبقاء العينين مغلقتين لتجنب تهيج العين.' },
        { method: 'التطبيق الموضعي (دلك الصدر)', instruction: 'أدمج الزيت الأساسي في زيت حامل مناسب (كزيت اللوز الحلو أو الجوجوبا) بتركيز أقصى 1%. دلِّك برفق على منطقة الصدر أو الظهر للعمل كمهيج مضاد موضعي ومُحرِّر للبخار.' },
        { method: 'التركيبات الفموية الموحَّدة', instruction: 'الإيكاليبتول الموحَّد متاح في كبسولات معوية صيدلانية محددة (مثل Soledum® أو Myrtol®) مُشاراً إليها لعدوى الجهاز التنفسي السفلي، ويجب تناولها تحت إشراف طبي صارم.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والمراهقون', notes: 'آمن بشكل عام للاستخدام الموضعي والاستنشاق والفموي الموحَّد عند التخفيف أو التركيب الصحيح.' },
        { group: 'الأطفال (أقل من 6 سنوات)', notes: 'محظور تماماً. يجب ألا تُطبَّق التركيبات المحتوية على 1،8-سينيول أو زيت اليوكاليبتوس النقي موضعياً على وجه الرضّع والأطفال الصغار أو أنوفهم أو صدورهم، ولا تُستخدم في الاستنشاق بالبخار. قد يُسبِّب التعرض تشنجات انعكاسية للمزمار أو تشنجاً حنجرياً شديداً أو اكتئاباً تنفسياً حاداً أو تشنجات جهازية.' },
        { group: 'الحمل والرضاعة', notes: 'الإعطاء الفموي للزيت الأساسي محظور تماماً بسبب بيانات السلامة السريرية غير الكافية ومخاطر تحريض إنزيمات الكبد في الجنين. الاستنشاق أو الاستخدام التجميلي الموضعي منخفض الجرعة بعيداً عن منطقة الصدر/الثدي يُعتبر منخفض المخاطر خلال الرضاعة.' },
        { group: 'كبار السن والأمراض المزمنة', notes: 'يُستخدم بحذر سريري عالٍ لدى المرضى المصابين بالربو (الاستنشاق غير المراقَب قد يُحفِّز تشنجاً قصبياً حاداً) أو الصرع أو القصور الكبدي الشديد.' },
      ],
      dosage: { standard: 'الاستنشاق بالبخار: 2-5 قطرات من الزيت الأساسي النقي في ماء متبخر؛ استنشاق لمدة 5-10 دقائق مع إغلاق العينين.\nالموضعي (دلك الصدر): تخفيف بحد أقصى 1% في زيت حامل؛ تطبيق على الصدر أو الظهر.\nالكبسولات الفموية الموحَّدة (مثل Soledum®): تحت الإشراف الطبي فقط.' },
      overdose: {
        symptoms: [
          'جرعة زائدة حادة عند البلع: ابتلاع زيت اليوكاليبتوس المُركَّز بالغ الخطورة؛ ما يصل إلى 3.5 مل من الزيت النقي قد يكون مميتاً للبالغ، وأقل بكثير للأطفال.',
          'حرقان شرسوفي حاد، قيء متدفق، غثيان.',
          'اكتئاب شديد في الجهاز العصبي المركزي، رنح عميق (فقدان التوازن)، تقبُّض الحدقة (حدقة دبوسية).',
          'تشنجات (نوبات صرعية)، صرع مستمر، وفشل تنفسي مميت أو غيبوبة. سرعة الظهور خلال 10-30 دقيقة.',
          'تهيج موضعي (الزيت غير المُخفَّف): احمرار موضعي شديد، إحساس بالحرق، حكة، أو التهاب جلدي تماسي تحسسي.',
        ],
        management: [
          'دخول المستشفى للطوارئ فوراً.',
          'لا تُحرِّض القيء تحت أي ظرف بسبب الخطر الشديد من استنشاق الزيت المتطاير مما يؤدي إلى التهاب رئة استنشاقي كيميائي مميت.',
          'تأمين مجرى الهواء، إدارة التشنجات النشطة بالبنزوديازيبينات الوريدية.',
          'إعطاء الفحم النشط عبر أنبوب معدي إذا كان مُشاراً إليه سريرياً خلال الساعة الأولى.',
          'التهيج الموضعي: وقف الاستخدام فوراً، غسل الجلد بكميات وفيرة من الماء البارد والصابون اللطيف، تطبيق مُلطِّف خالٍ من العطور.',
        ],
      },
      sideEffects: [
        'غثيان أو قيء أو إسهال (عند الإعطاء الفموي أو الاستنشاق بجرعة عالية).',
        'تهيج جلدي موضعي أو احمرار أو التهاب جلدي تماسي تحسسي (عند التطبيق الموضعي غير المُخفَّف).',
        'تهيج العين إذا أُجري الاستنشاق بالبخار مع فتح العينين.',
        'تشنج قصبي حاد لدى الأفراد المعرَّضين للخطر المصابين بالربو غير المراقَب.',
      ],
      contraindications: [
        'فرط الحساسية الوراثية لـ Eucalyptus globulus أو أعضاء آخرين في عائلة Myrtaceae.',
        'الرضع والأطفال أقل من 6 سنوات (مخاطر التشنج الحنجري والنوبات الصرعية).',
        'الربو النشط غير المراقَب أو مرض الانسداد الرئوي المزمن (COPD) الشديد.',
        'اضطرابات النوبات الصرعية الموجودة مسبقاً أو تاريخ الصرع.',
        'القصور الكبدي الشديد (تخضع الأحاديات التربينية لتصفية كبدية واسعة).',
        'الإعطاء الفموي أثناء الحمل.',
      ],
      drugInteractions: [],
      storage: {
        forms: [{ form: 'الزيت الأساسي', instructions: 'يُخزَّن في زجاجات زجاجية كهرمانية محكمة الإغلاق في بيئة باردة ومعتمة بعيداً تماماً عن متناول الأطفال لمنع التسمم المميت العَرَضي. يُحدث التعرض للضوء والأكسجين الأكسدة التلقائية للأحاديات التربينية مما يجعل الزيت مُهيِّجاً للغاية.' }],
      },
      benefits: [],
      factsAndMyths: [
        { myth: 'زيت اليوكاليبتوس مستخلص عشبي طبيعي بالكامل، لذا فإن شرب بضع قطرات في الماء الدافئ آمن تماماً لعلاج الزكام.', fact: 'زيت اليوكاليبتوس النقي سام للغاية وقد يكون مميتاً إذا ابتُلع بسبب آثاره العصبية السمية الحادة المشابهة للكافور. يُشار إليه بصرامة للاستنشاق أو التطبيق الخارجي فقط ما لم يُعالَج كيميائياً في منتجات صيدلانية محددة ذات طلاء معوي.' },
      ],
      botanicalFacts: {
        family: 'الآسية (Myrtaceae)',
        activeCompounds: '1،8-سينيول (الإيكاليبتول)، 70-85% من الزيت الأساسي',
        clinicalEvidence: 'استخدام راسخ من وكالة الدواء الأوروبية (EMA) – EMA/HMPC/307781/2012.',
      },
      relatedPlants: ['pelargonium', 'black-elderberry'],
      references: [
        { text: 'Juergens et al. (2003). Anti-inflammatory activity of 1.8-cineole (eucalyptol) in bronchial asthma. Respiratory Medicine, 97(3), 250–256.' },
        { text: 'Yadegarinia et al. (2006). Biochemical activities of Iranian Mentha piperita and Eucalyptus globulus essential oils. Phytochemistry, 67(12), 1249–1255.' },
        { text: 'PeaceHealth Medical Topics — Eucalyptus Monograph.', url: 'https://www.peacehealth.org/medical-topics/id/hn-2086009' },
      ],
    },
    'ginger-cold': {
      name: 'الزنجبيل',
      activeConstituents: [
        { name: 'الجينجيرول', detail: 'المبادئ الفعّالة الأساسية في ريزومات الزنجبيل الطازجة، إذ يُعدّ 6-جينجيرول الأكثر وفرةً ونشاطاً بيولوجياً. يمتلك خصائص مضادة للالتهاب وقوية مضادة للقيء.' },
        { name: 'الشوغاول', detail: 'يتشكّل عبر التجفيف الحراري للجينجيرول خلال عمليات التجفيف أو التسخين. 6-شوغاول هو المركّب السائد في الزنجبيل الجاف، ويُظهر استقراراً كيميائياً أعلى وملفاً أكثر فاعلية مضاداً للالتهاب ومُوقياً للأعصاب مقارنةً بالجينجيرول.' },
        { name: 'الباراديول والزنجيرون', detail: 'نواتج تحلل ثانوية تتشكّل خلال التخزين طويل الأمد والطهي، تُسهم في الملف المضاد للأكسدة والتدفئة.' },
        { name: 'الزيوت الأساسية المتطايرة (1% إلى 3%)', detail: 'تتألف أساساً من هيدروكربونات السيسكوتربين، خاصةً بيتا-زنجيبرين (حتى 35%)، وأر-كوركيومين، وبيتا-سيسكيفيلاندرين، وألفا-فارنيسين، التي تُحدِّد الرائحة التوابلية المميزة وتُسهم في الآثار المضادة للميكروبات ومضادة التشنج.' },
        { name: 'المشتقات الفينولية والراتنجات', detail: 'توفر دعماً ثانوياً مضاداً للأكسدة الخلوية وتحافظ على سلامة الغشاء المخاطي المعدي بالجرعات الفسيولوجية.' },
      ],
      moa: [
        { title: 'التأثير المضاد للالتهاب', detail: 'يُثبِّط بفعالية مسارات الإشارة الالتهابية المُعزِّزة. يعمل 6-جينجيرول و6-شوغاول كمثبطَين مزدوجَين لشلال حمض الأراكيدونيك عن طريق خفض تنظيم مسارات إنزيم الأكسدة الحلقية-2 (COX-2) وإنزيم الأكسجيناز-5 (5-LOX)، مما يؤدي إلى انخفاض ملحوظ في تخليق البروستاغلاندينات المُعزِّزة للالتهاب (PGE₂) واللوكوترينات (LTB₄). علاوةً على ذلك، يثبطان تنشيط عامل النسخ NF-κB، مما يُثبِّط إطلاق السيتوكينات المُعزِّزة للالتهاب (TNF-α وIL-1β وIL-6).' },
        { title: 'التأثير المضاد للتشنج والسعال', detail: 'يبذل تأثيراً مُرخِّياً مباشراً على خلايا العضلات الملساء لمجرى الهواء (ASMCs). يحجب قنوات الكالسيوم الجهد-المعتمدة (VDCCs) ويُعدِّل مخازن الكالسيوم داخل الخلايا، مما يُخفِّف تشنجات الشعب الهوائية ويُقلِّل نوبات السعال اللاإرادية غير الإنتاجية.' },
        { title: 'التأثير المضاد للأكسدة', detail: 'يُزيل مباشرةً أنواع الأكسجين التفاعلية (ROS)، بما في ذلك الجذور الحرة للأكسيد الفائق والهيدروكسيل، مع رفع تنظيم إنزيمات الدفاع المضادة للأكسدة الداخلية كالسوبروكسيد ديسموتاز (SOD) والكتالاز، مما يُخفِّف الإجهاد التأكسدي التنفسي أثناء العدوى.' },
        { title: 'التأثير المضاد للميكروبات والفيروسات', detail: 'يُظهر نشاطاً مضاداً للفيروسات ملحوظاً في المختبر، خاصةً ضد فيروس الجهاز التنفسي المخلوي (RSV) في ظهارة مجاري التنفس البشرية، عن طريق تثبيط التصاق الفيروس وتداخله وتكوين اللويحات. كما يُظهر آثاراً مثبطة للبكتيريا ضد مسببات أمراض الجهاز التنفسي الثانوية الشائعة.' },
        { title: 'التأثير الملطِّف الموضعي والمُهدِّئ', detail: 'عند إعطائه كنقيع مائي دافئ، تبذل الأجزاء المخاطية والراتنجية تأثيراً ملطِّفاً موضعياً على الغشاء المخاطي البلعومي، مما يُقلِّل تهيج الأعصاب الحسية وخشونة الحلق وبحة الأوتار الصوتية.' },
      ],
      uses: [
        'التخفيف العَرَضي من عدوى الجهاز التنفسي العلوي: يُخفِّف الأعراض الثانوية للزكام والتهاب الأنف الحاد والإنفلونزا عن طريق تعزيز التعرق الخفيف والعمل كعامل تدفئة.',
        'تخفيف التهاب البلعوم والتهاب الحنجرة: يُريح التهاب الحلق والتهاب البلعوم المرتبط وما يصاحبهما من بحة أو فقدان الصوت.',
        'إدارة السعال غير الإنتاجي: يُهدِّئ مجاري الهواء مفرطة التفاعل والسعال الجاف التشنجي عبر استرخاء العضلات الملساء المحيطية.',
        'الحدّ من الأعراض الثانوية للبرد: يُساعد في إدارة الحمى الخفيفة والقشعريرة وصداع التوتر المصاحب نظراً لآثاره المسكِّنة للألم وخافضة الحرارة الجهازية.',
      ],
      howToUse: [
        { method: 'النقيع المائي (شاي الزنجبيل)', instruction: 'انقع 2–3 غرام من الريزومة المقطَّعة طازجةً أو المبشورة في 200–250 مل ماء مغلٍ في وعاء مُغطَّى لمدة 10–15 دقيقة (لمنع فقدان الزيوت الأساسية المتطايرة). استنشق الأبخرة أثناء الاستهلاك. يمكن إضافة العسل أو الليمون كمواد مساعدة.' },
        { method: 'المسحوق الجاف الخام', instruction: '1–4 غرام يومياً، يُعطى في جرعات مُقسَّمة 500–1000 مغ للجرعة ممزوجاً مع الطعام أو الماء الدافئ.' },
        { method: 'الكبسولات الفموية الموحَّدة', instruction: '250–500 مغ من المستخلص الموحَّد يؤخذ 2 إلى 4 مرات يومياً (موحَّد عادةً ليحتوي على 5% من إجمالي الجينجيرول/الشوغاول).' },
        { method: 'المصّاصات / الحلوى الموضعية', instruction: 'يُستخدم عند الحاجة ليذوب ببطء في التجويف الفموي لعمل مطهِّر ومخدِّر موضعي مستهدَف في البلعوم.' },
      ],
      suitableAgeGroups: [
        { group: 'الحمل والرضاعة', notes: 'فعّال للغاية ويُستخدم سريرياً للغثيان الناجم عن الحمل وغثيان الصباح. غير أنه يجب تقييد الاستهلاك الفموي بحد أقصى 1 غرام/يوم مكافئ زنجبيل جاف تحت الإشراف الطبي. تُتجنب الجرعات العلاجية العالية نظراً للمخاطر النظرية لتحفيز تقلصات الرحم (التأثير المحفِّز للمخاض) وتثبيط منخفض المستوى لارتباط هرمون تستوستيرون الجنين. آمن أثناء الرضاعة بالجرعات الطهوية المعيارية.' },
        { group: 'الأطفال (أقل من سنتين)', notes: 'مُحظَر تماماً. البيانات السريرية الآمنة غائبة للرضّع. للأطفال فوق سنتين، يمكن إعطاء نقيعات مائية خفيفة جداً تحت الإشراف بجرعات مُخفَّضة بشكل كبير مُعدَّلة وفق الوزن.' },
        { group: 'كبار السن والأمراض المزمنة', notes: 'السكري: يُعزِّز الزنجبيل حساسية الأنسولين وقد يُخفِّض سكر الدم؛ مراقبة ضرورية. القلب والأوعية الدموية: قد يبذل خصائص حاجبة لقنوات الكالسيوم الضعيفة؛ استخدام بحذر مع مرضى ضغط الدم. تحصّي الصفراء (حصوات المرارة): يجب استخدامه بحذر سريري قصوى.' },
      ],
      overdose: {
        symptoms: [
          'الجرعة الزائدة الحادة عن طريق الفم (أكثر من 5 غرام مكافئ زنجبيل جاف يومياً) — الأعراض: تهيج حاد للغشاء المخاطي المعدي، وألم شرسوفي حارق، وحرقة معدة شديدة، وارتجاع حمضي، وإسهال، والتهاب موضعي في الفم/الحلق. بالجرعات السامة الضخمة، يمكن نظرياً أن يُسبِّب اكتئاب الجهاز العصبي المركزي وخفقان القلب (بسبب آثار الجينجيرول بجرعات عالية على القوة الانقباضية).',
          'التهيج الموضعي (الزيت الأساسي غير المخفَّف) — الأعراض: احمرار والتهاب جلدي تماسي تحسسي.',
        ],
        management: [
          'الجرعة الزائدة الحادة الفموية: وقف الاستخدام فوراً. إعطاء مضادات حموضة فموية أو مثبطات مستقبلات H₂ أو مثبطات مضخة البروتون (PPIs) لتهدئة تآكل الغشاء المخاطي المعدي. الحفاظ على الترطيب وتوازن الشوارد إذا وُجد إسهال. مراقبة ملفات التخثر (PT/INR) إذا ابتُلعت كميات ضخمة بسبب الآثار المضادة للصفيحات النظرية.',
          'التهيج الموضعي: الغسل الجيد بالماء البارد والصابون؛ وضع مُرطِّب محايد.',
        ],
      },
      sideEffects: [],
      contraindications: [
        'فرط الحساسية المعروف لـ Zingiber officinale أو أعضاء آخرين في فصيلة الزنجبيليات (مثل الكركم والهيل).',
        'تحصّي الصفراء النشط (حصوات المرارة): يُظهر الزنجبيل تأثيراً مُفرِزاً للصفراء قوياً (يُحفِّز إفراز الصفراء وانقباض المرارة)، مما قد يُسبِّب مغص صفراوي أو انسداد قناة الصفراء لدى المرضى الذين يعانون حصوات صفراوية موجودة مسبقاً.',
        'مرض القرحة الهضمية النشط (PUD) أو التهاب القولون التقرحي: قد يُفاقم الآفات الهضمية الأساسية بسبب خصائصه المهيِّجة الحارة الموضعية عند استخدامه خاماً أو بتركيزات عالية.',
        'اضطرابات النزف الشديدة: (مثل الناعور) بسبب الآثار المحتملة المضادة لتجميع الصفائح الدموية.',
        'حالات ما قبل الجراحة الكبرى: يجب إيقافه 1 إلى 2 أسبوع قبل الإجراءات الجراحية الكبرى.',
      ],
      drugInteractions: [
        { drug: 'مضادات التخثر / مضادات الصفيحات (مثل الوارفارين والأسبرين والكلوبيدوغريل)', effect: 'يثبط الزنجبيل تخليق ثرومبوكسان ويعمل كمثبط ضعيف لتجميع الصفائح الدموية في المختبر. في حين تُظهر التجارب السريرية بيانات متضاربة بشأن التغييرات الكبيرة في INR، فإن المراقبة الدقيقة لأوقات النزف وINR إلزامية أثناء الاستخدام المتزامن.' },
        { drug: 'عوامل مضادة لمرض السكري (مثل الميتفورمين والأنسولين)', effect: 'قد يُقوِّي الآثار المنخفضة لسكر الدم عن طريق تعزيز امتصاص الجلوكوز في الخلايا العضلية الهيكلية؛ يُوصى بمراقبة سكر الدم.' },
        { drug: 'حاصرات قنوات الكالسيوم (مثل النيفيديبين والفيراباميل)', effect: 'قد تبذل الجرعات العلاجية العالية من الزنجبيل خصائص مضافة خافضة للضغط ومُبطِّئة لضربات القلب عبر حجب قنوات الكالسيوم الجهد-المعتمدة التآزري.' },
      ],
      storage: {
        forms: [
          { form: 'المسحوق الجاف / الكبسولات الموحَّدة', instructions: 'يجب تخزينها في حاويات محكمة الإغلاق مقاومة للضوء دون 25 درجة مئوية في بيئة جافة لتجنب امتصاص الرطوبة والتحلل المائي للجينجيرول الفعّال.' },
          { form: 'ريزومات الزنجبيل الطازجة', instructions: 'يجب لفّها جيداً وتبريدها عند 4 درجات مئوية للحفاظ على الرطوبة الخلوية ومنع التلف الفطري/الميكروبي.' },
        ],
      },
      benefits: [],
      factsAndMyths: [
        {
          myth: 'الزنجبيل يقتل فيروس الإنفلونزا كلياً ويعمل كعلاج بيولوجي فوري للزكام.',
          fact: 'لا يستأصل الزنجبيل مسببات الأمراض الفيروسية التنفسية ولا يشفي منها في الجسم الحي؛ بل يعمل كعلاج نباتي داعم استثنائي ومبني على الأدلة يُخفِّف بشكل ملحوظ شدة الأعراض ويُثبِّط الشلالات الالتهابية ويُحسِّن راحة المريض التنفسية.',
        },
      ],
      botanicalFacts: {
        family: 'الزنجبيليات (Zingiberaceae)',
        activeCompounds: 'الجينجيرول (6-جينجيرول)، الشوغاول (6-شوغاول)، الباراديول، الزنجيرون، الزيوت الأساسية المتطايرة (1–3%: بيتا-زنجيبرين، أر-كوركيومين، بيتا-سيسكيفيلاندرين، ألفا-فارنيسين)، مشتقات فينولية وراتنجات',
        clinicalEvidence: 'وحدة EMA (2014) المرجعية الأوروبية للنباتات الطبية؛ وحدة منظمة الصحة العالمية (WHO) لـ Zingiber officinale؛ المراجعة المنهجية الشاملة لـ Anh وآخرين (2020)؛ أثبت Chang وآخرون (2013) النشاط المضاد للفيروسات ضد RSV في خطوط خلايا مجاري التنفس البشرية.',
      },
      relatedPlants: ['eucalyptus'],
      references: [
        { text: 'European Medicines Agency (EMA): European Union herbal monograph on Zingiber officinale Roscoe, rhizoma. (2014). Committee on Herbal Medicinal Products (HMPC).' },
        { text: 'World Health Organization (WHO): WHO Monographs on Selected Medicinal Plants, Volume 1: Rhizoma Zingiberis. Geneva.' },
        { text: 'Anh, N. H., Kim, S. J., Long, N. P., Min, J. E., Yoon, Y. C., Lee, E. G., Kim, M., Al-Mazaideh, A. M., & Kwon, S. W. (2020). Ginger on Human Health: A Comprehensive Systematic Review of Randomized Clinical Trials. Nutrients, 12(1), 157.' },
        { text: 'Chang, J. S., Wang, K. C., Yeh, C. F., Shieh, D. E., & Chiang, L. C. (2013). Fresh ginger (Zingiber officinale) has antiviral activity against respiratory syncytial virus in human respiratory tract cell lines. Journal of Ethnopharmacology, 145(1), 146-151.' },
      ],
    },
    vitex: {
      name: 'فيتكس', shortDescription: 'يُعرف بـ"توت شجرة العفة"، يدعم فيتكس التوازن الهرموني ويخفف أعراض متلازمة ما قبل الحيض.',
      description: 'فيتكس العشب الأوروبي الرائد لصحة المرأة الهرمونية. على عكس معظم الأعشاب، يعمل فيتكس على الغدة النخامية لتطبيع مستويات البرولاكتين والبروجسترون.',
      history: 'استُخدم طبياً لأكثر من 2500 عام، ويظهر في كتابات أبقراط وديوسقوريدس.',
      benefits: [
        { icon: 'favorite', title: 'تخفيف متلازمة ما قبل الحيض', desc: 'تُظهر تجارب سريرية عديدة تخفيفاً ملحوظاً في أعراض PMS.' },
        { icon: 'cycle', title: 'تنظيم الدورة', desc: 'يطبّع طول الدورة الشهرية ويقلل الدورات غير المنتظمة.' },
        { icon: 'psychology', title: 'تنظيم البرولاكتين', desc: 'يقلل مستويات البرولاكتين المرتفعة.' },
      ],
      botanicalFacts: { family: 'فصيلة الشفوية', nativeRegion: 'البحر المتوسط، وسط آسيا', growthHabit: 'شجيرة نفضية', activeCompounds: 'الإيريدويدات، الفلافونويدات، الديتيربينات', cultivationNotes: 'يفضّل مناخ البحر المتوسط. أشعة شمس كاملة، تربة جيدة التصريف.' },
      preparation: [
        { method: 'الصبغة', desc: '2-4 مل كل صباح، طويل الأمد (3-6 أشهر على الأقل).', bestFor: 'التنظيم الهرموني' },
        { method: 'الكبسولات', desc: '20-40 مغ مستخلص موحّد يومياً في الصباح.', bestFor: 'دعم PMS والدورة الشهرية' },
      ],
      symptoms: ['متلازمة ما قبل الحيض', 'خلل هرموني', 'دورات غير منتظمة', 'قلق'],
    },
    ashwagandha: {
      name: 'الأشواغاندا', shortDescription: 'عشب قديم مبجّل في الطب الأيورفيدي، مشهور بخصائصه المُكيِّفة العميقة التي تساعد الجسم على التعامل مع التوتر.',
      description: 'عشب قديم مبجّل في الطب الأيورفيدي، الأشواغاندا معروفة بخصائصها المُكيِّفة العميقة. يترجم اسمها إلى "رائحة الحصان" بالسنسكريتية.',
      history: 'يمتد تاريخ الأشواغاندا عبر الطب الأيورفيدي التقليدي منذ أكثر من 3000 عام. موطنها المناطق الجافة في الهند وشمال أفريقيا والشرق الأوسط.',
      benefits: [
        { icon: 'psychology', title: 'تخفيف التوتر والقلق', desc: 'انخفاض ملحوظ في مستويات الكورتيزول، يساعد الجسم على إدارة التوتر الجهازي.' },
        { icon: 'favorite', title: 'دعم القلب والتحمل', desc: 'تشير الدراسات إلى تحسّن في مستويات VO2max لدى البالغين الأصحاء.' },
        { icon: 'neurology', title: 'الوظيفة المعرفية', desc: 'فوائد محتملة للذاكرة وأداء المهام والانتباه.' },
      ],
      botanicalFacts: { family: 'فصيلة الباذنجانية', nativeRegion: 'الهند، الشرق الأوسط، أفريقيا', growthHabit: 'شجيرة دائمة الخضرة صغيرة', activeCompounds: 'الويثانولايدات', cultivationNotes: 'تزدهر في تربة جافة حجرية مع أشعة شمس كاملة. مقاومة عالية للجفاف.' },
      preparation: [
        { method: 'الشاي التقليدي', desc: 'اغلِ ملعقة صغيرة من الجذر المجفف في كوب ماء أو حليب لمدة 10-15 دقيقة. صفِّه وحلِّه بالعسل.', bestFor: 'الهدوء المسائي' },
        { method: 'مستخلصات الصبغة', desc: 'مستخلصات كحولية أو جليسيرينية توفر امتصاصاً عالياً. عادةً 30-40 قطرة يومياً.', bestFor: 'الامتصاص السريع' },
      ],
      symptoms: ['توتر', 'إرهاق', 'مناعة', 'قلق', 'نوم'],
    },
    'red-raspberry': {
      name: 'ورق التوت الأحمر', shortDescription: 'منشّط رحمي مشهور استُخدم لقرون لتقوية الرحم وتسهيل الولادة ودعم الصحة الإنجابية.',
      description: 'يُسمى ورق التوت الأحمر في كثير من الأحيان "عشبة المرأة" لتقارب خصائصه مع الجهاز التناسلي الأنثوي.',
      history: 'استخدمته النساء الأمريكيات الأصليات لقرون ودُوِّن في الطب العشبي الأوروبي منذ القرن السادس عشر.',
      benefits: [
        { icon: 'favorite', title: 'منشّط الرحم', desc: 'قلويد الفراغرين يقوّي ويشدّ عضلة الرحم، تقليدياً للتحضير للولادة.' },
        { icon: 'healing', title: 'غني بالمعادن', desc: 'غني جداً بالمغنيسيوم والبوتاسيوم والحديد والكالسيوم.' },
        { icon: 'eco', title: 'دعم الدورة الشهرية', desc: 'يقلل تشنجات الدورة الشهرية وينظّم طولها.' },
      ],
      botanicalFacts: { family: 'فصيلة الوردية', nativeRegion: 'أوروبا، شمال آسيا', growthHabit: 'شجيرة نفضية', activeCompounds: 'الفراغرين، العفص، الفلافونويدات', cultivationNotes: 'ينمو في المناطق المعتدلة. تُحصد الأوراق في الربيع قبل الإزهار.' },
      preparation: [
        { method: 'شاي الأوراق', desc: 'انقع ملعقة إلى ملعقتين من الأوراق المجففة في ماء مغلٍ لمدة 10-15 دقيقة. اشرب 2-3 أكواب يومياً.', bestFor: 'دعم الحمل والدورة الشهرية' },
        { method: 'الصبغة', desc: '2-4 مل في الماء، 2-3 مرات يومياً. ابدأ في الثلث الثاني فقط واستشيري القابلة.', bestFor: 'التحضير للولادة' },
      ],
      symptoms: ['متلازمة ما قبل الحيض', 'تشنجات الدورة', 'دعم الحمل', 'خلل هرموني'],
    },
    rosemary: {
      name: 'إكليل الجبل', shortDescription: 'ثبت علمياً أنه يحفّز نمو الشعر بما يضاهي المينوكسيديل، إكليل الجبل يحسّن دوران فروة الرأس ويقوّي بصيلات الشعر.',
      description: 'ظهر إكليل الجبل كأحد أكثر النباتات دعماً بالأدلة لصحة الشعر. أثبتت تجربة سريرية رائدة عام 2015 أن زيت إكليل الجبل فعّال مثل المينوكسيديل 2٪.',
      history: 'يُعرف بـ"عشبة التذكر" في اليونان القديمة، استُخدم طبياً لأكثر من 2000 عام.',
      benefits: [
        { icon: 'self_improvement', title: 'محفّز نمو الشعر', desc: 'تُظهر التجارب السريرية أن زيت إكليل الجبل يزيد عدد الشعر وكثافته بشكل ملحوظ.' },
        { icon: 'favorite', title: 'دوران فروة الرأس', desc: 'يحسّن الدوران الدموي الدقيق لبصيلات الشعر، مما يوصل المغذيات والأكسجين.' },
        { icon: 'healing', title: 'مثبّط DHT', desc: 'يثبّط حمض الكارنوسيك إنزيم 5-ألفا-ريداكتاز، مما يقلل تحوّل DHT.' },
      ],
      botanicalFacts: { family: 'فصيلة الشفوية', nativeRegion: 'البحر المتوسط', growthHabit: 'شجيرة خشبية معمرة', activeCompounds: 'حمض الروزمارينيك، حمض الكارنوسيك، 1,8-cineole', cultivationNotes: 'يزدهر في تربة جافة جيدة التصريف قلوية مع أشعة شمس كاملة. مقاوم للجفاف.' },
      preparation: [
        { method: 'زيت فروة الرأس', desc: 'خفِّف 3-5 قطرات من الزيت الأساسي في ملعقة كبيرة من زيت ناقل. دلّكي فروة الرأس واتركيه 30+ دقيقة.', bestFor: 'نمو الشعر وصحة فروة الرأس' },
        { method: 'شطفة الشعر', desc: 'انقع ملعقتين كبيرتين إكليل جبل مجفف في كوبين ماء ساخن لمدة 20 دقيقة. استخدم كشطفة نهائية للشعر.', bestFor: 'اللمعان وتنشيط فروة الرأس' },
      ],
      symptoms: ['تساقط الشعر', 'مشاكل فروة الرأس', 'ضعف الدورة الدموية'],
      warnings: [
        'الحمل: الجرعات العلاجية من الزيت الأساسي محظورة (تأثير مُنبِّه للحيض بالتركيزات العالية).',
        'الصرع: تجنّبي الجرعات العالية من الزيت الأساسي؛ قد تُحفِّز نوبات.',
        'لا تبتلع الزيت الأساسي الخالص لإكليل الجبل.',
      ],
      activeConstituents: [
        { name: 'حمض الروزمارينيك (بوليفينول)', percentage: '', effect: 'مضاد أكسدة ومضاد التهاب أساسي؛ يُثبِّط COX وLOX' },
        { name: 'حمض الكارنوسيك والكارنوسول (ديتيربينات)', percentage: '', effect: 'مضادات أكسدة قوية؛ وقائية للأعصاب؛ مضادة للالتهاب' },
        { name: 'حمض الأورسوليك (تريتيربينويد)', percentage: '', effect: 'يُحفِّز تكاثر خلايا بصيلات الشعر؛ مضاد للالتهاب' },
        { name: '1,8-سينيول (أوكسيد تيربيني متطاير)', percentage: '', effect: 'مُعزِّز للإدراك عبر تثبيط AChE؛ يزيد دوران الدم الدماغي' },
        { name: 'α-بينين', percentage: '', effect: 'موسِّع للشعب الهوائية؛ مُثبِّط لـAChE' },
      ],
      moa: [
        { title: 'تعزيز الإدراك', detail: '1,8-سينيول يُثبِّط أستيل كولينيستيراز (AChE) مما يزيد توافر الأستيل كولين وتحسين الذاكرة والتركيز.' },
        { title: 'نمو الشعر', detail: 'حمض الأورسوليك يُحفِّز IGF-1 في خلايا الحليمة الجلدية مما يُعزِّز تكاثر بصيلات الشعر؛ يُثبِّط تصغير البصيلات المرتبط بـDHT.' },
        { title: 'تحسين الدوران', detail: 'مكونات الزيت الأساسي تُسبِّب توسعاً وعائياً موضعياً مما يزيد تدفق الدم في فروة الرأس.' },
        { title: 'مضاد للأكسدة', detail: 'حمض الكارنوسيك يُنشِّط مسار Nrf2؛ حمض الروزمارينيك يُحيِّد الجذور الحرة.' },
      ],
      uses: [
        'دعم الإدراك والذاكرة والتركيز',
        'تساقط الشعر وترقُّقه وصحة فروة الرأس',
        'آلام العضلات والمفاصل (موضعي)',
        'الإرهاق الذهني وضعف التركيز',
        'ضعف الدوران الدموي',
      ],
      howToUse: [
        { method: 'زيت فروة الرأس', instruction: 'خفِّف 2-3 قطرات زيت أساسي في ملعقة كبيرة زيت ناقل. دلِّكي فروة الرأس 15 دقيقة. اتركيه 30 دقيقة قبل الغسيل. 2-3 مرات أسبوعياً.' },
        { method: 'الاستنشاق العطري', instruction: 'استنشقي الزيت الأساسي مباشرةً من الزجاجة أو عبر ناشر للتركيز والذاكرة.' },
        { method: 'شاي إكليل الجبل', instruction: 'انقعي 1-2 غرام عشب مجفف في ماء ساخن 10 دقائق. اشربي كوباً إلى كوبين يومياً.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن للاستخدام الموضعي والعطري والشاي بالكميات المعتدلة.' },
        { group: 'الحوامل', notes: 'الكميات الغذائية في الطعام آمنة؛ الجرعات العلاجية من الزيت الأساسي محظورة.' },
        { group: 'مرضى الصرع', notes: 'تجنّبي الجرعات العالية من الزيت الأساسي.' },
        { group: 'مرضى ارتفاع ضغط الدم', notes: 'استخدام بحذر لاحتمال تأثيره على ضغط الدم.' },
      ],
      dosage: {
        standard: 'استنشاق عطري: حسب الرغبة. زيت فروة الرأس: 2-3 قطرات في ملعقة كبيرة زيت ناقل، 2-3 مرات أسبوعياً. شاي: كوب إلى كوبين يومياً.',
        forms: [
          { form: 'زيت أساسي (فروة الرأس)', dose: '2-3 قطرات في ملعقة كبيرة زيت ناقل، 2-3 مرات أسبوعياً.' },
          { form: 'شاي', dose: '1-2 غرام عشب/كوب، كوب إلى كوبين يومياً.' },
          { form: 'مستخلص موحَّد', dose: 'حسب تعليمات المنتج.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة زيت أساسي موضعي: تهيج جلدي، تحسس ضوئي.',
          'جرعة عالية فموية من الزيت الأساسي: نادراً نوبات تشنجية، خطر إجهاض.',
        ],
        management: [
          'موضعي: اغسل المنطقة بالماء والصابون.',
          'فموي كثيف: استشارة طبية فورية.',
        ],
      },
      sideEffects: [
        'آمن جداً بشكل عام بالكميات المعتدلة',
        'جرعات عالية من الزيت الأساسي: نوبات (نادر)، خطر إجهاض',
        'تحسس ضوئي جلدي مع الزيت المركَّز',
      ],
      contraindications: [
        'الحمل: الجرعات العلاجية من الزيت الأساسي محظورة',
        'الصرع: جرعات عالية من الزيت الأساسي',
        'لا يُبتلع الزيت الأساسي الخالص',
      ],
      drugInteractions: [
        'أدوية ضغط الدم: قد يُؤثِّر على ضغط الدم',
      ],
      storage: {
        forms: [
          { form: 'الزيت الأساسي', instructions: 'في زجاجة داكنة محكمة بعيداً عن الضوء والحرارة.' },
          { form: 'العشب المجفف', instructions: 'في حاوية محكمة بعيداً عن الرطوبة.' },
        ],
      },
    },
    calendula: {
      name: 'القطيفة', shortDescription: 'المعيار الذهبي للعناية النباتية بالبشرة، تشفي القطيفة الجروح وتهدّئ الالتهابات وتغذي البشرة الجافة أو المتهيجة.',
      description: 'القطيفة (Calendula officinalis) من أكثر النباتات الطبية بحثاً واستخداماً في الأمراض الجلدية ورعاية الجروح.',
      history: 'تُسمى "الأقحوان" بالعربية، استُخدمت طبياً منذ مصر القديمة واليونان. استخدمها الأطباء الرومانيون لكل شيء من لسعات العقارب إلى العبادة.',
      benefits: [
        { icon: 'healing', title: 'شفاء الجروح', desc: 'تسريع تكوين النسيج الحبيبي والتظهير، مثبت سريرياً لتسريع إغلاق الجروح.' },
        { icon: 'spa', title: 'دعم حاجز البشرة', desc: 'تشكّل السكريات المتعددة طبقة واقية على البشرة مع تحفيز إنتاج الكولاجين.' },
        { icon: 'eco', title: 'مضاد للالتهابات', desc: 'تقلل التربينات الوسطاء الالتهابيين في الجلد، مهدّئةً الأكزيما والتهاب الجلد وحروق الشمس.' },
      ],
      botanicalFacts: { family: 'الفصيلة النجمية', nativeRegion: 'البحر المتوسط، غرب أوروبا', growthHabit: 'حولي أو قصير العمر', activeCompounds: 'التربينات، الفلافونويدات، السكريات المتعددة', cultivationNotes: 'سهلة الزراعة في معظم التربة مع أشعة شمس كاملة. احصد الأزهار عند انفتاحها الكامل.' },
      preparation: [
        { method: 'زيت مستخلص', desc: 'غطِّ الأزهار المجففة بزيت الزيتون لمدة 4-6 أسابيع. ضعيه مباشرةً على البشرة.', bestFor: 'شفاء البشرة والترطيب' },
        { method: 'كمادة الشاي', desc: 'اصنع شاياً قوياً، انقعي قطعة قماش، ضعيها على البشرة المصابة لمدة 15-20 دقيقة.', bestFor: 'شفاء الجروح والالتهابات' },
      ],
      symptoms: ['تهيج البشرة', 'أكزيما', 'جروح', 'جفاف البشرة'],
    },

    // ── 18 real plants from All data.docx ──────────────────────────────────

    'aloe-vera': {
      name: 'الصبّار',
      shortDescription: 'نبات رائد في العناية بالبشرة يُعالج حروق الشمس والجروح الطفيفة والحمى بخصائصه المهدّئة والمضادة للالتهابات المُثبتة سريرياً.',
      description: 'الصبّار نبات طبي استثنائي استُخدم لأكثر من 4000 عام في الثقافات المصرية واليونانية والصينية. هلامه الشفاف الغني بالألوئين والبراديكينيناز يُشفي البشرة ويُهدِّئ الالتهابات ويُسرِّع التئام الجروح.',
      symptoms: ['تهيج البشرة', 'حروق الشمس', 'جفاف البشرة', 'الصدفية', 'قروح الفم'],
      warnings: [
        'لا تستخدم اللاتكس الخام فموياً على المدى البعيد: خطر نقص البوتاسيوم الحاد وتلف الكلى.',
        'الاستخدام الفموي محظور تمامًا أثناء الحمل.',
        'تجنّبي التطبيق على الجروح الملتهبة أو الجراحية العميقة: قد يُعيق التئام الأنسجة العميقة.',
      ],
      activeConstituents: [
        { name: 'فيتامينات A وC وE وB12 وحمض الفوليك والكولين', percentage: '', effect: 'مضادات أكسدة قوية؛ تدعم الحماية الخلوية والوظيفة الأيضية' },
        { name: 'البراديكينيناز (و7 إنزيمات أخرى)', percentage: '', effect: 'يُقلل الالتهاب المفرط موضعياً؛ يُساعد في تكسير السكريات والدهون' },
        { name: 'المعادن (كالسيوم، كروم، نحاس، ماغنيسيوم، منغنيز، زنك، بوتاسيوم، صوديوم، سيلينيوم)', percentage: '', effect: 'ضرورية للتمثيل الغذائي الخلوي السليم ووظيفة الإنزيمات' },
        { name: 'الأسيمانان (سكريات مخاطية / غلوكومانان)', percentage: '', effect: 'تأثيرات مُعدِّلة للمناعة ومضادة للالتهاب وشافية للجروح؛ تُعزز ترطيب البشرة' },
        { name: 'الأنثراكينونات: الألوئين والإيموكلين (في اللاتكس فقط)', percentage: '', effect: 'مُلينات محفِّزة؛ خصائص مضادة للبكتيريا والفيروسات ومسكِّنة للألم' },
        { name: 'ستيرولات نباتية: كوليسترول، كامبيستيرول، β-سيتوستيرول', percentage: '', effect: 'تأثيرات مضادة للالتهاب ومطهِّرة ومسكِّنة للألم الموضعي' },
        { name: 'أوكسينات وجبريلينات', percentage: '', effect: 'تُعزز التئام الجروح وتُظهر نشاطًا مضادًا للالتهاب' },
        { name: 'حمض الساليسيليك واللجنين والصابونين', percentage: '', effect: 'مضادة للالتهاب والبكتيريا؛ تُعزز تغلغل الجلد؛ خصائص تنظيفية ومطهِّرة' },
      ],
      moa: [
        { title: 'التئام الجروح', detail: 'يُحفِّز نشاط الخلايا الليفية ويزيد تكوين الكولاجين ويُعزز التئام الجروح.' },
        { title: 'تأثير مضاد للالتهاب', detail: 'يُثبِّط مسار الأكسدة الحلقية (COX) مُقلِّلًا تكوين البروستاغلاندين ومُخفِّفًا الالتهاب.' },
        { title: 'مضاد للأكسدة وحماية من الأشعة فوق البنفسجية', detail: 'تحمي مركبات مضادات الأكسدة (الفيتامينات والبوليفينولات) خلايا البشرة من التلف التأكسدي وأشعة UV.' },
        { title: 'ترطيب البشرة', detail: 'يُعزز رطوبة البشرة بالاحتفاظ بالرطوبة عبر السكريات المخاطية (كالأسيمانان).' },
        { title: 'نشاط مضاد للميكروبات', detail: 'يُظهر نشاطًا مضادًا واسع الطيف ضد الكائنات الممرضة المختلفة.' },
        { title: 'تعديل المناعة', detail: 'يُعدِّل الاستجابات المناعية بتحفيز الضامّات وتقليل إطلاق الهيستامين من الخلايا البدينة.' },
        { title: 'تأثير ملين (اللاتكس فقط)', detail: 'تُحفِّز الأنثراكينونات حركة الأمعاء وتزيد محتوى الماء في البراز مُنتجةً تأثيرًا مُلينًا قويًا.' },
      ],
      uses: [
        'التئام الجروح والحروق (خاصةً الدرجة الأولى والثانية)',
        'تأثير مضاد للالتهاب: تهدئة تهيج البشرة',
        'ترطيب البشرة ومكافحة الشيخوخة',
        'تأثيرات ملينة: إدارة قصيرة الأمد للإمساك المؤقت (اللاتكس فقط)',
        'تطبيقات التجميل وحماية البشرة',
        'نشاط مطهِّر ومضاد للميكروبات',
        'علاج داعم لصحة الفم (التهاب اللثة وتقليل البلاك)',
        'تأثير محتمل مساعد في خفض السكر في الدم',
        'دعم تعديل المناعة',
      ],
      howToUse: [
        { method: 'العناية بالوجه', instruction: 'نظِّفي البشرة أولًا ثم ضعي طبقة رفيعة من هلام الصبّار النقي بمساج لطيف بحركات صاعدة. اتركيه كمرطب خفيف أو اغسليه بماء فاتر بعد 15 دقيقة.' },
        { method: 'البشرة الجافة', instruction: 'امزجي قطرات من زيت مرطِّب (جوجوبا أو جوز الهند) مع هلام الصبّار قبل التطبيق لتعزيز التأثير المرطِّب.' },
        { method: 'البشرة الدهنية / المعرَّضة لحب الشباب', instruction: 'استخدمي هلام الصبّار النقي كمرطِّب خفيف مائي غير سادّ للمسام.' },
        { method: 'العناية بالشعر وفروة الرأس', instruction: 'ضعي الهلام الطازج أو التجاري النقي مباشرةً على فروة الرأس وخصلات الشعر. اتركيه 30-60 دقيقة ثم اشطفيه جيدًا.' },
      ],
      suitableAgeGroups: [
        { group: 'الرضّع (أقل من سنة)', notes: 'الاستخدام الفموي محظور تمامًا. الاستخدام الموضعي غير موصى به إلا بموافقة طبيب أطفال.' },
        { group: 'الأطفال (1-5 سنوات)', notes: 'الاستخدام الخارجي فقط بكميات صغيرة؛ تجنّب الاستخدام الفموي.' },
        { group: 'الأطفال (6-12 سنة)', notes: 'آمن عمومًا للاستخدام الموضعي. الاستخدام الفموي للاتكس محظور تمامًا بسبب مخاطر الكهارل.' },
        { group: 'المراهقون (12-18 سنة)', notes: 'آمن للاستخدام الموضعي؛ استخدام فموي محدود وحذر (عصير الورقة الكاملة مُزال اللون) عند الضرورة السريرية.' },
        { group: 'البالغون', notes: 'آمن للاستخدام الموضعي والفموي الصحيح عند اتباع الإرشادات.' },
        { group: 'الحوامل والمرضعات', notes: 'الاستخدام الفموي محظور تمامًا (يُحفِّز تقلصات الرحم؛ الأنثراكينونات تنتقل إلى حليب الأم). الاستخدام الموضعي آمن عمومًا.' },
      ],
      dosage: {
        standard: 'موضعي: طبقة رفيعة 2-3 مرات يوميًا. عصير فموي مُنقى (خالٍ من الألوئين): 10-30 مل مرة أو مرتين يوميًا قبل الوجبات.',
        forms: [
          { form: 'هلام موضعي', dose: 'طبقة رفيعة 2-3 مرات يوميًا على المناطق المصابة.' },
          { form: 'عصير فموي (مُزال اللون، خالٍ من الألوئين)', dose: '10-30 مل مرة أو مرتين يوميًا قبل الوجبات.' },
          { form: 'ملين / لاتكس (ليس للاستخدام الروتيني)', dose: 'نحو 50-200 مغ مستخلص موحّد. ابدئي بجرعة منخفضة؛ تجنّبي الاستخدام الفموي طويل الأمد.' },
        ],
      },
      overdose: {
        symptoms: [
          'فموي (اللاتكس): تشنجات بطنية حادة، إسهال مائي غزير، بيلة دموية، نقص بوتاسيوم حاد، سمية كبدية نادرة مع الابتلاع غير المُنقى المزمن.',
          'موضعي: نادر؛ احمرار الجلد، حكة، إحساس بالحرق، التهاب جلدي تماسي، جفاف موضعي عند التطبيق المفرط.',
        ],
        management: [
          'فموي: التوقف الفوري، استبدال السوائل بقوة لمعالجة الجفاف، مراقبة طبية لكهارل المصل.',
          'موضعي: توقّف فورًا، اغسلي المنطقة بالماء والصابون اللطيف، ضعي مُلطِّفًا هيبواليرجينيكًا.',
        ],
      },
      sideEffects: [
        'تفاعلات تحسسية (شرى، طفح، وذمة موضعية)',
        'إحساس عابر بالوخز أو الحرق عند التطبيق الأول',
        'التهاب جلدي تماسي',
        'خطر تفاقم العدوى عند التطبيق على الجروح الملتهبة أو الجراحية',
        'احتمال حساسية ضوئية موضعية (نادر)',
      ],
      contraindications: [
        'فموي: الحمل والرضاعة',
        'فموي: اضطرابات الجهاز الهضمي (داء كرون، التهاب القولون التقرحي، التهاب الزائدة، انسداد الأمعاء)',
        'فموي: قصور الكلى',
        'فموي: البواسير',
        'موضعي: فرط الحساسية المعروف لنباتات عائلة الزنبقيات/الأسفوديليات (بصل، ثوم، خزامى)',
      ],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'المنتجات التجارية', instructions: 'يُخزَّن في مكان بارد جاف بعيدًا عن أشعة الشمس المباشرة.' },
          { form: 'الهلام الطبيعي المستخلص طازجًا', instructions: 'يُحفظ في حاوية محكمة الإغلاق، يُبرَّد فورًا، يُستخدم خلال أسبوع إلى أسبوعين.' },
        ],
      },
    
      benefits: [
        { icon: 'healing', title: 'شفاء الجروح والحروق', desc: 'يحفّز نشاط الخلايا الليفية وتوليف الكولاجين لتسريع التئام الجروح وحروق الدرجتين الأولى والثانية.' },
        { icon: 'water_drop', title: 'ترطيب عميق للبشرة', desc: 'تحتجز عديدات السكاريد المخاطية (أسيمانان) الرطوبة لترطيب طويل الأمد دون انسداد المسام.' },
        { icon: 'spa', title: 'مضاد للالتهابات', desc: 'يثبّط الألوئين إنزيمات الالتهاب ويمنع إطلاق الهستامين، مما يقلل الاحمرار والتورم والحرقة.' },
      ],
      botanicalFacts: { family: 'Asphodelaceae', nativeRegion: 'شبه الجزيرة العربية؛ منتشر في المناطق المدارية وشبه المدارية', growthHabit: 'نبات عصاري معمر بأوراق لحيمة سميكة في مجموعات وردية يصل ارتفاعه إلى 60-100 سم', activeCompounds: 'أسيمانان، ألوئين، براديكينيناز، فيتامين C/E، أنثراكينونات', cultivationNotes: 'ينمو في تربة جيدة التصريف مع أشعة شمس جزئية؛ مقاوم للجفاف ومتحمل للظل.' },
      preparation: [
        { method: 'الجل الطازج (موضعي)', desc: 'استخرج جل الورقة الداخلية للتطبيق الموضعي الفوري على الجروح والحروق.', bestFor: 'التئام الجروح، الحروق، تهدئة البشرة الحادة' },
        { method: 'العصير الفموي المزال اللون', desc: 'المنتجات التجارية المُزال منها الألوئين/اللاتكس، تؤخذ فموياً بجرعة 10-30 مل.', bestFor: 'الإمساك العرضي قصير الأمد' },
        { method: 'المستحضرات الموضعية', desc: 'كريمات وهلامات مقننة تحتوي على 10-70% جل صبّار لترطيب البشرة والشفاء.', bestFor: 'الإكزيما، الصدفية، تقليل التهيج المزمن' },
      ],
    },

    'tea-tree': {
      name: 'شجرة الشاي',
      shortDescription: 'مطهّر نباتي قوي للاستخدام الموضعي فقط في علاج حب الشباب والعدوى الفطرية. ⚠️ سُمّي خطير إذا بُلع.',
      description: 'زيت شجرة الشاي المُقطَّر من أوراق Melaleuca alternifolia الأسترالية هو أحد أكثر مضادات الميكروبات الطبيعية دراسةً. يحتوي على التربينول-4 الذي يُتلِف أغشية خلايا الميكروبات. يُحظر بلعه مطلقاً.',
      symptoms: ['حب الشباب', 'عدوى فطرية', 'قشرة الرأس', 'الجروح الجلدية'],
      warnings: [
        'خطر حرج: لا تبتلع زيت شجرة الشاي أبدًا: شديد السُّمية. حتى الكميات الصغيرة تُسبِّب سمية حادة في الجهاز العصبي المركزي.',
        'خفِّفه دائمًا قبل تطبيقه على البشرة. الزيت غير المخفَّف يُسبِّب حروقًا كيميائية حادة.',
        'احفظه بعيدًا عن متناول الأطفال: حتى بضعة مللترات قد تكون خطرة إذا ابتلعها طفل.',
      ],
      activeConstituents: [
        { name: 'تيربينيول-4', percentage: '35-48%', effect: 'المادة الفعّالة الرئيسية؛ خصائص مضادة قوية للبكتيريا والفطريات والالتهاب' },
        { name: '1,8-سينيول (إيكاليبتول)', percentage: '<15%', effect: 'خصائص مضادة للالتهاب ومحللة للمخاط؛ التركيزات الأعلى قد تُسبِّب تهيج الجلد' },
        { name: 'γ-تيربينين وα-تيربينين', percentage: '10-28%', effect: 'دعم مضاد للأكسدة والميكروبات بشكل تآزري' },
        { name: 'ب-سيمين وليمونين', percentage: 'ثانوي', effect: 'يُساعدان في تغلغل البشرة الموضعي' },
      ],
      moa: [
        { title: 'نشاط مضاد للميكروبات (بكتيريا وفطريات)', detail: 'تيربينيول-4 عالي الدهنية يخترق جدران الخلايا الميكروبية مُعطِّلًا الطبقة الثنائية الدهنية، مما يتسبب في تسرب المحتويات الخلوية وتثبيط تنفس البكتيريا.' },
        { title: 'تأثير مضاد للالتهاب', detail: 'يُثبِّط كيميائيًا إنتاج الوسائط الالتهابية الرئيسية ويُقلِّل تخليق فوق الأكسيد في البلاعم المُنشَّطة ويُثبِّط TNF-α وIL-1β وPGE2.' },
        { title: 'نشاط مضاد لحب الشباب', detail: 'يُمارس تأثيرًا قاتلًا مباشرًا ضد Cutibacterium acnes ويُقلِّل الالتهاب الجريبي الموضعي.' },
      ],
      uses: [
        'علاج حب الشباب الشائع (هلام TTO 5% مماثل لبيروكسيد البنزويل 5% بآثار جانبية أقل)',
        'سعفة القدم (قدم الرياضي): محاليل موضعية 25-50%',
        'داء الأظافر الفطري: TTO 100% مماثل لكلوتريمازول 1%',
        'التهاب الجلد الدهني (قشرة الرأس): شامبو TTO 5% يُقلِّل Malassezia furfur',
        'مطهِّر واسع الطيف للجروح السطحية الصغيرة ولدغات الحشرات',
        'مزيل عرق طبيعي بديل: يُثبِّط بكتيريا منطقة الإبط',
        'نشاط بحثي ضد MRSA (المكورات العنقودية المقاومة للميثيسيلين)',
      ],
      howToUse: [
        { method: 'تطبيق الوجه / حب الشباب', instruction: 'خفِّف قطرة TTO في ملعقة صغيرة من زيت ناقل غير سادّ للمسام (جوجوبا أو معدني) للحصول على تركيز 1% تقريبًا. طبِّقه علاجًا موضعيًا على البثور.' },
        { method: 'تطبيق الجسم', instruction: 'امزج 2-3 قطرات لكل ملعقة صغيرة من الزيت الناقل. طبِّق على المناطق المصابة.' },
        { method: 'تطبيق فروة الرأس', instruction: 'امزج 3-5 قطرات لكل ملعقة كبيرة من الزيت الناقل أو أضفه مباشرةً إلى شامبو خفيف خالٍ من الكبريتات.' },
        { method: 'تركيبة مضادة للفطريات', instruction: 'استخدم المحاليل الموضعية التجارية المُحضَّرة بتركيز 10-50% حسب سماكة الأنسجة (أظافر مقابل سطح الجلد).' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال (أقل من 3 سنوات)', notes: 'محظور تمامًا: جلد الرضيع الرقيق يزيد خطر الامتصاص العبر جلدي والسمية العصبية الجهازية.' },
        { group: 'البالغون', notes: 'آمن بتركيزات تصل إلى 5%؛ 1-2% كافٍ غالبًا للاستخدام على الوجه.' },
        { group: 'الحمل والرضاعة', notes: 'الاستخدام التجميلي الموضعي بتركيزات منخفضة (<2%) آمن عمومًا. تجنّب التطبيق قرب منطقة الصدر أثناء الرضاعة.' },
        { group: 'كبار السن والحالات الجلدية المزمنة', notes: 'استخدام بحذر شديد عند أصحاب البشرة الحساسة أو الأكزيما التأتبية أو الصدفية الحادة.' },
      ],
      dosage: {
        standard: 'منتجات حب الشباب: 2-5% موضعي. تركيبات مضادة للفطريات: 10-50% موضعي. خطر حرج: الابتلاع الفموي محظور تمامًا: شديد السُّمية.',
        forms: [
          { form: 'هلام/كريم موضعي لحب الشباب', dose: 'تركيز 2-5%، يُطبَّق مرتين يوميًا.' },
          { form: 'محلول موضعي مضاد للفطريات', dose: 'تركيز 10-50%، يُطبَّق 1-2 مرة يوميًا على الأظافر/الجلد المصاب.' },
          { form: 'شامبو مضاد للقشرة', dose: 'شامبو TTO 5%؛ اتركه 3-5 دقائق قبل الشطف.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة فموية جهازية: اكتئاب حاد في الجهاز العصبي المركزي، ترنح شديد، خمول، ارتباك، وفي الحالات الحرجة فشل تنفسي وغيبوبة.',
          'جرعة زائدة موضعية: تهيج كيميائي حاد، احمرار شديد، حكة، تقشر، والتهاب جلدي تماسي تحسسي من منتجات أكسدة المونوتيربينات.',
        ],
        management: [
          'فموي: تدخل طبي طارئ فوري. لا تُحفِّز القيء (خطر الشفط الرئوي). العلاج الداعم، حماية مجرى الهواء، سوائل وريدية، وفحم نشط تحت إشراف طبي خلال الساعة الأولى.',
          'موضعي: توقّف فورًا، اغسل الجلد بماء بارد ومنظِّف لطيف، ضعي مُلطِّفًا خاليًا من العطور.',
        ],
      },
      sideEffects: [
        'جفاف جلدي، تقشر، إحساس محلي بالحرق والوخز',
        'احتمال التهاب جلدي تماسي تحسسي حاد عند الأفراد الحساسين',
        'استنشاق البخار المركّز قد يُسبِّب تهيجًا في الجهاز التنفسي وسعالًا جافًا وسيلانًا أنفيًا',
      ],
      contraindications: [
        'الابتلاع الفموي: محظور تمامًا في جميع الفئات',
        'فرط الحساسية أو الحساسية المعروفة لـ Melaleuca alternifolia أو أعضاء عائلة الآسية (كالأوكالبتوس)',
        'الأكزيما التأتبية الحادة أو جلد مكسور/متقرح بشدة',
      ],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'الزيت الأساسي', instructions: 'يُخزَّن في زجاجات زجاجية داكنة محكمة الإغلاق في بيئة باردة جافة بعيدًا عن الشمس والحرارة. التعرض للهواء والضوء يُؤكسِد المونوتيربينات إلى مركبات بيروكسيد شديدة التحسيس.' },
        ],
      },
    
      benefits: [
        { icon: 'bug_report', title: 'مكافح حب الشباب', desc: 'تأثير قاتل للبكتيريا مُثبت سريرياً ضد Cutibacterium acnes، يقلل الآفات الالتهابية وغير الالتهابية.' },
        { icon: 'sanitizer', title: 'مضاد واسع للفطريات', desc: 'فعّال ضد عدوى الفطريات الجلدية المسببة لفطار القدم والأظافر، مقارب لفاعلية كلوتريمازول الموضعي.' },
        { icon: 'spa', title: 'مطهر قاتل للجراثيم', desc: 'تربينول-4 يُتلف أغشية خلايا الميكروبات مما يوفر قتلاً سريعاً للطيف الواسع من البكتيريا والفيروسات والفطريات.' },
      ],
      botanicalFacts: { family: 'Myrtaceae', nativeRegion: 'نيو ساوث ويلز، أستراليا (شريط ساحلي ضيق)', growthHabit: 'شجيرة صغيرة أو جنبة تصل إلى 5-8 م بلحاء ورقي وأوراق إبرية', activeCompounds: 'تربينول-4 (35-48%)، غاما-تربينين (10-28%)، 1,8-سينيول', cultivationNotes: 'تزرع تجارياً وتُقطّر الأوراق لاستخراج الزيت الأساسي. ⚠️ يُحظر الابتلاع.' },
      preparation: [
        { method: 'الزيت المخفف (موضعي)', desc: 'يُخفف في زيت حامل (1-5%) قبل أي تطبيق موضعي. لا يُطبَّق أبداً مركزاً على البشرة.', bestFor: 'حب الشباب، المطهر الخفيف، مضاد العرق' },
        { method: 'هلام 5% التجاري', desc: 'مستحضرات موضعية تجارية موحدة لجرعة آمنة ومتسقة.', bestFor: 'علاج حب الشباب الشائع' },
        { method: 'شامبو طبي', desc: 'شامبو يحتوي على زيت شجرة الشاي لعلاج قشرة الرأس.', bestFor: 'قشرة الرأس، التهاب الجلد الدهني، تهيج فروة الرأس' },
      ],
    },

    licorice: {
      name: 'عرق السوس',
      shortDescription: 'مُهدِّئ للبشرة ومُخفِّف لفرط التصبغ بفضل مركب الغليسيريزين، مع خصائص مضادة للالتهابات والفيروسات.',
      description: 'عرق السوس Glycyrrhiza glabra واحد من أوائل الأعشاب الطبية المُدوَّنة في التاريخ. الغليسيريزين يُعدِّل نشاط المناعة ويُثبِّط الالتهاب، والغلابريدين يُقلِّل إنتاج الميلانين في البشرة.',
      symptoms: ['فرط التصبغ', 'تهيج البشرة', 'الأكزيما', 'الحلق المتهيج'],
      warnings: [
        'عرق السوس الفموي المحتوي على الغليسيريزين يُحظر استخدامه طويل الأمد: يُسبِّب ارتفاع ضغط الدم الحاد ونقص البوتاسيوم واضطرابات ضربات القلب.',
        'استخدم الشكل المُزال الغليسيريزين (DGL) للاستخدام الفموي لمرضى القلب والكلى.',
        'يُحظر الاستخدام الفموي تمامًا أثناء الحمل.',
      ],
      activeConstituents: [
        { name: 'الغليسيريزين (حمض الغليسيريزيك)', percentage: '', effect: 'صابونين تيربينوئيدي؛ مضاد للالتهاب والقرحة والفيروسات؛ تأثير يُشبه الكورتيزون عبر تثبيط 11β-HSD' },
        { name: 'حمض الغليسيريتينيك (إينوكسولون)', percentage: '', effect: 'مستقلب نشط دوائيًا من الغليسيريزين' },
        { name: 'الغلابريدين', percentage: '', effect: 'أساسي فلافونويد بولي فينولي؛ يُثبِّط التيروزيناز تنافسيًا لتقليل إنتاج الميلانين: تفتيح البشرة' },
        { name: 'ليكوشالكون A', percentage: '', effect: 'مشتق شالكون قوي؛ مضاد قوي للأكسدة والالتهاب؛ يُحيِّد الجذور الحرة الناجمة عن الأشعة فوق البنفسجية' },
        { name: 'ليكيريتين', percentage: '', effect: 'فلافونويد؛ يُحفِّز تشتت الميلانين وإزالته، مُبهِتًا فرط التصبغ والبقع الداكنة الموجودة' },
        { name: 'إيزوليكيريتيجينين', percentage: '', effect: 'فلافونويد؛ يُسهم في خصائص مضادة للأكسدة والالتهاب ومضادة للتشنج' },
      ],
      moa: [
        { title: 'تثبيط التيروزيناز (موضعي)', detail: 'الغلابريدين يُثبِّط تنافسيًا التيروزيناز، الإنزيم الأساسي المسؤول عن إنتاج الميلانين (التصبغ)، مُقلِّلًا مباشرةً تقتيم البشرة.' },
        { title: 'مضاد للإجهاد التأكسدي (موضعي)', detail: 'ليكوشالكون A يُحيِّد الجذور الحرة الناجمة عن التعرض للأشعة فوق البنفسجية، حامياً خلايا البشرة من الضرر التأكسدي.' },
        { title: 'تشتت الميلانين (موضعي)', detail: 'ليكيريتين يُحفِّز تشتت الميلانين وإزالته، مُساعدًا على إبهات فرط التصبغ والبقع الداكنة الموجودة.' },
        { title: 'تأثير مضاد للالتهاب يُشبه الكورتيزون (جهازي)', detail: 'الغليسيريزين يُثبِّط استقلاب الكورتيزول بحجب 11β-HSD، مُطيلًا عمر الكورتيزول النشط ومُنتجًا تأثيرًا قويًا مضادًا للالتهاب.' },
        { title: 'تأثير القشرانيات المعدنية (عند الجرعة الزائدة الجهازية)', detail: 'تثبيط 11β-HSD يُؤدي إلى تراكم الكورتيزول في الكلى، مُسبِّبًا تنشيطًا مفرطًا لمستقبلات القشرانيات المعدنية، مما يُؤدي إلى احتباس الصوديوم والماء وفقدان البوتاسيوم.' },
        { title: 'طارد للبلغم', detail: 'يُحفِّز إفرازات القصبة الهوائية والشعب الهوائية لتسييل المخاط وتسهيل طرحه.' },
        { title: 'مُلطِّف للأغشية المخاطية', detail: 'يُكوِّن طبقة واقية مُلطِّفة على الأغشية المخاطية لتخفيف التهيج في الجهاز الهضمي.' },
      ],
      uses: [
        'تفتيح البشرة وتوحيد لونها: تقليل البقع الداكنة وبقع الشمس والكلف',
        'تهدئة الالتهاب والاحمرار: تهدئة البشرة المتهيجة والوردية والأكزيما',
        'علاج حب الشباب والتحكم في الزهم: مضاد للبكتيريا ضد Cutibacterium acnes',
        'حماية مضادة للشيخوخة: مكافحة الجذور الحرة ودعم إنتاج الكولاجين',
        'تقليل حساسية البشرة: تقوية حاجز البشرة وتخفيف الأكزيما والتهاب الجلد',
        'دعم الجهاز التنفسي: علاج التهابات الجهاز التنفسي العلوي والسعال والتهاب الشعب الهوائية',
        'دعم الجهاز الهضمي: إدارة قرحة المعدة والتهاب المعدة وارتجاع الحمض',
      ],
      howToUse: [
        { method: 'قناع التفتيح المنزلي', instruction: 'امزجي ملعقة صغيرة من مسحوق عرق السوس مع ماء الورد أو الحليب أو الزبادي أو العسل لتشكيل عجينة. طبِّقيها على الوجه النظيف، اتركيها 15-20 دقيقة، اشطفيها بماء فاتر.' },
        { method: 'علاج موضعي للبقع', instruction: 'امزجي قليلًا من مسحوق عرق السوس مع هلام الصبّار أو العسل وضعيه مباشرةً على آثار حب الشباب أو فرط التصبغ لـ10-15 دقيقة ثم اشطفيه.' },
        { method: 'المنتجات الموضعية التجارية', instruction: 'أدرجي المصل أو التونر أو الكريم المحتوي على مستخلص عرق السوس الموحَّد (غلابريدين) في روتين العناية اليومية بالبشرة.' },
        { method: 'شاي فموي (للجهاز التنفسي/الهضمي)', instruction: 'انقعي ملعقة إلى ملعقتين من الجذر المجفف المقطَّع في ماء ساخن لتخفيف السعال أو تحسين الهضم. للحلق المتهيج: امزجي ملعقة صغيرة من المسحوق في ماء دافئ للغرغرة.' },
      ],
      suitableAgeGroups: [
        { group: 'الرضّع (أقل من سنة)', notes: 'الاستخدام الفموي محظور تمامًا. الاستخدام الموضعي غير موصى به إلا بوصفة طبيب أطفال.' },
        { group: 'الأطفال (1-5 سنوات)', notes: 'الاستخدام الخارجي فقط بكميات صغيرة؛ الاستخدام الفموي محظور تمامًا.' },
        { group: 'الأطفال (6-12 سنة)', notes: 'آمن للاستخدام الموضعي. الاستخدام الفموي محدود جدًا لمنع الألدوستيرونية الكاذبة.' },
        { group: 'المراهقون (12-18 سنة)', notes: 'آمن للاستخدام الموضعي (حب الشباب، فرط التصبغ). الاستخدام الفموي الحذر المؤقت مقبول ضمن الحدود الآمنة.' },
        { group: 'البالغون', notes: 'آمن للاستخدام الموضعي والفموي الصحيح عند اتباع حدود المدة الزمنية.' },
        { group: 'الحمل', notes: 'محظور فمويًا تمامًا: الإفراط في تناوله مرتبط بزيادة خطر الولادة المبكرة.' },
        { group: 'مرضى الأمراض المزمنة', notes: 'الاستخدام الفموي محظور أو محدود لمرضى ارتفاع ضغط الدم وأمراض القلب وقصور الكلى.' },
      ],
      dosage: {
        standard: 'مصل موضعي (1-2%): 2-3 قطرات 1-2 مرة يوميًا. أقنعة DIY: نصف ملعقة صغيرة مسحوق 2-3 مرات أسبوعيًا. عرق السوس المُزال الغليسيريزين (DGL) فموياً: حتى 4.5 غرام يوميًا لمدة أقصاها 4 أشهر.',
        forms: [
          { form: 'مصل مستخلص عرق السوس (1-2%)', dose: 'طبِّق 2-3 قطرات 1-2 مرة يوميًا على البشرة النظيفة قبل المرطِّب.' },
          { form: 'قناع المسحوق المنزلي', dose: 'امزج نصف ملعقة صغيرة مع الزبادي/العسل/ماء الورد، طبِّق 2-3 مرات أسبوعيًا لـ10-15 دقيقة.' },
          { form: 'عرق السوس المُزال الغليسيريزين (DGL)', dose: 'حتى 4.5 غرام يوميًا لمدة أقصاها 4 أشهر (للقرحة؛ لا يُسبِّب ارتفاع ضغط الدم).' },
          { form: 'هلام/مصل موضعي (2%)', dose: 'آمن لمدة تصل إلى 2-4 أسابيع متواصلة على البشرة.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة فموية (≥5 غرام غليسيريزين يوميًا لعدة أسابيع): شبه فرط الألدوستيرونية: ارتفاع ضغط دم حاد، نقص بوتاسيوم شديد، ضعف عضلي، تشنجات، قلاء استقلابي، احتباس السوائل، اضطرابات ضربات القلب، صداع حاد.',
          'جرعة زائدة موضعية: التهاب جلدي تماسي تهيجي (احمرار، حكة، حرق)، تحسس ضوئي مؤقت.',
        ],
        management: [
          'فموي: التوقف الفوري عن تناول عرق السوس، تكميل البوتاسيوم، مراقبة الكهارل، وإعطاء مدرات البول الحافظة للبوتاسيوم (سبيرونولاكتون) عند الضرورة السريرية.',
          'موضعي: إيقاف المنتج، الغسيل بماء بارد، تطبيق كريم حاجز خالٍ من العطور (أو هلام الصبّار)، تجنّب المكونات النشطة الأخرى حتى تعافي حاجز البشرة.',
        ],
      },
      sideEffects: [
        'موضعي: تهيج جلدي خفيف نادر أو التهاب جلدي تماسي تحسسي عند الأفراد شديدي الحساسية',
        'فموي (غليسيريزين): صداع، إرهاق مزمن، ارتفاع ضغط الدم، احتباس سوائل حاد (وذمة)',
      ],
      contraindications: [
        'الحساسية المعروفة لأعضاء عائلة البقوليات (الفول)',
        'التطبيقات الموضعية على الجلد المكسور أو المفتوح أو المصاب بعدوى شديدة',
        'ارتفاع ضغط الدم وأمراض القلب والأوعية الدموية',
        'قصور الكلى',
        'نقص البوتاسيوم الموجود مسبقًا',
      ],
      drugInteractions: [
        'ديجوكسين: نقص البوتاسيوم الناجم عن عرق السوس يزيد بشكل كبير من خطر سمية الديجوكسين (اضطرابات ضربات القلب الخطيرة)',
        'مدرات البول (فوروسيميد): الاستخدام المتزامن يُسرِّع فقدان البوتاسيوم',
        'وارفارين: قد يؤثر على استقلاب الوارفارين عبر إنزيمات الكبد، مُغيِّرًا فعالية مضادات التخثر',
      ],
      storage: {
        forms: [
          { form: 'جميع الأشكال', instructions: 'يُخزَّن في مكان بارد جاف بعيدًا عن أشعة الشمس المباشرة في حاويات محكمة الإغلاق للحفاظ على المركبات الحيوية النشطة.' },
        ],
      },
    
      benefits: [
        { icon: 'auto_fix_high', title: 'تفتيح البشرة', desc: 'الغلابريدين يثبط إنزيم التيروزيناز تنافسياً ليقلل إنتاج الميلانين، مما يُبهت البقع الداكنة والكلف وأضرار الشمس.' },
        { icon: 'spa', title: 'تهدئة الالتهابات', desc: 'التأثير المضاد للالتهابات والشبيه بالكورتيزون يهدئ الوردية واحمرار حب الشباب ونوبات الإكزيما.' },
        { icon: 'shield', title: 'حماية مضادة للأكسدة', desc: 'ليكوكالكون-أ يُحيّد الجذور الحرة المستحثة بالأشعة فوق البنفسجية، مما يحمي من الشيخوخة الضوئية.' },
        { icon: 'local_pharmacy', title: 'دعم تنفسي وهضمي', desc: 'خصائص طاردة للبلغم وملطّفة تهدئ السعال والتهاب القصبات وقرحة المعدة عند التناول الفموي.' },
      ],
      botanicalFacts: { family: 'Fabaceae (Leguminosae)', nativeRegion: 'جنوب أوروبا وغرب آسيا وشمال أفريقيا', growthHabit: 'نبات عشبي معمر يصل إلى 1-1.5 م بأوراق مركبة وأزهار بنفسجية؛ الجذر هو الجزء الدوائي', activeCompounds: 'الغليسيريزين، الغلابريدين، ليكوكالكون-أ، ليكيريتين، عزلو-ليكيريتيجنين', cultivationNotes: 'تُزرع الجذور بعد 3-4 سنوات؛ تفضل تربة رملية عميقة في مناخ جاف.' },
      preparation: [
        { method: 'مصل/كريم موضعي', desc: 'مستحضرات تجارية موحدة تحتوي على غلابريدين (1-2%) للعناية اليومية بالبشرة.', bestFor: 'فرط التصبغ، الكلف، البقع الداكنة، الوردية' },
        { method: 'قناع وجه طبيعي', desc: 'خلط مسحوق العرقسوس مع العسل أو الزبادي أو ماء الورد كقناع مُفتِّح لمدة 15 دقيقة.', bestFor: 'تفتيح البشرة، علامات حب الشباب' },
        { method: 'الجذر الفموي', desc: 'مستخلص موحد بجرعة 450-600 مغ يومياً للاستخدامات الجهازية.', bestFor: 'دعم الجهاز التنفسي والهضمي؛ قصير الأمد فقط' },
      ],
    },

    'green-tea': {
      name: 'الشاي الأخضر',
      shortDescription: 'غني بمضادات الأكسدة البوليفينول التي تحمي البشرة من الشيخوخة المبكرة وتُقلِّل الالتهاب وتُعزِّز المناعة.',
      description: 'الشاي الأخضر Camellia sinensis من أكثر المشروبات استهلاكاً وأعمقها بحثاً. مادة الكاتيشين EGCG الفعّالة تُثبِّط أكسدة الدهون وتحمي الخلايا من الإجهاد التأكسدي وتُقلِّل علامات الشيخوخة في البشرة.',
      symptoms: ['شيخوخة البشرة', 'التهاب البشرة', 'ضعف المناعة', 'حب الشباب'],
      warnings: [
        'مكمّلات مستخلص الشاي الأخضر المركَّزة يجب ألا تُؤخذ على معدة فارغة أبدًا: خطر سمية كبدية حادة.',
        'قيِّدي الكمية الفموية أثناء الحمل إلى 1-2 كوب يوميًا؛ نسب EGCG العالية قد تُضعف استقلاب حمض الفوليك.',
        'تجنّبي تناوله مع مثبطات MAO أو منبهات الجهاز العصبي المركزي بسبب تفاعلات الكافيين.',
      ],
      activeConstituents: [
        { name: 'EGCG (إيبيغالوكاتيشين-3-غالات)', percentage: '', effect: 'الكاتيشين الأكثر وفرةً والأعلى نشاطًا دوائيًا؛ مضاد للأكسدة والالتهاب ومُثبِّط لـ5α-ريداكتاز وأبحاث مضادة للسرطان' },
        { name: 'كاتيشينات أخرى: EC وEGC وECG', percentage: '', effect: 'ماسحات قوية للجذور الحرة؛ خصائص مضادة للميكروبات والفيروسات' },
        { name: 'كافيين (قلويد ميثيل زانثين)', percentage: '', effect: 'تنبيه الجهاز العصبي المركزي؛ تآزر مع EGCG لتوليد الحرارة وتقليل الزهم؛ تضييق الأوعية للعناية بمنطقة تحت العين' },
        { name: 'إل-ثيانين', percentage: '', effect: 'حمض أميني فريد يعبر الحاجز الدموي الدماغي؛ يُعزِّز الاسترخاء دون النعاس بتعديل GABA والغلوتامات' },
        { name: 'عفص مكثَّف', percentage: '', effect: 'قابضات طبيعية؛ تُضيِّق المسام مؤقتًا وتُقلِّل الدهنية بالتفاعل مع بروتينات الزهم' },
        { name: 'فيتامينات E وB2', percentage: '', effect: 'يُساعدان في الحفاظ على ترطيب حاجز البشرة وتجديد الخلايا' },
      ],
      moa: [
        { title: 'نشاط مضاد للأكسدة', detail: 'الكاتيشينات (خاصةً EGCG) تعمل كماسحات قوية للجذور الحرة مُخلِّبةً للمعادن الانتقالية ومُنشِّطةً لإنزيمات مضادات الأكسدة الداخلية.' },
        { title: 'تأثير مضاد للالتهاب', detail: 'يُثبِّط مسارات الالتهاب بتثبيط NF-κB، مُقلِّلًا iNOS وCOX-2 وTNF-α وIL-1β.' },
        { title: 'نشاط مضاد للميكروبات', detail: 'الكاتيشينات تُعطِّل أغشية خلايا البكتيريا وتُثبِّط تكاثر الفيروسات (إنفلونزا وHPV) بالتدخل في الامتصاص الفيروسي.' },
        { title: 'تنظيم الاستقلاب والتوليد الحراري', detail: 'الكافيين وEGCG يُثبِّطان تآزريًا إنزيم COMT مُطيلَين عمل النورإبينفرين ومُوسِّعَين إنفاق الطاقة وتأكسد الأحماض الدهنية.' },
        { title: 'التحكم في الزهم الموضعي', detail: 'EGCG يعمل كمُثبِّط طبيعي لـ5α-ريداكتاز مانعًا تحويل التستوستيرون إلى DHT ومُقلِّلًا مباشرةً إنتاج الزهم في الغدد الدهنية.' },
      ],
      uses: [
        'سينيكاتيشينات معتمدة من FDA (Veregen® 15% مرهم) لثآليل HPV التناسلية والشرجية الخارجية',
        'إدارة حب الشباب الشائع: تقليل الآفات الالتهابية وغير الالتهابية والتحكم في الزهم',
        'مكافحة الشيخوخة الجلدية والحماية من الأشعة فوق البنفسجية: تقليل الاحمرار الناجم عن UV ومنع تدهور الكولاجين',
        'العناية بمنطقة تحت العين: الكافيين يُضيِّق الأوعية الدموية مُقلِّلًا الانتفاخ والهالات الداكنة',
        'دعم صحة القلب والأوعية الدموية: خفض ضغط الدم الجهازي وتقليل أكسدة LDL',
        'دعم إدارة الوزن: تعزيز معدل الاستقلاب وتقليل دهون البطن',
        'تحسين الوظيفة المعرفية: تآزر الكافيين وإل-ثيانين يُحسِّن الانتباه المستمر والذاكرة العاملة',
        'دعم صحة الفم ومستوى السكر في الدم: تقليل الحمل البكتيري للدواء وتحسين حساسية الأنسولين',
      ],
      howToUse: [
        { method: 'تونر للوجه (موضعي)', instruction: 'نقيع الشاي الأخضر الطازج المبرَّد مُطبَّق مباشرةً بقطعة قطن كتونر مضاد للأكسدة المُلطِّف.' },
        { method: 'كمادة للعين', instruction: 'أكياس شاي الشاي الأخضر المستعملة المبرَّدة تُضغط على الجفن المغلق لمدة 10-15 دقيقة لتقليل الانتفاخ والهالات الداكنة.' },
        { method: 'نقيع فموي (شاي)', instruction: 'انقع 2-3 غرام من الأوراق الجافة في ماء ساخن 80-85°C (تجنّب الغليان لمنع مرارة العفص وتدهور الكاتيشين) لمدة 3-5 دقائق.' },
      ],
      suitableAgeGroups: [
        { group: 'الحمل والرضاعة', notes: 'يُقيَّد الكمية الفموية إلى أقصاها 1-2 كوب يوميًا. جرعات الكافيين العالية تعبر المشيمة؛ EGCG قد يتداخل مع امتصاص حمض الفوليك. الاستخدام التجميلي الموضعي يُشكِّل خطرًا جهازيًا ضئيلًا.' },
        { group: 'الأطفال', notes: 'الجرعات الفموية العالية من المكمّلات المحتوية على الكافيين غير موصى بها؛ الاعتدال في الكميات الغذائية الاعتيادية ضروري.' },
        { group: 'كبار السن', notes: 'آمن عمومًا؛ يقظة سريرية فيما يخص التفاعلات المحتملة مع علاجات القلب أو مضادات التخثر.' },
        { group: 'مرضى الأمراض المزمنة', notes: 'استخدام بحذر شديد عند مرضى القصور الكبدي أو الفشل الكلوي الحاد أو اضطرابات القلق: تجنّب المستخلصات الفموية المركَّزة.' },
      ],
      dosage: {
        standard: 'موضعي: مستخلص شاي أخضر موحَّد 2-3% يُطبَّق مرتين يوميًا. فموي: 2-3 أكواب شاي مخمَّر يوميًا (~250-750 مغ إجمالي كاتيشينات). ملاحظة: لا تأخذ مستخلص الشاي الأخضر المركَّز على معدة فارغة أبدًا.',
        forms: [
          { form: 'هلام/كريم موضعي', dose: 'مستخلص شاي أخضر موحَّد 2-3%، يُطبَّق مرتين يوميًا للاستخدام الجلدي.' },
          { form: 'شاي فموي مخمَّر', dose: '2-3 غرام أوراق لكل 200 مل عند 80-85°C؛ 2-3 أكواب يوميًا.' },
          { form: 'مكمّلات المستخلص', dose: 'يجب ألا تُؤخذ على معدة فارغة بسبب ارتفاع خطر السمية الكبدية.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة مستخلص فموي (سمية كبدية إديوسينكراتية): غثيان، قيء مستمر، ألم شرسوفي حاد، دوار، رجفان حاد، تسارع ضربات القلب، وارتفاع ملحوظ في ناقلات الأمين المصلية (ALT/AST).',
          'جرعة زائدة موضعية: احمرار، حكة موضعية، إحساس بالحرق، تقشر، أو التهاب جلدي تماسي تحسسي.',
        ],
        management: [
          'فموي: التوقف الفوري عن المكمّل، إنعاش السوائل بقوة، العلاج العرضي للشذوذات القلبية الوعائية، ومراقبة إلزامية لوظائف الكبد.',
          'موضعي: إيقاف التطبيق فورًا، ري بماء بارد، وتطبيق مُلطِّف هيبواليرجيني خالٍ من العطور.',
        ],
      },
      sideEffects: [
        'غثيان، اضطراب معدي، صداع، قلق، تسارع ضربات القلب',
        'نقص الحديد (العفص يُخلِّب الحديد غير الهيمي)',
        'إجهاد كبدي محتمل مع المستخلصات المركَّزة بجرعات عالية',
        'التهاب جلدي تماسي (موضعي، نادر)',
      ],
      contraindications: [
        'فرط الحساسية المعروف لـ Camellia sinensis أو مكوناتها',
        'قصور كبدي حاد أو مرض كبدي نشط',
        'اضطرابات نزيف حادة',
      ],
      drugInteractions: [
        'وارفارين: مستخلصات EGCG بجرعات عالية قد تُغيِّر استقلاب الوارفارين عبر مسارات CYP450، مُعقِّدةً معاملات INR',
        'نادولول (وبعض حاصرات بيتا): الشاي الأخضر يُثبِّط ناقل الدواء المعوي OATP1A2، مُقلِّلًا بشكل كبير توافر نادولول الحيوي',
        'منبهات الجهاز العصبي المركزي: الاستخدام المتزامن يُضاعف اضطرابات عدم انتظام ضربات القلب والقلق',
      ],
      storage: {
        forms: [
          { form: 'جميع الأشكال', instructions: 'يُخزَّن في حاويات محكمة الإغلاق غير شفافة في بيئة باردة جافة بعيدًا عن الشمس المباشرة والرطوبة لمنع الأكسدة التلقائية السريعة للبوليفينولات النشطة.' },
        ],
      },
    
      benefits: [
        { icon: 'shield', title: 'دفاع مضاد للأكسدة', desc: 'كاتيشينات EGCG تُمسح الجذور الحرة وتحمي البشرة من الإجهاد التأكسدي المستحث بالأشعة فوق البنفسجية والشيخوخة المبكرة.' },
        { icon: 'face', title: 'التحكم في حب الشباب والدهون', desc: 'يثبط إنزيم 5ألفا-ريداكتاز فيقلل إنتاج الدهون؛ قاتل للبكتيريا ضد Cutibacterium acnes.' },
        { icon: 'auto_fix_high', title: 'مضاد للشيخوخة', desc: 'يحمي بروتينات الكولاجين والإيلاستين بتثبيط إنزيمات MMP؛ يدعم شباب البشرة وحيويتها.' },
      ],
      botanicalFacts: { family: 'Theaceae', nativeRegion: 'الصين وجنوب شرق آسيا؛ يُزرع على نطاق واسع في شرق آسيا والهند وشرق أفريقيا', growthHabit: 'شجيرة دائمة الخضرة أو شجرة صغيرة بارتفاع 2-3 م عند الزراعة؛ تُحصد البراعم والأوراق الشابة', activeCompounds: 'EGCG، إيبيكاتيشين غالات، إيبيكاتيشين، كافيين (2-4%)، ثيانين', cultivationNotes: 'تُحصد الأوراق الصغيرة وتُبخَّر لتعطيل الأكسدة؛ تحتاج مناخاً رطباً وتربة حمضية.' },
      preparation: [
        { method: 'تونر موضعي', desc: 'الشاي الأخضر المخمَّر والمبرَّد يُطبَّق بقطنة على البشرة.', bestFor: 'الحماية اليومية من الأكسدة، البشرة الدهنية والمعرضة لحب الشباب' },
        { method: 'كمادات العيون', desc: 'أكياس الشاي المبردة على الجفنين المغلقين 10-15 دقيقة.', bestFor: 'تقليل الانتفاخ والهالات السوداء' },
        { method: 'الشاي الفموي', desc: 'يُتحضَّر عند 80-85 درجة مئوية لمدة 3-5 دقائق؛ 2-3 أكواب يومياً.', bestFor: 'مضاد للأكسدة جهازي، دعم التمثيل الغذائي' },
      ],
    },

    fenugreek: {
      name: 'الحلبة',
      shortDescription: 'منبّه فعّال لإدرار الحليب قادر على زيادة الإنتاج بنسبة تصل إلى 50٪ خلال 24-72 ساعة لدى الأمهات المرضعات.',
      description: 'الحلبة Trigonella foenum-graecum من أقدم الأعشاب الطبية المُدوَّنة في مصر القديمة والهند. بذورها تحتوي على الديوسجينين والتريغونيلين المُحفِّزَين لإنتاج حليب الثدي عبر مشابهتهما للإستروجين.',
      symptoms: ['قلة حليب الثدي', 'ضعف الإدرار', 'ضعف الشهية', 'ارتفاع السكر'],
      warnings: [
        'محظور تماماً أثناء الحمل في الجرعات العلاجية: يُحفِّز تقلصات الرحم ويُسبِّب خطر الإجهاض.',
        'مرضى السكري على أدوية: مراقبة دقيقة لسكر الدم ضرورية لتجنب نقص السكر الحاد.',
        'حساسية الفول السوداني أو الحمص: خطر تفاعل تحسسي متقاطع محتمل.',
      ],
      activeConstituents: [
        { name: '4-هيدروكسي إيزولويسين', percentage: '', effect: 'محفِّز مباشر لإفراز الأنسولين المعتمد على الغلوكوز؛ العامل الأساسي لخفض السكر في الدم' },
        { name: 'تريغونيلين (قلويد)', percentage: '', effect: 'خافض للسكر؛ وقائي للأعصاب؛ يُعزِّز تجديد خلايا بيتا البنكرياسية' },
        { name: 'ديوسجينين (صابونين ستيرويدي)', percentage: '', effect: 'نشاط فيتوإستروجيني؛ يُحفِّز إفراز البرولاكتين وهو الآلية الأساسية لتأثير مُدرّ الحليب' },
        { name: 'غالاكتومانان (ألياف قابلة للذوبان)', percentage: '', effect: 'هلام لزج يُبطِّئ إفراغ المعدة؛ يُقلِّل امتصاص الغلوكوز والكوليسترول بعد الوجبات' },
        { name: 'سكريات مخاطية', percentage: '', effect: 'تُلطِّف الغشاء المخاطي المعدي؛ تأثير حامٍ ومُسكِّن للتهيج' },
      ],
      moa: [
        { title: 'تأثير مُدرّ للحليب', detail: 'الديوسجينين يرتبط بمستقبلات الإستروجين ويُحفِّز إفراز البرولاكتين من الغدة الثديية مما يزيد إنتاج حليب الثدي بنسبة تصل إلى 50٪.' },
        { title: 'خفض سكر الدم', detail: '4-هيدروكسي إيزولويسين يُقوِّي مباشرةً إفراز الأنسولين المحفوز بالغلوكوز من خلايا بيتا البنكرياسية دون التأثير على الإفراز القاعدي.' },
        { title: 'خفض الكوليسترول', detail: 'الغالاكتومانان يُكوِّن هلاماً لزجاً في الأمعاء مما يُقلِّل تكوين ميسيلات الكوليسترول وإعادة امتصاص الأحماض الصفراوية.' },
      ],
      uses: [
        'زيادة إنتاج حليب الثدي لدى الأمهات المرضعات (تأثير خلال 24-72 ساعة)',
        'مساعد في علاج السكري من النوع الثاني وخفض سكر الدم',
        'خفض الكوليسترول الكلي وLDL',
        'تخفيف الشكاوى الهضمية والتهاب المعدة',
        'تخفيف آلام الدورة الشهرية',
      ],
      howToUse: [
        { method: 'لإدرار الحليب', instruction: 'انقعي ملعقة إلى ملعقتين من البذور الكاملة في ماء بارد طوال الليل ثم اشربي الماء والبذور في الصباح قبل الوجبة.' },
        { method: 'كبسولات موحَّدة', instruction: '580 مغ كبسولات 3 مرات يومياً مع الوجبات. التأثير على الحليب يظهر خلال 24-72 ساعة من الاستخدام المنتظم.' },
        { method: 'مسحوق للسكري', instruction: 'أضيفي 1-2 ملعقة صغيرة مسحوق بذور منزوعة الدهن إلى الطعام أو الماء مع الوجبات الرئيسية.' },
      ],
      suitableAgeGroups: [
        { group: 'الأمهات المرضعات', notes: 'آمن وفعّال؛ التأثير يظهر خلال 24-72 ساعة من الاستخدام المنتظم.' },
        { group: 'الحوامل', notes: 'محظور تماماً في الجرعات العلاجية: خطر تحفيز تقلصات الرحم والإجهاض.' },
        { group: 'البالغون', notes: 'آمن للاستخدام قصير الأمد ضمن الجرعات الموصى بها.' },
        { group: 'مرضى السكري', notes: 'استخدام تحت إشراف طبي مع مراقبة مستمرة لسكر الدم.' },
      ],
      dosage: {
        standard: 'مُدرّ للحليب: ملعقة إلى ملعقتين بذور مُنقَّعة يومياً أو 580 مغ كبسولات 3 مرات يومياً. السكري: 5-50 غرام بذور يومياً في جرعات مقسَّمة مع الوجبات.',
        forms: [
          { form: 'بذور مُنقَّعة', dose: 'ملعقة إلى ملعقتين يومياً منقوعة بالماء البارد ليلاً.' },
          { form: 'كبسولات موحَّدة', dose: '580 مغ 3 مرات يومياً مع الوجبات.' },
          { form: 'مسحوق البذور (للسكري)', dose: '5-50 غرام يومياً مقسَّمة على الوجبات الرئيسية الثلاث.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة مفرطة فموية: نقص حاد في سكر الدم (خاصةً مع أدوية السكري)، إسهال مائي، غثيان وقيء، وانبعاث رائحة شراب القيقب من العرق والبول.',
          'تفاعل تحسسي: طفح جلدي، شرى، وذمة وجه عند الأفراد الحساسين لعائلة البقوليات.',
        ],
        management: [
          'نقص السكر: تناول سكر سريع الامتصاص فوراً (عصير أو سكر)، ومتابعة طبية عند الاشتباه.',
          'إيقاف الاستخدام وعلاج أعراض الجهاز الهضمي بالإماهة الكافية.',
        ],
      },
      sideEffects: [
        'رائحة شراب القيقب في البول والعرق وحليب الثدي (غير ضار ومؤقت)',
        'انتفاخ وإسهال عند الجرعات العالية',
        'احتمال نقص السكر عند التزامن مع أدوية السكري',
      ],
      contraindications: [
        'الحمل: محظور تماماً في الجرعات العلاجية',
        'حساسية الفول السوداني أو الحمص: خطر تفاعل متقاطع',
        'ما قبل الجراحة: وقفه قبل أسبوعين لخصائصه المخففة للدم',
      ],
      drugInteractions: [
        'أدوية السكري (أنسولين/ميتفورمين): تأثير إضافي لخفض السكر قد يُسبِّب نقصاً حاداً',
        'وارفارين ومضادات التخثر: قد يُعزِّز تأثيرها المضاد للتخثر',
      ],
      storage: {
        forms: [
          { form: 'البذور والمسحوق', instructions: 'يُخزَّن في حاوية محكمة الإغلاق في مكان بارد جاف بعيداً عن الرطوبة والحرارة.' },
        ],
      },
    
      benefits: [
        { icon: 'child_care', title: 'تعزيز إنتاج الحليب', desc: 'يزيد من إفراز البرولاكتين والأوكسيتوسين؛ تُشير بعض الدراسات إلى زيادة تصل إلى 400 مل/يوم في أيام النفاس الأولى.' },
        { icon: 'favorite', title: 'الدعم الهرموني', desc: 'الديوسجينين يحاكي الإستروجين مما يدعم تطور الغدة الثديية ومسارات تخليق الحليب.' },
        { icon: 'nutrition', title: 'قيمة غذائية عالية', desc: 'يُعوِّض الحديد والمغنيسيوم والبروتين المستنزف خلال الرضاعة الطبيعية، مما يدعم تعافي الأم.' },
      ],
      botanicalFacts: { family: 'Fabaceae (Leguminosae)', nativeRegion: 'منطقة البحر المتوسط وجنوب آسيا وغرب آسيا؛ يُزرع على نطاق واسع في الهند ومصر والشرق الأوسط', growthHabit: 'عشب حولي بارتفاع 30-60 سم بأوراق ثلاثية الوريقات وأزهار بيضاء/صفراء صغيرة؛ البذور هي الجزء الدوائي', activeCompounds: 'الديوسجينين، البذرة الحلبية (مخاطيات)، فلافونويدات، قلويدات (تريجونيلين)', cultivationNotes: 'يُزرع على نطاق واسع؛ ينمو في التربة الجافة جيدة التصريف مع أشعة شمس كاملة.' },
      preparation: [
        { method: 'كبسولات/أقراص', desc: '2-3 كبسولات (500-600 مغ) ثلاث إلى أربع مرات يومياً؛ الجرعة الأكثر ملاءمة واتساقاً.', bestFor: 'دعم الرضاعة، الجرعة العلاجية المتسقة' },
        { method: 'شاي البذور', desc: 'انقع ملعقة صغيرة من البذور في ماء مغلٍ 15 دقيقة؛ تناول 2-3 أكواب يومياً.', bestFor: 'الرضاعة، الدعم الهضمي' },
        { method: 'الاستخدام الطهوي', desc: 'تُضاف البذور للطبخ (كما في المأكولات المصرية والهندية) للجرعة الغذائية اليومية.', bestFor: 'دعم الرضاعة التدريجي والغذاء الوظيفي' },
      ],
    },

    moringa: {
      name: 'المورينغا',
      shortDescription: 'تُعرف بـ"شجرة المعجزة"، أوراقها تدعم إنتاج الحليب وتُحسِّن التغذية. ⚠️ الأوراق فقط آمنة؛ الجذور والنباك والأزهار سامة.',
      description: 'المورينغا أولييفيرا شجرة استوائية غنية بالقيمة الغذائية. أوراقها تحتوي على مستويات استثنائية من البروتين والحديد والكالسيوم وفيتامين C. إيزوثيوسيانات الأوراق تُحفِّز إدرار الحليب. الجذور والنباك والأزهار تحتوي على السبيروكين وهو قلويد خطير.',
      symptoms: ['قلة حليب الثدي', 'نقص التغذية', 'ضعف الطاقة', 'ارتفاع السكر'],
      warnings: [
        'خطر حرج: الجذور والنباك والأزهار تحتوي على السبيروكين قلويد عصبي سام؛ لا تُستخدم أبداً.',
        'قد تُخفِّض ضغط الدم: حذر شديد عند مرضى انخفاض ضغط الدم أو مستخدمي أدويته.',
        'الحامل: الكميات الغذائية من الأوراق آمنة؛ المستخلصات المركَّزة تستوجب استشارة طبية.',
      ],
      activeConstituents: [
        { name: 'إيزوثيوسيانات (مشتقات الغلوكوزينولات)', percentage: '', effect: 'مضادة للالتهاب ومضادة للسرطان؛ تعديل استقلابي' },
        { name: 'كيرستين وكامبيفيرول (بيوفلافونويدات)', percentage: '', effect: 'مضادات أكسدة قوية؛ مضادة للالتهاب؛ حماية قلبية وعائية' },
        { name: 'زياتين (سيتوكينين نباتي)', percentage: '', effect: 'محفِّز تكاثر الخلايا؛ خصائص مضادة للشيخوخة' },
        { name: 'ليكتين المورينغا أولييفيرا (MOL)', percentage: '', effect: 'مُعدِّل للمناعة؛ نشاط مُدرّ للحليب' },
        { name: 'β-سيتوستيرول', percentage: '', effect: 'خافض للكوليسترول؛ مضاد للالتهاب' },
        { name: 'فيتامينات ومعادن مركَّزة', percentage: '', effect: 'فيتامينات A وC وE ومجموعة B؛ كالسيوم وحديد وبوتاسيوم بتركيزات استثنائية' },
      ],
      moa: [
        { title: 'تأثير مُدرّ للحليب', detail: 'MOL والفيتوستيرولات تُحفِّز إفراز البرولاكتين؛ المركبات الإستروجينية تُعزِّز نشاط الغدة الثديية.' },
        { title: 'مضاد للالتهاب', detail: 'الإيزوثيوسيانات تُثبِّط مسار NF-κB؛ الكيرستين يحجب COX-2 مُقلِّلاً الوسائط الالتهابية.' },
        { title: 'مقوٍّ غذائي', detail: 'كثافة المغذيات الدقيقة الاستثنائية تُعالج نقوصاً متعددة في آنٍ واحد مُعززةً إنتاج الطاقة وتجديد الأنسجة.' },
      ],
      uses: [
        'دعم الرضاعة الطبيعية وزيادة إنتاج الحليب',
        'التكملة الغذائية العامة وعلاج نقص المغذيات',
        'مكافحة الإرهاق وفقر الدم',
        'دعم المناعة وتعديلها',
        'دعم ضبط سكر الدم',
      ],
      howToUse: [
        { method: 'مسحوق الأوراق', instruction: 'أضيفي ملعقة صغيرة من مسحوق المورينغا إلى عصير أو ماء أو طعام يومياً. ابدئي بكمية صغيرة وزيديها تدريجياً.' },
        { method: 'شاي الأوراق', instruction: 'انقعي غرام واحد من الأوراق المجففة في ماء ساخن 5-10 دقائق. اشربي كوباً يومياً.' },
        { method: 'كبسولات موحَّدة', instruction: '400-800 مغ يومياً مع الوجبة. ابدئي بالجرعة الأدنى لتقييم التحمل.' },
      ],
      suitableAgeGroups: [
        { group: 'الأمهات المرضعات', notes: 'آمن وفعّال لدعم الرضاعة. الأوراق فقط.' },
        { group: 'الحوامل', notes: 'الكميات الغذائية من الأوراق آمنة؛ تجنّبي المستخلصات المركَّزة وجذور النبات.' },
        { group: 'البالغون', notes: 'آمن جداً للاستخدام اليومي طويل الأمد من الأوراق أو المسحوق.' },
        { group: 'مرضى انخفاض ضغط الدم', notes: 'مراقبة ضغط الدم عند الاستخدام لاحتمال التأثير الخافض.' },
      ],
      dosage: {
        standard: 'مسحوق الأوراق: 1-2 ملعقة صغيرة (2-4 غرام) يومياً. كبسولات: 400-800 مغ يومياً. ابدئي بجرعة صغيرة وزيديها تدريجياً.',
        forms: [
          { form: 'مسحوق الأوراق', dose: '1-2 ملعقة صغيرة (2-4 غرام) يومياً مضافة للطعام أو الشراب.' },
          { form: 'كبسولات موحَّدة', dose: '400-800 مغ يومياً مع الوجبة.' },
          { form: 'شاي الأوراق', dose: '1 غرام أوراق مجففة لكل كوب، مرة إلى مرتين يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة فموية من الأوراق: عدم راحة هضمي خفيف، غثيان، إسهال.',
          'جذور أو نباك أو أزهار: سمية عصبية خطيرة من السبيروكين؛ تستوجب تدخلاً طبياً طارئاً فورياً.',
        ],
        management: [
          'جرعة زائدة من الأوراق: تقليل الجرعة وعلاج أعراض الجهاز الهضمي.',
          'ابتلاع جذور/نباك/أزهار: تدخل طبي طارئ فوري.',
        ],
      },
      sideEffects: [
        'عدم راحة هضمي خفيف عند الجرعات العالية',
        'احتمال انخفاض ضغط الدم عند الاستخدام المفرط',
      ],
      contraindications: [
        'الجذور والنباك والأزهار: محظورة تماماً لجميع الفئات',
        'انخفاض ضغط الدم الشديد: حذر عند الاستخدام',
      ],
      drugInteractions: [
        'أدوية ضغط الدم: قد يُعزِّز تأثيرها الخافض لضغط الدم',
        'أدوية السكري: تأثير إضافي محتمل على سكر الدم',
      ],
      storage: {
        forms: [
          { form: 'المسحوق', instructions: 'يُخزَّن في حاوية محكمة الإغلاق في مكان بارد جاف بعيداً عن الشمس والرطوبة.' },
        ],
      },
    
      benefits: [
        { icon: 'child_care', title: 'تعزيز حجم الحليب', desc: 'يزيد البرولاكتين المصلي ويحفز الخلايا الحويصلية الثديية؛ تُشير الدراسات إلى زيادة تصل إلى 400 مل/يوم في مرحلة النفاس المبكرة.' },
        { icon: 'nutrition', title: 'تغذية استثنائية', desc: 'غني بالبروتين والحديد والكالسيوم وفيتامينات A/B/C/E؛ يُعيد بناء مخازن العناصر الغذائية المستنزفة خلال الرضاعة.' },
        { icon: 'healing', title: 'مضاد للالتهابات', desc: 'الآيزوثيوسيانات والفلافونويدات تثبّط مسارات الالتهاب دون آثار جانبية دوائية، داعمةً تعافي الأم بعد الولادة.' },
      ],
      botanicalFacts: { family: 'Moringaceae', nativeRegion: 'منطقة جبال الهيمالايا الغربية في شمال الهند؛ يُزرع على نطاق واسع في المناطق المدارية', growthHabit: 'شجرة سريعة النمو تصل إلى 10-12 م؛ مقاومة للجفاف؛ أوراق مركبة وأزهار بيضاء وقرون بذرية طويلة', activeCompounds: 'إيزوثيوسيانات، مورينغين، كلوروجينيك أسيد، فيتامين C، كالسيوم، حديد', cultivationNotes: 'شجرة صاروخية سريعة النمو تتحمل ظروف الجفاف؛ تُقطف الأوراق على مدار العام.' },
      preparation: [
        { method: 'مسحوق الأوراق في الطعام', desc: 'اخلط ملعقة صغيرة إلى ملعقة كبيرة من مسحوق المورينغا في العصائر أو الزبادي أو الحساء.', bestFor: 'دعم الرضاعة اليومي، المكملات الغذائية' },
        { method: 'الكبسولات', desc: '1-2 كبسولة مرتين يومياً لجرعة متسقة ومضبوطة.', bestFor: 'دعم الرضاعة المريح بجرعة دقيقة' },
        { method: 'الأوراق الطازجة المطبوخة', desc: 'تُطبَّخ الأوراق كالسبانخ أو تُضاف إلى الحساء والطبخات.', bestFor: 'الجرعة الغذائية الطبيعية في الطعام المدعوم' },
      ],
    },

    'fenugreek-breastfeeding': {
      name: 'الحلبة',
      shortDescription: 'منبّه فعّال لإدرار الحليب قادر على زيادة الإنتاج بنسبة تصل إلى 50٪ خلال 24-72 ساعة لدى الأمهات المرضعات.',
      description: 'الحلبة Trigonella foenum-graecum من أقدم الأعشاب الطبية المُدوَّنة في مصر القديمة والهند. بذورها تحتوي على الديوسجينين والتريغونيلين المُحفِّزَين لإنتاج حليب الثدي عبر مشابهتهما للإستروجين.',
      history: 'استُخدمت الحلبة في الطب المصري والهندي والشرق أوسطي والصيني منذ آلاف السنين. استخدمها المصريون القدماء في دعم الولادة والرضاعة الطبيعية. وهي ركيزة أساسية في الطب الأيورفيدي وتُعرف بـ"ميثي" في المطبخ وعلم الأعشاب في جنوب آسيا.',
      symptoms: ['قلة حليب الثدي', 'ضعف الإدرار', 'ضعف الشهية', 'ارتفاع السكر'],
      warnings: [
        'محظور تماماً أثناء الحمل في الجرعات العلاجية: يُحفِّز تقلصات الرحم ويُسبِّب خطر الإجهاض.',
        'مرضى السكري على أدوية: مراقبة دقيقة لسكر الدم ضرورية لتجنب نقص السكر الحاد.',
        'حساسية الفول السوداني أو الحمص: خطر تفاعل تحسسي متقاطع محتمل.',
      ],
      activeConstituents: [
        { name: '4-هيدروكسي إيزولويسين', percentage: '0.09%', effect: 'محفِّز مباشر لإفراز الأنسولين المعتمد على الغلوكوز؛ العامل الأساسي لخفض السكر في الدم' },
        { name: 'صابونينات ستيرويدية (ديوسجينين، يامورجينين، تيجوجينين)', percentage: '0.6-1.7%', effect: 'تأثير خافض للكوليسترول؛ الديوسجينين يحاكي الإستروجين وقد يُعزِّز نمو الثدي' },
        { name: 'ألياف غالاكتومانان', percentage: '20-30%', effect: 'ألياف قابلة للذوبان: تخفض سكر الدم والكوليسترول' },
        { name: 'قلويدات: تريغونيلين، جنتيانين، كولين', percentage: '0.5%', effect: 'تأثيرات مضادة للسكري وواقية للأعصاب' },
        { name: 'فلافونويدات / بوليفينولات: كيرستين، أوريينتين، فيتيكسين', percentage: '', effect: 'نشاط مضاد للأكسدة والالتهاب' },
        { name: 'بروتينات (غنية باللايسين والتريبتوفان)', percentage: '20-30%', effect: 'ضرورية لإنتاج بروتين الحليب' },
        { name: 'زيوت ثابتة (أحماض دهنية متعددة غير مشبعة)', percentage: '5-10%', effect: 'غنية بالأحماض الدهنية متعددة غير المشبعة؛ دعم غذائي' },
        { name: 'معادن وفيتامينات (حديد، كالسيوم، نياسين)', percentage: '', effect: 'تدعم تعافي الأم وترفع كثافة المغذيات في الحليب' },
        { name: 'سوتولون (مكوّن متطاير)', percentage: '', effect: 'مسؤول عن رائحة شراب القيقب المميزة في العرق وحليب الثدي' },
      ],
      moa: [
        { title: 'التحفيز الهرموني', detail: 'يزيد إفراز البرولاكتين والأوكسيتوسين مما يعزز إنتاج الحليب وإدراره.' },
        { title: 'التأثير الفيتوإستروجيني', detail: 'الديوسجينين يحاكي الإستروجين وقد يُعزِّز نمو الثدي ومسارات تخليق الحليب.' },
        { title: 'تحفيز الغدد العرقية', detail: 'قد يزيد حجم الحليب لأن الغدد الثديية هي غدد عرقية معدّلة: خصائص الحلبة المحفِّزة للعرق قد تُترجَم إلى زيادة الإدرار.' },
        { title: 'تعديل محور الأنسولين', detail: 'يؤثر على محور الأنسولين/GH/IGF-1 ويُعزِّز جينات تخليق الحليب.' },
      ],
      uses: [
        'تعزيز إنتاج حليب الثدي لدى الأمهات المرضعات: من أشهر مُدرّات الحليب عالمياً',
        'البذور تحفِّز سلائف الهرمونات مما يؤدي إلى تعزيز إنتاج الحليب',
        'الدعم الغذائي أثناء الرضاعة (حديد، كالسيوم، فيتامينات A وB)',
      ],
      howToUse: [
        { method: 'الكبسولات (الأكثر شيوعاً)', instruction: 'خذي 2-3 كبسولات (580-610 مغ كل منها) ثلاث إلى أربع مرات يومياً.' },
        { method: 'الشاي', instruction: 'انقعي ملعقة صغيرة من بذور الحلبة في ماء مغلٍ لمدة 15 دقيقة على الأقل، 2-3 مرات يومياً.' },
        { method: 'المسحوق / البذور', instruction: 'تناولي ½ إلى 1 ملعقة صغيرة من المسحوق أو البذور حتى 3 مرات يومياً، مخلوطة في ماء أو عصير أو طعام.' },
        { method: 'الصبغة', instruction: 'خذي 1-2 مل ثلاث مرات يومياً (تحققي من إرشادات العبوة للتركيز المحدد).' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون (18-65+ عاماً)', notes: 'المستخدمون الأساسيون لدعم الرضاعة وإدارة السكري.' },
        { group: 'الرجال الأكبر سناً (40+ عاماً)', notes: 'يُستخدم لمعالجة انخفاض مستويات التستوستيرون.' },
        { group: 'النساء المرضعات', notes: 'يُستخدم من قِبل النساء المرضعات لتعزيز إنتاج الحليب.' },
        { group: 'الأطفال (كميات صغيرة)', notes: 'يُعتبر آمناً بكميات الغذاء. أدلة غير كافية للكميات الكبيرة.' },
      ],
      dosage: {
        standard: 'جرعة الرضاعة النموذجية: 3,500-7,300 مغ يومياً في جرعات مقسَّمة.',
        forms: [
          { form: 'الكبسولات', dose: '2-3 كبسولات (حوالي 500-600 مغ كل منها) ثلاث مرات يومياً (إجمالي 6-12 كبسولة/يوم).' },
          { form: 'المسحوق', dose: '2-3 ملاعق صغيرة يومياً (إجمالي 1-6 غرام بذور مطحونة يومياً).' },
          { form: 'الشاي', dose: '1-3 أكواب يومياً من نقيع 15 دقيقة.' },
        ],
      },
      overdose: {
        symptoms: [
          'مشاكل في الجهاز الهضمي: غثيان وإسهال وغازات.',
          'نقص سكر الدم: يمكن أن يخفض مستويات السكر في الدم بشكل ملحوظ.',
          'تفاعلات تحسسية: تفاعل متقاطع عند الأشخاص الحساسين للحمص والفول السوداني والبقوليات.',
          'التأثير على الرضيع: اضطراب في الجهاز الهضمي أو سهولة التهيج أو رائحة شراب القيقب في البول/العرق عند تناول الأم جرعات عالية.',
        ],
        management: [
          'أوقفي فوراً جميع مكملات الحلبة.',
          'راقبي علامات انخفاض سكر الدم (دوار، غثيان، رعشة).',
          'تأكدي من تناول كميات كافية من السوائل، خاصةً إذا كان الإسهال موجوداً.',
          'استشيري مقدم رعاية صحية إذا كانت الأعراض شديدة، خاصةً للتفاعلات التحسسية.',
        ],
      },
      sideEffects: [
        'اضطراب في الجهاز الهضمي (حتى 45٪ من المستخدمين): إسهال، براز رخو، غثيان، قيء، غازات، ألم في البطن',
        'رائحة شراب القيقب في العرق والبول وحليب الثدي وأحياناً في الطفل',
        'حساسية الطفل: احتمال التهيج أو اضطراب البطن أو البراز الأخضر المائي عند الرضع',
        'انخفاض سكر الدم (مراقبة دقيقة لمرضى السكري)',
        'تفاعلات تحسسية/تفاقم الربو خاصةً مع حساسية البقوليات',
      ],
      contraindications: [
        'الحمل: محظور تماماً في الجرعات العلاجية؛ له تأثيرات أوكسيتوسية/مُحفِّزة للرحم قد تسبب الإجهاض أو الولادة المبكرة',
        'الربو: قد يُفاقم أعراض الربو',
        'السكري/نقص السكر: يجب مراقبة سكر الدم بدقة؛ قد تحتاج جرعات أدوية السكري إلى تعديل',
        'خلل وظيفة الغدة الدرقية: قد يتداخل مع وظيفة هرمون الغدة الدرقية',
        'حساسية البقوليات والفول السوداني والحمص: تفاعل متقاطع محتمل',
      ],
      drugInteractions: [
        'وارفارين ومضادات التخثر: قد يزيد خطر النزيف بسبب مشتقات الكومارين',
        'أدوية السكري المضادة (ميتفورمين، أنسولين): يُعزِّز تأثيرات خفض السكر',
        'مضادات الاكتئاب: تفاعلات محتملة مُبلَّغ عنها',
      ],
      storage: {
        forms: [
          { form: 'البذور الكاملة والمسحوق', instructions: 'يُخزَّن في حاوية محكمة الإغلاق في بيئة جافة مظلمة وباردة لمنع التقادم وفقدان الخصائص العلاجية.' },
          { form: 'الشاي المُحضَّر', instructions: 'يُخزَّن في الثلاجة لبضعة أيام (مشابه للشاي المثلج).' },
          { form: 'الكبسولات والمكملات', instructions: 'يُخزَّن في درجة حرارة الغرفة (20-22°م). تجنبي الرطوبة الزائدة وتقلبات درجات الحرارة. بعد الفتح، استهلكيه خلال 12 شهراً. مدة الصلاحية 18-24 شهراً عند التخزين الصحيح.' },
        ],
      },
      benefits: [
        { icon: 'child_care', title: 'تعزيز إنتاج الحليب', desc: 'يزيد من إفراز البرولاكتين والأوكسيتوسين؛ تُشير بعض الدراسات إلى زيادة تصل إلى 400 مل/يوم في أيام النفاس الأولى.' },
        { icon: 'favorite', title: 'الدعم الهرموني', desc: 'الديوسجينين يحاكي الإستروجين مما يدعم تطور الغدة الثديية ومسارات تخليق الحليب.' },
        { icon: 'nutrition', title: 'قيمة غذائية عالية', desc: 'يُوفِّر الحديد والكالسيوم وفيتامينات A وB لإعادة بناء مخازن المغذيات المستنزفة خلال الرضاعة.' },
      ],
      botanicalFacts: {
        family: 'الفصيلة البقولية (Fabaceae)',
        nativeRegion: 'منطقة البحر المتوسط وجنوب آسيا وغرب آسيا؛ يُزرع على نطاق واسع في الهند ومصر والشرق الأوسط',
        growthHabit: 'عشب حولي بارتفاع 30-60 سم بأوراق ثلاثية الوريقات وأزهار بيضاء/صفراء صغيرة؛ البذور تُجمَع من القرون',
        activeCompounds: 'الديوسجينين، الغالاكتومانان، 4-هيدروكسي إيزولويسين، تريغونيلين، سوتولون، كيرستين',
        cultivationNotes: 'البذور هي الجزء الطبي؛ تُجمَع عند جفاف القرون؛ تُستخدم على نطاق واسع كتابل طهوي في جنوب آسيا والشرق الأوسط',
      },
      preparation: [
        { method: 'الكبسولات/الأقراص', desc: '2-3 كبسولات (500-600 مغ) ثلاث إلى أربع مرات يومياً: الجرعة الأكثر ملاءمة واتساقاً.', bestFor: 'دعم الرضاعة، الجرعة العلاجية المتسقة' },
        { method: 'شاي البذور', desc: 'انقعي ملعقة صغيرة من البذور في ماء مغلٍ لمدة 15 دقيقة؛ تناولي 2-3 أكواب يومياً.', bestFor: 'الرضاعة، الدعم الهضمي' },
        { method: 'الاستخدام الطهوي', desc: 'أضيفي البذور إلى الطعام أو رشّي المسحوق في العصائر أو الزبادي أو الحساء.', bestFor: 'المكملات الغذائية، دعم الرضاعة التدريجي' },
      ],
    },

    'fennel-breastfeeding': {
      name: 'الشمر',
      shortDescription: 'مُدرّ تقليدي للحليب يحتوي على الأنيثول: مركب فيتوإستروجيني قد يرفع مستويات البرولاكتين ويُحسِّن حجم الحليب ويُهدِّئ مغص الرضيع عبر الحليب.',
      description: 'بذور الشمر تحتوي على ترانس-أنيثول (50-80٪ من الزيت الأساسي)، وهو فيتوإستروجين يحاكي الإستروجين لدعم تطور الغدة الثديية وقد يحجب الدوبامين لرفع مستويات البرولاكتين. يُرخِّي الشمر العضلات الملساء لتحسين منعكس الإدرار، ويُوفِّر تأثيراً طارداً للغازات قد يُهدِّئ مغص الرضيع عندما تنتقل المركبات عبر حليب الثدي.',
      history: 'استُخدم الشمر منذ العصور القديمة في ثقافات البحر المتوسط للصحة الهضمية والرضاعة والدعم الحيضي. استخدمه الرومان القدماء لخصائصه العطرية والطبية. في الطب التقليدي عبر أوروبا والشرق الأوسط وجنوب آسيا، يُعدّ شاي الشمر مُدرّاً شائعاً للحليب يُقدَّم للأمهات الجدد.',
      symptoms: ['قلة الحليب', 'مغص الرضيع', 'انتفاخ', 'آلام الدورة الشهرية', 'عسر الهضم'],
      warnings: [
        'محظور تماماً أثناء الحمل في الجرعات العلاجية: تأثيرات مُدرِّة للطمث وقد يسبب تقلصات الرحم.',
        'تجنبي زيت الشمر المركَّز أثناء الرضاعة: يمكن أن يكون ساماً للرضع.',
        'لا يُستخدم في السرطانات الهرمونية الحساسة (نشاط يُشابه الإستروجين).',
      ],
      activeConstituents: [
        { name: 'ترانس-أنيثول (زيت متطاير)', percentage: '50-80%', effect: 'فيتوإستروجين يحاكي الإستروجين؛ يدعم تطور الغدة الثديية؛ قد يحجب الدوبامين لرفع البرولاكتين؛ خصائص مضادة للتشنج وطاردة للغازات' },
        { name: 'فنشون (زيت متطاير)', percentage: 'حتى 11.68%', effect: 'يُساهِم في الطعم المر والتأثيرات الهضمية/المضادة للتشنج' },
        { name: 'ليمونين، α-بينين، ميثيل شافيكول', percentage: 'ثانوي', effect: 'دعم مضاد للميكروبات وعطري' },
        { name: 'حمض الروزمارينيك، مشتقات حمض الكافيويل كينيك (فينولية)', percentage: '', effect: 'نشاط مضاد للأكسدة والالتهاب' },
        { name: 'فلافونويدات: إيريوديكتيول-7-روتينوسايد، كيرستين-3-روتينوسايد', percentage: '', effect: 'دعم مضاد للأكسدة والالتهاب' },
        { name: 'حمض البتروسيلينيك، حمض البالميتيك (أحماض دهنية)', percentage: '', effect: 'دعم غذائي من الأحماض الدهنية' },
        { name: 'كالسيوم، بوتاسيوم، فيتامين C', percentage: '', effect: 'معادن وفيتامينات غذائية' },
      ],
      moa: [
        { title: 'فيتوإستروجين (الأنيثول)', detail: 'بذور الشمر تحتوي على الأنيثول الذي يحاكي الإستروجين ويدعم تطور الغدة الثديية لإنتاج الحليب.' },
        { title: 'تثبيط الدوبامين', detail: 'الأنيثول قد يحجب الدوبامين الذي يكبح إفراز البرولاكتين عادةً: مما يؤدي إلى مستويات برولاكتين أعلى وزيادة إنتاج الحليب.' },
        { title: 'تعزيز البرولاكتين وحجم الحليب', detail: 'قد يرفع مستويات البرولاكتين وحجم حليب الثدي الإجمالي من خلال التعديل الهرموني.' },
        { title: 'تحسين منعكس الإدرار', detail: 'يُرخِّي العضلات الملساء مما يساعد الحليب على التدفق بسهولة أكبر أثناء الرضاعة.' },
        { title: 'تحسين جودة الحليب', detail: 'قد يرفع قليلاً محتوى الدهون في حليب الثدي في بعض الدراسات.' },
      ],
      uses: [
        'دعم إنتاج الحليب: يُعتقد أنه يزيد حجم الحليب ويُحسِّن محتوى الدهون',
        'تخفيف مغص الرضيع: ينتقل الأنيثول عبر حليب الثدي مما يُساعد على تهدئة الجهاز الهضمي للطفل وتقليل أعراض المغص',
        'هضم الأم: يساعد الأمهات الجدد في التخلص من الانتفاخ والإمساك',
        'تعزيز غذائي: يُوفِّر فيتامين C وفيتامين A والحديد',
      ],
      howToUse: [
        { method: 'شاي الشمر (الأكثر شيوعاً)', instruction: 'انقعي 1-3 ملاعق صغيرة من بذور الشمر المسحوقة في 8 أوقيات من الماء المغلي لمدة 10-20 دقيقة. غطِّي الكوب أثناء النقع لمنع تطاير الزيوت المفيدة. اشربي 1-3 أكواب يومياً.' },
        { method: 'تناول البذور', instruction: 'امضغي ملعقة صغيرة من بذور الشمر بعد الوجبات، حتى 3 مرات يومياً، لمساعدة الهضم ودعم الرضاعة.' },
        { method: 'الاستخدامات الطهوية', instruction: 'أضيفي البذور المسحوقة إلى الحساء أو السلطة أو الكاري أو الخضروات المشوية.' },
        { method: 'مزيج الرضاعة', instruction: 'اختاري شايات تجمع الشمر مع أعشاب أخرى كالحلبة أو القراص لدعم الرضاعة التآزري.' },
      ],
      suitableAgeGroups: [
        { group: 'الرضع (2-12 أسبوعاً)', notes: 'يُستخدم زيت بذور الشمر لتخفيف المغص: تحت إشراف طبي فقط.' },
        { group: 'المراهقون والشباب (13-21 عاماً)', notes: 'يُستخدم لعسر الطمث الأولي.' },
        { group: 'البالغات: النساء في سن الإنجاب', notes: 'يُستخدم لأعراض ما قبل الحيض والصحة الهضمية العامة.' },
        { group: 'النساء في سن اليأس (40-60+)', notes: 'يُستخدم لتقليل الهبّات الساخنة وتحسين جودة النوم.' },
        { group: 'النساء المرضعات', notes: 'مجموعة الاستخدام الأساسية؛ 1-3 أكواب شاي أو 500-1,000 مغ كبسولات 2-3 مرات يومياً.' },
      ],
      dosage: {
        standard: 'الشاي/البذور: 1-3 أكواب شاي يومياً أو ملعقة صغيرة من البذور 3 مرات يومياً. الكبسولات: 500-1,000 مغ 2-3 مرات يومياً.',
        forms: [
          { form: 'شاي بذور الشمر', dose: '1-3 أكواب يومياً من نقيع 10-20 دقيقة من 1-3 ملاعق صغيرة بذور مسحوقة.' },
          { form: 'الكبسولات (مسحوق البذور)', dose: '500-1,000 مغ، 2-3 مرات يومياً.' },
          { form: 'البذور الكاملة', dose: 'ملعقة صغيرة تُمضغ بعد الوجبات، حتى 3 مرات يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'حساسية الرضيع: نادرة، لكن الاستهلاك الأموي الزائد قد يؤدي إلى خمول الرضيع أو إرهاقه أو علامات تسمم من الأنيثول.',
          'تفاعلات تحسسية: تفاعل متقاطع مع الكرفس والجزر والكزبرة (عائلة الخيمية).',
          'مشاكل هضمية للأم: إسهال واضطرابات في الجهاز الهضمي.',
          'تأثيرات هرمونية: الخصائص الإستروجينية قد تُفاقم الحالات الهرمونية الحساسة.',
          'نادر: ارتفاع إنزيمات الكبد مع المزيج العشبي عالي الجرعة الحاوي على الشمر.',
        ],
        management: [
          'أوقفي فوراً جميع منتجات الشمر.',
          'اتصلي بالطبيب أو طبيب الأطفال فوراً إذا أظهر الرضيع علامات خمول أو قيء أو نعاس مفرط.',
          'راقبي الرضيع بحثاً عن الخمول والقيء وانخفاض توتر العضلات.',
          'تجنبي زيت الشمر الأساسي المركَّز أثناء الرضاعة.',
        ],
      },
      sideEffects: [
        'خمول الرضيع/التسمم: الاستخدام الأموي المفرط (لترات متعددة من الشاي المركَّز يومياً) يمكن أن يسبب تسمماً عبر الأنيثول في الحليب',
        'مشاكل هضمية للأم',
        'تفاعلات تحسسية عند الأفراد الحساسين لعائلة الخيمية (طفح جلدي، صعوبات تنفسية)',
        'نادر: ارتفاع إنزيمات الكبد مع الاستخدام الكثيف',
      ],
      contraindications: [
        'الحمل: محظور تماماً في الجرعات العلاجية؛ تأثيرات مُدرِّة للطمث وقد يسبب تقلصات الرحم',
        'الحساسية لنباتات عائلة الخيمية (كرفس، جزر، خزامى، كزبرة)',
        'الحالات الهرمونية الحساسة: السرطانات الحساسة للإستروجين (ثدي، رحم، مبيض)، بطانة الرحم المهاجرة، أورام الرحم الليفية',
        'الصرع: زيت الشمر الأساسي يمكن أن يخفض عتبة الاختلاج',
      ],
      drugInteractions: [
        'المضادات الحيوية (سيبروفلوكساسين): معادن الشمر يمكن أن تُخلِّب مع المضاد الحيوي مما يقلل امتصاصه؛ فاصل بساعتين على الأقل',
        'مضادات التخثر: قد يُبطِّئ تخثر الدم مما يسبب مشاكل لمن يعانون من اضطرابات النزيف',
      ],
      storage: {
        forms: [
          { form: 'بذور الشمر', instructions: 'يُخزَّن في جرة زجاجية محكمة في مكان بارد مظلم جاف. البذور المجففة المخزَّنة بشكل صحيح تبقى فعّالة 6-12 شهراً. اسحقيها قليلاً قبل النقع مباشرةً لإطلاق الزيوت المتطايرة.' },
          { form: 'بصلة الشمر الطازجة/الفروع', instructions: 'يُخزَّن في كيس بلاستيكي مغلق في درج الخضروات. الشمر الطازج يستمر حتى أسبوع في الثلاجة.' },
        ],
      },
      benefits: [
        { icon: 'child_care', title: 'دعم إنتاج الحليب', desc: 'الأنيثول الفيتوإستروجيني وتأثير رفع البرولاكتين المحتمل يدعمان حجم حليب الثدي وجودته.' },
        { icon: 'child_friendly', title: 'تخفيف مغص الرضيع', desc: 'ينتقل الأنيثول عبر حليب الثدي لتهدئة اضطراب الجهاز الهضمي عند الرضيع وتقليل البكاء من المغص.' },
      ],
      botanicalFacts: {
        family: 'الفصيلة الخيمية (Apiaceae)',
        nativeRegion: 'منطقة البحر المتوسط؛ متطبِّع على نطاق واسع في أوروبا وآسيا والأمريكتين',
        growthHabit: 'عشب معمر عطري طويل يصل إلى 1.5-2.5 م بأوراق ريشية ومظلات زهرية صفراء؛ تُستخدم البذور والبصلة معاً',
        activeCompounds: 'ترانس-أنيثول (50-80٪)، فنشون، ليمونين، حمض الروزمارينيك، كيرستين-3-روتينوسايد',
        cultivationNotes: 'تُجمَع البذور في أواخر الصيف عند نضج المظلات؛ البذور المجففة هي الجزء الطبي المستخدم في الشاي والكبسولات',
      },
      preparation: [
        { method: 'شاي البذور', desc: 'انقعي 1-3 ملاعق صغيرة من البذور المسحوقة في ماء مغلٍ لمدة 10-20 دقيقة (مغطى).', bestFor: 'دعم الرضاعة، مغص الرضيع (عبر الحليب)، الراحة الهضمية' },
        { method: 'الكبسولات', desc: 'كبسولات مسحوق البذور 500-1,000 مغ مع الوجبات.', bestFor: 'جرعة الرضاعة المتسقة، عسر الطمث' },
        { method: 'الاستخدام الطهوي', desc: 'أضيفي إلى الحساء أو السلطة أو الخضروات المشوية.', bestFor: 'المكملات الغذائية، الدعم الهضمي الخفيف' },
      ],
    },

    'moringa-breastfeeding': {
      name: 'المورينغا',
      shortDescription: 'تُعرف بـ"شجرة المعجزة"، أوراقها تدعم إنتاج الحليب وتُحسِّن التغذية بشكل ملحوظ مع تقارير بزيادة تصل إلى 400 مل/يوم. ⚠️ الأوراق فقط آمنة؛ الجذور والنباك والأزهار سامة.',
      description: 'المورينغا أولييفيرا تعمل من خلال مسارات متعددة لتعزيز الرضاعة: رفع مستويات البرولاكتين المصلي (الهرمون الأساسي لإنتاج الحليب)، وتحفيز نشاط الخلايا الحويصلية في الغدد الثديية، وتوفير دعم غذائي كثيف (بروتين، حديد، كالسيوم، فيتامينات A/B/C/E). الفيتوستيرولات والإيزوثيوسيانات تُوفِّران تأثيرات مضادة للالتهاب وداعمة للمناعة تفيد الأم والرضيع. مهم: يُوصى فقط بالأوراق للرضاعة: اللحاء والجذور والأزهار تحتوي على قلويدات خطيرة.',
      history: 'يُعدّ الأصل الأصلي لهذه الشجرة من جنوب آسيا، وقد استُخدمت في الطب الأيورفيدي والأفريقي والآسيوي لقرون كـ"شجرة معجزة" نظراً لملفها الغذائي الاستثنائي. استُخدمت في رعاية ما بعد الولادة التقليدية في الهند والفلبين ودول أفريقية لدعم التغذية الأموية وإنتاج الحليب.',
      symptoms: ['قلة حليب الثدي', 'إرهاق ما بعد الولادة', 'نقص التغذية', 'فقر الدم أثناء الرضاعة'],
      warnings: [
        'استخدمي الأوراق فقط أثناء الرضاعة: جذور المورينغا ونباكها وأزهارها تحتوي على السبيروكين سُمّ خطير.',
        'محظور تماماً أثناء الحمل: جميع الأجزاء عدا الأوراق يمكن أن تسبب تقلصات الرحم.',
        'راقبي سكر الدم وضغطه بدقة عند تناوله مع أدوية السكري أو ضغط الدم.',
      ],
      activeConstituents: [
        { name: 'β-سيتوستيرول، ستيغماستيرول، كامبيستيرول (فيتوستيرولات)', percentage: '', effect: 'تدعم المسارات الهرمونية لإنتاج الحليب؛ خصائص مضادة للالتهاب' },
        { name: 'كيرستين، كامبيفيرول (فلافونويدات)', percentage: '', effect: 'مضادات أكسدة قوية؛ تأثيرات مضادة للالتهاب تساعد في تخليق الحليب' },
        { name: 'صابونينات', percentage: '', effect: 'تُعزِّز مسارات البرولاكتين وإنتاج الحليب' },
        { name: 'أحماض فينولية', percentage: '', effect: 'تأثيرات مضادة للأكسدة وواقية للخلايا في الأنسجة الثديية' },
        { name: 'أحماض أمينية أساسية وبروتينات (لايسين، تريبتوفان)', percentage: '', effect: 'ضرورية لإنتاج بروتين الحليب' },
        { name: 'حديد وكالسيوم', percentage: '', effect: 'يدعم تعافي الأم ويرفع كثافة المغذيات في الحليب' },
        { name: 'فيتامينات A وC وE', percentage: '', effect: 'مضادات أكسدة تساعد في الدعم الأيضي العام والمناعة' },
        { name: 'إيزوثيوسيانات', percentage: '', effect: 'تُوفِّر تأثيرات مضادة للالتهاب قد تساعد في عملية تخليق الحليب' },
      ],
      moa: [
        { title: 'رفع البرولاكتين', detail: 'يرفع مستويات البرولاكتين المصلي: الهرمون الأساسي المسؤول عن إنتاج حليب الثدي.' },
        { title: 'تحفيز الغدة الثديية', detail: 'يُعزِّز نمو ونشاط الخلايا الحويصلية في الغدد الثديية.' },
        { title: 'الدعم الغذائي', detail: 'يُوفِّر العناصر الغذائية الضرورية (بروتين، حديد، كالسيوم) المطلوبة لإنتاج حليب عالي الجودة.' },
        { title: 'تأثيرات مضادة للالتهاب', detail: 'يُقلِّل الإجهاد التأكسدي في الأنسجة الثديية مما يدعم البيئة المثلى لتخليق الحليب.' },
      ],
      uses: [
        'تعزيز حجم الحليب: تُشير الدراسات إلى أن المورينغا يمكن أن تزيد إنتاج الحليب بشكل ملحوظ خاصةً في أيام النفاس المبكرة (3-7)، مع تقارير بزيادة تصل إلى 400 مل/يوم',
        'رفع مستويات البرولاكتين: يُحفِّز الهرمون المسؤول عن إنتاج الحليب',
        'تغذية كثيفة المغذيات: غنية بالحديد والكالسيوم والفيتامينات (A وB)؛ تساعد في إعادة بناء مخازن الأم',
        'دعم مناعة الرضيع (عبر حليب الثدي)',
        'إدارة سكر الدم وضغطه لدى البالغين الأكبر سناً (50+)',
        'تقليل التهاب المفاصل ودعم صحة العين',
      ],
      howToUse: [
        { method: 'الكبسولات', instruction: 'الكبسولات الحاوية على مسحوق أوراق المورينغا طريقة شائعة وسهلة لضمان جرعة متسقة.' },
        { method: 'المسحوق', instruction: 'يمكن خلط مسحوق المورينغا في العصائر أو الزبادي أو الحساء.' },
        { method: 'الشاي', instruction: 'شاي المورينغا المُنقَع طريقة تقليدية أخرى لدعم الرضاعة.' },
        { method: 'مصدر غذائي', instruction: 'يمكن طهي الأوراق الطازجة في الأطباق مثل السبانخ.' },
      ],
      suitableAgeGroups: [
        { group: 'الرضع والأطفال الصغار (6 أشهر إلى 5 سنوات)', notes: 'كمكمل غذائي بكميات الغذاء فقط.' },
        { group: 'الأطفال والمراهقون (6-18 سنة)', notes: 'يدعم المناعة ونمو العضلات وتطور الدماغ.' },
        { group: 'الشباب والبالغون (19-50 سنة)', notes: 'يُوفِّر طاقة طبيعية وتوازن للتوتر ومستويات الحديد ودعم إنتاج حليب الثدي.' },
        { group: 'النساء المرضعات', notes: 'استخدام الأوراق فقط: الجذور والنباك والأزهار محظورة تماماً.' },
        { group: 'كبار السن (50+)', notes: 'يساعد في إدارة سكر الدم وضغطه وتقليل التهاب المفاصل ودعم صحة العين.' },
      ],
      dosage: {
        standard: 'المسحوق: ملعقة صغيرة إلى ملعقة كبيرة يومياً (جرعات الصباح والظهيرة). الكبسولات/الأقراص: 1-2 مرتين يومياً. الأوراق الطازجة: حتى ما يعادل كوباً من الخضروات الورقية الطازجة.',
        forms: [
          { form: 'مسحوق الأوراق', dose: '1 ملعقة صغيرة إلى 1 ملعقة كبيرة يومياً، مقسَّمة بين جرعتي الصباح والظهيرة.' },
          { form: 'الكبسولات / الأقراص', dose: '1-2 كبسولات مرتين يومياً.' },
          { form: 'الأوراق الطازجة النيئة', dose: 'حتى ما يعادل كوباً يومياً، مطبوخة أو في السلطات.' },
          { form: 'الشاي', dose: '1-2 أكواب يومياً من شاي أوراق المورينغا المُنقَع.' },
        ],
      },
      overdose: {
        symptoms: [
          'اضطراب هضمي: إسهال وغثيان وقيء (طبيعة الألياف العالية والمُسهِّل).',
          'خلل وظيفي في الكبد/الكلى: الجرعات العالية يمكن أن تسبب تلفاً خلوياً في أنسجة الكبد والكلى.',
          'سمية جلدية: طفح جلدي حاد (شرى)، حطاطات حمامية، خلايا كيراتينية نخرية.',
          'انخفاض ضغط الدم: ضغط دم منخفض بشكل خطير.',
          'نقص سكر الدم: انخفاض حاد في سكر الدم عند تناوله مع دواء السكري.',
          'عصبي/جهازي: احتمال تلف الأعصاب والإرهاق الشديد.',
        ],
        management: [
          'أوقفي فوراً جميع منتجات المورينغا.',
          'العلاج العرضي: مضادات الهيستامين للطفح الجلدي، علاجات الضائقة المعدية.',
          'الرعاية الداعمة: ابقي مُرطَّبة لإدارة الإسهال.',
          'التقييم الطبي إذا حدثت تغييرات شديدة في إنزيمات الكبد (ارتفاع AST وALT وALP).',
        ],
      },
      sideEffects: [
        'مشاكل هضمية: اضطراب في المعدة والغازات والإسهال والغثيان بكميات كبيرة',
        'مخاطر الحمل: اللحاء والجذور تسبب تقلصات الرحم: تجنّب تام مطلوب (الأوراق فقط آمنة)',
        'مشاكل ضغط الدم/السكر: يمكن أن يسبب انخفاض ضغط الدم أو سكر الدم عند تناوله مع الأدوية المقابلة',
        'مخاوف الكبد/الكلى: الاستهلاك الزائد على المدى البعيد قد يؤثر سلباً على وظيفة الكبد والكلى (بعض الدراسات)',
      ],
      contraindications: [
        'الحمل: محظور تماماً. اللحاء والجذور والجرعات العالية من الأوراق قد تُحفِّز تقلصات الرحم (أوراق المورينغا موصى بها بشدة أثناء الرضاعة، لكن الجذور/اللحاء تظل محظورة تماماً)',
        'حالات الكلى/الكبد الموجودة مسبقاً: الجرعات العالية يمكن أن تُجهِد هذه الأعضاء',
        'انخفاض ضغط الدم: من لديهم ضغط دم منخفض بالفعل يجب تجنّبه',
        'لا تستهلك جذور أو نباك أو أزهار المورينغا أبداً: تحتوي على قلويد السبيروكين الخطير وسموم أخرى',
      ],
      drugInteractions: [
        'أدوية السكري (سيتاغليبتين، ميتفورمين): قد يؤدي إلى خفض مفرط لسكر الدم (نقص السكر)',
        'دواء الغدة الدرقية (ليفوثيروكسين): قد يُخِلّ بتنظيم وظيفة الغدة الدرقية',
        'دواء ضغط الدم: المورينغا يمكن أن تخفض ضغط الدم أكثر؛ خطر انخفاض ضغط الدم الحاد',
        'الأدوية المُعالَجة عبر الكبد: يمكن أن تتداخل مع إنزيمات السيتوكروم P450',
      ],
      storage: {
        forms: [
          { form: 'شكل المسحوق', instructions: 'يُخزَّن في مكان بارد مظلم جاف في حاوية محكمة الإغلاق. الحرارة العالية تُتلِف الفيتامينات والإنزيمات الرقيقة: لا تُخزِّن بالقرب من الموقد أو في ضوء الشمس المباشر.' },
          { form: 'الأوراق المجففة', instructions: 'يُخزَّن في حاويات معتمة/محكمة الإغلاق لتجنب التدهور من الضوء والرطوبة. مجففة بشكل صحيح، يمكن أن تدوم عدة سنوات.' },
          { form: 'الكبسولات', instructions: 'يُخزَّن في مكان بارد جاف بعيداً عن الرطوبة وتقلبات درجات الحرارة.' },
        ],
      },
      benefits: [
        { icon: 'child_care', title: 'تعزيز حجم الحليب', desc: 'يرفع البرولاكتين المصلي ويُحفِّز الخلايا الحويصلية الثديية؛ تُشير الدراسات إلى زيادة تصل إلى 400 مل/يوم في مرحلة النفاس المبكرة.' },
        { icon: 'nutrition', title: 'تغذية استثنائية', desc: 'غني بالبروتين والحديد والكالسيوم وفيتامينات A/B/C/E؛ يُعيد بناء مخازن العناصر الغذائية المستنزفة خلال الرضاعة.' },
        { icon: 'shield', title: 'دعم المناعة', desc: 'الفلافونويدات المضادة للأكسدة والإيزوثيوسيانات المضادة للالتهاب تفيد كلاً من الأم والرضيع.' },
        { icon: 'favorite', title: 'تعافي الأم', desc: 'يدعم سكر الدم وضغطه ويُقلِّل الإجهاد التأكسدي في الأنسجة الثديية.' },
      ],
      botanicalFacts: {
        family: 'المورينجية',
        nativeRegion: 'مناطق جنوب جبال الهيمالايا في شمال غرب الهند؛ يُزرع على نطاق واسع في المناطق المدارية',
        growthHabit: 'شجرة سريعة النمو تصل إلى 10-12 م؛ مقاومة للجفاف؛ أوراق مركبة وأزهار بيضاء وقرون بذرية طويلة ("عيدان الطبول")',
        activeCompounds: 'β-سيتوستيرول، كيرستين، كامبيفيرول، إيزوثيوسيانات، حديد، كالسيوم، فيتامينات A/B/C/E',
        cultivationNotes: 'من أكثر النباتات كثافةً غذائياً المعروفة. تُحصَد الأوراق على مدار العام في المناخات المدارية. الأوراق فقط آمنة للرضاعة: لا تستخدمي أبداً اللحاء أو الجذور أو الأزهار',
      },
      preparation: [
        { method: 'مسحوق الأوراق في الطعام', desc: 'اخلط ملعقة صغيرة إلى ملعقة كبيرة من مسحوق المورينغا في العصائر أو الزبادي أو الحساء.', bestFor: 'دعم الرضاعة اليومي، المكملات الغذائية' },
        { method: 'الكبسولات', desc: '1-2 كبسولة مرتين يومياً لجرعة متسقة.', bestFor: 'دعم الرضاعة المريح بجرعة دقيقة' },
        { method: 'الأوراق الطازجة المطبوخة', desc: 'تُطبَّخ مثل السبانخ في الأطباق المحلية.', bestFor: 'الجرعة الغذائية الطبيعية، التعزيز الغذائي' },
      ],
    },

    // ── Immunity › Immune Boosting ──
    'echinacea-immunity': {
      name: 'إشنسا', shortDescription: 'مشهورة بقدرتها على تحفيز الجهاز المناعي، فعّالة بشكل خاص عند تناولها عند أول ظهور للأعراض الموسمية.',
      description: 'ركيزة أساسية في العلاج العشبي التقليدي، تقف الإشنسا في طليعة الأبحاث الوقائية الطبيعية. تم التحقق من خصائصها المناعية في دراسات سريرية عديدة.',
      history: 'يعود الاستخدام الطبي للإشنسا إلى الشعوب الأصلية في أمريكا الشمالية، الذين استخدموها لأمراض متعددة. قُدِّمت للمستوطنين الأوروبيين وأصبحت من أشهر الأعشاب الطبية في الولايات المتحدة.',
      warnings: [
        'الإشنسا ليس لها تأثير مباشر على البكتيريا: تُدرِّب خلايا المناعة على أن تكون أسرع وأكثر شراسة؛ تكاد تكون عديمة الفائدة إذا أُخذت بعد استقرار العدوى تمامًا.',
        'ممنوعة بشكل صارم في أمراض المناعة الذاتية (التصلب المتعدد، الذئبة الحمراء، التهاب المفاصل الروماتويدي): تحفّز المناعة على مهاجمة أنسجة الجسم.',
        'محظورة تمامًا لمرضى زراعة الأعضاء: تتعارض مباشرة مع الأدوية المثبطة للمناعة الضرورية.',
        'الحد الأقصى للاستخدام الحاد: 10 أيام متتالية؛ الحد الأقصى للدورة الوقائية: 8 أسابيع (مع استراحة إلزامية 3 أسابيع بعدها).',
      ],
      activeConstituents: [
        { name: 'الألكيلاميدات (إيزوبيوتيلاميدات دهنية)', percentage: '', effect: 'ترتبط بمستقبلات الكانابينويد من النوع 2 (CB2)؛ المحركات الأساسية للتأثيرات المعدِّلة للمناعة' },
        { name: 'حمض الشيكوريك، حمض الكافتاريك، الإشناكوسيد (فينيل بروبانويدات)', percentage: '', effect: 'مشتقات فينولية مائية؛ مضادات أكسدة قوية وحماية خلوية فعّالة' },
        { name: 'أرابينوغالاكتان وفوكوغالاكتوكسيلوغلوكان (بوليساكاريد عالي الوزن الجزيئي)', percentage: '', effect: 'تراكيب معقدة قابلة للذوبان في الماء تحفّز مباشرة تكاثر الضامّات والعدلات الخلوي' },
        { name: 'الزيوت الأساسية المتطايرة (بورنيول، بورنيل أسيتات، جيرماكرين D)', percentage: '', effect: 'مساهمات عطرية ومضادة للميكروبات ثانوية' },
      ],
      moa: [
        { title: 'تنشيط البلعمة', detail: 'يرفع بشكل ملحوظ الطاقة التشغيلية وسرعة الحركة وكفاءة الابتلاع في البلاعم السنخية والعدلات المتداولة، مما يسرّع تدمير مسببات الأمراض الخلوية.' },
        { title: 'تعديل شلال السيتوكين', detail: 'يحفّز الإطلاق المستهدف لبروتينات الإشارة المناعية بما فيها الإنترفيرون وTNF-α وIL-1 وIL-10، مما يهيئ الجهاز المناعي الفطري للاستجابة السريعة للمسببات المرضية.' },
        { title: 'تثبيط إنزيم الهيالورونيداز', detail: 'يعطّل مباشرة إنزيم الهيالورونيداز البكتيري والفيروسي، مما يُبطل قدرة المُمرِض على تكسير المصفوفة بين الخلايا ويمنع انتشار العدوى إلى الأنسجة السليمة المجاورة.' },
      ],
      uses: [
        'دعم الجهاز التنفسي: الوقاية والعلاج الحاد من نزلات البرد المتكررة والأنفلونزا الموسمية والتهابات الجهاز التنفسي العلوي الحادة',
        'دعم المسالك البولية: علاج داعم مساعد لالتهابات المسالك البولية السفلية المتكررة',
        'الشفاء الموضعي: تطبيق موضعي مباشر للجروح السطحية سيئة الشفاء وحب الشباب الالتهابي الخفيف والحروق البسيطة والخدوش الجلدية والدمامل المتكررة',
      ],
      howToUse: [
        { method: 'نقيع مائي / طبيخ', instruction: 'يُغلى 1.0–2.0 غرام من العشب المجفف في الماء المغلي لمدة 15 دقيقة.' },
        { method: 'التوقيت الحاسم', instruction: 'لتحقيق أقصى فعالية سريرية، يجب بدء العلاج عند أول ظهور لأعراض البرد أو الأنفلونزا (التهاب الحلق، قشعريرة خفيفة). يكاد يكون عديم الفائدة إذا أُخذ بعد استقرار العدوى تمامًا.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال (أقل من سنتين)', notes: 'ممنوع استخدامه بشكل صارم: محظور تمامًا بسبب خطر المضاعفات الجهازية الشديدة.' },
        { group: 'الأطفال (2–12 سنة)', notes: 'غير موصى به دون إشراف طبي مباشر: خطر متزايد لإثارة مظاهر حساسية شديدة بوساطة الخلايا التائية.' },
        { group: 'الحمل والرضاعة', notes: 'تجنّبي الاستخدام تمامًا: لم تُثبت السلامة السريرية ونتائج الأم والجنين.' },
        { group: 'البالغون', notes: 'الفئة المستهدفة الأساسية. الجرعة الوقائية/الحادة للبالغين: 2.5–6.0 غرام من العشب المجفف يوميًا في جرعات مقسّمة.' },
      ],
      dosage: {
        standard: 'الجرعة الوقائية/الحادة للبالغين: 2.5–6.0 غرام من العشب المجفف يوميًا في جرعات مقسّمة. حدود المدة: الحد الأقصى للعلاج الحاد 10 أيام متتالية؛ الدورات الوقائية حد أقصى 8 أسابيع مع استراحة إلزامية 3 أسابيع.',
        forms: [
          { form: 'نقيع مائي / طبيخ', dose: '1.0–2.0 غرام من العشب المجفف في ماء مغلٍ، يُسخَّن 15 دقيقة؛ 2–3 أكواب يوميًا.' },
          { form: 'كبسولات / مستخلصات موحّدة', dose: 'ما يعادل 2.5–6.0 غرام من العشب المجفف يوميًا في جرعات مقسّمة. حد أقصى 10 أيام حادة؛ حد أقصى 8 أسابيع وقائية.' },
        ],
      },
      overdose: {
        symptoms: [
          'لم تُوثَّق حالات سمية حادة مميتة في الأدبيات الطبية البشرية.',
          'خطر نظري من الجرعات الفائقة القصوى: قمع مناعي متناقض عكس التأثير المعزز للمناعة وانهيار نشاط خلايا الدم البيضاء.',
        ],
        management: [
          'الإيقاف الفوري للعشب.',
          'الشروع في ترطيب مكثّف عن طريق الفم أو الوريد.',
          'الإدارة العرضية لأي مظاهر حساسية أو فرط حساسية ثانوية.',
        ],
      },
      sideEffects: [
        'متحملة جيدًا عمومًا بالجرعات والمدد الموصى بها',
        'انزعاج معدي معوي خفيف لدى بعض الأفراد',
        'نادرًا: تفاعلات تحسسية، خاصةً لدى الحساسين لنباتات الفصيلة النجمية',
      ],
      contraindications: [
        'اضطرابات المناعة الذاتية الجهازية: ممنوعة بشكل صارم في التصلب المتعدد والذئبة الحمراء وتهاب المفاصل الروماتويدي',
        'الأمراض الجهازية التدريجية: محظورة في السل والساركويد وأمراض خلايا الدم البيضاء الجهازية',
        'زراعة الأعضاء: محظورة تمامًا قبل وأثناء وبعد عمليات الزراعة',
      ],
      drugInteractions: [
        'سيتوكروم P450: قد يثبّط إنزيمات CYP3A4، مما يغيّر إزالة الأدوية المُستقلَبة بشكل مكثّف',
        'إيكونازول: الاستخدام المتزامن قد يقلل بشكل ملحوظ من التأثير العلاجي الموضعي',
        'مثبطات المناعة: تتعارض مباشرة مع العلاجات المثبطة للمناعة الأساسية',
      ],
      storage: {
        forms: [
          { form: 'جميع الأشكال', instructions: 'تُخزَّن في مكان بارد ومظلم وجاف تمامًا في حاويات محكمة الإغلاق للحفاظ على الألكيلاميدات الحساسة من التحلل الحراري.' },
        ],
      },
      benefits: [
        { icon: 'shield', title: 'تحفيز المناعة', desc: 'تنشّط الضامّات وتزيد إنتاج الخلايا التائية، مما يعزز الاستجابة المناعية الفطرية.' },
        { icon: 'healing', title: 'مضاد للالتهابات', desc: 'تحتوي على حمض الشيكوريك والألكيلاميدات التي تقلل السيتوكينات الالتهابية.' },
        { icon: 'coronavirus', title: 'مضاد للفيروسات', desc: 'تُظهر الأبحاث فعاليتها ضد طيف واسع من فيروسات الجهاز التنفسي.' },
      ],
      botanicalFacts: { family: 'الفصيلة النجمية', nativeRegion: 'أمريكا الشمالية', growthHabit: 'نبات عشبي معمر', activeCompounds: 'الألكيلاميدات، مشتقات حمض الكافيك', cultivationNotes: 'تنمو في تربة جيدة التصريف مع أشعة الشمس الكاملة. تُزهر في منتصف الصيف.' },
      preparation: [
        { method: 'الصبغة', desc: 'مستخلص كحولي بجرعة 2-4 مل، 3 مرات يومياً عند ظهور الأعراض.', bestFor: 'التنشيط المناعي السريع' },
        { method: 'الشاي', desc: 'انقع ملعقة إلى ملعقتين من العشب الجاف في ماء مغلٍ لمدة 10 دقائق.', bestFor: 'الدعم الوقائي' },
      ],
      symptoms: ['سعال', 'برد', 'مناعة', 'جهاز تنفسي'],
    },

    'black-seed-immunity': {
      name: 'الحبة السوداء',
      shortDescription: 'مُعدِّل مناعي قوي بالثيموكينون. ⚠️ يجب سحقها فور الاستخدام لأن الثيموكينون يتبخر بسرعة.',
      description: 'الحبة السوداء Nigella sativa مُستخدَمة طبياً لأكثر من 2000 عام وذُكر علاجها في الحديث النبوي الشريف. الثيموكينون TQ هو المادة الفعّالة الرئيسية بخصائص مضادة للالتهابات والأكسدة والميكروبات. البذور تُسحق فور الاستخدام لأن TQ يتبخر سريعاً عند التعرض للهواء.',
      symptoms: ['ضعف المناعة', 'الالتهابات', 'الحساسية', 'الجهاز التنفسي'],
      warnings: [
        'محظور تماماً أثناء الحمل: يُحفِّز تقلصات الرحم مما يُسبِّب خطر الإجهاض.',
        'يجب سحق البذور فور الاستخدام: TQ يتبخر سريعاً من البذور المطحونة مسبقاً.',
        'وقفه قبل أسبوعين من أي عملية جراحية: تأثيرات مضادة للتخثر وخافضة لضغط الدم.',
      ],
      activeConstituents: [
        { name: 'ثيموكينون / TQ (فينول بلوري أساسي)', percentage: '', effect: 'مُثبِّط مباشر لـ5-LOX؛ مُعدِّل للمناعة؛ مضاد للالتهاب ولمرض السكري' },
        { name: 'ثيموهيدروكينون', percentage: '', effect: 'فينول مُعدِّل للمناعة الثانوي' },
        { name: 'نيجيلون', percentage: '', effect: 'قوي مضاد للهيستامين؛ مُثبِّت للخلايا البدينة؛ موسِّع للشعب الهوائية' },
        { name: 'ب-سيمين (زيت متطاير)', percentage: '', effect: 'عطري؛ مضاد للميكروبات الثانوي' },
        { name: 'حمض اللينوليك والأوليك (زيت ثابت)', percentage: '', effect: 'أساسي لتوافر TQ الحيوي الدهني؛ يجب أخذه مع الطعام' },
      ],
      moa: [
        { title: 'تعديل المناعة المتقدم', detail: 'يُسرِّع بشكل ملحوظ القدرة السامة لخلايا NK؛ يُعزِّز نشاط البلعمة للبلاعم.' },
        { title: 'تثبيط 5-LOX', detail: 'TQ يُثبِّط مباشرةً 5-ليبوكسيجيناز مما يوقف إنتاج الليكوترينات المحرِّكة للتشنج القصبي التحسسي.' },
        { title: 'توسيع الشعب الهوائية', detail: 'النيجيلون يُوفِّر تأثيراً مضاداً للهيستامين؛ يُثبِّط الخلايا البدينة؛ يُرخِّي المجاري الهوائية المُفرِطة في التفاعل.' },
        { title: 'مضاد للسكري', detail: 'يُعزِّز حساسية الأنسولين المحيطية؛ يدعم وظيفة خلايا بيتا البنكرياسية.' },
      ],
      uses: [
        'تعزيز الجهاز المناعي وتعديله',
        'الربو وأمراض المجاري الهوائية التحسسية',
        'السكري من النوع الثاني كمساعد',
        'خلل الدهون وارتفاع الكوليسترول',
        'ارتفاع ضغط الدم الخفيف',
        'دعم مضاد للأكسدة عام',
      ],
      howToUse: [
        { method: 'بذور مسحوقة طازجاً', instruction: 'اسحقي البذور فوراً قبل الاستخدام مباشرةً. تناولي مع الطعام أو خلطي مع عسل أو ماء. ابدئي بنصف الجرعة الأسبوع الأول.' },
        { method: 'زيت معصور على البارد', instruction: 'تناولي الزيت مع الوجبة أو بعدها؛ لا تأخذيه على معدة فارغة. ابدئي بجرعة منخفضة.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن ضمن الجرعات الموصى بها؛ ابدئي بالجرعة الأدنى الأسبوع الأول.' },
        { group: 'الحوامل', notes: 'محظور تماماً في الجرعات العلاجية.' },
        { group: 'مرضى السكري', notes: 'مراقبة دقيقة لسكر الدم ضرورية عند الجمع مع الأدوية.' },
        { group: 'ما قبل الجراحة', notes: 'وقفه قبل أسبوعين.' },
      ],
      dosage: {
        standard: 'تعزيز المناعة: 500 مغ بذور/يوم أو 2.5 مل زيت/يوم. الربو: 500 مغ-1 غرام بذور مرتين يومياً. السكري: 2-3 غرام بذور يومياً لمدة 3 أشهر.',
        forms: [
          { form: 'بذور مسحوقة طازجاً', dose: '500 مغ-1 غرام مع الطعام، 1-2 مرة يومياً.' },
          { form: 'زيت معصور على البارد', dose: '2.5-5 مل مع الوجبة أو بعدها.' },
        ],
      },
      overdose: {
        symptoms: [
          'تهيج معدي حاد (خاصةً على معدة فارغة)، انخفاض ضغط الدم، نقص سكر الدم المحتمل مع أدوية السكري.',
          'جرعات عالية جداً: قد تُسبِّب تأثيراً سمياً على الكلى.',
        ],
        management: [
          'تقليل الجرعة، التأكد من الأخذ مع الطعام دائماً، ومراقبة ضغط الدم وسكره.',
        ],
      },
      sideEffects: [
        'تهيج معدي عند الأخذ على معدة فارغة',
        'انخفاض محتمل لضغط الدم',
        'احتمال نقص سكر الدم مع أدوية السكري',
      ],
      contraindications: [
        'الحمل: محظور تماماً في الجرعات العلاجية',
        'اضطرابات النزيف وتخثر الدم',
        'قبل الجراحة: وقفه قبل أسبوعين على الأقل',
      ],
      drugInteractions: [
        'أدوية السكري: تأثير إضافي على خفض سكر الدم',
        'مضادات التخثر (وارفارين): تأثير مضاد للتخثر إضافي',
        'أدوية ضغط الدم: تأثير خافض إضافي محتمل',
      ],
      storage: {
        forms: [
          { form: 'البذور', instructions: 'يُخزَّن في حاوية محكمة الإغلاق بعيداً عن الهواء والضوء؛ اسحقي فقط عند الاستخدام مباشرةً.' },
          { form: 'الزيت', instructions: 'يُخزَّن في زجاجة داكنة محكمة في الثلاجة بعد الفتح.' },
        ],
      },
      benefits: [
        { icon: 'shield', title: 'تنشيط خلايا القاتل الطبيعي', desc: 'يُسرّع بشكل ملحوظ القدرة الانحلالية لخلايا القاتل الطبيعي ويُعزز نشاط البلعمة في الضامات للدفاع المناعي الشامل.' },
        { icon: 'air', title: 'إدارة الربو والمجاري التنفسية', desc: 'تثبيط 5-LOX يوقف تخليق الليوكوترينات؛ النيجيلون يوفر توسيع قصبي مضاد للهستامين ومضاداً للتشنج.' },
        { icon: 'healing', title: 'مضاد قوي للالتهابات', desc: 'الثيموكينون يثبط مسارات NF-κB وCOX-2 وPGE-2 مقللاً السيتوكينات الالتهابية.' },
      ],
      botanicalFacts: { family: 'الفصيلة الحوذانية', nativeRegion: 'جنوب أوروبا وشمال أفريقيا وجنوب آسيا', growthHabit: 'عشب حولي بارتفاع 20-30 سم؛ بذور سوداء مثلثية (الجزء الدوائي)', activeCompounds: 'الثيموكينون (30-48%)، النيجيلون، الثيمول، الكارفاكرول', cultivationNotes: 'يُزرع في التربة الجيدة التصريف مع أشعة شمس كاملة؛ البذور تُجمع بعد الجفاف الطبيعي.' },
      preparation: [
        { method: 'البذور المسحوقة طازجاً مع الطعام', desc: 'سحق البذور فوراً قبل الاستخدام؛ تُؤخذ مع الطعام أو بعده مباشرة لأفضل امتصاص.', bestFor: 'دعم المناعة، الربو، السكري، ضغط الدم' },
        { method: 'زيت المعصرة الباردة مع الطعام', desc: '2.5-5 مل زيت معصرة باردة مع الطعام؛ لا يُسخَّن.', bestFor: 'جميع الاستخدامات؛ الامتصاص الأسهل للثيموكينون' },
      ],
    },

    'astragalus-immunity': {
      name: 'الأستراغالوس', shortDescription: 'جذر مُكيِّف قوي مستخدم في الطب الصيني التقليدي لبناء المناعة الأساسية والحماية من الإجهاد.',
      description: 'الأستراغالوس من أهم الأعشاب في الطب الصيني التقليدي، مُستخدَم منذ أكثر من 2000 عام. بوصفه مُكيِّفاً، يساعد الجسم على الاستجابة للتوتر مع تعزيز المناعة.',
      history: 'يُعرف بـ"هوانغ تشي" في الطب الصيني التقليدي، واعتُبر عشباً رئيسياً للطب الصيني لآلاف السنين.',
      benefits: [
        { icon: 'shield', title: 'تعديل المناعة', desc: 'تزيد السكريات المتعددة إنتاج خلايا الدم البيضاء وتعزز نشاط خلايا NK.' },
        { icon: 'psychology', title: 'مُكيِّف', desc: 'يساعد في تطبيع الاستجابة الفسيولوجية للجسم للتوتر، ويقلل الكورتيزول.' },
        { icon: 'favorite', title: 'دعم القلب والأوعية', desc: 'تحسّن الأستراغالوسيدات وظيفة القلب وتحمي خلايا عضلة القلب.' },
      ],
      botanicalFacts: { family: 'الفصيلة البقولية', nativeRegion: 'الصين، منغوليا، كوريا', growthHabit: 'نبات عشبي معمر', activeCompounds: 'الأستراغالوسيدات، السكريات المتعددة، الصابونين', cultivationNotes: 'يفضّل التربة الرملية جيدة التصريف. يتحمل الجفاف بعد التأسيس.' },
      preparation: [
        { method: 'الطبيخ', desc: 'اطبخ شرائح الجذر في الماء لمدة 30-45 دقيقة. أضفه للحساء كمقوٍّ يومي.', bestFor: 'بناء المناعة طويل الأمد' },
        { method: 'الكبسولات', desc: 'كبسولات مستخلص موحّد. 500-1500 مغ يومياً.', bestFor: 'التكمّل اليومي المريح' },
      ],
      symptoms: ['مناعة', 'إرهاق', 'توتر'],
    },

    // ── Immunity › Anti-Inflammatory ──
    'turmeric-immunity': {
      name: 'الكركم',
      shortDescription: 'مضاد التهاب طبيعي قوي',
      description: 'الكركم (Curcuma longa) نبات جذمور استوائي من الفصيلة الزنجبيلية، يُستخدم في الطب الأيورفيدي والصيني منذ أكثر من 4000 سنة. مادته الفعّالة الكركيومين ثبت لها تأثير مضاد قوي للالتهاب ومضاد للأكسدة في عشرات الدراسات السريرية.',
      symptoms: ['ألم المفاصل', 'الالتهاب', 'آلام العضلات', 'أمراض المناعة الذاتية', 'دعم الكبد'],
      warnings: [
        'يُخفّض مستوى السكر في الدم؛ تابع نسب السكر عند استخدامه مع مضادات السكري',
        'يؤخّر تخثّر الدم؛ أوقف الاستخدام قبل الجراحة بأسبوعين على الأقل',
      ],
      activeConstituents: [
        { name: 'كركيومينويدات', percentage: '2-4%', effect: 'المادة الفعّالة الرئيسية المضادة للالتهاب ومضادة للأكسدة' },
        { name: 'زيوت طيّارة (توميرون، زنجيبرين)', percentage: '', effect: 'تُعزّز التأثير الإجمالي وتُحسّن الامتصاص' },
        { name: 'نشا', percentage: '40-50%', effect: 'المكوّن الهيكلي الرئيسي في الجذمور الجاف' },
      ],
      moa: [
        { title: 'تثبيط NF-κB', detail: 'يُقلّل إنتاج السيتوكينات الالتهابية (IL-1β، IL-6، TNF-α)' },
        { title: 'تثبيط COX-2 وLOX-5', detail: 'يُقلّل تركيب البروستاغلاندينات واللوكوترينات الالتهابية' },
        { title: 'تنشيط Nrf2', detail: 'يُحفّز مسار الحماية من الإجهاد التأكسدي على مستوى الخلية' },
      ],
      uses: ['التهاب المفاصل ومتلازمة الألم المزمن', 'دعم وظائف الكبد وإزالة السموم', 'التهابات الجهاز الهضمي والقولون التقرحي', 'الوقاية من التأكسد والشيخوخة الخلوية'],
      howToUse: [
        { method: 'مع الفلفل الأسود أو البيبيرين', instruction: 'أضف قرصة فلفل أسود مع كل جرعة لتحسين الامتصاص حتى 20 ضعفاً' },
        { method: 'صياغة الفيتوزوم أو الميسيل', instruction: 'اختر هذه الكبسولات للحالات العلاجية لامتصاص أعلى بكثير' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون (18 سنة فأكثر)', notes: 'الجرعة القياسية الكاملة آمنة' },
        { group: 'الأطفال (12 إلى 17 سنة)', notes: 'يُستخدم بحذر تحت إشراف طبي' },
        { group: 'الحوامل', notes: 'يُتجنّب بجرعات علاجية؛ الاستخدام كتوابل في الطعام آمن' },
      ],
      dosage: {
        standard: 'مسحوق الجذمور 1 إلى 3 غ يومياً مقسّمة على وجبات',
        forms: [
          { form: 'مسحوق الجذمور', dose: '1 إلى 3 غ يومياً مقسّمة على وجبات' },
          { form: 'مستخلص موحّد (95% كركيومينويدات)', dose: '400 إلى 600 ملغ ثلاث مرات يومياً' },
          { form: 'صياغات الفيتوزوم', dose: '200 إلى 400 ملغ مرتين يومياً' },
        ],
      },
      overdose: {
        symptoms: ['اضطرابات معدية معوية', 'غثيان', 'إسهال (عند جرعات أعلى من 8 غ يومياً)'],
        management: [
          'أوقف الاستخدام وتناول الطعام لتخفيف التهيّج المعدي',
          'التجارب السريرية استخدمت حتى 12 غ يومياً بأمان نسبي لفترات قصيرة',
        ],
      },
      sideEffects: [
        'اضطراب معدي وغثيان وإسهال بالجرعات العالية',
        'صداع ودوخة (نادراً)',
        'تحسس جلدي عند الاستخدام الموضعي المطوّل (نادر)',
      ],
      contraindications: [
        'حصوات المرارة أو انسداد القناة الصفراوية',
        'فرط حساسية للنباتات الزنجبيلية',
        'اضطرابات النزيف الحادة',
        'ما قبل الجراحة (توقف قبل أسبوعين على الأقل)',
      ],
      drugInteractions: [
        'مضادات التخثر (وارفارين، هيبارين): يزيد خطر النزيف',
        'مضادات الصفيحات (أسبرين، كلوبيدوجريل): تأثير مضاعف',
        'مضادات السكري: قد يخفّض السكر',
        'مثبطات مضخة البروتون: قد يُضعف تأثيرها',
      ],
      storage: {
        forms: [
          { form: 'مسحوق', instructions: 'وعاء محكم الإغلاق بعيداً عن الضوء والرطوبة في درجة حرارة الغرفة' },
          { form: 'كبسولات', instructions: 'وفق إرشادات المُصنّع، عادةً أقل من 25 درجة مئوية' },
        ],
      },
      benefits: [
        { icon: 'healing', title: 'مضاد التهاب قوي', desc: 'يثبّط مسارات NF-κB وCOX-2 لتخفيف الألم المزمن.' },
        { icon: 'shield', title: 'حماية الكبد', desc: 'يُحفّز إنزيمات إزالة السموم ويحمي خلايا الكبد من الإجهاد التأكسدي.' },
        { icon: 'psychology', title: 'دعم معرفي', desc: 'يُعزّز مستوى BDNF ويُقلّل من خطر الاضطرابات العصبية.' },
        { icon: 'favorite', title: 'صحة القلب', desc: 'يُحسّن وظيفة البطانة الوعائية ويُقلّل الأكسدة الدهنية.' },
      ],
      botanicalFacts: {
        family: 'عائلة Zingiberaceae (الزنجبيليات)',
        nativeRegion: 'جنوب آسيا (الهند وإندونيسيا وجنوب شرق آسيا). تُزرع تجارياً في الهند (90% من الإنتاج العالمي) وباكستان وبنغلاديش.',
        growthHabit: 'نبات جذمور معمّر يصل ارتفاعه إلى متر واحد؛ أوراق كبيرة رمحية؛ جذمور برتقالي لامع عند الكسر.',
        activeCompounds: 'كركيومين (70-80% من الكركيومينويدات)، بيسديميثوكسي كركيومين، ديميثوكسي كركيومين، ar-تورميرون.',
        cultivationNotes: 'مذكور في الفيدا الأثارفا (1500 قبل الميلاد). الأدلة السريرية الأكثر شمولاً في النباتات الطبية مع أكثر من 3000 دراسة منشورة.',
      },
      preparation: [
        { method: 'ذهب الحليب (Turmeric Latte)', desc: 'اخفق 1 ملعقة صغيرة مسحوق + قرصة فلفل أسود + ملعقة صغيرة زيت جوز هند في 250 مل حليب دافئ.', bestFor: 'الاستخدام اليومي للصحة العامة والنوم' },
        { method: 'كبسولات موحّدة', desc: 'اختر صياغات فيتوزوم أو بيبيرين للحصول على امتصاص أعلى.', bestFor: 'الجرعات العلاجية لألم المفاصل والالتهاب المزمن' },
      ],
    },

    'rosemary-immunity': {
      name: 'إكليل الجبل',
      shortDescription: 'مضاد التهاب قوي بحمض الروزمارينيك والكارنوسيك؛ يُثبِّط COX-2 ويُعزِّز مسار Nrf2 لمكافحة الإجهاد التأكسدي والالتهاب المزمن.',
      description: 'إكليل الجبل (Rosmarinus officinalis) غني بمضادات الأكسدة والمضادات للالتهاب الفينولية التي تُثبِّط مسارات الالتهاب الرئيسية (COX-2 وLOX) وتُنشِّط مسار Nrf2 للحماية الخلوية. أُثبتت خصائصه المضادة للالتهاب في دراسات سريرية متعددة.',
      history: 'يُعرف بـ"عشبة التذكر" في اليونان القديمة، استُخدم طبياً لأكثر من 2000 عام في علاج الالتهابات وآلام العضلات وتعزيز الدورة الدموية.',
      symptoms: ['الالتهاب المزمن', 'آلام العضلات والمفاصل', 'ضعف المناعة', 'الإجهاد التأكسدي'],
      warnings: [
        'الحمل: الجرعات العلاجية من الزيت الأساسي محظورة (تأثير مُنبِّه للحيض بالتركيزات العالية).',
        'الصرع: تجنّبي الجرعات العالية من الزيت الأساسي؛ قد تُحفِّز نوبات.',
        'لا تبتلع الزيت الأساسي الخالص لإكليل الجبل.',
      ],
      activeConstituents: [
        { name: 'حمض الروزمارينيك (بوليفينول)', percentage: '', effect: 'مضاد أكسدة ومضاد التهاب أساسي؛ يُثبِّط COX وLOX' },
        { name: 'حمض الكارنوسيك والكارنوسول (ديتيربينات)', percentage: '', effect: 'مضادات أكسدة قوية؛ وقائية للأعصاب؛ مضادة للالتهاب' },
        { name: 'حمض الأورسوليك (تريتيربينويد)', percentage: '', effect: 'يُثبِّط NF-κB ويُقلِّل السيتوكينات الالتهابية' },
        { name: '1,8-سينيول (أوكسيد تيربيني متطاير)', percentage: '', effect: 'مضاد التهاب ومضاد أكسدة؛ يُحسِّن الدورة الدموية' },
        { name: 'α-بينين', percentage: '', effect: 'موسِّع للشعب الهوائية؛ مُثبِّط لـAChE' },
      ],
      moa: [
        { title: 'تثبيط COX-2 وLOX', detail: 'حمض الروزمارينيك والكارنوسول يُثبِّطان إنزيمات COX-2 وLOX مما يُقلِّل تخليق البروستاغلاندينات والليوكوترينات الالتهابية.' },
        { title: 'تنشيط مسار Nrf2', detail: 'حمض الكارنوسيك يُنشِّط مسار Nrf2 مما يحفّز إنتاج إنزيمات مضادة للأكسدة (الغلوتاثيون، SOD) وحماية الخلايا من الإجهاد التأكسدي.' },
        { title: 'تثبيط NF-κB', detail: 'حمض الأورسوليك يُثبِّط إشارات NF-κB المحفِّزة للسيتوكينات الالتهابية (IL-6، TNF-α، IL-1β).' },
        { title: 'تعزيز الإدراك', detail: '1,8-سينيول يُثبِّط أستيل كولينيستيراز (AChE) مما يزيد توافر الأستيل كولين وتحسين الذاكرة والتركيز.' },
      ],
      uses: [
        'الالتهاب المزمن: دعم تثبيط السيتوكينات الالتهابية وإنزيمات COX',
        'آلام العضلات والمفاصل: استخدام موضعي وداخلي مضاد للالتهاب',
        'دعم المناعة: تعزيز الحماية من الإجهاد التأكسدي عبر مسار Nrf2',
        'دعم الإدراك والذاكرة والتركيز',
        'ضعف الدورة الدموية',
      ],
      howToUse: [
        { method: 'شاي إكليل الجبل', instruction: 'انقعي 1-2 غرام عشب مجفف في ماء ساخن 10 دقائق. اشربي كوباً إلى كوبين يومياً.' },
        { method: 'الاستخدام الموضعي (للآلام)', instruction: 'خفِّف 2-3 قطرات زيت أساسي في ملعقة كبيرة زيت ناقل. دلِّكي المنطقة المؤلمة 15 دقيقة.' },
        { method: 'الاستنشاق العطري', instruction: 'استنشقي الزيت الأساسي مباشرةً من الزجاجة أو عبر ناشر للتركيز والذاكرة.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن للاستخدام الموضعي والعطري والشاي بالكميات المعتدلة.' },
        { group: 'الحوامل', notes: 'الكميات الغذائية في الطعام آمنة؛ الجرعات العلاجية من الزيت الأساسي محظورة.' },
        { group: 'مرضى الصرع', notes: 'تجنّبي الجرعات العالية من الزيت الأساسي.' },
        { group: 'مرضى ارتفاع ضغط الدم', notes: 'استخدام بحذر لاحتمال تأثيره على ضغط الدم.' },
      ],
      dosage: {
        standard: 'شاي: كوب إلى كوبين يومياً. زيت أساسي موضعي: 2-3 قطرات في ملعقة كبيرة زيت ناقل. مستخلص موحَّد: حسب تعليمات المنتج.',
        forms: [
          { form: 'شاي', dose: '1-2 غرام عشب/كوب، كوب إلى كوبين يومياً.' },
          { form: 'زيت أساسي (موضعي)', dose: '2-3 قطرات في ملعقة كبيرة زيت ناقل، 2-3 مرات أسبوعياً.' },
          { form: 'مستخلص موحَّد', dose: 'حسب تعليمات المنتج.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة زيت أساسي موضعي: تهيج جلدي، تحسس ضوئي.',
          'جرعة عالية فموية من الزيت الأساسي: نادراً نوبات تشنجية، خطر إجهاض.',
        ],
        management: [
          'موضعي: اغسل المنطقة بالماء والصابون.',
          'فموي كثيف: استشارة طبية فورية.',
        ],
      },
      sideEffects: [
        'آمن جداً بشكل عام بالكميات المعتدلة',
        'جرعات عالية من الزيت الأساسي: نوبات (نادر)، خطر إجهاض',
        'تحسس ضوئي جلدي مع الزيت المركَّز',
      ],
      contraindications: [
        'الحمل: الجرعات العلاجية من الزيت الأساسي محظورة',
        'الصرع: جرعات عالية من الزيت الأساسي',
        'لا يُبتلع الزيت الأساسي الخالص',
      ],
      drugInteractions: [
        'أدوية ضغط الدم: قد يُؤثِّر على ضغط الدم',
      ],
      storage: {
        forms: [
          { form: 'الزيت الأساسي', instructions: 'في زجاجة داكنة محكمة بعيداً عن الضوء والحرارة.' },
          { form: 'العشب المجفف', instructions: 'في حاوية محكمة بعيداً عن الرطوبة.' },
        ],
      },
      benefits: [
        { icon: 'healing', title: 'مضاد التهاب قوي', desc: 'يُثبِّط COX-2 وLOX ويُقلِّل البروستاغلاندينات والسيتوكينات الالتهابية للتخفيف من الالتهاب المزمن.' },
        { icon: 'shield', title: 'حماية مضادة للأكسدة', desc: 'حمض الكارنوسيك يُنشِّط مسار Nrf2 لتقوية الدفاع الخلوي ضد الإجهاد التأكسدي.' },
        { icon: 'psychology', title: 'دعم معرفي', desc: '1,8-سينيول يُثبِّط أستيل كولينيستيراز ويُعزِّز الذاكرة والتركيز.' },
        { icon: 'self_improvement', title: 'دعم المناعة', desc: 'يُعزِّز دفاعات الجهاز المناعي عبر خصائصه المضادة للأكسدة والالتهاب.' },
      ],
      botanicalFacts: { family: 'فصيلة الشفوية', nativeRegion: 'البحر المتوسط', growthHabit: 'شجيرة خشبية معمرة', activeCompounds: 'حمض الروزمارينيك، حمض الكارنوسيك، 1,8-سينيول، حمض الأورسوليك', cultivationNotes: 'يزدهر في تربة جافة جيدة التصريف قلوية مع أشعة شمس كاملة. مقاوم للجفاف.' },
      preparation: [
        { method: 'شاي إكليل الجبل', desc: 'انقع ملعقة إلى ملعقتين عشب مجفف في ماء ساخن 10 دقائق. كوب إلى كوبين يومياً.', bestFor: 'الدعم المناعي وتثبيط الالتهاب الداخلي' },
        { method: 'الزيت الموضعي للآلام', desc: 'خفِّف 2-3 قطرات زيت أساسي في ملعقة كبيرة زيت ناقل ودلِّك المنطقة المؤلمة.', bestFor: 'آلام العضلات والمفاصل' },
      ],
    },

    'garlic-immunity': {
      name: 'الثوم',
      shortDescription: 'مضاد طبيعي قوي للعدوى والالتهابات؛ يُعزّز المناعة بالأليسين والمركبات الكبريتية التي تُثبِّط البكتيريا والفيروسات ومسببات الأمراض الانتهازية.',
      description: 'الثوم Allium sativum من أقدم النباتات الطبية وأكثرها بحثًا في العالم. مركباته الكبريتية (بقيادة الأليسين) تُمارس نشاطًا مضادًا للميكروبات والفيروسات والفطريات، بينما تُعدِّل استجابة الجهاز المناعي الفطري والتكيفي.',
      symptoms: ['ضعف المناعة', 'التهابات متكررة', 'ارتفاع الكوليسترول', 'ارتفاع ضغط الدم', 'الالتهابات'],
      warnings: [
        'يُخفِّض ضغط الدم وسيولة الدم؛ أوقف استخدامه قبل أسبوعين من أي عملية جراحية.',
        'يتداخل مع مضادات التخثر (الوارفارين والأسبرين)؛ استشر طبيبك قبل الجمع بينهما.',
        'تناول كميات علاجية كبيرة على معدة فارغة قد يُسبِّب تهيجًا معديًا حادًا.',
        'الثوم الخام الطازج بكميات كبيرة قد يُسبِّب حرقًا في المريء لدى الأفراد الحساسين.',
      ],
      activeConstituents: [
        { name: 'الأليين والأليسين (مركبات كبريتية عضوية)', percentage: '', effect: 'نشاط مضاد للميكروبات والفيروسات والفطريات الأساسي؛ الأليسين يتشكّل عند سحق الثوم الطازج' },
        { name: 'الأجوين ومركبات الثيوسولفينات (مستقلبات كبريتية ثانوية)', percentage: '', effect: 'تأثيرات مضادة للتخثر وخافضة للكوليسترول ومعدِّلة للمناعة' },
        { name: 'غليكوسيدات الكيرستين والأحماض الفينولية', percentage: '', effect: 'مضادة للأكسدة ومضادة للالتهاب؛ تحمي الخلايا من الإجهاد التأكسدي' },
        { name: 'السيلينيوم والجرمانيوم (معادن نادرة)', percentage: '', effect: 'يُعزِّزان نشاط بيروكسيداز الغلوتاثيون ويدعمان الحماية المناعية الخلوية' },
      ],
      moa: [
        { title: 'النشاط المضاد للميكروبات الشامل', detail: 'الأليسين يتفاعل مع مجموعات الثيول في إنزيمات الكائنات الدقيقة مما يُثبِّط استقلابها ويوقف نموها؛ فعّال ضد طيف واسع من البكتيريا والفيروسات والفطريات.' },
        { title: 'تعديل المناعة الفطرية', detail: 'يُعزِّز نشاط البلعمة في الضامّات والعدلات؛ يُحفِّز إنتاج خلايا NK؛ يرفع مستوى الغلوبولين المناعي IgA وIgG.' },
        { title: 'تثبيط COX وLOX', detail: 'المركبات الكبريتية تُثبِّط مسارات الأراكيدونيك مما يُقلِّل إنتاج السيتوكينات الالتهابية والبروستاغلاندينات.' },
        { title: 'تأثيرات القلب والأوعية', detail: 'يُثبِّط تجمّع الصفائح الدموية ويُخفِّض الكوليسترول LDL والثلاثيات؛ يُوسِّع الأوعية الدموية عبر زيادة أكسيد النيتريك.' },
      ],
      uses: [
        'تعزيز المناعة والوقاية من العدوى الموسمية',
        'دعم علاج نزلات البرد والأنفلونزا والعدوى الجرثومية',
        'إدارة ارتفاع ضغط الدم الخفيف إلى المعتدل',
        'خفض الكوليسترول والدهون الثلاثية',
        'الوقاية من الجلطات الدموية والدعم القلبي الوعائي',
        'نشاط مضاد للفطريات (بما فيها المبيضة)',
      ],
      howToUse: [
        { method: 'الثوم الطازج الخام', instruction: 'اسحق فصًّا وانتظر 5-10 دقائق (ينشّط إنزيم الأليينيز ويُكوِّن الأليسين)، ثم تناوله مع الطعام لتجنّب التهيّج المعدي.' },
        { method: 'مستخلص الثوم المعتَّق', instruction: 'كبسولات أو سائل بجرعة 600-1200 مغ يوميًا مقسّمة على وجبات، أقل تأثيرًا على الرائحة مع الحفاظ على الخصائص الطبية.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن بالجرعات الغذائية والعلاجية العادية. الجرعات العلاجية العالية تستلزم الحذر مع أدوية التخثر.' },
        { group: 'الأطفال (فوق 12 سنة)', notes: 'آمن بكميات غذائية معتدلة. يُتجنَّب الثوم الخام المركَّز.' },
        { group: 'الحوامل', notes: 'الكميات الغذائية في الطعام آمنة؛ الجرعات العلاجية المركَّزة تستلزم استشارة الطبيب.' },
        { group: 'قبل الجراحة', notes: 'أوقف الجرعات العلاجية قبل أسبوعين من أي تدخّل جراحي.' },
      ],
      dosage: {
        standard: 'الثوم الطازج: 2-4 فصوص يوميًا مع الطعام. مستخلص مسحوق (موحَّد): 600-1200 مغ يوميًا مقسَّمة. مستخلص الثوم المعتَّق: 600-1200 مغ يوميًا.',
        forms: [
          { form: 'ثوم طازج', dose: 'فص إلى فصَّين يوميًا مسحوقَين مع الطعام.' },
          { form: 'مستخلص مسحوق موحَّد (1.3% أليين)', dose: '600-1200 مغ يوميًا مقسَّمة على وجبتين إلى ثلاث.' },
          { form: 'مستخلص معتَّق (Aged Garlic Extract)', dose: '600-1200 مغ يوميًا.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعات عالية جدًا: حرق شديد في المريء والمعدة، غثيان وإسهال.',
          'انخفاض حاد في ضغط الدم لدى مرضى ضغط الدم مع الجمع بين الجرعات العالية والأدوية.',
        ],
        management: [
          'خفّض الجرعة وتناول الثوم دائمًا مع الطعام.',
          'أوقف الاستخدام عند الأعراض المعدية الحادة وراجع الطبيب.',
        ],
      },
      sideEffects: [
        'رائحة الفم والجسم (شائع مع الثوم الطازج)',
        'تهيّج معدي معوي عند الأخذ على معدة فارغة',
        'حرق خفيف في الفم أو المريء بالجرعات الكبيرة',
        'ردود فعل تحسسية نادرة (طفح جلدي، ربو)',
      ],
      contraindications: [
        'اضطرابات النزيف الحادة',
        'قبل الجراحة بأسبوعين',
        'الحساسية المعروفة من نباتات جنس Allium (بصل، كرات، ثوم)',
      ],
      drugInteractions: [
        'مضادات التخثر (وارفارين، هيبارين): يزيد خطر النزيف',
        'مضادات الصفيحات (أسبرين، كلوبيدوجريل): تأثير مضاعف',
        'أدوية ضغط الدم: تأثير خافض إضافي',
        'أدوية فيروس نقص المناعة (Saquinavir): يُقلِّل تركيزه في البلازما',
      ],
      storage: {
        forms: [
          { form: 'فصوص طازجة', instructions: 'تُحفظ في مكان جاف بارد بعيدًا عن الرطوبة؛ لا تُبرَّد الفصوص غير المقشّرة.' },
          { form: 'مستخلص/كبسولات', instructions: 'وعاء محكم بعيدًا عن الضوء والحرارة والرطوبة وفق إرشادات الشركة المصنّعة.' },
        ],
      },
      benefits: [
        { icon: 'shield', title: 'تعزيز المناعة', desc: 'يُعزِّز نشاط الضامّات وخلايا NK ويرفع مستويات الغلوبولين المناعي للدفاع الشامل ضد العدوى.' },
        { icon: 'healing', title: 'مضاد الالتهاب', desc: 'يُثبِّط COX وLOX ويُقلِّل السيتوكينات الالتهابية مما يُخفِّف الالتهاب المزمن الجهازي.' },
        { icon: 'vaccines', title: 'مضاد للميكروبات', desc: 'الأليسين فعّال ضد طيف واسع من البكتيريا والفيروسات والفطريات بما فيها السلالات المقاومة للمضادات الحيوية.' },
        { icon: 'favorite', title: 'صحة القلب والأوعية', desc: 'يُخفِّض الكوليسترول LDL وضغط الدم ويُثبِّط تجمّع الصفائح للوقاية الشاملة من أمراض القلب.' },
      ],
      botanicalFacts: {
        family: 'فصيلة الثوميات (Alliaceae)',
        nativeRegion: 'آسيا الوسطى؛ يُزرع على نطاق عالمي واسع',
        growthHabit: 'نبات عشبي بصلي؛ يصل ارتفاعه إلى 60-90 سم؛ رأس مُكوَّنة من فصوص محاطة بأغشية بيضاء',
        activeCompounds: 'الأليسين، الأجوين، S-ألليل سيستين (SAC)، ثيوسولفينات، كيرستين، السيلينيوم',
        cultivationNotes: 'مُستخدَم طبياً لأكثر من 5000 عام في الحضارات المصرية والرومانية والصينية والهندية.',
      },
      preparation: [
        { method: 'الثوم الطازج المسحوق', desc: 'اسحق الفصوص واتركها 5-10 دقائق قبل الاستهلاك لتحسين تكوين الأليسين. تناوله مع الطعام لتقليل التهيّج المعدي.', bestFor: 'تعزيز المناعة، علاج العدوى الحادة' },
        { method: 'مستخلص الثوم المعتَّق', desc: 'معالجة في درجة حرارة منخفضة تحوّل الأليسين إلى S-ألليل سيستين الأكثر استقرارًا وأقل تأثيرًا على الرائحة.', bestFor: 'الاستخدام اليومي الوقائي، صحة القلب' },
      ],
    },

    'dill-seed-menstrual': {
      name: 'بذور الشبت',
      shortDescription: 'مُخفِّف فعّال لتشنجات الدورة الشهرية بخصائصه الفيتوإستروجينية. ⚠️ محرَّم تاماً خلال الحمل وعند اضطراب الغدة الدرقية.',
      description: 'بذور الشبت Anethum graveolens تحتوي على مركبات فيتوإستروجين تُوازن الأعراض الهرمونية وتُرخِّي العضلات الملساء الرحمية. البذور هي الجزء الطبي فقط؛ الأوراق لا تملك هذه الخصائص. يُحظر استخدامها إطلاقاً أثناء الحمل.',
      symptoms: ['تشنجات الدورة الشهرية', 'انتفاخ الحيض', 'غثيان الدورة', 'غازات الجهاز الهضمي'],
      warnings: [
        'محظور تماماً أثناء الحمل: مُسقِط للجنين قوي ومُحفِّز شديد للحيض؛ خطر الإجهاض مرتفع جداً.',
        'قصور الغدة الدرقية: يُخفِّض مستويات هرمون الغدة الدرقية بشكل ملحوظ؛ يُحظر الاستخدام.',
        'الرضع أقل من 12 شهراً: لا يُعطى أبداً حتى في صيغة الشاي الخفيف.',
      ],
      activeConstituents: [
        { name: 'كارفون (الزيت الأساسي الرئيسي)', percentage: 'حتى 60%', effect: 'جزيء مُرخٍّ قوي للعضلات الملساء؛ يحجب تدفق الكالسيوم المعتمد على الجهد في الخلايا العضلية؛ طارد للغازات' },
        { name: 'ليمونين (زيت أساسي ثانوي)', percentage: '', effect: 'مضاد للأكسدة؛ مُحفِّز إنزيمات الكبد؛ مضاد بكتيري ثانوي' },
        { name: 'α-فيلاندرين', percentage: '', effect: 'خصائص مضادة للبكتيريا الثانوية' },
      ],
      moa: [
        { title: 'مُرخٍّ للعضلات الملساء', detail: 'الكارفون يُرخِّي العضلات الملساء بحجب تدفق الكالسيوم المعتمد على الجهد في الرحم والجهاز الهضمي؛ يُخفِّف التشنجات الشديدة.' },
        { title: 'طارد للغازات', detail: 'الزيوت المتطايرة تُحفِّز حركة الجهاز الهضمي وتُرخِّي العضلة العاصرة المريئية السفلى مما يُسرِّع طرح الغازات المحبوسة.' },
        { title: 'مضاد للميكروبات المعوية', detail: 'تأثير مثبِّط للبكتيريا ضد E. coli والمكورات العنقودية في الجهاز الهضمي.' },
      ],
      uses: [
        'عسر الطمث الأولي (تشنجات الدورة الشهرية، مثيل لحمض الميفيناميك في التجارب السريرية)',
        'مغص الرضع (شاي خفيف فقط، للأعمار >6 أشهر)',
        'الانتفاخ وغازات الجهاز الهضمي',
        'عسر الهضم الوظيفي والتشنجات المعوية',
      ],
      howToUse: [
        { method: 'شاي البذور للدورة الشهرية', instruction: 'اسحقي ملعقة صغيرة من البذور (البذور فقط لا الأوراق) في إناء مغلق، أضيفي ماء مغلياً واتركيه 10 دقائق مغطى. اشربي كوبين إلى ثلاثة يومياً عند بدء الآلام.' },
        { method: 'مسحوق البذور', instruction: 'أضيفي ملعقة صغيرة (3 غرام) من المسحوق الطازج إلى ماء أو عصير. قسِّمي الجرعة اليومية على 3 وجبات.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغات (للدورة الشهرية)', notes: 'فعّال وآمن للاستخدام خلال أيام الدورة الشهرية.' },
        { group: 'الحوامل', notes: 'محظور تماماً: خطر إجهاض مرتفع جداً.' },
        { group: 'الرضع (<12 شهراً)', notes: 'لا يُعطى أبداً.' },
        { group: 'مرضى الغدة الدرقية', notes: 'محظور: يُخفِّض مستويات هرمون الغدة الدرقية.' },
      ],
      dosage: {
        standard: 'شاي: ملعقة صغيرة بذور مسحوقة، كوبان إلى ثلاثة يومياً. مسحوق: 3 غرام يومياً مقسَّمة على 3 جرعات.',
        forms: [
          { form: 'شاي البذور', dose: 'ملعقة صغيرة بذور مسحوقة في وعاء مغلق، 2-3 أكواب يومياً.' },
          { form: 'مسحوق البذور', dose: '3 غرام إجمالياً يومياً في 3 جرعات مقسَّمة.' },
        ],
      },
      overdose: {
        intro: 'بذور الشبت تمتلك هامش أمان واسعاً جداً، ولم تُرصد حالات تسمم سريرية من البذور الخام. تظهر السُّمية فقط في حالات إساءة استخدام الزيت الأساسي النقي بكميات كبيرة (أكثر من 100 مل).',
        symptoms: [
          'جرعة زائدة: تهيج كلوي حاد، حساسية ضوئية شديدة (خاصةً من الزيت الأساسي >100 مل)، غثيان واضطراب معدي.',
          'جرعة زائدة عند الحامل: خطر إجهاض مرتفع جداً.',
        ],
        management: [
          'إيقاف الاستخدام فوراً، الإماهة الجيدة، ومتابعة طبية عند الاشتباه باضطراب الكلى.',
          'للحامل: تدخل طبي طارئ فوري.',
        ],
      },
      sideEffects: [
        'متحمَّل جداً بشكل عام في الجرعات العادية',
        'عدم راحة هضمي خفيف عند الجرعات الكبيرة',
      ],
      contraindications: [
        'الحمل: محظور تماماً',
        'قصور الغدة الدرقية: محظور',
        'الرضع أقل من 12 شهراً: محظور',
      ],
      drugInteractions: [
        'أدوية الغدة الدرقية (ليفوثيروكسين): قد يُقلِّل من فعاليتها',
      ],
      storage: {
        forms: [
          { form: 'البذور والمسحوق', instructions: 'يُخزَّن في وعاء محكم الإغلاق بعيداً عن الضوء والهواء للحفاظ على الكارفون المتطاير.' },
        ],
      },
      factsAndMyths: [
        { myth: '"الشبت آمن تماماً كمدرّ للحليب للأمهات المرضعات."', fact: 'بينما يُستخدم تقليدياً لزيادة إنتاج الحليب، تنصح هيئة الدواء المصرية (EDA) بالحذر أثناء الرضاعة بسبب عدم كفاية بيانات السلامة فيما يخص تعرض الرضيع عبر حليب الثدي.' },
        { myth: '"يمكن للشبت أن يحل محل المسكنات لتشنجات الدورة الشهرية."', fact: 'إنه بديل طبيعي قوي، لكن تُطلب المتابعة السريرية لمن لديهم اضطرابات هرمونية موجودة مسبقاً.' },
      ],

      benefits: [
        { icon: 'spa', title: 'تخفيف عسر الطمث', desc: 'نشاط مضاد للتشنج يُحدثه الكارفون يُريح تقلصات الرحم الشديدة؛ مقارب في التجارب السريرية لحمض ميفينامي (بونستان).' },
        { icon: 'nutrition', title: 'مضاد للتشنج الهضمي', desc: 'يُرخّي العضلة الملساء المعدية المعوية لتخفيف الغازات وعسر الهضم والانتفاخ وتشنجات المعدة.' },
        { icon: 'child_friendly', title: 'مُهدِّئ المغص الرضيع', desc: 'المُستحضرات التجارية الآمنة والخالية من الكحول تُقلل مغص الرضع وتريح البكاء الناتج عن الغازات.' },
      ],
      botanicalFacts: { family: 'Apiaceae', nativeRegion: 'جنوب وغرب آسيا (يُرجَّح أفغانستان/الهند)؛ منتشر طبيعياً في أوروبا والبحر المتوسط', growthHabit: 'عشب حولي أو ثنائي الحول بارتفاع 40-60 سم؛ أوراق ريشية عطرة؛ أزهار صفراء مظلية؛ البذور هي الجزء الدوائي', activeCompounds: 'الكارفون (30-60%)، الليمونين، أنيثول، فيتامين C، كالسيوم', cultivationNotes: 'سهل الزراعة في المناخ المعتدل؛ تُجمع البذور عند اصفرار المظلات.' },
      preparation: [
        { method: 'شاي البذور المُغطى', desc: 'سحق ملعقة صغيرة من البذور فوراً قبل النقع في ماء مغلٍ مُغطى لمدة 10 دقائق.', bestFor: 'عسر الطمث، الغازات، المغص الرضيع، تشنجات الهضم' },
        { method: 'مسحوق جاف', desc: '3 غرام يومياً في جرعات مقسمة مخلوطاً بالطعام أو الماء.', bestFor: 'الجرعة العلاجية المتسقة لعسر الطمث أو عسر الهضم' },
      ],
    },

    'cinnamon-menstrual': {
      name: 'القرفة',
      shortDescription: 'تُنظِّم مستوى السكر في الدم وتُخفِّف تشنجات الدورة الشهرية. يُفضَّل نوع السيلاني؛ الكاسيا تحتوي على الكومارين الضار بالكبد.',
      description: 'القرفة السيلانية Cinnamomum zeylanicum من أقدم التوابل المُستخدَمة طبياً. السينامالدهيد يُثبِّط إنزيمات الالتهاب ويُحسِّن حساسية الإنسولين. القرفة الكاسيا تحتوي على الكومارين بتركيزات عالية قد تُسبِّب تسمماً كبدياً عند الاستخدام المطوّل.',
      symptoms: ['تشنجات الدورة الشهرية', 'ارتفاع السكر', 'التهاب المفاصل', 'صعوبة الهضم'],
      warnings: [
        'استخدمي القرفة السيلانية فقط للعلاج: قرفة الكاسيا تُسبِّب تلف الكبد من الكومارين عند الجرعات العلاجية.',
        'قرحة المعدة أو التهاب المعدة الحاد: تتفاقم مع القرفة؛ يُحظر الاستخدام الفموي.',
        'الحمل: الجرعات العلاجية العالية محظورة؛ الكميات الغذائية آمنة.',
      ],
      activeConstituents: [
        { name: 'ترانس-سينامالدهيد (المتطاير الأساسي)', percentage: '', effect: 'مُثبِّط مزدوج للـCOX/LOX؛ مضاد للالتهاب والألم؛ مضاد للميكروبات' },
        { name: 'يوجينول (فينول متطاير)', percentage: '', effect: 'مخدر موضعي محلي؛ مضاد للالتهاب بتأثير موضعي محدد' },
        { name: 'عفص مكثَّف (بوليفينولات عالية الوزن الجزيئي)', percentage: '', effect: 'قابضات؛ تُسبِّب انقباضاً وعائياً رحمياً موضعياً مما يُقلِّل غزارة الحيض' },
        { name: 'كومارين', percentage: 'آثار في السيلاني؛ مرتفع في الكاسيا', effect: 'خفيف في السيلاني (آمن)؛ مرتفع خطير في الكاسيا (سمية كبدية محتملة)' },
      ],
      moa: [
        { title: 'مضاد للالتهاب ومسكِّن للألم', detail: 'تثبيط مزدوج مباشر للـCOX وLOX يوقف تخليق البروستاغلاندين المسؤول عن تشنجات الدورة الشهرية.' },
        { title: 'مُقلِّل لغزارة الحيض', detail: 'العفص يُحدث انقباضاً وعائياً موضعياً في بطانة الرحم مما يُقلِّل النزيف الحيضي الغزير.' },
        { title: 'مُرخٍّ للرحم', detail: 'إرخاء مباشر للعضلات الملساء الرحمية مما يُخفِّف التشنجات.' },
        { title: 'تحسين حساسية الأنسولين', detail: 'يُعزِّز الحساسية المحيطية للأنسولين مما يُقلِّل الأندروجين المنتشر (فائدة لمتلازمة تكيس المبايض).' },
      ],
      uses: [
        'عسر الطمث (تشنجات الدورة الشهرية)',
        'غزارة الحيض',
        'متلازمة تكيس المبايض: تعديل الأنسولين والأندروجين',
        'عسر الهضم الوظيفي',
        'خفض سكر الدم المرتفع كمساعد',
      ],
      howToUse: [
        { method: 'شاي القرفة السيلانية', instruction: 'أضيفي غراماً واحداً من قشر القرفة السيلانية إلى ماء مغلٍ في إناء مغلق لمدة 10 دقائق. تجنّبي الغليان المفتوح.' },
        { method: 'كبسولات موحَّدة', instruction: 'استخدمي مستخلص القرفة السيلانية الموحَّد فقط. 500-1000 مغ مرة إلى مرتين يومياً مع الوجبات.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن للاستخدام العلاجي بالقرفة السيلانية ضمن الجرعات الموصى بها.' },
        { group: 'الحوامل', notes: 'الكميات الغذائية في الطعام آمنة؛ الجرعات العلاجية العالية محظورة.' },
        { group: 'مرضى الكبد', notes: 'تجنّبي القرفة الكاسيا تماماً؛ القرفة السيلانية مقبولة بحذر.' },
      ],
      dosage: {
        standard: 'قشر قرفة سيلانية: 1-4 غرام يومياً في جرعات مقسَّمة. الحد الأقصى: 6 غرام/اليوم. استخدمي السيلانية فقط للبروتوكولات العلاجية.',
        forms: [
          { form: 'شاي قشر القرفة السيلانية', dose: '1 غرام في إناء مغلق، 2-3 مرات يومياً.' },
          { form: 'كبسولات مستخلص موحَّد (سيلاني)', dose: '500-1000 مغ 1-2 مرة يومياً مع الوجبات.' },
        ],
      },
      overdose: {
        intro: 'حد الجرعة الزائدة: تناول أكثر من 6 غرامات من اللحاء الجاف يومياً لفترات ممتدة، أو تجاوز 200 مغ يومياً من الزيت الأساسي الخالص غير المخفف.',
        symptoms: [
          'جرعة زائدة (خاصةً الكاسيا): تهيج معدي حاد، حرقة، دوار، تسارع ضربات القلب، ارتفاع إنزيمات الكبد ALT/AST.',
          'الزيت الأساسي الخالص: تسمم حاد مع اضطرابات معوية وعصبية وقلبية.',
        ],
        management: [
          'إيقاف الاستخدام فوراً، مراقبة وظائف الكبد عند الاستخدام المطوّل للكاسيا.',
          'الزيت الأساسي: تدخل طبي طارئ.',
        ],
      },
      sideEffects: [
        'تهيج معدي وحرقة المعدة عند الجرعات العالية',
        'حرق في الفم والحلق',
        'القرفة الكاسيا: سمية كبدية من الكومارين عند الاستخدام المطوّل',
      ],
      contraindications: [
        'قرحة المعدة أو التهاب المعدة النشط',
        'القرفة الكاسيا في الجرعات العلاجية (سمية الكومارين)',
        'الحمل: الجرعات العلاجية العالية محظورة',
      ],
      drugInteractions: [
        'أدوية السكري: تأثير إضافي على خفض سكر الدم',
        'مضادات التخثر: العفص والسينامالدهيد قد يُعزِّزان تأثيرها',
      ],
      storage: {
        forms: [
          { form: 'القشر والمسحوق', instructions: 'يُخزَّن في حاوية محكمة الإغلاق بعيداً عن الرطوبة والضوء للحفاظ على الزيوت المتطايرة.' },
        ],
      },
      factsAndMyths: [
        { myth: '"جميع أنواع القرفة متشابهة، ويمكن استخدام أي قرفة بأمان في الجرعات العلاجية العالية."', fact: 'تحتوي قرفة الكاسيا على تركيزات عالية من الكومارين التي يمكن أن تسبب سمية الكبد (تسمم كبدي) إذا تم تناولها بجرعات دوائية لفترات ممتدة. القرفة السيلانية الحقيقية لها مستويات كومارين ضئيلة وهي الاختيار الآمن للاستخدام العلاجي المطوّل.' },
      ],

      benefits: [
        { icon: 'spa', title: 'تخفيف آلام الدورة الشهرية', desc: 'التثبيط المزدوج لـ COX/LOX يُقلل تخليق البروستاغلاندين، مما يُخفف سريرياً شدة ألم الدورة والغثيان والقيء.' },
        { icon: 'bloodtype', title: 'التحكم في غزارة الدورة', desc: 'التانينات المكثفة تعمل كقابضات موضعية في بطانة الرحم، مما يُقلل فعلياً من فقدان الدم الشهري المفرط.' },
        { icon: 'monitor_heart', title: 'دعم تنظيم السكر', desc: 'تعزيز إشارات الإنسولين يُحسّن حساسية الأنسجة للغلوكوز؛ مفيد تحديداً في متلازمة المبيض المتعدد الكيسات.' },
      ],
      botanicalFacts: { family: 'Lauraceae', nativeRegion: 'سريلانكا (سيلان): موطن القرفة الحقيقية؛ Cinnamomum cassia من جنوب الصين', growthHabit: 'شجرة دائمة الخضرة بارتفاع 10-15 م؛ اللحاء الداخلي الرقيق الورقي (عصي القرفة) هو الجزء الدوائي', activeCompounds: 'ألديهيد السينامون (سيلان: 55-90%)، يوجينول، ثنائي-أوكسي-سينامالديهيد (سيلان)؛ سيناميلاسيتات (كاسيا)', cultivationNotes: 'يُحصد اللحاء من الفروع الصغيرة ويُجفَّف لتكوين العصي؛ موسم الحصاد مرتين سنوياً.' },
      preparation: [
        { method: 'منقوع اللحاء (سيلان فقط)', desc: 'نقع 1 غرام من لحاء سيلان المسحوق في ماء مغلٍ مغطى لمدة 10 دقائق.', bestFor: 'عسر الطمث، غزارة الدورة، متلازمة المبيض المتعدد الكيسات، الشكاوى الهضمية' },
        { method: 'كبسولات مستخلص موحد', desc: 'كبسولات قرفة سيلان الموحدة تجارياً للجرعة العلاجية المتسقة.', bestFor: 'متلازمة المبيض المتعدد الكيسات، إدارة السكر، التمثيل الغذائي' },
      ],
    },

    'ginger-pregnancy': {
      name: 'الزنجبيل',
      shortDescription: 'علاج غير دوائي آمن وفعّال ومبني على الأدلة لعلاج الغثيان والقيء الخفيف إلى المتوسط (غثيان الصباح) خلال الحمل.',
      description: 'يُستخدم الزنجبيل في المقام الأول خلال الحمل كعلاج غير دوائي آمن وفعّال ومبني على الأدلة لعلاج الغثيان والقيء الخفيف إلى المتوسط (غثيان الصباح). الجنجيرولات والشوجاولات هي المكوّنات الحارة الرئيسية المسؤولة عن الفوائد العلاجية؛ وتشمل المكوّنات الأخرى التيربينويدات (مثل الزنجيبيرين) والزنجيبيرول. تؤكد التجارب العشوائية المضبوطة الواسعة أن فاعليته تضاهي إحصائياً البيريدوكسين (فيتامين ب6) وتتفوق بشكل ملحوظ على الدواء الوهمي في تخفيف شدة الغثيان، دون أي زيادة إحصائية في نتائج الحمل السلبية أو السمية الجنينية.',
      activeConstituents: [
        { name: 'الجنجيرولات', percentage: '', effect: 'المكوّنات الحارة الرئيسية المسؤولة عن الفوائد العلاجية.' },
        { name: 'الشوجاولات', percentage: '', effect: 'المكوّنات الحارة الرئيسية المسؤولة عن الفوائد العلاجية.' },
        { name: 'التيربينويدات (الزنجيبيرين، الزنجيبيرول)', percentage: '', effect: 'مكوّنات فعّالة أخرى في الزنجبيل.' },
      ],
      moa: [
        { title: 'تحفيز الجهاز الهضمي', detail: 'يزيد الزنجبيل من قوة المعدة وحركيتها (التمعج). عن طريق تسريع إفراغ المعدة، يُقلِّل من المدة التي يمكث فيها الطعام في المعدة، مما يُقلِّل الغثيان.' },
        { title: 'تثبيط مستقبلات السيروتونين (5-HT3)', detail: 'تعمل مركبات الزنجبيل (الجنجيرولات والشوجاولات) كمضادات تنافسية على مستقبلات السيروتونين المحيطية والمركزية (5-HT3). السيروتونين ناقل عصبي رئيسي يُسبِّب القيء عند إطلاقه استجابةً للغثيان، وتثبيطه يُقلِّل هذا الإحساس.' },
        { title: 'التأثير المحلي المباشر على الأمعاء', detail: 'يُعتقد أن الزنجبيل يُمارس معظم تأثيره المضاد للقيء محلياً داخل الجهاز الهضمي.' },
        { title: 'التأثيرات المضادة للالتهاب وطاردة الغازات', detail: 'يُوفِّر الزنجبيل راحةً من عسر الهضم (اضطراب المعدة) ويُساعد في مشاكل الحركة.' },
      ],
      uses: [
        'الاستخدام الأساسي في الحمل: علاج غير دوائي آمن وفعّال ومبني على الأدلة لعلاج الغثيان والقيء الخفيف إلى المتوسط في الحمل (غثيان الصباح)',
        'قد يُساعد الزنجبيل الطازج في تخفيف الأعراض المصاحبة للبرد الشائع، مثل الاحتقان والصداع والغثيان',
        'يُوفِّر الزنجبيل خصائص مضادة للالتهابات ومضادة للأكسدة ومضادة للقيء وخصائص مضادة للسرطان المحتملة؛ يُستخدم على نطاق واسع لعلاج الغثيان ومشاكل الهضم وآلام المفاصل والمشاكل الأيضية',
      ],
      howToUse: [
        { method: 'شاي الزنجبيل الطازج', instruction: 'انقع ملعقة إلى ملعقتين من الزنجبيل الطازج المبشور أو المقطّع في ماء ساخن لمدة 5-10 دقائق.' },
        { method: 'كبسولات الزنجبيل', instruction: 'ابحثي عن مكملات تحتوي على 250 مغ من مسحوق الزنجبيل، تُؤخذ عادةً 2-4 مرات يومياً، مع التأكد من موافقة الطبيب عليها.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال (أقل من سنتين)', notes: 'لا يُنصح باستخدام الكميات الطبية بوجه عام.' },
        { group: 'الأطفال (سنتان فأكبر)', notes: 'يمكن استخدام كميات صغيرة من الزنجبيل الطازج في الطعام لعلاج الغثيان أو أعراض البرد.' },
        { group: 'البالغون (18 سنة فأكبر)', notes: 'يُنصح بالاعتدال، إذ قد لا تكون الكميات الكبيرة جداً مناسبة.' },
        { group: 'الحوامل', notes: 'الجرعات الطبية الموحَّدة المنخفضة (حتى 1 غ/يوم) فعّالة سريرياً وآمنة، بشرط مراقبتها من قِبَل مقدم الرعاية الصحية.' },
      ],
      dosage: {
        standard: 'الحمل: جرعة موحَّدة 250 مغ عن طريق الفم، 4 مرات يومياً (الحد الأقصى الإجمالي للجرعة اليومية: 1,000 مغ / 1 غرام). يجب استخدام الجرعات الأعلى خلال الحمل بحذر شديد بسبب محدودية بيانات السلامة.',
        forms: [
          { form: 'كبسولات الزنجبيل الموحَّدة (250 مغ)', dose: 'كبسولة واحدة تُؤخذ 4 مرات يومياً؛ الحد الأقصى اليومي 1,000 مغ خلال الحمل.' },
          { form: 'شاي الزنجبيل الطازج', dose: 'ملعقة إلى ملعقتين من الزنجبيل المبشور في ماء ساخن لمدة 5-10 دقائق.' },
        ],
      },
      overdose: {
        intro: 'لا يوجد تعريف قانوني صارم "للجرعة السامة" من الزنجبيل، لكن الكميات اليومية المرتفعة تُعدّ مفرطة بشكل عام وقد تؤدي إلى آثار جانبية سلبية.',
        symptoms: [
          'مخاطر النزيف: بسبب خصائص الزنجبيل المضادة للصفيحات الدموية، يمكن أن يزيد الإفراط في تناوله من خطر النزيف أو الكدمات، وهو أمر خطير بشكل خاص قرب وقت الولادة.',
          'اضطرابات الجهاز الهضمي: حرقة المعدة الشديدة وارتجاع الحمض والانتفاخ والإسهال.',
          'تهيج الفم والحلق: إحساس بالحرقة أو الألم في الفم.',
          'اضطرابات ضربات القلب: قد تؤثر الجرعات العالية نادراً على نظم القلب عند الجرعات المفرطة.',
          'اكتئاب الجهاز العصبي المركزي: يمكن أن تُسبِّب الجرعات العالية جداً خمولاً أو تعباً.',
        ],
        management: [
          'التوقف الفوري عن تناول الزنجبيل والحفاظ على الترطيب لتنظيف الجهاز.',
          'الإدارة العَرَضية: إعطاء مضادات الحموضة أو مثبطات مضخة البروتون (PPIs) للتهيج الشديد للمعدة.',
          'التماس العناية الطبية عند ظهور أعراض شديدة كخفقان القلب أو مشاكل التنفس أو النزيف المفرط.',
          'لا يوجد ترياق؛ الإدارة داعمة.',
        ],
      },
      sideEffects: [
        'التحفيز الرحمي: يمكن أن تُحفِّز الجرعات العالية نظرياً تقلصات الرحم، مما يزيد من مخاطر الولادة المبكرة في أواخر الحمل.',
        'اضطرابات الجهاز الهضمي: حرقة المعدة وارتجاع الحمض والإسهال والانتفاخ من أكثر الآثار الجانبية شيوعاً، خاصةً عند تناولها بكميات كبيرة.',
        'تهيج الفم/الحلق: قد يحدث إحساس بالحرقة في الفم أو الحلق.',
        'التهاب الجلد التماسي: قد يُسبِّب التطبيق الموضعي لزيوت الزنجبيل الأساسية احمراراً أو تهيجاً أو طفحاً تحسسياً في الجلد.',
        'النشاط المضاد للصفيحات الدموية: تثبيط تجمّع الصفيحات الدموية، مما يُهيئ المريض للنزيف.',
      ],
      contraindications: [
        'أواخر الحمل / قرب وقت الولادة: يجب التعامل مع الاستخدام قرب وقت الولادة بحذر بسبب النشاط الخفيف المضاد للصفيحات للزنجبيل.',
        'اضطرابات النزيف: يمتلك الزنجبيل تأثيرات مضادة للتخثر (مخففة للدم)، مما يجعله غير آمن للنساء المصابات باضطرابات النزيف أو اللواتي يتناولن أدوية مخففة للدم (مثل الوارفارين).',
        'حالات الحمل عالية الخطورة: موانع الاستعمال للنساء الحوامل اللواتي لديهن تاريخ سريري موثّق لحالات الإجهاض التلقائي المتكررة أو النزيف المهبلي غير المبرر.',
      ],
      drugInteractions: [
        'مضادات التخثر / الأدوية المضادة للصفيحات (مثل الوارفارين والأسبرين والكلوبيدوغريل والإينوكسابارين): تفاعل تآزري — يُعزِّز الزنجبيل خطر النزيف عن طريق تثبيط تخليق ثرومبوكسان الصفيحات الدموية.',
        'عوامل مضادة لمرض السكري (مثل الإنسولين والميتفورمين والسلفونيلوريا): تُعزِّز الجرعات العالية من الزنجبيل امتصاص الجلوكوز في الأنسجة الحساسة للإنسولين، مما يزيد من خطر انخفاض سكر الدم.',
        'الأدوية الخافضة لضغط الدم / حاصرات قنوات الكالسيوم (مثل الأملوديبين والنيفيديبين): يُظهر الزنجبيل نشاطاً طبيعياً لحصر قنوات الكالسيوم الجهدية؛ قد يُقوِّي الاستخدام المتزامن الاستجابات الخافضة لضغط الدم والسلبية للتقلص العضلي.',
      ],
      storage: {
        forms: [
          { form: 'درجة حرارة الغرفة', instructions: 'يمكن تخزين الجذامير الخام لمدة 1-2 أسبوع في مكان بارد وجاف وجيد التهوية بعيداً عن ضوء الشمس المباشر.' },
          { form: 'الثلاجة (4°م)', instructions: 'للتخزين لمدة 1-2 شهر.' },
          { form: 'الفريزر (18-°م)', instructions: 'للتخزين حتى 6 أشهر.' },
        ],
      },
      botanicalFacts: {
        family: 'الفصيلة الزنجبيلية',
      },
    },

    'psyllium-pregnancy': {
      name: 'سيلليوم / إسباغول',
      shortDescription: 'العلاج المفضّل سريرياً من الخط الأول للإمساك في الحمل والوقاية من البواسير. غير ممتص جهازياً — يعمل محلياً داخل الجهاز الهضمي دون التعرض الجنيني.',
      description: 'يُستخدم السيلليوم في المقام الأول خلال الحمل لتعزيز حركات الأمعاء المنتظمة والناعمة، مما يُساعد في الوقاية من البواسير والشقوق الشرجية. يزيد من محتوى الماء في البراز ووقت العبور، مما يُسهِّل مرور البراز. يُفضَّل سريرياً على الملينات الكيميائية المحفِّزة (مثل السنا أو بيساكوديل) لإدارة الإمساك في الحمل بسبب طبيعته غير الجهازية. تُشير الأبحاث إلى أن الاستهلاك اليومي، خاصةً في الثلث الثالث، يمكن أن يُوقِّي بشكل ملحوظ من الإمساك والبواسير والشقوق الشرجية ويعالجها.',
      activeConstituents: [
        { name: 'الأرابينوكسيلان (عديد السكاريد القابل للذوبان)', percentage: '', effect: 'ألياف قابلة للذوبان مكوِّنة للهلام مسؤولة عن التأثير الملين بالحجم.' },
        { name: 'الصمغ المخاطي', percentage: '', effect: 'الجزء الشره للرطوبة الذي يُزلِّق محتويات الأمعاء ويُليِّنها.' },
        { name: 'الألياف القابلة للذوبان في الماء', percentage: '', effect: 'الجزء غير القابل للهضم الداعم لانتظام الأمعاء.' },
      ],
      moa: [
        { title: 'احتباس الماء والتزليق', detail: 'يمتص السيلليوم الماء، مما يزيد من محتوى الرطوبة في البراز، مما يُبقيه طرياً ويُسهِّل عبوره عبر الأمعاء، مما يُساعد في مكافحة الإمساك الناجم عن زيادة مستويات البروجستيرون وانخفاض حركة الأمعاء.' },
        { title: 'تكوين الحجم', detail: 'تزيد الكتلة الشبيهة بالهلام من الحجم الجسدي للبراز، مما يُحفِّز مستقبلات التمدد في جدار الأمعاء، مما يُثير الرغبة في التغوط.' },
        { title: 'التأثير المحلي', detail: 'نظراً لعدم امتصاصه جهازياً، يعمل محلياً داخل الجهاز الهضمي دون التسبب في تعرض الجنين، مما يجعله علاجاً مفضلاً بشكل شائع.' },
      ],
      uses: [
        'الوقاية من البواسير / الشقوق: يُعزِّز حركات الأمعاء المنتظمة والناعمة، مما يُساعد في منع الإجهاد الذي يؤدي إلى البواسير والشقوق الشرجية في الحمل',
        'تخفيف الإمساك: يزيد من محتوى الماء في البراز ووقت العبور، مما يُسهِّل مرور البراز',
        'بديل آمن من الخط الأول: يُفضَّل سريرياً على الملينات الكيميائية المحفِّزة (مثل السنا أو بيساكوديل) لإدارة الإمساك المزمن أو في الحمل بسبب طبيعته غير الجهازية',
      ],
      howToUse: [
        { method: 'استشارة مقدم الرعاية الصحية', instruction: 'تحققي دائماً مع طبيبك أو قابلتك قبل البدء، خاصةً إذا كانت لديك مشكلات صحية أخرى.' },
        { method: 'الترطيب الضروري', instruction: 'اشربي 8 أونصات (240 مل) على الأقل من الماء أو العصير مع كل جرعة. يمكن أن يؤدي عدم كفاية السوائل إلى انسداد.' },
        { method: 'ابدأي ببطء', instruction: 'ابدأي بملعقة صغيرة يومياً وزيدي تدريجياً إلى ملعقة كبيرة حتى 3 مرات يومياً لتقليل الغازات والانتفاخ.' },
        { method: 'التوقيت', instruction: 'تناولي السيلليوم قبل الفيتامينات السابقة للولادة والأدوية الأخرى بساعتين على الأقل لتجنب التدخل في امتصاص المغذيات.' },
        { method: 'مدة الاستخدام', instruction: 'تجنبي الاستخدام لأكثر من أسبوع دون استشارة طبيبك.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والأطفال (6 سنوات فأكبر)', notes: 'آمن بوجه عام للبالغين والأطفال فوق سن السادسة، وإن كانت كثير من إرشادات طب الأطفال تنصح باستشارة الطبيب للأطفال دون سن 12.' },
      ],
      dosage: {
        standard: 'الحمل: 28 غ/يوم مع كمية كافية من السوائل.',
        forms: [
          { form: 'قشر السيلليوم', dose: '28 غ/يوم. اشربي 240 مل على الأقل من الماء مع كل جرعة.' },
        ],
      },
      overdose: {
        intro: 'على الرغم من أن السيلليوم يُعدّ آمناً بوجه عام خلال الحمل لأنه لا يُمتص جهازياً، يمكن أن يؤدي الإفراط في تناوله إلى مضاعفات خطيرة.',
        symptoms: [
          'انسداد شديد في الجهاز الهضمي: بما أن السيلليوم ملين يعمل بالحجم يمتص الماء، فإن تناول كميات كبيرة منه مع سوائل غير كافية يمكن أن يتصلّب ويؤدي إلى انسداد في الأمعاء أو المريء أو المعدة.',
          'آلام البطن والتشنجات: آلام معدية شديدة أو تشنجات.',
          'الغثيان والقيء.',
          'إمساك مفارق شديد / انحشار: ترابط الألياف غير المرطّبة الزائدة، مما يُفاقم ركود الأمعاء بدلاً من تخفيفه.',
          'الإسهال: في بعض الحالات، يمكن أن يُسبِّب الإفراط في التناول الإسهال.',
        ],
        management: [
          'الترطيب الفوري: اشربي كميات كبيرة من الماء لمنع الألياف من التسبب في انسداد معوي أو انحشار برازي.',
          'مراقبة الأعراض: انتبهي لآلام المعدة الشديدة أو القيء أو عدم القدرة على التغوط.',
          'الإدارة العَرَضية: العلاج محافظ بشكل نموذجي، يركز على تخفيف الانزعاج.',
          'الرعاية الطبية: إذا حدث انسداد شديد، قد يوفر المختصون الطبيون علاجاً للانسداد المعوي.',
        ],
      },
      sideEffects: [
        'أكثر الآثار الجانبية شيوعاً هي المشاكل المعدية المعوية الخفيفة، بما في ذلك الانتفاخ والغازات (النفخة) والتشنجات المعدية وعدم الراحة البطنية.',
        'خطر الانسداد: زيادة خطر تفاقم الإمساك أو الإصابة بانسداد معوي إذا تم تجاهل الامتثال الصارم للسوائل.',
      ],
      contraindications: [
        'انسداد/انحشار الجهاز الهضمي: لا تتناولي السيلليوم إذا كان لديك انحشار برازي أو تضيّق في القناة الهضمية أو انسداد معوي معروف.',
        'اضطرابات البلع: لا تستخدميه إذا كانت لديك صعوبة في البلع، لأن السيلليوم قد يُسبِّب الاختناق.',
        'الجفاف الشديد / عدم كفاية تناول السوائل: يجب تجنّب السيلليوم في المرضى غير القادرين على الحفاظ على تناول سوائل كافية.',
        'التفاعلات التحسسية: فرط الحساسية تجاه السيلليوم.',
        'أعراض التهاب الزائدة الدودية أو الضائقة المعدية المعوية غير المشخّصة: بما في ذلك الحمى والألم البطني الشديد والغثيان والقيء.',
        'بيلة الفينيل كيتون (PKU): بعض منتجات السيلليوم محلّاة بالأسبارتام.',
      ],
      drugInteractions: [
        'يعمل السيلليوم كملين يعمل بالحجم، مما ينشئ هلاماً يمكن أن يرتبط بالأدوية الأخرى، مما يُقلِّل من فاعليتها. تناولي الأدوية الأخرى قبل ساعتين على الأقل أو بعد تناول السيلليوم بساعتين.',
        'الديجوكسين: انخفاض المستويات العلاجية في مصل الدم.',
        'الليثيوم: ضعف الامتصاص، مما يُشكِّل خطر انتكاسة في مرضى الطب النفسي.',
        'مكمّلات الحديد: الارتباط وانخفاض الامتصاص، وهو أمر ضار بشكل خاص في فقر الدم في الحمل.',
        'الوارفارين: أنماط امتصاص متغيّرة تؤثر على قيم INR.',
      ],
      storage: {
        forms: [
          { form: 'قشر السيلليوم', instructions: 'يُخزَّن في درجة حرارة الغرفة (15-30°م) في مكان بارد وجاف ومظلم بعيداً عن ضوء الشمس والرطوبة. يجب حفظه في حاوية محكمة الإغلاق — السيلليوم شديد الامتصاص للرطوبة وسيتكتّل أو يفقد فاعليته إذا تعرّض للرطوبة.' },
        ],
      },
      botanicalFacts: {
        family: 'فصيلة الحملية',
        clinicalEvidence: 'تُشير الأبحاث إلى أن الاستهلاك اليومي للسيلليوم، خاصةً في الثلث الثالث من الحمل، يمكن أن يُوقِّي بشكل ملحوظ من الإمساك والبواسير والشقوق الشرجية ويعالجها.',
      },
    },

    'peppermint-pregnancy': {
      name: 'النعناع',
      shortDescription: 'شاي النعناع (كوب أو كوبان يومياً) والعلاج بالروائح آمنان خلال الحمل لعلاج غثيان الصباح والانتفاخ والحكة. يجب استخدام الجرعات الطبية العالية أو الزيوت الأساسية المركّزة بحذر.',
      description: 'تُشير الأدلة العلمية إلى أن النعناع آمن بوجه عام خلال الحمل بكميات معتدلة (كوب إلى كوبين من الشاي يومياً) ويمكنه بفاعلية تخفيف الغثيان والقيء في الثلث الأول من خلال العلاج بالروائح. كما يعمل طارداً للغازات ومضاداً للتشنج لتخفيف الانتفاخ والغازات والعسر الهضمي الوظيفي في الحمل. يمكن أن يُخفِّف التطبيق الموضعي لزيت النعناع المخفَّف (0.5%) الحكة (حكة الحمل). في حين تُظهر الدراسات تقليلاً ملحوظاً في غثيان الصباح، يجب استخدام الجرعات الطبية العالية أو الزيوت الأساسية بحذر نظراً لمحدودية البيانات.',
      activeConstituents: [
        { name: 'المنثول والمنثون', percentage: '', effect: 'المكوّنات الفعّالة الرئيسية المسؤولة عن التأثيرات المضادة للتشنج ومضادة القيء ومضادة الحكة.' },
        { name: 'مركبات غير طيارة (فلافونويدات: لوتيولين وإريوسيترين؛ أحماض فينولية: حمض الروزمارينيك؛ تيربينات)', percentage: '', effect: 'مركبات داعمة مضادة للالتهاب وواقية للمعدة.' },
        { name: 'أسيتات المنثيل و1,8-سينيول (الإيكاليبتول) والليمونين', percentage: '', effect: 'تُسهم في الرائحة المنعشة والفوائد التنفسية.' },
      ],
      moa: [
        { title: 'استرخاء العضلات الملساء للجهاز الهضمي', detail: 'عن طريق تقليل تدفق الكالسيوم، يُرخِّي النعناع عضلات المعدة والأمعاء، مما يُقلِّل التشنجات وخلل الحركة المريئية والغثيان بشكل عام.' },
        { title: 'التأثير طارد الغازات', detail: 'يُساعد النعناع في تقليل الغازات وتحسين الهضم، مما يُساعد في تخفيف عدم الراحة البطنية المصاحب كثيراً للحمل.' },
        { title: 'آلية العلاج بالروائح', detail: 'عند استنشاقه، تُمتص مركبات زيت النعناع (المنثول) عبر الجهاز الشمي، مما قد يؤثر على الجهاز العصبي المركزي لتقليل شدة الغثيان.' },
        { title: 'تقليل القلق', detail: 'يمكن أن يُساعد في تقليل القلق خلال الحمل والمخاض، الذي كثيراً ما يُصاحب غثيان الصباح.' },
        { title: 'التأثير المضاد للحكة', detail: 'يمكن أن يُخفِّف التطبيق الموضعي لزيت النعناع المخفَّف بتركيز منخفض الحكة المصاحبة للحمل.' },
      ],
      uses: [
        'الغثيان والقيء (غثيان الصباح): يعمل استنشاق النعناع أو العلاج بالروائح كمضاد للقيء',
        'راحة الجهاز الهضمي: يعمل طارداً للغازات ومضاداً للتشنج لتخفيف الانتفاخ والغازات والعسر الهضمي الوظيفي في الحمل',
        'تخفيف أعراض الحكة: يمكن أن يُخفِّف التطبيق الموضعي لزيت النعناع المخفَّف بتركيز (0.5%) الحكة الشائعة في أواخر الحمل',
        'تخفيف الصداع: قد يُساعد التطبيق الموضعي للزيت المخفَّف على الصدغين في علاج صداع التوتر الشائع خلال الحمل',
        'تقليل القلق',
        'استخدامات أخرى: العناية بالبشرة والشعر، دعم الجهاز التنفسي، صحة الجهاز الهضمي (القولون العصبي)',
      ],
      howToUse: [
        { method: 'الشاي', instruction: 'يُعدّ شرب كوب إلى كوبين من شاي النعناع يومياً (باستخدام أكياس الشاي أو الأوراق الجافة) آمناً لعلاج غثيان الصباح وعسر الهضم.' },
        { method: 'العلاج بالروائح', instruction: 'يمكن أن يُساعد استنشاق زيت النعناع الأساسي عبر ناشر أو قطعة قطن بأمان في تقليل الغثيان، خاصةً خلال الثلث الأول.' },
        { method: 'الطعام', instruction: 'حلوى النعناع أو المأكولات المنكّهة بالنعناع باعتدال آمنة.' },
      ],
      suitableAgeGroups: [
        { group: 'الزيت الأساسي (علاج بالروائح/موضعي)', notes: 'آمن بوجه عام للأطفال فوق سن 3 سنوات. لا تستخدميه على الأطفال دون 30 شهراً (2.5 سنة) لأنه قد يُسبِّب نوبات أو مشاكل في التنفس.' },
        { group: 'البالغون والأطفال (8 سنوات فأكبر)', notes: 'آمن وموصى به لإدارة القولون العصبي.' },
        { group: 'شاي النعناع', notes: 'آمن بوجه عام بكميات معتدلة للأطفال الأصغر سناً، لكن غير موصى به للرضّع.' },
        { group: 'الحلوى / قضبان الحلوى', notes: 'بسبب مخاطر الاختناق، من الأفضل الانتظار حتى سن 5 سنوات.' },
      ],
      dosage: {
        standard: 'يمكن تناول شاي النعناع بكميات معتدلة خلال الحمل، عادةً كوب إلى كوبين يومياً. العلاج بالروائح بزيت النعناع الأساسي يستخدم عادةً 2-4 قطرات للاستنشاق. يجب تجنّب الجرعات العالية خلال الحمل بسبب محدودية بيانات السلامة.',
        forms: [
          { form: 'شاي النعناع', dose: 'كوب إلى كوبان يومياً.' },
          { form: 'العلاج بالروائح (الزيت الأساسي)', dose: '2-4 قطرات للاستنشاق فقط.' },
        ],
      },
      overdose: {
        intro: 'في حين يُعدّ الاستهلاك المعتدل لشاي النعناع آمناً بوجه عام خلال الحمل، فإن الجرعة الزائدة من النعناع — خاصةً في شكل زيت أساسي مركّز — يمكن أن تكون خطيرة بسبب ارتفاع محتواه من المنثول ومركبات أخرى.',
        symptoms: [
          'حساسية الرحم: يمكن أن تُسبِّب الجرعات الكبيرة من بعض المستخلصات العشبية تحفيزاً رحمياً، مما قد يُشكِّل مخاطر على الحمل.',
          'اضطرابات الجهاز الهضمي: غثيان شديد وقيء وآلام بطنية أو إسهال.',
          'أعراض عصبية: دوخة وفقدان التنسيق (رنح) وارتباك أو في الحالات القصوى نوبات.',
          'مشاكل تنفسية: تنفس بطيء أو ضحل.',
          'تغيرات قلبية وعائية: تغيرات في معدل ضربات القلب أو نظمه.',
          'مخاوف كلوية: تغيرات ملحوظة في إخراج البول أو وجود دم في البول.',
          'تفاعلات تحسسية: طفح جلدي أو شرى أو تورّم الحلق.',
        ],
        management: [
          'التقييم الطبي: سيراقب مقدمو الرعاية العلامات الحيوية (النبض ومعدل التنفس وضغط الدم) وقد يُجرون تحاليل الدم/البول أو رسم القلب (ECG).',
          'إزالة التلوث من المعدة: في حالات الابتلاع الشديد، قد تُفرَّغ المعدة بالغسيل المعوي.',
          'قد يُستخدم الفحم المنشّط لتقليل الامتصاص.',
          'العلاج العَرَضي: سوائل وريدية لانخفاض ضغط الدم، تهوية ميكانيكية/علاج بالأكسجين لاكتئاب الجهاز التنفسي.',
          'مراقبة الجنين: مراقبة قلب الجنين ضرورية إذا كان الجنين في سن قابل للحياة، وقد يكون إجراء قيصرية طارئة ضرورياً في حالة ضائقة الجنين.',
          'تجنّب العلاجات غير الموصوفة: لا تحاولي علاج الأعراض في المنزل بأعشاب طبية أخرى.',
        ],
      },
      sideEffects: [
        'حرقة المعدة / الارتجاع: يُرخِّي النعناع العضلة العاصرة للمريء، مما قد يُفاقم حرقة المعدة المصاحبة للحمل.',
        'الإفراط في الاستهلاك: قد تُسبِّب الكميات الكبيرة من الشاي عدم الراحة الهضمية أو التشنجات.',
        'الجرعات السامة تُحفِّز العضلات الملساء للرحم (تأثير مُدِرّ للحيض).',
        'تفاعلات تحسسية: محتملة، خاصةً إذا كانت هناك حساسية تجاه المنثول.',
        'تفاعلات الأدوية: قد يتداخل مع امتصاص بعض المغذيات أو المكمّلات الغذائية.',
      ],
      contraindications: [
        'الأفراد المصابون بمرض الارتجاع المعدي المريئي الشديد (GERD) أو الفتق الحجابي أو حصوات المرارة (تحصّي صفراوي) أو التهاب المرارة أو أمراض الكبد الشديدة.',
      ],
      drugInteractions: [
        'أدوية حرقة المعدة / مخفضات الحموضة (مضادات الحموضة والحاصرات H2 ومثبطات مضخة البروتون): يزيد الاستخدام المتزامن من درجة حموضة المعدة، مما يتسبب في ذوبان الطلاء المعوي لكبسولات النعناع في المعدة قبل الأوان، مما يؤدي إلى تهيج حاد في المعدة.',
        'أدوية ضغط الدم: قد يخفض النعناع ضغط الدم؛ يجب استخدامه بحذر إذا كنت تتناولين بالفعل أدوية لارتفاع ضغط الدم.',
        'الأدوية التي تُستقلب في الكبد: قد يؤثر النعناع على طريقة تكسير الكبد لبعض الأدوية، مما قد يُغيِّر فاعليتها.',
      ],
      storage: {
        forms: [
          { form: 'جميع الأشكال', instructions: 'يُخزَّن في مكان بارد وجاف ومظلم.' },
        ],
      },
      botanicalFacts: {
        family: 'فصيلة الشفوية',
        clinicalEvidence: 'تُشير الأدلة العلمية إلى أن النعناع (Mentha piperita) آمن بوجه عام خلال الحمل بكميات معتدلة (كوب إلى كوبين من الشاي يومياً) ويمكنه بفاعلية تخفيف غثيان وقيء الثلث الأول من خلال العلاج بالروائح. في حين تُظهر الدراسات تقليلاً ملحوظاً في غثيان الصباح، يجب استخدام الجرعات الطبية العالية أو الزيوت الأساسية بحذر نظراً لمحدودية البيانات.',
      },
    },

    'cranberry-pregnancy': {
      name: 'كرانبيري',
      shortDescription: 'الكرانبيري يُساعد في الوقاية من التهابات المسالك البولية والبكتيريا اللاعرضية خلال الحمل عبر بروأنثوسيانيدينات من النوع A التي تمنع التصاق بكتيريا E. coli بجدار المثانة. يُوقِّي لكنه لا يعالج الالتهابات النشطة.',
      description: 'يحتوي الكرانبيري على بروأنثوسيانيدينات من النوع A (PACs) التي تمنع البكتيريا الممرضة للمسالك البولية — وتحديداً E. coli — من الالتصاق بجدار المثانة. تُشير الدراسات إلى أن الجرعة اليومية البالغة 500 مغ من مستخلص الكرانبيري يمكن أن تكون نهجاً آمناً وفعّالاً في الوقاية من البكتيريا البولية اللاعرضية وتكرار التهابات المسالك البولية لدى النساء الحوامل. وجدت الدراسات الاستقصائية الكبيرة عدم وجود صلة بين استهلاك الكرانبيري خلال الحمل وزيادة خطر التشوهات الخلقية أو الولادة المبكرة أو النتائج السلبية للرضّع. ملاحظة: على الرغم من أن الكرانبيري معروف على نطاق واسع بمساعدته في الوقاية من التهابات المسالك البولية، تُشير الأدلة إلى أنه غير فعّال في علاج الالتهاب النشط، الذي يتطلب علاجاً طبياً متخصصاً خلال الحمل.',
      activeConstituents: [
        { name: 'بروأنثوسيانيدينات من النوع A (PACs)', percentage: '', effect: 'المركبات الفعّالة الرئيسية؛ تمنع بكتيريا E. coli المزوّدة بالشعيرات P من الالتصاق بالخلايا الظهارية المبطّنة للمسالك البولية.' },
        { name: 'أنثوسيانينات (مضادات الأكسدة)، فلافونولات (كيرسيتين)، أحماض فينولية، حمض الأورسوليك (تيربينويدات)', percentage: '', effect: 'مكوّنات فعّالة رئيسية أخرى داعمة للتأثير العلاجي.' },
      ],
      moa: [
        { title: 'تثبيط التصاق بكتيريا E. coli (نشاط مضاد للالتصاق)', detail: 'تتداخل المركبات الفعّالة، وتحديداً PACs من النوع A، مع قدرة بكتيريا E. coli المزوّدة بالشعيرات P — وهي سبب شائع لالتهابات المسالك البولية خلال الحمل — على الالتصاق بالخلايا الظهارية المبطّنة للمسالك البولية.' },
        { title: 'التشويه الهيكلي للأهداب', detail: 'يمكن لمكوّنات الكرانبيري تغيير تشكّل الجزيئات السطحية على بكتيريا E. coli، مما قد يتداخل مع آليات التصاق الأهداب.' },
        { title: 'تثبيط الفركتوز', detail: 'يعمل الفركتوز الموجود في الكرانبيري بالتزامن مع PACs لتثبيط التصاق أهداب النوع 1 بجدار المثانة.' },
        { title: 'تأثيرات مباشرة مضادة للبكتيريا والالتهاب', detail: 'إضافةً إلى منع الالتصاق، قد تُساعد مكوّنات الكرانبيري في تقليل التصاق البكتيريا والالتهاب المصاحب لالتهابات المسالك البولية.' },
        { title: 'تعديل البيئة البولية', detail: 'عند إفراز المستقلبات الناتجة عن تناول الكرانبيري في البول، تُقلِّل من قدرة بكتيريا E. coli والبكتيريا السالبة الجرام الأخرى على الالتصاق بخلايا ظهارة المسالك البولية.' },
      ],
      uses: [
        'الوقاية من التهابات المسالك البولية: يحتوي الكرانبيري على PACs من النوع A التي تمنع بكتيريا E. coli الممرضة من الالتصاق بجدار المثانة',
        'إدارة البكتيريا البولية اللاعرضية: قد يُساعد الاستهلاك اليومي في تقليل الحمل البكتيري في البول وتقليل التطور إلى التهابات المسالك البولية العرضية',
        'تقليل استخدام المضادات الحيوية: من خلال المساعدة في الوقاية من التهابات المسالك البولية المتكررة، قد يُساعد الكرانبيري في تقليل الاعتماد على المضادات الحيوية خلال الحمل',
        'صحة الجهاز الهضمي: يمكن لـ PACs في الكرانبيري تثبيط التصاق بكتيريا H. pylori بالمخاط المعدي، مما يُساعد في إدارة أو تقليل خطر قرحة المعدة',
        'الحماية القلبية الوعائية: يرتبط الاستهلاك المنتظم بانخفاض ضغط الدم وتحسين وظيفة الأوعية الدموية وانخفاض أكسدة LDL',
        'صحة الفم: يمكن لمستخلصات الكرانبيري المساعدة في منع التصاق البكتيريا المسببة لتشكيل البلاك وتسوس الأسنان',
      ],
      howToUse: [
        { method: 'عصير الكرانبيري', instruction: 'اختاري عصيراً نقياً 100% غير محلى لتقليل السكر المضاف.' },
        { method: 'أشكال بديلة', instruction: 'يمكن إضافة الكرانبيري المجفف إلى الزبادي أو السلطات، ويمكن إضافة الكرانبيري الطازج إلى العصائر.' },
        { method: 'المكملات الغذائية', instruction: 'تُشير الأبحاث إلى أن الجرعة اليومية البالغة 500 مغ من مستخلص الكرانبيري فعّالة للوقاية من تكرار التهابات المسالك البولية لدى النساء الحوامل.' },
      ],
      suitableAgeGroups: [
        { group: 'الاستخدام في الأطفال', notes: 'المستخلصات الموحَّدة والجرعات العلاجية آمنة للأطفال (عادةً فوق 2-3 سنوات) والبالغين للمساعدة في الوقاية من التهابات المسالك البولية والفوائد الغذائية.' },
      ],
      dosage: {
        standard: 'عصير الكرانبيري: 240 مل إلى 720 مل يومياً. كبسولات/أقراص الكرانبيري: 500 مغ مستخلص يومياً أثبت فاعليته، أو كبسولتان مرتين يومياً.',
        forms: [
          { form: 'عصير الكرانبيري', dose: '240-720 مل يومياً.' },
          { form: 'كبسولات/أقراص الكرانبيري', dose: '500 مغ يومياً؛ أو كبسولتان مرتين يومياً.' },
        ],
      },
      overdose: {
        intro: 'تُسبِّب الجرعة الزائدة من منتجات الكرانبيري (عصير أو مكملات) خلال الحمل عادةً ضائقة معدية معوية خفيفة إلى متوسطة، مثل الإسهال والغثيان أو التشنج البطني. في حين أن الاستهلاك المعتدل آمن بوجه عام، قد يزيد الإفراط في تناول الكبسولات المركّزة من خطر حصوات الكلى بسبب ارتفاع مستويات حمض الأكساليك.',
        symptoms: [
          'اضطرابات الجهاز الهضمي: الأعراض الأكثر شيوعاً هي تشنجات المعدة والإسهال والغثيان والقيء.',
          'حصوات الكلى: يمكن أن يزيد الاستهلاك الطويل الأمد للجرعات العالية من خطر الإصابة بحصوات الكلى الكالسيومية الأكساليكية.',
          'زيادة مضاعفات الحمل (نادر): ارتبطت الجرعات العالية من مستخلص الكرانبيري بزيادة معدلات مضاعفات الفترة المحيطة بالولادة، وإن كانت كثيراً من الدراسات تُشير إلى أنه آمن بوجه عام.',
        ],
        management: [
          'التوقف عن الاستهلاك: التوقف فوراً عن تناول مكملات الكرانبيري أو شرب كميات كبيرة من العصير.',
          'التماس المشورة الطبية.',
          'الرعاية الداعمة: إذا كانت الأعراض خفيفة، زيدي من السوائل لضمان الترطيب.',
          'مراقبة الأعراض: انتبهي لعلامات تفاقم الجفاف أو الإسهال الشديد أو الألم البطني الشديد التي تستدعي الرعاية الطبية الفورية.',
        ],
      },
      sideEffects: [
        'اضطرابات الجهاز الهضمي: يمكن أن يؤدي الإفراط في تناول عصير الكرانبيري أو المكملات إلى الإسهال والغثيان أو التشنجات المعدية.',
        'حصوات الكلى: يحتوي الكرانبيري على كميات عالية من الأكسالات، مما قد يزيد من خطر حصوات الكلى لدى الأفراد المعرّضين لها إذا تم استهلاكه بكميات كبيرة.',
        'النزيف المهبلي: أشارت بعض البيانات إلى زيادة طفيفة في حوادث النزيف المهبلي بعد الأسبوع 17 من الحمل، وإن كان ذلك يستدعي مزيداً من الدراسة.',
        'تناول السكر: يمكن أن يحتوي عصير الكرانبيري التجاري على كميات عالية من السكر المضاف، مما قد يكون مصدر قلق للنساء المصابات بسكري الحمل أو المعرّضات له.',
        'تفاعلات الأدوية (مميعات الدم): قد يتفاعل الكرانبيري مع أدوية مثل الوارفارين أو مضادات التخثر الأخرى، مما يزيد من خطر الكدمات أو النزيف.',
      ],
      contraindications: [
        'خطر الجرعات العالية: في حين أن الاستهلاك الغذائي العادي آمن عادةً، يجب تجنّب المكملات عالية الجرعة (أقراص/كبسولات) بسبب محدودية بيانات السلامة.',
        'تفاعلات الأدوية (الوارفارين/مميعات الدم): إذا كنت تتناولين أدوية مخففة للدم، يمكن أن يتفاعل الكرانبيري معها، مما قد يزيد من خطر النزيف.',
        'حصوات الكلى: يجب على النساء اللواتي لديهن تاريخ من حصوات الكلى الأكساليكية أو القابليات لها تجنّب الاستهلاك المرتفع من منتجات الكرانبيري.',
        'التهاب المعدة الضموري / نقص حموضة المعدة: يجب على أصحاب حموضة المعدة المنخفضة أو التهاب المعدة توخّي الحذر، إذ قد يُغيِّر الكرانبيري درجة حموضة المعدة.',
      ],
      drugInteractions: [
        'الوارفارين (كومادين/أنيسينديون): التفاعل الأكثر أهمية — يمكن أن يُعزِّز الكرانبيري تأثيره المضاد للتخثر، مما يزيد من مخاطر النزيف.',
        'أدوية ضغط الدم / الكوليسترول: هناك احتمال لزيادة تأثيرات بعض الأدوية، مثل أتورفاستاتين (الكوليسترول) ونيفيديبين (ضغط الدم).',
      ],
      storage: {
        forms: [
          { form: 'التخزين في الثلاجة', instructions: 'للحفاظ على استقرار المركبات الحيوية النشطة (الأنثوسيانينات والـ PACs)، يجب حفظ منتجات الكرانبيري (مثل العصير أو الهريس المعالج) في الثلاجة. بسبب ارتفاع درجات الحرارة في مصر، تأكدي من عدم ترك المنتجات في ضوء الشمس المباشر أو البيئات الدافئة الرطبة، لأن الحرارة تُقلِّل من الفوائد المضادة للأكسدة.' },
        ],
      },
      botanicalFacts: {
        family: 'فصيلة الخلنجية',
        clinicalEvidence: 'وجدت الدراسات الاستقصائية الكبيرة عدم وجود صلة بين استهلاك الكرانبيري خلال الحمل وزيادة خطر التشوهات الخلقية أو الولادة المبكرة أو النتائج السلبية للرضّع.',
      },
    },

    butterbur: {
      name: 'البتربور',
      activeConstituents: [
        { name: 'بيتاسين وإيزوبيتاسين ونيوبيتاسين', detail: 'يُعتقد أنها مسؤولة عن النشاط الدوائي.' },
      ],
      moa: [
        { title: 'تثبيط الليكوترينات', detail: 'يُقلِّل إنتاج الليكوترين، مما يُقلِّل الحساسية والالتهاب.' },
        { title: 'تأثيرات مضادة للهيستامين', detail: 'يُقلِّل إطلاق الهيستامين، مما يُقلِّل العطس والحكة.' },
        { title: 'نشاط مضاد للالتهاب', detail: 'يُثبِّط COX-2 ويُقلِّل البروستاغلاندين E2 لتقليل الالتهاب.' },
        { title: 'تعديل قنوات الكالسيوم', detail: 'يحجب قنوات الكالسيوم، مما يُقلِّل تضيق الأوعية والالتهاب.' },
      ],
      uses: [
        'يُستخدم كبديل طبيعي وفموي وفعَّال في الغالب لتدبير أعراض التهاب الأنف التحسسي الموسمي (حمى القش)، مثل العطس والاحتقان وتهيج الأنف.',
      ],
      howToUse: [
        { method: 'قرص أو كبسولة فموية', instruction: 'يُؤخذ عادةً عن طريق الفم على شكل قرص أو كبسولة، وتُشير الدراسات إلى جرعات تتراوح بين 50 و150 مغ يومياً، مقسَّمة في الغالب إلى جرعتين أو ثلاث جرعات.' },
      ],
      dosage: {
        standard: 'تتراوح الجرعات الشائعة من 50 ملغ إلى 150 ملغ يومياً، مقسَّمةً عادةً على 2-3 جرعات.',
      },
      suitableAgeGroups: [
        { group: 'البالغون (18+)', notes: 'أُجريت معظم التجارب السريرية لالتهاب الأنف التحسسي على البالغين (متوسط العمر في الغالب 35-39 سنة).' },
        { group: 'الأطفال والمراهقون (6-17 سنة)', notes: '' },
        { group: 'الأطفال دون 6 سنوات', notes: 'تفتقر البيانات إلى السلامة والفعالية لهذه الفئة.' },
      ],
      overdose: {
        intro: 'الجرعة الزائدة من البتربور، خاصةً المنتجات غير المعتمدة كـ"خالية من القلويدات البيروليزيدينية (PAs)"، قد تُسبِّب تلفاً كبدياً حاداً.',
        symptoms: [
          'اضطراب هضمي حاد: التجشؤ (الأكثر شيوعاً) والغثيان والقيء والإسهال وآلام البطن.',
          'ردود فعل تحسسية: حكة في العيون أو طفح جلدي (خاصةً عند الحساسية من الرجيد أو دوار الشمس).',
          'أعراض خطيرة (سمية كبدية) — إذا احتوى المنتج على قلويدات بيروليزيدينية (PAs) أو في حالات نادرة من التفاعل الشديد:',
          'آثار عصبية: صداع وتعب ونعاس.',
          'بول داكن وبراز شاحب: علامات إصابة كبدية حادة.',
          'يرقان: اصفرار الجلد والعينين.',
        ],
        management: [
          'إيقاف تناول المكمل الغذائي فوراً واستشارة الطبيب.',
        ],
      },
      sideEffects: [
        'اضطراب هضمي.',
        'التجشؤ.',
        'صداع أو دوخة.',
        'زيادة ميل للنزيف.',
      ],
      contraindications: [
        'أمراض الكبد: تجنّب البتربور الخام بسبب القلويدات البيروليزيدينية السامة (PAs)؛ استخدم فقط المنتجات المعتمدة الخالية من PA.',
        'خطر الحساسية: قد يُسبِّب ردود فعل تحسسية لدى الأشخاص الحساسين من الرجيد أو النباتات ذات الصلة.',
        'الحمل والرضاعة: غير مُوصى به بسبب الضرر المحتمل للطفل ونقص بيانات السلامة.',
        'الأطفال: غير مُوصى به للأطفال دون 6 سنوات.',
        'التفاعلات الدوائية: قد يتفاعل مع الأدوية المستقلبة عبر CYP3A4 ويزيد من خطر السمية.',
      ],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'العبوة', instructions: 'احتفظ بالكبسولات أو الأقراص في عبوتها الأصلية المغلقة للحفاظ على الاستقرار ومنع التلوث.' },
          { form: 'الظروف', instructions: 'يُخزَّن في مكان بارد وجاف بعيداً عن الحرارة والرطوبة.' },
        ],
      },
      benefits: [],
      factsAndMyths: [
        {
          myth: 'البتربور ليس له آثار جانبية أو مخاطر حساسية.',
          fact: 'الأشخاص الذين يعانون من حساسية الرجيد أو دوار الشمس قد يتفاعلون أيضاً مع البتربور.',
        },
      ],
      botanicalFacts: {
        family: 'Asteraceae',
        activeCompounds: 'بيتاسين وإيزوبيتاسين ونيوبيتاسين (استرات سيسكويتيربينية)',
        clinicalEvidence: 'تُشير الدراسات إلى جرعات تتراوح بين 50 و150 ملغ يومياً لتدبير التهاب الأنف التحسسي الموسمي.',
      },
    },

    'stinging-nettle': {
      name: 'القراص',
      activeConstituents: [
        { name: 'مضاد للالتهاب', detail: 'البوليفينولات والكاروتينويدات وCMA تُثبِّط الإنزيمات للتقليل من الالتهاب الناجم عن الحساسية.' },
        { name: 'مضاد للهيستامين', detail: 'الأمينتوفلافون والألفا-توكوتريينول يعملان كحاصرات طبيعية لمستقبلات الهيستامين (HR1).' },
        { name: 'وسيطات', detail: 'يحتوي النبات أيضاً على مركبات مثل السيروتونين والأستيل كولين.' },
      ],
      moa: [
        { title: 'تضاد الهيستامين', detail: 'يعمل كمضاد وعامل سلبي على مستقبلات H₁ للحد من أعراض الحساسية.' },
        { title: 'تثبيت الخلايا البدينة', detail: 'يُثبِّت أغشية الخلايا البدينة للحد من إطلاق الهيستامين والسيتوكينات المؤيدة للالتهاب.' },
        { title: 'تثبيط الإنزيمات', detail: 'يُثبِّط إنزيمات COX-1 وCOX-2 وHPGDS، وهي أساسية في مسارات الالتهاب.' },
        { title: 'تثبيط التربتاز', detail: 'يحجب تريبتاز الخلايا البدينة، مما يمنع تلف الأنسجة الأنفية والالتهاب.' },
        { title: 'تقليل الحمضات', detail: 'يُقلِّل عدد الحمضات، وهي خلايا الدم البيضاء التي تتضاعف أثناء ردود الفعل التحسسية.' },
      ],
      uses: [
        'كمضاد طبيعي للهيستامين ومضاد للالتهاب لتخفيف أعراض التهاب الأنف التحسسي مثل العطس وحكة العيون واحتقان الأنف.',
      ],
      howToUse: [
        { method: 'طريقة الاستخدام', instruction: 'تناول كبسولات الأوراق المجففة (حوالي 600 مغ يومياً)، وشرب 3-4 أكواب من الشاي يومياً، أو تناول الصبغات.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال دون 12 سنة', notes: 'بشكل عام، لا ينبغي استخدام مستحضرات القراص للأطفال دون 12 سنة نظراً لعدم وجود بيانات كافية عن السلامة.' },
        { group: 'البالغون (18+)', notes: 'تُركِّز معظم التجارب السريرية لالتهاب الأنف وغيره من الحالات على البالغين، غالباً بمتوسط أعمار 20-60 سنة.' },
      ],
      dosage: {
        standard: 'كبسولات الأوراق المجففة (حوالي 600 ملغ يومياً)، أو شرب 3-4 أكواب من الشاي يومياً، أو تناول الصبغات.',
      },
      overdose: {
        intro: 'هناك معلومات محدودة حول كميات "الجرعة الزائدة" المحددة، وتكون الآثار الضارة الشديدة عند الاستهلاك المفرط نادرة. ومع ذلك، قد يؤدي الاستهلاك المفرط إلى ردود فعل ضارة، منها:',
        symptoms: [
          'اضطراب هضمي: إسهال وإمساك وغثيان وانزعاج في المعدة.',
          'ردود فعل تحسسية: على الرغم من استخدامه لعلاج الحساسية، إلا أنه قد يُسبِّب نادراً طفحاً جلدياً أو شرى.',
          'احتباس السوائل/التعرق: يمكن أن يعمل كمدرّ للبول مما يؤدي إلى زيادة التبول أو التعرق.',
          'انخفاض ضغط الدم: قد يُقلِّل ضغط الدم.',
        ],
        management: [
          'التوقف الفوري: إيقاف تناول جميع أشكال القراص فوراً.',
          'مراقبة الأعراض: متابعة أعراض الجرعة الزائدة، والتي قد تشمل آلام المعدة وطفح جلدي (شرى) وتغيرات هرمونية محتملة نادرة.',
          'الترطيب: شرب كميات وفيرة من الماء لمساعدة الجسم على التخلص من المستخلص، إذ يمكن أن يعمل القراص كمدرّ قوي للبول.',
          'العناية بالمعدة: إذا أدت الجرعة الزائدة إلى انزعاج معدي، تناول أطعمة خفيفة غير مهيِّجة.',
          'العناية بردود الفعل التحسسية: إذا ظهرت ردة فعل تحسسية (شرى أو طفح)، يمكن استخدام مضادات الهيستامين تحت الإشراف الطبي.',
        ],
      },
      sideEffects: [
        'مشاكل هضمية: الإسهال والإمساك واضطراب المعدة، وهي الآثار الجانبية الأكثر شيوعاً.',
        'التعرق: يُبلِّغ بعض المستخدمين عن زيادة في التعرق.',
        'مشاكل بولية: احتمالية لزيادة احتباس السوائل أو تدفق البول.',
        'ردود فعل تحسسية: في حين أنها نادرة، قد يعاني بعض المستخدمين من طفح جلدي أو شرى.',
      ],
      contraindications: [
        'حساسية عائلة Asteraceae: قد يحدث تفاعل تقاطعي لدى الحساسين من الرجيد أو الأقحوان أو القطيفة أو دوار الشمس.',
        'أمراض الكبد: يحتوي البتربور غير المُعالَج على مركبات PA التي يمكن أن تُسبِّب تلفاً كبدياً.',
        'الحمل والرضاعة: أدلة السلامة غير كافية؛ يمكن أن تنتقل مكونات PA عبر لبن الأم.',
        'التفاعلات الدوائية: تجنّب تناوله مع الأدوية التي تُحفِّز إنزيمات CYP3A4 أو الأدوية المضادة للكولين الأخرى.',
        'المنتجات غير المعتمدة: استخدم فقط المنتجات المُصنَّفة بـ"خالية من PA" لتجنب إصابة الكبد.',
      ],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'القراص المُجفَّف بالتجميد (الشكل الأكثر فعالية)', instructions: 'احتفظ بالكبسولات التجارية أو المسحوق المُجفَّف بالتجميد منزلياً في برطمانات زجاجية محكمة الإغلاق كهرمانية اللون. يُخزَّن في مخزن بارد ومظلم بعيداً عن الحرارة وضوء الشمس المباشر والرطوبة. مدة الصلاحية: يبقى شديد الفعالية لمدة تصل إلى 1-2 سنة إذا لم يتعرض للهواء.' },
          { form: 'القراص المُبيَّض المُجمَّد (للاستخدام الطهوي)', instructions: 'اضغط القراص المُبيَّض بإحكام في أكياس بلاستيكية ثقيلة مخصصة للتجميد. تأكد من إخراج كل الهواء الزائد من الكيس قبل إغلاقه. مدة الصلاحية: يمكن تجميده لمدة 6-8 أشهر.' },
          { form: 'السوائل المُحضَّرة (المنقوعات والمستخلصات السائلة)', instructions: 'شاي القراص/المغلي: بمجرد تصفية السائل، يُغلق في برطمان زجاجي.' },
          { form: 'الأوراق المجففة بالهواء (لشاي القراص)', instructions: 'يُخزَّن في برطمانات زجاجية محكمة الإغلاق أو حاويات نظيفة في خزانة مظلمة (بعيداً عن الضوء). مدة الصلاحية: تصل إلى سنة واحدة. ملاحظة: تخلص منه إذا لاحظت عفناً أو رائحة كريهة.' },
        ],
      },
      benefits: [],
      factsAndMyths: [
        {
          myth: 'كل جزء من النبات (الورقة مقابل الجذر) يخدم نفس الغرض الطبي تماماً.',
          fact: 'الأوراق المجففة بالهواء والمستحضرات السائلة فعّالة في تجفيف الجيوب الأنفية وتدبير أعراض التهاب الأنف.',
        },
      ],
      botanicalFacts: {
        family: 'Urticaceae',
        activeCompounds: 'بوليفينولات وكاروتينويدات وCMA (مضادة للالتهاب)؛ أمينتوفلافون وألفا-توكوتريينول (مضادة للهيستامين)؛ سيروتونين وأستيل كولين (وسيطات)',
        clinicalEvidence: 'تُركِّز معظم التجارب السريرية على البالغين. أظهرت كبسولات الأوراق المجففة بالتجميد (حوالي 600 ملغ يومياً) والمنقوعات فعاليةً في تجفيف الجيوب الأنفية وتدبير التهاب الأنف.',
      },
    },

    'black-seed-rhinitis': {
      name: 'حبة البركة',
      activeConstituents: [
        { name: 'الزيوت الأساسية', detail: 'الثيموكينون (المركب الفعّال الرئيسي)، ثنائي الثيموكينون، الثيموهيدروكينون، ب-سيمين، الكارفاكرول، الثيمول، ألفا-بينين.' },
        { name: 'القلويدات', detail: 'نيجيليسيمين، نيجيليسيمين N-أكسيد، نيجيليدين، نيجيليسين.' },
        { name: 'الصابونينات', detail: 'ألفا-هيدرين (تأثيرات مناعية ومضادة للأورام المحتملة).' },
        { name: 'الزيوت الثابتة والأحماض الدهنية', detail: '32-40% زيت يحتوي على حمض اللينوليك (أوميجا-6)، حمض الأوليك (أوميجا-9)، حمض البالميتيك، بالإضافة إلى ستيرولات مثل بيتا-سيتوستيرول والستيجماستيرول والكامبيستيرول.' },
      ],
      moa: [
        { title: 'تأثيرات مضادة للهيستامين ومضادة للحساسية', detail: 'تثبيت الخلايا البدينة: يمنع الثيموكينون تدهور الخلايا البدينة، مما يُقلِّل من إفراز الهيستامين في ممرات الأنف. حجب المستقبلات: يحجب مستقبلات الهيستامين بشكل غير انتقائي للتخفيف من الحكة والعطس.' },
        { title: 'التأثير المضاد للالتهابات', detail: 'تثبيط المسار: تُثبِّط نيجيلا ساتيفا إنزيمات 5-LOX وCOX (مسار حمض الأراكيدونيك)، مما يمنع تكوين الليكوترينات والبروستاجلاندينات لتقليل وذمة الأنف والمخاط. تنظيم السيتوكينات: تقليل إفراز السيتوكينات المؤيدة للالتهاب مثل TNF-α.' },
      ],
      uses: [
        'توفر تأثيرات مضادة للهيستامين ومضادة للالتهابات ومعدِّلة للمناعة بشكل طبيعي، مما يخفف أعراض العطس والاحتقان الأنفي والحكة دون الآثار الجانبية الشائعة للأدوية التقليدية.',
      ],
      howToUse: [
        { method: 'الكبسولات الفموية', instruction: 'أظهرت الدراسات السريرية نجاحاً بجرعات تتراوح بين (250 ملغ) و(500 ملغ) من مستخلص البذور تُؤخذ يومياً.' },
        { method: 'زيت حبة البركة السائل', instruction: 'يتناول البالغون عادةً 1 إلى 2 ملعقة صغيرة يومياً، إما مباشرةً أو ممزوجاً بالعسل أو الماء الدافئ.' },
        { method: 'قطرات/بخاخ أنفي', instruction: 'تشير بعض التجارب إلى تطبيق 1 إلى 2 قطرة من زيت حبة البركة عالي الجودة مباشرةً في كل فتحة أنف حتى 3 مرات يومياً لتخفيف التهاب الغشاء المخاطي.' },
      ],
      suitableAgeGroups: [
        { group: 'الرضع وصغار الأطفال (أقل من 12 شهراً)', notes: 'غير موصى به بسبب عدم نضج الجهاز الهضمي والمناعي لديهم.' },
        { group: 'صغار الأطفال (من 1 إلى 5 سنوات)', notes: 'يُستخدم بكميات صغيرة ومحدودة. تتوفر منتجات إدارة أنفية خاصة للاستخدام اليومي.' },
        { group: 'الأطفال في سن المدرسة (من 6 إلى 12 سنة)', notes: 'تركز الجرعات على كميات يومية محددة ومقاسة تتناسب مع وزن الطفل.' },
        { group: 'المراهقون والبالغون (13 سنة فأكثر)', notes: 'يستخدمون القياسات اليومية القياسية، ويمكن تقسيمها على جرعات متعددة.' },
      ],
      dosage: {
        standard: 'يُعدّ آمناً بشكل عام، مع جرعات مقترحة للبالغين تتراوح بين 10 و100 ملغ/كغ/يوم، وإن كانت اضطرابات هضمية خفيفة قد تحدث أحياناً.',
      },
      overdose: {
        intro: 'يمكن أن يتسبب تناول كميات مفرطة من حبة البركة أو زيتها في:',
        symptoms: [
          'تلف الأعضاء: ارتبط التناول المفرط بإصابة حادة في الكلى وسُمِّية الكبد.',
          'مشاكل أيضية حادة: سُجِّلت حالات نادرة من انحلال الربيدات (تكسُّر العضلات) والفشل الكلوي الحاد عقب التناول المفرط.',
          'نقص سكر الدم وانخفاض ضغط الدم: يمكن أن يخفض سكر الدم وضغط الدم بقوة، مما قد يؤدي إلى الدوخة أو الإغماء لدى الأشخاص المعرضين للخطر.',
          'اضطرابات الجهاز الهضمي: يؤدي التناول المفرط في الغالب إلى الغثيان والانتفاخ والقيء وتهيج الأمعاء.',
          'خطر متلازمة السيروتونين: قد يرفع مستويات السيروتونين بشكل خطير عند تناوله مع الأدوية السيروتونينية، مما قد يسبب مشاكل قلبية أو تشنجات.',
        ],
        management: [
          'وقف الاستخدام: التوقف فوراً عن تناول جميع مكملات ومستخلصات وزيوت نيجيلا ساتيفا.',
          'الرعاية الداعمة: التركيز على إدارة الأعراض المحددة (مثل محاليل الوريد لعلاج الجفاف، وتوازن الشوارد).',
          'مراقبة وظائف الأعضاء: نظراً لأن الجرعات العالية قد تتسبب في تلف الكبد والكلى، يجب طلب التقييم الطبي للتحقق من إنزيمات الكبد ووظائف الكلى.',
        ],
      },
      sideEffects: [
        'الجهاز الهضمي: الغثيان والقيء وعسر الهضم والإمساك أو ألم المعدة.',
        'جفاف الأنف: لا سيما عند تناوله أو تطبيقه موضعياً كقطرات أنفية.',
        'أعراض جهازية: نعاس خفيف أو تعب أو صداع.',
        'الجلد: التهاب الجلد التماسي أو الطفح الجلدي التحسسي عند التطبيق الموضعي المباشر.',
      ],
      contraindications: [
        'الحمل: هو بشكل عام موانع أثناء الحمل لأنه قد يُثبِّط تقلصات الرحم.',
        'اضطرابات النزيف: بسبب خصائص تخفيف الدم المحتملة، قد يزيد من خطر النزيف.',
        'العمليات الجراحية القادمة: يجب التوقف عن تناوله قبل أسبوعين على الأقل من الجراحة المقررة.',
        'نقص سكر الدم: يمكن لمستخلص حبة البركة أن يخفض سكر الدم.',
        'مرضى السكري أو من يتناولون أدوية خفض السكر يجب عليهم استخدامه بحذر.',
        'انخفاض ضغط الدم: قد يخفض ضغط الدم أكثر، مما يجعله خطراً على من يتناولون أدوية خفض ضغط الدم.',
        'الحساسية النشطة: على الرغم من استخدامه لعلاج التهاب الأنف، قد يصاب بعض الأشخاص بطفح جلدي أو تهيج جلدي عند تناوله.',
      ],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'زيت نيجيلا ساتيفا', instructions: 'احفظه في زجاجات زجاجية عنبرية أو كوبالتية لحجب الضوء. أحكم إغلاق الغطاء بعد كل استخدام لمنع التعرض للأكسجين. خزِّنه في مخزن بارد أو ضعه في الثلاجة بعد الفتح للحفاظ على الأحماض الدهنية الحساسة.' },
          { form: 'كبسولات الزيت / السوفت جيل', instructions: 'خزِّنها في حاويتها الأصلية بعيداً عن الحرارة والرطوبة. تجنب التخزين في الحمام، حيث يمكن أن تؤدي الرطوبة العالية إلى تلاصق قشور السوفت جيل أو ذوبانها.' },
          { form: 'البذور الكاملة أو المطحونة', instructions: 'احفظ البذور الكاملة في مرطبان مغلق وجاف في درجة حرارة الغرفة. اطحنها فقط قبيل الاستهلاك مباشرةً، إذ تفقد البذور المطحونة مسبقاً زيوتها الطيارة الطبية بسرعة كبيرة.' },
        ],
      },
      benefits: [],
      botanicalFacts: {
        family: 'Ranunculaceae',
        activeCompounds: 'الثيموكينون (المركب الفعّال الرئيسي)، ثنائي الثيموكينون، الثيموهيدروكينون؛ نيجيليسيمين، نيجيليدين؛ ألفا-هيدرين؛ حمض اللينوليك (أوميجا-6)، حمض الأوليك (أوميجا-9)',
        clinicalEvidence: 'يُعدّ آمناً بشكل عام، مع جرعات مقترحة للبالغين تتراوح بين 10 و100 ملغ/كغ/يوم. أظهرت الدراسات السريرية نجاحاً بجرعات 250-500 ملغ من مستخلص البذور يومياً.',
      },
      factsAndMyths: [
        {
          myth: '"يمكن لنيجيلا ساتيفا أن تُعالج التهاب الأنف التحسسي تماماً من تلقاء نفسها."',
          fact: 'قد تُساعد نيجيلا ساتيفا في تقليل أعراض التهاب الأنف التحسسي لاحتوائها على مركبات مضادة للالتهاب ومضادة للأكسدة مثل الثيموكينون، لكنها علاج داعم وليست علاجاً مضموناً.',
        },
      ],
    },

    lemon: {
      name: 'الليمون',
      shortDescription: 'غني بفيتامين C والهيسبيريدين، يُعزِّز المناعة ويُخفِّف أعراض البرد والتهاب الحلق.',
      description: 'الليمون Citrus limon من أكثر الفاكهة استخداماً في الطب الشعبي حول العالم. محتواه الغالي من حمض الأسكوربيك (فيتامين C) وفلافونويدات الهيسبيريدين يُحفِّز إنتاج الإنترفيرون ويُعزِّز نشاط الخلايا البلعمية.',
      symptoms: ['البرد', 'التهاب الحلق', 'ضعف المناعة', 'نقص فيتامين C'],
      warnings: [
        'قرحة المعدة أو ارتجاع الحمض (GERD): الاستخدام الفموي المفرط يُفاقم الأعراض.',
        'تآكل مينا الأسنان: اشطف فمك بالماء فوراً بعد شرب عصير الليمون وتجنّب الفرك بالفرشاة مباشرة.',
        'حصى الكلى (النوع الأكزاليكالسي): الكميات الكبيرة قد تُفاقم التكوُّن.',
      ],
      activeConstituents: [
        { name: 'فيتامين C / حمض الأسكوربيك L (تركيز مرتفع)', percentage: '', effect: 'دعم المناعة الأساسي؛ تخليق الكولاجين؛ مضاد أكسدة؛ مُعزِّز امتصاص الحديد' },
        { name: 'D-ليمونين (تيربين الأساسي، القشر)', percentage: '', effect: 'مضاد للميكروبات؛ مضاد للالتهاب؛ مُحفِّز إنزيمات الكبد؛ محلِّل للمخاط' },
        { name: 'حمض الستريك', percentage: '', effect: 'مُقلِّب بول؛ مُحسِّن امتصاص المعادن؛ مضاد للميكروبات في درجة pH منخفضة' },
        { name: 'هيسبيريدين وإيريوسيترين (فلافونويدات)', percentage: '', effect: 'مضادة للالتهاب؛ حماية وعائية؛ مضادة للأكسدة' },
        { name: 'روتين', percentage: '', effect: 'تقوية الشعيرات الدموية؛ مضاد للالتهاب' },
      ],
      moa: [
        { title: 'دعم المناعة', detail: 'فيتامين C ضروري لوظيفة العدلات واللمفاويات؛ يُقلِّل مدة البرد بدعم تكاثر خلايا المناعة.' },
        { title: 'مضاد للميكروبات', detail: 'حمض الستريك يخلق بيئة حمضية غير ملائمة للمسببات المرضية؛ D-ليمونين يُعطِّل أغشية الميكروبات.' },
        { title: 'دعم الكبد', detail: 'D-ليمونين يُحفِّز إنزيمات إزالة سموم الكبد ويحمي الخلايا الكبدية من التلف التأكسدي.' },
        { title: 'محلِّل للمخاط', detail: 'D-ليمونين وبخار المشروب الساخن يُرقِّقان الإفرازات التنفسية ويُسهِّلان طرحها.' },
      ],
      uses: [
        'دعم المناعة خلال البرد والإنفلونزا',
        'تكملة فيتامين C',
        'تهدئة الحلق الملتهب',
        'دعم الجهاز الهضمي والكبد',
        'الوقاية من حصى الكلى (عبر تقليب البول)',
      ],
      howToUse: [
        { method: 'مشروب الليمون الدافئ', instruction: 'اعصر حبة ليمون طازجة في كوب ماء دافئ (ليس مغلياً) مع ملعقة صغيرة عسل. اشرب 2-3 مرات يومياً عند الإصابة بالبرد.' },
        { method: 'عصير طازج يومي', instruction: 'عصير حبة إلى حبتين يومياً كمصدر لفيتامين C. اشطف فمك بالماء بعده مباشرة.' },
        { method: 'قشر الليمون في الطعام', instruction: 'أضيفي قشر الليمون المبشور إلى الطعام كمصدر للD-ليمونين والفلافونويدات.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن للاستخدام اليومي في الكميات المعتدلة.' },
        { group: 'الأطفال (>1 سنة)', notes: 'آمن بكميات معتدلة في الطعام أو المشروبات؛ تجنّبي الإفراط لحماية الأسنان.' },
        { group: 'الحوامل', notes: 'آمن بالكميات الغذائية الاعتيادية.' },
        { group: 'مرضى GERD وقرحة المعدة', notes: 'تجنّبي الكميات الكبيرة أو الاستخدام على معدة فارغة.' },
      ],
      dosage: {
        standard: 'علاجي لفيتامين C: عصير 2-3 حبات يومياً (60-90 مغ فيت C). مكمّلات: 500-1000 مغ فيتامين C يومياً لعلاج البرد.',
        forms: [
          { form: 'عصير طازج', dose: 'حبة إلى حبتين يومياً (30-60 مل عصير).' },
          { form: 'مشروب دافئ مع عسل', instruction: 'عصير حبة كاملة في ماء دافئ مع عسل، 2-3 مرات يومياً عند المرض.' },
        ],
      },
      overdose: {
        symptoms: [
          'كميات كبيرة جداً من العصير: تآكل مينا الأسنان، حرقة المعدة، إسهال، وتفاقم GERD.',
          'كميات مفرطة من فيتامين C (>2000 مغ/يوم): إسهال اسموزي، غثيان، تكوُّن حصى الكلى الأكزاليكالسي.',
        ],
        management: [
          'تقليل الكمية، شطف الفم بالماء بعد العصير، وعلاج أعراض الجهاز الهضمي.',
        ],
      },
      sideEffects: [
        'تآكل مينا الأسنان عند الاستخدام المفرط (اشطف فمك دائماً)',
        'تفاقم GERD وارتجاع الحمض',
        'تحفيز محتمل لتكوُّن حصى الكلى الأكزاليكالسي بكميات كبيرة',
      ],
      contraindications: [
        'قرحة المعدة النشطة',
        'GERD الحاد: استخدام بكميات محدودة',
        'حساسية معروفة من الحمضيات',
      ],
      drugInteractions: [
        'بعض الأدوية: عصير الليمون قد يُغيِّر امتصاصها (أقل خطورةً من الجريب فروت لكن ممكن)',
      ],
      storage: {
        forms: [
          { form: 'الليمون الطازج', instructions: 'يُحفظ في درجة حرارة الغرفة أسبوعاً أو في الثلاجة حتى 4 أسابيع.' },
        ],
      },
    
      benefits: [
        { icon: 'shield', title: 'دعم المناعة', desc: 'تتراكم فيتامين C في خلايا البلعمة مما يُعزز الانجذاب الكيميائي والبلعمة وتكاثر الخلايا التائية لدفاع مناعي شامل.' },
        { icon: 'thermostat', title: 'الدفاع المضاد للأكسدة', desc: 'حمض الأسكوربيك يُزيل جذور الأكسجين التفاعلية والجذور الحرة، مما يحمي خلايا الظهارة التنفسية خلال الالتهابات الفيروسية.' },
        { icon: 'water_drop', title: 'مُلطِّف وطارد للبلغم', desc: 'الحموضة تُفكك المخاط الكثيف وتُسيِّله مما يُسهّل التخلص منه؛ أوفر للمجاري التنفسية المتهيجة.' },
      ],
      botanicalFacts: { family: 'Rutaceae', nativeRegion: 'جنوب آسيا (يُرجَّح شمال شرق الهند)؛ يُزرع على نطاق واسع في منطقة البحر المتوسط والأمريكتين والمناطق شبه الاستوائية', growthHabit: 'شجرة صغيرة أو جنبة دائمة الخضرة بارتفاع 3-6 م؛ أغصان شوكية؛ أزهار بيضاء عطرة', activeCompounds: 'فيتامين C (53 مغ/100 مل)، هيسبيريدين، إيريوسيتريوسيد، ليمونين (قشر)، بيكتين', cultivationNotes: 'يُزرع في مناخات مدارية وشبه مدارية دافئة؛ ثمار الصيف الأغنى بفيتامين C.' },
      preparation: [
        { method: 'منقوع الليمون الدافئ', desc: 'عصر نصف ليمونة (15-30 مل) في ماء دافئ (أقل من 60 درجة مئوية): لا يُستخدم الغلي.', bestFor: 'الترطيب، توصيل فيتامين C، دعم المناعة الخفيف' },
        { method: 'خلطة الليمون والعسل المُلطِّفة', desc: '15 مل عصير طازج + ملعقة إلى ملعقتين عسل في ماء دافئ، يُشرب ببطء.', bestFor: 'السعال الجاف المتهيج، التهاب الحلق، التهاب البلعوم' },
      ],
    },

    'black-seed': {
      name: 'الحبة السوداء',
      shortDescription: 'مُعدِّل مناعي قوي بالثيموكينون. ⚠️ يجب سحقها فور الاستخدام لأن الثيموكينون يتبخر بسرعة.',
      description: 'الحبة السوداء Nigella sativa مُستخدَمة طبياً لأكثر من 2000 عام وذُكر علاجها في الحديث النبوي الشريف. الثيموكينون TQ هو المادة الفعّالة الرئيسية بخصائص مضادة للالتهابات والأكسدة والميكروبات. البذور تُسحق فور الاستخدام لأن TQ يتبخر سريعاً عند التعرض للهواء.',
      symptoms: ['ضعف المناعة', 'الالتهابات', 'الحساسية', 'الجهاز التنفسي'],
      warnings: [
        'محظور تماماً أثناء الحمل: يُحفِّز تقلصات الرحم مما يُسبِّب خطر الإجهاض.',
        'يجب سحق البذور فور الاستخدام: TQ يتبخر سريعاً من البذور المطحونة مسبقاً.',
        'وقفه قبل أسبوعين من أي عملية جراحية: تأثيرات مضادة للتخثر وخافضة لضغط الدم.',
      ],
      activeConstituents: [
        { name: 'ثيموكينون / TQ (فينول بلوري أساسي)', percentage: '', effect: 'مُثبِّط مباشر لـ5-LOX؛ مُعدِّل للمناعة؛ مضاد للالتهاب ولمرض السكري؛ أبحاث مضادة للسرطان' },
        { name: 'ثيموهيدروكينون', percentage: '', effect: 'فينول مُعدِّل للمناعة الثانوي' },
        { name: 'نيجيلون', percentage: '', effect: 'قوي مضاد للهيستامين؛ مُثبِّت للخلايا البدينة؛ موسِّع للشعب الهوائية؛ يحمي الأنسجة القصبية من التشنج الناجم عن الهيستامين' },
        { name: 'ب-سيمين (زيت متطاير)', percentage: '', effect: 'عطري؛ مضاد للميكروبات الثانوي' },
        { name: 'حمض اللينوليك والأوليك (زيت ثابت)', percentage: '', effect: 'أساسي لتوافر TQ الحيوي الدهني؛ يجب أخذه مع الطعام' },
      ],
      moa: [
        { title: 'تعديل المناعة المتقدم', detail: 'يُسرِّع بشكل ملحوظ القدرة السامة لخلايا NK؛ يُعزِّز نشاط البلعمة للبلاعم.' },
        { title: 'تثبيط 5-LOX', detail: 'TQ يُثبِّط مباشرةً 5-ليبوكسيجيناز مما يوقف إنتاج الليكوترينات المحرِّكة للتشنج القصبي التحسسي.' },
        { title: 'توسيع الشعب الهوائية', detail: 'النيجيلون يُوفِّر تأثيراً مضاداً للهيستامين؛ يُثبِّت الخلايا البدينة؛ يُرخِّي المجاري الهوائية المُفرِطة في التفاعل.' },
        { title: 'مضاد للسكري', detail: 'يُعزِّز حساسية الأنسولين المحيطية؛ يدعم وظيفة خلايا بيتا البنكرياسية.' },
      ],
      uses: [
        'تعزيز الجهاز المناعي وتعديله',
        'الربو وأمراض المجاري الهوائية التحسسية',
        'السكري من النوع الثاني كمساعد',
        'خلل الدهون وارتفاع الكوليسترول',
        'ارتفاع ضغط الدم الخفيف',
        'دعم مضاد للأكسدة عام',
      ],
      howToUse: [
        { method: 'بذور مسحوقة طازجاً', instruction: 'اسحقي البذور فوراً قبل الاستخدام مباشرةً. تناولي مع الطعام أو خلطي مع عسل أو ماء. ابدئي بنصف الجرعة الأسبوع الأول.' },
        { method: 'زيت معصور على البارد', instruction: 'تناولي الزيت مع الوجبة أو بعدها؛ لا تأخذيه على معدة فارغة. ابدئي بجرعة منخفضة.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن ضمن الجرعات الموصى بها؛ ابدئي بالجرعة الأدنى الأسبوع الأول.' },
        { group: 'الحوامل', notes: 'محظور تماماً في الجرعات العلاجية.' },
        { group: 'مرضى السكري', notes: 'مراقبة دقيقة لسكر الدم ضرورية عند الجمع مع الأدوية.' },
        { group: 'ما قبل الجراحة', notes: 'وقفه قبل أسبوعين.' },
      ],
      dosage: {
        standard: 'تعزيز المناعة: 500 مغ بذور/يوم أو 2.5 مل زيت/يوم. الربو: 500 مغ-1 غرام بذور مرتين يومياً. السكري: 2-3 غرام بذور يومياً لمدة 3 أشهر. ابدئي دائماً بالجرعة الأدنى الأسبوع الأول.',
        forms: [
          { form: 'بذور مسحوقة طازجاً', dose: '500 مغ-1 غرام مع الطعام، 1-2 مرة يومياً.' },
          { form: 'زيت معصور على البارد', dose: '2.5-5 مل مع الوجبة أو بعدها.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة: تهيج معدي حاد (خاصةً على معدة فارغة)، انخفاض ضغط الدم، نقص سكر الدم المحتمل مع أدوية السكري.',
          'جرعات عالية جداً: قد تُسبِّب تأثيراً سمياً على الكلى.',
        ],
        management: [
          'تقليل الجرعة، التأكد من الأخذ مع الطعام دائماً، ومراقبة ضغط الدم وسكره.',
        ],
      },
      sideEffects: [
        'تهيج معدي عند الأخذ على معدة فارغة (خاصةً في بداية الاستخدام)',
        'انخفاض محتمل لضغط الدم',
        'احتمال نقص سكر الدم مع أدوية السكري',
      ],
      contraindications: [
        'الحمل: محظور تماماً في الجرعات العلاجية',
        'اضطرابات النزيف وتخثر الدم',
        'قبل الجراحة: وقفه قبل أسبوعين على الأقل',
      ],
      drugInteractions: [
        'أدوية السكري: تأثير إضافي على خفض سكر الدم',
        'مضادات التخثر (وارفارين): تأثير مضاد للتخثر إضافي',
        'أدوية ضغط الدم: تأثير خافض إضافي محتمل',
      ],
      storage: {
        forms: [
          { form: 'البذور', instructions: 'يُخزَّن في حاوية محكمة الإغلاق بعيداً عن الهواء والضوء؛ اسحقي فقط عند الاستخدام مباشرةً.' },
          { form: 'الزيت', instructions: 'يُخزَّن في زجاجة داكنة محكمة في الثلاجة بعد الفتح.' },
        ],
      },
    
      benefits: [
        { icon: 'shield', title: 'تنشيط خلايا القاتل الطبيعي', desc: 'يُسرّع بشكل ملحوظ القدرة الانحلالية لخلايا القاتل الطبيعي ويُعزز نشاط البلعمة في الضامات للدفاع المناعي الشامل.' },
        { icon: 'air', title: 'إدارة الربو والمجاري التنفسية', desc: 'تثبيط 5-LOX يوقف تخليق الليوكوترينات؛ النيجيلون يوفر توسيع قصبي مضاد للهستامين ومضاداً للتشنج.' },
        { icon: 'healing', title: 'مضاد قوي للالتهابات', desc: 'الثيموكينون يثبط مسارات NF-κB وCOX-2 وPGE-2 مقللاً السيتوكينات الالتهابية بآلية مقارنة للأدوية المضادة للالتهابات.' },
      ],
      botanicalFacts: { family: 'الفصيلة الحوذانية', nativeRegion: 'جنوب أوروبا وشمال أفريقيا وجنوب آسيا؛ يُزرع على نطاق واسع في الشرق الأوسط والهند وشمال أفريقيا', growthHabit: 'عشب حولي بارتفاع 20-30 سم؛ أزهار بيضاء أو زرقاء شاحبة؛ بذور سوداء مثلثية (الجزء الدوائي)', activeCompounds: 'الثيموكينون (30-48%)، النيجيلون، الثيمول، الكارفاكرول، بيتا-سيتوستيرول', cultivationNotes: 'يُزرع في التربة الجيدة التصريف مع أشعة شمس كاملة؛ البذور تُجمع بعد الجفاف الطبيعي.' },
      preparation: [
        { method: 'البذور المسحوقة طازجاً مع الطعام', desc: 'سحق البذور فوراً قبل الاستخدام؛ تُؤخذ مع الطعام أو بعده مباشرة لأفضل امتصاص. ابدأ بجرعة التدرج.', bestFor: 'دعم المناعة، الربو، السكري، ضغط الدم' },
        { method: 'زيت المعصرة الباردة مع الطعام', desc: '2.5-5 مل زيت معصرة باردة مع الطعام؛ لا يُسخَّن.', bestFor: 'جميع الاستخدامات؛ الامتصاص الأسهل للثيموكينون' },
      ],
    },

    rocket: {
      name: 'الجرجير',
      shortDescription: 'غني بالجلوكوزينولات الكبريتية والإيزوثيوسيانات والأحماض الدهنية الأساسية التي تُغذّي بصيلات الشعر وتُقلّل التكسّر وتدعم الدورة الدموية الدقيقة لفروة الرأس.',
      description: 'زيت بذور الجرجير (Eruca sativa) ومستخلصات أوراقه يدعمان صحة فروة الرأس والبصيلات من خلال محتواهما الكثيف من الإيزوثيوسيانات والجلوكوزينولات. الإيروسين والمركبات الكبريتية ذات الصلة توفر حماية مضادة للميكروبات ومضادة للأكسدة لفروة الرأس، بينما يُوفّر الزيت المعصور على البارد أحماض الأوليك واللينوليك التي تُهيّئ عمود الشعر وتُقلّل التكسر الميكانيكي.',
      symptoms: ['تساقط الشعر', 'تكسّر الشعر', 'جفاف فروة الرأس', 'ضعف الشعر', 'ترقّق الشعر'],
      warnings: [
        'أجرِ اختبار حساسية جلدية قبل الاستخدام الأول، خاصةً لمن يعانون من حساسية تجاه نباتات الفصيلة الصليبية.',
        'لا تُطبَّق على فروة الرأس المتشققة أو الملتهبة أو المصابة بالتهاب جلدي نشط؛ المركبات الكبريتية قد تُهيّج البشرة الجريحة.',
        'عصير الأوراق الطازج يتأكسد بسرعة ويجب تحضيره واستخدامه فوراً.',
      ],
      activeConstituents: [
        { name: 'الإيزوثيوسيانات (الإيروسين والمركبات الكبريتية ذات الصلة)', percentage: '', effect: 'نشاط مضاد للميكروبات والأكسدة؛ دعم صحة فروة الرأس والبيئة الجريبية' },
        { name: 'الجلوكوزينولات (الجلوكوإيروسين)', percentage: '', effect: 'سلائف الإيزوثيوسيانات؛ مركبات غنية بالكبريت تدعم تخليق الكيراتين' },
        { name: 'الأحماض الدهنية (الأوليك، اللينوليك، الإيروسيك بكميات ضئيلة)', percentage: '', effect: 'تُهيّئ عمود الشعر وتُقلّل التكسر الميكانيكي وتُحسّن نعومة الشعر' },
        { name: 'الفيتامينات A وC وK والمعادن (الحديد، الماغنيسيوم، الكبريت)', percentage: '', effect: 'تدعم استقلاب البصيلات وسلامة أنسجة فروة الرأس ودورات نمو الشعر الطبيعية' },
        { name: 'الفلافونويدات (الكيرستين والإيزورامنيتين)', percentage: '', effect: 'حماية مضادة للأكسدة لخلايا البصيلات؛ تُقلّل الإجهاد التأكسدي المرتبط بتساقط الشعر' },
      ],
      moa: [
        { title: 'دعم الدورة الدموية الدقيقة لفروة الرأس', detail: 'تُشير الدراسات التجريبية إلى أن المركبات الكبريتية والفلافونويدات قد تُعزّز الإمداد الدموي الدقيق لفروة الرأس، مما يُحسّن توصيل المغذيات إلى الحليمة الجلدية.' },
        { title: 'الحماية المضادة للأكسدة للبصيلات', detail: 'الكيرستين والإيزورامنيتين يُبطّلان الجذور الحرة داخل بيئة فروة الرأس، مُقلّلَين الضرر التأكسدي للبصيلات الذي يُساهم في التساقط المبكر.' },
        { title: 'تهيئة عمود الشعر', detail: 'أحماض الأوليك واللينوليك في الزيت تتغلغل في قشرة الشعر، تملأ الفجوات في البشيرة، تُقلّل الإجهاد الرطوبي، وتُقلّل القابلية للتكسر الميكانيكي.' },
        { title: 'النشاط المضاد للميكروبات لفروة الرأس', detail: 'الإيزوثيوسيانات تُمارس نشاطاً مضاداً واسع الطيف ضد مسببات الأمراض السطحية لفروة الرأس، مما يُساعد في الحفاظ على بيئة صحية مواتية لنمو الشعر.' },
      ],
      uses: [
        'دعم نمو الشعر الصحي وتقليل التكسر',
        'تحسين نعومة الشعر ولمعانه وسهولة إدارته',
        'تغذية فروة الرأس وترطيبها',
        'تحسين مظهر الشعر الخفيف أو الباهت',
        'دعم مساعد لجفاف فروة الرأس الخفيف والتهيج',
      ],
      howToUse: [
        { method: 'تدليك فروة الرأس بالزيت', instruction: 'سخّن كمية صغيرة من زيت بذور الجرجير المعصور على البارد ودلّك فروة الرأس لمدة 5-10 دقائق. اترك 30-60 دقيقة كعلاج قبل الغسيل ثم اشطف جيداً. استخدم مرتين أسبوعياً.' },
        { method: 'قناع عصير الأوراق الطازج', instruction: 'اخلط أوراق الجرجير الطازجة مع كمية صغيرة من الماء الفاتر، ثم صفّها بقطعة قماش ناعمة للحصول على العصير المركّز. طبّق على فروة الرأس واترك 30-60 دقيقة ثم اشطف. مرتين أسبوعياً.' },
        { method: 'زيت بذور منزلي الصنع', instruction: 'اسحق بذور الجرجير لتكسير القشرة. ضعها في وعاء زجاجي وأضف زيت اللوز الحلو. اترك في مكان دافئ مظلم 14 يوماً مع التحريك اليومي، ثم صفّه واستخدمه كعلاج قبل الغسيل.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن للاستخدام الموضعي عند التطبيق حسب التعليمات.' },
        { group: 'الأطفال', notes: 'آمن عموماً للاستخدام الموضعي؛ يُفضَّل المستحضرات المخففة. أجرِ اختبار حساسية قبل الاستخدام.' },
        { group: 'الحوامل', notes: 'يُعدّ آمناً عموماً للاستخدام الموضعي بكميات معتدلة. تجنّب التطبيق المفرط.' },
      ],
      dosage: {
        standard: 'زيت البذور: دلّك فروة الرأس 5-10 دقائق، مرتين أسبوعياً كعلاج قبل الغسيل. عصير الأوراق الطازج: طبّق على فروة الرأس مرتين أسبوعياً لمدة 30-60 دقيقة.',
        forms: [
          { form: 'زيت البذور المعصور على البارد (موضعي)', dose: 'كمية صغيرة على فروة الرأس، تدليك 5-10 دقائق، اترك 30-60 دقيقة قبل الغسيل. مرتين أسبوعياً.' },
          { form: 'قناع عصير الأوراق الطازج (موضعي)', dose: 'طبّق العصير المصفّى على فروة الرأس، اترك 30-60 دقيقة، اشطف. مرتين أسبوعياً.' },
          { form: 'الزيت المنقوع منزلياً (موضعي)', dose: 'دلّك فروة الرأس كعلاج قبل الغسيل. مرتين أسبوعياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'احمرار خفيف لفروة الرأس أو تهيّج عند الأفراد الحساسين مع التطبيق المتكرر للزيت المركّز.',
          'إحساس مؤقت بالحرق أو اللسعة على البشرة الحساسة.',
        ],
        management: [
          'اشطف فروة الرأس جيداً بالماء البارد.',
          'أوقف الاستخدام مؤقتاً إذا استمر التهيج.',
          'طبّق مُلطِّفاً مهدئاً (مثل هلام الصبّار) لتهدئة فروة الرأس.',
        ],
      },
      sideEffects: [
        'إحساس دافئ خفيف أثناء التطبيق (شائع مع الزيوت الغنية بالكبريت)',
        'رائحة كبريتية قوية أثناء التطبيق وبعده',
        'تهيّج موضعي خفيف محتمل لدى أصحاب البشرة الحساسة',
      ],
      contraindications: [
        'الحساسية من نباتات الفصيلة الصليبية: من يعانون من حساسية تجاه الخردل أو الملفوف أو البروكلي أو النباتات ذات الصلة يجب إجراء اختبار حساسية قبل الاستخدام.',
        'فروة الرأس الجريحة الشديدة أو الملتهبة: تجنّب التطبيق على الجروح المفتوحة أو مناطق فروة الرأس الملتهبة الشديدة أو التهاب الجلد النشط.',
      ],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'عصير الأوراق الطازج', instructions: 'استخدم فوراً بعد التحضير؛ يتأكسد بسرعة ولا يمكن تخزينه.' },
          { form: 'زيت البذور المعصور على البارد (تجاري)', instructions: 'يُخزَّن في مكان بارد مظلم في زجاجة كهرمانية. مدة صلاحية تصل إلى سنة واحدة عند الإغلاق.' },
          { form: 'الزيت المنقوع منزلياً', instructions: 'يُبرَّد بعد التصفية؛ يُستخدم خلال شهر إلى شهرين. تجنّب تلوثه بالماء لمنع نمو الميكروبات.' },
        ],
      },
      benefits: [
        { icon: 'spa', title: 'تغذية فروة الرأس', desc: 'أحماض الأوليك واللينوليك تُرطّب فروة الرأس وعمود الشعر بعمق لتقليل التكسر وتحسين اللمعان.' },
        { icon: 'science', title: 'حماية مضادة للأكسدة', desc: 'فلافونويدات الكيرستين والإيزورامنيتين تُبطّل الجذور الحرة لحماية البصيلات من الإجهاد التأكسدي.' },
        { icon: 'water_drop', title: 'دعم نمو الشعر', desc: 'المركبات الكبريتية تدعم الدورة الدموية الدقيقة لفروة الرأس وتخليق الكيراتين لدورات نمو شعر أكثر صحة.' },
        { icon: 'shield', title: 'مضاد للميكروبات لفروة الرأس', desc: 'الإيزوثيوسيانات تُثبّط مسببات الأمراض السطحية لفروة الرأس، مما يُحافظ على بيئة جريبية صحية.' },
      ],
      botanicalFacts: {
        family: 'الفصيلة الصليبية (Brassicaceae)',
        nativeRegion: 'منطقة البحر المتوسط وجنوب غرب آسيا؛ يُزرع حالياً في جميع أنحاء العالم',
        growthHabit: 'نبات عشبي حولي، ارتفاعه 20-100 سم؛ أوراق مُريشة الفصوص ذات رائحة فلفلية؛ أزهار بيضاء أو صفراء شاحبة بعروق أرجوانية',
        activeCompounds: 'الجلوكوإيروسين، الإيروسين (إيزوثيوسيانات)، حمض الأوليك، حمض اللينوليك، الكيرستين، الإيزورامنيتين',
        cultivationNotes: 'يُزرع على نطاق واسع كعشبة للسلطة ومحصول زيت. زيت التراميرا المعصور على البارد من البذور يُستخدم على نطاق واسع في تقاليد العناية بالشعر في جنوب آسيا.',
      },
      preparation: [
        { method: 'زيت البذور المعصور على البارد (العلمي القياسي)', desc: 'يُعصَر البذور على البارد للحفاظ على المركبات الكبريتية والأحماض الدهنية الحساسة التي تتدهور بالحرارة.', bestFor: 'تهيئة فروة الرأس، طلاء عمود الشعر، علاج مضاد للتكسر' },
        { method: 'قناع عصير الأوراق الطازج', desc: 'خلط أوراق الجرجير الطازجة مع ماء فاتر قليل وتصفيتها بقطعة قماش ناعمة للحصول على عصير مركّز.', bestFor: 'تغذية فروة الرأس، دعم القشرة الخفيفة، علاج مضاد للأكسدة' },
        { method: 'زيت البذور المنقوع منزلياً', desc: 'نقع البذور المسحوقة في زيت اللوز الحلو لمدة 14 يوماً في مكان دافئ مظلم مع التحريك اليومي ثم تصفيته.', bestFor: 'علاج قبل الغسيل، التهيئة، دعم حيوية الشعر' },
      ],
    },

    garlic: {
      name: 'الثوم',
      shortDescription: 'المركبات الكبريتية القوية في الثوم (بقيادة الأليسين) تُوفّر نشاطاً مضاداً قوياً للميكروبات في فروة الرأس وتُعزّز الدورة الدموية الدقيقة للبصيلات عبر قنوات TRP، وتُمد الكبريت الحيوي لتقوية شبكة الكيراتين وتقليل تكسّر الشعر.',
      description: 'الثوم Allium sativum يدعم النظام البيئي لفروة الرأس والبصيلات عبر مسارات دوائية متعددة الأهداف. الفصيل الكبريتي (بقيادة الأليسين) يُمارس نشاطاً قوياً مضاداً للميكروبات والفطريات يُثبّط مباشرةً المسببات المرضية الانتهازية لفروة الرأس كالمالاسيزيا فورفور. التطبيق الموضعي يُحفّز توسع الأوعية الدموية الدقيقة، مُعزّزاً الإمداد الدموي للحليمة الجلدية. الكبريت والسيلينيوم الحيويان يُوفّران اللبنات الأساسية لتقاطع رابطة ثنائي الكبريت في مصفوفة الكيراتين.',
      symptoms: ['القشرة', 'التهاب الجلد الدهني', 'تكسّر الشعر', 'ترقق الشعر', 'فرط نمو الميكروبات في فروة الرأس', 'الثعلبة البقعية'],
      warnings: [
        'لا تُطبّق أبداً معجون الثوم الخام أو الثوم غير المخفف مباشرةً على فروة الرأس؛ خطر حروق كيميائية حادة والتهاب جلدي تماسي.',
        'خفّف دائماً في زيت ناقل قبل التطبيق؛ أجرِ اختبار حساسية 24 ساعة قبل الاستخدام الأول.',
        'لا تُطبّق على فروة الرأس الجريحة أو الملتهبة أو المصابة بالصدفية أو الجروح المفتوحة.',
        'يجب تبريد زيت الثوم الطازج المصنوع منزلياً واستهلاكه خلال 3-5 أيام لتفادي خطر نمو البكتيريا اللاهوائية الخطير (خطر التسمم الوشيقي).',
        'تجنّب التطبيق المركّز على الأطفال؛ فروة رأس الأطفال عالية النفاذية للمتطايرات الكبريتية.',
      ],
      activeConstituents: [
        { name: 'الأليين والأليسين (مركبات كبريتية عضوية)', percentage: '', effect: 'نشاط مضاد للميكروبات والفطريات الأساسي؛ الأليسين يتشكّل مؤقتاً عبر تنشيط إنزيم الأليينيز عند تكسير الأنسجة' },
        { name: 'الأجوين، DADS، DATS (مستقلبات كبريتية ثانوية قابلة للذوبان في الدهون)', percentage: '', effect: 'تأثيرات ثانوية مضادة للميكروبات والالتهاب وداعمة للدورة الدموية' },
        { name: 'غليكوسيدات الكيرستين والأحماض الفينولية (فلافونويدات بوليفينولية)', percentage: '', effect: 'اصطياد موضعي للجذور الحرة؛ حماية مضادة للأكسدة لخلايا البصيلات' },
        { name: 'السيلينيوم والكبريت العنصري (معادن نادرة)', percentage: '', effect: 'ضروريان للحفاظ على سلامة الظهارة ودعم تقاطع رابطة ثنائي الكبريت وتشكّل الكيراتين في عمود الشعر' },
        { name: 'فيتامين C (حمض الأسكوربيك) وفيتامين B6 (بيريدوكسين)', percentage: '', effect: 'عوامل مساعدة أيضية تدعم استقلاب البصيلات وتخليق الكولاجين في الأدمة الجلدية' },
        { name: 'أحماض أمينية كبريتية', percentage: '', effect: 'أحماض أمينية غير بروتينية تدعم مباشرةً تخليق الكيراتين وتقاطعه داخل مصفوفة البصيلة' },
      ],
      moa: [
        { title: 'النشاط المضاد للميكروبات والفطريات لفروة الرأس', detail: 'الأليسين والمركبات الكبريتية ذات الصلة تُمارس نشاطاً قوياً واسع الطيف مضاداً للميكروبات والفطريات، يُثبّط مباشرةً المسببات المرضية الجلدية الانتهازية بما فيها المالاسيزيا فورفور، المساهم الرئيسي في القشرة والتهاب الجلد الدهني.' },
        { title: 'تعزيز الدورة الدموية الدقيقة للبصيلات', detail: 'التطبيق الموضعي يُحفّز تهيّجاً مضاداً خفيفاً وتوسع أوعية دموية عبر تنشيط قنوات TRP، مما يُعزّز الإمداد الدموي الوعائي الدقيق للحليمة الجلدية ويُحسّن توصيل المغذيات للبصيلات الفعّالة.' },
        { title: 'تعزيز مصفوفة الكيراتين', detail: 'الكبريت الحيوي والسيلينيوم يُوفّران اللبنات الأساسية لتقاطع رابطة ثنائي الكبريت داخل مصفوفة الكيراتين لعمود الشعر النامي، مما يُحسّن القوة الشدية ميكانيكياً ويُقلّل التكسر المبكر.' },
        { title: 'تأثير مناعي مُهيّج مضاد', detail: 'أدلة تجريبية وسريرية محدودة تُشير إلى أن هلام الثوم يعمل كعلاج مشترك موضعي مساعد في الثعلبة البقعية الموضعية من خلال خصائص مناعية مُهيّجة مضادة تُعدّل الاستجابات المناعية المحلية.' },
      ],
      uses: [
        'الإدارة المضادة للميكروبات الداعمة لالتهاب الجلد الدهني والتراكم الميكروبي المفرط في فروة الرأس',
        'علاج موضعي مساعد داعم في الثعلبة البقعية الموضعية المبكرة',
        'تقليل تكسر عمود الشعر الميكانيكي عبر تعزيز رابطة ثنائي الكبريت والدهون',
        'تنشيط الإمداد الدموي الأيضي داخل البيئة الجريبية لدعم حيوية الشعر العامة',
      ],
      howToUse: [
        { method: 'زيت الثوم المنقوع (قناع قبل الغسيل)', instruction: 'اسحق فصوص الثوم الطازجة لتنشيط إنزيم الأليينيز (انتظر 5-10 دقائق). أغمر الثوم المسحوق في زيت ناقل (زيت الزيتون أو جوز الهند) في وعاء زجاجي محكم. انقع 5-7 أيام في مكان بارد مظلم. صفّه بقطعة قماش معقمة. دلّك فروة الرأس 1-2 مرة أسبوعياً كعلاج قبل الغسيل ثم اشطف جيداً.' },
        { method: 'زيت الثوم التجاري (جاهز للاستخدام)', instruction: 'طبّق على مناطق فروة الرأس المحددة ودلّك بلطف. اترك حسب تعليمات المنتج. اشطف جيداً بعده. استخدم 1-2 مرة أسبوعياً.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'مؤشَّر تماماً للاستخدام الموضعي المنتظم عند تخفيفه الكافي في الزيوت الناقلة القياسية.' },
        { group: 'الأطفال', notes: 'مقيَّد بشدة. تجنّب المستخلصات المركّزة على فروة رأس الأطفال بسبب ارتفاع نفاذية الجلد والقابلية للحروق الكيميائية الدقيقة.' },
        { group: 'الحوامل', notes: 'آمن عموماً للاستخدام التجميلي التقليدي منخفض التكرار. تجنّب التطبيقات المركّزة أو المغلقة أو الواسعة النطاق بسبب الامتصاص الجهازي للمتطايرات.' },
      ],
      dosage: {
        standard: 'يُدلَّك على مناطق فروة الرأس المحددة 1-2 مرة أسبوعياً كعلاج قناع قبل الشامبو، يعقبه غسيل جيد.',
        forms: [
          { form: 'زيت الثوم المنقوع (موضعي)', dose: 'دلّك فروة الرأس 1-2 مرة أسبوعياً كعلاج قبل الغسيل. اشطف جيداً بعده. دائماً مخفّف في زيت ناقل؛ لا تستخدم غير مخفف أبداً.' },
          { form: 'زيت الثوم التجاري (موضعي)', dose: 'اتبع تعليمات المنتج؛ عادةً تطبيق 1-2 مرة أسبوعياً على فروة الرأس قبل الشامبو.' },
        ],
      },
      overdose: {
        symptoms: [
          'إحساس حرق موضعي شديد عند التلامس المطوّل أو غير المراقَب.',
          'التهاب جلدي تماسي حاد واحمرار موضعي شديد.',
          'حروق كيميائية جلدية مؤلمة عند التطبيق غير المخفف أو في ظل الانسداد أو على بشرة متضررة.',
        ],
        management: [
          'نظّف فروة الرأس فوراً وبشكل مكثّف بالماء البارد وشامبو خفيف غير معطّر متوازن الـ pH.',
          'أوقف جميع تطبيقات الثوم فوراً.',
          'طبّق مستحضرات إصلاح حاجز الجلد الموضعية كـ D-بانثينول أو هلام الصبّار المنقّى لتسريع إعادة التظهير.',
          'اطلب المشورة الطبية إذا ظهرت حروق أو التهاب جلدي شديد.',
        ],
      },
      sideEffects: [
        'رائحة كبريتية عضوية قوية ومستمرة في الجسم والشعر',
        'دفء جلدي خفيف مؤقت أو إحساس بالحرق أثناء المرحلة الأولى من التطبيق',
        'خطر الإصابة بالتهاب جلدي تماسي تحسسي متأخر عند الاستخدام المطوّل لدى الأفراد التوبيين',
      ],
      contraindications: [
        'حساسية معروفة من عائلة Amaryllidaceae: من يعانون من فرط حساسية سريري معروف أو حساسية تماسية من نباتات عائلة الأمريلليسية (مثل البصل والكراث والثوم المعمر) يجب تجنّب تطبيقات الثوم على فروة الرأس.',
        'فروة الرأس المكسورة أو المتضررة: موانع استخدام مطلقة ضد تطبيق مستخلصات الثوم الخام أو العصائر الطازجة أو معجون الثوم الخام على فروة الرأس المتقشرة أو الملتهبة أو المجروحة أو المصابة بالصدفية؛ خطر ألم حاد وإصابة كيميائية شديدة والتكوّن الكوبنري والعدوى الكيميائية الثانوية.',
      ],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'زيت الثوم المنزلي الطازج', instructions: 'يجب تبريده (2-8°C) واستهلاكه خلال 3-5 أيام تماماً للقضاء على تحلل الأليسين وتفادي مخاطر الميكروبات اللاهوائية.' },
          { form: 'زيوت الثوم التجارية', instructions: 'يُخزَّن في حاويات زجاجية داكنة محكمة الإغلاق بعيداً عن الرطوبة وتقلبات درجات الحرارة وأشعة الشمس المباشرة.' },
        ],
      },
      benefits: [
        { icon: 'shield', title: 'مضاد للميكروبات لفروة الرأس', desc: 'الأليسين والمركبات الكبريتية تُثبّط المالاسيزيا فورفور ومسببات الأمراض الأخرى، مُقلّلةً القشرة والتهاب الجلد الدهني.' },
        { icon: 'water_drop', title: 'تحسين الدورة الدموية للبصيلات', desc: 'تنشيط قنوات TRP يُحفّز توسعاً وعائياً خفيفاً، يُعزّز الإمداد الدموي الوعائي الدقيق وتوصيل المغذيات للبصيلات.' },
        { icon: 'science', title: 'تعزيز الكيراتين', desc: 'الكبريت الحيوي والسيلينيوم يُوفّران لبنات أساسية لتقاطع رابطة ثنائي الكبريت في مصفوفة الكيراتين، مما يُقلّل تكسر الشعر.' },
        { icon: 'spa', title: 'دعم الثعلبة البقعية', desc: 'الخصائص المناعية المُهيّجة المضادة توفر دعماً مساعداً في الثعلبة البقعية الموضعية المبكرة (أدلة سريرية من دراسة Sharquie et al.).' },
      ],
      botanicalFacts: {
        family: 'عائلة Amaryllidaceae (الفصيلة الفرعية: Allioideae)',
        nativeRegion: 'آسيا الوسطى (على الأرجح قيرغيزستان/طاجيكستان)؛ يُزرع في جميع أنحاء العالم منذ أكثر من 7000 عام',
        growthHabit: 'نبات بصلي معمر؛ البصلة مكوّنة من فصوص متعددة مُغلّفة بغلاف ورقي؛ أوراق مسطحة شريطية؛ رؤوس زهرية كروية بيضاء إلى وردية',
        activeCompounds: 'الأليين، الأليسين، الأجوين، ثنائي أليل ثنائي الكبريت (DADS)، ثنائي أليل ثلاثي الكبريت (DATS)، غليكوسيدات الكيرستين، السيلينيوم، الأحماض الأمينية الكبريتية',
        cultivationNotes: 'أحد أقدم النباتات الطبية المُزرَّعة. الأليسين (المركب الفعّال الرئيسي) يتولّد فقط عبر التفاعل الأنزيمي (الأليينيز) عند سحق الفصوص أو تقطيعها، وليس موجوداً في البصلة الكاملة.',
      },
      preparation: [
        { method: 'التقطير البخاري / الاستخلاص بالمذيبات (القياسي العلمي)', desc: 'يُوحّد تركيز ثنائيات الأليل الكبريتية الثابتة؛ العصر البارد يعزل كسور الأليسين المؤقتة في ظروف محكومة بدرجة الحرارة.', bestFor: 'إنتاج زيت الثوم التجاري بمحتوى موحّد من المركبات الفعّالة' },
        { method: 'زيت الثوم المنقوع المنزلي', desc: 'سحق الفصوص (انتظر 5-10 دقائق للتحويل الأنزيمي للأليين إلى أليسين) ثم نقعها في زيت ناقل (زيتون أو جوز هند) لمدة 5-7 أيام في مكان بارد مظلم ثم تصفيته.', bestFor: 'علاج موضعي لفروة الرأس قبل الغسيل، دعم التهاب الجلد الدهني، حيوية الشعر' },
      ],
    },

    psyllium: {
      name: 'سيلليوم / إسباغول',
      shortDescription: 'ألياف غذائية ذائبة تعمل كملين تجميعي؛ قشرة البذرة تمتص حتى 40 ضعف وزنها في الماء مكوّنةً هلاماً مخاطياً لزجاً يُليّن البراز ويُحفّز التمعج ويُعدّل الكوليسترول وملف الجلوكوز.',
      description: 'قشور سيلليوم (Plantago ovata) تحتوي على 10–30% من الهيتروسكاريدات المخاطية (أرابينوزيلانات) شديدة محبة الماء ومقاومة للهضم الأنزيمي في الجهاز الهضمي العلوي. عند وصولها للقولون، يُمارس المصفوفة الهلامية المتمددة شدًا ميكانيكياً على مستقبلات الميكانو في القولون، مُنشِّطاً منعكس الضفيرة العضلية الخارجية ومُحفِّزاً التمعج. التخمر البكتيري الجزئي يُولّد أحماضاً دهنية قصيرة السلسلة تُغذّي خلايا القولون. خلافاً للملينات المنبّهة، السيلليوم غير مُعتاد ويُصنَّف علاجاً أول لخطّ للإمساك المزمن ومتلازمة القولون العصبي.',
      symptoms: ['الإمساك', 'عدم انتظام حركة الأمعاء', 'أعراض القولون العصبي', 'ارتفاع الكوليسترول', 'ضبط سكر الدم'],
      warnings: [
        'تناوله دائماً مع كوب كامل (250 مل) من الماء؛ لا تتناوله جافاً أو مع سائل غير كافٍ.',
        'لا تتناوله مباشرةً قبل النوم؛ خطر انسداد المريء في وضع الاستلقاء.',
        'تناوله قبل الأدوية الأخرى بـ30–60 دقيقة على الأقل لمنع التداخل في امتصاص الدواء.',
        'موانع مطلقة في الانسداد البرازي وانسداد الأمعاء.',
        'الأطفال دون سن 6 سنوات: تحت الإشراف الطبي للأطفال فقط.',
      ],
      activeConstituents: [
        { name: 'المخاط (أرابينوزيلانات)', percentage: '10 إلى 30% من وزن القشرة', effect: 'هيتروسكاريدات عالية الوزن الجزيئي شديدة محبة الماء؛ تمتص حتى 40 ضعف وزنها ماءً مكوّنةً هلاماً لزجاً يقاوم الهضم الأنزيمي في الجهاز الهضمي' },
      ],
      moa: [
        { title: 'تكوّن الكتلة والشد الميكانيكي', detail: 'المخاط يمتص الماء الداخلي مكوّناً مصفوفة هلامية مرطّبة مستقرة، تُضخّم كتلة البراز وتُليّن قوامه. الكتلة المتمددة تُمارس شداً شعاعياً ميكانيكياً على مستقبلات الميكانو القولونية، مُنشِّطاً منعكس الضفيرة العضلية الخارجية ومُحفِّزاً التمعج الدافع.' },
        { title: 'التخمر البكتيري (أحماض دهنية قصيرة السلسلة)', detail: 'تخضع الأرابينوزيلانات للتخمر اللاهوائي الجزئي بواسطة الميكروبيوم القولوني، مُولّدةً أحماضاً دهنية قصيرة السلسلة (أسيتات، بروبيونات، بوتيرات) تُوفّر طاقة تغذوية لخلايا القولون وتُعدّل الحركية المعوية.' },
        { title: 'تعديل الكوليسترول والجلوكوز', detail: 'الهلام اللزج يحبس الكوليسترول الغذائي ويرتبط بالأحماض الصفراوية في تجويف الأمعاء، مُثبِّطاً إعادة امتصاصها الكبدي المعوي ومُنشِّطاً خلوص LDL الكبدي. عند تناوله مع الوجبات، يُبطئ إفراغ المعدة وامتصاص الكربوهيدرات، مُسطِّحاً ارتفاعات الجلوكوز بعد الأكل.' },
      ],
      uses: [
        'علاج خط أول للإمساك المزمن وتصحيح عادات الأمعاء (غير مُعتاد)',
        'تليين البراز لحالات المستقيم: البواسير، الشقوق الشرجية، التعافي بعد الجراحة',
        'متلازمة القولون العصبي (IBS-C والمتناوبة): تُطبّع قوام البراز وأوقات العبور',
        'خفض LDL الكوليسترول المساعد في فرط شحوم الدم',
        'دعم ضبط الجلوكوز في السكري من النوع الثاني عند تناوله مع الوجبات',
      ],
      howToUse: [
        { method: 'مسحوق / حبيبات في ماء', instruction: 'اخلط 5–10 غ (كيس واحد أو ملعقة كبيرة) في كوب كامل (250 مل) من الماء البارد أو العصير. اخلط بسرعة واشرب فوراً قبل حدوث التهلمة. اشرب كوباً إضافياً من الماء مباشرةً بعدها.' },
        { method: 'ملاحظة الوقت المهمة', instruction: 'يمكن تناوله في أي وقت من اليوم لكن لا تتناوله أبداً مباشرةً قبل النوم. تناوله بعد الأدوية الأخرى بـ30–60 دقيقة على الأقل.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والمراهقون (أكثر من 12 عاماً)', notes: '5–10 غ 1–3 مرات يومياً. الحد الأقصى: 30 غ/يوم. دائماً مع سائل كافٍ.' },
        { group: 'الأطفال (6–12 عاماً)', notes: '2.5–5 غ 1–2 مرات يومياً. مراقبة إلزامية للسوائل. ليس للعلاج الذاتي.' },
        { group: 'الأطفال (أقل من 6 سنوات)', notes: 'تحديد الجرعة من قِبل طبيب الأطفال. غير موصى به للعلاج الذاتي.' },
        { group: 'الحوامل والمرضعات', notes: 'الفئة B (آمن). العلاج الأول المفضّل للإمساك أثناء الحمل؛ آلية ميكانيكية داخل الأمعاء فقط، لا يُمتص جهازياً. آمن أثناء الرضاعة.' },
      ],
      dosage: {
        standard: 'البالغون: 5–10 غ (كيس أو ملعقة كبيرة) مخلوطة في 250 مل ماء، 1–3 مرات يومياً. الحد الأقصى: 30 غ/يوم. لا تتناوله دون سائل كافٍ.',
        forms: [
          { form: 'أكياس فوارة (مثلاً Fybogel)', dose: 'كيس واحد (3.5 غ إسباغول) محلول في 150 مل ماء، مرتين يومياً صباحاً ومساءً.' },
          { form: 'مسحوق قشرة خالص', dose: '5–10 غ لكل جرعة في 250 مل ماء، 1–3 مرات يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'انسداد معوي حاد، إمساك مطلق، تمدد بطني مؤلم، انتفاخ شديد من الجفاف الكافي',
          'انسداد المريء إذا ابتُلع مع سائل غير كافٍ (تمدد مبكر في المريء)',
          'نادراً: طفح جلدي، شرى، تشنج قصبي في الأفراد الحساسين',
        ],
        management: [
          'إماهة كثيفة فورية إذا كانت الممرات الهوائية آمنة والمريض قادر على البلع',
          'تدخل جراحي أو بمنظار لانسداد الجهاز الهضمي الهيكلي المتحقق',
          'لا تُعطِ ملينات منبّهة في الانسداد',
        ],
      },
      sideEffects: [
        'غازات مؤقتة وقرقرة معوية وانتفاخ عابر خلال أول 3–5 أيام (تعديل التخمر الميكروبي)',
        'خطر الانسداد الميكانيكي للمريء أو الأمعاء مرتبط فقط بضعف الإماهة',
        'تفاعلات فرط حساسية نادرة في الأفراد المعرضين',
      ],
      contraindications: [
        'عسر البلع: صعوبات في البلع موجودة مسبقاً، تضيّق المريء، أو تشوهات هيكلية في الجهاز الهضمي',
        'الانسداد البرازي: موانع مطلقة إذا كانت كتلة براز متصلبة موجودة',
        'انسداد الأمعاء: عيلس ميكانيكي أو تضيّق معروف أو مشتبه به',
        'الحالات العصبية أو الحركية الشديدة المقيّدة للحركة',
      ],
      drugInteractions: [
        'جميع الأدوية الفموية: هلام السيلليوم يحبس ويُقلّل امتصاص الليثيوم والكاربامازيبين والحديد والديجوكسين وغيرها. تناول السيلليوم بعد 30–60 دقيقة من أي دواء فموي آخر.',
      ],
      storage: {
        forms: [
          { form: 'المسحوق / الأكياس', instructions: 'مكان بارد جاف أقل من 25°C في حاويات محكمة الإغلاق. حماية مطلقة من الرطوبة؛ التعرض المبكر لبخار الماء يُطلق التمدد الداخلي ويُدمر الفاعلية العلاجية.' },
        ],
      },
      benefits: [
        { icon: 'favorite', title: 'علاج خط أول للإمساك', desc: 'ملين تجميعي غير مُعتاد معتمد من وكالة الأدوية الأوروبية ومنظمة الصحة العالمية؛ آمن للاستخدام طويل الأمد والحمل وإدارة القولون العصبي.' },
        { icon: 'bar_chart', title: 'إدارة الكوليسترول والجلوكوز', desc: 'الهلام اللزج يربط الأحماض الصفراوية والكوليسترول الغذائي خافضاً LDL. عند تناوله مع الوجبات، يُسطّح ارتفاعات الجلوكوز في السكري من النوع الثاني.' },
        { icon: 'water_drop', title: 'تليين البراز وتنظيم الأمعاء', desc: 'يمتص حتى 40 ضعف وزنه ماءً مُكوّناً هلاماً يُليّن البراز ويُخفّف الإجهاد في البواسير والشقوق الشرجية ومرضى ما بعد الجراحة.' },
        { icon: 'spa', title: 'منظّم أعراض القولون العصبي', desc: 'يُطبّع قوام البراز وأوقات العبور في كل من القولون العصبي المُمسك والمتناوب، مُقلِّلاً الإلحاح والتشنج والانزعاج.' },
      ],
      botanicalFacts: {
        family: 'عائلة Plantaginaceae',
        nativeRegion: 'أصيل جنوب آسيا والشرق الأوسط (الهند، باكستان، إيران). يُزرع تجارياً في الهند (راجستان) حيث تُنتَج ~85% من الإمدادات العالمية.',
        growthHabit: 'نبات حولي؛ البذور محاطة بقشرة سيلليوم ذات محتوى عالي من المخاط.',
        activeCompounds: 'المخاط (أرابينوزيلانات)، أحماض فينولية، فلافونويدات',
        cultivationNotes: 'مستخدم لقرون في الطب الآيورفيدي. أصدرت وكالة الأدوية الأوروبية ومنظمة الصحة العالمية تقارير عشبية رسمية تُرسّخ دوره السريري في الإمساك ومتلازمة القولون العصبي والصحة الأيضية.',
      },
      preparation: [
        { method: 'معلّق مائي', desc: 'اخلط 5–10 غ مسحوق في 250 مل من الماء البارد أو العصير، اخلط بسرعة وتناوله فوراً قبل التهلمة. دائماً اتبعه بكوب آخر كامل من السائل.', bestFor: 'الإمساك المزمن، القولون العصبي، تنظيم الأمعاء، تخفيف البواسير' },
        { method: 'أكياس فوارة', desc: 'أذِب الكيس في الماء (يُكوّن معلقاً فوّاراً لذيذاً). تناوله مرتين يومياً صباحاً ومساءً بعد الوجبات.', bestFor: 'امتثال وتقبّل أفضل مقارنةً بالمسحوق الخالص' },
      ],
    },

    castor: {
      name: 'الخروع',
      shortDescription: 'مُسهِّل قوي عالي الفاعلية؛ حمض الريسينوليك المُنشَّط بليباز البنكرياس يُناهض مستقبلات البروستانويد انتقائياً في الأمعاء الدقيقة، مُطلِقاً تمعجاً هائلاً وإخلاءً معوياً سريعاً في 2–6 ساعات.',
      description: 'زيت الخروع (زيت ثابت معصور بارد من بذور Ricinus communis) غير نشط دوائياً حتى يُحلَّل بليباز البنكرياس في الأمعاء الدقيقة، مُطلِقاً حمض الريسينوليك. هذا الحمض الدهني الهيدروكسيل الفريد يعمل كناهض انتقائي لمستقبلات البروستانويد SEP_3/SEP_4 على العضلة المعوية الملساء، مُحاكياً البروستاغلاندينات ومُطلِقاً انقباضات تمعجية قوية وسريعة. يُثبّط في الوقت ذاته Na+/K+-ATPase مُزيداً إفراز السوائل تجويف الأمعاء. خلافاً للسنا الذي يستهدف القولون، يُحفّز زيت الخروع الأمعاء الدقيقة أساساً.',
      symptoms: ['الإمساك', 'تنظيف الأمعاء قبل الإجراءات الطبية', 'عدم انتظام حركة الأمعاء'],
      warnings: [
        'موانع مطلقة في الحمل (الفئة X)؛ يُحفّز انقباضات الرحم مُسبِّباً الولادة المبكرة.',
        'لا تُستخدم مزمنياً للإمساك أو إنقاص الوزن؛ يُسبّب ضرراً لا يُعكس في أعصاب الأمعاء.',
        'موانع مطلقة للأطفال دون سنتين.',
        'اشرب 6–8 أكواب من الماء طوال اليوم بعد تناول زيت الخروع.',
        'فصل جميع الأدوية الفموية الأخرى بساعتين على الأقل.',
        'لا تُستخدم في انسداد الأمعاء أو أمراض الأمعاء الالتهابية النشطة أو التهاب الزائدة.',
      ],
      activeConstituents: [
        { name: 'حمض الريسينوليك', percentage: '85–90% من إجمالي محتوى الأحماض الدهنية', effect: 'المستقلب النشط المُطلَق بليباز البنكرياس؛ ناهض انتقائي لمستقبلات البروستانويد (SEP_3/SEP_4) مُطلِقاً تمعجاً معوياً دقيقاً مكثفاً وإفراز السوائل' },
      ],
      moa: [
        { title: 'التنشيط الأنزيمي (تأثير البروتوبروغ)', detail: 'زيت الخروع نفسه غير نشط دوائياً. ليباز البنكرياس في الأمعاء الدقيقة يُحلّل الدهون الثلاثية إلى جليسيرول وحمض الريسينوليك وهو المستقلب النشط.' },
        { title: 'مناهضة مستقبلات البروستانويد', detail: 'حمض الريسينوليك يرتبط انتقائياً بمستقبلات SEP_3 وSEP_4 البروستانويدية على الخلايا العضلية الملساء المعوية، مُحاكياً البروستاغلاندينات الطبيعية. يُطلق انقباضات عضلية فورية قوية في جميع أنحاء الأمعاء الدقيقة.' },
        { title: 'تحريض التمعج وإفراز السوائل', detail: 'يُسبّب انقباضات تمعجية هائلة وسريعة أساساً في الأمعاء الدقيقة. يُثبّط في الوقت ذاته Na+/K+-ATPase ويُحفّز إفراز السوائل في التجويف، مُبقياً البراز سائلاً لإخلاء سريع في 2–6 ساعات.' },
      ],
      uses: [
        'إخلاء معوي سريع قصير الأمد في الإمساك الحاد',
        'تنظيف الأمعاء قبل التنظير القولوني والأشعة والتنظير الشرجي والتدخلات الجراحية (تحت إشراف طبي)',
        'تحريض المخاض (تحت إشراف المستشفى الصارم فقط)',
      ],
      howToUse: [
        { method: 'الإعطاء الفموي', instruction: 'اخلط الجرعة الموصوفة (15–60 مل للبالغين) مع كوب كامل من عصير البرتقال أو الليمون أو التفاح البارد لإخفاء الملمس الزيتي اللزج. برّد الزيت قبل الإعطاء. اشرب 6–8 أكواب من الماء على مدار اليوم. البداية: 2–6 ساعات.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والمراهقون (أكثر من 12 عاماً)', notes: '15–60 مل جرعة فموية واحدة في عصير بارد. البداية: 2–6 ساعات. إماهة إلزامية طوال اليوم.' },
        { group: 'الأطفال (2–11 عاماً)', notes: '5–15 مل تحت الإشراف الطبي الصارم فقط.' },
        { group: 'الأطفال (أقل من سنتين)', notes: 'موانع مطلقة؛ خطر جفاف مهدد للحياة واختلال الشوارد.' },
        { group: 'الحوامل', notes: 'موانع مطلقة (الفئة X). حمض الريسينوليك يُحفّز العضلة الملساء الرحمية؛ خطر مرتفع من الولادة المبكرة ونزيف الرحم أو الإجهاض.' },
        { group: 'كبار السن (65 سنة فأكثر)', notes: 'يُثبَّط عموماً بسبب زيادة الحساسية للانخفاض الانتصابي من الجفاف السريع.' },
      ],
      dosage: {
        standard: 'البالغون: 15–60 مل جرعة فموية واحدة مخلوطة في عصير بارد. البداية: 2–6 ساعات. إماهة وفيرة إلزامية (6–8 أكواب/يوم).',
        forms: [
          { form: 'زيت الخروع (فموي)', dose: 'البالغون: 15–60 مل جرعة واحدة في عصير بارد. الأطفال 2–11 سنة: 5–15 مل تحت الإشراف الطبي. دائماً مبرداً ومخلوطاً في عصير حمضي بارد.' },
        ],
      },
      overdose: {
        symptoms: [
          'ضائقة هضمية شديدة: تقلصات بطنية عنيفة، قيء مستمر، إسهال مائي انفجاري',
          'جفاف سريع: جفاف الأغشية المخاطية، عطش شديد، قلة بول، انخفاض ضغط الدم',
          'أزمة شوارد: نقص بوتاسيوم وصوديوم الدم الشديد → ضعف عضلي، رعاش، ارتباك، اضطراب نظم القلب الخطير، صدمة نقص حجم الدم',
        ],
        management: [
          'توقف فوراً عن زيت الخروع',
          'أملاح معالجة الجفاف (ORS) إذا كان واعياً؛ سوائل وريدية عدوانية (محلول ملحي طبيعي أو رينجر) في القيء الشديد',
          'تكملة البوتاسيوم والصوديوم الوريدية/الفموية لاستقرار نظم القلب',
          'هيوسين بيوتيلبروميد (بوسكوبان) للتشنجات المعوية الشديدة',
        ],
      },
      sideEffects: [
        'تقلصات بطنية ومغص شديد من التحريض التمعجي القسري',
        'غثيان وقيء من الملمس الزيتي الثقيل والطعم الكريه',
        'جفاف سريع من الإسهال المائي الانفجاري',
        'استنزاف الشوارد: نقص بوتاسيوم وصوديوم الدم',
        'احتقان الحوض: يمكن أن يُشدّد تقلصات الدورة أو يُطلق نشاطاً رحمياً',
        'الاعتماد على الملينات من الإساءة المزمنة: ضرر دائم في الضفيرة العضلية الخارجية (متلازمة الأمعاء الكسولة)',
      ],
      contraindications: [
        'الحمل (الفئة X): يُحفّز انقباضات الرحم → خطر الولادة المبكرة',
        'انسداد الأمعاء: خطر انثقاب الأمعاء',
        'الأمراض الالتهابية المعوية: التهاب الزائدة، داء كرون، التهاب القولون التقرحي',
        'الحيض النشط: قد يُفاقم احتقان الحوض',
        'الأطفال دون سنتين: موانع مطلقة',
      ],
      drugInteractions: [
        'جميع الأدوية الفموية: يُقلّل التوافر الحيوي بشكل كبير بسبب تسريع العبور؛ افصل الأدوية الأخرى بساعتين على الأقل.',
        'مدرات البول (مثلاً فوروسيميد): يُضاعف خطر فقدان السوائل ونقص بوتاسيوم الدم الشديد.',
        'الغليكوسيدات القلبية (مثلاً ديجوكسين): نقص البوتاسيوم الناجم عن الخروع → سمية ديجوكسين الخطيرة واضطراب النظم القاتل المحتمل.',
        'الفيتامينات الذائبة في الدهون (A, D, E, K): الاستخدام المزمن يُعيق الامتصاص → نقص التغذية.',
      ],
      storage: {
        forms: [
          { form: 'زيت الخروع', instructions: 'حاويات محكمة الإغلاق مقاومة للضوء في مكان بارد أقل من 25°C. الحماية من أشعة الشمس المباشرة تمنع أكسدة حمض الريسينوليك وتزنّخه.' },
        ],
      },
      benefits: [
        { icon: 'bolt', title: 'إخلاء قوي وسريع', desc: 'إخلاء معوي خلال 2 إلى 6 ساعات عبر مناهضة مستقبلات البروستانويد في الأمعاء الدقيقة؛ أسرع بكثير من السنا أو السيلليوم.' },
        { icon: 'medical_services', title: 'معيار تحضير الأمعاء', desc: 'أداة راسخة لتنظيف الأمعاء قبل التنظير القولوني والأشعة والتدخلات الجراحية تحت الإشراف الطبي.' },
        { icon: 'science', title: 'آلية مزدوجة', desc: 'حمض الريسينوليك يُحفّز مستقبلات SEP_3/SEP_4 (حركية) ويُثبّط Na+/K+-ATPase (إفراز السوائل) معاً لإخلاء كامل وسريع.' },
        { icon: 'warning', title: 'للاستخدام قصير الأمد فقط', desc: 'الاستخدام المزمن يُسبّب ضرراً دائماً في الضفيرة العضلية الخارجية (متلازمة الأمعاء الكسولة). للاستخدام الحاد قصير الأمد فقط تحت التوجيه الطبي.' },
      ],
      botanicalFacts: {
        family: 'عائلة Euphorbiaceae',
        nativeRegion: 'أصيل أفريقيا الاستوائية الشرقية (إثيوبيا). يُزرع على نطاق واسع في المناطق الاستوائية وشبه الاستوائية؛ المنتجون الرئيسيون: الهند والصين والبرازيل.',
        growthHabit: 'شجيرة كبيرة تصل لـ12 متراً؛ بذور كبيرة مرقطة تحتوي على الريسين (بروتين سام جداً غائب عن الزيت المصنَّع).',
        activeCompounds: 'حمض الريسينوليك (85–90% من محتوى الأحماض الدهنية)، ريسينين، حمض الإيكوزاديينويك',
        cultivationNotes: 'موثّق في بردية إيبرس المصرية القديمة (~1550 ق.م). مُستخدم طبياً منذ أكثر من 4000 عام. اليوم أيضاً سواغ دوائي رئيسي كـCremophor EL (مذيب باكليتاكسيل الوريدي في علاج السرطان).',
      },
      preparation: [
        { method: 'زيت معصور بارد (فموي)', desc: 'برّد الزيت قبل الإعطاء. اخلط 15–60 مل في عصير حمضي بارد وتناوله جرعة واحدة. إماهة وفيرة إلزامية (6–8 أكواب/يوم) طوال اليوم.', bestFor: 'الإمساك الحاد؛ إخلاء معوي سريع قصير الأمد؛ تحضير الأمعاء قبل الإجراءات' },
      ],
    },

    peppermint: {
      name: 'النعناع الفلفلي',
      shortDescription: 'علاج نباتي مضاد للتشنج سريرياً لمتلازمة القولون العصبي والاضطرابات المعوية الوظيفية؛ المنثول يعمل كحاصر طبيعي لقنوات الكالسيوم من النوع L، مُحلاً فرط نشاط العضلة الملساء الهضمية والألم الحشوي.',
      description: 'النعناع الفلفلي (Mentha × piperita) هجين عقيم يجمع المنثول (30–55%) كعامل مضاد للتشنج الرئيسي من خلال حصر قنوات Ca²⁺ من النوع L، إضافةً لتنشيط مستقبلات TRPM8 البرودية للتسكين الحشوي. حمض الروزمارينيك والفلافونويدات (لوتيولين، أبيجينين) توفر دعماً مضاداً للالتهاب وحماية للمعدة. الكبسولات المعوية تُوصّل المنثول النشط مباشرةً للأمعاء متجاوزةً المعدة لتجنب استرخاء العضلة العاصرة للمريء السفلية والجزر المعدي المريئي.',
      symptoms: ['الإسهال', 'أعراض القولون العصبي', 'تقلصات البطن', 'الغازات', 'الغثيان', 'الانتفاخ'],
      warnings: [
        'لا تُكسر أو تُمضغ الكبسولات المعوية؛ تُطلق المنثول في المعدة مُسبِّبةً حرقة شديدة.',
        'لا تُستخدم إذا كنت تعاني من الجزر المعدي المريئي الشديد أو الفتق الحجابي أو مشاكل المرارة/حصى المرارة.',
        'الزيت الخالص موانع مطلقة للرضع والأطفال دون 4 سنوات.',
        'افصل بين مضادات الحموضة ومثبطات المضخة البروتونية بساعتين على الأقل.',
      ],
      activeConstituents: [
        { name: 'المنثول (30–55%)', percentage: '30–55% من الزيت العطري', effect: 'حاصر لقنوات Ca²⁺ من النوع L في العضلة الملساء المعوية (مضاد تشنج)؛ ناهض لمستقبلات TRPM8 البرودية (تسكين حشوي)؛ المادة الفعّالة الرئيسية' },
        { name: 'المنثون (14–32%)', percentage: '14–32%', effect: 'كيتون سليفة يتعاون مع المنثول في التأثير المضاد للتشنج' },
        { name: 'المنثوفوران (1 إلى 9%)', percentage: '1 إلى 9%', effect: 'مكوّن ثانوي؛ محتمل الكبدية عند التركيزات العالية؛ يجب مراقبته' },
        { name: 'حمض الروزمارينيك والفلافونويدات (لوتيولين، أبيجينين، إريوسيتريين)', percentage: '', effect: 'مضادة للالتهاب وحماية معدية وفعل مضاد للأكسدة جهازي' },
      ],
      moa: [
        { title: 'مناهضة قنوات الكالسيوم (مضاد للتشنج)', detail: 'المنثول يعمل كحاصر طبيعي لقنوات الكالسيوم ذات الجهد الكهربي من النوع L في العضلة الملساء المعوية. يُثبّط تدفق Ca²⁺ الخارجي للخلايا العضلية الملساء مانعاً انقباضاتها المستدامة، مُحلاً تشنجات الجهاز الهضمي وفرط الحركة والحركات المعوية المفرطة.' },
        { title: 'تنشيط مستقبلات TRPM8 (التسكين الحشوي)', detail: 'المنثول يُنشّط انتقائياً مستقبلات TRPM8 البرودية في ألياف الأعصاب الواردة الهضمية، مُطلِقاً إحساساً محلياً بالبرودة والتخدير، مُحدِثاً تسكيناً خفيفاً للجدران الحشوية شديدة الحساسية.' },
        { title: 'التأثير الطارد للغاز وتقليل التوتر السطحي', detail: 'يُرخي العضلة العاصرة للمريء السفلية مُيسِّراً طرد الغاز المحبوس، مُخفِّفاً سريعاً الغازات والانتفاخ المؤلم وتوتر شرسوفي.' },
        { title: 'مضاد للميكروبات ومضاد للالتهاب', detail: 'فعالية قاصرة للجراثيم المباشرة ضد مسببات الأمراض الهضمية القياسية؛ يُثبّط شلالات الإيكوزانويد الالتهابية الموضعية بقمع إنتاج الليكوترين والبروستاغلاندين.' },
      ],
      uses: [
        'تخفيف أعراض متلازمة القولون العصبي: الإسهال والعادات المعوية المتناوبة وفرط الحساسية الحشوية',
        'إدارة تشنجات الجهاز الهضمي والتوتر البطني والغازات وعسر الهضم الوظيفي',
        'تخفيف مساعد للغثيان والدوار الخفيف/الحركي',
      ],
      howToUse: [
        { method: 'كبسولات زيت معوية', instruction: 'تناول 0.2 إلى 0.4 مل (180 إلى 360 مغ) 3 مرات يومياً قبل 30 إلى 60 دقيقة من الوجبات. يجب أن تكون معوية؛ ابتلعها كاملةً، لا تكسرها ولا تمضغها.' },
        { method: 'شاي النعناع (منقوع مائي)', instruction: 'انقع 1.5–3 غ أوراق مجففة في 150 مل ماء مغلي في إناء مُغطّى لمدة 5–10 دقائق (التغطية تحفظ المنثول العطري). اشرب دافئاً 2–3 مرات يومياً.' },
        { method: 'مستخلص سائل (1:1 في 45% إيثانول)', instruction: '1–3 مل 3 مرات يومياً.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن جداً ومتحمَّل جيداً بالجرعات العلاجية.' },
        { group: 'الأطفال (أقل من 4 سنوات)', notes: 'الزيت الخالص موانع مطلقة؛ المنثول بالقرب من الغشاء المخاطي للأنف قد يُطلق تشنجات حنجرية/قصبية مميتة وسكتة تنفسية.' },
        { group: 'الأطفال (أكثر من 4 سنوات)', notes: 'المنقوعات المائية الخفيفة (الشاي) آمنة عموماً. تجنب منتجات الزيت المركّزة.' },
        { group: 'الحوامل والمرضعات', notes: 'استخدام الشاي الغذائي يُعتبر آمناً. الجرعات العالية من الزيوت الأساسية المركّزة تُجتنب بسبب التأثيرات المحتملة المُنبّهة للطمث.' },
        { group: 'كبار السن', notes: 'آمن مع تقييم سريري دقيق بسبب ارتفاع معدل الفتق الحجابي أو الجزر المعدي المريئي.' },
      ],
      dosage: {
        standard: 'كبسولات معوية: 0.2–0.4 مل (180–360 مغ) 3 مرات يومياً قبل 30–60 دقيقة من الوجبات. شاي: 1.5–3 غ أوراق مجففة منقوعة 5–10 دقائق (مغطّى)، 2–3 مرات يومياً.',
        forms: [
          { form: 'كبسولات معوية', dose: '0.2 إلى 0.4 مل (180 إلى 360 مغ) 3 مرات يومياً قبل 30 إلى 60 دقيقة من الوجبات. ابتلع كاملةً.' },
          { form: 'شاي النعناع', dose: '1.5–3 غ أوراق مجففة في 150 مل ماء مغلي (مغطّى)، منقوع 5–10 دقائق. 2–3 مرات يومياً.' },
          { form: 'مستخلص سائل', dose: '1–3 مل في 45% إيثانول، 3 مرات يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'تآكل هضمي شديد وبيلة دموية وطفح جلدي من الزيت الخالص غير المعوي عالي الجرعة',
          'اكتئاب الجهاز العصبي المركزي: دوخة، ارتباك، رنح، بطء القلب، اكتئاب تنفسي',
          'تسمم شديد للغاية: نوبات شبيهة بالصرع',
        ],
        management: [
          'التوقف الفوري. علاج داعم وأعراضي عدواني.',
          'الحفاظ على المجرى الهوائي والديناميكا الدموية.',
          'مراقبة الملف الكلوي والكبدي إذا كان الامتصاص الجهازي مكثفاً.',
        ],
      },
      sideEffects: [
        'حرقة الفؤاد وتفاقم الجزر المعدي المريئي من استرخاء العضلة العاصرة السفلية (استخدم الكبسولات المعوية لتقليله)',
        'إحساس بالحرق حول الشرج من المنثول المتبقي في البراز',
        'تفاعلات تحسسية نادرة في الأفراد الحساسين للمنثول',
      ],
      contraindications: [
        'فرط حساسية معروف للنعناع الفلفلي أو المنثول',
        'الجزر المعدي المريئي الشديد والفتق الحجابي: زيت النعناع يُرخي العضلة العاصرة السفلية مُفاقِماً الحموضة بشكل ملحوظ',
        'انسداد المسالك الصفراوية والتهاب المرارة: نشاط صفراوي/مُفرِز للصفراء قوي يُطلق المغص الصفراوي في مرضى الحصى الصفراوية',
        'قصور كبدي شديد: الحمل الأيضي للموناتيربين',
        'الرضع والأطفال دون 4 سنوات: الزيت الخالص موانع مطلقة',
      ],
      drugInteractions: [
        'مضادات الحموضة وحاصرات H2 ومثبطات المضخة البروتونية (مثلاً أوميبرازول): ترفع pH المعدة → تذويب مبكر للغلاف المعوي → حرقة شديدة. افصل بساعتين على الأقل.',
        'ركائز CYP3A4 (مثلاً سيكلوسبورين، فيلوديبين): تثبيط معتدل لـCYP3A4 قد يرفع تركيزات الأدوية ذات النطاق العلاجي الضيق.',
        'مثبطات الجهاز العصبي المركزي: تهدئة إضافية مع مستحضرات المنثول عالية الجرعة.',
      ],
      storage: {
        forms: [
          { form: 'الأوراق المجففة', instructions: 'حاويات محكمة الإغلاق مقاومة للرطوبة والضوء أقل من 25°C.' },
          { form: 'الكبسولات المعوية', instructions: 'العبوة الأصلية أقل من 25°C، بعيداً عن الرطوبة والحرارة.' },
          { form: 'منتجات الزيت العطري', instructions: 'مختوم بإحكام لمنع التبخر والأكسدة التركيبية.' },
        ],
      },
      benefits: [
        { icon: 'spa', title: 'المعيار الذهبي للقولون العصبي', desc: 'تُؤكد تحليلات متعددة أن كبسولات زيت النعناع تُقلّل بشكل ملحوظ درجات ألم القولون العصبي وتكرار البراز والإلحاح.' },
        { icon: 'air', title: 'مُرخٍ طبيعي للعضلة الملساء الهضمية', desc: 'حصر المنثول لقنوات Ca²⁺ من النوع L يحلّ التشنجات المعوية المؤلمة وفرط الحركة دون تكوين عادة.' },
        { icon: 'thermostat', title: 'تسكين حشوي عبر TRPM8', detail: 'تنشيط مستقبلات TRPM8 البرودية في أعصاب الجهاز الهضمي الواردة يُحدث تسكيناً بالتبريد مُخدِّراً الجدران الحشوية شديدة الحساسية.' },
        { icon: 'bubble_chart', title: 'تخفيف سريع للغاز', desc: 'التأثير الطارد للغاز يُخفّف الغازات والانتفاخ المؤلم والتوتر الشرسوفي بسرعة.' },
      ],
      botanicalFacts: {
        family: 'عائلة Lamiaceae',
        nativeRegion: 'هجين عقيم (Mentha aquatica × Mentha spicata) يُكثَّر فقط بالعقل الخضرية. الزراعة التجارية في الولايات المتحدة والهند وأوروبا.',
        growthHabit: 'نبات معمر عطري؛ سيقان رباعية الزوايا؛ أوراق بيضاوية ذات حواف مسننة؛ أزهار بنفسجية خفيفة.',
        activeCompounds: 'المنثول، المنثون، أسيتات المنثيل، المنثوفوران، أينيول (يوكاليبتول)، حمض الروزمارينيك، لوتيولين، أبيجينين',
        cultivationNotes: 'يُزرع طبياً منذ القرن الثامن عشر على الأقل. أصدرت وكالة الأدوية الأوروبية ومنظمة الصحة العالمية وESCOP تقارير تُؤكد دوره في القولون العصبي وتشنجات الجهاز الهضمي وعسر الهضم الوظيفي.',
      },
      preparation: [
        { method: 'كبسولة معوية', desc: 'كبسولة دوائية مُقيسة على محتوى الزيت. تُوصّل المنثول للأمعاء الدقيقة والقولون متجاوزةً المعدة.', bestFor: 'القولون العصبي؛ تشنجات الجهاز الهضمي؛ الإسهال الوظيفي' },
        { method: 'منقوع مائي (شاي)', desc: 'انقع 1.5–3 غ أوراق مجففة في 150 مل ماء مغلي في إناء مُغطّى لمدة 5–10 دقائق. التغطية ضرورية للحفاظ على المنثول العطري.', bestFor: 'انزعاج هضمي خفيف، غثيان، غازات، انتفاخ' },
      ],
    },

    chamomile: {
      name: 'البابونج',
      shortDescription: 'نبات متعدد الإجراءات اللطيف للاضطرابات الهضمية الالتهابية والتشنجية؛ الكاموزولين والأبيجينين يُثبّطان بشكل تآزري مسارات COX/5-LOX ويعملان على مستقبلات GABA-A، مُنتِجَين آثاراً مضادة للتشنج ومضادة للالتهاب وتهدئة خفيفة.',
      description: 'بابونج ألماني (Matricaria chamomilla) يحتوي على الكاموزولين وα-بيسابولول (زيت عطري) إلى جانب أبيجينين-7-غلوكوزيد (فلافونويد محب للماء) وهيرنياريين/أمبيليفيرون (كومارينات). الكاموزولين والبيسابولول مثبطان قويان لـCOX/5-LOX يُقلّلان البروستاغلاندينات والليكوترينات الالتهابية. الأبيجينين يرتبط بمستقبلات GABA-A البنزوديازيبينية مُوفِّراً تهدئة خفيفة ويُقلّل الضائقة الهضمية النفسية الجسدية.',
      symptoms: ['الإسهال', 'أعراض القولون العصبي', 'تقلصات البطن', 'الغازات', 'الانتفاخ', 'التهاب المعدة', 'الأرق الخفيف'],
      warnings: [
        'إذا كنت حساساً للبنج البري أو الأقحوان أو زهور الربيع أو القطيفة فلا تستخدم البابونج (خطر التفاعل التقاطعي والصدمة التحسسية).',
        'الجرعات العالية من المستخلصات المركّزة تُجتنب في الحمل.',
        'افصل عن مضادات التخثر وراقب خطر النزيف إذا استُخدم مع أدوية مُرققة للدم.',
        'الرضع دون 6 أشهر: تحت الإشراف الطبي الصارم فقط.',
      ],
      activeConstituents: [
        { name: 'الكاموزولين', percentage: 'يتكوّن من الماتريسين أثناء التقطير', effect: 'مُثبِّط COX و5-LOX؛ مضاد التهاب قوي؛ اللون الأزرق المميز لزيت البابونج المقطّر' },
        { name: 'α-البيسابولول وأكاسيده', percentage: '', effect: 'مضاد للتشنج ومضاد للالتهاب ومضاد للميكروبات؛ يُعزّز شفاء الغشاء المخاطي والتقرحات' },
        { name: 'أبيجينين-7-غلوكوزيد (فلافون)', percentage: 'الفلافونويد المحب للماء المهيمن', effect: 'رابط تنافسي لمستقبلات GABA-A البنزوديازيبينية؛ تهدئة خفيفة ومزيل للقلق؛ مُيسِّر للتشنج عبر حصر قنوات Ca²⁺ وتثبيط PDE' },
        { name: 'كومارينات (أمبيليفيرون، هيرنياريين)', percentage: '', effect: 'استرخاء إضافي للعضلة الملساء؛ يُراقَب في مرضى مضادات التخثر' },
      ],
      moa: [
        { title: 'تثبيط COX/5-LOX (مضاد للالتهاب)', detail: 'الكاموزولين وα-البيسابولول يُثبّطان مباشرةً مسارات COX و5-LOX، مُقلِّلَين بشكل ملحوظ تخليق البروستاغلاندينات والليكوترينات الالتهابية، مُخفِّفَين تهيّج الغشاء المخاطي المعوي والوذمة.' },
        { title: 'مضاد للتشنج عبر Ca²⁺ وتثبيط PDE', detail: 'الأبيجينين والبيسابولول يحصران بشكل تآزري قنوات الكالسيوم ذات الجهد الكهربي ويُثبّطان فسفودييستيرازات النيوكليوتيد الحلقية داخل الخلية، مُحلَّين فاعلياً فرط نشاط العضلة الملساء والتقلصات البطنية والانتفاخ.' },
        { title: 'تنشيط مستقبلات GABA-A (المهدئ/المزيل للقلق)', detail: 'الأبيجينين يعمل كرابط تنافسي لمستقبلات GABA-A البنزوديازيبينية المركزية، مُحدِثاً تهدئة خفيفة ومُقلِّلاً الضائقة الهضمية النفسية الجسدية في اضطرابات الأمعاء المحرَّضة بالتوتر.' },
        { title: 'تلطيف الغشاء المخاطي ومضاد للميكروبات', detail: 'فعل قاصر للجراثيم ضد مسببات الأمراض الهضمية الشائعة؛ تأثير ملطّف موضعي على الغشاء المخاطي المعدي والمعوي، مُسرِّعاً شفاء التقرحات.' },
      ],
      uses: [
        'تخفيف أعراض الإسهال الخفيف والتهاب المعدة وعسر الهضم والغازات والانتفاخ',
        'إدارة تشنجات العضلة الملساء الهضمية والتقلصات البطنية المؤلمة',
        'العلاج الداعم للضائقة الهضمية النفسية الجسدية والأرق الخفيف والقلق',
      ],
      howToUse: [
        { method: 'شاي البابونج (منقوع مائي)', instruction: 'انقع 2–3 غ من رؤوس الأزهار المجففة في 150–250 مل ماء مغلي في إناء مُغطّى لمدة 5–10 دقائق (التغطية تمنع فقدان الزيوت العطرية، لا سيما الكاموزولين). تناول 3–4 مرات يومياً بين الوجبات.' },
        { method: 'كبسولات / مستخلصات موحّدة', instruction: '200–500 مغ 2–3 مرات يومياً، موحّدة على محتوى الأبيجينين أو الزيت العطري.' },
        { method: 'مستخلص سائل (1:1 في 45% إيثانول)', instruction: '1–4 مل مخففة في ماء دافئ، 3 مرات يومياً.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن عموماً ومتحمَّل بشكل ممتاز وفق الإرشادات العلاجية.' },
        { group: 'الرضع (أقل من 6 أشهر)', notes: 'تحت الإشراف الطبي الصارم فقط.' },
        { group: 'الأطفال', notes: 'المنقوعات المائية الخفيفة المخففة جيداً آمنة للمغص الرضيعي والانزعاج الهضمي الخفيف تحت الإشراف الطبي.' },
        { group: 'الحوامل والمرضعات', notes: 'الجرعات الغذائية القياسية كشاي آمنة عموماً. الجرعات العلاجية العالية أو المستخلصات المركّزة تُجتنب بسبب مخاطر التحفيز الرحمي النظرية.' },
        { group: 'كبار السن', notes: 'آمن بالجرعات القياسية مع مراقبة دقيقة في المرضى متعددي الأمراض.' },
      ],
      dosage: {
        standard: 'شاي: 2–3 غ أزهار مجففة منقوعة 5–10 دقائق (مغطّى) في 150–250 مل ماء، 3–4 مرات يومياً بين الوجبات. كبسولات: 200–500 مغ موحّدة 2–3 مرات يومياً.',
        forms: [
          { form: 'شاي البابونج', dose: '2–3 غ أزهار مجففة منقوعة 5–10 دقائق (مغطّى) في 150–250 مل ماء. 3–4 مرات يومياً بين الوجبات.' },
          { form: 'كبسولات موحّدة', dose: '200–500 مغ 2–3 مرات يومياً، موحّدة على محتوى الأبيجينين.' },
          { form: 'مستخلص سائل', dose: '1–4 مل في 45% إيثانول، 3 مرات يومياً، مخفف في ماء دافئ.' },
        ],
      },
      overdose: {
        symptoms: [
          'غثيان وقيء ودوخة شديدة من المستخلصات المركّزة',
          'نعاس مفرط واسترخاء عصبي عضلي معمّم من تقوية مسارات GABA',
        ],
        management: [
          'التوقف فوراً. الحفاظ على الإماهة الكافية.',
          'علاج أعراضي وداعم إذا استمرت الأعراض الشديدة.',
        ],
      },
      sideEffects: [
        'تفاعلات تحسسية نادرة في الأفراد الحساسين للنباتات من عائلة Asteraceae (تقاطع مع البنج البري والأقحوان والكريزانثيم)',
        'نعاس خفيف بالجرعات العالية من التأثير GABA',
      ],
      contraindications: [
        'فرط حساسية معروف للبابونج الألماني أو أي نبات من عائلة Asteraceae/Compositae (البنج البري، القطيفة، الكريزانثيم)؛ خطر الصدمة التحسسية',
        'الربو التأتبي الشديد: تجنب الاستنشاق أو الاستهلاك عالي الجرعة دون موافقة طبية',
      ],
      drugInteractions: [
        'مضادات التخثر (وارفارين، أسبيرين، كلوبيدوجريل): محتوى الكومارين + النشاط المضاد للصفيحات قد يُقوّي خطر النزيف. راقب PT/INR.',
        'مثبطات الجهاز العصبي المركزي (بنزوديازيبينات، كحول، مواد أفيونية): تهدئة إضافية من ارتباط الأبيجينين بـGABA.',
        'ركائز CYP3A4: تثبيط CYP3A4 في المختبر؛ توخّ الحذر مع الأدوية ذات النطاق العلاجي الضيق.',
      ],
      storage: {
        forms: [
          { form: 'رؤوس الأزهار المجففة / المستحضرات الموحّدة', instructions: 'حاويات محكمة الإغلاق مقاومة للضوء أقل من 25°C. منع امتصاص الرطوبة وتطاير الزيت العطري وتحلّل الكاموزولين الضوئي.' },
        ],
      },
      benefits: [
        { icon: 'spa', title: 'مضاد التهاب هضمي لطيف', desc: 'الكاموزولين والبيسابولول يُثبّطان مسارات COX و5-LOX معاً، مُقلِّلَين الالتهاب المخاطي في التهاب المعدة والقولون العصبي والإسهال الخفيف.' },
        { icon: 'self_improvement', title: 'مُزيل للقلق عبر GABA-A لمحور الأمعاء والدماغ', desc: 'ارتباط الأبيجينين بمستقبلات GABA-A يهدّئ الضائقة الهضمية النفسية الجسدية والقلق، مُعالِجاً العلاقة بين الأمعاء والدماغ في الاضطرابات المعوية المحرَّضة بالتوتر.' },
        { icon: 'healing', title: 'شفاء الغشاء المخاطي وتلطيفه', desc: 'α-البيسابولول يُهدّئ ويُسرّع شفاء تقرحات المعدة والأمعاء، مُحمِّياً بطانة الغشاء المخاطي أثناء الالتهاب الهضمي الحاد.' },
        { icon: 'local_florist', title: 'تخفيف مغص الرضع', desc: 'للمنقوعات الخفيفة من البابونج أدلة سريرية على تقليل أعراض مغص الرضع بأمان من خلال إرخاء العضلة الملساء في الجهاز الهضمي.' },
      ],
      botanicalFacts: {
        family: 'عائلة Asteraceae (Compositae)',
        nativeRegion: 'أصيل أوروبا وآسيا المعتدلة. مُطبَّع على نطاق واسع في أمريكا الشمالية. الزراعة التجارية الكبرى في ألمانيا والمجر ومصر والأرجنتين.',
        growthHabit: 'نبات حولي أو ثنائي الحول؛ رؤوس زهرية بيضاء مع قرص أصفر مرتفع؛ الكاموزولين الأزرق يتكوّن فقط أثناء التقطير البخاري من الماتريسين.',
        activeCompounds: 'الكاموزولين، α-البيسابولول، أكاسيد البيسابولول، أبيجينين-7-غلوكوزيد، لوتيولين، كويرسيتين، أمبيليفيرون، هيرنياريين',
        cultivationNotes: 'استُخدم من قِبل المصريين القدماء (مُكرَّس للإله رع) واليونانيين والرومانيين للشكاوى الهضمية. أحد أكثر الشاي العشبي استهلاكاً عالمياً. أصدرت وكالة الأدوية الأوروبية ومنظمة الصحة العالمية وESCOP تقارير سريرية.',
      },
      preparation: [
        { method: 'منقوع مائي (شاي)', desc: 'انقع 2–3 غ رؤوس أزهار مجففة في 150–250 مل ماء مغلي في إناء مُغطّى لمدة 5–10 دقائق. التغطية ضرورية لمنع فقدان الكاموزولين العطري.', bestFor: 'الإسهال الخفيف، تشنجات الجهاز الهضمي، التهاب المعدة، الغازات، مغص الرضع، الأرق الخفيف' },
        { method: 'كبسولة مستخلص موحّدة', desc: 'كبسولات دوائية موحّدة على محتوى الأبيجينين لنتائج علاجية متسقة.', bestFor: 'القولون العصبي والضائقة الهضمية المرتبطة بالقلق والجرعة الدقيقة' },
      ],
    },

    senna: {
      name: 'السنا',
      shortDescription: 'ملين منبّه معتمد سريرياً يعمل عبر تنشيط بروتوبروغ بكتيري في القولون، منتجاً إخلاء معوياً قصير الأمد موثوقاً من خلال آليتَي تحريك الحركة وإفراز المواد.',
      description: 'يحتوي السنا (Senna alexandrina) على السنوسيدات A وB، وهي غليكوسيدات ثنائي الأنثرون التي تمر غير ممتصة عبر الجهاز الهضمي العلوي. عند وصولها للقولون، تُفرز البكتيريا ريانثرون النشط الذي يُحفّز التمعج القولوني ويُعدّل نقل الشوارد عبر تثبيط Na+/K+-ATPase وفتح قنوات الكلوريد، منتجاً براز طريًا كثيفاً. مخصص للاستخدام قصير الأمد فقط؛ الإساءة المزمنة تؤدي إلى القولون التحرّكي وفقدان الشوارد والاعتمادية.',
      symptoms: ['الإمساك', 'عدم انتظام حركة الأمعاء', 'تنظيف الأمعاء قبل الإجراءات الطبية'],
      warnings: [
        'للاستخدام قصير الأمد فقط (أسبوع إلى أسبوعين بحد أقصى). الاستخدام المزمن يُفضي إلى الاعتمادية وضمور القولون.',
        'لا تُستخدم لإنقاص الوزن؛ أي وزن يُفقَد هو وزن ماء فقط وهذا خطير.',
        'موانع الاستخدام المطلقة للأطفال دون سنتين.',
        'موانع الاستخدام في الحمل (خاصة الثلث الأول) بسبب المخاطر الجينية المحتملة للأنثراكينونات.',
        'لا تُستخدم في انسداد الأمعاء أو الألم البطني الحاد أو أمراض الأمعاء الالتهابية.',
        'خطر نقص بوتاسيوم الدم الخطير مع الإفراط في الاستخدام.',
      ],
      activeConstituents: [
        { name: 'السنوسيدات A وB (غليكوسيدات ثنائي الأنثرون)', percentage: '~80% من الفاعلية الكلية', effect: 'المواد المنشّطة الملينة الرئيسية؛ يتحلل الميكروبيوم القولوني إلى ريانثرون النشط الذي يُحفّز التمعج ويُعدّل إفراز الشوارد' },
        { name: 'السنوسيدات C وD', percentage: '~20% من الفاعلية الكلية', effect: 'غليكوسيدات أنثراكينونية ثانوية تُسهم في التأثير الملين الكلي' },
        { name: 'غليكوسيدات الأنثراكينون (ثنائي الأنثرون 75-80%، الأنثرونات 20-25%)', percentage: '', effect: 'مجتمعةً مسؤولة عن خاصية الملين المنبّه عبر تنشيط البروتوبروغ البكتيري في القولون' },
      ],
      moa: [
        { title: 'تنشيط البروتوبروغ بواسطة الميكروبيوم المعوي', detail: 'السنوسيدات بروتوبروغات محبة للماء تعبر الأمعاء الدقيقة دون امتصاص. عند وصولها للقولون، تُحلّل بيتا-غليكوسيداز البكتيرية إلى ريانثرون النشط الذي يمارس تأثيراته الملينة موضعياً.' },
        { title: 'تهيّج الأمعاء وتعزيز الحركة', detail: 'ريانثرون يُحفّز الغشاء المخاطي القولوني مُسبّباً تهيّجاً موضعياً يُعزّز التمعج الدافع ويُقصّر وقت العبور القولوني، مما يدفع لإخلاء الأمعاء.' },
        { title: 'تعديل الشوارد والسوائل', detail: 'ريانثرون يثبّط Na+/K+-ATPase ويفتح قنوات الكلوريد في الغشاء المخاطي القولوني، مُثبّطاً امتصاص الماء ومُعزّزاً إفراز الماء والشوارد إلى تجويف الأمعاء، منتجاً براز طري كثيف.' },
      ],
      uses: [
        'تخفيف أعراض الإمساك العرضي أو الحاد قصير الأمد',
        'تنظيف الأمعاء قبل التنظير القولوني أو الأشعة أو التدخلات الجراحية (تحت إشراف طبي)',
      ],
      howToUse: [
        { method: 'شاي السنا (منقوع مائي)', instruction: 'انقع 1-2 غ من أوراق السنا المجففة في 150 مل من الماء المغلي في إناء مُغطّى لمدة 10-15 دقيقة. لا تغلي الأوراق مباشرةً. صفّ وأضف الزنجبيل أو النعناع اختيارياً كمُقطّع. يُحسن تناوله ليلاً قبل النوم. البداية: 6-12 ساعة.' },
        { method: 'أقراص / حبيبات موحّدة', instruction: 'تناول حسب تعليمات المنتج (عادةً 15-30 ملغ سنوسيد مرة يومياً عند النوم للبالغين). لا تتجاوز 30 ملغ غليكوسيدات هيدروكسي أنثراسين يومياً. استخدم لفترات قصيرة فقط.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والمراهقون (12 سنة فأكثر)', notes: '15-30 ملغ سنوسيد مرة يومياً عند النوم. الحد الأقصى: 30 ملغ/يوم. استخدام قصير الأمد فقط (أسبوع إلى أسبوعين بحد أقصى بدون توجيه طبي).' },
        { group: 'الأطفال (6-12 سنة)', notes: '7.5-15 ملغ سنوسيد مرة يومياً (نصف جرعة البالغين). تحت الإشراف الطبي المباشر فقط.' },
        { group: 'الأطفال (2-6 سنوات)', notes: '2.5-5 ملغ سنوسيد مرة يومياً. تحت الإشراف الطبي المباشر الصارم فقط.' },
        { group: 'الأطفال دون سنتين', notes: 'موانع الاستخدام المطلقة.' },
        { group: 'الحوامل', notes: 'غير موصى به. الثلث الأول موانع صارمة بسبب المخاطر الجينية المحتملة. فقط بموجب توجيه طبي صارم إذا فشلت التدابير الغذائية والملينات التجميعية.' },
        { group: 'المرضعات', notes: 'غير موصى به. مخاطر حدوث إسهال أو مغص للرضيع.' },
      ],
      dosage: {
        standard: 'البالغون: 15-30 ملغ سنوسيد مرة يومياً عند النوم. الحد الأقصى: 30 ملغ غليكوسيدات هيدروكسي أنثراسين (محسوبة كسنوسيد B) يومياً. البداية: 6-12 ساعة.',
        forms: [
          { form: 'شاي أوراق السنا', dose: '1-2 غ أوراق مجففة تُنقع 10-15 دقيقة في 150 مل ماء مغلي؛ يُتناول عند النوم. لا تُغلى.' },
          { form: 'أقراص موحّدة (مثلاً 7.5 ملغ سنوسيد)', dose: 'البالغون: 2-4 أقراص عند النوم. الأطفال 6-12 سنة: 1-2 قرص. حسب تعليمات المنتج.' },
          { form: 'حبيبات / شراب', dose: 'حسب تركيز المنتج والفئة العمرية؛ عادةً 5-10 مل للأطفال 6-12 سنة.' },
        ],
      },
      overdose: {
        symptoms: [
          'تقلصات بطنية شديدة وألم "مغص" حاد',
          'إسهال مائي غزير يؤدي إلى فقدان سريع للسوائل والمعادن',
          'اختلال الشوارد (نقص بوتاسيوم الدم): قد يُحفّز اضطراب نظم القلب وضعف العضلات',
          'الحماض الأيضي من فقدان مفرط للبيكربونات',
          'الإساءة المزمنة: الاعتماد على الملينات، ضمور القولون (القولون القثطاري)',
        ],
        management: [
          'أوقف فوراً جميع المنتجات المحتوية على الأنثراكينون',
          'إماهة عدوانية بأملاح معالجة الجفاف الفموية (ORS) أو سوائل وريدية',
          'مراقبة مستمرة لشوارد المصل، خاصة مستويات البوتاسيوم',
          'مراقبة القلب في المرضى ذوي الأمراض القلبية السابقة',
        ],
      },
      sideEffects: [
        'آلام بطنية وتقلصات ("مغص")، الأكثر شيوعاً',
        'إسهال (خاصة بجرعات عالية أو في الأفراد الحساسين)',
        'اختلالات الشوارد بما فيها نقص بوتاسيوم الدم',
        'سواد القولون: تصبّغ بني حميد قابل للعكس للغشاء المخاطي القولوني (يختفي بعد أشهر من التوقف)',
        'غثيان وفرط في النشاط المعوي',
        'تلوّن البول بالأصفر البني أو البني المحمر (إطراح حميد للمستقلبات)',
      ],
      contraindications: [
        'فرط حساسية معروف للسنا أو مشتقات الأنثراكينون الأخرى',
        'انسداد الأمعاء أو العيلس أو الانسداد البرازي',
        'أمراض الأمعاء الالتهابية الحادة (داء كرون، التهاب القولون التقرحي، التهاب الزائدة)',
        'الجفاف الشديد أو استنزاف الشوارد',
        'آلام بطنية شديدة غير محددة مصحوبة بغثيان/قيء',
        'قصور كلوي أو كبدي حاد',
        'الأطفال دون سنتين (موانع مطلقة)',
      ],
      drugInteractions: [
        'الغليكوسيدات القلبية (مثلاً ديجوكسين) ومضادات اضطراب النظم: نقص بوتاسيوم الدم الناتج عن إساءة الملينات يُضخّم سميتها، خطير.',
        'مدرات البول المُستنزِفة للبوتاسيوم (مثلاً فوروسيميد) والكورتيكوستيرويدات: تُسرّع فقدان البوتاسيوم، تُفاقم نقص بوتاسيوم الدم.',
        'جذر عرق السوس (Glycyrrhiza glabra): الاستخدام المشترك يزيد فقدان البوتاسيوم بشكل كبير.',
      ],
      storage: {
        forms: [
          { form: 'أوراق السنا المجففة / الشاي', instructions: 'مكان بارد جاف (15-25°C) في حاويات محكمة الإغلاق مقاومة للضوء. احمِ من الحرارة وأشعة الشمس المباشرة والرطوبة.' },
          { form: 'أقراص / حبيبات', instructions: 'يُخزَّن في عبوته الأصلية بعيداً عن الحرارة والرطوبة. لا يُخزَّن في الحمامات. يُبعد عن متناول الأطفال.' },
        ],
      },
      benefits: [
        { icon: 'medical_services', title: 'ملين منبّه معتمد سريرياً', desc: 'ملين مُثبَت لتخفيف الإمساك قصير الأمد وفقاً لمنظمة الصحة العالمية ووكالة الأدوية الأوروبية.' },
        { icon: 'cleaning_services', title: 'تنظيف الأمعاء', desc: 'للتحضير للتنظير القولوني والتدخلات الجراحية تحت الإشراف الطبي.' },
        { icon: 'timer', title: 'بداية عمل سريعة وموثوقة', desc: 'إخلاء معوي موثوق في 6-12 ساعة.' },
        { icon: 'science', title: 'آلية مزدوجة', detail: 'مُحفّز للحركة ومُفرِز للشوارد في آن واحد.' },
      ],
      botanicalFacts: {
        family: 'عائلة Leguminosae / Fabaceae',
        nativeRegion: 'أصيل شمال شرق أفريقيا (مصر والسودان) وجنوب آسيا (الهند). يُزرع تجارياً في الهند وباكستان ووادي النيل.',
        growthHabit: 'شجيرة أو عشب معمّر صغير؛ أوراق مركّبة ريشية مزدوجة؛ أزهار صفراء.',
        activeCompounds: 'السنوسيدات A وB (الرئيسية)، السنوسيدات C وD، غليكوسيدات الأنثراكينون (ثنائي الأنثرون والأنثرونات)',
        cultivationNotes: 'موثق في ابن سينا (القانون في الطب) منذ القرن التاسع الميلادي. تمتلك منظمة الصحة العالمية ووكالة الأدوية الأوروبية تقارير رسمية لاستخدامه الطبي.',
      },
      preparation: [
        { method: 'المنقوع المائي (الاستخدام المنزلي القياسي)', desc: 'انقع 1-2 غ أوراق مجففة في 150 مل ماء مغلي في إناء مُغطّى لـ 10-15 دقيقة. صفّ جيداً. أضف الزنجبيل أو النعناع لتقليل المغص.', bestFor: 'تخفيف الإمساك قصير الأمد؛ يُتناول عند النوم لتأثير صباحي' },
        { method: 'مستخلص موحّد (تجاري)', desc: 'أقراص وحبيبات موحّدة بمحتوى سنوسيد محدد (مثلاً 7.5 أو 12.5 ملغ سنوسيد لكل قرص) وفق إرشادات وكالة الأدوية الأوروبية/منظمة الصحة العالمية.', bestFor: 'جرعات دقيقة؛ التحضير للإجراءات الطبية' },
      ],
    },

    turmeric: {
      name: 'الكركم',
      shortDescription: 'مضاد التهاب طبيعي قوي',
      description: 'الكركم (Curcuma longa) نبات جذمور استوائي من الفصيلة الزنجبيلية، يُستخدم في الطب الأيورفيدي والصيني منذ أكثر من 4000 سنة. مادته الفعّالة الكركيومين ثبت لها تأثير مضاد قوي للالتهاب ومضاد للأكسدة في عشرات الدراسات السريرية.',
      symptoms: ['ألم المفاصل', 'الالتهاب', 'آلام العضلات', 'أمراض المناعة الذاتية', 'دعم الكبد'],
      warnings: [
        'يُخفّض مستوى السكر في الدم؛ تابع نسب السكر عند استخدامه مع مضادات السكري',
        'يؤخّر تخثّر الدم؛ أوقف الاستخدام قبل الجراحة بأسبوعين على الأقل',
      ],
      activeConstituents: [
        { name: 'كركيومينويدات', percentage: '2-4%', effect: 'المادة الفعّالة الرئيسية المضادة للالتهاب ومضادة للأكسدة' },
        { name: 'زيوت طيّارة (توميرون، زنجيبرين)', percentage: '', effect: 'تُعزّز التأثير الإجمالي وتُحسّن الامتصاص' },
        { name: 'نشا', percentage: '40-50%', effect: 'المكوّن الهيكلي الرئيسي في الجذمور الجاف' },
      ],
      moa: [
        { title: 'تثبيط NF-κB', detail: 'يُقلّل إنتاج السيتوكينات الالتهابية (IL-1β، IL-6، TNF-α)' },
        { title: 'تثبيط COX-2 وLOX-5', detail: 'يُقلّل تركيب البروستاغلاندينات واللوكوترينات الالتهابية' },
        { title: 'تنشيط Nrf2', detail: 'يُحفّز مسار الحماية من الإجهاد التأكسدي على مستوى الخلية' },
      ],
      uses: ['التهاب المفاصل ومتلازمة الألم المزمن', 'دعم وظائف الكبد وإزالة السموم', 'التهابات الجهاز الهضمي والقولون التقرحي', 'الوقاية من التأكسد والشيخوخة الخلوية'],
      howToUse: [
        { method: 'مع الفلفل الأسود أو البيبيرين', instruction: 'أضف قرصة فلفل أسود مع كل جرعة لتحسين الامتصاص حتى 20 ضعفاً' },
        { method: 'صياغة الفيتوزوم أو الميسيل', instruction: 'اختر هذه الكبسولات للحالات العلاجية لامتصاص أعلى بكثير' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون (18 سنة فأكثر)', notes: 'الجرعة القياسية الكاملة آمنة' },
        { group: 'الأطفال (12 إلى 17 سنة)', notes: 'يُستخدم بحذر تحت إشراف طبي' },
        { group: 'الحوامل', notes: 'يُتجنّب بجرعات علاجية؛ الاستخدام كتوابل في الطعام آمن' },
      ],
      dosage: {
        standard: 'مسحوق الجذمور 1 إلى 3 غ يومياً مقسّمة على وجبات',
        forms: [
          { form: 'مسحوق الجذمور', dose: '1 إلى 3 غ يومياً مقسّمة على وجبات' },
          { form: 'مستخلص موحّد (95% كركيومينويدات)', dose: '400 إلى 600 ملغ ثلاث مرات يومياً' },
          { form: 'صياغات الفيتوزوم', dose: '200 إلى 400 ملغ مرتين يومياً' },
        ],
      },
      overdose: {
        symptoms: ['اضطرابات معدية معوية', 'غثيان', 'إسهال (عند جرعات أعلى من 8 غ يومياً)'],
        management: [
          'أوقف الاستخدام وتناول الطعام لتخفيف التهيّج المعدي',
          'التجارب السريرية استخدمت حتى 12 غ يومياً بأمان نسبي لفترات قصيرة',
        ],
      },
      sideEffects: [
        'اضطراب معدي وغثيان وإسهال بالجرعات العالية',
        'صداع ودوخة (نادراً)',
        'تحسس جلدي عند الاستخدام الموضعي المطوّل (نادر)',
      ],
      contraindications: [
        'حصوات المرارة أو انسداد القناة الصفراوية (يُحفّز تدفق العصارة)',
        'فرط حساسية للنباتات الزنجبيلية',
        'اضطرابات النزيف الحادة',
        'ما قبل الجراحة (توقف قبل أسبوعين على الأقل)',
      ],
      drugInteractions: [
        'مضادات التخثر (وارفارين، هيبارين): يزيد خطر النزيف',
        'مضادات الصفيحات (أسبرين، كلوبيدوجريل): تأثير مضاعف',
        'مضادات السكري: قد يخفّض السكر',
        'مثبطات مضخة البروتون: قد يُضعف تأثيرها',
      ],
      storage: {
        forms: [
          { form: 'مسحوق', instructions: 'وعاء محكم الإغلاق بعيداً عن الضوء والرطوبة في درجة حرارة الغرفة' },
          { form: 'كبسولات', instructions: 'وفق إرشادات المُصنّع، عادةً أقل من 25 درجة مئوية' },
        ],
      },
      benefits: [
        { icon: 'healing', title: 'مضاد التهاب قوي', desc: 'يثبّط مسارات NF-κB وCOX-2 لتخفيف الألم المزمن.' },
        { icon: 'shield', title: 'حماية الكبد', desc: 'يُحفّز إنزيمات إزالة السموم ويحمي خلايا الكبد من الإجهاد التأكسدي.' },
        { icon: 'psychology', title: 'دعم معرفي', desc: 'يُعزّز مستوى BDNF ويُقلّل من خطر الاضطرابات العصبية.' },
        { icon: 'favorite', title: 'صحة القلب', desc: 'يُحسّن وظيفة البطانة الوعائية ويُقلّل الأكسدة الدهنية.' },
      ],
      botanicalFacts: {
        family: 'عائلة Zingiberaceae (الزنجبيليات)',
        nativeRegion: 'جنوب آسيا (الهند وإندونيسيا وجنوب شرق آسيا). تُزرع تجارياً في الهند (90% من الإنتاج العالمي) وباكستان وبنغلاديش.',
        growthHabit: 'نبات جذمور معمّر يصل ارتفاعه إلى متر واحد؛ أوراق كبيرة رمحية؛ جذمور برتقالي لامع عند الكسر.',
        activeCompounds: 'كركيومين (70-80% من الكركيومينويدات)، بيسديميثوكسي كركيومين، ديميثوكسي كركيومين، ar-تورميرون.',
        cultivationNotes: 'مذكور في الفيدا الأثارفا (1500 قبل الميلاد). الأدلة السريرية الأكثر شمولاً في النباتات الطبية مع أكثر من 3000 دراسة منشورة.',
      },
      preparation: [
        { method: 'ذهب الحليب (Turmeric Latte)', desc: 'اخفق 1 ملعقة صغيرة مسحوق + قرصة فلفل أسود + ملعقة صغيرة زيت جوز هند في 250 مل حليب دافئ. حلّ بالعسل.', bestFor: 'الاستخدام اليومي للصحة العامة والنوم' },
        { method: 'كبسولات موحّدة', desc: 'اختر صياغات فيتوزوم أو بيبيرين (مثل Curcumin C3 Complex®) للحصول على امتصاص أعلى.', bestFor: 'الجرعات العلاجية لألم المفاصل والالتهاب المزمن' },
      ],
    },

    clove: {
      name: 'القرنفل',
      shortDescription: 'مطهّر طبيعي قوي للجهاز البولي',
      description: 'القرنفل (Syzygium aromaticum) براعم زهرية مجففة من شجرة استوائية دائمة الخضرة. يحتوي على أعلى تركيز من اليوجينول بين التوابل المعروفة، وقد ثبتت فاعليته المضادة للميكروبات والبكتيريا في مسببات التهابات المسالك البولية بما فيها E. coli.',
      symptoms: ['التهاب المسالك البولية', 'الألم عند التبوّل', 'تكرار الإصابة بالعدوى', 'الحمى المصاحبة للعدوى'],
      warnings: [
        'لا يستبدل المضادات الحيوية في حالات التهاب المسالك البولية الحادة أو التهاب الكلى',
        'راجع الطبيب فوراً عند الحمى أو ألم الظهر المصاحب للعدوى',
      ],
      activeConstituents: [
        { name: 'يوجينول', percentage: '70-90%', effect: 'المضاد الرئيسي للبكتيريا والفطريات والمسكّن الموضعي' },
        { name: 'أسيتيل يوجينول وكاريوفيلين', percentage: '', effect: 'يُعزّزان التأثير المضاد للالتهاب' },
        { name: 'فلافونويدات (كيمبفيرول، كيرسيتين)', percentage: '', effect: 'مضادة للأكسدة ومضادة للالتهاب' },
        { name: 'تانينات (غاليك وإيلاجيك)', percentage: '', effect: 'قابضة ومضادة للميكروبات' },
      ],
      moa: [
        { title: 'تثبيط غشاء البيوفيلم', detail: 'اليوجينول يُدمّر غشاء الخلية البكتيرية ويمنع تكوين الغشاء الحيوي' },
        { title: 'تثبيط مضخة الأيونات', detail: 'يُثبّط مضخة Na+/K+ البكتيرية ويُقلّل إنتاج السموم الخلوية' },
        { title: 'تأثير الفلافونويدات', detail: 'تُعزّز التأثير المضاد للأكسدة وتُقلّل الالتهاب المحلي في المسالك البولية' },
      ],
      uses: ['دعم علاج التهابات المسالك البولية الخفيفة', 'مضاد فطري لالتهابات Candida', 'خافض للحمى مساعد', 'مسكّن للألم السني والموضعي'],
      howToUse: [
        { method: 'منقوع القرنفل', instruction: 'يُستخدم الشاي أو المنقوع للاستخدام الداخلي الآمن' },
        { method: 'الزيت الأساسي', instruction: 'مُخفَّف فقط للاستخدام الخارجي الموضعي؛ لا يُستخدم نقياً داخلياً' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون (18 سنة فأكثر)', notes: 'الجرعة الكاملة آمنة' },
        { group: 'الأطفال (12 سنة فأكثر)', notes: 'يُتجنّب داخلياً بدون إشراف طبي' },
        { group: 'الحوامل', notes: 'استشارة طبية ضرورية قبل الاستخدام' },
      ],
      dosage: {
        standard: 'منقوع القرنفل: 1 إلى 2 غ براعم مجففة في 200 مل ماء مغلي، مرتين يومياً',
        forms: [
          { form: 'منقوع البراعم المجففة', dose: '1 إلى 2 غ في 200 مل ماء مغلي، مرتين يومياً' },
          { form: 'مستخلص موحّد (يوجينول 80%)', dose: '100 إلى 200 ملغ ثلاث مرات يومياً' },
        ],
      },
      overdose: {
        symptoms: ['غثيان وإقياء', 'نزيف', 'تسمم كبدي عند الجرعات الزائدة جداً'],
        management: [
          'أوقف الاستخدام فوراً وراجع الطبيب',
          'احفظ زيت القرنفل بعيداً عن الأطفال',
        ],
      },
      sideEffects: [
        'تهيّج الفم والمعدة',
        'فرط حساسية جلدية (نادراً)',
        'حرق موضعي عند استخدام الزيت غير المخفّف',
      ],
      contraindications: [
        'اضطرابات النزيف والجلطات',
        'أمراض الكبد الحادة',
        'حساسية من الفينيل بروبانويد',
        'الحمل بجرعات علاجية',
      ],
      drugInteractions: [
        'مضادات التخثر: يزيد خطر النزيف',
        'مضادات الصفيحات: تأثير مضاعف',
        'سيكلوسبورين ومثبطات CYP3A4: تداخلات محتملة',
      ],
      storage: {
        forms: [
          { form: 'براعم مجففة', instructions: 'وعاء زجاجي محكم في مكان بارد وجاف؛ تدوم 3 إلى 4 سنوات' },
          { form: 'زيت أساسي', instructions: 'في الثلاجة؛ يدوم حتى سنتين' },
        ],
      },
      benefits: [
        { icon: 'vaccines', title: 'مضاد للبكتيريا', desc: 'اليوجينول يثبّط E. coli وKlebsiella المسببة لالتهابات المسالك.' },
        { icon: 'thermostat', title: 'خافض للحمى', desc: 'يُقلّل الالتهاب الجهازي المصاحب للعدوى.' },
        { icon: 'healing', title: 'مضاد للفطريات', desc: 'فعّال ضد Candida albicans في التهابات المهبل والمسالك البولية.' },
        { icon: 'medication', title: 'مسكّن موضعي', desc: 'يُخدّر الأعصاب المحلية مؤقتاً ويُخفّف ألم التبوّل.' },
      ],
      botanicalFacts: {
        family: 'عائلة Myrtaceae (الآسيليات)',
        nativeRegion: 'جزر مالوكو (إندونيسيا) أصلاً. تُزرع الآن في إندونيسيا وتنزانيا (زنجبار) وسريلانكا وكينيا.',
        growthHabit: 'شجرة دائمة الخضرة تصل إلى 12 متراً؛ تُقطف البراعم قبل تفتّح الأزهار وتُجفَّف.',
        activeCompounds: 'يوجينول، أسيتيل يوجينول، β-كاريوفيلين، α-هيومولين، غاليوتانين.',
        cultivationNotes: 'كان من أثمن توابل العصور الوسطى. اليوجينول لا يزال أساسياً في صناعة طب الأسنان كمادة مُخدِّرة.',
      },
      preparation: [
        { method: 'منقوع القرنفل', desc: 'اغلِ 4-5 براعم في 300 مل ماء 10 دقائق. صفّ واشرب دافئاً مع العسل، مرتين يومياً.', bestFor: 'دعم علاج التهابات المسالك الخفيفة' },
        { method: 'كبسولات مستخلص القرنفل', desc: 'اختر كبسولات موحّدة تحتوي 80% يوجينول وفق إرشادات الجرعة.', bestFor: 'الاستخدام العلاجي المنتظم مع مراقبة طبية' },
      ],
    },

    'witch-hazel': {
      name: 'الهاماميليس',
      shortDescription: 'قابض طبيعي مضاد للالتهاب',
      description: 'الهاماميليس (Hamamelis virginiana) شجيرة أمريكية شمالية تحتوي لحاؤها وأوراقها على تانينات وبروانثوسيانيدينات تمنحها خصائص قابضة وضد التهاب ومضادة للأكسدة. تُستخدم تقليدياً لتهدئة التهيّج ودعم صحة المسالك البولية.',
      symptoms: ['التهيّج والالتهاب الخفيف', 'دعم صحة الجهاز البولي', 'الأوردة الدوالية', 'التهاب الجلد'],
      warnings: [
        'للاستخدام الداخلي: لا تتجاوز الجرعة الموصى بها',
        'يحتوي على تانينات قد تتداخل مع امتصاص الحديد والأدوية',
      ],
      activeConstituents: [
        { name: 'تانينات (هاماميليتانين، غاليوتانينات)', percentage: '8-12%', effect: 'قابضة ومضادة للالتهاب ومضادة للميكروبات' },
        { name: 'فلافونويدات (كيرسيتين، كيمبفيرول)', percentage: '', effect: 'مضادة للأكسدة ومثبّطة لإنزيم COX-2' },
        { name: 'بروانثوسيانيدينات', percentage: '', effect: 'تُعزّز صحة الأوردة والشعيرات الدموية' },
        { name: 'زيوت طيارة وصابونينات', percentage: '', effect: 'تُساهم في التأثير المضاد للالتهاب' },
      ],
      moa: [
        { title: 'تأثير التانينات القابض', detail: 'تُبطّن الأغشية المخاطية وتُقلّل النفاذية الشعرية وتُثبّط تحرّر الهستامين' },
        { title: 'تثبيط COX-2', detail: 'الفلافونويدات تُثبّط إنزيم COX-2 وتُقلّل الإجهاد التأكسدي' },
        { title: 'تأثير مضاد للإفراز', detail: 'يُقلّل التهيّج وإفراز المخاط من الغشاء المخاطي' },
      ],
      uses: ['تهدئة التهيّج البولي الخفيف', 'تحسين مقاومة الأوردة وتقليل الوذمة', 'علاج الفروة والجلد المتهيّج موضعياً', 'مضاد للأكسدة عام'],
      howToUse: [
        { method: 'الاستخدام الموضعي', instruction: 'أشيع وأأمن؛ يُطبَّق بالقطن على المنطقة المتهيّجة 2 إلى 3 مرات يومياً' },
        { method: 'الاستخدام الداخلي', instruction: 'استشر متخصصاً؛ التانينات المرتفعة تتداخل مع الامتصاص المعدي المعوي' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون (فوق 18 سنة)', notes: 'الجرعة الكاملة آمنة داخلياً وخارجياً' },
        { group: 'الأطفال (6 سنوات فأكثر)', notes: 'يُسمح بالاستخدام الموضعي فقط' },
        { group: 'الحوامل', notes: 'يُتجنّب الاستخدام الداخلي' },
      ],
      dosage: {
        standard: 'مستخلص سائل 2 إلى 4 مل ثلاث مرات يومياً للاستخدام الداخلي',
        forms: [
          { form: 'مستخلص سائل (1:1)', dose: '2 إلى 4 مل ثلاث مرات يومياً' },
          { form: 'شاي الأوراق', dose: '2 إلى 3 غ في 200 مل ماء مغلي، مرتين يومياً' },
          { form: 'محلول موضعي', dose: 'محلول 10 إلى 15% حسب الحاجة' },
        ],
      },
      overdose: {
        symptoms: ['غثيان وإسهال وقيء بسبب التانينات', 'سُمّية كبدية في حالات نادرة مع الاستخدام المطوّل'],
        management: ['أوقف الاستخدام وتناول الماء والطعام', 'راجع الطبيب عند أعراض الكبد'],
      },
      sideEffects: [
        'إزعاج معدي معوي بالجرعات العالية',
        'فرط حساسية (نادراً)',
        'تهيّج جلدي موضعي (نادر)',
      ],
      contraindications: [
        'أمراض الكبد بسبب التانينات',
        'الحمل والرضاعة (الاستخدام الداخلي)',
        'حساسية من نباتات Hamamelidaceae',
      ],
      drugInteractions: [
        'يُقلّل امتصاص الحديد والمعادن؛ تناوله بعيداً عن المكمّلات',
        'أدوية الكبد: احترس من التأثير التراكمي',
      ],
      storage: {
        forms: [
          { form: 'مستخلص', instructions: 'بارد وبعيد عن الضوء؛ يدوم سنة' },
          { form: 'أوراق مجففة', instructions: 'وعاء محكم بعيداً عن الرطوبة' },
        ],
      },
      benefits: [
        { icon: 'compress', title: 'تأثير قابض', desc: 'يُشدّ الأنسجة المخاطية ويُقلّل التهيّج والإفراز.' },
        { icon: 'water_drop', title: 'دعم الأوردة', desc: 'يُعزّز مقاومة جدار الأوردة ويُخفّف الوذمة.' },
        { icon: 'shield', title: 'مضاد للأكسدة', desc: 'فلافونوياته تحمي الخلايا من الإجهاد التأكسدي.' },
        { icon: 'spa', title: 'تهدئة موضعية', desc: 'يُهدّئ الالتهاب الجلدي والفروة المتهيّجة.' },
      ],
      botanicalFacts: {
        family: 'عائلة Hamamelidaceae',
        nativeRegion: 'شرق أمريكا الشمالية (من كندا حتى فلوريدا). تُستزرع تجارياً في الولايات المتحدة وأوروبا.',
        growthHabit: 'شجيرة أو شجرة صغيرة تصل إلى 5 أمتار؛ أزهار صفراء في الشتاء؛ أوراق بيضاوية مموّجة الحواف.',
        activeCompounds: 'هاماميليتانين، غاليك أسيد، إيلاجيك أسيد، بروانثوسيانيدين B-2، كيرسيتين.',
        cultivationNotes: 'استخدمتها القبائل الأمريكية الأصلية (الأبيناكي والموهيكان) لعلاج الجروح والالتهابات منذ قرون. منتجاتها الموضعية معتمدة من FDA كأدوية مساعدة.',
      },
      preparation: [
        { method: 'شاي الهاماميليس', desc: 'اغلِ 2 غ لحاء أو أوراق مجففة في 250 مل ماء لـ 15 دقيقة. صفّ واشرب دافئاً مرتين يومياً.', bestFor: 'دعم صحة الأوردة والمسالك الخفيفة' },
        { method: 'محلول موضعي', desc: 'استخدم محلول هاماميليس 10% على القطن وضعه على المنطقة المتهيّجة 2-3 مرات يومياً.', bestFor: 'التهاب الجلد والبواسير والفروة' },
      ],
    },

    dandelion: {
      name: 'الهندباء البرية',
      shortDescription: 'مُدرّ بولي طبيعي لا يستنزف البوتاسيوم',
      description: 'الهندباء البرية (Taraxacum officinale) عشبة مألوفة تتميز بجذر وتيدي سميك وأوراق مسنّنة. تُستخدم جذورها وأوراقها مُدرّاً للبول غنياً بالبوتاسيوم، ما يجعلها آمنة خلافاً للمدرّات الصناعية. لها تأثير مُذيب للحصوات وداعم لوظيفة الكبد.',
      symptoms: ['احتباس السوائل', 'التهابات المسالك البولية الخفيفة', 'حصوات الكلى الصغيرة', 'دعم الكبد والمرارة'],
      warnings: [
        'تحتوي على البوتاسيوم؛ تابع مستوياته مع أدوية القلب',
        'قد تُسبّب تفاعل تحسسي في حساسية المُركّبات الصفراء (Asteraceae)',
      ],
      activeConstituents: [
        { name: 'فلافونويدات (لوتيولين، أبيجينين، كيرسيتين)', percentage: '', effect: 'مضادة للالتهاب وتمنع التصاق البكتيريا بجدار المثانة' },
        { name: 'أحماض فينولية (حمض القهوة، الكلوروجينيك)', percentage: '', effect: 'مضادة للأكسدة وداعمة لوظيفة الكبد' },
        { name: 'مواد مُرّة (تاراكساسين، تاراكساسيرين)', percentage: '', effect: 'تُحفّز العصارة الصفراوية وتحسّن وظيفة الكبد' },
        { name: 'بوتاسيوم', percentage: '4.5%', effect: 'يُعوّض الفقد الطبيعي مع الإدرار' },
      ],
      moa: [
        { title: 'مُدرّ مائي (Aquaretic)', detail: 'يزيد معدل الترشيح الكُبيبي ويمنع إعادة الامتصاص دون خسارة بوتاسيوم' },
        { title: 'منع التصاق البكتيريا', detail: 'الفلافونويدات تُثبّط التصاق البكتيريا بجدار المثانة' },
        { title: 'تحفيز العصارة الصفراوية', detail: 'المواد المُرّة تُحفّز إفراز الصفراء وتحسّن وظيفة الكبد' },
      ],
      uses: ['الوذمة واحتباس السوائل الخفيف', 'دعم الوقاية من التهابات المسالك', 'تعزيز طرح الحصوات الصغيرة', 'تحسين وظيفة الكبد وإفراز الصفراء'],
      howToUse: [
        { method: 'الأوراق الطازجة', instruction: 'تُضاف للسلطة كغذاء يومي للإدرار الخفيف' },
        { method: 'شاي الجذر', instruction: 'الجذر المجفف كشاي للإدرار القوي؛ ثلاث مرات يومياً' },
        { method: 'المستخلص المُركّز', instruction: 'للجرعة العلاجية الدقيقة والمراقبة' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون (18 سنة فأكثر)', notes: 'الجرعة الكاملة آمنة' },
        { group: 'مرضى الكلى المزمن', notes: 'بحذر؛ مراقبة مستوى البوتاسيوم' },
        { group: 'مرضى انسداد القنوات الصفراوية', notes: 'يُتجنّب كلياً' },
      ],
      dosage: {
        standard: 'شاي جذر الهندباء 2 إلى 8 غ في 200 مل ماء مغلي، ثلاث مرات يومياً',
        forms: [
          { form: 'أوراق طازجة', dose: '4 إلى 10 غ ثلاث مرات يومياً' },
          { form: 'شاي جذر الهندباء', dose: '2 إلى 8 غ في 200 مل ماء مغلي، ثلاث مرات يومياً' },
          { form: 'مستخلص سائل (1:1)', dose: '4 إلى 8 مل ثلاث مرات يومياً' },
        ],
      },
      overdose: {
        symptoms: ['إسهال', 'ارتجاع حمضي', 'فرط بوتاسيوم في مرضى الكلى'],
        management: ['لا سمّية حادة موثقة', 'قلّل الجرعة عند ظهور أعراض الجهاز الهضمي'],
      },
      sideEffects: [
        'تهيّج معدي وارتجاع حمضي (نادراً)',
        'حساسية جلدية في حساسية المُركّبات الصفراء (Asteraceae)',
      ],
      contraindications: [
        'انسداد القناة الصفراوية أو التهاب المرارة الحاد',
        'فرط بوتاسيوم الدم',
        'حصوات الكلى الكبيرة',
        'فرط حساسية من نباتات Asteraceae',
      ],
      drugInteractions: [
        'مدرّات البول: تأثير مضاعف وخطر جفاف',
        'حاصرات البيتا وACE inhibitors: ارتفاع محتمل في البوتاسيوم',
        'مضادات التخثر: قد يُعزّز التأثير بسبب فيتامين K',
      ],
      storage: {
        forms: [
          { form: 'أوراق طازجة', instructions: 'في الثلاجة حتى أسبوع' },
          { form: 'جذر مجفف', instructions: 'وعاء محكم بعيداً عن الرطوبة؛ يدوم حتى سنتين' },
        ],
      },
      benefits: [
        { icon: 'water_drop', title: 'مُدرّ بولي آمن', desc: 'يزيد إدرار البول دون استنزاف البوتاسيوم كالمدرّات الصناعية.' },
        { icon: 'local_pharmacy', title: 'دعم الكبد', desc: 'يُحفّز إفراز الصفراء ويدعم تخلّص الكبد من السموم.' },
        { icon: 'healing', title: 'مضاد التصاق بكتيري', desc: 'يُقلّل التصاق البكتيريا بجدار المثانة والمسالك.' },
        { icon: 'nutrition', title: 'غني بالمغذيات', desc: 'مصدر ممتاز لفيتامين A وK والبوتاسيوم والحديد.' },
      ],
      botanicalFacts: {
        family: 'عائلة Asteraceae (المُركّبات)',
        nativeRegion: 'أصيل أوروبا وآسيا الوسطى. انتشر الآن عالمياً كنبات مُجنسَّن.',
        growthHabit: 'عشبة معمّرة جذرها وتيدي سميك؛ أوراق مسنّنة في مجموعة قاعدية؛ نورة زهرية صفراء.',
        activeCompounds: 'لوتيولين، أبيجينين، تاراكساسين، تاراكسيرول، بيتا-سيتوستيرول، بوتاسيوم.',
        cultivationNotes: 'مستخدمة في الطب الصيني واليوناني والعربي لأكثر من ألف سنة. تُعدّ من أكثر النباتات العلاجية توثيقاً في دراسات الإدرار البولي.',
      },
      preparation: [
        { method: 'شاي جذر الهندباء', desc: 'اغلِ 2-3 غ جذر مجفف في 300 مل ماء لـ 10 دقائق. صفّ واشرب دافئاً ثلاث مرات يومياً بعد الوجبات.', bestFor: 'الإدرار البولي ودعم الكبد والمسالك' },
        { method: 'أوراق طازجة كسلطة', desc: 'اغسل الأوراق الطازجة جيداً وأضفها للسلطة مع ليمون وزيت زيتون. 1-2 حفنة يومياً.', bestFor: 'التغذية اليومية والإدرار الخفيف' },
      ],
    },

    parsley: {
      name: 'البقدونس',
      shortDescription: 'مُدرّ بولي ومُذيب للحصوات',
      description: 'البقدونس (Petroselinum crispum) عشبة طبيخ شائعة من الفصيلة الخيمية تمتلك خصائص إدرارية ومضادة للميكروبات موثّقة. يحتوي على أبيول وميريستيسين يُحفّزان الترشيح الكلوي، كما أن فلافونوياته تمنع تكوّن حصوات الأوكسالات.',
      symptoms: ['احتباس السوائل', 'حصوات الكلى (وقاية)', 'التهاب المسالك البولية', 'ارتفاع ضغط الدم الخفيف'],
      warnings: [
        'الزيت الأساسي سام جداً؛ يُستخدم عشب البقدونس فقط',
        'الجرعات العالية محظورة خلال الحمل لتأثيرها المُحرّض للرحم',
      ],
      activeConstituents: [
        { name: 'أبيول وميريستيسين', percentage: '', effect: 'يُحفّزان الترشيح الكلوي ويزيدان الإدرار' },
        { name: 'أبيجينين (فلافونويد)', percentage: '', effect: 'يثبّط تكوّن حصوات الأوكسالات ويُخفّف التشنج الحالبي' },
        { name: 'فيتامين C وK وبيتا كاروتين', percentage: '', effect: 'تُعزّز المناعة وتحمي الأنسجة الكلوية' },
        { name: 'بوتاسيوم', percentage: '', effect: 'يُحفّز الإدرار ويُعوّض الفقد' },
      ],
      moa: [
        { title: 'تثبيط إعادة امتصاص الصوديوم', detail: 'الأبيول والميريستيسين يُثبّطان الامتصاص في الأنابيب الكلوية مما يزيد الإدرار' },
        { title: 'منع تكوّن الحصوات', detail: 'الأبيجينين يثبّط إنزيمات تكوّن حصوات الأوكسالات ويُخفّف التشنج الحالبي' },
        { title: 'حماية مصفوفة الأنسجة', detail: 'فيتامين K يحمي مصفوفة الأنسجة من الكلسة ويمنع ترسب الكالسيوم' },
      ],
      uses: ['زيادة إدرار البول في الاحتباس والوذمة', 'الوقاية من حصوات الكلى الأوكساليتية', 'خفض ضغط الدم الخفيف', 'مضاد للميكروبات في المسالك البولية'],
      howToUse: [
        { method: 'العشب الطازج أو المجفف', instruction: 'الأكثر أماناً؛ يُضاف للطعام بكميات حرة' },
        { method: 'منقوع البذور', instruction: 'أقوى تأثيراً للإدرار؛ يُستخدم مرتين يومياً' },
        { method: 'الزيت الأساسي', instruction: 'مقصور على الاستخدام المُشرَف عليه طبياً فقط' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون (18 سنة فأكثر)', notes: 'الجرعة الكاملة آمنة' },
        { group: 'الحوامل', notes: 'يُتجنّب بجرعات علاجية؛ الاستخدام كتوابل آمن' },
        { group: 'مرضى الكلى', notes: 'بحذر تحت إشراف طبي' },
      ],
      dosage: {
        standard: 'عشب طازج 30 إلى 50 غ يومياً في الطعام',
        forms: [
          { form: 'عشب طازج', dose: '30 إلى 50 غ يومياً في الطعام' },
          { form: 'منقوع البذور', dose: '6 غ في 300 مل ماء مغلي، مرتين يومياً' },
          { form: 'مستخلص سائل', dose: '2 إلى 4 مل ثلاث مرات يومياً' },
        ],
      },
      overdose: {
        symptoms: ['فرط نشاط كلوي وجفاف', 'فرط بوتاسيوم', 'سمّية كبدية وكلوية حادة (من الزيت الأساسي)'],
        management: ['أوقف الاستخدام وتناول السوائل', 'راجع الطبيب عند أعراض الكلى أو الكبد'],
      },
      sideEffects: [
        'إزعاج معدي وتبوّل متكرر بالجرعات العالية',
        'تحسس جلدي ضوئي (نادراً)',
      ],
      contraindications: [
        'الحمل لأنه يُحرّض الرحم',
        'أمراض الكلى الحادة',
        'حصوات أوكسالات الكالسيوم الكبيرة',
        'فرط حساسية من نباتات Apiaceae',
      ],
      drugInteractions: [
        'مدرّات البول: تأثير مضاعف',
        'مضادات التخثر (وارفارين): فيتامين K يُقلّل التأثير',
        'أدوية ضغط الدم: قد يُعزّز الخفض',
      ],
      storage: {
        forms: [
          { form: 'طازج', instructions: 'في الثلاجة ملفوفاً بمنشفة رطبة حتى أسبوع' },
          { form: 'مجفف', instructions: 'وعاء محكم بعيداً عن الضوء حتى سنة' },
        ],
      },
      benefits: [
        { icon: 'water_drop', title: 'مُدرّ بولي فعّال', desc: 'يُحفّز الترشيح الكلوي ويُعزّز طرح السوائل الزائدة.' },
        { icon: 'diamond', title: 'مانع تكوّن الحصوات', desc: 'يُثبّط تبلور أوكسالات الكالسيوم في الكلى.' },
        { icon: 'monitor_heart', title: 'داعم القلب والأوعية', desc: 'يُخفّض ضغط الدم الخفيف ويحمي البطانة الوعائية.' },
        { icon: 'nutrition', title: 'غني بالفيتامينات', desc: 'مصدر ممتاز لفيتامين C وK والحديد والأبيجينين.' },
      ],
      botanicalFacts: {
        family: 'عائلة Apiaceae (الخيميات)',
        nativeRegion: 'أصيل البحر الأبيض المتوسط (اليونان وإيطاليا وسردينيا). يُزرع الآن عالمياً.',
        growthHabit: 'عشبة حولية أو ثنائية الحول؛ أوراق مُركّبة خضراء مشرشرة؛ أزهار صغيرة بيضاء.',
        activeCompounds: 'أبيجينين، أبيول، ميريستيسين، لوتيولين، بيتا كاروتين، فيتامين K.',
        cultivationNotes: 'مستخدم في الطب اليوناني القديم (أبقراط ودياسقوريدس) لاضطرابات الكلى والمسالك منذ القرن الخامس قبل الميلاد.',
      },
      preparation: [
        { method: 'منقوع بذور البقدونس', desc: 'اسحق ملعقة صغيرة بذور طازجة وانقعها في 300 مل ماء مغلي 15 دقيقة. صفّ واشرب دافئاً مرتين يومياً.', bestFor: 'الإدرار القوي والوقاية من الحصوات' },
        { method: 'عصير البقدونس الطازج', desc: 'اعصر حفنة من الأوراق الطازجة مع خيارة وليمونة. اشرب صباحاً على الريق.', bestFor: 'التنقية اليومية الخفيفة' },
      ],
    },

    halfabar: {
      name: 'الحلفبر (خيوط الذرة)',
      shortDescription: 'مُهدّئ المسالك البولية التقليدي',
      description: 'الحلفبر أو خيوط الذرة (Zea mays L.، stigmata) الوشائج الحريرية لنبات الذرة، تستخدم في الطب الشعبي العربي والأمريكي والصيني مُدرّاً بولياً لطيفاً ومُهدّئاً للتهاب المثانة والحالب. غنية بالبوتاسيوم والساپونينات التي تُلطّف الغشاء المخاطي.',
      symptoms: ['التهاب المثانة والمسالك', 'ألم وحرقة التبوّل', 'الاحتباس البولي الخفيف', 'التهيّج الكلوي'],
      warnings: [
        'تجنّب في فرط الحساسية من الذرة أو حبوب لقاحها',
        'بحذر في مرضى السكري إذ قد يخفّض سكر الدم',
        'استشر الطبيب في الحمل قبل الاستخدام',
      ],
      activeConstituents: [
        { name: 'فلافونويدات (ميابيانين، كيرسيتين)', percentage: '', effect: 'تُثبّط إطلاق الهستامين في المثانة وتُقلّل الالتهاب' },
        { name: 'ساپونينات', percentage: '', effect: 'تُطيف جدار المسالك البولية وتُقلّل الالتهاب' },
        { name: 'ألانتوئين', percentage: '', effect: 'يُعزّز التئام الغشاء المخاطي المُهيّج' },
        { name: 'أملاح بوتاسيوم', percentage: '', effect: 'تُحفّز الإدرار البولي الخفيف' },
      ],
      moa: [
        { title: 'تطييف جدار المسالك', detail: 'الساپونينات تُطيف الأغشية المخاطية للمثانة والحالب وتُقلّل الالتهاب' },
        { title: 'تثبيط الهستامين', detail: 'الفلافونويدات تُثبّط إطلاق الهستامين في المثانة' },
        { title: 'تعزيز الالتئام', detail: 'الألانتوئين يُعزّز تجديد خلايا الغشاء المخاطي المُهيّج' },
        { title: 'إدرار بولي خفيف', detail: 'تُحفّز الترشيح الكلوي دون إجهاد الكلى' },
      ],
      uses: ['تخفيف حرقة التبوّل في التهاب المثانة الخفيف', 'مدرّ بولي لطيف لاحتباس السوائل', 'تهدئة الحالب في حالات المغص الكلوي', 'الوقاية من الالتهابات المتكررة'],
      howToUse: [
        { method: 'شاي خيوط الذرة', instruction: 'الصورة الأكثر شيوعاً وأماناً؛ ثلاث مرات يومياً، التأثير يظهر خلال 24 إلى 48 ساعة' },
        { method: 'مستخلص جاهز', instruction: 'كبسولات أو قطرات من محلات المنتجات الطبيعية؛ اتبع تعليمات المُصنّع' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون (18 سنة فأكثر)', notes: 'الجرعة الكاملة آمنة' },
        { group: 'المراهقون (12 سنة فأكثر)', notes: 'يمكن استخدامه بحذر بإشراف طبي' },
        { group: 'الحوامل', notes: 'بحذر تحت إشراف طبي' },
      ],
      dosage: {
        standard: 'شاي خيوط الذرة 4 إلى 8 غ طازجة في 300 مل ماء مغلي، ثلاث مرات يومياً',
        forms: [
          { form: 'شاي خيوط الذرة الطازجة', dose: '4 إلى 8 غ في 300 مل ماء مغلي لـ 15 دقيقة، ثلاث مرات يومياً' },
          { form: 'شاي خيوط الذرة المجففة', dose: '2 إلى 4 غ في 300 مل ماء مغلي، ثلاث مرات يومياً' },
          { form: 'مستخلص سائل', dose: '4 مل ثلاث مرات يومياً' },
        ],
      },
      overdose: {
        symptoms: ['إسهال خفيف', 'جفاف بسبب الإدرار الزائد'],
        management: ['لا سمّية حادة موثّقة', 'اشرب كميات كافية من الماء لتعويض الفقد'],
      },
      sideEffects: [
        'تفاعل تحسسي في حساسية حبوب لقاح الذرة (نادراً)',
        'تبوّل متكرر',
      ],
      contraindications: [
        'حساسية من الذرة أو عائلة النجيليات',
        'فرط بوتاسيوم الدم',
        'مرضى الكلى المتقدم',
        'انسداد المسالك البولية الكامل',
      ],
      drugInteractions: [
        'أدوية السكري: قد يُعزّز خفض السكر',
        'مدرّات البول: تأثير مضاعف',
        'مضادات التخثر: فيتامين K يُقلّل تأثير الوارفارين',
      ],
      storage: {
        forms: [
          { form: 'طازج', instructions: 'في الثلاجة حتى أسبوع' },
          { form: 'مجفف', instructions: 'وعاء محكم بعيداً عن الرطوبة والضوء حتى سنة' },
        ],
      },
      benefits: [
        { icon: 'spa', title: 'مُطيف المسالك', desc: 'يُلطّف الغشاء المخاطي للمثانة والحالب ويُقلّل الحرقة.' },
        { icon: 'water_drop', title: 'مُدرّ لطيف', desc: 'يزيد إدرار البول دون إجهاد الكلى أو فقدان المعادن.' },
        { icon: 'healing', title: 'التئام الغشاء المخاطي', desc: 'الألانتوئين يُعزّز تجديد خلايا المسالك المُهيّجة.' },
        { icon: 'vaccines', title: 'وقاية من الالتهابات', desc: 'يُقلّل تكرار التهابات المثانة بالاستخدام المنتظم.' },
      ],
      botanicalFacts: {
        family: 'عائلة Poaceae (النجيليات)',
        nativeRegion: 'أصيل المكسيك وأمريكا الوسطى. يُزرع الذرة الآن عالمياً في جميع المناطق المعتدلة والاستوائية.',
        growthHabit: 'الذرة نبات حولي طويل القامة (2-3 أمتار). الخيوط تظهر أعلى الكيزان قبيل التلقيح.',
        activeCompounds: 'ميابيانين، كيرسيتين، ألانتوئين، حمض الكلوروجينيك، هورديسين، أملاح البوتاسيوم.',
        cultivationNotes: 'مستخدمة في طب الهنود الأمريكيين منذ آلاف السنين. لا تزال في دساتير الأدوية الأوروبية والفرنسية كعلاج مساعد لاضطرابات المسالك.',
      },
      preparation: [
        { method: 'شاي خيوط الذرة', desc: 'اجمع خيوط الذرة الطازجة عند شراء الذرة. اغسلها وانقع 4 غ في 300 مل ماء مغلي لـ 15 دقيقة. صفّ واشرب دافئاً ثلاث مرات يومياً.', bestFor: 'التهاب المثانة الخفيف والاحتباس البولي' },
        { method: 'مستخلص جاهز', desc: 'تتوفر كبسولات وقطرات مستخلص خيوط الذرة في محلات المنتجات الطبيعية. اتبع تعليمات المُصنّع.', bestFor: 'الراحة والجرعة المُتحكَّم بها' },
      ],
    },

    pygeum: {
      name: 'بيجيوم',
      shortDescription: 'علاج أفريقي تقليدي لتضخّم البروستات',
      description: 'بيجيوم (Prunus africana) شجرة استوائية أفريقية تُستخلص من لحائها مركّبات فيتوستيرولية وتربينية تثبّط تضخّم البروستات الحميد (BPH). تؤكد تجارب سريرية متعددة تحسّنه في أعراض المسالك البولية السفلية مقارنةً بالغفل.',
      symptoms: ['تضخّم البروستات الحميد', 'ضعف تدفق البول', 'التبوّل الليلي المتكرر (النكتيوريا)', 'بقايا البول بعد التبوّل'],
      warnings: [
        'لا يُعالج سرطان البروستات؛ الفحص الدوري ضروري',
        'استشر الطبيب إذا ارتفع PSA',
        'اختر منتجات مُعتمدة بالاستدامة لأن الأشجار مهددة بالانقراض',
      ],
      activeConstituents: [
        { name: 'β-سيتوستيرول', percentage: '', effect: 'يثبّط إنزيم 5-ألفا ريداكتاز مما يُقلّل DHT المُحفّز لنمو البروستات' },
        { name: 'ن-دوكوسانول (فيتوستيرول)', percentage: '', effect: 'يُساهم في تثبيط نمو خلايا البروستات' },
        { name: 'أتراتيت (ترفينويد)', percentage: '', effect: 'يُقلّل الالتهاب وذمة الغدة' },
        { name: 'فيروليك أسيد وأوليانوليك أسيد', percentage: '', effect: 'مضادان للالتهاب ويثبّطان عوامل النمو' },
      ],
      moa: [
        { title: 'تثبيط 5-ألفا ريداكتاز', detail: 'β-سيتوستيرول يُقلّل تحويل التستوستيرون إلى DHT الذي يُحفّز تضخّم خلايا البروستات' },
        { title: 'تثبيط عوامل النمو', detail: 'يُثبّط EGF وIGF-1 اللذين يُحفّزان تضخّم الغدة' },
        { title: 'تقليل الوذمة والالتهاب', detail: 'الأتراتيت يُقلّل الالتهاب والوذمة في غدة البروستات' },
        { title: 'حماية المثانة', detail: 'يحمي الغشاء المخاطي للمثانة من الضغط المزمن' },
      ],
      uses: ['تخفيف أعراض BPH والمسالك السفلية', 'تحسين قوة تدفق البول', 'تقليل التبوّل الليلي', 'حماية الغشاء المخاطي للمثانة'],
      howToUse: [
        { method: 'كبسولات مستخلص موحّد', instruction: 'الصياغة الوحيدة الفعّالة الموثّقة سريرياً؛ مع الطعام لتحسين الامتصاص' },
        { method: 'التأثير التدريجي', instruction: 'قد يستغرق 4 إلى 8 أسابيع لظهور التحسّن الكامل' },
      ],
      suitableAgeGroups: [
        { group: 'الرجال البالغون (فوق 50 سنة)', notes: 'الفئة الرئيسية المستفيدة؛ تحت إشراف طبي دائم' },
        { group: 'النساء والأطفال', notes: 'لا يُستخدم' },
      ],
      dosage: {
        standard: 'مستخلص موحّد (13% β-سيتوستيرول): 100 ملغ مرتين يومياً',
        forms: [
          { form: 'مستخلص موحّد (13% β-سيتوستيرول)', dose: '100 ملغ مرتين يومياً (المعيار المدروس سريرياً)' },
        ],
      },
      overdose: {
        symptoms: ['ألم معدي', 'غثيان'],
        management: ['لا سمّية حادة موثّقة بالجرعات المعيارية', 'قلّل الجرعة عند ظهور الأعراض'],
      },
      sideEffects: [
        'اضطراب معدي خفيف وغثيان (نادراً)',
        'تشنج عضلي واضطراب نوم (نادر جداً)',
      ],
      contraindications: [
        'حساسية من نباتات Rosaceae',
        'أمراض الكبد الحادة',
        'الأعراض العصبية المصاحبة لمشكلات البروستات تستوجب تقييماً طبياً أولاً',
      ],
      drugInteractions: [
        'مضادات التخثر: مراقبة التأثير',
        'أدوية BPH الدوائية (Tamsulosin, Finasteride): تآزر محتمل يستوجب مراجعة الطبيب',
      ],
      storage: {
        forms: [
          { form: 'كبسولات', instructions: 'في مكان بارد وجاف بعيداً عن الضوء والرطوبة؛ اتبع تاريخ الصلاحية' },
        ],
      },
      benefits: [
        { icon: 'male', title: 'تقليص تضخّم البروستات', desc: 'يُثبّط DHT ويُقلّل عوامل النمو التي تُحفّز تضخّم الغدة.' },
        { icon: 'water_drop', title: 'تحسين تدفق البول', desc: 'يُقلّل المقاومة في عنق المثانة ويُعزّز قوة التدفق.' },
        { icon: 'bedtime', title: 'تقليل الاستيقاظ الليلي', desc: 'يُخفّض النكتيوريا ويُحسّن جودة النوم.' },
        { icon: 'shield', title: 'حماية الغشاء المخاطي', desc: 'يحمي بطانة المثانة من الالتهاب المزمن.' },
      ],
      botanicalFacts: {
        family: 'عائلة Rosaceae',
        nativeRegion: 'أفريقيا جنوب الصحراء، أساساً الكاميرون ورواندا وكينيا وتنزانيا.',
        growthHabit: 'شجرة دائمة الخضرة تصل إلى 25 متراً؛ اللحاء بنيّ داكن مُتشقّق. الاستخلاص من اللحاء.',
        activeCompounds: 'β-سيتوستيرول، ن-دوكوسانول، أتراتيت، فيروليك أسيد، أوليانوليك أسيد.',
        cultivationNotes: 'مستخدم في طب القبائل الأفريقية التقليدية. مدرج في قائمة الأنواع الأكثر تداولاً في الطب الأفريقي. مُهدَّد بالانقراض بسبب التجارة غير المشروعة.',
      },
      preparation: [
        { method: 'كبسولات مستخلص اللحاء', desc: 'اختر منتجاً موحّداً يحتوي على 13% β-سيتوستيرول. تناول 100 ملغ مرتين يومياً مع الطعام.', bestFor: 'علاج BPH والمسالك السفلية بإشراف طبي' },
      ],
    },

    'saw-palmetto': {
      name: 'سو بالميتو',
      shortDescription: 'أكثر الأعشاب دراسةً لتضخّم البروستات',
      description: 'سو بالميتو (Serenoa repens) نخيل قزم أمريكي شمالي تُستخلص من ثماره مركّبات أسيد دهنية وستيرولية تُعدّ الأكثر بحثاً في مجال BPH عالمياً. مستخلصه الدهني (Lipidosterolic extract) يثبّط 5-ألفا ريداكتاز ويُقلّل الالتهاب البروستاتي.',
      symptoms: ['تضخّم البروستات الحميد', 'صعوبة الإفراغ البولي', 'التبوّل المتكرر ليلاً ونهاراً', 'إحساس عدم إفراغ المثانة'],
      warnings: [
        'لا يُعالج سرطان البروستات',
        'لا يُوقف ارتفاع PSA؛ تابع مع طبيبك',
        'قد يُؤثّر على الهرمونات؛ أبلغ طبيبك قبل جراحة البروستات',
      ],
      activeConstituents: [
        { name: 'أحماض دهنية حرة (لوريك، ميريستيك، أوليك، لينوليك)', percentage: '70-95%', effect: 'المادة الفعّالة الرئيسية في المستخلص الدهني' },
        { name: 'فيتوستيرولات (β-سيتوستيرول)', percentage: '', effect: 'يثبّط 5-ألفا ريداكتاز ويُقلّل DHT' },
        { name: 'فلافونويدات وبوليساكاريدات', percentage: '', effect: 'تُعزّز التأثير المضاد للالتهاب' },
      ],
      moa: [
        { title: 'تثبيط مزدوج لـ 5-ألفا ريداكتاز', detail: 'يثبّط كلا النوعين 1 و2 من الإنزيم بخلاف Finasteride الذي يثبّط النوع 2 فقط' },
        { title: 'تثبيط ارتباط DHT', detail: 'يُثبّط ارتباط DHT بمستقبلاته في خلايا البروستات' },
        { title: 'تثبيط LOX-5', detail: 'يُقلّل اللوكوترينات الالتهابية في البروستات' },
        { title: 'تثبيط مستقبلات الاستروجين', detail: 'يُقلّل ارتباط هرمون الاستروجين بمستقبلاته في البروستات' },
      ],
      uses: ['علاج BPH وأعراض المسالك السفلية', 'تحسين تدفق البول وتقليل المتبقّي', 'تقليل التبوّل الليلي', 'مضاد التهاب البروستات'],
      howToUse: [
        { method: 'مستخلص دهني (Lipidosterolic)', instruction: 'الصياغة الفعّالة؛ الكبسولات المائية أقل فاعلية' },
        { method: 'مع وجبة دسمة', instruction: 'يُحسّن الامتصاص؛ التأثير يتراكم خلال 4 إلى 6 أسابيع' },
      ],
      suitableAgeGroups: [
        { group: 'الرجال البالغون (فوق 45 سنة)', notes: 'الفئة المستفيدة الرئيسية' },
        { group: 'النساء الحوامل', notes: 'مضادٌّ للهرمونات؛ يُتجنّب كلياً' },
        { group: 'الأطفال', notes: 'لا يُعطى' },
      ],
      dosage: {
        standard: 'مستخلص دهني موحّد: 160 ملغ مرتين يومياً',
        forms: [
          { form: 'مستخلص دهني (85-95% أحماض دهنية)', dose: '160 ملغ مرتين يومياً (المعيار السريري)' },
          { form: 'مستخلص دهني جرعة موحّدة', dose: '320 ملغ مرة واحدة يومياً' },
        ],
      },
      overdose: {
        symptoms: ['صداع خفيف', 'دوخة', 'اضطراب هضمي'],
        management: ['آمن جداً في الجرعات الموصى بها', 'قلّل الجرعة عند الإزعاج المعدي'],
      },
      sideEffects: [
        'غثيان خفيف وإسهال أو إمساك (نادراً)',
        'صداع (نادراً)',
        'اضطراب في الرغبة الجنسية (نادر جداً، أقل بكثير من Finasteride)',
      ],
      contraindications: [
        'الحمل والرضاعة (مضاد هرموني)',
        'حساسية من Arecaceae',
        'جرعات عالية مع مميّعات الدم',
      ],
      drugInteractions: [
        'مضادات التخثر (وارفارين): يُضعف تكوين الصفائح مما يزيد خطر النزيف',
        'علاجات هرمونية: تداخل محتمل في مستويات DHT والاستروجين',
        'Finasteride وDutasteride: تأثير مضاعف على مثبّطات 5-ألفا ريداكتاز',
      ],
      storage: {
        forms: [
          { form: 'كبسولات', instructions: 'في مكان بارد وجاف' },
          { form: 'مستخلص سائل', instructions: 'في الثلاجة بعد الفتح' },
        ],
      },
      benefits: [
        { icon: 'male', title: 'مثبّط 5-ألفا ريداكتاز مزدوج', desc: 'يثبّط النوعين 1 و2 من الإنزيم لتقليل DHT بفاعلية فائقة.' },
        { icon: 'water_drop', title: 'تحسين تدفق البول', desc: 'يُقلّل المقاومة في مجرى البول ويُحسّن الإفراغ.' },
        { icon: 'bedtime', title: 'نوم أفضل', desc: 'يُقلّل الاستيقاظ الليلي المتكرر للتبوّل.' },
        { icon: 'science', title: 'الأكثر دراسةً', desc: 'أكثر من 20 تجربة سريرية عشوائية تؤكد فاعليته في BPH.' },
      ],
      botanicalFacts: {
        family: 'عائلة Arecaceae (النخيليات)',
        nativeRegion: 'السواحل الجنوبية الشرقية للولايات المتحدة (فلوريدا، جورجيا، كارولينا).',
        growthHabit: 'نخيل قزم يصل إلى 2-4 أمتار؛ أوراق مروحية مُدبَّبة؛ ثمار بيضاوية سوداء بنفسجية عند النضج.',
        activeCompounds: 'حمض اللوريك، حمض الميريستيك، حمض الأوليك، β-سيتوستيرول، كامبستيرول.',
        cultivationNotes: 'استخدمه السكان الأصليون للغذاء والدواء لآلاف السنين. ألمانيا وإيطاليا وفرنسا تعتمده رسمياً علاجاً لـBPH.',
      },
      preparation: [
        { method: 'كبسولات المستخلص الدهني', desc: 'احرص على اختيار مستخلص دهني (Lipidosterolic) وليس مائياً. تناول 160 ملغ مرتين يومياً مع وجبة دسمة للامتصاص الأمثل.', bestFor: 'علاج BPH والمسالك السفلية بإشراف طبي' },
      ],
    },

    'stinging-nettle-root': {
      name: 'جذر القراص',
      shortDescription: 'جذر القراص لصحة البروستات',
      description: 'جذر القراص (Urtica dioica radix) يختلف كيميائياً اختلافاً جوهرياً عن أوراقه. يحتوي على ليكتينات وبوليساكاريدات وفيتوستيرولات تثبّط ارتباط SHBG بالتستوستيرون وتُقلّل تضخّم البروستات الحميد. يُستخدم كثيراً مع سو بالميتو لتعزيز التأثير.',
      symptoms: ['تضخّم البروستات الحميد', 'ضعف تدفق البول', 'التبوّل الليلي المتكرر', 'التهاب البروستات المزمن'],
      warnings: [
        'للجذر فقط؛ أوراق القراص لها تطبيقات مختلفة تماماً',
        'لا يُعالج سرطان البروستات',
      ],
      activeConstituents: [
        { name: 'UDA ليكتين (Urtica dioica agglutinin)', percentage: '', effect: 'يثبّط ارتباط بروتين SHBG بمستقبلاته في خلايا البروستات' },
        { name: 'بوليساكاريدات', percentage: '', effect: 'تُثبّط التصاق البكتيريا وتُقلّل الالتهاب في البروستات' },
        { name: 'β-سيتوستيرول', percentage: '', effect: 'يثبّط تحوّل التستوستيرون إلى DHT جزئياً' },
        { name: 'حمض الكافيك وأوكوماريك', percentage: '', effect: 'مضادان للأكسدة والالتهاب' },
      ],
      moa: [
        { title: 'تثبيط SHBG', detail: 'UDA يثبّط ارتباط بروتين SHBG بمستقبلاته في خلايا البروستات مما يُقلّل التشغيل الهرموني لنمو الغدة' },
        { title: 'تثبيط جزئي لـDHT', detail: 'β-سيتوستيرول يثبّط تحوّل التستوستيرون إلى DHT جزئياً' },
        { title: 'مضاد التهاب البروستات', detail: 'البوليساكاريدات تُثبّط التصاق البكتيريا وتُقلّل الالتهاب في أنسجة البروستات' },
      ],
      uses: ['علاج BPH مع سو بالميتو أو بمفرده', 'تحسين تدفق البول وتقليل الاحتجاز', 'مضاد التهاب البروستات المزمن', 'تقليل التبوّل الليلي'],
      howToUse: [
        { method: 'كبسولات مستخلص الجذر', instruction: 'يُدمج كثيراً مع سو بالميتو في المنتجات المركّبة لـ BPH' },
        { method: 'التأثير التدريجي', instruction: 'يستغرق 3 إلى 6 أسابيع لظهور التحسّن الكامل' },
      ],
      suitableAgeGroups: [
        { group: 'الرجال البالغون (فوق 45 سنة)', notes: 'الفئة المستهدفة لعلاج BPH' },
        { group: 'النساء الحوامل', notes: 'لا يُستخدم' },
        { group: 'الأطفال', notes: 'لا يُعطى بجرعات علاجية' },
      ],
      dosage: {
        standard: 'مستخلص جذر القراص (5:1): 300 إلى 600 ملغ مرتين يومياً',
        forms: [
          { form: 'مستخلص جذر القراص (5:1)', dose: '300 إلى 600 ملغ مرتين يومياً' },
          { form: 'تركيبة مشتركة (جذر القراص + سو بالميتو)', dose: '300 ملغ جذر قراص + 160 ملغ سو بالميتو مرتين يومياً' },
        ],
      },
      overdose: {
        symptoms: ['إزعاج معدي خفيف', 'حساسية جلدية (نادراً)'],
        management: ['آمن بالجرعات المعيارية', 'قلّل الجرعة عند الإزعاج'],
      },
      sideEffects: [
        'إزعاج معدي معوي خفيف (نادراً)',
        'تفاعل تحسسي (نادر جداً)',
      ],
      contraindications: [
        'حساسية من نبات القراص',
        'الحمل والرضاعة',
        'أعراض تُشير لسرطان البروستات تستوجب تقييماً طبياً أولاً',
      ],
      drugInteractions: [
        'مدرّات البول: تأثير مضاعف في احتباس السوائل',
        'مضادات التخثر: مراقبة',
        'أدوية BPH (Tamsulosin, Alpha-blockers): تآزر يستوجب متابعة طبية',
      ],
      storage: {
        forms: [
          { form: 'كبسولات', instructions: 'في مكان بارد وجاف بعيداً عن الرطوبة؛ اتبع تاريخ الصلاحية' },
        ],
      },
      benefits: [
        { icon: 'male', title: 'تثبيط SHBG', desc: 'يمنع ارتباط بروتين SHBG بخلايا البروستات مما يُقلّل التحفيز الهرموني للتضخّم.' },
        { icon: 'water_drop', title: 'تحسين الإفراغ البولي', desc: 'يُقلّل المقاومة في مجرى البول ويُحسّن تدفقه.' },
        { icon: 'shield', title: 'مضاد التهاب', desc: 'بوليساكاريداته تُقلّل الالتهاب المزمن في أنسجة البروستات.' },
        { icon: 'science', title: 'تآزر مع سو بالميتو', desc: 'التركيبة المشتركة أفضل من كل منهما منفرداً في التجارب السريرية.' },
      ],
      botanicalFacts: {
        family: 'عائلة Urticaceae (القراصيات)',
        nativeRegion: 'مناطق معتدلة في أوروبا وآسيا وأمريكا الشمالية وأفريقيا الشمالية.',
        growthHabit: 'عشبة معمّرة قد تصل إلى مترين. الجذر أبيض اللون كثيف الليف. الأوراق محروقة (لاسعة).',
        activeCompounds: 'UDA ليكتين، β-سيتوستيرول، كامبستيرول، بوليساكاريدات، ليكنان، حمض الكافيك.',
        cultivationNotes: 'مستخدم في الطب الأوروبي الشعبي للمسالك البولية والبروستات منذ القرن السادس عشر. مُدرج في دستور الأدوية الألماني (Commission E) لـBPH.',
      },
      preparation: [
        { method: 'كبسولات مستخلص جذر القراص', desc: 'تناول 300-600 ملغ مستخلص موحّد (5:1) مرتين يومياً مع الطعام. ابحث عن منتجات مُدمجة مع سو بالميتو لتأثير أفضل.', bestFor: 'علاج BPH بإشراف طبي' },
      ],
    },

    cranberry: {
      name: 'التوت البري (كرانبيري)',
      shortDescription: 'واقي المسالك البولية الأمثل للمرأة',
      description: 'التوت البري (Vaccinium macrocarpon) فاكهة شمال أمريكية غنية بالبروانثوسيانيدينات (PAC) من النوع-A، وهي المركّبات الفريدة التي تمنع التصاق بكتيريا E. coli فائقة الوبر بجدار المسالك البولية. الأدلة السريرية تؤيد دوره في الوقاية من التهابات المسالك المتكررة لدى النساء.',
      symptoms: ['التهاب المسالك البولية المتكرر', 'الوقاية من الالتهاب البولي', 'دعم صحة المسالك خلال الحمل'],
      warnings: [
        'للوقاية لا للعلاج؛ لا يُعوّض المضادات الحيوية في الحالات الحادة',
        'جرعات عالية تزيد خطر حصوات الأوكسالات',
        'يُؤثّر على مستوى الوارفارين في الدم',
      ],
      activeConstituents: [
        { name: 'بروانثوسيانيدينات نوع-A (PAC)', percentage: '36 ملغ في الجرعة الوقائية', effect: 'المادة الفريدة التي تمنع التصاق E. coli بجدار المسالك البولية' },
        { name: 'حمض الكينيك', percentage: '', effect: 'يُحوَّل إلى حمض الهيبوريك ويُحمّض البول' },
        { name: 'فلافونويدات (كيرسيتين، ميريسيتين)', percentage: '', effect: 'مضادة للأكسدة وتُعزّز صحة القلب والأوعية' },
        { name: 'فيتامين C', percentage: '', effect: 'مضاد للأكسدة ومعزّز للمناعة' },
      ],
      moa: [
        { title: 'منع التصاق E. coli', detail: 'PAC نوع-A يُغيّر بنية أهداب بكتيريا E. coli مما يمنع ارتباطها بمستقبلات المانوز-المقاومة' },
        { title: 'تحميض البول', detail: 'حمض الكينيك يُحوَّل إلى حمض الهيبوريك مما يُحمّض البول ويُعيق نمو البكتيريا' },
        { title: 'الفعل الفريد لـPAC نوع-A', detail: 'هذا التأثير فريد ولا تشاركه PAC نوع-B الموجودة في التوت الأزرق أو العنب' },
      ],
      uses: ['الوقاية من التهابات المسالك البولية المتكررة', 'دعم صحة المسالك خلال الحمل (باعتدال)', 'مضاد للأكسدة العام', 'تعزيز صحة القلب والأوعية'],
      howToUse: [
        { method: 'عصير غير محلّى', instruction: 'العصير الطبيعي غير المحلّى هو الأمثل؛ العصير المحلّى يُعدّم جزءاً كبيراً من الفائدة' },
        { method: 'مكمّلات PAC الموحّدة', instruction: 'اختر مكمّلاً يحتوي على 36 ملغ على الأقل من PAC نوع-A' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والأطفال (فوق 12 سنة)', notes: 'الجرعة الكاملة آمنة' },
        { group: 'النساء الحوامل', notes: 'العصير غير المحلّى بكميات معتدلة آمن' },
        { group: 'مرضى حصوات الكلى', notes: 'احترس من الجرعات العالية' },
      ],
      dosage: {
        standard: 'عصير غير محلّى 240 إلى 300 مل مرتين يومياً',
        forms: [
          { form: 'عصير غير محلّى', dose: '240 إلى 300 مل مرتين يومياً' },
          { form: 'مكمّل PAC موحّد', dose: '36 إلى 72 ملغ PAC يومياً' },
          { form: 'مستخلص مُركّز', dose: '400 إلى 500 ملغ مرتين يومياً' },
        ],
      },
      overdose: {
        symptoms: ['زيادة حمض الأوكساليك وخطر الحصوات (كميات أكبر من لترين يومياً)'],
        management: ['لا سمّية حادة موثّقة', 'اشطف الفم بعد العصير الحمضي لحماية مينا الأسنان'],
      },
      sideEffects: [
        'اضطراب معدي وإسهال بالكميات الكبيرة (نادراً)',
        'تآكل مينا الأسنان من حموضة العصير',
      ],
      contraindications: [
        'حصوات الكلى الأوكساليتية بجرعات عالية',
        'الحساسية من مجموعة Vaccinium',
        'مع وارفارين: تحت متابعة طبية دقيقة',
      ],
      drugInteractions: [
        'وارفارين: يزيد مستوى الدواء في الدم مما يرفع خطر النزيف',
        'أدوية السكري: قد يُعدّل استجابة الغلوكوز',
      ],
      storage: {
        forms: [
          { form: 'عصير مفتوح', instructions: 'في الثلاجة بعد الفتح حتى أسبوع' },
          { form: 'كبسولات/أقراص', instructions: 'وعاء محكم بعيداً عن الرطوبة في درجة الغرفة' },
        ],
      },
      benefits: [
        { icon: 'vaccines', title: 'مانع التصاق البكتيريا', desc: 'PAC نوع-A يمنع E. coli من الارتباط بجدار المثانة.' },
        { icon: 'shield', title: 'وقاية من الالتهابات المتكررة', desc: 'ثبت سريرياً تقليل تكرار التهابات المسالك في النساء.' },
        { icon: 'favorite', title: 'صحة القلب والأوعية', desc: 'فلافونوياته تُقلّل الأكسدة الدهنية وتحمي الأوعية الدقيقة.' },
        { icon: 'spa', title: 'مضاد أكسدة قوي', desc: 'فيتامين C والبروانثوسيانيدينات يحمان الخلايا من الإجهاد التأكسدي.' },
      ],
      botanicalFacts: {
        family: 'عائلة Ericaceae (الخلنجيات)',
        nativeRegion: 'شمال شرق أمريكا الشمالية (ماساتشوستس، ويسكونسن، كندا). أكبر مُنتِج عالمي: الولايات المتحدة.',
        growthHabit: 'شجيرة زاحفة دائمة الخضرة؛ ثمار حمراء حمضية؛ تنمو في المستنقعات الرملية.',
        activeCompounds: 'PAC نوع-A، حمض الكينيك، حمض الهيبوريك، أنثوسيانينات، كيرسيتين، ميريسيتين، فيتامين C.',
        cultivationNotes: 'استخدمته قبائل الهنود الأمريكيين (Wampanoag) غذاءً وعلاجاً للجروح قبل وصول الأوروبيين. أبحاثه السريرية في الحماية من UTI تعدّ من الأقوى في فئة الأعشاب الوقائية.',
      },
      preparation: [
        { method: 'عصير التوت البري غير المحلّى', desc: 'اشرب 240-300 مل عصير طبيعي غير محلّى مرتين يومياً. يمكن تخفيفه بالماء إذا كان حمضياً جداً.', bestFor: 'الوقاية اليومية من التهابات المسالك المتكررة' },
        { method: 'كبسولات PAC', desc: 'اختر مكمّلاً موحّداً يحتوي على ≥36 ملغ PAC نوع-A. يُؤخذ بعد الإفطار والعشاء.', bestFor: 'الجرعة الوقائية المُتحكَّم بها بدلاً من العصير' },
      ],
    },

    thyme: {
      name: 'الزعتر',
      shortDescription: 'عشبة شفوية ثلاثية المفعول: موسّعة للقصبات وطاردة للبلغم ومطهّرة للميكروبات التنفسية؛ من أكثر الأعشاب توثيقاً لعلاج السعال المنتج والتهاب الشعب الهوائية الحاد.',
      description: 'الزعتر (Thymus vulgaris، عائلة الشفويات) من أكثر الأعشاب الطبية توثيقاً علمياً لأمراض الجهاز التنفسي. يحتوي زيته الأساسي على ثيمول (30-70%) وكارفاكرول (3-15%)، يعملان بآليات متكاملة: توسيع القصبات عبر حصار قنوات الكالسيوم وتحفيز مستقبلات بيتا-2، وإفراز مخاط سائل أقل لزوجة يُسهّل طرحه، وتدمير أغشية البكتيريا التنفسية. تُكمّل الفلافونويدات (لوتيولين، أبيجينين، ثيمونين، إيريودكتيول) وحمض الروزماريك والصابونين تأثيرات الزيت الأساسي بخصائص مضادة للالتهاب والتشنج.',
      symptoms: ['السعال المنتج والجاف', 'التهاب الشعب الهوائية الحاد والمزمن', 'الزكام والتهاب الحلق والبلعوم', 'السعال الديكي (داء السعال الجهير)'],
      warnings: [
        'الزيت الأساسي النقي مُركَّز للغاية؛ يُستخدم مُخفَّفاً فقط ولا يُشرب غير مُخفَّف أبداً.',
        'اضطرابات الغدة الدرقية: قد يتداخل ثيمول مع استقلاب هرمونات الغدة؛ استخدم بحذر مع مراقبة الوظيفة الدرقية.',
        'الحمل: الكميات الطهوية الصغيرة آمنة؛ يُتجنّب المستخلص المُركَّز والزيت الأساسي.',
        'حساسية نباتات الشفويات (نعناع، إكليل الجبل، خزامى): تفاعل تحسسي متقاطع محتمل.',
      ],
      activeConstituents: [
        { name: 'الزيوت الأساسية الفينولية المتطايرة (1.0% إلى 2.5%)', detail: 'تتمحور أساساً حول المؤشّرَين المتطايرَين: الثيمول (30%–70%) والكارفاكرول (3%–15%). وهما مطهّران طبيعيان معترف بهما قانونياً، يمتلكان خصائص مضادة للبكتيريا والفطريات بشكل مكثّف.' },
        { name: 'فلافونويدات', detail: 'غنيّة جداً بالفلافونويدات متعددة المثوكسيل، بما فيها اللوتيولين والأبيجينين والثيمونين والإيريودكتيول، التي تعمل كموسّعات قصبية موضعية فعّالة.' },
        { name: 'حمض الروزماريك', detail: 'حمض كربوكسيلي بولي فينولي متخصص يُظهر نشاطاً خلوياً ممتازاً مضاداً للأكسدة والالتهاب ومُزيل الجذور الحرة.' },
        { name: 'صابونين', detail: 'صابونينات تيربينية ثلاثية ثانوية تُسهم بشكل ملحوظ في عملية الطرد البلغمي الفيزيائي عن طريق تخفيف قوام المخاط.' },
      ],
      moa: [
        { title: 'مسار موسّع للقصبات ومضاد للتشنج', detail: 'تُحاصر الفلافونويدات والفينولات المتطايرة بشكل تنافسي قنوات الكالسيوم الجهدية وتتفاعل مع مستقبلات بيتا-2 الأدرينالية في العضلات الملساء القصبية، مُحدثةً استرخاءً وكابحةً نوبات السعال التشنجي.' },
        { title: 'فعل محرّك للإفراز ومُخفّف للبلغم', detail: 'تُحفّز صابونينات وزيوت الزعتر الأساسية الحركة الهدبية في شجرة القصبات وتُخفّف المخاط الكثيف كيميائياً، مُقلّلةً من مرونته ومُسرَّعةً طرحه.' },
        { title: 'فعل مطهّر مباشر', detail: 'يُحطّم الثيمول والكارفاكرول أغشية الخلايا البكتيرية عن طريق تفاعلات أُحادية الميل الشحمي، مما يُقلّل العبء الميكروبي في الجهاز التنفسي العلوي.' },
      ],
      uses: ['تخفيف السعال المنتج المرتبط بالزكام.', 'علاج داعم في التهاب الشعب الهوائية الحاد والمزمن.', 'تخفيف احتقان الجهاز التنفسي وتهيّج الحلق.'],
      howToUse: [
        { method: 'طريقة التحضير', instruction: 'انقع 1-2 ملعقة صغيرة من عشب الزعتر المجفف في كوب ماء مغلي لمدة 10 دقائق في إناء مُغطّى للحفاظ على المكوّنات المتطايرة، ثم صفّه جيداً وتناوله دافئاً.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال', notes: 'يُعطى فقط بجرعات أطفال صغيرة ومحسوبة (عبر أشربة صيدلانية معتمدة)؛ الزيت الأساسي الخام مُضاد للاستطباب.' },
        { group: 'الحوامل والمُرضعات', notes: 'آمن جداً بالكميات الطهوية الاعتيادية؛ يجب تجنّب الجرعات الدوائية والمستخلصات المُركَّزة بسبب الاحتمال الرحمي المُحرّض.' },
        { group: 'المسنّون', notes: 'آمن عموماً للاستهلاك بالكميات العلاجية الاعتيادية.' },
      ],
      sideEffects: ['اضطراب معدي معوي خفيف مؤقت، أو حموضة، أو ردود فعل تحسسية موضعية.'],
      contraindications: ['حساسية جهازية موثّقة أو فرط حساسية من Thymus vulgaris أو أي جنس نباتي آخر ضمن عائلة الشفويات (Lamiaceae).'],
      drugInteractions: ['لا توجد تداخلات دوائية رئيسية موثّقة، غير أنه قد يُعزّز نظرياً تأثيرات الأدوية الحالّة للبلغم أو المُفرزة للمخاط المُستخدمة بالتزامن.'],
      storage: { forms: [{ form: 'التخزين', instructions: 'يُحفظ في مكان بارد وجاف بنيوياً، معزول تماماً عن الضوء والرطوبة وتعرّض الهواء الجوي.' }] },
      dosage: {
        standard: 'البالغون والمراهقون فوق 12 سنة: 1 إلى 2 غرام من العشب المجفف يُحضَّر كنقيع، يُتناول 3 إلى 4 مرات يومياً. بديلاً: 1 إلى 2 مل من المستخلص السائل (نسبة 1:1) 3 مرات يومياً.\nالأطفال (4-12 سنة): يُستخدم المستخلصات الصيدلانية الموحّدة فقط، عادةً 2.5 إلى 5 مل من الشراب، 3 مرات يومياً.',
      },
      overdose: {
        symptoms: ['تهيّج حاد في الجهاز الهضمي، وغثيان، وتقيؤ، ودوار، وصداع، واكتئاب الجهاز العصبي المركزي، وتسرّع التنفس.'],
        management: ['أوقف الاستخدام فوراً، وطبّق الترطيب الداعم، واطلب التقييم الطبي السريري العاجل إذا كان التسمم بالزيت الأساسي مشتبهاً به.'],
      },
      factsAndMyths: [
        { myth: 'يمكن لمستخلص الزعتر أن يحل محل المضادات الحيوية الاصطناعية الموصوفة تماماً لتقيّح الرئة البكتيري العميق الشديد.', fact: 'يُقدّم الزعتر إدارة رائعة للأعراض مُثبَتة سريرياً للتهاب الشعب الهوائية والسعال، لكن الالتهابات الرئوية الغازية العميقة الشديدة تستلزم صرامةً مضادات حيوية جهازية سريرية.' },
      ],
      benefits: [
        { icon: 'air', title: 'ثلاثي المفعول للقصبات', desc: 'يعمل كموسّع للقصبات وحالّ للبلغم ومطهّر في آنٍ واحد، مما يُعالج دورة السعال والتهاب الشعب كاملة.' },
        { icon: 'water_drop', title: 'طارد بلغم إفرازي', desc: 'يُحفّز غدد القصبات على إفراز مخاط أكثر سيولة ويُقلّل توتره السطحي، مما يُمكّن السعال المنتج من تنظيف مجرى الهواء بكفاءة.' },
        { icon: 'shield', title: 'مضاد ميكروبي واسع الطيف', desc: 'الثيمول يُدمّر أغشية العقدية والمستدمية والكلبسيللا، مع تثبيط الفلافونويدات للالتهاب المخاطي في آنٍ واحد.' },
      ],
      botanicalFacts: {
        family: 'عائلة Lamiaceae (الشفويات)',
        nativeRegion: 'حوض البحر الأبيض المتوسط وجنوب أوروبا. يُزرع الآن عالمياً كعشبة طهوية وطبية.',
        growthHabit: 'شجيرة صغيرة معمّرة تصل إلى 30-40 سم؛ أوراق صغيرة ضيقة خضراء داكنة؛ أزهار بنفسجية صغيرة.',
        activeCompounds: 'ثيمول، كارفاكرول، بي-سيمين، لينالول، لوتيولين، أبيجينين، ثيمونين، إيريودكتيول، حمض الروزماريك، صابونين.',
        cultivationNotes: 'استخدمه المصريون القدماء في التحنيط والإغريق في تطهير المعابد. عُزل الثيمول عام 1719 وأصبح أساس غسول Listerine. مُدرَج في دستور الأدوية الأوروبي (EMA) كدواء عشبي تقليدي للسعال والتهاب الشعب.',
      },
      preparation: [
        { method: 'شاي الزعتر بالعسل', desc: 'انقع 1-2 غ زعتر مجفف في 150 مل ماء مغلي مُغطّى لـ 10 دقائق. صفّ وأضف ملعقة عسل وعصير ليمون. اشرب حتى 4 مرات يومياً.', bestFor: 'السعال المنتج والتهاب الشعب الهوائية والتهاب الحلق' },
        { method: 'استنشاق البخار', desc: 'أضف 3-4 قطرات زيت زعتر مُخفَّف (2%) إلى وعاء ماء ساخن. استنشق البخار 10 دقائق مرتين يومياً.', bestFor: 'احتقان الجيوب الأنفية والتهاب الممرات التنفسية العليا' },
      ],
    },

    anise: {
      name: 'اليانسون',
      shortDescription: 'بذرة خيمية غنية بالأنيثول: تحفّز خلايا الظهارة الهدبية على إفراز مخاط سائل، وتُرخّي العضلة الملساء القصبية والمعدية المعوية، وتُلطّف الغشاء المخاطي لتخفيف السعال المنتج والتشنج القصبي.',
      description: 'اليانسون (Pimpinella anisum، عائلة الخيميات) واحدة من أقدم الأعشاب الطبية الموثّقة، وردت في البردية المصرية القديمة. يهيمن ترانس-أنيثول (80-90%) على زيته الأساسي مُسبَّباً التأثيرات الإفرازية والمضادة للتشنج والملطّفة. تُكمّل الفلافونويدات الغليكوسيدية (كيرسيترين، روتين، أيزوكيرسيترين، لوتيولين) والكومارينات (أمبيليفيرون، سكوبوليتين) التأثير المضاد للالتهاب والتشنج. اعترفت EMA به دواءً عشبياً تقليدياً لطرد البلغم والتهاب الشعب.',
      symptoms: ['السعال المنتج والجاف', 'التهاب الشعب الهوائية', 'التشنج القصبي المصاحب للسعال', 'انتفاخ البطن والغازات المعوية', 'التهاب الحلق'],
      warnings: [
        'الزيت الأساسي النقي سام عصبياً بالجرعات العالية: يمكن أن يسبب نوبات تشنجية شبه صرعية وإثارة الجهاز العصبي المركزي. لا تُشرب الزيت الأساسي غير المُخفَّف أبداً.',
        'حساسية الخيميات والأنيثول: قد يُحدث تفاعلاً متقاطعاً مع الشمر والجزر والكرفس والبقدونس.',
        'الحمل: الكميات الطهوية آمنة؛ تُتجنّب الجرعات العلاجية الكبيرة والزيت الأساسي كونه مُحرّضاً خفيفاً للرحم.',
        'الأطفال دون 4 سنوات: لا تُعطى المستخلصات المُركَّزة لما قد يُحدثه الأنيثول من تأثيرات على الجهاز العصبي والتنفس.',
      ],
      activeConstituents: [
        { name: 'الزيوت الأساسية المتطايرة (2% إلى 6%)', detail: 'المؤشّر الفعّال الرئيسي هو ترانس-الأنيثول (يُشكّل 80%–90% من إجمالي تركيبة الزيت المتطاير). وتشمل المكوّنات الثانوية: الإيستراجول (ميثيل الكافيكول)، وألدهيد الأنيس، وسيودوأيزويوجينيل 2-ميثيل بيوتيرات.' },
        { name: 'فلافونويدات', detail: 'غنيّة بالغليكوسيدات الفلافونولية، في مقدّمتها الكيرسيترين والروتين والأيزوكيرسيترين واللوتيولين، مما يوفّر دعماً خلوياً ثانوياً مضاداً للأكسدة ومُهدئاً للأنسجة.' },
        { name: 'كومارينات', detail: 'تركيزات ثانوية من الأمبيليفيرون والسكوبوليتين، تُسهم في آليات مضادة للالتهاب الموضعية الشاملة.' },
        { name: 'فينيل بروبانويدات', detail: 'مركّبات عضوية تُحرّك بنيوياً الملمح الرائحي المميّز والقدرات الفيزيولوجية المضادة للتشنج.' },
      ],
      moa: [
        { title: 'مسار طارد بلغم ومُخفّف للإفرازات', detail: 'يُحفّز ترانس-الأنيثول النشاط الإفرازي لخلايا الظهارة الهدبية في الجهاز التنفسي، مما يزيد حجم الإفرازات القصبية ويُقلّل لزوجتها، مما يُيسّر إزالتها عبر السلّم الهدبي المخاطي.' },
        { title: 'مضاد للتشنج وإرخاء قصبي', detail: 'تعمل الزيوت المتطايرة لليانسون كمُرخٍ موضعي للعضلة الملساء داخل القصبة الهوائية والشعب الهوائية، مُضادةً للمحفّزات التشنجية ومُخفّفةً نوبات السعال اللاإرادي.' },
        { title: 'تأثير مُلطّف', detail: 'تُمارس المكوّنات المتطايرة والمائية تأثيراً مُهدّئاً على الغشاء المخاطي، مما يُقلّل حساسية مستقبلات السعال الطرفية في الحلق.' },
      ],
      uses: ['الارتياح الداعم من السعال المنتج الخفيف واحتقان الجهاز التنفسي العلوي.', 'تهدئة تهيّج الحلق الجاف والمُدغدِغ.', 'تخفيف الانتفاخ وطرح الغازات المعوية المصاحبة.'],
      howToUse: [
        { method: 'طريقة التحضير', instruction: 'انقع ملعقة صغيرة من بذور اليانسون المُدقّقة في كوب ماء مغلي لمدة 10 دقائق في إناء مُغطّى (لمنع فقدان الزيوت العلاجية المتطايرة)، صفّه تماماً، وتناوله دافئاً.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال', notes: 'آمن بكميات غذائية تقليدية صغيرة تحت إشراف البالغين؛ يُتجنّب الزيوت الخالصة المُركَّزة.' },
        { group: 'الحوامل والمُرضعات', notes: 'يُستخدم بحذر شديد؛ يُتجنّب الجرعات الدوائية الكبيرة بسبب النشاط الاستروجيني المحتمل للأنيثول.' },
        { group: 'المسنّون', notes: 'آمن عموماً للاستهلاك بكميات معتدلة منتظمة.' },
      ],
      sideEffects: ['تخدير خفيف عَرَضي، أو إزعاج معدي، أو ردود فعل تحسسية جلدية/تنفسية.'],
      contraindications: ['فرط حساسية معروف أو حساسية متقاطعة من أفراد عائلة الخيميات (Apiaceae) (مثل الشمر والكرفس والكمّون).'],
      drugInteractions: ['قد يُعزّز نظرياً التأثيرات الدوائية لمثبّطات الجهاز العصبي المركزي (CNS) أو المهدّئات بسبب خصائصه المُهدّئة الخفيفة.'],
      storage: { forms: [{ form: 'التخزين', instructions: 'احفظ البذور في حاويات مُحكمة الإغلاق في بيئة باردة وجافة بعيداً عن الرطوبة والحرارة الهيكلية.' }] },
      dosage: {
        standard: 'البالغون والمراهقون فوق 12 سنة: 1 إلى 3.5 غرام من بذور اليانسون الكاملة أو المطحونة حديثاً يُحضَّر كنقيع، يُتناول 3 مرات يومياً.\nالأطفال (4-12 سنة): 0.5 إلى 1 غرام من البذور المطحونة كنقيع، مرتين إلى ثلاث مرات يومياً تحت الإشراف.\nالأشربة الموحّدة: اتبع إرشادات الشركة المُصنّعة المُستهدفة (عادةً 5-10 مل، 3 مرات يومياً).',
      },
      overdose: {
        symptoms: ['دوار حاد، وغثيان، وتقيؤ، ونعاس، وفرط حركية الجهاز الهضمي، وتأثيرات عصبية سامة أو شبه صرعية (مرتبطة بسمية الزيت الأساسي بالجرعات العالية).'],
        management: ['أوقف التناول فوراً، حافظ على الترطيب الجهازي الأمثل، استرح، واطلب الرعاية السريرية العاجلة إذا ظهرت أعراض عصبية أو معدية معوية حادة.'],
      },
      factsAndMyths: [
        { myth: 'شرب المزيد من نقيع اليانسون سيعالج فوراً ويشفي الالتهاب الرئوي البكتيري الشديد.', fact: 'اليانسون علاج نباتي مُزيل للإفرازات يُخفّف السعال ويُسيّل المخاط، لكنه لا يملك قدرة مضادات حيوية جهازية قاطعة للقضاء على العدوى الرئوية البكتيرية العميقة.' },
      ],
      benefits: [
        { icon: 'air', title: 'طارد بلغم إفرازي', desc: 'الأنيثول يُحفّز الخلايا الهدبية القصبية على إنتاج مخاط أكثر سيولة مع تعزيز التردد الهدبي، مما يُسهّل السعال المنتج لتنظيف مجرى الهواء.' },
        { icon: 'spa', title: 'مضاد للتشنج التنفسي والهضمي', desc: 'يُعالج تشنج العضلة الملساء القصبية وتقلصات الأمعاء في آنٍ واحد، وهو أمر فريد بين أعشاب الجهاز التنفسي.' },
        { icon: 'water_drop', title: 'مُلطّف للغشاء المخاطي', desc: 'مكوّنات الزيت الأساسي تُلطّف الغشاء المخاطي للبلعوم والقصبات وتُخفّف تهيّج مستقبلات السعال، وهو فعّال لكلٍّ من السعال المنتج والجاف.' },
      ],
      botanicalFacts: {
        family: 'عائلة Apiaceae (الخيميات)',
        nativeRegion: 'البحر الأبيض المتوسط الشرقي ومصر والشرق الأوسط. يُزرع الآن في مصر والهند وتركيا وأوروبا.',
        growthHabit: 'عشبة حولية تصل إلى متر واحد؛ أوراق علوية مُقسَّمة دقيقة؛ نوريات بيضاء خيمية.',
        activeCompounds: 'ترانس-أنيثول، ميثيل كافيكول، كيرسيترين، روتين، أيزوكيرسيترين، لوتيولين، أمبيليفيرون، سكوبوليتين.',
        cultivationNotes: 'مستخدم في مصر القديمة وبلاد الرافدين منذ 4000 سنة. ورد في البردية الطبية المصرية كعلاج للسعال والهضم.',
      },
      preparation: [
        { method: 'شاي اليانسون', desc: 'اجرش ملعقة صغيرة بذور طازجة واتركها في 200 مل ماء مغلي مُغطّى 10-15 دقيقة. صفّ مع العسل، ثلاث مرات يومياً.', bestFor: 'السعال الجاف وتهدئة الشعب الهوائية والانتفاخ' },
        { method: 'خلطة السعال (يانسون وزعتر وعسل)', desc: 'اخلط شاي يانسون وزعتر بنسبة متساوية مع ملعقة عسل. اشرب دافئاً قبل النوم.', bestFor: 'السعال المزمن الليلي والتهاب القصبات' },
      ],
    },

    pelargonium: {
      name: 'البيلارغونيوم (إبرة الراعي الأفريقية)',
      shortDescription: 'مستخلص جذر إبرة الراعي الأفريقية بتأثير مزدوج مضاد للعدوى ومُعدِّل للمناعة؛ مُتحقَّق سريرياً في تقليص شدة ومدة التهاب الجيوب الأنفية الحاد والتهاب الشعب الهوائية.',
      activeConstituents: [
        { name: 'أومكالين، مشتقات الكوماريني المتنوعة (مثل مشتقات 7-هيدروكسيكوماريني)، والبروأنثوسيانيدينات القليلة التجمع (التانينات)', detail: 'يُظهر تأثيراً مزدوجاً مضاداً للعدوى ومُعدِّلاً للمناعة.' },
      ],
      moa: [
        { title: 'مُعدِّل للمناعة', detail: 'يُحفّز آليات المناعة غير النوعية (زيادة تنشيط الضامة وأكسيد النيتريك وإنتاج الإنترفيرون بيتا) ويُعزّز نشاط خلايا القاتل الطبيعي (NK).' },
        { title: 'مضاد للالتصاق', detail: 'يُمارس نشاطاً مضاداً للالتصاق يمنع البكتيريا (مثل المكورات العقدية) من الالتصاق بالخلايا الظهارية المضيفة.' },
      ],
      uses: ['التهاب الجيوب الأنفية الحاد والتهاب الشعب الهوائية الحاد وأعراض الزكام.'],
      howToUse: [
        { method: 'طريقة الاستخدام', instruction: 'قطرات سائلة موحَّدة أو أقراص فموية.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن وفعّال سريرياً لالتهابات الجهاز التنفسي الحادة.' },
        { group: 'الأطفال', notes: 'غير موصى به للأطفال أقل من 6 سنوات بسبب غياب بيانات السلامة والفاعلية الكافية.' },
        { group: 'الحمل والرضاعة', notes: 'غير موصى به بسبب عدم كفاية البيانات السريرية.' },
        { group: 'الأمراض المزمنة', notes: 'تجنب الاستخدام في المرضى الذين يعانون من أمراض كبدية أو كلوية شديدة.' },
      ],
      dosage: { standard: '30 قطرة من المستخلص السائل ثلاث مرات يومياً (حوالي 4.5 مل يومياً) أو أقراص 20 ملغ ثلاث مرات يومياً، لمدة 7-10 أيام.' },
      overdose: {
        intro: 'نادر للغاية.',
        symptoms: ['اضطراب معدي معوي خفيف أو ميل زائد للنزيف.'],
        management: ['إيقاف المستخلص والرعاية الداعمة.'],
      },
      sideEffects: [
        'شكاوى معدية معوية (آلام المعدة وحرقان المعدة والغثيان).',
        'نزيف أنفي أو لثوي خفيف.',
        'حالات نادرة من تسمم الكبد (ارتفاع عكسي في إنزيمات الكبد).',
      ],
      contraindications: [
        'فرط الحساسية للمادة الفعالة.',
        'أمراض الكبد أو الكلى الشديدة.',
        'الاستخدام المتزامن لمضادات التخثر (مثل الوارفارين) بسبب الخطر النظري لزيادة النزيف المرتبطة بمكونات الكوماريني.',
      ],
      drugInteractions: [],
      storage: {
        forms: [{ form: 'التخزين', instructions: 'يُخزَّن في درجة حرارة الغرفة في العبوة الأصلية محكمة الإغلاق.' }],
      },
      benefits: [],
      factsAndMyths: [
        {
          fact: 'أثبتت تجارب سريرية عالية الجودة أن Pelargonium sidoides يُقلّل بشكل ملحوظ من شدة ومدة أعراض التهاب الجيوب الأنفية الحاد مقارنةً بالغفل.',
          myth: 'يعمل كمضاد حيوي كيميائي مباشر؛ إذ هو في المقام الأول مُعدِّل للمناعة وعامل حماية خلوية يساعد الجهاز المناعي للمضيف على القضاء على العدوى.',
        },
      ],
      botanicalFacts: {
        family: 'الغرانيومية (Geraniaceae)',
        activeCompounds: 'أومكالين، مشتقات الكوماريني (7-هيدروكسيكوماريني)، البروأنثوسيانيدينات القليلة التجمع (التانينات)',
        clinicalEvidence: 'أثبتت تجارب سريرية عالية الجودة تقليصاً ملحوظاً في شدة ومدة أعراض التهاب الجيوب الأنفية الحاد مقارنةً بالغفل.',
      },
      relatedPlants: ['eucalyptus', 'black-elderberry'],
      references: [
        { text: 'European Medicines Agency (EMA) – Committee on Herbal Medicinal Products (HMPC). (2018). European Union herbal monograph on Pelargonium sidoides DC., radix. (EMA/HMPC/444521/2015).' },
      ],
    },

    'black-elderberry': {
      name: 'التوت الأسود (الإلدربيري)',
      shortDescription: 'توت غني بالأنثوسيانينات أثبت سريرياً تقليص أعراض الجهاز التنفسي العليا حتى 4 أيام؛ يحجب مستقبلات حمض السياليك الفيروسية ويُثبّط السيتوكينات الالتهابية لعلاج التهاب الجيوب الأنفية الفيروسي الحاد.',
      activeConstituents: [
        { name: 'أنثوسيانينات (مثل سيانيدين 3-غلوكوسيد)', detail: '' },
        { name: 'فلافونويدات (كيرسيتين، روتين)', detail: '' },
        { name: 'بروتينات مُثبِّطة للريبوسوم / ليكتينات (راصّات Sambucus nigra – SNA)', detail: '' },
      ],
      moa: [
        { title: 'مضاد للفيروسات (حجب مستقبلات حمض السياليك)', detail: 'تُظهر البوليفينولات والليكتينات خصائص مضادة للفيروسات بالارتباط ببروتينات سطح الفيروس (حجب مستقبلات حمض السياليك)، مما يمنع دخول الفيروس وتكاثره داخل الخلايا المضيفة.' },
        { title: 'مضاد للالتهاب', detail: 'يُقلّل السيتوكينات المُحرِّضة للالتهاب، مما يُخفّض تورم الغشاء المخاطي.' },
      ],
      uses: ['تقليل شدة ومدة الاحتقان المرتبط بالتهاب الجيوب الأنفية الفيروسي الحاد والإنفلونزا في مراحلها المبكرة.'],
      howToUse: [
        { method: 'مستحضرات الثمار', instruction: 'أشربة أو لبانات أو مستخلصات فموية موحَّدة (من الثمار).' },
        { method: 'مستحضرات الأزهار', instruction: 'أقراص فموية أو شاي (من الأزهار).' },
      ],
      crucialNote: 'يحتوي Sinupret على Sambuci flos (زهرة العبهر)، لا الثمرة. تعمل زهرة العبهر أساساً كعامل حالّ للمخاط ومُعرِّق في هذا التركيب العشبي المتعدد المُثبَت بالبحث.',
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن وجيد التحمّل عند استخدام المنتجات المطبوخة أو الموحَّدة تجارياً.' },
        { group: 'الأطفال', notes: 'يُستخدم على نطاق واسع في أشربة الأطفال التجارية للأطفال فوق 2-6 سنوات.' },
        { group: 'الحمل والرضاعة', notes: 'غير موصى به بسبب غياب بيانات السلامة السريرية الكافية.' },
        { group: 'الأمراض المزمنة', notes: 'يُستخدم بحذر في مرضى أمراض المناعة الذاتية الجهازية (مثل الذئبة والتهاب المفاصل الروماتويدي) بسبب الخصائص المحفِّزة القوية للمناعة.' },
      ],
      dosage: { standard: 'لشراب الثمار: 15 مل تُعطى 4 مرات يومياً لمدة 3-5 أيام عند بدء الأعراض الفيروسية فوراً.' },
      overdose: {
        intro: 'نادر مع المستخلصات التجارية المعالجة بشكل صحيح.',
        symptoms: ['غثيان وقيء ودوار وإسهال شديدة - تنشأ عادةً من تناول الأجزاء النيئة غير المعالجة من النبات.'],
        management: ['الإيقاف والرعاية الداعمة للجهاز الهضمي (الترطيب).'],
      },
      sideEffects: ['تأثير ملين خفيف إذا استُهلك بكميات مفرطة.'],
      contraindications: ['التوت غير الناضج والأوراق والسيقان واللحاء مُحظَرة تماماً لأنها تحتوي على غليكوسيدات سيانوجينية سامة (مثل سامبونيغرين) تُطلق سيانيد الهيدروجين عند الابتلاع.'],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'الأشربة الموحَّدة', instructions: 'تُحفَظ مبرَّدة بعد الفتح.' },
          { form: 'الأشكال الصلبة', instructions: 'تُخزَّن في مكان بارد وجاف.' },
        ],
      },
      benefits: [],
      factsAndMyths: [
        {
          fact: 'أثبتت المستخلصات الموحَّدة من ثمار الإلدربيري سريرياً تقليص أعراض الجهاز التنفسي العلوي بما يصل إلى 4 أيام مقارنةً بالغفل عند البدء المبكر.',
          myth: 'يمكنك قطفها وتناولها طازجةً من الشجرة بأمان؛ إذ يمكن لثمار الإلدربيري النيئة أن تُسبّب تسمماً حاداً بالسيانيد. فقط الثمار المطبوخة جيداً أو المستخلصات الصيدلانية المُحقَّقة آمنة للاستهلاك.',
        },
      ],
      botanicalFacts: {
        family: 'الآسية العصوية (Adoxaceae) (تُصنَّف أيضاً تحت Viburnaceae)',
        activeCompounds: 'أنثوسيانينات (سيانيدين 3-غلوكوسيد)، فلافونويدات (كيرسيتين، روتين)، بروتينات مُثبِّطة للريبوسوم / ليكتينات (SNA)',
        clinicalEvidence: 'أثبتت سريرياً تقليص أعراض الجهاز التنفسي العلوي بما يصل إلى 4 أيام مقارنةً بالغفل عند البدء المبكر.',
      },
      relatedPlants: ['pelargonium', 'eucalyptus'],
      references: [
        { text: 'European Medicines Agency (EMA) – Committee on Herbal Medicinal Products (HMPC). (2018). European Union herbal monograph on Sambucus nigra L., flos. (EMA/HMPC/435671/2015).' },
        { text: 'World Health Organization (WHO). (2004). WHO Monographs on Selected Medicinal Plants, Volume 2: Flos Sambuci.' },
      ],
    },

    guava: {
      name: 'الجوافة',
      shortDescription: 'أوراق من عائلة الآس (Myrtaceae) غنية بفلافونويدات الكيرسيتين وإيلاجيتانينات وزيوت طيارة؛ توفّر تأثيراً مسكّناً للسعال محيطياً وتثبيطاً لـ COX/LOX وتنظيماً قابضاً للمخاط ونشاطاً مضاداً للميكروبات لعلاج السعال والتهابات الجهاز التنفسي العليا.',
      description: 'الجوافة (Psidium guajava، عائلة Myrtaceae) أوراقها علاج تقليدي موثّق في الطب الاستوائي بأفريقيا وآسيا وأمريكا اللاتينية. تحتوي الأوراق على كيرسيتين وغليكوسيداته (جوافيرين)، وإيلاجيتانينات محددة (بيدونكولاجين، كاسوارينين)، وزيوت طيارة (بيتا-كاريوفيلين، ليمونين، ألفا-بينين)، وتركيزات عالية من فيتامين C وA. تعمل هذه المركّبات معاً على تسكين السعال محيطياً وتثبيط COX و LOX لتقليل الالتهاب التنفسي وتنظيم إفراز المخاط بالقبض التانيني ومكافحة الميكروبات المسبّبة للعدوى التنفسية.',
      symptoms: ['السعال والزكام', 'التهاب الحلق وعدوى الجهاز التنفسي العليا', 'الإسهال (تأثير قابض)', 'تقرّحات الفم والتهاب اللثة (غرغرة)'],
      warnings: [
        'مرضى السكري: مستخلص أوراق الجوافة يُخفّض السكر بشكل ملحوظ؛ راقب مستوى الجلوكوز عن كثب.',
        'الحمل: الثمار الطازجة آمنة؛ يُتجنّب مستخلصات الأوراق العلاجية المُركَّزة لنقص البيانات الكافية.',
        'الجرعات العالية تُسبّب إمساكاً وغثياناً من تأثير الإيلاجيتانينات القابض؛ لا تتجاوز الجرعة الموصى بها.',
      ],
      activeConstituents: [
        { name: 'فلافونويدات (المؤشرات الرئيسية)', detail: 'مُركَّزة بشكل كبير في الكيرسيتين وغليكوسيداته (مثل الأفيكولارين والجوافيرين)، والمسؤولة عن التأثيرات الموثّقة المضادة للالتهاب والأكسدة والميكروبات.' },
        { name: 'التانينات والبوليفينولات', detail: 'تركيز عالٍ من التانينات المكثّفة والقابلة للتحلل المائي (مثل البيدونكولاجين والكاسوارينين والستاكيورين) مما يوفّر تأثيراً قابضاً يُرسّب البروتينات السطحية، مما يُسهم في تقليل إفرازات السوائل والمخاط في الجهاز التنفسي.' },
        { name: 'الزيوت الأساسية المتطايرة (0.1% إلى 0.4%)', detail: 'تتكوّن أساساً من هيدروكربونات السيسكيتيربين، وأبرزها الكاريوفيلين والليمونين والألفا-بينين، والتي تُسهم في خصائصه العطرية والمطهّرة.' },
        { name: 'الفيتامينات والعوامل المغذية المساعدة', detail: 'غنيّ بفيتامين C (حمض الأسكوربيك) وفيتامين A، اللذان يدعمان بشكل تآزري وظيفة الجهاز المناعي خلال الالتهابات التنفسية الحادة.' },
      ],
      moa: [
        { title: 'مسار مضاد للالتهاب', detail: 'يُثبّط الكيرسيتين وغيره من الفلافونويدات مباشرةً الوسائط الالتهابية عن طريق كبح إنزيمات السيكلوأوكسيجيناز (COX) ومسارات الليبوكسيجيناز (LOX)، مما يُقلّل تخليق السيتوكينات المُسبّبة للالتهاب في الجهاز التنفسي.' },
        { title: 'القابض وتنظيم المخاط', detail: 'تُمارس التانينات تأثيراً قابضاً موضعياً على الغشاء المخاطي للبلعوم، مُكوِّنةً طبقة واقية معقّدة فوق الأنسجة المتهيّجة، مما يُقلّل فعلياً مزيداً من إفراز السوائل، ويُخفّف تهيّج الجهاز التنفسي، ويُشدّد الأنسجة المنتفخة.' },
        { title: 'النشاط المضاد للميكروبات', detail: 'تُعطّل المكوّنات المتطايرة أغشية الخلايا الميكروبية، مما يوفّر فوائد مطهّرة ثانوية ضد مسبّبات الأمراض الانتهازية في الجهاز التنفسي العلوي.' },
      ],
      uses: [
        'تخفيف السعال الحاد المنتج وغير المنتج.',
        'تهدئة التهاب الحلق وتهيّج البلعوم.',
        'إدارة أعراض الزكام الخفيف واحتقان الجهاز التنفسي.',
      ],
      howToUse: [
        { method: 'طريقة التحضير', instruction: 'اغلِ 5-7 أوراق طازجة أو مجففة في كوب (حوالي 200 مل) ماء لمدة 10 دقائق، ثم صفّيه جيداً واشربه دافئاً. يمكن إضافة العسل الطبيعي لتعزيز التأثير المُلطّف.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال', notes: 'يُستخدم بكميات صغيرة تحت الإشراف الوالدي/الطبي.' },
        { group: 'الحوامل والمُرضعات', notes: 'غير موصى به دون استشارة طبية صريحة.' },
        { group: 'المسنّون', notes: 'آمن عموماً عند تناوله بكميات معتدلة.' },
      ],
      sideEffects: ['إمساك عابر خفيف أو تهيّج معدي معوي طفيف.'],
      contraindications: ['فرط حساسية موثّق أو حساسية جهازية من Psidium guajava أو أفراد عائلة الآسيليات (Myrtaceae).'],
      drugInteractions: ['لا توجد تداخلات دوائية سريرية رئيسية موثّقة؛ غير أن تأثيرات إضافية نظرية قد تحدث عند استخدامه مع عوامل مضادة للإسهال الكيميائية أو العوامل القابضة الشديدة.'],
      storage: { forms: [{ form: 'التخزين', instructions: 'يُحفظ في مكان بارد وجاف، محمياً تماماً من أشعة الشمس المباشرة والرطوبة والتلوث الميكروبي.' }] },
      dosage: {
        standard: 'النقيع التقليدي الخام: كوب واحد (200 مل) يُتناول مرتين إلى ثلاث مرات يومياً للبالغين.\nالأشربة الموحّدة (المستخلصات الصيدلانية):\nالبالغون: 10 مل (ملعقة كبيرة) 3-4 مرات يومياً.\nالأطفال (فوق سنتين): 5 مل (ملعقة صغيرة) مرتين إلى ثلاث مرات يومياً، أو حسب الوصف السريري.',
      },
      overdose: {
        symptoms: ['إمساك حاد (بسبب المحتوى العالي من التانينات)، وغثيان، وانتفاخ، وعدم ارتياح معدي موضعي.'],
        management: ['أوقف الاستخدام فوراً، وزِد تناول السوائل الفموية، واطلب العلاج الطبي العَرَضي إذا استمر الضيق المعدي المعوي.'],
      },
      factsAndMyths: [
        { myth: 'أوراق الجوافة يمكنها الشفاء التام والفوري من الأمراض التنفسية المزمنة كالربو أو مرض الانسداد الرئوي المزمن.', fact: 'تعمل أوراق الجوافة بحتاً كعلاج نباتي داعم مبني على الأدلة يُخفّف الأعراض الحادة (كالسعال والتهاب الحلق) ولكنها لا يمكنها استبدال العلاجات السريرية الأساسية أو أجهزة الاستنشاق للاضطرابات الرئوية المزمنة.' },
      ],
      benefits: [
        { icon: 'air', title: 'مُسكّن سعال محيطي غير منوّم', desc: 'كيرسيتين والتانينات يُثبّطان مستقبلات السعال الهوائية محيطياً دون تثبيط مركزي؛ تقليل تكرار السعال بلا خدر أو إمساك أو إدمان.' },
        { icon: 'shield', title: 'مزدوج التثبيط COX/LOX', desc: 'يُثبّط الكيرسيتين كلاً من COX-2 (البروستاغلاندينات) و 5-LOX (الليكوترينات) معاً، مما يُوفّر تغطية مضادة للالتهاب التنفسي أشمل من الأدوية أحادية التثبيط.' },
        { icon: 'nutrition', title: 'فيتامين C وكيرسيتين بتركيز عالٍ', desc: 'أوراق الجوافة تُدمج أعلى تركيزات فيتامين C وكيرسيتين الطبيعية معاً، مع نشاط مضاد فيروسي مباشر ضد فيروسات الجهاز التنفسي.' },
      ],
      botanicalFacts: {
        family: 'عائلة Myrtaceae (الآسيليات)',
        nativeRegion: 'أمريكا الوسطى والجنوبية (المكسيك وبيرو). يُزرع الآن في جميع المناطق الاستوائية وشبه الاستوائية عالمياً.',
        growthHabit: 'شجرة أو شجيرة تصل إلى 10 أمتار؛ أوراق بيضاوية عطرة؛ أزهار بيضاء؛ ثمار خضراء أو صفراء عند النضج.',
        activeCompounds: 'كيرسيتين، جوافيرين، بيدونكولاجين، كاسوارينين، بيتا-كاريوفيلين، ليمونين، ألفا-بينين، فيتامين C وA.',
        cultivationNotes: 'مستخدمة في الطب الشعبي لأمريكا اللاتينية وآسيا وأفريقيا. أوراقها في دستور الأدوية البرازيلي لعلاج الإسهال. دراسات حديثة تُثبت فاعليتها ضد الفيروسات التنفسية وسرطانات وداء السكري.',
      },
      preparation: [
        { method: 'مغلي أوراق الجوافة للسعال', desc: 'اغلِ 4-5 أوراق جوافة في كوبَين ماء لـ 10-15 دقيقة. أضف عسلاً وزنجبيلاً لتعزيز التأثير. صفّ واشرب دافئاً 2-3 مرات يومياً.', bestFor: 'السعال والتهاب الحلق وعدوى الجهاز التنفسي العليا' },
        { method: 'ثمار الجوافة الطازجة', desc: 'تناول 1-2 ثمرة يومياً كاملة مع قشرها (القشرة تحتوي على أعلى تركيز فيتامين C). مفيدة لدعم المناعة التنفسية اليومي.', bestFor: 'الدعم المناعي اليومي والوقاية من العدوى التنفسية' },
      ],
    },

    'licorice-cough': {
      name: 'عرق السوس (جذر الكلكلان)',
      shortDescription: 'جذر غني بالغليسيريزين بتأثير مضاد للالتهاب شبيه بالكورتيكوستيرويدات؛ يُغلّف ويُهدّئ الأنسجة البلعومية الملتهبة، ويُسيّل المخاط السميك، ويُخفّف السعال الجاف المتعب.',
      activeConstituents: [
        { name: 'الساببونينات التيربينية (المؤشر الرئيسي)', detail: 'مدفوعة مباشرة بالغليسيريزين (حمض الغليسيريزيك، الموجود كأملاح البوتاسيوم والكالسيوم). إنه أحلى من السكروز بـ 30–50 مرة، ويمتلك تركيباً كيميائياً يُحاكي الكورتيكوستيرويدات مما يمنحه خصائص مضادة للالتهاب.' },
        { name: 'الفلافونويدات والشالكونات', detail: 'غنيّ بالليكيريتين والإيزوليكيريتيجينين والليكيريتيجينين، والتي توفر دفاعاً قوياً شاملاً ضد الأكسدة، وتُرخّي تشنجات العضلات الملساء، وتُلطّف الأغشية المخاطية.' },
        { name: 'الفيتوستيرولات', detail: 'يحتوي على بيتا-سيتوستيرول وستيغماستيرول، مما يُسهم في تعديل الدفاع الخلوي.' },
        { name: 'السكريات المتعددة', detail: 'تركيبات غليكانية عالية الجزيئية تُعزّز سلامة الخلايا المخاطية الموضعية وتُساعد الدفاعات المناعية ضد التهديدات الفيروسية.' },
      ],
      moa: [
        { title: 'تأثير ملطّف ومهدئ', detail: 'يُغلّف الغليسيريزين والسكريات المتعددة الأنسجة الظهارية الملتهبة في البلعوم، مما يحمي مستقبلات السعال المحيطية من التهيّج الموضعي ويُقلّل السعال الجاف.' },
        { title: 'تأثير طارد للبلغم', detail: 'يُقلّل الغليسيريزين والساببونينات المرتبطة به التوتر السطحي ويُحفّز إفراز الغشاء المخاطي الرغامي، مما يُسيّل سدادات المخاط السميكة لإزالتها الفعّالة.' },
        { title: 'مسار مضاد للالتهاب شبيه بالكورتيكوستيرويدات', detail: 'يُثبّط الغليسيريزين إنزيم 11-بيتا-هيدروكسيستيرويد ديهيدروجيناز (النوعين 1 و2)، مما يرفع تركيز الكورتيزول الداخلي الموضعي ويُقلّل الالتهاب والانتفاخ في الأغشية المخاطية التنفسية.' },
      ],
      uses: [
        'تهدئة السعال الجاف والمتعب وفرط حساسية البلعوم.',
        'تخفيف التهاب الحلق الحاد والتهيّج التنفسي الموضعي.',
        'علاج داعم لتهيّج الشعب الهوائية خفيف وحموضة المعدة.',
      ],
      howToUse: [
        { method: 'طريقة التحضير', instruction: 'ضع ملعقة صغيرة (حوالي 2-4 غرام) من جذر عرق السوس المطحون المجفف في كوب ماء مغلي لمدة 10-15 دقيقة، ثم صفّه واشربه دافئاً.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال', notes: 'يُستخدم فقط تحت إشراف طبي صارم وبكميات تقليدية محدودة مُراقَبة.' },
        { group: 'الحوامل', notes: 'ممنوع استخدامه تماماً بسبب خطر تحفيز تقلّصات الرحم والآثار السلبية المحتملة على الجنين المرتبطة بالغليسيريزين.' },
        { group: 'كبار السن', notes: 'يُستخدم بحذر سريري شديد؛ مقيّد للغاية في المرضى المصابين بأمراض القلب والأوعية الدموية الكامنة.' },
      ],
      sideEffects: [
        'نقص البوتاسيوم، وارتفاع ضغط الدم الثانوي، واحتباس الماء، وإزعاج معدي معوي خفيف عابر.',
      ],
      contraindications: [
        'ارتفاع ضغط الدم الجهازي، وأمراض الكبد الصفراوية الشديدة، وتليّف الكبد، والفشل الكلوي المزمن، ونقص البوتاسيوم، وأمراض القلب الهيكلية، والحمل.',
      ],
      drugInteractions: [
        'مدرّات البول (مثل فيوروسيميد، ثيازيدات): يُضاعف فقدان البوتاسيوم الشديد (نقص البوتاسيوم).',
        'الكورتيكوستيرويدات: يُرفع من خطر نقص البوتاسيوم الجهازي.',
        'خافضات ضغط الدم: يُعاكس ويُقلّل فعالية أدوية ضغط الدم.',
        'الديجوكسين / جليكوسيدات القلب: يزيد بشكل ملحوظ من مخاطر سمية القلب بسبب انخفاض البوتاسيوم الناجم عن عرق السوس.',
      ],
      storage: { forms: [{ form: 'التخزين', instructions: 'يُخزَّن الجذر المطحون الخام في وعاء محكم الإغلاق، محمياً تماماً من الرطوبة والأبخرة والحشرات.' }] },
      dosage: {
        standard: 'الحد الأقصى اليومي للبالغين: 5 إلى 15 غراماً من مسحوق الجذر الخام المطحون يومياً (ما يعادل صرامةً 200-600 ملغ من الغليسيريزين).\nالمدة: لا يُستخدم أكثر من 4-6 أسابيع متتالية إلا تحت إشراف طبي مباشر، بسبب مخاطر التراكم.',
      },
      overdose: {
        symptoms: ['ارتفاع ضغط الدم الشديد، واحتباس السوائل الملحوظ (وذمة)، ونقص البوتاسيوم العميق في الدم، وعدم انتظام ضربات القلب، وصداع مزمن، وخمول، وضعف عضلي عميق.'],
        management: ['أوقف الاستخدام فوراً، ونفّذ مراقبة قلبية صارمة، وعالج مستويات البوتاسيوم سريرياً، واستعِد التوازن الفيزيائي للسوائل والكهارل، واطلب المساعدة السريرية الطارئة الفورية.'],
      },
      benefits: [],
      factsAndMyths: [{ fact: 'يحتوي جذر عرق السوس على مكوّنات نشطة شبيهة بالستيرويدات (الغليسيريزين). الاستهلاك المزمن أو بالكميات الكبيرة قد يُفضي إلى فرط الألدوستيرونية الكاذبة المعروفة بارتفاع ضغط الدم الخطير وانخفاض البوتاسيوم بشكل حرج.', myth: 'جذر عرق السوس آمن تماماً بدون قيود لأنه طبيعي 100%.' }],
      botanicalFacts: {
        family: 'الفصيلة البقولية (Fabaceae / Leguminosae)',
        activeCompounds: 'الغليسيريزين (حمض الغليسيريزيك)، ليكيريتين، إيزوليكيريتيجينين، ليكيريتيجينين، بيتا-سيتوستيرول، ستيغماستيرول، السكريات المتعددة',
        clinicalEvidence: 'Asl, M. N., & Hosseinzadeh, H. (2008). Review of pharmacological effects of Glycyrrhiza sp. and its bioactive compounds. Phytotherapy Research, 22(6), 709–724.',
      },
      relatedPlants: ['thyme', 'anise'],
    },

    'senna-constipation': {
      name: 'السنا',
      shortDescription: 'ملين منشّط للقولون معتمد سريرياً؛ يعمل عبر تنشيط أولي بكتيري في القولون، منتجاً إخلاءً معوياً موثوقاً قصير الأمد بآليتَي تحريك وإفراز مزدوجتين.',
      activeConstituents: [
        { name: 'سينوسيدات A وB (جليكوسيدات ديانثرون)', detail: 'المكوّنات الفعّالة الرئيسية المسؤولة عن الخاصية الملينة؛ تتميّز بوجود أنثراكينونات أساساً في صورة ديانثرونات (75-80%) أو أنثرونات (20-25%).' },
        { name: 'سينوسيدات A وB (المجموعة الرئيسية)', detail: 'من بين أربعة أنواع للسينوسيدات (A، B، C، D)، يُشكّل النوعان A وB نحو 80% من إجمالي النشاط البيولوجي للنبات.' },
        { name: 'سينوسيدات C وD', detail: 'جليكوسيدات أنثراكينونية ثانوية تُسهم في التأثير الملين الإجمالي.' },
      ],
      moa: [
        { title: 'تنشيط الدواء الأولي', detail: 'السينوسيدات أدوية أولية مائية تمر دون امتصاص عبر الجهاز الهضمي العلوي. عند وصولها للقولون، تُحلّلها بيتا-جليكوسيدازات بكتيرية من الميكروبيوم المعوي إلى المستقلب الفعّال: الريانثرون.' },
        { title: 'الآلية المزدوجة (الشلال التأثيري)', detail: 'يمارس الريانثرون تأثيره الملين عبر آليتين متآزرتين: (1) تهيّج الأمعاء وتغيير حركيتها — يُحفّز الغشاء المخاطي القولوني محدثاً تهيّجاً موضعياً يُعزّز التمعّج الدافع ويُقصّر زمن العبور؛ (2) تعديل السوائل والكهارل — يُثبّط Na+/K+-ATPase ويفتح قنوات الكلوريد مُعيقاً امتصاص الماء ومُفعِّلاً إفراز الماء والكهارل إلى التجويف المعوي.' },
      ],
      uses: [
        'تخفيف أعراض الإمساك: معروف ومعتمد سريرياً كعلاج قصير الأمد للإمساك الطارئ أو الحاد.',
        'إخلاء الأمعاء: يُستخدم تحت إشراف طبي لتطهير الأمعاء قبل فحوصات الأشعة، تنظير القولون، أو التدخلات الجراحية.',
        'أظهر نشاطاً مضاداً للأكسدة، ومحتملاً ضد الأورام، ومضاداً للميكروبات في المختبر.',
        'في الإثنوفارماكولوجيا، استُكشفت تحضيراته تاريخياً لإدارة اضطرابات الجهاز الهضمي وبعض الأمراض الجلدية والتئام الجروح (وإن لم تُعدّ مؤشرات أولية).',
      ],
      howToUse: [
        { method: 'نقيع مائي (شاي السنا)', instruction: 'انقع 1-2 غرام من أوراق السنا المجففة في 150 مل ماء مغلي في وعاء مغطّى مدة 10-15 دقيقة. ملاحظة مهمة: لا تُغلِ الأوراق مباشرة لفترة مطوّلة، إذ يزيد التعرّض الحراري المفرط من استخلاص الراتنجات القاسية المُسبِّبة لتشنّجات بطنية حادة. صفّي الأوراق. يُنصح بإضافة قطعة زنجبيل أو أوراق نعناع كمُقلِّل للمغص. يُؤخذ ليلاً قبل النوم.' },
        { method: 'أقراص/حبيبات موحّدة', instruction: 'خذ وفق إرشادات المنتج (عادةً 15-30 ملغ سينوسيدات مرة يومياً عند النوم للبالغين). لا تتجاوز الجرعة اليومية القصوى 30 ملغ جليكوسيدات هيدروكسي-أنثراسين. للاستخدام فترات قصيرة فقط.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والمراهقون (أكثر من 12 سنة)', notes: '15-30 ملغ من السينوسيدات مرة يومياً (عادةً عند النوم). الحد الأقصى: 30 ملغ/يوم. قصير الأمد فقط.' },
        { group: 'الأطفال 6-12 سنة', notes: '7.5-15 ملغ من السينوسيدات مرة يومياً (كثيراً ما تُعطى نصف قرص أو 5 مل شراب حسب التركيز). تحت إشراف طبي صارم فقط.' },
        { group: 'الأطفال 2-6 سنوات', notes: '2.5-5 ملغ من السينوسيدات مرة يومياً. تحت إشراف طبي مباشر صارم فقط.' },
        { group: 'الأطفال أقل من سنتين', notes: 'ممنوع استخدامه تماماً.' },
        { group: 'الحمل والإرضاع', notes: 'غير موصى به. يُتجنّب تماماً في الثلث الأول بسبب بيانات سلامة غير كافية بشأن المخاطر الجينية المحتملة لبعض الأنثراكينونات. يُستخدم فقط تحت إشراف طبي صارم إذا فشلت تعديلات الغذاء والملينات المُعبّئة. رغم أن كميات ضئيلة جداً من الريانثرون النشط تُفرز في حليب الأم، يُثبَّط استخدامه أثناء الإرضاع بسبب شُح البيانات السريرية وخطر إحداث إسهال أو مغص عند الرضيع.' },
        { group: 'بداية التأثير', notes: 'تحدث عادةً بعد 6-12 ساعة.' },
      ],
      dosage: {
        standard: 'البالغون والمراهقون (أكثر من 12 سنة): 15-30 ملغ من السينوسيدات مرة يومياً (عادةً عند النوم). الحد الأقصى: 30 ملغ جليكوسيدات هيدروكسي-أنثراسين (محسوبة كسينوسيد B) يومياً — ما يعادل تقريباً ملعقة قياسية واحدة من العشب الخام. بداية التأثير: 6-12 ساعة.',
        forms: [
          { form: 'شاي أوراق السنا', dose: '1-2 غرام أوراق مجففة تُنقَع 10-15 دقيقة في 150 مل ماء مغلي (في وعاء مغطّى)؛ تؤخذ عند النوم. لا تُغلى مباشرة.' },
          { form: 'أقراص موحّدة (مثل 7.5 ملغ سينوسيدات)', dose: 'البالغون: 2-4 أقراص عند النوم. الأطفال 6-12 سنة: 1-2 قرص (كثيراً نصف قرص). وفق إرشادات المنتج.' },
          { form: 'حبيبات / شراب', dose: 'وفق تركيز المنتج والفئة العمرية؛ عادةً 5-10 مل للأطفال 6-12 سنة.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة حادة: تناول جرعات تتجاوز 100 ملغ سينوسيدات في يوم واحد (ما يعادل تقريباً 7-10 أقراص قياسية).',
          'السمية المزمنة: الاستخدام المفرط المستمر بجرعات تتجاوز 30 ملغ/يوم لأكثر من أسبوعين — يُفضي إلى اعتماد على الملينات وترهّل القولون ("القولون الملهاء").',
          'تشنّجات بطنية حادة وألم "مغصي" شديد مع إسهال مائي غزير — يُفضيان إلى فقدان سريع للسوائل والمعادن الأساسية.',
          'اختلال الكهارل (نقص البوتاسيوم): أخطر المضاعفات — قد يُحفّز اضطرابات نظم القلب وضعف العضلات.',
          'الحماض الأيضي من فرط فقدان البيكربونات في البراز.',
          'الإساءة المطوّلة: خطر نظري لالتهاب الكبد السام.',
        ],
        management: [
          'الإيقاف الفوري: وقف تناول أي منتجات تحتوي على الأنثراكينون.',
          'تعويض السوائل: الترطيب المكثّف بمحاليل الجفاف الفموية (ORS) أو السوائل الوريدية عند الضرورة.',
          'مراقبة الكهارل: مراقبة مستمرة لكهارل المصل (خاصةً البوتاسيوم)، لا سيما في المرضى ذوي الأمراض القلبية الكامنة.',
        ],
      },
      sideEffects: [
        'ألم وتشنّجات بطنية ("مغص").',
        'إسهال حاد (في حالات الحساسية أو الجرعات العالية).',
        'اضطرابات الكهارل بما فيها نقص البوتاسيوم.',
        'ميلانوزيس القولون: تصبّغ صبغي حميد قابل للزوال في الغشاء المخاطي القولوني يختفي تماماً في غضون أشهر بعد إيقاف السنا.',
        'غثيان وفرط النشاط المعوي وتهيّب الكلى المحتمل (مع الإساءة المزمنة).',
        'تلوّن البول بالبني-الأصفر أو البني-المحمرّ (إفراز حميد للمستقلبات).',
        'تقوّس الأصابع (يُلاحَظ حصراً مع الإساءة المزمنة طويلة الأمد).',
      ],
      contraindications: [
        'فرط الحساسية المعروف لـ Senna alexandrina أو مشتقات الأنثراكينون الأخرى.',
        'انسداد الأمعاء والتضيّق: ممنوع قطعياً في المرضى المصابين بانسداد معوي معروف أو مشتبه به، أو إيليوس، أو انحشار برازي.',
        'أمراض الأمعاء الالتهابية الحادة: ممنوع في داء كرون، والتهاب القولون التقرّحي، والتهاب الزائدة الدودية.',
        'حالات الجفاف الشديد المصحوبة ببول داكن مركّز أو نضوب الكهارل.',
        'ألم بطني غير مشخّص، أو ألم معدي حاد مصحوب بغثيان أو تقيؤ.',
        'قصور كلوي أو كبدي حاد.',
      ],
      drugInteractions: [
        'جليكوسيدات القلب (مثل الديجوكسين) ومضادات اضطراب النظم: نقص البوتاسيوم الناجم عن إساءة استخدام الملينات يُعزّز بشكل كبير التأثيرات العلاجية والسامة لجليكوسيدات القلب ويتفاعل بخطورة مع الأدوية المضادة لاضطراب النظم.',
        'مدرّات البول والكورتيكوستيرويدات: الإعطاء المتزامن مع مدرّات البول المُسبِّبة لنقص البوتاسيوم (مثل فيوروسيميد)، أو الكورتيكوستيرويدات، أو جذر عرق السوس (Glycyrrhiza glabra) قد يُسرّع بشدة فقدان البوتاسيوم ويُفاقم نقصه.',
      ],
      storage: {
        forms: [
          { form: 'درجة الحرارة', instructions: 'تُخزَّن في مكان بارد جاف عند درجة حرارة الغرفة المضبوطة، مثالياً بين 15°C و25°C. يُبعَد عن مصادر الحرارة المفرطة.' },
          { form: 'الحماية من الضوء', instructions: 'تُخزَّن في حاويات مقاومة للضوء (زجاجيات كهرمانية أو تغليف معتم) إذ تُحلّل أشعة الشمس المباشرة جليكوسيدات الأنثراكينون.' },
          { form: 'التحكم في الرطوبة', instructions: 'تُبقَى الحاوية محكمة الإغلاق. الرطوبة العالية تُشجّع نمو العفن وتُطلق التحلّل الهيدرولوجي للمركبات الفعّالة.' },
        ],
      },
      factsAndMyths: [
        { myth: 'السنا عشبة طبيعية آمنة يمكن تناولها يومياً لإنقاص الوزن وتسطيح البطن.', fact: 'السنا ليست عاملاً لإنقاص الوزن. أي وزن يُفقَد أثناء تناول السنا هو في الواقع "وزن مائي" (فقدان سوائل)، وليس فقدان دهون. استخدامها طويل الأمد للتحكم في الوزن خطير ومُثبَّط طبياً.' },
      ],
    },

    'psyllium-constipation': {
      name: 'سيلليوم / إسباغول',
      shortDescription: 'ألياف غذائية قابلة للذوبان تعمل ملّيناً مُعبِّئاً؛ قشرة البذور تمتص ما يصل إلى 40 ضعف وزنها من الماء مكوّنةً هلاماً لزجاً مخاطياً يُليّن البراز ويُحفّز التمعّج وينظّم مستويات الكوليسترول والسكر في الدم.',
      activeConstituents: [
        { name: 'المخاط (الأرابينوكسيلانات)', detail: 'يُشكّل 10-30% من إجمالي وزن قشرة البذرة. عديدات سكر غيروجينية متفرّعة عالية الجزيئية؛ العمود الفقري للهيكل البنائي يتكوّن من وحدات D-زيلوبيرانوز مرتبطة ببيتا-(1-4) مُعوَّضة ببقايا L-عربينوفورانوز. استيعابية استثنائية للماء: يمتص الهيسك المنقّى ما يصل إلى 40 ضعف وزنه في الماء مُتوسِّعاً إلى هلام لزج غير ممتَص مقاوم للتحلّل الإنزيمي في الجهاز الهضمي العلوي.' },
      ],
      moa: [
        { title: 'مرحلة الترطيب', detail: 'عند البلع مع سوائل كافية، يتجنّب المخاط عملية هضم الأمعاء الدقيقة ويمتص الماء التجويفي داخل تجويف الأمعاء.' },
        { title: 'التوسّع التجويفي', detail: 'يزيد تكوّن مصفوفة هلامية مترطّبة مستقرة من الحجم الجسدي الإجمالي (الكتلة) ومحتوى الرطوبة في الكتلة البرازية، مُليِّناً قوامها.' },
        { title: 'المحفّز الميكانيكي', detail: 'تُمارس الكتلة الممتدة تمدّداً شعاعياً ميكانيكياً مباشراً على مستقبلات الضغط الموجودة في جدران العضلات الملساء للقولون، مُنشِّطةً المنعكس المعوي الداخلي ومُحفّزةً التمعّج الدافع.' },
        { title: 'دعم التخمير البكتيري', detail: 'تخضع الأرابينوكسيلانات للتخمير اللاهوائي الجزئي بواسطة الميكروبيوم القولوني، مُولِّدةً أحماضاً دهنية قصيرة السلسلة (SCFAs) كالأسيتات والبروبيونات والبوتيرات. تُوفّر هذه الأحماض طاقة تغذوية للغشاء المخاطي للقولون (خلايا القولون) وتُعدّل الحركية.' },
      ],
      uses: [
        'الإمساك المزمن: مُرسَّخ كعلاج نباتي أوّل للإدارة طويلة الأمد وتصحيح عادات الأمعاء. لا يُسبّب الاعتماد قطعياً ولا يُحدث متلازمة القولون الملهاء.',
        'تليين البراز للحالات الشرجية: مؤشَّر للحدّ من الإجهاد أثناء التغوّط في المرضى المصابين بالبواسير المؤلمة أو الشقوق الشرجية أو بعد الجراحة الشرجية.',
        'متلازمة القولون العصبي (IBS): يُستخدم سريرياً لتطبيع قوام البراز وأوقات العبور في IBS (كلاً من النوع الإمساكي والمتناوب).',
        'فرط شحوم الدم وإدارة الكوليسترول: يحبس الهيكل الهلامي الكوليسترول الغذائي ويرتبط مباشرة بالأحماض الصفراوية في التجويف المعوي، مُثبِّطاً إعادة امتصاصها الكبدي المعوي. يُحفّز ذلك رفع تنظيم إنزيم كوليسترول 7ألفا-هيدروكسيلاز الكبدي مما يُجبر الكبد على إخلاء كوليسترول LDL المتداول من الدم لتوليف أحماض صفراوية جديدة.',
        'التحكم في سكر الدم (السكري من النوع الثاني): عند تناوله مع الوجبات، يُبطّئ الشبكة الهلامية اللزجة إفراغ المعدة ويُأخّر هضم الكربوهيدرات وامتصاص الجلوكوز، مُسوِّياً بشكل ملحوظ ارتفاعات الجلوكوز بعد الأكل.',
      ],
      howToUse: [
        { method: 'التحضير', instruction: 'اخلط كيساً واحداً أو ملعقة كبيرة (نحو 5-10 غرام) في كوب كامل (250 مل) من الماء البارد أو الحليب أو العصير. حرّك سريعاً واشرب فوراً قبل أن تُصيّر عملية التبلّور القوام لزجاً يصعب بلعه.' },
        { method: 'ترطيب المتابعة (إلزامي)', instruction: 'اشرب كوباً إضافياً كاملاً من الماء مباشرةً بعد تناوله.' },
        { method: 'التوقيت', instruction: 'يمكن تناوله في أي وقت من اليوم. غير أنه لا يُؤخَذ قط مباشرةً قبل النوم لتجنّب ركود المريء أو الأمعاء أثناء الاستلقاء.' },
        { method: 'صيانة السوائل اليومية', instruction: 'يجب على المرضى الحفاظ على كمية سوائل إجمالية عالية (6-8 أكواب ماء يومياً) لتجنّب الانحشار البرازي الميكانيكي.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والمراهقون (أكثر من 12 سنة)', notes: '5-10 غرام تؤخذ 1-3 مرات يومياً حسب الشدة السريرية. الحد الأقصى: 30 غرام/يوم. دائماً مع سوائل كافية.' },
        { group: 'الأطفال (6-12 سنة)', notes: '2.5-5 غرام (نصف جرعة البالغين) تُؤخذ 1-2 مرتين يومياً. مراقبة السوائل الإلزامية. تأكّد من قدرة الطفل على بلع الخليط بشكل صحيح لتجنّب خطر الاختناق.' },
        { group: 'الأطفال (أقل من 6 سنوات)', notes: 'يجب أن يحدد طبيب الأطفال الجرعة. لا يُنصح عموماً بالتداوي الذاتي في هذه الفئة العمرية.' },
        { group: 'الحمل والإرضاع', notes: 'الفئة B (آمن). مُرسَّخ كعلاج أوّل مُفضَّل لإمساك الحمل؛ تأثيراته ميكانيكية وتجويفية بحتة، غير ممتَص جهازياً، ولا يُشكّل خطراً على الجنين. آمن أثناء الإرضاع.' },
      ],
      dosage: {
        standard: 'البالغون والمراهقون (أكثر من 12 سنة): 5-10 غرام (ملعقة كبيرة أو كيس واحد) مُذابة في 250 مل ماء أو عصير، تؤخذ 1-3 مرات يومياً. الحد الأقصى: 30 غرام/يوم. يجب استهلاك كل جرعة فوراً قبل التبلّور مع شرب كوب سوائل إضافي. لا تُؤخذ مباشرةً قبل النوم أو في وضعية الاستلقاء.',
        forms: [
          { form: 'أكياس فوّارة (مثل Fybogel)', dose: 'كيس واحد (3.5 غرام قشرة إسباغول) مذاب في 150 مل ماء، يؤخذ مرتين يومياً صباحاً ومساءً.' },
          { form: 'مسحوق القشرة النقية', dose: '5-10 غرام للجرعة في 250 مل ماء، 1-3 مرات يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'الآلية السامة: تتحدّد كلياً بنسبة الألياف إلى الماء. تناول جرعات عالية (أكثر من 30 غرام/يوم) دون ترطيب متناسب يُكوّن كتلة صلبة كثيفة داخل التجويف المعوي.',
          'انسداد معوي حاد، إمساك تام، انتفاخ بطني مؤلم، تضخّم شديد، وغياب أصوات الأمعاء.',
          'انسداد مريئي: إذا ابتُلع مع سائل غير كافٍ، يُسبّب التورّم المبكر داخل المريء اختناقاً حاداً أو انسداداً مريئياً.',
        ],
        management: [
          'الترطيب الغزير الفوري: إعطاء كميات ضخمة من السوائل الفموية إذا كانت مجرى الهواء آمنة والمريض يستطيع البلع.',
          'ضغط المعدة / التقييم الطبي: في حالات الانسداد الهيكلي المؤكّد للمريء أو الأمعاء، يُستلزم التدخّل الجراحي أو بالمنظار لتجنّب انثقاب الأنسجة. لا تُعطَ الملينات المنشّطة.',
        ],
      },
      sideEffects: [
        'انتفاخ وقرقرة معوية وتضخّم عابر مؤقت خلال الأيام الـ3-5 الأولى من العلاج (بسبب تغيّرات التخمير الميكروبي).',
        'خطر الإسداد الميكانيكي للمريء أو الأمعاء مرتبط صارماً بضعف الترطيب.',
        'ردود فعل تحسسية نادرة (طفح جلدي، شرى، تشنّج شعبي) تُبلَّغ أساساً في الأفراد العاملين بمناولة المسحوق السائب.',
      ],
      contraindications: [
        'صعوبة البلع: المرضى الذين يعانون من اضطرابات بلع سابقة، أو تضيّق مريئي، أو تشوّهات هيكلية في الجهاز الهضمي العلوي.',
        'الانحشار البرازي: ممنوع قطعياً إذا كانت كتلة برازية صلبة منحشرة موجودة بالفعل في المستقيم أو القولون.',
        'انسداد الأمعاء: إيليوس ميكانيكي أو تضيّق معروف أو مشتبه به.',
        'حالات الرقاد/نقص الحركة الشديد: المرضى ذوو القدرة الحركية المقيّدة للغاية أو الحالات العصبية المؤثّرة على التمعّج (خطر بالغ للانسداد).',
      ],
      drugInteractions: [
        'انخفاض امتصاص الأدوية: يُشكّل السيلليوم هلاماً مخاطياً سميكاً يمكنه "حبس" أدوية أخرى ومنع امتصاصها. يشمل ذلك: الليثيوم (اضطراب ثنائي القطب)، كاربامازيبين (مضاد للصرع)، مكمّلات الحديد، الديجوكسين.',
        'بروتوكول التوقيت السريري: لتجاوز هذا التفاعل تماماً، يجب تناول السيلليوم 30-60 دقيقة بعد أي دواء فموي آخر، أو على الأقل قبله بساعتين.',
      ],
      storage: {
        forms: [
          { form: 'المسحوق / الأكياس', instructions: 'تُخزَّن في مكان بارد جاف أقل من 25°C في حاويات محكمة الإغلاق. الحماية المطلقة من رطوبة الهواء المحيط إلزامية، إذ يبدأ التعرّض المبكر لبخار الماء التورّم الداخلي ويُتلف الطاقة العلاجية للنبات قبل استخدامه.' },
        ],
      },
      factsAndMyths: [
        { myth: 'السيلليوم دواء OTC صارم لعلاج نوبات الإمساك الحاد فحسب.', fact: 'يعمل السيلليوم بشكل شامل بوصفه "منظّماً للأمعاء". بفضل قدرته العالية على ربط الماء، يمكنه بشكل متناقض المساعدة في تصليب البراز الرخو في حالات الإسهال الخفيف. فضلاً عن ذلك، هو أداة أيضية مُثبَتة سريرياً تُخفّض كوليسترول LDL المُسبّب للتصلّب الشرياني وتُنظّم المؤشرات الجلوكوزية.' },
      ],
    },

    'castor-constipation': {
      name: 'الخروع',
      shortDescription: 'مُسهّل منشّط شديد الفاعلية؛ حمض الريسينولييك المُنشَّط بواسطة الليباز البنكرياسي يُنبّه مستقبلات بروستانويدية في الأمعاء الدقيقة محدثاً تمعّجاً هائلاً وإخلاءً معوياً سريعاً خلال 2-6 ساعات.',
      activeConstituents: [
        { name: 'حمض الريسينولييك', detail: 'حمض دهني غير مشبع مُهيدروكسَل فريد من نوعه، يُشكّل نحو 85-90% من إجمالي محتوى الأحماض الدهنية، يُطلَق في الأمعاء الدقيقة بواسطة إنزيمات الليباز البنكرياسي.' },
      ],
      moa: [
        { title: 'التنشيط الإنزيمي (تأثير الدواء الأولي)', detail: 'زيت الخروع نفسه غير فعّال صيدلانياً. عند وصوله إلى الأمعاء الدقيقة يُحلّله الليباز البنكرياسي، مُحلِّلاً الدهون الثلاثية إلى: جليسيرول + حمض الريسينولييك (المستقلب الفعّال).' },
        { title: 'الارتباط بالمستقبلات (المستوى الجزيئي)', detail: 'حمض الريسينولييك هو المفتاح؛ يعمل ناهضاً انتقائياً لمستقبلات بروستانويد محدّدة: يرتبط بمستقبلات SEP_3 وSEP_4 على الخلايا العضلية الملساء للجدار المعوي، محاكياً بذلك تأثير البروستاغلاندينات الطبيعية ومُحفِّزاً تقلّصات عضلية فورية قوية.' },
        { title: 'تحفيز التمعّج', detail: 'خلافاً للسنا (التي تُؤثّر أساساً على القولون)، يُنشِّط حمض الريسينولييك الأمعاء الدقيقة. يُسبّب تمعّجاً هائلاً — تقلّصات موجية سريعة تدفع المحتويات للأمام بسرعة — وانخفاضاً في زمن العبور بحيث يعجز الجسم عن امتصاص الماء.' },
        { title: 'التأثير الإفرازي (تغيير الكهارل)', detail: 'يُعدّل حمض الريسينولييك نفاذية غشاء الخلية في الغشاء المخاطي المعوي: يُثبّط مضخّة Na/K ATPase (حاجزاً امتصاص الصوديوم والبوتاسيوم)، ويُحفّز إفراز الماء والكهارل إلى التجويف المعوي، محافظاً على سيولة البراز وضخامته للإخلاء السريع.' },
      ],
      uses: [
        'تخفيف أعراض الإمساك الحاد: مؤشَّر حصراً للإخلاء السريع قصير الأمد في الإمساك الحاد المؤقت.',
        'تطهير الأمعاء للإجراءات الطبية: للتطهير التشخيصي للأمعاء قبل الأشعة البطنية، البروكتوسكوبي، تنظير القولون، أو التدخلات الجراحية.',
        'حامل الأدوية (السواغ): يُستخدم مذيباً للحقن الزيتية كبعض العلاجات الهرمونية.',
        'Cremophor EL (مستحلب): مشتقّ من زيت الخروع يُستخدم لإذابة أدوية وريدية كالباكليتاكسيل (Taxol) في علاج السرطان.',
        'تحريض المخاض: يُستخدم سريرياً تحت إشراف صارم في المستشفى لتحفيز تقلّصات الرحم وتحريض المخاض.',
        'الحاجز الجلدي: يدخل في تركيب كريمات طفح الحفاضات والمراهم الواقية لتكوين حاجز مقاوم للماء على الجلد.',
      ],
      howToUse: [
        { method: 'الإعطاء الفموي مع العصير', instruction: 'اخلط الجرعة الموصوفة جيداً مع كوب من عصير البرتقال أو الليمون أو التفاح البارد لإخفاء القوام اللزج والطعم الكريه. يُساعد تبريد الزيت قبل الإعطاء على كبح قرفة البلع والحدّ من الغثيان. وكبديل يمكن خلطه مع مياه الزنجبيل الباردة. اشرب 6-8 أكواب ماء على الأقل طوال اليوم لتعويض السوائل التجويفية المفقودة ومنع الجفاف الجهازي. بداية التأثير: 2-6 ساعات.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والمراهقون (أكثر من 12 سنة)', notes: '15-60 مل جرعة فموية واحدة. بداية التأثير: 2-6 ساعات. الترطيب الغزير الإلزامي (6-8 أكواب ماء) طوال اليوم.' },
        { group: 'الأطفال (2-11 سنة)', notes: '5-15 مل تُعطى حصراً تحت إشراف طبي مباشر.' },
        { group: 'الأطفال (أقل من سنتين)', notes: 'ممنوع قطعياً. لا توجد بيانات سريرية آمنة للرضّع؛ يمكن أن يُسبّب جفافاً مُهدِّداً للحياة واختلالاً سريعاً في الكهارل.' },
        { group: 'الحمل والإرضاع', notes: 'ممنوع قطعياً (الفئة X). يُحفّز حمض الريسينولييك تقلّصات العضلات الملساء للرحم، مما يُشكّل خطراً عالياً للمخاض المبكر أو النزيف الرحمي أو الإجهاض. بيانات السلامة السريرية غائبة أثناء الإرضاع.' },
        { group: 'كبار السن (65 سنة فأكثر)', notes: 'يُثبَّط استخدامه عموماً بسبب زيادة قابلية الإصابة بانخفاض ضغط الدم الانتصابي من الجفاف السريع والإجهاد الجسدي.' },
      ],
      dosage: {
        standard: 'البالغون والمراهقون (أكثر من 12 سنة): 15-60 مل جرعة فموية واحدة. الأطفال (2-11 سنة): 5-15 مل حصراً تحت إشراف طبي مباشر. الأطفال (أقل من سنتين): ممنوع قطعياً. بداية التأثير: 2-6 ساعات. التوجيه السريري: يُبرَّد ويُخلط مع عصير حمضي بارد أو مياه زنجبيل باردة. ترطيب غزير إلزامي (6-8 أكواب ماء) طوال اليوم.',
        forms: [
          { form: 'زيت الخروع (فموي)', dose: 'البالغون: 15-60 مل جرعة واحدة مبرّدة مخلوطة في عصير حمضي بارد أو مياه زنجبيل. الأطفال 2-11 سنة: 5-15 مل تحت إشراف طبي. دائماً مبرّداً ومخلوطاً في عصير بارد.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة فموية حادة (أكثر من 60-100 مل في جرعة واحدة للبالغين).',
          'ضائقة معدية معوية شديدة: تشنّجات بطنية عنيفة، تقيؤ مستمر، إسهال مائي انفجاري.',
          'جفاف سريع: جفاف الأغشية المخاطية، عطش شديد، قلّة إنتاج البول، انخفاض ضغط الدم.',
          'أزمة الكهارل: نقص بوتاسيوم (K+) وصوديوم (Na+) ملحوظ يُفضي إلى ضعف العضلات، ارتعاش، تشوّش، دوار، اضطرابات نظم قلبية خطيرة، وصدمة نقص حجم الدم المحتملة.',
        ],
        management: [
          'أوقف استخدام زيت الخروع فوراً.',
          'إذا كان المريض واعياً أعطِه محاليل الجفاف الفموية (ORS). إذا استمر التقيؤ الشديد، فالاستبدال الوريدي المكثّف للسوائل (محلول ملحي طبيعي أو رينجر لاكتات) إلزامي.',
          'تعويض البوتاسيوم والصوديوم وريدياً أو فموياً لاستقرار نظم القلب.',
          'يمكن إعطاء مُرخّيات العضلات الملساء كهيوسين بيوتيلبروميد (Buscopan) لتخفيف التشنّجات المعوية العنيفة.',
        ],
      },
      sideEffects: [
        'تشنّجات بطنية حادة: ألم بطني شديد ومغص وتشنّجات قولونية مُحفَّزة بالتنشيط التمعّجي السريع القوي للأمعاء.',
        'غثيان وتقيؤ: تهيّج معدي معوي حاد وضائقة، مُحدَّثة أساساً بالقوام الزيتي الثقيل، والقوام اللزج، والطعم المميّز الكريه للغاية للزيت.',
        'الجفاف: فقدان سريع ومفرط لسوائل الجسم التجويفية بسبب الإسهال المائي الانفجاري.',
        'نضوب الكهارل: فقدان ملحوظ للمعادن الأساسية عبر البراز، مُفضياً بشكل أخطر إلى نقص البوتاسيوم (فقدان K) ونقص الصوديوم (فقدان Na).',
        'احتقان الحوض: زيادة تدفّق الدم والاحتقان في منطقة الحوض مما يمكنه تشديد تقلّصات الدورة الشهرية أو تحفيز نشاط الرحم.',
        'اعتماد على الملينات (الإساءة المزمنة): الاستخدام المطوّل أو المتكرّر يمكن أن يُسبّب تلفاً هيكلياً دائماً في الضفيرة المعوية (أعصاب الأمعاء)، مُنتهياً بترهّل قولوني شديد يُعرَف بـ"متلازمة القولون الكسول".',
      ],
      contraindications: [
        'الحمل (الفئة X): يُحفّز تقلّصات الرحم مُؤدياً إلى المخاض المبكر.',
        'انسداد الأمعاء: خطر انثقاب الأمعاء.',
        'الحالات الالتهابية: التهاب الزائدة الدودية، داء كرون، أو التهاب القولون التقرّحي.',
        'الدورة الشهرية: قد تُفاقم احتقان الحوض.',
        'الأطفال أقل من سنتين: ممنوع قطعياً.',
      ],
      drugInteractions: [
        'ضعف امتصاص الأدوية: بسبب الارتفاع الحاد في سرعة العبور المعوي، يُقلّل زيت الخروع بشكل كبير من التوافر البيولوجي وامتصاص ما يكاد يكون جميع الأدوية الفموية المُعطاة في الوقت ذاته. القاعدة السريرية: يجب الفصل بين الأدوية الفموية الأخرى وزيت الخروع بمقدار ساعتين على الأقل.',
        'مدرّات البول (مثل فيوروسيميد/لاسيكس): الاستخدام المتزامن يُضاعف بشكل أسّي خطر فقدان السوائل ونقص البوتاسيوم العميق (نضوب K+).',
        'جليكوسيدات القلب (مثل الديجوكسين): نقص البوتاسيوم الناجم عن زيت الخروع يزيد بشكل ملحوظ من حساسية أنسجة عضلة القلب للرقمانيات، مُسبِّباً سمية الديجوكسين الخطيرة واضطرابات نظم قاتلة محتملة.',
        'الفيتامينات الذائبة في الدهون (A, D, E, K): الاستخدام المزمن أو المتكرّر يُضعف الذوبان الميسيلي وامتصاص هذه الفيتامينات مُفضياً إلى نقص تغذوي.',
      ],
      storage: {
        forms: [
          { form: 'زيت الخروع', instructions: 'يُخزَّن في حاويات ممتلئة جيداً محكمة الإغلاق مقاومة للضوء في مكان بارد، مثالياً أقل من 25°C. الحماية من أشعة الشمس المباشرة مطلوبة لمنع أكسدة كسور الأحماض الدهنية غير المشبعة وتزنّخها.' },
        ],
      },
      factsAndMyths: [
        { myth: 'زيت الخروع عامل تطهير طبيعي آمن يومي لتنظيف الأمعاء وتعزيز نموّ الشعر داخل العيون بأمان.', fact: 'زيت الخروع مُسهّل قوي شديد الفاعلية؛ استخدامه المزمن للتطهير خطير ويمكنه إحداث تلف دائم في الضفيرة المعوية (أعصاب الأمعاء). فضلاً عن ذلك، بينما يُستخدم موضعياً لتعزيز نموّ شعر فروة الرأس أو الرموش، فإن تلامسه المباشر مع الغشاء المخاطي للعين يُسبّب تهيّجاً كيميائياً حاداً والتهاب الملتحمة.' },
      ],
    },

    'cranberry-antiseptic': {
      name: 'التوت البري (كرانبيري)',
      shortDescription: 'يُستخدم التوت البري عاملاً وقائياً للحيلولة دون تكرار التهابات المسالك البولية. يدعم صحة المسالك البولية بمنع التصاق بكتيريا Escherichia coli الممرضة بظهارة المسالك البولية.',
      description: 'يُستخدم التوت البري عاملاً وقائياً للحيلولة دون تكرار التهابات المسالك البولية. يدعم صحة المسالك البولية بمنع التصاق بكتيريا Escherichia coli الممرضة بظهارة المسالك البولية. وبينما يُعدّ التوت البري وسيلة وقاية فعّالة ضد التهابات المسالك البولية، فإن الأدلة تشير إلى أنه غير فعّال في علاج العدوى النشطة.',
      activeConstituents: [
        { name: 'بروأنثوسيانيدينات من النوع A (PACs)', percentage: '', effect: '' },
        { name: 'أنثوسيانينات', percentage: '', effect: 'مضادات أكسدة' },
        { name: 'فلافونولات (كيرسيتين)', percentage: '', effect: '' },
        { name: 'أحماض فينولية', percentage: '', effect: '' },
        { name: 'حمض الأورسوليك (تيربينويدات)', percentage: '', effect: '' },
      ],
      moa: [
        { title: 'تثبيط التصاق بكتيريا E. coli (نشاط منع الالتصاق)', detail: 'تتداخل المركبات الفعّالة، وتحديداً بروأنثوسيانيدينات من النوع A (PACs)، مع قدرة بكتيريا Escherichia coli ذات الشعيرات P على الالتصاق بالخلايا الظهارية المبطّنة للمسالك البولية.' },
        { title: 'التشويه الهيكلي للأهداب', detail: 'قد تُغيّر مكوّنات التوت البري تشكّل الجزيئات السطحية على بكتيريا E. coli مما يتداخل مع آليات التصاق الأهداب.' },
        { title: 'تثبيط الفركتوز', detail: 'يعمل الفركتوز الموجود في التوت البري بالتزامن مع PACs لتثبيط التصاق أهداب النوع 1 بجدار المثانة.' },
        { title: 'تأثيرات مضادة مباشرة للبكتيريا والالتهاب', detail: 'بالإضافة إلى منع الالتصاق، تُظهر مكوّنات التوت البري نشاطاً مضاداً للبكتيريا ضد مسبّبات أمراض المسالك البولية المختلفة، وتمتلك خصائص مضادة للأكسدة تُقلّل الالتهاب الناجم عن العدوى.' },
        { title: 'تعديل البيئة البولية', detail: 'عند إفراز مستقلبات التوت البري المبتلع في البول، تُقلّل من قدرة بكتيريا E. coli والبكتيريا السالبة الجرام الأخرى على الالتصاق بخلايا ظهارة المسالك البولية.' },
      ],
      uses: [
        'يُستخدم التوت البري عاملاً وقائياً للحيلولة دون تكرار التهابات المسالك البولية.',
        'يدعم صحة المسالك البولية بمنع التصاق بكتيريا Escherichia coli الممرضة بظهارة المسالك البولية.',
        'صحة الجهاز الهضمي: يمكن لمركبات PACs في التوت البري تثبيط التصاق بكتيريا Helicobacter pylori بالمخاط المعدي، مما يساعد في إدارة أو الحد من خطر قرح المعدة والعدوى المرتبطة بها.',
        'الحماية القلبية الوعائية: يرتبط الاستهلاك المنتظم بانخفاض ضغط الدم وتحسّن وظيفة الأوعية الدموية وانخفاض أكسدة LDL، مما يساعد في إدارة مخاطر القلب والأوعية الدموية.',
        'صحة الفم: يمكن لمستخلصات التوت البري المساعدة في منع التصاق البكتيريا التي تسبب تكوّن البلاك وتسوس الأسنان.',
      ],
      howToUse: [
        { method: 'صياغة العصير', instruction: 'اختر عصير توت بري نقياً 100% غير محلّى للحد من السكر المضاف.' },
        { method: 'أشكال بديلة', instruction: 'يمكن إضافة التوت البري المجفف إلى الزبادي أو السلطات، ويمكن إضافة التوت البري الطازج إلى العصائر.' },
        { method: 'كبسولات أو أقراص', instruction: 'إذا كنت تتناول المكمّلات، اتّبع تعليمات الجرعة المحددة على العبوة.' },
        { method: 'التوقيت', instruction: 'تناول منتجات التوت البري صباحاً ومساءً للحفاظ على تأثير منع الالتصاق البكتيري بشكل مستمر.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال (2 سنة فأكثر)', notes: 'يمكن استخدام عصير التوت البري أو منتجاته بكميات مناسبة للعمر تحت إشراف البالغين.' },
        { group: 'المراهقون والبالغون', notes: 'شائع الاستخدام للوقاية من التهابات المسالك البولية المتكررة.' },
        { group: 'الحوامل', notes: 'آمن عموماً بكميات غذائية معتدلة وشائع الاستخدام لدعم صحة المسالك البولية.' },
        { group: 'كبار السن', notes: 'يمكن استخدامه للوقاية من التهابات المسالك البولية المتكررة مع مراقبة التفاعلات الدوائية المحتملة (خاصةً مع الوارفارين).' },
      ],
      dosage: {
        standard: 'عصير التوت البري: 240-300 مل تؤخذ 1-3 مرات يومياً. كبسولات/أقراص التوت البري: موحّدة عادةً لتُعطي 36 ملغ من PACs من النوع A يومياً. مستخلص التوت البري المجفف: عادةً 300-400 ملغ فموياً مرتين يومياً.',
        forms: [
          { form: 'عصير التوت البري (100% نقي، غير محلّى)', dose: '240-300 مل تؤخذ 1-3 مرات يومياً.' },
          { form: 'كبسولات/أقراص التوت البري', dose: 'موحّدة عادةً لتُعطي 36 ملغ من بروأنثوسيانيدينات النوع A (PACs) يومياً، الكمية الأكثر دراسةً للوقاية من التهابات المسالك البولية المتكررة.' },
          { form: 'مستخلص التوت البري المجفف', dose: 'عادةً 300-400 ملغ فموياً مرتين يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'الاضطرابات المعدية المعوية: أكثر الأعراض شيوعاً هي التشنجات المعدية والإسهال والغثيان والقيء.',
          'حصوات الكلى: الاستهلاك المزمن بجرعات عالية قد يزيد خطر تطوّر حصوات الكلى من أوكسالات الكالسيوم.',
        ],
        management: [
          'أوقف تناول مكمّلات التوت البري أو الكميات الكبيرة من العصير فوراً.',
          'اطلب المشورة الطبية.',
          'إذا كانت الأعراض خفيفة (مثل الإسهال الخفيف، اضطراب المعدة)، زِد تناول السوائل لضمان الترطيب.',
          'راقب علامات تفاقم الجفاف أو الإسهال الشديد أو ألم البطن الحاد التي تستلزم الرعاية الطبية الفورية.',
        ],
      },
      sideEffects: [
        'الاضطرابات المعدية المعوية: الإفراط في تناول عصير أو مكمّلات التوت البري قد يُسبّب إسهالاً، غثياناً، أو تشنجات معدية.',
        'حصوات الكلى: تحتوي ثمار التوت البري على كميات كبيرة من الأوكسالات، مما قد يزيد خطر حصوات الكلى لدى الأفراد المعرّضين عند استهلاكها بكميات كبيرة.',
        'ارتفاع سكر الدم: عصير التوت البري التجاري قد يحتوي على كميات كبيرة من السكر المضاف مما قد يسبب مشاكل في سكر الدم لدى مرضى السكري.',
      ],
      contraindications: [
        'فرط الحساسية أو الحساسية: ممنوع للأفراد ذوي الحساسية المعروفة للتوت البري أو النباتات المرتبطة به.',
        'تاريخ حصوات الكلى: يحتوي التوت البري على أوكسالات قد تزيد من خطر تكوّن حصوات الكلى من أوكسالات الكالسيوم لدى الأفراد المعرّضين.',
        'مرضى الوارفارين أو مضادات التخثر الأخرى: يُستخدم بحذر نظراً للتعزيز المحتمل لتأثيرات مضادات التخثر وزيادة خطر النزيف.',
        'التهاب المعدة الضموري/نقص حمض المعدة: ينبغي على ذوي حموضة المعدة المنخفضة أو التهاب المعدة توخّي الحذر، إذ قد يُغيّر التوت البري درجة الحموضة المعدية.',
      ],
      drugInteractions: [
        'الوارفارين: أبرز التفاعلات، إذ يمكن للتوت البري تعزيز تأثير الوارفارين المضاد للتخثر مما يزيد خطر النزيف.',
        'أدوية ضغط الدم/الكوليسترول: يوجد احتمال لتعزيز تأثيرات بعض الأدوية مثل أتورفاستاتين (الكوليسترول) ونيفيديبين (ضغط الدم).',
        'مكمّلات الحديد: قد يُقلّل محتوى البوليفينولات والتانينات في التوت البري من امتصاص الحديد عند تناولهما معاً.',
        'العوامل المُحمِّضة / مكمّلات فيتامين C: الحمض البولي الزائد قد يُؤثّر على أحوال المسالك البولية ويُغيّر البيئة البولية.',
        'أدوية السكري: منتجات عصير التوت البري المحلّاة قد تؤثر على ضبط سكر الدم لدى المرضى.',
      ],
      storage: {
        forms: [
          { form: 'التوت البري الطازج', instructions: 'احفظ في ثلاجة عند 4°م واستخدم خلال 2-4 أسابيع.' },
          { form: 'منتجات التوت البري المجفف', instructions: 'احفظ في مكان بارد جاف بعيداً عن الرطوبة والضوء المباشر في حاوية محكمة الإغلاق.' },
          { form: 'عصير التوت البري', instructions: 'ضعه في الثلاجة بعد الفتح واستهلكه حسب تعليمات الشركة المصنّعة.' },
          { form: 'كبسولات/أقراص التوت البري', instructions: 'احفظ في درجة حرارة الغرفة (15-25°م) في مكان جاف بعيداً عن الحرارة والرطوبة والضوء المباشر.' },
        ],
      },
      botanicalFacts: {
        family: 'إريكاسيه',
        activeCompounds: 'بروأنثوسيانيدينات من النوع A (PACs)، أنثوسيانينات (مضادات أكسدة)، فلافونولات (كيرسيتين)، أحماض فينولية، وحمض الأورسوليك (تيربينويدات)',
        clinicalEvidence: 'تدعم الأدلة العلمية أن التوت البري وسيلة وقاية فعّالة ضد التهابات المسالك البولية، غير أنه ليس مطهراً أو علاجاً شافياً للعدوى النشطة.',
      },
    },

    'uva-ursi-antiseptic': {
      name: 'عنب الدب',
      shortDescription: 'عند تناوله، يُمتصّ الأربوتين ويُستقلب في الكبد ويُفرز من الكلى. في المسالك البولية، يتحوّل إلى هيدروكينون حر، وهو عامل مضاد قوي للبكتيريا ضد مسبّبات الأمراض البولية الشائعة مثل E. coli.',
      description: 'النشاط المضاد للبكتيريا: عند تناوله، يُمتصّ الأربوتين ويُستقلب في الكبد ويُفرز من الكلى. في المسالك البولية، يتحوّل إلى هيدروكينون حر، وهو عامل مضاد قوي للبكتيريا ضد مسبّبات الأمراض البولية الشائعة مثل E. coli. الخصائص القابضة: تحتوي الأوراق على تانينات تساعد في تقليص وتشديد الأغشية المخاطية المتورمة والملتهبة في المثانة والإحليل، مما يُخفف الانزعاج. التأثير المُدرّ: يعمل عنب الدب كمدرّ بولي خفيف، مما قد يُعزّز إزاحة البكتيريا والسموم من المسالك البولية.',
      activeConstituents: [
        { name: 'الأربوتين', percentage: '', effect: '' },
        { name: 'التانينات', percentage: '', effect: '' },
        { name: 'ميثيل أربوتين', percentage: '', effect: '' },
      ],
      moa: [
        { title: 'قلوية البول', detail: 'تحلّل مقترنات الأربوتين إلى هيدروكينون فعّال يكون أكثر فعالية وكفاءة في بيئة بولية قلوية (pH > 7).' },
        { title: 'القبض بالتانينات', detail: 'يحتوي عنب الدب أيضاً على تانينات توفّر تأثيراً قابضاً. تساعد هذه المركبات في تقوية وتهدئة الأنسجة المخاطية الملتهبة في المسالك البولية.' },
        { title: 'التأثير المُدرّ للبول', detail: 'يمتلك النبات خصائص مُدرّة للبول خفيفة تزيد من تدفق البول وتُعزّز إزاحة البكتيريا من الجهاز البولي.' },
      ],
      uses: [
        'النشاط المضاد للبكتيريا: عند تناوله، يُمتصّ الأربوتين ويُستقلب في الكبد ويُفرز من الكلى. في المسالك البولية، يتحوّل إلى هيدروكينون حر، وهو عامل مضاد قوي للبكتيريا ضد مسبّبات الأمراض البولية الشائعة مثل E. coli.',
        'الخصائص القابضة: تحتوي الأوراق على تانينات تساعد في تقليص وتشديد الأغشية المخاطية المتورمة والملتهبة في المثانة والإحليل، مما يُخفف الانزعاج.',
        'التأثير المُدرّ: يعمل عنب الدب كمدرّ بولي خفيف، مما قد يُعزّز إزاحة البكتيريا والسموم من المسالك البولية.',
        'دعم الجهاز الهضمي: تاريخياً، استُخدمت الطبيعة القابضة للأوراق لتهدئة الإسهال المزمن وتقليل البلغم الزائد وتنظيم الهضم البطيء.',
        'الألم والالتهاب: استخدم الطب التقليدي الأمريكي الأصلي كمادات الأوراق لتهدئة آلام المفاصل والظهر والروماتيزم والطفح الجلدي.',
        'صحة الفم واللثة: استُخدمت منقوعات الأوراق كغسول فم طبيعي لعلاج قرح الأفتة والتهاب اللثة.',
      ],
      howToUse: [
        { method: 'الأوراق المجففة (شاي/منقوع)', instruction: 'تُنقع الأوراق المجففة عادةً في الماء المغلي لمدة 15 إلى 30 دقيقة.' },
        { method: 'الصبغة السائلة', instruction: 'كثيراً ما تُمزج التحضيرات السائلة مع الماء.' },
        { method: 'المستخلص الموحّد', instruction: 'تتوفر الكبسولات أو الأقراص، وغالباً ما تكون موحّدة لمحتوى الأربوتين.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'يُوصى عموماً بالاستخدام للبالغين فقط.' },
      ],
      dosage: {
        standard: 'تُعطي الجرعات المعتادة للبالغين ما يعادل 400-840 ملغ من الأربوتين يومياً في جرعات مقسّمة للاستخدام قصير الأمد فقط (أسبوع واحد كحد أقصى ما لم يكن تحت إشراف طبي).',
      },
      overdose: {
        symptoms: [
          'معدية معوية: تشنجات معدية شديدة، غثيان، وقيء (جزئياً بسبب ارتفاع محتوى التانين في العشبة).',
          'عصبية ونفسية: طنين الأذن، تهيّج حاد، هذيان، ونوبات تشنجية.',
          'قلبية وتنفسية: صعوبة التنفس، ضيق النفس، والانهيار القلبي الوعائي.',
          'مخاطر كلوية وكبدية: تلف الكبد والكلى من المخاطر الرئيسية المرتبطة بالجرعات العالية المزمنة من الهيدروكينون.',
        ],
        management: [
          'التدخل الطارئ: تناول جرعات عالية جداً قد يُفضي إلى أعراض شديدة بما في ذلك الهذيان والتشنجات والانهيار القلبي الوعائي. اطلب الرعاية الطبية الطارئة فوراً.',
          'إزالة التسمم: إذا كان تناول الجرعة الزائدة حديثاً، قد يلجأ المتخصصون الطبيون إلى الفحم النشط أو غسيل المعدة.',
          'الرعاية الداعمة: أعطِ سوائل وريدية لحماية الكلى (السمية الكلوية) والكبد (السمية الكبدية)، وأعطِ مضادات الغثيان للغثيان والقيء.',
        ],
      },
      sideEffects: [
        'الاضطرابات المعدية المعوية: الغثيان والقيء والتشنجات المعدية شائعة، وعادةً ما تكون بسبب ارتفاع مستوى التانين في النبات.',
        'تغيّر لون البول: من الشائع وغير الضار أن يتحوّل البول إلى اللون البني-الأخضر عند تناول عنب الدب.',
        'أعراض خفيفة: في بعض الحالات، قد يعاني المستخدمون من أرق أو تهيّج.',
      ],
      contraindications: [
        'الحمل والرضاعة: يمكن لعنب الدب إحداث تقلصات في الرحم وقد يضر الجنين النامي.',
        'طب الأطفال: لا يُنصح به عموماً للأطفال دون 12 سنة دون إشراف طبي مباشر.',
        'أمراض الكلى والكبد: يجب على الأشخاص المصابين باضطرابات كلوية أو كبدية، وكذلك المصابين بالتهابات الكلى الحادة، تجنّب هذه العشبة.',
        'المرضى منقوصو المناعة: يُنصح بتجنّبه دون إشراف طبي.',
      ],
      drugInteractions: [
        'الأدوية والأطعمة المُحمِّضة للبول: تتطلب آلية عنب الدب المطهّرة بولاً قلوياً قليلاً لتحويل الهيدروكينون إلى شكله الفعّال القاتل للبكتيريا. تُعيق العوامل المُحمِّضة هذا التحوّل، مما يُقلّل فعالية العشبة بشكل كبير. أمثلة: فيتامين C، عصير التوت البري، عصير البرتقال، وسائر الحمضيات.',
        'أدوية الليثيوم (مثل Lithobid, Eskalith): يمتلك عنب الدب خصائص مُدرّة خفيفة مما قد يُسبّب احتباس الجسم لمستويات خطرة من الليثيوم في الدم، مما قد يُفضي إلى التسمم.',
        'مكمّلات الحديد: تحتوي أوراق عنب الدب على تركيز مرتفع من التانينات. يمكن للتانينات الارتباط بالحديد في الجهاز الهضمي، مما يُقلّل امتصاص مكمّلات الحديد وفعاليتها.',
        'أدوية ضغط الدم: نظراً لأن عنب الدب يمكن أن يعمل كمدرّ للبول، فإن تناوله جنباً إلى جنب مع أدوية ضغط الدم قد يُسبّب انخفاضاً مفرطاً في ضغط الدم.',
      ],
      storage: {
        forms: [
          { form: 'جميع أشكال عنب الدب', instructions: 'احفظ عنب الدب في مكان بارد جاف بعيداً عن أشعة الشمس المباشرة (تحت 25°م) وبعيداً عن متناول الأطفال.' },
        ],
      },
      botanicalFacts: {
        family: 'إريكاسيه (عائلة الخلنج)',
        activeCompounds: 'الأربوتين، التانينات، ميثيل أربوتين',
        clinicalEvidence: 'تدعم الأدلة العلمية استخدامه لتخفيف أعراض التهابات المسالك البولية السفلية الخفيفة غير المعقّدة، غير أن الأدلة محدودة وليست قوية بما يكفي لتحلّ محل المضادات الحيوية في حالات العدوى البكتيرية المؤكدة.',
      },
    },

    'aloe-vera-hair': {
      name: 'الصبار',
      shortDescription: 'تقليل تقشّر فروة الرأس وتناثر القشرة والأعراض الدهنية الخفيفة. ترطيب عميق وتكييف وتحسين ملمس الشعر الجاف والهشّ.',
      description: 'يعمل الصبّار بشكل أساسي كعامل مهدّئ مكثّف ومضاد للالتهاب ومرطّب لأنسجة فروة الرأس. يُشكّل المحتوى العالي من السكريات المتعددة حاجزاً هيدروجيلياً واقياً يُحسّن ترطيب الجلد ويتصدّى للجفاف الموضعي. في الوقت ذاته، تُساعد الإنزيمات البروتينية الحالة على إزالة الخلايا الميتة وتراكم الدهون الزائدة من فتحات الجريبات. يضمن هذا التآزر بيئة صحية متوازنة وغير متهيّجة لفروة الرأس تُحافظ على تكييف الشعر الطبيعي، وتقلّل الحكة والتقشّر.',
      activeConstituents: [
        { name: 'إنزيمات بروتينية حالة', detail: 'قد تُساعد في الإزالة الآمنة لخلايا الجلد الميتة الزائدة من سطح الطبقة القرنية لفروة الرأس.' },
        { name: 'السكريات المتعددة', detail: 'بصفة رئيسية الجلوكومانان والأسيمانان، اللذان يوفّران ترطيباً عميقاً وتأثيرات مرطّبة وخصائص مهدّئة للأغشية المخاطية والجلد.' },
        { name: 'الأحماض الأمينية', detail: 'مجموعة شاملة من الأحماض الأمينية الأساسية وغير الأساسية تُسهم في تكييف الشعر ودعمه البنيوي.' },
        { name: 'الفيتامينات', detail: 'فيتامين A (بيتا كاروتين)، وفيتامين C، وفيتامين E بوصفها مضادات أكسدة موضعية، إلى جانب فيتامينات مجموعة B الأساسية.' },
        { name: 'المعادن', detail: 'عناصر أثرية مهمة تشمل الزنك والنحاس، تدعم التخليق الطبيعي لألياف الشعر وسلامة الخلايا.' },
        { name: 'أنثراكينونات', detail: 'الألوين والإيموسين، متمركزان بصورة رئيسية في خلايا الغمد الحزمي، ويُسهمان في الخصائص المضادة للميكروبات والالتهابات الموثّقة.' },
      ],
      moa: [
        { title: 'آلية التأثير', detail: 'يعمل الصبّار بشكل أساسي كعامل مهدّئ مكثّف ومضاد للالتهاب ومرطّب لأنسجة فروة الرأس. يُشكّل المحتوى العالي من السكريات المتعددة حاجزاً هيدروجيلياً واقياً يُحسّن ترطيب الجلد ويتصدّى للجفاف الموضعي. في الوقت ذاته، تُساعد الإنزيمات البروتينية الحالة على إزالة الخلايا الميتة وتراكم الدهون الزائدة من فتحات الجريبات. يضمن هذا التآزر بيئة صحية متوازنة وغير متهيّجة لفروة الرأس تُحافظ على تكييف الشعر الطبيعي، وتقلّل الحكة والتقشّر.' },
      ],
      uses: [
        'تقليل تقشّر فروة الرأس وتناثر القشرة والأعراض الدهنية الخفيفة.',
        'تخفيف الحكة (الحكة العصبية) والالتهاب الموضعي لفروة الرأس.',
        'ترطيب عميق وتكييف وتحسين ملمس الشعر الجاف والهشّ بنيوياً.',
        'تعزيز نعومة الشعر وملاسة القشيرة والبريق التجميلي العام.',
      ],
      howToUse: [
        { method: 'الاستخلاص العلمي القياسي', instruction: 'التثبيت البارد وعصر طبقة الجيل الداخلي (حمة الورقة) للحفاظ بدقة على السكريات المتعددة عالية الوزن الجزيئي والإنزيمات الحساسة للحرارة.' },
        { method: 'تركيبات منزلية (قناع الجيل الطازج)', instruction: 'قطع ورقة ناضجة وصحية تليها فترة تصريف إلزامية للتخلّص الكامل من عصارة اللاتكس الصفراء الغنية بالأنثراكينونات، ثم استخراج الجيل الداخلي الشفاف جراحياً ومزجه بأدوات نظيفة وتطبيقه بالتساوي على فروة الرأس والشعر لمدة 30 دقيقة، وشطفه بالماء الفاتر.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن تماماً وموصى به للاستخدام الموضعي المنتظم.' },
        { group: 'الأطفال', notes: 'آمن للتطبيق الموضعي في حالات تقشّر فروة الرأس أو الجفاف لدى الأطفال.' },
        { group: 'الحمل والرضاعة', notes: 'يُعدّ آمناً للاستخدام الموضعي/التجميلي؛ والتعرّض الجهازي ضئيل للغاية.' },
        { group: 'التكرار', notes: 'يُطبَّق موضعياً كقناع لفروة الرأس أو مكيّف مستدام من مرتين إلى ثلاث مرات أسبوعياً.' },
      ],
      overdose: {
        symptoms: [
          'احمرار موضعي عابر خفيف، أو إحساس بالحرقة، أو التهاب تماسّي تحسّسي نادر.',
          'الابتلاع الجهازي العرضي للاتكس الموجود على حواف الورقة يُسبّب تأثيرات مسهلة قوية وتقلصات بطنية.',
        ],
        management: [
          'ري المنطقة المصابة فوراً بكميات وفيرة من الماء النظيف وتعليق التطبيق الموضعي مؤقتاً.',
        ],
      },
      sideEffects: [],
      contraindications: [],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'الجيل الطازج (حمة الورقة)', instructions: 'يجب تخزينه في حاويات محكمة الإغلاق في الثلاجة (2–8°م) واستخدامه خلال 48–72 ساعة لمنع التلوّث الميكروبي والتحلل التأكسدي.' },
          { form: 'التركيبات التجارية', instructions: 'يُخزَّن في درجة حرارة الغرفة المضبوطة بعيداً عن أشعة الشمس المباشرة والرطوبة.' },
        ],
      },
      marketedProducts: [
        { name: 'ALOE EVA ALOE VERA HAIR OIL (170 مل)', image: '' },
        { name: 'ALOE EVA HAIR MASK WITH ALOE VERA (250 جم)', image: '' },
      ],
      factsAndMyths: [
        {
          myth: 'يمتلك الصبّار القدرة الكيميائية الحيوية على إحداث تجديد مباشر للشعر وعلاج الصلع الندبي أو الصلع الأندروجيني المتقدم.',
          fact: 'لا يُمارس الصبّار أي تأثير فسيولوجي مباشر على استنبات جريبات الشعر أو مسارات الصلع الوراثي. إذ يعمل حصراً عبر تحسين صحة فروة الرأس الجلدية وتقليل الالتهاب الدقيق وتوفير التكييف التجميلي لحبال الشعر القائمة.',
        },
      ],
      botanicalFacts: {
        activeCompounds: 'إنزيمات بروتينية حالة، جلوكومانان، أسيمانان، أحماض أمينية، فيتامينات A/C/E ومجموعة B، زنك، نحاس، ألوين، إيموسين',
        clinicalEvidence: 'لا يُمارس الصبّار أي تأثير فسيولوجي مباشر على استنبات جريبات الشعر أو مسارات الصلع الوراثي. إذ يعمل حصراً عبر تحسين صحة فروة الرأس الجلدية وتقليل الالتهاب الدقيق وتوفير التكييف التجميلي لحبال الشعر القائمة.',
      },
    },

    'rosemary-hair': {
      name: 'إكليل الجبل',
      shortDescription: 'علاج داعم مساعد في إدارة ترقّق الشعر المنتشر والصلع الأندروجيني المبكر. تقليل حالات الالتهاب الدقيق لفروة الرأس والإجهاد الجريبي المصاحب.',
      description: 'يُمارس إكليل الجبل تأثيراته العلاجية على جهاز الشعر عبر مسارات كيميائية حيوية مميّزة. فحمض الكارنوسيك وحمض الروزماريك يُخفّفان الضرر التأكسدي في البيئة الدقيقة للجريبات، مع كبح سلاسل الالتهاب المُعجّلة لضمور الجريبات. فضلاً عن ذلك، تُحفّز أحادية التيربينات الموجودة في الزيت المتطاير تمدّداً وعائياً موضعياً، مما يُعزّز تدفّق الدم الدقيق إلى الحليمة الأدمية. وبينما تُلمّح بعض النماذج المختبرية أو ما قبل السريرية إلى تفاعلات دقيقة مع المسارات الأندروجينية، فإن التجارب السريرية القوية لم تُثبت قط تثبيطاً حقيقياً مباشراً لإنزيم 5-ألفا-ردكتاز أو ارتباطاً تنافسياً بمستقبلات الأندروجين في فروة رأس الإنسان. إن فعاليته السريرية في تساقط الشعر النمطي مدفوعة بتعزيز الأوعية الدقيقة والدعم المضاد للأكسدة لحماية الأنسجة، بوصفه علاجاً مساعداً مصاحباً لا حصاراً هرمونياً مباشراً.',
      activeConstituents: [
        { name: 'الديتيربينات النشطة بيولوجياً', detail: 'الديتيربينات الفينولية، بصفة رئيسية حمض الكارنوسيك والكارنوسول، ذات قدرات أكسدة دهنية قوية.' },
        { name: 'الأحماض الكربوكسيلية الفينولية', detail: 'حمض الروزماريك وحمض الكافيك، توفّران صفحة مضادة للالتهاب والجذور الحرة موثّقة.' },
        { name: 'الزيوت الأساسية المتطايرة (Aetheroleum)', detail: 'تراكيز عالية جداً من 1,8-سينيول (الإيكاليبتول)، الكافور، وألفا-بينين، مسؤولة عن تأثيرات مضادة للتهيّج ومضادة للميكروبات وتوسيع الأوعية.' },
        { name: 'جليكوسيدات الفلافونويد', detail: 'اللوتيولين، الأبيجينين، والمشتقات ذات الصلة.' },
      ],
      moa: [
        { title: 'آلية التأثير', detail: 'يُمارس إكليل الجبل تأثيراته العلاجية على جهاز الشعر عبر مسارات كيميائية حيوية مميّزة. فحمض الكارنوسيك وحمض الروزماريك يُخفّفان الضرر التأكسدي في البيئة الدقيقة للجريبات، مع كبح سلاسل الالتهاب المُعجّلة لضمور الجريبات. فضلاً عن ذلك، تُحفّز أحادية التيربينات الموجودة في الزيت المتطاير تمدّداً وعائياً موضعياً، مما يُعزّز تدفّق الدم الدقيق إلى الحليمة الأدمية. وبينما تُلمّح بعض النماذج المختبرية أو ما قبل السريرية إلى تفاعلات دقيقة مع المسارات الأندروجينية، فإن التجارب السريرية القوية لم تُثبت قط تثبيطاً حقيقياً مباشراً لإنزيم 5-ألفا-ردكتاز أو ارتباطاً تنافسياً بمستقبلات الأندروجين في فروة رأس الإنسان. إن فعاليته السريرية في تساقط الشعر النمطي مدفوعة بتعزيز الأوعية الدقيقة والدعم المضاد للأكسدة لحماية الأنسجة، بوصفه علاجاً مساعداً مصاحباً لا حصاراً هرمونياً مباشراً.' },
      ],
      uses: [
        'علاج داعم مساعد في إدارة ترقّق الشعر المنتشر والصلع الأندروجيني المبكر.',
        'تقليل حالات الالتهاب الدقيق لفروة الرأس والإجهاد الجريبي المصاحب.',
        'إدارة القشرة الخفيفة (التقشّر الدهني) عبر الكسور المضادة للفطريات المتطايرة.',
        'إحياء تجميلي لمرونة ألياف الشعر وكثافتها والصحة العامة لفروة الرأس.',
      ],
      howToUse: [
        { method: 'العزل العلمي القياسي', instruction: 'تقطير بالبخار على نطاق صناعي للأوراق الطازجة والقمم المزهرة لعزل الزيت الأساسي النقي المركّز المطابق لمعايير دستور الأدوية الأوروبي (Rosmarini aetheroleum).' },
        { method: 'شطفة المستخلص المائي (ماء إكليل الجبل)', instruction: 'نقع 2–3 أفرع خضراء طازجة في الماء المغلي (بعد رفعه عن المصدر الحراري) لمدة 3–5 ساعات في إناء محكم الإغلاق لمنع تطاير أحادية التيربينات الفعّالة. الترشيح بمواد معقّمة في قارورة رش نظيفة.' },
        { method: 'زيت ناقل منقوع', instruction: 'مزج كوب من أوراق إكليل الجبل المجفّفة جيداً مع قاعدة دهنية ناقلة مستقرة (مثل زيت الجوجوبا أو زيت الزيتون). التسخين برفق باستخدام إعداد حمّام مائي لمدة ساعتين، ثم الترشيح التام والتخزين.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'موصى به للاستخدام الموضعي المنتظم عند تخفيف الزيوت الأساسية بدقة في قواعد مركبة مناسبة.' },
        { group: 'الأطفال', notes: 'مقيّد للغاية. تجنّب جميع الزيوت الأساسية المركّزة على الرضّع أو المرضى الأطفال الصغار. يمكن استخدام شطفات مائية خفيفة بحذر شديد.' },
        { group: 'الحمل', notes: 'يُتجنّب الزيت الأساسي النقي المركّز بسبب مخاطر الامتصاص الجهازي الضئيل للكافور؛ ولا تُستخدم المستخلصات المائية الخفيفة إلا بعد الحصول على موافقة طبية مباشرة.' },
        { group: 'الجرعة', notes: '5–10 رشّات من المستخلص المائي تُطبَّق مباشرة على فروة الرأس مرة إلى مرتين يومياً كروتين دائم. تُدلَّك الزيوت المنقوعة مرة إلى مرتين أسبوعياً كعلاج قبل الشامبو.' },
      ],
      overdose: {
        symptoms: [
          'حساسية تماسّية شديدة، تهيّج كيميائي، تقشّر موضعي، إحساس شديد بالحرق، والتهاب شامل لفروة الرأس.',
        ],
        management: [
          'التوقف الفوري عن جميع التطبيقات.',
          'تنظيف فروة الرأس مراراً بشامبو خفيف جداً خالٍ من العطور.',
          'تطبيق واقيات الحاجز الجلدي العلاجية كـD-بانثينول أو جيل الصبّار النقي المنقّى لتهدئة السطح الجلدي.',
        ],
      },
      sideEffects: [],
      contraindications: [],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'المستخلص المائي (ماء إكليل الجبل)', instructions: 'غير مستقر للغاية. نظراً لافتقار المستخلصات المائية المنزلية كلياً لأنظمة الحفاظ المضادة للميكروبات، يجب تخزينها باستمرار في الثلاجة (2–8°م) والتخلّص منها بعد 7 أيام تقويمية كحدٍّ أقصى، لمنع الاستعمار البكتيري أو الفطري الكثيف.' },
          { form: 'الزيوت الأساسية / المنقوعة', instructions: 'تُخزَّن بأمان في أوانٍ زجاجية كهرمانية داكنة، مغلقة بإحكام بعيداً عن الضوء ومتقلّبات الحرارة.' },
        ],
      },
      marketedProducts: [
        { name: 'ROOTAGE HAIR OIL (100 مل)', image: '/images/Rootage Hair Oil.webp' },
        { name: 'ROSEMARY HAIR BOOSTER OIL (50 مل)', image: '/images/Rosemary Hair Booster Oil.jpeg' },
      ],
      factsAndMyths: [
        {
          myth: 'يعمل زيت إكليل الجبل كمحفّز فوري وعدواني لنمو الشعر بين عشية وضحاها، يُضاهي الفعالية الأولية لأدوية تساقط الشعر الوصفية الفموية.',
          fact: 'تُظهر التجارب السريرية المقارنة المصمَّمة جيداً (مثل تجربة Panahi وآخرين) أن زيت إكليل الجبل القياسي يحتاج إلى 6 أشهر متواصلة على الأقل من التطبيق الملتزم مرتين يومياً لمضاهاة تحسينات عدد الشعر الملحوظة مع مينوكسيديل 2%. إنها استراتيجية وعائية ومضادة للأكسدة بطيئة تتطلب انضباطاً متواصلاً لأشهر.',
        },
      ],
      botanicalFacts: {
        family: 'لاميّاسيه',
        activeCompounds: 'حمض الكارنوسيك، الكارنوسول، حمض الروزماريك، حمض الكافيك، 1,8-سينيول (الإيكاليبتول)، الكافور، ألفا-بينين، اللوتيولين، الأبيجينين',
        clinicalEvidence: 'تُظهر التجارب السريرية المقارنة المصمَّمة جيداً (مثل تجربة Panahi وآخرين) أن زيت إكليل الجبل القياسي يحتاج إلى 6 أشهر متواصلة على الأقل من التطبيق الملتزم مرتين يومياً لمضاهاة تحسينات عدد الشعر الملحوظة مع مينوكسيديل 2%. إنها استراتيجية وعائية ومضادة للأكسدة بطيئة تتطلب انضباطاً متواصلاً لأشهر.',
      },
    },

    'rocket': {
      name: 'الجرجير',
      shortDescription: 'دعم تغذوي وعائي لترقّق الشعر وضعف نشاط الجريبات. تقليل تكسّر حبل الشعر المبكر عبر تجديد الدهون.',
      description: 'يُعزّز الجرجير صحة فروة الرأس وحيوية الجريبات بصفة رئيسية عبر محتواه الكثيف من الكبريت العضوي والفلافونويد. تُمارس هذه المركبات تأثيرات مضادة للأكسدة موضعية قوية تُحيّد الجذور الحرة في التجويف الجريبي. تُشير الأدلة التجريبية إلى تعزيز ملحوظ لدوران الأوعية الدقيقة المحيطة بالحليمة الأدمية بسبب التأثيرات التوسعية الخفيفة للإيزوثيوسيانات. يزيد هذا التروية الدموية الموضعية المرتفعة من إمداد الأكسجين والمغذيات البنيوية الأساسية، مما يقلل التكسّر المبكر ويدعم مرحلة النمو الفسيولوجية للشعر.',
      activeConstituents: [
        { name: 'الإيزوثيوسيانات', detail: 'الإيروسين بصفة رئيسية ومركبات الكبريت العضوي المتطايرة الثانوية الناتجة عن تحلّل الجلوكوزينولات.' },
        { name: 'الأحماض الدهنية الثابتة', detail: 'نسب عالية من حمض الأوليك وحمض اللينوليك وتراكيز فسيولوجية طبيعية من حمض الإيروسيك.' },
        { name: 'الجلوكوزينولات', detail: 'الجلوكوإيروسين بصفة رئيسية، بوصفه السلائف البيولوجية للمكوّنات الكبريتية الفعّالة.' },
        { name: 'الفيتامينات والمغذيات الدقيقة', detail: 'كثافات بنيوية عالية من فيتامين A وC وK، مدعومة بالحديد والمغنيسيوم والكبريت العنصري القابل للامتصاص.' },
        { name: 'فلافونويد متعدد الفينول', detail: 'بصفة رئيسية جليكوسيدات الكيرسيتين، والكاإمبفيرول، والإيزوراميتين.' },
      ],
      moa: [
        { title: 'آلية التأثير', detail: 'يُعزّز الجرجير صحة فروة الرأس وحيوية الجريبات بصفة رئيسية عبر محتواه الكثيف من الكبريت العضوي والفلافونويد. تُمارس هذه المركبات تأثيرات مضادة للأكسدة موضعية قوية تُحيّد الجذور الحرة في التجويف الجريبي. تُشير الأدلة التجريبية إلى تعزيز ملحوظ لدوران الأوعية الدقيقة المحيطة بالحليمة الأدمية بسبب التأثيرات التوسعية الخفيفة للإيزوثيوسيانات. يزيد هذا التروية الدموية الموضعية المرتفعة من إمداد الأكسجين والمغذيات البنيوية الأساسية، مما يقلل التكسّر المبكر ويدعم مرحلة النمو الفسيولوجية للشعر.' },
      ],
      uses: [
        'دعم تغذوي وعائي لترقّق الشعر وضعف نشاط الجريبات.',
        'تقليل تكسّر حبل الشعر المبكر عبر تجديد الدهون.',
        'إضافة اللمعان البنيوي والحجم التجميلي للشعر الخامل.',
        'توفير الكبريت العنصري لدعم تشابك مصفوفة الكيراتين القوي.',
      ],
      howToUse: [
        { method: 'الاستخلاص العلمي القياسي (زيت البذور)', instruction: 'عصر بارد صناعي لبذور الجرجير عالية الجودة للحفاظ على مركبات الكبريت المتطايرة والأحماض الدهنية غير المشبعة طويلة السلسلة الدقيقة من التحلّل الحراري.' },
        { method: 'مستخلص الأوراق الطازجة', instruction: 'خلط أوراق الجرجير الطازجة المعقّمة جيداً ميكانيكياً مع حدٍّ أدنى من الماء، وترشيحها من خلال قطعة قماش رفيعة معقّمة للحصول على قناع سائل أخضر كثيف. يُطبَّق مباشرة على فروة الرأس لمدة 30–60 دقيقة قبل الغسيل الروتيني.' },
        { method: 'زيت بذور منقوع', instruction: 'سحق بذور الجرجير الكاملة برفق لكسر قشرتها الخارجية. إضافتها إلى قاعدة زيت ناقلة (كزيت اللوز الحلو) في وعاء محكم. نقعها في بيئة مظلمة دافئة لمدة 14 يوماً مع التحريك اليومي، ثم الترشيح الدقيق.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'موصى به تماماً للعلاج الموضعي المنتظم لفروة الرأس.' },
        { group: 'الأطفال', notes: 'آمن بشكل عام؛ تُفضَّل بشدة تركيبات الزيت المخففة جداً أو عصائر الأوراق الخفيفة لتناسب بشرة الأطفال الحساسة.' },
        { group: 'الحمل', notes: 'آمن للاستخدام الموضعي التجميلي المعتدل المتعارف عليه.' },
        { group: 'التكرار', notes: 'يمكن تطبيق عصير الأوراق المائي مرتين أسبوعياً؛ يُدلَّك زيت البذور المضغوط بارداً في فروة الرأس جيداً لمدة 5–10 دقائق مرتين أسبوعياً قبل الغسيل.' },
      ],
      overdose: {
        symptoms: [
          'احمرار موضعي واضح، دفء عابر مكثّف أو إحساس بالوخز، وتهيّج تماسّي موضعي.',
        ],
        management: [
          'تنظيف فروة الرأس بشكل مكثّف بشامبو خفيف متوازن حمضياً وماء بارد. التوقف عن التطبيق حتى اكتمال الشفاء الجلدي الكامل.',
        ],
      },
      sideEffects: [],
      contraindications: [],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'مستخلص الأوراق الطازجة', instructions: 'غير مستقر للغاية؛ يجب تحضيره وتطبيقه فوراً بسبب الأكسدة الإنزيمية السريعة للمؤشرات الفعّالة.' },
          { form: 'زيت البذور المضغوط بارداً', instructions: 'مستقر للغاية إذا حُفظ في حاويات زجاجية كهرمانية داكنة، محمي بصرامة من الضوء والمؤشرات الحرارية المرتفعة، لمدة تصل إلى 12 شهراً.' },
        ],
      },
      marketedProducts: [
        { name: 'IMTENAN ERUCA OIL (مستخلص البذور)', image: '/images/Picture217.jpeg' },
        { name: 'EL-HAWAG ROCKET OIL', image: '/images/Picture216.jpeg' },
      ],
      factsAndMyths: [
        {
          myth: 'يوفّر وضع أوراق الجرجير المسحوقة الخام علاجاً فورياً ودائماً للثعلبة البقعية في غضون أيام.',
          fact: 'تتطلب الإيزوثيوسيانات الفعّالة تراكيز عالية القياسية أو بروتوكولات علاجية منتظمة ومنضبطة على مدى عدة أشهر لتحقيق فوائد تجميلية قابلة للقياس في سماكة الشعر العامة والتحكم في التكسّر. ولا تُعدّ بديلاً عن المُعدِّلات المناعية الطبية في الثعلبة البقعية.',
        },
      ],
      botanicalFacts: {
        family: 'براسيكاسيه (عائلة الصليبيات)',
        activeCompounds: 'الإيروسين (إيزوثيوسيانات)، الجلوكوإيروسين، حمض الأوليك، حمض اللينوليك، حمض الإيروسيك، فيتامينات A/C/K، حديد، مغنيسيوم، كبريت عنصري، جليكوسيدات الكيرسيتين، الكاإمبفيرول، الإيزوراميتين',
        clinicalEvidence: 'تتطلب الإيزوثيوسيانات الفعّالة تراكيز عالية القياسية أو بروتوكولات علاجية منتظمة ومنضبطة على مدى عدة أشهر لتحقيق فوائد تجميلية قابلة للقياس في سماكة الشعر العامة والتحكم في التكسّر. ولا تُعدّ بديلاً عن المُعدِّلات المناعية الطبية في الثعلبة البقعية.',
      },
    },

    'garlic': {
      name: 'الثوم',
      shortDescription: 'الإدارة المضادة للميكروبات الداعمة للتهاب الجلد الدهني وتراكم الميكروبات الزائد في فروة الرأس. علاج موضعي مساعد مصاحب في حالات الترقّق المناعي الذاتي الموضعي مثل الثعلبة البقعية المبكرة.',
      description: 'يدعم الثوم النظام البيئي لفروة الرأس والوحدات الجريبية من خلال مسارات دوائية متعددة الأهداف. يُمارس الجزء المتطاير من الكبريت العضوي البارز، الذي يقوده الأليسين، تأثيرات مضادة للميكروبات والفطريات واسعة الطيف وقوية، تُثبّط الكائنات الجلدية الانتهازية مثل Malassezia furfur مباشرة. يُحدّث التطبيق الموضعي المحلي تهيّجاً مضاداً خفيفاً وتمدداً وعائياً موضعياً عبر قنوات مستقبلات الإمكانات العابرة (TRP)، مما يُعزّز التروية الدموية الدقيقة للحليمة الأدمية. علاوة على ذلك، تُوفّر بيولوجية الكبريت والسيلينيوم القابلة للامتصاص اللبنات الأساسية اللازمة لتشابك روابط ثاني كبريتيد داخل مصفوفة الكيراتين لحبل الشعر النامي، مما يُحسّن قوة الشد ميكانيكياً ويقلل التكسّر البنيوي المبكر.',
      activeConstituents: [
        { name: 'مركبات الكبريت العضوي', detail: 'الألين (السلائف المستقرة الرئيسية) والأليسين (ثنائي أليل ثيوسلفينات)، الذي يتشكّل عابراً عبر تمزّق الأنسجة الميكانيكي بواسطة إنزيم الألينيز. تشمل الأيضات الثانوية القابلة للذوبان في الزيت الأجوين وثنائي أليل كبريتيد (DADS) وثنائي أليل ثلاثي كبريتيد (DATS).' },
        { name: 'فلافونويد متعدد الفينول', detail: 'بصفة رئيسية جليكوسيدات الكيرسيتين والأحماض الفينولية، تُسهم في اصطياد أنواع الأكسجين التفاعلية (ROS) موضعياً.' },
        { name: 'المعادن الأثرية', detail: 'السيلينيوم القابل للامتصاص وكثافات بنيوية عالية من الكبريت العنصري، الحيويان للحفاظ على سلامة الظهارة.' },
        { name: 'الفيتامينات', detail: 'فيتامين C (حمض الأسكوربيك) وفيتامين B6 (بيريدوكسين)، بوصفهما عاملَي أيض مساعدَين.' },
        { name: 'الأحماض الأمينية الكبريتية', detail: 'أحماض أمينية غير بروتينية تدعم مسارات تخليق الكيراتين وترابطه التقاطعي.' },
      ],
      moa: [
        { title: 'آلية التأثير', detail: 'يدعم الثوم النظام البيئي لفروة الرأس والوحدات الجريبية من خلال مسارات دوائية متعددة الأهداف. يُمارس الجزء المتطاير من الكبريت العضوي البارز، الذي يقوده الأليسين، تأثيرات مضادة للميكروبات والفطريات واسعة الطيف وقوية، تُثبّط الكائنات الجلدية الانتهازية مثل Malassezia furfur مباشرة. يُحدّث التطبيق الموضعي المحلي تهيّجاً مضاداً خفيفاً وتمدداً وعائياً موضعياً عبر قنوات مستقبلات الإمكانات العابرة (TRP)، مما يُعزّز التروية الدموية الدقيقة للحليمة الأدمية. علاوة على ذلك، تُوفّر بيولوجية الكبريت والسيلينيوم القابلة للامتصاص اللبنات الأساسية اللازمة لتشابك روابط ثاني كبريتيد داخل مصفوفة الكيراتين لحبل الشعر النامي، مما يُحسّن قوة الشد ميكانيكياً ويقلل التكسّر البنيوي المبكر.' },
      ],
      uses: [
        'الإدارة المضادة للميكروبات الداعمة للتهاب الجلد الدهني وتراكم الميكروبات الزائد في فروة الرأس.',
        'علاج موضعي مساعد مصاحب في حالات الترقّق المناعي الذاتي الموضعي مثل الثعلبة البقعية المبكرة.',
        'تقليل كسر حبل الشعر الميكانيكي من خلال تعزيز ثاني الكبريتيد والدهون المستهدف.',
        'إحياء التروية الأيضية داخل التجويف الجريبي لدعم حيوية الشعر العامة.',
      ],
      howToUse: [
        { method: 'الاستخلاص العلمي القياسي', instruction: 'استخلاص زيت الثوم بالتقطير البخاري أو الاستخلاص بالمذيب العضوي لتوحيد تركيز ثاني الكبريتيد الديأليل المستقر، أو الضغط البارد لعزل كسور الأليسين المؤقتة في ظروف محكومة الحرارة.' },
        { method: 'تركيبات منزلية (زيت الثوم المنقوع)', instruction: 'سحق أو طحن فصوص الثوم الطازجة برفق لكسر الجدران الخلوية وتنشيط إنزيم الألينيز (السماح بـ5–10 دقائق للتحويل الإنزيمي الكامل من الألين إلى الأليسين الفعّال). غمر المصفوفات المسحوقة في ناقل دهني مستقر (كزيت الزيتون أو زيت جوز الهند) في حاوية زجاجية محكمة. نقعها لمدة 5 إلى 7 أيام في بيئة باردة بعيداً عن الإشعاع الضوئي المباشر، وترشيحها بقماش معقّم، وتجميع الزيت.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'موصى به تماماً للاستخدام الموضعي المنتظم عند التخفيف الكافي في زيوت ناقلة قياسية.' },
        { group: 'الأطفال', notes: 'مقيّد للغاية. تجنّب المستخلصات المركّزة على فروة رأس الأطفال بسبب نفاذية الجلد العالية والتعرّض للحروق الكيميائية الدقيقة.' },
        { group: 'الحمل والرضاعة', notes: 'آمن بشكل عام للاستخدام الموضعي التجميلي المتعارف عليه المنخفض التكرار؛ تجنّب التطبيقات المركّزة والمغلقة والواسعة النطاق بسبب الامتصاص الجهازي للأيضات المتطايرة.' },
        { group: 'التكرار', notes: 'تُدلَّك موضعياً في مناطق فروة الرأس المحددة مرة إلى مرتين أسبوعياً كعلاج قناع قبل الشامبو، تليه غسلة شاملة.' },
      ],
      overdose: {
        symptoms: [
          'إحساسات حرق موضعية شديدة، التهاب تماسّي حاد، احمرار موضعي حاد، وحروق كيميائية دقيقة مؤلمة للجلد.',
        ],
        management: [
          'تنظيف فروة الرأس فوراً بشكل مكثّف بالماء البارد وشامبو متوازن حمضياً خفيفاً غير معطّر.',
          'تعليق جميع تطبيقات الثوم.',
          'تطبيق تركيبات إصلاح الحاجز الجلدي الموضعية (كـD-بانثينول أو جيل الصبّار الخالص المنقّى) لتسريع إعادة التظهّر.',
        ],
      },
      sideEffects: [
        'رائحة جسم وشعر كبريتية حادة ومتبقية للغاية.',
        'دفء جلدي خفيف عابر أو حرقان خلال المرحلة الأولى من التطبيق.',
        'خطر تطوّر التهاب جلد تماسّي تحسّسي متأخر عند الاستخدام المطوّل في أصحاب الجلد الحساس.',
      ],
      contraindications: [],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'المستخلصات المنزلية الطازجة', instructions: 'يجب تبريدها بصرامة (2–8°م) واستهلاكها الكامل خلال 3 إلى 5 أيام للقضاء على التحلّل الكيميائي الحيوي للأليسين وتجنّب أي مخاطر ميكروبية لاهوائية.' },
          { form: 'زيوت الثوم التجارية', instructions: 'تُخزَّن في حاويات زجاجية كهرمانية داكنة محكمة الإغلاق، محمية من الرطوبة وتقلّبات الحرارة وأشعة الشمس المباشرة.' },
        ],
      },
      marketedProducts: [
        { name: 'VATIKA GARLIC ENRICHED HAIR OIL (300 مل)', image: '/images/Picture211.jpg' },
        { name: 'HARIR GARLIC HAIR OIL', image: '/images/Picture210.jpg' },
      ],
      botanicalFacts: {
        activeCompounds: 'الألين، الأليسين، الأجوين، ثنائي أليل كبريتيد (DADS)، ثنائي أليل ثلاثي كبريتيد (DATS)، جليكوسيدات الكيرسيتين، الأحماض الفينولية، السيلينيوم، الكبريت العنصري، فيتامين C، فيتامين B6، الأحماض الأمينية الكبريتية',
        clinicalEvidence: 'يقتصر التحقق السريري للثوم (مثل التجربة المرجعية لـSharquie وآخرين) بصرامة على علاج جيل موضعي مساعد مصاحب في الثعلبة البقعية الموضعية تحديداً (بسبب خصائصه المُعدِّلة للمناعة ومضادة التهيّج). لا يمتلك الثوم أي فعالية علاجية ضد الصلع الوراثي أو الهرموني أو التندّبي.',
      },
    },

    'peppermint-diarrhea': {
      name: 'النعناع الفلفلي',
      shortDescription: 'علاج نباتي مضاد للتشنج معتمد سريرياً لمتلازمة القولون العصبي؛ يعمل المينثول عبر حصار القنوات الكالسيومية من النوع L في العضلات الملساء للأمعاء مُخففاً التشنجات والألم الحشوي.',
      description: 'النعناع الفلفلي (Mentha × piperita) هجين عقيم يحتوي على المينثول (30-55%) كمركب مضاد للتشنج الرئيسي عبر حصار قنوات Ca²⁺ من النوع L، إضافةً إلى تنشيط مستقبلات البرودة TRPM8 لتخفيف الألم الحشوي. الكبسولات المغلّفة معوياً تُوصّل الزيت الفعّال مباشرةً إلى الأمعاء متجاوزةً المعدة.',
      activeConstituents: [
        { name: 'المينثول (30-55%)', percentage: '30-55% من الزيت الطيار', effect: 'حاصر قنوات Ca²⁺ من النوع L في العضلات الملساء للأمعاء؛ ناهض TRPM8 للتخدير الحشوي؛ المركب الفعّال الرئيسي' },
        { name: 'المينثون (14-32%)', percentage: '14-32%', effect: 'كيتون سلائفي يُعزّز عمل المينثول المضاد للتشنج' },
        { name: 'المينثوفوران (1-9%)', percentage: '1-9%', effect: 'مكون ثانوي؛ سمّ كبدي محتمل بتركيزات عالية' },
        { name: 'حمض الروزمارينيك والفلافونويدات (لوتيولين، أبيجينين، إيريوسيترين)', percentage: '', effect: 'مضادة للالتهاب وحماية للمعدة ومضادات أكسدة جهازية' },
      ],
      moa: [
        { title: 'حصار القنوات الكالسيومية (مضاد للتشنج)', detail: 'يعمل المينثول حاصراً طبيعياً للقنوات الكالسيومية ذات الجهد المحكومة من النوع L في العضلات الملساء للأمعاء، مما يمنع تدفق Ca²⁺ من خارج الخلية ويُزيل تشنجات الجهاز الهضمي وفرط الحركة والإسهال.' },
        { title: 'تنشيط مستقبلات TRPM8 (تخفيف الألم الحشوي)', detail: 'يُنشّط المينثول انتقائياً مستقبلات TRPM8 في الألياف الحسية للجهاز الهضمي، مُحدثاً تأثيراً تبريدياً ومُخدِّراً موضعياً يُخفّف الألم الحشوي المزمن.' },
        { title: 'طرد الغازات وتقليل التوتر السطحي', detail: 'يُرخي المصرة السفلية للمريء مما يُيسّر طرد الغاز المحتجز ويُخفّف الانتفاخ والتوتر الشرسوفي بسرعة.' },
        { title: 'مضاد للميكروبات ومضاد للالتهاب', detail: 'فعالية جراثيمية مباشرة ضد مسببات الأمراض المعوية الشائعة؛ يُثبّط سلاسل الإيكوسانويد المؤيدة للالتهاب.' },
      ],
      uses: [
        'تخفيف أعراض متلازمة القولون العصبي: الإسهال والعادات المعوية المتذبذبة والحساسية الحشوية',
        'إدارة تشنجات الجهاز الهضمي والتوتر البطني والانتفاخ وعسر الهضم الوظيفي',
        'التخفيف الداعم للغثيان وداء الحركة الخفيف',
      ],
      howToUse: [
        { method: 'كبسولات الزيت المغلّفة معوياً', instruction: 'يؤخذ 0.2-0.4 مل (180-360 مغ) 3 مرات يومياً قبل 30-60 دقيقة من الوجبات. يجب أن تكون مغلّفة معوياً: تُبلع كاملة ولا تُسحق.' },
        { method: 'شاي النعناع (المنقوع المائي)', instruction: 'يُنقع 1.5-3 غ من الأوراق المجففة في 150 مل من الماء المغلي في إناء مُغطّى لمدة 5-10 دقائق. يُشرب دافئاً 2-3 مرات يومياً.' },
        { method: 'المستخلص السائل', instruction: '1-3 مل يُؤخذ 3 مرات يومياً.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن للغاية وجيد التحمّل بالجرعات العلاجية.' },
        { group: 'الأطفال (أقل من 4 سنوات)', notes: 'زيت النعناع الفلفلي الخالص محظور تماماً: المينثول القريب من الغشاء المخاطي الأنفي يمكن أن يُحدث تشنجات حنجرية/قصبية مميتة وسكتة تنفسية.' },
        { group: 'الأطفال (أكبر من 4 سنوات)', notes: 'المنقوعات المائية الخفيفة (الشاي) آمنة عموماً. تجنّب منتجات الزيت المركّزة.' },
        { group: 'الحوامل والمرضعات', notes: 'استخدامه بجرعات الغذاء اليومي يُعدّ آمناً. تُتجنّب الجرعات العلاجية الكبيرة من الزيوت الأساسية المركّزة بسبب التأثيرات المُحفّزة للدورة الشهرية.' },
        { group: 'كبار السن', notes: 'آمن ولكنه يستلزم تقييماً سريرياً بسبب انتشار فتق الحجاب الحاجز أو الارتجاع.' },
      ],
      dosage: {
        standard: 'الكبسولات المغلّفة معوياً: 0.2-0.4 مل (180-360 مغ) 3 مرات يومياً قبل 30-60 دقيقة من الوجبات. الشاي: 1.5-3 غ أوراق مجففة منقوعة 5-10 دقائق (مُغطّى)، 2-3 مرات يومياً.',
        forms: [
          { form: 'الكبسولات المغلّفة معوياً', dose: '0.2-0.4 مل (180-360 مغ) 3 مرات يومياً قبل 30-60 دقيقة من الوجبات. تُبلع كاملة ولا تُسحق.' },
          { form: 'شاي النعناع', dose: '1.5-3 غ أوراق مجففة في 150 مل ماء مغلٍّ (مُغطّى)، 5-10 دقائق. 2-3 مرات يومياً.' },
          { form: 'المستخلص السائل', dose: '1-3 مل في إيثانول 45%، 3 مرات يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'تآكل شديد في الجهاز الهضمي، بول دموي، طفح جلدي من الزيت غير المغلّف معوياً',
          'اكتئاب الجهاز العصبي المركزي: دوخة وارتباك ورنح وبطء القلب وتوقف التنفس',
          'سمية شديدة: نوبات صرعية',
        ],
        management: [
          'التوقف الفوري. علاج داعم وعرضي مكثّف.',
          'المحافظة على مجرى الهواء وديناميكيات الدم.',
          'مراقبة وظائف الكلى والكبد عند الامتصاص الجهازي الواسع.',
        ],
      },
      sideEffects: [
        'حرقة المعدة وتفاقم الارتجاع المعدي المريئي بسبب استرخاء المصرة السفلية للمريء (يُستخدم الشكل المغلّف معوياً للحدّ منه)',
        'إحساس حارق حول الشرج من بقايا المينثول في البراز',
        'تفاعلات حساسية نادرة عند الحساسين للمينثول',
      ],
      contraindications: [
        'الحساسية المعروفة لـMentha × piperita أو المينثول',
        'ارتجاع معدي مريئي حاد وفتق الحجاب الحاجز: يُرخي زيت النعناع المصرة السفلية للمريء مما يُفاقم ارتداد الحمض',
        'انسداد القناة الصفراوية والتهاب المرارة: النشاط المُنشّط للصفراء يُثير مغصاً صفراوياً حاداً عند مرضى حصوات المرارة',
        'ضعف الكبد الشديد: الحمل الأيضي للأحاديات التيربينية',
        'الرضع والأطفال أقل من 4 سنوات: الزيت الخالص محظور تماماً',
      ],
      drugInteractions: [
        'مضادات الحموضة وحاصرات H2 ومثبطات مضخة البروتون (مثل أوميبرازول): ترفع pH المعدة مما يذيب الغلاف المعوي مبكراً مسببةً حرقة حادة. يُفصل بينها وبين النعناع بساعتين على الأقل.',
        'ركائز CYP3A4 (مثل سيكلوسبورين، فيلوديبين): تثبيط معتدل لـCYP3A4 قد يرفع تركيزات الأدوية ذات المؤشر العلاجي الضيق.',
        'مثبطات الجهاز العصبي المركزي: تهدئة تراكمية مع تركيبات المينثول عالية الجرعات.',
      ],
      storage: {
        forms: [
          { form: 'الأوراق الجافة', instructions: 'حاويات محكمة الإغلاق مقاومة للرطوبة والضوء أقل من 25°م.' },
          { form: 'الكبسولات المغلّفة معوياً', instructions: 'التغليف الأصلي أقل من 25°م بعيداً عن الرطوبة والحرارة.' },
          { form: 'منتجات الزيت الطيار', instructions: 'إغلاق محكم لمنع التبخر والأكسدة التركيبية.' },
        ],
      },
      factsAndMyths: [
        { myth: 'زيت النعناع علاج شافٍ مناسب للزحار البكتيري أو الأميبي الشديد.', fact: 'لا يمتلك زيت النعناع أي فعالية علاجية داخل الجسم ضد مسببات الأمراض المعوية الغازية، كما أنه لا يعالج الجفاف السريري. هو علاج داعم ممتاز معتمد سريرياً يستهدف فرط حركة الأمعاء الوظيفية وأعراض متلازمة القولون العصبي.' },
      ],
      benefits: [
        { icon: 'spa', title: 'معيار ذهبي للقولون العصبي', desc: 'تؤكد تحليلات متعددة أن كبسولات زيت النعناع تُقلّل ألم القولون العصبي وتكرار البراز والإلحاح: معتمدة من الوكالة الأوروبية للأدوية.' },
        { icon: 'air', title: 'مُرخٍ طبيعي للعضلات الملساء', desc: 'حصار قنوات Ca²⁺ من النوع L بالمينثول يُزيل تشنجات الأمعاء المؤلمة وفرط الحركة دون تعوّد.' },
        { icon: 'thermostat', title: 'تخفيف الألم الحشوي عبر TRPM8', desc: 'تنشيط مستقبلات البرودة TRPM8 في الأعصاب الواردة للجهاز الهضمي يُحدث تخديراً تبريدياً مُخففاً لجدران الأمعاء الحساسة.' },
        { icon: 'bubble_chart', title: 'إزاحة سريعة للغاز', desc: 'الفعل الطارد للغاز يُخفّف الانتفاخ والتوتر الشرسوفي المؤلم عبر استرخاء المصرة السفلية للمريء وتيسير خروج الغاز.' },
      ],
      botanicalFacts: {
        origin: 'هجين عقيم (Mentha aquatica × Mentha spicata) يُكاثَر بالقطع الخضرية حصراً. الزراعة التجارية في الولايات المتحدة والهند وأوروبا.',
        parts: 'الأوراق (Folium Menthae Piperitae) والزيت الأساسي الطيار (Aetheroleum Menthae Piperitae) المقطَّر من الأوراق والقمم المزهرة.',
        history: 'مُزرَّع طبياً منذ القرن الثامن عشر على الأقل. تؤكد نشرات EMA وWHO وESCOP دوره في القولون العصبي وتشنجات الجهاز الهضمي وعسر الهضم الوظيفي.',
      },
      preparation: [
        { method: 'كبسولة مغلّفة معوياً', desc: 'كبسولة صيدلانية موحّدة تحتوي على زيت النعناع. تُوصِّل المينثول إلى الأمعاء الدقيقة والقولون متجاوزةً المعدة.', bestFor: 'القولون العصبي؛ تشنجات الجهاز الهضمي؛ الإسهال الوظيفي' },
        { method: 'منقوع مائي (شاي)', desc: 'يُنقع 1.5-3 غ من الأوراق المجففة في 150 مل ماء مغلٍّ في إناء مُغطّى لمدة 5-10 دقائق. التغطية ضرورية للحفاظ على المينثول الطيار.', bestFor: 'انزعاج معدي معوي خفيف، غثيان، انتفاخ، غازات' },
      ],
    },

    'chamomile-diarrhea': {
      name: 'البابونج',
      shortDescription: 'نبات متعدد الأغراض لاضطرابات الجهاز الهضمي الالتهابية والتشنجية؛ الكامازولين والأبيجينين يثبّطان مسارات COX/5-LOX ويؤثران على مستقبلات GABA-A لإحداث تأثيرات مضادة للالتهاب ومضادة للتشنج وخفيفة الطمأنينة.',
      description: 'البابونج الألماني (Matricaria chamomilla) يحتوي على الكامازولين وألفا-بيسابولول (زيت طيار) والأبيجينين-7-غلوكوسيد (فلافونويد مائي) والهرنيارين/الأومبيليفيرون (كومارينات). الكامازولين والبيسابولول مثبّطان فعّالان لـCOX/5-LOX مُقلِّلان للبروستاغلاندينات والليكوترينات المؤيدة للالتهاب. الأبيجينين يرتبط بمستقبلات الديازيبام على GABA-A مُحدثاً طمأنينة خفيفة وتقليل الضائقة الهضمية النفسية.',
      activeConstituents: [
        { name: 'الكامازولين', percentage: 'يتشكّل من الماتريسين أثناء التقطير', effect: 'مثبّط COX و5-LOX قوي؛ مضاد التهاب ومضاد أكسدة بارز؛ اللون الأزرق المميز للزيت المقطّر' },
        { name: 'ألفا-بيسابولول وأكاسيد البيسابولول A وB', percentage: '', effect: 'مضاد تشنج مباشر قوي على العضلات الملساء الهضمية؛ مضاد للبكتيريا والفطريات وحماية للجلد' },
        { name: 'الأبيجينين-7-غلوكوسيد (فلافون)', percentage: 'الفلافونويد المائي الرئيسي', effect: 'رابط تنافسي لمستقبلات ديازيبام GABA-A؛ طمأنينة خفيفة ومضاد قلق؛ مضاد تشنج' },
        { name: 'الكومارينات (الأومبيليفيرون، الهرنيارين)', percentage: '', effect: 'استرخاء ثانوي للعضلات الملساء؛ يُراقَب عند مستخدمي مضادات التخثر' },
      ],
      moa: [
        { title: 'تثبيط COX/5-LOX (مضاد للالتهاب)', detail: 'يُثبّط الكامازولين وألفا-البيسابولول مسارات الأكسجيناز الحلقي (COX) والليبوأكسيجيناز-5 (5-LOX)، مما يُقلّل تخليق البروستاغلاندينات والليكوترينات المؤيدة للالتهاب، ويُخفّف تهيّج الغشاء المخاطي المعوي.' },
        { title: 'مضاد التشنج عبر تثبيط Ca²⁺ والـPDE', detail: 'يُثبّط الأبيجينين والبيسابولول القنوات الكالسيومية ذات الجهد المحكوم وفوسفوداي استيراز النيوكليوتيدات الحلقية، مما يُزيل فرط تفاعل العضلات الملساء والتشنجات البطنية والانتفاخ.' },
        { title: 'ناهضية مستقبلات GABA-A (مهدّئ/مضاد قلق)', detail: 'يعمل الأبيجينين رابطاً تنافسياً لمستقبلات ديازيبام المركزية على GABA-A، مُحدثاً طمأنينة خفيفة وتقليل الضائقة الهضمية الناجمة عن التوتر النفسي.' },
        { title: 'تهدئة الغشاء المخاطي ومضاد للميكروبات', detail: 'فعالية جراثيمية ضد مسببات الأمراض المعوية الشائعة؛ تأثير ملطّف موضعي على الغشاء المخاطي المعدي والمعوي يُعجّل شفاء التقرحات.' },
      ],
      uses: [
        'تخفيف عرضي للإسهال الخفيف والتهاب المعدة وعسر الهضم والانتفاخ',
        'إدارة تشنجات العضلات الملساء الهضمية والمغص البطني المؤلم',
        'علاج داعم للضائقة الهضمية النفسية والأرق الخفيف والقلق',
      ],
      howToUse: [
        { method: 'شاي البابونج (المنقوع المائي)', instruction: 'يُنقع 2-3 غ من رؤوس الأزهار المجففة في 150-250 مل من الماء المغلي في إناء مُغطّى لمدة 5-10 دقائق (التغطية تمنع فقدان الزيوت الطيارة). يُؤخذ 3-4 مرات يومياً بين الوجبات.' },
        { method: 'كبسولات/مستخلصات موحّدة', instruction: '200-500 مغ 2-3 مرات يومياً، موحّدة لمحتوى الأبيجينين أو الزيت الطيار.' },
        { method: 'المستخلص السائل (1:1 في إيثانول 45%)', instruction: '1-4 مل مُخفَّفة في ماء دافئ، 3 مرات يومياً.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن للغاية وجيد التحمّل بالإرشادات العلاجية.' },
        { group: 'الرضع (أقل من 6 أشهر)', notes: 'تحت إشراف طبي صارم فقط.' },
        { group: 'الأطفال', notes: 'المنقوعات المائية الخفيفة المُخفَّفة آمنة لمغص الرضّع والانزعاج الهضمي الخفيف تحت إشراف طبي.' },
        { group: 'الحوامل والمرضعات', notes: 'جرعات الشاي اليومية الطبيعية آمنة عموماً. تُتجنّب الجرعات العلاجية الكبيرة أو المستخلصات المركّزة بسبب خطر تنشيط الرحم النظري.' },
        { group: 'كبار السن', notes: 'آمن بالجرعات المعيارية مع مراقبة دقيقة في مرضى الأمراض المتعددة.' },
      ],
      dosage: {
        standard: 'الشاي: 2-3 غ أزهار مجففة منقوعة 5-10 دقائق (مُغطّى) في 150-250 مل ماء، 3-4 مرات يومياً بين الوجبات. الكبسولات: 200-500 مغ موحّدة، 2-3 مرات يومياً.',
        forms: [
          { form: 'شاي البابونج', dose: '2-3 غ أزهار مجففة منقوعة 5-10 دقائق (مُغطّى) في 150-250 مل ماء. 3-4 مرات يومياً بين الوجبات.' },
          { form: 'الكبسولات الموحّدة', dose: '200-500 مغ 2-3 مرات يومياً، موحّدة لمحتوى الأبيجينين.' },
          { form: 'المستخلص السائل', dose: '1-4 مل في إيثانول 45%، 3 مرات يومياً مُخفَّفة في ماء دافئ.' },
        ],
      },
      overdose: {
        symptoms: [
          'غثيان شديد وقيء غزير ودوار من المستخلصات المركّزة',
          'نعاس مفرط وارتخاء عصبي عضلي من تقوية مسار GABA-A',
        ],
        management: [
          'التوقف الفوري عن التناول',
          'رعاية داعمة وعرضية قوية (ترطيب فموي أو وريدي)',
          'مضادات الهيستامين أو الكورتيكوستيرويدات عند ظهور حساسية تنفسية شديدة',
        ],
      },
      sideEffects: [],
      contraindications: [
        'فرط الحساسية لعائلة النجميات/المركّبة (الرجيد والأقحوان والأقحوانية والبابونج الروماني والأرنيكا) بسبب تقاطع التحسس',
        'التطبيق المباشر على العيون: لا تُطبَّق المنقوعات أو الزيوت مباشرةً على العينين لما قد يُحدثه من التهاب ملتحمة كيميائي حاد',
      ],
      drugInteractions: [
        'مضادات التخثر/مضادات الصفيحات (وارفارين، أسبرين، هيبارين): يحتوي البابونج على كومارينات قد تُضيف تأثيرات مضادة للصفيحات وتُغيّر INR عند الجرعات العلاجية الكبيرة.',
        'مثبّطات الجهاز العصبي المركزي (بنزوديازيبينات، زولبيديم، كحول): الاستخدام المتزامن قد يُحدث طمأنينة تراكمية عميقة عبر مسارات GABA-A؛ يُوصى بتعديل الجرعة أو التباعد الحذر.',
      ],
      storage: {
        forms: [
          { form: 'رؤوس الأزهار المجففة', instructions: 'يُخزَّن في حاويات زجاجية محكمة مقاومة للضوء في مكان بارد ومظلم وجاف. الحماية من الهواء والضوء ضرورية لمنع أكسدة الكامازولين وأكاسيد البيسابولول الطيارة.' },
        ],
      },
      factsAndMyths: [
        { myth: 'يمكن استخدام شاي البابونج كقطرة أو غسول للعين لعلاج التهاب الملتحمة البكتيري وتخفيف الاحمرار.', fact: 'تطبيق منقوعات البابونج على العينين خطر. جزيئات حبوب اللقاح الدقيقة وشعيرات النبات المتبقية في الشاي يمكن أن تُسبّب التهاب ملتحمة تحسسياً حاداً وتهيّج القرنية وتُفاقم الالتهاب.' },
      ],
      benefits: [
        { icon: 'spa', title: 'تخفيف الاضطرابات الهضمية النفسية', desc: 'ارتباط الأبيجينين بمستقبلات GABA-A وفعل البيسابولول المضاد للتشنج يُزيلان التشنجات الهضمية الوظيفية والانزعاج الناجم عن التوتر.' },
        { icon: 'healing', title: 'حماية الغشاء المخاطي من الالتهاب', desc: 'يُثبّط الكامازولين والبيسابولول COX-2 و5-LOX مُقلِّلَين التهاب الغشاء المخاطي وتهيّج المعدة.' },
        { icon: 'bedtime', title: 'مضاد قلق خفيف ومُساعد على النوم', desc: 'يرتبط الأبيجينين بمستقبلات الديازيبام دون خطر انسحاب، مُخففاً القلق ومُحسِّناً بدء النوم.' },
        { icon: 'water_drop', title: 'شفاء الغشاء المخاطي', desc: 'الأفعال المُلطِّفة والمضادة للميكروبات تُعجّل شفاء تقرحات الأفتة وتهيّج الجلد وتلف الغشاء المخاطي.' },
      ],
      botanicalFacts: {
        origin: 'أصيل أوروبا وآسيا المعتدلة. مُطبَّع على نطاق واسع في أمريكا الشمالية. الزراعة التجارية في ألمانيا والمجر ومصر والأرجنتين.',
        parts: 'رؤوس الأزهار المجففة: الكامازولين الأزرق يُطلَق فقط أثناء التقطير بالبخار (يُشكَّل من الماتريسين) وغير موجود بهذا الشكل في النبات الكامل.',
        history: 'استخدمه قدماء المصريين (أهدوه للإله Ra) والإغريق والرومان لعلاج الاضطرابات الهضمية. من أكثر أشجار الشاي العشبي استهلاكاً عالمياً. نشرات EMA وWHO وESCOP تؤكد استخدامه السريري.',
      },
      preparation: [
        { method: 'منقوع مائي (شاي)', desc: 'يُنقع 2-3 غ من رؤوس الأزهار المجففة في 150-250 مل ماء مغلٍّ في إناء مُغطّى لمدة 5-10 دقائق. التغطية ضرورية لمنع فقدان الكامازولين الطيار.', bestFor: 'إسهال خفيف، تشنجات معدية معوية، التهاب معدة، انتفاخ، مغص الرضّع، أرق خفيف' },
        { method: 'مستخلص كبسولات موحّد', desc: 'كبسولات صيدلانية موحّدة لمحتوى الأبيجينين لنتائج علاجية ثابتة.', bestFor: 'القولون العصبي، الضائقة الهضمية المرتبطة بالقلق، جرعة دقيقة' },
      ],
    },

    'fennel-diarrhea': {
      name: 'الشمر',
      shortDescription: 'كارميناتيف ومضاد تشنج للجهاز الهضمي؛ ترانس-الأنيثول يتنافس على قنوات الكالسيوم مُرخياً العضلات الملساء للأمعاء، بينما يدعم التعديل الإستروجيني إدرار الحليب.',
      description: 'الشمر (Foeniculum vulgare Mill.) الزيت الطيار (2-6%) تهيمن عليه ترانس-الأنيثول (50-80%) التي تُثبّط قنوات الكالسيوم في العضلات الملساء للأمعاء تنافسياً مُخففةً تشنجات الجهاز الهضمي وميسِّرةً طرد الغاز. الفنشون (5-20%) يُسهم في الخصائص المضادة للميكروبات. المشتقات الفينولية (كيرسيتين، كيمبيرول، حمض الكلوروجينيك) توفر دعماً مضاداً للأكسدة.',
      activeConstituents: [
        { name: 'ترانس-الأنيثول (50-80%)', percentage: '50-80% من الزيت الطيار', effect: 'المركب الرئيسي المسؤول عن الرائحة الحلوة المميزة وأنشطة الإستروجين وطرد البلغم ومضاد التشنج' },
        { name: 'الفنشون (5-20%)', percentage: '5-20%', effect: 'كيتون أحادي التيربين الحلقي يُسهم في الخصائص المضادة للميكروبات؛ مخاطر سمية عصبية بجرعات عالية' },
        { name: 'الإيستراغول/ميثيل شافيكول (3-20%)', percentage: '3-20%', effect: 'فينيل بروبانويد طبيعي يستلزم توحيداً صارماً بسبب مخاوف السرطانية المطفِّرة بجرعات ضخمة معزولة' },
        { name: 'المشتقات الفينولية والفلافونويدات', percentage: '', effect: 'تشمل الكيرسيتين والكيمبيرول وحمض الكلوروجينيك؛ دعم جهازي مضاد للأكسدة وحماية خلوية' },
      ],
      moa: [
        { title: 'مضاد التشنج والكارميناتيف', detail: 'يُرخي مباشرةً العضلات الملساء للأمعاء. ترانس-الأنيثول يعمل مضاداً تنافسياً لقنوات الكالسيوم مُقلِّلاً تدفق الكالسيوم داخل الخلية ومُخففاً تشنجات الجهاز الهضمي المستحثة بالأستيل كولين والهيستامين. يُيسّر طرد الغاز المحتجز ويُقلّل الضغط التجويفي.' },
        { title: 'التأثير الإفرازي والطارد للبلغم', detail: 'في الجهاز التنفسي، تُحفّز المكوّنات الطيارة الظهارة المُهدَّبة للغشاء المخاطي القصبي، مُزيدةً إنتاج الإفرازات التنفسية السائلة ومُقلِّلةً لزوجة المخاط، مما يُعين على التخلص منه.' },
        { title: 'التعديل الإستروجيني', detail: 'تُظهر مركبات مثل ترانس-الأنيثول وبوليمراتها (كالداي-أنيثول) تشابهاً هيكلياً مع الإستروجين وارتباطاً ضعيفاً بمستقبلاته وتحفيزاً لإفراز البرولاكتين.' },
        { title: 'المضاد للميكروبات والفطريات', detail: 'تُعطّل مكوّنات الزيت الأساسي سلامة الغشاء الخلوي للميكروبات، مُظهِرةً أفعالاً جراثيمية ملحوظة في المختبر ضد مسببات الأمراض الثانوية الشائعة.' },
      ],
      uses: [
        'التخفيف العرضي من اضطرابات الجهاز الهضمي: عسر الهضم والانتفاخ والغازات والألم الهضمي التشنجي المصاحب لمتلازمة القولون العصبي',
        'علاج مغص الرضّع: مثبت سريرياً لتقليل وقت البكاء والتشنجات البطنية باستخدام مستخلص مائي موحّد خفيف',
        'علاج داعم لنزلات الجهاز التنفسي العلوي: تخفيف السعال المنتج والتهاب القصبات الخفيف',
        'دعم إدرار الحليب: تحفيز وتحسين إنتاج حليب الثدي لدى المرضعات عبر مساراته الإستروجينية',
      ],
      howToUse: [
        { method: 'المنقوع المائي (شاي الشمر)', instruction: 'يُنقع 1.5-2.5 غ من البذور المسحوقة طازجاً في 150-200 مل من الماء المغلي في إناء مُغطّى لمدة 10-15 دقيقة (لمنع فقدان الأنيثول الطيار). يُؤخذ 3 مرات يومياً (الحد الأقصى: 7.5 غ يومياً).' },
        { method: 'الكبسولات الفموية الموحّدة', instruction: '200-400 مغ من المستخلص الجاف الموحّد أو كبسولات الزيت الأساسي، 2-3 مرات يومياً.' },
        { method: 'شراب/قطرات مائية للرضّع (للمغص)', instruction: 'مستخلصات مائية موحّدة تعادل 1-2 غ من البذور يومياً للأطفال فوق 4 سنوات، أو جرعات أخفض متخصصة للرضّع تحت إشراف طبي صارم.' },
      ],
      suitableAgeGroups: [
        { group: 'الحمل والرضاعة', notes: 'آمن خلال الرضاعة بجرعات طهي أو منقوع خفيف (يدعم إنتاج الحليب). الزيت الأساسي الخالص محظور تماماً خلال الحمل بسبب خصائصه المُحفِّزة للدورة الشهرية والرحم.' },
        { group: 'الأطفال', notes: 'يُحظر إعطاء الزيت الأساسي الخالص للرضّع أو الأطفال أقل من 4 سنوات بسبب حساسية الجهاز العصبي المركزي للفنشون. الأمان مشروط باستخدام التركيبات المائية البيدياترية المُنظَّمة والمناسبة للعمر فقط.' },
        { group: 'كبار السن والأمراض المزمنة', notes: 'الحالات الحساسة للهرمونات: يجب تجنّبه أو استخدامه بحذر شديد عند المصابين بسرطان الثدي أو الرحم أو المبيض أو بطانة الرحم بسبب النشاط الإستروجيني الخفيف للأنيثول.' },
      ],
      dosage: {
        standard: 'شاي الشمر: 1.5-2.5 غ بذور مسحوقة في 150-200 مل ماء مغلٍّ (مُغطّى)، 10-15 دقيقة، 3 مرات يومياً (الحد الأقصى 7.5 غ/يوم). الكبسولات: 200-400 مغ مستخلص موحّد، 2-3 مرات يومياً.',
        forms: [
          { form: 'المنقوع المائي (شاي الشمر)', dose: '1.5-2.5 غ بذور مسحوقة طازجاً في 150-200 مل ماء مغلٍّ، إناء مُغطّى، 10-15 دقيقة. 3 مرات يومياً. الحد الأقصى 7.5 غ يومياً.' },
          { form: 'الكبسولات الفموية الموحّدة', dose: '200-400 مغ مستخلص جاف موحّد أو كبسولات زيت أساسي، 2-3 مرات يومياً.' },
          { form: 'شراب/قطرات مائية للرضّع', dose: 'مستخلصات مائية موحّدة تعادل 1-2 غ بذور يومياً للأطفال فوق 4 سنوات؛ جرعات أخفض متخصصة للرضّع تحت إشراف طبي.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة فموية حادة (زيت أساسي خالص مركّز): تهيّج معدي معوي (غثيان وقيء) وطفح جلدي وتنشيط الجهاز العصبي المركزي — اضطراب وهذيان ونوبات صرعية (بسبب تراكم الفنشون والأنيثول في الجهاز العصبي المركزي)',
          'تهيّج موضعي (زيت أساسي غير مُخفَّف): احمرار وتفاعلات تحسس ضوئي والتهاب جلد تماسي',
        ],
        management: [
          'التوقف الفوري عن الاستخدام؛ علاج عرضي',
          'عند النوبات: إعطاء مضادات الاختلاج (مثل البنزوديازيبينات)؛ المحافظة على مجرى الهواء والمراقبة',
          'عند التهيّج الموضعي: غسيل جيد بالماء البارد والصابون؛ تجنّب أشعة الشمس المباشرة وتطبيق مُرطِّب محايد',
        ],
      },
      sideEffects: [],
      contraindications: [
        'فرط الحساسية: الحساسية المعروفة لـFoeniculum vulgare أو أفراد عائلة الخيمية الأخرى (كالكرفس والكمون والأنيسون والجزر)',
        'الأورام الخبيثة: المرضى المصابون بأورام خبيثة معتمدة على الإستروجين أو اضطرابات الغدد الصماء النشطة',
      ],
      drugInteractions: [
        'العلاجات الهرمونية (موانع الحمل الفموية، العلاج التعويضي الهرموني): قد تتداخل الجرعات العلاجية العالية مع فعالية عوامل الإستروجين الخارجية أو تُضاعفها بسبب الخصائص الإستروجينية النباتية.',
        'سيبروفلوكساسين/الفلوروكينولونات: قد يُقلّل الشمر الامتصاص المعوي والتوافر البيولوجي للسيبروفلوكساسين؛ يُفصل بين تناول الاثنين بساعتين على الأقل.',
      ],
      storage: {
        forms: [
          { form: 'البذور المسحوقة/الكاملة والكبسولات الموحّدة', instructions: 'يُخزَّن في حاويات محكمة غير قابلة للاختراق مقاومة للضوء في بيئة باردة جافة (أقل من 25°م) لمنع تطاير الأنيثول وتدهور المكوّنات الفعّالة.' },
        ],
      },
      factsAndMyths: [
        { myth: 'زيت الشمر الأساسي آمن 100% لابتلاعه من قِبَل الرضّع لعلاج المغص لأنه طبيعي.', fact: 'زيت الشمر الأساسي الخالص مركّز للغاية وقد يكون ساماً للجهاز العصبي المركزي النامي للرضيع؛ القطرات المائية البيدياترية الخاصة المُخفَّفة للغاية هي الآمنة سريرياً فقط.' },
      ],
      benefits: [
        { icon: 'spa', title: 'تخفيف عسر الهضم والغازات', desc: 'يُرخي تضاد ترانس-الأنيثول لقنوات الكالسيوم العضلات الملساء للجهاز الهضمي مُطرِداً الغاز المحتجز ومُخففاً الانتفاخ والانزعاج الهضمي.' },
        { icon: 'child_care', title: 'علاج مغص الرضّع', desc: 'ثبت سريرياً أن المستخلصات المائية الموحّدة تُقلّل وقت البكاء والتشنجات البطنية عند الرضّع.' },
        { icon: 'air', title: 'طارد للبلغم التنفسي', desc: 'تُحفّز المكوّنات الطيارة الظهارة المُهدَّبة القصبية مُقلِّلةً لزوجة المخاط ومُعينةً على التخلص من النزلة والسعال المنتج.' },
        { icon: 'water_drop', title: 'دعم إدرار الحليب', desc: 'التعديل الإستروجيني عبر ترانس-الأنيثول يُحفّز إفراز البرولاكتين داعماً إنتاج حليب الثدي لدى المرضعات.' },
      ],
      botanicalFacts: {
        origin: 'أصيل منطقة البحر الأبيض المتوسط. مُزرَّع على نطاق واسع في أوروبا والشرق الأوسط والهند والصين.',
        parts: 'الثمار (المعروفة شعبياً بالبذور): الثمار المجففة الناضجة (Fructus). الزيت الطيار يُقطَّر من الثمار والعشب.',
        history: 'مُستخدَم منذ العصور القديمة من قِبَل المصريين والرومان لصحة الجهاز الهضمي والمغص. صدرت نشرات رسمية عن EMA وWHO بشأن ثمر الشمر.',
      },
      preparation: [
        { method: 'شاي بذور الشمر', desc: 'يُسحق 1.5-2.5 غ من بذور الشمر خفيفاً وينقع في 150-200 مل ماء مغلٍّ في إناء مُغطّى لمدة 10-15 دقيقة. يُشرب دافئاً 2-3 مرات يومياً.', bestFor: 'تشنجات الإسهال، انتفاخ، غازات، مغص الرضّع' },
      ],
    },

    'peppermint-dyspepsia': {
      name: 'النعناع الفلفلي',
      shortDescription: 'مضاد تشنج معتمد سريرياً لعسر الهضم والقولون العصبي؛ يحصر المينثول قنوات Ca²⁺ من النوع L في العضلات الملساء للأمعاء مُخففاً الامتلاء بعد الوجبات والغازات والتشنجات البطنية، بينما يُنشّط مستقبلات TRPM8 للتخدير الحشوي.',
      description: 'النعناع الفلفلي (Mentha x piperita L.) يحتوي على المينثول (30-55%) الذي يحصر قنوات الكالسيوم ذات الجهد المحكوم من النوع L في العضلات الملساء للأمعاء مُقلِّلاً الانقباضات وفرط الحركة، كما يُنشّط مستقبلات TRPM8 للتخدير الحشوي التبريدي. التأثير المُفرِز للصفراء يُعين على هضم الدهون ويُقلّل عسر الهضم الوظيفي ما بعد الأكل.',
      activeConstituents: [
        { name: 'المينثول (30-55%)', percentage: '30-55% من الزيت الطيار', effect: 'كحول أحادي التيربين الرئيسي المسؤول عن إحساس البرودة وخصائص التخدير الموضعي وأنشطة استرخاء العضلات الملساء' },
        { name: 'المينثون (14-32%)', percentage: '14-32%', effect: 'كيتون أحادي التيربين مرتبط هيكلياً بالمينثول يُقدّم أنشطة طرد غازات ثانوية' },
        { name: 'المينثوفوران (1-10%) والإيزومينثون', percentage: '1-10%', effect: 'مركبات ثانوية ضرورية لتحديد الأنواع؛ الإفراط في المينثوفوران يدل على تراجع الدرجة الصيدلانية أو التقادم' },
        { name: '1,8-سينيول (الإيكاليبتول) والليمونين', percentage: '', effect: 'آليات إفرازية ومُفرِّغة للاحتقان التنفسي ومطهِّرة تكميلية' },
        { name: 'حمض الروزمارينيك', percentage: '', effect: 'حمض فينولي كربوكسيلي بارز بأفعال مضادة للأكسدة ومضادة للفيروسات وحماية الأنسجة' },
        { name: 'اللوتيولين والإيريوسيترين والهيسبيريدين', percentage: '', effect: 'غليكوسيدات فلافونويدية توفر اصطياداً للجذور الحرة وتشنجاً معوياً مُكمِّلاً' },
      ],
      moa: [
        { title: 'انحلال تشنج العضلات الملساء المباشر', detail: 'يعمل المينثول حاصراً موضعياً مباشراً لقنوات الكالسيوم ذات الجهد المحكوم من النوع L في العضلات الملساء للأمعاء. بتثبيط تدفق الكالسيوم عبر الغشاء، يُقلّل سعة وتواتر انقباضات الجهاز الهضمي، مُخففاً التشنجات الحشوية والفرط الحركي الموضعي.' },
        { title: 'التبريد والتفريج وتخفيف الألم الموضعي', detail: 'يُحفّز المينثول انتقائياً مستقبلات TRPM8 في نهايات الأعصاب الجلدية والمخاطية، مُوجِداً إشارة تبريد فيزيولوجية تُثبّط انتقال الألم الثانوي وتُرقّق إفرازات المخاط اللزج.' },
        { title: 'الكارميناتيف والتأثير المُفرِز للصفراء', detail: 'يُرخي المصرة السفلية للمريء ممكِّناً طرد الغاز المحتجز بسهولة. في الوقت ذاته يُحفّز إفراز الصفراء الكبدية مُيسِّراً هضم الدهون الفعّال وتقليل عسر الهضم الوظيفي ما بعد الأكل.' },
        { title: 'الخصائص المضادة للميكروبات', detail: 'تُعطّل التيربينات الشحمية الأغشية الخلوية البكتيرية، مُظهِرةً أفعالاً جراثيمية ضد مسببات الأمراض المعوية والتنفسية العلوية الشائعة.' },
      ],
      uses: [
        'إدارة متلازمة القولون العصبي: تخفيف التشنجات البطنية المؤلمة والتشنجات القولونية السفلية والانتفاخ والإلحاح',
        'تخفيف عسر الهضم والغازات: مكافحة الامتلاء الشرسوفي ما بعد الأكل والغثيان الوظيفي وآلام الغازات المعدية',
        'دعم احتقان الجهاز التنفسي: إدارة تراكم المخاط والنزلة ونوبات السعال المصاحبة للبرد الشائع والتهاب القصبات الحاد',
        'تخفيف صداع التوتر: تطبيق الزيت الموضعي على الجبهة والصدغين يُوفّر تبريداً سريعاً ملموساً',
      ],
      howToUse: [
        { method: 'المنقوع المائي (شاي النعناع)', instruction: 'يُنقع 1.5-3.0 غ من الأوراق المجففة في 150-200 مل من الماء المغلي في إناء مُحكم الإغلاق لمدة 10 دقائق. يُؤخذ 3 مرات يومياً بين الوجبات أو بعدها.' },
        { method: 'كبسولات الزيت الأساسي المغلّفة معوياً', instruction: '0.2-0.4 مل من الزيت الأساسي الموحّد للكبسولة، 2-3 مرات يومياً. الغلاف المعوي إلزامي لمنع إطلاق الزيت مبكراً في المعدة مما قد يُسبّب حرقة.' },
        { method: 'التركيبات السائلة الموضعية', instruction: '10% مينثول أو زيت نعناع مُذاب في إيثانول، يُدلَّك بلطف على الصدغين لتخفيف الصداع، أو يُطبَّق على الجلد السليم لآلام العضلات الموضعية.' },
        { method: 'الاستنشاق بالبخار', instruction: '3-4 قطرات من الزيت الخالص تُضاف إلى ماء ساخن للاستنشاق لتنظيف مجرى الهواء.' },
      ],
      suitableAgeGroups: [
        { group: 'الحمل والرضاعة', notes: 'آمن بالجرعات الغذائية الطبيعية (1-2 كوب يومياً). الجرعات العلاجية الكبيرة أو الزيوت الأساسية الخالصة ممنوعة بسبب خطر التأثيرات المُحفِّزة للدورة الشهرية. قد يُقلّل النعناع قليلاً إنتاج الحليب بكميات كبيرة على مدى فترات طويلة.' },
        { group: 'الأطفال (أقل من 4 سنوات)', notes: 'محظور تماماً عند الرضّع والأطفال الصغار أقل من 4 سنوات. تطبيق المينثول أو زيت النعناع مباشرةً على خياشيم الرضيع أو وجهه أو صدره يمكن أن يُحدث تشنجات حنجرية أو قصبية مفاجئة شديدة مؤدية إلى سكتة تنفسية حادة.' },
        { group: 'كبار السن والأمراض المزمنة', notes: 'آمن لمرضى القولون العصبي المسنّين، لكنه ممنوع عند مرضى الارتجاع المعدي المريئي الشديد أو فتق الحجاب الحاجز، إذ إن استرخاء المصرة الحنجرية قد يُفاقم ارتداد الحمض.' },
      ],
      dosage: {
        standard: 'الشاي: 1.5-3.0 غ أوراق مجففة في 150-200 مل ماء مغلٍّ (مُغطّى)، 10 دقائق، 3 مرات يومياً. الكبسولات المغلّفة معوياً: 0.2-0.4 مل، 2-3 مرات يومياً. الموضعي: 10% مينثول في إيثانول.',
        forms: [
          { form: 'المنقوع المائي (شاي)', dose: '1.5-3.0 غ أوراق مجففة في 150-200 مل ماء مغلٍّ، 10 دقائق (إناء مُغطّى)، 3 مرات يومياً بين الوجبات أو بعدها.' },
          { form: 'كبسولات الزيت المغلّفة معوياً', dose: '0.2-0.4 مل زيت أساسي موحّد، 2-3 مرات يومياً. الغلاف المعوي إلزامي.' },
          { form: 'السائل الموضعي', dose: '10% مينثول أو زيت نعناع في إيثانول، يُدلَّك بلطف على الصدغين أو الجلد السليم.' },
          { form: 'الاستنشاق بالبخار', dose: '3-4 قطرات زيت خالص في ماء ساخن، يُستنشق لتنظيف مجرى الهواء.' },
        ],
      },
      overdose: {
        symptoms: [
          'ألم حارق شديد في الجهاز الهضمي وغثيان وقيء',
          'دوخة ورنح (فقدان التنسيق الحركي)',
          'اضطراب نظم القلب',
          'في الحالات الكارثية: اكتئاب الجهاز العصبي المركزي مؤدياً إلى الغيبوبة',
        ],
        management: [
          'التوقف الفوري عن الاستخدام',
          'غسيل المعدة إذا كان الابتلاع ضخماً واكتشف مبكراً',
          'رعاية داعمة ومراقبة القلب والجهاز التنفسي',
          'إدارة الأعراض العصبية بصورة عرضية',
        ],
      },
      sideEffects: [],
      contraindications: [
        'الارتجاع المعدي المريئي الحاد: يُتجنّب عند المصابين بمرض الارتجاع المعدي المريئي النشط أو فتق الحجاب الحاجز أو الحرقة الشديدة',
        'انسداد القناة الصفراوية: ممنوع عند مرضى حصوات المرارة والتهاب المرارة الحاد وانسداد القنوات الصفراوية، إذ يمكن أن يُثير نشاطه المُفرِز للصفراء مغصاً صفراوياً شديداً',
      ],
      drugInteractions: [
        'مضادات الحموضة وحاصرات H2 ومثبطات مضخة البروتون (مثل مثبطات PPI): تناول مضادات الحموضة مع كبسولات النعناع المغلّفة معوياً يُذيب الغلاف مبكراً في المعدة بسبب ارتفاع pH مسبباً حرقة شديدة. يُفصل بينهما بساعتين على الأقل.',
        'إنزيمات السيتوكروم P450 (CYP3A4): يمكن أن يثبّط زيت النعناع أيض CYP3A4؛ يُوخذ الحذر عند إعطائه مع أدوية ذات مؤشر علاجي ضيق تُستقلب عبر هذا المسار.',
      ],
      storage: {
        forms: [
          { form: 'الأوراق الجافة والكبسولات', instructions: 'يُخزَّن في حاويات محكمة مقاومة للضوء بعيداً عن الحرارة المباشرة والرطوبة. يُحفظ أقل من 25°م لحماية المكوّنات الأحادية التيربينية الطيارة من التبخر.' },
        ],
      },
      factsAndMyths: [
        { myth: 'زيت النعناع علاج طبيعي رائع لدهن أنف الرضيع لمساعدته على التنفس أثناء البرد الشديد.', fact: 'تطبيق زيت النعناع أو المينثول بالقرب من أنف الرضيع يمكن أن يُحدث تشنجات حنجرية مُهدِّدة للحياة وسكتة تنفسية انعكاسية. لا يجوز قطعاً استخدامه على وجوه الأطفال أقل من 4 سنوات.' },
      ],
      benefits: [
        { icon: 'spa', title: 'تخفيف القولون العصبي وعسر الهضم', desc: 'حصار Ca²⁺ من النوع L بالمينثول يُزيل التشنجات المعوية المؤلمة والامتلاء ما بعد الأكل والغازات.' },
        { icon: 'thermostat', title: 'التخدير الحشوي عبر TRPM8', desc: 'تنشيط مستقبلات البرودة TRPM8 في الأعصاب الواردة للجهاز الهضمي يُحدث تخديراً تبريدياً مُحسَّساً لجدران الأمعاء المفرطة الحساسية.' },
        { icon: 'water_drop', title: 'مُفرِز الصفراء والهضم', desc: 'تحفيز إفراز الصفراء يُيسِّر هضم الدهون ويُقلّل عسر الهضم الوظيفي.' },
        { icon: 'air', title: 'مُفرِّج الاحتقان التنفسي', desc: 'المينثول الطيار يُرقِّق المخاط ويُخفّف احتقان الجهاز التنفسي العلوي عبر تنشيط TRPM8.' },
      ],
      botanicalFacts: {
        origin: 'نوع هجين (Mentha aquatica × Mentha spicata). العائلة: Lamiaceae.',
        parts: 'الأوراق (Menthae piperitae folium) والزيت الأساسي الطيار المقطَّر.',
        history: 'تؤكد نشرتا EMA وWHO دور النعناع العلاجي في القولون العصبي وعسر الهضم واضطرابات الجهاز الهضمي الوظيفية.',
      },
      preparation: [
        { method: 'منقوع مائي (شاي)', desc: 'يُنقع 1.5-3 غ من الأوراق المجففة في 150-200 مل ماء مغلٍّ في إناء مُحكم الإغلاق لمدة 10 دقائق للحفاظ على الزيوت الطيارة.', bestFor: 'عسر الهضم، انتفاخ، غازات خفيفة' },
        { method: 'كبسولات الزيت المغلّفة معوياً', desc: '0.2-0.4 مل من كبسولات الزيت الأساسي الموحّد. الغلاف المعوي يمنع الإطلاق المبكر في المعدة.', bestFor: 'القولون العصبي، تشنجات معدية معوية، عسر الهضم الوظيفي' },
        { method: 'موضعي / استنشاق', desc: '10% مينثول في إيثانول لتخفيف الصداع الموضعي؛ 3-4 قطرات زيت خالص في ماء ساخن للاستنشاق بالبخار.', bestFor: 'صداع التوتر، احتقان الجهاز التنفسي' },
      ],
    },

    'chamomile-dyspepsia': {
      name: 'البابونج',
      shortDescription: 'نبات متعدد الأغراض لعسر الهضم العصبي وتشنجات الجهاز الهضمي؛ يثبّط الكامازولين وألفا-البيسابولول مسارات COX-2/5-LOX بينما يرتبط الأبيجينين بمستقبلات GABA-A مُحدثاً تأثيرات مجمّعة مضادة للالتهاب ومضادة للتشنج وخفيفة القلق.',
      description: 'البابونج الألماني (Matricaria recutita L.) يجمع الزيوت السيسكويتيربينية الطيارة (الكامازولين، ألفا-البيسابولول) مع الفلافونويدات (الأبيجينين، اللوتيولين) والكومارينات (الهرنيارين، الأومبيليفيرون). الكامازولين والبيسابولول يُثبّطان بقوة إنزيمات COX و5-LOX. الأبيجينين-7-غلوكوسيد يرتبط تنافسياً بمستقبلات ديازيبام GABA-A مُحدثاً طمأنينة خفيفة ومضاد قلق.',
      activeConstituents: [
        { name: 'الكامازولين', percentage: 'يتشكّل من الماتريسين أثناء التقطير', effect: 'مشهور بملف مضاد التهاب ومضاد أكسدة وخافض حرارة بارز؛ يُضفي اللون الأزرق العميق المميز للزيت' },
        { name: 'ألفا-البيسابولول وأكاسيد البيسابولول A وB', percentage: '', effect: 'فعل مضاد تشنج مباشر عميق على العضلات الملساء الهضمية؛ إضافةً إلى خصائص مضادة للبكتيريا والفطريات وحماية الجلد' },
        { name: 'الأبيجينين والأبيجينين-7-غلوكوسيد', percentage: 'الفلافونويد المائي الأساسي', effect: 'خصائص مضادة القلق والتهدئة الخفيفة وارتخاء العضلات عبر ارتباط مستهدف بمستقبلات GABA-A المركزية' },
        { name: 'اللوتيولين والكيرسيتين', percentage: '', effect: 'اصطياد قوي متآزر للجذور الحرة وترميم الأنسجة الموضعية ونشاط مضاد التهاب تكميلي' },
        { name: 'الكومارينات (الهرنيارين والأومبيليفيرون)', percentage: '', effect: 'دعم ثانوي مضاد للتشنج وضد الفطريات الخفيف ضمن الجرعات العلاجية الفيزيولوجية' },
      ],
      moa: [
        { title: 'التأثير المضاد للقلق والتهدئة الخفيفة', detail: 'يرتبط الأبيجينين بتقارب عالٍ انتقائياً بمستقبلات الديازيبام المركزية ضمن مُعقَّد مستقبل GABA-A في الدماغ. يُعدِّل هذا الفعل انتقال الأعصاب مُحدثاً تأثيراً مضاداً للقلق ومُحرِّضاً للنوم دون التسبب في ضعف التنسيق الحركي أو خصائص انسحاب شبيهة بالباربيتورات.' },
        { title: 'مضاد الالتهاب وترميم الأنسجة', detail: 'يُثبّط الكامازولين النشط وألفا-البيسابولول بقوة إنزيمات مؤيدة للالتهاب. يُثبّطان تخليق البروستاغلاندين E2 (PGE2) ويُخمدان نشاط الأكسجيناز الحلقي-2 (COX-2) ومسارات الليبوأكسيجيناز-5 (5-LOX). إضافةً إلى ذلك يُظهران أفعالاً مضادة للجذور الحرة بارزة تحمي أغشية الخلايا من الأكسدة الدهنية.' },
        { title: 'التأثير المضاد للتشنج المعوي', detail: 'يعمل مُرخياً مباشراً غير نوعي للعضلات الملساء الحشوية. يُقلّل ألفا-البيسابولول والفلافونويدات التوتر المعوي ويُنقص فرط الحركة التجويفي ويُحدث تأثيراً مضاداً للهضم بحماية الغشاء المخاطي المعدي من الضرر.' },
        { title: 'الأفعال المضادة للميكروبات والملطِّفة الموضعية', detail: 'مكوّنات الزيت الأساسي الموضعية تُحلِّل الأغشية الخلوية للبكتيريا والفطريات مُعجِّلةً الحبيبية وظهارة الأنسجة وشفاء الجروح الصغيرة.' },
      ],
      uses: [
        'إدارة الأرق واضطرابات النوم: تخفيف التوتر العصبي الخفيف والقلق العام والتوتر والأرق الثانوي',
        'التخفيف العرضي من مشاكل الجهاز الهضمي: تشنجات الجهاز الهضمي الوظيفية والغازات والانتفاخ وعسر الهضم العصبي وأعراض القولون العصبي المزمنة',
        'العلاج الموضعي والمخاطي: التهيّجات الجلدية والإكزيما الخفيفة والحفاظات والحروق الخفيفة وكغسول فم لقرح الأفتة أو التهاب اللثة',
        'تخفيف ضائقة الجهاز التنفسي: الاستنشاق بالبخار لتقليل التهاب الغشاء المخاطي والاحتقان',
        'تخفيف عسر الطمث: تخفيف تشنجات الرحم الملساء والشد الحوضي المصاحب للدورة الشهرية المؤلمة',
      ],
      howToUse: [
        { method: 'المنقوع المائي الداخلي (شاي البابونج)', instruction: 'يُنقع 1.5-3.0 غ من رؤوس الأزهار الكاملة المجففة في 150-250 مل من الماء المغلي في حاوية مُغلقة لمدة 10-15 دقائق (ضروري لمنع هروب الزيوت الأساسية الطيارة). يُؤخذ 3-4 مرات يومياً كمضاد للقلق أو طارد للغازات.' },
        { method: 'الغسيل أو الكمّادات الموضعية', instruction: 'منقوع مائي بتركيز 3-10% يُطبَّق موضعياً باستخدام كمّادات نظيفة، أو كحمام مقعدي لالتهاب الغشاء المخاطي التناسلي/الشرجي.' },
        { method: 'الكبسولات الفموية الموحّدة / المستخلصات السائلة', instruction: '200-500 مغ كبسولات مستخلص جاف موحّد (موحّد لمعادلات الأبيجينين) أو 1-4 مل مستخلص سائل هيدروكحولي 3 مرات يومياً.' },
        { method: 'الاستنشاق بالبخار', instruction: 'تُضاف 2-3 ملاعق كبيرة من الأزهار المجففة أو 2-4 قطرات من الزيت الأساسي الخالص إلى وعاء ماء مغلٍّ؛ يُستنشق البخار العشبي لمدة 5-10 دقائق.' },
      ],
      suitableAgeGroups: [
        { group: 'الحمل والرضاعة', notes: 'آمن للاستهلاك خلال الحمل والرضاعة عند الاقتصار صارماً على مستوى الشاي الغذائي اليومي (1-2 كوب يومياً). الجرعات العلاجية الكبيرة والمستخلصات السائلة المركّزة والزيوت الأساسية الخالصة ممنوعة تماماً بسبب خصائص تحفيز الدورة الشهرية الهيكلية ومخاطر تنشيط الرحم النظرية.' },
        { group: 'الأطفال', notes: 'آمن للغاية للرضّع والأطفال الصغار عند إعطائه كمنقوع مائي خفيف ومُخفَّف للغاية لتخفيف مغص الرضّع وآلام التسنين أو التوتر الخفيف. يُحظر قطعاً تطبيق الزيوت الأساسية الخالصة غير المُخفَّفة بالقرب من الوجه أو ابتلاعها من قِبَل الرضّع.' },
        { group: 'كبار السن', notes: 'يُتحمَّل جيداً وآمن لمرضى الشيخوخة، كونه بديلاً عشبياً استثنائياً غير مُسبِّب للإدمان عن المهدّئات الصيدلانية (مثل البنزوديازيبينات) التي تحمل مخاطر كبيرة للسقوط والضعف المعرفي لدى كبار السن.' },
      ],
      dosage: {
        standard: 'الشاي: 1.5-3.0 غ رؤوس أزهار مجففة منقوعة 10-15 دقيقة (مُغلَقة) في 150-250 مل ماء، 3-4 مرات يومياً. الكبسولات: 200-500 مغ مستخلص جاف موحّد، 3 مرات يومياً. المستخلص السائل: 1-4 مل، 3 مرات يومياً.',
        forms: [
          { form: 'المنقوع المائي (شاي البابونج)', dose: '1.5-3.0 غ رؤوس أزهار كاملة مجففة في 150-250 مل ماء مغلٍّ، حاوية مُغلقة، 10-15 دقيقة. 3-4 مرات يومياً كمضاد للقلق أو طارد للغازات.' },
          { form: 'الكبسولات الفموية الموحّدة', dose: '200-500 مغ مستخلص جاف موحّد (موحّد لمعادلات الأبيجينين)، 3 مرات يومياً.' },
          { form: 'المستخلص السائل الهيدروكحولي', dose: '1-4 مل، 3 مرات يومياً.' },
          { form: 'الغسيل الموضعي أو الكمّادات', dose: 'منقوع مائي بتركيز 3-10% يُطبَّق موضعياً أو كحمام مقعدي.' },
          { form: 'الاستنشاق بالبخار', dose: '2-3 ملاعق كبيرة أزهار مجففة أو 2-4 قطرات زيت أساسي في ماء مغلٍّ؛ يُستنشق عمقاً لمدة 5-10 دقائق.' },
        ],
      },
      overdose: {
        symptoms: [
          'غثيان جهازي حاد وقيء غزير (مُحرِّض قيء في الجهاز الهضمي)',
          'نعاس مفرط وخمول ملحوظ',
          'عند الأفراد فائقي التفاعل: تشنج قصبي حاد أو حساسية مفرطة',
        ],
        management: [
          'التوقف الفوري عن الابتلاع',
          'رعاية داعمة وعرضية قوية (ترطيب فموي أو وريدي)',
          'إعطاء مضادات الهيستامين الفموية أو الكورتيكوستيرويدات الجهازية فوراً عند ظهور حساسية تنفسية شديدة أو تشنج قصبي تحسسي',
        ],
      },
      sideEffects: [],
      contraindications: [
        'فرط الحساسية للنجميات: ممنوع تماماً عند الأفراد المصابين بحساسيات شديدة معروفة لأفراد عائلة النجميات/المركّبة (الرجيد والأقحوان وأقحوانيات الحديقة والبابونج الروماني والأرنيكا) بسبب مخاطر تقاطع التحسس المُثارة بلاكتونات السيسكويتيربين',
        'التطبيق المباشر على العيون: يُحظر قطعاً تطبيق المنقوعات أو الزيوت مباشرةً على محيط العينين أو بالقرب منهما لعلاج التهيّجات العينية، لما قد يُحدثه من التهاب ملتحمة كيميائي حاد',
      ],
      drugInteractions: [
        'مضادات التخثر/مضادات الصفيحات (الوارفارين والأسبرين والهيبارين): يحتوي البابونج على كومارينات طبيعية ذات أثر. عند استهلاكه بكميات علاجية كبيرة قد يُحدث نظرياً أفعالاً مضادة للصفيحات تراكمية وترفع مخاطر النزيف أو تُغيّر زمن البروثرومبين (INR).',
        'مثبّطات الجهاز العصبي المركزي (البنزوديازيبينات والزولبيديم والكحول): الاستخدام المتزامن قد يُفضي إلى ملامح تهدئة ونعاس تراكمية عميقة عبر مسارات GABA-A المتآزرة؛ يُوصى بتعديل الجرعات أو التباعد الحذر.',
      ],
      storage: {
        forms: [
          { form: 'رؤوس الأزهار المجففة', instructions: 'يُخزَّن في حاويات زجاجية محكمة مقاومة للضوء في بيئة باردة ومظلمة وجافة. الحماية من الهواء والضوء المحيط ضرورية لمنع الأكسدة السريعة والبلمرة وفقدان الكامازولين الطيار وأكاسيد البيسابولول.' },
        ],
      },
      factsAndMyths: [
        { myth: 'يمكن استخدام شاي البابونج بأمان كقطرة أو غسول للعين لعلاج التهاب الملتحمة البكتيري وتهدئة الاحمرار العيني.', fact: 'تطبيق منقوعات البابونج على العينين خطر. جزيئات حبوب اللقاح الدقيقة وشعيرات النبات المتبقية في الشاي يمكن أن تُسبّب التهاب ملتحمة تحسسياً حاداً وتهيّج القرنية الثانوي وتُفاقم الالتهاب العيني.' },
      ],
      benefits: [
        { icon: 'spa', title: 'تخفيف عسر الهضم العصبي', desc: 'ارتباط الأبيجينين بـGABA-A وفعل البيسابولول المضاد للتشنج يُزيلان التشنجات الهضمية الوظيفية والانزعاج الهضمي المرتبط بالتوتر.' },
        { icon: 'healing', title: 'الحماية المضادة للالتهاب للجهاز الهضمي', desc: 'يُثبّط الكامازولين والبيسابولول COX-2 و5-LOX مُقلِّلَين التهاب الغشاء المخاطي وتهيّج المعدة.' },
        { icon: 'bedtime', title: 'مضاد قلق خفيف ومُساعد على النوم', desc: 'يرتبط الأبيجينين بمستقبلات الديازيبام دون مخاطر انسحاب مُخففاً القلق ومُحسِّناً بدء النوم.' },
        { icon: 'water_drop', title: 'شفاء الغشاء المخاطي', desc: 'الأفعال المُلطِّفة والمضادة للميكروبات تُعجِّل شفاء قرح الأفتة والتهيّجات الجلدية وتلف الغشاء المخاطي.' },
      ],
      botanicalFacts: {
        origin: 'Matricaria recutita L. العائلة: Asteraceae (Compositae).',
        parts: 'رؤوس الأزهار الكاملة المجففة (Flos Chamomillae) والزيت الأساسي الطيار المقطَّر.',
        history: 'استخدمه قدماء المصريين والإغريق والرومان. تؤكد نشرات EMA وWHO وESCOP استخدامه السريري في تشنجات الجهاز الهضمي والتهاب المعدة والاضطرابات الهضمية النفسية.',
      },
      preparation: [
        { method: 'منقوع مائي (شاي البابونج)', desc: 'يُنقع 1.5-3.0 غ من رؤوس الأزهار المجففة في 150-250 مل ماء مغلٍّ في حاوية مُغلقة لمدة 10-15 دقيقة؛ الإغلاق يمنع فقدان الزيوت الطيارة.', bestFor: 'عسر الهضم العصبي، تشنجات معدية معوية، قلق، أرق' },
        { method: 'كبسولات موحّدة', desc: '200-500 مغ مستخلص جاف موحّد لمعادلات الأبيجينين، 3 مرات يومياً.', bestFor: 'القولون العصبي، اضطرابات هضمية وظيفية، قلق' },
        { method: 'موضعي / استنشاق', desc: 'منقوع مائي 3-10% ككمّادة أو حمام مقعدي؛ 2-4 قطرات زيت في ماء ساخن للاستنشاق بالبخار.', bestFor: 'تهيّجات جلدية، التهاب الغشاء المخاطي، احتقان تنفسي' },
      ],
    },

    'fennel-dyspepsia': {
      name: 'الشمر',
      shortDescription: 'كارميناتيف لعسر الهضم والاضطرابات الهضمية الوظيفية؛ ترانس-الأنيثول يُثبّط قنوات الكالسيوم تنافسياً مُرخياً العضلات الملساء للأمعاء، بينما يستدعي التعديل الإستروجيني الحذر في الحالات الحساسة للهرمونات.',
      description: 'الشمر (Foeniculum vulgare Mill.) الزيت الطيار (2-6%) تهيمن عليه ترانس-الأنيثول (50-80%) التي تحصر قنوات الكالسيوم في العضلات الملساء للأمعاء تنافسياً مُخففةً تشنجات الجهاز الهضمي ومُيسِّرةً طرد الغاز. الفنشون (5-20%) يُسهم في الخصائص المضادة للميكروبات ويُشكّل خطر السمية العصبية بجرعات عالية. التعديل الإستروجيني يحدث عبر ارتباط ترانس-الأنيثول والداي-أنيثول بمستقبلات الإستروجين.',
      activeConstituents: [
        { name: 'ترانس-الأنيثول (50-80%)', percentage: '50-80% من الزيت الطيار', effect: 'المركب الرئيسي المسؤول عن الرائحة الحلوة المميزة وأنشطة الإستروجين وطرد البلغم ومضاد التشنج' },
        { name: 'الفنشون (5-20%)', percentage: '5-20%', effect: 'كيتون أحادي التيربين الحلقي يُوفّر الطعم المرّ؛ يُسهم في الخصائص المضادة للميكروبات؛ يُشكّل مخاطر سمية عصبية بجرعات عالية' },
        { name: 'الإيستراغول/ميثيل شافيكول (3-20%)', percentage: '3-20%', effect: 'فينيل بروبانويد طبيعي يستلزم توحيداً صارماً بسبب مخاوف السرطانية المطفِّرة بجرعات ضخمة معزولة' },
        { name: 'المشتقات الفينولية والفلافونويدات', percentage: '', effect: 'تشمل الكيرسيتين والكيمبيرول وحمض الكلوروجينيك؛ دعم جهازي مضاد للأكسدة وحماية خلوية' },
      ],
      moa: [
        { title: 'مضاد التشنج والكارميناتيف', detail: 'يُرخي مباشرةً العضلات الملساء للأمعاء. ترانس-الأنيثول يعمل مضاداً تنافسياً لقنوات الكالسيوم مُقلِّلاً تدفق الكالسيوم داخل الخلية ومُخففاً تشنجات الجهاز الهضمي المستحثة بالأستيل كولين والهيستامين. يُيسّر طرد الغاز المحتجز ويُقلّل الضغط التجويفي.' },
        { title: 'التأثير الإفرازي والطارد للبلغم', detail: 'في الجهاز التنفسي، تُحفّز المكوّنات الطيارة الظهارة المُهدَّبة للغشاء المخاطي القصبي مُزيدةً إنتاج الإفرازات التنفسية السائلة ومُقلِّلةً لزوجة المخاط مما يُعين على التخلص منه عبر الأهداب.' },
        { title: 'التعديل الإستروجيني', detail: 'تُظهر مركبات مثل ترانس-الأنيثول وبوليمراتها (كالداي-أنيثول) تشابهاً هيكلياً مع الإستروجين وارتباطاً ضعيفاً بمستقبلاته وتحفيزاً لإفراز البرولاكتين.' },
        { title: 'المضاد للميكروبات والفطريات', detail: 'تُعطّل مكوّنات الزيت الأساسي سلامة الغشاء الخلوي للميكروبات مُظهِرةً أفعالاً جراثيمية ملحوظة في المختبر ضد مسببات الأمراض الثانوية الشائعة.' },
      ],
      uses: [
        'التخفيف العرضي من اضطرابات الجهاز الهضمي: عسر الهضم والانتفاخ والغازات والألم الهضمي التشنجي المصاحب لمتلازمة القولون العصبي',
        'علاج مغص الرضّع: مثبت سريرياً لتقليل وقت البكاء والتشنجات البطنية عند الإعطاء كمستخلص مائي موحّد خفيف',
        'علاج داعم لنزلات الجهاز التنفسي العلوي: تخفيف السعال المنتج والتهاب القصبات الخفيف واحتقان الجهاز التنفسي العلوي بتعزيز الطرح',
        'دعم إدرار الحليب: تحفيز وتحسين إنتاج حليب الثدي لدى المرضعات عبر مساراته الإستروجينية',
      ],
      howToUse: [
        { method: 'المنقوع المائي (شاي الشمر)', instruction: 'يُنقع 1.5-2.5 غ من البذور المسحوقة طازجاً في 150-200 مل من الماء المغلي في إناء مُغطّى لمدة 10-15 دقيقة (لمنع فقدان الأنيثول الطيار). يُؤخذ 3 مرات يومياً (الحد الأقصى: 7.5 غ يومياً).' },
        { method: 'الكبسولات الفموية الموحّدة', instruction: '200-400 مغ من المستخلص الجاف الموحّد أو كبسولات الزيت الأساسي، تُؤخذ 2-3 مرات يومياً.' },
        { method: 'شراب/قطرات مائية للرضّع (للمغص)', instruction: 'مستخلصات مائية موحّدة تعادل 1-2 غ من البذور يومياً للأطفال فوق 4 سنوات، أو جرعات أخفض متخصصة للرضّع تحت إشراف طبي صارم.' },
      ],
      suitableAgeGroups: [
        { group: 'الحمل والرضاعة', notes: 'آمن خلال الرضاعة بجرعات طهي أو منقوع خفيف (يدعم إنتاج الحليب). الزيت الأساسي الخالص محظور تماماً خلال الحمل بسبب خصائصه المُحفِّزة للدورة الشهرية والرحم المحتملة.' },
        { group: 'الأطفال', notes: 'يُحظر إعطاء الزيت الأساسي الخالص للرضّع أو الأطفال أقل من 4 سنوات بسبب حساسية الجهاز العصبي المركزي للفنشون. الأمان مشروط باستخدام التركيبات المائية البيدياترية المُنظَّمة والمناسبة للعمر حصراً.' },
        { group: 'كبار السن والأمراض المزمنة', notes: 'الحالات الحساسة للهرمونات: يجب تجنّبه أو استخدامه بحذر شديد عند المصابين بسرطان الثدي أو الرحم أو المبيض أو بطانة الرحم بسبب النشاط الإستروجيني الخفيف للأنيثول.' },
      ],
      dosage: {
        standard: 'شاي الشمر: 1.5-2.5 غ بذور مسحوقة في 150-200 مل ماء مغلٍّ (إناء مُغطّى)، 10-15 دقيقة، 3 مرات يومياً (الحد الأقصى 7.5 غ/يوم). الكبسولات: 200-400 مغ مستخلص موحّد، 2-3 مرات يومياً.',
        forms: [
          { form: 'المنقوع المائي (شاي الشمر)', dose: '1.5-2.5 غ بذور مسحوقة طازجاً في 150-200 مل ماء مغلٍّ، إناء مُغطّى، 10-15 دقيقة. 3 مرات يومياً. الحد الأقصى 7.5 غ يومياً.' },
          { form: 'الكبسولات الفموية الموحّدة', dose: '200-400 مغ مستخلص جاف موحّد أو كبسولات زيت أساسي، 2-3 مرات يومياً.' },
          { form: 'شراب/قطرات مائية للرضّع', dose: 'مستخلصات مائية موحّدة تعادل 1-2 غ بذور يومياً للأطفال فوق 4 سنوات؛ جرعات أخفض متخصصة للرضّع تحت إشراف طبي.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة فموية حادة (زيت أساسي خالص مركّز): تهيّج معدي معوي (غثيان وقيء) وطفح جلدي وتنشيط الجهاز العصبي المركزي — اضطراب وهذيان ونوبات صرعية بسبب تراكم الفنشون والأنيثول الزائد في الجهاز العصبي المركزي',
          'تهيّج موضعي (زيت أساسي غير مُخفَّف): احمرار وتفاعلات تحسس ضوئي والتهاب جلد تماسي',
        ],
        management: [
          'التوقف الفوري عن الاستخدام؛ علاج عرضي',
          'عند النوبات: إعطاء مضادات الاختلاج (مثل البنزوديازيبينات)؛ المحافظة على مجرى الهواء والمراقبة',
          'عند التهيّج الموضعي: غسيل جيد بالماء البارد والصابون؛ تجنّب أشعة الشمس المباشرة وتطبيق مُرطِّب محايد',
        ],
      },
      sideEffects: [],
      contraindications: [
        'فرط الحساسية: الحساسية المعروفة لـFoeniculum vulgare أو أفراد عائلة الخيمية الأخرى (كالكرفس والكمون والأنيسون والجزر)',
        'الأورام الخبيثة: المرضى المصابون بأورام خبيثة معتمدة على الإستروجين أو اضطرابات الغدد الصماء النشطة',
      ],
      drugInteractions: [
        'العلاجات الهرمونية (موانع الحمل الفموية، العلاج التعويضي الهرموني): قد تتداخل الجرعات العلاجية العالية من الشمر مع فعالية علاجات الإستروجين الخارجية أو تُضاعفها بسبب خصائصه الإستروجينية النباتية.',
        'سيبروفلوكساسين/الفلوروكينولونات: قد يُقلّل الشمر الامتصاص المعوي والتوافر البيولوجي للسيبروفلوكساسين؛ يُفصل بين تناول الاثنين بساعتين على الأقل.',
      ],
      storage: {
        forms: [
          { form: 'البذور المسحوقة/الكاملة والكبسولات الموحّدة', instructions: 'يُخزَّن في حاويات محكمة غير قابلة للاختراق مقاومة للضوء في بيئة باردة جافة (أقل من 25°م) لمنع تطاير الأنيثول وتدهور المكوّنات الفعّالة.' },
        ],
      },
      factsAndMyths: [
        { myth: 'زيت الشمر الأساسي آمن 100% لابتلاعه من قِبَل الرضّع لعلاج المغص لأنه طبيعي.', fact: 'زيت الشمر الأساسي الخالص مركّز للغاية وقد يكون ساماً للجهاز العصبي المركزي النامي للرضيع؛ القطرات المائية البيدياترية الخاصة المُخفَّفة للغاية هي الآمنة سريرياً فقط.' },
      ],
      benefits: [
        { icon: 'spa', title: 'تخفيف عسر الهضم والغازات', desc: 'تثبيط ترانس-الأنيثول لقنوات الكالسيوم يُرخي العضلات الملساء للجهاز الهضمي مُطرِداً الغاز المحتجز ومُخففاً الانتفاخ والانزعاج الهضمي.' },
        { icon: 'child_care', title: 'علاج مغص الرضّع', desc: 'ثبت سريرياً أن المستخلصات المائية الموحّدة تُقلّل وقت البكاء والتشنجات البطنية عند الرضّع.' },
        { icon: 'air', title: 'طارد للبلغم التنفسي', desc: 'تُحفّز المكوّنات الطيارة الظهارة المُهدَّبة القصبية مُقلِّلةً لزوجة المخاط ومُعينةً على التخلص من النزلة والسعال المنتج.' },
        { icon: 'water_drop', title: 'دعم إدرار الحليب', desc: 'التعديل الإستروجيني عبر ترانس-الأنيثول يُحفّز إفراز البرولاكتين داعماً إنتاج حليب الثدي لدى المرضعات.' },
      ],
      botanicalFacts: {
        origin: 'أصيل منطقة البحر الأبيض المتوسط. العائلة: Apiaceae.',
        parts: 'الثمرة (البذرة) — Foeniculi vulgaris fructus — والزيت الأساسي الطيار.',
        history: 'طب عشبي تقليدي متوسطي وأيورفيدي. تؤكد نشرتا EMA وWHO استخدامه في اضطرابات الجهاز الهضمي والمغص ودعم إدرار الحليب.',
      },
      preparation: [
        { method: 'منقوع مائي (شاي الشمر)', desc: 'يُنقع 1.5-2.5 غ من البذور المسحوقة طازجاً في 150-200 مل ماء مغلٍّ في إناء مُغطّى لمدة 10-15 دقيقة؛ التغطية تمنع تطاير الأنيثول.', bestFor: 'عسر الهضم، انتفاخ، تشنجات معدية معوية، غازات' },
        { method: 'كبسولات موحّدة', desc: '200-400 مغ مستخلص جاف موحّد أو كبسولات زيت أساسي، 2-3 مرات يومياً.', bestFor: 'جرعة ثابتة؛ دعم تنفسي؛ الرضاعة' },
        { method: 'قطرات مائية للرضّع', desc: 'مستخلصات مائية فائقة التخفيف متخصصة للرضّع المصابين بالمغص، تحت إشراف طبي.', bestFor: 'مغص الرضّع' },
      ],
    },

    'peppermint-ibs': {
      name: 'النعناع الفلفلي',
      shortDescription: 'حاصر طبيعي لقنوات الكالسيوم في العضلات الملساء للقولون؛ يُخفّف مباشرة تشنجاتها وانقباضاتها المؤلمة، مما يُخفّف الألم البطني والنفخة والغازات المرتبطة بمتلازمة القولون العصبي.',
      description: 'النعناع الفلفلي (Mentha x piperita؛ العائلة: Lamiaceae) يحتوي على المينثول كمكوّن رئيسي في زيته الأساسي. يعمل المينثول حاصراً طبيعياً لقنوات الكالسيوم في العضلات الملساء للقولون مُحدِثاً تأثيراً مضاداً للتشنج مباشراً ومتناسباً مع الجرعة. متوفر كـكبسولات مغلّفة معوياً لضمان إطلاق الزيت مباشرةً في الأمعاء.',
      uses: [
        'تخفيف الألم البطني والنفخة والتشنجات والغازات المرتبطة بمتلازمة القولون العصبي',
      ],
      activeConstituents: [
        { name: 'المينثول', percentage: 'المكوّن الرئيسي للزيت الأساسي', effect: 'حاصر طبيعي لقنوات الكالسيوم في العضلات الملساء للقولون؛ تأثير مضاد للتشنج مباشر ومتناسب مع الجرعة؛ يُخفّف الألم البطني والنفخة والتشنجات والغازات المصاحبة للقولون العصبي' },
      ],
      moa: [
        { title: 'حصار قنوات الكالسيوم (مضاد للتشنج)', detail: 'يعمل المينثول حاصراً طبيعياً لقنوات الكالسيوم في العضلات الملساء للقولون مُحدثاً تأثيراً مضاداً للتشنج مباشراً ومتناسباً مع الجرعة. يُقلّل فرط الحركة القولونية ويُخفّف الألم البطني والنفخة والتشنجات والغازات المصاحبة للقولون العصبي.' },
      ],
      howToUse: [
        { method: 'كبسولات مغلّفة معوياً (الخيار المفضّل)', instruction: 'كبسولات مغلّفة معوياً تضمن مرور الزيت دون ذوبان في المعدة. 180-360 مغ (0.2-0.4 مل) أو 1-2 كبسولة، 3 مرات يومياً. يجب تناولها مغلّفة معوياً تماماً ولا تُسحق أو تُمضغ.' },
        { method: 'شاي عشبي', instruction: 'للأعراض الخفيفة فقط.' },
      ],
      dosage: {
        forms: [
          { form: 'كبسولات معوية (الخيار الأول)', dose: '180-360 مغ (0.2-0.4 مل) أو 1-2 كبسولة، 3 مرات يومياً؛ يجب أن تكون معوية الطلاء لمنع الذوبان في المعدة.' },
          { form: 'شاي عشبي', dose: 'للأعراض الخفيفة فقط.' },
        ],
        note: 'الكبسولات المعوية أفضل سريرياً من الشاي لعلاج القولون العصبي.',
      },
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن وفعّال.' },
        { group: 'الأطفال', notes: 'تجنّب استخدامه عند الرضّع — خطر الاكتئاب التنفسي وتشنّج الحنجرة.' },
        { group: 'الحمل والرضاعة', notes: 'آمن بالكميات الغذائية؛ الزيوت الطبية تحت إشراف طبي.' },
        { group: 'الأمراض المزمنة', notes: 'تحذير عند الارتجاع المريئي / فتق الحجاب الحاجز — يُرخي العضلة العاصرة للمريء السفلى.' },
      ],
      sideEffects: [
        'حرقة المعدة (ارتداد حمضي)',
        'غثيان (بصورة أقل شيوعاً)',
        'حرقة شرجية (نادراً)',
      ],
      contraindications: [
        'حصى المرارة — تجنّب الاستخدام',
        'انسداد القناة الصفراوية — تجنّب الاستخدام',
        'قصور كبدي حاد — تجنّب الاستخدام',
        'انعدام حموضة المعدة — تجنّب الاستخدام',
      ],
      overdose: {
        symptoms: [
          'دوخة، بطء القلب، تسرّع التنفس؛ نادراً سمّية عصبية (رنح / تشنجات).',
        ],
        management: [
          'رعاية داعمة وعلاج أعراضي؛ غسيل معدي إذا لزم.',
        ],
      },
      storage: {
        forms: [
          { form: 'كبسولات / زيت', instructions: 'مكان بارد جاف (< 25°م) بعيداً عن ضوء الشمس المباشر.' },
        ],
      },
      factsAndMyths: [
        { myth: 'الشاي وحده يعالج القولون العصبي.', fact: 'الكبسولات المعوية أثبتت سريرياً تفوّقها على الشاي لعلاج القولون العصبي.' },
        { myth: 'لا دليل علمي على زيت النعناع.', fact: 'يحمل مستوى الأدلة (A) في علاج القولون العصبي.' },
      ],
      benefits: [
        { icon: 'spa', title: 'دليل علمي من المستوى A للقولون العصبي', desc: 'واحد من القلائل من الأدوية العشبية ذات الأدلة السريرية عالية الجودة (توصية المستوى A) لتخفيف أعراض القولون العصبي على المدى القصير.' },
        { icon: 'air', title: 'مُرخٍ للعضلات الملساء في القولون', desc: 'حصار قنوات الكالسيوم بالمينثول يُوفّر تأثيراً مضاداً للتشنج مباشراً ومتناسباً مع الجرعة يستهدف القولون.' },
        { icon: 'bubble_chart', title: 'تخفيف أعراض القولون العصبي', desc: 'يُخفّف الألم البطني والنفخة والتشنجات والغازات المصاحبة للقولون العصبي.' },
      ],
      preparation: [
        { method: 'كبسولات مغلّفة معوياً', desc: 'كبسولات صيدلانية مغلّفة معوياً تضمن إطلاق الزيت مباشرةً في الأمعاء متجاوزةً المعدة.', bestFor: 'القولون العصبي — توصيل استهداف القولون الأفضل سريرياً' },
        { method: 'شاي عشبي', desc: 'منقوع مائي من أوراق النعناع المجففة للتخفيف العرضي الخفيف.', bestFor: 'أعراض القولون العصبي الخفيفة' },
      ],
      botanicalFacts: {
        origin: 'نوع هجين (Mentha aquatica × Mentha spicata). العائلة: Lamiaceae.',
        parts: 'الأوراق والزيت الأساسي الطيار المقطَّر (Aetheroleum Menthae Piperitae).',
        history: 'تؤكد نشرة EMA (2020) على Mentha x piperita aetheroleum توصية المستوى A لتخفيف أعراض القولون العصبي.',
      },
      references: [
        'EMA (2020) Mentha x piperita aetheroleum monograph',
        'Khanna et al. (2014) JCGE',
      ],
    },

    'ginger-ibs': {
      name: 'الزنجبيل',
      shortDescription: 'عامل حركي معوي قوي؛ الجينجيرول والشوجاول يعملان كمضادات لمستقبلات 5-HT3 المحيطية (مضاد للغثيان) ويُنظّمان مستقبلات الكولين/5-HT4 لتحفيز إفراغ المعدة، مما يُساعد في إدارة الغثيان وعسر الهضم والأعراض الثانوية لمتلازمة القولون العصبي.',
      description: 'الزنجبيل (Zingiber officinale؛ العائلة: Zingiberaceae) يحتوي على الجينجيرول والشوجاول كمكوّنات فعّالة. يعمل مضاداً طرفياً لمستقبلات 5-HT3 مُوفِّراً تأثيراً مضاداً للغثيان، ويُنظّم مستقبلات الكولين/5-HT4 لتحفيز إفراغ المعدة وتنظيم حركة الأمعاء (تأثير حركي). يمتلك أيضاً خصائص مضادة للالتهاب في الغشاء المخاطي للجهاز الهضمي. يُقلّل الغثيان ويُحسّن حركة الجهاز الهضمي ويُعين على إدارة عسر الهضم الوظيفي المصاحب للقولون العصبي.',
      uses: [
        'تقليل الغثيان وتحسين حركة الجهاز الهضمي وإدارة عسر الهضم الوظيفي المصاحب لمتلازمة القولون العصبي',
      ],
      activeConstituents: [
        { name: 'الجينجيرول', percentage: '', effect: 'المركبات الفعّالة الرئيسية؛ مضاد طرفي لمستقبلات 5-HT3 (مضاد للغثيان)؛ يُنظّم مستقبلات الكولين/5-HT4 لتنظيم الحركة المعوية؛ مضاد للالتهاب في الغشاء المخاطي للجهاز الهضمي' },
        { name: 'الشوجاول', percentage: '', effect: 'يتشكّل من الجينجيرول عند التجفيف أو التسخين؛ يُسهم في الأنشطة المضادة للغثيان والحركية ومضادة الالتهاب' },
      ],
      moa: [
        { title: 'تثبيط مستقبلات 5-HT3 الطرفية (مضاد للغثيان)', detail: 'يعمل الجينجيرول والشوجاول مثبِّطَين طرفيَّين لمستقبلات 5-HT3 مُوفِّرَين تأثيراً مضاداً للغثيان قوياً عبر منع إشارات السيروتونين المحرِّضة للإقياء في الجهاز الهضمي.' },
        { title: 'تنظيم الكولين/5-HT4 (حركي)', detail: 'يُنظّم مستقبلات الكولين و5-HT4 لتحفيز إفراغ المعدة وتنظيم الحركة المعوية، مُنتِجاً تأثيراً حركياً يُسرِّع إفراغ المعدة عبر تحفيز الجزء الطرفي منها.' },
        { title: 'نشاط مضاد للالتهاب في الغشاء المخاطي للجهاز الهضمي', detail: 'يمتلك خصائص مضادة للالتهاب في الغشاء المخاطي للجهاز الهضمي مُقلِّلاً التهاب الغشاء المخاطي الموضعي المُسهِم في عسر الهضم الوظيفي والغثيان المصاحب للقولون العصبي.' },
      ],
      howToUse: [
        { method: 'الجذر الطازج', instruction: 'يُستخدم جذراً طازجاً في الطهي أو كمنقوع.' },
        { method: 'مسحوق مجفّف', instruction: 'مسحوق زنجبيل مجفّف في كبسولات أو مُذاب في ماء دافئ.' },
        { method: 'كبسولات موحّدة', instruction: '1-2 غ من المسحوق المجفّف أو مستخلص موحّد يومياً مقسّماً على جرعات.' },
        { method: 'منقوعات عشبية', instruction: 'يُحضَّر كشاي عشبي من الجذر الطازج أو المجفّف.' },
      ],
      dosage: {
        forms: [
          { form: 'مسحوق جاف / مستخلص موحّد', dose: '1-2 غ مسحوق جاف أو مستخلص يومياً مقسّماً على جرعات.' },
          { form: 'جذر طازج', dose: 'للاستخدام الغذائي.' },
          { form: 'كبسولات موحّدة / منقوع عشبي', dose: 'حسب التوجيه.' },
        ],
      },
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن.' },
        { group: 'الحمل', notes: 'لغثيان الصباح — بحد أقصى 1 غ/يوم من المستخلص الجاف تحت إشراف طبي.' },
        { group: 'الأطفال', notes: 'آمن بالكميات الغذائية؛ المستخلصات الطبية مقيّدة.' },
      ],
      sideEffects: [
        'حرقة المعدة (شائعة)',
        'انزعاج بطني (محتمل)',
        'التجشؤ والغازات (محتمل)',
      ],
      contraindications: [
        'حصى المرارة النشطة — تحذير بسبب التأثيرات المُفرِزة للصفراء',
      ],
      drugInteractions: [
        'مضادات التخثر / مضادات الصفيحات (وارفارين، أسبرين، كلوبيدوغريل) — تجنّب أو تحذير شديد؛ يُثبّط تخليق الثرومبوكسان وقد يُطيل وقت النزيف',
      ],
      overdose: {
        symptoms: [
          '> 4 غ/يوم يزيد الآثار الجانبية على الجهاز الهضمي؛ إسهال خفيف، حرقة شديدة، تهيّج الغشاء المخاطي الفموي.',
        ],
        management: [
          'إيقاف الاستخدام وعلاج داعم أعراضي.',
        ],
      },
      storage: {
        forms: [
          { form: 'مسحوق / مجفّف', instructions: 'في حاويات محكمة الإغلاق.' },
          { form: 'جذر طازج', instructions: 'في الثلاجة.' },
        ],
      },
      factsAndMyths: [
        { myth: 'الزنجبيل يُعالج متلازمة القولون العصبي.', fact: 'هو محرّك حركي قوي لكنه لا يُعالج القولون العصبي — يُدير فقط الأعراض الثانوية (الغثيان، عسر الهضم، النفخة).' },
      ],
      benefits: [
        { icon: 'spa', title: 'عامل حركي معوي قوي', desc: 'يُسرِّع إفراغ المعدة عبر تحفيز الجزء الطرفي منها مُحسِّناً حركة الجهاز الهضمي.' },
        { icon: 'water_drop', title: 'تخفيف الغثيان', desc: 'تثبيط مستقبلات 5-HT3 الطرفية يُوفّر تأثيراً مضاداً للغثيان قوياً مُقلِّلاً الغثيان المصاحب للقولون العصبي.' },
        { icon: 'healing', title: 'مضاد التهاب للغشاء المخاطي الهضمي', desc: 'يُقلّل التهاب الغشاء المخاطي الموضعي المُسهِم في عسر الهضم الوظيفي المصاحب للقولون العصبي.' },
      ],
      preparation: [
        { method: 'كبسولات موحّدة', desc: '1-2 غ مسحوق مجفّف أو مستخلص موحّد يومياً مقسّماً على جرعات.', bestFor: 'الغثيان، عسر الهضم، الأعراض الثانوية للقولون العصبي' },
        { method: 'منقوع عشبي (شاي)', desc: 'جذر زنجبيل طازج أو مجفّف منقوع في ماء ساخن.', bestFor: 'غثيان خفيف، راحة هضمية' },
      ],
      botanicalFacts: {
        origin: 'أصيل جنوب شرق آسيا. العائلة: Zingiberaceae.',
        parts: 'الجذمور (الساق تحت الأرض) — طازجاً أو مجففاً أو مطحوناً.',
        history: 'مُستخدَم لقرون في منظومات الطب التقليدي في جميع أنحاء العالم لخصائصه الهضمية ومضادة الغثيان. مُتحقَّق منه سريرياً كعامل حركي معوي.',
      },
      references: [
        'Bodagh et al. (2019) Food Science & Nutrition',
        'Hu et al. (2011) WJG',
      ],
    },

    'psyllium-ibs': {
      name: 'سيلليوم (قشور بذر لسان الحمل)',
      shortDescription: 'عامل مُكثّف للبراز يمتص الماء مُكوّناً هلاماً لزجاً؛ يُطبّع حركة الأمعاء — يُليّن البراز الصلب في القولون العصبي الإمساكي ويُضيف كتلة للبراز السائل في القولون العصبي الإسهالي.',
      description: 'سيلليوم (Plantago ovata؛ العائلة: Plantaginaceae) يحتوي على المخاط (ألياف عديد السكاريد القابلة للذوبان وتكوين الهلام) كمكوّن فعّال. يعمل عاملاً مُكثِّفاً للبراز يمتص الماء في تجويف الأمعاء مُكوِّناً هلاماً لزجاً، يُطبِّع قوام البراز: يُليِّن البراز الصلب في القولون العصبي الإمساكي ويُضيف كتلة للبراز الرخو في القولون العصبي الإسهالي. التدخّل الغذائي الأول في إدارة القولون العصبي الإمساكي والمتناوب.',
      uses: [
        'التدخّل الغذائي الأول في إدارة القولون العصبي الإمساكي والقولون العصبي المتناوب',
      ],
      activeConstituents: [
        { name: 'المخاط (ألياف عديد السكاريد القابلة للذوبان وتكوين الهلام)', percentage: '', effect: 'عامل مُكثِّف للبراز؛ يمتص الماء في تجويف الأمعاء مُكوِّناً هلاماً لزجاً؛ يُطبِّع قوام البراز في كلٍّ من القولون العصبي الإمساكي والإسهالي' },
      ],
      moa: [
        { title: 'مُكثِّف للبراز (يُطبِّع قوامه)', detail: 'يمتص مخاط السيلليوم الماء في تجويف الأمعاء مُكوِّناً هلاماً لزجاً. يُطبِّع هذا الفعل قوام البراز: يُليِّن البراز الصلب في القولون العصبي الإمساكي ويؤخّر إفراغ المعدة مع إضافة كتلة للبراز الرخو في القولون العصبي الإسهالي.' },
      ],
      howToUse: [
        { method: 'مسحوق أو قشور في ماء / عصير', instruction: 'يُخلط المسحوق أو القشور جيداً في كوب ماء أو عصير كامل (250 مل على الأقل)، ثم يُتبع فوراً بشرب كوب إضافي من الماء لضمان الترطيب الكافي.' },
      ],
      dosage: {
        forms: [
          { form: 'مسحوق / قشور', dose: 'تُخلط 5-10 غ في ≥ 250 مل ماء أو عصير، تُتبع فوراً بكوب ماء إضافي. ابدأ بجرعات منخفضة لتقليل الغازات.' },
        ],
        note: 'الجرعة: 5-10 غ، 1-3 مرات يومياً.',
      },
      suitableAgeGroups: [
        { group: 'البالغون والمسنّون', notes: 'التدخّل الأول.' },
        { group: 'الحمل', notes: 'آمن تماماً؛ مفضّل لعلاج الإمساك خلال الحمل.' },
        { group: 'الأطفال', notes: 'آمن فوق 6 سنوات تحت إشراف طبي.' },
      ],
      sideEffects: [
        'انتفاخ عابر وغازات في الأيام الأولى',
        'تمدّد البطن (مؤقت)',
      ],
      contraindications: [
        'انسداد معوي — تجنّب تاماً',
        'انحشار برازي — تجنّب تاماً',
        'صعوبة البلع أو تضيّق المريء — تجنّب تاماً',
        'ألم بطني حاد غير مُشخَّص — تجنّب تاماً',
      ],
      drugInteractions: [
        'الديجوكسين، الوارفارين، مكمّلات الحديد، الليثيوم — يُعيق/يؤخّر امتصاصها؛ جميع الأدوية الفموية الأخرى قبل ساعتين أو بعد ساعتين من تناول السيلليوم',
      ],
      overdose: {
        symptoms: [
          'تشنجات بطنية شديدة، انتفاخ، غازات، انحشار برازي ميكانيكي، انسداد معوي (من الجرعة الجافة دون سوائل كافية).',
        ],
        management: [
          'ترطيب فموي / وريدي مكثّف؛ تقييم طبي فوري عند الاشتباه بانسداد.',
        ],
      },
      storage: {
        forms: [
          { form: 'مسحوق / قشور', instructions: 'بيئة جافة في حاويات محكمة الإغلاق (لمنع امتصاص الرطوبة والتكتّل).' },
        ],
      },
      factsAndMyths: [
        { myth: 'كل الألياف متساوية لعلاج القولون العصبي.', fact: 'الألياف القابلة للذوبان (سيلليوم) موصى بها بشدة؛ الألياف غير القابلة للذوبان (نخالة القمح) قد تُفاقم أعراض القولون العصبي.' },
        { myth: 'يمكن ابتلاعه جافاً.', fact: 'لا يجوز ابتلاعه جافاً — قد يُسبّب انسداد المريء.' },
      ],
      benefits: [
        { icon: 'spa', title: 'الخط الأول في إدارة القولون العصبي', desc: 'موصى به بشدة ومتحمَّل جيداً من مرضى القولون العصبي كتدخّل غذائي أولي لتطبيع عادات الأمعاء.' },
        { icon: 'healing', title: 'يُطبِّع البراز في القولون العصبي الإمساكي والإسهالي', desc: 'الهلام اللزج يُليِّن البراز الصلب في القولون العصبي الإمساكي ويُضيف كتلة للبراز الرخو في القولون العصبي الإسهالي — يعالج الحالتين.' },
        { icon: 'water_drop', title: 'آمن خلال الحمل', desc: 'يعمل موضعياً وغير قابل للامتصاص وهو الخيار المفضّل لعلاج إمساك الحمل.' },
      ],
      preparation: [
        { method: 'مسحوق / قشور في ماء', desc: 'يُخلط 5-10 غ جيداً في 250 مل ماء أو عصير على الأقل؛ يُشرب فوراً مع كوب ماء إضافي. لا يجوز ابتلاعه جافاً أبداً.', bestFor: 'القولون العصبي الإمساكي، القولون العصبي الإسهالي، القولون العصبي المتناوب' },
      ],
      botanicalFacts: {
        origin: 'Plantago ovata؛ العائلة: Plantaginaceae. أصيل منطقة البحر الأبيض المتوسط وغرب آسيا.',
        parts: 'قشرة البذرة (قشور السيلليوم) المحتوية على عديدات السكاريد المخاطية.',
        history: 'استخدام راسخ طويل الأمد كملين مُكثِّف للبراز ومكمّل للألياف. توصي إرشادات ACG السريرية (2021) بالألياف القابلة للذوبان لإدارة القولون العصبي.',
      },
      references: [
        'Lacy et al. (2021) ACG Clinical Guideline',
        'Sweetman (2014) Martindale 38th ed.',
      ],
    },

  },
};

export const TAG_TRANSLATIONS = {
  'Skin Care': 'رعاية البشرة',
  'Moisturizing': 'ترطيب',
  'Anti-inflammatory': 'مضاد للالتهاب',
  'Wound Healing': 'التئام الجروح',
  'Antimicrobial': 'مضاد للميكروبات',
  'Acne': 'حبّ الشباب',
  'Antifungal': 'مضاد للفطريات',
  'Essential Oil': 'زيت أساسي',
  'Skin Brightening': 'تفتيح البشرة',
  'Hyperpigmentation': 'فرط التصبغ',
  'Respiratory': 'تنفسي',
  'Antioxidant': 'مضاد للأكسدة',
  'Anti-aging': 'مضاد للشيخوخة',
  'Topical': 'موضعي',
  'Hair Growth': 'نمو الشعر',
  'Scalp Health': 'صحة فروة الرأس',
  'Keratin Support': 'دعم الكيراتين',
  'Anti-dandruff': 'مضاد للقشرة',
  'Sulfur-rich': 'غني بالكبريت',
  'Anti-breakage': 'مضاد للتكسر',
  'Scalp Nourishment': 'تغذية فروة الرأس',
  'Anti-alopecia': 'مضاد للصلع',
  'Cognitive': 'معرفي',
  'Galactagogue': 'مُدرّ للحليب',
  'Lactation': 'الرضاعة',
  'Breastfeeding': 'الرضاعة الطبيعية',
  'Hormonal': 'هرموني',
  'Carminative': 'طارد للغازات',
  'Phytoestrogen': 'نظير استروجيني',
  'Superfood': 'غذاء فائق',
  'Nutrient-Dense': 'غني بالمغذيات',
  'Analgesic': 'مسكّن',
  'Anti-emetic': 'مضاد للغثيان',
  'Dysmenorrhea': 'عسر الطمث',
  'Cold & Flu': 'برد وإنفلونزا',
  'Spasmolytic': 'مضاد للتشنج',
  'Menstrual Health': 'صحة الدورة',
  'Hemostatic': 'مرقئ للدم',
  'Menorrhagia': 'غزارة الحيض',
  'PCOS': 'تكيّس المبايض',
  'Antihistamine': 'مضاد للهيستامين',
  'Rhinitis': 'التهاب الأنف',
  'Hay Fever': 'حمى القش',
  'Non-sedating': 'غير مهدئ',
  'Migraine': 'صداع نصفي',
  'Diuretic': 'مدرّ للبول',
  'Expectorant': 'طارد للبلغم',
  'Decongestant': 'مزيل الاحتقان',
  'Mucolytic': 'محلّل للمخاط',
  'Vitamin C': 'فيتامين ج',
  'Immune Support': 'دعم المناعة',
  'Antitussive': 'مسكّن السعال',
  'Immunomodulator': 'منظّم المناعة',
  'Cold & Flu Prevention': 'وقاية من البرد',
  'Adaptogen': 'مُكيِّف',
  'Bronchodilator': 'موسّع قصبات',
  'Antidiabetic': 'مضاد للسكري',
  'Antiviral': 'مضاد للفيروسات',
  'Fatigue': 'إرهاق',
  'Nervine': 'منوّم عصبي',
  'Digestive': 'هضمي',
  'Culinary': 'طهوي',
  'Medicinal': 'طبي',
  'Laxative': 'ملين',
  'Constipation Relief': 'تخفيف الإمساك',
  'Bowel Cleansing': 'تنظيف الأمعاء',
  'Anthraquinone': 'أنثراكينون',
  'Short-term Use': 'استخدام قصير الأمد',
  'Bulk-forming Laxative': 'ملين تجميعي',
  'Fiber': 'ألياف',
  'IBS Relief': 'تخفيف القولون العصبي',
  'Cholesterol': 'كوليسترول',
  'Bowel Regulator': 'منظّم الأمعاء',
  'Stimulant Laxative': 'ملين منبّه',
  'Purgative': 'مسهّل قوي',
  'Castor Oil': 'زيت الخروع',
  'Ricinoleic Acid': 'حمض الريسينوليك',
  'Antispasmodic': 'مضاد للتشنج',
  'Antidiarrheal': 'مضاد للإسهال',
  'Menthol': 'منثول',
  'GI Soother': 'مهدئ الجهاز الهضمي',
  'Anxiolytic': 'مزيل القلق',
  'Joint Health': 'صحة المفاصل',
  'Curcumin': 'كركيومين',
  'Hepatoprotective': 'واقٍ للكبد',
  'Antiseptic': 'مطهّر',
  'Eugenol': 'يوجينول',
  'Dental Health': 'صحة الأسنان',
  'Astringent': 'قابض',
  'Tannins': 'تانينات',
  'Aquaretic': 'مُدرّ مائي',
  'Potassium-Sparing': 'محافظ على البوتاسيوم',
  'Choleretic': 'مُحفّز الصفراء',
  'Liver Support': 'دعم الكبد',
  'Anti-urolithic': 'مانع الحصوات البولية',
  'Vitamin K': 'فيتامين K',
  'Apiaceae': 'الخيميات',
  'Ureteric Spasmolytic': 'مُرخٍ الحالب',
  'Stone Expulsion': 'طرد الحصوات',
  'Renal Colic': 'مغص كلوي',
  'Calcium Channel Blocker': 'حاصر قنوات الكالسيوم',
  'BPH': 'تضخّم البروستات الحميد',
  'Prostate Health': 'صحة البروستات',
  'Phytosterol': 'فيتوستيرول',
  '5-Alpha Reductase Inhibitor': 'مثبّط 5-ألفا ريداكتاز',
  'DHT Blocker': 'حاصر DHT',
  'Lipidosterolic Extract': 'مستخلص دهني-ستيرولي',
  '5-LOX Inhibitor': 'مثبّط 5-LOX',
  'SHBG Binding': 'ربط SHBG',
  'Lectin': 'ليكتين',
  'UTI Prevention': 'الوقاية من التهابات المسالك',
  'Anti-adhesion': 'مضاد للالتصاق',
  'Proanthocyanidins': 'بروانثوسيانيدينات',
  'Expectorant': 'طارد بلغم',
  'Thymol': 'ثيمول',
  'Antitussive': 'مضاد السعال',
  'Bronchospasmolytic': 'مُرخٍ قصبي',
  'Anethole': 'أنيثول',
  'Antiviral': 'مضاد للفيروسات',
  'Immunomodulator': 'مُعدِّل المناعة',
  'Anthocyanins': 'أنثوسيانينات',
  'Influenza': 'إنفلونزا',
  'Quercetin': 'كيرسيتين',
  'Secretolytic': 'حالّ للإفرازات',
  'Demulcent': 'مُلطِّف للأغشية',
  'Glycyrrhizin': 'غليسيريزين',
};
