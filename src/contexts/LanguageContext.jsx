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
    plant_preparation: 'Preparation Methods', plant_symptoms: 'Associated Symptoms',
    plant_related: 'Related Plants', plant_botanical_facts: 'Botanical Facts',
    plant_family: 'Family', plant_native: 'Native Region', plant_growth: 'Growth Habit',
    plant_compounds: 'Active Compounds', plant_cultivation: 'Cultivation Notes',
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
    plant_warnings: 'Warnings',
    plant_overdose_symptoms: 'Symptoms',
    plant_overdose_management: 'Management',
    demo_badge: 'Demo Data: Full profile coming soon',
    plant_uses: 'Uses & Indications',
    plant_references: 'Scientific References',
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
    plant_preparation: 'طرق التحضير', plant_symptoms: 'الأعراض المرتبطة',
    plant_related: 'نباتات ذات صلة', plant_botanical_facts: 'الحقائق النباتية',
    plant_family: 'العائلة', plant_native: 'المنطقة الأصلية', plant_growth: 'عادة النمو',
    plant_compounds: 'المركبات الفعّالة', plant_cultivation: 'ملاحظات الزراعة',
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
    plant_warnings: 'تحذيرات',
    plant_overdose_symptoms: 'الأعراض',
    plant_overdose_management: 'الإدارة',
    demo_badge: 'بيانات تجريبية: الملف الكامل قريباً',
    plant_uses: 'الاستخدامات والمؤشرات',
    plant_references: 'المراجع العلمية',
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
    ginger: {
      name: 'الزنجبيل', shortDescription: 'جذمور دافئ يحفّز الدورة الدموية ويساعد الهضم ويمتلك خصائص قوية مضادة للالتهابات.',
      description: 'الزنجبيل واحد من أكثر النباتات الطبية دراسةً على وجه الأرض. يحتوي جذموره الحار على مركبات فعّالة قوية مسؤولة عن تأثيراته العلاجية الواسعة.',
      history: 'زُرع الزنجبيل واستُخدم طبياً منذ أكثر من 5000 عام. كان من أوائل البهارات التي وصلت أوروبا من آسيا.',
      benefits: [
        { icon: 'restaurant', title: 'مساعد هضمي', desc: 'يحفّز إنتاج اللعاب والصفراء وإنزيمات الهضم، مما يسرّع إفراغ المعدة ويقلل الغثيان.' },
        { icon: 'healing', title: 'مضاد للالتهابات', desc: 'تثبّط الجينجيرولات إنزيمات الالتهاب مقارنةً بمضادات الالتهاب غير الستيرويدية دون آثار جانبية.' },
        { icon: 'thermostat', title: 'منبّه للدورة الدموية', desc: 'يزيد الدورة الدموية الطرفية ويعزز التعرق الصحي أثناء الحمى.' },
      ],
      botanicalFacts: { family: 'فصيلة الزنجبيلية', nativeRegion: 'جنوب شرق آسيا', growthHabit: 'جذمور عشبي معمر', activeCompounds: 'الجينجيرول، الشوغاول، الزنجيرون', cultivationNotes: 'نبات استوائي يحتاج ظروفاً دافئة رطبة وتربة غنية جيدة التصريف.' },
      preparation: [
        { method: 'شاي الطازج', desc: 'ابشر إصبعاً من الزنجبيل الطازج في ماء مغلٍ، انقعه 10 دقائق. أضف العسل والليمون.', bestFor: 'الغثيان وعدم الراحة الهضمية' },
        { method: 'الصبغة', desc: 'صبغة الجذر الطازج في الكحول. 2-4 مل قبل الوجبات.', bestFor: 'الاستخدام اليومي المستمر' },
      ],
      symptoms: ['غثيان', 'قولون عصبي', 'إمساك', 'سعال', 'مناعة'],
      warnings: [
        'وقفه قبل أسبوعين من أي عملية جراحية كبرى: تأثير مضاد للصفيحات الدموية قد يزيد النزيف.',
        'حصى المرارة: قد يزيد تدفق الصفراء استشر طبيبك.',
        'الحمل: الكميات الغذائية آمنة؛ الجرعات العلاجية الكبيرة تستوجب إشرافاً طبياً.',
      ],
      activeConstituents: [
        { name: '[6]-جينجيرول (الأساسي)', percentage: '', effect: 'الفينول الحيوي الرئيسي؛ مضاد للغثيان عبر تثبيط 5-HT3؛ مضاد للالتهاب عبر تثبيط COX/LOX؛ مسكِّن للألم' },
        { name: '[6]-شوغاول (يتكوّن من الجينجيرول بالتجفيف/التسخين)', percentage: '', effect: 'أقوى من الجينجيرول؛ مضاد للغثيان؛ خصائص مضادة للسرطان في الأبحاث' },
        { name: '[6]-باراداول', percentage: '', effect: 'مضاد للالتهاب؛ مضاد للأكسدة' },
        { name: 'زنجيرون', percentage: '', effect: 'مضاد للالتهاب؛ مضاد للغثيان' },
      ],
      moa: [
        { title: 'مضاد للغثيان', detail: '[6]-جينجيرول يحجب مستقبلات السيروتونين 5-HT3 في الأمعاء مما يُقلِّل إشارات الغثيان؛ يُسرِّع إفراغ المعدة.' },
        { title: 'مسكِّن ومضاد للالتهاب', detail: 'تثبيط مزدوج لـCOX-1/COX-2 وLOX-5 مما يُقلِّل تخليق البروستاغلاندين واللوكوترين.' },
        { title: 'تحسين الدورة الدموية', detail: 'تأثير موسِّع للأوعية ومضاد خفيف للصفيحات مما يُحسِّن تدفق الدم ويُقلِّل آلام الدورة الشهرية.' },
      ],
      uses: [
        'غثيان الحمل وغثيان الدوار وما بعد الجراحة',
        'تشنجات الدورة الشهرية (عسر الطمث)',
        'التهاب المفاصل العظمي',
        'عسر الهضم والانزعاج المعدي',
        'دعم أعراض البرد والإنفلونزا',
      ],
      howToUse: [
        { method: 'شاي الزنجبيل الطازج', instruction: 'ابشر 1-2 غرام زنجبيل طازج في ماء ساخن مع العسل 3 مرات يومياً.' },
        { method: 'كبسولات موحَّدة', instruction: '500 مغ كبسولات موحَّدة 1-3 مرات يومياً مع الوجبات.' },
        { method: 'الزنجبيل المُسكَّر', instruction: 'للغثيان الخفيف: 1-2 قطعة زنجبيل مُسكَّر عند الحاجة.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن جداً للاستخدام اليومي بالكميات الموصى بها.' },
        { group: 'الحوامل', notes: 'الكميات الغذائية وجرعات ما حتى 1 غرام/يوم آمنة؛ الجرعات الأكبر تستوجب استشارة طبية.' },
        { group: 'الأطفال (>2 سنة)', notes: 'آمن بكميات غذائية؛ الجرعات العلاجية بإشراف طبي.' },
        { group: 'ما قبل الجراحة', notes: 'وقفه 2 أسبوع قبل العملية.' },
      ],
      dosage: {
        standard: 'الغثيان: 1 غرام إجمالي يومياً في جرعات مقسَّمة. عسر الطمث: 750 مغ-2 غرام يومياً في 3-4 جرعات خلال الدورة. دوار الحركة: 0.5-1 غرام قبل 30 دقيقة من السفر.',
        forms: [
          { form: 'زنجبيل طازج / مجفف / مسحوق', dose: '0.5-2 غرام يومياً حسب الحالة.' },
          { form: 'كبسولات موحَّدة', dose: '500 مغ 1-3 مرات يومياً مع الوجبات.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة: حرقة المعدة، تهيج هضمي، ارتجاع الحمض، وفي الحالات النادرة تفاعلات تحسسية.',
          'جرعات كبيرة جداً: تأثير مضاد للصفيحات واضح مع احتمال تمديد وقت النزيف.',
        ],
        management: [
          'تقليل الجرعة، تناوله مع الطعام، وتجنّب الاستخدام على معدة فارغة.',
        ],
      },
      sideEffects: [
        'حرقة المعدة وعدم الراحة الهضمية الخفيفة عند الجرعات العالية',
        'تفاعلات تحسسية نادرة',
      ],
      contraindications: [
        'حصى المرارة: قد يزيد تدفق الصفراء؛ استشر طبيبك',
        'اضطرابات النزيف: تأثير مضاد خفيف للصفيحات',
        'الحمل: الجرعات الكبيرة تستوجب إشرافاً طبياً',
      ],
      drugInteractions: [
        'وارفارين ومضادات التخثر: تعزيز محتمل للتأثير المضاد للتخثر',
        'أسبرين: تأثير مضاد للصفيحات إضافي',
      ],
      storage: {
        forms: [
          { form: 'جذر طازج', instructions: 'يُحفظ في الثلاجة حتى 3 أسابيع أو يُجمَّد حتى 6 أشهر.' },
          { form: 'مسحوق ومستخلص', instructions: 'في حاوية محكمة بعيداً عن الرطوبة والضوء.' },
        ],
      },
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
      name: 'الأوكالبتوس', shortDescription: 'يُعدّ زيت الأوكالبتوس مُزيلاً قوياً للاحتقان وطارداً للبلغم، يُستخدم على نطاق واسع لتصفية الجيوب.',
      description: 'الأوكالبتوس من أكثر النباتات الطبية شهرةً في العالم، خاصةً من خلال زيته الأساسي الغني بالإيكاليبتول المثبت سريرياً.',
      history: 'استخدم السكان الأصليون الأستراليون أوراق الأوكالبتوس لآلاف السنين. اكتشف المستوطنون الأوروبيون قيمته الطبية في القرن الثامن عشر.',
      benefits: [
        { icon: 'air', title: 'مُزيل الاحتقان', desc: '1,8-cineole يكسر المخاط ويقلل الاحتقان الأنفي والقصبي بفعالية.' },
        { icon: 'coronavirus', title: 'مضاد للميكروبات', desc: 'الإيكاليبتول يُظهر نشاطاً مضاداً للبكتيريا والفيروسات.' },
        { icon: 'healing', title: 'مضاد للالتهابات', desc: 'يثبّط الوسطاء الالتهابيين في الجهاز التنفسي.' },
      ],
      botanicalFacts: { family: 'فصيلة الآسية', nativeRegion: 'أستراليا', growthHabit: 'شجرة دائمة الخضرة', activeCompounds: '1,8-cineole (إيكاليبتول)، α-pinene', cultivationNotes: 'شجرة سريعة النمو تتطلب أشعة شمس كاملة وتربة جيدة التصريف.' },
      preparation: [
        { method: 'الاستنشاق بالبخار', desc: 'أضف 3-5 قطرات زيت عطري إلى وعاء ماء ساخن. استنشق لمدة 10 دقائق تحت منشفة.', bestFor: 'احتقان الجيوب والصدر' },
        { method: 'دهان الصدر', desc: 'خفِّف 2-3% زيت عطري في زيت جوز الهند وضعه على منطقة الصدر والحلق.', bestFor: 'راحة تنفسية ليلية' },
      ],
      symptoms: ['جهاز تنفسي', 'سعال', 'التهاب الجيوب', 'برد'],
      warnings: [
        'خطر حرج: لا تُطبِّق الزيت الأساسي بالقرب من وجه الأطفال أقل من سنتين أبداً؛ خطر توقف التنفس.',
        'لا تبتلع الزيت الأساسي الخالص: شديد السمية عند الابتلاع.',
        'مرضى الربو: استخدامه بحذر شديد؛ قد يُحفِّز تشنج الشعب الهوائية لدى بعض المرضى.',
      ],
      activeConstituents: [
        { name: '1,8-سينيول / إيكاليبتول (الأساسي، 70-90%)', percentage: '70-90%', effect: 'طارد للبلغم؛ موسِّع للشعب الهوائية؛ مُزيل الاحتقان؛ مضاد للميكروبات؛ محلِّل للمخاط' },
        { name: 'α-بينين', percentage: '', effect: 'موسِّع ثانوي للشعب الهوائية؛ مطهِّر؛ مُساهِم في الرائحة المنعشة' },
        { name: 'ليمونين', percentage: '', effect: 'مضاد للأكسدة؛ مضاد للميكروبات الثانوي' },
        { name: 'p-سيمين', percentage: '', effect: 'مضاد للبكتيريا؛ مسكِّن للألم' },
        { name: 'غلوبولول وأروماديندرين', percentage: '', effect: 'مضاد للفطريات؛ مضاد للميكروبات' },
      ],
      moa: [
        { title: 'طارد للبلغم ومحلِّل للمخاط', detail: '1,8-سينيول يُرقِّق مباشرةً إفرازات المخاط ويُقلِّل لزوجته مما يُسهِّل طرحه؛ يُقلِّل كثافة المخاط في مجرى الهواء.' },
        { title: 'موسِّع للشعب الهوائية', detail: 'يُرخِّي العضلات الملساء في الشعب الهوائية مما يزيد تدفق الهواء ويُقلِّل السعال.' },
        { title: 'مضاد للميكروبات', detail: 'يُعطِّل أغشية الخلايا البكتيرية والفيروسية؛ فعّال ضد مسببات أمراض الجهاز التنفسي.' },
        { title: 'مُزيل الاحتقان', detail: 'يُنبِّه مستقبلات البرد في الممرات الأنفية مما يُعطي إحساساً بالوضوح؛ يُقلِّل تدفق الدم في الغشاء المخاطي.' },
      ],
      uses: [
        'السعال المنتج والالتهاب القصبي',
        'التهاب الجيوب الأنفية والاحتقان الأنفي',
        'أعراض البرد والإنفلونزا',
        'الاستنشاق بالبخار',
        'الفرك الموضعي للصدر (مخفَّف)',
      ],
      howToUse: [
        { method: 'الاستنشاق بالبخار', instruction: 'أضف 2-3 قطرات زيت أساسي إلى وعاء ماء ساخن. استنشق 10 دقائق بمنشفة فوق الرأس. 2-3 مرات يومياً.' },
        { method: 'دهان الصدر', instruction: 'خفِّف 2-3% في زيت ناقل (2-3 قطرات لكل ملعقة كبيرة زيت). ضعه على منطقة الصدر والظهر. لا تُطبِّق على الوجه.' },
        { method: 'شاي الأوراق', instruction: 'انقع 1-2 غرام أوراق مجففة في ماء ساخن 5-10 دقائق. اشرب كوباً مرتين يومياً.' },
      ],
      suitableAgeGroups: [
        { group: 'الأطفال (أقل من سنتين)', notes: 'محظور تماماً تطبيقه بالقرب من الوجه أو الصدر؛ خطر توقف التنفس.' },
        { group: 'الأطفال (2-12 سنة)', notes: 'تخفيف عالٍ جداً (<0.5%) للاستخدام الموضعي؛ الاستنشاق بحذر.' },
        { group: 'البالغون', notes: 'آمن بالتخفيف الصحيح للاستخدام الموضعي؛ الاستنشاق فعّال جداً.' },
        { group: 'مرضى الربو والصرع', notes: 'استخدام بحذر شديد جداً؛ قد يُحفِّز نوبات في بعض المرضى.' },
      ],
      dosage: {
        standard: 'استنشاق بالبخار: 2-3 قطرات في ماء ساخن، 2-3 مرات يومياً. موضعي: دائماً خفِّف 2-3% في زيت ناقل. لا تبتلع الزيت الأساسي الخالص.',
        forms: [
          { form: 'زيت أساسي للاستنشاق', dose: '2-3 قطرات في ماء ساخن، 2-3 مرات يومياً.' },
          { form: 'دهان موضعي للصدر (مخفَّف)', dose: '2-3% في زيت ناقل للتطبيق الموضعي فقط.' },
          { form: 'شاي الأوراق', dose: '1-2 غرام أوراق/كوب، مرتان يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة موضعية: تهيج جلدي حاد، احمرار، حرق.',
          'ابتلاع الزيت الأساسي: سمية جهازية حادة؛ اكتئاب الجهاز العصبي المركزي، نوبات تشنجية، فشل تنفسي.',
        ],
        management: [
          'موضعي: اغسل فوراً بماء وصابون.',
          'ابتلاع: تدخل طبي طارئ فوري.',
        ],
      },
      sideEffects: [
        'تهيج جلدي عند استخدام الزيت غير المخفَّف',
        'الاستنشاق عند مرضى الربو: قد يُحفِّز تشنج الشعب الهوائية',
        'نادراً: التهاب جلدي تماسي',
      ],
      contraindications: [
        'الأطفال أقل من سنتين: لا يُطبَّق على الوجه أو الصدر',
        'الربو: استخدام بحذر شديد؛ قد يُحفِّز تشنجاً',
        'الصرع: تجنّبي الاستنشاق المكثَّف',
      ],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'الزيت الأساسي', instructions: 'يُخزَّن في زجاجات داكنة محكمة بعيداً عن الحرارة والضوء.' },
        ],
      },
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
    },

    'dill-seed': {
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
    },

    cinnamon: {
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
    },

    butterbur: {
      name: 'البتربور',
      shortDescription: 'مُثبِّط قوي لمستقبلات الهيستامين H1 والليكوترين لعلاج التهاب الأنف التحسسي. ⚠️ يُستخدم المستحضر الخالي من PA فقط.',
      description: 'البتربور Petasites hybridus عشب أوروبي يُعادل فعاليته في التجارب السريرية بعض مضادات الهيستامين لعلاج حمى القش. البيتاسين والإيزوبيتاسين يُثبِّطان تخليق الليكوترين. النبات الخام يحتوي على ألكالويدات PA السامة للكبد؛ المستحضرات المُعتمدة يجب أن تكون PA-free.',
      symptoms: ['التهاب الأنف التحسسي', 'حمى القش', 'احتقان الأنف', 'العطس المتكرر'],
      warnings: [
        'خطر حرج: النبات الخام غير المُعالَج يحتوي على ألكالويدات البيروليزيدين (PA) التي تُسبِّب تلفاً كبدياً دائماً وهي مُسبِّبة للسرطان.',
        'استخدمي المستحضرات المُعتمدة الخالية من PA فقط (مثل Petadolex® أو ما يُعادلها).',
        'الحمل والرضاعة: بيانات السلامة غير كافية؛ تجنّبي الاستخدام.',
      ],
      activeConstituents: [
        { name: 'بيتاسين وإيزوبيتاسين (لاكتونات سيسكويتيربينية)', percentage: '', effect: 'العوامل المضادة للحساسية الأساسية؛ مُرخِيات للعضلات الملساء؛ مُثبِّطات لتخليق الليكوترين' },
        { name: 'S-بيتاسين', percentage: '', effect: 'نشاط مضاد للشقيقة؛ مُثبِّط لـ5-LOX؛ موسِّع للأوعية' },
        { name: 'لاكتونات سيسكويتيربينية باكينولايد', percentage: '', effect: 'مضادة للالتهاب؛ مضادة للتشنج' },
        { name: 'مستخلصات خالية من PA (حرج)', percentage: '', effect: 'النبات الخام يحتوي على ألكالويدات البيروليزيدين (PA)؛ لا يُستخدم إلا المستحضر الخالي من PA' },
      ],
      moa: [
        { title: 'مضاد للحساسية', detail: 'البيتاسين والإيزوبيتاسين يحجبان تخليق الليكوترين (تثبيط 5-LOX) مما يُقلِّل تدهوُّر الخلايا البدينة وإطلاق الهيستامين.' },
        { title: 'مضاد للهيستامين', detail: 'يمنع ارتباط الهيستامين بمستقبلات H1 بفعالية مماثلة للسيتيريزين دون تأثير مُهدِّئ.' },
        { title: 'مضاد للشقيقة', detail: 'S-بيتاسين يُثبِّط 5-LOX وCOX-2؛ يُنظِّم نبضية الأوعية الدموية الدماغية.' },
      ],
      uses: [
        'التهاب الأنف التحسسي الموسمي (حمى القش)',
        'التهاب الأنف التحسسي المزمن',
        'الوقاية من الشقيقة (نوبات الصداع النصفي)',
        'العطس وسيلان الأنف التحسسي',
      ],
      howToUse: [
        { method: 'مستخلص موحَّد خالٍ من PA', instruction: 'استخدمي 50-75 مغ من المستخلص الخالي من PA مرتين يومياً مع الوجبات. للشقيقة: 75 مغ مرتين يومياً لمدة لا تقل عن 3 أشهر.' },
        { method: 'منتجات معتمدة', instruction: 'استخدمي Petadolex® أو ما يُعادلها من المستحضرات المُعتمدة الخالية من PA فقط.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن مع المستحضرات الخالية من PA المُعتمدة.' },
        { group: 'الأطفال', notes: 'تحت إشراف طبي فقط.' },
        { group: 'الحوامل والمرضعات', notes: 'تجنّبي الاستخدام لعدم كفاية بيانات السلامة.' },
      ],
      dosage: {
        standard: 'البالغون: 50-75 مغ مستخلص خالٍ من PA مرتين يومياً مع الوجبات. الوقاية من الشقيقة: 75 مغ مرتين يومياً لمدة 3 أشهر على الأقل.',
        forms: [
          { form: 'كبسولات مستخلص خالٍ من PA', dose: '50-75 مغ مرتين يومياً مع الوجبات.' },
        ],
      },
      overdose: {
        symptoms: [
          'جرعة زائدة من المستحضر المُعتمد: تجشؤ، صداع، حكة عيون خفيفة، عدم راحة هضمي.',
          'نبات خام أو مستحضر غير مُعتمد: سمية كبدية حادة تتطلب تدخلاً طبياً طارئاً.',
        ],
        management: [
          'مستحضر خالٍ من PA: تقليل الجرعة، علاج عرضي.',
          'نبات خام/غير مُعتمد: تدخل طبي طارئ فوري لسمية الكبد.',
        ],
      },
      sideEffects: [
        'تجشؤ خفيف وصداع وحكة في العيون مع بعض المستحضرات',
        'متحمَّل جيداً عموماً مع المستخلصات الخالية من PA',
      ],
      contraindications: [
        'النبات الخام غير المُعالَج: محظور تماماً لجميع الفئات',
        'الحمل والرضاعة: لعدم كفاية بيانات السلامة',
        'حساسية معروفة لنباتات عائلة Asteraceae',
      ],
      drugInteractions: [],
      storage: {
        forms: [
          { form: 'كبسولات معتمدة', instructions: 'يُخزَّن وفق تعليمات المنتج، بعيداً عن الرطوبة والحرارة.' },
        ],
      },
    },

    'stinging-nettle': {
      name: 'القراص',
      shortDescription: 'مُثبِّط طبيعي لالتهاب الأنف التحسسي يعمل على مستقبلات الهيستامين ويُقلِّل الإفرازات الأنفية والعطس.',
      description: 'القراص Urtica dioica نبات يُستخدم طبياً منذ اليونان القديمة. مستخلص أوراقه يُثبِّط إطلاق السيتوكينات الالتهابية ويُقلِّل نشاط التفاعلات التحسسية عبر تثبيط NF-κB ومسارات الهيستامين.',
      symptoms: ['التهاب الأنف التحسسي', 'العطس', 'حمى القش', 'حكة العيون'],
      warnings: [
        'استخدمي المستحضرات المُعالَجة فقط (مجففة أو مجمَّدة): النبات الطازج يُسبِّب حروقاً جلدية وشرى فورياً عند اللمس.',
        'أمراض الكلى: التأثير المُدرّ للبول قد يُجهِّد الكلى المتضررة؛ استشيري طبيبك.',
        'الحمل: تجنّبي الجرعات العلاجية لاحتمال تحفيز تقلصات الرحم.',
      ],
      activeConstituents: [
        { name: 'CAME (إستر حمض الكافييك والماليك)', percentage: '', effect: 'مضاد للالتهاب الأساسي؛ مُثبِّط COX-1؛ مضاد للحساسية' },
        { name: 'كيرستين وروتين (بيوفلافونويدات)', percentage: '', effect: 'مُثبِّطات للخلايا البدينة؛ مضادة للهيستامين؛ مضادة للالتهاب' },
        { name: 'سكوبوليتين (كومارين)', percentage: '', effect: 'مضاد للالتهاب؛ مضاد للتشنج' },
        { name: 'β-سيتوستيرول', percentage: '', effect: 'مضاد للالتهاب؛ مُثبِّط 5α-ريداكتاز (فائدة للبروستاتا)' },
      ],
      moa: [
        { title: 'مضاد طبيعي للهيستامين', detail: 'الكيرستين والروتين يُثبِّطان الخلايا البدينة مما يمنع إطلاق الهيستامين؛ CAME يُثبِّط تكوين الهيستامين.' },
        { title: 'تثبيط COX-1', detail: 'CAME يُثبِّط مباشرةً مسار تخليق البروستاغلاندين COX-1 مُنتجاً تأثيراً مضاداً للالتهاب.' },
        { title: 'تأثير مُدرّ للبول', detail: 'يزيد إنتاج البول وإفراز الكهارل مما يُقلِّل الاحتقان المرتبط بالسوائل.' },
      ],
      uses: [
        'التهاب الأنف التحسسي الموسمي والمزمن',
        'مُدرّ بول خفيف',
        'تضخم البروستاتا الحميد (مستخلص الجذر)',
        'التهاب المفاصل',
      ],
      howToUse: [
        { method: 'كبسولات مجمَّدة جافة للحساسية', instruction: '300-600 مغ كبسولات مجمَّدة جافة 3 مرات يومياً. يستغرق التأثير 1-2 أسبوع من الاستخدام المنتظم.' },
        { method: 'شاي الأوراق المجففة', instruction: 'انقعي ملعقة إلى ملعقتين من الأوراق المجففة في ماء ساخن 10 دقائق. اشربي كوبين إلى ثلاثة يومياً.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'آمن للاستخدام المنتظم بالمستحضرات المُعالَجة.' },
        { group: 'الحوامل', notes: 'تجنّبي الجرعات العلاجية لاحتمال تحفيز تقلصات الرحم.' },
        { group: 'مرضى الكلى', notes: 'احتياط: التأثير المُدرّ للبول قد يُجهِّد الكلى المتضررة.' },
      ],
      dosage: {
        standard: 'كبسولات مجمَّدة جافة: 300-600 مغ 3 مرات يومياً. شاي: كوبان يومياً. بداية التأثير للحساسية: 1-2 أسبوع.',
        forms: [
          { form: 'كبسولات مجمَّدة جافة', dose: '300-600 مغ 3 مرات يومياً.' },
          { form: 'شاي الأوراق المجففة', dose: 'ملعقة إلى ملعقتين لكل كوب، مرتين إلى ثلاث مرات يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'نبات طازج: حروق جلدية فورية وشرى من اللاسعة.',
          'جرعة زائدة من المستحضر: عدم راحة هضمي خفيف، إدرار بول مفرط.',
        ],
        management: [
          'تلامس النبات الطازج: اغسل المنطقة بالماء البارد، ضع مُبرِّداً موضعياً.',
          'جرعة زائدة من المستحضر: تقليل الجرعة، الإماهة الكافية.',
        ],
      },
      sideEffects: [
        'النبات الطازج: حروق جلدية وشرى عند اللمس (ارتدِ قفازات)',
        'المستحضرات المُعالَجة: متحمَّلة جيداً جداً',
        'عدم راحة هضمي خفيف في بعض الأشخاص',
      ],
      contraindications: [
        'أمراض الكلى الشديدة: التأثير المُدرّ قد يُشكِّل ضغطاً إضافياً',
        'الحمل: تجنّبي الجرعات العلاجية',
        'الأدوية المُدرّة للبول: تأثير إضافي',
      ],
      drugInteractions: [
        'مدرات البول: تأثير مُدرّ إضافي؛ مراقبة الكهارل ضرورية',
        'أدوية ضغط الدم: تعزيز محتمل لتأثير الخفض',
      ],
      storage: {
        forms: [
          { form: 'الأوراق المجففة والكبسولات', instructions: 'يُخزَّن في حاوية محكمة الإغلاق بعيداً عن الرطوبة والضوء.' },
        ],
      },
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
          'اختلال الشوارد (نقص بوتاسيوم الدم) - قد يُحفّز اضطراب نظم القلب وضعف العضلات',
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
        'آلام بطنية وتقلصات ("مغص") - الأكثر شيوعاً',
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
        'الغليكوسيدات القلبية (مثلاً ديجوكسين) ومضادات اضطراب النظم: نقص بوتاسيوم الدم الناتج عن إساءة الملينات يُضخّم سميتها - خطير.',
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
        { name: 'ثيمول (30-70% من الزيت الأساسي)', percentage: '30-70%', effect: 'المركّب الفينولي الأساسي؛ يُدمّر أغشية البكتيريا والفطريات، يُعزّز إزالة المخاط بالأهداب، ويعمل كموسّع للقصبات عبر حصار قنوات الكالسيوم.' },
        { name: 'كارفاكرول (3-15%) وبي-سيمين ولينالول', percentage: '3-15%', effect: 'تيربينات مضادة للميكروبات والالتهاب والتشنج تُعزّز تأثير الثيمول.' },
        { name: 'فلافونويدات (لوتيولين، أبيجينين، ثيمونين، إيريودكتيول)', percentage: '', effect: 'مضادات التهاب وأكسدة؛ تأثير موسّع للقصبات مستقل عن الزيت الأساسي.' },
        { name: 'حمض الروزماريك (حمض فينولي)', percentage: '', effect: 'مضاد قوي للأكسدة والالتهاب؛ يُثبّط الليكوترينات والبروستاغلاندينات المُسبّبة لالتهاب الغشاء المخاطي.' },
        { name: 'صابونين', percentage: '', effect: 'تُسهم في التأثير المُخفّف للبلغم (الميوكوليتيك)؛ تُقلّل التوتر السطحي للمخاط مما يُسهّل طرحه.' },
      ],
      moa: [
        { title: 'موسّع للقصبات وطارد للتشنج', detail: 'الثيمول والفلافونويدات يُرخّيان العضلة الملساء القصبية عبر آليتين: حصار قنوات الكالسيوم وتحفيز خفيف لمستقبلات بيتا-2 الأدرينالية، مما يُقلّل التشنج القصبي ومقاومة مجرى الهواء.' },
        { title: 'طارد بلغم وحالّ للمخاط', detail: 'يُحفّز غدد القصبات على إفراز مخاط أكثر سيولة، ويُقلّل لزوجته بمساعدة الصابونين التي تُخفّض توتره السطحي؛ مما يُسهّل إزالة البلغم بواسطة الأهداب المخاطية.' },
        { title: 'مطهّر قاتل للميكروبات', detail: 'الثيمول وكارفاكرول يُدمّران أغشية البكتيريا والفطريات مع نشاط واسع ضد مسبّبات الأمراض التنفسية بما فيها العقدية الرئوية والمستدمية النزلية والكلبسيللا الرئوية.' },
      ],
      uses: ['علاج السعال المنتج والتهاب الشعب الهوائية الحاد (مُعتمد من EMA)', 'الالتهابات التنفسية العليا (زكام، التهاب البلعوم والحنجرة)', 'السعال الديكي: استخدام تقليدي مساند', 'النظافة الفموية: الثيمول مكوّن فعّال في غسولات الفم المطهّرة'],
      howToUse: [
        { method: 'شاي الزعتر (النقع المائي)', instruction: 'انقع 1-2 غ زعتر مجفف في 150 مل ماء مغلي لمدة 10 دقائق مُغطّى. اشرب 3-4 مرات يومياً. أضف عسلاً وليمون لتعزيز التأثير المُهدّئ والمضاد للميكروبات.' },
        { method: 'شراب موحّد أو مستخلص سائل', instruction: 'البالغون (فوق 12 سنة): 1-2 مل مستخلص سائل 3 مرات يومياً. الأطفال (4-12 سنة): 2.5-5 مل شراب أطفال 3 مرات يومياً.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون والمراهقون (فوق 12 سنة)', notes: 'الجرعة الكاملة آمنة: 1-2 غ شاي أو 1-2 مل مستخلص، 3-4 مرات يومياً.' },
        { group: 'الأطفال (4-12 سنة)', notes: 'شراب الأطفال: 2.5-5 مل 3 مرات يومياً تحت إشراف. الشاي المُخفَّف مناسب أيضاً.' },
        { group: 'الأطفال (تحت 4 سنوات)', notes: 'يُتجنّب المستخلصات العلاجية المُركَّزة. الكميات الطهوية في الطعام آمنة.' },
        { group: 'الحوامل', notes: 'الكميات الطهوية آمنة. يُتجنّب الزيت الأساسي والمستخلص المُركَّز احتياطاً.' },
      ],
      dosage: {
        standard: 'البالغون: 1-2 غ شاي 3-4 مرات يومياً أو 1-2 مل مستخلص سائل 3 مرات. الأطفال (4-12 سنة): 2.5-5 مل شراب 3 مرات يومياً.',
        forms: [
          { form: 'شاي الزعتر الجاف (البالغون)', dose: '1-2 غ في 150 مل ماء مغلي، 10 دقائق مُغطّى، 3-4 مرات يومياً.' },
          { form: 'مستخلص سائل موحّد (البالغون)', dose: '1-2 مل، 3 مرات يومياً.' },
          { form: 'شراب أطفال (4-12 سنة)', dose: '2.5-5 مل، 3 مرات يومياً.' },
        ],
      },
      overdose: {
        symptoms: ['جرعات عالية من الزيت الأساسي: تهيّج معدي معوي وغثيان وتقيؤ.', 'نادر: اضطراب وظيفة الغدة الدرقية عند تجاوز الجرعات الكبيرة مطوّلاً.'],
        management: ['توقّف فوراً. دعم تعاطفي وترطيب فموي.', 'طلب الرعاية الطبية إذا كانت الأعراض شديدة أو ظهرت أعراض درقية.'],
      },
      sideEffects: [
        'تهيّج معدي أو حرقة خفيفة بجرعات عالية',
        'ردود فعل تحسسية جلدية نادرة في الحساسين من الشفويات',
        'تأثيرات درقية محتملة بالتناول المفرط المطوّل',
      ],
      contraindications: [
        'فرط حساسية معروف من الشفويات (Lamiaceae)',
        'اضطرابات الغدة الدرقية غير المُسيطَر عليها',
        'الأطفال دون 4 سنوات: يُتجنّب المستخلصات العلاجية المُركَّزة',
      ],
      drugInteractions: [
        'أدوية الغدة الدرقية (ليفوثيروكسين): تداخل محتمل بالجرعات العالية؛ راقب الوظيفة الدرقية.',
        'مضادات التخثر (وارفارين): تأثير خفيف مضاد للصفيحات نظرياً؛ مراقبة معيارية.',
      ],
      storage: {
        forms: [
          { form: 'عشب مجفف', instructions: 'أوعية محكمة في مكان بارد ومُعتم دون 25 درجة مئوية.' },
          { form: 'زيت أساسي أو مستخلص سائل', instructions: 'زجاجات زجاجية داكنة محكمة الإغلاق بعيداً عن الحرارة والضوء.' },
        ],
      },
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
        { name: 'ترانس-أنيثول (80-90% من الزيت الأساسي)', percentage: '80-90%', effect: 'المركّب الإفرازي الرئيسي؛ يُحفّز الظهارة الهدبية القصبية، مضاد للميكروبات، وخصائص استروجينية خفيفة جداً.' },
        { name: 'إيستراجول (ميثيل كافيكول، 1-5%)، سيودوأيزوأنيثول، فينيل بروبانويدات', percentage: '1-5%', effect: 'فينيل بروبانويدات مضادة للتشنج والميكروبات تُعزّز تأثير الأنيثول.' },
        { name: 'فلافونويدات غليكوسيدية (كيرسيترين، روتين، أيزوكيرسيترين، لوتيولين)', percentage: '', effect: 'مضادات التهاب وأكسدة؛ تُسهم في تأثير إرخاء القصبات.' },
        { name: 'كومارينات (أمبيليفيرون، سكوبوليتين)', percentage: '', effect: 'مضادة للتشنج وتوسيع طفيف للقصبات؛ يمتلك الأمبيليفيرون خصائص مضادة للميكروبات أيضاً.' },
      ],
      moa: [
        { title: 'إفرازي (يُحفّز الظهارة الهدبية)', detail: 'يُحفّز الأنيثول الخلايا الهدبية في قصبات الرئة على زيادة إفراز المخاط وإسالته، مما يُقلّل لزوجته ويُسهّل طرحه عبر السلّم الهدبي المخاطي.' },
        { title: 'مضاد للتشنج (مُرخٍ للعضلة الملساء)', detail: 'يُرخّي الأنيثول والكومارينات العضلة الملساء القصبية والمعدية المعوية عبر حصار قنوات الكالسيوم وتحفيز خفيف لبيتا-2، مما يُقلّل التشنج القصبي والتقلصات المعوية.' },
        { title: 'مُلطّف للغشاء المخاطي', detail: 'تُكوّن مكوّنات الزيت الأساسي طبقة مُلطّفة رقيقة على الغشاء المخاطي للبلعوم والقصبات، مما يُقلّل تهيّج مستقبلات السعال ويُخفّف السعال الجاف والتهيّجي.' },
      ],
      uses: ['طارد بلغم إفرازي للسعال المنتج والتهاب الشعب (معترف به من EMA)', 'تخفيف الأعراض التنفسية للعدوى الفيروسية الحادة والتشنج القصبي', 'مُطرد غازات لانتفاخ البطن والتقلصات المعوية'],
      howToUse: [
        { method: 'شاي اليانسون (نقع بذور مجروشة)', instruction: 'اجرش 1-3.5 غ بذور اليانسون بخفة. انقع في 150 مل ماء مغلي مُغطّى 10-15 دقيقة. صفّ وحلّ بالعسل. اشرب 3 مرات يومياً. الأطفال (4-12 سنة): 0.5-1 غ للكوب، مرتين إلى ثلاث مرات يومياً.' },
        { method: 'شراب موحّد', instruction: 'البالغون: وفق إرشادات المُصنّع (مثل شراب Anisron أو Pentamix)، عادةً 10-15 مل مرتين إلى ثلاث مرات يومياً. اتبع جرعة الأطفال المكتوبة على العبوة.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'الجرعة الكاملة المعيارية: 1-3.5 غ بذور مجروشة في شاي، 3 مرات يومياً.' },
        { group: 'الأطفال (4-12 سنة)', notes: 'شاي خفيف: 0.5-1 غ للكوب، مرتين إلى ثلاث مرات يومياً. الشراب الموحّد تحت إشراف. لا يُعطى الزيت الأساسي للأطفال.' },
        { group: 'الأطفال (تحت 4 سنوات)', notes: 'يُتجنّب كل مستخلصات اليانسون المُركَّزة. الكميات الطهوية الضئيلة في الطعام آمنة.' },
        { group: 'الحوامل', notes: 'الكميات الطهوية آمنة. يُتجنّب الجرعات العلاجية الكبيرة والزيت الأساسي.' },
      ],
      dosage: {
        standard: 'البالغون: 1-3.5 غ بذور مجروشة في 150 مل شاي، 3 مرات يومياً. الأطفال (4-12 سنة): 0.5-1 غ للكوب، مرتين إلى ثلاث مرات يومياً.',
        forms: [
          { form: 'شاي البذور المجروشة (البالغون)', dose: '1-3.5 غ في 150 مل ماء مغلي، 3 مرات يومياً.' },
          { form: 'شاي البذور المجروشة (4-12 سنة)', dose: '0.5-1 غ في 150 مل، مرتين إلى ثلاث مرات يومياً.' },
          { form: 'شراب موحّد', dose: 'البالغون: وفق إرشادات المُصنّع (مثل شراب Anisron 120 مل أو Pentamix).' },
        ],
      },
      overdose: {
        symptoms: [
          'الزيت الأساسي بجرعات عالية: تأثيرات سامة عصبية شبه صرعية تشمل تشنجات وإثارة الجهاز العصبي المركزي وغثيان وتقيؤ.',
          'جرعات زائدة من الشاي: تهيّج معدي معوي وتقلصات بطنية.',
        ],
        management: [
          'تجرّع الزيت الأساسي: حالة طوارئ طبية. لا تُحفّز القيء. ادعم مجرى الهواء وتوجّه للطوارئ لإدارة النوبات التشنجية.',
          'جرعة زائدة من الشاي: توقّف. دعم تعاطفي وترطيب فموي.',
        ],
      },
      sideEffects: [
        'تهيّج معدي بجرعات عالية',
        'ردود فعل تحسسية نادرة في الحساسين من الخيميات (شرى، التهاب تماسي)',
        'تأثيرات استروجينية نظرية عند الجرعات المفرطة المطوّلة (الأنيثول)',
      ],
      contraindications: [
        'فرط حساسية معروف من Pimpinella anisum أو الخيميات',
        'الحالات الحساسة للاستروجين (كالأورام الهرمونية): تأثير استروجيني خفيف نظري للأنيثول بالجرعات العلاجية',
        'الصرع أو اضطرابات التشنج: الزيت الأساسي سام عصبياً بالجرعات العالية',
      ],
      drugInteractions: [
        'مضادات التخثر (وارفارين): تأثير مضاد للتخثر خفيف محتمل بالجرعات العالية؛ مراقبة معيارية.',
        'العلاجات الهرمونية وموانع الحمل: تأثير استروجيني مضاف نظري بالجرعات المرتفعة جداً.',
      ],
      storage: {
        forms: [
          { form: 'بذور كاملة أو مجروشة', instructions: 'أوعية محكمة في مكان بارد ومُعتم دون 25 درجة مئوية للحفاظ على محتوى الأنيثول المتطاير.' },
          { form: 'زيت أساسي', instructions: 'زجاجات زجاجية داكنة محكمة الإغلاق بعيداً عن الحرارة والضوء.' },
        ],
      },
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
      name: 'بيلارغونيوم (إبرة الراعي الأفريقية)',
      shortDescription: 'علاج أفريقي مُثبَت لالتهابات الجهاز التنفسي',
      description: 'بيلارغونيوم (Pelargonium sidoides) نبات أفريقي تقليدي تُستخلص من جذوره مركّبات كوماريني-أوكسيجينية وبوليفينولية فريدة تُثبّط التصاق بكتيريا الجهاز التنفسي العلوي ولا سيما Streptococcus وHaemophilus، وتُعزّز مناعة الغشاء المخاطي. مُستخلَصه EPs 7630 هو أكثر المستخلصات النباتية توثيقاً لالتهابات الشعب الهوائية الحادة.',
      symptoms: ['التهاب الجيوب الأنفية', 'التهاب الشعب الهوائية الحاد', 'التهاب البلعوم والأنف', 'الزكام والإنفلونزا الخفيفة'],
      warnings: [
        'أبلغ عن تفاعلات كبدية نادرة؛ أوقف الاستخدام عند اصفرار الجلد',
        'الحوامل والمرضعات: يُتجنّب احتياطاً',
      ],
      activeConstituents: [
        { name: 'كومارينات أوكسيجينية (أومكالين، أرتيلين)', percentage: '', effect: 'تُثبّط ارتباط بكتيريا الجهاز التنفسي بمستقبلات الغشاء المخاطي' },
        { name: 'نفثوكينونات', percentage: '', effect: 'مضادة للميكروبات وتُعزّز النشاط المناعي' },
        { name: 'فلافونويدات وبروانثوسيانيدينات', percentage: '', effect: 'مضادة للأكسدة وتُعزّز المناعة المخاطية' },
      ],
      moa: [
        { title: 'منع ارتباط البكتيريا التنفسية', detail: 'الكومارينات الأوكسيجينية تُثبّط ارتباط بكتيريا الجهاز التنفسي بمستقبلات الغشاء المخاطي' },
        { title: 'تنشيط المناعة الطبيعية', detail: 'تُحفّز خلايا المناعة الطبيعية (Natural Killer cells) وبلعمة الضامّات' },
        { title: 'تثبيط إنزيمات البكتيريا', detail: 'يُثبّط إنزيمات protease وneuraminidase التي تُتلف النسيج المخاطي' },
      ],
      uses: ['التهاب الجيوب الأنفية الحاد', 'التهاب الشعب الهوائية الحاد والمزمن', 'التهاب الحلق والبلعوم البكتيري', 'تعزيز مناعة المسالك التنفسية العليا'],
      howToUse: [
        { method: 'مستخلص EPs 7630 (قطرات)', instruction: 'الصياغة المدروسة سريرياً؛ 30 قطرة ثلاث مرات يومياً قبل الوجبات' },
        { method: 'أقراص بيلارغونيوم', instruction: 'أنسب للمسافرين؛ 20 ملغ ثلاث مرات يومياً' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون وفوق 12 سنة', notes: 'الجرعة الكاملة آمنة' },
        { group: 'الأطفال (6 إلى 12 سنة)', notes: 'جرعة مخفّضة تحت إشراف طبي' },
        { group: 'الحوامل', notes: 'يُتجنّب احتياطاً' },
      ],
      dosage: {
        standard: 'مستخلص EPs 7630: 30 قطرة ثلاث مرات يومياً لـ 7 إلى 14 يوماً',
        forms: [
          { form: 'مستخلص EPs 7630 قطرات', dose: '30 قطرة ثلاث مرات يومياً' },
          { form: 'أقراص 20 ملغ', dose: '20 ملغ ثلاث مرات يومياً؛ مدة العلاج 7 إلى 14 يوماً' },
        ],
      },
      overdose: {
        symptoms: ['اضطراب معدي معوي'],
        management: ['لا سمّية حادة موثّقة بالجرعات المعيارية', 'قلّل الجرعة عند الإزعاج'],
      },
      sideEffects: [
        'إزعاج معدي خفيف وغثيان وطعم مرّ (شائعة قليلاً)',
        'تفاعل تحسسي (نادر)',
        'ارتفاع إنزيمات الكبد (نادر جداً، تقارير فردية)',
      ],
      contraindications: [
        'أمراض الكبد الحادة أو المزمنة',
        'اضطرابات المناعة الذاتية الحادة',
        'الحمل والرضاعة',
        'الاستخدام المطوّل فوق 4 أسابيع يستوجب متابعة طبية',
      ],
      drugInteractions: [
        'مضادات التخثر: الكومارينات قد تُعزّز تأثير وارفارين',
        'مثبطات CYP2C9: تداخل نظري محتمل',
        'أدوية المناعة: تآزر أو تضاد محتمل',
      ],
      storage: {
        forms: [
          { form: 'قطرات', instructions: 'في درجة الغرفة بعيداً عن الضوء' },
          { form: 'أقراص', instructions: 'وعاء محكم في بيئة جافة' },
        ],
      },
      benefits: [
        { icon: 'vaccines', title: 'مانع التصاق البكتيريا', desc: 'الكومارينات الأوكسيجينية تمنع تثبّت البكتيريا التنفسية بالغشاء المخاطي.' },
        { icon: 'shield', title: 'تعزيز المناعة المخاطية', desc: 'يُحفّز Natural Killer cells وبلعمة الضامّات للتصدي للعدوى.' },
        { icon: 'air', title: 'علاج الجيوب الأنفية', desc: 'من أقوى الأعشاب الموثّقة لالتهاب الجيوب الأنفية الحاد.' },
        { icon: 'science', title: 'أدلة سريرية قوية', desc: 'EPs 7630 مدروس في أكثر من 20 تجربة سريرية عشوائية مُحكَّمة.' },
      ],
      botanicalFacts: {
        family: 'عائلة Geraniaceae (الغرانيومية)',
        nativeRegion: 'أفريقيا الجنوبية (جنوب أفريقيا، ليسوتو، سوازيلاند).',
        growthHabit: 'نبات معمّر جذره أسمر داكن سميك؛ أوراق دائرية مخملية؛ أزهار أرجوانية داكنة.',
        activeCompounds: 'أومكالين (8-هيدروكسي-5،7-ثنائي ميثوكسي كومارين)، أرتيلين، نفثوكينونات، كيرسيتين.',
        cultivationNotes: 'استخدمه شعب الزولو والباسوتو في جنوب أفريقيا للسل وأمراض الصدر لقرون. المستخلص EPs 7630 طوّرته شركة Schwabe الألمانية وهو مُعتمد في أكثر من 40 دولة.',
      },
      preparation: [
        { method: 'قطرات مستخلص EPs 7630', desc: 'تناول 30 قطرة في كمية صغيرة من الماء ثلاث مرات يومياً قبل الوجبات، لمدة 7-14 يوماً.', bestFor: 'التهاب الجيوب الأنفية والشعب الهوائية الحاد' },
        { method: 'أقراص بيلارغونيوم', desc: 'تناول 20 ملغ ثلاث مرات يومياً مع كوب ماء. أنسب للمسافرين وصعوبة حمل القطرات.', bestFor: 'التهاب الحلق وعلاج التنفسية في السفر' },
      ],
    },

    'black-elderberry': {
      name: 'الإلدربيري الأسود (العبهر الأسود)',
      shortDescription: 'مُعزّز مناعي مضاد للفيروسات التنفسية',
      description: 'الإلدربيري (Sambucus nigra) شجرة أوروبية تحتوي ثمارها الناضجة على أنثوسيانينات وبروتينات SNA-II تُثبّط التصاق فيروسات الإنفلونزا ونزلات البرد بمستقبلات الخلايا التنفسية. التجارب السريرية تُظهر تقليص مدة الإنفلونزا بـ 2-4 أيام وتخفيف أعراضها بنسبة معتدالة.',
      symptoms: ['الإنفلونزا والزكام الشديد', 'احتقان الجيوب الأنفية', 'التهاب الحلق الفيروسي', 'ضعف المناعة الموسمي'],
      warnings: [
        'الثمار غير الناضجة والأوراق والجذور سامّة (سيانوجينيك غليكوسيدات)؛ تُستخدم فقط الثمار الناضجة المطبوخة أو المستخلصات المُعالجة',
        'لا تُفرط في استخدامه مع أمراض المناعة الذاتية',
      ],
      activeConstituents: [
        { name: 'أنثوسيانينات (سيانيدين 3-سامبيوبيوسيد وسيانيدين 3-غلوكوسيد)', percentage: '', effect: 'تمنع ارتباط فيروسات الإنفلونزا بمستقبلات الخلايا التنفسية' },
        { name: 'بروتين SNA-II (ليكتين)', percentage: '', effect: 'يُثبّط عملية التكاثر الفيروسي داخل الخلايا' },
        { name: 'كيرسيتين وكلوروجينيك أسيد', percentage: '', effect: 'مضادان للأكسدة ويُعزّزان الاستجابة المناعية' },
        { name: 'فيتامين C', percentage: '', effect: 'مضاد للأكسدة ومعزّز للمناعة' },
      ],
      moa: [
        { title: 'منع ارتباط الفيروسات', detail: 'الأنثوسيانينات ترتبط بالمستقبلات الغليكوبروتينية على سطح فيروسات الإنفلونزا وتمنع ارتباطها بمستقبلات حمض السياليك على الخلايا التنفسية' },
        { title: 'تثبيط التكاثر الفيروسي', detail: 'SNA-II ليكتين يُثبّط عملية التكاثر الفيروسي داخل الخلايا' },
        { title: 'تحفيز السيتوكينات المناعية', detail: 'يُحفّز إنتاج IFN-γ وTNF-α المُفيدَين بجرعات معتدلة' },
      ],
      uses: ['تقصير مدة الإنفلونزا وتخفيف شدّتها', 'علاج الزكام الشديد وسيلان الأنف', 'دعم مناعة المجاري التنفسية العليا', 'التعافي بعد الأمراض التنفسية'],
      howToUse: [
        { method: 'شراب الإلدربيري التجاري', instruction: 'الأنسب للجرعة الدقيقة؛ ابدأ عند ظهور الأعراض الأولى' },
        { method: 'شاي التوت المجفف', instruction: 'للدعم المناعي الوقائي في موسم البرد والإنفلونزا' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون وفوق 12 سنة', notes: 'الجرعة الكاملة آمنة' },
        { group: 'الأطفال (2 إلى 12 سنة)', notes: 'بالجرعة المخصصة للأطفال (7.5 مل)' },
        { group: 'مرضى المناعة الذاتية الشديدة', notes: 'يُتجنّب بسبب تحفيز المناعة' },
      ],
      dosage: {
        standard: 'شراب موحّد: 15 مل أربع مرات يومياً للبالغين',
        forms: [
          { form: 'شراب موحّد (38 إلى 40% أنثوسيانين)', dose: '15 مل أربع مرات يومياً (بالغون)؛ 7.5 مل أربع مرات (أطفال)' },
          { form: 'أقراص/كبسولات 500 ملغ', dose: 'مرتين يومياً' },
        ],
      },
      overdose: {
        symptoms: ['غثيان وإقياء من التوت الطازج النيّئ غير الناضج (سيانوجينيك)'],
        management: ['الثمار الناضجة المطبوخة أو المستخلصات المُعالجة: لا سمّية حادة', 'عند تناول التوت النيّئ الكثير: راجع الطبيب فوراً'],
      },
      sideEffects: [
        'اضطراب معدي وإسهال خفيف (نادراً)',
        'تحفيز زائد للسيتوكينات في أمراض المناعة الذاتية (نظرياً)',
      ],
      contraindications: [
        'أمراض المناعة الذاتية الشديدة (لوبوس، التهاب المفاصل الروماتويدي) لأنه يُحفّز المناعة',
        'مثبطات المناعة بعد زراعة الأعضاء',
        'حساسية من Sambucus',
      ],
      drugInteractions: [
        'مثبطات المناعة (Cyclosporine): قد يُضعف تأثيرها',
        'أدوية السكري: مراقبة خفض السكر',
        'مدرّات البول: تأثير مضاعف طفيف',
      ],
      storage: {
        forms: [
          { form: 'شراب مفتوح', instructions: 'في الثلاجة بعد الفتح؛ يدوم 3 أشهر' },
          { form: 'كبسولات', instructions: 'وعاء محكم بعيداً عن الرطوبة' },
        ],
      },
      benefits: [
        { icon: 'coronavirus', title: 'مضاد للفيروسات التنفسية', desc: 'يمنع ارتباط فيروسات الإنفلونزا وكورونا بمستقبلات الخلايا التنفسية.' },
        { icon: 'timer', title: 'تقصير مدة الإنفلونزا', desc: 'يُقلّص مدة الإنفلونزا بـ 2-4 أيام وفق التجارب السريرية.' },
        { icon: 'shield', title: 'دعم مناعي شامل', desc: 'يُحفّز إنتاج السيتوكينات المناعية المُفيدة ويُعزّز التعافي.' },
        { icon: 'spa', title: 'غني بالأنثوسيانينات', desc: 'أحد أغنى المصادر الطبيعية بالأنثوسيانينات المضادة للأكسدة.' },
      ],
      botanicalFacts: {
        family: 'عائلة Adoxaceae',
        nativeRegion: 'أوروبا وغرب آسيا وأمريكا الشمالية. يُزرع تجارياً في أوروبا والولايات المتحدة.',
        growthHabit: 'شجرة أو شجيرة تصل إلى 6 أمتار؛ أزهار بيضاء عطرية في خريطات (umbels)؛ ثمار أرجوانية سوداء صغيرة.',
        activeCompounds: 'سيانيدين 3-سامبيوبيوسيد، سيانيدين 3-غلوكوسيد، SNA-II ليكتين، كيرسيتين، روتين.',
        cultivationNotes: 'مستخدم في الطب الشعبي الأوروبي لآلاف السنين. العالم بيندت سامبوسيوس درس مستخلصاته في إسرائيل الثمانينيات وأثبت فاعليتها ضد الإنفلونزا. منتجاته الجاهزة (Sambucol®) من أكثر المكملات الشتوية مبيعاً عالمياً.',
      },
      preparation: [
        { method: 'شراب الإلدربيري', desc: 'تناول 15 مل شراب موحّد أربع مرات يومياً عند الإصابة بالزكام أو الإنفلونزا، ابدأ فور ظهور الأعراض.', bestFor: 'علاج الإنفلونزا والزكام الشديد وتقصير مدته' },
        { method: 'شاي الإلدربيري المجفف', desc: 'انقع ملعقة كبيرة توت مجفف في 300 مل ماء مغلي 15 دقيقة. صفّ واشرب مرتين يومياً.', bestFor: 'الدعم المناعي الوقائي في موسم البرد والإنفلونزا' },
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
        { name: 'كيرسيتين وغليكوسيداته (جوافيرين)', percentage: '', effect: 'الفلافونويدات الرئيسية؛ تثبيط COX-2 و 5-LOX يُقلّل الالتهاب التنفسي وألم الحلق؛ نشاط مضاد فيروسي مباشر.' },
        { name: 'إيلاجيتانينات (بيدونكولاجين، كاسوارينين) وتانينات مكثّفة', percentage: '', effect: 'مركّبات قابضة تُنظّم إفراز المخاط وتمتلك نشاطاً مضاداً قوياً للميكروبات التنفسية.' },
        { name: 'زيوت طيارة (بيتا-كاريوفيلين، ليمونين، ألفا-بينين)', percentage: '', effect: 'بيتا-كاريوفيلين مضاد للالتهاب عبر مستقبلات CB2؛ الموانوتيربينات بنشاط مضاد للميكروبات ومُهدّئ للشعب الهوائية.' },
        { name: 'فيتامين C وفيتامين A', percentage: '', effect: 'تركيزات عالية من مضادات الأكسدة تدعم المناعة وتُصلح الأغشية المخاطية وتُقلّل الضرر التأكسدي في الأنسجة التنفسية الملتهبة.' },
      ],
      moa: [
        { title: 'مُسكّن للسعال محيطي', detail: 'تُثبّط فلافونويدات الكيرسيتين والتانينات مستقبلات السعال الحسية (ألياف C وA-دلتا) في مجرى الهواء، مما يُقلّل تكرار السعال دون تثبيط مركزي للجهاز العصبي.' },
        { title: 'تثبيط COX و LOX (مضاد للالتهاب)', detail: 'يُثبّط الكيرسيتين كلاً من COX-2 (البروستاغلاندينات) و 5-LOX (الليكوترينات)، مُقدّماً تغطية مضادة للالتهاب أكثر شمولاً من أدوية تثبيط COX الانتقائية.' },
        { title: 'تنظيم المخاط بالقبض التانيني', detail: 'تعمل الإيلاجيتانينات (بيدونكولاجين، كاسوارينين) على خلايا الغشاء المخاطي بتأثير قابض يُعيد تنظيم الإفراز المفرط للمخاط دون إضعاف إزالته الهدبية.' },
        { title: 'مضاد للميكروبات', detail: 'التانينات والكيرسيتين تثبّط المكوّرات العنقودية الذهبية والعقدية الرئوية المسبّبَين الشائعَين لعدوى الجهاز التنفسي.' },
      ],
      uses: ['مسكّن للسعال غير منوّم من الطب الاستوائي الموثّق', 'تخفيف التهاب الحلق وعدوى الجهاز التنفسي العليا', 'غرغرة لقرحات الفم والتهاب اللثة', 'مساعد لمكافحة الإسهال (قبض التانينات)'],
      howToUse: [
        { method: 'منقوع أوراق الجوافة (مغلي)', instruction: 'البالغون: اغلِ 4-5 أوراق طازجة أو مجففة في 500 مل ماء 10-15 دقيقة. صفّ وبرّد قليلاً. اشرب 2-3 كوب يومياً للسعال أو تغرغر دافئاً لالتهاب الحلق. الأطفال (فوق سنتين): نصف التحضير البالغ، مرتين يومياً.' },
        { method: 'شراب موحّد', instruction: 'البالغون: 10 مل 3-4 مرات يومياً. الأطفال (فوق سنتين): 5 مل 2-3 مرات يومياً وفق إرشادات المُصنّع.' },
      ],
      suitableAgeGroups: [
        { group: 'البالغون', notes: 'منقوع الأوراق أو الشراب بالجرعات المعيارية جيد التحمّل.' },
        { group: 'الأطفال (فوق سنتين)', notes: 'منقوع مُخفَّف أو 5 مل شراب 2-3 مرات يومياً تحت إشراف. المنقوع أنسب لفوق 6 سنوات.' },
        { group: 'الرضّع (تحت سنتين)', notes: 'يُتجنّب مستخلصات أوراق الجوافة المُركَّزة.' },
        { group: 'الحوامل', notes: 'ثمار الجوافة الطازجة آمنة؛ يُتجنّب مستخلصات الأوراق العلاجية لنقص بيانات الأمان الكافية.' },
      ],
      dosage: {
        standard: 'البالغون: مغلي الأوراق 2-3 كوب يومياً أو شراب 10 مل 3-4 مرات يومياً. الأطفال (فوق سنتين): شراب 5 مل 2-3 مرات يومياً.',
        forms: [
          { form: 'مغلي الأوراق (البالغون)', dose: '4-5 أوراق في 500 مل ماء، مغلي 10-15 دقيقة؛ 2-3 كوب يومياً.' },
          { form: 'شراب موحّد (البالغون)', dose: '10 مل، 3-4 مرات يومياً.' },
          { form: 'شراب موحّد (الأطفال فوق سنتين)', dose: '5 مل، 2-3 مرات يومياً.' },
        ],
      },
      overdose: {
        symptoms: [
          'إمساك وغثيان من التأثير القابض للإيلاجيتانينات بالجرعات المفرطة.',
          'انخفاض سكر الدم في مرضى السكري المعالجين بأدوية مضادة لارتفاع السكر.',
        ],
        management: [
          'خفّض الجرعة أو أوقف الاستخدام. زِد السوائل والألياف الغذائية للإمساك.',
          'راقب سكر الدم في مرضى السكري؛ اضبط الأدوية المضادة للسكري إذا لزم.',
        ],
      },
      sideEffects: [
        'إمساك بجرعات عالية (محتوى الإيلاجيتانينات القابض)',
        'إزعاج معدي معوي خفيف أو غثيان بجرعات عالية',
        'انخفاض محتمل لسكر الدم في مرضى السكري',
      ],
      contraindications: [
        'مرضى السكري غير المُراقَبين: خطر انخفاض السكر الملحوظ',
        'الحمل: يُتجنّب مستخلصات الأوراق المُركَّزة',
      ],
      drugInteractions: [
        'الأدوية المضادة لارتفاع السكر (الأنسولين، ميتفورمين، سلفونيليوريا): تأثير إضافي في خفض الجلوكوز؛ راقب السكر عن كثب واضبط الجرعات حسب الحاجة.',
      ],
      storage: {
        forms: [
          { form: 'أوراق طازجة', instructions: 'في الثلاجة واستخدم خلال 3-5 أيام.' },
          { form: 'أوراق مجففة', instructions: 'وعاء محكم في مكان بارد وجاف ومُعتم؛ صالحة حتى 12 شهراً.' },
        ],
      },
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
};
