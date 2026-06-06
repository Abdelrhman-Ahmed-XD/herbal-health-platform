// src/data/plants.js: Herbal Health Platform plant database
// Real plant data sourced from clinical research documents (All data.docx).
// Demo plants are placeholders for subcategories not yet researched.

export const PLANTS = {

  // ══════════════════════════════════════════════════════════════════════
  // WOMEN'S HEALTH › SKIN CARE
  // ══════════════════════════════════════════════════════════════════════

  'aloe-vera': {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    nameAr: 'الصبار',
    latinName: 'Aloe vera (L.) Burm. f.',
    commonNames: ['Aloe vera', 'Medicinal aloe'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Skin Care', 'Moisturizing', 'Anti-inflammatory', 'Wound Healing'],
    image: '/images/Picture1.jpg',
    shortDescription: 'A succulent plant renowned for its soothing gel, widely used in wound healing, skin care, and as a topical anti-inflammatory agent.',
    description: 'Aloe vera contains about 75 potentially active compounds differentiated into two parts: Gel (mucilage) and Latex (exudate). It stimulates fibroblast activity for wound healing, inhibits the COX pathway to reduce inflammation, and provides broad-spectrum antimicrobial activity. Its acemannan mucopolysaccharides deliver deep hydration while vitamins and polyphenols protect against oxidative damage and UV radiation.',
    history: 'Known as the "plant of immortality" by ancient Egyptians, aloe vera has been used medicinally for over 6,000 years across Egypt, Greece, Rome, and the Arab world. Today it remains one of the most commercially important medicinal plants worldwide.',
    isDemo: false,
    activeConstituents: [
      { name: 'Vitamins A, C, E, B12, Folic Acid, Choline', percentage: '', effect: 'Potent antioxidants; support cellular protection and metabolic function' },
      { name: 'Bradykinase (and 7 other enzymes)', percentage: '', effect: 'Reduces excessive inflammation when applied topically; aids breakdown of sugars and fats' },
      { name: 'Minerals (Ca, Cr, Cu, Mg, Mn, Zn, K, Na, Se)', percentage: '', effect: 'Vital for proper cellular metabolism and enzyme function' },
      { name: 'Acemannan (Mucopolysaccharides / Glucomannans)', percentage: '', effect: 'Immunomodulatory, anti-inflammatory, and healing effects; enhances skin hydration' },
      { name: 'Anthraquinones: Aloin, Emodin (Latex only)', percentage: '', effect: 'Stimulant laxatives; antibacterial, antiviral, and analgesic properties' },
      { name: 'Plant Sterols: Cholesterol, Campesterol, β-sitosterol', percentage: '', effect: 'Anti-inflammatory, antiseptic, and localized pain-relieving actions' },
      { name: 'Auxins and Gibberellins', percentage: '', effect: 'Promote wound healing and exhibit anti-inflammatory activities' },
      { name: 'Salicylic Acid, Lignin, Saponins', percentage: '', effect: 'Anti-inflammatory, antibacterial; enhances skin penetration; cleansing and antiseptic properties' },
    ],
    moa: [
      { title: 'Wound Healing', detail: 'Stimulates fibroblast activity, increases collagen synthesis and promotes wound healing.' },
      { title: 'Anti-inflammatory Action', detail: 'Inhibits the cyclooxygenase (COX) pathway, reducing prostaglandin synthesis and decreasing inflammation.' },
      { title: 'Antioxidant & Photoprotection', detail: 'Antioxidant compounds (vitamins and polyphenols) protect skin cells from oxidative damage and UV radiation.' },
      { title: 'Skin Hydration', detail: 'Enhances skin hydration by retaining moisture through mucopolysaccharides (like acemannan).' },
      { title: 'Antimicrobial Activity', detail: 'Shows broad-spectrum antimicrobial activity against various pathogenic microorganisms.' },
      { title: 'Immunomodulation', detail: 'Modulates immune responses by stimulating macrophages and reducing histamine release from mast cells.' },
      { title: 'Laxative Effect (Latex only)', detail: 'Anthraquinones stimulate intestinal peristalsis and increase water content in the stool, producing a potent laxative effect.' },
    ],
    uses: [
      'Wound and burn healing (especially 1st and 2nd-degree burns)',
      'Anti-inflammatory action: soothing skin irritations',
      'Moisturizing and anti-aging',
      'Laxative effects: short-term management of occasional constipation (latex only)',
      'Cosmetic and skin protection applications',
      'Antiseptic and antimicrobial activity',
      'Supportive therapy in oral health (gingivitis and plaque reduction)',
      'Potential adjuvant anti-diabetic effect (blood glucose management)',
      'Immunomodulation support',
    ],
    howToUse: [
      { method: 'Facial Care', instruction: 'Cleanse the skin first, then apply a thin layer of pure aloe gel, massaging gently in an upward motion. Leave on as a lightweight moisturizer or rinse off with lukewarm water after 15 minutes.' },
      { method: 'Dry Skin', instruction: 'Mix a few drops of hydrating oil (jojoba or coconut) with aloe gel before application to boost moisturizing effect.' },
      { method: 'Oily / Acne-Prone Skin', instruction: 'Use pure, unadulterated aloe gel as a lightweight, water-based, non-comedogenic moisturizer.' },
      { method: 'Hair and Scalp Care', instruction: 'Apply fresh or commercial pure aloe gel directly to scalp and hair strands. Massage gently into the scalp, coat hair from roots to ends. Leave for 30–60 minutes to condition, then rinse thoroughly. Use 2–3 times per week as a conditioning treatment. Can be used as a leave-in scalp treatment in small amounts between washes.' },
    ],
    suitableAgeGroups: [
      { group: 'Infants (<1 year)', notes: 'Oral use strictly contraindicated. Topical use not recommended unless expressly approved by a pediatrician.' },
      { group: 'Children (1-5 years)', notes: 'External use only in small amounts; avoid oral use.' },
      { group: 'Children (6-12 years)', notes: 'Generally safe for topical use (burns, irritation, skincare). Oral latex use strictly avoided due to electrolyte risks.' },
      { group: 'Adolescents (12-18 years)', notes: 'Safe for topical use; limited and cautious oral use (decolorized whole-leaf juice) if clinically indicated.' },
      { group: 'Adults', notes: 'Safe for topical and proper oral use when guidelines are followed.' },
      { group: 'Pregnant & Breastfeeding Women', notes: 'Oral use strictly contraindicated (stimulates uterine contractions; anthraquinones pass into breast milk). Topical use generally considered safe.' },
    ],
    dosage: {
      standard: 'Topical: thin layer 2-3 times daily. Oral purified juice (aloin-free): 10-30 mL once or twice daily before meals.',
      forms: [
        { form: 'Topical Gel', dose: 'Apply thin layer 2-3 times daily to affected skin areas.' },
        { form: 'Oral Juice (decolorized, aloin-free)', dose: '10-30 mL once or twice daily, before meals.' },
        { form: 'Laxative / Latex (not for routine use)', dose: 'Approx. 50-200 mg standardized extract. Start with low dose; avoid long-term oral use.' },
      ],
    },
    overdose: {
      symptoms: [
        'Oral (Latex): Severe abdominal cramps, profuse watery diarrhea, hematuria ("red urine"), profound hypokalemia (low potassium), rare acute hepatotoxicity with chronic unpurified ingestion.',
        'Topical: Rare; skin redness, itching, burning sensation, contact dermatitis, localized dryness if applied excessively without emollient.',
      ],
      management: [
        'Oral: Immediate discontinuation, aggressive fluid replacement to manage dehydration, medical monitoring of serum electrolytes.',
        'Topical: Stop use immediately, wash the skin area thoroughly with mild soap and water, apply a gentle hypoallergenic emollient.',
      ],
    },
    sideEffects: [
      'Allergic reactions (hives, rash, localized edema)',
      'Transient stinging or burning sensations upon initial application',
      'Contact dermatitis',
      'Risk of worsening infections if applied over deeply infected or surgical wounds',
      'Potential localized photosensitivity (rare)',
    ],
    contraindications: [
      'Oral: Pregnancy and breastfeeding',
      'Oral: Gastrointestinal disorders (Crohn\'s disease, Ulcerative Colitis, Appendicitis, Intestinal obstruction)',
      'Oral: Renal insufficiency',
      'Oral: Hemorrhoids',
      "Topical: Known hypersensitivity to plants in the Asphodelaceae family (historically referred to as Liliaceae in older literature), such as onions, garlic, and tulips."
    ],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Commercial products', instructions: 'Store in a cool, dry place away from direct sunlight.' },
        { form: 'Freshly extracted natural gel', instructions: 'Keep in an airtight container, refrigerate immediately, and use within 1-2 weeks.' },
      ],
    },
    marketedProducts: [
      { name: 'Lily of the Desert: Aloe Vera Juice', image: '/images/Picture2.jpg' },
      { name: 'NIVEA Aloe Hydration Cream 200ml', image: '/images/Picture3.jpg' },
      { name: 'Himalaya Aloe Vera Face Gel 100ml', image: '/images/Picture4.jpg' },
      { name: 'Aloe Eva Hair Oil 170 mL (Aloe-enriched hair oil)', image: '/images/Aloe Eva Hair Oil.webp' },
      { name: 'Aloe Eva Hair Mask 250 g', image: '/images/Aloe Eva Hair Mask.webp' },
    ],
    benefits: [
      { icon: 'healing', title: 'Wound & Burn Healing', desc: 'Stimulates fibroblast activity and collagen synthesis to accelerate repair of wounds and 1st-2nd degree burns.' },
      { icon: 'water_drop', title: 'Deep Skin Hydration', desc: 'Acemannan mucopolysaccharides retain moisture for lasting hydration without clogging pores.' },
      { icon: 'spa', title: 'Anti-inflammatory', desc: 'Inhibits the COX pathway and reduces prostaglandin synthesis to calm skin irritation and redness.' },
      { icon: 'science', title: 'Antimicrobial', desc: 'Broad-spectrum activity against pathogenic microorganisms for skin and wound protection.' },
    ],
    botanicalFacts: {
      family: 'Asphodelaceae',
      nativeRegion: 'Arabian Peninsula; naturalized worldwide in tropical and subtropical regions',
      growthHabit: 'Succulent perennial with thick fleshy leaves arranged in rosettes, growing 60-100 cm tall',
      activeCompounds: 'Acemannan, vitamins A/C/E, anthraquinones (aloin, emodin), plant sterols, bradykinase',
      cultivationNotes: 'Thrives in arid and semi-arid tropical climates; drought-tolerant; widely cultivated globally for pharmaceutical and cosmetic industries',
    },
    preparation: [
      { method: 'Fresh Gel (Topical)', desc: 'Extract inner leaf gel directly for immediate topical application.', bestFor: 'Wound healing, burns, acute skin soothing' },
      { method: 'Decolorized Oral Juice', desc: 'Commercially prepared juice with aloin/latex removed, taken orally at 10-30 mL.', bestFor: 'Short-term management of occasional constipation' },
      { method: 'Topical Skincare Formulation', desc: 'Standardized commercial gels or creams containing aloe vera extract.', bestFor: 'Daily moisturizing, acne care, and UV protection' },
    ],
    symptoms: ['Skin irritation', 'Burns', 'Dry skin', 'Acne', 'Wound healing'],
    relatedPlants: ['tea-tree', 'green-tea', 'witch-hazel'],
    references: [
      { text: 'Surjushe, A., Vasani, R., & Saple, D. G. (2008). Aloe vera: A short review. Indian Journal of Dermatology, 53(4), 163–166.', url: 'https://journals.lww.com/ijd/fulltext/2008/53040/aloe_vera__a_short_review.1.aspx' },
      { text: 'Eshun, K., & He, Q. (2004). Aloe vera: A valuable ingredient for the food, pharmaceutical and cosmetic industries. Critical Reviews in Food Science and Nutrition, 44(2), 91–96.', url: 'http://dx.doi.org/10.1016/j.jep.2004.09.006' },
      { text: 'Vardy, D. A., et al. (1999). A double-blind placebo-controlled trial of an Aloe vera extract in the treatment of seborrheic dermatitis. Journal of Dermatological Treatment, 10(1), 7–11.' },
    ],
  },

  'tea-tree': {
    id: 'tea-tree',
    name: 'Tea Tree',
    nameAr: 'شجرة الشاي',
    latinName: 'Melaleuca alternifolia (Maiden & Betche) Cheel',
    commonNames: ['Tea tree', 'Melaleuca oil'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Antimicrobial', 'Acne', 'Antifungal', 'Essential Oil'],
    image: '/images/Picture5.jpg',
    shortDescription: 'A powerful essential oil standardized for its antimicrobial and anti-inflammatory properties, clinically proven effective for acne, fungal infections, and seborrheic dermatitis.',
    description: 'Tea tree oil (TTO) contains over 100 volatile terpene hydrocarbons and is internationally standardized (ISO 4730). Its primary active constituent terpinen-4-ol disrupts microbial cell membranes, making it highly effective against bacteria, fungi, and acne-causing Cutibacterium acnes. It downregulates key pro-inflammatory mediators including TNF-α, IL-1β, and PGE2.',
    history: 'Aboriginal Australians used the leaves of Melaleuca alternifolia for centuries to treat skin infections, wounds, and respiratory conditions. The oil was first distilled in the early 20th century and became widely used during World War II as a first-aid antiseptic before antibiotics became available.',
    isDemo: false,
    activeConstituents: [
      { name: 'Terpinen-4-ol', percentage: '35-48%', effect: 'Primary active constituent; potent antibacterial, antifungal, and anti-inflammatory properties' },
      { name: '1,8-Cineole (Eucalyptol)', percentage: '<15%', effect: 'Anti-inflammatory and mucolytic properties; higher concentrations can induce cutaneous irritation' },
      { name: 'γ-Terpinene and α-Terpinene', percentage: '10-28%', effect: 'Significant antioxidant and synergistic antimicrobial support' },
      { name: 'p-Cymene and Limonene', percentage: 'minor', effect: 'Aid in topical skin penetration' },
    ],
    moa: [
      { title: 'Antimicrobial Action (Antibacterial & Antifungal)', detail: 'Terpinen-4-ol is highly lipophilic; penetrates microbial cell walls disrupting the lipid bilayer, causing leakage of essential cellular contents and fatal inhibition of bacterial respiration via membrane-bound electron transport system disruption.' },
      { title: 'Anti-inflammatory Effect', detail: 'Chemically suppresses production of key inflammatory mediators. Downregulates superoxide synthesis by activated macrophages and inhibits TNF-α, IL-1β, and prostaglandin E2 (PGE2) expression.' },
      { title: 'Anti-Acne Activity', detail: 'Exerts direct bactericidal effect against Cutibacterium acnes (formerly Propionibacterium acnes) and reduces localized follicular inflammation.' },
    ],
    uses: [
      'Management of acne vulgaris (5% TTO gel comparable to 5% benzoyl peroxide with fewer side effects)',
      'Tinea pedis (athlete\'s foot): topical 25-50% solutions',
      'Onychomycosis (nail fungus): 100% TTO comparable to clotrimazole 1%',
      'Seborrheic dermatitis (dandruff): 5% TTO shampoo reduces Malassezia furfur',
      'Broad-spectrum antiseptic for minor cutaneous lacerations, abrasions, and insect bites',
      'Alternative natural deodorant: inhibits coryneform bacteria in axillary regions',
      'Research-stage activity against MRSA (Methicillin-Resistant Staphylococcus aureus)',
    ],
    howToUse: [
      { method: 'Facial / Acne Application', instruction: 'Dilute 1 drop of pure TTO in 1 teaspoon of non-comedogenic carrier oil (jojoba or mineral oil) to yield ~1% concentration. Apply as spot treatment.' },
      { method: 'Body Application', instruction: 'Blend 2-3 drops per teaspoon of carrier oil. Apply to affected areas.' },
      { method: 'Scalp Application', instruction: 'Blend 3-5 drops per tablespoon of carrier oil or add directly into a mild sulfate-free shampoo.' },
      { method: 'Antifungal Formulation', instruction: 'Use commercially prepared 10-50% topical solutions depending on tissue thickness (nails vs. skin surface).' },
    ],
    suitableAgeGroups: [
      { group: 'Pediatrics (<3 years)', notes: 'Strictly contraindicated: thin infant skin barrier increases risk of transdermal absorption and systemic neurotoxicity.' },
      { group: 'Adults', notes: 'Safe in concentrations up to 5%; 1-2% is often sufficient for facial use.' },
      { group: 'Pregnancy & Lactation', notes: 'Topical cosmetic use in low concentrations (<2%) generally considered safe. Avoid application near breast area during lactation.' },
      { group: 'Geriatrics & Chronic Skin Conditions', notes: 'Use with heightened caution in individuals with sensitive skin, atopic eczema, or severe psoriasis.' },
    ],
    dosage: {
      standard: 'Acne products: 2-5% topical. Antifungal formulations: 10-50% topical. CRITICAL: Oral ingestion strictly contraindicated: highly toxic if swallowed.',
      forms: [
        { form: 'Acne Topical Gel/Cream', dose: '2-5% concentration, applied twice daily.' },
        { form: 'Antifungal Topical Solution', dose: '10-50% concentration, applied 1-2 times daily to affected nails/skin.' },
        { form: 'Anti-dandruff Shampoo', dose: '5% TTO shampoo; leave on for 3-5 minutes before rinsing.' },
      ],
    },
    overdose: {
      symptoms: [
        'Systemic Oral Overdose: Severe CNS depression, ataxia (profound loss of motor coordination), lethargy, confusion, and in critical cases respiratory failure and coma.',
        'Topical Overdose: Severe chemical irritation, intense erythema, pruritus, desquamation (peeling), and allergic contact dermatitis from oxidized monoterpene byproducts.',
      ],
      management: [
        'Oral: Immediate emergency medical intervention. Do NOT induce emesis (risk of aspiration pneumonitis). Provide supportive therapy, maintain airway, IV fluids, and activated charcoal under medical supervision if within first hour of ingestion.',
        'Topical: Discontinue application immediately, wash the cutaneous area thoroughly with cool water and a mild non-soap cleanser, and apply a soothing fragrance-free emollient.',
      ],
    },
    sideEffects: [
      'Cutaneous dryness, scaling, local burning, and stinging sensations',
      'Potential for severe allergic contact dermatitis in sensitized individuals',
      'Inhalation of highly concentrated vapors can cause respiratory tract irritation, dry coughing, rhinorrhea, and temporary shortness of breath',
    ],
    contraindications: [
      'Oral ingestion: absolutely contraindicated across all demographics',
      'Known hypersensitivity or allergy to Melaleuca alternifolia or other Myrtaceae family members (e.g., Eucalyptus)',
      'Active acute atopic eczema or severely broken/denuded skin barriers',
    ],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Essential Oil', instructions: 'Store in tightly sealed dark amber glass bottles in a cool, dry environment protected from sunlight and heat. Exposure to air and light induces auto-oxidation of monoterpenes into highly allergenic peroxide compounds.' },
      ],
    },
    marketedProducts: [
      { name: "Nature's Bounty Tea Tree Oil 1fl oz", image: '/images/Picture6.jpg' },
      { name: 'Dr. Organic Tea Tree Cream', image: '/images/Picture7.jpg' },
      { name: 'Bubbizz Tea Tree Facial Foam with Green Tea', image: '/images/Picture26.jpg' },
    ],
    benefits: [
      { icon: 'bug_report', title: 'Acne Fighter', desc: 'Clinically proven bactericidal effect against Cutibacterium acnes, reducing inflammatory and non-inflammatory lesions.' },
      { icon: 'sanitizer', title: 'Broad Antifungal', desc: 'Effective against dermatophyte infections causing athlete\'s foot and nail fungus, comparable to topical clotrimazole.' },
      { icon: 'spa', title: 'Scalp Health', desc: 'Targets Malassezia furfur to reduce dandruff, scalp itching, and greasiness.' },
      { icon: 'shield', title: 'Natural Antiseptic', desc: 'Disinfects minor cuts, abrasions, and insect bites while suppressing local inflammation.' },
    ],
    botanicalFacts: {
      family: 'Myrtaceae',
      nativeRegion: 'New South Wales, Australia (narrow coastal strip)',
      growthHabit: 'Small tree or shrub growing 5-8 m tall with papery bark and needle-like leaves',
      activeCompounds: 'Terpinen-4-ol (35-48%), γ-terpinene (10-28%), 1,8-cineole',
      cultivationNotes: 'Grown commercially in Australia via steam distillation of leaves; standardized to ISO 4730 for pharmaceutical grade quality',
    },
    preparation: [
      { method: 'Diluted Essential Oil', desc: 'Dilute in carrier oil (1-5%) before any topical application. Never apply undiluted to skin.', bestFor: 'Acne, minor antiseptic, deodorant' },
      { method: 'Commercial 5% Gel', desc: 'Standardized commercial topical formulations for safe, consistent dosing.', bestFor: 'Acne vulgaris management' },
      { method: 'Medicated Shampoo', desc: '5% TTO added to mild shampoo for scalp use.', bestFor: 'Dandruff, seborrheic dermatitis' },
    ],
    symptoms: ['Acne', 'Fungal infection', 'Dandruff', 'Minor wounds', 'Skin infections'],
    relatedPlants: ['aloe-vera', 'green-tea', 'licorice'],
    references: [
      { text: 'Egyptian Drug Authority — Tea Tree monograph.', url: 'https://share.google/YdFqGC2Zq6Z1YMHFc' },
    ],
  },

  'licorice': {
    id: 'licorice',
    name: 'Licorice',
    nameAr: 'العرقسوس',
    latinName: 'Glycyrrhiza glabra L.',
    commonNames: ['Licorice', 'Sweet root'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Skin Brightening', 'Anti-inflammatory', 'Hyperpigmentation', 'Respiratory'],
    image: '/images/Licorice-main.jpg',
    images: ['/images/Licorice-main.jpg', '/images/cough_doc/image12.jpg'],
    imageFit: 'contain',
    shortDescription: 'Often called "Nature\'s Hydroquinone", licorice root brightens hyperpigmentation and soothes skin inflammation through its unique glabridin and glycyrrhizin compounds.',
    description: 'Licorice contains glycyrrhizin (a triterpenoid saponin with cortisone-like action), glabridin (the primary flavonoid responsible for skin lightening via tyrosinase inhibition), and licochalcone A (a potent antioxidant). These compounds work synergistically to reduce melanin production, disperse existing dark spots, and inhibit pro-inflammatory pathways, making it highly effective for hyperpigmentation, rosacea, and acne.',
    history: 'Licorice root has been used in traditional medicine for over 4,000 years. Ancient Egyptians included it in the tomb of Tutankhamun. It features prominently in Ayurvedic, Chinese, and Middle Eastern medicine for respiratory and digestive ailments. More recently, standardized extracts have become a cornerstone of cosmetic dermatology for skin brightening.',
    isDemo: false,
    activeConstituents: [
      { name: 'Glycyrrhizin (Glycyrrhizic Acid)', percentage: '', effect: 'Triterpenoid saponin; anti-inflammatory, anti-ulcer, antiviral; cortisone-like action via 11β-HSD inhibition' },
      { name: 'Glycyrrhetinic Acid (Enoxolone)', percentage: '', effect: 'Pharmacologically active aglycone metabolite of glycyrrhizin' },
      { name: 'Glabridin', percentage: '', effect: 'Main polyphenolic flavonoid; competitively inhibits tyrosinase to reduce melanin production: skin lightening' },
      { name: 'Licochalcone A', percentage: '', effect: 'Potent chalcone derivative; strong antioxidant and anti-inflammatory; neutralizes UV-induced free radicals' },
      { name: 'Liquiritin', percentage: '', effect: 'Flavonoid; induces melanin dispersal and removal, fading existing hyperpigmentation and dark spots' },
      { name: 'Isoliquiritigenin', percentage: '', effect: 'Flavonoid; contributes to antioxidant, anti-inflammatory, and antispasmodic properties' },
    ],
    moa: [
      { title: 'Tyrosinase Inhibition (Topical)', detail: 'Glabridin competitively inhibits tyrosinase, the key rate-limiting enzyme responsible for melanin production (pigmentation), directly reducing skin darkening.' },
      { title: 'Anti-Oxidative Stress (Topical)', detail: 'Licochalcone A neutralizes free radicals induced by UV exposure, protecting skin cells from oxidative damage.' },
      { title: 'Melanin Dispersal (Topical)', detail: 'Liquiritin induces dispersal and removal of melanin, helping to fade hyperpigmentation and dark spots already present on the skin.' },
      { title: 'Anti-inflammatory & Cortisone-like Effect (Systemic)', detail: 'Glycyrrhizin inhibits cortisol metabolism by blocking 11β-hydroxysteroid dehydrogenase (11β-HSD), prolonging active cortisol life and producing a potent anti-inflammatory glucocorticoid effect.' },
      { title: 'Mineralocorticoid Effect (Systemic Overdose Pathway)', detail: 'Inhibition of 11β-HSD leads to cortisol accumulation in kidneys, causing excessive mineralocorticoid receptor activation, resulting in sodium/water retention and potassium excretion.' },
      { title: 'Expectorant', detail: 'Stimulates tracheal and bronchial secretions to loosen mucus, making it easier to expel.' },
      { title: 'Demulcent', detail: 'Forms a protective soothing film over mucous membranes to relieve irritation in the GI tract (throat and stomach lining).' },
    ],
    uses: [
      'Brightens and evens skin tone: reduces dark patches, sun spots, and melasma',
      'Soothes inflammation and redness: calms irritated skin, rosacea, and acne',
      'Treats acne and controls sebum: antibacterial against Cutibacterium acnes',
      'Anti-aging protection: fights free radicals and supports collagen production',
      'Reduces skin sensitivity: strengthens skin barrier, relief for eczema and dermatitis',
      'Respiratory support: treatment of upper respiratory tract ailments, cough, bronchitis, sore throat',
      'Gastrointestinal support: management of gastric ulcers, gastritis, and acid reflux',
    ],
    howToUse: [
      { method: 'DIY Brightening Mask', instruction: 'Mix 1 teaspoon of licorice powder with rose water, milk, yogurt, or honey to form a paste. Apply to clean face, leave 15-20 minutes, rinse with lukewarm water.' },
      { method: 'Targeted Spot Treatment', instruction: 'Mix a pinch of licorice powder with aloe vera gel or honey and apply directly to acne marks or hyperpigmentation for 10-15 minutes before rinsing.' },
      { method: 'Commercial Topical Products', instruction: 'Incorporate serums, toners, or creams containing standardized licorice extract (glabridin) into daily skincare routines.' },
      { method: 'Oral Tea (Respiratory/Digestive)', instruction: 'Steep 1-2 teaspoons of dried chopped root in hot water to relieve coughs or improve digestion. For sore throats: mix 1 teaspoon of powder in warm water for gargling.' },
    ],
    suitableAgeGroups: [
      { group: 'Infants (<1 year)', notes: 'Oral use strictly contraindicated. Topical use not recommended unless prescribed by a pediatrician.' },
      { group: 'Children (1-5 years)', notes: 'External use only in small amounts; oral use strictly avoided.' },
      { group: 'Children (6-12 years)', notes: 'Safe for topical use in skincare. Oral use strictly limited to prevent pseudoaldosteronism (fluid retention and blood pressure shifts).' },
      { group: 'Adolescents (12-18 years)', notes: 'Safe for topical use (acne, hyperpigmentation). Cautious brief oral use is acceptable within standard limits.' },
      { group: 'Adults', notes: 'Safe for topical use and proper oral use when duration limits are followed.' },
      { group: 'Pregnancy', notes: 'Strictly contraindicated orally: high intake linked to increased risk of preterm labor and fetal neurodevelopmental issues. Low-concentration topical commercial use generally considered safe.' },
      { group: 'Chronic Disease Patients', notes: 'Oral use strictly contraindicated or limited for patients with hypertension, cardiovascular diseases, or renal insufficiency.' },
    ],
    dosage: {
      standard: 'Topical serum (1-2%): apply 2-3 drops 1-2 times daily. DIY masks: ½ tsp powder, 2-3 times per week. Oral root (respiratory): 5–15 g dried root/day (200–600 mg glycyrrhizin), maximum 4–6 weeks continuous use. Oral DGL (GI): up to 4.5 g daily for up to 4 months.',
      forms: [
        { form: 'Licorice Extract Serum (1–2%), Topical', dose: 'Apply 2–3 drops 1–2 times daily onto clean skin before moisturizer.' },
        { form: 'DIY Powder Mask, Topical', dose: 'Mix ½ tsp with yogurt/honey/rose water, apply 2–3 times per week for 10–15 minutes.' },
        { form: 'Dried Root, Oral Infusion (Respiratory/GI)', dose: '5–15 g dried root per day (delivers 200–600 mg glycyrrhizin). Maximum continuous use: 4–6 weeks. Infuse 1–2 tsp chopped root in hot water.' },
        { form: 'Deglycyrrhizinated Licorice (DGL), GI use', dose: 'Up to 4.5 g daily for up to 4 months. DGL removes glycyrrhizin; safe for patients with cardiovascular or renal concerns.' },
        { form: 'Standardized Cough Syrup (e.g., Ventoherb)', dose: 'As per product label. Typically 5–10 mL 2–3× daily for adults.' },
      ],
    },
    overdose: {
      symptoms: [
        'Oral Overdose (≥600 mg glycyrrhizin daily for several weeks): Pseudo-hyperaldosteronism: severe hypertension, profound hypokalemia (low potassium), muscle weakness, cramping, metabolic alkalosis, fluid retention (edema), cardiac arrhythmias, and severe headaches.',
        'Topical Overdose: Irritant contact dermatitis (redness, itching, burning), skin barrier disruption (dryness, peeling).',
      ],
      management: [
        'Oral: Immediate cessation of licorice intake, potassium supplementation, close electrolyte monitoring, and administration of potassium-sparing diuretics (e.g., Spironolactone) if clinically required.',
        'Topical: Discontinue the product, wash with cool water, apply fragrance-free barrier cream (or aloe vera), and avoid other active ingredients (retinol or acids) until skin barrier heals.',
      ],
    },
    sideEffects: [
      'Topical: Rare mild skin irritation or allergic contact dermatitis in highly sensitive individuals',
      'Oral (glycyrrhizin): Headaches, chronic fatigue, elevated blood pressure (hypertension), severe fluid retention (edema)',
    ],
    contraindications: [
      'Known allergy to members of the Fabaceae (pea) family',
      'Topical applications on severely broken, open, or deeply infected skin',
      'Hypertension and cardiovascular diseases',
      'Renal (kidney) insufficiency',
      'Pre-existing hypokalemia',
    ],
    drugInteractions: [
      'Digoxin: hypokalemia caused by licorice drastically increases risk of Digoxin cardiac toxicity (serious arrhythmias, potentially fatal)',
      'Diuretics (e.g., Furosemide, Hydrochlorothiazide): co-administration potentiates hypokalemia; combined use significantly increases potassium depletion risk',
      'Corticosteroids (Prednisolone, Dexamethasone): glycyrrhizin slows corticosteroid metabolism via 11β-HSD inhibition, prolonging and amplifying corticosteroid effects and side effects',
      'Antihypertensives (ACE inhibitors, beta-blockers, ARBs): licorice antagonizes antihypertensive effect via sodium/water retention, causing reduced blood pressure control',
      'Licorice induces CYP3A4 enzymes, which accelerates warfarin metabolism. This reduces the anticoagulant efficacy (lowering INR) and increases the risk of blood clots. Strict INR monitoring is required.',
    ],
    storage: {
      forms: [
        { form: 'All forms', instructions: 'Store in a cool, dry place away from direct sunlight in airtight containers to preserve bioactive compounds and prevent moisture absorption.' },
      ],
    },
    marketedProducts: [

      { name: 'Strong Moon ', image: '/images/Strong moon.jpeg' },
      { name: 'Melano pharma licorice root', image: '/images/Melano pharma licorice root.jpeg' },
    ],
    benefits: [
      { icon: 'auto_fix_high', title: 'Skin Brightening', desc: 'Glabridin inhibits tyrosinase to reduce melanin production: effectively fading dark spots, melasma, and sun damage.' },
      { icon: 'spa', title: 'Soothes Inflammation', desc: 'Anti-inflammatory and cortisone-like action calms rosacea, acne redness, and eczema flares.' },
      { icon: 'shield', title: 'Antioxidant Protection', desc: 'Licochalcone A neutralizes UV-induced free radicals, protecting against photoaging.' },
      { icon: 'local_pharmacy', title: 'Respiratory & GI Support', desc: 'Expectorant and demulcent actions soothe coughs, bronchitis, and gastric ulcers when taken orally.' },
    ],
    botanicalFacts: {
      family: 'Fabaceae (Leguminosae)',
      nativeRegion: 'Southern Europe, Western Asia, and North Africa',
      growthHabit: 'Perennial herbaceous plant reaching 1-1.5 m with compound leaves and violet flowers; root is the medicinal part',
      activeCompounds: 'Glycyrrhizin, glabridin, licochalcone A, liquiritin, glycyrrhetinic acid',
      cultivationNotes: 'Root harvested after 3-5 years; standardized commercial extracts produced from the root by solvent extraction',
    },
    preparation: [
      { method: 'Topical Serum/Cream', desc: 'Standardized commercial products with glabridin (1-2%) for daily skincare.', bestFor: 'Hyperpigmentation, melasma, dark spots, rosacea' },
      { method: 'DIY Face Mask', desc: 'Mix licorice powder with honey, yogurt, or rose water for a 15-minute brightening mask.', bestFor: 'Skin brightening, acne marks' },
      { method: 'Oral Root Infusion', desc: 'Steep chopped dried root in hot water for respiratory or digestive use.', bestFor: 'Cough, sore throat, gastric ulcer support' },
    ],
    symptoms: ['Hyperpigmentation', 'Dark spots', 'Acne', 'Rosacea', 'Eczema', 'Cough', 'Sore throat'],
    relatedPlants: ['aloe-vera', 'green-tea', 'tea-tree'],
    references: [
      { text: 'Healthline — Licorice Root: Benefits, Dosage, Side Effects, and More.', url: 'https://www.healthline.com/nutrition/licorice-root#dosage-and-forms' },
      { text: 'WebMD — Licorice Uses, Side Effects, Interactions.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-881/licorice#uses' },
      { text: 'Fiore, C., Eisenhut, M., Krausse, R., et al. (2008). Antiviral effects of Glycyrrhiza species. Phytotherapy Research, 22(2), 141–148.' },
      { text: 'Asl, M. N., & Hosseinzadeh, H. (2008). Review of pharmacological effects of Glycyrrhiza sp. and its bioactive compounds.' },
    ],
  },

  'green-tea': {
    id: 'green-tea',
    name: 'Green Tea',
    nameAr: 'الشاي الأخضر',
    latinName: 'Camellia sinensis (L.) Kuntze',
    commonNames: ['Green tea'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Antioxidant', 'Anti-aging', 'Skin Care', 'Acne', 'Topical'],
    image: '/images/Picture25.jpg',
    shortDescription: 'Rich in EGCG catechins and L-theanine, green tea offers powerful antioxidant, anti-inflammatory, and skin-protective benefits both topically and orally.',
    description: 'The primary bioactive components of Camellia sinensis are polyphenols: specifically catechins (flavan-3-ols), with EGCG (epigallocatechin-3-gallate) being the most pharmacologically active. EGCG inhibits NF-κB, acts as a 5α-reductase inhibitor to reduce sebum, and suppresses UV-induced collagen degradation. A specific green tea extract (Sinecatechins) is FDA-approved as Veregen® ointment for HPV-associated warts.',
    history: 'Green tea has been cultivated in China for over 4,000 years and has played a central role in East Asian medicine and culture. The health benefits were documented in ancient Chinese texts, and modern research has validated many traditional uses, particularly its antioxidant and anti-inflammatory properties.',
    isDemo: false,
    activeConstituents: [
      { name: 'EGCG (Epigallocatechin-3-gallate)', percentage: '', effect: 'Most abundant and pharmacologically active catechin; antioxidant, anti-inflammatory, 5α-reductase inhibitor, anticancer research' },
      { name: 'Other Catechins: EC, EGC, ECG', percentage: '', effect: 'Potent free radical scavengers; antimicrobial and antiviral properties' },
      { name: 'Caffeine (Methylxanthine Alkaloid)', percentage: '', effect: 'CNS stimulation; synergistic with EGCG for thermogenesis and sebum reduction; vasoconstriction for under-eye care' },
      { name: 'L-theanine', percentage: '', effect: 'Unique amino acid crossing blood-brain barrier; promotes relaxation without drowsiness by modulating GABA and glutamate' },
      { name: 'Condensed Tannins', percentage: '', effect: 'Natural astringents; temporarily shrink pores and reduce oiliness by complexing with sebum proteins' },
      { name: 'Vitamins E and B2', percentage: '', effect: 'Aid in maintaining skin barrier hydration and cellular turnover' },
    ],
    moa: [
      { title: 'Antioxidant Activity', detail: 'Catechins (especially EGCG) function as potent free radical scavengers, chelating transition metals and upregulating endogenous antioxidant enzymes (superoxide dismutase and catalase).' },
      { title: 'Anti-inflammatory Effect', detail: 'Suppresses inflammatory pathways by inhibiting Nuclear Factor-kappa B (NF-κB), reducing iNOS, COX-2, TNF-α, and IL-1β production.' },
      { title: 'Antimicrobial Activity', detail: 'Catechins disrupt bacterial cell membranes by binding to lipid bilayers and inhibit viral replication (Influenza and HPV) by interfering with viral adsorption.' },
      { title: 'Metabolic & Thermogenic Regulation', detail: 'Caffeine and EGCG synergistically inhibit catechol-O-methyltransferase (COMT), prolonging norepinephrine action, expanding energy expenditure and enhancing fatty acid oxidation.' },
      { title: 'Topical Sebum Control', detail: 'EGCG acts as a natural 5α-reductase inhibitor, preventing conversion of testosterone into DHT, directly reducing sebum production in sebaceous glands.' },
    ],
    uses: [
      'FDA-approved Sinecatechins (Veregen® 15% ointment) for external genital and perianal HPV warts',
      'Management of acne vulgaris: reduces inflammatory and non-inflammatory lesions, controls sebum',
      'Dermatological anti-aging and photoprotection: minimizes UV-induced erythema and prevents collagen degradation',
      'Under-eye care: caffeine constricts blood vessels, reducing periorbital puffiness and dark circles',
      'Cardiovascular health support: lowers systemic blood pressure and reduces LDL-cholesterol oxidation',
      'Adjuvant weight management: boosts metabolic rate and reduces abdominal obesity',
      'Cognitive function enhancement: synergistic caffeine and L-theanine improve sustained attention and working memory',
      'Supportive oral and blood sugar health: reduces periodontal bacterial load and modestly improves insulin sensitivity',
    ],
    howToUse: [
      { method: 'Facial Toner (Topical)', instruction: 'Cooled fresh green tea infusion applied directly via a cotton pad as a soothing antioxidant toner.' },
      { method: 'Eye Compress', instruction: 'Cooled used green tea bags compressed over closed eyelids for 10-15 minutes to reduce puffiness and dark circles.' },
      { method: 'Oral Infusion (Tea)', instruction: 'Steep 2-3 g of dried leaves in hot water at 80-85°C (avoid boiling to prevent tannin bitterness and catechin degradation) for 3-5 minutes.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Oral intake strictly limited to maximum 1-2 cups daily. High doses of caffeine cross the placenta; EGCG may interfere with folic acid absorption. Topical cosmetic use poses negligible systemic risk.' },
      { group: 'Pediatrics', notes: 'High oral doses of caffeine-containing supplements not recommended; moderation with standard dietary intake is essential.' },
      { group: 'Geriatrics', notes: 'Generally safe; clinical vigilance regarding potential interactions with cardiovascular therapies or anticoagulants.' },
      { group: 'Chronic Diseases', notes: 'Use with extreme caution in patients with hepatic impairment, severe renal failure, or clinical anxiety disorders: avoid concentrated oral extracts.' },
    ],
    dosage: {
      standard: 'Topical: 2-3% standardized green tea extract applied twice daily. Oral: 2-3 cups brewed tea daily (~250-750 mg total catechins). NOTE: Never ingest concentrated green tea extract on an empty stomach.',
      forms: [
        { form: 'Topical Gel/Cream', dose: '2-3% standardized green tea extract, applied twice daily for dermatological use.' },
        { form: 'Brewed Oral Tea', dose: '2-3 g leaves per 200 mL at 80-85°C; 2-3 cups daily.' },
        { form: 'Extract Supplements', dose: 'Must never be taken on an empty stomach due to heightened risk of hepatotoxicity.' },
      ],
    },
    overdose: {
      symptoms: [
        'Oral Extract Overdose (Idiosyncratic Hepatotoxicity): Nausea, persistent vomiting, severe epigastric pain, dizziness, severe tremors, tachycardia (acute caffeine toxicity), and marked elevation of serum transaminases (ALT/AST).',
        'Topical Overdose: Erythema, localized pruritus, burning sensations, peeling, or allergic contact dermatitis.',
      ],
      management: [
        'Oral: Immediate cessation of supplement, aggressive fluid resuscitation, symptomatic treatment of cardiovascular anomalies, and mandatory monitoring of Liver Function Tests (LFTs).',
        'Topical: Halt application immediately, irrigate with cool water, and apply a basic hypoallergenic fragrance-free emollient.',
      ],
    },
    sideEffects: [
      'Nausea, stomach upset, headaches, anxiety, increased heart rate',
      'Iron deficiency (tannins chelate non-heme iron)',
      'Potential liver strain with high-dose concentrated extracts',
      'Contact dermatitis (topical, rare)',
    ],
    contraindications: [
      'Known hypersensitivity to Camellia sinensis or its constituents',
      'Severe hepatic impairment or active liver disease',
      'Severe bleeding disorders',
    ],
    drugInteractions: [
      'Warfarin: high-dose EGCG extracts may alter Warfarin metabolism via CYP450 pathways, complicating INR parameters',
      'Nadolol (and certain beta-blockers): green tea inhibits intestinal drug transporter OATP1A2, significantly reducing Nadolol bioavailability',
      'CNS Stimulants: concomitant use exponentially exacerbates tachyarrhythmias and anxiety',
    ],
    storage: {
      forms: [
        { form: 'All forms', instructions: 'Store in airtight, opaque containers in a cool, dry environment away from direct sunlight and moisture to prevent rapid auto-oxidation of active polyphenols.' },
      ],
    },
    marketedProducts: [
      { name: 'Green Tea Oleum Essential Oil', image: '/images/Picture27.jpg' },
      { name: 'Lipton Green Tea Pure 25 bags', image: '/images/Picture28.jpg' },
    ],
    benefits: [
      { icon: 'shield', title: 'Antioxidant Defense', desc: 'EGCG catechins scavenge free radicals and protect skin from UV-induced oxidative stress and premature aging.' },
      { icon: 'face', title: 'Acne & Sebum Control', desc: '5α-reductase inhibition reduces sebum production; bactericidal against Cutibacterium acnes.' },
      { icon: 'auto_fix_high', title: 'Anti-aging', desc: 'Inhibits matrix metalloproteinases (MMPs) to prevent collagen degradation and reduce fine lines.' },
      { icon: 'visibility', title: 'Under-Eye Care', desc: 'Caffeine constricts blood vessels to transiently reduce periorbital puffiness and dark circles.' },
    ],
    botanicalFacts: {
      family: 'Theaceae',
      nativeRegion: 'China and Southeast Asia; widely cultivated in East Asia, India, and East Africa',
      growthHabit: 'Evergreen shrub or small tree, 2-3 m tall when cultivated; young shoots and leaves are harvested',
      activeCompounds: 'EGCG, epicatechin (EC), epigallocatechin (EGC), caffeine, L-theanine, condensed tannins',
      cultivationNotes: 'Green tea is produced from unoxidized Camellia sinensis leaves: minimal processing preserves high catechin content vs. black or oolong teas',
    },
    preparation: [
      { method: 'Topical Toner', desc: 'Brewed, cooled green tea applied with cotton pad to skin.', bestFor: 'Daily antioxidant protection, oily/acne-prone skin' },
      { method: 'Eye Compress', desc: 'Cooled used tea bags placed over closed eyelids for 10-15 minutes.', bestFor: 'Reducing puffiness and dark circles' },
      { method: 'Oral Tea', desc: 'Brewed at 80-85°C for 3-5 minutes; 2-3 cups daily.', bestFor: 'Cardiovascular support, cognitive function, weight management' },
    ],
    symptoms: ['Acne', 'Oily skin', 'Dark circles', 'Puffiness', 'UV damage', 'Aging skin'],
    relatedPlants: ['aloe-vera', 'tea-tree', 'rosemary'],
    references: [
      { text: 'National Center for Biotechnology Information — Green Tea.', url: 'https://pubchem.ncbi.nlm.nih.gov' },
      { text: 'Drugs.com — Green Tea.', url: 'https://www.drugs.com/npp/green-tea.html' },
    ],
  },

  'rosemary': {
    id: 'rosemary',
    name: 'Rosemary',
    nameAr: 'إكليل الجبل',
    latinName: 'Salvia rosmarinus Spenn. (syn. Rosmarinus officinalis L.)',
    commonNames: ['Rosemary'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Hair Growth', 'Anti-alopecia', 'Antioxidant', 'Cognitive', 'Anti-inflammatory'],
    image: '/images/Picture11.jpg',
    shortDescription: 'Clinically proven as effective as Minoxidil 2% for androgenetic alopecia, rosemary also enhances cognitive function, protects against oxidative stress, and provides broad antimicrobial activity.',
    description: 'Rosemary contains carnosic acid and carnosol (lipid-soluble antioxidants), rosmarinic acid (a potent water-soluble anti-inflammatory), and a rich volatile oil fraction including 1,8-cineole (eucalyptol) and camphor. Topically, carnosic acid acts as a mild 5α-reductase inhibitor disrupting DHT conversion responsible for androgenetic alopecia. Its 1,8-cineole inhalation acts as an acetylcholinesterase (AChE) inhibitor improving cholinergic neurotransmission and enhancing memory and focus.',
    history: 'Rosemary has been revered since antiquity: ancient Greeks wore garlands to improve memory during exams. In medieval Europe it was used as a hair tonic and cognitive stimulant. A landmark modern clinical trial demonstrated it was as effective as Minoxidil 2% for hair regrowth with fewer side effects.',
    isDemo: false,
    activeConstituents: [
      { name: 'Carnosic Acid and Carnosol (Phenolic Diterpenes)', percentage: '', effect: 'Primary lipid-soluble antioxidants; cellular protection and formulation stabilization; mild 5α-reductase inhibition for anti-alopecia action' },
      { name: 'Rosmarinic Acid', percentage: '', effect: 'Potent water-soluble antioxidant and anti-inflammatory agent' },
      { name: 'Caffeic Acid (Phenolic Acid)', percentage: '', effect: 'Secondary antioxidant and anti-inflammatory support' },
      { name: 'Genkwanin, Luteolin, Apigenin (Flavonoids)', percentage: '', effect: 'Antispasmodic and vascular activities' },
      { name: '1,8-Cineole (Eucalyptol): Volatile Oil', percentage: '', effect: 'Promotes microcirculation; acts as natural acetylcholinesterase (AChE) inhibitor improving cognitive function' },
      { name: 'Camphor: Volatile Oil', percentage: '', effect: 'Local counter-irritant, analgesic, and antimicrobial actions' },
      { name: 'Alpha-Pinene & Camphene: Volatile Oil', percentage: '', effect: 'Antiseptic and aromatic properties' },
    ],
    moa: [
      { title: 'Stimulation of Hair Follicles (Anti-Alopecia)', detail: 'Carnosic acid stimulates local microcirculation and tissue perfusion. Acts as mild 5α-reductase inhibitor, disrupting conversion of testosterone into dihydrotestosterone (DHT): the primary hormone responsible for androgenetic alopecia.' },
      { title: 'Cognitive & Neuroprotective Effects', detail: 'Inhalation or absorption of 1,8-cineole acts as a natural acetylcholinesterase (AChE) inhibitor. By preventing acetylcholine breakdown, it improves cholinergic neurotransmission, enhancing focus, memory, and concentration.' },
      { title: 'Antioxidant Activity', detail: 'Carnosic acid and rosmarinic acid function as potent free radical scavengers, chain-breaking antioxidants, and inhibitors of lipid peroxidation.' },
      { title: 'Anti-inflammatory Action', detail: 'Suppresses inflammatory cascades by downregulating COX-2 and iNOS expression, and inhibiting production of leukotrienes and pro-inflammatory cytokines.' },
      { title: 'Antimicrobial Activity', detail: 'Destroys bacterial and fungal cell walls, showing broad-spectrum activity against Malassezia species (causative yeast for dandruff).' },
    ],
    uses: [
      'Androgenetic alopecia and hair loss: stimulates hair regrowth and retards premature hair thinning',
      'Dandruff and scalp care: controls sebum production and mitigates desquamation via antifungal activity',
      'Cognitive support: enhances short-term alertness, working memory, and focus',
      'Dermatological photoprotection: neutralizes UV-induced oxidative stress in cutaneous cells',
      'Musculoskeletal pain relief: topical rubefacient and local analgesic for mild myalgia and arthralgia',
      'Gastrointestinal comfort: carminative and antispasmodic to relieve dyspepsia and flatulence',
    ],
    howToUse: [
      { method: 'Scalp: Essential Oil', instruction: 'Dilute 5 drops of rosemary essential oil in a suitable carrier oil (jojoba, argan, or coconut oil). Massage thoroughly into the scalp 2-3 times weekly; leave for at least 2-4 hours or overnight before rinsing.' },
      { method: 'Scalp: Aqueous Infusion Spray', instruction: 'Prepare rosemary infusion (1–2 g dried leaves in 200 mL boiling water, covered 15 min, then cooled and strained). Pour into a spray bottle and apply 5–10 sprays directly onto the scalp 1–2 times daily as a leave-in treatment. Refrigerate; discard after 7 days.' },
      { method: 'Skincare: Topical Mask', instruction: 'Mix 2-3 drops of rosemary essential oil per teaspoon of carrier oil or aloe vera gel. Apply for 10-15 minutes as an antioxidant face treatment, then rinse thoroughly.' },
      { method: 'Oral: Herbal Infusion', instruction: 'Steep 1-2 g (1-2 teaspoons) of dried leaves in 150-200 mL of hot water (85-90°C) in a covered vessel for 10-15 minutes. Strain and consume 1-3 times daily. Maximum daily: 4-6 g dry herb.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Oral intake in medicinal/concentrated amounts and use of pure essential oil STRICTLY CONTRAINDICATED. Rosemary acts as an emmenagogue and uterine stimulant: can induce pelvic congestion and pose risk of preterm labor or miscarriage. Low-concentration cosmetic topical use away from mammary glands considered low-risk during lactation.' },
      { group: 'Pediatrics (<6 years)', notes: 'Pure rosemary essential oil strictly contraindicated near face/nostrils: camphor and 1,8-cineole content can trigger reflex glottis spasms, respiratory depression, or seizures.' },
      { group: 'Geriatrics', notes: 'Generally safe, but clinical monitoring required for potential interactions with cardiovascular or anticoagulant regimens.' },
    ],
    dosage: {
      standard: 'Topical (hair): 5 drops EO in carrier, 2-3x weekly. Oral infusion: 1-2 g dried leaves in 150-200 mL hot water, 1-3 times daily. Max daily dry herb: 4-6 g.',
      forms: [
        { form: 'Topical Essential Oil (diluted)', dose: '5 drops in carrier oil applied to scalp 2-3 times weekly.' },
        { form: 'Oral Herbal Infusion', dose: '1-2 g dried leaves per 150-200 mL at 85-90°C; 1-3 cups daily (max 4-6 g dry herb/day).' },
      ],
    },
    overdose: {
      symptoms: [
        'Oral Essential Oil Overdose: Severe nausea, vomiting, severe abdominal pain, uterine bleeding, acute nephritis (kidney irritation), and systemic neurotoxicity: tonic-clonic seizures (convulsions), confusion, or pulmonary edema.',
        'Topical Overdose (undiluted oil): Severe erythema, intense pruritus, burning sensations, or acute contact dermatitis.',
      ],
      management: [
        'Oral EO: Immediate medical emergency response. Stop ingestion, avoid inducing vomiting if consciousness compromised, initiate airway protection, administer activated charcoal under strict clinical supervision, manage seizures with Benzodiazepines.',
        'Topical: Stop use immediately, wash with cool water and mild soap, apply basic fragrance-free barrier cream.',
      ],
    },
    sideEffects: [
      'Oral (medicinal doses): Potential emmenagogue effects, gastrointestinal irritation',
      'Topical (undiluted EO): Erythema, pruritus, burning, contact dermatitis',
    ],
    contraindications: [
      'Known hypersensitivity to Salvia rosmarinus or other Lamiaceae family members',
      'Seizure disorders and epilepsy: camphor can lower seizure threshold',
      'Bleeding disorders / anticoagulant therapy: mild antiplatelet aggregation properties',
      'Severe renal or hepatic insufficiency',
      'Biliary tract obstruction and gallstones: may trigger biliary colic due to choleretic activity',
      'Iron deficiency anemia: high polyphenol/tannin content chelates non-heme iron',
    ],
    drugInteractions: [
      'Anticoagulants (Warfarin): mild antiplatelet properties; monitor INR',
      'Iron supplements: consume at least 2 hours apart due to tannin-induced chelation',
    ],
    storage: {
      forms: [
        { form: 'Dried Foliage', instructions: 'Store in airtight, opaque containers in a cool, dry, dark environment to preserve volatile oil fractions.' },
        { form: 'Essential Oil', instructions: 'Dispense in dark amber or cobalt glass bottles tightly sealed, kept away from direct heat and sunlight.' },
      ],
    },
    marketedProducts: [
      { name: 'Nefertari Essential Oil of Rosemary', image: '/images/Picture12.jpg' },
      { name: 'Rootage Hair Oil 100 mL (Rosemary-enriched)', image: '/images/Rootage Hair Oil.webp' },
      { name: 'Rosemary Hair Booster Oil 50 mL', image: '/images/Rosemary Hair Booster Oil.jpeg' },
    ],
    benefits: [
      { icon: 'grass', title: 'Hair Regrowth', desc: 'Clinically equivalent to Minoxidil 2% for androgenetic alopecia: stimulates follicles and inhibits DHT with fewer side effects.' },
      { icon: 'psychology', title: 'Cognitive Support', desc: '1,8-cineole inhibits acetylcholinesterase to enhance memory, focus, and alertness.' },
      { icon: 'shield', title: 'Antioxidant Protection', desc: 'Carnosic and rosmarinic acids are potent chain-breaking antioxidants protecting cells from oxidative damage.' },
      { icon: 'sanitizer', title: 'Scalp Antimicrobial', desc: 'Broad-spectrum activity against Malassezia species: effectively treats dandruff and seborrheic dermatitis.' },
    ],
    botanicalFacts: {
      family: 'Lamiaceae (Labiatae)',
      nativeRegion: 'Mediterranean region; widely cultivated worldwide',
      growthHabit: 'Aromatic evergreen shrub growing 0.5-2 m tall with needle-like leaves and blue flowers',
      activeCompounds: 'Carnosic acid, carnosol, rosmarinic acid, 1,8-cineole, camphor, alpha-pinene',
      cultivationNotes: 'Drought-tolerant; thrives in Mediterranean climate; essential oil produced by steam distillation of flowering tops and leaves',
    },
    preparation: [
      { method: 'Scalp Oil Massage', desc: 'Dilute rosemary EO in carrier oil (jojoba/coconut), apply to scalp with massage, leave overnight.', bestFor: 'Hair loss (androgenetic alopecia), dandruff' },
      { method: 'Leave-in Scalp Spray', desc: 'Cooled rosemary infusion sprayed onto scalp daily without rinsing.', bestFor: 'Scalp circulation, mild hair thinning' },
      { method: 'Oral Herbal Tea', desc: 'Steep 1-2 g dried leaves covered at 85-90°C for 10-15 minutes.', bestFor: 'Cognitive support, dyspepsia, antioxidant maintenance' },
    ],
    symptoms: ['Hair loss', 'Dandruff', 'Scalp issues', 'Memory', 'Muscle pain', 'Digestive discomfort'],
    relatedPlants: ['green-tea', 'aloe-vera', 'witch-hazel'],
    references: [
      { text: 'WebMD — Rosemary Uses, Side Effects, Interactions.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-154/rosemary' },
      { text: 'Panahi, Y., Taghizadeh, M., & Sahebkar, A. (2015). Rosemary oil vs minoxidil 2% for androgenetic alopecia: a randomized comparative trial. Skinmed, 13(1), 15–21.' },
      { text: 'Borges, R. S., et al. (2025). Rosmarinic acid and hair growth: mechanistic insights. Pharmaceutical Biology.' },
      { text: 'European Medicines Agency (EMA). (2010). European Union herbal monograph on Rosmarinus officinalis L., folium. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). (2009). WHO Monographs on Selected Medicinal Plants (Vol. 4): Folium Rosmarini. Geneva.' },
      { text: 'Moss, M., et al. (2003). Aromas of rosemary and lavender essential oils differentially affect cognition and mood in healthy adults. International Journal of Neuroscience, 113(1), 15–38.' },
      { text: 'Bicas, J. L., et al. (2011). Volatile constituents of Rosmarinus officinalis L. and their pharmacological actions. Food Chemistry, 126(3), 1120–1126.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // WOMEN'S HEALTH › SKIN CARE (isolated IDs)
  // ══════════════════════════════════════════════════════════════════════

  'aloe-vera-skincare': {
    id: 'aloe-vera-skincare',
    name: 'Aloe Vera',
    nameAr: 'الصبار',
    latinName: 'Aloe vera (L.) Burm. f.',
    commonNames: ['Aloe vera', 'Medicinal aloe'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Skin Care', 'Moisturizing', 'Anti-inflammatory', 'Wound Healing'],
    image: '/images/Picture1.jpg',
    shortDescription: 'A succulent plant renowned for its soothing gel, widely used in wound healing, skin care, and as a topical anti-inflammatory agent.',
    description: 'Aloe vera contains about 75 potentially active compounds differentiated into two parts: Gel (mucilage) and Latex (exudate). It stimulates fibroblast activity for wound healing, inhibits the COX pathway to reduce inflammation, and provides broad-spectrum antimicrobial activity. Its acemannan mucopolysaccharides deliver deep hydration while vitamins and polyphenols protect against oxidative damage and UV radiation.',
    history: 'Known as the "plant of immortality" by ancient Egyptians, aloe vera has been used medicinally for over 6,000 years across Egypt, Greece, Rome, and the Arab world. Today it remains one of the most commercially important medicinal plants worldwide.',
    isDemo: false,
    activeConstituents: [
      { name: 'Vitamins A, C, E, B12, Folic Acid, Choline', percentage: '', effect: 'Potent antioxidants; support cellular protection and metabolic function' },
      { name: 'Bradykinase (and 7 other enzymes)', percentage: '', effect: 'Reduces excessive inflammation when applied topically; aids breakdown of sugars and fats' },
      { name: 'Minerals (Ca, Cr, Cu, Mg, Mn, Zn, K, Na, Se)', percentage: '', effect: 'Vital for proper cellular metabolism and enzyme function' },
      { name: 'Acemannan (Mucopolysaccharides / Glucomannans)', percentage: '', effect: 'Immunomodulatory, anti-inflammatory, and healing effects; enhances skin hydration' },
      { name: 'Anthraquinones: Aloin, Emodin (Latex only)', percentage: '', effect: 'Stimulant laxatives; antibacterial, antiviral, and analgesic properties' },
      { name: 'Plant Sterols: Cholesterol, Campesterol, β-sitosterol', percentage: '', effect: 'Anti-inflammatory, antiseptic, and localized pain-relieving actions' },
      { name: 'Auxins and Gibberellins', percentage: '', effect: 'Promote wound healing and exhibit anti-inflammatory activities' },
      { name: 'Salicylic Acid, Lignin, Saponins', percentage: '', effect: 'Anti-inflammatory, antibacterial; enhances skin penetration; cleansing and antiseptic properties' },
    ],
    moa: [
      { title: 'Wound Healing', detail: 'Stimulates fibroblast activity, increases collagen synthesis and promotes wound healing.' },
      { title: 'Anti-inflammatory Action', detail: 'Inhibits the cyclooxygenase (COX) pathway, reducing prostaglandin synthesis and decreasing inflammation.' },
      { title: 'Antioxidant & Photoprotection', detail: 'Antioxidant compounds (vitamins and polyphenols) protect skin cells from oxidative damage and UV radiation.' },
      { title: 'Skin Hydration', detail: 'Enhances skin hydration by retaining moisture through mucopolysaccharides (like acemannan).' },
      { title: 'Antimicrobial Activity', detail: 'Shows broad-spectrum antimicrobial activity against various pathogenic microorganisms.' },
      { title: 'Immunomodulation', detail: 'Modulates immune responses by stimulating macrophages and reducing histamine release from mast cells.' },
      { title: 'Laxative Effect (Latex only)', detail: 'Anthraquinones stimulate intestinal peristalsis and increase water content in the stool, producing a potent laxative effect.' },
    ],
    uses: [
      'Wound and burn healing (especially 1st and 2nd-degree burns)',
      'Anti-inflammatory action: soothing skin irritations',
      'Moisturizing and anti-aging',
      'Laxative effects: short-term management of occasional constipation (latex only)',
      'Cosmetic and skin protection applications',
      'Antiseptic and antimicrobial activity',
      'Supportive therapy in oral health (gingivitis and plaque reduction)',
      'Potential adjuvant anti-diabetic effect (blood glucose management)',
      'Immunomodulation support',
    ],
    howToUse: [
      { method: 'Facial Care', instruction: 'Cleanse the skin first, then apply a thin layer of pure aloe gel, massaging gently in an upward motion. Leave on as a lightweight moisturizer or rinse off with lukewarm water after 15 minutes.' },
      { method: 'Dry Skin', instruction: 'Mix a few drops of hydrating oil (jojoba or coconut) with aloe gel before application to boost moisturizing effect.' },
      { method: 'Oily / Acne-Prone Skin', instruction: 'Use pure, unadulterated aloe gel as a lightweight, water-based, non-comedogenic moisturizer.' },
      { method: 'Hair and Scalp Care', instruction: 'Apply fresh or commercial pure aloe gel directly to scalp and hair strands. Massage gently into the scalp, coat hair from roots to ends. Leave for 30–60 minutes to condition, then rinse thoroughly. Use 2–3 times per week as a conditioning treatment. Can be used as a leave-in scalp treatment in small amounts between washes.' },
    ],
    suitableAgeGroups: [
      { group: 'Infants (<1 year)', notes: 'Oral use strictly contraindicated. Topical use not recommended unless expressly approved by a pediatrician.' },
      { group: 'Children (1-5 years)', notes: 'External use only in small amounts; avoid oral use.' },
      { group: 'Children (6-12 years)', notes: 'Generally safe for topical use (burns, irritation, skincare). Oral latex use strictly avoided due to electrolyte risks.' },
      { group: 'Adolescents (12-18 years)', notes: 'Safe for topical use; limited and cautious oral use (decolorized whole-leaf juice) if clinically indicated.' },
      { group: 'Adults', notes: 'Safe for topical and proper oral use when guidelines are followed.' },
      { group: 'Pregnant & Breastfeeding Women', notes: 'Oral use strictly contraindicated (stimulates uterine contractions; anthraquinones pass into breast milk). Topical use generally considered safe.' },
    ],
    dosage: {
      standard: 'Topical: thin layer 2-3 times daily. Oral purified juice (aloin-free): 10-30 mL once or twice daily before meals.',
      forms: [
        { form: 'Topical Gel', dose: 'Apply thin layer 2-3 times daily to affected skin areas.' },
        { form: 'Oral Juice (decolorized, aloin-free)', dose: '10-30 mL once or twice daily, before meals.' },
        { form: 'Laxative / Latex (not for routine use)', dose: 'Approx. 50-200 mg standardized extract. Start with low dose; avoid long-term oral use.' },
      ],
    },
    overdose: {
      symptoms: [
        'Oral (Latex): Severe abdominal cramps, profuse watery diarrhea, hematuria ("red urine"), profound hypokalemia (low potassium), rare acute hepatotoxicity with chronic unpurified ingestion.',
        'Topical: Rare; skin redness, itching, burning sensation, contact dermatitis, localized dryness if applied excessively without emollient.',
      ],
      management: [
        'Oral: Immediate discontinuation, aggressive fluid replacement to manage dehydration, medical monitoring of serum electrolytes.',
        'Topical: Stop use immediately, wash the skin area thoroughly with mild soap and water, apply a gentle hypoallergenic emollient.',
      ],
    },
    sideEffects: [
      'Allergic reactions (hives, rash, localized edema)',
      'Transient stinging or burning sensations upon initial application',
      'Contact dermatitis',
      'Risk of worsening infections if applied over deeply infected or surgical wounds',
      'Potential localized photosensitivity (rare)',
    ],
    contraindications: [
      'Oral: Pregnancy and breastfeeding',
      'Oral: Gastrointestinal disorders (Crohn\'s disease, Ulcerative Colitis, Appendicitis, Intestinal obstruction)',
      'Oral: Renal insufficiency',
      'Oral: Hemorrhoids',
      "Topical: Known hypersensitivity to plants in the Asphodelaceae family (historically referred to as Liliaceae in older literature), such as onions, garlic, and tulips."
    ],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Commercial products', instructions: 'Store in a cool, dry place away from direct sunlight.' },
        { form: 'Freshly extracted natural gel', instructions: 'Keep in an airtight container, refrigerate immediately, and use within 1-2 weeks.' },
      ],
    },
    marketedProducts: [
      { name: 'Lily of the Desert: Aloe Vera Juice', image: '/images/Picture2.jpg' },
      { name: 'NIVEA Aloe Hydration Cream 200ml', image: '/images/Picture3.jpg' },
      { name: 'Himalaya Aloe Vera Face Gel 100ml', image: '/images/Picture4.jpg' },
      { name: 'Aloe Eva Hair Oil 170 mL (Aloe-enriched hair oil)', image: '/images/Aloe Eva Hair Oil.webp' },
      { name: 'Aloe Eva Hair Mask 250 g', image: '/images/Aloe Eva Hair Mask.webp' },
    ],
    benefits: [
      { icon: 'healing', title: 'Wound & Burn Healing', desc: 'Stimulates fibroblast activity and collagen synthesis to accelerate repair of wounds and 1st-2nd degree burns.' },
      { icon: 'water_drop', title: 'Deep Skin Hydration', desc: 'Acemannan mucopolysaccharides retain moisture for lasting hydration without clogging pores.' },
      { icon: 'spa', title: 'Anti-inflammatory', desc: 'Inhibits the COX pathway and reduces prostaglandin synthesis to calm skin irritation and redness.' },
      { icon: 'science', title: 'Antimicrobial', desc: 'Broad-spectrum activity against pathogenic microorganisms for skin and wound protection.' },
    ],
    botanicalFacts: {
      family: 'Asphodelaceae',
      nativeRegion: 'Arabian Peninsula; naturalized worldwide in tropical and subtropical regions',
      growthHabit: 'Succulent perennial with thick fleshy leaves arranged in rosettes, growing 60-100 cm tall',
      activeCompounds: 'Acemannan, vitamins A/C/E, anthraquinones (aloin, emodin), plant sterols, bradykinase',
      cultivationNotes: 'Thrives in arid and semi-arid tropical climates; drought-tolerant; widely cultivated globally for pharmaceutical and cosmetic industries',
    },
    preparation: [
      { method: 'Fresh Gel (Topical)', desc: 'Extract inner leaf gel directly for immediate topical application.', bestFor: 'Wound healing, burns, acute skin soothing' },
      { method: 'Decolorized Oral Juice', desc: 'Commercially prepared juice with aloin/latex removed, taken orally at 10-30 mL.', bestFor: 'Short-term management of occasional constipation' },
      { method: 'Topical Skincare Formulation', desc: 'Standardized commercial gels or creams containing aloe vera extract.', bestFor: 'Daily moisturizing, acne care, and UV protection' },
    ],
    symptoms: ['Skin irritation', 'Burns', 'Dry skin', 'Acne', 'Wound healing'],
    relatedPlants: ['tea-tree-skincare', 'green-tea-skincare', 'witch-hazel'],
    references: [
      { text: 'Surjushe, A., Vasani, R., & Saple, D. G. (2008). Aloe vera: A short review. Indian Journal of Dermatology, 53(4), 163–166.', url: 'https://journals.lww.com/ijd/fulltext/2008/53040/aloe_vera__a_short_review.1.aspx' },
      { text: 'Eshun, K., & He, Q. (2004). Aloe vera: A valuable ingredient for the food, pharmaceutical and cosmetic industries. Critical Reviews in Food Science and Nutrition, 44(2), 91–96.', url: 'http://dx.doi.org/10.1016/j.jep.2004.09.006' },
      { text: 'Vardy, D. A., et al. (1999). A double-blind placebo-controlled trial of an Aloe vera extract in the treatment of seborrheic dermatitis. Journal of Dermatological Treatment, 10(1), 7–11.' },
    ],
  },

  'tea-tree-skincare': {
    id: 'tea-tree-skincare',
    name: 'Tea Tree',
    nameAr: 'شجرة الشاي',
    latinName: 'Melaleuca alternifolia (Maiden & Betche) Cheel',
    commonNames: ['Tea tree', 'Melaleuca oil'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Antimicrobial', 'Acne', 'Antifungal', 'Essential Oil'],
    image: '/images/Picture5.jpg',
    shortDescription: 'A powerful essential oil standardized for its antimicrobial and anti-inflammatory properties, clinically proven effective for acne, fungal infections, and seborrheic dermatitis.',
    description: 'Tea tree oil (TTO) contains over 100 volatile terpene hydrocarbons and is internationally standardized (ISO 4730). Its primary active constituent terpinen-4-ol disrupts microbial cell membranes, making it highly effective against bacteria, fungi, and acne-causing Cutibacterium acnes. It downregulates key pro-inflammatory mediators including TNF-α, IL-1β, and PGE2.',
    history: 'Aboriginal Australians used the leaves of Melaleuca alternifolia for centuries to treat skin infections, wounds, and respiratory conditions. The oil was first distilled in the early 20th century and became widely used during World War II as a first-aid antiseptic before antibiotics became available.',
    isDemo: false,
    activeConstituents: [
      { name: 'Terpinen-4-ol', percentage: '35-48%', effect: 'Primary active constituent; potent antibacterial, antifungal, and anti-inflammatory properties' },
      { name: '1,8-Cineole (Eucalyptol)', percentage: '<15%', effect: 'Anti-inflammatory and mucolytic properties; higher concentrations can induce cutaneous irritation' },
      { name: 'γ-Terpinene and α-Terpinene', percentage: '10-28%', effect: 'Significant antioxidant and synergistic antimicrobial support' },
      { name: 'p-Cymene and Limonene', percentage: 'minor', effect: 'Aid in topical skin penetration' },
    ],
    moa: [
      { title: 'Antimicrobial Action (Antibacterial & Antifungal)', detail: 'Terpinen-4-ol is highly lipophilic; penetrates microbial cell walls disrupting the lipid bilayer, causing leakage of essential cellular contents and fatal inhibition of bacterial respiration via membrane-bound electron transport system disruption.' },
      { title: 'Anti-inflammatory Effect', detail: 'Chemically suppresses production of key inflammatory mediators. Downregulates superoxide synthesis by activated macrophages and inhibits TNF-α, IL-1β, and prostaglandin E2 (PGE2) expression.' },
      { title: 'Anti-Acne Activity', detail: 'Exerts direct bactericidal effect against Cutibacterium acnes (formerly Propionibacterium acnes) and reduces localized follicular inflammation.' },
    ],
    uses: [
      'Management of acne vulgaris (5% TTO gel comparable to 5% benzoyl peroxide with fewer side effects)',
      'Tinea pedis (athlete\'s foot): topical 25-50% solutions',
      'Onychomycosis (nail fungus): 100% TTO comparable to clotrimazole 1%',
      'Seborrheic dermatitis (dandruff): 5% TTO shampoo reduces Malassezia furfur',
      'Broad-spectrum antiseptic for minor cutaneous lacerations, abrasions, and insect bites',
      'Alternative natural deodorant: inhibits coryneform bacteria in axillary regions',
      'Research-stage activity against MRSA (Methicillin-Resistant Staphylococcus aureus)',
    ],
    howToUse: [
      { method: 'Facial / Acne Application', instruction: 'Dilute 1 drop of pure TTO in 1 teaspoon of non-comedogenic carrier oil (jojoba or mineral oil) to yield ~1% concentration. Apply as spot treatment.' },
      { method: 'Body Application', instruction: 'Blend 2-3 drops per teaspoon of carrier oil. Apply to affected areas.' },
      { method: 'Scalp Application', instruction: 'Blend 3-5 drops per tablespoon of carrier oil or add directly into a mild sulfate-free shampoo.' },
      { method: 'Antifungal Formulation', instruction: 'Use commercially prepared 10-50% topical solutions depending on tissue thickness (nails vs. skin surface).' },
    ],
    suitableAgeGroups: [
      { group: 'Pediatrics (<3 years)', notes: 'Strictly contraindicated: thin infant skin barrier increases risk of transdermal absorption and systemic neurotoxicity.' },
      { group: 'Adults', notes: 'Safe in concentrations up to 5%; 1-2% is often sufficient for facial use.' },
      { group: 'Pregnancy & Lactation', notes: 'Topical cosmetic use in low concentrations (<2%) generally considered safe. Avoid application near breast area during lactation.' },
      { group: 'Geriatrics & Chronic Skin Conditions', notes: 'Use with heightened caution in individuals with sensitive skin, atopic eczema, or severe psoriasis.' },
    ],
    dosage: {
      standard: 'Acne products: 2-5% topical. Antifungal formulations: 10-50% topical. CRITICAL: Oral ingestion strictly contraindicated: highly toxic if swallowed.',
      forms: [
        { form: 'Acne Topical Gel/Cream', dose: '2-5% concentration, applied twice daily.' },
        { form: 'Antifungal Topical Solution', dose: '10-50% concentration, applied 1-2 times daily to affected nails/skin.' },
        { form: 'Anti-dandruff Shampoo', dose: '5% TTO shampoo; leave on for 3-5 minutes before rinsing.' },
      ],
    },
    overdose: {
      symptoms: [
        'Systemic Oral Overdose: Severe CNS depression, ataxia (profound loss of motor coordination), lethargy, confusion, and in critical cases respiratory failure and coma.',
        'Topical Overdose: Severe chemical irritation, intense erythema, pruritus, desquamation (peeling), and allergic contact dermatitis from oxidized monoterpene byproducts.',
      ],
      management: [
        'Oral: Immediate emergency medical intervention. Do NOT induce emesis (risk of aspiration pneumonitis). Provide supportive therapy, maintain airway, IV fluids, and activated charcoal under medical supervision if within first hour of ingestion.',
        'Topical: Discontinue application immediately, wash the cutaneous area thoroughly with cool water and a mild non-soap cleanser, and apply a soothing fragrance-free emollient.',
      ],
    },
    sideEffects: [
      'Cutaneous dryness, scaling, local burning, and stinging sensations',
      'Potential for severe allergic contact dermatitis in sensitized individuals',
      'Inhalation of highly concentrated vapors can cause respiratory tract irritation, dry coughing, rhinorrhea, and temporary shortness of breath',
    ],
    contraindications: [
      'Oral ingestion: absolutely contraindicated across all demographics',
      'Known hypersensitivity or allergy to Melaleuca alternifolia or other Myrtaceae family members (e.g., Eucalyptus)',
      'Active acute atopic eczema or severely broken/denuded skin barriers',
    ],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Essential Oil', instructions: 'Store in tightly sealed dark amber glass bottles in a cool, dry environment protected from sunlight and heat. Exposure to air and light induces auto-oxidation of monoterpenes into highly allergenic peroxide compounds.' },
      ],
    },
    marketedProducts: [
      { name: "Nature's Bounty Tea Tree Oil 1fl oz", image: '/images/Picture6.jpg' },
      { name: 'Dr. Organic Tea Tree Cream', image: '/images/Picture7.jpg' },
      { name: 'Bubbizz Tea Tree Facial Foam with Green Tea', image: '/images/Picture26.jpg' },
    ],
    benefits: [
      { icon: 'bug_report', title: 'Acne Fighter', desc: 'Clinically proven bactericidal effect against Cutibacterium acnes, reducing inflammatory and non-inflammatory lesions.' },
      { icon: 'sanitizer', title: 'Broad Antifungal', desc: 'Effective against dermatophyte infections causing athlete\'s foot and nail fungus, comparable to topical clotrimazole.' },
      { icon: 'spa', title: 'Scalp Health', desc: 'Targets Malassezia furfur to reduce dandruff, scalp itching, and greasiness.' },
      { icon: 'shield', title: 'Natural Antiseptic', desc: 'Disinfects minor cuts, abrasions, and insect bites while suppressing local inflammation.' },
    ],
    botanicalFacts: {
      family: 'Myrtaceae',
      nativeRegion: 'New South Wales, Australia (narrow coastal strip)',
      growthHabit: 'Small tree or shrub growing 5-8 m tall with papery bark and needle-like leaves',
      activeCompounds: 'Terpinen-4-ol (35-48%), γ-terpinene (10-28%), 1,8-cineole',
      cultivationNotes: 'Grown commercially in Australia via steam distillation of leaves; standardized to ISO 4730 for pharmaceutical grade quality',
    },
    preparation: [
      { method: 'Diluted Essential Oil', desc: 'Dilute in carrier oil (1-5%) before any topical application. Never apply undiluted to skin.', bestFor: 'Acne, minor antiseptic, deodorant' },
      { method: 'Commercial 5% Gel', desc: 'Standardized commercial topical formulations for safe, consistent dosing.', bestFor: 'Acne vulgaris management' },
      { method: 'Medicated Shampoo', desc: '5% TTO added to mild shampoo for scalp use.', bestFor: 'Dandruff, seborrheic dermatitis' },
    ],
    symptoms: ['Acne', 'Fungal infection', 'Dandruff', 'Minor wounds', 'Skin infections'],
    relatedPlants: ['aloe-vera-skincare', 'green-tea-skincare', 'licorice-skincare'],
    references: [
      { text: 'Egyptian Drug Authority — Tea Tree monograph.', url: 'https://share.google/YdFqGC2Zq6Z1YMHFc' },
    ],
  },

  'licorice-skincare': {
    id: 'licorice-skincare',
    name: 'Licorice',
    nameAr: 'العرقسوس',
    latinName: 'Glycyrrhiza glabra L.',
    commonNames: ['Licorice', 'Sweet root'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Skin Brightening', 'Anti-inflammatory', 'Hyperpigmentation', 'Respiratory'],
    image: '/images/Licorice-main.jpg',
    images: ['/images/Licorice-main.jpg', '/images/cough_doc/image12.jpg'],
    imageFit: 'contain',
    shortDescription: 'Often called "Nature\'s Hydroquinone", licorice root brightens hyperpigmentation and soothes skin inflammation through its unique glabridin and glycyrrhizin compounds.',
    description: 'Licorice contains glycyrrhizin (a triterpenoid saponin with cortisone-like action), glabridin (the primary flavonoid responsible for skin lightening via tyrosinase inhibition), and licochalcone A (a potent antioxidant). These compounds work synergistically to reduce melanin production, disperse existing dark spots, and inhibit pro-inflammatory pathways, making it highly effective for hyperpigmentation, rosacea, and acne.',
    history: 'Licorice root has been used in traditional medicine for over 4,000 years. Ancient Egyptians included it in the tomb of Tutankhamun. It features prominently in Ayurvedic, Chinese, and Middle Eastern medicine for respiratory and digestive ailments. More recently, standardized extracts have become a cornerstone of cosmetic dermatology for skin brightening.',
    isDemo: false,
    activeConstituents: [
      { name: 'Glycyrrhizin (Glycyrrhizic Acid)', percentage: '', effect: 'Triterpenoid saponin; anti-inflammatory, anti-ulcer, antiviral; cortisone-like action via 11β-HSD inhibition' },
      { name: 'Glycyrrhetinic Acid (Enoxolone)', percentage: '', effect: 'Pharmacologically active aglycone metabolite of glycyrrhizin' },
      { name: 'Glabridin', percentage: '', effect: 'Main polyphenolic flavonoid; competitively inhibits tyrosinase to reduce melanin production: skin lightening' },
      { name: 'Licochalcone A', percentage: '', effect: 'Potent chalcone derivative; strong antioxidant and anti-inflammatory; neutralizes UV-induced free radicals' },
      { name: 'Liquiritin', percentage: '', effect: 'Flavonoid; induces melanin dispersal and removal, fading existing hyperpigmentation and dark spots' },
      { name: 'Isoliquiritigenin', percentage: '', effect: 'Flavonoid; contributes to antioxidant, anti-inflammatory, and antispasmodic properties' },
    ],
    moa: [
      { title: 'Tyrosinase Inhibition (Topical)', detail: 'Glabridin competitively inhibits tyrosinase, the key rate-limiting enzyme responsible for melanin production (pigmentation), directly reducing skin darkening.' },
      { title: 'Anti-Oxidative Stress (Topical)', detail: 'Licochalcone A neutralizes free radicals induced by UV exposure, protecting skin cells from oxidative damage.' },
      { title: 'Melanin Dispersal (Topical)', detail: 'Liquiritin induces dispersal and removal of melanin, helping to fade hyperpigmentation and dark spots already present on the skin.' },
      { title: 'Anti-inflammatory & Cortisone-like Effect (Systemic)', detail: 'Glycyrrhizin inhibits cortisol metabolism by blocking 11β-hydroxysteroid dehydrogenase (11β-HSD), prolonging active cortisol life and producing a potent anti-inflammatory glucocorticoid effect.' },
      { title: 'Mineralocorticoid Effect (Systemic Overdose Pathway)', detail: 'Inhibition of 11β-HSD leads to cortisol accumulation in kidneys, causing excessive mineralocorticoid receptor activation, resulting in sodium/water retention and potassium excretion.' },
      { title: 'Expectorant', detail: 'Stimulates tracheal and bronchial secretions to loosen mucus, making it easier to expel.' },
      { title: 'Demulcent', detail: 'Forms a protective soothing film over mucous membranes to relieve irritation in the GI tract (throat and stomach lining).' },
    ],
    uses: [
      'Brightens and evens skin tone: reduces dark patches, sun spots, and melasma',
      'Soothes inflammation and redness: calms irritated skin, rosacea, and acne',
      'Treats acne and controls sebum: antibacterial against Cutibacterium acnes',
      'Anti-aging protection: fights free radicals and supports collagen production',
      'Reduces skin sensitivity: strengthens skin barrier, relief for eczema and dermatitis',
      'Respiratory support: treatment of upper respiratory tract ailments, cough, bronchitis, sore throat',
      'Gastrointestinal support: management of gastric ulcers, gastritis, and acid reflux',
    ],
    howToUse: [
      { method: 'DIY Brightening Mask', instruction: 'Mix 1 teaspoon of licorice powder with rose water, milk, yogurt, or honey to form a paste. Apply to clean face, leave 15-20 minutes, rinse with lukewarm water.' },
      { method: 'Targeted Spot Treatment', instruction: 'Mix a pinch of licorice powder with aloe vera gel or honey and apply directly to acne marks or hyperpigmentation for 10-15 minutes before rinsing.' },
      { method: 'Commercial Topical Products', instruction: 'Incorporate serums, toners, or creams containing standardized licorice extract (glabridin) into daily skincare routines.' },
      { method: 'Oral Tea (Respiratory/Digestive)', instruction: 'Steep 1-2 teaspoons of dried chopped root in hot water to relieve coughs or improve digestion. For sore throats: mix 1 teaspoon of powder in warm water for gargling.' },
    ],
    suitableAgeGroups: [
      { group: 'Infants (<1 year)', notes: 'Oral use strictly contraindicated. Topical use not recommended unless prescribed by a pediatrician.' },
      { group: 'Children (1-5 years)', notes: 'External use only in small amounts; oral use strictly avoided.' },
      { group: 'Children (6-12 years)', notes: 'Safe for topical use in skincare. Oral use strictly limited to prevent pseudoaldosteronism (fluid retention and blood pressure shifts).' },
      { group: 'Adolescents (12-18 years)', notes: 'Safe for topical use (acne, hyperpigmentation). Cautious brief oral use is acceptable within standard limits.' },
      { group: 'Adults', notes: 'Safe for topical use and proper oral use when duration limits are followed.' },
      { group: 'Pregnancy', notes: 'Strictly contraindicated orally: high intake linked to increased risk of preterm labor and fetal neurodevelopmental issues. Low-concentration topical commercial use generally considered safe.' },
      { group: 'Chronic Disease Patients', notes: 'Oral use strictly contraindicated or limited for patients with hypertension, cardiovascular diseases, or renal insufficiency.' },
    ],
    dosage: {
      standard: 'Topical serum (1-2%): apply 2-3 drops 1-2 times daily. DIY masks: ½ tsp powder, 2-3 times per week. Oral root (respiratory): 5–15 g dried root/day (200–600 mg glycyrrhizin), maximum 4–6 weeks continuous use. Oral DGL (GI): up to 4.5 g daily for up to 4 months.',
      forms: [
        { form: 'Licorice Extract Serum (1–2%), Topical', dose: 'Apply 2–3 drops 1–2 times daily onto clean skin before moisturizer.' },
        { form: 'DIY Powder Mask, Topical', dose: 'Mix ½ tsp with yogurt/honey/rose water, apply 2–3 times per week for 10–15 minutes.' },
        { form: 'Dried Root, Oral Infusion (Respiratory/GI)', dose: '5–15 g dried root per day (delivers 200–600 mg glycyrrhizin). Maximum continuous use: 4–6 weeks. Infuse 1–2 tsp chopped root in hot water.' },
        { form: 'Deglycyrrhizinated Licorice (DGL), GI use', dose: 'Up to 4.5 g daily for up to 4 months. DGL removes glycyrrhizin; safe for patients with cardiovascular or renal concerns.' },
        { form: 'Standardized Cough Syrup (e.g., Ventoherb)', dose: 'As per product label. Typically 5–10 mL 2–3× daily for adults.' },
      ],
    },
    overdose: {
      symptoms: [
        'Oral Overdose (≥5 g glycyrrhizin daily for several weeks): Pseudo-hyperaldosteronism: severe hypertension, profound hypokalemia (low potassium), muscle weakness, cramping, metabolic alkalosis, fluid retention (edema), cardiac arrhythmias, and severe headaches.',
        'Topical Overdose: Irritant contact dermatitis (redness, itching, burning), skin barrier disruption (dryness, peeling), and temporary photosensitivity.',
      ],
      management: [
        'Oral: Immediate cessation of licorice intake, potassium supplementation, close electrolyte monitoring, and administration of potassium-sparing diuretics (e.g., Spironolactone) if clinically required.',
        'Topical: Discontinue the product, wash with cool water, apply fragrance-free barrier cream (or aloe vera), and avoid other active ingredients (retinol or acids) until skin barrier heals.',
      ],
    },
    sideEffects: [
      'Topical: Rare mild skin irritation or allergic contact dermatitis in highly sensitive individuals',
      'Oral (glycyrrhizin): Headaches, chronic fatigue, elevated blood pressure (hypertension), severe fluid retention (edema)',
    ],
    contraindications: [
      'Known allergy to members of the Fabaceae (pea) family',
      'Topical applications on severely broken, open, or deeply infected skin',
      'Hypertension and cardiovascular diseases',
      'Renal (kidney) insufficiency',
      'Pre-existing hypokalemia',
    ],
    drugInteractions: [
      'Digoxin: hypokalemia caused by licorice drastically increases risk of Digoxin cardiac toxicity (serious arrhythmias, potentially fatal)',
      'Diuretics (e.g., Furosemide, Hydrochlorothiazide): co-administration potentiates hypokalemia; combined use significantly increases potassium depletion risk',
      'Corticosteroids (Prednisolone, Dexamethasone): glycyrrhizin slows corticosteroid metabolism via 11β-HSD inhibition, prolonging and amplifying corticosteroid effects and side effects',
      'Antihypertensives (ACE inhibitors, beta-blockers, ARBs): licorice antagonizes antihypertensive effect via sodium/water retention, causing reduced blood pressure control',
      'Warfarin: licorice may affect Warfarin metabolism via liver CYP enzymes, altering anticoagulant efficacy: monitor INR',
    ],
    storage: {
      forms: [
        { form: 'All forms', instructions: 'Store in a cool, dry place away from direct sunlight in airtight containers to preserve bioactive compounds and prevent moisture absorption.' },
      ],
    },
    marketedProducts: [
      { name: 'Ventoherb Syrup 120 mL (Licorice-based cough syrup)', image: '/images/cough_doc/image15.jpg' },
      { name: 'IVY Syrup 120 mL (Ivy Leaf cough syrup)', image: '/images/cough_doc/image14.jpg' },
      { name: 'IVY NISTEM Syrup 120 mL', image: '/images/cough_doc/image16.jpg' },
    ],
    benefits: [
      { icon: 'auto_fix_high', title: 'Skin Brightening', desc: 'Glabridin inhibits tyrosinase to reduce melanin production: effectively fading dark spots, melasma, and sun damage.' },
      { icon: 'spa', title: 'Soothes Inflammation', desc: 'Anti-inflammatory and cortisone-like action calms rosacea, acne redness, and eczema flares.' },
      { icon: 'shield', title: 'Antioxidant Protection', desc: 'Licochalcone A neutralizes UV-induced free radicals, protecting against photoaging.' },
      { icon: 'local_pharmacy', title: 'Respiratory & GI Support', desc: 'Expectorant and demulcent actions soothe coughs, bronchitis, and gastric ulcers when taken orally.' },
    ],
    botanicalFacts: {
      family: 'Fabaceae (Leguminosae)',
      nativeRegion: 'Southern Europe, Western Asia, and North Africa',
      growthHabit: 'Perennial herbaceous plant reaching 1-1.5 m with compound leaves and violet flowers; root is the medicinal part',
      activeCompounds: 'Glycyrrhizin, glabridin, licochalcone A, liquiritin, glycyrrhetinic acid',
      cultivationNotes: 'Root harvested after 3-5 years; standardized commercial extracts produced from the root by solvent extraction',
    },
    preparation: [
      { method: 'Topical Serum/Cream', desc: 'Standardized commercial products with glabridin (1-2%) for daily skincare.', bestFor: 'Hyperpigmentation, melasma, dark spots, rosacea' },
      { method: 'DIY Face Mask', desc: 'Mix licorice powder with honey, yogurt, or rose water for a 15-minute brightening mask.', bestFor: 'Skin brightening, acne marks' },
      { method: 'Oral Root Infusion', desc: 'Steep chopped dried root in hot water for respiratory or digestive use.', bestFor: 'Cough, sore throat, gastric ulcer support' },
    ],
    symptoms: ['Hyperpigmentation', 'Dark spots', 'Acne', 'Rosacea', 'Eczema', 'Cough', 'Sore throat'],
    relatedPlants: ['aloe-vera-skincare', 'green-tea-skincare', 'tea-tree-skincare'],
    references: [
      { text: 'Healthline — Licorice Root: Benefits, Dosage, Side Effects, and More.', url: 'https://www.healthline.com/nutrition/licorice-root#dosage-and-forms' },
      { text: 'WebMD — Licorice Uses, Side Effects, Interactions.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-881/licorice#uses' },
      { text: 'Fiore, C., Eisenhut, M., Krausse, R., et al. (2008). Antiviral effects of Glycyrrhiza species. Phytotherapy Research, 22(2), 141–148.' },
      { text: 'Asl, M. N., & Hosseinzadeh, H. (2008). Review of pharmacological effects of Glycyrrhiza sp. and its bioactive compounds.' },
    ],
  },

  'green-tea-skincare': {
    id: 'green-tea-skincare',
    name: 'Green Tea',
    nameAr: 'الشاي الأخضر',
    latinName: 'Camellia sinensis (L.) Kuntze',
    commonNames: ['Green tea'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Antioxidant', 'Anti-aging', 'Skin Care', 'Acne', 'Topical'],
    image: '/images/Picture25.jpg',
    shortDescription: 'Rich in EGCG catechins and L-theanine, green tea offers powerful antioxidant, anti-inflammatory, and skin-protective benefits both topically and orally.',
    description: 'The primary bioactive components of Camellia sinensis are polyphenols: specifically catechins (flavan-3-ols), with EGCG (epigallocatechin-3-gallate) being the most pharmacologically active. EGCG inhibits NF-κB, acts as a 5α-reductase inhibitor to reduce sebum, and suppresses UV-induced collagen degradation. A specific green tea extract (Sinecatechins) is FDA-approved as Veregen® ointment for HPV-associated warts.',
    history: 'Green tea has been cultivated in China for over 4,000 years and has played a central role in East Asian medicine and culture. The health benefits were documented in ancient Chinese texts, and modern research has validated many traditional uses, particularly its antioxidant and anti-inflammatory properties.',
    isDemo: false,
    activeConstituents: [
      { name: 'EGCG (Epigallocatechin-3-gallate)', percentage: '', effect: 'Most abundant and pharmacologically active catechin; antioxidant, anti-inflammatory, 5α-reductase inhibitor, anticancer research' },
      { name: 'Other Catechins: EC, EGC, ECG', percentage: '', effect: 'Potent free radical scavengers; antimicrobial and antiviral properties' },
      { name: 'Caffeine (Methylxanthine Alkaloid)', percentage: '', effect: 'CNS stimulation; synergistic with EGCG for thermogenesis and sebum reduction; vasoconstriction for under-eye care' },
      { name: 'L-theanine', percentage: '', effect: 'Unique amino acid crossing blood-brain barrier; promotes relaxation without drowsiness by modulating GABA and glutamate' },
      { name: 'Condensed Tannins', percentage: '', effect: 'Natural astringents; temporarily shrink pores and reduce oiliness by complexing with sebum proteins' },
      { name: 'Vitamins E and B2', percentage: '', effect: 'Aid in maintaining skin barrier hydration and cellular turnover' },
    ],
    moa: [
      { title: 'Antioxidant Activity', detail: 'Catechins (especially EGCG) function as potent free radical scavengers, chelating transition metals and upregulating endogenous antioxidant enzymes (superoxide dismutase and catalase).' },
      { title: 'Anti-inflammatory Effect', detail: 'Suppresses inflammatory pathways by inhibiting Nuclear Factor-kappa B (NF-κB), reducing iNOS, COX-2, TNF-α, and IL-1β production.' },
      { title: 'Antimicrobial Activity', detail: 'Catechins disrupt bacterial cell membranes by binding to lipid bilayers and inhibit viral replication (Influenza and HPV) by interfering with viral adsorption.' },
      { title: 'Metabolic & Thermogenic Regulation', detail: 'Caffeine and EGCG synergistically inhibit catechol-O-methyltransferase (COMT), prolonging norepinephrine action, expanding energy expenditure and enhancing fatty acid oxidation.' },
      { title: 'Topical Sebum Control', detail: 'EGCG acts as a natural 5α-reductase inhibitor, preventing conversion of testosterone into DHT, directly reducing sebum production in sebaceous glands.' },
    ],
    uses: [
      'FDA-approved Sinecatechins (Veregen® 15% ointment) for external genital and perianal HPV warts',
      'Management of acne vulgaris: reduces inflammatory and non-inflammatory lesions, controls sebum',
      'Dermatological anti-aging and photoprotection: minimizes UV-induced erythema and prevents collagen degradation',
      'Under-eye care: caffeine constricts blood vessels, reducing periorbital puffiness and dark circles',
      'Cardiovascular health support: lowers systemic blood pressure and reduces LDL-cholesterol oxidation',
      'Adjuvant weight management: boosts metabolic rate and reduces abdominal obesity',
      'Cognitive function enhancement: synergistic caffeine and L-theanine improve sustained attention and working memory',
      'Supportive oral and blood sugar health: reduces periodontal bacterial load and modestly improves insulin sensitivity',
    ],
    howToUse: [
      { method: 'Facial Toner (Topical)', instruction: 'Cooled fresh green tea infusion applied directly via a cotton pad as a soothing antioxidant toner.' },
      { method: 'Eye Compress', instruction: 'Cooled used green tea bags compressed over closed eyelids for 10-15 minutes to reduce puffiness and dark circles.' },
      { method: 'Oral Infusion (Tea)', instruction: 'Steep 2-3 g of dried leaves in hot water at 80-85°C (avoid boiling to prevent tannin bitterness and catechin degradation) for 3-5 minutes.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Oral intake strictly limited to maximum 1-2 cups daily. High doses of caffeine cross the placenta; EGCG may interfere with folic acid absorption. Topical cosmetic use poses negligible systemic risk.' },
      { group: 'Pediatrics', notes: 'High oral doses of caffeine-containing supplements not recommended; moderation with standard dietary intake is essential.' },
      { group: 'Geriatrics', notes: 'Generally safe; clinical vigilance regarding potential interactions with cardiovascular therapies or anticoagulants.' },
      { group: 'Chronic Diseases', notes: 'Use with extreme caution in patients with hepatic impairment, severe renal failure, or clinical anxiety disorders: avoid concentrated oral extracts.' },
    ],
    dosage: {
      standard: 'Topical: 2-3% standardized green tea extract applied twice daily. Oral: 2-3 cups brewed tea daily (~250-750 mg total catechins). NOTE: Never ingest concentrated green tea extract on an empty stomach.',
      forms: [
        { form: 'Topical Gel/Cream', dose: '2-3% standardized green tea extract, applied twice daily for dermatological use.' },
        { form: 'Brewed Oral Tea', dose: '2-3 g leaves per 200 mL at 80-85°C; 2-3 cups daily.' },
        { form: 'Extract Supplements', dose: 'Must never be taken on an empty stomach due to heightened risk of hepatotoxicity.' },
      ],
    },
    overdose: {
      symptoms: [
        'Oral Extract Overdose (Idiosyncratic Hepatotoxicity): Nausea, persistent vomiting, severe epigastric pain, dizziness, severe tremors, tachycardia (acute caffeine toxicity), and marked elevation of serum transaminases (ALT/AST).',
        'Topical Overdose: Erythema, localized pruritus, burning sensations, peeling, or allergic contact dermatitis.',
      ],
      management: [
        'Oral: Immediate cessation of supplement, aggressive fluid resuscitation, symptomatic treatment of cardiovascular anomalies, and mandatory monitoring of Liver Function Tests (LFTs).',
        'Topical: Halt application immediately, irrigate with cool water, and apply a basic hypoallergenic fragrance-free emollient.',
      ],
    },
    sideEffects: [
      'Nausea, stomach upset, headaches, anxiety, increased heart rate',
      'Iron deficiency (tannins chelate non-heme iron)',
      'Potential liver strain with high-dose concentrated extracts',
      'Contact dermatitis (topical, rare)',
    ],
    contraindications: [
      'Known hypersensitivity to Camellia sinensis or its constituents',
      'Severe hepatic impairment or active liver disease',
      'Severe bleeding disorders',
    ],
    drugInteractions: [
      'Warfarin: high-dose EGCG extracts may alter Warfarin metabolism via CYP450 pathways, complicating INR parameters',
      'Nadolol (and certain beta-blockers): green tea inhibits intestinal drug transporter OATP1A2, significantly reducing Nadolol bioavailability',
      'CNS Stimulants: concomitant use exponentially exacerbates tachyarrhythmias and anxiety',
    ],
    storage: {
      forms: [
        { form: 'All forms', instructions: 'Store in airtight, opaque containers in a cool, dry environment away from direct sunlight and moisture to prevent rapid auto-oxidation of active polyphenols.' },
      ],
    },
    marketedProducts: [
      { name: 'Green Tea Oleum Essential Oil', image: '/images/Picture27.jpg' },
      { name: 'Lipton Green Tea Pure 25 bags', image: '/images/Picture28.jpg' },
    ],
    benefits: [
      { icon: 'shield', title: 'Antioxidant Defense', desc: 'EGCG catechins scavenge free radicals and protect skin from UV-induced oxidative stress and premature aging.' },
      { icon: 'face', title: 'Acne & Sebum Control', desc: '5α-reductase inhibition reduces sebum production; bactericidal against Cutibacterium acnes.' },
      { icon: 'auto_fix_high', title: 'Anti-aging', desc: 'Inhibits matrix metalloproteinases (MMPs) to prevent collagen degradation and reduce fine lines.' },
      { icon: 'visibility', title: 'Under-Eye Care', desc: 'Caffeine constricts blood vessels to transiently reduce periorbital puffiness and dark circles.' },
    ],
    botanicalFacts: {
      family: 'Theaceae',
      nativeRegion: 'China and Southeast Asia; widely cultivated in East Asia, India, and East Africa',
      growthHabit: 'Evergreen shrub or small tree, 2-3 m tall when cultivated; young shoots and leaves are harvested',
      activeCompounds: 'EGCG, epicatechin (EC), epigallocatechin (EGC), caffeine, L-theanine, condensed tannins',
      cultivationNotes: 'Green tea is produced from unoxidized Camellia sinensis leaves: minimal processing preserves high catechin content vs. black or oolong teas',
    },
    preparation: [
      { method: 'Topical Toner', desc: 'Brewed, cooled green tea applied with cotton pad to skin.', bestFor: 'Daily antioxidant protection, oily/acne-prone skin' },
      { method: 'Eye Compress', desc: 'Cooled used tea bags placed over closed eyelids for 10-15 minutes.', bestFor: 'Reducing puffiness and dark circles' },
      { method: 'Oral Tea', desc: 'Brewed at 80-85°C for 3-5 minutes; 2-3 cups daily.', bestFor: 'Cardiovascular support, cognitive function, weight management' },
    ],
    symptoms: ['Acne', 'Oily skin', 'Dark circles', 'Puffiness', 'UV damage', 'Aging skin'],
    relatedPlants: ['aloe-vera-skincare', 'tea-tree-skincare', 'rosemary-skincare'],
    references: [
      { text: 'National Center for Biotechnology Information — Green Tea.', url: 'https://pubchem.ncbi.nlm.nih.gov' },
      { text: 'Drugs.com — Green Tea.', url: 'https://www.drugs.com/npp/green-tea.html' },
    ],
  },

  'rosemary-skincare': {
    id: 'rosemary-skincare',
    name: 'Rosemary',
    nameAr: 'إكليل الجبل',
    latinName: 'Salvia rosmarinus Spenn. (syn. Rosmarinus officinalis L.)',
    commonNames: ['Rosemary'],
    category: 'womens-health',
    subcategory: 'skin-care',
    tags: ['Hair Growth', 'Anti-alopecia', 'Antioxidant', 'Cognitive', 'Anti-inflammatory'],
    image: '/images/Picture11.jpg',
    shortDescription: 'Clinically proven as effective as Minoxidil 2% for androgenetic alopecia, rosemary also enhances cognitive function, protects against oxidative stress, and provides broad antimicrobial activity.',
    description: 'Rosemary contains carnosic acid and carnosol (lipid-soluble antioxidants), rosmarinic acid (a potent water-soluble anti-inflammatory), and a rich volatile oil fraction including 1,8-cineole (eucalyptol) and camphor. Topically, carnosic acid acts as a mild 5α-reductase inhibitor disrupting DHT conversion responsible for androgenetic alopecia. Its 1,8-cineole inhalation acts as an acetylcholinesterase (AChE) inhibitor improving cholinergic neurotransmission and enhancing memory and focus.',
    history: 'Rosemary has been revered since antiquity: ancient Greeks wore garlands to improve memory during exams. In medieval Europe it was used as a hair tonic and cognitive stimulant. A landmark modern clinical trial demonstrated it was as effective as Minoxidil 2% for hair regrowth with fewer side effects.',
    isDemo: false,
    activeConstituents: [
      { name: 'Carnosic Acid and Carnosol (Phenolic Diterpenes)', percentage: '', effect: 'Primary lipid-soluble antioxidants; cellular protection and formulation stabilization; mild 5α-reductase inhibition for anti-alopecia action' },
      { name: 'Rosmarinic Acid', percentage: '', effect: 'Potent water-soluble antioxidant and anti-inflammatory agent' },
      { name: 'Caffeic Acid (Phenolic Acid)', percentage: '', effect: 'Secondary antioxidant and anti-inflammatory support' },
      { name: 'Genkwanin, Luteolin, Apigenin (Flavonoids)', percentage: '', effect: 'Antispasmodic and vascular activities' },
      { name: '1,8-Cineole (Eucalyptol): Volatile Oil', percentage: '', effect: 'Promotes microcirculation; acts as natural acetylcholinesterase (AChE) inhibitor improving cognitive function' },
      { name: 'Camphor: Volatile Oil', percentage: '', effect: 'Local counter-irritant, analgesic, and antimicrobial actions' },
      { name: 'Alpha-Pinene & Camphene: Volatile Oil', percentage: '', effect: 'Antiseptic and aromatic properties' },
    ],
    moa: [
      { title: 'Stimulation of Hair Follicles (Anti-Alopecia)', detail: 'Carnosic acid stimulates local microcirculation and tissue perfusion. Acts as mild 5α-reductase inhibitor, disrupting conversion of testosterone into dihydrotestosterone (DHT): the primary hormone responsible for androgenetic alopecia.' },
      { title: 'Cognitive & Neuroprotective Effects', detail: 'Inhalation or absorption of 1,8-cineole acts as a natural acetylcholinesterase (AChE) inhibitor. By preventing acetylcholine breakdown, it improves cholinergic neurotransmission, enhancing focus, memory, and concentration.' },
      { title: 'Antioxidant Activity', detail: 'Carnosic acid and rosmarinic acid function as potent free radical scavengers, chain-breaking antioxidants, and inhibitors of lipid peroxidation.' },
      { title: 'Anti-inflammatory Action', detail: 'Suppresses inflammatory cascades by downregulating COX-2 and iNOS expression, and inhibiting production of leukotrienes and pro-inflammatory cytokines.' },
      { title: 'Antimicrobial Activity', detail: 'Destroys bacterial and fungal cell walls, showing broad-spectrum activity against Malassezia species (causative yeast for dandruff).' },
    ],
    uses: [
      'Androgenetic alopecia and hair loss: stimulates hair regrowth and retards premature hair thinning',
      'Dandruff and scalp care: controls sebum production and mitigates desquamation via antifungal activity',
      'Cognitive support: enhances short-term alertness, working memory, and focus',
      'Dermatological photoprotection: neutralizes UV-induced oxidative stress in cutaneous cells',
      'Musculoskeletal pain relief: topical rubefacient and local analgesic for mild myalgia and arthralgia',
      'Gastrointestinal comfort: carminative and antispasmodic to relieve dyspepsia and flatulence',
    ],
    howToUse: [
      { method: 'Scalp: Essential Oil', instruction: 'Dilute 5 drops of rosemary essential oil in a suitable carrier oil (jojoba, argan, or coconut oil). Massage thoroughly into the scalp 2-3 times weekly; leave for at least 2-4 hours or overnight before rinsing.' },
      { method: 'Scalp: Aqueous Infusion Spray', instruction: 'Prepare rosemary infusion (1–2 g dried leaves in 200 mL boiling water, covered 15 min, then cooled and strained). Pour into a spray bottle and apply 5–10 sprays directly onto the scalp 1–2 times daily as a leave-in treatment. Refrigerate; discard after 7 days.' },
      { method: 'Skincare: Topical Mask', instruction: 'Mix 2-3 drops of rosemary essential oil per teaspoon of carrier oil or aloe vera gel. Apply for 10-15 minutes as an antioxidant face treatment, then rinse thoroughly.' },
      { method: 'Oral: Herbal Infusion', instruction: 'Steep 1-2 g (1-2 teaspoons) of dried leaves in 150-200 mL of hot water (85-90°C) in a covered vessel for 10-15 minutes. Strain and consume 1-3 times daily. Maximum daily: 4-6 g dry herb.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Oral intake in medicinal/concentrated amounts and use of pure essential oil STRICTLY CONTRAINDICATED. Rosemary acts as an emmenagogue and uterine stimulant: can induce pelvic congestion and pose risk of preterm labor or miscarriage. Low-concentration cosmetic topical use away from mammary glands considered low-risk during lactation.' },
      { group: 'Pediatrics (<6 years)', notes: 'Pure rosemary essential oil strictly contraindicated near face/nostrils: camphor and 1,8-cineole content can trigger reflex glottis spasms, respiratory depression, or seizures.' },
      { group: 'Geriatrics', notes: 'Generally safe, but clinical monitoring required for potential interactions with cardiovascular or anticoagulant regimens.' },
    ],
    dosage: {
      standard: 'Topical (hair): 5 drops EO in carrier, 2-3x weekly. Oral infusion: 1-2 g dried leaves in 150-200 mL hot water, 1-3 times daily. Max daily dry herb: 4-6 g.',
      forms: [
        { form: 'Topical Essential Oil (diluted)', dose: '5 drops in carrier oil applied to scalp 2-3 times weekly.' },
        { form: 'Oral Herbal Infusion', dose: '1-2 g dried leaves per 150-200 mL at 85-90°C; 1-3 cups daily (max 4-6 g dry herb/day).' },
      ],
    },
    overdose: {
      symptoms: [
        'Oral Essential Oil Overdose: Severe nausea, vomiting, severe abdominal pain, uterine bleeding, acute nephritis (kidney irritation), and systemic neurotoxicity: tonic-clonic seizures (convulsions), confusion, or pulmonary edema.',
        'Topical Overdose (undiluted oil): Severe erythema, intense pruritus, burning sensations, or acute contact dermatitis.',
      ],
      management: [
        'Oral EO: Immediate medical emergency response. Stop ingestion, avoid inducing vomiting if consciousness compromised, initiate airway protection, administer activated charcoal under strict clinical supervision, manage seizures with Benzodiazepines.',
        'Topical: Stop use immediately, wash with cool water and mild soap, apply basic fragrance-free barrier cream.',
      ],
    },
    sideEffects: [
      'Oral (medicinal doses): Potential emmenagogue effects, gastrointestinal irritation',
      'Topical (undiluted EO): Erythema, pruritus, burning, contact dermatitis',
    ],
    contraindications: [
      'Known hypersensitivity to Salvia rosmarinus or other Lamiaceae family members',
      'Seizure disorders and epilepsy: camphor can lower seizure threshold',
      'Bleeding disorders / anticoagulant therapy: mild antiplatelet aggregation properties',
      'Severe renal or hepatic insufficiency',
      'Biliary tract obstruction and gallstones: may trigger biliary colic due to choleretic activity',
      'Iron deficiency anemia: high polyphenol/tannin content chelates non-heme iron',
    ],
    drugInteractions: [
      'Anticoagulants (Warfarin): mild antiplatelet properties; monitor INR',
      'Iron supplements: consume at least 2 hours apart due to tannin-induced chelation',
    ],
    storage: {
      forms: [
        { form: 'Dried Foliage', instructions: 'Store in airtight, opaque containers in a cool, dry, dark environment to preserve volatile oil fractions.' },
        { form: 'Essential Oil', instructions: 'Dispense in dark amber or cobalt glass bottles tightly sealed, kept away from direct heat and sunlight.' },
      ],
    },
    marketedProducts: [
      { name: 'Nefertari Essential Oil of Rosemary', image: '/images/Picture12.jpg' },
      { name: 'Rootage Hair Oil 100 mL (Rosemary-enriched)', image: '/images/Rootage Hair Oil.webp' },
      { name: 'Rosemary Hair Booster Oil 50 mL', image: '/images/Rosemary Hair Booster Oil.jpeg' },
    ],
    benefits: [
      { icon: 'grass', title: 'Hair Regrowth', desc: 'Clinically equivalent to Minoxidil 2% for androgenetic alopecia: stimulates follicles and inhibits DHT with fewer side effects.' },
      { icon: 'psychology', title: 'Cognitive Support', desc: '1,8-cineole inhibits acetylcholinesterase to enhance memory, focus, and alertness.' },
      { icon: 'shield', title: 'Antioxidant Protection', desc: 'Carnosic and rosmarinic acids are potent chain-breaking antioxidants protecting cells from oxidative damage.' },
      { icon: 'sanitizer', title: 'Scalp Antimicrobial', desc: 'Broad-spectrum activity against Malassezia species: effectively treats dandruff and seborrheic dermatitis.' },
    ],
    botanicalFacts: {
      family: 'Lamiaceae (Labiatae)',
      nativeRegion: 'Mediterranean region; widely cultivated worldwide',
      growthHabit: 'Aromatic evergreen shrub growing 0.5-2 m tall with needle-like leaves and blue flowers',
      activeCompounds: 'Carnosic acid, carnosol, rosmarinic acid, 1,8-cineole, camphor, alpha-pinene',
      cultivationNotes: 'Drought-tolerant; thrives in Mediterranean climate; essential oil produced by steam distillation of flowering tops and leaves',
    },
    preparation: [
      { method: 'Scalp Oil Massage', desc: 'Dilute rosemary EO in carrier oil (jojoba/coconut), apply to scalp with massage, leave overnight.', bestFor: 'Hair loss (androgenetic alopecia), dandruff' },
      { method: 'Leave-in Scalp Spray', desc: 'Cooled rosemary infusion sprayed onto scalp daily without rinsing.', bestFor: 'Scalp circulation, mild hair thinning' },
      { method: 'Oral Herbal Tea', desc: 'Steep 1-2 g dried leaves covered at 85-90°C for 10-15 minutes.', bestFor: 'Cognitive support, dyspepsia, antioxidant maintenance' },
    ],
    symptoms: ['Hair loss', 'Dandruff', 'Scalp issues', 'Memory', 'Muscle pain', 'Digestive discomfort'],
    relatedPlants: ['green-tea-skincare', 'aloe-vera-skincare', 'witch-hazel'],
    references: [
      { text: 'WebMD — Rosemary Uses, Side Effects, Interactions.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-154/rosemary' },
      { text: 'Panahi, Y., Taghizadeh, M., & Sahebkar, A. (2015). Rosemary oil vs minoxidil 2% for androgenetic alopecia: a randomized comparative trial. Skinmed, 13(1), 15–21.' },
      { text: 'Borges, R. S., et al. (2025). Rosmarinic acid and hair growth: mechanistic insights. Pharmaceutical Biology.' },
      { text: 'European Medicines Agency (EMA). (2010). European Union herbal monograph on Rosmarinus officinalis L., folium. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). (2009). WHO Monographs on Selected Medicinal Plants (Vol. 4): Folium Rosmarini. Geneva.' },
      { text: 'Moss, M., et al. (2003). Aromas of rosemary and lavender essential oils differentially affect cognition and mood in healthy adults. International Journal of Neuroscience, 113(1), 15–38.' },
      { text: 'Bicas, J. L., et al. (2011). Volatile constituents of Rosmarinus officinalis L. and their pharmacological actions. Food Chemistry, 126(3), 1120–1126.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // WOMEN'S HEALTH › BREAST FEEDING
  // ══════════════════════════════════════════════════════════════════════

  'fenugreek': {
    id: 'fenugreek',
    name: 'Fenugreek',
    nameAr: 'الحلبة',
    latinName: 'Trigonella foenum-graecum L.',
    commonNames: ['Fenugreek', 'Methi', 'Greek hayseed', 'Bird\'s foot', 'Goat\'s horn'],
    category: 'womens-health',
    subcategory: 'breast-feeding',
    tags: ['Galactagogue', 'Lactation', 'Breastfeeding', 'Hormonal'],
    image: '/images/Picture34.jpg',
    shortDescription: 'One of the most popular galactagogues worldwide, fenugreek stimulates prolactin and oxytocin secretion to enhance breast milk production in lactating mothers.',
    description: 'Fenugreek seeds contain diosgenin (a steroidal saponin that mimics estrogen), 4-hydroxyisoleucine (an amino acid with antidiabetic activity), and galactomannan fiber (20-30%). It enhances lactation through hormonal stimulation (increasing prolactin and oxytocin), phytoestrogenic effects (diosgenin promotes breast development), and stimulation of mammary glands (which are modified sweat glands). Studies report up to 400% increase in milk supply for some mothers.',
    history: 'Fenugreek has been used in Egyptian, Indian, Middle Eastern, and Chinese medicine for thousands of years. Ancient Egyptians used it for childbirth and breastfeeding support. It is a staple galactagogue in Ayurvedic medicine and is commonly called "Methi" in South Asian cuisine and herbalism.',
    isDemo: false,
    activeConstituents: [
      { name: '4-Hydroxyisoleucine', percentage: '0.09%', effect: 'Amino acid derivative with antidiabetic activity' },
      { name: 'Steroidal Saponins (Diosgenin, Yamogenin, Tigogenin)', percentage: '0.6-1.7%', effect: 'Cholesterol-lowering effect; diosgenin mimics estrogen and may promote breast development' },
      { name: 'Galactomannan Fiber', percentage: '20-30%', effect: 'Soluble fiber: lowers blood glucose and cholesterol' },
      { name: 'Alkaloids: Trigonelline, Gentianine, Choline', percentage: '0.5%', effect: 'Antidiabetic and neuroprotective effects' },
      { name: 'Flavonoids / Polyphenols: Quercetin, Orientin, Vitexin', percentage: '', effect: 'Antioxidant and anti-inflammatory activity' },
      { name: 'Proteins (Rich in Lysine, Tryptophan)', percentage: '20-30%', effect: 'Essential for milk protein production' },
      { name: 'Fixed Oils (PUFAs)', percentage: '5-10%', effect: 'Rich in polyunsaturated fatty acids; nutritional support' },
      { name: 'Minerals & Vitamins (Iron, Calcium, Niacin)', percentage: '', effect: 'Supports maternal recovery and boosts milk nutrient density' },
      { name: 'Sotolon (Volatile Component)', percentage: '', effect: 'Responsible for the characteristic maple syrup-like aroma in sweat and breast milk' },
    ],
    moa: [
      { title: 'Hormonal Stimulation', detail: 'Increases prolactin and oxytocin secretion, enhancing milk production and ejection.' },
      { title: 'Phytoestrogenic Effect', detail: 'Diosgenin (a steroidal sapogenin) mimics estrogen and may promote breast development and milk synthesis pathways.' },
      { title: 'Sweat Gland Stimulation', detail: 'May increase milk volume because mammary glands are modified sweat glands: fenugreek\'s sweat-stimulating properties may translate to increased lactation.' },
      { title: 'Insulin Axis Modulation', detail: 'Affects the insulin/GH/IGF-1 axis and promotes milk synthesis genes.' },
    ],
    uses: [
      'Enhancement of breast milk production in lactating mothers: one of the most popular galactagogues',
      'Seeds stimulate hormone precursors leading to enhanced milk production',
      'Nutritional support during lactation (iron, calcium, vitamins A, B)',
    ],
    howToUse: [
      { method: 'Capsules (Most Common)', instruction: 'Take 2-3 capsules (580-610 mg each) three to four times per day.' },
      { method: 'Tea', instruction: 'Steep 1 teaspoon of fenugreek seeds in boiling water for at least 15 minutes, 2-3 times a day.' },
      { method: 'Powder / Seeds', instruction: 'Consume ½ to 1 teaspoon of powder or seeds up to 3 times a day, mixed into water, juice, or food.' },
      { method: 'Tincture', instruction: 'Take 1-2 mL three times a day (check package directions for specific concentration).' },
    ],
    suitableAgeGroups: [
      { group: 'Adults (18-65+ years)', notes: 'Primary users for lactation support, diabetes management, and testosterone support.' },
      { group: 'Older Men (40+ years)', notes: 'Used to address declining testosterone levels.' },
      { group: 'Women for Lactation', notes: 'Used by lactating women to boost milk supply. Leaves only recommended: avoid bark and root.' },
      { group: 'Children (Small Amounts)', notes: 'Considered safe in amounts found in food. Insufficient evidence for large amounts; may cause unusual maple syrup body odors.' },
    ],
    dosage: {
      standard: 'Typical lactation dosage: 3,500-7,300 mg per day in divided doses.',
      forms: [
        { form: 'Capsules', dose: '2-3 capsules (approx. 500-600 mg each) three times daily (total 6-12 capsules/day).' },
        { form: 'Powder', dose: '2-3 teaspoons daily (total 1-6 g powdered seed daily).' },
        { form: 'Tea', dose: '1-3 cups daily of 15-minute steeped infusion.' },
      ],
    },
    overdose: {
      symptoms: [
        'Gastrointestinal issues: nausea, diarrhea, and gas.',
        'Hypoglycemia: can lower blood sugar levels significantly.',
        'Allergic reactions: cross-reactivity in people allergic to chickpeas, peanuts, or legumes.',
        'Effect on infant: gastrointestinal upset, fussiness, or maple syrup-like odor in urine/sweat when mother consumes high doses.',
      ],
      management: [
        'Immediately discontinue all fenugreek supplements.',
        'Monitor for signs of low blood sugar (dizziness, nausea, tremor).',
        'Ensure adequate fluid intake, especially if diarrhea is present.',
        'Consult a healthcare provider if symptoms are severe, particularly for allergic reactions.',
      ],
    },
    sideEffects: [
      'Gastrointestinal distress (up to 45% of users): diarrhea, loose stools, nausea, vomiting, gas, abdominal pain',
      'Maple syrup-like odor in sweat, urine, breast milk, and sometimes in the baby',
      'Baby sensitivity: possible fussiness, upset tummy, or green watery stools in breastfed infants',
      'Reduced blood sugar (monitor closely in diabetics)',
      'Allergic reactions/asthma exacerbation especially with legume allergies',
    ],
    contraindications: [
      'Pregnancy: strictly contraindicated in therapeutic doses; has oxytocic/uterine stimulant effects that may cause miscarriage or premature labor',
      'Asthma: may exacerbate asthma symptoms',
      'Diabetes/Hypoglycemia: blood sugar must be strictly monitored; anti-diabetic medication doses may need adjustment',
      'Thyroid dysfunction: may interfere with thyroid hormone function',
      'Allergies to legumes, peanuts, or chickpeas: cross-reaction possible',
    ],
    drugInteractions: [
      'Warfarin and anticoagulants: may increase risk of bleeding due to coumarin derivatives',
      'Anti-diabetic drugs (metformin, insulin): potentiates hypoglycemic effects',
      'Antidepressants: potential interactions reported',
    ],
    storage: {
      forms: [
        { form: 'Whole Seeds & Powder', instructions: 'Store in an airtight container in a dry, dark, and cool environment to prevent staleness and loss of therapeutic properties.' },
        { form: 'Brewed Tea', instructions: 'Store in the refrigerator for up to a few days (similar to iced tea).' },
        { form: 'Capsules & Supplements', instructions: 'Store at room temperature (68-72°F/20-22°C). Avoid excessive humidity and temperature extremes. Once opened, consume within 12 months. Shelf life 18-24 months properly stored.' },
      ],
    },
    marketedProducts: [
      { name: 'ZARY Fenugreek Seeds 150g', image: '/images/Picture32.jpg' },
      { name: 'Al-Radhi Fenugreek Dry (حلبة جافة)', image: '/images/Picture33.jpg' },
      { name: 'Fresh Fenugreek Plant', image: '/images/Picture35.jpg' },
    ],
    benefits: [
      { icon: 'child_care', title: 'Boosts Milk Supply', desc: 'Increases prolactin and oxytocin secretion; some studies report up to 400 mL/day increase in milk volume during early postpartum days.' },
      { icon: 'favorite', title: 'Hormonal Support', desc: 'Diosgenin mimics estrogen, supporting mammary gland development and milk synthesis pathways.' },
      { icon: 'nutrition', title: 'Nutrient-Rich', desc: 'Provides iron, calcium, and vitamins A and B to rebuild maternal nutrient stores depleted during lactation.' },
    ],
    botanicalFacts: {
      family: 'Fabaceae (Leguminosae)',
      nativeRegion: 'Mediterranean region, South Asia, Western Asia; widely cultivated in India, Egypt, and the Middle East',
      growthHabit: 'Annual herb growing 30-60 cm tall with trifoliate leaves and small white/yellow flowers; seeds harvested from pods',
      activeCompounds: 'Diosgenin, galactomannan, 4-hydroxyisoleucine, trigonelline, sotolon, quercetin',
      cultivationNotes: 'Seeds are the medicinal part; harvested when pods dry; widely used as a culinary spice throughout South Asia and the Middle East',
    },
    preparation: [
      { method: 'Capsules/Tablets', desc: '2-3 capsules (500-600 mg) three to four times daily: most convenient and consistent dose.', bestFor: 'Lactation support, consistent therapeutic dosing' },
      { method: 'Seed Tea', desc: 'Steep 1 tsp seeds in boiling water for 15 minutes; consume 2-3 cups daily.', bestFor: 'Lactation, digestive support' },
      { method: 'Culinary Use', desc: 'Add seeds to food or sprinkle powder into smoothies, yogurt, or soups.', bestFor: 'Nutritional supplementation, gradual lactation support' },
    ],
    symptoms: ['Low milk supply', 'Postpartum fatigue', 'Nutritional deficiency during lactation'],
    relatedPlants: ['fennel', 'moringa'],
    references: [
      { text: 'National Center for Biotechnology Information — Fenugreek.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK501779/' },
      { text: 'ScienceDirect — Fenugreek and breastfeeding.', url: 'https://www.sciencedirect.com/science/article/pii/S2213398420300051' },
      { text: 'Healthline — Fenugreek for Breastfeeding: Does It Help?', url: 'https://www.healthline.com/health/breastfeeding/fenugreek-breastfeeding#dose' },
      { text: 'Avicenna Journal of Phytomedicine — Fenugreek pharmacology.', url: 'https://ajp.mums.ac.ir/article_26043_538c31701d3e67cabb73b8c9b84bf5ad.pdf' },
    ],
  },

  'fennel': {
    id: 'fennel',
    name: 'Fennel',
    nameAr: 'الشمر',
    latinName: 'Foeniculum vulgare Mill.',
    commonNames: ['Fennel', 'Sweet fennel', 'Common fennel'],
    category: 'womens-health',
    subcategory: 'breast-feeding',
    tags: ['Galactagogue', 'Lactation', 'Carminative', 'Phytoestrogen'],
    image: '/images/Picture36.jpg',
    shortDescription: 'A traditional galactagogue containing anethole: a phytoestrogenic compound that may increase prolactin levels, improve milk volume, and soothe infant colic through breast milk.',
    description: 'Fennel seeds contain trans-anethole (50-80% of essential oil), which acts as a phytoestrogen mimicking estrogen to support mammary gland development and may block dopamine to increase prolactin levels. Fennel also relaxes smooth muscle to improve the let-down reflex, and provides a carminative effect that may soothe infant colic when compounds pass through breast milk.',
    history: 'Fennel has been used since antiquity in Mediterranean cultures for digestive health, lactation, and menstrual support. It was used by ancient Romans for its aromatic and medicinal properties. In traditional medicine across Europe, the Middle East, and South Asia, fennel tea is a common galactagogue given to new mothers.',
    isDemo: false,
    activeConstituents: [
      { name: 'trans-Anethole (Volatile Oil)', percentage: '50-80%', effect: 'Phytoestrogen mimicking estrogen; supports mammary gland development; may block dopamine to increase prolactin; antispasmodic and carminative properties' },
      { name: 'Fenchone (Volatile Oil)', percentage: 'up to 11.68%', effect: 'Contributes to bitter taste and digestive/antispasmodic effects' },
      { name: 'Limonene, α-Pinene, Methyl Chavicol', percentage: 'minor', effect: 'Antimicrobial and aromatic support' },
      { name: 'Rosmarinic Acid, Caffeoylquinic Acid Derivatives (Phenolic)', percentage: '', effect: 'Antioxidant and anti-inflammatory activity' },
      { name: 'Flavonoids: Eriodictyol-7-rutinoside, Quercetin-3-rutinoside', percentage: '', effect: 'Antioxidant and anti-inflammatory support' },
      { name: 'Petroselinic Acid, Palmitic Acid (Fatty Acids)', percentage: '', effect: 'Nutritional fatty acid support' },
      { name: 'Calcium, Potassium, Vitamin C', percentage: '', effect: 'Nutritional minerals and vitamins' },
    ],
    moa: [
      { title: 'Phytoestrogen (Anethole)', detail: 'Fennel seeds contain anethole, which mimics estrogen and supports mammary gland development for milk production.' },
      { title: 'Dopamine Inhibition', detail: 'Anethole may block dopamine, which normally suppresses prolactin secretion: leading to higher prolactin levels and increased milk production.' },
      { title: 'Prolactin & Milk Volume Enhancement', detail: 'May increase prolactin levels and overall breast milk volume through hormonal modulation.' },
      { title: 'Improved Let-Down Reflex', detail: 'Relaxes smooth muscles, helping milk flow more easily during feeding.' },
      { title: 'Milk Quality Enhancement', detail: 'May slightly increase the fat content of breast milk in some studies.' },
    ],
    uses: [
      'Milk production support: believed to increase breast milk volume and improve fat content',
      'Infant colic relief: anethole passes through breast milk, helping soothe baby digestion and reduce colic symptoms',
      'Maternal digestion: helps new mothers with bloating and constipation',
      'Nutrient boost: provides Vitamin C, Vitamin A, and iron',
    ],
    howToUse: [
      { method: 'Fennel Tea (Most Common)', instruction: 'Steep 1-3 teaspoons of crushed fennel seeds in 8 ounces of boiling water for 10-20 minutes. Cover the cup while steeping to prevent beneficial volatile oils from escaping. Drink 1-3 cups per day.' },
      { method: 'Seed Consumption', instruction: 'Chew on 1 teaspoon of fennel seeds after meals, up to 3 times a day, to aid digestion and support lactation.' },
      { method: 'Culinary Uses', instruction: 'Add crushed seeds to soups, salads, curries, or roasted vegetables for a light anise-like flavor and nutritional benefit.' },
      { method: 'Lactation Blends', instruction: 'Choose teas that combine fennel with other herbs like fenugreek or nettle for synergistic lactation support.' },
    ],
    suitableAgeGroups: [
      { group: 'Infants (2-12 weeks)', notes: 'Fennel seed oil emulsions used for alleviating colic: under medical supervision only.' },
      { group: 'Adolescents and Young Adults (13-21 years)', notes: 'Used for primary dysmenorrhea; studies involve oral fennel drops.' },
      { group: 'Adults: Women of Reproductive Age', notes: 'Used for PMS, hirsutism, and general digestive health.' },
      { group: 'Menopausal Women (40-60+)', notes: 'Used to reduce hot flashes, improve sleep quality, and manage bone density.' },
      { group: 'Lactating Women', notes: 'Primary use group; 1-3 cups of tea or 500-1,000 mg capsules 2-3 times daily.' },
    ],
    dosage: {
      standard: 'Tea/Seeds: 1-3 cups of tea per day or roughly 1 teaspoon of seeds 3 times daily. Capsules: 500-1,000 mg taken 2-3 times daily.',
      forms: [
        { form: 'Fennel Seed Tea', dose: '1-3 cups daily of 10-20 minute infusion of 1-3 teaspoons crushed seeds.' },
        { form: 'Capsules (seed powder)', dose: '500-1,000 mg, taken 2-3 times daily.' },
        { form: 'Whole Seeds', dose: '1 teaspoon chewed after meals, up to 3 times daily.' },
      ],
    },
    overdose: {
      symptoms: [
        'Infant sensitivities: Rare, but high maternal intake may lead to infant lethargy, fatigue, or signs of toxicity from anethole.',
        'Allergic reactions: Cross-reactivity with celery, carrots, coriander (Apiaceae family: celery-carrot-mugwort syndrome).',
        'Maternal digestive issues: Diarrhea and gastrointestinal disturbances.',
        'Hormonal effects: Estrogen-like properties may worsen hormone-sensitive conditions.',
        'Rare: Elevated liver enzymes with high-dose herbal blends containing fennel.',
      ],
      management: [
        'Stop all fennel-based products immediately.',
        'Contact a doctor or pediatrician immediately if infant shows signs of lethargy, vomiting, or excessive sleepiness.',
        'Monitor infant for lethargy, vomiting, and low muscle tone.',
        'Avoid concentrated fennel essential oil while breastfeeding.',
      ],
    },
    sideEffects: [
      'Infant lethargy/toxicity: Excessive maternal use (multiple liters of concentrated tea daily) can cause toxicity in infants via anethole in breast milk',
      'Maternal digestive issues ',
      'Allergic reactions in Apiaceae-sensitive individuals (skin rash, breathing issues)',
      'Rare: Increased liver enzymes with heavy use',
    ],
    contraindications: [
      'Pregnancy: strictly contraindicated in therapeutic doses; emmenagogue effects and may cause uterine contractions',
      'Allergies to Apiaceae family plants (celery, carrots, mugwort, coriander)',
      'Hormone-sensitive conditions: estrogen-sensitive cancers (breast, uterine, ovarian), endometriosis, or uterine fibroids',
      'Epilepsy: fennel essential oil can lower the seizure threshold',
    ],
    drugInteractions: [
      'Antibiotics (Ciprofloxacin): fennel minerals can chelate with the antibiotic, reducing its absorption; separate by at least 2 hours',
      'Anticoagulants: may slow blood clotting, causing issues for those with bleeding disorders',
    ],
    storage: {
      forms: [
        { form: 'Fennel Seeds', instructions: 'Store in an airtight glass jar in a cool, dark, dry place. Properly stored, dried seeds remain potent for 6-12 months. Lightly crush just before steeping to release volatile oils.' },
        { form: 'Fresh Fennel Bulb/Fronds', instructions: 'Store in a sealed plastic bag in the vegetable crisper. Fresh fennel lasts up to one week in the fridge.' },
      ],
    },
    marketedProducts: [
      { name: 'ISIS Fennel Tea Bags (شمر)', image: '/images/Picture39.jpg' },
      { name: 'Noreeca Fennel Tea (شمر)', image: '/images/Picture40.jpg' },
      { name: 'Fennel Seeds', image: '/images/Picture37.jpg' },
      { name: 'Fennel Tea & Bulb', image: '/images/Picture38.jpg' },
    ],
    benefits: [
      { icon: 'child_care', title: 'Milk Supply Support', desc: 'Anethole phytoestrogen and potential prolactin-boosting action support breast milk volume and quality.' },
      { icon: 'child_friendly', title: 'Infant Colic Relief', desc: 'Anethole passes through breast milk to soothe infant digestive discomfort and reduce colic crying.' },
    ],
    botanicalFacts: {
      family: 'Apiaceae (Umbelliferae)',
      nativeRegion: 'Mediterranean region; widely naturalized in Europe, Asia, and the Americas',
      growthHabit: 'Tall aromatic perennial herb reaching 1.5-2.5 m with feathery leaves and yellow flower umbels; seeds and bulb both used',
      activeCompounds: 'trans-Anethole (50-80%), fenchone, limonene, rosmarinic acid, quercetin-3-rutinoside',
      cultivationNotes: 'Seeds harvested in late summer when umbels mature; dried seeds are the medicinal part used in teas and capsules',
    },
    preparation: [
      { method: 'Seed Tea', desc: 'Steep 1-3 tsp crushed seeds in boiling water for 10-20 minutes (covered).', bestFor: 'Lactation support, infant colic (via breast milk), digestive comfort' },
      { method: 'Capsules', desc: '500-1,000 mg seed powder capsules taken with meals.', bestFor: 'Consistent lactation dosing, dysmenorrhea' },
      { method: 'Culinary Incorporation', desc: 'Add to soups, salads, or roasted vegetables.', bestFor: 'Nutritional supplementation, mild digestive support' },
    ],
    symptoms: ['Low milk supply', 'Infant colic', 'Bloating', 'Menstrual pain', 'Digestive discomfort'],
    relatedPlants: ['fenugreek', 'moringa', 'anise'],
    references: [
      { text: 'PubMed Central — Fennel and lactation.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4137549/' },
      { text: 'Milky Mama — Does Fennel Tea Increase Milk Supply?', url: 'https://milky-mama.com/blogs/milk-supply-guide/does-fennel-tea-increase-milk-supply-a-guide-for-breastfeeding-moms' },
      { text: 'National Center for Biotechnology Information — Fennel.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK501793/' },
      { text: 'Breastfeeding Network — Increasing Milk Supply.', url: 'https://www.breastfeedingnetwork.org.uk/factsheet/increasing-milk-supply-use-of-galactagogues/' },
      { text: 'Healthline — Fennel Tea Benefits.', url: 'https://www.healthline.com/health/fennel-tea' },
      { text: 'Latchette — The Magic of Fennel for Breastfeeding Mums.', url: 'https://latchette.com/blogs/blog-posts/the-magic-of-fennel-for-breastfeeding-mums' },
      { text: 'Mount Sinai — Fennel.', url: 'https://www.mountsinai.org/health-library/herb/fennel' },
      { text: 'MedlinePlus — Herbal Information.', url: 'https://medlineplus.gov/druginfo/herb_all.html' },
      { text: 'European Medicines Agency (EMA). (2016). European Union herbal monograph on Foeniculum vulgare Miller, fructus. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). (2007). WHO Monographs on Selected Medicinal Plants (Vol. 3). Geneva.' },
      { text: 'Badgujar, S. B., et al. (2014). Foeniculum vulgare Mill: A review of its botany, phytochemistry, pharmacology, contemporary application, and toxicology. BioMed Research International, 2014.' },
    ],
  },

  'moringa': {
    id: 'moringa',
    name: 'Moringa',
    nameAr: 'مورينجا',
    latinName: 'Moringa oleifera Lam.',
    commonNames: ['Moringa', 'Drumstick tree', 'Miracle tree'],
    category: 'womens-health',
    subcategory: 'breast-feeding',
    tags: ['Galactagogue', 'Lactation', 'Superfood', 'Nutrient-Dense'],
    image: '/images/Picture15.jpg',
    shortDescription: 'A nutrient-dense "miracle tree" whose leaves significantly boost breast milk volume and quality through prolactin stimulation and exceptional nutritional richness, with some studies reporting up to 400 mL/day increase.',
    description: 'Moringa oleifera acts through multiple pathways to enhance lactation: increasing serum prolactin levels (primary hormone for milk production), stimulating alveolar cell activity in mammary glands, and providing dense nutritional support (protein, iron, calcium, vitamins A/B/C/E). Its phytosterols (β-sitosterol, stigmasterol) and isothiocyanates provide anti-inflammatory and immune-supportive effects that benefit both mother and infant. IMPORTANT: Only LEAVES are recommended for breastfeeding: bark, roots, and flowers contain dangerous alkaloids.',
    history: 'Native to South Asia, moringa has been used in Ayurvedic, African, and Asian traditional medicine for centuries as a "miracle tree" due to its exceptional nutritional profile. It has been used in traditional postpartum care across India, the Philippines, and African countries to support maternal nutrition and milk production.',
    isDemo: false,
    activeConstituents: [
      { name: 'β-sitosterol, Stigmasterol, Campesterol (Phytosterols)', percentage: '', effect: 'Support hormonal pathways for milk production; anti-inflammatory properties' },
      { name: 'Quercetin, Kaempferol (Flavonoids)', percentage: '', effect: 'Potent antioxidants; anti-inflammatory effects that assist milk synthesis' },
      { name: 'Saponins', percentage: '', effect: 'Promote prolactin and milk production pathways' },
      { name: 'Phenolic Acids', percentage: '', effect: 'Antioxidant and cellular protective effects in mammary tissue' },
      { name: 'Essential Amino Acids and Proteins (Lysine, Tryptophan)', percentage: '', effect: 'Essential for milk protein production' },
      { name: 'Iron & Calcium', percentage: '', effect: 'Supports maternal recovery and boosts milk nutrient density' },
      { name: 'Vitamins A, C, E', percentage: '', effect: 'Antioxidants that help with general metabolic support and immune function' },
      { name: 'Isothiocyanates', percentage: '', effect: 'Provide anti-inflammatory effects that may assist in the overall process of milk synthesis' },
    ],
    moa: [
      { title: 'Prolactin Boost', detail: 'Increases serum prolactin levels: the primary hormone responsible for producing breast milk.' },
      { title: 'Mammary Gland Stimulation', detail: 'Boosts the development and activity of alveolar cells in the mammary glands.' },
      { title: 'Nutritional Support', detail: 'Provides the necessary nutrients (protein, iron, calcium) required for high-quality milk production.' },
      { title: 'Anti-inflammatory Effects', detail: 'Reduces oxidative stress in the mammary tissue, supporting optimal milk synthesis environment.' },
    ],
    uses: [
      'Boosts milk volume: studies indicate moringa can significantly increase milk supply, especially in early postpartum days (days 3-7), with some reporting up to 400 mL/day increase',
      'Raises prolactin levels: stimulates the hormone responsible for milk production',
      'Nutrient-dense nutrition: rich in iron, calcium, and vitamins (A, B); helps rebuild maternal nutrient stores',
      'Immune support for infants (via breast milk)',
      'Blood sugar and blood pressure management in older adults (50+)',
      'Joint inflammation reduction and eye health support',
    ],
    howToUse: [
      { method: 'Capsules', instruction: 'Capsules containing moringa leaf powder are a common, easy way to ensure a consistent dosage.' },
      { method: 'Powder', instruction: 'Moringa powder can be mixed into smoothies, yogurt, or soups.' },
      { method: 'Tea', instruction: 'Steeped moringa tea is another traditional method for lactation support.' },
      { method: 'Food Source', instruction: 'Fresh leaves can be cooked in dishes similar to spinach.' },
    ],
    suitableAgeGroups: [
      { group: 'Infants and Young Children (6 months to 5 years)', notes: 'As a nutritional supplement in food amounts only.' },
      { group: 'Children and Adolescents (6-18 years)', notes: 'Supports immunity, muscle growth, and brain development. Often added to juices and smoothies.' },
      { group: 'Young Adults and Adults (19-50 years)', notes: 'Provides natural energy, stress balance, iron levels, and breast milk production support.' },
      { group: 'Lactating Women', notes: 'Using LEAVES ONLY: roots, bark, and flowers are strictly contraindicated.' },
      { group: 'Older Adults (50+)', notes: 'Helps manage blood sugar and blood pressure, reduces joint inflammation, and supports eye health.' },
    ],
    dosage: {
      standard: 'Powder: 1 teaspoon to 1 tablespoon per day (morning and midday doses). Capsules/Tablets: 1-2 twice a day. Leaves (raw): up to 1 cup fresh leafy greens equivalent.',
      forms: [
        { form: 'Leaf Powder', dose: '1 tsp to 1 tbsp per day, split into morning and midday doses.' },
        { form: 'Capsules / Tablets', dose: '1-2 capsules twice daily.' },
        { form: 'Raw Fresh Leaves', dose: 'Up to 1 cup equivalent daily, cooked or in salads.' },
        { form: 'Tea', dose: '1-2 cups daily of steeped moringa leaf tea.' },
      ],
    },
    overdose: {
      symptoms: [
        'Gastrointestinal distress: Diarrhea, nausea, vomiting (high fiber and laxative nature).',
        'Liver/kidney dysfunction: High doses can cause cellular damage to liver and kidney tissues.',
        'Cutaneous toxicity: Severe skin rashes (urticaria), erythematous papules, necrotic keratinocytes.',
        'Hypotension: Dangerously low blood pressure.',
        'Hypoglycemia: Extremely low blood sugar if taken alongside diabetes medication.',
        'Neurological/Systemic: Possible nerve damage and severe fatigue.',
      ],
      management: [
        'Immediately discontinue all moringa-based products.',
        'Symptomatic treatment: antihistamines for skin rashes, remedies for gastric distress.',
        'Supportive care: stay hydrated to manage diarrhea.',
        'Medical assessment if severe liver enzyme changes (elevated AST, ALT, ALP) occur.',
      ],
    },
    sideEffects: [
      'Digestive issues: stomach upset, gas, diarrhea, nausea with large amounts',
      'Pregnancy risks: Bark and roots cause uterine contractions: strict avoidance required (LEAVES only are safe)',
      'Blood pressure/sugar issues: Can cause hypotension or hypoglycemia if taken with corresponding medications',
      'Liver/kidney concerns: Long-term high consumption may adversely affect liver and kidney function (some studies)',
    ],
    contraindications: [
      'Pregnancy: strictly contraindicated. Bark, root, and high doses of leaves may trigger uterine contractions (Moringa LEAVES are highly recommended during breastfeeding, but roots/bark remain strictly forbidden)',
      'Pre-existing kidney/liver conditions: high doses can stress these organs',
      'Hypotension: those with already low blood pressure should avoid it',
      'NEVER consume moringa root, bark, or flowers: contain dangerous alkaloid spirochin and other toxins',
    ],
    drugInteractions: [
      'Diabetes drugs (sitagliptin, metformin): may lead to excessive blood sugar lowering (hypoglycemia)',
      'Thyroid medication (Levothyroxine): may disrupt thyroid function regulation',
      'Blood pressure medicine: moringa can further lower blood pressure; risk of severe hypotension',
      'Liver-processed drugs: can interfere with cytochrome P450 enzymes',
    ],
    storage: {
      forms: [
        { form: 'Powder Form', instructions: 'Store in a cool, dark, dry place in an airtight container. High heat destroys delicate vitamins and enzymes: do not store near a stove or in direct sunlight.' },
        { form: 'Dried Leaves', instructions: 'Store in sealed, opaque/airtight containers to avoid degradation from light and humidity. Properly dried, can last several years.' },
        { form: 'Capsules', instructions: 'Store in a cool, dry place away from humidity and temperature extremes.' },
      ],
    },
    marketedProducts: [
      { name: 'ISIS Moringa Tea Bags', image: '/images/Picture13.jpg' },
      { name: 'Go-Lacta Organic Moringa Capsules 180', image: '/images/Picture14.jpg' },
      { name: 'Organic Nation Moringa Antioxidant 60 Capsules', image: '/images/Picture16.jpg' },
      { name: 'Moringa Powder & Tea Preparation', image: '/images/Picture17.jpg' },
    ],
    benefits: [
      { icon: 'child_care', title: 'Boosts Milk Volume', desc: 'Increases serum prolactin and stimulates mammary alveolar cells: studies report up to 400 mL/day increase in early postpartum.' },
      { icon: 'nutrition', title: 'Exceptional Nutrition', desc: 'Rich in protein, iron, calcium, and vitamins A/B/C/E: rebuilds maternal nutrient stores depleted during lactation.' },
      { icon: 'shield', title: 'Immune Support', desc: 'Antioxidant flavonoids and anti-inflammatory isothiocyanates benefit both mother and infant.' },
      { icon: 'favorite', title: 'Maternal Recovery', desc: 'Supports blood sugar, blood pressure, and reduces oxidative stress in mammary tissue.' },
    ],
    botanicalFacts: {
      family: 'Moringaceae',
      nativeRegion: 'Sub-Himalayan regions of northwestern India; widely cultivated throughout the tropics',
      growthHabit: 'Fast-growing tree reaching 10-12 m; drought-resistant; compound leaves, white flowers, and long seed pods ("drumsticks")',
      activeCompounds: 'β-sitosterol, quercetin, kaempferol, isothiocyanates, iron, calcium, vitamins A/B/C/E',
      cultivationNotes: 'One of the most nutritionally dense plants known. Leaves harvested year-round in tropical climates. ONLY leaves are safe for breastfeeding: never use bark, roots, or flowers',
    },
    preparation: [
      { method: 'Leaf Powder in Food', desc: 'Mix 1 tsp-1 tbsp moringa powder into smoothies, yogurt, or soups.', bestFor: 'Daily lactation support, nutritional supplementation' },
      { method: 'Capsules', desc: '1-2 capsules twice daily for consistent dosing.', bestFor: 'Convenient lactation support with precise dosing' },
      { method: 'Fresh Leaves (Cooked)', desc: 'Cooked like spinach in local dishes.', bestFor: 'Culinary integration, nutritional boost' },
    ],
    symptoms: ['Low milk supply', 'Postpartum fatigue', 'Nutritional deficiency', 'Anemia during lactation'],
    relatedPlants: ['fenugreek', 'fennel'],
    references: [
      { text: 'PubMed Central — Moringa oleifera and lactation.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9684698/' },
      { text: 'PubMed Central — Moringa nutritional composition.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12294722/' },
      { text: 'National Center for Biotechnology Information — Moringa.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK501899/' },
      { text: 'PubMed Central — Moringa oleifera health benefits.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8373516/' },
      { text: 'Actas Dermosifiliográficas — Cutaneous toxicity due to Moringa oleifera.', url: 'https://www.actasdermo.org/en-cutaneous-toxicity-due-moringa-oleifera-articulo-S1578219021002596' },
      { text: 'Cleveland Clinic — Moringa Benefits.', url: 'https://health.clevelandclinic.org/moringa-benefits' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // WOMEN'S HEALTH › BREAST FEEDING SUPPORT
  // ══════════════════════════════════════════════════════════════════════

  'fenugreek-breastfeeding': {
    id: 'fenugreek-breastfeeding',
    name: 'Fenugreek',
    nameAr: 'الحلبة',
    latinName: 'Trigonella foenum-graecum L.',
    commonNames: ['Fenugreek', 'Methi', 'Greek hayseed', 'Bird\'s foot', 'Goat\'s horn'],
    category: 'womens-health',
    subcategory: 'breast-feeding',
    tags: ['Galactagogue', 'Lactation', 'Breastfeeding', 'Hormonal'],
    image: '/images/Picture34.jpg',
    shortDescription: 'One of the most popular galactagogues worldwide, fenugreek stimulates prolactin and oxytocin secretion to enhance breast milk production in lactating mothers.',
    description: 'Fenugreek seeds contain diosgenin (a steroidal saponin that mimics estrogen), 4-hydroxyisoleucine (an amino acid with antidiabetic activity), and galactomannan fiber (20-30%). It enhances lactation through hormonal stimulation (increasing prolactin and oxytocin), phytoestrogenic effects (diosgenin promotes breast development), and stimulation of mammary glands (which are modified sweat glands). Studies report up to 400% increase in milk supply for some mothers.',
    history: 'Fenugreek has been used in Egyptian, Indian, Middle Eastern, and Chinese medicine for thousands of years. Ancient Egyptians used it for childbirth and breastfeeding support. It is a staple galactagogue in Ayurvedic medicine and is commonly called "Methi" in South Asian cuisine and herbalism.',
    isDemo: false,
    activeConstituents: [
      { name: '4-Hydroxyisoleucine', percentage: '0.09%', effect: 'Amino acid derivative with antidiabetic activity' },
      { name: 'Steroidal Saponins (Diosgenin, Yamogenin, Tigogenin)', percentage: '0.6-1.7%', effect: 'Cholesterol-lowering effect; diosgenin mimics estrogen and may promote breast development' },
      { name: 'Galactomannan Fiber', percentage: '20-30%', effect: 'Soluble fiber: lowers blood glucose and cholesterol' },
      { name: 'Alkaloids: Trigonelline, Gentianine, Choline', percentage: '0.5%', effect: 'Antidiabetic and neuroprotective effects' },
      { name: 'Flavonoids / Polyphenols: Quercetin, Orientin, Vitexin', percentage: '', effect: 'Antioxidant and anti-inflammatory activity' },
      { name: 'Proteins (Rich in Lysine, Tryptophan)', percentage: '20-30%', effect: 'Essential for milk protein production' },
      { name: 'Fixed Oils (PUFAs)', percentage: '5-10%', effect: 'Rich in polyunsaturated fatty acids; nutritional support' },
      { name: 'Minerals & Vitamins (Iron, Calcium, Niacin)', percentage: '', effect: 'Supports maternal recovery and boosts milk nutrient density' },
      { name: 'Sotolon (Volatile Component)', percentage: '', effect: 'Responsible for the characteristic maple syrup-like aroma in sweat and breast milk' },
    ],
    moa: [
      { title: 'Hormonal Stimulation', detail: 'Increases prolactin and oxytocin secretion, enhancing milk production and ejection.' },
      { title: 'Phytoestrogenic Effect', detail: 'Diosgenin (a steroidal sapogenin) mimics estrogen and may promote breast development and milk synthesis pathways.' },
      { title: 'Sweat Gland Stimulation', detail: 'May increase milk volume because mammary glands are modified sweat glands: fenugreek\'s sweat-stimulating properties may translate to increased lactation.' },
      { title: 'Insulin Axis Modulation', detail: 'Affects the insulin/GH/IGF-1 axis and promotes milk synthesis genes.' },
    ],
    uses: [
      'Enhancement of breast milk production in lactating mothers: one of the most popular galactagogues',
      'Seeds stimulate hormone precursors leading to enhanced milk production',
      'Nutritional support during lactation (iron, calcium, vitamins A, B)',
    ],
    howToUse: [
      { method: 'Capsules (Most Common)', instruction: 'Take 2-3 capsules (580-610 mg each) three to four times per day.' },
      { method: 'Tea', instruction: 'Steep 1 teaspoon of fenugreek seeds in boiling water for at least 15 minutes, 2-3 times a day.' },
      { method: 'Powder / Seeds', instruction: 'Consume ½ to 1 teaspoon of powder or seeds up to 3 times a day, mixed into water, juice, or food.' },
      { method: 'Tincture', instruction: 'Take 1-2 mL three times a day (check package directions for specific concentration).' },
    ],
    suitableAgeGroups: [
      { group: 'Adults (18-65+ years)', notes: 'Primary users for lactation support, diabetes management, and testosterone support.' },
      { group: 'Older Men (40+ years)', notes: 'Used to address declining testosterone levels.' },
      { group: 'Women for Lactation', notes: 'Used by lactating women to boost milk supply. Leaves only recommended: avoid bark and root.' },
      { group: 'Children (Small Amounts)', notes: 'Considered safe in amounts found in food. Insufficient evidence for large amounts; may cause unusual maple syrup body odors.' },
    ],
    dosage: {
      standard: 'Typical lactation dosage: 3,500-7,300 mg per day in divided doses.',
      forms: [
        { form: 'Capsules', dose: '2-3 capsules (approx. 500-600 mg each) three times daily (total 6-12 capsules/day).' },
        { form: 'Powder', dose: '2-3 teaspoons daily (total 1-6 g powdered seed daily).' },
        { form: 'Tea', dose: '1-3 cups daily of 15-minute steeped infusion.' },
      ],
    },
    overdose: {
      symptoms: [
        'Gastrointestinal issues: nausea, diarrhea, and gas.',
        'Hypoglycemia: can lower blood sugar levels significantly.',
        'Allergic reactions: cross-reactivity in people allergic to chickpeas, peanuts, or legumes.',
        'Effect on infant: gastrointestinal upset, fussiness, or maple syrup-like odor in urine/sweat when mother consumes high doses.',
      ],
      management: [
        'Immediately discontinue all fenugreek supplements.',
        'Monitor for signs of low blood sugar (dizziness, nausea, tremor).',
        'Ensure adequate fluid intake, especially if diarrhea is present.',
        'Consult a healthcare provider if symptoms are severe, particularly for allergic reactions.',
      ],
    },
    sideEffects: [
      'Gastrointestinal distress (up to 45% of users): diarrhea, loose stools, nausea, vomiting, gas, abdominal pain',
      'Maple syrup-like odor in sweat, urine, breast milk, and sometimes in the baby',
      'Baby sensitivity: possible fussiness, upset tummy, or green watery stools in breastfed infants',
      'Reduced blood sugar (monitor closely in diabetics)',
      'Allergic reactions/asthma exacerbation especially with legume allergies',
    ],
    contraindications: [
      'Pregnancy: strictly contraindicated in therapeutic doses; has oxytocic/uterine stimulant effects that may cause miscarriage or premature labor',
      'Asthma: may exacerbate asthma symptoms',
      'Diabetes/Hypoglycemia: blood sugar must be strictly monitored; anti-diabetic medication doses may need adjustment',
      'Thyroid dysfunction: may interfere with thyroid hormone function',
      'Allergies to legumes, peanuts, or chickpeas: cross-reaction possible',
    ],
    drugInteractions: [
      'Warfarin and anticoagulants: may increase risk of bleeding due to coumarin derivatives',
      'Anti-diabetic drugs (metformin, insulin): potentiates hypoglycemic effects',
      'Antidepressants: potential interactions reported',
    ],
    storage: {
      forms: [
        { form: 'Whole Seeds & Powder', instructions: 'Store in an airtight container in a dry, dark, and cool environment to prevent staleness and loss of therapeutic properties.' },
        { form: 'Brewed Tea', instructions: 'Store in the refrigerator for up to a few days (similar to iced tea).' },
        { form: 'Capsules & Supplements', instructions: 'Store at room temperature (68-72°F/20-22°C). Avoid excessive humidity and temperature extremes. Once opened, consume within 12 months. Shelf life 18-24 months properly stored.' },
      ],
    },
    marketedProducts: [
      { name: 'ZARY Fenugreek Seeds 150g', image: '/images/Picture32.jpg' },
      { name: 'Al-Radhi Fenugreek Dry (حلبة جافة)', image: '/images/Picture33.jpg' },
      { name: 'Fresh Fenugreek Plant', image: '/images/Picture35.jpg' },
    ],
    benefits: [
      { icon: 'child_care', title: 'Boosts Milk Supply', desc: 'Increases prolactin and oxytocin secretion; some studies report up to 400 mL/day increase in milk volume during early postpartum days.' },
      { icon: 'favorite', title: 'Hormonal Support', desc: 'Diosgenin mimics estrogen, supporting mammary gland development and milk synthesis pathways.' },
      { icon: 'nutrition', title: 'Nutrient-Rich', desc: 'Provides iron, calcium, and vitamins A and B to rebuild maternal nutrient stores depleted during lactation.' },
    ],
    botanicalFacts: {
      family: 'Fabaceae (Leguminosae)',
      nativeRegion: 'Mediterranean region, South Asia, Western Asia; widely cultivated in India, Egypt, and the Middle East',
      growthHabit: 'Annual herb growing 30-60 cm tall with trifoliate leaves and small white/yellow flowers; seeds harvested from pods',
      activeCompounds: 'Diosgenin, galactomannan, 4-hydroxyisoleucine, trigonelline, sotolon, quercetin',
      cultivationNotes: 'Seeds are the medicinal part; harvested when pods dry; widely used as a culinary spice throughout South Asia and the Middle East',
    },
    preparation: [
      { method: 'Capsules/Tablets', desc: '2-3 capsules (500-600 mg) three to four times daily: most convenient and consistent dose.', bestFor: 'Lactation support, consistent therapeutic dosing' },
      { method: 'Seed Tea', desc: 'Steep 1 tsp seeds in boiling water for 15 minutes; consume 2-3 cups daily.', bestFor: 'Lactation, digestive support' },
      { method: 'Culinary Use', desc: 'Add seeds to food or sprinkle powder into smoothies, yogurt, or soups.', bestFor: 'Nutritional supplementation, gradual lactation support' },
    ],
    symptoms: ['Low milk supply', 'Postpartum fatigue', 'Nutritional deficiency during lactation'],
    relatedPlants: ['fennel-breastfeeding', 'moringa-breastfeeding'],
    references: [
      { text: 'National Center for Biotechnology Information — Fenugreek.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK501779/' },
      { text: 'ScienceDirect — Fenugreek and breastfeeding.', url: 'https://www.sciencedirect.com/science/article/pii/S2213398420300051' },
      { text: 'Healthline — Fenugreek for Breastfeeding: Does It Help?', url: 'https://www.healthline.com/health/breastfeeding/fenugreek-breastfeeding#dose' },
      { text: 'Avicenna Journal of Phytomedicine — Fenugreek pharmacology.', url: 'https://ajp.mums.ac.ir/article_26043_538c31701d3e67cabb73b8c9b84bf5ad.pdf' },
    ],
  },

  'fennel-breastfeeding': {
    id: 'fennel-breastfeeding',
    name: 'Fennel',
    nameAr: 'الشمر',
    latinName: 'Foeniculum vulgare Mill.',
    commonNames: ['Fennel', 'Sweet fennel', 'Common fennel'],
    category: 'womens-health',
    subcategory: 'breast-feeding',
    tags: ['Galactagogue', 'Lactation', 'Carminative', 'Phytoestrogen'],
    image: '/images/Picture36.jpg',
    shortDescription: 'A traditional galactagogue containing anethole: a phytoestrogenic compound that may increase prolactin levels, improve milk volume, and soothe infant colic through breast milk.',
    description: 'Fennel seeds contain trans-anethole (50-80% of essential oil), which acts as a phytoestrogen mimicking estrogen to support mammary gland development and may block dopamine to increase prolactin levels. Fennel also relaxes smooth muscle to improve the let-down reflex, and provides a carminative effect that may soothe infant colic when compounds pass through breast milk.',
    history: 'Fennel has been used since antiquity in Mediterranean cultures for digestive health, lactation, and menstrual support. It was used by ancient Romans for its aromatic and medicinal properties. In traditional medicine across Europe, the Middle East, and South Asia, fennel tea is a common galactagogue given to new mothers.',
    isDemo: false,
    activeConstituents: [
      { name: 'trans-Anethole (Volatile Oil)', percentage: '50-80%', effect: 'Phytoestrogen mimicking estrogen; supports mammary gland development; may block dopamine to increase prolactin; antispasmodic and carminative properties' },
      { name: 'Fenchone (Volatile Oil)', percentage: 'up to 11.68%', effect: 'Contributes to bitter taste and digestive/antispasmodic effects' },
      { name: 'Limonene, α-Pinene, Methyl Chavicol', percentage: 'minor', effect: 'Antimicrobial and aromatic support' },
      { name: 'Rosmarinic Acid, Caffeoylquinic Acid Derivatives (Phenolic)', percentage: '', effect: 'Antioxidant and anti-inflammatory activity' },
      { name: 'Flavonoids: Eriodictyol-7-rutinoside, Quercetin-3-rutinoside', percentage: '', effect: 'Antioxidant and anti-inflammatory support' },
      { name: 'Petroselinic Acid, Palmitic Acid (Fatty Acids)', percentage: '', effect: 'Nutritional fatty acid support' },
      { name: 'Calcium, Potassium, Vitamin C', percentage: '', effect: 'Nutritional minerals and vitamins' },
    ],
    moa: [
      { title: 'Phytoestrogen (Anethole)', detail: 'Fennel seeds contain anethole, which mimics estrogen and supports mammary gland development for milk production.' },
      { title: 'Dopamine Inhibition', detail: 'Anethole may block dopamine, which normally suppresses prolactin secretion: leading to higher prolactin levels and increased milk production.' },
      { title: 'Prolactin & Milk Volume Enhancement', detail: 'May increase prolactin levels and overall breast milk volume through hormonal modulation.' },
      { title: 'Improved Let-Down Reflex', detail: 'Relaxes smooth muscles, helping milk flow more easily during feeding.' },
      { title: 'Milk Quality Enhancement', detail: 'May slightly increase the fat content of breast milk in some studies.' },
    ],
    uses: [
      'Milk production support: believed to increase breast milk volume and improve fat content',
      'Infant colic relief: anethole passes through breast milk, helping soothe baby digestion and reduce colic symptoms',
      'Maternal digestion: helps new mothers with bloating and constipation',
      'Nutrient boost: provides Vitamin C, Vitamin A, and iron',
    ],
    howToUse: [
      { method: 'Fennel Tea (Most Common)', instruction: 'Steep 1-3 teaspoons of crushed fennel seeds in 8 ounces of boiling water for 10-20 minutes. Cover the cup while steeping to prevent beneficial volatile oils from escaping. Drink 1-3 cups per day.' },
      { method: 'Seed Consumption', instruction: 'Chew on 1 teaspoon of fennel seeds after meals, up to 3 times a day, to aid digestion and support lactation.' },
      { method: 'Culinary Uses', instruction: 'Add crushed seeds to soups, salads, curries, or roasted vegetables for a light anise-like flavor and nutritional benefit.' },
      { method: 'Lactation Blends', instruction: 'Choose teas that combine fennel with other herbs like fenugreek or nettle for synergistic lactation support.' },
    ],
    suitableAgeGroups: [
      { group: 'Infants (2-12 weeks)', notes: 'Fennel seed oil emulsions used for alleviating colic: under medical supervision only.' },
      { group: 'Adolescents and Young Adults (13-21 years)', notes: 'Used for primary dysmenorrhea; studies involve oral fennel drops.' },
      { group: 'Adults: Women of Reproductive Age', notes: 'Used for PMS, hirsutism, and general digestive health.' },
      { group: 'Menopausal Women (40-60+)', notes: 'Used to reduce hot flashes, improve sleep quality, and manage bone density.' },
      { group: 'Lactating Women', notes: 'Primary use group; 1-3 cups of tea or 500-1,000 mg capsules 2-3 times daily.' },
    ],
    dosage: {
      standard: 'Tea/Seeds: 1-3 cups of tea per day or roughly 1 teaspoon of seeds 3 times daily. Capsules: 500-1,000 mg taken 2-3 times daily.',
      forms: [
        { form: 'Fennel Seed Tea', dose: '1-3 cups daily of 10-20 minute infusion of 1-3 teaspoons crushed seeds.' },
        { form: 'Capsules (seed powder)', dose: '500-1,000 mg, taken 2-3 times daily.' },
        { form: 'Whole Seeds', dose: '1 teaspoon chewed after meals, up to 3 times daily.' },
      ],
    },
    overdose: {
      symptoms: [
        'Infant sensitivities: Rare, but high maternal intake may lead to infant lethargy, fatigue, or signs of toxicity from anethole.',
        'Allergic reactions: Cross-reactivity with celery, carrots, coriander (Apiaceae family: celery-carrot-mugwort syndrome).',
        'Maternal digestive issues: Diarrhea and gastrointestinal disturbances.',
        'Hormonal effects: Estrogen-like properties may worsen hormone-sensitive conditions.',
        'Rare: Elevated liver enzymes with high-dose herbal blends containing fennel.',
      ],
      management: [
        'Stop all fennel-based products immediately.',
        'Contact a doctor or pediatrician immediately if infant shows signs of lethargy, vomiting, or excessive sleepiness.',
        'Monitor infant for lethargy, vomiting, and low muscle tone.',
        'Avoid concentrated fennel essential oil while breastfeeding.',
      ],
    },
    sideEffects: [
      'Infant lethargy/toxicity: Excessive maternal use (multiple liters of concentrated tea daily) can cause toxicity in infants via anethole in breast milk',
      'Maternal digestive issues ',
      'Allergic reactions in Apiaceae-sensitive individuals (skin rash, breathing issues)',
      'Rare: Increased liver enzymes with heavy use',
    ],
    contraindications: [
      'Pregnancy: strictly contraindicated in therapeutic doses; emmenagogue effects and may cause uterine contractions',
      'Allergies to Apiaceae family plants (celery, carrots, mugwort, coriander)',
      'Hormone-sensitive conditions: estrogen-sensitive cancers (breast, uterine, ovarian), endometriosis, or uterine fibroids',
      'Epilepsy: fennel essential oil can lower the seizure threshold',
    ],
    drugInteractions: [
      'Antibiotics (Ciprofloxacin): fennel minerals can chelate with the antibiotic, reducing its absorption; separate by at least 2 hours',
      'Anticoagulants: may slow blood clotting, causing issues for those with bleeding disorders',
    ],
    storage: {
      forms: [
        { form: 'Fennel Seeds', instructions: 'Store in an airtight glass jar in a cool, dark, dry place. Properly stored, dried seeds remain potent for 6-12 months. Lightly crush just before steeping to release volatile oils.' },
        { form: 'Fresh Fennel Bulb/Fronds', instructions: 'Store in a sealed plastic bag in the vegetable crisper. Fresh fennel lasts up to one week in the fridge.' },
      ],
    },
    marketedProducts: [
      { name: 'ISIS Fennel Tea Bags (شمر)', image: '/images/Picture39.jpg' },
      { name: 'Noreeca Fennel Tea (شمر)', image: '/images/Picture40.jpg' },
      { name: 'Fennel Seeds', image: '/images/Picture37.jpg' },
      { name: 'Fennel Tea & Bulb', image: '/images/Picture38.jpg' },
    ],
    benefits: [
      { icon: 'child_care', title: 'Milk Supply Support', desc: 'Anethole phytoestrogen and potential prolactin-boosting action support breast milk volume and quality.' },
      { icon: 'child_friendly', title: 'Infant Colic Relief', desc: 'Anethole passes through breast milk to soothe infant digestive discomfort and reduce colic crying.' },
    ],
    botanicalFacts: {
      family: 'Apiaceae (Umbelliferae)',
      nativeRegion: 'Mediterranean region; widely naturalized in Europe, Asia, and the Americas',
      growthHabit: 'Tall aromatic perennial herb reaching 1.5-2.5 m with feathery leaves and yellow flower umbels; seeds and bulb both used',
      activeCompounds: 'trans-Anethole (50-80%), fenchone, limonene, rosmarinic acid, quercetin-3-rutinoside',
      cultivationNotes: 'Seeds harvested in late summer when umbels mature; dried seeds are the medicinal part used in teas and capsules',
    },
    preparation: [
      { method: 'Seed Tea', desc: 'Steep 1-3 tsp crushed seeds in boiling water for 10-20 minutes (covered).', bestFor: 'Lactation support, infant colic (via breast milk), digestive comfort' },
      { method: 'Capsules', desc: '500-1,000 mg seed powder capsules taken with meals.', bestFor: 'Consistent lactation dosing, dysmenorrhea' },
      { method: 'Culinary Incorporation', desc: 'Add to soups, salads, or roasted vegetables.', bestFor: 'Nutritional supplementation, mild digestive support' },
    ],
    symptoms: ['Low milk supply', 'Infant colic', 'Bloating', 'Menstrual pain', 'Digestive discomfort'],
    relatedPlants: ['fenugreek-breastfeeding', 'moringa-breastfeeding'],
    references: [
      { text: 'PubMed Central — Fennel and lactation.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4137549/' },
      { text: 'Milky Mama — Does Fennel Tea Increase Milk Supply?', url: 'https://milky-mama.com/blogs/milk-supply-guide/does-fennel-tea-increase-milk-supply-a-guide-for-breastfeeding-moms' },
      { text: 'National Center for Biotechnology Information — Fennel.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK501793/' },
      { text: 'Breastfeeding Network — Increasing Milk Supply.', url: 'https://www.breastfeedingnetwork.org.uk/factsheet/increasing-milk-supply-use-of-galactagogues/' },
      { text: 'Healthline — Fennel Tea Benefits.', url: 'https://www.healthline.com/health/fennel-tea' },
      { text: 'Latchette — The Magic of Fennel for Breastfeeding Mums.', url: 'https://latchette.com/blogs/blog-posts/the-magic-of-fennel-for-breastfeeding-mums' },
      { text: 'Mount Sinai — Fennel.', url: 'https://www.mountsinai.org/health-library/herb/fennel' },
      { text: 'MedlinePlus — Herbal Information.', url: 'https://medlineplus.gov/druginfo/herb_all.html' },
      { text: 'European Medicines Agency (EMA). (2016). European Union herbal monograph on Foeniculum vulgare Miller, fructus. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). (2007). WHO Monographs on Selected Medicinal Plants (Vol. 3). Geneva.' },
      { text: 'Badgujar, S. B., et al. (2014). Foeniculum vulgare Mill: A review of its botany, phytochemistry, pharmacology, contemporary application, and toxicology. BioMed Research International, 2014.' },
    ],
  },

  'moringa-breastfeeding': {
    id: 'moringa-breastfeeding',
    name: 'Moringa',
    nameAr: 'مورينجا',
    latinName: 'Moringa oleifera Lam.',
    commonNames: ['Moringa', 'Drumstick tree', 'Miracle tree'],
    category: 'womens-health',
    subcategory: 'breast-feeding',
    tags: ['Galactagogue', 'Lactation', 'Superfood', 'Nutrient-Dense'],
    image: '/images/Picture15.jpg',
    shortDescription: 'A nutrient-dense "miracle tree" whose leaves significantly boost breast milk volume and quality through prolactin stimulation and exceptional nutritional richness, with some studies reporting up to 400 mL/day increase.',
    description: 'Moringa oleifera acts through multiple pathways to enhance lactation: increasing serum prolactin levels (primary hormone for milk production), stimulating alveolar cell activity in mammary glands, and providing dense nutritional support (protein, iron, calcium, vitamins A/B/C/E). Its phytosterols (β-sitosterol, stigmasterol) and isothiocyanates provide anti-inflammatory and immune-supportive effects that benefit both mother and infant. IMPORTANT: Only LEAVES are recommended for breastfeeding: bark, roots, and flowers contain dangerous alkaloids.',
    history: 'Native to South Asia, moringa has been used in Ayurvedic, African, and Asian traditional medicine for centuries as a "miracle tree" due to its exceptional nutritional profile. It has been used in traditional postpartum care across India, the Philippines, and African countries to support maternal nutrition and milk production.',
    isDemo: false,
    activeConstituents: [
      { name: 'β-sitosterol, Stigmasterol, Campesterol (Phytosterols)', percentage: '', effect: 'Support hormonal pathways for milk production; anti-inflammatory properties' },
      { name: 'Quercetin, Kaempferol (Flavonoids)', percentage: '', effect: 'Potent antioxidants; anti-inflammatory effects that assist milk synthesis' },
      { name: 'Saponins', percentage: '', effect: 'Promote prolactin and milk production pathways' },
      { name: 'Phenolic Acids', percentage: '', effect: 'Antioxidant and cellular protective effects in mammary tissue' },
      { name: 'Essential Amino Acids and Proteins (Lysine, Tryptophan)', percentage: '', effect: 'Essential for milk protein production' },
      { name: 'Iron & Calcium', percentage: '', effect: 'Supports maternal recovery and boosts milk nutrient density' },
      { name: 'Vitamins A, C, E', percentage: '', effect: 'Antioxidants that help with general metabolic support and immune function' },
      { name: 'Isothiocyanates', percentage: '', effect: 'Provide anti-inflammatory effects that may assist in the overall process of milk synthesis' },
    ],
    moa: [
      { title: 'Prolactin Boost', detail: 'Increases serum prolactin levels: the primary hormone responsible for producing breast milk.' },
      { title: 'Mammary Gland Stimulation', detail: 'Boosts the development and activity of alveolar cells in the mammary glands.' },
      { title: 'Nutritional Support', detail: 'Provides the necessary nutrients (protein, iron, calcium) required for high-quality milk production.' },
      { title: 'Anti-inflammatory Effects', detail: 'Reduces oxidative stress in the mammary tissue, supporting optimal milk synthesis environment.' },
    ],
    uses: [
      'Boosts milk volume: studies indicate moringa can significantly increase milk supply, especially in early postpartum days (days 3-7), with some reporting up to 400 mL/day increase',
      'Raises prolactin levels: stimulates the hormone responsible for milk production',
      'Nutrient-dense nutrition: rich in iron, calcium, and vitamins (A, B); helps rebuild maternal nutrient stores',
      'Immune support for infants (via breast milk)',
      'Blood sugar and blood pressure management in older adults (50+)',
      'Joint inflammation reduction and eye health support',
    ],
    howToUse: [
      { method: 'Capsules', instruction: 'Capsules containing moringa leaf powder are a common, easy way to ensure a consistent dosage.' },
      { method: 'Powder', instruction: 'Moringa powder can be mixed into smoothies, yogurt, or soups.' },
      { method: 'Tea', instruction: 'Steeped moringa tea is another traditional method for lactation support.' },
      { method: 'Food Source', instruction: 'Fresh leaves can be cooked in dishes similar to spinach.' },
    ],
    suitableAgeGroups: [
      { group: 'Infants and Young Children (6 months to 5 years)', notes: 'As a nutritional supplement in food amounts only.' },
      { group: 'Children and Adolescents (6-18 years)', notes: 'Supports immunity, muscle growth, and brain development. Often added to juices and smoothies.' },
      { group: 'Young Adults and Adults (19-50 years)', notes: 'Provides natural energy, stress balance, iron levels, and breast milk production support.' },
      { group: 'Lactating Women', notes: 'Using LEAVES ONLY: roots, bark, and flowers are strictly contraindicated.' },
      { group: 'Older Adults (50+)', notes: 'Helps manage blood sugar and blood pressure, reduces joint inflammation, and supports eye health.' },
    ],
    dosage: {
      standard: 'Powder: 1 teaspoon to 1 tablespoon per day (morning and midday doses). Capsules/Tablets: 1-2 twice a day. Leaves (raw): up to 1 cup fresh leafy greens equivalent.',
      forms: [
        { form: 'Leaf Powder', dose: '1 tsp to 1 tbsp per day, split into morning and midday doses.' },
        { form: 'Capsules / Tablets', dose: '1-2 capsules twice daily.' },
        { form: 'Raw Fresh Leaves', dose: 'Up to 1 cup equivalent daily, cooked or in salads.' },
        { form: 'Tea', dose: '1-2 cups daily of steeped moringa leaf tea.' },
      ],
    },
    overdose: {
      symptoms: [
        'Gastrointestinal distress: Diarrhea, nausea, vomiting (high fiber and laxative nature).',
        'Liver/kidney dysfunction: High doses can cause cellular damage to liver and kidney tissues.',
        'Cutaneous toxicity: Severe skin rashes (urticaria), erythematous papules, necrotic keratinocytes.',
        'Hypotension: Dangerously low blood pressure.',
        'Hypoglycemia: Extremely low blood sugar if taken alongside diabetes medication.',
        'Neurological/Systemic: Possible nerve damage and severe fatigue.',
      ],
      management: [
        'Immediately discontinue all moringa-based products.',
        'Symptomatic treatment: antihistamines for skin rashes, remedies for gastric distress.',
        'Supportive care: stay hydrated to manage diarrhea.',
        'Medical assessment if severe liver enzyme changes (elevated AST, ALT, ALP) occur.',
      ],
    },
    sideEffects: [
      'Digestive issues: stomach upset, gas, diarrhea, nausea with large amounts',
      'Pregnancy risks: Bark and roots cause uterine contractions: strict avoidance required (LEAVES only are safe)',
      'Blood pressure/sugar issues: Can cause hypotension or hypoglycemia if taken with corresponding medications',
      'Liver/kidney concerns: Long-term high consumption may adversely affect liver and kidney function (some studies)',
    ],
    contraindications: [
      'Pregnancy: strictly contraindicated. Bark, root, and high doses of leaves may trigger uterine contractions (Moringa LEAVES are highly recommended during breastfeeding, but roots/bark remain strictly forbidden)',
      'Pre-existing kidney/liver conditions: high doses can stress these organs',
      'Hypotension: those with already low blood pressure should avoid it',
      'NEVER consume moringa root, bark, or flowers: contain dangerous alkaloid spirochin and other toxins',
    ],
    drugInteractions: [
      'Diabetes drugs (sitagliptin, metformin): may lead to excessive blood sugar lowering (hypoglycemia)',
      'Thyroid medication (Levothyroxine): may disrupt thyroid function regulation',
      'Blood pressure medicine: moringa can further lower blood pressure; risk of severe hypotension',
      'Liver-processed drugs: can interfere with cytochrome P450 enzymes',
    ],
    storage: {
      forms: [
        { form: 'Powder Form', instructions: 'Store in a cool, dark, dry place in an airtight container. High heat destroys delicate vitamins and enzymes: do not store near a stove or in direct sunlight.' },
        { form: 'Dried Leaves', instructions: 'Store in sealed, opaque/airtight containers to avoid degradation from light and humidity. Properly dried, can last several years.' },
        { form: 'Capsules', instructions: 'Store in a cool, dry place away from humidity and temperature extremes.' },
      ],
    },
    marketedProducts: [
      { name: 'ISIS Moringa Tea Bags', image: '/images/Picture13.jpg' },
      { name: 'Go-Lacta Organic Moringa Capsules 180', image: '/images/Picture14.jpg' },
      { name: 'Organic Nation Moringa Antioxidant 60 Capsules', image: '/images/Picture16.jpg' },
      { name: 'Moringa Powder & Tea Preparation', image: '/images/Picture17.jpg' },
    ],
    benefits: [
      { icon: 'child_care', title: 'Boosts Milk Volume', desc: 'Increases serum prolactin and stimulates mammary alveolar cells: studies report up to 400 mL/day increase in early postpartum.' },
      { icon: 'nutrition', title: 'Exceptional Nutrition', desc: 'Rich in protein, iron, calcium, and vitamins A/B/C/E: rebuilds maternal nutrient stores depleted during lactation.' },
      { icon: 'shield', title: 'Immune Support', desc: 'Antioxidant flavonoids and anti-inflammatory isothiocyanates benefit both mother and infant.' },
      { icon: 'favorite', title: 'Maternal Recovery', desc: 'Supports blood sugar, blood pressure, and reduces oxidative stress in mammary tissue.' },
    ],
    botanicalFacts: {
      family: 'Moringaceae',
      nativeRegion: 'Sub-Himalayan regions of northwestern India; widely cultivated throughout the tropics',
      growthHabit: 'Fast-growing tree reaching 10-12 m; drought-resistant; compound leaves, white flowers, and long seed pods ("drumsticks")',
      activeCompounds: 'β-sitosterol, quercetin, kaempferol, isothiocyanates, iron, calcium, vitamins A/B/C/E',
      cultivationNotes: 'One of the most nutritionally dense plants known. Leaves harvested year-round in tropical climates. ONLY leaves are safe for breastfeeding: never use bark, roots, or flowers',
    },
    preparation: [
      { method: 'Leaf Powder in Food', desc: 'Mix 1 tsp-1 tbsp moringa powder into smoothies, yogurt, or soups.', bestFor: 'Daily lactation support, nutritional supplementation' },
      { method: 'Capsules', desc: '1-2 capsules twice daily for consistent dosing.', bestFor: 'Convenient lactation support with precise dosing' },
      { method: 'Fresh Leaves (Cooked)', desc: 'Cooked like spinach in local dishes.', bestFor: 'Culinary integration, nutritional boost' },
    ],
    symptoms: ['Low milk supply', 'Postpartum fatigue', 'Nutritional deficiency', 'Anemia during lactation'],
    relatedPlants: ['fenugreek-breastfeeding', 'fennel-breastfeeding'],
    references: [
      { text: 'PubMed Central — Moringa oleifera and lactation.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9684698/' },
      { text: 'PubMed Central — Moringa nutritional composition.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12294722/' },
      { text: 'National Center for Biotechnology Information — Moringa.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK501899/' },
      { text: 'PubMed Central — Moringa oleifera health benefits.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8373516/' },
      { text: 'Actas Dermosifiliográficas — Cutaneous toxicity due to Moringa oleifera.', url: 'https://www.actasdermo.org/en-cutaneous-toxicity-due-moringa-oleifera-articulo-S1578219021002596' },
      { text: 'Cleveland Clinic — Moringa Benefits.', url: 'https://health.clevelandclinic.org/moringa-benefits' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // WOMEN'S HEALTH › MENSTRUAL HEALTH
  // ══════════════════════════════════════════════════════════════════════

  'ginger-menstrual': {
    id: 'ginger-menstrual',
    name: 'Ginger',
    nameAr: 'الزنجبيل',
    latinName: 'Zingiber officinale',
    commonNames: ['Ginger'],
    category: 'womens-health',
    subcategory: 'menstrual-health',
    tags: ['Analgesic', 'Anti-emetic', 'Anti-inflammatory', 'Dysmenorrhea', 'Menstrual Health'],
    image: '/images/Picture29.jpg',
    shortDescription: 'A biochemical analgesic whose Gingerols and Shogaols act as dual COX/LOX inhibitors — clinically proven to rival Ibuprofen (400 mg) and Mefenamic Acid (Ponstan 250 mg) for Primary Dysmenorrhea relief, while peripheral 5-HT3 antagonism provides potent anti-emetic effects.',
    description: 'The therapeutic efficacy of the ginger rhizome is driven by its active secondary metabolites. Gingerols are abundant in fresh ginger and primarily responsible for anti-emetic effects, while possessing baseline analgesic and anti-inflammatory activities. Shogaols are formed via drying or heating and are 3 times more potent than gingerols in inhibiting inflammatory markers, while working synergistically to enhance anti-emetic efficacy. Volatile Oils such as Zingiberene are responsible for the characteristic aromatic scent.',
    isDemo: false,
    activeConstituents: [
      { name: 'Gingerols', percentage: '', effect: 'Abundant in fresh ginger; primarily responsible for anti-emetic effects, while possessing baseline analgesic and anti-inflammatory activities.' },
      { name: 'Shogaols', percentage: '', effect: 'Formed via drying or heating; 3 times more potent than gingerols in inhibiting inflammatory markers, while working synergistically to enhance anti-emetic efficacy.' },
      { name: 'Volatile Oils (e.g., Zingiberene)', percentage: '', effect: 'Responsible for the characteristic aromatic scent.' },
    ],
    moa: [
      { title: 'For Pain Relief (Analgesic)', detail: 'Acts as a dual inhibitor of the Cyclooxygenase (COX-1 & COX-2) and Lipoxygenase (5-LOX) enzymes. This reduces the production of Prostaglandins and Leukotrienes, the primary chemical mediators of pain and severe uterine contractions.' },
      { title: 'For Nausea (Anti-emetic)', detail: 'Functions primarily via localized peripheral mechanisms within the gastrointestinal tract. The active lipophilic constituents (specifically 6-gingerol and 6-shogaol) exhibit competitive antagonism at peripheral Serotonin (5-HT3) and muscarinic receptors. This action effectively suppresses vagal afferent stimulation, modulates gastric dysrhythmia, and accelerates gastric emptying, thereby neutralizing peripheral emetic signaling without exerting central nervous system depression.' },
    ],
    uses: [
      'Primary Dysmenorrhea: Relief of Menstrual Pain and Cramping. Clinical studies confirm that its efficacy in pain relief is comparable to Ibuprofen (400 mg) and Mefenamic Acid (Ponstan 250 mg).',
      'Nausea & Vomiting: Nausea associated with menstruation and menstrual cramps (dysmenorrhea), morning sickness, motion sickness, and post-operative nausea.',
    ],
    howToUse: [
      { method: 'Aqueous Infusion', instruction: 'Infuse the ginger in hot water (covered) for 10 minutes. It is highly recommended to consume the remaining sediment; it is a rich source of Shogaols and essential oils trapped within the plant fibers. Consume with food to minimize irritation to the gastric mucosa.' },
    ],
    suitableAgeGroups: [
      { group: 'Females (Adolescents & Adults)', notes: 'For dysmenorrhea management.' },
      { group: 'Travelers, Athletes, and Elderly', notes: 'For motion sickness and inflammatory joint/muscle pain.' },
      { group: 'Pediatrics', notes: 'Not recommended for children under 6 years of age.' },
      { group: 'Pregnancy', notes: 'Avoided and contraindicated during pregnancy according to the Egyptian Drug Authority (EDA) guidelines.' },
      { group: 'Lactation', notes: 'Safety during lactation has not been established. In the absence of sufficient data, the use during lactation is not recommended.' },
    ],
    dosage: {
      standard: 'Timeline: Start consumption 2 days prior to the expected period and continue through the first 3 days of menstruation. ',
      forms: [
        { form: 'Powdered Ginger (Dried Extract)', dose: '500 mg to 1000 mg (1 g) per single dose (approx. 1/4 to 1/2 flat teaspoon), taken 2 to 3 times daily. Do not exceed a daily limit of 3 grams per day.' },
        { form: 'Fresh Ginger (Rhizome)', dose: '2 to 3 grams per single dose (approx. 1 level teaspoon of finely grated ginger), taken 3 to 4 times daily. Do not exceed a daily limit of 10 grams per day.' },
      ],
    },
    overdose: {
      intro: 'Acute Overdose Thresholds: Powdered Ginger: Consumption of more than 5 grams per day. Fresh Ginger: Consumption of more than 20–25 grams per day.',
      symptoms: [
        'Severe gastrointestinal irritation or "heartburn".',
        'Increased risk of bleeding (due to potent inhibition of thromboxane).',
        'Hypotension and central nervous system depression (in extreme cases).',
        'Severe oral mucosal irritation.',
      ],
      management: [
        'Immediate cessation of ginger intake.',
        'Administration of oral antacids or cold milk to soothe the esophageal and gastric lining.',
        'Monitoring for any signs of prolonged bleeding time.',
      ],
    },
    sideEffects: [
      'Heartburn and spicy-tasting eructation (burping).',
    ],
    contraindications: [
      'Patients with gallstones.',
      'Patients on anticoagulant therapy .',
      'Major pre-operative states (must be discontinued 14 days prior to major surgery).',
      'Use with caution when suffering from peptic ulcer.',
    ],
    drugInteractions: [
      'Anticoagulants / Antiplatelet Drugs (e.g., Warfarin / Phenprocoumon ): Ginger might slow blood clotting. Taking ginger along with these medications might increase the risk of bruising and bleeding. Additionally, ginger may increase plasma partial prothrombin time in clients taking warfarin concurrently. Regular blood clotting parameters must be monitored.',
      'Medications for High Blood Pressure (Calcium Channel Blockers): Ginger might lower blood pressure. Taking ginger along with these medications might cause blood pressure to go too low. Blood pressure levels should be monitored closely.',
      'Nifedipine (Procardia): Taking ginger along with Nifedipine might slow blood clotting and increase the chances of bruising and bleeding. Patients using Nifedipine should monitor clotting parameters due to this dual interaction.',
      'Losartan (Cozaar): Ginger can increase how much losartan the body absorbs. Taking ginger along with losartan might increase the therapeutic effects and enhance the potential side effects of losartan.',
      'Medications for Diabetes (Antidiabetes drugs): Ginger might lower blood sugar levels. Taking ginger along with diabetes medications might cause blood sugar to drop too low (hypoglycemia). Blood sugar levels must be monitored closely.',
    ],
    storage: {
      forms: [
        { form: 'General Storage', instructions: 'Store in airtight, opaque glass containers away from moisture and direct light to maintain the stability of active compounds.' },
      ],
    },
    factsAndMyths: [
      {
        myth: '"Ginger kills the influenza virus completely and works as an instant biological cure for the common cold."',
        fact: 'Ginger does not eradicate or cure respiratory viral pathogens in vivo; instead, it acts as an exceptional supportive, evidence-based phytotherapy that significantly mitigates symptom severity, suppresses inflammatory cascades, and improves patient respiratory comfort. Additionally: Ginger is not just a "warm drink"; it is a biochemical analgesic that rivals Ibuprofen in potency when the correct dosage is followed. Note: Sweetening ginger with sugar is a "functional antagonism" that sensitizes your pain receptors and cancels out the plant\'s therapeutic benefits.',
      },
    ],
    marketedProducts: [
      { name: 'Ginger Capsules 400mg (Mepaco Pharaonia)', image: '/images/Ginger-400mg-Mepaco.jpg' },
    ],
    benefits: [
      { icon: 'spa', title: 'Dysmenorrhea Relief', desc: 'Dual COX/LOX inhibition reduces prostaglandins and leukotrienes: efficacy clinically comparable to Ibuprofen (400 mg) and Mefenamic Acid (Ponstan 250 mg) for menstrual pain.' },
      { icon: 'favorite', title: 'Anti-emetic Action', desc: 'Peripheral 5-HT3 and muscarinic receptor antagonism suppresses vagal afferent stimulation and accelerates gastric emptying without central nervous system depression.' },
      { icon: 'fitness_center', title: 'Anti-inflammatory', desc: 'Effective for joint pain (Arthritis) and muscle soreness in athletes and the elderly through dual enzyme inhibition.' },
    ],
    botanicalFacts: {
      family: 'Zingiberaceae',
      nativeRegion: 'Southeast Asia; cultivated throughout tropical regions worldwide',
      growthHabit: 'Herbaceous perennial growing from aromatic rhizomes; the rhizome is the medicinal part',
      activeCompounds: 'Gingerols (fresh), shogaols (dried/heated, 3× potency), zingiberene (volatile oil)',
    },
    preparation: [
      { method: 'Aqueous Infusion (Covered)', desc: 'Infuse fresh or dried ginger in hot water in a covered vessel for 10 minutes. Consume the sediment for maximum shogaol content.', bestFor: 'Dysmenorrhea, nausea, motion sickness' },
      { method: 'Powdered Capsules', desc: '500–1000 mg per dose, 3–4 times daily; start 2 days before period onset.', bestFor: 'Standardized dysmenorrhea management' },
    ],
    symptoms: ['Menstrual cramps', 'Primary dysmenorrhea', 'Nausea', 'Vomiting', 'Joint pain', 'Muscle soreness', 'Motion sickness'],
    relatedPlants: ['dill-seed-menstrual', 'cinnamon-menstrual', 'fennel', 'lemon'],
    references: [
      { text: 'Duke, J. A., Bogenschutz-Godwin, M. J., duCellier, J., & Duke, P. K. (2002). Handbook of Medicinal Herbs (2nd ed.). CRC Press.' },
      { text: 'Chevallier, A. (2016). Encyclopedia of Herbal Medicine (3rd ed.). DK Publishing / Penguin Random House.' },
      { text: 'Egyptian Drug Authority — Zingiber officinale monograph.', url: 'https://edaegypt.gov.eg/media/2kuczzhq/zingiber-officinale-roscoe-%DA%86%D9%86%D8%B2%D9%86%D8%A8%D9%8A%D9%84.pdf' },
      { text: 'Ginger - Uses, Side Effects, and More', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-961/ginger?hl=ar-EG#precautions' },
    ],
  },

  'dill-seed-menstrual': {
    id: 'dill-seed-menstrual',
    name: 'Dill Seed',
    nameAr: 'الشبت',
    latinName: 'Anethum graveolens L.',
    commonNames: ['Dill', 'Shabat'],
    category: 'womens-health',
    subcategory: 'menstrual-health',
    tags: ['Spasmolytic', 'Dysmenorrhea', 'Carminative', 'Menstrual Health'],
    image: '/images/Picture51.png',
    shortDescription: 'Dill SEEDS are the officially recognized medicinal part. They contain essential oils rich in the bioactive compound Carvone, which acts as a potent spasmolytic. Clinical studies suggest that dill seed extract can help provide primary dysmenorrhea relief due to its smooth muscle relaxant properties.\n' +
        '​The pharmaceutical efficacy of dill is heavily concentrated in its SEEDS. While dill leaves are primarily used for culinary purposes, the seeds yield a highly potent essential oil. Dill seed oil is characterized by a rich content of Carvone, which serves as the key bioactive molecule for spasmolytic activity. It acts by modulating intracellular calcium availability and blocking voltage-dependent calcium influx in the smooth muscles of both the uterus and the gastrointestinal tract, effectively relieving severe cramping and colic. Clinical trials suggest that its efficacy in alleviating the pain of primary dysmenorrhea is highly promising.',
    history: 'Dill has been used medicinally for thousands of years: mentioned in the Ebers Papyrus of ancient Egypt (1550 BC) and by Roman physicians. The word "dill" derives from the old Norse word "dylla" meaning to soothe or lull. It has historically been the primary ingredient in traditional "gripe water" for infant colic.',
    isDemo: false,
    activeConstituents: [
      { name: 'Carvone (Primary Essential Oil)', percentage: 'up to 60%', effect: 'Key bioactive molecule for smooth muscle spasmolytic relief; carminative activity' },
      { name: 'Limonene (Secondary Essential Oil)', percentage: '', effect: 'Antioxidant and hepatic enzyme inducer; secondary antibacterial properties' },
      { name: 'α-Phellandrene (Secondary Essential Oil)', percentage: '', effect: 'Provides secondary antibacterial properties' },
    ],
    moa: [
      { title: 'Spasmolytic & Antispasmodic Activity', detail: 'Exhibits direct smooth muscle relaxant and spasmolytic effects. Acts by modulating intracellular calcium availability and blocking voltage-dependent calcium influx, effectively mitigating severe contractions or colic.' },
      { title: 'Carminative Effect', detail: 'Volatile essential oils (primarily Carvone) stimulate gastrointestinal motility and induce localized relaxation of the lower esophageal sphincter (LES). This spasmolytic action facilitates the rapid expulsion of trapped gas, relieving debilitating flatulence or bloating.' },
      { title: 'Antimicrobial Action', detail: 'Documented in vitro bacteriostatic and antiseptic efficacy against common intestinal pathogens, specifically E. coli and Staphylococcus species.' },
    ],
    uses: [
      'Primary dysmenorrhea: relief of severe menstrual cramps and uterine spasms; comparable to Mefenamic Acid (Ponstan)',
      'Gastroenterology support: functional dyspepsia, acute gastritis, flatulent colic, and generalized stomachaches',
      'Pediatric care: historical "gold standard" for infantile colic (primary active ingredient in traditional Gripe Water)',
    ],
    howToUse: [
      { method: 'Aqueous Infusion (Dill Seed Tea)', instruction: 'Infuse 1 teaspoon (approximately 3 g) of CRUSHED seeds in 200-250 mL of boiling water in a strictly COVERED vessel for 10 minutes to prevent escape of volatile carvone.' },
      { method: 'Adult Dry Powder', instruction: '3 grams of dried powder administered daily in divided doses.' },
      { method: 'Adult Concentrated Pure Essential Oil', instruction: '0.05-2 mL (or 0.1-0.3 g) total daily, strictly divided into 3 distinct doses per day.' },
    ],
    suitableAgeGroups: [
      { group: 'Pediatrics (<12 months)', notes: 'Safe and effective only in the form of diluted Dill Water for infantile colic. However, pure concentrated essential oil is strictly contraindicated and must never be given to infants.' },
      { group: 'Pregnancy', notes: 'STRICTLY PROHIBITED AND CONTRAINDICATED: classified medically as an abortifacient and potent emmenagogue; can stimulate severe uterine contractions, risking miscarriage or fetal demise.' },
      { group: 'Lactation', notes: 'Egyptian Drug Authority (EDA) advises strict caution: insufficient clinical safety data regarding infant\'s exposure via breast milk despite traditional galactagogue use.' },
      { group: 'Adults', notes: 'Safe for adults at recommended doses for dysmenorrhea and digestive complaints.' },
    ],
    dosage: {
      standard: 'Dill Seed Tea: 1 tsp crushed seeds per 200-250 mL boiling water (covered), 10 min infusion. Dry Powder: 3 g daily in divided doses.',
      forms: [
        { form: 'Crushed Seed Tea', dose: '1 tsp (~3 g) crushed seeds per 200-250 mL covered boiling water, 10 min; drink 2-3 times daily.' },
        { form: 'Dry Powder', dose: '3 g total daily in divided doses.' },
        { form: 'Essential Oil (pharmaceutical)', dose: '0.05-2 mL daily, strictly divided into 3 doses.' },
      ],
    },
    overdose: {
      intro: 'Dill seeds possess an exceptionally wide safety margin, and no clinical cases of crude seed poisoning have been reported. Toxicity is only clinically relevant in cases of massive misuse of the pure essential oil (e.g., ingesting volumes exceeding 100 mL).',
      symptoms: [
        'Severe localized gastrointestinal distress, renal epithelial irritation, and profound photosensitivity.',
      ],
      management: [
        'Discontinue intake immediately.',
        'Initiate aggressive oral or intravenous hydration to protect renal function.',
        'Mandate total UV/sunlight avoidance (staying completely indoors) for a minimum of 24 hours to prevent severe phototoxic skin reactions.',
      ],
    },
    sideEffects: [
      'Generally very well tolerated at recommended doses',
      'Large doses: mild gastrointestinal distress',
      'Essential oil overdose: renal irritation, severe photosensitivity',
    ],
    contraindications: [
        'Acute Renal Inflammation: Essential oil components can cause direct epithelial irritation in the kidneys; avoid therapeutic doses completely in patients with compromised renal health.',
        'Major Pre-operative States: Discontinue all therapeutic use at least 2 weeks prior to major surgical procedures due to its systemic impact on blood glucose levels and potential interference with general anesthesia protocols.',
        'Pregnancy: STRICTLY PROHIBITED & CONTRAINDICATED. Classified medically as an Abortifacient and a potent Emmenagogue; it can stimulate severe uterine contractions, risking acute miscarriage or fetal demise.',
    ],
    drugInteractions: [
      'Antidiabetics & Antihypertensives: May exert additive effects; monitor clinical parameters closely.',
      'Hormonal Conditions: Requires close medical monitoring for individuals with pre-existing endocrine disorders due to potential structural interactions.',
    ],
    storage: {
      forms: [
        { form: 'Dill Seeds', instructions: 'Store in tightly sealed, airtight glass containers, protected completely from direct light, moisture, and high heat environments to maintain the absolute chemical stability of the active Carvone molecule.' },
      ],
    },
    factsAndMyths: [
      {
        myth: '"Dill is a completely safe galactagogue for breastfeeding mothers."',
        fact: 'While traditionally used to increase milk supply, the Egyptian Drug Authority (EDA) advises caution during lactation due to insufficient safety data regarding the infant\'s exposure via breast milk.',
      },
      {
        myth: '"Dill can replace painkillers for menstrual cramps without any monitoring."',
        fact: 'It is a potent natural alternative, but clinical monitoring is required for those with pre-existing hormonal conditions.',
      },
    ],
    marketedProducts: [
      { name: 'Gripe Water Liquid (Pharco Pharmaceuticals / Various Manufacturers — Standardized dill water for infantile colic)', image: null },
      { name: 'Sekem Dill Tea Bags', image: null },
      { name: 'Imtenan Dill Seeds (Whole dried seeds for clinical infusion)', image: null },
      { name: 'Isis Organic Dill Tea', image: null },
    ],
    benefits: [
      { icon: 'spa', title: 'Dysmenorrhea Relief', desc: 'Carvone-driven spasmolytic activity relieves severe uterine cramping: comparable in clinical trials to Mefenamic Acid .' },
      { icon: 'nutrition', title: 'Digestive Spasmolytic', desc: 'Relaxes gastrointestinal smooth muscle to relieve flatulence, dyspepsia, bloating, and stomach cramps.' },
      { icon: 'child_friendly', title: 'Infant Colic', desc: 'Historical gold standard for infantile colic: the primary active ingredient in traditional Gripe Water formulas.' },
      { icon: 'sanitizer', title: 'Antimicrobial', desc: 'Bacteriostatic against E. coli and Staphylococcus species in the gastrointestinal tract.' },
    ],
    botanicalFacts: {
      family: 'Apiaceae',
      nativeRegion: 'South and West Asia (likely Afghanistan/India); widely naturalized across Europe and the Mediterranean',
      growthHabit: 'Annual or biennial herb growing 40-60 cm tall; feathery, aromatic leaves; yellow flower umbels; seeds are the medicinal part',
      activeCompounds: 'Carvone (up to 60%), limonene, α-phellandrene: ONLY from seeds, not leaves',
      cultivationNotes: 'Dill seed oil and dill weed oil are chemically distinct: seed oil is significantly richer in carvone and constitutes the pharmaceutical standard for spasmolytic applications',
    },
    preparation: [
      { method: 'Covered Seed Tea', desc: 'Crush 1 tsp seeds IMMEDIATELY before steeping in covered boiling water for 10 minutes.', bestFor: 'Dysmenorrhea, flatulence, infantile colic, digestive cramps' },
      { method: 'Dry Powder', desc: '3 g daily in divided doses mixed with food or water.', bestFor: 'Consistent therapeutic dosing for dysmenorrhea or dyspepsia' },
    ],
    symptoms: ['Menstrual cramps', 'Bloating', 'Flatulence', 'Infant colic', 'Indigestion', 'Stomach cramps'],
    relatedPlants: ['ginger-menstrual', 'cinnamon-menstrual', 'fennel'],
    references: [
      { text: 'Duke, J. A., et al. (2002). Handbook of Medicinal Herbs (2nd ed.). CRC Press.' },
      { text: 'Chevallier, A. (2016). Encyclopedia of Herbal Medicine (3rd ed.). DK Publishing.' },
      { text: 'Egyptian Drug Authority — Anethum graveolens monograph.', url: 'https://edaegypt.gov.eg/media/kixhbxbj/anethum-graveolens-l-%D8%B4%D8%A8%D8%AA.pdf' },
      { text: 'NIT — Effect of Dill (Anethum graveolens) on the severity of primary dysmenorrhea in compared with mefenamic acid: A randomized, double-blind trial.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4115348/' },
      { text: 'NIT — Clinical trial for the management dysmenorrhea using selected spices.', url: 'https://pubmed.ncbi.nlm.nih.gov/31383440/' },
    ],
  },

  'cinnamon-menstrual': {
    id: 'cinnamon-menstrual',
    name: 'Cinnamon',
    nameAr: 'القرفة',
    latinName: 'Cinnamomum verum J. Presl (syn. C. zeylanicum)',
    commonNames: ['True Cinnamon', 'Ceylon Cinnamon'],
    category: 'womens-health',
    subcategory: 'menstrual-health',
    tags: ['Analgesic', 'Dysmenorrhea', 'Hemostatic', 'Menorrhagia', 'PCOS'],
    image: '/images/Picture53.png',
    shortDescription: 'Ceylon cinnamon (True Cinnamon, low-coumarin) is clinically proven to reduce menstrual pain (dysmenorrhea), while also regulating mild spasmodic gastrointestinal complaints, treating mild diarrhea, and treating loss of appetite.',
    description: '',
    history: 'One of the oldest known spices: traded along ancient spice routes for over 4,000 years. Mentioned in Chinese medical texts from 2700 BC, in the Ebers Papyrus (Egyptian, 1550 BC), and in the Bible. Ceylon cinnamon (from Sri Lanka) was the most prized commodity in the spice trade due to its superior quality and safety profile compared to Cassia.',
    isDemo: false,
    activeConstituents: [
      { name: 'Essential Oil ', percentage: '', effect: 'Cinnamaldehyde, methoxy-cinnamaldehyde, linalool, beta-caryophyllene, eucalyptol, eugenol, copaene, cadina-3,9-diene, cadina-4,9-diene, and 17-pentatriacontene.' },
      { name: 'Polyphenols', percentage: '', effect: 'Procyanidins: Procyanidin (A-type) trimers and tetramers.\n' +
            'Phenolic acids: Protocatechuic and cinnamic acids.\n' +
            'Flavanols: Catechin.' },
      { name: 'Fatty acids/esters', percentage: '', effect: 'Stearic and palmitic acids, glycerol monostearate, and 1-monopalmitin.' },
      { name: 'Organic acids ', percentage: '', effect: 'Quinic and oxalic acids.' },
      { name: 'Others  ', percentage: '', effect: 'Sugars (glucose, fructose), diterpenes (cinncassiols A and B, cinnzeylanol, and its acetyl derivative cinnzeylanine).' },
    ],
    moa: [
      { title: 'Anti-inflammatory & Analgesic Effect', detail: 'Inhibits cyclooxygenase (COX) pathways, reducing prostaglandin synthesis to alleviate visceral pain and menstrual cramps (dysmenorrhoea).' },
      { title: 'Antispasmodic & Carminative Effect', detail: 'The volatile oil relaxes the smooth muscles of the gastrointestinal tract, which directly relieves cramps, bloating, flatulence, and abdominal pain.' },
      { title: 'Astringent & Anti-diarrheal Effect', detail: 'The condensed tannins bind to intestinal mucosal proteins to form a protective layer, reducing fluid secretion to treat mild diarrhoea.' },
      { title: 'Orexigenic Effect (Appetite Stimulation)', detail: 'Stimulates gastric secretions and taste receptors, which helps in treating anorexia and loss of appetite.' },
    ],
    uses: [
      'Treatment of pain associated with amenorrhoea and dysmenorrhoea.',
      'Symptomatic treatment of mild spasmodic gastrointestinal complaints (dyspeptic conditions) including bloating and flatulence and for anorexia (loss of appetite).',
      'Symptomatic treatment of mild diarrhoea and to treat abdominal pain with diarrhoea.',
    ],
    howToUse: [
      { method: 'Aqueous Infusion (Tea)', instruction: 'Infuse 1 gram of crushed CEYLON cinnamon bark in boiling water for 10 minutes in a sealed vessel.' },
      { method: 'Therapeutic Dose Range', instruction: 'Administer 1-4 grams of dried bark daily, strictly divided into multiple smaller doses throughout the day. Maximum absolute daily limit: 6 grams.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults (18+ years)', notes: 'Primary demographic for therapeutic administration: metabolic or gynecological disorders.' },
      { group: 'Pediatrics & Adolescents (<18 years)', notes: 'Safe in standard small culinary amounts as dietary flavoring.The therapeutic dose is not recommended.' },
      { group: 'Pregnancy (lactation)', notes: ' contraindicated in therapeutic doses: potential emmenagogue actions and theoretical uterine stimulant risks.' },
      { group: 'Liver Disease', notes: 'STRICTLY CONTRAINDICATED if using Cassia cinnamon: dangerous potential for coumarin-induced hepatotoxicity.' },
    ],
    dosage: {
      standard: 'Therapeutic range: 1-4 g dried bark daily in divided doses. Use CEYLON cinnamon ONLY for therapeutic protocols.',
      forms: [],
    },
    overdose: {
      intro: 'Overdose Threshold: Consuming more than 6 grams of dried bark per day for prolonged periods, or exceeding 200 mg per day of the pure, undiluted essential oil.',
      symptoms: [
        'Severe burning sensations across the buccal mucosa and gastric lining, triggering violent emetic effects (vomiting).',
        'Systemic absorption overstimulates the vasomotor center, causing acute tachycardia (racing heart rate) and tachypnea (rapid breathing).',
        'Chronic accumulation of Cassia causes elevated liver enzymes and hepatocyte necrosis.',
        'Can also precipitate severe hypoglycemia (dangerously low blood sugar).',
      ],
      management: [
        'Discontinue all cinnamon intake immediately.',
        'Perform immediate gastric lavage if a large volume of pure essential oil was acutely ingested.',
        'Administer Activated Charcoal to adsorb residual cinnamaldehyde and toxic terpenes within the GI tract.',
        'Provide aggressive supportive care, high fluid intake, and gastric mucosal protectants (antacids/PPIs).',
      ],
    },
    sideEffects: [
      'Gastric irritation and heartburn at high doses',
      'Burning sensation in mouth and throat',
      'Tachycardia and tachypnea with concentrated essential oil',
      'Cassia only: hepatotoxicity from coumarin accumulation',
    ],
    contraindications: [
      'Active Peptic Ulcer Disease (PUD) or gastritis: volatile oils will directly irritate damaged mucosa.',
      'Severe hepatic impairment.',
      'High therapeutic doses in pregnancy: Strictly Contraindicated — potential emmenagogue actions and theoretical uterine stimulant risks.',
    ],
    drugInteractions: [
      'Antidiabetics & Anticoagulants: Potentiates hypoglycemic agents (risking acute sugar drops) and anticoagulants like Warfarin (increasing bleeding times).',
      'Cinnamon & Tetracyclines: Tannins in cinnamon bind to Tetracyclines via chemical chelation/precipitation, forming insoluble complexes that inhibit antibiotic absorption. Separate oral administration by at least 2 to 3 hours.',
    ],
    storage: {
      forms: [
        { form: 'Dried Bark / Sticks / Powder', instructions: 'Must be stored in strictly airtight, opaque glass containers away from thermal fluctuations to completely prevent the rapid oxidation and evaporation of active Cinnamaldehyde.' },
      ],
    },
    factsAndMyths: [
      {
        myth: '"All types of cinnamon are the same, and any cinnamon can be used safely in high therapeutic doses."',
        fact: 'Cassia Cinnamon contains high concentrations of Coumarin, which can cause liver toxicity (hepatotoxicity) if taken in medicinal doses over extended periods. True Ceylon Cinnamon has negligible coumarin levels and is the safe choice for prolonged therapeutic use.',
      },
    ],
    marketedProducts: [
      { name: 'Cinara Capsules (Standardized cinnamon extract for metabolic support)', image: null },
      { name: 'Sekem Cinnamon Tea Bags (Pure Cinnamomum verum)', image: '/images/Picture55.jpg' },
      { name: 'Isis Cinnamon & Ginger Blend Tea', image: '/images/Picture56.png' },
      { name: 'Imtenan Ceylon Cinnamon Powder / Sticks (Verified low-coumarin true cinnamon)', image: null },
    ],
    benefits: [
      { icon: 'spa', title: 'Menstrual Pain Relief', desc: 'Dual COX/LOX inhibition reduces prostaglandin synthesis, clinically decreasing menstrual pain intensity, nausea, and vomiting.' },
    ],
    botanicalFacts: {
      family: 'Lauraceae',
      nativeRegion: 'Sri Lanka (Ceylon): considered the origin of true cinnamon; Cinnamomum cassia is native to southern China',
      growthHabit: 'Evergreen tree growing 10-15 m; thin papery inner bark (quills) is the medicinal part; harvested from young shoots',
      activeCompounds: 'trans-cinnamaldehyde, eugenol, condensed tannins: Ceylon has negligible coumarin; Cassia has high coumarin',
      cultivationNotes: 'Ceylon cinnamon produces thin, multi-layered quills with a sweet delicate flavor. Distinguish from Cassia using the Iodine Starch Test: blue/black = Cassia (high coumarin); no color change = Ceylon (safe).',
    },
    preparation: [
      { method: 'Bark Infusion (Ceylon Only)', desc: 'Infuse 1 g crushed Ceylon bark in sealed boiling water for 10 minutes.', bestFor: 'Dysmenorrhea, menorrhagia, PCOS, digestive complaints' },
    ],
    symptoms: ['Menstrual cramps', 'Heavy bleeding', 'Nausea', 'PCOS', 'Blood sugar dysregulation', 'Digestive discomfort'],
    relatedPlants: ['ginger-menstrual', 'dill-seed-menstrual'],
    references: [
      { text: 'Duke, J. A., et al. (2002). Handbook of Medicinal Herbs (2nd ed.). CRC Press.' },
      { text: 'Chevallier, A. (2016). Encyclopedia of Herbal Medicine (3rd ed.). DK Publishing.' },
      { text: 'Egyptian Drug Authority — Cinnamomum verum monograph.', url: 'https://www.edaegypt.gov.eg/media/jvknpkbg/cinnamomum-verum-j-presl.pdf' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // WOMEN'S HEALTH › PREGNANCY SUPPORT
  // ══════════════════════════════════════════════════════════════════════

  'ginger-pregnancy': {
    id: 'ginger-pregnancy',
    name: 'Ginger',
    nameAr: 'الزنجبيل',
    latinName: 'Zingiber officinale',
    category: 'womens-health',
    subcategory: 'pregnancy-support',
    tags: ['Antiemetic', 'Pregnancy-Safe', 'Nausea Relief', 'Evidence-Based', 'Morning Sickness'],
    image: '/images/Picture29.jpg',
    shortDescription: 'History of Use in Pregnancy:\n' +
        '\n' +
        'Ginger has been used for centuries in traditional medicine systems, including Traditional Chinese Medicine and Ayurveda, to relieve gastrointestinal discomfort, nausea, and vomiting. In pregnancy, it has a long history of use as a natural remedy for morning sickness. Over the past few decades, its traditional use has been supported by numerous clinical studies, making ginger one of the most extensively researched herbal therapies for nausea and vomiting during pregnancy.',
    description: 'Ginger is primarily used in pregnancy as a safe, effective, and evidence-based non-pharmacological treatment for managing mild to moderate nausea and vomiting (morning sickness). Gingerols and shogaols are the main pungent principles responsible for the therapeutic benefits;  Extensive RCTs confirm its efficacy is statistically comparable to Pyridoxine (Vitamin B6) and significantly superior to placebos in mitigating nausea severity, without any statistical increase in adverse pregnancy outcomes or teratogenicity.',
    isDemo: false,
    activeConstituents: [
      { name: 'Gingerols-Shogaols ', percentage: '', effect: 'Main pungent principles responsible for the therapeutic benefits.' },
      { name: 'Terpenoids (Zingiberene, Zingiberol)', percentage: '', effect: 'Other active constituents of ginger.' },
    ],
    moa: [
      { title: 'Gastrointestinal Stimulation', detail: 'Ginger increases gastric tone and peristalsis (motion). By speeding up gastric emptying, it reduces the amount of time food sits in the stomach, thus reducing nausea.' },
      { title: 'Serotonin (5-HT3) Receptor Antagonism', detail: 'Ginger compounds (gingerols and shogaols) act as competitive antagonists at peripheral and central serotonin (5-HT3) receptors. Serotonin is a key neurotransmitter that causes vomiting when released in response to nausea, and blocking it reduces this sensation.' },
      { title: 'Direct Action on the Gut', detail: 'Ginger is thought to exert much of its antiemetic effect locally within the gastrointestinal tract.' },
      { title: 'Anti-inflammatory and Carminative Effects', detail: 'Ginger provides relief from dyspepsia (upset stomach) and helps with motility issues.' },
    ],
    uses: [
      'Primary use in pregnancy: safe, effective, evidence-based non-pharmacological treatment for mild-to-moderate nausea and vomiting of pregnancy (morning sickness)',
      'Fresh ginger may help relieve symptoms associated with common colds, such as congestion, headache, and nausea',
      'Ginger provides potent anti-inflammatory, antioxidant, antiemetic, and potential anticancer properties; widely used to treat nausea, digestive issues (bloating, indigestion), arthritis pain, and metabolic issues like high blood sugar',
    ],
    howToUse: [
      { method: 'Fresh Ginger Tea', instruction: 'Steep 1–2 teaspoons of grated or sliced fresh ginger root in hot water for 5–10 minutes.' },
      { method: 'Ginger Capsules', instruction: 'Look for supplements containing 250 mg of ginger powder, often taken 2–4 times daily, ensuring they are approved by a healthcare professional.' },
    ],
    suitableAgeGroups: [
      { group: 'Children (Under 2 years)', notes: 'Use of medicinal amounts is generally not recommended.' },
      { group: 'Children (2 years and older)', notes: 'Small amounts, such as small quantities of fresh ginger in food, can be used for nausea or cold symptoms.' },
      { group: 'Adults (18+ years)', notes: 'Moderation is advised, as very high amounts may not be appropriate.' },
      { group: 'Pregnant Women', notes: 'Medicinal, standardized low doses (up to 1 g/day) are clinically effective and safe, provided it is monitored by a healthcare provider.' },
    ],
    dosage: {

      forms: [
        { form: 'Pregnancy', dose: 'Standardized dosage of 250 mg orally, 4 times daily (Total maximum dose: 1,000 mg / 1 gram daily). Higher doses during pregnancy should be used cautiously due to limited safety data.' },
      ],
    },
    overdose: {
      intro: 'There is no strict legal definition for a "toxic" dose of ginger, but high daily amounts are generally considered excessive and may lead to adverse side effects.',
      symptoms: [
        'Bleeding Risks: Because ginger has anti-platelet properties, excessive intake can increase the risk of bleeding or bruising, which is specifically dangerous close to labor.',
        'Gastrointestinal Distress: Severe heartburn, acid reflux, bloating, and diarrhea.',
        'Mouth and Throat Irritation: A burning sensation or soreness in the mouth.',
        'Heart Irregularities: High doses may rarely affect heart rhythm at excessive doses.',
        'Central Nervous System Depression: Very high doses can potentially cause lethargy or fatigue.',
      ],
      management: [
        'Immediately stop consuming ginger and stay hydrated to flush the system.',
        'Symptomatic Management: Administer antacids or Proton Pump Inhibitors (PPIs) for severe gastric irritation.',
        'Seek medical attention if experiencing severe symptoms like heart palpitations, breathing issues, or excessive bleeding.',
        'There is no antidote; management is supportive.',
      ],
    },
    sideEffects: [
      'Uterine Stimulation: High doses can theoretically stimulate uterine contractions, increasing risks of premature labor in late pregnancy.',
      'Gastrointestinal Distress: Heartburn, acid reflux, diarrhea, and bloating are the most common side effects, particularly when consumed in large amounts.',
      'Mouth/Throat Irritation: A burning sensation in the mouth or throat may occur.',
      'Contact Dermatitis: Topical application of ginger essential oils may provoke erythema, skin irritation, or allergic rashes.',
      'Anti-platelet Activity: Inhibition of platelet aggregation, predisposing the patient to bleeding.',
    ],
    contraindications: [
      'Late Pregnancy / Near Labor: Use near labor should be approached cautiously due to ginger\'s mild antiplatelet activity.',
      'Bleeding Disorders: Ginger has anticoagulant (blood-thinning) effects, making it unsafe for women with bleeding disorders or those taking blood-thinning medication (e.g., warfarin).',
      'High-Risk Pregnancies: Contraindicated in pregnant women with a documented clinical history of recurrent spontaneous abortions, or unexplained vaginal bleeding.',
    ],
    drugInteractions: [
      'Anticoagulants / Antiplatelet Drugs (e.g., Warfarin, Aspirin, Clopidogrel, Enoxaparin): Synergistic interaction: Ginger may increase bleeding risk when used concomitantly with anticoagulant or antiplatelet medications.',
      'Antidiabetic Agents (e.g., Insulin, Metformin, Sulfonylureas): High doses of ginger enhance glucose uptake in insulin-responsive tissues, increasing the risk of hypoglycemia.',
      'Antihypertensive Drugs / Calcium Channel Blockers (e.g., Amlodipine, Nifedipine): Ginger exhibits natural voltage-dependent calcium channel blocking activity; concomitant use may potentiate hypotensive and negative inotropic responses.',
    ],
    storage: {
      forms: [
        { form: 'Room Temperature', instructions: 'Raw rhizomes can be stored for 1–2 weeks in a cool, dry, well-ventilated area away from direct sunlight.' },
        { form: 'Refrigerator (4°C)', instructions: 'Store for 1–2 months.' },
        { form: 'Freezer (−18°C)', instructions: 'Store for up to 6 months.' },
      ],
    },
    marketedProducts: [
      { name: 'Ginger 400 mg by Mepaco', image: '/images/Ginger-400mg-Mepaco.jpg' },
      { name: 'Imtenan Organic Ginger Powder', image: '/images/Imtenan Organic Ginger Powder.jpg' },
    ],
    botanicalFacts: {
      family: 'Zingiberaceae',
    },
    relatedPlants: ['psyllium-pregnancy', 'peppermint-pregnancy'],
    references: [
      { text: 'PMC — Safety of ginger rhizome for decreasing nausea and vomiting in women during early pregnancy.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6616534/' },
      { text: 'PMC — A systematic review and meta-analysis of the effect and safety of ginger in the treatment of pregnancy-associated nausea and vomiting.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4228518/' },
      { text: 'PMC — Safety of ginger use in pregnancy: results from a large population-based cohort study.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4755634/' },
      { text: 'ScienceDirect — Ginger in pregnancy research.', url: 'https://www.sciencedirect.com/science/article/pii/S216183132400142X' },
    ],
  },

  'psyllium-pregnancy': {
    id: 'psyllium-pregnancy',
    name: 'Psyllium',
    nameAr: 'سيلليوم / إسباغول',
    latinName: 'Plantago ovata Forsk.',
    category: 'womens-health',
    subcategory: 'pregnancy-support',
    tags: ['Bulk-forming Laxative', 'Fiber', 'Constipation Relief', 'Pregnancy-Safe', 'Hemorrhoid Prevention'],
    image: '/images/Picture274.jpeg',
    shortDescription: 'Clinically favored first-line treatment for gestational constipation and hemorrhoid prevention. Not absorbed systemically — works locally within the GI tract without fetal exposure.',
    description: 'History of Use in Pregnancy:\n' +
        '\n' +
        'Psyllium has a long history of traditional and clinical use during pregnancy for the management of constipation and prevention of hemorrhoids. Due to its bulk-forming, non-systemic mechanism of action, it has been widely preferred over stimulant laxatives for pregnant women. Historically, psyllium husk has been used to promote regular bowel movements and reduce straining during defecation, helping to minimize pregnancy-related gastrointestinal discomfort. Modern clinical practice continues to support its use as a safe first-line option for gestational constipation when taken with adequate fluid intake.',
    isDemo: false,
    activeConstituents: [
      { name: 'Arabinoxylan (a soluble, gel-forming polysaccharide', percentage: '' },
      { name: 'Mucilage', percentage: '' },
      { name: 'Water-Soluble Fiber', percentage: '' },
    ],
    moa: [
      { title: 'Water Retention & Lubrication', detail: 'Psyllium absorbs water, increasing the moisture content of stool, which keeps it soft and eases transit through the intestines, helping to combat constipation caused by increased progesterone levels and reduced bowel motility.' },
      { title: 'Bulk Formation', detail: 'The gel-like mass increases the physical volume (bulk) of stool, stimulating stretch receptors in the bowel wall, which triggers the urge to defecate.' },
      { title: 'Local Action', detail: 'Because it is not absorbed systemically, it works locally within the GI tract without causing fetal exposure, making it a commonly preferred treatment.' },
    ],
    uses: [
      'Hemorrhoid/Fissure Prevention: promotes regular, soft bowel movements, helping prevent the straining that leads to hemorrhoids and anal fissures in pregnancy',
      'Constipation Relief: improve transit time, making stool easier to pass',
      'Safe First-Line Alternative: clinically favored over chemical stimulant laxatives (like Senna or Bisacodyl) for managing chronic or gestational constipation due to its non-systemic nature',
    ],
    howToUse: [
      { method: 'Consult Your Provider', instruction: 'Always check with your doctor or midwife before starting, particularly if you have other health issues.' },
      { method: 'Crucial Hydration', instruction: 'Drink at least 8 ounces (240 mL) of water or juice with each dose. Inadequate fluid intake can lead to blockage.' },
      { method: 'Start Slow', instruction: 'Begin with 1 teaspoon/day and gradually increase to 1 tablespoon up to 3 times daily to minimize gas and bloating.' },
      { method: 'Timing', instruction: 'Take psyllium at least 2 hours apart from prenatal vitamins and other medications to avoid interfering with nutrient absorption.' },
      { method: 'Usage Duration', instruction: 'Avoid prolonged use without consulting a healthcare professional.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults and Children (6+ years)', notes: 'Generally safe for adults and children over the age of 6, though many pediatric guidelines suggest consulting a doctor for children under 12.' },
    ],
    dosage: {
      forms: [
        { form: 'Pregnancy', dose: '28 g/day with adequate fluid intake.' },
      ],
    },
    overdose: {
      intro: 'While psyllium is generally considered safe during pregnancy because it is not absorbed systemically, excessive intake can lead to serious complications.',
      symptoms: [
        'Severe Gastrointestinal Obstruction: Because psyllium is a bulk-forming laxative that absorbs water, taking too much without enough fluid can cause it to harden, leading to bowel, esophageal, or stomach blockage.',
        'Abdominal Pain and Cramping: Severe stomach pain or cramping.',
        'Nausea and Vomiting.',
        'Severe Paradoxical Constipation/Impaction: Excess unhydrated fiber binds together, worsening bowel stasis rather than relieving it.',
        'Diarrhea: In some cases, excessive intake can cause diarrhea.',
      ],
      management: [
        'Hydrate Immediately: Drink large amounts of water to prevent the fiber from causing intestinal obstruction or fecal impaction.',
        'Monitor Symptoms: Watch for severe stomach pain, vomiting, or inability to have a bowel movement.',
        'Symptomatic Management: Treatment is typically conservative, focusing on relieving discomfort.',
        'Medical Care: If severe blockage occurs, medical professionals may provide treatment for bowel obstruction.which, while rare, can occur if taken with insufficient fluid. ',
      ],
    },
    sideEffects: [
      'The most common side effects are mild gastrointestinal issues, including bloating, gas (flatulence), stomach cramps, and abdominal discomfort.',
      'Obstruction Risk: Increased risk of exacerbating constipation or inducing a bowel blockage if strict fluid compliance is ignored.',
    ],
    contraindications: [
      'Gastrointestinal Obstruction/Impaction: Do not take psyllium if you have a fecal impaction, narrowing of the gastrointestinal tract, or a known bowel obstruction.',
      'Swallowing Disorders: Do not use if you have difficulty swallowing, as psyllium can cause choking.',
      'Severe Dehydration / Insufficient Fluid Intake: Psyllium should be avoided in patients unable to maintain adequate fluid intake.',
      'Allergic Reactions: Hypersensitivity to psyllium.',
      'Symptoms of Appendicitis or Undiagnosed Gastrointestinal Distress: Including fever, severe abdominal pain, nausea, or vomiting.',
      'Phenylketonuria (PKU): Some psyllium products are sweetened with aspartame.',
    ],
    drugInteractions: [
      'Psyllium acts as a bulk-forming laxative, creating a gel that can bind to other medications, reducing their effectiveness. Administer other medications at least 2 hours before or after taking psyllium.',
      'Digoxin: Reduced therapeutic serum levels.',
      'Lithium: Impaired absorption, posing a relapse risk in psychiatric patients.',
      'Iron Supplements: Complexation and reduced absorption, which is particularly detrimental in gestational anemia.',
      'Warfarin: Variable absorption patterns affecting INR values.',
    ],
    storage: {
      forms: [
        { form: 'Psyllium Husk', instructions: 'Psyllium husk should be stored at room temperature (59°F to 86°F or 15°C to 30°C) in a cool, dry, dark place, away from direct sunlight, moisture, and heat sources.  \n' +
              'It is highly hygroscopic (absorbs moisture), so it must be kept in an Airtight Container to prevent clumping, spoilage, and reduced effectiveness \n' },
      ],
    },
    marketedProducts: [
      { name: 'Imtenan Psyllium Husk', image: '/images/Imtenan-Psyllium-Husk.jpg' },
      { name: 'Abu Auf Psyllium Husk', image: '/images/Abu-Auf-Psyllium-Husk.jpg' },
    ],
    botanicalFacts: {
      family: 'Plantaginaceae',
      clinicalEvidence: 'Research indicates that daily consumption of psyllium, especially in the third trimester, can significantly prevent and treat constipation, hemorrhoids, and anal fissures.',
    },
    relatedPlants: ['ginger-pregnancy', 'peppermint-pregnancy'],
    references: [
      { text: 'LactMed Database — Psyllium monograph.', url: 'https://www.ncbi.nlm.nih.gov/books/n/lactmed/LM471/?report=reader' },
      { text: 'PMC — Psyllium research.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12422764/' },
      { text: 'Drugs.com — Psyllium use during pregnancy.', url: 'https://www.drugs.com/pregnancy/psyllium.html' },
      { text: 'PMC — Review of psyllium fiber and clinical applications.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3418980/' },
    ],
  },

  'peppermint-pregnancy': {
    id: 'peppermint-pregnancy',
    name: 'Peppermint',
    nameAr: 'النعناع',
    latinName: 'Mentha × piperita L.',
    category: 'womens-health',
    subcategory: 'pregnancy-support',
    tags: ['Antiemetic', 'Carminative', 'Aromatherapy', 'Pregnancy-Safe', 'Antispasmodic'],
    image: '/images/Picture279.jpg',
    shortDescription: 'Peppermint tea (1–2 cups/day) and aromatherapy are safe during pregnancy for morning sickness, bloating, and pruritus. High medicinal doses or concentrated essential oil should be used cautiously.',
    description: 'Peppermint has a long history of traditional use during pregnancy, particularly in herbal medicine and midwifery practices, although clinical evidence supporting its efficacy remains mixed. Historically and currently, it has been used to relieve several pregnancy-related discomforts.',
    isDemo: false,
    activeConstituents: [
      { name: 'Menthol and Menthone', percentage: '', },
      { name: 'Non-Volatile Compounds ', percentage: '', effect: 'Flavonoids (luteolin, eriocitrin), phenolic acids (rosmarinic acid), and triterpenes ' },
      { name: 'Other key active constituents ', percentage: '', effect: 'include menthyl acetate, 1,8-cineole (eucalyptol), and limonene, which contribute to its refreshing aroma and respiratory benefits ' },
    ],
    moa: [
      { title: 'Gastrointestinal Smooth Muscle Relaxation', detail: 'By reducing the inflow of calcium, peppermint relaxes the muscles of the stomach and intestines, reducing spasms, esophageal dysmotility, and overall nausea.' },
      { title: 'Carminative Action', detail: 'Peppermint aids in reducing gas and improving digestion, which helps relieve the abdominal discomfort often associated with pregnancy.' },
      { title: 'Aromatherapy Mechanism', detail: 'When inhaled, the compounds in peppermint oil (menthol) are absorbed through the olfactory system, which may influence the central nervous system to reduce the severity of nausea.' },
      { title: 'Anxiety Reduction', detail: 'It can help reduce anxiety during pregnancy and labor, which often accompanies morning sickness.' },
    ],
    uses: [
      'Nausea and Vomiting (Morning Sickness): peppermint inhalation or aromatherapy acts as an antiemetic',
      'Gastrointestinal Relief: acts as a carminative and antispasmodic to alleviate gestational bloating, flatulence, and functional dyspepsia',
      'Symptomatic Relief of Pruritus (Itching): topical application of low-concentration (0.5%) peppermint oil in a carrier oil can relieve itching (pruritus gravidarum) common in late pregnancy',
      'Headache Relief: topical application of diluted oil on the temples may help with tension headaches, which are frequent during pregnancy',
      'Anxiety Reduction',
      'Skin & Hair Care: Included in products for acne-fighting antimicrobial properties and hair strengthening.',
      'Respiratory Support: Menthol acts as a decongestant, aiding in breathing during colds.',
      'Digestive Health: Used to reduce abdominal pain and symptoms of Irritable Bowel Syndrome (IBS).',
    ],
    howToUse: [
      { method: 'Tea', instruction: 'Drinking 1–2 cups of peppermint tea daily (using tea bags or dried leaves) is considered safe for morning sickness and indigestion.' },
      { method: 'Aromatherapy', instruction: 'Inhaling peppermint essential oil via a diffuser or a cotton ball can safely help reduce nausea, particularly during the first trimester.' },
      { method: 'Culinary', instruction: 'Peppermint-flavored candies or food items in moderation are safe.' },
    ],
    suitableAgeGroups: [
      { group: 'Essential Oil (Aromatherapy/Topical)', notes: 'Generally safe for children over age 3. Do not use on children under 30 months (2.5 years) as it can cause seizures or breathing issues.' },
      { group: 'Adults and Children (8+ years)', notes: 'Safe and recommended for IBS management.' },
      { group: 'Peppermint Tea', notes: 'Generally safe in moderate amounts for younger children, but not recommended for infants.' },
      { group: 'Candy/Candy Canes', notes: 'Due to choking hazards, it is best to wait until age 5.' },
    ],
    dosage: {
      forms: [
        { form: 'Peppermint Tea', dose: 'may be consumed in moderate amounts during pregnancy, commonly 1–2 cups daily. ' },
        { form: ' Peppermint essential oil aromatherapy', dose: 'commonly uses 2–4 drops for inhalation. High doses should be avoided during pregnancy due to limited safety data.' },
      ],
    },
    overdose: {
      intro: 'While moderate consumption of peppermint tea is generally considered safe during pregnancy, an overdose of peppermint — particularly in the form of concentrated essential oil — can be dangerous due to its high content of menthol and other compounds.',
      symptoms: [
        'Uterine Stimulation: Large doses of certain herbal extracts can cause uterine stimulation, which may pose risks to the pregnancy.',
        'Gastrointestinal Distress: Severe nausea, vomiting, abdominal pain, or diarrhea.',
        'Neurological Symptoms: Dizziness, loss of coordination (ataxia), confusion, or in extreme cases, seizures.',
        'Respiratory Issues: Slow or shallow breathing.',
        'Cardiovascular Changes: Changes in heart rate or rhythm.',
        'Kidney Concerns: Significant changes in urine output or the presence of blood in the urine.',
        'Allergic Reactions: Skin rashes, hives, or swelling of the throat.',
      ],
      management: [
        'Medical Evaluation: Providers will monitor vital signs (pulse, breathing rate, blood pressure) and may perform blood/urine tests or an electrocardiogram (ECG).',
        'Gastric Decontamination: In cases of severe ingestion, the stomach may be emptied by gastric lavage.',
        'Activated charcoal may be used to reduce absorption.',
        'Symptomatic Treatment: Intravenous fluids for hypotension, mechanical ventilation/oxygen therapy for respiratory depression.',
        'Fetal Monitoring: Fetal heart monitoring is essential if the fetus is at a viable gestational age, and an emergency C-section may be required if fetal distress occurs.',
        'Avoid Over-the-Counter Remedies: Do not try to treat symptoms at home with other herbal remedies.',
      ],
    },
    sideEffects: [
      'Heartburn/Reflux: Peppermint relaxes the esophageal sphincter, which can worsen pregnancy-related heartburn.',
      'Excessive Consumption: High amounts of tea may cause digestive discomfort or cramping.',
      'Toxic doses stimulate uterine smooth muscle (emmenagogue effect).',
      'Allergic Reactions: Possible, particularly if sensitive to menthol.',
      'Medication Interaction: It may interfere with the absorption of certain nutrients or supplements.',
    ],
    contraindications: [
      'Individuals with severe gastroesophageal reflux disease (GERD), hiatal hernia, gallstones (cholelithiasis), gallbladder inflammation (cholecystitis), or severe liver disease.',
    ],
    drugInteractions: [
      'Heartburn/Acid-Reducing Medications (Antacids, H2RAs, PPIs): Concomitant use increases gastric pH, causing the enteric coating of peppermint capsules to dissolve prematurely in the stomach, leading to severe gastric irritation.',
      'Blood Pressure Medications: Peppermint may lower blood pressure; It should be used cautiously if you are already taking medication for hypertension. ',
      'Liver-Metabolized Drugs: Peppermint may influence how the liver breaks down certain medications, potentially altering their effectiveness.',
    ],
    storage: {
      forms: [
        { form: 'All Forms', instructions: 'Store in a cool, dry, and dark place.' },
      ],
    },
    marketedProducts: [
      { name: 'Isis Organic Peppermint Tea', image: '/images/Isis-Organic-Peppermint.jpg' },
      { name: 'Royal Peppermint Natural Tea', image: '/images/Royal-Peppermint-Natural.jpg' },
    ],
    botanicalFacts: {
      family: 'Lamiaceae',
      clinicalEvidence: 'Scientific evidence suggests that peppermint (Mentha piperita) is generally safe during pregnancy in moderate, culinary amounts (1–2 cups of tea daily) and can effectively alleviate first-trimester nausea and vomiting through aromatherapy. While studies show significant reductions in morning sickness, high medicinal doses or essential oils should be used cautiously, as data is limited.',
    },
    relatedPlants: ['ginger-pregnancy', 'psyllium-pregnancy'],
    references: [
      { text: 'PMC — The effect of peppermint on nausea and vomiting during pregnancy.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5960050/' },
      { text: 'LactMed Database — Peppermint monograph.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK501851/' },
      { text: 'PMC — Herbal medicine use in pregnancy: results of a multinational study.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7384490/' },
    ],
  },

  'cranberry-pregnancy': {
    id: 'cranberry-pregnancy',
    name: 'Cranberry',
    latinName: 'Vaccinium macrocarpon',
    category: 'womens-health',
    subcategory: 'pregnancy-support',
    tags: ['UTI Prevention', 'Anti-adhesion', 'Proanthocyanidins', 'Antioxidant', 'Pregnancy-Safe'],
    image: '/images/Cranberry.webp',
    shortDescription: 'History of Use in Pregnancy:\n' +
        '\n' +
        'Cranberry has a long history of traditional use for supporting urinary tract health, particularly in women prone to recurrent urinary tract infections (UTIs). During pregnancy, cranberry products have been commonly used as a preventive dietary approach to reduce the recurrence of UTIs due to their anti-adhesion activity against uropathogenic Escherichia coli. In modern clinical practice, cranberry is widely recognized as a supportive, non-antibiotic preventive option for recurrent UTIs, although it is not considered a treatment for active infections..',
    description: 'Cranberries contain A-type proanthocyanidins (PACs) which prevent uropathogenic bacteria ; specifically E. coli from adhering to the bladder wall. Studies suggest that a daily dose of cranberry extract can be a safe and effective approach in preventing asymptomatic bacteriuria and UTI recurrence in pregnant individuals. Large observational studies have found no link between cranberry consumption during pregnancy and an increased risk of congenital malformations, preterm delivery, or adverse infant outcomes. Note: While cranberry is widely recognized to help prevent UTIs, evidence indicates it is not effective for treating an active infection, which requires professional medical treatment during pregnancy.',
    isDemo: false,
    activeConstituents: [
      { name: 'A-Type Proanthocyanidins (PACs)', percentage: '',  },
      { name: 'Anthocyanins (Antioxidants)', percentage: '' },
      { name: 'Flavonols (Quercetin), ', percentage: '',  },
      { name: 'Phenolic Acids ', percentage: '',  },
      { name: 'Ursolic Acid (Triterpenoids)', percentage: '',  },
    ],
    moa: [
      { title: 'Inhibition of E. coli Adhesion (Anti-Adhesion Activity)', detail: 'The active compounds, specifically A-type proanthocyanidins (PACs), interfere with the ability of P-fimbriated Escherichia coli (E. coli) a common cause of UTIs during pregnancy ,to attach to the epithelial cells lining the urinary tract. \n' },
      { title: 'Structural Disruption of Fimbriae', detail: 'Cranberry constituents can change the conformation of surface molecules on E. coli, interfering with fimbrial adhesion mechanisms.' },
      { title: 'Fructose Inhibition', detail: 'Fructose present in cranberries acts in conjunction with PACs to inhibit the adhesion of type 1 pili to the bladder wall.' },

      { title: 'Direct Antibacterial and Anti-inflammatory Effects', detail: 'Beyond adhesion prevention, components of cranberry may help reduce bacterial adherence and inflammation associated with UTIs.' },
      { title: 'Modification of Urinary Environment', detail: 'Metabolites from ingested cranberry, when excreted in urine, decrease the adherence capacity of E. coli and other Gram-negative bacteria to uroepithelial cells.' },
    ],
    uses: [
      'Preventing Urinary Tract Infections (UTIs): cranberries contain A-type PACs which prevent uropathogenic E. coli from adhering to the bladder wall',
      'Managing Asymptomatic Bacteriuria (ASB): daily consumption of cranberry capsules or juice may help reduce bacterial load and decrease progression to symptomatic UTIs',
      'Reducing Antibiotic Use: by helping prevent recurrent UTIs, cranberry may help reduce reliance on antibiotics during pregnancy',
      'Gastrointestinal Health: the PACs in cranberries can inhibit the adhesion of Helicobacter pylori to gastric mucus, helping to manage or reduce the risk of stomach ulcers',
      'Cardiovascular Protection: regular consumption is associated with lower blood pressure, improved vascular function, and decreased LDL oxidation',
      'Oral Health: cranberry extracts can help prevent the adhesion of bacteria that cause plaque formation and dental caries',
    ],
    howToUse: [
      { method: 'Juice Formulation', instruction: 'Choose 100% pure, unsweetened cranberry juice to minimize added sugar.' },
      { method: 'Alternative Forms', instruction: 'Dried cranberries can be added to yogurt or salads, and fresh cranberries can be added to smoothies.' },
      { method: 'Supplements', instruction: 'Capsules or Tablets: If you take supplements, follow the specific dosing instructions on the packaging.' },
    ],
    suitableAgeGroups: [
      { group: 'Pediatric Use', notes: 'Standardized extracts and therapeutic doses are safe for children (typically above 2–3 years old) and adults to help prevent UTIs and for nutritional benefits.' },
    ],
    dosage: {

      forms: [
        { form: 'Cranberry Juice', dose: '240–300 mL daily; higher amounts may be used in some studies but should be consumed cautiously due to gastrointestinal discomfort and sugar content.' },
        { form: 'Cranberry Capsules/Tablets', dose: 'Standardized products providing approximately 36 mg of A-type proanthocyanidins (PACs) daily are most commonly studied for prevention of recurrent urinary tract infections (UTIs) during pregnancy.' },
      ],
      note: 'Note: Cranberry is generally considered safe during pregnancy when used in moderate amounts for urinary tract health support and prevention of recurrent uncomplicated UTIs.',
    },
    overdose: {
      intro: 'An overdose of cranberry products (juice or supplements) during pregnancy typically causes mild to moderate gastrointestinal distress, such as diarrhea, nausea, or abdominal cramping. While moderate consumption is generally safe, excessive intake of concentrated capsules might increase the risk of kidney stones due to high levels of oxalic acid.',
      symptoms: [
        'Gastrointestinal Distress: The most common symptoms are stomach cramps, diarrhea, nausea, and vomiting.',
        'Kidney Stones: Long-term consumption of high doses can increase the risk of developing calcium-oxalate kidney stones.',
        'Increased Pregnancy Complications (Rare): High doses of cranberry extract have been associated with increased rates of perinatal complications, including preterm delivery or low birth weight, though many studies indicate it is generally safe.',
      ],
      management: [
        'Stop Consumption: Immediately stop taking cranberry supplements or drinking large amounts of juice.',
        'Seek Medical Advice.',
        'Supportive Care: If symptoms are mild (e.g., mild diarrhea, stomach upset), increase fluid intake to ensure hydration.',
        'Monitor Symptoms: Keep watch for signs of worsening dehydration, severe diarrhea, or severe abdominal pain, which require immediate medical attention.',
      ],
    },
    sideEffects: [
      'Gastrointestinal Distress: Excessive intake of cranberry juice or supplements can lead to diarrhea, nausea, or stomach cramping.',
      'Kidney Stones: Cranberries contain high amounts of oxalates, which may increase the risk of kidney stones in susceptible individuals if consumed in high amounts.',
      'Vaginal Bleeding: Some data suggested a slight, though often mild, increase in vaginal bleeding incidents after week 17 of pregnancy, though this requires further study.',
      'Sugar Intake: Commercial cranberry juice can be high in added sugars, which may be a concern for women with or at risk of gestational diabetes.',
      'Drug Interactions (Blood Thinners): Cranberry may interact with medications like warfarin or other anticoagulants, increasing the risk of bruising or bleeding.',
    ],
    contraindications: [
      'High-Dose Risk: While normal dietary intake is usually safe, high-dose supplements (tablets/capsules) should be avoided due to limited safety data.',
      'Drug Interactions (Warfarin/Blood Thinners): If you are taking blood-thinning medication, cranberry can interact with it, potentially increasing the risk of bleeding.',
      'Kidney Stones: Women with a history of or susceptibility to oxalate kidney stones should avoid high consumption of cranberry products.',
      'Atrophic Gastritis/Hypochlorhydria: Those with low stomach acid or gastric inflammation should use caution, as cranberry may alter gastric pH.',
    ],
    drugInteractions: [
      'Warfarin (Coumadin/Anisindione): The most significant interaction — cranberry can enhance its anticoagulant effect, increasing bleeding risks.',
      'Blood Pressure/Cholesterol Medications: There is potential for increased effects of some medications, such as atorvastatin (cholesterol) and nifedipine (blood pressure).',
    ],
    storage: {
      forms: [
        { form: 'Refrigerator Storage', instructions: 'To maintain the stability of bioactive compounds (anthocyanins and PACs), cranberry products (such as juice or processed purees) should be kept refrigerated.ensure products are not left in direct sunlight or warm, humid environments, as this degrades the antioxidant benefits.' },
      ],
    },
    marketedProducts: [
      { name: 'Modern Cranberry Dietary Supplement', image: '/images/Modern-Cranberry-Dietary-Supplement.png' },
      { name: 'Cranberry Ema Pharm (30 Capsules)', image: '/images/Cranberry-Ema-Pharm-30-Capsules.png' },
    ],
    botanicalFacts: {
      family: 'Ericaceae',
      clinicalEvidence: 'Large observational studies have found no link between cranberry consumption during pregnancy and an increased risk of congenital malformations, preterm delivery, or adverse infant outcomes.',
    },
    relatedPlants: ['ginger-pregnancy', 'psyllium-pregnancy'],
    references: [
      { text: 'Drugs.com — Cranberry natural product monograph.', url: 'https://www.drugs.com/npp/cranberry.html' },
      { text: 'PMC — Cranberries for preventing urinary tract infections.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3924191/' },
      { text: 'WebMD — Cranberry supplement guide.', url: 'https://www.webmd.com/diet/supplement-guide-cranberry' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // RESPIRATORY › RHINITIS
  // ══════════════════════════════════════════════════════════════════════

  'butterbur': {
    id: 'butterbur',
    name: 'Butterbur',
    nameAr: 'البوتيربور',
    latinName: 'Petasites hybridus',
    commonNames: ['Purple Butterbur'],
    category: 'respiratory',
    subcategory: 'rhinitis',
    image: '/images/Picture45.jpg',
    activeConstituents: [
      { name: 'Petasin, Isopetasin, and Neopetasin', detail: 'Considered responsible for the pharmacological activity.' },
    ],
    moa: [
      { title: 'Leukotriene Inhibition', detail: 'Reduces leukotriene production, decreasing allergy and inflammation.' },
      { title: 'Antihistamine Effects', detail: 'Decreases histamine release, reducing sneezing and itching.' },
      { title: 'Anti-inflammatory Activity', detail: 'Inhibits COX-2 and lowers prostaglandin E2 to reduce inflammation.' },
      { title: 'Calcium Channel Modulation', detail: 'Blocks calcium channels, reducing vascular constriction and inflammation.' },
    ],
    uses: [
      'Used as a natural, oral, and often effective alternative for managing seasonal allergic rhinitis (hay fever) symptoms, such as sneezing, congestion, and nasal irritation.',
    ],
    howToUse: [
      { method: 'Oral Tablet or Capsule', instruction: 'Generally taken orally in tablet or capsule form, with studies suggesting dosages of 50–150 mg daily, often divided into two or three doses.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults (18+)', notes: 'Most clinical trials for allergic rhinitis have been conducted on adults (mean age often 35–39).' },
      { group: 'Children and Adolescents (6–17)', notes: '' },
      { group: 'Children under 6', notes: 'Data is lacking regarding safety and efficacy for this group.' },
    ],
    dosage: {
      standard: 'Common dosages ranging from 50 mg to 150 mg daily, usually split into 2–3 doses.',
    },
    overdose: {
      intro: 'An overdose of butterbur, particularly products that are not certified as free of pyrrolizidine alkaloids (PAs), can cause severe liver damage.',
      symptoms: [
        'Severe Gastrointestinal Distress: Belching (most common), nausea, vomiting, diarrhea, and abdominal pain.',
        'Allergic Reactions: Itchy eyes or rash (especially if allergic to ragweed/daisies).',
        'Serious Symptoms (Liver Toxicity) — If the product contains pyrrolizidine alkaloids (PAs), or in rare cases of severe reaction to high doses:',
        'Neurological Effects: Headache, fatigue, and drowsiness.',
        'Dark Urine and Pale Stools: Signs of acute liver injury.',
        'Jaundice: Yellowing of the skin and eyes.',
      ],
      management: [
        'Immediately stopping the intake of the supplement and seeking medical advice.',
      ],
    },
    sideEffects: [
      'Gastrointestinal upset.',
      'Eructation (burping).',
      'Headache or dizziness.',
      'Increased bleeding tendency.',
    ],
    contraindications: [
      'Liver Disease: Avoid raw butterbur due to toxic pyrrolizidine alkaloids (PAs); use only certified PA-free products.',
      'Allergy Risk: May cause allergic reactions in people allergic to ragweed or related plants.',
      'Pregnancy & Breastfeeding: Not recommended because of possible harm to the baby and lack of safety data.',
      'Children: Not advised for children under 6 years old.',
      'Drug Interactions: May interact with CYP3A4-metabolized medications and increase toxicity risk.',
    ],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Container', instructions: 'Keep capsules or tablets in their original, sealed packaging to maintain stability and prevent contamination.' },
        { form: 'Conditions', instructions: 'Store in a cool, dry place away from heat and moisture.' },
      ],
    },
    marketedProducts: [
      { name: 'Swanson Butterbur Extract (75 mg)', image: '/images/Butterbur2.jpg' },
      { name: 'Vitanica, Butterbur Extra', image: '/images/Butterbur1.jpg' },
      { name: 'Solaray, Vital Extracts, Butterbur (50 mg)', image: '/images/Solaray, Vital Extracts, Butterbur (50 mg).jpeg' },
    ],
    benefits: [],
    factsAndMyths: [
      {
        myth: 'Butterbur has no side effects or allergy risks.',
        fact: 'People allergic to ragweed or daisies may also react to butterbur.',
      },
    ],
    botanicalFacts: {
      family: 'Asteraceae',
      activeCompounds: 'Petasin, isopetasin, neopetasin (sesquiterpene esters)',
      clinicalEvidence: 'Studies suggest dosages of 50–150 mg daily for seasonal allergic rhinitis management.',
    },
    relatedPlants: ['stinging-nettle', 'black-seed-rhinitis'],
    references: [
      { text: 'American Academy of Allergy, Asthma and Immunology — Butterbur.', url: 'https://www.aaaai.org/allergist-resources/ask-the-expert/answers/old-ask-the-experts/butterbur' },
      { text: 'National Center for Biotechnology Information — Butterbur.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK537160/' },
      { text: 'National Center for Complementary and Integrative Health — Butterbur.', url: 'https://www.nccih.nih.gov/health/butterbur' },
      { text: 'Europe PMC — Petasites hybridus pharmacology.', url: 'https://europepmc.org/article/pmc/64514' },
      { text: 'Nutricost Butterbur Extract — Product example (Ubuy Egypt).', url: 'https://www.ubuy.com.eg/en/product/R9HT036-nutricost-butterbur-extract-capsules-75mg-120-capsules-gluten-free-and-non-gmo' },
      { text: 'National Center for Biotechnology Information — Butterbur safety.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK547997/' },
    ],
  },

  'stinging-nettle': {
    id: 'stinging-nettle',
    name: 'Stinging Nettle',
    nameAr: 'القراص',
    latinName: 'Urtica dioica L.',
    commonNames: ['Urtica dioica'],
    category: 'respiratory',
    subcategory: 'rhinitis',
    image: '/images/Picture8.jpg',
    activeConstituents: [
      { name: 'Anti-inflammatory', detail: 'Polyphenols, carotenoids, and CMA inhibit enzymes to reduce allergy-induced inflammation.' },
      { name: 'Antihistamine', detail: 'Amentoflavone and alpha-tocotrienol act as natural blockers for histamine receptors (HR1).' },
      { name: 'Mediators', detail: 'The plant also contains compounds like serotonin and acetylcholine,' },
    ],
    moa: [
      { title: 'Histamine Antagonism', detail: 'Acts as an antagonist and negative agonist against H₁ receptors to reduce allergy symptoms.' },
      { title: 'Mast Cell Stabilization', detail: 'Stabilizes mast cell membranes to limit the release of histamine and proinflammatory cytokines.' },
      { title: 'Enzyme Inhibition', detail: 'Inhibits COX-1, COX-2, and HPGDS enzymes, which are key to pro-inflammatory pathways.' },
      { title: 'Tryptase Inhibition', detail: 'Blocks mast cell tryptase, preventing nasal tissue damage and inflammation.' },
      { title: 'Eosinophil Reduction', detail: 'Decreases the count of eosinophils, the white blood cells that multiply during allergic reactions.' },
    ],
    uses: [
      'As a natural antihistamine and anti-inflammatory to relieve allergic rhinitis symptoms like sneezing, itchy eyes, and nasal congestion',
    ],
    howToUse: [
      { method: 'How to use', instruction: 'Consuming dried leaf capsules (approx. 600mg daily), drinking 3-4 cups of tea daily, or taking tinctures.' },
    ],
    suitableAgeGroups: [
      { group: 'Children under 12', notes: 'Generally, nettle preparations should not be used in children younger than 12 years due to a lack of safety data.' },
      { group: 'Adults (18+)', notes: 'Most clinical trials for rhinitis and other conditions (like BPH) focus on adults, often with a mean age in the 20s–60s range.' },
    ],
    dosage: {
      standard: 'Dried leaf capsules (approx. 600mg daily), drinking 3-4 cups of tea daily, or taking tinctures.',
    },
    overdose: {
      intro: 'There is limited information on specific "overdose" amounts, and significant adverse effects from high intake are rare. However, excessive intake can lead to adverse reactions, including:',
      symptoms: [
        'Gastrointestinal Distress: Diarrhea, constipation, nausea, and upset stomach.',
        'Allergic Reactions: While used to treat allergies, it can rarely cause a rash or hives.',
        'Fluid Retention/Sweating: It can act as a diuretic, leading to increased urination or sweating.',
        'Low Blood Pressure: It may reduce blood pressure.',
      ],
      management: [
        'Immediate Discontinuation: Stop taking all forms of stinging nettle immediately.',
        'Symptom Monitoring: Monitor for symptoms of overdose, which can include gastric pain, skin rashes (hives), and potential, though rare, hormonal changes (e.g., breast tenderness in men, high estrogen in women).',
        'Hydration: Drink plenty of water to help the body flush out the extract, as nettle can act as a potent diuretic.',
        'Gastric Care: If the overdose resulted in gastric discomfort (often caused by taking capsules on an empty stomach), eat mild, non-irritating foods.',
        'Allergic Reaction Care: If an allergic reaction (hives, rash) occurs, antihistamines may be used under professional guidance.',
      ],
    },
    sideEffects: [
      'Gastrointestinal Issues: Diarrhea, constipation, and stomach upset are the most common side effects.',
      'Sweating: Some users report increased sweating.',
      'Urinary Issues: Potential for increased fluid retention or increased urine flow.',
      'Allergic Reaction: While rare, some users may experience a rash or hives.',
    ],
    contraindications: [
      'Pregnancy: May stimulate uterine contractions and increase the risk of miscarriage.',
      'Breastfeeding: Safety has not been established; avoid use during lactation.',
      'Kidney or Bladder Disorders: Its diuretic effect may worsen existing urinary or kidney conditions.',
      'Children: Not recommended for children under 12 years of age.',
    ],
    drugInteractions: [
      'Blood Thinners (Anticoagulants): May reduce the effectiveness of anticoagulant medications.',
      'Diabetes Medications: May enhance blood sugar-lowering effects, increasing the risk of hypoglycemia.',
      'Diuretics: Concurrent use may increase the risk of dehydration and electrolyte imbalance.',
      'Blood Pressure Medications: May cause excessive lowering of blood pressure when used together.',
      'NSAIDs: Potential interaction has been reported; caution is advised.',
    ],
    storage: {
      forms: [
        { form: 'Freeze-Dried Nettle (Most Effective Form)', instructions: 'Keep commercial capsules or home-processed freeze-dried powder in airtight, amber-colored glass jars. Store in a cool, dark pantry away from heat, direct sunlight, and moisture. Shelf Life: Stays highly potent for up to 1 to 2 years if unexposed to air.' },
        { form: 'Frozen Blanched Nettle (For Culinary Use)', instructions: 'Pack the blanched nettles tightly into heavy-duty plastic freezer bags. Ensure all excess air is fully squeezed out of the bag before sealing. Shelf Life: Can be frozen for 6 to 8 months.' },
        { form: 'Prepared Liquids (Infusions & Liquid Extracts)', instructions: 'Nettle Tea/Decoctions: Once the liquid is strained, it should be sealed in a glass jar.' },
        { form: 'Air-Dried Loose Leaf (For Nettle Tea)', instructions: 'Keep in airtight glass jars or clean containers in a dark cabinet (away from light). Shelf Life: Up to 1 year. Note: Discard if you notice mold or a musty smell.' },
      ],
    },
    marketedProducts: [
      { name: 'NOW Foods Stinging Nettle Root Extract (250mg)', image: '/images/Nettle1.jpg' },
      { name: '', image: '/images/Nettle2.jpg' },
    ],
    benefits: [],
    factsAndMyths: [
      {
        myth: 'Every part of the plant (leaf vs. Root) serves the exact same medical purpose.',
        fact: 'Air-dried leaves and liquid infusions are effective for drying sinuses and managing rhinitis symptoms.',
      },
    ],
    botanicalFacts: {
      family: 'Urticaceae',
      activeCompounds: 'Polyphenols, carotenoids, CMA (anti-inflammatory); Amentoflavone, alpha-tocotrienol (antihistamine); Serotonin, acetylcholine (mediators)',
      clinicalEvidence: 'Most clinical trials focus on adults. Freeze-dried leaf capsules (approx. 600mg daily) and leaf infusions are effective for drying sinuses and managing rhinitis symptoms.',
    },
    relatedPlants: ['butterbur', 'black-seed-rhinitis'],
    references: [
      { text: 'National Center for Biotechnology Information — Stinging Nettle.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK537160/' },
      { text: 'WebMD — Stinging Nettle Uses and Risks.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-664/stinging-nettle' },
      { text: 'Clinician.com — Stinging Nettles and Hay Fever.', url: 'https://www.clinician.com/articles/46213-can-stinging-nettles-take-the-sting-out-of-hay-fever' },
      { text: 'A.Vogel — How can nettle help your allergies?', url: 'https://www.avogel.co.uk/health/allergic-rhinitis/how-can-nettle-help-your-allergies/' },
      { text: 'WebMD — Stinging Nettle Uses and Risks.', url: 'https://www.webmd.com/vitamins-and-supplements/stinging-nettle-uses-and-risks' },
      { text: 'PubMed Central — Nettle leaf anti-inflammatory activity.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5963652/' },
    ],
  },

  'black-seed-rhinitis': {
    id: 'black-seed-rhinitis',
    name: 'Black Seed',
    nameAr: 'حبة البركة',
    latinName: 'Nigella',
    commonNames: ['Black cumin', 'black seed', 'kalonji'],
    category: 'respiratory',
    subcategory: 'rhinitis',
    image: '/images/black-seed-main.jpg',
    activeConstituents: [
      { name: 'Essential Oils', detail: 'Thymoquinone (main active compound), dithymoquinone, thymohydroquinone, p-cymene, carvacrol, thymol, α-pinene.' },
      { name: 'Alkaloids', detail: 'Nigellicimine, Nigellicimine N-oxide, Nigellidine, Nigellicine.' },
      { name: 'Saponins', detail: 'α-Hederin (immune & potential anti-tumor effects).' },
      { name: 'Fixed Oils & Fatty Acids', detail: '32–40% oil containing linoleic acid (Omega-6), oleic acid (Omega-9), palmitic acid, plus sterols like β-sitosterol, stigmasterol & campesterol.' },
    ],
    moa: [
      { title: 'Antihistaminic and Anti-Allergic Effects', detail: 'Mast Cell Stabilization: Thymoquinone prevents mast cell degranulation, lowering histamine release in nasal passages. Receptor Blocking: Non-selectively blocks histamine receptors to relieve itching and sneezing.' },
      { title: 'Anti-Inflammatory Action', detail: 'Pathway Inhibition: Nigella sativa inhibits 5-LOX and COX enzymes (arachidonic acid pathway), blocking leukotrienes and prostaglandins to reduce nasal edema and mucus. Cytokine Regulation: Downregulates pro-inflammatory cytokines like TNF-α.' },
    ],
    uses: [
      'Provides natural antihistaminic, anti-inflammatory, and immunomodulatory effects that alleviate symptoms like sneezing, nasal congestion, and itching without common conventional side effects.',
    ],
    howToUse: [
      { method: 'Oral Capsules', instruction: 'Clinical studies have shown success with doses ranging from (250 mg) to (500 mg) of seed extract taken daily.' },
      { method: 'Liquid Black Seed Oil', instruction: 'Adults typically take 1 to 2 teaspoons per day, either directly or mixed with honey or warm water.' },
      { method: 'Nasal Drops/Spray', instruction: 'Some trials suggest applying 1 to 2 drops of high-quality black seed oil directly into each nostril up to 3 times a day to relieve mucosal inflammation.' },
    ],
    suitableAgeGroups: [
      { group: 'Infants & Toddlers (< 12 months)', notes: 'Not recommended due to their still-developing digestive and immune systems.' },
      { group: 'Young Children (Ages 1 to 5)', notes: 'Used in small, limited amounts. Specific nasal administration products exist for daily use.' },
      { group: 'School-Age Children (Ages 6 to 12)', notes: 'Dosing focuses on specific, measured daily amounts adapted to the child\'s weight.' },
      { group: 'Teens & Adults (Age 13+)', notes: 'Uses standard daily measurements, which can be split into multiple doses.' },
    ],
    dosage: {
      standard: 'It is generally considered safe, with typical suggested adult doses ranging from 10 to 100 mg/kg/day, though mild digestive upset can sometimes occur.',
    },
    overdose: {
      intro: 'Consuming excessive amounts of black seed or its oil can cause:',
      symptoms: [
        'Organ Damage: High intake has been linked to acute kidney injury and liver toxicity.',
        'Severe Metabolic Issues: Rare cases of rhabdomyolysis (muscle breakdown) and acute renal failure have been reported following high ingestion.',
        'Hypoglycemia and Hypotension: It can aggressively lower blood sugar and blood pressure, which may lead to dizziness or fainting in vulnerable individuals.',
        'Gastrointestinal Distress: Excessive intake often results in nausea, bloating, vomiting, and gut irritation.',
        'Serotonin Syndrome Risk: If taken with serotonergic medications, it may dangerously increase serotonin levels, causing heart problems or seizures.',
      ],
      management: [
        'Discontinue Use: Immediately stop taking all Nigella sativa supplements, oils, or extracts.',
        'Supportive Care: Focus on managing specific symptoms (e.g., intravenous fluids for dehydration, electrolyte balancing).',
        'Monitor Organ Function: Because high doses can potentially cause liver and kidney damage, seek medical evaluation to check liver enzymes and renal function.',
      ],
    },
    sideEffects: [
      'Gastrointestinal: Nausea, vomiting, indigestion, constipation, or stomach pain.',
      'Nasal Dryness: Particularly when taken or applied locally as nasal drops.',
      'Systemic: Mild drowsiness, fatigue, or headaches.',
      'Skin: Contact dermatitis or allergic rashes from direct topical application.',
    ],
    contraindications: [
      'Pregnancy: It is generally contraindicated during pregnancy because it may inhibit uterine contractions.',
      'Bleeding Disorders: Due to potential blood-thinning properties, it may increase the risk of bleeding.',
      'Upcoming Surgeries: You should stop taking it at least two weeks before a scheduled surgery.',
      'Low Blood Sugar (Hypoglycemia): Black seed extract can lower blood sugar.',
      'People with diabetes or those taking glucose-lowering medications should use it with caution.',
      'Low Blood Pressure (Hypotension): It may further lower blood pressure, making it risky for those already taking antihypertensive drugs.',
      'Active Allergies: Although used to treat rhinitis, some individuals may develop allergic rashes or skin irritation when taking it.',
    ],
    drugInteractions: [],
    marketedProducts: [
      { name: 'Imtenan', image: '/images/BlackSeedRhinitis1.jpg' },
      { name: ' Black Seed Oil', image:`/images/Black Seed Oil.jpeg`},
      { name: 'Organic Nation Black Seed Honey', image:`/images/Organic Nation Black Seed Honey.jpeg`},
    ],
    storage: {
      forms: [
        { form: 'Nigella Sativa Oil', instructions: 'Keep in amber or cobalt glass bottles to block light. Seal the cap tightly after every use to prevent oxygen exposure. Store in a cool pantry or refrigerate after opening to preserve the delicate fatty acids.' },
        { form: 'Oil Capsules / Softgels', instructions: 'Store in their original container away from heat and moisture. Avoid bathroom storage, as high humidity can cause the softgel shells to stick together or dissolve.' },
        { form: 'Whole or Ground Seeds', instructions: 'Keep whole seeds in a sealed, dry jar at room temperature. Grind them only right before consumption, as pre-ground seeds lose their medicinal essential oils very rapidly.' },
      ],
    },
    benefits: [],
    botanicalFacts: {
      family: 'Ranunculaceae',
      activeCompounds: 'Thymoquinone (main active compound), dithymoquinone, thymohydroquinone; Nigellicimine, Nigellidine; α-Hederin; Linoleic acid (Omega-6), oleic acid (Omega-9)',
      clinicalEvidence: 'Generally considered safe, with typical adult doses ranging from 10 to 100 mg/kg/day. Clinical studies have shown success with doses of 250–500 mg seed extract daily.',
    },
    factsAndMyths: [
      {
        myth: '"Nigella sativa can completely cure allergic rhinitis on its own."',
        fact: 'Nigella sativa may help reduce allergic rhinitis symptoms because it contains anti-inflammatory and antioxidant compounds like thymoquinone, but it is supportive therapy and not a guaranteed cure.',
      },
    ],
    relatedPlants: ['stinging-nettle', 'butterbur'],
    references: [
      { text: 'ScienceDirect — Nigella sativa and allergic rhinitis.', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0041010124003593' },
      { text: 'WebMD — Black Seed.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-901/black-seed' },
      { text: 'Frontiers in Pharmacology — Nigella sativa pharmacology.', url: 'https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1417013/full' },
      { text: 'IJABBR — Nigella sativa review.', url: 'https://www.ijabbr.com/article_712694_0a0a34b2f0cc578baf9052ee287b18d0.pdf' },
      { text: 'PubMed — Nigella sativa antihistamine.', url: 'https://pubmed.ncbi.nlm.nih.gov/23855426/' },
      { text: 'PubMed Central — Nigella sativa anti-allergic review.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4387228/' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // RESPIRATORY › COLD
  // ══════════════════════════════════════════════════════════════════════

  'eucalyptus': {
    id: 'eucalyptus',
    name: 'Eucalyptus',
    nameAr: 'اليوكاليبتوس / كافور الورق',
    latinName: 'Eucalyptus globulus Labill.',
    commonNames: ['Eucalyptus', 'Blue Gum', 'Fever Tree'],
    category: 'respiratory',
    subcategory: 'cold',
    tags: ['Secretolytic', 'Decongestant', 'Anti-inflammatory', 'Antimicrobial', 'Cineole'],
    image: '/images/Eucalyptus-Cold.jpg',
    images: ['/images/Eucalyptus-Cold.jpg'],
    shortDescription: '1,8-Cineole-dominant Myrtaceae leaf with triple-action secretolytic, decongestant, and antimicrobial activity; thins mucus, accelerates mucociliary clearance, and relieves nasal congestion and cold symptoms.',
    activeConstituents: [
      { name: '1,8-Cineole (Eucalyptol)', detail: 'The primary active monoterpene alcohol comprising 70–85% of the essential oil. Principal compound responsible for mucolytic, secretolytic, and anti-inflammatory activities in the respiratory tract.' },
      { name: 'α-Pinene & Limonene', detail: 'Minor monoterpene hydrocarbons that act synergistically to provide secondary antiseptic and antioxidant protection.' },
      { name: 'Sesquiterpenes (e.g., Globulol)', detail: 'Contributes to the characteristic aroma and antimicrobial profile.' },
      { name: 'Flavonoids & Hydrolyzable Tannins', detail: 'Present in crude leaf extracts, providing astringent and cellular antioxidant support.' },
    ],
    moa: [
      { title: 'Secretomotoric & Mucolytic Effect', detail: '1,8-Cineole directly stimulates the ciliary beat frequency of the respiratory epithelium (secretomotoric action). Concurrently, it exerts a true mucolytic effect by downregulating the genetic expression of mucin genes (MUC2 and MUC19) in airway goblet cells, effectively thinning hyperviscous mucus secretions and facilitating effective expectoration.' },
      { title: 'Anti-inflammatory Action', detail: 'Strongly suppresses pro-inflammatory cascades. Inhibits the activation of Nuclear Factor-kappa B (NF-κB), leading to significant reduction in synthesis of TNF-α, IL-1β, leukotriene B4 (LTB4), and thromboxane B2.' },
      { title: 'Decongestant Effect (Sensory Modification)', detail: 'Actively stimulates TRPM8 cold receptors on afferent trigeminal nerve endings within the nasal mucosa. Similar to menthol, this interaction induces a localized cooling sensation, reducing the perception of nasal congestion and breathing resistance without acting as a vascular vasoconstrictor.' },
      { title: 'Antimicrobial Action', detail: 'Disrupts bacterial cell membrane integrity, demonstrating notable bacteriostatic and bactericidal effects against common respiratory pathogens like Streptococcus pneumoniae and Haemophilus influenzae.' },
    ],
    uses: [
      'Symptomatic Relief of Productive Cough: Functions as an effective expectorant to loosen and clear viscous bronchial mucus.',
      'Alleviation of Nasal & Sinus Congestion: Relieves upper respiratory tract stuffiness associated with the common cold, acute rhinosinusitis, and influenza.',
      'Reduction of Bronchial Irritation: Soothes catarrh and mild bronchospasms associated with non-acute respiratory ailments.',
      'Adjuvant Therapy for Sore Throats: Utilized in lozenges or gargles for its mild local anesthetic and antiseptic qualities.',
    ],
    howToUse: [
      { method: 'Steam Inhalation (Aqueous Vapor)', instruction: 'Add 2–5 drops of pure eucalyptus essential oil into a vessel of steaming (not boiling) water. Inhale the medicated vapors through the nose and mouth for 5–10 minutes while keeping eyes closed to avoid ocular irritation.' },
      { method: 'Topical Application (Chest Rub)', instruction: 'Incorporate the essential oil into a suitable carrier oil (such as sweet almond or jojoba oil) to a maximum concentration of 1%. Massage gently onto the chest or back area to act as a localized counter-irritant and vapor releaser.' },
      { method: 'Standardized Oral Formulations', instruction: 'Standardized eucalyptol is available in specific pharmaceutical enteric-coated capsules (e.g., Soledum® or Myrtol®) indicated for lower respiratory infections, and must be administered strictly under medical supervision.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults & Adolescents', notes: 'Generally safe for topical, inhalation, and standardized oral use when properly diluted or formulated.' },
      { group: 'Pediatrics (<6 years old)', notes: 'Strictly Contraindicated. Formulations containing 1,8-cineole or pure eucalyptus oil must never be applied topically to the face, nose, or chest of infants and young children under 6 years old, nor used in steam inhalations. Exposure can trigger reflex glottis spasms, severe laryngospasm, acute respiratory depression, or systemic seizures.' },
      { group: 'Pregnancy & Lactation', notes: 'Oral administration of the essential oil is strictly contraindicated due to insufficient clinical safety data and potential risks of hepatic enzyme induction in the fetus. Inhalation or low-dose topical cosmetic use away from the thoracic/mammary area is generally considered low-risk during lactation.' },
      { group: 'Geriatrics & Chronic Diseases', notes: 'Use with high clinical caution in patients with history of asthma (unmonitored inhalation may trigger acute bronchospasm), epilepsy, or severe hepatic impairment.' },
    ],
    dosage: {
      standard: 'Steam Inhalation: 2–5 drops of pure essential oil in steaming water; inhale for 5–10 minutes, eyes closed.\nTopical (Chest Rub): Dilute to maximum 1% in carrier oil; apply to chest or back.\nStandardized Oral Capsules (e.g., Soledum®): Under medical supervision only.',
    },
    overdose: {
      symptoms: [
        'Acute Ingestion Overdose: Accidental swallowing of concentrated eucalyptus oil is highly dangerous; as little as 3.5 mL of pure oil can be fatal in an pediatric, and significantly less in pediatric patients.',
        'Severe burning epigastric pain, projectile vomiting, nausea.',
        'Severe Central Nervous System (CNS) depression, profound Ataxia (loss of balance), miosis (pinpoint pupils).',
        'Convulsions (seizures), status epilepticus, and fatal respiratory failure or coma. Rapid onset within 10–30 minutes.',
        'Topical Irritation (Undiluted Oil): Severe localized erythema, burning sensation, pruritus, or allergic contact dermatitis.',
      ],
      management: [
        'Immediate emergency hospitalization.',
        'Do NOT induce emesis under any circumstances due to extreme risk of volatile oil aspiration leading to fatal chemical aspiration pneumonia.',
        'Establish airway protection, manage active convulsions with intravenous benzodiazepines.',
        'Administer activated charcoal via gastric tube if clinically indicated within the first hour.',
        'Topical Irritation: Halt use immediately, wash skin with copious cool water and mild soap, apply soothing fragrance-free emollient.',
      ],
    },
    sideEffects: [
      'Nausea, vomiting, or diarrhea (upon oral administration or high-dose inhalation).',
      'Localized skin irritation, erythema, or allergic contact dermatitis (if applied topically undiluted).',
      'Ocular irritation if steam inhalation is performed with eyes open.',
      'Acute bronchospasm in susceptible individuals with unmonitored asthma.',
    ],
    contraindications: [
      'Known genetic hypersensitivity to Eucalyptus globulus or other members of the Myrtaceae family.',
      'Infants and children under 6 years of age (laryngospasm and seizure risks).',
      'Active, unmonitored Asthma or severe Chronic Obstructive Pulmonary Disease (COPD).',
      'Pre-existing Seizure Disorders or History of Epilepsy.',
      'Severe hepatic insufficiency (monoterpenes undergo extensive hepatic clearance).',
      'Oral administration during pregnancy.',
    ],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Essential Oil', storage: 'Store in tightly sealed, dark amber glass bottles in a cool, dark environment completely out of reach of children to prevent accidental fatal poisoning. Exposure to light and oxygen induces the auto-oxidation of monoterpenes, rendering the oil highly irritating.' },
      ],
    },
    marketedProducts: [
      { name: 'GeloMyrtol Forte Capsules', image: '/images/Eucalyptus2.jpg' },
      { name: 'Strepsils Mentol & Eucalyptus Lozenges', image: '/images/Eucalyptus3.jpg' },
      { name: 'Vicks VapoRub', image: '/images/Eucalyptus1.jpg' },
      { name: 'Pectol Fresh (Eucalyptus Flavour + Vitamin C)', image: '/images/Eucalyptus-Pectol.jpg' },
    ],
    benefits: [],
    factsAndMyths: [
      { myth: 'Eucalyptus oil is an all-natural herbal extract, so drinking a few drops in warm water is perfectly safe to treat a cold.', fact: 'Pure eucalyptus oil is highly toxic and can be fatal if swallowed due to its acute neurotoxic camphor-like actions. It is strictly indicated for inhalation or external application unless chemically processed into specific, enteric-coated pharmaceutical products.' },
    ],
    botanicalFacts: {
      family: 'Myrtaceae',
      activeCompounds: '1,8-Cineole (Eucalyptol), 70–85% of essential oil',
      clinicalEvidence: 'Well-established use by EMA (European Medicines Agency) – EMA/HMPC/307781/2012.',
    },
    relatedPlants: ['pelargonium', 'black-elderberry'],
    references: [
      { text: 'Juergens et al. (2003). Anti-inflammatory activity of 1.8-cineole (eucalyptol) in bronchial asthma. Respiratory Medicine, 97(3), 250–256.' },
      { text: 'Yadegarinia et al. (2006). Biochemical activities of Iranian Mentha piperita and Eucalyptus globulus essential oils. Phytochemistry, 67(12), 1249–1255.' },
      { text: 'PeaceHealth Medical Topics — Eucalyptus Monograph.', url: 'https://www.peacehealth.org/medical-topics/id/hn-2086009' },
    ],
  },

  'ginger-cold': {
    id: 'ginger-cold',
    name: 'Ginger',
    nameAr: 'الزنجبيل',
    latinName: 'Zingiber officinale Roscoe',
    commonNames: ['Ginger', 'African Ginger', 'Cochin Ginger'],
    category: 'respiratory',
    subcategory: 'cold',
    tags: ['Anti-inflammatory', 'Antiviral', 'Antitussive', 'Cold & Flu'],
    image: '/images/home ginger.jpg',
    activeConstituents: [
      { name: 'Gingerols', detail: 'The primary active principles in fresh ginger rhizomes, with 6-gingerol being the most abundant and biologically active. It possesses potent anti-inflammatory and anti-emetic properties.' },
      { name: 'Shogaols', detail: 'Formed via the thermal dehydration of gingerols during drying or heating processes. 6-shogaol is the predominant compound in dry ginger, exhibiting significantly higher chemical stability and a more potent anti-inflammatory and neuroprotective profile than gingerols.' },
      { name: 'Paradols & Zingerone', detail: 'Secondary degradation products formed during long-term storage and cooking, contributing to the antioxidant and warming profile.' },
      { name: 'Volatile Essential Oils (1% to 3%)', detail: 'Composed primarily of sesquiterpene hydrocarbons, chiefly beta-zingiberene (up to 35%), ar-curcumene, beta-sesquiphellandrene, and alpha-farnesene, which dictate the characteristic spicy aroma and contribute to the antimicrobial and antispasmodic effects.' },
      { name: 'Phenolic Derivatives & Resins', detail: 'Provide secondary cellular antioxidant support and maintain gastric mucosal integrity at physiological doses.' },
    ],
    moa: [
      { title: 'Anti-inflammatory Action', detail: 'Effectively suppresses pro-inflammatory signaling pathways. 6-gingerol and 6-shogaol act as dual inhibitors of the arachidonic acid cascade by downregulating cyclooxygenase-2 (COX-2) and 5-lipoxygenase (5-LOX) pathways, leading to a significant reduction in the synthesis of pro-inflammatory prostaglandins (PGE₂) and leukotrienes (LTB₄). Furthermore, they inhibit the activation of Nuclear Factor-kappa B (NF-κB), thereby suppressing the release of pro-inflammatory cytokines (TNF-α, IL-1β, and IL-6).' },
      { title: 'Antispasmodic & Antitussive Effect', detail: 'Exerts a direct relaxant effect on airway smooth muscle cells (ASMCs). It blocks voltage-dependent calcium channels (VDCCs) and modulates intracellular calcium stores, which effectively mitigates bronchospasms and reduces non-productive, spasmodic coughing fits.' },
      { title: 'Antioxidant Effect', detail: 'Directly scavenges reactive oxygen species (ROS), including superoxide and hydroxyl free radicals, while upregulating endogenous antioxidant defense enzymes like superoxide dismutase (SOD) and catalase, mitigating respiratory oxidative stress during infections.' },
      { title: 'Antimicrobial & Antiviral Action', detail: 'Demonstrates notable in vitro antiviral activity, particularly against Respiratory Syncytial Virus (RSV) in human airway epithelium, by blocking viral attachment, internalization, and plaque formation. It also exhibits bacteriostatic actions against common secondary respiratory pathogens.' },
      { title: 'Local Demulcent & Soothing Effect', detail: 'When administered as a warm aqueous infusion, the mucilaginous and resinous fractions exert a local demulcent effect over the pharyngeal mucosa, reducing sensory nerve irritation, throat roughness, and vocal cord hoarseness.' },
    ],
    uses: [
      'Symptomatic Relief of Upper Respiratory Tract Infections: Alleviates secondary symptoms of the common cold, acute rhinitis, and influenza by promoting diaphoresis (mild sweating) and acting as a warming agent.',
      'Alleviation of Pharyngitis and Laryngitis: Relieves sore throats, pharyngeal inflammation, and associated hoarseness or loss of voice.',
      'Management of Non-Productive Coughs: Calms hyperreactive airways and spasmodic, dry coughs via peripheral smooth muscle relaxation.',
      'Reduction of Secondary Cold Symptoms: Aids in managing mild fever, chills, and associated tension headaches due to its systemic analgesic and antipyretic actions.',
    ],
    howToUse: [
      { method: 'Aqueous Infusion (Ginger Tea)', instruction: 'Steep 2–3 g of freshly sliced or grated rhizome in 200–250 mL of boiling water in a covered vessel for 10–15 minutes (to prevent the loss of volatile essential oils). Inhale vapors during consumption. Honey or lemon may be added as adjuvants.' },
      { method: 'Crude Dried Powder', instruction: '1–4 g daily, administered in divided doses 500–1000 mg per dose mixed with food or warm water.' },
      { method: 'Standardized Oral Capsules', instruction: '250–500 mg of standardized extract taken 2 to 4 times per day (typically standardized to contain 5% total gingerols/shogaols).' },
      { method: 'Local Lozenges / Candies', instruction: 'Used as needed to dissolve slowly in the buccal cavity for targeted, local antiseptic and anesthetic action in the pharynx.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Highly effective and clinically utilized for pregnancy-induced nausea and morning sickness. However, oral consumption must be strictly limited to a maximum of 1 g/day of dry ginger equivalent under medical supervision. High therapeutic doses are avoided due to theoretical risks of uterine contraction stimulation (oxytocic effect) and low-level inhibition of fetal testosterone binding. Safe during lactation at standard culinary doses.' },
      { group: 'Pediatrics (<2 years old)', notes: 'Strictly Contraindicated. Safe clinical data is absent for infants. For children over 2 years of age, very mild aqueous infusions may be administered under supervision at weight-adjusted, significantly reduced doses.' },
      { group: 'Geriatrics & Chronic Diseases', notes: 'Diabetes: Ginger enhances insulin sensitivity and may lower blood glucose; monitoring is required. Cardiovascular: May exert weak calcium-channel blocking properties; use with caution in patients taking antihypertensives. Cholelithiasis (Gallstones): Must be used with extreme clinical caution.' },
    ],
    overdose: {
      symptoms: [
        'Acute Oral Overdose (>5 g of dry ginger equivalent per day) — Symptoms: Severe gastric mucosal irritation, burning epigastric pain, severe heartburn, acid reflux, diarrhea, and local mouth/throat inflammation. At massive toxic doses, it can theoretically cause central nervous system depression and cardiac palpitations (due to positive inotropic actions of high-dose gingerols).',
        'Topical Irritation (Undiluted Essential Oil) — Symptoms: Erythema and hypersensitivity contact dermatitis.',
      ],
      management: [
        'Acute Oral Overdose: Discontinue use immediately. Administer oral antacids, H₂-receptor antagonists, or Proton Pump Inhibitors (PPIs) to soothe gastric mucosal erosion. Maintain hydration and electrolyte balance if diarrhea is present. Monitor coagulation profiles (PT/INR) if massive amounts were ingested due to theoretical antiplatelet actions.',
        'Topical Irritation: Wash thoroughly with cool water and soap; apply a neutral emollient.',
      ],
    },
    sideEffects: [],
    contraindications: [
      'Known hypersensitivity to Zingiber officinale or other members of the Zingiberaceae family (e.g., turmeric, cardamom).',
      'Active Cholelithiasis (Gallstones): Ginger exhibits a potent choleretic effect (stimulates bile secretion and gallbladder contraction), which can precipitate biliary colic or bile duct obstruction in patients with pre-existing gallstones.',
      'Active Peptic Ulcer Disease (PUD) or Ulcerative Colitis: May exacerbate underlying gastrointestinal lesions due to its pungent, local irritant properties when raw or highly concentrated.',
      'Severe Bleeding Disorders: (e.g., Hemophilia) due to potential anti-aggregatory effects on platelets.',
      'Major Pre-operative States: Must be discontinued 1 to 2 weeks prior to major surgical procedures.',
    ],
    drugInteractions: [
      { drug: 'Anticoagulants / Antiplatelets (e.g., Warfarin, Aspirin, Clopidogrel)', effect: 'Ginger inhibits thromboxane synthase and acts as a weak platelet aggregation inhibitor in vitro. While clinical trials show conflicting data regarding significant INR alterations, close monitoring of bleeding times and INR is mandatory during concurrent use.' },
      { drug: 'Antidiabetic Agents (e.g., Metformin, Insulin)', effect: 'May potentiate hypoglycemic effects by enhancing glucose uptake into skeletal muscle cells; blood glucose monitoring is recommended.' },
      { drug: 'Calcium Channel Blockers (CCBs) (e.g., Nifedipine, Verapamil)', effect: 'High therapeutic doses of ginger may exert additive hypotensive and bradycardic properties via synergistic voltage-dependent calcium channel blockade.' },
    ],
    storage: {
      forms: [
        { form: 'Dry Powder / Standardized Capsules', instructions: 'Must be stored in tightly sealed, light-resistant containers below 25°C in a dry environment to avoid moisture absorption and the hydrolytic degradation of active gingerols.' },
        { form: 'Fresh Ginger Rhizomes', instructions: 'Should be wrapped securely and refrigerated at 4°C to maintain cellular moisture and prevent fungal/microbial spoilage.' },
      ],
    },
    marketedProducts: [
      { name: 'Ginger Capsules 400mg (Mepaco Pharaonia)', image: '/images/Ginger-400mg-Mepaco.jpg' },
      { name: 'Strepsils Ginger & Lemon Lozenges', image: '/images/ginger2.jpg' },
      { name: 'iSiS Ginger ', image: '/images/ginger3.jpeg' },
    ],
    benefits: [],
    factsAndMyths: [
      {
        myth: 'Ginger kills the influenza virus completely and works as an instant biological cure for the common cold.',
        fact: 'Ginger does not eradicate or cure respiratory viral pathogens in vivo; rather, it acts as an exceptional supportive, evidence-based phytotherapy that significantly mitigates symptom severity, suppresses inflammatory cascades, and improves patient respiratory comfort.',
      },
    ],
    botanicalFacts: {
      family: 'Zingiberaceae',
      activeCompounds: 'Gingerols (6-gingerol), shogaols (6-shogaol), paradols, zingerone, volatile essential oils (1–3%: beta-zingiberene, ar-curcumene, beta-sesquiphellandrene, alpha-farnesene), phenolic derivatives and resins',
      clinicalEvidence: 'EMA (2014) European herbal monograph; WHO monograph on Zingiber officinale; Anh et al. (2020) comprehensive systematic review; Chang et al. (2013) demonstrated antiviral activity against RSV in human respiratory tract cell lines.',
    },
    relatedPlants: ['eucalyptus'],
    references: [
      { text: 'European Medicines Agency (EMA): European Union herbal monograph on Zingiber officinale Roscoe, rhizoma. (2014). Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO): WHO Monographs on Selected Medicinal Plants, Volume 1: Rhizoma Zingiberis. Geneva.' },
      { text: 'Anh, N. H., Kim, S. J., Long, N. P., Min, J. E., Yoon, Y. C., Lee, E. G., Kim, M., Al-Mazaideh, A. M., & Kwon, S. W. (2020). Ginger on Human Health: A Comprehensive Systematic Review of Randomized Clinical Trials. Nutrients, 12(1), 157.' },
      { text: 'Chang, J. S., Wang, K. C., Yeh, C. F., Shieh, D. E., & Chiang, L. C. (2013). Fresh ginger (Zingiber officinale) has antiviral activity against respiratory syncytial virus in human respiratory tract cell lines. Journal of Ethnopharmacology, 145(1), 146-151.' },
    ],
  },

  'lemon': {
    id: 'lemon',
    name: 'Lemon',
    nameAr: 'الليمون',
    latinName: 'Citrus limon (L.) Osbeck',
    commonNames: ['Lemon'],
    category: 'respiratory',
    subcategory: 'cold',
    tags: ['Vitamin C', 'Immune Support', 'Antitussive', 'Cold & Flu', 'Antioxidant'],
    image: '/images/Picture22.jpg',
    shortDescription: 'A powerful immune-supporting citrus fruit rich in Vitamin C, hesperidin, and citric acid: providing antioxidant defense, pharyngeal anti-inflammatory action, and effective demulcent relief for coughs and sore throats.',
    description: 'Lemon\'s therapeutic profile is determined by its rich content of citric acid (5-7%, pH ~2.0-3.0), Vitamin C (~40-50 mg/100 mL fresh juice), citrus flavanones (hesperidin, eriocitrin, naringin), and D-limonene (65-70% of peel volatile oil). Vitamin C accumulates within phagocytic cells (neutrophils and macrophages), enhancing chemotaxis, phagocytosis, and T-cell proliferation. When combined with honey, lemon creates a highly effective demulcent formulation coating the pharyngeal mucosa to soothe dry, tickling coughs. Note: avoid boiling water (>60°C) with fresh lemon juice: destroys L-ascorbic acid.',
    history: 'Originating in South Asia, lemons spread through Persia, the Middle East, and Europe via Arab traders in the 10th century. Vitamin C from citrus fruits famously cured scurvy in British sailors in the 18th century. Today, warm lemon honey water remains one of the most universally used home remedies for colds and sore throats across virtually every culture.',
    isDemo: false,
    activeConstituents: [
      { name: 'Citric Acid', percentage: '5-7% of fresh juice (pH ~2.0-3.0)', effect: 'Stimulates salivation, airway mucus secretion; local demulcent effect when diluted; mild antimicrobial (unfavorable pH for pathogens); potent crystallization inhibitor for calcium oxalate kidney stones' },
      { name: 'Vitamin C (Ascorbic Acid)', percentage: '~40-50 mg per 100 mL fresh juice', effect: 'Potent water-soluble antioxidant; accumulates in phagocytic cells enhancing chemotaxis, phagocytosis, T-cell proliferation, and differentiation' },
      { name: 'Hesperidin, Eriocitrin, Naringin (Flavanones)', percentage: '', effect: 'Downregulate iNOS and COX-2 expression, markedly decreasing pro-inflammatory mediators (PGE2 and NO); vascular protection' },
      { name: 'D-Limonene (Volatile Peel Oil)', percentage: '65-70% of peel oil', effect: 'Disrupts microbial cell membranes in vitro; responsible for antimicrobial and aromatic profile' },
      { name: 'Coumarins & Furanocoumarins (Peel: trace)', percentage: 'minor', effect: 'Clinically relevant for photosensitivity reactions (phytophotodermatitis) when peel oil contacts skin before sun exposure' },
    ],
    moa: [
      { title: 'Antioxidant Action', detail: 'Ascorbic acid directly scavenges reactive oxygen species (ROS) and free radicals, shielding respiratory epithelial cells from oxidative stress and cellular damage induced during acute viral infections.' },
      { title: 'Immune Response Support', detail: 'Vitamin C actively accumulates within phagocytic cells (neutrophils and macrophages), enhancing chemotaxis, phagocytosis, and the generation of reactive oxygen species to eradicate invading pathogens. Also promotes T-cell proliferation and differentiation.' },
      { title: 'Anti-inflammatory Action', detail: 'Citrus flavonoids (hesperidin and eriocitrin) downregulate the expression of inducible nitric oxide synthase (iNOS) and cyclooxygenase-2 (COX-2), leading to a marked decrease in pro-inflammatory mediators (PGE2 and NO).' },
      { title: 'Secretomotoric & Antitussive (Demulcent) Effect', detail: 'High acidity of citric acid stimulates gustatory nerves, triggering reflex salivation and secretion of airway mucus. When properly diluted with honey in warm water, acts as a local demulcent coating the pharyngeal mucosa, soothing irritated cough receptors and mitigating dry tickling coughs.' },
      { title: 'Mild Antimicrobial Properties', detail: 'Volatile components (primarily limonene) disrupt microbial cell membranes in vitro. Locally, the low pH of undiluted juice creates a transient acidic microenvironment on the tonsillar surface unfavorable for certain pH-sensitive pathogens.' },
    ],
    uses: [
      'Symptomatic relief of pharyngitis and tonsillitis: soothes acute sore throats and reduces pharyngeal inflammation',
      'Supportive therapy for upper respiratory tract infections (URTIs): reduces severity and duration of cold and influenza symptoms',
      'Alleviation of irritative dry cough: effective accessible domestic antitussive when formulated as warm demulcent mixture with honey',
      'Maintenance of hydration and restoration: clean, safe hydration fortified with electrolytes and vitamins during febrile states',
      'Management of hypocitraturia: dietary citrate acts as potent crystallization inhibitor for calcium oxalate kidney stones',
    ],
    howToUse: [
      { method: 'Standard Warm Lemon Infusion', instruction: 'Squeeze 15-30 mL of fresh lemon juice (approximately half a fresh lemon) into 200 mL of warm water. Drink 2-3 times daily.' },
      { method: 'Synergistic Demulcent Formulation', instruction: 'Mix 15 mL of fresh lemon juice with 1-2 teaspoons (5-10 mL) of pure honey in a cup of warm water. Sip slowly to coat the hypopharynx and suppress dry cough.' },
      { method: 'CRITICAL PREPARATION NOTE', instruction: 'AVOID adding boiling water (>60°C) directly to fresh lemon juice: thermal stress accelerates irreversible oxidation and degradation of bioactive L-ascorbic acid. Use warm, not boiling, water.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Completely safe and highly recommended at standard dietary/therapeutic doses. Widely utilized as non-pharmacological option to alleviate first-trimester morning sickness and gestational nausea.' },
      { group: 'Pediatrics (>1 year)', notes: 'Safe for general pediatric use. CRITICAL: If combining lemon juice with honey for pediatric cough management, NEVER administer to infants under 12 months due to fatal risk of infant botulism from Clostridium botulinum spore contamination in raw honey.' },
      { group: 'Advanced CKD (Stage 4-5)', notes: 'Limit heavy intake due to risk of hyperkalemia: lemon juice contains notable concentrations of potassium.' },
      { group: 'Nephrolithiasis', notes: 'Highly beneficial for patients prone to calcium oxalate stones: dietary citrate acts as potent crystallization inhibitor.' },
    ],
    dosage: {
      standard: 'Warm lemon infusion: juice of ½ lemon (15-30 mL) in 200 mL warm water, 2-3 times daily. With honey for cough: 15 mL juice + 5-10 mL honey in warm water.',
      forms: [
        { form: 'Warm Lemon Infusion', dose: '15-30 mL fresh juice in 200 mL warm water (<60°C), 2-3 times daily.' },
        { form: 'Lemon-Honey Demulcent', dose: '15 mL juice + 1-2 tsp honey in warm water; sip slowly 3-4 times daily for cough relief.' },
      ],
    },
    overdose: {
      symptoms: [
        'Excessive chronic intake (>5-6 whole lemons daily consistently):',
        'Gastrointestinal: Severe gastric acid reflux, acute pyrosis (heartburn), epigastric burning pain, transient osmotic diarrhea.',
        'Dental: Significant dental enamel erosion and dentin hypersensitivity due to prolonged chemical demineralization of calcium hydroxyapatite by citric acid.',
      ],
      management: [
        'Discontinue immediate excess intake.',
        'Administer oral antacids, calcium carbonate, H2-blockers, or PPIs to mitigate acute gastric distress.',
        'Dental Protection Protocol: Rinse oral cavity thoroughly with plain water or 0.05% sodium fluoride rinse.',
        'CRITICAL: Do NOT brush teeth for at least 30-60 minutes after acid exposure: mechanical friction will permanently strip away temporarily softened enamel matrix.',
      ],
    },
    sideEffects: [
      'Local irritation or worsening of aphthous ulcers (mouth sores)',
      'Aggravation of Gastroesophageal Reflux Disease (GERD) symptoms',
      'Contact dermatitis (rare: from handling peel oil/limonene followed by sun exposure; phytophotodermatitis)',
    ],
    contraindications: [
      'Severe active Gastritis, Erosive Esophagitis, or Peptic Ulcer Disease (PUD)',
      'Uncontrolled severe Gastroesophageal Reflux Disease (GERD)',
      'Known genetic hypersensitivity or clinical allergy to citrus fruits or Rutaceae family members',
    ],
    drugInteractions: [
      'Antacids Containing Aluminum: citric acid significantly enhances systemic aluminum absorption from oral antacids; risk of toxicity in renal impairment; separate administration by at least 2-3 hours',
      'pH-Dependent Drug Absorptions: massive lemon juice ingestion can transiently alter gastric pH, potentially reducing bioavailability of drugs requiring high acidity for absorption (e.g., Ketoconazole, Itraconazole)',
    ],
    storage: {
      forms: [
        { form: 'Fresh Whole Lemons', instructions: 'Store under refrigeration at 4-8°C to prevent moisture loss and inhibit mold growth (Penicillium species).' },
        { form: 'Freshly Squeezed Lemon Juice', instructions: 'Store in a tightly sealed glass container, refrigerated, and consume within 48-72 hours to avoid micro-oxidation of Vitamin C and microbial fermentation.' },
      ],
    },
    marketedProducts: [
      { name: 'C-Retard Ascorbic Acid 500mg', image: '/images/Picture23.jpg' },
      { name: 'Strepsils Lemon & Honey Pastilles 24', image: '/images/Picture24.jpg' },
    ],
    benefits: [
      { icon: 'shield', title: 'Immune Support', desc: 'Vitamin C accumulates in phagocytic cells enhancing chemotaxis, phagocytosis, and T-cell proliferation for comprehensive immune defense.' },
      { icon: 'thermostat', title: 'Antioxidant Defense', desc: 'Ascorbic acid scavenges ROS and free radicals, protecting respiratory epithelial cells during acute viral infections.' },
      { icon: 'spa', title: 'Sore Throat & Cough Relief', desc: 'Demulcent action (especially with honey) coats pharyngeal mucosa, soothing irritated cough receptors and tonsil inflammation.' },
      { icon: 'water_drop', title: 'Anti-inflammatory', desc: 'Hesperidin and eriocitrin downregulate iNOS and COX-2 expression, reducing pro-inflammatory mediators in the respiratory tract.' },
    ],
    botanicalFacts: {
      family: 'Rutaceae',
      nativeRegion: 'South Asia (likely northeastern India); widely cultivated throughout Mediterranean region, Americas, and subtropical zones worldwide',
      growthHabit: 'Evergreen small tree or shrub 3-6 m tall; thorny branches; fragrant white flowers; oval yellow fruit with acidic juice vesicles',
      activeCompounds: 'Citric acid (5-7%), Vitamin C, hesperidin, eriocitrin, naringin, D-limonene (peel)',
      cultivationNotes: 'World\'s third most important citrus crop after oranges and mandarins. Fresh juice is the primary therapeutic preparation; commercial products (Vitamin C supplements) are widely available',
    },
    preparation: [
      { method: 'Warm Lemon Infusion', desc: 'Squeeze ½ lemon (15-30 mL) into warm water (<60°C): never boiling.', bestFor: 'Hydration, Vitamin C delivery, mild immune support' },
      { method: 'Lemon-Honey Demulcent', desc: '15 mL fresh juice + 1-2 tsp honey in warm water, sip slowly.', bestFor: 'Dry irritative cough, sore throat, pharyngitis' },
    ],
    symptoms: ['Sore throat', 'Dry cough', 'Cold symptoms', 'Congestion', 'Hydration during fever', 'Immune support'],
    relatedPlants: ['eucalyptus'],
    references: [
      { text: 'Egyptian Drug Authority — Citrus lemon monograph.', url: 'https://share.google/HGyIszy5fXiY9Ud1i' },
      { text: 'Addi, M., et al. (2021). An overview of bioactive flavonoids from citrus fruits. Applied Sciences, 12(1), 29.', url: 'https://doi.org/10.3390/app12010029' },
      { text: 'Agarwal, P., et al. (2022). Citrus essential oils in aromatherapy: Therapeutic effects and mechanisms. Antioxidants, 11(12), 2374.', url: 'https://doi.org/10.3390/antiox11122374' },
    ],
  },

  'echinacea-cold': {
    id: 'echinacea-cold',
    name: 'Echinacea',
    nameAr: 'الإشنسيا',
    latinName: 'Echinacea purpurea (L.) Moench',
    commonNames: ['Echinacea', 'Purple Coneflower'],
    category: 'respiratory',
    subcategory: 'cold',
    tags: ['Immunomodulator', 'Antiviral', 'Anti-inflammatory', 'Cold & Flu'],
    image: '/images/echinacea-cold-main.jpg',
    shortDescription: 'A cornerstone immune-activating botanical for the common cold: activates macrophages and NK cells, inhibits respiratory virus replication, and significantly reduces cold severity and duration when initiated at the very first sign of symptoms.',
    description: 'The therapeutic efficacy of Echinacea purpurea relies on a complex mixture of synergistic lipophilic and hydrophilic secondary metabolites: alkamides (polyunsaturated fatty acid amides), caffeic acid derivatives chiefly cichoric acid (the most abundant phenolic component), polysaccharides including arabinogalactans and heteroxylans, and volatile terpenoids. Primary indication is prophylaxis and supportive short-term treatment of the common cold and acute upper respiratory tract infections. Must be initiated at the very first sign of respiratory symptoms.',
    isDemo: false,
    activeConstituents: [
      { name: 'Alkamides (Alkylamides)', detail: 'Primarily polyunsaturated fatty acid amides (e.g., isobutylamides), highly bioavailable and concentrated mostly in roots and aerial parts.' },
      { name: 'Caffeic Acid Derivatives (Phenolics)', detail: 'Chiefly Cichoric acid (the most abundant phenolic component in E. purpurea), alongside caftaric acid and echinacoside.' },
      { name: 'Polysaccharides and Glycoproteins', detail: 'High molecular weight arabinogalactans and heteroxylans.' },
      { name: 'Volatile Terpenoids', detail: 'Essential oils present across all plant tissue.' },
    ],
    moa: [
      { title: 'Immunomodulatory Effect', detail: 'Activates macrophages and natural killer (NK) cells. Enhances phagocytosis (the ability of immune cells to engulf pathogens). Stimulates the release of cytokines involved in the immune response.' },
      { title: 'Anti-inflammatory Effect', detail: 'Alkamides and caffeic acid derivatives help regulate inflammatory pathways. May reduce the production of pro-inflammatory mediators, leading to decreased cold symptoms such as sore throat and nasal inflammation.' },
      { title: 'Antiviral Activity', detail: 'Some studies suggest that Echinacea extracts can inhibit the replication of certain respiratory viruses, including rhinoviruses (the most common cause of the common cold). May reduce viral entry into host cells.' },
    ],
    uses: [
      'Primary Indication: Prophylaxis and supportive short-term treatment of the Common Cold and acute upper respiratory tract infections.',
      'Clinical Efficacy: Systematic reviews demonstrate that when standardized preparations are administered immediately at the early onset of cold symptoms, it significantly reduces both the severity and total duration of the illness.',
    ],
    howToUse: [
      { method: 'Route & Forms', instruction: 'Oral administration only. Forms: standardized expressed fresh juice (from aerial parts), hydroethanolic liquid extracts, tinctures, capsules, or tablets.' },
      { method: 'Timing', instruction: 'Must be initiated at the very first sign of respiratory symptoms (runny nose, scratchy throat) and continued daily for the course of the infection.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults and Elderly', notes: 'Safe for general use, presenting a robust tolerability profile when consumed short-term (under 6 to 8 weeks).' },
      { group: 'Pediatrics (<12 years)', notes: 'The European Medicines Agency (EMA) and the UK MHRA restrict the use of Echinacea preparations in children under 12 years of age due to an increased statistical risk of developing acute systemic allergic reactions or skin rashes.' },
      { group: 'Pregnancy and Lactation', notes: 'Although clinical reviews show no definitive correlation between oral Echinacea intake and major congenital malformations, structural safety parameters are not fully validated. Its use during pregnancy and lactation is not recommended unless clinically justified by a physician.' },
      { group: 'Chronic Disease Patients', notes: 'Patients with autoimmune diseases or those taking immunosuppressive drugs should consult a physician before use.' },
    ],
    dosage: {
      standard: 'Expressed Fresh Juice (E. purpurea herba): 6.0–9.0 ml in divided doses. Hydroethanolic Extract (Dry Root Equivalent): 500–2,000 mg crude root equivalent, split into 3 daily doses. Maximum Duration: up to 10 days per acute episode.',
      forms: [
        { form: 'Expressed Fresh Juice (E. purpurea herba)', dose: '6.0–9.0 ml in divided doses.' },
        { form: 'Hydroethanolic Extract (Dry Root Equivalent)', dose: '500–2,000 mg crude root equivalent, split into 3 daily doses. Maximum Duration: up to 10 days per acute episode.' },
      ],
    },
    overdose: {
      symptoms: [
        'No clearly defined toxic overdose level has been established, as it has a wide therapeutic index.',
        'Possible symptoms include: Nausea, Vomiting, Abdominal pain, Dizziness, Headache, Allergic reactions.',
      ],
      management: [
        'No specific antidote exists. Treatment is entirely symptomatic and supportive.',
        'Discontinue use immediately, maintain hydration, and administer antiemetics or antihistamines if localized allergic responses emerge.',
      ],
    },
    sideEffects: [
      'Gastrointestinal: Mild, transient nausea, vomiting, or abdominal discomfort.',
      'Dermatological/Allergic: Maculopapular skin rashes, urticaria (hives), pruritus, and localized facial swelling.',
      'Severe Hypersensitivity (Rare): Triggering of bronchospasms, acute asthma exacerbation, or systemic anaphylactic shock in highly sensitive individuals.',
    ],
    contraindications: [
      'Hypersensitivity: Known hypersensitivity or cross-reactivity to plants belonging to the Asteraceae (Compositae) family (e.g., chamomile, marigold, ragweed).',
      'Progressive Systemic & Autoimmune Diseases: Strictly contraindicated in conditions like Tuberculosis, Multiple Sclerosis (MS), Systemic Lupus Erythematosus (SLE), Collagenosis, Rheumatoid Arthritis, and HIV/AIDS. Echinacea\'s immunostimulant mechanism theoretically conflicts with the medical management of these diseases.',
      'Immunosuppressive Therapy: Patients taking immunosuppressants (e.g., cyclosporine, azathioprine) post-transplant or for autoimmune mitigation must avoid it, as it counteracts drug actions.',
    ],
    storage: {
      forms: [
        { form: 'All solid forms', instructions: 'Store below 25°C. Keep in a dry place. Protect from direct sunlight. Keep out of reach of children.' },
        { form: 'Liquid extracts', instructions: 'Must be sealed properly to prevent ethanol evaporation and precipitation of active components.' },
      ],
    },
    marketedProducts: [
      { name: 'Immulant Plus', image: '/images/echinacea-cold-product1.jpg' },
      { name: 'Mulone C', image: '/images/echinacea-cold-product2.jpg' },
    ],
    benefits: [
      { icon: 'shield', title: 'Immune Activation', desc: 'Activates macrophages and NK cells, enhancing phagocytosis and cytokine release for rapid immune defense against cold viruses.' },
      { icon: 'coronavirus', title: 'Antiviral Activity', desc: 'Inhibits replication of respiratory viruses including rhinoviruses (the most common cause of the common cold) and may reduce viral entry into host cells.' },
      { icon: 'healing', title: 'Anti-inflammatory', desc: 'Alkamides and caffeic acid derivatives regulate inflammatory pathways, reducing sore throat and nasal inflammation associated with cold symptoms.' },
    ],
    factsAndMyths: [
      {
        myth: 'Echinacea can completely prevent all colds.',
        fact: 'Research shows only a modest possible benefit, and it does not guarantee prevention.',
      },
    ],
    botanicalFacts: {
      family: 'Asteraceae',
      nativeRegion: 'North America (Great Plains and eastern North America); now widely cultivated worldwide',
      growthHabit: 'Herbaceous perennial 60–120 cm tall; large purple-pink cone-shaped flowers; entire aerial part (leaves, stems, flowers, roots) may be used medicinally',
      activeCompounds: 'Alkamides (alkylamides), cichoric acid, caftaric acid, echinacoside, arabinogalactans, heteroxylans, volatile terpenoids',
    },
    preparation: [
      { method: 'Expressed Fresh Juice', desc: '6.0–9.0 ml in divided doses, initiated at very first sign of symptoms.', bestFor: 'Acute common cold and upper respiratory tract infections' },
      { method: 'Capsules / Liquid Extract', desc: '500–2,000 mg crude root equivalent daily in 3 divided doses. Maximum 10 days per acute episode.', bestFor: 'Standardized dosing for cold prophylaxis and treatment' },
    ],
    symptoms: ['Cold symptoms', 'Flu', 'Sore throat', 'Congestion', 'Reduced immunity'],
    relatedPlants: ['ginger-cold', 'lemon', 'eucalyptus'],
    references: [
      { text: 'University of Cape Coast — Pharmacognosy: Echinacea purpurea.', url: 'https://pharmacognosy.ucc.edu.gh/echinacea-purpurea' },
      { text: 'Cochrane Complementary and Alternative Medicine — Common Cold.', url: 'https://cam.cochrane.org/common-cold' },
      { text: 'WebMD — Health Benefits, Safety, Dosage of Echinacea.', url: 'https://www.webmd.com/diet/health-benefits-echinacea' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // IMMUNITY › IMMUNE BOOSTING
  // ══════════════════════════════════════════════════════════════════════

  'echinacea': {
    id: 'echinacea',
    name: 'Echinacea',
    nameAr: 'الإشنسيا',
    latinName: 'Echinacea purpurea L. Moench',
    commonNames: ['Echinacea', 'Purple Coneflower'],
    category: 'immunity',
    subcategory: 'immune-boosting',
    tags: ['Immunomodulator', 'Cold & Flu Prevention', 'Adaptogen', 'Anti-inflammatory'],
    image: '/images/Picture57.png',
    shortDescription: 'A cornerstone immune-activating botanical: echinacea "trains" immune cells to be faster and more aggressive at the very first sign of cold or flu symptoms, with clinical studies showing significant reduction in URTI duration and severity.',
    description: 'Echinacea purpurea contains complex lipophilic isobutylamides (binding to CB2 cannabinoid receptors), phenylpropanoids (cichoric acid, caftaric acid, echinacoside: potent antioxidants), and high-molecular-weight polysaccharides (arabinogalactans) that directly stimulate macrophage cellular proliferation. CRITICAL TIMING: Must be initiated at the ABSOLUTE FIRST SIGN of cold or flu symptoms. Acute treatment must not exceed 10 consecutive days; prophylactic cycles must not exceed 8 weeks without a mandatory 3-week rest period.',
    history: 'Native to North America, echinacea was used extensively by Native American peoples for a wide variety of ailments including toothaches, sore throats, and as an antidote to snake bites. Introduced to European settlers in the 18th century, it became one of the most popular herbal medicines in the United States by the late 19th century. Modern clinical trials have validated its immune-modulating properties.',
    isDemo: false,
    activeConstituents: [
      { name: 'Alkamides (Lipophilic Isobutylamides)', percentage: '', effect: 'Bind to cannabinoid type 2 (CB2) receptors; primary drivers of immunomodulatory effects' },
      { name: 'Cichoric Acid, Caftaric Acid, Echinacoside (Phenylpropanoids)', percentage: '', effect: 'Hydrophilic phenolic derivatives; potent antioxidant and cellular protection' },
      { name: 'Arabinogalactans & Fucogalactoxyloglucans (High-MW Polysaccharides)', percentage: '', effect: 'Complex water-soluble structures that directly stimulate macro-granulocyte cellular proliferation' },
      { name: 'Volatile Essential Oils (Borneol, Bornyl acetate, Germacrene D)', percentage: '', effect: 'Aromatic and minor antimicrobial contributions' },
    ],
    moa: [
      { title: 'Phagocytosis Activation', detail: 'Significantly upregulates operational capacity, migration velocity, and ingestion efficiency of alveolar macrophages and circulating neutrophils, speeding up destruction of cellular pathogens.' },
      { title: 'Cytokine Cascade Modulation', detail: 'Triggers targeted release of immunomodulatory signaling proteins including Interferon (IFN), TNF-α, IL-1, and IL-10, priming the innate immune system for rapid pathogen response.' },
      { title: 'Hyaluronidase Enzymatic Inhibition', detail: 'Directly blocks the bacterial and viral enzyme hyaluronidase, successfully neutralizing the pathogen\'s ability to break down the intercellular matrix and preventing spread of infection into adjacent healthy tissues.' },
    ],
    uses: [
      'Respiratory defense: prophylaxis and acute treatment of recurrent common colds, seasonal influenza, and acute upper respiratory tract infections',
      'Urological support: adjuvant supportive therapy for recurrent lower urinary tract infections (UTIs)',
      'Topical healing: direct localized application for poorly healing superficial wounds, mild inflammatory acne, minor burns, skin scratches, and recurrent boils or abscesses',
    ],
    howToUse: [
      { method: 'Aqueous Infusion / Decoction', instruction: 'Simmer 1.0-2.0 grams of the dried herb in boiling water for 15 minutes.' },
      { method: 'CRITICAL TIMING', instruction: 'For maximum clinical efficacy, therapy MUST be initiated at the absolute FIRST SIGN of cold or flu symptoms (scratchy throat, minor chills). It is virtually useless if taken after the infection has fully established.' },
    ],
    suitableAgeGroups: [
      { group: 'Pediatrics (<2 years)', notes: 'STRICTLY CONTRAINDICATED: absolutely prohibited due to risk of severe systemic complications.' },
      { group: 'Pediatrics (2-12 years)', notes: 'Not recommended without direct medical supervision: heightened risk of precipitating severe T-cell-mediated allergic manifestations.' },
      { group: 'Pregnancy & Lactation', notes: 'Avoid completely: clinical safety and maternal-fetal outcome data have not been established.' },
      { group: 'Adults', notes: 'Primary target demographic. Adult prophylaxis/acute dose: 2.5-6.0 g dried herb daily in divided doses.' },
    ],
    dosage: {
      standard: 'Adult prophylaxis/acute dose: 2.5-6.0 g dried herb daily in divided doses. Duration limits: Acute treatment max 10 consecutive days; prophylactic cycles max 8 weeks with mandatory 3-week rest.',
      forms: [
        { form: 'Aqueous Infusion / Decoction', dose: '1.0-2.0 g dried herb in boiling water, simmered 15 minutes; 2-3 cups daily.' },
        { form: 'Standardized Capsules/Extracts', dose: '2.5-6.0 g dried herb equivalent daily in divided doses. Max 10 consecutive days acute; max 8 weeks prophylactic.' },
      ],
    },
    overdose: {
      symptoms: [
        'No cases of acute lethal toxicity have been documented in human medical literature.',
        'Theoretical risk of extreme megadosing (>1000× therapeutic range): Paradoxical immunosuppression: reversing immune-boosting action and crashing white cell activity.',
      ],
      management: [
        'Immediate discontinuation of the herb.',
        'Initiate aggressive oral or IV fluid hydration.',
        'Execute symptomatic management of any secondary allergic or hypersensitivity manifestations.',
      ],
    },
    sideEffects: [
      'Generally very well tolerated at recommended doses and durations',
      'Mild gastrointestinal discomfort in some individuals',
      'Rare: allergic reactions, particularly in individuals allergic to Asteraceae family plants',
    ],
    contraindications: [
      'Systemic autoimmune disorders: STRICTLY contraindicated in Multiple Sclerosis (MS), Systemic Lupus Erythematosus (SLE), and Rheumatoid Arthritis (RA): can stimulate immune system to attack body\'s own tissues',
      'Progressive systemic diseases: prohibited in Tuberculosis, Sarcoidosis, and systemic white blood cell disorders (Leukosis, Leukemia)',
      'Organ transplants: absolutely prohibited before, during, or after transplant surgeries as it directly antagonizes immunosuppressant therapies (Cyclosporine, Corticosteroids)',
    ],
    drugInteractions: [
      'Cytochrome P450: may inhibit CYP3A4 enzymes, altering clearance of heavily metabolized drugs',
      'Econazole: concurrent use may significantly decrease localized therapeutic action of Econazole vaginal creams',
      'Immunosuppressants: directly antagonizes essential immunosuppressant therapies; avoid in transplant patients',
    ],
    storage: {
      forms: [
        { form: 'All forms', instructions: 'Store in a cool, dark, and perfectly dry environment within airtight containers to safeguard the delicate alkamides from thermal breakdown.' },
      ],
    },
    marketedProducts: [
      { name: 'Immulant Capsules: Echinacea Extract 175mg (Mepaco)', image: '/images/Picture58.png' },
      { name: 'Echinacea 400mg Capsules (Now Foods)', image: '/images/Picture59.png' },
    ],
    benefits: [
      { icon: 'shield', title: 'Immune Activation', desc: 'Upregulates macrophage and neutrophil capacity to detect and destroy pathogens faster: proven to reduce cold duration and severity.' },
      { icon: 'science', title: 'Cytokine Priming', detail: '', desc: 'Triggers targeted release of IFN, TNF-α, IL-1, and IL-10 to prime innate immune system at first sign of infection.' },
      { icon: 'block', title: 'Hyaluronidase Inhibition', desc: 'Blocks bacterial/viral enzyme preventing spread of infection into adjacent healthy tissues.' },
      { icon: 'healing', title: 'Topical Wound Healing', desc: 'Direct localized application promotes healing of superficial wounds, minor burns, acne, and recurrent boils.' },
    ],
    botanicalFacts: {
      family: 'Asteraceae / Compositae',
      nativeRegion: 'North America (Great Plains and eastern North America); now widely cultivated worldwide',
      growthHabit: 'Herbaceous perennial growing 60-120 cm tall; large purple-pink cone-shaped flowers; entire aerial part (leaves, stems, flowers, roots) may be used medicinally',
      activeCompounds: 'Isobutylamides (alkamides), cichoric acid, caftaric acid, echinacoside, arabinogalactans',
      cultivationNotes: 'Three species are medicinal: E. purpurea (most studied), E. angustifolia, and E. pallida: each has somewhat different constituent profiles and suggested uses. Purpurea is the most commercially available.',
    },
    preparation: [
      { method: 'Decoction at First Symptoms', desc: 'Simmer 1-2 g dried herb in boiling water for 15 min; 2-3 cups daily. Start IMMEDIATELY at first sign of cold.', bestFor: 'Acute URTI prophylaxis and treatment; immune activation' },
      { method: 'Standardized Capsules / Liquid Extract', desc: 'Commercially standardized preparations for consistent dosing.', bestFor: 'Prophylactic immune maintenance cycles (max 8 weeks, then 3-week break)' },
    ],
    symptoms: ['Cold symptoms', 'Flu', 'Recurrent infections', 'Reduced immunity', 'Minor wounds'],
    relatedPlants: ['black-seed', 'astragalus', 'turmeric'],
    references: [
      { text: 'Duke, J. A., et al. (2002). Handbook of Medicinal Herbs (2nd ed.). CRC Press.' },
      { text: 'Chevallier, A. (2016). Encyclopedia of Herbal Medicine (3rd ed.). DK Publishing.' },
      { text: 'Egyptian Drug Authority — Echinacea purpurea monograph.', url: 'https://edaegypt.gov.eg/media/tkbhrjew/echinacea-purpurea-l-moench-%D8%A5%D8%B4%D9%86%D8%B3%D9%8A%D8%A7.pdf' },
    ],
  },

  'black-seed': {
    id: 'black-seed',
    name: 'Black Seed',
    nameAr: 'حبة البركة',
    latinName: 'Nigella sativa L.',
    commonNames: ['Black Seed', 'Black Cumin', 'Habbat al-Barakah'],
    category: 'immunity',
    subcategory: 'immune-boosting',
    tags: ['Immunomodulator', 'Anti-inflammatory', 'Bronchodilator', 'Antidiabetic', 'Adaptogen'],
    image: '/images/black-seed-main.jpg',
    shortDescription: 'Revered in prophetic medicine as a cure for "everything except death": Thymoquinone provides advanced immunomodulation, 5-LOX inhibition, mast cell stabilization, and powerful anti-inflammatory and antidiabetic actions.',
    description: 'Black seed\'s primary crystalline phenol is Thymoquinone (TQ), which acts as a direct 5-LOX enzyme inhibitor stopping leukotriene production, significantly accelerates Natural Killer (NK) cell cytotoxic capacity, and boosts macrophage phagocytic activity. The nigellone fraction provides potent anti-histaminic and bronchodilator action. CRITICAL PREPARATION: Whole seeds must be crushed or ground IMMEDIATELY before use: pre-ground seeds or continuous boiling causes complete evaporation of volatile TQ, stripping all medicinal value. Must be taken WITH FOOD to enhance lipophilic absorption.',
    history: 'Found in Tutankhamun\'s tomb, black seed has been used for over 3,000 years in Islamic, Ayurvedic, and Chinese traditional medicine. It holds a special place in Islamic medicine where the Prophet Muhammad (PBUH) is reported to have said it is a cure for "everything except death." Modern research has validated many of these properties through rigorous clinical trials.',
    isDemo: false,
    activeConstituents: [
      { name: 'Thymoquinone (TQ)', percentage: '', effect: 'Primary core bioactive crystalline phenol; direct 5-LOX enzyme inhibitor; immunomodulator; anti-inflammatory; antidiabetic' },
      { name: 'Thymohydroquinone', percentage: '', effect: 'Secondary active phenol with immunomodulatory properties' },
      { name: 'Nigellone', percentage: '', effect: 'Provides powerful anti-histaminic action; protects bronchial tissue from histamine-induced spasms; relaxes hyperreactive airways' },
      { name: 'p-Cymene (Volatile Oil)', percentage: '', effect: 'Aromatic and minor antimicrobial contributions' },
      { name: 'Linoleic Acid & Oleic Acid (Fixed Oil)', percentage: '', effect: 'Predominantly long-chain unsaturated fatty acids; essential for lipophilic bioavailability of TQ' },
      { name: 'Nigellicine & Nigellidine (Isoquinoline Alkaloids)', percentage: '', effect: 'Structurally unique compounds with secondary pharmacological activity' },
      { name: 'Beta-sitosterol, Vitamins, Minerals', percentage: '', effect: 'Dense nutritional matrix supporting overall therapeutic activity' },
    ],
    moa: [
      { title: 'Advanced Immunomodulation', detail: 'Significantly accelerates the cytotoxic destructive capacity of Natural Killer (NK) cells and markedly boosts the baseline phagocytic capacity of tissue macrophages.' },
      { title: 'Targeted Anti-inflammatory Pathway (5-LOX Inhibition)', detail: 'Functions as a direct 5-LOX (5-Lipoxygenase) enzyme inhibitor, stopping the production of pro-inflammatory leukotrienes that drive acute allergic and asthmatic bronchospasms.' },

    ],
    uses: [
      'Systemic immune and antioxidant support: upregulation of cellular defense lines',
      'Cardiovascular and lipid control: clinical management of dyslipidemia (balancing LDL/HDL ratios) and mild vascular smooth muscle relaxation for hypertension',
      'Endocrine regulation: excellent adjuvant therapy for blood glucose control in Type 2 Diabetes Mellitus',
    ],
    howToUse: [
      { method: 'CRITICAL PREPARATION', instruction: 'Whole seeds MUST be crushed or ground IMMEDIATELY before use. Pre-ground seeds or exposure of crushed seeds to open air causes volatile Thymoquinone to evaporate completely, stripping the herb of its medicinal value. Continuous boiling is also strictly prohibited for the same reason.' },
      { method: 'Lipophilic Bioavailability Protocol', instruction: 'Thymoquinone is strictly lipophilic (fat-soluble). Oil or crushed powder MUST be administered WITH or IMMEDIATELY AFTER MEALS to enhance intestinal absorption while minimizing gastric irritation.' },
      { method: 'Titration Rule', instruction: 'Always initiate therapy at the lowest possible baseline dose (2.5 mL of oil or 1.0 g of seeds) for the first week to properly evaluate individual gastric tolerance.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults & Adolescents', notes: 'Primary demographic for metabolic and respiratory therapeutic protocols.' },
      { group: 'Pediatrics', notes: 'Requires direct medical supervision with highly precise weight-adjusted dosing.' },
      { group: 'Pregnancy', notes: 'STRICTLY CONTRAINDICATED: oil and concentrated therapeutic extracts can stimulate sudden uterine contractions, presenting severe risk of involuntary abortion.' },
      { group: 'Lactation', notes: 'Clinical safety has not been fully mapped; usage during breastfeeding is NOT RECOMMENDED.' },
    ],
    dosage: {
      standard: 'Start with lowest dose first week (titration). General immune support: ~500 mg seeds/day or 2.5 mL oil/day. Always take WITH FOOD.',
      forms: [
        { form: 'Powdered Seeds: General Immune Support', dose: '~500 mg daily.' },
        { form: 'Powdered Seeds: Type 2 Diabetes', dose: '2.0-3.0 g daily for continuous 3-month cycle.' },
        { form: 'Powdered Seeds: Hypertension Support', dose: '200-400 mg daily.' },
        { form: 'Cold-Pressed Oil: General Immune Maintenance', dose: '2.5 mL daily.' },
        { form: 'Cold-Pressed Oil: Type 2 Diabetes', dose: '5.0 mL once daily, or 2.5 mL twice daily.' },
        { form: 'Cold-Pressed Oil: Hypertension', dose: '2.5 mL twice daily.' },
      ],
    },
    overdose: {
      symptoms: [
        'No documented cases of acute human lethal toxicity. Animal models indicate lethal threshold at 540-580 mg/kg body weight: far beyond standard clinical doses.',
        'Symptoms: Severe acute hypotension (dangerous blood pressure drops), profound hypoglycemia (sugar crashes), and intense gastrointestinal erosion or distress.',
      ],
      management: [
        'Immediately cease all black seed or oil intake.',
        'Execute aggressive oral or IV rehydration protocols.',
        'Implement continuous mandatory monitoring of systemic blood glucose and blood pressure parameters.',
      ],
    },
    sideEffects: [
      'Gastrointestinal irritation if taken without food (especially at initiation)',
      'Potential hypotension with high doses',
      'Potential hypoglycemia especially when combined with diabetes medications',
    ],
    contraindications: [
      'Known hypersensitivity to the plant',
      'Pre-existing bleeding or coagulation disorders (due to antiplatelet properties)',
      'Scheduled major surgery: must discontinue use completely 2 weeks prior to any operative procedures to prevent intraoperative bleeding risks',
      'Pregnancy: stimulates uterine contractions',
    ],
    drugInteractions: [
      'THE MONITORING RULE: Patients stabilized on Metformin, Sulfonylureas, or Calcium Channel Blockers (e.g., Amlodipine) MUST perform strict mandatory daily blood glucose and blood pressure tracking when starting black seed therapy',
      'Anticoagulants: may significantly increase risk of bruising and prolonged bleeding',
      'CNS Depressants & Serotonergic Agents: concurrent use can exacerbate respiratory depression, induce excessive somnolence, or risk dangerous serotonin fluctuations',
      'Diuretics: may accelerate renal potassium loss, causing hypokalemia',
    ],
    storage: {
      forms: [
        { form: 'Whole Seeds & Oil', instructions: 'Store in airtight, amber or dark opaque glass containers in a cool, dry location to prevent light-induced oxidation of delicate fixed and volatile fatty acids.' },
      ],
    },
    marketedProducts: [
      { name: 'Baraka 450mg Black Seed Oil Capsules (Pharco)', image: '/images/Baraka-Black-Seed-Capsules.jpg' },
      { name: 'Imtenan Cold-Pressed Black Seed Oil', image: '/images/Picture61.png' },
      { name: "El-Captain Habbat al-Barakah Oil", image: '/images/El-Captain-Black-Seed-Oil.jpg' },
      { name: 'Shana Black Seed Oil', image: '/images/Picture62.png' },
    ],
    benefits: [
      { icon: 'shield', title: 'NK Cell Activation', desc: 'Significantly accelerates cytotoxic destructive capacity of Natural Killer cells and boosts macrophage phagocytic activity for comprehensive immune defense.' },
      { icon: 'bloodtype', title: 'Metabolic Support', desc: 'Clinical evidence for adjuvant management of Type 2 Diabetes, dyslipidemia (LDL/HDL balance), and mild hypertension.' },
      { icon: 'spa', title: 'Anti-inflammatory', desc: 'Broad anti-inflammatory profile via 5-LOX inhibition reduces inflammatory mediators across multiple organ systems.' },
    ],
    botanicalFacts: {
      family: 'Ranunculaceae',
      nativeRegion: 'Southern Europe, North Africa, and South Asia; widely cultivated in the Middle East, India, and North Africa',
      growthHabit: 'Annual herb growing 20-30 cm tall; white or pale blue flowers; triangular black seeds (the medicinal part) inside inflated pods',
      activeCompounds: 'Thymoquinone (TQ), thymohydroquinone, nigellone, linoleic acid, oleic acid, nigellicine, nigellidine',
      cultivationNotes: 'Seeds must be freshly crushed immediately before use: pre-grinding leads to rapid TQ evaporation and complete loss of medicinal activity. Cold-pressed oil preserves TQ best. Avoid boiling.',
    },
    preparation: [
      { method: 'Freshly Crushed Seeds WITH Food', desc: 'Crush immediately before use; take with or immediately after meals for optimal TQ absorption. Start with titration dose.', bestFor: 'Immune support, asthma, diabetes, hypertension' },
      { method: 'Cold-Pressed Oil WITH Food', desc: '2.5-5 mL cold-pressed oil taken with food; do not heat.', bestFor: 'All indications; easier to take than crushed seeds; best bioavailability' },
    ],
    symptoms: ['Reduced immunity', 'Asthma', 'Allergy', 'High blood sugar', 'High cholesterol', 'Hypertension'],
    relatedPlants: ['echinacea', 'astragalus', 'turmeric'],
    references: [
      { text: 'ScienceDirect — Nigella sativa pharmacology.', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0041010124003593' },
      { text: 'WebMD — Black Seed.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-901/black-seed' },
      { text: 'Frontiers in Pharmacology — Black seed review.', url: 'https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1417013/full' },
      { text: 'International Journal of Advanced Biological and Biomedical Research — Nigella sativa.', url: 'https://www.ijabbr.com/article_712694_0a0a34b2f0cc578baf9052ee287b18d0.pdf' },
      { text: 'PubMed — Black seed anti-inflammatory activity.', url: 'https://pubmed.ncbi.nlm.nih.gov/23855426/' },
      { text: 'PubMed Central — Nigella sativa therapeutic effects.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4387228/' },
      { text: 'Duke, J. A., et al. (2002). Handbook of Medicinal Herbs (2nd ed.). CRC Press.' },
      { text: 'Chevallier, A. (2016). Encyclopedia of Herbal Medicine (3rd ed.). DK Publishing.' },
      { text: 'Egyptian Drug Authority — Nigella sativa monograph.', url: 'https://www.edaegypt.gov.eg/media/cuobaarg/nigella-sativa-l-_1.pdf' },
    ],
  },

  'astragalus': {
    id: 'astragalus',
    name: 'Astragalus',
    nameAr: 'الأستراغالوس',
    latinName: 'Astragalus mongholicus Bunge (syn. Astragalus membranaceus (Fisch.) Bunge)',
    commonNames: ['Astragalus', 'Huang Qi', 'Membranous Milk-vetch'],
    category: 'immunity',
    subcategory: 'immune-boosting',
    tags: ['Adaptogen', 'Immunomodulator', 'Antiviral', 'Fatigue', 'Respiratory'],
    image: '/images/Picture63.png',
    shortDescription: 'A true adaptogen and cornerstone of Traditional Chinese Medicine: astragalus polysaccharides and astragaloside IV trigger interferon production, T-cell activation, and antiviral defense, making it one of the most extensively studied immune-restorative botanicals.',
    description: 'Astragalus contains astragalan polysaccharides (foundational for adaptogenic and interferonogenic properties), a triterpenoid saponin matrix of Astragalosides I-X (with Astragaloside IV as the most pharmacologically active), and bioflavonoids (quercetin, kaempferol). It triggers the endogenous cellular production of Interferon, potentiates T-lymphocyte and NK cell proliferation, and works synergistically to stop viral replication cycles including Coxsackie B and common respiratory cold viruses. Best used for PREVENTATIVE PROPHYLAXIS or post-viral recovery phase: not during phases of high fever or acute severe inflammation.',
    history: 'A central pillar of Traditional Chinese Medicine (TCM) for over 2,000 years, known as "Huang Qi" (Yellow Leader) due to its yellow root and supreme adaptogenic status. Listed in the ancient Chinese medical text Shennong Bencao Jing (circa 200 AD) as a superior tonic. Modern pharmacological research has validated its interferonogenic properties and clinical trials have confirmed its use in respiratory prophylaxis and post-chemotherapy immune recovery.',
    isDemo: false,
    activeConstituents: [
      { name: 'Astragalan Polysaccharides', percentage: '', effect: 'Complex high-molecular-weight water-soluble glycans; foundational pillars for adaptogenic and interferonogenic properties; directly stimulate immune cell proliferation' },
      { name: 'Astragalosides I-X (Triterpenoid Saponins)', percentage: '', effect: 'Specialized chemical matrix; Astragaloside IV is most pharmacologically active and heavily researched' },
      { name: 'Quercetin, Kaempferol, Specialized Isoflavones (Bioflavonoids)', percentage: '', effect: 'Cellular vascular stabilization; antioxidant; anti-inflammatory support' },
      { name: 'Asparagine, β-sitosterol, Nickel, Chromium (Trace Amino Acids & Minerals)', percentage: '', effect: 'Dense concentrations of essential trace elements supporting overall metabolic and immune function' },
    ],
    moa: [
      { title: 'True Adaptogenic Action', detail: 'Systemically increases the human body\'s non-specific physiological resistance to severe physical, mental, and environmental stress factors.' },
      { title: 'Interferonogenic Stimulation', detail: 'Directly triggers the endogenous cellular production of Interferon, which plays an essential role in initiating the body\'s primary defense against viral invasions.' },
      { title: 'T-Cell Signaling Activation', detail: 'Potentiates and accelerates the proliferation, maturation, and cytotoxic capacity of T-lymphocytes and Natural Killer (NK) immune cell lines.' },
      { title: 'Antiviral Synergistic Defense', detail: 'Works in synergy with natural cellular processes to stop viral replication cycles, showing documented effectiveness against Coxsackie B and common respiratory cold viruses.' },
    ],
    uses: [
      'Immune restoration: debris clearance and profound enhancement of compromised or sluggish immune systems',
      'Respiratory prophylaxis: long-term preventative management of the common cold, acute rhinitis, and upper respiratory tract infections',
      'Chronic fatigue management: mitigation of profound mental and physical fatigue induced by prolonged stress or post-viral recovery phases',
      'Research: Adjuvant therapy improving quality of life and immune recovery for patients undergoing chemotherapy',
    ],
    howToUse: [
      { method: 'Raw Root Decoction', instruction: 'Boil 9-30 grams of the sliced dried root daily in water, allowing it to fully simmer to extract the heavy polysaccharides.' },
      { method: 'Standardized Dry Extract Capsules', instruction: 'Administer 100-150 mg of standardized extract exactly three times daily.' },
      { method: 'Fluid Extract Dilution (1: 2)', instruction: '4.5-8.5 mL administered daily in carefully divided doses. (A 1: 2 dilution contains 1 g of the herb per 2 mL of liquid).' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Primary target demographic for therapeutic restoration and stress adaptation.' },
      { group: 'Pediatrics & Adolescents (<18 years)', notes: 'NOT RECOMMENDED by the Egyptian Drug Authority (EDA): lack of long-term safety data.' },
      { group: 'Pregnancy & Lactation', notes: 'STRICTLY AVOIDED: clinical safety profile is absent; no verified human fertility or gestational data available.' },
    ],
    dosage: {
      standard: 'Standardized extract capsules: 100-150 mg three times daily. Raw root decoction: 9-30 g daily. Best used preventatively: NOT during high fever or acute severe inflammation.',
      forms: [
        { form: 'Standardized Dry Extract Capsules', dose: '100-150 mg three times daily.' },
        { form: 'Raw Root Decoction', dose: '9-30 g sliced dried root boiled daily.' },
        { form: 'Fluid Extract (1: 2)', dose: '4.5-8.5 mL daily in divided doses.' },
      ],
    },
    overdose: {
      symptoms: [
        'Toxicity is clinically relevant primarily during prolonged megadosing protocols that massively exceed the therapeutic range (typically exceeding 60 g raw root per day).',
        'Symptoms: Acute hypertension (blood pressure spikes), rapid heart rate with intense palpitations, chronic insomnia, and neurological overstimulation or anxiety.',
      ],
      management: [
        'Discontinue all herb intake immediately.',
        'Implement rigorous monitoring of blood pressure and cardiac rhythm parameters.',
        'Mandate increased fluid intake to accelerate renal clearance.',
      ],
    },
    sideEffects: [
      'Generally very well tolerated at recommended doses',
      'Rare: mild gastrointestinal discomfort at high doses',
      'Potential blood pressure and cardiac rhythm disturbances with massive overdosing',
    ],
    contraindications: [
      'Active autoimmune diseases: STRICTLY contraindicated in active Lupus (SLE) or Rheumatoid Arthritis (RA); overstimulating a hyperactive immune system can worsen the condition',
      'Organ transplants: ABSOLUTELY PROHIBITED due to direct chemical antagonism with post-transplant immunosuppressant drugs (Cyclophosphamide)',
      'State of acute high infection: do NOT initiate use during phases of high fever or acute severe inflammation; best used for PREVENTATIVE PROPHYLAXIS or post-viral recovery',
    ],
    drugInteractions: [
      'Antihypertensives: astragalus can unpredictably decrease or increase the action of blood pressure medications; concurrent use must be avoided or monitored',
      'Immunomodulatory Drugs: potentiates Interleukin-2 (IL-2) in some profiles but can conflict in others; inhibits hepatic CYP3A4 metabolic pathway: caution with medications using this pathway',
      'CRITICAL LAB: Can alter coagulation profiles: increases Prothrombin Time (PT) and International Normalized Ratio (INR)',
    ],
    storage: {
      forms: [
        { form: 'All forms', instructions: 'Store within tightly sealed, airtight containers completely protected from ambient moisture and direct sunlight to ensure long-term preservation of active saponins.' },
      ],
    },
    marketedProducts: [
      { name: "Puritan's Pride Astragalus 470mg 100 Capsules", image: '/images/Picture65.jpg' },
      { name: "Nature's Way Astragalus Root Capsules", image: '/images/Picture64.png' },
    ],
    benefits: [
      { icon: 'shield', title: 'True Adaptogen', desc: 'Systemically increases non-specific physiological resistance to physical, mental, and environmental stress factors.' },
      { icon: 'coronavirus', title: 'Interferonogenic', desc: 'Triggers endogenous cellular production of Interferon: essential primary defense initiator against viral invasions.' },
      { icon: 'medical_services', title: 'T-Cell & NK Cell Activation', desc: 'Potentiates proliferation, maturation, and cytotoxic capacity of T-lymphocytes and Natural Killer immune cells.' },
      { icon: 'energy_savings_leaf', title: 'Anti-fatigue', desc: 'Clinically validated for mitigation of profound chronic fatigue and post-viral recovery syndrome.' },
    ],
    botanicalFacts: {
      family: 'Fabaceae / Leguminosae',
      nativeRegion: 'Northern and Eastern China, Mongolia, Korea: widely cultivated in China for TCM',
      growthHabit: 'Perennial herb growing 20-40 cm tall; compound leaves; yellowish flowers; long taproot (the medicinal part) harvested after 4-5 years',
      activeCompounds: 'Astragalan polysaccharides, Astragalosides I-X (especially Astragaloside IV), quercetin, kaempferol, asparagine, β-sitosterol',
      cultivationNotes: 'Root (Radix Astragali / Huang Qi) is the medicinal part; harvested in spring or autumn from plants at least 4 years old. Standardized extracts guarantee minimum polysaccharide and saponin content.',
    },
    preparation: [
      { method: 'Root Decoction', desc: 'Boil 9-30 g sliced dried root in water for full simmering to extract heavy polysaccharides.', bestFor: 'Immune restoration, respiratory prophylaxis, chronic fatigue' },
      { method: 'Standardized Capsules', desc: '100-150 mg standardized extract three times daily.', bestFor: 'Convenient therapeutic dosing for immune prophylaxis and post-viral recovery' },
    ],
    symptoms: ['Reduced immunity', 'Recurrent infections', 'Chronic fatigue', 'Post-viral weakness', 'Respiratory vulnerability'],
    relatedPlants: ['echinacea', 'black-seed', 'turmeric'],
    references: [
      { text: 'Duke, J. A., et al. (2002). Handbook of Medicinal Herbs (2nd ed.). CRC Press.' },
      { text: 'Chevallier, A. (2016). Encyclopedia of Herbal Medicine (3rd ed.). DK Publishing.' },
      { text: 'Egyptian Drug Authority — Astragalus monograph.', url: 'https://www.edaegypt.gov.eg/media/nmfpej2l/astragalus-mongholicus_1.pdf' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // IMMUNITY › IMMUNE BOOSTING
  // ══════════════════════════════════════════════════════════════════════

  'echinacea-immunity': {
    id: 'echinacea-immunity',
    name: 'Echinacea',
    nameAr: 'الإشنسيا',
    latinName: 'Echinacea purpurea L. Moench',
    commonNames: ['Echinacea', 'Purple Coneflower'],
    category: 'immunity',
    subcategory: 'immune-boosting',
    tags: ['Immunomodulator', 'Cold & Flu Prevention', 'Adaptogen', 'Anti-inflammatory'],
    image: '/images/Picture57.png',
    shortDescription: 'A cornerstone immune-activating botanical: echinacea "trains" immune cells to be faster and more aggressive at the very first sign of cold or flu symptoms, with clinical studies showing significant reduction in URTI duration and severity.',
    description: 'Echinacea purpurea contains complex lipophilic isobutylamides (binding to CB2 cannabinoid receptors), phenylpropanoids (cichoric acid, caftaric acid, echinacoside: potent antioxidants), and high-molecular-weight polysaccharides (arabinogalactans) that directly stimulate macrophage cellular proliferation. CRITICAL TIMING: Must be initiated at the ABSOLUTE FIRST SIGN of cold or flu symptoms. Acute treatment must not exceed 10 consecutive days; prophylactic cycles must not exceed 8 weeks without a mandatory 3-week rest period.',
    history: 'Native to North America, echinacea was used extensively by Native American peoples for a wide variety of ailments including toothaches, sore throats, and as an antidote to snake bites. Introduced to European settlers in the 18th century, it became one of the most popular herbal medicines in the United States by the late 19th century. Modern clinical trials have validated its immune-modulating properties.',
    isDemo: false,
    activeConstituents: [
      { name: 'Alkamides (Lipophilic Isobutylamides)', percentage: '', effect: 'Bind to cannabinoid type 2 (CB2) receptors; primary drivers of immunomodulatory effects' },
      { name: 'Cichoric Acid, Caftaric Acid, Echinacoside (Phenylpropanoids)', percentage: '', effect: 'Hydrophilic phenolic derivatives; potent antioxidant and cellular protection' },
      { name: 'Arabinogalactans & Fucogalactoxyloglucans (High-MW Polysaccharides)', percentage: '', effect: 'Complex water-soluble structures that directly stimulate macro-granulocyte cellular proliferation' },
      { name: 'Volatile Essential Oils (Borneol, Bornyl acetate, Germacrene D)', percentage: '', effect: 'Aromatic and minor antimicrobial contributions' },
    ],
    moa: [
      { title: 'Phagocytosis Activation', detail: 'Significantly upregulates operational capacity, migration velocity, and ingestion efficiency of alveolar macrophages and circulating neutrophils, speeding up destruction of cellular pathogens.' },
      { title: 'Cytokine Cascade Modulation', detail: 'Triggers targeted release of immunomodulatory signaling proteins including Interferon (IFN), TNF-α, IL-1, and IL-10, priming the innate immune system for rapid pathogen response.' },
      { title: 'Hyaluronidase Enzymatic Inhibition', detail: 'Directly blocks the bacterial and viral enzyme hyaluronidase, successfully neutralizing the pathogen\'s ability to break down the intercellular matrix and preventing spread of infection into adjacent healthy tissues.' },
    ],
    uses: [
      'Respiratory defense: prophylaxis and acute treatment of recurrent common colds, seasonal influenza, and acute upper respiratory tract infections',
      'Urological support: adjuvant supportive therapy for recurrent lower urinary tract infections (UTIs)',
      'Topical healing: direct localized application for poorly healing superficial wounds, mild inflammatory acne, minor burns, skin scratches, and recurrent boils or abscesses',
    ],
    howToUse: [
      { method: 'Aqueous Infusion / Decoction', instruction: 'Simmer 1.0-2.0 grams of the dried herb in boiling water for 15 minutes.' },
      { method: 'CRITICAL TIMING', instruction: 'For maximum clinical efficacy, therapy MUST be initiated at the absolute FIRST SIGN of cold or flu symptoms (scratchy throat, minor chills). It is virtually useless if taken after the infection has fully established.' },
    ],
    suitableAgeGroups: [
      { group: 'Pediatrics (<2 years)', notes: 'STRICTLY CONTRAINDICATED: absolutely prohibited due to risk of severe systemic complications.' },
      { group: 'Pediatrics (2-12 years)', notes: 'Not recommended without direct medical supervision: heightened risk of precipitating severe T-cell-mediated allergic manifestations.' },
      { group: 'Pregnancy & Lactation', notes: 'Avoid completely: clinical safety and maternal-fetal outcome data have not been established.' },
      { group: 'Adults', notes: 'Primary target demographic. Adult prophylaxis/acute dose: 2.5-6.0 g dried herb daily in divided doses.' },
    ],
    dosage: {
      standard: 'Adult prophylaxis/acute dose: 2.5-6.0 g dried herb daily in divided doses. Duration limits: Acute treatment max 10 consecutive days; prophylactic cycles max 8 weeks with mandatory 3-week rest.',
      forms: [
        { form: 'Aqueous Infusion / Decoction', dose: '1.0-2.0 g dried herb in boiling water, simmered 15 minutes; 2-3 cups daily.' },
        { form: 'Standardized Capsules/Extracts', dose: '2.5-6.0 g dried herb equivalent daily in divided doses. Max 10 consecutive days acute; max 8 weeks prophylactic.' },
      ],
    },
    overdose: {
      symptoms: [
        'No cases of acute lethal toxicity have been documented in human medical literature.',
        'Theoretical risk of extreme megadosing (>1000× therapeutic range): Paradoxical immunosuppression: reversing immune-boosting action and crashing white cell activity.',
      ],
      management: [
        'Immediate discontinuation of the herb.',
        'Initiate aggressive oral or IV fluid hydration.',
        'Execute symptomatic management of any secondary allergic or hypersensitivity manifestations.',
      ],
    },
    sideEffects: [
      'Generally very well tolerated at recommended doses and durations',
      'Mild gastrointestinal discomfort in some individuals',
      'Rare: allergic reactions, particularly in individuals allergic to Asteraceae family plants',
    ],
    contraindications: [
      'Systemic autoimmune disorders: STRICTLY contraindicated in Multiple Sclerosis (MS), Systemic Lupus Erythematosus (SLE), and Rheumatoid Arthritis (RA): can stimulate immune system to attack body\'s own tissues',
      'Progressive systemic diseases: prohibited in Tuberculosis, Sarcoidosis, and systemic white blood cell disorders (Leukosis, Leukemia)',
      'Organ transplants: absolutely prohibited before, during, or after transplant surgeries as it directly antagonizes immunosuppressant therapies (Cyclosporine, Corticosteroids)',
    ],
    drugInteractions: [
      'Cytochrome P450: may inhibit CYP3A4 enzymes, altering clearance of heavily metabolized drugs',
      'Econazole: concurrent use may significantly decrease localized therapeutic action of Econazole vaginal creams',
      'Immunosuppressants: directly antagonizes essential immunosuppressant therapies; avoid in transplant patients',
    ],
    storage: {
      forms: [
        { form: 'All forms', instructions: 'Store in a cool, dark, and perfectly dry environment within airtight containers to safeguard the delicate alkamides from thermal breakdown.' },
      ],
    },
    marketedProducts: [
      { name: 'Immulant Capsules: Echinacea Extract 175mg (Mepaco)', image: '/images/Picture58.png' },
      { name: 'Echinacea 400mg Capsules (Now Foods)', image: '/images/Picture59.png' },
    ],
    benefits: [
      { icon: 'shield', title: 'Immune Activation', desc: 'Upregulates macrophage and neutrophil capacity to detect and destroy pathogens faster: proven to reduce cold duration and severity.' },
      { icon: 'science', title: 'Cytokine Priming', detail: '', desc: 'Triggers targeted release of IFN, TNF-α, IL-1, and IL-10 to prime innate immune system at first sign of infection.' },
      { icon: 'block', title: 'Hyaluronidase Inhibition', desc: 'Blocks bacterial/viral enzyme preventing spread of infection into adjacent healthy tissues.' },
      { icon: 'healing', title: 'Topical Wound Healing', desc: 'Direct localized application promotes healing of superficial wounds, minor burns, acne, and recurrent boils.' },
    ],
    botanicalFacts: {
      family: 'Asteraceae / Compositae',
      nativeRegion: 'North America (Great Plains and eastern North America); now widely cultivated worldwide',
      growthHabit: 'Herbaceous perennial growing 60-120 cm tall; large purple-pink cone-shaped flowers; entire aerial part (leaves, stems, flowers, roots) may be used medicinally',
      activeCompounds: 'Isobutylamides (alkamides), cichoric acid, caftaric acid, echinacoside, arabinogalactans',
      cultivationNotes: 'Three species are medicinal: E. purpurea (most studied), E. angustifolia, and E. pallida: each has somewhat different constituent profiles and suggested uses. Purpurea is the most commercially available.',
    },
    preparation: [
      { method: 'Decoction at First Symptoms', desc: 'Simmer 1-2 g dried herb in boiling water for 15 min; 2-3 cups daily. Start IMMEDIATELY at first sign of cold.', bestFor: 'Acute URTI prophylaxis and treatment; immune activation' },
      { method: 'Standardized Capsules / Liquid Extract', desc: 'Commercially standardized preparations for consistent dosing.', bestFor: 'Prophylactic immune maintenance cycles (max 8 weeks, then 3-week break)' },
    ],
    symptoms: ['Cold symptoms', 'Flu', 'Recurrent infections', 'Reduced immunity', 'Minor wounds'],
    relatedPlants: ['black-seed-immunity', 'astragalus-immunity', 'turmeric-immunity'],
    references: [
      { text: 'Duke, J. A., et al. (2002). Handbook of Medicinal Herbs (2nd ed.). CRC Press.' },
      { text: 'Chevallier, A. (2016). Encyclopedia of Herbal Medicine (3rd ed.). DK Publishing.' },
      { text: 'Egyptian Drug Authority — Echinacea purpurea monograph.', url: 'https://edaegypt.gov.eg/media/tkbhrjew/echinacea-purpurea-l-moench-%D8%A5%D8%B4%D9%86%D8%B3%D9%8A%D8%A7.pdf' },
    ],
  },

  'black-seed-immunity': {
    id: 'black-seed-immunity',
    name: 'Black Seed',
    nameAr: 'حبة البركة',
    latinName: 'Nigella sativa L.',
    commonNames: ['Black Seed', 'Black Cumin', 'Habbat al-Barakah'],
    category: 'immunity',
    subcategory: 'immune-boosting',
    tags: ['Immunomodulator', 'Anti-inflammatory', 'Bronchodilator', 'Antidiabetic', 'Adaptogen'],
    image: '/images/black-seed-main.jpg',
    shortDescription: 'Revered in prophetic medicine as a cure for "everything except death": Thymoquinone provides advanced immunomodulation, 5-LOX inhibition, mast cell stabilization, and powerful anti-inflammatory and antidiabetic actions.',
    description: 'Black seed\'s primary crystalline phenol is Thymoquinone (TQ), which acts as a direct 5-LOX enzyme inhibitor stopping leukotriene production, significantly accelerates Natural Killer (NK) cell cytotoxic capacity, and boosts macrophage phagocytic activity. The nigellone fraction provides potent anti-histaminic and bronchodilator action. CRITICAL PREPARATION: Whole seeds must be crushed or ground IMMEDIATELY before use: pre-ground seeds or continuous boiling causes complete evaporation of volatile TQ, stripping all medicinal value. Must be taken WITH FOOD to enhance lipophilic absorption.',
    history: 'Found in Tutankhamun\'s tomb, black seed has been used for over 3,000 years in Islamic, Ayurvedic, and Chinese traditional medicine. It holds a special place in Islamic medicine where the Prophet Muhammad (PBUH) is reported to have said it is a cure for "everything except death." Modern research has validated many of these properties through rigorous clinical trials.',
    isDemo: false,
    activeConstituents: [
      { name: 'Thymoquinone (TQ)', percentage: '', effect: 'Primary core bioactive crystalline phenol; direct 5-LOX enzyme inhibitor; immunomodulator; anti-inflammatory; antidiabetic' },
      { name: 'Thymohydroquinone', percentage: '', effect: 'Secondary active phenol with immunomodulatory properties' },
      { name: 'Nigellone', percentage: '', effect: 'Provides powerful anti-histaminic action; protects bronchial tissue from histamine-induced spasms; relaxes hyperreactive airways' },
      { name: 'p-Cymene (Volatile Oil)', percentage: '', effect: 'Aromatic and minor antimicrobial contributions' },
      { name: 'Linoleic Acid & Oleic Acid (Fixed Oil)', percentage: '', effect: 'Predominantly long-chain unsaturated fatty acids; essential for lipophilic bioavailability of TQ' },
      { name: 'Nigellicine & Nigellidine (Isoquinoline Alkaloids)', percentage: '', effect: 'Structurally unique compounds with secondary pharmacological activity' },
      { name: 'Beta-sitosterol, Vitamins, Minerals', percentage: '', effect: 'Dense nutritional matrix supporting overall therapeutic activity' },
    ],
    moa: [
      { title: 'Advanced Immunomodulation', detail: 'Significantly accelerates the cytotoxic destructive capacity of Natural Killer (NK) cells and markedly boosts the baseline phagocytic capacity of tissue macrophages.' },
      { title: 'Targeted Anti-inflammatory Pathway (5-LOX Inhibition)', detail: 'Functions as a direct 5-LOX (5-Lipoxygenase) enzyme inhibitor, stopping the production of pro-inflammatory leukotrienes that drive acute allergic and asthmatic bronchospasms.' },
    ],
    uses: [
      'Systemic immune and antioxidant support: upregulation of cellular defense lines',
      'Cardiovascular and lipid control: clinical management of dyslipidemia (balancing LDL/HDL ratios) and mild vascular smooth muscle relaxation for hypertension',
      'Endocrine regulation: excellent adjuvant therapy for blood glucose control in Type 2 Diabetes Mellitus',
    ],
    howToUse: [
      { method: 'CRITICAL PREPARATION', instruction: 'Whole seeds MUST be crushed or ground IMMEDIATELY before use. Pre-ground seeds or exposure of crushed seeds to open air causes volatile Thymoquinone to evaporate completely, stripping the herb of its medicinal value. Continuous boiling is also strictly prohibited for the same reason.' },
      { method: 'Lipophilic Bioavailability Protocol', instruction: 'Thymoquinone is strictly lipophilic (fat-soluble). Oil or crushed powder MUST be administered WITH or IMMEDIATELY AFTER MEALS to enhance intestinal absorption while minimizing gastric irritation.' },
      { method: 'Titration Rule', instruction: 'Always initiate therapy at the lowest possible baseline dose (2.5 mL of oil or 1.0 g of seeds) for the first week to properly evaluate individual gastric tolerance.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults & Adolescents', notes: 'Primary demographic for metabolic and respiratory therapeutic protocols.' },
      { group: 'Pediatrics', notes: 'Requires direct medical supervision with highly precise weight-adjusted dosing.' },
      { group: 'Pregnancy', notes: 'STRICTLY CONTRAINDICATED: oil and concentrated therapeutic extracts can stimulate sudden uterine contractions, presenting severe risk of involuntary abortion.' },
      { group: 'Lactation', notes: 'Clinical safety has not been fully mapped; usage during breastfeeding is NOT RECOMMENDED.' },
    ],
    dosage: {
      standard: 'Start with lowest dose first week (titration). General immune support: ~500 mg seeds/day or 2.5 mL oil/day. Always take WITH FOOD.',
      forms: [
        { form: 'Powdered Seeds: General Immune Support', dose: '~500 mg daily.' },
        { form: 'Powdered Seeds: Type 2 Diabetes', dose: '2.0-3.0 g daily for continuous 3-month cycle.' },
        { form: 'Powdered Seeds: Hypertension Support', dose: '200-400 mg daily.' },
        { form: 'Cold-Pressed Oil: General Immune Maintenance', dose: '2.5 mL daily.' },
        { form: 'Cold-Pressed Oil: Type 2 Diabetes', dose: '5.0 mL once daily, or 2.5 mL twice daily.' },
        { form: 'Cold-Pressed Oil: Hypertension', dose: '2.5 mL twice daily.' },
      ],
    },
    overdose: {
      symptoms: [
        'No documented cases of acute human lethal toxicity. Animal models indicate lethal threshold at 540-580 mg/kg body weight: far beyond standard clinical doses.',
        'Symptoms: Severe acute hypotension (dangerous blood pressure drops), profound hypoglycemia (sugar crashes), and intense gastrointestinal erosion or distress.',
      ],
      management: [
        'Immediately cease all black seed or oil intake.',
        'Execute aggressive oral or IV rehydration protocols.',
        'Implement continuous mandatory monitoring of systemic blood glucose and blood pressure parameters.',
      ],
    },
    sideEffects: [
      'Gastrointestinal irritation if taken without food (especially at initiation)',
      'Potential hypotension with high doses',
      'Potential hypoglycemia especially when combined with diabetes medications',
    ],
    contraindications: [
      'Known hypersensitivity to the plant',
      'Pre-existing bleeding or coagulation disorders (due to antiplatelet properties)',
      'Scheduled major surgery: must discontinue use completely 2 weeks prior to any operative procedures to prevent intraoperative bleeding risks',
      'Pregnancy: stimulates uterine contractions',
    ],
    drugInteractions: [
      'THE MONITORING RULE: Patients stabilized on Metformin, Sulfonylureas, or Calcium Channel Blockers (e.g., Amlodipine) MUST perform strict mandatory daily blood glucose and blood pressure tracking when starting black seed therapy',
      'Anticoagulants: may significantly increase risk of bruising and prolonged bleeding',
      'CNS Depressants & Serotonergic Agents: concurrent use can exacerbate respiratory depression, induce excessive somnolence, or risk dangerous serotonin fluctuations',
      'Diuretics: may accelerate renal potassium loss, causing hypokalemia',
    ],
    storage: {
      forms: [
        { form: 'Whole Seeds & Oil', instructions: 'Store in airtight, amber or dark opaque glass containers in a cool, dry location to prevent light-induced oxidation of delicate fixed and volatile fatty acids.' },
      ],
    },
    marketedProducts: [
      { name: 'Baraka 450mg Black Seed Oil Capsules (Pharco)', image: '/images/Baraka-Black-Seed-Capsules.jpg' },
      { name: 'Imtenan Cold-Pressed Black Seed Oil', image: '/images/Picture61.png' },
      { name: "El-Captain Habbat al-Barakah Oil", image: '/images/El-Captain-Black-Seed-Oil.jpg' },
      { name: 'Shana Black Seed Oil', image: '/images/Picture62.png' },
    ],
    benefits: [
      { icon: 'shield', title: 'NK Cell Activation', desc: 'Significantly accelerates cytotoxic destructive capacity of Natural Killer cells and boosts macrophage phagocytic activity for comprehensive immune defense.' },
      { icon: 'bloodtype', title: 'Metabolic Support', desc: 'Clinical evidence for adjuvant management of Type 2 Diabetes, dyslipidemia (LDL/HDL balance), and mild hypertension.' },
      { icon: 'spa', title: 'Anti-inflammatory', desc: 'Broad anti-inflammatory profile via 5-LOX inhibition reduces inflammatory mediators across multiple organ systems.' },
    ],
    botanicalFacts: {
      family: 'Ranunculaceae',
      nativeRegion: 'Southern Europe, North Africa, and South Asia; widely cultivated in the Middle East, India, and North Africa',
      growthHabit: 'Annual herb growing 20-30 cm tall; white or pale blue flowers; triangular black seeds (the medicinal part) inside inflated pods',
      activeCompounds: 'Thymoquinone (TQ), thymohydroquinone, nigellone, linoleic acid, oleic acid, nigellicine, nigellidine',
      cultivationNotes: 'Seeds must be freshly crushed immediately before use: pre-grinding leads to rapid TQ evaporation and complete loss of medicinal activity. Cold-pressed oil preserves TQ best. Avoid boiling.',
    },
    preparation: [
      { method: 'Freshly Crushed Seeds WITH Food', desc: 'Crush immediately before use; take with or immediately after meals for optimal TQ absorption. Start with titration dose.', bestFor: 'Immune support, asthma, diabetes, hypertension' },
      { method: 'Cold-Pressed Oil WITH Food', desc: '2.5-5 mL cold-pressed oil taken with food; do not heat.', bestFor: 'All indications; easier to take than crushed seeds; best bioavailability' },
    ],
    symptoms: ['Reduced immunity', 'Asthma', 'Allergy', 'High blood sugar', 'High cholesterol', 'Hypertension'],
    relatedPlants: ['echinacea-immunity', 'astragalus-immunity', 'turmeric-immunity'],
    references: [
      { text: 'ScienceDirect — Nigella sativa pharmacology.', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0041010124003593' },
      { text: 'WebMD — Black Seed.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-901/black-seed' },
      { text: 'Frontiers in Pharmacology — Black seed review.', url: 'https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1417013/full' },
      { text: 'International Journal of Advanced Biological and Biomedical Research — Nigella sativa.', url: 'https://www.ijabbr.com/article_712694_0a0a34b2f0cc578baf9052ee287b18d0.pdf' },
      { text: 'PubMed — Black seed anti-inflammatory activity.', url: 'https://pubmed.ncbi.nlm.nih.gov/23855426/' },
      { text: 'PubMed Central — Nigella sativa therapeutic effects.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4387228/' },
      { text: 'Duke, J. A., et al. (2002). Handbook of Medicinal Herbs (2nd ed.). CRC Press.' },
      { text: 'Chevallier, A. (2016). Encyclopedia of Herbal Medicine (3rd ed.). DK Publishing.' },
      { text: 'Egyptian Drug Authority — Nigella sativa monograph.', url: 'https://www.edaegypt.gov.eg/media/cuobaarg/nigella-sativa-l-_1.pdf' },
    ],
  },

  'astragalus-immunity': {
    id: 'astragalus-immunity',
    name: 'Astragalus',
    nameAr: 'الأستراغالوس',
    latinName: 'Astragalus mongholicus Bunge (syn. Astragalus membranaceus (Fisch.) Bunge)',
    commonNames: ['Astragalus', 'Huang Qi', 'Membranous Milk-vetch'],
    category: 'immunity',
    subcategory: 'immune-boosting',
    tags: ['Adaptogen', 'Immunomodulator', 'Antiviral', 'Fatigue', 'Respiratory'],
    image: '/images/Picture63.png',
    shortDescription: 'A true adaptogen and cornerstone of Traditional Chinese Medicine: astragalus polysaccharides and astragaloside IV trigger interferon production, T-cell activation, and antiviral defense, making it one of the most extensively studied immune-restorative botanicals.',
    description: 'Astragalus contains astragalan polysaccharides (foundational for adaptogenic and interferonogenic properties), a triterpenoid saponin matrix of Astragalosides I-X (with Astragaloside IV as the most pharmacologically active), and bioflavonoids (quercetin, kaempferol). It triggers the endogenous cellular production of Interferon, potentiates T-lymphocyte and NK cell proliferation, and works synergistically to stop viral replication cycles including Coxsackie B and common respiratory cold viruses. Best used for PREVENTATIVE PROPHYLAXIS or post-viral recovery phase: not during phases of high fever or acute severe inflammation.',
    history: 'A central pillar of Traditional Chinese Medicine (TCM) for over 2,000 years, known as "Huang Qi" (Yellow Leader) due to its yellow root and supreme adaptogenic status. Listed in the ancient Chinese medical text Shennong Bencao Jing (circa 200 AD) as a superior tonic. Modern pharmacological research has validated its interferonogenic properties and clinical trials have confirmed its use in respiratory prophylaxis and post-chemotherapy immune recovery.',
    isDemo: false,
    activeConstituents: [
      { name: 'Astragalan Polysaccharides', percentage: '', effect: 'Complex high-molecular-weight water-soluble glycans; foundational pillars for adaptogenic and interferonogenic properties; directly stimulate immune cell proliferation' },
      { name: 'Astragalosides I-X (Triterpenoid Saponins)', percentage: '', effect: 'Specialized chemical matrix; Astragaloside IV is most pharmacologically active and heavily researched' },
      { name: 'Quercetin, Kaempferol, Specialized Isoflavones (Bioflavonoids)', percentage: '', effect: 'Cellular vascular stabilization; antioxidant; anti-inflammatory support' },
      { name: 'Asparagine, β-sitosterol, Nickel, Chromium (Trace Amino Acids & Minerals)', percentage: '', effect: 'Dense concentrations of essential trace elements supporting overall metabolic and immune function' },
    ],
    moa: [
      { title: 'True Adaptogenic Action', detail: 'Systemically increases the human body\'s non-specific physiological resistance to severe physical, mental, and environmental stress factors.' },
      { title: 'Interferonogenic Stimulation', detail: 'Directly triggers the endogenous cellular production of Interferon, which plays an essential role in initiating the body\'s primary defense against viral invasions.' },
      { title: 'T-Cell Signaling Activation', detail: 'Potentiates and accelerates the proliferation, maturation, and cytotoxic capacity of T-lymphocytes and Natural Killer (NK) immune cell lines.' },
      { title: 'Antiviral Synergistic Defense', detail: 'Works in synergy with natural cellular processes to stop viral replication cycles, showing documented effectiveness against Coxsackie B and common respiratory cold viruses.' },
    ],
    uses: [
      'Immune restoration: debris clearance and profound enhancement of compromised or sluggish immune systems',
      'Respiratory prophylaxis: long-term preventative management of the common cold, acute rhinitis, and upper respiratory tract infections',
      'Chronic fatigue management: mitigation of profound mental and physical fatigue induced by prolonged stress or post-viral recovery phases',
      'Research: Adjuvant therapy improving quality of life and immune recovery for patients undergoing chemotherapy',
    ],
    howToUse: [
      { method: 'Raw Root Decoction', instruction: 'Boil 9-30 grams of the sliced dried root daily in water, allowing it to fully simmer to extract the heavy polysaccharides.' },
      { method: 'Standardized Dry Extract Capsules', instruction: 'Administer 100-150 mg of standardized extract exactly three times daily.' },
      { method: 'Fluid Extract Dilution (1: 2)', instruction: '4.5-8.5 mL administered daily in carefully divided doses. (A 1: 2 dilution contains 1 g of the herb per 2 mL of liquid).' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Primary target demographic for therapeutic restoration and stress adaptation.' },
      { group: 'Pediatrics & Adolescents (<18 years)', notes: 'NOT RECOMMENDED by the Egyptian Drug Authority (EDA): lack of long-term safety data.' },
      { group: 'Pregnancy & Lactation', notes: 'STRICTLY AVOIDED: clinical safety profile is absent; no verified human fertility or gestational data available.' },
    ],
    dosage: {
      standard: 'Standardized extract capsules: 100-150 mg three times daily. Raw root decoction: 9-30 g daily. Best used preventatively: NOT during high fever or acute severe inflammation.',
      forms: [
        { form: 'Standardized Dry Extract Capsules', dose: '100-150 mg three times daily.' },
        { form: 'Raw Root Decoction', dose: '9-30 g sliced dried root boiled daily.' },
        { form: 'Fluid Extract (1: 2)', dose: '4.5-8.5 mL daily in divided doses.' },
      ],
    },
    overdose: {
      symptoms: [
        'Toxicity is clinically relevant primarily during prolonged megadosing protocols that massively exceed the therapeutic range (typically exceeding 60 g raw root per day).',
        'Symptoms: Acute hypertension (blood pressure spikes), rapid heart rate with intense palpitations, chronic insomnia, and neurological overstimulation or anxiety.',
      ],
      management: [
        'Discontinue all herb intake immediately.',
        'Implement rigorous monitoring of blood pressure and cardiac rhythm parameters.',
        'Mandate increased fluid intake to accelerate renal clearance.',
      ],
    },
    sideEffects: [
      'Generally very well tolerated at recommended doses',
      'Rare: mild gastrointestinal discomfort at high doses',
      'Potential blood pressure and cardiac rhythm disturbances with massive overdosing',
    ],
    contraindications: [
      'Active autoimmune diseases: STRICTLY contraindicated in active Lupus (SLE) or Rheumatoid Arthritis (RA); overstimulating a hyperactive immune system can worsen the condition',
      'Organ transplants: ABSOLUTELY PROHIBITED due to direct chemical antagonism with post-transplant immunosuppressant drugs (Cyclophosphamide)',
      'State of acute high infection: do NOT initiate use during phases of high fever or acute severe inflammation; best used for PREVENTATIVE PROPHYLAXIS or post-viral recovery',
    ],
    drugInteractions: [
      'Antihypertensives: astragalus can unpredictably decrease or increase the action of blood pressure medications; concurrent use must be avoided or monitored',
      'Immunomodulatory Drugs: potentiates Interleukin-2 (IL-2) in some profiles but can conflict in others; inhibits hepatic CYP3A4 metabolic pathway: caution with medications using this pathway',
      'CRITICAL LAB: Can alter coagulation profiles: increases Prothrombin Time (PT) and International Normalized Ratio (INR)',
    ],
    storage: {
      forms: [
        { form: 'All forms', instructions: 'Store within tightly sealed, airtight containers completely protected from ambient moisture and direct sunlight to ensure long-term preservation of active saponins.' },
      ],
    },
    marketedProducts: [
      { name: "Puritan's Pride Astragalus 470mg 100 Capsules", image: '/images/Picture65.jpg' },
      { name: "Nature's Way Astragalus Root Capsules", image: '/images/Picture64.png' },
    ],
    benefits: [
      { icon: 'shield', title: 'True Adaptogen', desc: 'Systemically increases non-specific physiological resistance to physical, mental, and environmental stress factors.' },
      { icon: 'coronavirus', title: 'Interferonogenic', desc: 'Triggers endogenous cellular production of Interferon: essential primary defense initiator against viral invasions.' },
      { icon: 'medical_services', title: 'T-Cell & NK Cell Activation', desc: 'Potentiates proliferation, maturation, and cytotoxic capacity of T-lymphocytes and Natural Killer immune cells.' },
      { icon: 'energy_savings_leaf', title: 'Anti-fatigue', desc: 'Clinically validated for mitigation of profound chronic fatigue and post-viral recovery syndrome.' },
    ],
    botanicalFacts: {
      family: 'Fabaceae / Leguminosae',
      nativeRegion: 'Northern and Eastern China, Mongolia, Korea: widely cultivated in China for TCM',
      growthHabit: 'Perennial herb growing 20-40 cm tall; compound leaves; yellowish flowers; long taproot (the medicinal part) harvested after 4-5 years',
      activeCompounds: 'Astragalan polysaccharides, Astragalosides I-X (especially Astragaloside IV), quercetin, kaempferol, asparagine, β-sitosterol',
      cultivationNotes: 'Root (Radix Astragali / Huang Qi) is the medicinal part; harvested in spring or autumn from plants at least 4 years old. Standardized extracts guarantee minimum polysaccharide and saponin content.',
    },
    preparation: [
      { method: 'Root Decoction', desc: 'Boil 9-30 g sliced dried root in water for full simmering to extract heavy polysaccharides.', bestFor: 'Immune restoration, respiratory prophylaxis, chronic fatigue' },
      { method: 'Standardized Capsules', desc: '100-150 mg standardized extract three times daily.', bestFor: 'Convenient therapeutic dosing for immune prophylaxis and post-viral recovery' },
    ],
    symptoms: ['Reduced immunity', 'Recurrent infections', 'Chronic fatigue', 'Post-viral weakness', 'Respiratory vulnerability'],
    relatedPlants: ['echinacea-immunity', 'black-seed-immunity', 'turmeric-immunity'],
    references: [
      { text: 'Duke, J. A., et al. (2002). Handbook of Medicinal Herbs (2nd ed.). CRC Press.' },
      { text: 'Chevallier, A. (2016). Encyclopedia of Herbal Medicine (3rd ed.). DK Publishing.' },
      { text: 'Egyptian Drug Authority — Astragalus monograph.', url: 'https://www.edaegypt.gov.eg/media/nmfpej2l/astragalus-mongholicus_1.pdf' },
    ],
  },

  // ── Immunity › Anti-Inflammatory ──────────────────────────────────────

  'turmeric-immunity': {
    id: 'turmeric-immunity',
    name: 'Turmeric',
    latinName: 'Curcuma longa L.',
    category: 'immunity',
    subcategory: 'anti-inflammatory',
    tags: ['Anti-inflammatory', 'Antioxidant', 'Joint Health', 'Curcumin', 'Hepatoprotective'],
    image: '/images/Picture285.jpeg',
    images: ['/images/Picture285.jpeg'],
    shortDescription: 'Golden rhizome with multi-pathway anti-inflammatory action via NF-κB, COX-2, and 5-LOX inhibition.',
    description: 'Turmeric (Curcuma longa) belongs to the Zingiberaceae family. Its dried rhizome contains curcuminoids (3–5%), principally curcumin, which drives potent anti-inflammatory, antioxidant, and hepatoprotective effects. Bioavailability requires co-administration with piperine (black pepper) for a 2000% increase in absorption.',
    isDemo: false,
    symptoms: ['Joint pain', 'Chronic inflammation', 'Arthritis', 'Digestive discomfort', 'Liver support'],
    activeConstituents: [
      { name: 'Curcuminoids (3–5%)', detail: 'Curcumin (77%), demethoxycurcumin (17%), bisdemethoxycurcumin (3%): lipophilic polyphenolic pigments responsible for anti-inflammatory and antioxidant activity.' },
      { name: 'Volatile Essential Oils (3–7%)', detail: 'ar-Turmerone, alpha-turmerone, beta-turmerone, curlone, zingiberene: contribute anti-inflammatory and antimicrobial actions.' },
    ],
    moa: [
      { title: 'NF-κB Inhibition', detail: 'Curcumin downregulates Nuclear Factor-kappa B (NF-κB), blocking pro-inflammatory cytokines TNF-α, IL-1, and IL-6.' },
      { title: 'COX-2 & 5-LOX Dual Inhibition', detail: 'Suppresses both cyclooxygenase-2 and 5-lipoxygenase, reducing prostaglandin and leukotriene synthesis without gastric toxicity.' },
      { title: 'Antioxidant: Direct Scavenging & Enzyme Upregulation', detail: 'Directly neutralizes ROS/RNS via phenolic groups; also upregulates endogenous SOD, CAT, and GPx antioxidant enzymes.' },
      { title: 'Hepatoprotective & Choleretic', detail: 'Enhances hepatic bile synthesis via cholecystokinin-mediated pathways, accelerating lipid clearance and detoxification.' },
    ],
    uses: [
      'Osteoarthritis and rheumatoid arthritis: relieves joint pain and swelling',
      'Digestive support: dyspepsia, functional bloating, NAFLD/MASLD',
      'Immunomodulation and cardiovascular protection via inflammatory marker reduction',
      'Topical adjunct for inflammatory skin conditions (acne, psoriasis)',
    ],
    howToUse: [
      { method: 'Powdered Rhizome (with Piperine)', instruction: '1–3 g daily with food. Pair with black pepper (piperine) to increase bioavailability by up to 2000%; co-ingestion with dietary fats also improves absorption.' },
      { method: 'Standardized Extract Capsules', instruction: '500–1500 mg daily of extract standardized to 95% curcuminoids, taken with food and piperine for maximum absorption.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Highly recommended, especially for chronic joint conditions and metabolic syndrome.' },
      { group: 'Elderly', notes: 'Beneficial for geriatric arthritis; reduces reliance on NSAIDs. Monitor renal function.' },
      { group: 'Pregnant Women', notes: 'Culinary amounts safe. Concentrated therapeutic extracts STRICTLY CONTRAINDICATED.' },
      { group: 'Children', notes: 'Safe in dietary quantities; medicinal supplementation not recommended without supervision.' },
    ],
    dosage: {
      standard: 'Powdered rhizome: 1–3 g/day with food and piperine. Standardized extract (95% curcuminoids): 500–1500 mg/day.',
      forms: [
        { form: 'Powdered Rhizome', dose: '1–3 g daily with food and black pepper.' },
        { form: 'Standardized Extract Capsules (95% curcuminoids)', dose: '500–1500 mg daily, with piperine and food.' },
      ],
    },
    overdose: {
      symptoms: [
        'Chronic >8–12 g curcumin/day: severe GI irritation, diarrhea, nausea, epigastric distress',
        'Elevated risk of nephrolithiasis (calcium oxalate kidney stones) due to high oxalate content',
      ],
      management: [
        'Cease supplements immediately. Vigorous hydration to prevent oxalate crystallization.',
        'Anti-emetics or PPIs for gastric burning. Renal function monitoring if renal concerns exist.',
      ],
    },
    sideEffects: [
      'Epigastric discomfort, mild bloating, nausea, diarrhea at high doses',
      'Transient dizziness or mild headaches at high therapeutic ranges',
      'Allergic contact dermatitis or temporary yellow skin discoloration (topical use)',
    ],
    contraindications: [
      'Biliary obstruction or active cholelithiasis: potent cholagogue action can trigger severe gallbladder contractions',
      'Perioperative: discontinue ≥14 days before surgery (anti-platelet, mild fibrinolytic properties)',
      'Anticoagulants and antiplatelets: synergistic bleeding risk',
    ],
    drugInteractions: [
      'Anticoagulants / Antiplatelets (Warfarin, Heparin, Clopidogrel, Aspirin, DOACs): synergistic hemorrhage risk: INR monitoring mandatory.',
      'Chemotherapeutic agents: P-gp and CYP3A4 competition may alter narrow-TI drug concentrations.',
      'Antidiabetic agents: may enhance glucose-lowering effect: blood glucose monitoring recommended.',
    ],
    storage: {
      forms: [
        { form: 'Powder & Extract Capsules', storage: 'Airtight, light-resistant containers (amber glass/HDPE) in cool, dry environment (15–25°C). Curcumin is highly photosensitive: protect from direct UV light.' },
      ],
    },
    marketedProducts: [
      { name: 'Curcumin Capsules 500mg (Mepaco Pharaonia)', image: '/images/Picture286.jpg' },
      { name: 'Turmeric Extract Capsules (Imtenan Health Shop)', image: '/images/Picture287.png' },
    ],
    benefits: [
      { icon: 'healing', title: 'Multi-Pathway Anti-Inflammatory', desc: 'Curcumin simultaneously blocks NF-κB, COX-2, and 5-LOX: the three main inflammatory highways: reducing both prostaglandin and cytokine output without the GI side effects of NSAIDs.' },
      { icon: 'shield', title: 'Potent Dual Antioxidant', desc: 'Directly scavenges ROS/RNS while also upregulating the body\'s own antioxidant enzymes (SOD, CAT, GPx), providing amplified cellular protection.' },
      { icon: 'self_improvement', title: 'Joint Health & Arthritis Relief', desc: 'Evidence-based supportive phytotherapy for osteoarthritis and rheumatoid arthritis, reducing joint pain and swelling with a superior GI safety profile compared to NSAIDs.' },
      { icon: 'local_pharmacy', title: 'Hepatoprotective & Choleretic', desc: 'Enhances bile synthesis and gallbladder function via cholecystokinin pathways, supporting liver detoxification and fat metabolism.' },
    ],
    botanicalFacts: {
      origin: 'Native to South and Southeast Asia. India produces over 75% of global supply. Major cultivation in Tamil Nadu, Andhra Pradesh, and Orissa.',
      parts: 'Dried rhizome (Rhizoma Curcumae Longae): ground into bright orange-yellow powder. Fresh rhizomes also used in cooking.',
      history: 'Used for over 4,000 years in Ayurvedic and Chinese medicine. The bioavailability challenge was solved in 1998 with the discovery of piperine\'s 2000% enhancement. Featured in WHO and EMA monographs.',
    },
    preparation: [
      { method: 'Golden Milk (Turmeric Latte)', desc: 'Mix 1 tsp turmeric + pinch of black pepper + 250 mL warm milk + honey. Fat and piperine together optimize curcumin absorption.', bestFor: 'Daily anti-inflammatory support, joint health' },
      { method: 'Standardized Capsule Extract', desc: 'Pharmaceutical-grade capsules standardized to 95% curcuminoids, co-formulated with BioPerine (piperine) for maximum bioavailability.', bestFor: 'Osteoarthritis, rheumatoid arthritis, therapeutic dosing' },
    ],
    relatedPlants: ['black-seed-immunity', 'rosemary-immunity'],
    references: [
      { text: 'World Health Organization (WHO). WHO Monographs on Selected Medicinal Plants, Volume 2: Rhizoma Curcumae Longae.' },
      { text: 'Aggarwal, B. B., et al. (2009). Potential therapeutic effects of curcumin in patients with inflammatory bowel disease, hyperlipidemia, and osteoarthritis. Alternative Therapies in Health and Medicine, 15(5), 44–53.' },
      { text: 'Hewlings, S. J., & Kalman, D. S. (2017). Curcumin: A Review of Its Effects on Human Health. Foods, 6(10), 92.' },
      { text: 'Shoba, G., et al. (1998). Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers. Planta Medica, 64(4), 353–356.' },
    ],
  },

  'rosemary-immunity': {
    id: 'rosemary-immunity',
    name: 'Rosemary',
    nameAr: 'إكليل الجبل',
    latinName: 'Salvia rosmarinus Spenn. (syn. Rosmarinus officinalis L.)',
    commonNames: ['Rosemary'],
    category: 'immunity',
    subcategory: 'anti-inflammatory',
    tags: ['Anti-inflammatory', 'Antioxidant', 'Cognitive', 'Antimicrobial', 'COX-2 Inhibitor'],
    image: '/images/Picture11.jpg',
    shortDescription: 'Clinically proven as effective as Minoxidil 2% for androgenetic alopecia, rosemary also enhances cognitive function, protects against oxidative stress, and provides broad antimicrobial activity.',
    description: 'Rosemary contains carnosic acid and carnosol (lipid-soluble antioxidants), rosmarinic acid (a potent water-soluble anti-inflammatory), and a rich volatile oil fraction including 1,8-cineole (eucalyptol) and camphor. Topically, carnosic acid acts as a mild 5α-reductase inhibitor disrupting DHT conversion responsible for androgenetic alopecia. Its 1,8-cineole inhalation acts as an acetylcholinesterase (AChE) inhibitor improving cholinergic neurotransmission and enhancing memory and focus.',
    history: 'Rosemary has been revered since antiquity: ancient Greeks wore garlands to improve memory during exams. In medieval Europe it was used as a hair tonic and cognitive stimulant. A landmark modern clinical trial demonstrated it was as effective as Minoxidil 2% for hair regrowth with fewer side effects.',
    isDemo: false,
    activeConstituents: [
      { name: 'Carnosic Acid and Carnosol (Phenolic Diterpenes)', percentage: '', effect: 'Primary lipid-soluble antioxidants; cellular protection and formulation stabilization; mild 5α-reductase inhibition for anti-alopecia action' },
      { name: 'Rosmarinic Acid', percentage: '', effect: 'Potent water-soluble antioxidant and anti-inflammatory agent' },
      { name: 'Caffeic Acid (Phenolic Acid)', percentage: '', effect: 'Secondary antioxidant and anti-inflammatory support' },
      { name: 'Genkwanin, Luteolin, Apigenin (Flavonoids)', percentage: '', effect: 'Antispasmodic and vascular activities' },
      { name: '1,8-Cineole (Eucalyptol): Volatile Oil', percentage: '', effect: 'Promotes microcirculation; acts as natural acetylcholinesterase (AChE) inhibitor improving cognitive function' },
      { name: 'Camphor: Volatile Oil', percentage: '', effect: 'Local counter-irritant, analgesic, and antimicrobial actions' },
      { name: 'Alpha-Pinene & Camphene: Volatile Oil', percentage: '', effect: 'Antiseptic and aromatic properties' },
    ],
    moa: [
      { title: 'Anti-inflammatory Action', detail: 'Suppresses inflammatory cascades by downregulating COX-2 and iNOS expression, and inhibiting production of leukotrienes and pro-inflammatory cytokines.' },
      { title: 'Antioxidant Activity', detail: 'Carnosic acid and rosmarinic acid function as potent free radical scavengers, chain-breaking antioxidants, and inhibitors of lipid peroxidation.' },
      { title: 'Cognitive & Neuroprotective Effects', detail: 'Inhalation or absorption of 1,8-cineole acts as a natural acetylcholinesterase (AChE) inhibitor. By preventing acetylcholine breakdown, it improves cholinergic neurotransmission, enhancing focus, memory, and concentration.' },
      { title: 'Antimicrobial Activity', detail: 'Destroys bacterial and fungal cell walls, showing broad-spectrum activity against Malassezia species (causative yeast for dandruff).' },
      { title: 'Stimulation of Hair Follicles (Anti-Alopecia)', detail: 'Carnosic acid stimulates local microcirculation and tissue perfusion. Acts as mild 5α-reductase inhibitor, disrupting conversion of testosterone into dihydrotestosterone (DHT).' },
    ],
    uses: [
      'Anti-inflammatory and antioxidant support for chronic inflammatory conditions',
      'Androgenetic alopecia and hair loss: stimulates hair regrowth and retards premature hair thinning',
      'Cognitive support: enhances short-term alertness, working memory, and focus',
      'Dermatological photoprotection: neutralizes UV-induced oxidative stress in cutaneous cells',
      'Musculoskeletal pain relief: topical rubefacient and local analgesic for mild myalgia and arthralgia',
      'Gastrointestinal comfort: carminative and antispasmodic to relieve dyspepsia and flatulence',
    ],
    howToUse: [
      { method: 'Scalp: Essential Oil', instruction: 'Dilute 5 drops of rosemary essential oil in a suitable carrier oil (jojoba, argan, or coconut oil). Massage thoroughly into the scalp 2-3 times weekly; leave for at least 2-4 hours or overnight before rinsing.' },
      { method: 'Scalp: Aqueous Infusion Spray', instruction: 'Prepare rosemary infusion (1–2 g dried leaves in 200 mL boiling water, covered 15 min, then cooled and strained). Pour into a spray bottle and apply 5–10 sprays directly onto the scalp 1–2 times daily as a leave-in treatment. Refrigerate; discard after 7 days.' },
      { method: 'Skincare: Topical Mask', instruction: 'Mix 2-3 drops of rosemary essential oil per teaspoon of carrier oil or aloe vera gel. Apply for 10-15 minutes as an antioxidant face treatment, then rinse thoroughly.' },
      { method: 'Oral: Herbal Infusion', instruction: 'Steep 1-2 g (1-2 teaspoons) of dried leaves in 150-200 mL of hot water (85-90°C) in a covered vessel for 10-15 minutes. Strain and consume 1-3 times daily. Maximum daily: 4-6 g dry herb.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Oral intake in medicinal/concentrated amounts and use of pure essential oil STRICTLY CONTRAINDICATED. Rosemary acts as an emmenagogue and uterine stimulant: can induce pelvic congestion and pose risk of preterm labor or miscarriage. Low-concentration cosmetic topical use away from mammary glands considered low-risk during lactation.' },
      { group: 'Pediatrics (<6 years)', notes: 'Pure rosemary essential oil strictly contraindicated near face/nostrils: camphor and 1,8-cineole content can trigger reflex glottis spasms, respiratory depression, or seizures.' },
      { group: 'Geriatrics', notes: 'Generally safe, but clinical monitoring required for potential interactions with cardiovascular or anticoagulant regimens.' },
    ],
    dosage: {
      standard: 'Topical (hair): 5 drops EO in carrier, 2-3x weekly. Oral infusion: 1-2 g dried leaves in 150-200 mL hot water, 1-3 times daily. Max daily dry herb: 4-6 g.',
      forms: [
        { form: 'Topical Essential Oil (diluted)', dose: '5 drops in carrier oil applied to scalp 2-3 times weekly.' },
        { form: 'Oral Herbal Infusion', dose: '1-2 g dried leaves per 150-200 mL at 85-90°C; 1-3 cups daily (max 4-6 g dry herb/day).' },
      ],
    },
    overdose: {
      symptoms: [
        'Oral Essential Oil Overdose: Severe nausea, vomiting, severe abdominal pain, uterine bleeding, acute nephritis (kidney irritation), and systemic neurotoxicity: tonic-clonic seizures (convulsions), confusion, or pulmonary edema.',
        'Topical Overdose (undiluted oil): Severe erythema, intense pruritus, burning sensations, or acute contact dermatitis.',
      ],
      management: [
        'Oral EO: Immediate medical emergency response. Stop ingestion, avoid inducing vomiting if consciousness compromised, initiate airway protection, administer activated charcoal under strict clinical supervision, manage seizures with Benzodiazepines.',
        'Topical: Stop use immediately, wash with cool water and mild soap, apply basic fragrance-free barrier cream.',
      ],
    },
    sideEffects: [
      'Oral (medicinal doses): Potential emmenagogue effects, gastrointestinal irritation',
      'Topical (undiluted EO): Erythema, pruritus, burning, contact dermatitis',
    ],
    contraindications: [
      'Known hypersensitivity to Salvia rosmarinus or other Lamiaceae family members',
      'Seizure disorders and epilepsy: camphor can lower seizure threshold',
      'Bleeding disorders / anticoagulant therapy: mild antiplatelet aggregation properties',
      'Severe renal or hepatic insufficiency',
      'Biliary tract obstruction and gallstones: may trigger biliary colic due to choleretic activity',
      'Iron deficiency anemia: high polyphenol/tannin content chelates non-heme iron',
    ],
    drugInteractions: [
      'Anticoagulants (Warfarin): mild antiplatelet properties; monitor INR',
      'Iron supplements: consume at least 2 hours apart due to tannin-induced chelation',
    ],
    storage: {
      forms: [
        { form: 'Dried Foliage', instructions: 'Store in airtight, opaque containers in a cool, dry, dark environment to preserve volatile oil fractions.' },
        { form: 'Essential Oil', instructions: 'Dispense in dark amber or cobalt glass bottles tightly sealed, kept away from direct heat and sunlight.' },
      ],
    },
    marketedProducts: [
      { name: 'Nefertari Essential Oil of Rosemary', image: '/images/Picture12.jpg' },
      { name: 'Rootage Hair Oil 100 mL (Rosemary-enriched)', image: '/images/Rootage Hair Oil.webp' },
      { name: 'Rosemary Hair Booster Oil 50 mL', image: '/images/Rosemary Hair Booster Oil.jpeg' },
    ],
    benefits: [
      { icon: 'healing', title: 'Anti-inflammatory', desc: 'Downregulates COX-2 and iNOS, suppressing pro-inflammatory cytokines and leukotrienes for natural inflammation modulation.' },
      { icon: 'shield', title: 'Antioxidant Protection', desc: 'Carnosic and rosmarinic acids are potent chain-breaking antioxidants protecting cells from oxidative damage.' },
      { icon: 'psychology', title: 'Cognitive Support', desc: '1,8-cineole inhibits acetylcholinesterase to enhance memory, focus, and alertness.' },
      { icon: 'sanitizer', title: 'Scalp Antimicrobial', desc: 'Broad-spectrum activity against Malassezia species: effectively treats dandruff and seborrheic dermatitis.' },
    ],
    botanicalFacts: {
      family: 'Lamiaceae (Labiatae)',
      nativeRegion: 'Mediterranean region; widely cultivated worldwide',
      growthHabit: 'Aromatic evergreen shrub growing 0.5-2 m tall with needle-like leaves and blue flowers',
      activeCompounds: 'Carnosic acid, carnosol, rosmarinic acid, 1,8-cineole, camphor, alpha-pinene',
      cultivationNotes: 'Drought-tolerant; thrives in Mediterranean climate; essential oil produced by steam distillation of flowering tops and leaves',
    },
    preparation: [
      { method: 'Oral Herbal Tea', desc: 'Steep 1-2 g dried leaves covered at 85-90°C for 10-15 minutes.', bestFor: 'Anti-inflammatory support, cognitive enhancement, antioxidant maintenance' },
      { method: 'Topical Essential Oil', desc: 'Dilute in carrier oil; massage into affected area or scalp.', bestFor: 'Musculoskeletal pain, hair loss, scalp antimicrobial' },
    ],
    symptoms: ['Chronic inflammation', 'Joint pain', 'Hair loss', 'Dandruff', 'Memory', 'Muscle pain'],
    relatedPlants: ['turmeric-immunity', 'garlic-immunity'],
    references: [
      { text: 'WebMD — Rosemary Uses, Side Effects, Interactions.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-154/rosemary' },
      { text: 'Panahi, Y., Taghizadeh, M., & Sahebkar, A. (2015). Rosemary oil vs minoxidil 2% for androgenetic alopecia: a randomized comparative trial. Skinmed, 13(1), 15–21.' },
      { text: 'Borges, R. S., et al. (2025). Rosmarinic acid and hair growth: mechanistic insights. Pharmaceutical Biology.' },
      { text: 'European Medicines Agency (EMA). (2010). European Union herbal monograph on Rosmarinus officinalis L., folium. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). (2009). WHO Monographs on Selected Medicinal Plants (Vol. 4): Folium Rosmarini. Geneva.' },
      { text: 'Moss, M., et al. (2003). Aromas of rosemary and lavender essential oils differentially affect cognition and mood in healthy adults. International Journal of Neuroscience, 113(1), 15–38.' },
    ],
  },

  'garlic-immunity': {
    id: 'garlic-immunity',
    name: 'Garlic',
    nameAr: 'الثوم',
    latinName: 'Allium sativum L.',
    commonNames: ['Garlic', 'Common Garlic', 'Ajo', 'Knoblauch'],
    category: 'immunity',
    subcategory: 'anti-inflammatory',
    tags: ['Anti-inflammatory', 'Antimicrobial', 'Immunomodulator', 'Cardiovascular', 'Allicin'],
    image: '/images/Picture209.jpg',
    shortDescription: 'Potent organosulfur compounds in garlic (led by allicin) deliver broad-spectrum antimicrobial activity, immunomodulation, cardiovascular protection, and anti-inflammatory effects through multiple enzymatic pathways.',
    description: 'Allium sativum supports immune defense through its organosulfur fraction led by allicin, which exerts potent antimicrobial and anti-inflammatory actions. Allicin inhibits key inflammatory enzymes including COX and LOX, suppresses NF-κB signaling, and enhances NK cell and macrophage activity. Its cardiovascular effects include vasodilation via H2S release, inhibition of platelet aggregation, and reduction of LDL oxidation.',
    history: 'One of the oldest cultivated medicinal plants in the world, garlic has been used for over 7,000 years in Egyptian, Greek, Roman, Indian, and Chinese medicine. Ancient Egyptian physicians prescribed garlic to combat infections and support cardiovascular health. Modern research has validated its immunomodulatory, antimicrobial, and cardiovascular protective properties.',
    isDemo: false,
    activeConstituents: [
      { name: 'Alliin & Allicin (Organosulfur Compounds)', percentage: '', effect: 'Primary antimicrobial and anti-inflammatory activity; allicin forms transiently via alliinase enzyme activation upon tissue disruption' },
      { name: 'Ajoene, DADS, DATS (Oil-soluble Organosulfur Metabolites)', percentage: '', effect: 'Secondary antimicrobial, anti-inflammatory, and circulatory-supporting effects' },
      { name: 'Quercetin Glycosides & Phenolic Acids (Polyphenolic Flavonoids)', percentage: '', effect: 'Localized scavenging of reactive oxygen species (ROS); antioxidant protection' },
      { name: 'Selenium & Elemental Sulfur (Trace Minerals)', percentage: '', effect: 'Supports immune enzyme function and antioxidant defense systems' },
      { name: 'Vitamin C (Ascorbic Acid) & Vitamin B6 (Pyridoxine)', percentage: '', effect: 'Metabolic co-factors supporting immune cell metabolism and collagen synthesis' },
      { name: 'Sulfur-Containing Amino Acids', percentage: '', effect: 'Support keratin synthesis and immune cell signaling pathways' },
    ],
    moa: [
      { title: 'Antimicrobial & Antifungal Action', detail: 'Allicin and related organosulfur compounds exert potent broad-spectrum antimicrobial and antimycotic actions against bacteria, viruses, and fungi.' },
      { title: 'Anti-inflammatory Pathway Inhibition', detail: 'Inhibits COX and LOX enzymes and suppresses NF-κB signaling, reducing production of pro-inflammatory cytokines TNF-α, IL-1β, and IL-6.' },
      { title: 'Immunomodulation', detail: 'Enhances NK cell activity, macrophage phagocytosis, and T-cell proliferation, strengthening both innate and adaptive immune responses.' },
      { title: 'Cardiovascular Protection', detail: 'H2S release from organosulfur compounds induces vasodilation; inhibits platelet aggregation and LDL oxidation, reducing cardiovascular risk.' },
    ],
    uses: [
      'Immune system support and enhancement of natural defense mechanisms',
      'Anti-inflammatory support for chronic inflammatory conditions',
      'Cardiovascular protection: mild antihypertensive and lipid-modulating effects',
      'Antimicrobial support for upper respiratory tract infections',
      'Antioxidant defense against oxidative stress',
    ],
    howToUse: [
      { method: 'Raw Crushed Garlic', instruction: 'Crush 1-2 cloves and allow 5-10 minutes for alliinase enzyme activation before consuming. Take with food to reduce gastric irritation. 1-2 cloves daily.' },
      { method: 'Aged Garlic Extract (Capsules)', instruction: 'Take standardized aged garlic extract capsules as directed (typically 600-1200 mg daily). Odorless and well tolerated.' },
      { method: 'Garlic Tea (Infusion)', instruction: 'Steep 2-3 crushed cloves in boiling water for 10 minutes. Strain and consume. Add honey and lemon for palatability.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Safe at culinary and therapeutic doses. Monitor if on anticoagulants or antihypertensives.' },
      { group: 'Children (above 6 years)', notes: 'Culinary amounts generally safe. Medicinal doses should be supervised by a healthcare provider.' },
      { group: 'Pregnant Women', notes: 'Culinary amounts considered safe. High medicinal doses should be avoided: potential uterine stimulant effects at very high doses.' },
      { group: 'Elderly', notes: 'Beneficial for cardiovascular and immune support. Monitor for interactions with anticoagulant medications.' },
    ],
    dosage: {
      standard: 'Fresh garlic: 1-2 raw cloves daily. Aged garlic extract: 600-1200 mg daily. Garlic powder: 0.4-1.2 g daily.',
      forms: [
        { form: 'Fresh Raw Garlic', dose: '1-2 crushed cloves daily (allow 5-10 min before consuming for allicin formation).' },
        { form: 'Aged Garlic Extract Capsules', dose: '600-1200 mg daily; odorless formulation.' },
        { form: 'Garlic Powder', dose: '0.4-1.2 g daily with food.' },
      ],
    },
    overdose: {
      symptoms: [
        'Severe gastrointestinal irritation: heartburn, nausea, vomiting, diarrhea.',
        'Prolonged bleeding time from antiplatelet effects at very high doses.',
        'Breath and body odor from allyl methyl sulfide metabolite excretion.',
        'Rare: hemolytic anemia at extremely high doses in susceptible individuals.',
      ],
      management: [
        'Discontinue high-dose garlic intake.',
        'Symptomatic management of GI distress with hydration.',
        'Monitor clotting parameters if on anticoagulant therapy.',
        'Seek medical advice if bleeding symptoms appear.',
      ],
    },
    sideEffects: [
      'Pungent breath and body odor (most common)',
      'Gastrointestinal discomfort, heartburn, nausea when taken on an empty stomach',
      'Mild antiplatelet effect: increased bleeding tendency at high doses',
      'Risk of contact dermatitis with prolonged skin contact from raw garlic',
    ],
    contraindications: [
      'Known hypersensitivity to Allium species (onions, leeks, chives)',
      'Pre-existing bleeding disorders or anticoagulant therapy: additive antiplatelet effect',
      'Scheduled surgery: discontinue medicinal doses 2 weeks before surgery',
      'Peptic ulcer disease: high doses may irritate the gastric mucosa',
    ],
    drugInteractions: [
      'Anticoagulants / Antiplatelets (Warfarin, Aspirin, Clopidogrel): additive anticoagulant effect: increased bleeding risk',
      'Antihypertensives: additive blood pressure lowering; monitor BP closely',
      'Antidiabetic medications: may enhance glucose-lowering effect',
      'HIV protease inhibitors (Saquinavir): garlic can significantly reduce drug plasma levels',
      'CYP2E1 substrates: garlic may alter hepatic metabolism',
    ],
    storage: {
      forms: [
        { form: 'Fresh Garlic Bulbs', instructions: 'Store in a cool, dry, well-ventilated place away from light. Do not refrigerate unpeeled bulbs. Use within 3-6 months.' },
        { form: 'Aged Garlic Extract Capsules', instructions: 'Store at room temperature in original packaging. Keep away from heat, humidity, and direct sunlight.' },
      ],
    },
    marketedProducts: [
      { name: 'Vatika Garlic Enriched Hair Oil 300 mL', image: '/images/Picture211.jpg' },
      { name: 'Harir Garlic Hair Oil (زيت الثوم هرير)', image: '/images/Picture210.jpg' },
    ],
    benefits: [
      { icon: 'shield', title: 'Immune Enhancement', desc: 'Enhances NK cell activity, macrophage phagocytosis, and T-cell proliferation for comprehensive innate and adaptive immune support.' },
      { icon: 'healing', title: 'Anti-inflammatory', desc: 'COX/LOX inhibition and NF-κB suppression reduce pro-inflammatory cytokine production without gastric side effects of NSAIDs.' },
      { icon: 'favorite', title: 'Cardiovascular Protection', desc: 'Vasodilation via H2S, platelet aggregation inhibition, and LDL oxidation reduction support heart health.' },
      { icon: 'sanitizer', title: 'Broad-Spectrum Antimicrobial', desc: 'Allicin suppresses bacteria, viruses, and fungi, supporting respiratory and systemic defense.' },
    ],
    botanicalFacts: {
      family: 'Amaryllidaceae (Subfamily: Allioideae)',
      nativeRegion: 'Central Asia (likely Kyrgyzstan/Tajikistan); cultivated worldwide for over 7,000 years',
      growthHabit: 'Perennial bulbous herb; bulb composed of multiple cloves enclosed in a papery tunic; flat strap-like leaves; white to pink globose flower heads',
      activeCompounds: 'Alliin, allicin, ajoene, diallyl disulfide (DADS), diallyl trisulfide (DATS), quercetin glycosides, selenium, sulfur amino acids',
      cultivationNotes: 'Allicin (the key active compound) is only generated via enzymatic reaction (alliinase) when raw cloves are crushed or chopped. Allow 5-10 minutes after crushing before use for maximum allicin formation.',
    },
    preparation: [
      { method: 'Raw Crushed Garlic (Oral)', desc: 'Crush 1-2 cloves, wait 5-10 min for allicin activation, consume with food daily.', bestFor: 'Immune support, anti-inflammatory, cardiovascular health' },
      { method: 'Aged Garlic Extract Capsules', desc: 'Standardized odorless supplement for consistent therapeutic dosing.', bestFor: 'All indications without strong garlic odor; preferred for long-term use' },
    ],
    symptoms: ['Reduced immunity', 'Chronic inflammation', 'High blood pressure', 'High cholesterol', 'Recurrent respiratory infections'],
    relatedPlants: ['turmeric-immunity', 'rosemary-immunity'],
    references: [
      { text: 'Bayan, L., et al. (2014). Garlic: a review of potential therapeutic effects. Avicenna Journal of Phytomedicine, 4(1), 1–14.' },
      { text: 'World Health Organization (WHO). WHO Monographs on Selected Medicinal Plants, Volume 1: Bulbus Allii Sativi.' },
      { text: 'Ried, K. (2016). Garlic lowers blood pressure in hypertensive individuals and stimulates immunity. The Journal of Nutrition, 146(2), 389S–396S.' },
      { text: 'PubMed Central — Garlic antimicrobial properties.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3874089' },
      { text: 'National Center for Complementary and Integrative Health — Garlic.', url: 'https://www.nccih.nih.gov/health/garlic' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // WOMEN'S HEALTH › HAIR CARE
  // ══════════════════════════════════════════════════════════════════════

  'rocket': {
    id: 'rocket',
    name: 'Rocket',
    nameAr: 'الجرجير',
    latinName: 'Eruca sativa Mill.',
    commonNames: ['Rocket', 'Arugula', 'Rucola', 'Taramira'],
    category: 'womens-health',
    subcategory: 'hair-care',
    isDemo: false,
    tags: ['Hair Growth', 'Scalp Nourishment', 'Antioxidant', 'Sulfur-rich', 'Anti-breakage'],
    image: '/images/Picture215.jpeg',
    images: ['/images/Picture215.jpeg'],
    shortDescription: 'Nutritional and vascular support for thinning hair and sluggish follicular activity. Reduction of premature mechanical hair shaft breakage via lipid replenishment.',
    description: 'Eruca sativa enhances scalp health and follicular vitality primarily via its dense organosulfur and flavonoid content. These compounds exert potent localized antioxidant actions that neutralize free radicals within the follicular niche. Experimental evidence points towards a significant enhancement of capillary microcirculation surrounding the dermal papilla due to mild hyperemic effects of isothiocyanates. This increased localized blood perfusion increases the delivery of oxygen and essential structural micronutrients, reducing premature breakage and supporting the physiological anagen phase of hair growth.',
    activeConstituents: [
      { name: 'Isothiocyanates', detail: 'Primarily Erucin and secondary volatile organosulfur compounds resulting from glucosinolate hydrolysis.' },
      { name: 'Fixed Fatty Acids', detail: 'High percentages of Oleic acid, Linoleic acid, and naturally occurring physiological concentrations of Erucic acid.' },
      { name: 'Glucosinolates', detail: 'Chiefly Glucoerucin, serving as the biological precursors to functional active sulfur components.' },
      { name: 'Vitamins & Micronutrients', detail: 'High structural densities of Vitamin A, C, and K, supplemented with bioavailable Iron, Magnesium, and elemental Sulfur.' },
      { name: 'Polyphenolic Flavonoids', detail: 'Primarily Quercetin glycosides, Kaempferol, and Isorhamnetin.' },
    ],
    moa: [
      { title: 'Mechanism of Action', detail: 'Eruca sativa enhances scalp health and follicular vitality primarily via its dense organosulfur and flavonoid content. These compounds exert potent localized antioxidant actions that neutralize free radicals within the follicular niche. Experimental evidence points towards a significant enhancement of capillary microcirculation surrounding the dermal papilla due to mild hyperemic effects of isothiocyanates. This increased localized blood perfusion increases the delivery of oxygen and essential structural micronutrients, reducing premature breakage and supporting the physiological anagen phase of hair growth.' },
    ],
    uses: [
      'Nutritional and vascular support for thinning hair and sluggish follicular activity.',
      'Reduction of premature mechanical hair shaft breakage via lipid replenishment.',
      'Imparting structural luster, gloss, and cosmetic volume to limp hair.',
      'Providing elemental sulfur to support robust keratin matrix cross-linking.',
    ],
    howToUse: [
      { method: 'Standard Scientific Extraction (Seed Oil)', instruction: 'Industrial cold-pressing of high-quality Eruca sativa seeds to safeguard volatile sulfur complexes and delicate long-chain unsaturated fatty acids from thermal degradation.' },
      { method: 'Fresh Leaf Extract', instruction: 'Mechanically blend fresh, meticulously sanitized rocket leaves with minimal water, filtering through a sterile fine-mesh cloth to yield a dense green fluid mask. Apply directly onto the scalp for 30–60 minutes prior to routine washing.' },
      { method: 'Infused Macerate Seed Oil', instruction: 'Lightly bruise whole rocket seeds to fracture the outer seed coats. Inoculate into a carrier oil matrix (such as Sweet Almond Oil) inside a sealed vessel. Macerate in a dark, warm environment for 14 calendar days with daily agitation, followed by fine filtration.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Completely indicated for regular topical scalp therapy.' },
      { group: 'Children', notes: 'Generally safe; highly diluted oil configurations or mild leaf juices are strictly preferred to match delicate pediatric skin.' },
      { group: 'Pregnancy', notes: 'Safe for conventional, moderate cosmetic topical use.' },
      { group: 'Frequency', notes: 'Aqueous leaf juice can be applied twice weekly; the cold-pressed seed oil is massaged thoroughly into the scalp for 5–10 minutes twice weekly prior to cleansing.' },
    ],
    overdose: {
      symptoms: [
        'Marked localized erythema, intense transient warmth or stinging sensation, and localized contact irritation.',
      ],
      management: [
        'Cleanse the scalp extensively with an amphoteric mild shampoo and cool water. Discontinue application until full dermal recovery is completed.',
      ],
    },
    sideEffects: [],
    contraindications: [],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Fresh Leaf Extract', instructions: 'Highly unstable; must be compounded and applied immediately due to rapid enzymatic oxidation of active markers.' },
        { form: 'Cold-Pressed Seed Oil', instructions: 'Highly stable if preserved within dark amber glass containers, strictly protected from light and elevated thermal indices, for up to 12 months.' },
      ],
    },
    marketedProducts: [
      { name: 'IMTENAN ERUCA OIL (Seed Extract)', image: '/images/Picture217.jpeg' },
      { name: 'EL-HAWAG ROCKET OIL', image: '/images/Picture216.jpeg' },
    ],
    benefits: [],
    factsAndMyths: [
      {
        myth: 'Applying crude crushed rocket foliage provides an instantaneous, permanent cure for alopecia areata within days.',
        fact: 'Active isothiocyanates require highly standardized concentrations or consistent, disciplined therapeutic protocols over a duration of several months to yield measurable cosmetic benefits in general hair thickness and breakage control. It is not an alternative to medical immunomodulators in alopecia areata.',
      },
    ],
    botanicalFacts: {
      family: 'Brassicaceae (Cruciferous Family)',
      activeCompounds: 'Erucin (isothiocyanate), glucoerucin, oleic acid, linoleic acid, erucic acid, vitamins A/C/K, iron, magnesium, elemental sulfur, quercetin glycosides, kaempferol, isorhamnetin',
      clinicalEvidence: 'Active isothiocyanates require highly standardized concentrations or consistent, disciplined therapeutic protocols over a duration of several months to yield measurable cosmetic benefits in general hair thickness and breakage control. It is not an alternative to medical immunomodulators in alopecia areata.',
    },
    relatedPlants: ['rosemary-hair', 'aloe-vera-hair', 'garlic'],
    references: [
      { text: 'Nurzyńska-Wierdak, R. (2022). Bioactive compounds of Brassicaceae plants and their potential health benefits. Molecules, 27(3), 710.' },
      { text: 'Ares, A. M., Nozal, M. J., & Bernal, J. (2018). Extraction, identification and quantification of bioactive compounds in Eruca sativa. Food Research International, 105, 542–551.' },
      { text: 'Jin, Y., Wang, M., & Rosen, R. T. (2009). Glucosinolates and their biological activities in cruciferous vegetables. Molecules, 14(4), 1541-1554.' },
    ],
  },

  // ── Women's Health › Hair Care ─────────────────────────────────────────
  'garlic': {
    id: 'garlic',
    name: 'Garlic',
    nameAr: 'الثوم',
    latinName: 'Allium sativum L.',
    commonNames: ['Garlic', 'Common Garlic'],
    category: 'womens-health',
    subcategory: 'hair-care',
    isDemo: false,
    tags: ['Scalp Health', 'Antimicrobial', 'Hair Growth', 'Keratin Support', 'Anti-dandruff'],
    image: '/images/Picture209.jpg',
    images: ['/images/Picture209.jpg'],
    shortDescription: 'Supportive antimicrobial management of seborrheic dermatitis and excessive scalp microbial buildup. Adjunct, supportive topical co-therapy in localized autoimmune thinning such as early Alopecia Areata.',
    description: 'Allium sativum supports the scalp ecosystem and follicular units through multi-targeted pharmacological pathways. Its prominent organosulfur volatile fraction, spearheaded by allicin, exerts potent broad-spectrum antimicrobial and antimycotic actions, directly suppressing opportunistic cutaneous pathogens like Malassezia furfur. Local topical application induces mild counter-irritation and local vasodilation via transient receptor potential (TRP) channels, augmenting microvascular blood perfusion to the dermal papilla. Furthermore, its bioavailable sulfur and selenium profiles furnish necessary building blocks for cross-linking disulfide bonds within the keratin matrix of the growing hair shaft, which mechanically optimizes tensile strength and decreases premature structural breakage.',
    activeConstituents: [
      { name: 'Organosulfur Compounds', detail: 'Alliin (the primary stable precursor) and Allicin (diallyl thiosulfinate), which is transiently formed via mechanical tissue disruption by the enzyme alliinase. Secondary oil-soluble metabolites include Ajoene, Diallyl disulfide (DADS), and Diallyl trisulfide (DATS).' },
      { name: 'Polyphenolic Flavonoids', detail: 'Primarily Quercetin glycosides and phenolic acids, contributing to localized scavenging of reactive oxygen species (ROS).' },
      { name: 'Trace Minerals', detail: 'Bioavailable Selenium and high structural densities of elemental Sulfur, critical for maintaining epithelial integrity.' },
      { name: 'Vitamins', detail: 'Vitamin C (Ascorbic Acid) and Vitamin B6 (Pyridoxine), acting as metabolic co-factors.' },
      { name: 'Sulfur-Containing Amino Acids', detail: 'Non-protein amino acids that support keratin synthesis and cross-linking pathways.' },
    ],
    moa: [
      { title: 'Mechanism of Action', detail: 'Allium sativum supports the scalp ecosystem and follicular units through multi-targeted pharmacological pathways. Its prominent organosulfur volatile fraction, spearheaded by allicin, exerts potent broad-spectrum antimicrobial and antimycotic actions, directly suppressing opportunistic cutaneous pathogens like Malassezia furfur. Local topical application induces mild counter-irritation and local vasodilation via transient receptor potential (TRP) channels, augmenting microvascular blood perfusion to the dermal papilla. Furthermore, its bioavailable sulfur and selenium profiles furnish necessary building blocks for cross-linking disulfide bonds within the keratin matrix of the growing hair shaft, which mechanically optimizes tensile strength and decreases premature structural breakage.' },
    ],
    uses: [
      'Supportive antimicrobial management of seborrheic dermatitis and excessive scalp microbial buildup.',
      'Adjunct, supportive topical co-therapy in localized autoimmune thinning such as early Alopecia Areata.',
      'Reduction of mechanical hair shaft fracturing through targeted disulfide and lipid reinforcement.',
      'Revitalization of metabolic perfusion inside the follicular niche to support general hair vitality.',
    ],
    howToUse: [
      { method: 'Standard Scientific Extraction', instruction: 'Extraction of garlic oil via steam distillation or organic solvent extraction to standardize the concentration of stable diallyl sulfides, or cold expression to isolate temporary allicin fractions under temperature-controlled conditions.' },
      { method: 'Home-made Formulations (Infused Garlic Oil)', instruction: 'Lightly crush or macerate fresh garlic cloves to rupture cellular walls and activate the alliinase enzyme (allow 5–10 minutes for full enzymatic conversion of alliin to active allicin). Submerge the crushed matrices into a stable lipophilic carrier (such as Olive Oil or Coconut Oil) inside an airtight glass container. Macerate for 5 to 7 days in a cool environment away from direct actinic radiation, filter extensively utilizing sterile cloth, and collect the oil.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Completely indicated for regular topical use when adequately diluted in standard carrier oils.' },
      { group: 'Children', notes: 'Highly restricted. Avoid concentrated extracts on pediatric scalps due to high epidermal permeability and susceptibility to chemical micro-burns.' },
      { group: 'Pregnancy & Lactation', notes: 'Generally safe for conventional, low-frequency cosmetic topical use; avoid highly concentrated, occlusive, or widespread applications due to systemic absorption of volatile metabolites.' },
      { group: 'Frequency', notes: 'Topically massaged into the designated scalp areas 1 to 2 times per week as a pre-shampoo mask treatment, followed by thorough washing.' },
    ],
    overdose: {
      symptoms: [
        'Intense localized burning sensations, acute contact dermatitis, severe localized erythema, and painful epidermal chemical micro-burns.',
      ],
      management: [
        'Immediately cleanse the scalp extensively with cool water and a mild, unperfumed, pH-balanced amphoteric shampoo.',
        'Suspend all garlic applications.',
        'Apply localized skin barrier repair formulations (such as D-Panthenol or purified Aloe vera gel) to speed up re-epithelialization.',
      ],
    },
    sideEffects: [
      'Pungent, highly persistent organosulfur body and hair odor.',
      'Transient mild cutaneous warmth or burning during the initial phase of application.',
      'Risk of developing delayed allergic contact dermatitis upon prolonged use in atopic individuals.',
    ],
    contraindications: [],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Fresh Homemade Extractions', instructions: 'Must be strictly refrigerated (2–8°C) and completely consumed within 3 to 5 days to eliminate the biochemical degradation of allicin and avoid any anaerobic microbial risks.' },
        { form: 'Commercial Garlic Oils', instructions: 'Store inside sealed, dark amber glass containers protected from humidity, excessive temperature fluctuations, and direct sunlight.' },
      ],
    },
    marketedProducts: [
      { name: 'VATIKA GARLIC ENRICHED HAIR OIL (300 mL)', image: '/images/Picture211.jpg' },
      { name: 'HARIR GARLIC HAIR OIL', image: '/images/Picture210.jpg' },
    ],
    benefits: [],
    botanicalFacts: {
      activeCompounds: 'Alliin, allicin, ajoene, diallyl disulfide (DADS), diallyl trisulfide (DATS), quercetin glycosides, phenolic acids, selenium, elemental sulfur, vitamin C, vitamin B6, sulfur-containing amino acids',
      clinicalEvidence: 'Clinical validation for garlic (such as the landmark trial by Sharquie et al.) is strictly limited to an adjunct, supportive topical gel co-therapy specifically in localized Alopecia Areata (due to its immunomodulatory and counter-irritant properties). Garlic does not possess any therapeutic efficacy against genetic, hormonal, or scarring androgenetic alopecia.',
    },
    relatedPlants: ['rocket', 'rosemary-hair', 'aloe-vera-hair'],
    references: [
      { text: 'Sharquie, K. E., & Al-Obaidi, H. K. (2002). Topical garlic gel in the treatment of alopecia areata. The Journal of Dermatology, 29(11), 680–684.' },
      { text: 'Bayan, L., Koulivand, P. H., & Gorji, A. (2014). Garlic: a review of potential therapeutic effects. Avicenna Journal of Phytomedicine, 4(1), 1–14.' },
      { text: 'Martins, N., Petropoulos, S., & Ferreira, I. C. (2016). Chemical composition and biological properties of garlic (Allium sativum L.) as affected by cooking methods. Food and Chemical Toxicology, 93, 42–53.' },
    ],
  },

  'senna-constipation': {
    id: 'senna-constipation',
    name: 'Senna',
    nameAr: 'السنا',
    latinName: 'Senna alexandrina Mill.',
    commonNames: ['Senna', 'Alexandrian Senna', 'Tinnevelly Senna', 'Sonamukhi'],
    category: 'digestive',
    subcategory: 'constipation-relief',
    tags: ['Laxative', 'Constipation Relief', 'Bowel Cleansing', 'Anthraquinone', 'Short-term Use'],
    image: '/images/Picture269.jpeg',
    shortDescription: 'A clinically approved anthraquinone stimulant laxative acting via bacterial prodrug activation in the colon, producing reliable short-term bowel evacuation through dual motility and secretory mechanisms.',
    description: 'Senna alexandrina contains sennosides A and B, dianthrone glycosides that pass unabsorbed through the upper GI tract. Upon reaching the colon, gut microbiota hydrolyze them to the active metabolite rheinthrone, which stimulates colonic peristalsis and modifies electrolyte transport via Na+/K+-ATPase inhibition and chloride channel opening, producing a soft bulky stool. It is indicated strictly for short-term use; chronic abuse leads to cathartic colon, electrolyte depletion, and dependency.',
    isDemo: false,
    activeConstituents: [
      { name: 'Sennosides A & B (Dianthrone Glycosides)', percentage: '~80% of total activity', effect: 'Key laxative prodrugs; hydrolyzed by colonic microbiota to active rheinthrone which stimulates peristalsis and modifies electrolyte secretion' },
      { name: 'Sennosides C & D', percentage: '~20% of total activity', effect: 'Minor anthraquinone glycosides contributing to overall laxative effect' },
      { name: 'Anthraquinone Glycosides (Dianthrones 75-80%, Anthrones 20-25%)', percentage: '', effect: 'Collectively responsible for the stimulant laxative property through bacterial prodrug activation in the colon' },
    ],
    moa: [
      { title: 'Prodrug Activation by Gut Microbiota', detail: 'Sennosides are hydrophilic prodrugs that pass unabsorbed through the small intestine. Upon reaching the colon, bacterial beta-glycosidases hydrolyze them into the active metabolite rheinthrone, which then exerts its laxative effects locally.' },
      { title: 'Intestinal Irritation and Motility Enhancement', detail: 'Rheinthrone stimulates the colonic mucosa, causing local irritation that enhances propulsive peristalsis and shortens colonic transit time, driving bowel evacuation.' },
      { title: 'Fluid and Electrolyte Modulation', detail: 'Rheinthrone inhibits Na+/K+-ATPase and opens chloride channels in the colonic mucosa, inhibiting net water absorption and increasing secretion of water and electrolytes into the intestinal lumen, producing a soft, bulky stool.' },
    ],
    uses: [
      'Symptomatic Relief of Constipation: Well-known and clinically approved as a short-term treatment for occasional or acute constipation.',
      'Evacuation of the Bowel: Used under medical supervision for bowel clearance prior to X-ray examinations, colonoscopies, or surgical procedures.',
      'Exhibited in vitro antioxidant, potential anticancer, and antimicrobial activities.',
      'In ethnopharmacology, historical preparations were sometimes explored for traditional management of gastrointestinal disorders, specific skin conditions, and wound healing (though not considered primary indications).',
    ],
    howToUse: [
      { method: 'Aqueous Infusion (Senna Tea)', instruction: 'Steep 1–2 g of dried Senna leaves in 150 mL of boiling water in a covered vessel for 10 to 15 minutes. Important Note: Do not boil the leaves directly for a prolonged duration, as excessive thermal exposure increases the extraction of harsh resins that cause severe abdominal cramping. Strain the loose leaves. It is recommended to add a slice of ginger or peppermint leaves as a carminative adjuvant to help soothe the gut and mitigate the "griping" (cramping) effect. Best administered at night before bedtime.' },
      { method: 'Standardized Tablets / Granules', instruction: 'Take as directed on the product (typically 15–30 mg sennosides once daily at bedtime for adults). Do not exceed maximum daily dose of 30 mg hydroxyanthracene glycosides. Use only for short periods.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults and Adolescents (>12 years)', notes: '15–30 mg of sennosides once daily (usually taken at bedtime). Maximum: 30 mg/day. Short-term use only.' },
      { group: 'Children 6–12 years', notes: '7.5–15 mg of sennosides once daily (often administered as half a tablet or 5 mL of syrup depending on the concentration). Strictly under medical supervision only.' },
      { group: 'Children 2–6 years', notes: '2.5–5 mg of sennosides once daily. Strictly under direct medical supervision only.' },
      { group: 'Children under 2 years', notes: 'Strictly Contraindicated.' },
      { group: 'Pregnancy & Lactation', notes: 'Not recommended. Use during the first trimester is strictly avoided due to insufficient safety data regarding potential genotoxic risks of certain anthraquinones. Should only be considered under strict medical advice if dietary modifications and bulk-forming laxatives fail. Although only negligible amounts of active rheinthrone are excreted in breast milk, use during lactation is discouraged due to a lack of clinical data and the risk of inducing diarrhea or colic in the infant.' },
      { group: 'Onset of Effect', notes: 'Occurs typically after 6–12 hours.' },
    ],
    dosage: {
      standard: 'Adults & Adolescents (>12 years): 15–30 mg of sennosides once daily (usually taken at bedtime). Maximum: 30 mg of hydroxyanthracene glycosides (calculated as sennoside B) per day — roughly equivalent to 1 standard measuring spoon of raw herb. Onset: 6–12 hours.',
      forms: [
        { form: 'Senna Leaf Tea', dose: '1–2 g dried leaves steeped 10–15 min in 150 mL boiling water (in a covered vessel); taken at bedtime. Do not boil leaves directly.' },
        { form: 'Standardized Tablets (e.g., 7.5 mg sennosides)', dose: 'Adults: 2–4 tablets at bedtime. Children 6–12: 1–2 tablets (often half a tablet). Per product instructions.' },
        { form: 'Granules / Syrup', dose: 'As per product concentration and age group; typically 5–10 mL for children 6–12 years.' },
      ],
    },
    overdose: {
      symptoms: [
        'Acute Overdose: Ingestion of doses exceeding 100 mg of sennosides in a single day (equivalent to approximately 7–10 standard tablets).',
        'Chronic Toxicity: Continuous abusive use of doses exceeding 30 mg/day for more than 2 weeks — leads to laxative dependency and colon atony ("cathartic colon").',
        'Intense abdominal cramping and severe "griping" pain with profuse watery diarrhea — leading to rapid loss of fluids and essential minerals.',
        'Electrolyte Imbalance (Hypokalemia): the most dangerous complication — can trigger cardiac arrhythmias and muscle weakness.',
        'Metabolic Acidosis from excessive bicarbonate loss in stools.',
        'Prolonged abuse: theoretical risk of toxic hepatitis.',
      ],
      management: [
        'Immediate Cessation: Stop the intake of any anthraquinone-containing products.',
        'Fluid Replacement: Initiate aggressive rehydration using Oral Rehydration Salts (ORS) or intravenous fluids if necessary.',
        'Electrolyte Monitoring: Continuous monitoring of serum electrolytes (especially potassium levels), particularly in patients with pre-existing cardiac conditions.',
      ],
    },
    sideEffects: [
      'Abdominal pain and cramping ("griping").',
      'Severe diarrhea (in cases of sensitivity or high doses).',
      'Electrolyte abnormalities, including hypokalemia.',
      'Melanosis Coli: A benign, reversible pigment discoloration of the colonic mucosa that completely disappears within months after discontinuing senna.',
      'Nausea, excessive bowel activity, and potential nephritis (with chronic abuse).',
      'Yellow-brown or reddish-brown urine discoloration (benign metabolite excretion).',
      'Finger clubbing (observed exclusively with long-term chronic abuse).',
    ],
    contraindications: [
      'Known hypersensitivity to Senna alexandrina or other anthraquinone derivatives.',
      'Intestinal Obstruction and Stenosis: Strictly contraindicated in patients with known or suspected bowel blockage, ileus, or fecal impaction.',
      'Acute Inflammatory Intestinal Diseases: Contraindicated in Crohn\'s disease, ulcerative colitis, and appendicitis.',
      'Severe dehydration states accompanied by dark, concentrated urine or electrolyte depletion.',
      'Undiagnosed abdominal pain, severe stomach pain accompanied by nausea or vomiting.',
      'Severe renal or hepatic impairment.',
    ],
    drugInteractions: [
      'Cardiac Glycosides (e.g., Digoxin) & Antiarrhythmics: Hypokalemia resulting from long-term laxative abuse strongly potentiates the therapeutic and toxic actions of cardiac glycosides and interacts dangerously with antiarrhythmic medicinal products.',
      'Diuretics & Adrenocorticosteroids: Concomitant administration with potassium-depleting diuretics (e.g., Furosemide), corticosteroids, or liquorice root (Glycyrrhiza glabra) may drastically accelerate potassium loss and worsen hypokalemia.',
    ],
    storage: {
      forms: [
        { form: 'Temperature', storage: 'Store in a cool, dry place at controlled room temperature, ideally between 15°C to 25°C. Keep away from excessive heat sources.' },
        { form: 'Light Protection', storage: 'Store in light-resistant containers (amber glass bottles or opaque packaging) as direct sunlight degrades anthraquinone glycosides.' },
        { form: 'Moisture Control', storage: 'Keep the container tightly closed. High humidity promotes mold growth and triggers the hydrolytic breakdown of active chemical compounds.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Senna is a safe, natural herb that can be used daily to lose weight and flatten the stomach.', fact: 'Senna is NOT a weight-loss agent. Any weight lost while using Senna is actually "Water Weight" (fluid loss), not fat loss. Using it long-term for weight control is dangerous and medically discouraged.' },
    ],
    marketedProducts: [
      { name: 'Senade Tablets (Mepaco Pharaonia)', image: '/images/Picture270.png' },
      { name: 'Pursennid Tablets (Novartis / GSK)', image: '/images/Picture271.jpeg' },
      { name: 'Agiolax Granules (Madaus / Sedico)', image: '/images/Picture272.jpeg' },
      { name: 'Sekem Senna Tea / Royal Regime Tea', image: '/images/Picture273.jpeg' },
    ],
    benefits: [
      { icon: 'medical_services', title: 'Clinically Approved Stimulant Laxative', desc: 'WHO and EMA monograph-endorsed short-term treatment for occasional or acute constipation with predictable bowel evacuation in 6-12 hours.' },
      { icon: 'cleaning_services', title: 'Pre-procedure Bowel Cleansing', desc: 'Used under medical supervision for bowel clearance before colonoscopy, abdominal X-rays, or surgical interventions.' },
      { icon: 'timer', title: 'Rapid and Reliable Onset', desc: 'Produces a predictable laxative effect within 6-12 hours, typically overnight when taken at bedtime.' },
      { icon: 'science', title: 'Dual Mechanism Action', desc: 'Simultaneously stimulates colonic peristalsis (motility) and modifies electrolyte secretion into the intestinal lumen via Na+/K+-ATPase inhibition.' },
    ],
    botanicalFacts: {
      origin: 'Native to northeast Africa (Egypt, Sudan) and South Asia (India). Cultivated commercially in India, Pakistan, and the Nile Valley.',
      parts: 'Leaves (folium) and pods (fructus); leaves contain higher sennoside concentrations.',
      history: 'Used since the 9th century in Arabic medicine; documented by Ibn Sina (Avicenna) in the Canon of Medicine. The WHO and EMA have published official herbal monographs establishing its clinical use.',
    },
    preparation: [
      { method: 'Aqueous Infusion (Standard Home Use)', desc: 'Steep 1-2 g dried leaves in 150 mL boiling water in a covered vessel for 10-15 min. Strain well. Add ginger or peppermint to reduce griping.', bestFor: 'Short-term constipation relief; taken at bedtime for morning effect' },
      { method: 'Standardized Extract (Commercial)', desc: 'Tablets and granules standardized to specific sennoside content (e.g., 7.5 mg or 12.5 mg sennoside per tablet) following EMA/WHO monograph guidelines.', bestFor: 'Precise dosing; bowel preparation for medical procedures' },
    ],
    symptoms: ['Constipation', 'Bowel irregularity', 'Pre-procedure bowel cleansing'],
    relatedPlants: ['psyllium', 'fennel'],
    references: [
      { text: 'European Medicines Agency — Senna leaf herbal monograph.', url: 'https://www.ema.europa.eu/en/medicines/herbal/sennae-folium' },
      { text: 'WHO — Senna monograph (iris.who.int).', url: 'https://iris.who.int/server/api/core/bitstreams/6e21eaaa-d157-421d-a136-eb61964de18c/content' },
      { text: 'NHS — Senna.', url: 'https://www.nhs.uk/medicines/senna/' },
      { text: 'WebMD — Senna.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-652/senna' },
      { text: 'EMA — Senna leaf public summary (PDF).', url: 'https://www.ema.europa.eu/en/documents/herbal-summary/senna-leaf-summary-public_en.pdf' },
      { text: 'EMA — Final assessment report on Senna alexandrina (PDF).', url: 'https://www.ema.europa.eu/en/documents/herbal-summary/final-assessment-report-senna-alexandrina-mill-cassia-senna-l-cassia-angustifolia-vahl-1-folium-and-fructus-revision-1_en.pdf-0' },
      { text: 'Egyptian Drug Authority — Egyptian Herbal Monograph 2023.', url: 'https://edaegypt.gov.eg/media/l40dm3jl/egyptian-herbal-monograph_2023.pdf' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // DIGESTIVE › CONSTIPATION RELIEF
  // ══════════════════════════════════════════════════════════════════════

  'psyllium-constipation': {
    id: 'psyllium-constipation',
    name: 'Psyllium',
    nameAr: 'سيلليوم / إسباغول',
    latinName: 'Plantago ovata Forssk.',
    commonNames: ['Psyllium', 'Ispaghula', 'Blond Psyllium', 'Indian Plantain'],
    category: 'digestive',
    subcategory: 'constipation-relief',
    tags: ['Bulk-forming Laxative', 'Fiber', 'IBS Relief', 'Cholesterol', 'Bowel Regulator'],
    image: '/images/Picture274.jpeg',
    shortDescription: 'A soluble dietary fiber functioning as a bulk-forming laxative; the seed husk absorbs up to 40× its weight in water, forming a viscous mucilaginous gel that softens stool, stimulates peristalsis, and beneficially modulates cholesterol and glycemic profiles.',
    description: 'Psyllium (Plantago ovata) husks contain 10–30% mucilaginous heteropolysaccharides (arabinoxylans) that are exceptionally hydrophilic and resist enzymatic digestion in the upper GI tract. Upon reaching the colon, the expanded gel matrix exerts mechanical stretch on colonic mechanoreceptors, activating the myenteric reflex and stimulating peristalsis. Partial bacterial fermentation generates short-chain fatty acids (SCFAs) that nourish colonocytes. Unlike stimulant laxatives, psyllium is non-habit-forming and classified as first-line therapy for chronic constipation and IBS.',
    history: 'Used for centuries in Ayurvedic and traditional medicine as a bowel regulator. EMA and WHO monographs establish its clinical role in constipation, IBS, and metabolic health.',
    isDemo: false,
    activeConstituents: [
      { name: 'Mucilage (Arabinoxylans)', percentage: '10–30% of husk weight', effect: 'High-molecular-weight heteropolysaccharides; exceptionally hydrophilic: absorb up to 40× weight in water, forming viscous gel that resists GI enzymatic degradation' },
    ],
    moa: [
      { title: 'Hydration Phase', detail: 'Upon ingestion with adequate fluids, the mucilage evades small intestinal digestion, absorbing intraluminal water within the gut cavity.' },
      { title: 'Lumen Expansion', detail: 'The formation of a stable, hydrated gel matrix significantly increases the total physical volume (bulk) and moisture content of the fecal mass, softening its consistency.' },
      { title: 'Mechanical Trigger', detail: 'The expanded bulk exerts direct mechanical radial stretch on the mechanoreceptors located within the smooth muscle walls of the colon. This activates the intrinsic myenteric reflex, stimulating propulsive peristalsis.' },
      { title: 'Bacterial Fermentation Support', detail: 'The arabinoxylans undergo partial anaerobic fermentation by the colonic microbiota, generating Short-Chain Fatty Acids (SCFAs) such as acetate, propionate, and butyrate. These SCFAs provide trophic energy to the colonic mucosa (colonocytes) and modulate motility.' },
    ],
    uses: [
      'Chronic Constipation: Established as first-line phytotherapy for long-term management and bowel habit correction. Strictly non-habit forming and does not induce cathartic colon syndrome.',
      'Stool Softening for Anorectal Conditions: Indicated to mitigate straining during defecation in patients suffering from painful Hemorrhoids, Anal Fissures, or post-anorectal surgery.',
      'Irritable Bowel Syndrome (IBS): Clinically utilized to normalize stool consistency and transit times in patients with IBS (both constipation-predominant IBS-C and alternating IBS).',
      'Hyperlipidemia & Cholesterol Management: The structural gel traps dietary cholesterol and binds directly to bile acids in the intestinal lumen, inhibiting their enterohepatic reabsorption. This triggers the upregulation of hepatic cholesterol 7α-hydroxylase, forcing the liver to clear circulating LDL cholesterol from the blood to synthesize new bile acids.',
      'Glycemic Control (Type 2 Diabetes): When taken with meals, the viscous gel network slows down gastric emptying and delays carbohydrate digestion and glucose absorption, significantly flattening postprandial glucose spikes.',
    ],
    howToUse: [
      { method: 'Preparation', instruction: 'Mix 1 sachet or 1 tablespoon (approximately 5–10 g) into a full glass (250 mL) of cool water, milk, or juice. Stir rapidly and consume immediately before the gelatinization process renders it too viscous to swallow.' },
      { method: 'Follow-up Hydration (Mandatory)', instruction: 'Drink an additional full glass of water immediately after ingestion.' },
      { method: 'Timing', instruction: 'May be administered at any point of the day. However, it must NEVER be taken immediately before bedtime to avoid esophageal or intestinal stagnation during recumbency.' },
      { method: 'Daily Fluid Maintenance', instruction: 'Patients must maintain an overall high fluid intake (6 to 8 glasses of water daily) to avoid mechanical fecal impaction.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults & Adolescents (>12 years)', notes: '5–10 grams taken 1–3 times daily depending on clinical severity. Maximum: 30 g/day. Always with adequate fluid.' },
      { group: 'Children (6–12 years)', notes: '2.5–5 grams (half of the adult dose) administered 1–2 times daily. Mandatory fluid monitoring. Ensure the child can swallow the mixture properly to avoid choking risks.' },
      { group: 'Children (<6 years)', notes: 'Dosage must be determined by a pediatrician. Generally not recommended for self-medication in this age group.' },
      { group: 'Pregnancy & Lactation', notes: 'Category B (Safe). Established as the preferred first-line therapeutic agent for gestational constipation. Actions are purely mechanical and intraluminal; not absorbed systemically and poses no fetal risk. Safe during lactation.' },
    ],
    dosage: {
      standard: 'Adults & Adolescents (>12 years): 5–10 g (1 tablespoon or 1 sachet) mixed in 250 mL water or juice, taken 1–3 times daily. Maximum: 30 g/day. Each dose must be consumed immediately before gelatinization and followed by an additional glass of fluid. Never take immediately before bedtime or in a recumbent position.',
      forms: [
        { form: 'Effervescent Sachets (e.g., Fybogel)', dose: '1 sachet (3.5 g ispaghula husk) dissolved in 150 mL water, taken 2× daily morning and evening.' },
        { form: 'Pure Husk Powder', dose: '5–10 g per dose in 250 mL water, 1–3× daily.' },
      ],
    },
    overdose: {
      symptoms: [
        'Toxic Mechanism: Entirely determined by the Fiber-to-Water Ratio. Consuming high doses (>30 g/day) without proportional hydration creates a dense, solid mass within the GI lumen.',
        'Acute intestinal obstruction, absolute constipation, painful abdominal distension, severe bloating, and loss of bowel sounds.',
        'Esophageal blockage: if swallowed with insufficient liquid, premature swelling within the esophagus can cause acute choking or esophageal blockage.',
      ],
      management: [
        'Immediate Copious Hydration: Administer massive amounts of oral fluids if the airway is secure and the patient can swallow.',
        'Gastric Decompression / Medical Evaluation: In cases of verified structural esophageal or intestinal blockage, surgical or endoscopic intervention is required to avoid tissue perforation. Do NOT administer stimulant laxatives.',
      ],
    },
    sideEffects: [
      'Temporary flatulence, abdominal rumbling, and transient bloating during the initial 3–5 days of therapy (due to microbial fermentation changes).',
      'Risk of mechanical esophageal or intestinal packing strictly associated with poor hydration.',
      'Rare hypersensitivity reactions (dermal rash, urticaria, or bronchospasm) primarily reported in personnel handling loose bulk powder.',
    ],
    contraindications: [
      'Dysphagia: Patients with pre-existing swallowing difficulties, esophageal narrowing, or structural abnormalities of the upper GI tract.',
      'Fecal Impaction: Absolutely contraindicated if a hard, impacted mass of stool is already present in the rectum or colon.',
      'Intestinal Obstruction: Known or suspected mechanical ileus or stenosis.',
      'Bedbound / Severe Hypomotility States: Patients with highly restricted physical mobility or neurological conditions affecting peristalsis (extreme risk of obstruction).',
    ],
    drugInteractions: [
      'Reduced Absorption of Medications: Psyllium forms a thick mucilaginous gel that can trap other drugs and prevent their absorption. This includes: Lithium (bipolar disorder), Carbamazepine (anti-epileptic), Iron Supplements, and Digoxin.',
      'Clinical Timing Protocol: To bypass this interaction, Psyllium must be taken 30 to 60 minutes AFTER any other oral medication, or at least 2 hours before them.',
    ],
    storage: {
      forms: [
        { form: 'Powder / Sachets', storage: 'Store in a cool, dry place below 25°C in tightly sealed, airtight containers. Absolute protection from ambient moisture and high humidity is mandatory, as premature exposure to water vapor initiates internal swelling and destroys the plant\'s therapeutic capacity before usage.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Psyllium is strictly an OTC drug for treating acute constipation attacks.', fact: 'Psyllium functions comprehensively as a "Bowel Regulator." Due to its high water-binding capacity, it can paradoxically help solidify loose stool in cases of mild diarrhea. Furthermore, it is a clinically proven metabolic tool capable of reducing atherogenic LDL cholesterol and regulating glycemic indexes.' },
    ],
    marketedProducts: [
      { name: 'Fybogel Effervescent Sachets (Reckitt Benckiser)', image: '/images/Picture275.jpeg' },
      { name: 'Psyllium Husks / Pure Psyllium Powder (Mepaco Pharaonia)', image: '/images/Picture276.png' },
      { name: 'Agiolax Granules (Madaus / Sedico - Combination product)', image: '/images/Picture272.jpeg' },
    ],
    benefits: [
      { icon: 'favorite', title: 'First-Line Constipation Therapy', desc: 'EMA and WHO monograph-endorsed non-habit-forming bulk-forming laxative; safe for long-term use, pregnancy, and IBS management unlike stimulant laxatives.' },
      { icon: 'bar_chart', title: 'Cholesterol & Glucose Management', desc: 'Viscous gel binds bile acids and dietary cholesterol, lowering LDL. When taken with meals, flattens postprandial glucose spikes in Type 2 Diabetes.' },
      { icon: 'water_drop', title: 'Stool Softening & Bowel Regulation', desc: 'Absorbs up to 40× its weight in water, forming a gel that softens stool and relieves straining in hemorrhoids, anal fissures, and post-surgical patients.' },
      { icon: 'spa', title: 'IBS Symptom Normalizer', desc: 'Normalizes stool consistency and transit times in both IBS-C and alternating IBS, reducing urgency, cramping, and discomfort.' },
    ],
    botanicalFacts: {
      origin: 'Native to South Asia and the Middle East (India, Pakistan, Iran). Commercially cultivated in India (Rajasthan), accounting for ~85% of global supply.',
      parts: 'Seed husk (tegumentum): the dried outer coating of the seed containing the therapeutic mucilage. The seed kernel itself is not used medicinally.',
      history: 'Used for centuries in Ayurvedic medicine. EMA and WHO have published official herbal monographs establishing its clinical role in constipation, IBS, and metabolic health.',
    },
    preparation: [
      { method: 'Aqueous Suspension', desc: 'Mix 5–10 g powder in 250 mL of cool water or juice, stir rapidly, and consume immediately before gelatinization. Always follow with another full glass of fluid.', bestFor: 'Chronic constipation, IBS, bowel regulation, hemorrhoid relief' },
      { method: 'Effervescent Sachets', desc: 'Dissolve sachet in water (creates a fizzy, palatable suspension). Take 2× daily morning and evening after meals.', bestFor: 'Better compliance and palatability vs. plain powder' },
    ],
    symptoms: ['Constipation', 'Bowel irregularity', 'IBS symptoms', 'High cholesterol', 'Blood sugar management'],
    relatedPlants: ['senna', 'castor'],
    references: [
      { text: 'Egyptian Drug Authority — Plantago ovata monograph.', url: 'https://share.google/lH8q4stDezqsL7jNQ' },
      { text: 'European Medicines Agency — Plantago ovata herbal monograph.', url: 'https://www.ema.europa.eu/en/medicines/herbal/plantaginis-ovatae-seminis-tegumentum' },
      { text: 'EMA — Community herbal monograph on Plantago ovata (PDF).', url: 'https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-plantago-ovata-forssk-semen_en.pdf' },
      { text: 'ScienceDirect — Psyllium husk review.', url: 'https://www.sciencedirect.com/science/article/abs/pii/S092422441830791X' },
      { text: 'Drugs.com — Psyllium.', url: 'https://www.drugs.com/npp/plantain.html' },
      { text: 'Drugs.com — Psyllium use in pregnancy.', url: 'https://www.drugs.com/pregnancy/psyllium.html' },
      { text: 'NCBI LactMed — Psyllium.', url: 'https://www.ncbi.nlm.nih.gov/books/n/lactmed/LM471/?report=reader' },
      { text: 'PubMed Central — Psyllium in pregnancy.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3418980' },
      { text: 'PubMed Central — Psyllium fiber and health outcomes.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12422764/' },
    ],
  },

  'castor-constipation': {
    id: 'castor-constipation',
    name: 'Castor',
    nameAr: 'الخروع',
    latinName: 'Ricinus communis L.',
    commonNames: ['Castor', 'Castor Bean Oil', 'Ricinus Oil'],
    category: 'digestive',
    subcategory: 'constipation-relief',
    tags: ['Stimulant Laxative', 'Purgative', 'Short-term Use', 'Castor Oil', 'Ricinoleic Acid'],
    image: '/images/Picture277.jpeg',
    shortDescription: 'A high-potency stimulant purgative; pancreatic lipase-activated ricinoleic acid selectively agonizes prostanoid receptors in the small intestine, triggering massive peristalsis and rapid bowel evacuation within 2–6 hours.',
    description: 'Castor oil (fixed oil from Ricinus communis seeds) is pharmacologically inactive until hydrolyzed by pancreatic lipase in the small intestine, releasing ricinoleic acid. This unique hydroxylated fatty acid acts as a selective agonist for SEP_3 and SEP_4 prostanoid receptors on intestinal smooth muscle, mimicking prostaglandins and triggering forceful, rapid peristaltic contractions. Simultaneously inhibits Na+/K+-ATPase, increasing luminal fluid secretion. Unlike senna (which targets the colon), castor oil primarily stimulates the small intestine, producing rapid, powerful purgative action within 2–6 hours.',
    history: 'Documented in the ancient Egyptian Ebers Papyrus (~1550 BC). Used medicinally for over 4,000 years. Today also a major pharmaceutical excipient (Cremophor EL for IV paclitaxel in cancer therapy).',
    isDemo: false,
    activeConstituents: [
      { name: 'Ricinoleic Acid', percentage: '85–90% of total fatty acid content', effect: 'Active metabolite released by pancreatic lipase; selective prostanoid receptor agonist (SEP_3/SEP_4) triggering intense small-intestinal peristalsis and fluid secretion' },
    ],
    moa: [
      { title: 'Enzymatic Activation (The Pro-drug Effect)', detail: 'Castor oil itself is pharmacologically inactive. Once it reaches the small intestine, it is hydrolyzed by pancreatic lipase enzymes, breaking down the triglycerides into glycerol and ricinoleic acid — the active metabolite.' },
      { title: 'Receptor Binding (Molecular Level)', detail: 'Ricinoleic acid acts as a selective agonist for specific prostanoid receptors: it binds to SEP_3 and SEP_4 receptors on the smooth muscle cells of the intestinal wall. This binding mimics the action of natural prostaglandins, triggering immediate and strong muscle contractions.' },
      { title: 'Stimulation of Peristalsis', detail: 'Unlike Senna (which primarily affects the colon), ricinoleic acid stimulates the small intestine. It causes massive peristalsis — rapid, wave-like contractions that push contents forward quickly — and decreased transit time so fast that the body cannot absorb water.' },
      { title: 'Secretory Effect (Electrolyte Alteration)', detail: 'Ricinoleic acid alters cell membrane permeability of the intestinal mucosa: it inhibits the Na/K ATPase pump (blocking sodium and potassium absorption) and stimulates the secretion of water and electrolytes into the intestinal lumen, keeping the stool liquid and voluminous for rapid evacuation.' },
    ],
    uses: [
      'Symptomatic Relief of Acute Constipation: Indicated strictly for short-term, rapid evacuation of the bowel in temporary acute constipation.',
      'Bowel Cleansing for Medical Procedures: Utilized for diagnostic bowel clearance prior to abdominal X-rays, proctoscopy, colonoscopy, or surgical interventions.',
      'Drug Vehicle (Excipient): Used as a solvent for oil-based injections, such as certain hormonal treatments.',
      'Cremophor EL (Emulsifier): A derivative of castor oil used to solubilize intravenous drugs like Paclitaxel (Taxol) for cancer therapy.',
      'Labor Induction: Clinically used under strict hospital supervision to stimulate uterine contractions and induce labor.',
      'Dermatological Barrier: Included in diaper rash creams and protective ointments to form a water-resistant barrier on the skin.',
    ],
    howToUse: [
      { method: 'Oral Administration with Juice', instruction: 'Mix the prescribed dose thoroughly with a glass of cold orange, lemon, or apple juice to mask the viscous texture and unpleasant taste. Chilling the oil prior to administration helps suppress the gag reflex and reduce nausea. Alternatively, mix with cold ginger ale. Drink at least 6–8 glasses of water throughout the day to replace lost intraluminal fluids and prevent systemic dehydration. Onset of action: 2–6 hours.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults & Adolescents (>12 years)', notes: '15–60 mL as a single oral dose. Onset: 2–6 hours. Mandatory copious fluid intake (6–8 glasses of water) throughout the day.' },
      { group: 'Children (2–11 years)', notes: '5–15 mL administered strictly under direct medical supervision.' },
      { group: 'Children (<2 years)', notes: 'Strictly Contraindicated. No safe clinical data is available for infants; it can precipitate life-threatening dehydration and rapid electrolyte imbalance.' },
      { group: 'Pregnancy & Lactation', notes: 'Strictly Contraindicated (Category X). Ricinoleic acid stimulates uterine smooth muscle contractions, posing a high risk of premature labor, uterine hemorrhage, or miscarriage. Safe clinical data is absent during lactation.' },
      { group: 'Geriatrics (65+ years)', notes: 'Generally discouraged due to increased susceptibility to orthostatic hypotension from rapid dehydration and physical strain.' },
    ],
    dosage: {
      standard: 'Adults and Adolescents (>12 years): 15–60 mL as a single oral dose. Children (2–11 years): 5–15 mL strictly under direct medical supervision. Children (<2 years): Strictly Contraindicated. Onset of Action: 2–6 hours. Clinical Directive: Chill and mix with cold citrus juice or cold ginger ale. Mandatory copious fluid intake (6–8 glasses of water) throughout the day.',
      forms: [
        { form: 'Castor Oil (Oral)', dose: 'Adults: 15–60 mL single dose chilled and mixed in cold citrus juice or ginger ale. Children 2–11 years: 5–15 mL under medical supervision. Always chilled and mixed in cold juice.' },
      ],
    },
    overdose: {
      symptoms: [
        'Acute Oral Overdose (>60–100 mL in a single dose for adults).',
        'Severe gastrointestinal distress: violent abdominal cramping, persistent vomiting, explosive watery diarrhea.',
        'Rapid dehydration: dry mucous membranes, extreme thirst, oliguria, hypotension.',
        'Electrolyte crisis: significant hypokalemia (K+ loss) and hyponatremia (Na+ loss) leading to muscle weakness, tremors, confusion, dizziness, dangerous cardiac arrhythmias, and potential hypovolemic shock.',
      ],
      management: [
        'Discontinue use immediately.',
        'If conscious, administer Oral Rehydration Salts (ORS). If severe vomiting persists, aggressive Intravenous (IV) fluid replacement (Normal Saline or Ringer\'s Lactate) is mandatory.',
        'Administer intravenous or oral Potassium and Sodium supplements to stabilize cardiac rhythms.',
        'Smooth muscle relaxants such as Hyoscine butylbromide (Buscopan) can be given to alleviate violent intestinal cramps.',
      ],
    },
    sideEffects: [
      'Severe Abdominal Cramping: Intense abdominal pain, griping, and colonic spasms triggered by the rapid, forceful stimulation of intestinal peristalsis.',
      'Nausea and Vomiting: Acute gastrointestinal irritation and distress, primarily induced by the heavy oily texture, viscous consistency, and highly unpleasant distinctive taste of the oil.',
      'Dehydration: Rapid and excessive loss of intraluminal body fluids due to explosive, watery diarrhea.',
      'Electrolyte Depletion: Significant loss of essential minerals through the stool, leading most critically to Hypokalemia (potassium loss) and Hyponatremia (sodium loss).',
      'Pelvic Congestion: Increased blood flow and congestion in the pelvic region, which can intensify menstrual cramps or trigger uterine activity.',
      'Laxative Dependency (Chronic Abuse): Long-term or repeated use can cause permanent structural damage to the myenteric plexus (intestinal nerves), culminating in severe colon atony known as "Lazy Bowel Syndrome."',
    ],
    contraindications: [
      'Pregnancy (Category X): It can stimulate uterine contractions, leading to premature labor.',
      'Intestinal Obstruction: Risk of bowel perforation.',
      'Inflammatory Conditions: Appendicitis, Crohn\'s disease, or Ulcerative Colitis.',
      'Menstruation: May exacerbate pelvic congestion.',
      'Children under 2 years: Strictly Contraindicated.',
    ],
    drugInteractions: [
      'Impaired Drug Absorption: Due to the drastic increase in intestinal transit speed, Castor oil significantly reduces the bioavailability and absorption of almost all concurrently administered oral medications. Separate other oral drugs from Castor oil by at least 2 hours.',
      'Diuretics (e.g., Furosemide / Lasix): Concomitant use exponentially increases the risk of fluid loss and profound hypokalemia (K+ depletion).',
      'Cardiac Glycosides (e.g., Digoxin): Castor oil-induced hypokalemia markedly increases the sensitivity of myocardial tissues to digitalis, precipitating dangerous Digoxin Toxicity and potentially fatal arrhythmias.',
      'Fat-Soluble Vitamins (A, D, E, K): Chronic or repeated use impairs the micellar dissolution and absorption of these vitamins, culminating in nutritional deficiencies.',
    ],
    storage: {
      forms: [
        { form: 'Castor Oil', storage: 'Store in well-filled, tightly closed, light-resistant containers in a cool place, ideally below 25°C. Protection from direct sunlight is required to prevent oxidation and rancidity of the unsaturated fatty acid fractions.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Castor oil is a safe, natural daily detox agent to cleanse the gut and promote hair growth inside the eyes safely.', fact: 'Castor oil is a severe, high-potency purgative; chronic use for "detox" is dangerous and can cause permanent damage to the myenteric plexus (intestinal nerves). Furthermore, while used topically for scalp or eyelash hair growth, direct contact with the ocular mucosa causes severe chemical irritation and conjunctivitis.' },
    ],
    marketedProducts: [
      { name: 'Imtenan Castor Oil (100% Natural Cold Pressed)', image: '/images/Picture278.png' },
      { name: 'Pure Castor Oil (Available as generic bottles in Egyptian Community Pharmacies)', image: '' },
    ],
    benefits: [
      { icon: 'bolt', title: 'Rapid Powerful Evacuation', desc: 'Produces bowel evacuation within 2–6 hours via prostanoid receptor agonism in the small intestine: significantly faster than senna (6–12 h) or psyllium.' },
      { icon: 'medical_services', title: 'Bowel Preparation Standard', desc: 'Established tool for pre-procedure bowel cleansing before colonoscopy, X-rays, and surgical interventions under medical supervision.' },
      { icon: 'science', title: 'Dual Mechanism Action', desc: 'Ricinoleic acid simultaneously stimulates SEP_3/SEP_4 prostanoid receptors (motility) and inhibits Na+/K+-ATPase (fluid secretion) for complete, rapid evacuation.' },
      { icon: 'warning', title: 'Strictly Short-term Only', desc: 'Chronic use causes permanent myenteric plexus damage (Lazy Bowel Syndrome). Only for acute short-term use under medical guidance: never for routine constipation or weight loss.' },
    ],
    botanicalFacts: {
      origin: 'Native to tropical East Africa (Ethiopia). Widely cultivated in tropical and subtropical regions; major producers include India, China, and Brazil.',
      parts: 'Fixed oil cold-pressed from seeds. The seed contains ricin (highly toxic protein) but this is completely absent from pharmaceutical-grade processed oil.',
      history: 'Documented in the Egyptian Ebers Papyrus (~1550 BC). Used for 4,000+ years medicinally. Today also a major pharmaceutical excipient as Cremophor EL (IV paclitaxel solubilizer).',
    },
    preparation: [
      { method: 'Cold-pressed Oil (Oral)', desc: 'Chill the oil before administration. Mix 15–60 mL in cold citrus juice and consume as a single dose. Mandatory copious hydration (6–8 glasses/day) throughout the day.', bestFor: 'Acute constipation; short-term rapid bowel evacuation; pre-procedure bowel preparation' },
    ],
    symptoms: ['Constipation', 'Pre-procedure bowel cleansing', 'Bowel irregularity'],
    relatedPlants: ['senna', 'psyllium'],
    references: [
      { text: 'European Medicines Agency — Ricinus communis herbal monograph.', url: 'https://www.ema.europa.eu/en/medicines/herbal/ricini-oleum' },
      { text: 'EMA — European Union herbal monograph on Ricinus communis L. oleum (PDF).', url: 'https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-ricinus-communis-l-oleum_en.pdf' },
      { text: 'PubChem — Castor oil.', url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Castor-oil' },
      { text: 'Healthline — Castor Oil for Constipation.', url: 'https://www.healthline.com/health/digestive-health/castor-oil-for-constipation' },
      { text: 'WebMD — Castor Oil Health Benefits.', url: 'https://www.webmd.com/diet/castor-oil-health-benefits' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // DIGESTIVE › DIARRHEA SUPPORT
  // ══════════════════════════════════════════════════════════════════════

  'peppermint-diarrhea': {
    id: 'peppermint-diarrhea',
    name: 'Peppermint',
    nameAr: 'النعناع الفلفلي',
    latinName: 'Mentha × piperita L.',
    commonNames: ['Peppermint', 'Brandy Mint', 'Balm Mint'],
    category: 'digestive',
    subcategory: 'diarrhea-support',
    tags: ['Antispasmodic', 'IBS Relief', 'Carminative', 'Antidiarrheal', 'Menthol'],
    image: '/images/Picture279.jpg',
    shortDescription: 'A clinically validated antispasmodic phytotherapy for IBS and functional bowel disorders; menthol acts as a natural L-type calcium channel blocker, resolving GI smooth muscle hypermotility and visceral pain.',
    description: 'Peppermint (Mentha × piperita) is a sterile hybrid combining menthol (30–55%) as its primary antispasmodic through L-type Ca²⁺ channel blockade, plus TRPM8 cold receptor activation for visceral analgesia. Rosmarinic acid and flavonoids (luteolin, apigenin) provide anti-inflammatory and gastroprotective support. Enteric-coated capsules deliver active menthol directly to the intestine, bypassing the stomach to avoid LES relaxation and GERD. Established by EMA and WHO as a validated phytotherapy for IBS and functional GI spasms.',
    history: 'A sterile hybrid of Mentha aquatica and Mentha spicata cultivated since the 18th century. EMA, WHO, and ESCOP have published monographs confirming its therapeutic role in IBS and GI disorders.',
    isDemo: false,
    activeConstituents: [
      { name: 'Menthol (30–55%)', percentage: '30–55% of volatile oil', effect: 'L-type Ca²⁺ channel blocker in intestinal smooth muscle (antispasmodic); TRPM8 cold receptor agonist (visceral analgesia); primary active principle' },
      { name: 'Menthone (14–32%)', percentage: '14–32%', effect: 'Precursor ketone synergizing with menthol in antispasmodic action' },
      { name: 'Menthofuran (1–9%)', percentage: '1–9%', effect: 'Minor component; potential hepatotoxin at high concentrations: must be monitored' },
      { name: 'Rosmarinic Acid & Flavonoids (Luteolin, Apigenin, Eriocitrin)', percentage: '', effect: 'Anti-inflammatory, gastroprotective, and systemic antioxidant actions' },
    ],
    moa: [
      { title: 'Calcium Channel Antagonism (Antispasmodic)', detail: 'Menthol acts as a natural voltage-gated L-type calcium channel blocker in intestinal smooth muscle. Inhibits extracellular Ca²⁺ influx, preventing sustained contractions, resolving GI spasms, hypermotility, and excessive bowel movements.' },
      { title: 'TRPM8 Receptor Activation (Visceral Analgesia)', detail: 'Menthol selectively activates TRPM8 cold receptors in GI afferent nerve fibers, eliciting a local cooling and desensitizing effect, inducing mild analgesia over hyperalgesic visceral walls.' },
      { title: 'Carminative & Surface Tension Reduction', detail: 'Relaxes the lower esophageal sphincter (LES), facilitating expulsion of trapped gas, rapidly mitigating flatulence, bloating, and epigastric tension.' },
      { title: 'Antimicrobial & Anti-inflammatory', detail: 'Direct bacteriostatic efficacy against standard GI pathogens; inhibits local pro-inflammatory eicosanoid cascades by suppressing leukotriene and prostaglandin production.' },
    ],
    uses: [
      'Symptomatic relief of IBS: diarrhea, alternating bowel habits, visceral hypersensitivity',
      'Management of GI spasms, abdominal tension, flatulence, and functional dyspepsia',
      'Supportive alleviation of nausea and mild morning/travel sickness',
    ],
    howToUse: [
      { method: 'Enteric-Coated Oil Capsules', instruction: 'Take 0.2–0.4 mL (180–360 mg) 3× daily, 30–60 minutes before meals. MUST be enteric-coated: swallow whole, never crush or chew.' },
      { method: 'Peppermint Tea (Aqueous Infusion)', instruction: 'Steep 1.5–3 g dried leaves in 150 mL boiling water in a covered vessel for 5–10 minutes (covering preserves volatile menthol). Drink warm 2–3 times daily.' },
      { method: 'Fluid Extract (1:1 in 45% ethanol)', instruction: '1–3 mL administered 3 times daily.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Highly safe and well-tolerated at therapeutic doses.' },
      { group: 'Children (<4 years)', notes: 'Pure peppermint oil STRICTLY CONTRAINDICATED: menthol near nasal mucosa can trigger fatal laryngeal/bronchial spasms and respiratory arrest.' },
      { group: 'Children (>4 years)', notes: 'Mild aqueous infusions (tea) generally safe. Avoid concentrated oil products.' },
      { group: 'Pregnant & Breastfeeding Women', notes: 'Food-grade tea usage considered safe. High therapeutic doses of concentrated essential oils AVOIDED due to potential emmenagogue actions.' },
      { group: 'Geriatrics', notes: 'Safe, but requires clinical profiling due to higher prevalence of hiatal hernia or GERD.' },
    ],
    dosage: {
      standard: 'Enteric-coated capsules: 0.2–0.4 mL (180–360 mg) 3× daily, 30–60 min before meals. Tea: 1.5–3 g dried leaves steeped 5–10 min (covered), 2–3× daily.',
      forms: [
        { form: 'Enteric-Coated Capsules', dose: '0.2–0.4 mL (180–360 mg) 3× daily, 30–60 min before meals. Swallow whole: never crush.' },
        { form: 'Peppermint Tea', dose: '1.5–3 g dried leaves in 150 mL boiling water (covered), 5–10 min steep. 2–3× daily.' },
        { form: 'Fluid Extract', dose: '1–3 mL in 45% ethanol, 3× daily.' },
      ],
    },
    overdose: {
      symptoms: [
        'Severe GI erosion, hematuria, skin rashes from high-dose non-enteric oil',
        'CNS depression: dizziness, confusion, ataxia, bradycardia, respiratory depression',
        'Extreme toxicity: epileptiform seizures',
      ],
      management: [
        'Discontinue immediately. Aggressive supportive and symptomatic therapy.',
        'Maintain clear airways and hemodynamics.',
        'Monitor renal and hepatic profiles if systemic absorption is extensive.',
      ],
    },
    sideEffects: [
      'Heartburn and GERD worsening from LES relaxation (use enteric-coated form to minimize)',
      'Perianal burning sensation from residual menthol in stool',
      'Rare allergic reactions in menthol-sensitive individuals',
    ],
    contraindications: [
      'Known hypersensitivity to Mentha × piperita or menthol',
      'Severe GERD and hiatal hernia: peppermint oil relaxes LES, markedly worsening acid reflux',
      'Biliary obstruction and cholecystitis: strong choleretic/cholagogue activity triggers biliary colic in gallstone patients',
      'Severe hepatic impairment: monoterpene metabolic load',
      'Infants and children under 4 years: pure oil strictly contraindicated',
    ],
    drugInteractions: [
      'Antacids, H2-blockers, PPIs (e.g., Omeprazole): raise gastric pH → premature dissolution of enteric coating → severe heartburn. Separate by at least 2 hours.',
      'CYP3A4 substrates (e.g., Cyclosporine, Felodipine): moderate CYP3A4 inhibition may elevate plasma concentrations of narrow-TI drugs.',
      'CNS depressants: additive sedation with high-dose menthol formulations.',
    ],
    storage: {
      forms: [
        { form: 'Dry Leaves', storage: 'Airtight, moisture-resistant, light-resistant containers below 25°C.' },
        { form: 'Enteric-Coated Capsules', storage: 'Original packaging below 25°C, away from moisture and heat.' },
        { form: 'Volatile Oil Products', storage: 'Hermetically sealed to prevent evaporation and compositional oxidation.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Peppermint oil is an appropriate curative drug for severe, high-fever infectious bacterial or amoebic dysentery.', fact: 'Peppermint oil holds no in-vivo curative efficacy against virulent invasive enteropathogens nor does it resolve clinical dehydration. It serves as an exceptional, clinically validated supportive/antispasmodic phytotherapy targeting functional bowel hypermotility, cramping, and IBS symptoms.' },
    ],
    marketedProducts: [
      { name: 'Colpermin Capsules (Enteric-coated Peppermint oil 187 mg)', image: '/images/Picture280.jpeg' },
      { name: 'IBgard Capsules (Sustained-release peppermint oil microspheres)', image: '/images/IBgard Capsules.jpeg' },
    ],
    benefits: [
      { icon: 'spa', title: 'Gold Standard for IBS', desc: 'Multiple meta-analyses confirm peppermint oil capsules significantly reduce IBS pain, stool frequency, and urgency: endorsed by EMA as validated phytotherapy.' },
      { icon: 'air', title: 'Natural GI Smooth Muscle Relaxant', desc: 'Menthol\'s L-type Ca²⁺ channel blockade resolves painful intestinal spasms and hypermotility without habit formation.' },
      { icon: 'thermostat', title: 'Visceral Analgesia via TRPM8', desc: 'TRPM8 cold receptor activation in GI afferent nerves induces cooling analgesia, desensitizing hyperalgesic visceral walls and reducing chronic gut pain.' },
      { icon: 'bubble_chart', title: 'Rapid Gas Relief', desc: 'Carminative action mitigates flatulence, painful bloating, and epigastric tension by relaxing the LES and facilitating gas expulsion.' },
    ],
    botanicalFacts: {
      origin: 'A sterile hybrid (Mentha aquatica × Mentha spicata) propagated entirely by vegetative cuttings. Commercial cultivation centered in the USA, India, and Europe.',
      parts: 'Leaf (Folium Menthae Piperitae) and volatile essential oil (Aetheroleum Menthae Piperitae) distilled from leaves and flowering tops.',
      history: 'Cultivated medicinally since at least the 18th century. EMA, WHO, and ESCOP monographs confirm its role in IBS, GI spasms, and functional dyspepsia.',
    },
    preparation: [
      { method: 'Enteric-Coated Capsule', desc: 'Pharmaceutical-grade capsule standardized to peppermint oil content. Delivers menthol to the small intestine and colon while bypassing the stomach.', bestFor: 'IBS; GI spasms; functional diarrhea' },
      { method: 'Aqueous Infusion (Tea)', desc: 'Steep 1.5–3 g dried leaves in 150 mL boiling water in a COVERED vessel for 5–10 minutes. Covering is essential to preserve volatile menthol.', bestFor: 'Mild GI discomfort, nausea, flatulence, bloating' },
    ],
    symptoms: ['Diarrhea', 'IBS symptoms', 'Abdominal cramps', 'Flatulence', 'Nausea', 'Bloating'],
    relatedPlants: ['chamomile', 'fennel'],
    references: [
      { text: 'National Center for Complementary and Integrative Health — Peppermint Oil.', url: 'https://www.nccih.nih.gov/health/peppermint-oil' },
      { text: 'MedlinePlus — Peppermint.', url: 'https://medlineplus.gov/druginfo/natural/705.html' },
      { text: 'Mount Sinai — Peppermint.', url: 'https://www.mountsinai.org/health-library/herb/peppermint' },
      { text: 'European Medicines Agency (EMA). (2020). European Union herbal monograph on Mentha x piperita L., folium. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). (2002). WHO Monographs on Selected Medicinal Plants (Vol. 2): Folium Menthae Piperitae. Geneva.' },
      { text: 'Grigoleit, H. G., & Grigoleit, P. (2005). Peppermint oil in irritable bowel syndrome. Phytomedicine, 12(8), 601–606.' },
      { text: 'Khanna, R., et al. (2014). Peppermint oil for the treatment of irritable bowel syndrome: a systematic review. Journal of Clinical Gastroenterology, 48(6), 505–512.' },
      { text: 'Egyptian Drug Authority — Peppermint monograph.', url: 'https://share.google/TShXvkd9DL6CFAZ5T' },
      { text: 'PubMed Central — Peppermint biological activity review.', url: 'https://share.google/hD2KOnWY8C07TwKo6' },
    ],
  },

  'chamomile-diarrhea': {
    id: 'chamomile-diarrhea',
    name: 'Chamomile',
    nameAr: 'البابونج',
    latinName: 'Matricaria chamomilla L.',
    commonNames: ['Chamomile', 'German Chamomile', 'Matricaria flower'],
    category: 'digestive',
    subcategory: 'diarrhea-support',
    tags: ['Antispasmodic', 'Anti-inflammatory', 'Carminative', 'Anxiolytic', 'GI Soother'],
    image: '/images/Picture284.jpeg',
    shortDescription: 'A gentle multi-action botanical for GI inflammatory and spastic disorders; chamazulene and apigenin synergistically inhibit COX/5-LOX pathways and act on GABA-A receptors, producing antispasmodic, anti-inflammatory, and mild sedative effects.',
    description: 'German chamomile (Matricaria chamomilla) contains chamazulene and α-bisabolol (volatile oil) alongside apigenin-7-glucoside (hydrophilic flavonoid) and herniarin/umbelliferone (coumarins). Chamazulene and bisabolol are potent COX/5-LOX inhibitors reducing pro-inflammatory prostaglandins and leukotrienes. Apigenin binds GABA-A benzodiazepine receptors, delivering mild sedation and reducing psychosomatic GI distress. Synergistic calcium channel blockade and phosphodiesterase inhibition resolve smooth muscle hyperreactivity. EMA herbal monograph established for mild GI spasms, gastritis, and IBS.',
    history: 'One of the oldest-known herbal medicines, used by ancient Egyptians, Greeks, and Romans. EMA, WHO, and ESCOP monographs confirm its clinical use in GI spasms, gastritis, and psychosomatic digestive disorders.',
    isDemo: false,
    activeConstituents: [
      { name: 'Chamazulene', percentage: 'Formed from matricin during distillation', effect: 'COX and 5-LOX inhibitor; powerful anti-inflammatory; characteristic deep blue color of distilled chamomile oil' },
      { name: 'α-Bisabolol & Bisabolol Oxides', percentage: '', effect: 'Antispasmodic, anti-inflammatory, and antimicrobial; promotes mucosal healing and ulceration recovery' },
      { name: 'Apigenin-7-glucoside (Flavone)', percentage: 'Predominant hydrophilic flavonoid', effect: 'Competitive GABA-A benzodiazepine receptor ligand; mild sedation and anxiolytic; spasmolytic via Ca²⁺ channel blockade and PDE inhibition' },
      { name: 'Coumarins (Umbelliferone, Herniarin)', percentage: '', effect: 'Secondary smooth muscle relaxation; monitor in patients on anticoagulants' },
    ],
    moa: [
      { title: 'COX/5-LOX Inhibition (Anti-inflammatory)', detail: 'Chamazulene and α-bisabolol directly inhibit cyclooxygenase (COX) and 5-lipoxygenase (5-LOX) pathways, significantly reducing synthesis of pro-inflammatory prostaglandins and leukotrienes, mitigating intestinal mucosal irritation and edema.' },
      { title: 'Antispasmodic via Ca²⁺ & PDE Inhibition', detail: 'Apigenin and bisabolol synergistically block voltage-dependent calcium channels and inhibit intracellular cyclic nucleotide phosphodiesterases, effectively resolving smooth muscle hyperreactivity, abdominal cramping, and bloating.' },
      { title: 'GABA-A Receptor Agonism (Sedative/Anxiolytic)', detail: 'Apigenin acts as a competitive ligand for central GABA-A benzodiazepine receptors, inducing mild sedation and reducing psychosomatic GI distress in stress-induced bowel disorders.' },
      { title: 'Mucosal Soothing & Antimicrobial', detail: 'Bacteriostatic action against common GI pathogens; local demulcent effect over gastric and intestinal mucosa, accelerating healing of ulcerations.' },
    ],
    uses: [
      'Symptomatic relief of mild diarrhea, gastritis, dyspepsia, flatulence, and bloating',
      'Management of GI smooth muscle spasms and painful abdominal cramps',
      'Supportive treatment of psychosomatic GI distress, mild insomnia, and anxiety',
    ],
    howToUse: [
      { method: 'Chamomile Tea (Aqueous Infusion)', instruction: 'Steep 2–3 g of dried flower heads in 150–250 mL boiling water in a covered vessel for 5–10 minutes (covering prevents loss of volatile oils, particularly chamazulene). Take 3–4 times daily between meals.' },
      { method: 'Standardized Capsules / Extracts', instruction: '200–500 mg taken 2–3 times per day, standardized to apigenin or volatile oil content.' },
      { method: 'Fluid Extract (1:1 in 45% ethanol)', instruction: '1–4 mL diluted in warm water, 3 times daily.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Generally safe and highly tolerated at therapeutic guidelines.' },
      { group: 'Infants (<6 months)', notes: 'Must be under strict medical supervision only.' },
      { group: 'Children', notes: 'Very mild, well-diluted aqueous infusions safe for infantile colic and mild GI discomfort: under medical supervision.' },
      { group: 'Pregnant & Breastfeeding Women', notes: 'Standard culinary tea doses generally safe. High therapeutic doses or concentrated extracts AVOIDED due to theoretical uterine stimulation risks.' },
      { group: 'Geriatrics', notes: 'Safe at standard doses with close monitoring in multi-morbidity patients.' },
    ],
    dosage: {
      standard: 'Tea: 2–3 g dried flowers steeped 5–10 min (covered) in 150–250 mL water, 3–4× daily between meals. Capsules: 200–500 mg standardized, 2–3× daily.',
      forms: [
        { form: 'Chamomile Tea', dose: '2–3 g dried flowers steeped 5–10 min (covered) in 150–250 mL water. 3–4× daily between meals.' },
        { form: 'Standardized Capsules', dose: '200–500 mg 2–3× daily, standardized to apigenin content.' },
        { form: 'Fluid Extract', dose: '1–4 mL in 45% ethanol, 3× daily, diluted in warm water.' },
      ],
    },
    overdose: {
      symptoms: [
        'Severe nausea, vomiting, dizziness from concentrated extracts',
        'Excessive drowsiness and generalized neuromuscular relaxation from GABAergic potentiation',
      ],
      management: [
        'Discontinue immediately. Maintain adequate hydration.',
        'Symptomatic and supportive treatment if severe symptoms persist.',
      ],
    },
    sideEffects: [
      'Rare allergic reactions in Asteraceae-sensitive individuals (cross-reactivity with ragweed, daisies, chrysanthemums, marigolds)',
      'Mild drowsiness at high doses from GABAergic effect',
    ],
    contraindications: [
      'Known hypersensitivity to Matricaria chamomilla or any Asteraceae/Compositae plant (ragweed, marigolds, chrysanthemums, daisies): anaphylaxis risk',
      'Severe atopic asthma: avoid inhalation or high-dose consumption without medical clearance',
    ],
    drugInteractions: [
      'Anticoagulants (Warfarin, Aspirin, Clopidogrel): coumarin content + antiplatelet activity may potentiate bleeding risk. Monitor PT/INR.',
      'CNS depressants (Benzodiazepines, Alcohol, Opioids): additive sedation from apigenin\'s GABAergic binding.',
      'CYP3A4 substrates: in vitro CYP3A4 inhibition: caution with narrow therapeutic index drugs.',
    ],
    storage: {
      forms: [
        { form: 'Dried Flower Heads / Standardized Formulations', storage: 'Tightly sealed, airtight, light-resistant containers below 25°C. Prevent moisture absorption, volatile oil volatilization, and photodegradation of chamazulene.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Chamomile tea alone can cure severe, infectious bacterial or amoebic diarrhea instantly.', fact: 'Chamomile does not eradicate highly virulent GI pathogens in vivo nor does it replace the critical need for Oral Rehydration Salts (ORS) or antibiotic therapy; rather, it acts as an exceptional, evidence-based supportive phytotherapy that significantly reduces painful spasms, decreases mucosal inflammation, and improves patient comfort.' },
    ],
    marketedProducts: [
      { name: 'Sekem Chamomile Tea ', image: '/images/Chamomile10.jpeg' },
      { name: 'Kamillosan Liquid (Chamomile extract for GI and topical use)', image: '/images/Chamomile11.jpeg' },
    ],
    benefits: [
      { icon: 'spa', title: 'Gentle GI Anti-inflammatory', desc: 'Chamazulene and bisabolol inhibit both COX and 5-LOX pathways, reducing mucosal inflammation in gastritis, IBS, and mild diarrhea: without the GI side effects of NSAIDs.' },
      { icon: 'self_improvement', title: 'GABA-A Anxiolytic for Gut-Brain Axis', desc: 'Apigenin\'s GABA-A receptor binding calms psychosomatic GI distress and anxiety, addressing the gut-brain connection in stress-induced bowel disorders.' },
      { icon: 'healing', title: 'Mucosal Healing & Demulcent', desc: 'α-Bisabolol soothes and accelerates healing of gastric and intestinal ulcerations, protecting the mucosal lining during acute GI inflammation.' },
      { icon: 'local_florist', title: 'Infantile Colic Relief', desc: 'Mild chamomile infusions have clinical evidence for safely reducing infantile colic symptoms through GI smooth muscle relaxation.' },
    ],
    botanicalFacts: {
      origin: 'Native to Europe and temperate Asia. Widely naturalized across North America. Major commercial cultivation in Germany, Hungary, Egypt, and Argentina.',
      parts: 'Dried flower heads (anthodium/flos): the blue chamazulene is only released during steam distillation (formed from matricin): not present in this form in the whole plant.',
      history: 'Used by ancient Egyptians (dedicated to Ra), Greeks, and Romans for digestive ailments. One of the most widely consumed herbal teas globally. EMA, WHO, and ESCOP have published clinical monographs.',
    },
    preparation: [
      { method: 'Aqueous Infusion (Tea)', desc: 'Steep 2–3 g dried flower heads in 150–250 mL boiling water in a COVERED vessel for 5–10 minutes. Covering is critical to prevent loss of volatile chamazulene.', bestFor: 'Mild diarrhea, GI spasms, gastritis, flatulence, infantile colic, mild insomnia' },
      { method: 'Standardized Capsule Extract', desc: 'Pharmaceutical-grade capsules standardized to apigenin content for consistent therapeutic outcomes.', bestFor: 'IBS, anxiety-associated GI distress, precise dosing' },
    ],
    symptoms: ['Diarrhea', 'IBS symptoms', 'Abdominal cramps', 'Flatulence', 'Bloating', 'Gastritis', 'Mild insomnia'],
    relatedPlants: ['peppermint', 'fennel'],
    references: [
      { text: 'National Center for Complementary and Integrative Health — Chamomile.', url: 'https://www.nccih.nih.gov/health/chamomile' },
      { text: 'Mount Sinai — Chamomile.', url: 'https://www.mountsinai.org/health-library/herb/chamomile' },
      { text: 'PubMed — Chamomile pharmacological studies.', url: 'https://pubmed.ncbi.nlm.nih.gov/16635985/' },
      { text: 'European Medicines Agency (EMA). (2015). European Union herbal monograph on Matricaria recutita L., flos. Committee on Herbal Medicinal Products (HMPC).', url: 'https://www.ema.europa.eu/en/medicines/herbal/matricaria-flower' },
      { text: 'World Health Organization (WHO). (1999). WHO Monographs on Selected Medicinal Plants (Vol. 1): Flos Chamomillae. Geneva.' },
      { text: 'Srivastava, J. K., et al. (2010). Chamomile: A herbal medicine of the past with bright future. Molecular Medicine Reports, 3(6), 895–901.' },
      { text: 'Amsterdam, J. D., et al. (2009). A randomized, double-blind, placebo-controlled trial of oral Matricaria recutita extract for generalized anxiety disorder. Journal of Clinical Psychopharmacology, 29(4), 378–382.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  'ginger-diarrhea': {
    id: 'ginger-diarrhea',
    name: 'Ginger',
    nameAr: 'الزنجبيل',
    latinName: 'Zingiber officinale Roscoe',
    commonNames: ['Ginger', 'African Ginger', 'Cochin Ginger'],
    category: 'digestive',
    subcategory: 'diarrhea-support',
    tags: ['Anti-diarrheal', 'Antispasmodic', 'Anti-inflammatory', 'Antimicrobial', 'Carminative'],
    image: '/images/Picture29.jpg',
    images: ['/images/Picture29.jpg'],
    isDemo: false,
    shortDescription: 'A potent multi-mechanism anti-diarrheal botanical; gingerols and shogaols act as muscarinic antagonists and calcium channel blockers to reduce intestinal hypermotility, while blocking enterotoxin binding and exhibiting direct antimicrobial activity against major GI pathogens.',
    description: 'German ginger (Zingiber officinale) contains non-volatile pungent phenylalkylketones (gingerols and shogaols) and volatile essential oils (1–3% β-zingiberene, β-sesquiphellandrene, ar-curcumene, α-farnesene). 6-gingerol is the primary active principle in fresh rhizome; 6-shogaol predominates in dried ginger (formed via thermal dehydration of gingerols). Shogaols exhibit higher stability and more potent anti-inflammatory and antispasmodic profiles. Gingerols and shogaols act as muscarinic receptor antagonists and voltage-dependent calcium channel blockers, inhibiting acetylcholine-induced intestinal hypermotility. Anti-secretory action blocks bacterial enterotoxin binding to intestinal cell receptors, preventing adenylate cyclase activation and massive fluid hypersecretion.',
    activeConstituents: [
      { name: '6-Gingerol', percentage: 'Primary active in fresh rhizome', effect: 'Being the most abundant and biologically active. It possesses potent anti-inflammatory, prokinetic, and anti-emetic properties.' },
      { name: '6-Shogaol', percentage: 'Predominant in dry ginger', effect: 'Predominant compound in dry ginger, exhibiting higher chemical stability and a more potent anti-inflammatory and antispasmodic profile than gingerols.' },
      { name: 'Zingerone & Paradols', percentage: '', effect: 'Secondary degradation products formed during long-term storage and cooking, contributing to the antioxidant and mucosal protective profiles.' },
      { name: 'Volatile Essential Oils (1% to 3%)', percentage: '1%–3%', effect: 'Composed primarily of sesquiterpene hydrocarbons, chiefly β-zingiberene, β-sesquiphellandrene, ar-curcumene, and α-farnesene, which dictate the characteristic spicy aroma and contribute to local antimicrobial actions within the gut lumen.' },
    ],
    moa: [
      { title: 'Antispasmodic & Myorelaxant Effect', detail: 'Gingerols and shogaols exert a direct relaxant effect on intestinal smooth muscles. They act as muscarinic receptor antagonists and voltage-dependent calcium channel blockers, effectively inhibiting acetylcholine-induced intestinal hypermotility, thereby reducing abdominal cramps and slowing down diarrheal transit.' },
      { title: 'Anti-secretory & Anti-diarrheal Action', detail: 'Specifically blocks the binding of bacterial enterotoxins (such as E. coli heat-labile enterotoxin) to intestinal cell receptors. This inhibits the abnormal activation of adenylate cyclase, preventing the massive hypersecretion of water and electrolytes into the gut lumen.' },
      { title: 'Anti-inflammatory Effect', detail: 'Dual inhibition of the arachidonic acid cascade by suppressing both cyclooxygenase (COX) and 5-lipoxygenase (5-LOX) pathways, as well as inhibiting pro-inflammatory cytokines (TNF-α, IL-1β). This significantly mitigates diarrheal-induced intestinal mucosal inflammation.' },
      { title: 'Antimicrobial & Anti-motility Action', detail: 'Exhibits documented bacteriostatic and bactericidal activity against prominent diarrhea-causing pathogens including Escherichia coli, Salmonella typhi, and Vibrio cholerae.' },
      { title: 'Serotonergic (5-HT3) Antagonism', detail: 'Modulates serotonin receptors both peripherally in the gut and centrally in the chemoreceptor trigger zone (CTZ), controlling concomitant nausea and vomiting often associated with infectious gastroenteritis.' },
    ],
    uses: [
      'Symptomatic Relief of Mild Non-Specific Diarrhea: Reduces stool frequency and fluid loss in acute, uncomplicated digestive upsets.',
      'Supportive Management of Traveler\'s Diarrhea: Acts as an adjunct phytotherapy to alleviate enterotoxigenic bacterial complications.',
      'Alleviation of Associated Gastrointestinal Distress: Alleviates painful abdominal cramps, flatulence, bloating, indigestion, and concomitant nausea/vomiting.',
    ],
    howToUse: [
      { method: 'Fresh Ginger Infusion (Tea)', instruction: 'Infuse 1–2 g of freshly sliced or grated rhizome in 200 mL of boiling water in a covered vessel for 10–15 minutes (to trap volatile oils). Drink warm 2–3 times daily. Max: 4 g fresh ginger per day.' },
      { method: 'Standardized Oral Capsules / Tablets', instruction: '250 mg to 1000 mg daily, administered in divided doses. Formulations should ideally be standardized to total gingerol and shogaol content to ensure uniform therapeutic outcomes.' },
      { method: 'Fluid Extract', instruction: 'Follow precise manufacturer guidelines, ensuring appropriate dilution to avoid direct gastric mucosal irritation.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Generally recognized as safe (GRAS) within established therapeutic daily limits.' },
      { group: 'Geriatrics', notes: 'Safe, but requires close monitoring for pre-existing chronic conditions and potential polypharmacy drug interactions.' },
      { group: 'Pediatrics', notes: 'Use with extreme caution. Avoid in infants and children under 2 years of age. For older children, use very small weight-adjusted amounts under medical supervision.' },
      { group: 'Pregnancy & Lactation', notes: 'Generally considered safe for short-term use at low doses (up to 1000 mg/day dried extract) for nausea, but high therapeutic doses for diarrhea management should be avoided during pregnancy without direct obstetric clearance due to theoretical risks of uterine contraction modulation.' },
    ],
    dosage: {
      standard: 'Tea: 1–2 g fresh rhizome in 200 mL water, 2–3× daily (max 4 g/day). Capsules: 250–1000 mg/day in divided doses, standardized to gingerol/shogaol content.',
      forms: [
        { form: 'Fresh Ginger Tea', dose: '1–2 g freshly sliced rhizome, steeped covered 10–15 min in 200 mL water, 2–3× daily.' },
        { form: 'Standardized Capsules', dose: '250–1000 mg daily in divided doses, standardized to gingerol and shogaol content.' },
        { form: 'Fluid Extract', dose: 'Follow precise manufacturer guidelines, ensuring appropriate dilution to avoid direct gastric mucosal irritation.' },
      ],
    },
    overdose: {
      intro: 'Acute Oral Overdose: Rarely occurs from dietary intake, but highly possible with excessive consumption of concentrated extracts/supplements.',
      symptoms: [
        'Severe gastric reflux and debilitating heartburn',
        'Paradoxical severe diarrhea due to mucosal irritation at massive doses',
        'Stomach pain, mild CNS depression, hypotension',
        'Increased systemic bleeding tendency',
      ],
      management: [
        'Discontinue ginger intake immediately.',
        'Initiate supportive and symptomatic protocols.',
        'Maintain aggressive oral or intravenous rehydration to manage electrolyte balances.',
      ],
    },
    sideEffects: [
      'Gastric reflux and heartburn at high doses',
      'Rare allergic reactions in Zingiberaceae-sensitive individuals',
      'Mild antiplatelet effect: monitor in patients on anticoagulants',
    ],
    contraindications: [
      'Known hypersensitivity to Zingiber officinale or other Zingiberaceae family members',
      'Active coagulation and bleeding disorders (e.g., Hemophilia) due to antiplatelet activity',
      'Symptomatic gallstones (Cholelithiasis): strong choleretic effect can trigger biliary colic or obstruction',
      'Pre-operative states: discontinue at least 7–14 days prior to elective major surgeries to mitigate intraoperative hemorrhage risks',
    ],
    drugInteractions: [
      'Anticoagulants / Antiplatelets (e.g., Warfarin, Aspirin, Clopidogrel): Ginger components (6-shogaol and 6-gingerol) inhibit thromboxane synthase and decrease platelet aggregation. Co-administration significantly potentiates bleeding risks and alters PT/INR values.',
      'Antidiabetic Medications (e.g., Metformin, Insulin, Sulfonylureas): Ginger may enhance insulin sensitivity and increase peripheral glucose uptake, potentially compounding the risk of unexpected hypoglycemia. Dose adjustments of oral hypoglycemics may be necessary.',
      'Antihypertensive Medications (e.g., Calcium Channel Blockers like Nifedipine): Ginger may exert additive calcium-channel-blocking cardiovascular effects, leading to a synergistic drop in blood pressure and increased risk of hypotension.',
    ],
    storage: {
      forms: [
        { form: 'Fresh Rhizomes', instructions: 'Wrap unpeeled and store in the refrigerator at 4°C to maintain cellular moisture and prevent microbial/fungal spoilage.' },
        { form: 'Standardized Dry Formulations', instructions: 'Store in tightly closed, airtight containers protected from direct sunlight, high heat, and humidity to avoid degradation of gingerols into shogaols and evaporation of essential oils.' },
      ],
    },
    factsAndMyths: [
      { myth: '"Ginger acts as an instant, complete biological cure for all forms of severe infectious diarrhea, replacing all conventional drugs."', fact: 'Ginger does not instantly eradicate highly virulent invasive pathogens (like Shigella or Amoeba), nor can it replace essential rehydration protocols. It serves as an exceptional, evidence-based supportive phytotherapy that significantly mitigates symptom severity, calms intestinal hypermotility, reduces cramping, and improves patient comfort.' },
    ],
    marketedProducts: [
      { name: 'Ginger Capsules 400mg (Mepaco Pharaonia)', image: '/images/Ginger-400mg-Mepaco.jpg' },
      { name: 'NOW Foods Ginger Extract ', image: '/images/Ginger 22.jpeg' },
      { name: 'Nature\'s Way Ginger Root', image: '/images/ginger 23.jpeg' },
    ],
    benefits: [
      { icon: 'block', title: 'Enterotoxin Blocker', desc: 'Specifically blocks bacterial enterotoxin binding to intestinal cell receptors, preventing the massive fluid hypersecretion responsible for infectious diarrhea.' },
      { icon: 'spa', title: 'Intestinal Antispasmodic', desc: 'Muscarinic receptor antagonism and calcium channel blockade reduce bowel hypermotility, alleviating cramps and urgency.' },
      { icon: 'shield', title: 'Broad Antimicrobial Activity', desc: 'Documented bactericidal action against E. coli, Salmonella typhi, and Vibrio cholerae — key pathogens in acute gastroenteritis.' },
    ],
    botanicalFacts: {
      origin: 'Believed to originate in Southeast Asia (likely India or China). Now cultivated commercially in Jamaica, India, China, Nigeria, and across the Arab world.',
      parts: 'Rhizome (underground stem): used fresh, dried, powdered, or extracted. Rich in both volatile oils and non-volatile pungent phenylalkylketones.',
      history: 'Among the oldest and most extensively traded medicinal spices in the world. Referenced in ancient Chinese, Ayurvedic, Unani, and Greco-Roman pharmacopeias for digestive, anti-emetic, and analgesic applications for over 2,000 years.',
    },
    preparation: [
      { method: 'Fresh Infusion (Tea)', desc: 'Steep 1–2 g freshly sliced rhizome in 200 mL boiling water in a COVERED vessel for 10–15 minutes. Covering is critical to retain volatile oils.', bestFor: 'Acute diarrhea, nausea, abdominal cramps, traveler\'s diarrhea' },
      { method: 'Standardized Capsules', desc: 'Capsules standardized to total gingerol and shogaol content ensure consistent therapeutic outcomes.', bestFor: 'Precise dosing, chronic digestive management' },
    ],
    clinicalNotes: [
      { title: 'Adjunct Status', detail: 'Always counsel patients that ginger is a supportive therapy and never a substitute for Oral Rehydration Salts (ORS) or primary fluid replacement protocols.' },
      { title: 'Red Flags for Referral', detail: 'Pharmacists must immediately refer patients presenting with bloody diarrhea (dysentery), high grade fever, severe abdominal rigidity, or signs of advanced dehydration directly to clinical emergency facilities.' },
      { title: 'Monitoring', detail: 'Actively screen patient profiles for bleeding risks, scheduled surgeries, and concurrent use of narrow-therapeutic-index drugs (like Warfarin).' },
    ],
    symptoms: ['Diarrhea', 'Abdominal cramps', 'Nausea', 'Flatulence', 'Bloating', 'Digestive discomfort'],
    relatedPlants: ['chamomile-diarrhea', 'peppermint-diarrhea'],
    references: [
      { text: 'European Medicines Agency (EMA): European Union herbal monograph on Zingiber officinale Roscoe, rhizoma. (2014). Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO): WHO Monographs on Selected Medicinal Plants, Volume 1: Rhizoma Zingiberis. Geneva.' },
      { text: 'Chen, J. C., Huang, L. J., & Chen, W. C. (2007). Ginger and its bioactive component, zingerone, inhibit enterotoxigenic Escherichia coli heat-labile enterotoxin-induced diarrhea in mice. Journal of Agricultural and Food Chemistry, 55(21), 8390-8397.' },
      { text: 'Anh, N. H., Kim, S. J., Long, N. P., & Kwon, S. W. (2020). Ginger on Human Health: A Comprehensive Systematic Review of Randomized Clinical Trials. Nutrients, 12(1), 157.' },
      { text: 'Barnes, J., Anderson, L. A., & Phillipson, J. D. (2007). Herbal Medicines (3rd ed.). Pharmaceutical Press.' },
    ],
  },

  'turmeric': {
    id: 'turmeric',
    name: 'Turmeric',
    latinName: 'Curcuma longa L.',
    category: 'immunity',
    subcategory: 'anti-inflammatory',
    tags: ['Anti-inflammatory', 'Antioxidant', 'Joint Health', 'Curcumin', 'Hepatoprotective'],
    image: '/images/Picture285.jpeg',
    images: ['/images/Picture285.jpeg'],
    shortDescription: 'Golden rhizome with multi-pathway anti-inflammatory action via NF-κB, COX-2, and 5-LOX inhibition.',
    description: 'Turmeric (Curcuma longa) belongs to the Zingiberaceae family. Its dried rhizome contains curcuminoids (3–5%), principally curcumin, which drives potent anti-inflammatory, antioxidant, and hepatoprotective effects. Bioavailability requires co-administration with piperine (black pepper) for a 2000% increase in absorption.',
    symptoms: ['Joint pain', 'Chronic inflammation', 'Arthritis', 'Digestive discomfort', 'Liver support'],
    activeConstituents: [
      { name: 'Curcuminoids (3–5%)', detail: 'Curcumin (77%), demethoxycurcumin (17%), bisdemethoxycurcumin (3%): lipophilic polyphenolic pigments responsible for anti-inflammatory and antioxidant activity.' },
      { name: 'Volatile Essential Oils (3–7%)', detail: 'ar-Turmerone, alpha-turmerone, beta-turmerone, curlone, zingiberene: contribute anti-inflammatory and antimicrobial actions.' },
    ],
    moa: [
      { title: 'NF-κB Inhibition', detail: 'Curcumin downregulates Nuclear Factor-kappa B (NF-κB), blocking pro-inflammatory cytokines TNF-α, IL-1, and IL-6.' },
      { title: 'COX-2 & 5-LOX Dual Inhibition', detail: 'Suppresses both cyclooxygenase-2 and 5-lipoxygenase, reducing prostaglandin and leukotriene synthesis without gastric toxicity.' },
      { title: 'Antioxidant: Direct Scavenging & Enzyme Upregulation', detail: 'Directly neutralizes ROS/RNS via phenolic groups; also upregulates endogenous SOD, CAT, and GPx antioxidant enzymes.' },
      { title: 'Hepatoprotective & Choleretic', detail: 'Enhances hepatic bile synthesis via cholecystokinin-mediated pathways, accelerating lipid clearance and detoxification.' },
    ],
    uses: [
      'Osteoarthritis and rheumatoid arthritis: relieves joint pain and swelling',
      'Digestive support: dyspepsia, functional bloating, NAFLD/MASLD',
      'Immunomodulation and cardiovascular protection via inflammatory marker reduction',
      'Topical adjunct for inflammatory skin conditions (acne, psoriasis)',
    ],
    howToUse: [
      { method: 'Powdered Rhizome (with Piperine)', instruction: '1–3 g daily with food. Pair with black pepper (piperine) to increase bioavailability by up to 2000%; co-ingestion with dietary fats also improves absorption.' },
      { method: 'Standardized Extract Capsules', instruction: '500–1500 mg daily of extract standardized to 95% curcuminoids, taken with food and piperine for maximum absorption.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Highly recommended, especially for chronic joint conditions and metabolic syndrome.' },
      { group: 'Elderly', notes: 'Beneficial for geriatric arthritis; reduces reliance on NSAIDs. Monitor renal function.' },
      { group: 'Pregnant Women', notes: 'Culinary amounts safe. Concentrated therapeutic extracts STRICTLY CONTRAINDICATED.' },
      { group: 'Children', notes: 'Safe in dietary quantities; medicinal supplementation not recommended without supervision.' },
    ],
    dosage: {
      standard: 'Powdered rhizome: 1–3 g/day with food and piperine. Standardized extract (95% curcuminoids): 500–1500 mg/day.',
      forms: [
        { form: 'Powdered Rhizome', dose: '1–3 g daily with food and black pepper.' },
        { form: 'Standardized Extract Capsules (95% curcuminoids)', dose: '500–1500 mg daily, with piperine and food.' },
      ],
    },
    overdose: {
      symptoms: [
        'Chronic >8–12 g curcumin/day: severe GI irritation, diarrhea, nausea, epigastric distress',
        'Elevated risk of nephrolithiasis (calcium oxalate kidney stones) due to high oxalate content',
      ],
      management: [
        'Cease supplements immediately. Vigorous hydration to prevent oxalate crystallization.',
        'Anti-emetics or PPIs for gastric burning. Renal function monitoring if renal concerns exist.',
      ],
    },
    sideEffects: [
      'Epigastric discomfort, mild bloating, nausea, diarrhea at high doses',
      'Transient dizziness or mild headaches at high therapeutic ranges',
      'Allergic contact dermatitis or temporary yellow skin discoloration (topical use)',
    ],
    contraindications: [
      'Biliary obstruction or active cholelithiasis: potent cholagogue action can trigger severe gallbladder contractions',
      'Perioperative: discontinue ≥14 days before surgery (anti-platelet, mild fibrinolytic properties)',
      'Anticoagulants and antiplatelets: synergistic bleeding risk',
    ],
    drugInteractions: [
      'Anticoagulants / Antiplatelets (Warfarin, Heparin, Clopidogrel, Aspirin, DOACs): synergistic hemorrhage risk: INR monitoring mandatory.',
      'Chemotherapeutic agents: P-gp and CYP3A4 competition may alter narrow-TI drug concentrations.',
      'Antidiabetic agents: may enhance glucose-lowering effect: blood glucose monitoring recommended.',
    ],
    storage: {
      forms: [
        { form: 'Powder & Extract Capsules', storage: 'Airtight, light-resistant containers (amber glass/HDPE) in cool, dry environment (15–25°C). Curcumin is highly photosensitive: protect from direct UV light.' },
      ],
    },
    marketedProducts: [
      { name: 'Curcumin Capsules 500mg (Mepaco Pharaonia)', image: '/images/Picture286.jpg' },
      { name: 'Turmeric Extract Capsules (Imtenan Health Shop)', image: '/images/Picture287.png' },
    ],
    benefits: [
      { icon: 'healing', title: 'Multi-Pathway Anti-Inflammatory', desc: 'Curcumin simultaneously blocks NF-κB, COX-2, and 5-LOX: the three main inflammatory highways: reducing both prostaglandin and cytokine output without the GI side effects of NSAIDs.' },
      { icon: 'shield', title: 'Potent Dual Antioxidant', desc: 'Directly scavenges ROS/RNS while also upregulating the body\'s own antioxidant enzymes (SOD, CAT, GPx), providing amplified cellular protection.' },
      { icon: 'self_improvement', title: 'Joint Health & Arthritis Relief', desc: 'Evidence-based supportive phytotherapy for osteoarthritis and rheumatoid arthritis, reducing joint pain and swelling with a superior GI safety profile compared to NSAIDs.' },
      { icon: 'local_pharmacy', title: 'Hepatoprotective & Choleretic', desc: 'Enhances bile synthesis and gallbladder function via cholecystokinin pathways, supporting liver detoxification and fat metabolism.' },
    ],
    botanicalFacts: {
      origin: 'Native to South and Southeast Asia. India produces over 75% of global supply. Major cultivation in Tamil Nadu, Andhra Pradesh, and Orissa.',
      parts: 'Dried rhizome (Rhizoma Curcumae Longae): ground into bright orange-yellow powder. Fresh rhizomes also used in cooking.',
      history: 'Used for over 4,000 years in Ayurvedic and Chinese medicine. The bioavailability challenge was solved in 1998 with the discovery of piperine\'s 2000% enhancement. Featured in WHO and EMA monographs.',
    },
    preparation: [
      { method: 'Golden Milk (Turmeric Latte)', desc: 'Mix 1 tsp turmeric + pinch of black pepper + 250 mL warm milk + honey. Fat and piperine together optimize curcumin absorption.', bestFor: 'Daily anti-inflammatory support, joint health' },
      { method: 'Standardized Capsule Extract', desc: 'Pharmaceutical-grade capsules standardized to 95% curcuminoids, co-formulated with BioPerine (piperine) for maximum bioavailability.', bestFor: 'Osteoarthritis, rheumatoid arthritis, therapeutic dosing' },
    ],
    relatedPlants: ['black-seed', 'rosemary'],
    references: [
      { text: 'World Health Organization (WHO). WHO Monographs on Selected Medicinal Plants, Volume 2: Rhizoma Curcumae Longae.' },
      { text: 'Aggarwal, B. B., et al. (2009). Potential therapeutic effects of curcumin in patients with inflammatory bowel disease, hyperlipidemia, and osteoarthritis. Alternative Therapies in Health and Medicine, 15(5), 44–53.' },
      { text: 'Hewlings, S. J., & Kalman, D. S. (2017). Curcumin: A Review of Its Effects on Human Health. Foods, 6(10), 92.' },
      { text: 'Shoba, G., et al. (1998). Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers. Planta Medica, 64(4), 353–356.' },
    ],
  },

  'clove': {
    id: 'clove',
    name: 'Clove',
    latinName: 'Syzygium aromaticum (L.) Merr. & L.M.Perry',
    category: 'uti',
    subcategory: 'anti-septic',
    tags: ['Antiseptic', 'Antimicrobial', 'Eugenol', 'Dental Health', 'Antifungal'],
    image: '/images/Picture288.jpeg',
    images: ['/images/Picture288.jpeg'],
    shortDescription: 'Aromatic flower buds rich in eugenol (70–90%) with potent cell-membrane-disrupting antiseptic activity.',
    description: 'Clove (Syzygium aromaticum) belongs to the Myrtaceae family. Its dried flower buds contain eugenol as the dominant active compound (70–90% of essential oil), providing broad-spectrum antimicrobial, local anesthetic, and anti-inflammatory properties. Widely used in dentistry, oral antisepsis, and food preservation.',
    symptoms: ['Oral infections', 'Toothache', 'Gum inflammation', 'Minor wounds', 'Fungal infection'],
    activeConstituents: [
      { name: 'Eugenol (70–90% of essential oil)', detail: 'Primary phenolic compound responsible for antimicrobial, local anesthetic, anti-inflammatory, and mild analgesic effects.' },
      { name: 'Eugenol Acetate, β-Caryophyllene, α-Humulene', detail: 'Secondary sesquiterpenes contributing antimicrobial and anti-inflammatory activity.' },
    ],
    moa: [
      { title: 'Cell Membrane Disruption', detail: 'The hydroxyl group (-OH) of eugenol disrupts bacterial lipid bilayers, increasing membrane permeability and causing leakage of vital intracellular materials.' },
      { title: 'Protein & Enzyme Inhibition', detail: 'Eugenol penetrates microbial cells and inhibits protein and DNA synthesis, preventing multiplication.' },
      { title: 'Biofilm Prevention', detail: 'Blocks formation of bacterial biofilms, effective against dental plaque-forming pathogens.' },
    ],
    uses: [
      'Dental antiseptic and topical analgesic for toothaches and sore gums',
      'Oral antibacterial mouthwash to control cavity-causing bacteria and oral ulcers',
      'Topical antiseptic for minor skin wounds and scrapes (always diluted in carrier oil)',
      'Digestive aid: reduces bloating, indigestion, and nausea',
    ],
    howToUse: [
      { method: 'Antiseptic Mouthwash (Infusion)', instruction: 'Boil a cup of water, steep 5–6 whole cloves until cool, strain and use as antibacterial mouthwash. Do not swallow.' },
      { method: 'Topical Application', instruction: 'Mix 10–15 drops of clove essential oil per ounce of carrier oil (coconut or olive). Apply with cotton ball to affected area. Never apply undiluted.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Oral and topical use appropriate when properly diluted.' },
      { group: 'Children 2–12 years', notes: 'Topical only under adult supervision; dilute well in carrier oil. No internal use.' },
      { group: 'Children under 2 years', notes: 'Strictly contraindicated: seizures and hepatotoxicity risk.' },
    ],
    dosage: {
      standard: 'No standardized dose established. Used as topical/oral rinse only. Avoid internal medicinal dosing.',
      forms: [
        { form: 'Mouthwash (Infusion)', dose: '5–6 cloves steeped in 1 cup water. Use as rinse; do not swallow.' },
        { form: 'Topical Oil (Diluted)', dose: '10–15 drops essential oil per 30 mL carrier oil.' },
      ],
    },
    overdose: {
      symptoms: [
        'Difficulty breathing, dizziness, seizures, extreme agitation or loss of consciousness',
        'Severe abdominal pain, nausea, vomiting, diarrhea',
        'Jaundice or changes in urine output  signs of liver or kidney damage',
      ],
      management: [
        'Do NOT induce vomiting as oil may enter lungs causing further complications.',
        'Call emergency services immediately. Contact Poison Control.',
      ],
    },
    sideEffects: [
      'Undiluted topical oil: redness, burning, tissue damage (necrosis) on skin or gums',
      'Allergic contact dermatitis: rashes, swelling',
      'Concentrated ingestion: hepatotoxicity, liver damage, fluid imbalances',
      'Eugenol slows blood clotting : increased bleeding risk',
    ],
    contraindications: [
      'Children under 2 years: small amounts cause seizures and liver damage',
      'Bleeding disorders or anticoagulant therapy: eugenol inhibits clotting',
      'Two weeks before surgery: affects blood sugar and clotting',
      'Known hypersensitivity to eugenol or Balsam of Peru',
      'Open wounds or broken skin: undiluted oil causes severe burns',
    ],
    drugInteractions: [
      'Anticoagulants / Antiplatelets (Warfarin, Aspirin, Clopidogrel): additive anticoagulant effect: increased bleeding risk.',
      'Antidiabetic medications: may lower blood sugar: monitor blood glucose.',
      'CYP1A2, CYP2C9, CYP2D6, CYP3A4 substrates: clove may alter hepatic metabolism: altered drug levels possible.',
    ],
    storage: {
      forms: [
        { form: 'Whole Cloves / Essential Oil', storage: 'Cool, dark, dry environment (15–25°C) in airtight containers. Protect from heat and moisture to prevent essential oil degradation.' },
      ],
    },
    marketedProducts: [
      { name: 'Orovex Clove Mouthwash', image: '/images/Picture289.jpeg' },
      { name: 'Imtenan Aromatic Clove Oil', image: '/images/Picture290.jpeg' },
    ],
    benefits: [
      { icon: 'sanitizer', title: 'Broad-Spectrum Oral Antiseptic', desc: 'Eugenol disrupts bacterial membranes and blocks biofilm formation, making clove one of the most effective natural agents against dental caries-causing bacteria.' },
      { icon: 'healing', title: 'Natural Topical Analgesic', desc: 'Acts as a selective local anesthetic on dental and mucosal pain receptors, providing rapid temporary relief for toothaches and sore gums without systemic side effects.' },
      { icon: 'science', title: 'Anti-Biofilm & Antifungal', desc: 'Prevents Candida and bacterial biofilm formation on oral and skin surfaces, providing protective anti-infective action without promoting antibiotic resistance.' },
    ],
    botanicalFacts: {
      origin: 'Native to the Maluku Islands (Spice Islands) of Indonesia. Now cultivated in Zanzibar, Madagascar, Sri Lanka, and Brazil.',
      parts: 'Dried unopened flower buds (Flos Caryophylli). The essential oil is steam-distilled from buds, leaves, and stems; bud oil has the highest eugenol quality.',
      history: 'Used in Chinese medicine for over 2,000 years. Introduced to Europe via Arab traders. A cornerstone of traditional dental antisepsis and a key ingredient in ZOE (Zinc Oxide Eugenol) dental cement.',
    },
    preparation: [
      { method: 'Clove Oil Dental Application', desc: 'Dilute 2 drops clove essential oil in 1 tsp olive oil. Apply with cotton ball directly to painful tooth or gum area for temporary relief.', bestFor: 'Toothache, sore gums, oral ulcers' },
      { method: 'Clove Mouthwash Infusion', desc: 'Steep 5–6 cloves in boiling water until cool, strain and rinse mouth for 30 seconds. Do not swallow.', bestFor: 'Oral hygiene, gum inflammation, bad breath' },
    ],
    relatedPlants: ['garlic', 'tea-tree', 'eucalyptus'],
    references: [
      { text: 'PubChem — Clove taxonomy.', url: 'https://pubchem.ncbi.nlm.nih.gov/taxonomy/219868' },
      { text: 'Drugs.com — Clove.', url: 'https://www.drugs.com/mtm/clove.html' },
      { text: 'Darwin Nutrition — Clove active constituents.', url: 'https://www.darwin-nutrition.fr/en/active/clove' },
    ],
  },

  'dandelion': {
    id: 'dandelion',
    name: 'Dandelion',
    latinName: 'Taraxacum officinale F.H. Wigg.',
    category: 'uti',
    subcategory: 'diuretics',
    tags: ['Diuretic', 'Aquaretic', 'Potassium-Sparing', 'Choleretic', 'Liver Support'],
    image: '/images/Picture294.jpeg',
    images: ['/images/Picture294.jpeg'],
    shortDescription: 'Potassium-rich aquaretic that enhances renal water excretion without electrolyte depletion, unlike conventional diuretics.',
    description: 'Dandelion (Taraxacum officinale) belongs to the Asteraceae family. Its leaves contain high concentrations of potassium salts (3–5%), flavonoids (luteolin), and coumarins that provide diuretic action without the hypokalemia risk of synthetic diuretics. The root provides choleretic (bile-stimulating) effects via sesquiterpene lactones.',
    symptoms: ['Fluid retention', 'Minor edema', 'Urinary tract flushing', 'Liver support', 'Mild hypertension'],
    activeConstituents: [
      { name: 'Potassium Salts (Leaves, 3–5%)', detail: 'Exceptionally high endogenous potassium content continuously compensates for potassium excreted during diuresis: maintaining electrolyte balance unlike synthetic diuretics.' },
      { name: 'Flavonoids (Luteolin) & Coumarins', detail: 'Act on renal tubules to stimulate water excretion and provide anti-inflammatory support.' },
      { name: 'Sesquiterpene Lactones (Roots)', detail: 'Bitter principles stimulate bile secretion (choleretic effect) improving upper GI digestion and lipolysis.' },
    ],
    moa: [
      { title: 'Aquaretic Effect (Potassium-Sparing)', detail: 'High potassium + flavonoids act on renal tubules to stimulate water excretion without accelerating electrolyte depletion, unlike loop or thiazide diuretics.' },
      { title: 'Potassium Self-Replacement', detail: 'Unlike conventional diuretics that cause hypokalemia, dandelion\'s endogenous potassium compensates for renal potassium loss during diuresis.' },
      { title: 'Choleretic Effect (Root)', detail: 'Sesquiterpene lactone bitter compounds stimulate gustatory receptors, inducing increased bile secretion and improving hepatic and GI digestion.' },
    ],
    uses: [
      'Relief of mild fluid retention and pre-menstrual edema',
      'Supportive diuresis for mild hypertension management',
      'Urinary tract flushing and detoxification',
      'Liver cleansing and bile flow support',
    ],
    howToUse: [
      { method: 'Dandelion Leaf Tea', instruction: 'Steep 4–10 g dried leaves in 150–200 mL boiling water (covered) for 10 minutes. Consume up to 3 times daily. Maintain high fluid intake throughout the day.' },
      { method: 'Fluid Extract (1:1)', instruction: '4–10 mL daily in divided doses, diluted in water.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Safe at therapeutic doses with adequate hydration. Monitor BP if taking antihypertensives.' },
      { group: 'Elderly', notes: 'Use with caution in cardiovascular disease. Close BP monitoring required.' },
      { group: 'Children (<12 years)', notes: 'Not recommended for self-medication: insufficient pediatric safety data.' },
      { group: 'Pregnancy & Lactation', notes: 'Contraindicated: insufficient clinical safety data.' },
    ],
    dosage: {
      standard: 'Dried leaves (tea): 4–10 g, 3× daily in 150–200 mL boiling water. Fluid extract (1:1): 4–10 mL/day.',
      forms: [
        { form: 'Dried Leaf Infusion (Tea)', dose: '4–10 g steeped 10 min (covered), up to 3× daily.' },
        { form: 'Fluid Extract (1:1)', dose: '4–10 mL daily in divided doses.' },
      ],
    },
    overdose: {
      symptoms: [
        'Severe heartburn, gastric hyperacidity, mild epigastric pain, diarrhea',
        'Potential hypersensitivity reactions (skin rashes) at massive doses >50–100 g/day',
      ],
      management: [
        'Discontinue immediately. Administer oral antacids or H₂-receptor antagonists for hyperacidity.',
        'Maintain standard hydration. Symptomatic supportive care.',
      ],
    },
    sideEffects: [
      'Heartburn and gastric hyperacidity (particularly on empty stomach)',
      'Rare contact dermatitis in Asteraceae-sensitive individuals',
      'Excessive diuresis if taken with concurrent diuretics',
    ],
    contraindications: [
      'Asteraceae family hypersensitivity (chamomile, ragweed, daisies, marigolds)',
      'Active biliary obstruction and gallstones: choleretic effect may precipitate biliary colic',
      'Severe renal failure or anuria: risk of hyperkalemia from high potassium content',
    ],
    drugInteractions: [
      'Concurrent synthetic diuretics (Furosemide, HCTZ): additive fluid depletion risk.',
      'Potassium-sparing diuretics (Spironolactone) and potassium supplements: risk of additive hyperkalemia.',
      'Antihypertensives: may exert additive BP-lowering effects: monitor blood pressure.',
    ],
    storage: {
      forms: [
        { form: 'Dried Leaves / Tea Sachets', storage: 'Store dried loose leaves or packaged tea in tightly sealed, light-resistant containers in a cool, dry place. Absolute protection from moisture and high humidity is mandatory, as dandelion leaves are highly hygroscopic and highly prone to fungal and mold spoilage.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Dandelion roots work with the exact same mechanism and potency as dandelion leaves for renal diuresis.', fact: 'The leaves operate primarily as a potent diuretic (aquaretic) due to their high potassium and flavonoid content. In contrast, the roots target hepatic and digestive pathways, acting chiefly as a bitter choleretic and prebiotic due to their high concentration of sesquiterpene lactones and inulin.' },
    ],
    marketedProducts: [
      { name: 'Imtenan Dandelion Leaves (Organic Herbal Tea)', image: '/images/Picture295.jpeg' },
    ],
    benefits: [
      { icon: 'water_drop', title: 'Potassium-Sparing Diuretic', desc: 'Unlike loop or thiazide diuretics that deplete potassium, dandelion\'s own high potassium content self-replenishes what is excreted: a unique safety profile in natural diuresis.' },
      { icon: 'cleaning_services', title: 'Urinary Tract Flushing', desc: 'Increases urine volume to mechanically flush micro-crystals and bacteria from the urinary tract, supporting UTI prevention and urological health.' },
      { icon: 'favorite', title: 'Liver & Bile Support', desc: 'Root sesquiterpene lactones stimulate bile production and flow, supporting hepatic detoxification and fat digestion.' },
    ],
    botanicalFacts: {
      origin: 'Native to Europe and Asia; now naturalized worldwide. One of the most widely distributed plants on Earth.',
      parts: 'Leaves (diuretic/aquaretic), roots (choleretic/digestive), flowers (antioxidant-rich). Leaf and root have distinctly different pharmacological profiles.',
      history: 'Used in European folk medicine since the 10th century. Name from French "dent de lion" (lion\'s tooth) referring to the toothed leaf edges. EMA has published herbal monographs on both the leaf and root.',
    },
    preparation: [
      { method: 'Diuretic Leaf Tea', desc: 'Steep 4–10 g fresh or dried dandelion leaves in covered 200 mL boiling water for 10 minutes. Drink up to 3 cups daily. Always maintain generous fluid intake.', bestFor: 'Fluid retention, mild edema, urinary flushing' },
      { method: 'Choleretic Root Decoction', desc: 'Gently boil 2–5 g dried root in 200 mL water for 10 minutes. Strain and drink. Used specifically for liver and bile support.', bestFor: 'Digestive support, bile stimulation, liver health' },
    ],
    relatedPlants: ['parsley', 'stinging-nettle', 'cranberry'],
    references: [
      { text: 'Egyptian Drug Authority — Taraxacum officinale monograph.', url: 'https://edaegypt.gov.eg/media/pozoqoej/taraxacum-officinale-weber_2025-2.pdf' },
      { text: 'WebMD — Dandelion.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-706/dandelion' },
      { text: 'Science Insights — Dandelion leaf health benefits.', url: 'https://scienceinsights.org/what-is-dandelion-leaf-good-for-health-benefits/' },
      { text: 'Verywell Health — Natural Diuretics.', url: 'https://www.verywellhealth.com/natural-diuretics-8546926' },
      { text: 'Biology Insights — Is Dandelion Tea a Laxative or a Diuretic?', url: 'https://biologyinsights.com/is-dandelion-tea-a-laxative-or-a-diuretic/' },
      { text: 'European Medicines Agency — Taraxacum folium herbal monograph.', url: 'https://www.ema.europa.eu/en/medicines/herbal/taraxaci-folium' },
    ],
  },

  'parsley': {
    id: 'parsley',
    name: 'Parsley',
    latinName: 'Petroselinum crispum (Mill.) Fuss',
    category: 'uti',
    subcategory: 'diuretics',
    tags: ['Diuretic', 'Aquaretic', 'Anti-urolithic', 'Vitamin K', 'Apiaceae'],
    image: '/images/Picture296.jpeg',
    images: ['/images/Picture296.jpeg'],
    shortDescription: 'Apiol-rich aquaretic that raises GFR via renal vasodilation; prevents calcium oxalate crystal aggregation.',
    description: 'Parsley (Petroselinum crispum) belongs to the Apiaceae family. The therapeutic profile is driven by apiol (60–80% of seed oil), myristicin (10–30%), apiin, and exceptional potassium (554 mg/100 g) and vitamin C (133 mg/100 g) content. Provides evidence-based diuresis and urinary tract irrigation. Strictly contraindicated in pregnancy due to abortifacient properties (Category X).',
    symptoms: ['Urinary tract infections', 'Fluid retention', 'Kidney stones prevention', 'Minor edema'],
    activeConstituents: [
      { name: 'Apiol (60–80% of seed essential oil)', detail: 'Inhibits renal tubular Na⁺/K⁺-ATPase pump, trapping sodium in tubular lumen and forcing fluid clearance: osmotic/aquaretic effect.' },
      { name: 'Myristicin (10–30% of seed oil)', detail: 'Direct renal vasodilator; relaxes afferent arterioles, increasing renal blood flow and glomerular filtration rate (GFR).' },
      { name: 'Apiin (2.5–4%), Potassium (554 mg/100g), Vitamin C (133 mg/100g)', detail: 'Potassium creates osmotic drag; Vitamin C and flavonoids lower urinary calcium and increase citrate, preventing calcium oxalate crystal formation.' },
    ],
    moa: [
      { title: 'Na⁺/K⁺-ATPase Inhibition (Aquaretic)', detail: 'Apiol inhibits the basolateral Na⁺/K⁺-ATPase pump in renal tubules, trapping sodium in the tubular lumen, preventing water reabsorption and forcing urine output.' },
      { title: 'Renal Vasodilation (↑GFR)', detail: 'Myristicin relaxes afferent arterioles, increasing renal blood flow and glomerular filtration rate to generate downstream hydraulic pressure for urinary flushing.' },
      { title: 'Anti-urolithic Kinetic Alteration', detail: 'Vitamin C and flavonoids lower urinary calcium excretion and increase citrate output, shifting urinary pH to inhibit calcium oxalate micro-crystal nucleation and aggregation.' },
    ],
    uses: [
      'Urinary tract irrigation to flush micro-crystals and sand-like gravels',
      'Prophylaxis against recurrent calcium oxalate kidney stones',
      'Supportive relief of minor fluid retention and peripheral edema',
      'Supportive diuresis for mild blood pressure management',
    ],
    howToUse: [
      { method: 'Parsley Leaf Tea', instruction: 'Steep 2–4 g dried leaves in 150 mL boiling water (covered) for 10–15 minutes. Take up to 3 times daily. Consume with ample water throughout the day.' },
      { method: 'Fluid Extract (1:1)', instruction: '2–4 mL taken up to 3 times daily, diluted in water.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults (>12 years)', notes: 'Appropriate at therapeutic doses with adequate hydration.' },
      { group: 'Children (<12 years)', notes: 'Not recommended: insufficient pediatric safety data.' },
      { group: 'Pregnancy', notes: 'STRICTLY CONTRAINDICATED (Category X): abortifacient.' },
      { group: 'Elderly with Renal Disease', notes: 'Highly discouraged in compromised kidney function: potential structural tissue overload.' },
    ],
    dosage: {
      standard: 'Dried leaves (tea): 2–4 g, 3× daily. Fluid extract (1:1): 2–4 mL, 3× daily.',
      forms: [
        { form: 'Dried Leaf Infusion (Tea)', dose: '2–4 g steeped 10–15 min (covered), up to 3× daily.' },
        { form: 'Fluid Extract (1:1)', dose: '2–4 mL up to 3× daily, diluted in water.' },
        { form: 'Fresh Leaf Juice', dose: '30–60 mL daily in divided doses.' },
      ],
    },
    overdose: {
      symptoms: [
        'High-dose essential oil / seed overdose: acute nephrotoxicity, hepatotoxicity (jaundice, elevated liver enzymes)',
        'CNS depression: severe dizziness, ataxia, generalized tremors, hemolytic anemia',
      ],
      management: [
        'Discontinue immediately. Administer oral activated charcoal if acute ingestion.',
        'Aggressive IV hydration for renal support. Monitor hepatic enzymes, serum creatinine, and CBC continuously.',
      ],
    },
    sideEffects: [
      'Minor gastric irritation, nausea, or heartburn (especially on empty stomach)',
      'Cutaneous photosensitivity due to trace furanocoumarins',
      'Mild uterine cramping at high doses (pelvic congestion from apiol)',
    ],
    contraindications: [
      'Pregnancy (Category X: abortifacient): Apiol and myristicin induce uterine contractions',
      'Apiaceae family hypersensitivity (celery, carrots, fennel, coriander)',
      'Acute nephritis, glomerulonephritis, or severe CKD (stage 4–5)',
    ],
    drugInteractions: [
      'Warfarin / Vitamin K antagonists: very high vitamin K1 (1640 mcg/100g) directly antagonizes anticoagulation: dangerous INR decrease and thrombosis risk.',
      'Synthetic diuretics (Furosemide, HCTZ): additive fluid volume depletion and dehydration risk.',
    ],
    storage: {
      forms: [
        { form: 'Dried Leaves / Essential Oil', storage: 'Must be stored in airtight, hermetically sealed, amber glass containers to fully eliminate light exposure and moisture absorption. Storage temperatures must remain strictly below 25°C to prevent the rapid thermal volatilization and degradation of Apiol and Myristicin.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Consuming large quantities of parsley tea can completely dissolve and liquefy large, structural staghorn or coral-like kidney stones.', fact: 'Parsley operates purely as an irrigation, aquaretic, and prophylactic agent. It effectively flushes out micro-crystals and sand-like gravels before they aggregate into major stones, but large, structurally established, or impacted calculi require shockwave lithotripsy or surgical intervention.' },
    ],
    marketedProducts: [
      { name: 'Himalaya Cystone Tablets ', image: '/images/Picture297.jpeg' },
      { name: 'Urinex  Capsules', image: '/images/Parsley1.jpeg' },
      { name: 'Imtenan Parsley & Celery Herbal Tea', image: '/images/Parsley2.jpeg' },
    ],
    benefits: [
      { icon: 'water_drop', title: 'Dual-Mechanism Aquaretic', desc: 'Apiol blocks tubular sodium reabsorption while myristicin raises GFR via renal vasodilation: a two-point mechanism providing efficient urinary output without the electrolyte disruption of loop diuretics.' },
      { icon: 'science', title: 'Anti-urolithic Protection', desc: 'Vitamin C and flavonoids shift urinary chemistry to prevent calcium oxalate micro-crystal nucleation, acting as a preventive flush before small crystals can aggregate into kidney stones.' },
      { icon: 'nutrition', title: 'Nutritional Powerhouse', desc: 'Exceptional potassium (554 mg/100g), vitamin C (133 mg/100g), and vitamin K1: providing bone health, vascular support, and immune function alongside its diuretic properties.' },
    ],
    botanicalFacts: {
      origin: 'Native to the central Mediterranean region (Sardinia, Lebanon). Now cultivated worldwide as a culinary and medicinal herb.',
      parts: 'Leaves, stems (culinary/mild diuretic), seeds (concentrated active oil: therapeutic/medicinal). Leaf and seed have dramatically different constituent profiles.',
      history: 'Used in ancient Greek and Roman medicine. The name derives from the Greek "petroselinon" (rock celery). A cornerstone of European herbal diuresis. EMA has published monographs on both root and herb.',
    },
    preparation: [
      { method: 'Diuretic Leaf Infusion', desc: 'Steep 2–4 g dried parsley leaves in 150 mL boiling water (covered) for 10–15 minutes. Drink up to 3 cups daily with generous water intake throughout.', bestFor: 'Urinary flushing, kidney stone prevention, fluid retention' },
    ],
    relatedPlants: ['dandelion', 'halfabar', 'fennel'],
    references: [
      { text: 'PubMed — Petroselinum crispum diuretic activity.', url: 'https://pubmed.ncbi.nlm.nih.gov/11849841/' },
      { text: 'ScienceDirect — Parsley: Bioactive compounds and health benefits (book chapter).', url: 'https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B978012809286600025X' },
      { text: 'WebMD — Parsley health benefits.', url: 'https://www.webmd.com/diet/health-benefits-parsley' },
      { text: 'ResearchGate — Comparative evaluation of diuretic activity of parsley.', url: 'https://www.researchgate.net/publication/331413321_Comparative_Evaluation_of_Diuretic_Activity_of_Ethanolic_Extracts_of_Celery_Apium_graveolens_and_Parsley_Petroselinum_crispum_in_Male_Rats' },
      { text: 'Azerbaijan Pharmaceutical Journal — Diuretic activity of Petroselinum crispum.', url: 'https://www.azpharmjournal.com/en/2024-volume-23-issue-1/assessment-of-the-diuretic-activity-of-petroselinum-crispum-aqueous-leaves-extract-in-wistar-rats/' },
      { text: 'WikiFarmer — Parsley uses and health benefits.', url: 'https://wikifarmer.com/library/en/article/parsley-uses-nutritional-value-and-health-benefits' },
    ],
  },

  'witch-hazel': {
    id: 'witch-hazel',
    name: 'Witch Hazel',
    latinName: 'Hamamelis virginiana L.',
    category: 'uti',
    subcategory: 'anti-septic',
    tags: ['Antiseptic', 'Astringent', 'Tannins', 'Topical', 'Anti-inflammatory'],
    image: '/images/Picture293.jpeg',
    images: ['/images/Picture291.jpeg'],
    shortDescription: 'Polyphenolic tannin-rich astringent with protein-precipitation mechanism for topical antisepsis and tissue protection.',
    description: 'Witch Hazel (Hamamelis virginiana) belongs to the Hamamelidaceae family. Its bark and leaves contain gallotannins, procyanidins, catechins, and flavonols that provide broad-spectrum topical antimicrobial, astringent, vasoconstricting, and anti-inflammatory effects. Widely used in dermatology and wound care.',
    symptoms: ['Minor wounds', 'Skin irritation', 'Acne', 'Hemorrhoid symptoms', 'Sore throat'],
    activeConstituents: [
      { name: 'Gallotannins (Hamamelitannin)', detail: 'Primary polyphenolic tannins mediating the astringent, protein-precipitating, and antibacterial actions.' },
      { name: 'Flavonoids (Procyanidins, Catechins, Flavonols)', detail: 'Anti-inflammatory and antioxidant flavonoid complex that downregulates pro-inflammatory cytokines and cellular exudates.' },
    ],
    moa: [
      { title: 'Protein Precipitation (Astringent Barrier)', detail: 'Tannins chemically bind and coagulate superficial dermal and mucosal proteins, creating a protective micro-barrier that contracts tissue, tightens pores, and controls weeping wounds.' },
      { title: 'Microvascular Vasoconstriction', detail: 'Reduces local blood flow to inflamed tissue, decreasing erythema, edema, and wound exudate.' },
      { title: 'Anti-inflammatory via Cytokine Downregulation', detail: 'Flavonoid and galloyl fractions downregulate pro-inflammatory cytokines, reducing redness and swelling in skin conditions.' },
      { title: 'Broad-Spectrum Antimicrobial', detail: 'Tannins exhibit activity against Gram-positive and Gram-negative bacteria, and inhibitory effects against enveloped viruses including Herpes simplex.' },
    ],
    uses: [
      'Topical antiseptic for minor cuts, scrapes, and skin wounds',
      'Management of acne and oily skin: removes excess sebum, purifies pores',
      'Hemorrhoid relief: reduces burning, itching, and swelling of hemorrhoidal tissue',
      'Sore throat gargle (alcohol-free infusion) to reduce mucosal inflammation',
      'Soothes insect bites, sunburn, poison ivy, and minor allergic skin reactions',
    ],
    howToUse: [
      { method: 'Topical Application', instruction: 'Clean area with mild soap and water. Saturate a cotton pad with witch hazel liquid and dab gently onto affected area. Do not scrub on broken skin.' },
      { method: 'Acne Toner', instruction: 'Apply with cotton pad after washing face to remove excess oil and purify pores. Use morning and evening.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Widely safe for topical antiseptic and astringent use.' },
      { group: 'Ages 6+', notes: 'Safe for topical antiseptic and astringent use at standard dilutions.' },
      { group: 'Ages 2–6', notes: 'Diluted use for diaper-related irritations under medical supervision only.' },
      { group: 'Under 2 years', notes: 'Avoid unless specifically directed by a pediatrician.' },
    ],
    dosage: {
      standard: 'Topical: apply undiluted commercial preparations (distillate) or diluted extracts to affected area as needed. No internal therapeutic dose established.',
      forms: [
        { form: 'Witch Hazel Distillate (Topical)', dose: 'Apply to affected area up to 3–4 times daily as needed.' },
        { form: 'Oral Mouthwash (Alcohol-free Infusion)', dose: 'Rinse and gargle briefly; do not swallow.' },
      ],
    },
    overdose: {
      symptoms: [
        'Topical overuse: skin dryness, redness, stinging, or peeling',
        'If ingested: GI upset, nausea, vomiting from tannin content',
      ],
      management: [
        'Topical: reduce frequency of application; switch to alcohol-free formulation.',
        'Ingested: supportive care; monitor for nausea/vomiting.',
      ],
    },
    sideEffects: [
      'Skin dryness or mild irritation with prolonged or frequent use',
      'Rare allergic contact dermatitis in sensitive individuals',
      'Alcohol-based formulas may cause stinging on broken skin',
    ],
    contraindications: [
      'Known hypersensitivity to witch hazel components',
      'Oral internal use: not recommended due to high tannin content',
      'Children under 2 years: insufficient safety data',
    ],
    drugInteractions: [
      'No significant systemic drug interactions reported for topical use.',
      'Theoretical: concurrent use with other topical astringents may increase skin dryness.',
    ],
    storage: {
      forms: [
        { form: 'Commercial Witch Hazel Distillate / Extracts', storage: 'Store in a cool, dark place at room temperature. Keep tightly sealed to prevent oxidation of tannins and evaporation of any alcohol content.' },
      ],
    },
    marketedProducts: [
      { name: 'Thayers Witch Hazel Toner (Imported, Alcohol-free)', image: '/images/Picture292.jpeg' },
      { name: 'Witch Hazel Astringent Solution (Various pharmacy brands)', image: '/images/Picture293.jpeg' },
    ],
    benefits: [
      { icon: 'spa', title: 'Dual Astringent & Antiseptic', desc: 'Tannins create a protective protein-barrier over wounds and pores, simultaneously tightening tissue and blocking bacterial colonization without harsh chemical irritation.' },
      { icon: 'water_drop', title: 'Vasoconstricting Anti-inflammatory', desc: 'Rapidly reduces local blood flow to inflamed tissue, visibly decreasing redness, swelling, and exudate in hemorrhoids, insect bites, and skin reactions.' },
      { icon: 'face', title: 'Acne & Oil Control', desc: 'Removes excess sebum and tightens dilated pores while its anti-inflammatory action reduces acne papule redness: without the drying harshness of alcohol-based chemical toners.' },
    ],
    botanicalFacts: {
      origin: 'Native to eastern North America, from Nova Scotia to Florida. Traditional medicine of the Potawatomi and Menominee peoples for centuries before European colonization.',
      parts: 'Bark, leaves, and twigs: steam distilled or extracted with ethanol/water. Commercial witch hazel distillate is the most widely used form.',
      history: 'Named from Old English "wych" (flexible branches): not related to witchcraft. A cornerstone of traditional Native American wound care. The FDA recognizes witch hazel as a safe and effective OTC skin protectant.',
    },
    preparation: [
      { method: 'Wound Care Application', desc: 'Dampen a cotton pad with witch hazel distillate. Gently blot (do not scrub) the cleaned wound to remove bacteria and reduce minor bleeding.', bestFor: 'Minor cuts, scrapes, post-shave irritation' },
      { method: 'Acne Face Toner', desc: 'After cleansing, sweep a witch hazel-soaked cotton pad across the face (avoiding eyes). Allow to dry before moisturizing.', bestFor: 'Oily skin, acne, enlarged pores, blackheads' },
    ],
    relatedPlants: ['tea-tree', 'aloe-vera', 'green-tea'],
    references: [
      { text: 'WebMD — Witch Hazel.', url: 'https://www.webmd.com/vitamins-supplements/witch-hazel' },
      { text: 'PubMed Central — Witch hazel pharmacology.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12250947' },
      { text: 'Drugs.com — Witch Hazel.', url: 'https://www.drugs.com/npp/witch-hazel.html' },
    ],
  },

  'halfabar': {
    id: 'halfabar',
    name: 'Halfabar',
    latinName: 'Cymbopogon proximus (Hochst. ex A.Rich.) Stapf',
    category: 'uti',
    subcategory: 'diuretics',
    tags: ['Ureteric Spasmolytic', 'Stone Expulsion', 'Renal Colic', 'Calcium Channel Blocker', 'Diuretic'],
    image: '/images/Picture1_halfabar.jpg',
    images: ['/images/Picture1_halfabar.jpg'],
    shortDescription: 'Selective calcium channel blocker in the ureter that relaxes smooth muscle to allow stone passage while preserving peristaltic propulsion.',
    description: 'Halfabar (Cymbopogon proximus) belongs to the Poaceae family. Principal active constituent proximadiol (>75% of sesquiterpenoid fraction) acts as a non-atropinic calcium channel blocker selectively targeting ureteric smooth muscle: dilating the passage below impacted stones while preserving propulsive peristalsis for stone expulsion. Used in MET (Medical Expulsion Therapy) synergistically with Tamsulosin.',
    symptoms: ['Kidney stones', 'Ureteric colic', 'Renal colic', 'Urinary stasis', 'Intestinal colic'],
    activeConstituents: [
      { name: 'Proximadiol (>75% of sesquiterpenoid fraction)', detail: 'Primary crystalline sesquiterpene diol; selective non-atropinic calcium channel blocker in ureteric walls: the pharmacological quality control marker.' },
      { name: 'Piperitone (60–85% of volatile oil)', detail: 'Dominant monoterpene ketone; renal vasodilator increasing GFR and hydraulic flushing pressure.' },
    ],
    moa: [
      { title: 'Ureteric Smooth Muscle Relaxation', detail: 'Proximadiol acts as a highly selective, non-atropinic calcium channel blocker within the ureteric walls. It induces deep relaxation and dilates the ureteric segment directly below an impacted stone site to expand the passage. Crucially, it achieves this without arresting upper ureteric propulsion, thereby preserving propulsive peristalsis.' },
      { title: 'Renal Vasodilation & Hydraulic Flushing', detail: 'Piperitone causes localized renal vasodilation, increasing Renal Blood Flow (RBF) and elevating the Glomerular Filtration Rate (GFR). This generates steady downstream hydraulic pressure that assists in pushing calculi forward.' },
      { title: 'Systemic Visceral Spasmolysis', detail: 'Extra-renally, both Piperitone and Proximadiol cross-react with smooth muscle voltage-gated calcium channels in the gastrointestinal and respiratory tracts, systematically reducing smooth muscle hyper-reactivity and relieving visceral spasms.' },
    ],
    uses: [
      'Ureteric stone expulsion therapy: facilitates passage of calculi ≤1 cm',
      'Management of severe renal colic: relieves acute flank pain from stone movement',
      'Urinary stasis prophylaxis: flushes urinary channels to prevent crystal aggregation',
      'GI antispasmodic for intestinal colic and bloating',
    ],
    howToUse: [
      { method: 'Herbal Decoction', instruction: 'Boil 5–10 g dried grass in 200–250 mL water for 10 minutes (covered). Strain, consume warm, 2–3× daily.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults (>12 years)', notes: 'Primary therapeutic target: clinically safe and effective.' },
      { group: 'Elderly (65+)', notes: 'Exceptionally safe: avoids systemic hypotension, tachycardia, dry mouth of synthetic anticholinergics.' },
      { group: 'Children (<12 years)', notes: 'Not evaluated for pediatric urology: strictly avoid.' },
      { group: 'Pregnancy', notes: 'Avoid therapeutic doses in early pregnancy as standard precaution.' },
    ],
    dosage: {
      standard: 'Crude decoction: 5–10 g/day. Standardized: 0.4–1 mg proximadiol, 3× daily.',
      forms: [
        { form: 'Decoction', dose: '5–10 g dried grass in 200 mL water, 2–3× daily.' },
        { form: 'Standardized Extract (Proximadiol)', dose: '0.4–1 mg, 3× daily with food.' },
      ],
    },
    overdose: {
      symptoms: ['Pure essential oil >5 mL: severe epigastric burning, nausea, vomiting, headache, dizziness, lethargy'],
      management: ['Discontinue. Administer oral demulcents (cold milk, antacids) or PPIs. Force hydration to accelerate renal clearance.'],
    },
    sideEffects: [
      'Gastric eructation (burping) with aromatic mint aftertaste',
      'Mild gastric pyrosis (heartburn), especially on empty stomach',
    ],
    contraindications: [
      'Known hypersensitivity to Poaceae (grass) family',
      'Early pregnancy at high therapeutic doses',
    ],
    drugInteractions: [
      'Tamsulosin (alpha-blocker): beneficial synergy: accelerates Medical Expulsion Therapy (MET) for ureteric calculi.',
      'NSAIDs (Diclofenac): compatible; NSAIDs reduce inflammatory edema while Halfabar relieves smooth muscle spasm.',
      'Systemic CCBs (Amlodipine, Verapamil): theoretical mild synergy: monitor blood pressure.',
    ],
    storage: {
      forms: [{ form: 'Must be kept in airtight, moisture-proof containers to fully lock in the volatile\n' +
            'piperitone components. Store in a dry, dark climate below 30℃. Effervescent\n' +
            'variants must be tightly sealed against atmospheric humidity to prevent premature\n' +
            'chemical reactions.', storage: 'Airtight, moisture-proof containers below 30°C in dark, dry environment.' }],
    },
    factsAndMyths: [
      { myth: 'Halfabar chemically liquefies and dissolves large, solid calcium stone structures into liquid form inside the kidney.', fact: 'It does not alter the size or chemical structure of the stone; instead, it dynamically widens the biological highway (the ureter) and maintains downstream peristaltic propulsion to allow the body to physically push the stone out safely.' },
    ],
    marketedProducts: [
      { name: 'Proximol ', image: '/images/Halfabar2.jpeg' },
      { name: 'Kellagon', image: '/images/Halfabar1.jpeg' },
    ],
    benefits: [
      { icon: 'medical_services', title: 'Selective Ureteric Stone Expulsion', desc: 'Proximadiol uniquely relaxes the ureteric passage below a stone while preserving propulsive peristalsis above: creating a controlled biological highway for stone expulsion without systemic side effects.' },
      { icon: 'water_drop', title: 'Renal Hydraulic Flushing', desc: 'Piperitone-driven renal vasodilation increases GFR and generates downstream hydraulic pressure that pushes calculi forward while flushing the urinary tract.' },
      { icon: 'psychology', title: 'Elderly-Safe Antispasmodic', desc: 'Achieves ureteric muscle relaxation through selective calcium channel blockade without the anticholinergic side effects (hypotension, tachycardia, dry mouth) common with synthetic agents.' },
    ],
    botanicalFacts: {
      origin: 'Native to North Africa and the Arabian Peninsula. Grows in semi-arid climates, particularly in Egypt, Sudan, and the Gulf countries.',
      parts: 'Whole dried grass (stem and leaf blades). Smells of mint and lemon.',
      history: 'A cornerstone of traditional Egyptian and Sudanese folk medicine for renal colic and stone expulsion. Clinically validated in Egyptian trials. Proximol and Kellagon are widely dispensed in Egyptian community pharmacies.',
    },
    preparation: [
      { method: 'Halfabar Decoction', desc: 'Boil 5–10 g dried Halfabar grass in 200–250 mL water for 10 minutes in covered vessel. Strain, cool, consume warm. Take 2–3 times daily.', bestFor: 'Ureteric stone expulsion, renal colic relief, urinary stasis prevention' },
    ],
    relatedPlants: ['dandelion', 'cranberry', 'clove'],
    references: [
      { text: 'Egyptian Drug Authority — Cymbopogon proximus monograph.', url: 'https://edaegypt.gov.eg/media/s1gedchr/camel-grass-weed-tooth' },
      { text: 'PubMed Central — Halfabar pharmacology.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12256221' },
      { text: 'ResearchGate — Cymbopogon proximus medicinal use.', url: 'https://www.researchgate.net/publication/393170950_Pharmacological_basis_for_medicinal_use_of_Cymbopogon_proximus' },
      { text: 'DOAJ — Halfabar research.', url: 'https://doaj.org/article/b361bfdea23843e5aad4b60a5e6066a3' },
      { text: 'Egyptian Drug Authority — Cymbopogon proximus full monograph.', url: 'https://dev.edaegypt.gov.eg/media/0jnppjtj/cymbopogon-proximus_1.pdf' },
    ],
  },

  'pygeum': {
    id: 'pygeum',
    name: 'Pygeum',
    latinName: 'Prunus africana (Hook.f.) Kalkman',
    category: 'uti',
    subcategory: 'bph',
    tags: ['BPH', 'Prostate Health', 'Phytosterol', 'Anti-proliferative', '5-LOX Inhibitor'],
    image: '/images/Picture300.png',
    images: ['/images/Picture300.png'],
    shortDescription: 'African cherry bark extract that inhibits prostate growth factors and reduces prostatic edema for BPH symptom relief.',
    description: 'Pygeum (Prunus africana) belongs to the Rosaceae family. Its lipophilic bark extract contains β-sitosterol, ursolic/oleanolic acid triterpenes, and ferulic acid esters that collectively inhibit prostate growth factors, reduce glandular edema, and improve bladder detrusor function: providing evidence-based relief for lower urinary tract symptoms in BPH.',
    symptoms: ['Weak urine stream', 'Urinary hesitancy', 'Nocturia', 'BPH symptoms', 'Incomplete bladder emptying'],
    activeConstituents: [
      { name: 'β-sitosterol & Phytosterols', detail: 'Inhibit androgen binding to prostatic tissue and reduce pro-inflammatory eicosanoid synthesis.' },
      { name: 'Ursolic & Oleanolic Acid Triterpenes', detail: 'Anti-proliferative and anti-edematous; inhibit 5-LOX inflammatory pathway in prostate tissue.' },
      { name: 'Ferulic Acid Esters & Docosanol', detail: 'Reduce prolactin-stimulated testosterone uptake in prostate, lowering proliferative signals.' },
    ],
    moa: [
      { title: 'Growth Factor Inhibition (Anti-proliferative)', detail: 'Inhibits FGF and EGF-mediated prostatic hyperproliferation: addressing root cause of BPH rather than just symptoms.' },
      { title: '5-LOX Inhibition & Anti-edematous', detail: 'Reduces inflammatory prostaglandins and leukotrienes in prostatic tissue, decreasing glandular edema and urethral obstruction.' },
      { title: 'Aromatase Inhibition', detail: 'Reduces testosterone-to-estrogen conversion, decreasing age-related estrogenic contribution to prostate enlargement.' },
      { title: 'Bladder Detrusor Regulation', detail: 'Improves bladder muscle tone, enhancing urine stream and reducing post-void residual urine volume.' },
    ],
    uses: [
      'Symptomatic relief of mild-to-moderate BPH (LUTS Stages I–II)',
      'Improvement of urine stream and reduction of post-void residual urine',
      'Reduction of nocturia and daytime urinary frequency',
    ],
    howToUse: [
      { method: 'Standardized Bark Extract (Capsules)', instruction: '50–100 mg daily, standardized to 12–14% phytosterols. Take with food. Often combined with Saw Palmetto for enhanced efficacy.' },
    ],
    suitableAgeGroups: [
      { group: 'Adult Men (40+)', notes: 'Primary target population for mild-to-moderate BPH.' },
      { group: 'Women & Children', notes: 'Not indicated: strictly adult male urological use.' },
    ],
    dosage: {
      standard: '50–100 mg daily of standardized bark extract (12–14% phytosterols) with food.',
      forms: [{ form: 'Standardized Bark Extract Capsules', dose: '50–100 mg/day standardized to 12–14% total phytosterols.' }],
    },
    overdose: {
      symptoms: ['GI irritation, nausea, diarrhea at very high doses'],
      management: ['Discontinue and manage symptoms supportively.'],
    },
    sideEffects: [
      'Mild GI upset (nausea, constipation): usually transient',
      'Rare headache or dizziness at high doses',
    ],
    contraindications: [
      'Suspected prostate malignancy: must be excluded by urologist before initiating',
      'Not indicated for women or pediatric use',
    ],
    drugInteractions: [
      'No clinically significant drug interactions at standard doses.',
      'Synergistic with Saw Palmetto: combination products available and preferred.',
    ],
    storage: {
      forms: [{ form: 'Standardized Extract Capsules', storage: 'Cool, dry, dark place below 25°C in airtight containers.' }],
    },
    marketedProducts: [
      { name: 'Prostarex Capsules (Pygeum Extract)', image: '/images/Picture301.jpeg' },
    ],
    benefits: [
      { icon: 'medical_services', title: 'Growth Factor Anti-proliferative', desc: 'Uniquely targets BPH root cause by inhibiting FGF and EGF-mediated prostate growth signaling: complementing the DHT-blocking mechanism of Saw Palmetto.' },
      { icon: 'water_drop', title: 'Bladder Function Improvement', desc: 'Improves detrusor muscle tone, providing measurable increases in urinary stream and significant reduction in post-void residual urine volume.' },
      { icon: 'healing', title: 'Prostatic Anti-edematous', desc: '5-LOX inhibition and aromatase blockade reduce glandular edema and estrogenic contributions to prostate growth, addressing both inflammatory and hormonal BPH mechanisms.' },
    ],
    botanicalFacts: {
      origin: 'Native to mountain forests of sub-Saharan Africa (Cameroon, Uganda, Kenya, Madagascar). Listed as vulnerable due to over-harvesting.',
      parts: 'Lipophilic bark extract (Pygei africani cortex extractum). Tea preparations are therapeutically ineffective: active phytosterols require ethanolic lipid extraction.',
      history: 'Traditional use by African indigenous peoples for urinary symptoms. Clinically validated in European RCTs 1990s–2000s. Featured in EMA monographs for BPH management.',
    },
    preparation: [
      { method: 'Standardized Capsule', desc: 'Take 50–100 mg standardized bark extract (12–14% phytosterols) with a meal. Often combined with Saw Palmetto for synergistic BPH relief.', bestFor: 'BPH, LUTS, nocturia' },
    ],
    relatedPlants: ['saw-palmetto', 'stinging-nettle-root', 'stinging-nettle'],
    references: [
      { text: 'National Center for Complementary and Integrative Health — Pygeum.', url: 'https://www.nccih.nih.gov' },
      { text: 'PubMed — Pygeum and BPH.', url: 'https://pubmed.ncbi.nlm.nih.gov' },
      { text: 'Mount Sinai — Pygeum.', url: 'https://www.mountsinai.org' },
      { text: 'European Medicines Agency — Pygeum herbal monograph.', url: 'https://www.ema.europa.eu' },
    ],
  },

  'saw-palmetto': {
    id: 'saw-palmetto',
    name: 'Saw Palmetto',
    latinName: 'Serenoa repens (W.Bartram) Small',
    category: 'uti',
    subcategory: 'bph',
    tags: ['BPH', 'Prostate Health', '5-Alpha Reductase Inhibitor', 'DHT Blocker', 'Lipidosterolic Extract'],
    image: '/images/Picture302.jpg',
    images: ['/images/Picture302.jpg'],
    shortDescription: 'Dual 5-alpha reductase inhibitor (Types 1 & 2) with DHT receptor antagonism; the most studied herbal BPH treatment.',
    description: 'Saw Palmetto (Serenoa repens) is a low-growing palm of the Arecaceae family native to southeastern North America. Its lipidosterolic berry extract (85–95% fatty acids and sterols) provides multi-mechanism BPH relief: dual 5-alpha reductase inhibition, DHT receptor antagonism, COX/5-LOX anti-inflammatory action, and alpha-1 adrenergic antagonism. Clinical trials demonstrate LUTS efficacy comparable to finasteride and alpha-blockers with fewer sexual side effects.',
    symptoms: ['Weak urine stream', 'Urinary hesitancy', 'Nocturia', 'BPH symptoms', 'Incomplete bladder emptying'],
    activeConstituents: [
      { name: 'Lipidosterolic Fraction (85–95% of extract)', detail: 'Fatty acid complex (oleic, lauric, myristic, palmitic acids): primary 5-alpha reductase inhibitors.' },
      { name: 'β-sitosterol & Phytosterols', detail: 'DHT receptor antagonism and anti-inflammatory eicosanoid modulation.' },
    ],
    moa: [
      { title: 'Dual 5-Alpha Reductase Inhibition (Type 1 & 2)', detail: 'Blocks both isoforms converting testosterone to DHT (dihydrotestosterone), reducing intraprostatic DHT and growth stimulus.' },
      { title: 'DHT Receptor Antagonism', detail: 'Competes with DHT at androgen receptors in prostate cells, further reducing androgenic growth signaling.' },
      { title: 'COX/5-LOX Anti-inflammatory', detail: 'Reduces prostaglandin and leukotriene synthesis in prostatic tissue, decreasing inflammatory edema.' },
      { title: 'Alpha-1 Adrenergic Antagonism', detail: 'Relaxes smooth muscle in bladder neck and prostate stroma, improving urine flow: similar to synthetic alpha-blockers.' },
    ],
    uses: [
      'Symptomatic relief of mild-to-moderate BPH (LUTS Stages I–II)',
      'Improvement of urine flow rate and reduction of post-void residual urine',
      'Reduction of nocturia, urinary hesitancy, and daytime frequency',
    ],
    howToUse: [
      { method: 'Standardized Lipidosterolic Extract (Capsules)', instruction: '320 mg daily standardized to 85–95% fatty acids and sterols. Take with food. Tea preparations are clinically ineffective.' },
    ],
    suitableAgeGroups: [
      { group: 'Adult Men (40+)', notes: 'Primary target population for mild-to-moderate BPH.' },
      { group: 'Women & Children', notes: 'Not indicated due to anti-androgenic mechanisms.' },
    ],
    dosage: {
      standard: '320 mg daily of standardized lipidosterolic extract (85–95% fatty acids/sterols) with food.',
      forms: [{ form: 'Standardized Lipidosterolic Extract Capsules', dose: '320 mg/day. Tea/infusion preparations: clinically ineffective.' }],
    },
    overdose: {
      symptoms: ['GI upset, nausea, diarrhea, headache at very high doses'],
      management: ['Discontinue and manage symptoms supportively. Generally high safety margin.'],
    },
    sideEffects: [
      'Mild GI symptoms: nausea, diarrhea, stomach pain (usually improved with food)',
      'Rare headache or decreased libido',
      'May mildly suppress PSA: inform healthcare provider',
    ],
    contraindications: [
      'Suspected prostate malignancy: exclude with urologist before initiating',
      'Not indicated for women (anti-androgenic effects) or pediatric use',
    ],
    drugInteractions: [
      'Anticoagulants (Warfarin): theoretical mild anti-platelet effect: monitor INR.',
      'Finasteride or other 5-alpha reductase inhibitors: additive effects; avoid combination without supervision.',
      'Synergistic with Pygeum: combination products preferred for BPH.',
    ],
    storage: {
      forms: [{ form: 'Lipidosterolic Extract Capsules', storage: 'Cool, dry, dark environment below 25°C. Lipid fraction susceptible to oxidative rancidity: protect from heat and air.' }],
    },
    marketedProducts: [
      { name: 'Prostacure Capsules', image: '/images/Picture303.jpeg' },
      { name: 'Pepon Plus / Prostasafe', image: '/images/Picture304.jpeg' },
    ],
    benefits: [
      { icon: 'medical_services', title: 'Dual 5-Alpha Reductase Inhibition', desc: 'Blocks BOTH Type 1 and Type 2 5-alpha reductase isoforms: more comprehensive DHT reduction than synthetic finasteride (Type 2 only), with significantly fewer sexual side effects.' },
      { icon: 'water_drop', title: 'Four-Pathway LUTS Relief', desc: 'Combines 5-alpha reductase inhibition, DHT receptor blockade, anti-inflammatory action, and alpha-1 adrenergic smooth muscle relaxation: addressing LUTS through 4 simultaneous mechanisms.' },
      { icon: 'science', title: 'Best-Evidenced Herbal BPH Agent', desc: 'The most extensively studied phytomedicine for BPH, with multiple RCTs demonstrating LUTS efficacy comparable to finasteride and alpha-blockers with superior tolerability.' },
    ],
    botanicalFacts: {
      origin: 'Native to southeastern United States (Florida, Georgia, South Carolina). Grows in sandy coastal soils and scrublands. Small palm reaching 2–4 m.',
      parts: 'Dried ripe berries (Sabalis serrulatae fructus). Lipidosterolic fraction requires lipophilic solvent extraction: water-based tea is clinically worthless.',
      history: 'Used by Native American Seminole peoples for urinary and reproductive disorders. Clinical BPH research began in Europe in the 1980s. EMA classified as well-established herbal medicine for BPH.',
    },
    preparation: [
      { method: 'Standardized Lipidosterolic Capsule', desc: 'Take one 320 mg standardized capsule with a meal for maximum fat-assisted absorption. Do not substitute with tea.', bestFor: 'BPH, LUTS, nocturia, urinary hesitancy' },
    ],
    relatedPlants: ['pygeum', 'stinging-nettle-root', 'stinging-nettle'],
    references: [
      { text: 'National Center for Complementary and Integrative Health — Saw Palmetto.', url: 'https://www.nccih.nih.gov/health/saw-palmetto' },
      { text: 'PubMed — Saw Palmetto and BPH Studies.', url: 'https://pubmed.ncbi.nlm.nih.gov/23293281/' },
      { text: 'European Medicines Agency — Serenoa repens herbal monograph.', url: 'https://www.ema.europa.eu/en/medicines/herbal/serenoa-repens' },
      { text: 'Mount Sinai — Saw Palmetto.', url: 'https://www.mountsinai.org/health-library/herb/saw-palmetto' },
    ],
  },

  'stinging-nettle-root': {
    id: 'stinging-nettle-root',
    name: 'Stinging Nettle Root',
    latinName: 'Urtica dioica L. radix',
    category: 'uti',
    subcategory: 'bph',
    tags: ['BPH', 'Prostate Health', 'SHBG Binding', 'Anti-proliferative', 'Lectin'],
    image: '/images/Picture305.jpg',
    images: ['/images/Picture305.jpg'],
    shortDescription: 'Root lignans competitively bind SHBG to block prostatic androgen signaling; lectins inhibit EGF-driven prostate hyperproliferation.',
    description: 'The root of Urtica dioica (pharmacologically distinct from the aerial leaf parts used for rhinitis) provides unique BPH mechanisms: SHBG-binding lignans block androgen delivery to the prostate, UDA lectins inhibit EGF receptor-driven hyperproliferation, and β-sitosterol/scopoletin provide anti-inflammatory COX-2/NF-κB suppression. Frequently combined with Saw Palmetto for synergistic LUTS relief in clinical practice.',
    symptoms: ['Weak urine stream', 'Urinary hesitancy', 'Nocturia', 'BPH symptoms', 'Incomplete bladder emptying'],
    activeConstituents: [
      { name: 'Lignans (Root-specific)', detail: 'Bind competitively to SHBG (Sex Hormone-Binding Globulin), blocking its interaction with prostatic cell membranes and preventing androgen receptor activation.' },
      { name: 'UDA Lectins (Urtica dioica Agglutinin)', detail: 'Bind EGF receptors on prostate cells, arresting hyperplastic tissue growth: a unique mechanism not shared by other herbal BPH agents.' },
      { name: 'β-sitosterol, Scopoletin, Coumarins', detail: 'Anti-inflammatory (COX-2, 5-LOX, NF-κB inhibition), antioxidant, and weak 5-alpha reductase inhibition.' },
    ],
    moa: [
      { title: 'SHBG Receptor Blockade (Hormonal Modulation)', detail: 'Lignans occupy SHBG receptors on prostatic cell membranes, preventing SHBG-androgen complexes from binding and blocking hormone-induced prostate growth.' },
      { title: 'EGF Receptor Blockade (Anti-proliferative)', detail: 'UDA lectins bind EGF receptors, arresting hyperplastic tissue growth signaling: a distinct mechanism from all other herbal BPH agents.' },
      { title: 'Weak 5-Alpha Reductase & Aromatase Inhibition', detail: 'Supplementary reduction in DHT and estrogenic contributions to prostate enlargement.' },
      { title: 'Anti-inflammatory (COX-2, 5-LOX, NF-κB)', detail: 'Reduces prostatic edema and urethral obstruction via suppression of inflammatory prostaglandins and cytokines.' },
    ],
    uses: [
      'Symptomatic relief of mild-to-moderate BPH (LUTS Stages I–II)',
      'Improvement of urine flow and reduction of post-void residual urine',
      'Reduction of nocturia and daytime pollakiuria',
    ],
    howToUse: [
      { method: 'Standardized Root Extract (Capsules)', instruction: '300–600 mg/day standardized to β-sitosterol or scopoletin. Clinical trials use 360 mg twice daily with food. Combine with Saw Palmetto for superior efficacy.' },
    ],
    suitableAgeGroups: [
      { group: 'Adult Men (40+)', notes: 'Primary therapeutic target. Synergy with Saw Palmetto strongly recommended.' },
      { group: 'Women', notes: 'Strictly contraindicated (uterine stimulant, hormonal effects).' },
      { group: 'Children (<18 years)', notes: 'Strictly contraindicated: no pediatric safety data.' },
    ],
    dosage: {
      standard: '300–600 mg/day standardized root extract. Clinical protocol: 360 mg twice daily with food.',
      forms: [
        { form: 'Standardized Dry Root Extract (Capsules)', dose: '300–600 mg/day standardized to β-sitosterol or scopoletin.' },
        { form: 'Fluid Extract (1:1, 45% ethanol)', dose: '1.5–3 mL, 3× daily.' },
      ],
    },
    overdose: {
      symptoms: ['GI irritation, nausea, diarrhea, excessive diuresis, transient hypotension, sweating, urticarial rashes'],
      management: ['Discontinue immediately. Monitor blood pressure, hydration, and serum electrolytes if excessive diuresis is prolonged.'],
    },
    sideEffects: [
      'Mild GI irritation, nausea',
      'Mild diuretic effect: may cause more frequent urination initially',
      'Rare allergic skin reactions',
    ],
    contraindications: [
      'Pregnancy and lactation: stimulates uterine contractions',
      'Children (<18 years): no safety data',
      'Severe uncompensated cardiovascular or renal failure',
      'Suspected prostate malignancy: exclude first',
    ],
    drugInteractions: [
      'Antihypertensives (ACE inhibitors, beta-blockers): additive BP-lowering: orthostatic hypotension risk.',
      'Diuretics (Furosemide, HCTZ): synergistic diuresis: volume depletion risk.',
      'Anticoagulants / Antiplatelets: may interfere with clotting: INR monitoring recommended.',
      'Antidiabetic agents: may enhance glucose control: monitor blood glucose.',
    ],
    storage: {
      forms: [{ form: 'Root Extract Capsules / Dried Root', storage: 'Tightly sealed, moisture-resistant, light-resistant containers below 25°C. Humidity causes mold and degrades active lectins.' }],
    },
    marketedProducts: [
      { name: 'Nettle Root Standardized Capsules 500mg (NOW Foods / Solaray)', image: '/images/Picture306.jpeg' },
    ],
    benefits: [
      { icon: 'science', title: 'Unique SHBG Receptor Blockade', desc: 'Root lignans competitively occupy SHBG receptors on prostatic cells, blocking the entire androgen-SHBG signaling cascade: a hormone-modulating mechanism unique among herbal BPH agents.' },
      { icon: 'medical_services', title: 'EGF-Mediated Anti-proliferative', desc: 'UDA lectins bind and block EGF receptors on prostate cells, halting hyperplastic growth at the cell proliferation level: not shared by Saw Palmetto or Pygeum.' },
      { icon: 'shield', title: 'Superior Combination Therapy', desc: 'Multiple clinical trials show Urtica root + Serenoa repens produces LUTS resolution matching synthetic 5-alpha reductase inhibitors with significantly lower incidence of sexual side effects.' },
    ],
    botanicalFacts: {
      origin: 'Urtica dioica native to Europe and temperate Asia; naturalized worldwide. Root harvested in autumn when active constituent concentrations peak.',
      parts: 'Root and rhizome (Radix Urticae) ONLY: pharmacologically distinct from leaf parts. Do NOT interchange preparations.',
      history: 'Root-specific BPH use established in European herbal medicine in the 1980s–1990s. EMA published separate monographs for root (BPH) and leaf (diuretic/anti-inflammatory). Urtica + Saw Palmetto is the most studied herbal BPH combination globally.',
    },
    preparation: [
      { method: 'Standardized Root Capsule (+ Saw Palmetto)', desc: 'Take 300–600 mg standardized root extract with food. For optimal BPH efficacy, combine with 320 mg Saw Palmetto lipidosterolic extract. Allow 4–6 weeks for clinical response.', bestFor: 'BPH, LUTS, nocturia, urinary hesitancy' },
    ],
    relatedPlants: ['saw-palmetto', 'pygeum', 'stinging-nettle'],
    references: [
      { text: 'National Center for Complementary and Integrative Health — Stinging Nettle.', url: 'https://www.nccih.nih.gov' },
      { text: 'Mount Sinai — Stinging Nettle.', url: 'https://www.mountsinai.org/health-library/herb/stinging-nettle' },
      { text: 'PubMed — Nettle root and BPH.', url: 'https://pubmed.ncbi.nlm.nih.gov' },
      { text: 'European Medicines Agency — Urtica herbal monograph.', url: 'https://www.ema.europa.eu' },
    ],
  },

  'cranberry': {
    id: 'cranberry',
    name: 'Cranberry',
    latinName: 'Vaccinium macrocarpon Aiton',
    category: 'womens-health',
    subcategory: 'pregnancy-support',
    tags: ['UTI Prevention', 'Anti-adhesion', 'Proanthocyanidins', 'Antioxidant', 'Vitamin C'],
    image: '/images/Cranberry.webp',
    images: ['/images/Cranberry.webp'],
    shortDescription: 'A-type proanthocyanidins prevent E. coli adhesion to uroepithelium: prophylaxis rather than treatment of UTIs.',
    description: 'Cranberry (Vaccinium macrocarpon) belongs to the Ericaceae family. Its unique A-type proanthocyanidins (PACs) prevent P-fimbriated Escherichia coli from adhering to the urinary tract epithelium: the critical first step in UTI development. Safe in pregnancy for UTI prevention, unlike antibiotic treatments that require caution.',
    symptoms: ['Recurrent UTIs', 'Urinary tract prevention', 'Urinary health', 'Antioxidant support'],
    activeConstituents: [
      { name: 'A-type Proanthocyanidins (PACs)', detail: 'Unique structural A-type linkage (vs. B-type in other berries) prevents P-fimbriated E. coli from adhering to uroepithelial cell surfaces: the primary anti-adhesion mechanism.' },
      { name: 'Anthocyanins (Cyanidins), Flavonols (Quercetin, Myricetin)', detail: 'Antioxidant and anti-inflammatory polyphenols supporting systemic urinary and vascular health.' },
      { name: 'Benzoic Acid, Vitamin C', detail: 'Urinary acidification (benzoic acid → hippuric acid) and antioxidant immune support.' },
    ],
    moa: [
      { title: 'Bacterial Anti-adhesion (PAC-mediated)', detail: 'A-type PACs structurally prevent P-fimbriated E. coli from attaching to uroepithelial receptors, thereby inhibiting bacterial adhesion and reducing UTI risk' },
      { title: 'Antioxidant & Anti-inflammatory Support', detail: 'Polyphenols reduce oxidative stress in the urinary epithelium and suppress pro-inflammatory cytokines.' },
    ],
    uses: [
      'Prophylaxis of recurrent UTIs in women: including during pregnancy',
      'Prevention of first UTI in women with risk factors',
      'General urinary tract health maintenance',
    ],
    howToUse: [
      { method: 'Standardized PAC Capsules', instruction: '36 mg PAC (proanthocyanidins) daily: the clinically validated dose. Take with ample water. Preferred over juice for consistent dosing.' },
      { method: 'Unsweetened Cranberry Juice', instruction: '240–300 mL daily of pure unsweetened cranberry juice (not cocktail/sweetened: insufficient PAC content). Sweeten with honey if needed.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults (including pregnant women)', notes: 'Safe at standard doses for UTI prophylaxis during pregnancy.' },
      { group: 'Children', notes: 'Generally safe at reduced doses; diluted unsweetened juice acceptable.' },
      { group: 'Elderly', notes: 'Beneficial for recurrent UTI prevention; avoid if on anticoagulants.' },
    ],
    dosage: {
      standard: 'Standardized extract: 36 mg PACs daily. Juice: 240–300 mL unsweetened daily.',
      forms: [
        { form: 'Standardized PAC Extract Capsules', dose: '36 mg PAC/day (clinically validated dose).' },
        { form: 'Unsweetened Cranberry Juice', dose: '240–300 mL/day of 100% pure juice.' },
      ],
    },
    overdose: {
      symptoms: ['High-dose juice: GI upset, diarrhea, stomach cramps', 'Elevated oxalate excretion: kidney stone risk in susceptible individuals'],
      management: ['Reduce dose. Maintain adequate hydration. Switch to standardized PAC capsules for reliable dosing.'],
    },
    sideEffects: [
      'GI upset (nausea, diarrhea) at high juice doses',
      'Increased oxalate excretion with excessive consumption',
      'Dental enamel erosion with prolonged undiluted juice consumption',
    ],
    contraindications: [
      'Active anticoagulant therapy with Warfarin: significant INR elevation risk',
      'History of calcium oxalate kidney stones: may increase urinary oxalate',
    ],
    drugInteractions: [
      'Warfarin / Vitamin K antagonists: significant pharmacokinetic interaction increasing INR: contraindicated or requires close INR monitoring.',
      'Other anticoagulants: theoretical interaction: monitor.',
    ],
    storage: {
      forms: [
        { form: 'Store in a cool, dry place away from direct sunlight. Refrigerate juice after opening', storage: 'Capsules: cool, dry, dark place below 25°C. Juice: refrigerate after opening; consume within 7–10 days.' },
      ],
    },
    marketedProducts: [
      { name: 'Modern Cranberry Dietary Supplement', image: '/images/cranberry-product-1.jpeg' },
      { name: 'Cranberry Ema Pharm (30 Capsules)', image: '/images/cranberry-product-2.jpeg' },
    ],
    benefits: [
      { icon: 'shield', title: 'Proven UTI Anti-adhesion', desc: 'A-type PACs structurally block the fimbriae of P-fimbriated E. coli from binding to uroepithelial cells: preventing the critical first step of UTI establishment without antibiotic resistance.' },
      { icon: 'pregnant_woman', title: 'Pregnancy-Safe UTI Prevention', desc: 'One of the few UTI-preventive agents deemed safe throughout pregnancy, offering antibiotic-sparing protection for expectant mothers prone to gestational UTIs.' },
      { icon: 'science', title: 'Prophylactic: Not Antibiotic', desc: 'Prevents bacterial adhesion rather than killing bacteria: does not disrupt the microbiome, does not cause antibiotic resistance, and does not impair beneficial flora.' },
    ],
    botanicalFacts: {
      origin: 'Native to northeastern North America (New England and Great Lakes region). Major commercial cultivation in Massachusetts, Wisconsin, New Jersey, and British Columbia.',
      parts: 'Ripe berries: processed into juice, extract, or dried powder. A-type PAC concentration highest in fresh/freeze-dried berry extract.',
      history: 'Used by Native Americans for UTI symptoms and as a food. Became widely studied in the 1980s–1990s when anti-adhesion mechanism was elucidated. EMA and several national guidelines support its prophylactic use for recurrent UTIs.',
    },
    preparation: [
      { method: 'Daily UTI Prevention Capsule', desc: 'Take one standardized cranberry capsule (36 mg PAC) with a full glass of water each morning. May be used for recurrent UTI prevention.', bestFor: 'Recurrent UTI prevention, pregnancy urinary health' },
    ],
    relatedPlants: ['dandelion', 'parsley', 'garlic'],
    references: [
      { text: 'Drugs.com — Cranberry.', url: 'https://www.drugs.com/npp/cranberry.html' },
      { text: 'PubMed Central — Cranberry and UTI prevention.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3924191' },
      { text: 'WebMD — Cranberry Supplement Guide.', url: 'https://www.webmd.com/diet/supplement-guide-cranberry' },
    ],
  },

  'thyme': {
    id: 'thyme',
    name: 'Thyme',
    nameAr: 'الزعتر',
    latinName: 'Thymus vulgaris L.',
    commonNames: ['Thyme', 'Common Thyme', 'Garden Thyme'],
    category: 'respiratory',
    subcategory: 'cough',
    tags: ['Expectorant', 'Antimicrobial', 'Bronchospasmolytic', 'Thymol', 'Antitussive', 'Mucolytic'],
    image: '/images/Thyme-main.jpg',
    images: ['/images/Thyme-main.jpg', '/images/cough_doc/image8.jpeg', '/images/cough_doc/image9.jpg'],
    shortDescription: 'Thymol-rich Lamiaceae herb providing triple-action bronchodilatory, secretomotoric/mucolytic, and antiseptic activity; one of the most evidence-based herbal medicines for productive cough, acute bronchitis, and upper respiratory tract infections.',
    description: 'Thyme (Thymus vulgaris, Lamiaceae) is among the most pharmacologically validated herbal medicines for respiratory conditions. Its essential oil, dominated by thymol (30–70%) and carvacrol (3–15%), delivers synergistic bronchodilatory action via calcium channel blockade and beta-2 adrenergic stimulation, secretomotoric/mucolytic activity that reduces mucus viscosity, and potent antiseptic activity through thymol-mediated bacterial membrane disruption. Flavonoids (luteolin, apigenin, thymonin, eriodictyol), rosmarinic acid, and saponins complement and sustain these primary volatile oil activities.',
    isDemo: false,
    symptoms: ['Cough', 'Bronchitis', 'Upper respiratory infections', 'Sore throat', 'Productive cough', 'Whooping cough'],

    activeConstituents: [
      { name: 'Phenolic Volatile Essential Oils (1.0% to 2.5%)', detail: 'Driven primarily by the volatile markers Thymol (30%–70%) and Carvacrol (3%–15%). These are robust, legally recognized natural antiseptics possessing intensive antibacterial and antifungal profiles.' },
      { name: 'Flavonoids', detail: 'Highly rich in polymethoxyflavones, including Luteolin, Apigenin, Thymonin, and Eriodictyol, which act as potent localized bronchodilators.' },
      { name: 'Rosmarinic Acid', detail: 'A specialized polyphenolic carboxylic acid that exhibits excellent cellular antioxidant, anti-inflammatory, and free-radical scavenging activities.' },
      { name: 'Saponins', detail: 'Minor triterpenoid saponins that assist significantly in the physical expectoration process by thinning systemic mucus matrices.' },
    ],
    moa: [
      { title: 'Spasmolytic & Bronchodilatory Pathway', detail: 'The flavonoids and volatile phenols competitively block voltage-dependent calcium channels and interact with beta-2 adrenergic receptors on the bronchial smooth muscles, inducing relaxation and suppressing spasmic coughing fits.' },
      { title: 'Secretomotoric & Mucolytic Action', detail: 'Thyme saponins and essential oils stimulate ciliary movement in the bronchial tree and chemically thin tenacious mucus, reducing its elasticity and accelerating expectoration.' },
      { title: 'Direct Antiseptic Action', detail: 'Thymol and carvacrol topically disrupt bacterial cellular membranes via lipophilic interactions, reducing the microbial load in the upper respiratory tract.' },
    ],
    uses: [
      'Relief of productive coughs associated with common colds.',
      'Supportive therapy in acute and chronic bronchitis.',
      'Alleviation of respiratory congestion and throat irritation.',
    ],
    howToUse: [
      { method: 'Preparation', instruction: 'Steep 1–2 teaspoons of dried thyme herb in 1 cup of boiling water for 10 minutes in a covered vessel to capture volatile components, filter carefully, and consume warm.' },
    ],
    suitableAgeGroups: [
      { group: 'Children', notes: 'Only administered in small, calculated pediatric doses (via approved pharmaceutical syrups); raw essential oil is contraindicated.' },
      { group: 'Pregnant and Lactating Women', notes: 'Highly safe in normal culinary or dietary amounts; medicinal doses and concentrated extracts should be avoided due to uterine-stimulating potential.' },
      { group: 'Elderly', notes: 'Generally safe for consumption in normal therapeutic quantities.' },
    ],
    dosage: {
      standard: 'Adults and Adolescents over 12 years: 1 to 2 grams of the dried herb prepared as an infusion, taken 3 to 4 times daily. Alternatively, 1 to 2 mL of liquid extract (1:1 ratio) taken 3 times daily.\nChildren (4–12 years): Only use standardized pharmaceutical extracts, typically 2.5 to 5 mL of syrup, 3 times daily.',
    },
    overdose: {
      symptoms: ['Severe gastrointestinal irritation, nausea, vomiting, dizziness, headache, central nervous system depression, and tachypnea.'],
      management: ['Discontinue use immediately, implement supportive hydration, and seek urgent clinical medical evaluation if essential oil toxicity is suspected.'],
    },
    sideEffects: ['Temporary mild gastrointestinal upset, acidity, or localized allergic hypersensitivity reactions.'],
    contraindications: ['Documented systematic allergy or hypersensitivity to Thymus vulgaris or any other botanical genus within the Lamiaceae family.'],
    drugInteractions: ['No major documented drug interactions, but it may theoretically enhance the effects of concurrent mucolytic or secretolytic drugs.'],
    storage: { forms: [{ form: 'Keep stored in a cool, structurally dry place, carefully isolated from light, humidity, and atmospheric air exposure.', instructions: '' }] },
    marketedProducts: [
      { name: 'Thymy Syrup (Thyme Syrup, Adults and Pediatric)', image: '/images/cough_doc/image7.jpg' },
      { name: 'Thymotal Syrup 100 mL + Drops 30 mL', image: '/images/cough_doc/image11.jpg' },
      { name: 'Bronchicum Elixir 100 mL (Thyme + Primrose)', image: '/images/cough_doc/image10.jpg' },
      { name: 'Fast Syrup 120 mL', image: '/images/cough_doc/image3.jpg' },
    ],
    benefits: [],
    factsAndMyths: [
      { myth: 'Thyme extract can completely replace prescription synthetic antibiotics for severe bacterial lung abscesses.', fact: 'Thyme provides exceptional, clinically proven symptom management for bronchitis and coughing, but severe, invasive deep pulmonary infections strictly require clinical systemic antibiotics.' },
    ],
    botanicalFacts: {
      family: 'Lamiaceae (Labiatae)',
      activeCompounds: 'Thymol (30–70%), Carvacrol (3–15%), Luteolin, Apigenin, Thymonin, Eriodictyol, Rosmarinic Acid, Saponins',
      clinicalEvidence: 'European Medicines Agency (EMA). (2013). Assessment report on Thymus vulgaris L. and Thymus zygis L., herba. Committee on Herbal Medicinal Products (HMPC).',
    },
    relatedPlants: ['licorice-cough', 'eucalyptus', 'anise'],
    references: [
      { text: 'Stahl-Biskup, E., & Saez, F. (2002). Thyme: The Genus Thymus. London: Taylor & Francis.' },
      { text: 'Marchetti, M., et al. (2010). Antimicrobial activity of essential oils obtained from medicinal plants against respiratory pathogens. Fitoterapia, 81(8), 874–878.' },
      { text: 'European Medicines Agency (EMA). (2013). Assessment report on Thymus vulgaris L. and Thymus zygis L., herba. Committee on Herbal Medicinal Products (HMPC).' },
    ],
  },

  'anise': {
    id: 'anise',
    name: 'Anise',
    nameAr: 'اليانسون',
    latinName: 'Pimpinella anisum L.',
    commonNames: ['Anise', 'Aniseed', 'Sweet Cumin', 'Yansoon'],
    category: 'respiratory',
    subcategory: 'cough',
    tags: ['Expectorant', 'Antispasmodic', 'Anethole', 'Secretolytic', 'Demulcent', 'Carminative'],
    image: '/images/Anise.jpeg',
    images: ['/images/Anise.jpeg', '/images/cough_doc/image6.jpg'],
    shortDescription: 'Trans-anethole-dominant Apiaceae seed with secretolytic, antispasmodic, and demulcent actions: increasing bronchial secretion, relaxing smooth muscle, and coating the airway mucosa to relieve productive cough and bronchial spasm.',
    description: 'Anise (Pimpinella anisum, Apiaceae) is one of the oldest documented medicinal plants, referenced in the ancient Egyptian Ebers Papyrus. Its volatile oil is dominated by trans-anethole (80–90%), providing the primary secretolytic (stimulates ciliated epithelial cells), antispasmodic (smooth muscle relaxant via calcium channel blockade), and demulcent actions. Flavonoid glycosides (quercitrin, rutin, isoquercitrin, luteolin) and coumarins (umbelliferone, scopoletin) contribute additional anti-inflammatory and antispasmodic activity. EMA has published a traditional herbal medicine monograph supporting its use as an expectorant for cough and as a carminative for digestive complaints.',
    isDemo: false,
    symptoms: ['Cough', 'Bronchitis', 'Productive cough', 'Bronchial spasm', 'Flatulence', 'Digestive discomfort'],

    activeConstituents: [
      { name: 'Volatile Essential Oils (2% to 6%)', detail: 'The predominant active marker is trans-Anethole (accounting for 80%–90% of the total volatile oil composition). Secondary components include estragole (methyl chavicol), anise aldehyde, and pseudoisoeugenyl 2-methylbutyrate.' },
      { name: 'Flavonoids', detail: 'Rich in flavonol glycosides, primarily Quercitrin, Rutin, Isoquercitrin, and Luteolin, providing secondary cellular antioxidant and tissue-soothing support.' },
      { name: 'Coumarins', detail: 'Minor concentrations of Umbelliferone and scopoletin, which contribute to overall localized anti-inflammatory mechanisms.' },
      { name: 'Phenylpropanoids', detail: 'Organic compounds that structurally drive the characteristic flavor profile and physiological antispasmodic capabilities.' },
    ],
    moa: [
      { title: 'Expectorant & Secretolytic Pathway', detail: 'trans-Anethole stimulates the secretory activity of the ciliated epithelial cells of the respiratory tract, increasing the volume and reducing the viscosity of bronchial secretions, which facilitates effective mucociliary clearance.' },
      { title: 'Antispasmodic & Bronchial Relaxation', detail: 'Anise volatile oils act as a localized smooth muscle relaxant within the trachea and bronchi, counteracting spasmogens and relieving involuntary coughing fits.' },
      { title: 'Demulcent Effect', detail: 'The volatile and aqueous components exert a soothing effect on the mucosal lining, reducing the sensitivity of peripheral cough receptors in the throat.' },
    ],
    uses: [
      'Supportive relief of mild productive coughs and upper respiratory tract congestion.',
      'Soothing of dry, tickling throat irritation.',
      'Relief of accompanying gastrointestinal bloating or flatulent colic.',
    ],
    howToUse: [
      { method: 'Preparation', instruction: 'Steep 1 teaspoon of bruised anise seeds in 1 cup of boiling water for 10 minutes in a covered vessel (to prevent the loss of therapeutic volatile oils), strain completely, and consume warm.' },
    ],
    suitableAgeGroups: [
      { group: 'Children', notes: 'Safe in small, traditional dietary amounts under adult supervision; avoid pure concentrated oils.' },
      { group: 'Pregnant and Lactating Women', notes: 'Use with extreme caution; avoid high medicinal doses due to potential estrogenic activity of anethole.' },
      { group: 'Elderly', notes: 'Generally safe for consumption in regular moderate amounts.' },
    ],
    sideEffects: ['Occasional mild sedation, gastric discomfort, or cutaneous/respiratory allergic reactions.'],
    contraindications: ['Known hypersensitivity or cross-allergy to members of the Apiaceae family (e.g., fennel, celery, cumin).'],
    drugInteractions: ['May theoretically enhance the pharmacological effects of Central Nervous System (CNS) depressants or sedatives due to its mild sedative properties.'],
    storage: { forms: [{ form: 'Store seeds in tightly sealed, airtight containers in a cool, dry environment away from ambient humidity and structural heat.', instructions: '' }] },
    marketedProducts: [
      { name: 'Anisron Syrup 120 mL', image: '/images/cough_doc/image7.jpg' },
      { name: 'Pentamix Syrup 120 mL (Multi-herb cough)', image: '/images/cough_doc/image5.jpg' },
    ],
    dosage: {
      standard: 'Adults and Adolescents over 12 years: 1 to 3.5 grams of whole or freshly crushed aniseed brewed as an infusion, taken 3 times daily.\nChildren (4–12 years): 0.5 to 1 gram of crushed seeds as an infusion, 2–3 times daily under supervision.\nStandardized Syrups: Follow targeted manufacturer guidelines (typically 5–10 mL, 3 times daily).',
    },
    overdose: {
      symptoms: ['Acute dizziness, nausea, vomiting, drowsiness, gastrointestinal hypermotility, and severe neurotoxic or epileptiform effects (associated with high-dose essential oil toxicity).'],
      management: ['Immediately cease intake, maintain optimal systemic hydration, rest, and seek urgent clinical attention if neurological or severe gastric symptoms present.'],
    },
    benefits: [],
    factsAndMyths: [
      { myth: 'Drinking more aniseed infusion will immediately cure and treat severe bacterial pneumonia.', fact: 'Anise is a symptomatic, secretolytic phytotherapy that relieves coughing and loosens mucus, but it possesses no definitive systemic antibiotic power to eradicate deep bacterial pulmonary infections.' },
    ],
    botanicalFacts: {
      family: 'Apiaceae (Umbelliferae)',
      activeCompounds: 'Trans-Anethole (80–90%), Estragole, Anise aldehyde, Quercitrin, Rutin, Isoquercitrin, Luteolin, Umbelliferone, Scopoletin',
      clinicalEvidence: 'EMA traditional herbal medicine monograph supporting use as an expectorant for cough and carminative for digestive complaints.',
    },
    relatedPlants: ['thyme', 'licorice-cough'],
    references: [
      { text: 'Shojaii, A., & Fard, M. A. (2012). Review of pharmacological properties and chemical constituents of Pimpinella anisum. ISRN Pharmaceutics, 2012, 1–8.' },
      { text: 'Ozbek, H., et al. (2003). Evaluation of analgesic, anti-inflammatory and antimicrobial activities of Pimpinella anisum. Pharmaceutical Biology, 41(7), 483–486.' },
    ],
  },

  'pelargonium': {
    id: 'pelargonium',
    name: 'Pelargonium',
    latinName: 'Pelargonium sidoides DC.',
    commonNames: ['African Geranium', 'Umckaloabo'],
    category: 'respiratory',
    subcategory: 'sinusitis',
    tags: ['Immunomodulator', 'Anti-adhesive', 'Anti-infective', 'Sinusitis', 'Bronchitis'],
    image: '/images/Picture310.jpeg',
    shortDescription: 'African Geranium root extract with dual anti-infective and immunomodulatory action; clinically validated for reducing the severity and duration of acute rhinosinusitis and bronchitis.',
    activeConstituents: [
      { name: 'Umckalin, various coumarins (e.g., 7-hydroxycoumarin derivatives), and oligomeric proanthocyanidins (tannins)', detail: 'Exhibits a dual anti-infective and immunomodulatory effect.' },
    ],
    moa: [
      { title: 'Immunomodulatory', detail: 'Stimulates non-specific immune mechanisms (increasing macrophage activation, Nitric Oxide, and Interferon-beta production) and enhances natural killer (NK) cell activity.' },
      { title: 'Anti-adhesive', detail: 'Exerts anti-adhesive activity preventing bacteria (such as Streptococcus) from adhering to host epithelial cells.' },
    ],
    uses: ['Acute rhinosinusitis, acute bronchitis, and common cold symptoms.'],
    howToUse: [
      { method: 'How to use', instruction: 'Standardized liquid drops or oral tablets.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Safe and clinically effective for acute respiratory tract infections.' },
      { group: 'Pediatrics', notes: 'Not recommended for children under 6 years of age due to the lack of adequate safety and efficacy data.' },
      { group: 'Pregnancy & Lactation', notes: 'Not recommended due to insufficient clinical data.' },
      { group: 'Chronic Diseases', notes: 'Avoid use in patients with severe liver or kidney diseases.' },
    ],
    dosage: { standard: '30 drops of liquid extract 3 times daily (approx. 4.5 ml total daily) or 20 mg tablets 3 times daily, for a duration of 7–10 days.' },
    overdose: {
      intro: 'Extremely rare.',
      symptoms: ['Mild gastrointestinal upset or increased bleeding tendencies.'],
      management: ['Discontinuation of the extract and supportive care.'],
    },
    sideEffects: [
      'Gastrointestinal complaints (stomach pain, heartburn, nausea).',
      'Mild nasal or gingival bleeding.',
      'Rare cases of hepatotoxicity (reversible elevation of liver enzymes).',
    ],
    contraindications: [
      'Hypersensitivity to the active substance.',
      'Severe hepatic or renal disease.',
      'Concomitant use of anticoagulants (e.g., Warfarin) due to a theoretical risk of increased bleeding associated with coumarin constituents.',
    ],
    drugInteractions: [],
    storage: {
      forms: [{ form: '', instructions: 'Store at room temperature in the original tightly sealed packaging.' }],
    },
    marketedProducts: [
      { name: 'Kaloba', image: '/images/Pelargonium1.jpg' },
      { name: 'Umcka', image: '/images/Pelargonium2.jpg' },
      { name: 'Umckaloabo', image: '' },
    ],
    benefits: [],
    factsAndMyths: [
      {
        fact: 'High-quality clinical trials show that Pelargonium sidoides significantly reduces both the severity and the duration of acute rhinosinusitis symptoms compared to a placebo.',
        myth: 'It acts as a direct chemical antibiotic; it is primarily an immunomodulator and cytoprotective agent that assists the host immune system in clearing the infection.',
      },
    ],
    botanicalFacts: {
      family: 'Geraniaceae',
      activeCompounds: 'Umckalin, coumarins (7-hydroxycoumarin derivatives), oligomeric proanthocyanidins (tannins)',
      clinicalEvidence: 'High-quality clinical trials show significant reduction in severity and duration of acute rhinosinusitis symptoms compared to placebo.',
    },
    relatedPlants: ['eucalyptus', 'black-elderberry'],
    references: [
      { text: 'European Medicines Agency (EMA) – Committee on Herbal Medicinal Products (HMPC). (2018). European Union herbal monograph on Pelargonium sidoides DC., radix. (EMA/HMPC/444521/2015).' },
    ],
  },

  'black-elderberry': {
    id: 'black-elderberry',
    name: 'Black Elderberry',
    latinName: 'Sambucus nigra L.',
    commonNames: ['Black Elderberry'],
    category: 'respiratory',
    subcategory: 'sinusitis',
    tags: ['Antiviral', 'Anti-inflammatory', 'Anthocyanins', 'Sinusitis', 'Immunomodulator'],
    image: '/images/Picture313.jpeg',
    shortDescription: 'Anthocyanin-rich berry clinically shown to reduce upper respiratory symptoms by up to 4 days; blocks viral sialic acid receptors and downregulates pro-inflammatory cytokines for acute viral rhinosinusitis.',
    activeConstituents: [
      { name: 'Anthocyanins (e.g., cyanidin-3-glucoside)', detail: '' },
      { name: 'Flavonoids (quercetin, rutin)', detail: '' },
      { name: 'Ribosome-inactivating proteins/lectins (Sambucus nigra agglutinins – SNA)', detail: '' },
    ],
    moa: [
      { title: 'Antiviral (Blocking Sialic Acid Receptors)', detail: 'The polyphenols and lectins exhibit antiviral properties by binding to viral surface proteins (blocking sialic acid receptors), thereby inhibiting viral entry and replication within host mucosal cells.' },
      { title: 'Anti-inflammatory', detail: 'Downregulates pro-inflammatory cytokines, reducing mucous membrane swelling.' },
    ],
    uses: ['Reducing the severity, duration, and congestion associated with acute viral rhinosinusitis and early-stage influenza.'],
    howToUse: [
      { method: 'Fruit preparations', instruction: 'Standardized syrups, gummies, or oral extracts (from fruit).' },
      { method: 'Flower preparations', instruction: 'Oral tablets or teas (from flowers).' },
    ],
    crucialNote: 'Sinupret contains Sambuci flos (Elder flower), not the fruit. Elder flower acts primarily as a secretolytic and diaphoretic agent in this well-researched multi-herbal formula.',
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Safe and well-tolerated when using cooked or standardized commercial products.' },
      { group: 'Pediatrics', notes: 'Widely utilized in commercial pediatric syrups for children over 2–6 years old.' },
      { group: 'Pregnancy & Lactation', notes: 'Not recommended due to a lack of robust clinical safety data.' },
      { group: 'Chronic Diseases', notes: 'Use with caution in patients with systemic autoimmune diseases (e.g., Lupus, RA) due to the plant\'s potent immunostimulatory properties.' },
    ],
    dosage: { standard: 'For fruit syrup: 15 ml administered 4 times daily for 3–5 days at the immediate onset of viral symptoms.' },
    overdose: {
      intro: 'Rare with properly processed commercial extracts.',
      symptoms: ['Severe nausea, vomiting, dizziness, and diarrhea—typically arising from the consumption of raw, unprocessed parts of the plant.'],
      management: ['Discontinuation and supportive gastrointestinal care (hydration).'],
    },
    sideEffects: ['Mild laxative effect if consumed in excessive quantities.'],
    contraindications: ['Raw, unripe berries, leaves, stems, and bark are strictly contraindicated as they contain toxic cyanogenic glycosides (e.g., sambunigrin) that release hydrogen cyanide upon ingestion.'],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Standardized syrups', instructions: 'Keep refrigerated after opening.' },
        { form: 'Solid dosage forms', instructions: 'Store in a cool, dry place.' },
      ],
    },
    marketedProducts: [
      { name: 'Sambucol', image: '/images/Elderberry.jpg' },
      { name: "Nature's Way Sambucus", image: '' },
    ],
    benefits: [],
    factsAndMyths: [
      {
        fact: 'Standardized elderberry fruit extracts are clinically shown to reduce upper respiratory symptoms by up to 4 days compared to a placebo when started early.',
        myth: 'You can safely harvest and consume them fresh off the tree; raw elderberries can trigger acute cyanide toxicity. Only fully cooked fruits or validated pharmaceutical extractions are safe for consumption.',
      },
    ],
    botanicalFacts: {
      family: 'Adoxaceae (also classified under Viburnaceae)',
      activeCompounds: 'Anthocyanins (cyanidin-3-glucoside), flavonoids (quercetin, rutin), ribosome-inactivating proteins/lectins (SNA)',
      clinicalEvidence: 'Clinically shown to reduce upper respiratory symptoms by up to 4 days compared to placebo when started early.',
    },
    relatedPlants: ['pelargonium', 'eucalyptus'],
    references: [
      { text: 'European Medicines Agency (EMA) – Committee on Herbal Medicinal Products (HMPC). (2018). European Union herbal monograph on Sambucus nigra L., flos. (EMA/HMPC/435671/2015).' },
      { text: 'World Health Organization (WHO). (2004). WHO Monographs on Selected Medicinal Plants, Volume 2: Flos Sambuci.' },
    ],
  },

  'guava': {
    id: 'guava',
    name: 'Guava',
    nameAr: 'الجوافة',
    latinName: 'Psidium guajava L.',
    commonNames: ['Guava', 'Common Guava', 'Apple Guava'],
    category: 'respiratory',
    subcategory: 'cough',
    tags: ['Antitussive', 'Antimicrobial', 'Quercetin', 'Astringent', 'Anti-inflammatory', 'Vitamin C'],
    image: '/images/guava.webp',
    images: ['/images/guava.webp', '/images/cough_doc/image1.jpeg', '/images/cough_doc/image2.jpg'],
    shortDescription: 'Myrtaceae leaf with quercetin-glycoside flavonoids, ellagitannins, and volatile sesquiterpenes providing peripheral antitussive, COX/LOX anti-inflammatory, astringent mucus-regulating, and antimicrobial actions for cough and upper respiratory infections.',
    description: 'Guava (Psidium guajava, Myrtaceae) leaves are a validated traditional antitussive widely used across tropical Africa, Asia, and Latin America. The leaf phytochemistry includes quercetin and its glycosides (guajaverin), ellagitannins (pedunculagin, casuarinin), volatile oils (β-caryophyllene, limonene, alpha-pinene), and high concentrations of vitamins C and A. These compounds collectively deliver peripheral antitussive action (suppressing airway sensory nerve cough receptors), COX and LOX inhibition to reduce airway inflammation, astringent tannin-mediated mucus regulation, and broad-spectrum antimicrobial activity against Staphylococcus aureus and Streptococcus pyogenes.',
    isDemo: false,
    symptoms: ['Cough', 'Sore throat', 'Upper respiratory infections', 'Diarrhea', 'Mouth ulcers'],

    activeConstituents: [
      { name: 'Flavonoids (Primary Markers)', detail: 'Highly concentrated in Quercetin and its glycosides (such as avicularin and guajaverin), which are responsible for the documented anti-inflammatory, antioxidant, and antimicrobial actions.' },
      { name: 'Tannins & Polyphenols', detail: 'High concentration of condensed and hydrolyzable tannins (such as pedunculagin, casuarinin, and stachyurin) providing an astringent effect that precipitates surface proteins, helping to reduce fluid and mucus secretions in the respiratory tract.' },
      { name: 'Volatile Essential Oils (0.1% to 0.4%)', detail: 'Composed primarily of sesquiterpene hydrocarbons, chiefly Caryophyllene, Limonene, and alpha-pinene, which contribute to its aromatic qualities and antiseptic properties.' },
      { name: 'Vitamins & Nutrient Co-factors', detail: 'Rich in Vitamin C (Ascorbic acid) and Vitamin A, which synergistically support immune function during acute respiratory infections.' },
    ],
    moa: [
      { title: 'Anti-inflammatory Pathway', detail: 'Quercetin and other flavonoids directly inhibit inflammatory mediators by suppressing cyclooxygenase (COX) enzymes and lipoxygenase (LOX) pathways, thereby decreasing the synthesis of pro-inflammatory cytokines in the respiratory tract.' },
      { title: 'Astringent & Mucus Regulation', detail: 'Tannins exert a localized astringent action on the mucosal lining of the pharynx, forming a protective complex layer over irritated tissue, which effectively minimizes further fluid exudation, reduces respiratory irritation, and tightens swollen tissues.' },
      { title: 'Antimicrobial Activity', detail: 'Volatile components disrupt microbial cellular membranes, providing secondary antiseptic benefits against opportunistic upper respiratory tract pathogens.' },
    ],
    uses: [
      'Relief of acute productive and non-productive cough.',
      'Soothing of sore throat and pharyngeal irritation.',
      'Management of mild cold symptoms and respiratory tract congestion.',
    ],
    howToUse: [
      { method: 'Preparation', instruction: 'Boil 5–7 fresh or dried leaves in 1 cup (approx. 200 mL) of water for 10 minutes, strain thoroughly, and drink warm. Natural honey may be added to enhance the demulcent effect.' },
    ],
    suitableAgeGroups: [
      { group: 'Children', notes: 'Use in small, supervised amounts under parental/medical oversight.' },
      { group: 'Pregnant and Lactating Women', notes: 'Not recommended without explicit medical advice.' },
      { group: 'Elderly', notes: 'Generally safe when consumed in moderate quantities.' },
    ],
    dosage: {
      standard: 'Traditional Raw Infusion: 1 cup (200 mL) taken 2–3 times daily for adults.\nStandardized Syrups (Pharmaceutical Extracts):\nAdults: 10 mL (one tablespoon) 3–4 times daily.\nChildren (above 2 years): 5 mL (one teaspoon) 2–3 times daily, or as clinically prescribed.',
    },
    overdose: {
      symptoms: ['Acute constipation (due to high tannin content), nausea, bloating, and localized stomach discomfort.'],
      management: ['Discontinue usage immediately, increase oral fluid intake, and seek symptomatic medical treatment if gastrointestinal distress persists.'],
    },
    sideEffects: ['Mild transient constipation or minor gastrointestinal irritation.'],
    contraindications: ['Documented hypersensitivity or systemic allergy to Psidium guajava or members of the Myrtaceae family.'],
    drugInteractions: ['No major clinical drug-drug interactions documented; however, theoretical additive effects may occur if co-administered with chemical antidiarrheal or highly astringent agents.'],
    storage: { forms: [{ form: 'Store in a cool, dry place, strictly protected from direct sunlight, moisture, and microbial contamination.', instructions: '' }] },
    marketedProducts: [
      { name: 'Guava Syrup 120 mL', image: '/images/cough_doc/image4.jpg' },
      { name: 'Pentamix Syrup 120 mL (Multi-herb cough)', image: '/images/cough_doc/image5.jpg' },
      { name: 'Fast Syrup 120 mL', image: '/images/cough_doc/image3.jpg' },
    ],
    benefits: [],
    factsAndMyths: [
      { myth: 'Guava leaves can fully cure chronic respiratory diseases like asthma or COPD instantly.', fact: 'Guava leaves act purely as an evidence-based supportive phytotherapy that relieves acute symptoms (such as coughing and throat soreness) but cannot replace primary clinical treatments or inhalers for chronic pulmonary disorders.' },
    ],
    botanicalFacts: {
      family: 'Myrtaceae',
      activeCompounds: 'Quercetin and quercetin glycosides (Guajaverin, Avicularin), Condensed and hydrolyzable tannins (Pedunculagin, Casuarinin, Stachyurin), Volatile oils (Caryophyllene, Limonene, Alpha-pinene), Vitamin C, Vitamin A',
      clinicalEvidence: 'Gutierrez, R. M. P., Mitchell, S., & Solis, R. V. (2008). Psidium guajava: A review of its traditional uses, phytochemistry and pharmacology. Journal of Ethnopharmacology, 117(1), 1–27.',
    },
    relatedPlants: ['thyme', 'licorice-cough'],
    references: [
      { text: 'Gutierrez, R. M. P., Mitchell, S., & Solis, R. V. (2008). Psidium guajava: A review of its traditional uses, phytochemistry and pharmacology. Journal of Ethnopharmacology, 117(1), 1–27.' },
      { text: 'Begum, S., Hassan, S. I., Ali, S. N., & Siddiqui, B. S. (2004). Chemical constituents from the leaves of Psidium guajava. Natural Product Research, 18(2), 135–140.' },
    ],
  },


  'licorice-cough': {
    id: 'licorice-cough',
    name: 'Licorice Root',
    latinName: 'Glycyrrhiza glabra L.',
    commonNames: ['Licorice', 'Licorice Root', 'Sweet Wood'],
    category: 'respiratory',
    subcategory: 'cough',
    tags: ['Demulcent', 'Expectorant', 'Anti-inflammatory', 'Glycyrrhizin', 'Antitussive'],
    image: '/images/Licorice-main.jpg',
    imageFit: 'contain',
    shortDescription: 'Glycyrrhizin-rich root with corticosteroid-like anti-inflammatory action; coats and soothes inflamed pharyngeal tissues, liquefies thick mucus, and relieves dry hacking coughs.',
    activeConstituents: [
      { name: 'Triterpene Saponins (Primary Marker)', detail: 'Driven directly by Glycyrrhizin (Glycyrrhizic acid, occurring as potassium and calcium salts). It is approximately 30–50 times sweeter than sucrose and possesses a chemical configuration structurally mimicking corticosteroids, which mediates its anti-inflammatory properties.' },
      { name: 'Flavonoids & Chalcones', detail: 'Rich in Liquiritin, Isoliquiritigenin, and liquiritigenin, which provide robust systemic antioxidant defense, ease smooth muscle spasms, and soothe mucous membranes.' },
      { name: 'Phytosterols', detail: 'Contains beta-sitosterol and stigmasterol, assisting in cellular defense modulation.' },
      { name: 'Polysaccharides', detail: 'High-molecular-weight glycan structures that bolster localized mucosal cell integrity and aid immunological defenses against viral threats.' },
    ],
    moa: [
      { title: 'Demulcent & Soothing Action', detail: 'Glycyrrhizin and mucosal-binding polysaccharides physically coat the inflamed epithelial tissues of the pharynx, shielding peripheral cough receptors from local irritation and reducing dry tickling coughs.' },
      { title: 'Expectorant Effect', detail: 'Glycyrrhizin and associated saponins reduce surface tension and stimulate tracheal mucus membrane secretions, effectively liquefying thick mucus plugs for productive clearance.' },
      { title: 'Corticosteroid-like Anti-inflammatory Pathway', detail: 'Glycyrrhizin inhibits the enzyme 11-beta-hydroxysteroid dehydrogenase (Type 1 & 2), leading to sustained local concentrations of endogenous cortisol, which reduces cellular inflammation and swelling within the respiratory mucosal structures.' },
    ],
    uses: [
      'Soothing of dry, hacking coughs and pharyngeal hypersensitivity.',
      'Relief of acute sore throat and localized respiratory irritation.',
      'Supportive therapy for mild bronchial irritation and gastric hyperacidity.',
    ],
    howToUse: [
      { method: 'Preparation', instruction: 'Steep 1 teaspoon (approx. 2–4 grams) of dried, crushed licorice root in 1 cup of boiling water for 10–15 minutes, filter completely, and drink warm.' },
    ],
    suitableAgeGroups: [
      { group: 'Children', notes: 'Use only under strict medical supervision and in small, controlled traditional amounts.' },
      { group: 'Pregnant Women', notes: 'Strictly Contraindicated due to risks of uterine contractions and potential adverse embryofetal outcomes linked to glycyrrhizin.' },
      { group: 'Elderly', notes: 'Use with extreme clinical caution; highly restricted in patients with underlying cardiovascular conditions.' },
    ],
    dosage: {
      standard: 'Adult Daily Max Dose: 5 to 15 grams of the raw crushed root powder daily (strictly equivalent to 200–600 mg of Glycyrrhizin).\nDuration: Should not be used for more than 4–6 consecutive weeks unless under direct medical supervision, due to accumulation risks.',
    },
    overdose: {
      symptoms: ['Severe hypertension (high blood pressure), significant fluid retention (edema), profound hypokalemia (low blood potassium levels), cardiac arrhythmias, chronic headache, lethargy, and profound muscle weakness.'],
      management: ['Stop usage immediately, implement strict cardiac monitoring, manage potassium levels clinically, restore physical fluid-electrolyte balance, and seek immediate emergency clinical assistance.'],
    },
    sideEffects: [
      'Hypokalemic state, secondary blood pressure elevation, water retention, and mild transient gastrointestinal discomfort.',
    ],
    contraindications: [
      'Diagnosed systemic hypertension, severe cholestatic liver diseases, liver cirrhosis, chronic kidney disease, hypokalemia, structural heart disease, and pregnancy.',
    ],
    drugInteractions: [
      'Diuretics (e.g., Furosemide, Thiazides): Potentiates severe potassium loss (hypokalemia).',
      'Corticosteroids: Heightens the clinical risk of systemic hypokalemia.',
      'Antihypertensives: Antagonizes and reduces the efficacy of blood pressure medications.',
      'Digoxin / Cardiac Glycosides: Significantly increases cardiac toxicity risks due to licorice-induced low potassium levels.',
    ],
    storage: { forms: [{ form: 'Storage', instructions: 'Store raw crushed roots in a tightly sealed container, strictly protected from moisture, ambient humidity, and insect infestation.' }] },
    marketedProducts: [
      { name: 'Ventoherb Syrup 120 mL', image: '/images/cough_doc/image15.jpg' },
    ],
    benefits: [],
    factsAndMyths: [{ fact: 'Licorice root contains highly potent, steroid-like active ingredients (Glycyrrhizin). Chronic or high-volume intake can induce dangerous clinical pseudoaldosteronism, manifesting as severe hypertension and critically low potassium levels.', myth: 'Licorice root is completely safe without restrictions because it is 100% natural.' }],
    botanicalFacts: {
      family: 'Fabaceae (Leguminosae)',
      activeCompounds: 'Glycyrrhizin (Glycyrrhizic acid), Liquiritin, Isoliquiritigenin, Liquiritigenin, Beta-sitosterol, Stigmasterol, Polysaccharides',
      clinicalEvidence: 'Asl, M. N., & Hosseinzadeh, H. (2008). Review of pharmacological effects of Glycyrrhiza sp. and its bioactive compounds. Phytotherapy Research, 22(6), 709–724.',
    },
    relatedPlants: ['thyme', 'anise'],
    references: [
      { text: 'Fiore, C., Eisenhut, M., Krausse, R., et al. (2008). Antiviral effects of Glycyrrhiza species. Phytotherapy Research, 22(2), 141–148.' },
      { text: 'Asl, M. N., & Hosseinzadeh, H. (2008). Review of pharmacological effects of Glycyrrhiza sp. and its bioactive compounds. Phytotherapy Research, 22(6), 709–724.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // WOMEN'S HEALTH › HAIR CARE (isolated IDs)
  // ══════════════════════════════════════════════════════════════════════

  'aloe-vera-hair': {
    id: 'aloe-vera-hair',
    name: 'Aloe Vera',
    nameAr: 'الصبار',
    latinName: 'Aloe vera (L.) Burm. f.',
    commonNames: ['Aloe vera', 'Medicinal aloe'],
    category: 'womens-health',
    subcategory: 'hair-care',
    isDemo: false,
    tags: ['Scalp Health', 'Moisturizing', 'Anti-dandruff', 'Anti-inflammatory', 'Hair Conditioning'],
    image: '/images/Picture1.jpg',
    images: ['/images/Picture1.jpg'],
    shortDescription: 'Reduction of localized scalp scaling, flaking, and mild seborrheic symptoms. Deep moisturization, conditioning, and texture improvement of dry, structurally brittle hair shafts.',
    description: 'Aloe Vera acts fundamentally as an intensive soothing, anti-inflammatory, and moisturizing agent for the scalp tissue. Its high polysaccharide content forms a protective hydrogel barrier that optimizes skin hydration and counters localized dryness. Concurrently, the presence of specific proteolytic enzymes assists in gently clearing cellular debris and excessive sebum buildup from follicular openings. This synergy ensures a well-balanced, non-irritated scalp microenvironment necessary to maintain physiological hair conditioning, reduce pruritus, and minimize scaling.',
    activeConstituents: [
      { name: 'Proteolytic Enzymes', detail: 'May assist in the safe removal of excess dead skin cells from the stratum corneum of the scalp surface.' },
      { name: 'Polysaccharides', detail: 'Chiefly Glucomannans and Acemannan, which provide deep hydration, humectant effects, and mucosal/cutaneous soothing properties.' },
      { name: 'Amino Acids', detail: 'A comprehensive profile of essential and non-essential amino acids contributing to hair conditioning and structural support.' },
      { name: 'Vitamins', detail: 'Vitamin A (Beta-carotene), Vitamin C, and Vitamin E acting as localized antioxidants, alongside crucial B-complex vitamins.' },
      { name: 'Minerals', detail: 'Significant trace elements including Zinc and Copper that support normal hair fiber synthesis and cellular integrity.' },
      { name: 'Anthraquinones', detail: 'Aloin and Emodin, localized primarily in the bundle sheath cells, contributing to documented antimicrobial and anti-inflammatory properties.' },
    ],
    moa: [
      { title: 'Mechanism of Action', detail: 'Aloe Vera acts fundamentally as an intensive soothing, anti-inflammatory, and moisturizing agent for the scalp tissue. Its high polysaccharide content forms a protective hydrogel barrier that optimizes skin hydration and counters localized dryness. Concurrently, the presence of specific proteolytic enzymes assists in gently clearing cellular debris and excessive sebum buildup from follicular openings. This synergy ensures a well-balanced, non-irritated scalp microenvironment necessary to maintain physiological hair conditioning, reduce pruritus, and minimize scaling.' },
    ],
    uses: [
      'Reduction of localized scalp scaling, flaking, and mild seborrheic symptoms (dandruff).',
      'Alleviation of pruritus (itching) and localized neurogenic inflammation of the scalp.',
      'Deep moisturization, conditioning, and texture improvement of dry, structurally brittle hair shafts.',
      'Enhancement of overall hair softness, cuticle smoothness, and cosmetic luster.',
    ],
    howToUse: [
      { method: 'Standard Scientific Extraction', instruction: 'Cold stabilization and expression of the inner parenchymal gel layer to strictly preserve the bioactive high-molecular-weight polysaccharides and thermolabile enzymes.' },
      { method: 'Home-made Formulations (Fresh Aloe Gel Mask)', instruction: 'Excision of a mature, healthy leaf followed by a mandatory drainage period to completely eliminate the anthraquinone-rich yellow latex sap. The clear inner mucilaginous gel is then surgically extracted, homogenized utilizing clean equipment, applied evenly to the scalp and hair for 30 minutes, and completely rinsed with lukewarm water.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Fully safe and indicated for regular topical applications.' },
      { group: 'Children', notes: 'Safe for topical application in pediatric scalp scaling or dryness.' },
      { group: 'Pregnancy & Lactation', notes: 'Deemed safe for topical/cosmetic application; systemic exposure is negligible.' },
      { group: 'Frequency', notes: 'Topically applied as a scalp mask or leave-on conditioner 2 to 3 times per week.' },
    ],
    overdose: {
      symptoms: [
        'Mild transient erythema, localized burning sensation, or rare allergic contact dermatitis.',
        'Accidental systemic ingestion of leaf-margin latex induces strong purgative effects and abdominal cramping.',
      ],
      management: [
        'Immediately irrigate the affected area with copious amounts of fresh water and temporarily suspend topical application.',
      ],
    },
    sideEffects: [],
    contraindications: [],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Fresh Parenchymal Gel', instructions: 'Must be stored in airtight containers under refrigeration (2–8°C) and utilized within 48–72 hours to prevent microbial contamination and oxidative degradation.' },
        { form: 'Commercial Formulations', instructions: 'Store at controlled room temperature away from direct solar radiation and moisture.' },
      ],
    },
    marketedProducts: [
      { name: 'ALOE EVA HAIR OIL ', image: '/images/ALOE EVA HAIR OIL.jpeg' },
      { name: 'ALOE EVA HAIR MASK ', image: '/images/ALOE EVA HAIR MASK.jpeg' },
    ],
    benefits: [],
    factsAndMyths: [
      {
        myth: 'Aloe vera possesses the biochemical capability to induce direct hair regeneration and cure cicatricial or advanced androgenetic alopecia.',
        fact: 'Aloe vera exerts no direct physiological action on hair follicle neo-oogenesis or genetic hair loss pathways. It acts strictly by optimizing scalp dermatological health, reducing micro-inflammation, and providing cosmetic conditioning to the existing hair shafts.',
      },
    ],
    botanicalFacts: {
      activeCompounds: 'Proteolytic enzymes, glucomannans, acemannan, amino acids, vitamins A/C/E and B-complex, zinc, copper, aloin, emodin',
      clinicalEvidence: 'Aloe vera exerts no direct physiological action on hair follicle neo-oogenesis or genetic hair loss pathways. It acts strictly by optimizing scalp dermatological health, reducing micro-inflammation, and providing cosmetic conditioning to the existing hair shafts.',
    },
    relatedPlants: ['rosemary-hair', 'rocket', 'garlic'],
    references: [
      { text: 'Surjushe, A., Vasani, R., & Saple, D. G. (2008). Aloe vera: a short review. Indian Journal of Dermatology, 53(4), 163–166.' },
      { text: 'Choi, S., & Chung, M. H. (2003). Effects of Aloe vera on skin hydration. Skin Research and Technology, 9(2), 122-126.' },
      { text: 'Eshun, G., & He, Q. (2004). Aloe vera: A valuable ingredient for the food, pharmaceutical and cosmetic industries—A review. Critical Reviews in Food Science and Nutrition, 44(2), 91-121.' },
    ],
  },

  'rosemary-hair': {
    id: 'rosemary-hair',
    name: 'Rosemary',
    nameAr: 'إكليل الجبل',
    latinName: 'Salvia rosmarinus Spenn. (syn. Rosmarinus officinalis L.)',
    commonNames: ['Rosemary'],
    category: 'womens-health',
    subcategory: 'hair-care',
    isDemo: false,
    tags: ['Hair Growth', 'Anti-alopecia', 'Antioxidant', 'Scalp Health', 'Anti-dandruff'],
    image: '/images/Rosemary1.jpeg',
    images: ['/images/Picture11.jpg'],
    shortDescription: 'Supportive adjunct therapy in managing diffuse hair thinning and early-stage androgenetic alopecia. Reduction of micro-inflammatory scalp states and associated follicle stress.',
    description: 'Salvia rosmarinus exerts therapeutic actions on the hair apparatus via distinct biochemical pathways. Primarily, carnosic acid and rosmarinic acid mitigate oxidative damage within the follicular microenvironment, downregulating inflammatory cascades that accelerate follicular involution. Furthermore, the monoterpenes present in the volatile oil induce local vasodilation, enhancing microvascular blood flow to the dermal papilla. While selective in-vitro or pre-clinical models hint at subtle interactions with androgenic pathways, robust clinical trials have never established true, direct in-vivo inhibition of 5-alpha-reductase or competitive binding to androgen receptors in human scalps. Its clinical efficacy in pattern hair loss is driven by microvascular enhancement and tissue-protective antioxidant support, serving as an adjunct co-therapy rather than a direct hormonal block.',
    activeConstituents: [
      { name: 'Bioactive Diterpenes', detail: 'Phenolic diterpenes, primarily Carnosic Acid and Carnosol, demonstrating powerful lipid antioxidant capacities.' },
      { name: 'Phenolic Carboxylic Acids', detail: 'Rosmarinic Acid and Caffeic Acid, providing validated anti-inflammatory and free-radical scavenging profiles.' },
      { name: 'Volatile Essential Oils (Aetheroleum)', detail: 'Highly concentrated fractions of 1,8-Cineole (Eucalyptol), Camphor, and Alpha-Pinene, responsible for counter-irritant, antimicrobial, and hyperemic actions.' },
      { name: 'Flavonoid Glycosides', detail: 'Luteolin, Apigenin, and related derivatives.' },
    ],
    moa: [
      { title: 'Mechanism of Action', detail: 'Salvia rosmarinus exerts therapeutic actions on the hair apparatus via distinct biochemical pathways. Primarily, carnosic acid and rosmarinic acid mitigate oxidative damage within the follicular microenvironment, downregulating inflammatory cascades that accelerate follicular involution. Furthermore, the monoterpenes present in the volatile oil induce local vasodilation, enhancing microvascular blood flow to the dermal papilla. While selective in-vitro or pre-clinical models hint at subtle interactions with androgenic pathways, robust clinical trials have never established true, direct in-vivo inhibition of 5-alpha-reductase or competitive binding to androgen receptors in human scalps. Its clinical efficacy in pattern hair loss is driven by microvascular enhancement and tissue-protective antioxidant support, serving as an adjunct co-therapy rather than a direct hormonal block.' },
    ],
    uses: [
      'Supportive adjunct therapy in managing diffuse hair thinning and early-stage androgenetic alopecia.',
      'Reduction of micro-inflammatory scalp states and associated follicle stress.',
      'Management of mild Pityriasis capitis (dandruff) via volatile antimycotic fractions.',
      'Cosmetic revitalization of hair fiber elasticity, density, and general scalp health.',
    ],
    howToUse: [
      { method: 'Standard Scientific Isolation', instruction: 'Industrial-scale steam distillation of fresh leaves and flowering tops to isolate the pure, concentrated European Pharmacopoeia-grade Essential Oil (Rosmarini aetheroleum).' },
      { method: 'Aqueous Infusion Rinse (Rosemary Water)', instruction: 'Steep 2–3 fresh green sprigs in boiling water (removed from active heat source) for 3–5 hours within a tightly sealed container to prevent the volatilization of active monoterpenes. Filter with sterile materials into a clean spray flask.' },
      { method: 'Infused Carrier Oil', instruction: 'Combine 1 cup of thoroughly dried rosemary leaves with a stable carrier lipid matrix (e.g., Jojoba or Olive Oil). Heat gently utilizing a water-bath double boiler setup for 2 hours, filter perfectly, and store.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Indicated for regular topical use when essential oils are accurately diluted in appropriate vehicle bases.' },
      { group: 'Children', notes: 'Highly restricted. Avoid all concentrated essential oils on infants or young pediatric patients. Mild aqueous rinses may be utilized with high caution.' },
      { group: 'Pregnancy', notes: 'Pure concentrated essential oils are completely avoided due to trace systemic absorption risks of camphor; mild aqueous infusions should only be utilized after direct medical clearance.' },
      { group: 'Posology', notes: '5–10 sprays of the aqueous infusion applied directly onto the scalp 1–2 times daily as a leave-on routine. Infused oils are massaged 1–2 times per week as a pre-shampoo treatment.' },
    ],
    overdose: {
      symptoms: [
        'Severe contact allergy, chemical irritation, localized desquamation, intense burning sensations, and generalized scalp inflammation.',
      ],
      management: [
        'Immediately cease all applications.',
        'Cleanse the scalp repeatedly with an ultra-mild, unperfumed shampoo.',
        'Apply therapeutic skin-barrier protectants like D-Panthenol or purified Aloe Vera gel to calm the cutaneous surface.',
      ],
    },
    sideEffects: [],
    contraindications: [],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Aqueous Infusion (Rosemary Water)', instructions: 'Critically unstable. Because homemade water extractions completely lack anti-microbial preservative systems, they must be continuously stored under refrigeration (2–8°C) and discarded after a maximum of 7 calendar days to prevent heavy bacterial or fungal colonization.' },
        { form: 'Essential / Infused Oils', instructions: 'Safely stored in dark amber glass vessels, completely sealed away from ambient light and thermal fluctuations.' },
      ],
    },
    marketedProducts: [
      { name: 'ROSEMARY HAIR BOOSTER OIL ', image: '/images/Rosemary2.jpeg' },
    ],
    benefits: [],
    factsAndMyths: [
      {
        myth: 'Rosemary oil acts as an instantaneous, aggressive overnight hair growth catalyst that matches the initial efficacy of oral prescription hair loss medications.',
        fact: 'Well-designed comparative clinical trials (e.g., Panahi et al.) demonstrate that standardized rosemary oil requires a minimum of 6 continuous months of highly compliant, twice-daily application to match the hair-count improvements seen with Minoxidil 2%. It is a slow, supportive vascular and antioxidant strategy requiring months of consistent discipline.',
      },
    ],
    botanicalFacts: {
      family: 'Lamiaceae',
      activeCompounds: 'Carnosic acid, carnosol, rosmarinic acid, caffeic acid, 1,8-cineole (eucalyptol), camphor, alpha-pinene, luteolin, apigenin',
      clinicalEvidence: 'Well-designed comparative clinical trials (e.g., Panahi et al.) demonstrate that standardized rosemary oil requires a minimum of 6 continuous months of highly compliant, twice-daily application to match the hair-count improvements seen with Minoxidil 2%. It is a slow, supportive vascular and antioxidant strategy requiring months of consistent discipline.',
    },
    relatedPlants: ['aloe-vera-hair', 'rocket', 'garlic'],
    references: [
      { text: 'Panahi, Y., Taghizadeh, M., Marzony, E. T., & Sahebkar, A. (2015). Rosemary oil vs minoxidil 2% for the treatment of androgenetic alopecia: a randomized comparative trial. Skinmed, 13(1), 15–21.' },
      { text: 'Borges, R. S., & Mello, V. J. (2025). Rosmarinic acid and hair growth: mechanistic insights. Pharmaceutical Biology, 63(1), 45-52.' },
      { text: 'Council of Europe. (2022). European Pharmacopoeia (11th ed.). Strasbourg: European Directorate for the Quality of Medicine & HealthCare. Rosmarini aetheroleum monograph.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // DIGESTIVE › DIARRHEA SUPPORT (isolated IDs)
  // ══════════════════════════════════════════════════════════════════════

  'fennel-diarrhea': {
    id: 'fennel-diarrhea',
    name: 'Fennel',
    nameAr: 'الشمر',
    latinName: 'Foeniculum vulgare Mill.',
    commonNames: ['Fennel', 'Sweet Fennel', 'Bitter Fennel', 'Wild Fennel'],
    category: 'digestive',
    subcategory: 'diarrhea-support',
    isDemo: false,
    tags: ['Antispasmodic', 'Carminative', 'Anti-inflammatory', 'Digestive', 'Secretolytic'],
    image: '/images/Picture36.jpg',
    images: ['/images/Picture36.jpg'],
    shortDescription: 'A multi-action carminative and antispasmodic botanical; trans-anethole and fenchone relax GI smooth muscle, expel trapped gas, and reduce spasmodic cramping during acute diarrheal episodes without arresting normal physiological elimination.',
    activeConstituents: [
      { name: 'Trans-Anethole (50–80% of volatile oil)', detail: 'Primary active principle responsible for the characteristic sweet, anise-like aroma; exhibits potent antispasmodic, anti-inflammatory, and secretolytic properties.' },
      { name: 'Fenchone (5–20%)', detail: 'Monoterpene ketone providing the bitter flavor profile; contributes to antimicrobial, counter-irritant, and secretolytic effects.' },
      { name: 'Estragole / Methyl chavicol (2–10%)', detail: 'Phenylpropene derivative providing secondary cellular effects; minimized in selected medical chemotypes due to safety monitoring.' },
      { name: 'Phenolic Derivatives & Flavonoids (Quercetin, Rutin, Kaempferol)', detail: 'Rich in quercetin, rutin, and kaempferol derivatives alongside chlorogenic and rosmarinic acids, providing robust cellular antioxidant support and maintaining GI mucosal integrity.' },
      { name: 'Fixed Oils & Phytosterols', detail: 'Contain essential fatty acids (petroselinic and oleic acids) and phytosterols contributing to the regulation of smooth muscle tone.' },
    ],
    moa: [
      { title: 'Antispasmodic & Carminative Action', detail: 'Trans-anethole and fenchone exert a direct relaxant effect on GI smooth muscle cells by modulating intracellular calcium stores and acting as a weak antagonist to voltage-dependent calcium channels. This mitigates intestinal spasms, reduces intraluminal pressure, and facilitates gas expulsion (carminative effect).' },
      { title: 'Anti-inflammatory & Mucosal Protective Effect', detail: 'Suppresses pro-inflammatory mediators and cascades, reducing mucosal irritation and abdominal cramping during acute gastrointestinal distress.' },
      { title: 'Antioxidant Effect', detail: 'Directly scavenges reactive oxygen species (ROS), including superoxide and hydroxyl free radicals, while protecting cellular membranes within the mucosal linings from oxidative stress.' },
      { title: 'Secretolytic, Secretomotor & Antitussive Action', detail: 'In the respiratory tract, the volatile fractions stimulate ciliary activity and increase bronchial secretions, thinning mucus and aiding in the management of non-productive, spasmodic coughs.' },
      { title: 'Antimicrobial Action', detail: 'Demonstrates notable in vitro bacteriostatic and antifungal actions against common secondary pathogens.' },
    ],
    uses: [
      'Supportive Relief for Diarrhea-Associated Cramps: Reduces spasmodic pain, abdominal gripping, and discomfort during acute diarrheal episodes by relaxing hyperactive intestinal walls (without arresting normal physiological elimination).',
      'Symptomatic Relief of Digestive Disorders: Alleviates dyspepsia, flatulence, abdominal bloating, and functional gastrointestinal spasms.',
      'Management of Infant Colic: Clinically utilized in mild, standardized, and strictly regulated pediatric formulations to calm hyperreactive GI tracts.',
      'Mild Upper Respiratory Support: Calms hyperreactive airways, thins bronchial secretions, and assists in soothing pharyngeal inflammation and productive/non-productive coughs.',
    ],
    howToUse: [
      { method: 'Aqueous Infusion (Fennel Tea)', instruction: 'Steep 1.5–2.5 g of freshly crushed or bruised seeds in 150–200 mL of boiling water in a covered vessel for 10–15 minutes (to prevent the loss of volatile essential oils). Take 2–3 times daily.' },
      { method: 'Crude Dried Powder', instruction: '1–3 g daily, administered in divided doses mixed with warm water or food.' },
      { method: 'Standardized Oral Capsules / Extracts', instruction: '200–400 mg taken 2–3 times per day, typically standardized to volatile oil content (under medical guidance).' },
    ],
    suitableAgeGroups: [
      { group: 'Adults & Adolescents', notes: 'Safe at standard therapeutic doses.' },
      { group: 'Pediatrics (<4 years)', notes: 'Pure fennel essential oil Strictly Contraindicated due to risk of respiratory depression. Mild aqueous infusions (tea) for colic must be used with caution, under medical supervision, and within short durations to minimize estragole exposure.' },
      { group: 'Pregnancy & Lactation', notes: 'Concentrated extracts, purifications, and pure essential oils are Strictly Contraindicated due to traditional emmenagogue properties and high estragole content. Safe during lactation only at standard culinary doses or under strict professional supervision in standardized formulations.' },
      { group: 'Geriatrics & Hormone-Sensitive Conditions', notes: 'Use with extreme caution or avoid in patients with a history of estrogen-dependent conditions (e.g., breast, ovarian, or uterine malignancies) due to mild phytoestrogenic profile. High risk of cross-reactivity in individuals allergic to other Apiaceae family members.' },
    ],
    dosage: {
      standard: 'Adults: 1.5–2.5 g seeds steeped 10–15 min in 150–200 mL boiling water (covered), 2–3× daily. Crude powder: 1–3 g daily in divided doses. Standardized capsules: 200–400 mg 2–3× daily.',
      forms: [
        { form: 'Fennel Tea', dose: '1.5–2.5 g freshly crushed seeds steeped 10–15 min in 150–200 mL boiling water (covered). 2–3× daily.' },
        { form: 'Crude Dried Powder', dose: '1–3 g daily in divided doses mixed with warm water or food.' },
        { form: 'Standardized Capsules/Extracts', dose: '200–400 mg 2–3× daily, standardized to volatile oil content. Under medical guidance.' },
      ],
    },
    overdose: {
      symptoms: [
        'Acute Oral Overdose (Excessive concentrated oil or high-dose extracts): Severe gastric mucosal irritation, burning epigastric pain, nausea, vomiting, skin hypersensitivity.',
        'Massive toxic doses of pure essential oil: central nervous system excitability, muscle twitching, or seizures (neurotoxic potential of high-dose anethole/fenchone).',
        'Topical Irritation (Undiluted Essential Oil): Erythema, photosensitivity, and allergic contact dermatitis.',
      ],
      management: [
        'Discontinue use immediately.',
        'Administer symptomatic and supportive treatment including oral antacids or mucosal protectants.',
        'Maintain hydration and carefully monitor neurological and metabolic status if massive amounts of essential oil were ingested.',
        'Topical Irritation: Wash thoroughly with cool water and soap; apply neutral emollient and avoid direct sunlight exposure.',
      ],
    },
    sideEffects: [
      'Mild gastric irritation or nausea at high doses.',
      'Photosensitivity reactions from topical use of undiluted essential oil.',
      'Allergic cross-reactivity in individuals sensitive to Apiaceae family members (carrots, celery, coriander).',
    ],
    contraindications: [
      'Known hypersensitivity or allergy to Foeniculum vulgare or other members of the Apiaceae family (e.g., carrot, celery, coriander, cumin, anise, caraway).',
      'Hormone-sensitive medical conditions or malignancies (breast, uterine, or ovarian cancer, endometriosis) due to phytoestrogenic components.',
      'Infants and young children under 4 years old: concentrated extracts or pure essential oil strictly prohibited.',
    ],
    drugInteractions: [
      'Estrogen & Hormone Therapies: May theoretically interfere with or potentiate oral contraceptives, tamoxifen, or hormone replacement therapies due to competitive or synergistic estrogen-receptor binding.',
      'Fluoroquinolones (e.g., Ciprofloxacin): Fennel extracts may decrease the absorption, serum concentration, and bioavailability of certain oral antibiotics; administration must be spaced by at least 2 hours.',
    ],
    storage: {
      forms: [
        { form: 'Dry Seeds / Powder / Capsules', storage: 'Store in tightly sealed, light-resistant containers below 25°C in a dry environment to avoid moisture absorption and rapid volatilization of active trans-anethole.' },
        { form: 'Fennel Essential Oil', storage: 'Keep tightly closed in amber glass bottles away from direct light and heat sources.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Fennel can completely replace medical rehydration therapies and oral antibiotics to stop severe infectious diarrhea.', fact: 'Fennel does not stop diarrhea directly nor eradicate severe bacterial pathogens in vivo; rather, it acts as an exceptional supportive phytotherapy that significantly reduces the painful intestinal spasms, cramping, and bloating while primary medical rehydration and targeted therapies are established.' },
    ],
    marketedProducts: [
      { name: 'Himalaya Fennel Capsules / Digestive Wellness', image: '' },
      { name: 'Sekem Fennel Tea / Baby Drink', image: '' },
      { name: 'Isis Fennel Herbal Tea', image: '' },
    ],
    benefits: [
      { icon: 'air', title: 'Carminative Gas Relief', desc: 'Trans-anethole relaxes GI smooth muscle and reduces intraluminal pressure, facilitating rapid expulsion of trapped gas and relieving painful bloating and flatulence.' },
      { icon: 'spa', title: 'Antispasmodic for Diarrhea Cramps', desc: 'Calcium channel modulation relieves spasmodic abdominal pain during acute diarrheal episodes without arresting normal bowel elimination.' },
      { icon: 'child_care', title: 'Safe Infant Colic Relief', desc: 'Standardized mild fennel infusions have clinical evidence for safely reducing infantile colic through GI smooth muscle relaxation.' },
      { icon: 'healing', title: 'Mucosal Protection', desc: 'Quercetin and rosmarinic acid provide antioxidant and anti-inflammatory protection to the GI mucosa during acute digestive distress.' },
    ],
    botanicalFacts: {
      origin: 'Native to the Mediterranean region. Widely cultivated throughout Europe, the Middle East, India, and China.',
      parts: 'Fruits (commonly called seeds): the dried, ripe fruits (fructus). Volatile oil is distilled from both the fruits and the herb.',
      history: 'Used since antiquity by the ancient Egyptians and Romans for digestive health and colic. EMA and WHO have published official herbal monographs on fennel fruit.',
    },
    preparation: [
      { method: 'Fennel Seed Tea', desc: 'Lightly crush 1.5–2.5 g fennel seeds and steep in 150–200 mL boiling water in a covered vessel for 10–15 minutes. Drink warm 2–3× daily.', bestFor: 'Diarrhea-associated cramps, flatulence, bloating, infantile colic' },
    ],
    symptoms: ['Diarrhea', 'Abdominal cramps', 'Flatulence', 'Bloating', 'Dyspepsia', 'Infant colic'],
    relatedPlants: ['peppermint-diarrhea', 'chamomile-diarrhea'],
    references: [
      { text: 'European Medicines Agency (EMA). (2016). European Union herbal monograph on Foeniculum vulgare Miller, fructus. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). WHO Monographs on Selected Medicinal Plants, Volume 3: Fructus Foeniculi. Geneva.' },
      { text: 'National Center for Complementary and Integrative Health (NCCIH) — Fennel.', url: 'https://www.nccih.nih.gov' },
      { text: 'Mount Sinai Health Library — Fennel.', url: 'https://www.mountsinai.org' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // DIGESTIVE › DYSPEPSIA (isolated IDs)
  // ══════════════════════════════════════════════════════════════════════

  'peppermint-dyspepsia': {
    id: 'peppermint-dyspepsia',
    name: 'Peppermint',
    nameAr: 'النعناع الفلفلي',
    latinName: 'Mentha × piperita L.',
    commonNames: ['Peppermint', 'Brandy Mint', 'Balm Mint'],
    category: 'digestive',
    subcategory: 'dyspepsia',
    isDemo: false,
    tags: ['Antispasmodic', 'Carminative', 'IBS Relief', 'Dyspepsia Relief', 'Decongestant'],
    image: '/images/Peppermint-Dyspepsia-main.jpg',
    shortDescription: 'A clinically validated spasmolytic for dyspepsia and IBS; menthol blocks L-type Ca²⁺ channels in intestinal smooth muscle, relieving postprandial fullness, flatulence, and abdominal cramps while TRPM8 activation provides visceral analgesia.',
    description: 'Peppermint (Mentha x piperita L.) contains monoterpenes dominated by menthol (30–55%) that block L-type voltage-gated calcium channels in intestinal smooth muscle, reducing contractions and hypermotility. Menthol also activates TRPM8 cold receptors, providing cooling visceral analgesia. Choleretic action (bile stimulation) aids fat digestion and relieves functional postprandial dyspepsia. Rosmarinic acid and flavonoids (luteolin, eriocitrin, hesperidin) provide anti-inflammatory and gastroprotective support.',
    history: '',
    activeConstituents: [
      { name: 'Menthol (30–55%)', percentage: '30–55% of volatile oil', effect: 'Major monoterpene alcohol responsible for cooling sensation, local analgesic properties, and dominant smooth muscle relaxant activities' },
      { name: 'Menthone (14–32%)', percentage: '14–32%', effect: 'Monoterpene ketone structurally related to menthol providing secondary carminative actions' },
      { name: 'Menthofuran (1–10%) & Isomenthone', percentage: '1–10%', effect: 'Trace compounds essential for species identification; excessive menthofuran indicates lower pharmaceutical grade or aging' },
      { name: '1,8-Cineole (Eucalyptol) & Limonene', percentage: '', effect: 'Supplemental secretolytic, respiratory decongestant, and antiseptic mechanisms' },
      { name: 'Rosmarinic Acid', percentage: '', effect: 'Prominent phenolic carboxylic acid displaying profound systemic antioxidant, antiviral, and tissue-protective actions' },
      { name: 'Luteolin, Eriocitrin & Hesperidin', percentage: '', effect: 'Flavonoid glycosides providing systemic free-radical scavenging and complementary gastrointestinal spasmolysis' },
    ],
    moa: [
      { title: 'Direct Smooth Muscle Spasmolysis', detail: 'Menthol acts as a direct local blocker of L-type voltage-gated calcium channels in intestinal smooth muscle. By inhibiting calcium influx across the sarcolemma, it reduces the amplitude and frequency of gastrointestinal contractions, safely mitigating painful visceral spasms and localized hyper-motility.' },
      { title: 'Cooling, Decongestant & Local Analgesic Action', detail: 'Menthol selectively stimulates the Transient Receptor Potential Melastatin 8 (TRPM8) nerve receptors in cutaneous and mucosal nerve endings. This triggers a physiological cooling signal that suppresses secondary pain transmission, thins viscous mucous secretions, and relieves upper respiratory congestion or headaches.' },
      { title: 'Carminative & Choleretic Actions', detail: 'Relaxes the lower esophageal sphincter, permitting trapped gas to be expelled effortlessly. Concurrently, it stimulates hepatic bile secretion, facilitating effective fat digestion and reducing functional postprandial dyspepsia.' },
      { title: 'Antimicrobial Properties', detail: 'The lipophilic terpenes disrupt bacterial cell membranes, showing bacteriostatic actions against common intestinal and upper respiratory pathogens.' },
    ],
    uses: [
      'Management of Irritable Bowel Syndrome (IBS): alleviates painful abdominal cramps, lower colonic spasms, bloating, and urgent tenesmus',
      'Relief of Dyspepsia & Flatulence: combats postprandial upper abdominal fullness, functional nausea, and painful gastric flatulence',
      'Support for Respiratory Tract Congestion: manages mucus buildup, catarrh, and coughing fits related to common colds and acute bronchitis',
      'Alleviation of Tension Headaches: topical application of standardized preparations to the forehead and temples provides significant cooling relief',
    ],
    howToUse: [
      { method: 'Aqueous Infusion (Peppermint Tea)', instruction: 'Infuse 1.5 to 3.0 g of dried leaves in 150–200 mL of boiling water in a tightly closed vessel for 10 minutes. Taken 3 times daily between or after meals.' },
      { method: 'Enteric-Coated Essential Oil Capsules', instruction: '0.2 mL to 0.4 mL of standardized essential oil per capsule, 2 to 3 times daily. Enteric coating is mandatory to prevent the oil from releasing prematurely in the stomach, which can cause heartburn.' },
      { method: 'Topical Liquid Formulations', instruction: '10% menthol or peppermint oil dissolved in ethanol, rubbed gently over temples for headaches, or applied over unbroken skin for local muscle pain.' },
      { method: 'Steam Inhalation', instruction: '3 to 4 drops of pure oil placed into hot water for inhalation to clear respiratory pathways.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Safe at normal dietary tea intakes (1–2 cups daily). Large therapeutic doses or pure essential oils are contraindicated due to risk of emmenagogue effects. Peppermint can slightly reduce breast milk supply when taken in massive quantities over extended periods.' },
      { group: 'Pediatrics (under 4 years)', notes: 'Strictly contraindicated in infants and young children under 4 years old. Applying menthol or peppermint oil directly onto or near the nostrils, face, or chest of an infant can trigger sudden, severe laryngeal or bronchial spasms, leading to acute respiratory arrest.' },
      { group: 'Geriatrics & Chronic Diseases', notes: 'Safe for elderly patients suffering from IBS, but contraindicated in individuals with severe gastroesophageal reflux disease (GERD) or hiatal hernia, as relaxation of the esophageal sphincter can exacerbate acid reflux.' },
    ],
    dosage: {
      standard: 'Tea: 1.5–3.0 g dried leaves in 150–200 mL boiling water (covered), 10 min, 3× daily. Enteric-coated oil capsules: 0.2–0.4 mL, 2–3× daily. Topical: 10% menthol in ethanol.',
      forms: [
        { form: 'Aqueous Infusion (Tea)', dose: '1.5–3.0 g dried leaves in 150–200 mL boiling water, 10 min steep (covered vessel), 3× daily between or after meals.' },
        { form: 'Enteric-Coated Oil Capsules', dose: '0.2–0.4 mL standardized essential oil, 2–3× daily. Enteric coating mandatory.' },
        { form: 'Topical Liquid', dose: '10% menthol or peppermint oil in ethanol, applied gently over temples or unbroken skin.' },
        { form: 'Steam Inhalation', dose: '3–4 drops pure oil in hot water, inhale to clear respiratory pathways.' },
      ],
    },
    overdose: {
      symptoms: [
        'Severe burning pain in the gastrointestinal tract, nausea, vomiting',
        'Dizziness, ataxia (loss of motor coordination)',
        'Cardiac arrhythmias',
        'In catastrophic cases, central nervous system depression leading to coma',
      ],
      management: [
        'Discontinue use immediately',
        'Perform gastric lavage if ingestion is massive and caught early',
        'Provide supportive care, monitor cardiac and respiratory parameters',
        'Manage neurological symptoms symptomatically',
      ],
    },
    sideEffects: [],
    contraindications: [
      'Severe Acid Reflux (GERD): avoid in individuals with active gastroesophageal reflux disease, hiatal hernia, or severe heartburn',
      'Biliary Obstructions: contraindicated in patients with gallstones, acute cholecystitis, or biliary tract obstructions, as its choleretic action can trigger severe biliary colic',
    ],
    drugInteractions: [
      'Antacids, H2 Blockers & Proton Pump Inhibitors (PPIs): taking antacids concurrently with enteric-coated peppermint capsules will cause the enteric coating to dissolve prematurely in the stomach due to elevated pH levels, resulting in severe heartburn. Separate administration by at least 2 hours.',
      'Cytochrome P450 Enzymes (CYP3A4): peppermint oil can inhibit CYP3A4 metabolism; use caution when co-administered with drugs that have a narrow therapeutic index metabolized via this pathway.',
    ],
    storage: {
      forms: [
        { form: 'Dried Leaves & Capsules', storage: 'Store in airtight, light-resistant containers away from direct heat and moisture. Keep below 25°C to protect the volatile monoterpene profile from evaporation.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Peppermint oil is a great, natural remedy to rub on an infant\'s nose to help them breathe when they have a bad cold.', fact: 'Applying peppermint oil or menthol near an infant\'s nose can trigger life-threatening laryngeal spasms and reflex respiratory arrest. It must never be used on faces of children under 4 years old.' },
    ],
    marketedProducts: [
      { name: 'Colpermin Capsules (كولبرمين كبسولات - زيت نعناع فلفلي مغلف معوياً للقولون)', image: '/images/Peppermint-Dyspepsia-product.jpg' },
      { name: 'Sekem Peppermint Tea (سيكم نعناع)', image: '' },
      { name: 'Isis Peppermint Tea (إيزيس نعناع)', image: '' },
      { name: 'Menthol Crystals / Rubs (بلورات الميثول والدهانات الموضعية لتخفيف آلام الصداع والعضلات)', image: '' },
    ],
    benefits: [
      { icon: 'spa', title: 'IBS & Dyspepsia Relief', desc: 'Menthol\'s L-type Ca²⁺ channel blockade resolves painful intestinal spasms, postprandial fullness, and flatulence.' },
      { icon: 'thermostat', title: 'Visceral Analgesia via TRPM8', desc: 'TRPM8 cold receptor activation in GI nerve fibers induces cooling analgesia, desensitizing hyperalgesic visceral walls.' },
      { icon: 'water_drop', title: 'Choleretic & Digestive Aid', desc: 'Stimulates bile secretion, facilitating fat digestion and reducing functional dyspepsia.' },
      { icon: 'air', title: 'Respiratory Decongestant', desc: 'Volatile menthol thins mucus and relieves upper respiratory congestion via TRPM8 stimulation.' },
    ],
    botanicalFacts: {
      origin: 'Hybrid species (Mentha aquatica × Mentha spicata). Family: Lamiaceae.',
      parts: 'Leaves (Menthae piperitae folium) and distilled volatile essential oil.',
      history: 'EMA and WHO monographs confirm therapeutic role in IBS, dyspepsia, and functional GI disorders.',
    },
    preparation: [
      { method: 'Aqueous Infusion (Tea)', desc: 'Infuse 1.5–3 g dried leaves in 150–200 mL boiling water in a tightly closed vessel for 10 minutes to retain volatile oils.', bestFor: 'Dyspepsia, flatulence, mild bloating' },
      { method: 'Enteric-Coated Oil Capsules', desc: '0.2–0.4 mL standardized essential oil capsules. Enteric coating prevents premature release in stomach.', bestFor: 'IBS, GI spasms, functional dyspepsia' },
      { method: 'Topical / Inhalation', desc: '10% menthol in ethanol for topical headache relief; 3–4 drops pure oil in hot water for steam inhalation.', bestFor: 'Tension headaches, respiratory congestion' },
    ],
    symptoms: ['Digestive discomfort', 'IBS symptoms', 'Flatulence', 'Bloating'],
    relatedPlants: ['chamomile-dyspepsia', 'fennel-dyspepsia'],
    references: [
      { text: 'European Medicines Agency (EMA). (2020). European Union herbal monograph on Mentha x piperita L., folium. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). (2002). WHO Monographs on Selected Medicinal Plants (Vol. 2): Folium Menthae Piperitae. Geneva.' },
      { text: 'Grigoleit, H. G., & Grigoleit, P. (2005). Peppermint oil in irritable bowel syndrome. Phytomedicine, 12(8), 601-606.' },
      { text: 'Khanna, R., MacDonald, J. K., & Levesque, B. G. (2014). Peppermint oil for the treatment of irritable bowel syndrome: a systematic review and meta-analysis. Journal of Clinical Gastroenterology, 48(6), 505-512.' },
    ],
  },

  'chamomile-dyspepsia': {
    id: 'chamomile-dyspepsia',
    name: 'Chamomile',
    nameAr: 'البابونج',
    latinName: 'Matricaria chamomilla L.',
    commonNames: ['Chamomile', 'German Chamomile', 'Wild Chamomile'],
    category: 'digestive',
    subcategory: 'dyspepsia',
    isDemo: false,
    tags: ['Antispasmodic', 'Anti-inflammatory', 'Anxiolytic', 'Carminative', 'Digestive Aid'],
    image: '/images/Chamomile-Dyspepsia-main.jpg',
    shortDescription: 'A multi-action botanical for nervous dyspepsia and GI spasms; chamazulene and α-bisabolol inhibit COX-2/5-LOX pathways while apigenin binds GABA-A receptors, delivering combined anti-inflammatory, antispasmodic, and mild anxiolytic effects.',
    description: 'German Chamomile (Matricaria recutita L.) combines volatile sesquiterpene oils (chamazulene, α-bisabolol) with flavonoids (apigenin, luteolin) and coumarins (herniarin, umbelliferone). Chamazulene and bisabolol potently inhibit COX and 5-LOX inflammatory enzymes. Apigenin-7-glucoside competitively binds GABA-A benzodiazepine receptors, yielding mild sedation and anxiolytic activity without barbiturate-like withdrawal. Synergistic calcium channel blockade and phosphodiesterase inhibition resolve GI smooth muscle hyperreactivity.',
    history: 'One of the oldest medicinal herbs, used by ancient Egyptians, Greeks, and Romans. EMA, WHO, and ESCOP monographs confirm its role in GI spasms, gastritis, and psychosomatic digestive disorders.',
    activeConstituents: [
      { name: 'Chamazulene', percentage: 'Formed from matricin during distillation', effect: 'Highly acclaimed anti-inflammatory, antioxidant, and antipyretic profile; imparts characteristic deep blue color to distilled oil' },
      { name: 'alpha-Bisabolol & Bisabolol Oxides A, B', percentage: '', effect: 'Profound direct antispasmodic action on GI smooth muscles; alongside significant antibacterial, antifungal, and skin-protective properties' },
      { name: 'Apigenin & Apigenin-7-glucoside', percentage: 'Predominant hydrophilic flavonoid', effect: 'Anxiolytic, mild sedative, and muscle relaxant properties via targeted central GABA-A benzodiazepine receptor binding' },
      { name: 'Luteolin & Quercetin', percentage: '', effect: 'Potent synergistic free radical scavenging, local tissue repair, and supplemental anti-inflammatory activity' },
      { name: 'Coumarins (Herniarin & Umbelliferone)', percentage: '', effect: 'Secondary antispasmodic and mild antifungal support within physiological therapeutic doses' },
    ],
    moa: [
      { title: 'Anxiolytic & Mild Sedative Effect', detail: 'Apigenin selectively binds with high affinity to central benzodiazepine receptors within the GABA-A receptor complex in the brain. This action modulates neurotransmission, yielding a profound anxiolytic and sleep-inducing effect without inducing muscle coordination impairment or typical barbiturate-like withdrawal kinetics.' },
      { title: 'Anti-inflammatory & Tissue Repair Action', detail: 'Active chamazulene and alpha-bisabolol strongly suppress pro-inflammatory enzymes. They inhibit the synthesis of Prostaglandin E2 (PGE2) and downregulate the activity of cyclooxygenase-2 (COX-2) and 5-lipoxygenase (5-LOX) pathways. Additionally, they exhibit significant free radical scavenging actions, protecting cell membranes against lipid peroxidation.' },
      { title: 'Antispasmodic Gastrointestinal Effect', detail: 'Acts as a direct, non-specific relaxant on visceral smooth muscles. alpha-bisabolol and flavonoids diminish intestinal tone, decrease luminal hyper-motility, and exert an anti-peptic effect by protecting the gastric mucosa against mucosal damage.' },
      { title: 'Antimicrobial & Local Vulnerary Actions', detail: 'Topical essential oil constituents degrade bacterial and fungal cellular membranes, accelerating granulation, tissue epithelization, and minor wound healing.' },
    ],
    uses: [
      'Management of Insomnia & Sleep Disorders: alleviates mild nervous tension, generalized anxiety, restlessness, and secondary insomnia by optimizing sleep onset latency',
      'Symptomatic Relief of Digestive Issues: effectively treats functional GI spasms, flatulence, bloating, nervous dyspepsia, and chronic IBS symptoms',
      'Topical & Mucosal Treatment: indicated for skin irritations, minor eczema, diaper rashes, minor sunburns, and as an oral wash for aphthous ulcers or gingivitis',
      'Alleviation of Respiratory Distresses: steam inhalation to reduce mucosal inflammation and congestion associated with common colds, rhinitis, and dry coughs',
      'Reduction of Dysmenorrhea: eases smooth muscle uterine cramps and pelvic tightness associated with painful menstrual cycles',
    ],
    howToUse: [
      { method: 'Internal Aqueous Infusion (Chamomile Tea)', instruction: 'Steep 1.5 to 3.0 g of dried whole flower heads in 150–250 mL of boiling water in a sealed container for 10–15 minutes (crucial to prevent the escape of volatile essential oils). Administered 3 to 4 times daily as an anxiolytic or carminative.' },
      { method: 'Topical Wash or Compress', instruction: 'A prepared 3% to 10% aqueous infusion is applied locally using clean compresses, or applied as a sitz bath for perianal/genital mucosal inflammation.' },
      { method: 'Standardized Oral Capsules / Liquid Extracts', instruction: '200 to 500 mg standardized dry extract capsules (standardized to apigenin equivalents) or 1–4 mL of hydroethanolic fluid extract taken 3 times daily.' },
      { method: 'Steam Inhalation', instruction: 'Add 2 to 3 teaspoons of dried flowers or 2–4 drops of pure essential oil into a bowl of boiling water; deeply inhale the herbal steam for 5–10 minutes for respiratory relief.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Safe for consumption during pregnancy and lactation when limited strictly to standard dietary/culinary tea levels (1–2 cups per day). Large therapeutic doses, concentrated liquid extracts, and pure essential oils are strictly contraindicated due to structural emmenagogue qualities and theoretical risks of uterine stimulation.' },
      { group: 'Pediatrics', notes: 'Extremely safe for infants and toddlers when administered as a very mild, diluted aqueous infusion to alleviate infantile colic, teething distress, or mild restlessness. Pure, undiluted essential oils must never be applied near the face or ingested by infants.' },
      { group: 'Geriatrics', notes: 'Highly tolerated and safe for elderly populations, serving as an exceptional non-addictive herbal alternative to pharmaceutical sedatives (e.g., benzodiazepines) which carry significant fall and cognitive risks in the elderly.' },
    ],
    dosage: {
      standard: 'Tea: 1.5–3.0 g dried flower heads steeped 10–15 min (sealed) in 150–250 mL water, 3–4× daily. Capsules: 200–500 mg standardized dry extract, 3× daily. Fluid extract: 1–4 mL, 3× daily.',
      forms: [
        { form: 'Aqueous Infusion (Chamomile Tea)', dose: '1.5–3.0 g dried whole flower heads in 150–250 mL boiling water, sealed container, 10–15 min. 3–4× daily as anxiolytic or carminative.' },
        { form: 'Standardized Oral Capsules', dose: '200–500 mg standardized dry extract (standardized to apigenin equivalents), 3× daily.' },
        { form: 'Hydroethanolic Fluid Extract', dose: '1–4 mL, 3× daily.' },
        { form: 'Topical Wash or Compress', dose: '3%–10% aqueous infusion applied locally using clean compresses or as a sitz bath.' },
        { form: 'Steam Inhalation', dose: '2–3 tsp dried flowers or 2–4 drops essential oil in boiling water; inhale deeply for 5–10 minutes.' },
      ],
    },
    overdose: {
      symptoms: [
        'Severe systemic nausea, profuse vomiting (gastrointestinal emetic trigger)',
        'Excessive drowsiness, marked lethargy',
        'In hyper-reactive individuals: acute bronchoconstriction or anaphylaxis',
      ],
      management: [
        'Discontinue ingestion immediately',
        'Provide robust supportive and symptomatic care (oral or intravenous hydration)',
        'Administer oral antihistamines or systemic corticosteroids promptly if severe hypersensitivity or allergic respiratory bronchospasms manifest',
      ],
    },
    sideEffects: [],
    contraindications: [
      'Asteraceae Hypersensitivity: strictly contraindicated in individuals with known severe allergies to members of the Asteraceae/Compositae family (e.g., ragweed, marigolds, daisies, chrysanthemums, arnica) due to risks of cross-sensitization triggered by sesquiterpene lactones',
      'Direct Application to the Eyes: aqueous infusions or oils should never be applied directly onto or near the eye contour to treat ocular irritations, as it can induce severe chemical conjunctivitis',
    ],
    drugInteractions: [
      'Anticoagulants / Antiplatelets (e.g., Warfarin, Aspirin, Heparin): chamomile contains naturally occurring trace coumarin derivatives. When consumed in large therapeutic amounts, it may theoretically exert additive antiplatelet actions and elevate risks of bleeding or alter prothrombin time (INR).',
      'CNS Depressants (e.g., Benzodiazepines, Zolpidem, Alcohol): concurrent use can result in profound additive sedative and somnolent profiles via synergistic GABA-A pathways; adjustment of doses or cautious spacing is highly advised.',
    ],
    storage: {
      forms: [
        { form: 'Dried Flower Heads', storage: 'Store in tightly sealed, light-resistant glass containers in a cool, dark, and dry environment. Protection from air and ambient light is critical to prevent the rapid oxidation, polymerization, and loss of volatile chamazulene and bisabolol oxides.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Chamomile tea can be safely used as an eye drop or wash to cure bacterial conjunctivitis and soothe eye redness.', fact: 'Applying chamomile infusions to the eyes is dangerous. Microscopic pollen particles and plant hairs remaining in the tea can cause severe allergic conjunctivitis, secondary corneal irritation, and exacerbate ocular inflammation.' },
    ],
    marketedProducts: [
      { name: 'Sekem Chamomile Tea (سيكم بابونج)', image: '/images/Chamomile-Dyspepsia-2.jpg' },
      { name: 'Isis Chamomile Tea (إيزيس بابونج)', image: '/images/Chamomile-Dyspepsia-3.png' },
      { name: 'Camisan Ointment / Cream (كاميستان كريم - مستخلص البابونج الموضعي للالتهابات)', image: '' },
      { name: 'Kamillosan Liquid Spray / Wash (كاميلوسان غسول وبخاخ للفم والحلق)', image: '' },
    ],
    benefits: [
      { icon: 'spa', title: 'Nervous Dyspepsia Relief', desc: 'Apigenin\'s GABA-A binding plus bisabolol\'s spasmolytic action resolve functional GI spasms and stress-related digestive discomfort.' },
      { icon: 'healing', title: 'Anti-inflammatory GI Protection', desc: 'Chamazulene and bisabolol inhibit COX-2 and 5-LOX, reducing mucosal inflammation and gastric irritation.' },
      { icon: 'bedtime', title: 'Mild Anxiolytic & Sleep Aid', desc: 'Apigenin competitively binds benzodiazepine receptors without withdrawal risks, easing anxiety and improving sleep onset.' },
      { icon: 'water_drop', title: 'Mucosal Healing', desc: 'Vulnerary and antimicrobial actions accelerate healing of aphthous ulcers, skin irritations, and GI mucosal damage.' },
    ],
    botanicalFacts: {
      origin: 'Matricaria recutita L. (syn. Matricaria chamomilla, German Chamomile) or Chamaemelum nobile L. (Roman Chamomile). Family: Asteraceae (Compositae).',
      parts: 'Dried whole flower heads (Flos Chamomillae) and distilled volatile essential oil.',
      history: 'Used by ancient Egyptians, Greeks, and Romans. EMA, WHO, and ESCOP monographs confirm clinical use in GI spasms, gastritis, and psychosomatic digestive disorders.',
    },
    preparation: [
      { method: 'Aqueous Infusion (Chamomile Tea)', desc: 'Steep 1.5–3.0 g dried flower heads in 150–250 mL boiling water in a sealed container for 10–15 minutes; sealing prevents loss of volatile oils.', bestFor: 'Nervous dyspepsia, GI spasms, anxiety, insomnia' },
      { method: 'Standardized Capsules', desc: '200–500 mg dry extract standardized to apigenin equivalents, 3× daily.', bestFor: 'IBS, functional digestive disorders, anxiety' },
      { method: 'Topical / Steam', desc: '3–10% aqueous infusion as compress or sitz bath; 2–4 drops oil in hot water for steam inhalation.', bestFor: 'Skin irritations, mucosal inflammation, respiratory congestion' },
    ],
    symptoms: ['Digestive discomfort', 'Gastritis', 'Flatulence', 'Bloating', 'IBS symptoms'],
    relatedPlants: ['peppermint-dyspepsia', 'fennel-dyspepsia'],
    references: [
      { text: 'European Medicines Agency (EMA). (2015). European Union herbal monograph on Matricaria recutita L., flos. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). (1999). WHO Monographs on Selected Medicinal Plants (Vol. 1): Flos Chamomillae. Geneva.' },
      { text: 'Srivastava, J. K., Shankar, E., & Gupta, S. (2010). Chamomile: A herbal medicine of the past with bright future. Molecular Medicine Reports, 3(6), 895-901.' },
      { text: 'Amsterdam, J. D., et al. (2009). A randomized, double-blind, placebo-controlled trial of oral Matricaria recutita (chamomile) extract therapy for generalized anxiety disorder. Journal of Clinical Psychopharmacology, 29(4), 378-382.' },
    ],
  },

  'fennel-dyspepsia': {
    id: 'fennel-dyspepsia',
    name: 'Fennel',
    nameAr: 'الشمر',
    latinName: 'Foeniculum vulgare Mill.',
    commonNames: ['Fennel', 'Sweet Fennel', 'Bitter Fennel'],
    category: 'digestive',
    subcategory: 'dyspepsia',
    isDemo: false,
    tags: ['Carminative', 'Antispasmodic', 'Galactagogue', 'Flatulence Relief', 'Digestive Aid'],
    image: '/images/Fennel-Dyspepsia-main.jpg',
    shortDescription: 'A carminative phytotherapy for dyspepsia and functional GI disorders; trans-anethole acts as a competitive calcium channel antagonist relaxing intestinal smooth muscle, while estrogenic modulation supports lactation and warrants caution in hormone-sensitive conditions.',
    description: 'Fennel (Foeniculum vulgare Mill.) volatile essential oil (2–6%) is dominated by trans-anethole (50–80%), which competitively blocks calcium channels in intestinal smooth muscle, mitigating GI spasms and facilitating gas expulsion. Fenchone (5–20%) contributes antimicrobial properties and carries neurotoxic risks in high doses. Phenolic derivatives (quercetin, kaempferol, chlorogenic acid) provide systemic antioxidant support. Estrogenic modulation occurs via trans-anethole and dianethole binding to estrogen receptors. Family: Apiaceae.',
    history: '',
    activeConstituents: [
      { name: 'trans-Anethole (50–80%)', percentage: '50–80% of volatile oil', effect: 'Predominant constituent responsible for the characteristic sweet aroma, as well as its estrogenic, expectorant, and spasmolytic activities' },
      { name: 'Fenchone (5–20%)', percentage: '5–20%', effect: 'Bicyclic monoterpene ketone providing the bitter taste; contributes to antimicrobial properties; carries neurotoxic risks in high doses' },
      { name: 'Estragole / Methyl chavicol (3–20%)', percentage: '3–20%', effect: 'Natural phenylpropenoid requiring strict standardization due to potential genotoxic carcinogenicity concerns at isolated, massive doses' },
      { name: 'Phenolic Derivatives & Flavonoids', percentage: '', effect: 'Includes quercetin, kaempferol, and chlorogenic acid; provide systemic antioxidant support and cellular protection' },
    ],
    moa: [
      { title: 'Antispasmodic & Carminative Action', detail: 'Directly relaxes the intestinal smooth muscles. trans-anethole acts as a competitive calcium channel antagonist, reducing intracellular calcium influx and mitigating acetylcholine- and histamine-induced gastrointestinal spasms. This facilitates the expulsion of trapped gas and reduces luminal pressure.' },
      { title: 'Secretolytic & Expectorant Effect', detail: 'In the respiratory tract, volatile components stimulate the ciliated epithelium of the bronchial mucosa, increasing the production of fluid respiratory tract secretions and reducing mucus viscosity, which aids in ciliary clearance.' },
      { title: 'Estrogenic Modulation', detail: 'Compounds like trans-anethole and its polymers (such as dianethole) exhibit structural similarities to estrogen, weak binding to estrogen receptors, and stimulation of prolactin secretion.' },
      { title: 'Antimicrobial & Antifungal Action', detail: 'The essential oil components disrupt microbial cell membrane integrity, demonstrating notable in vitro bacteriostatic actions against common secondary pathogens.' },
    ],
    uses: [
      'Symptomatic Relief of Digestive Disorders: alleviates dyspepsia, abdominal bloating, flatulence, and spasmodic gastrointestinal pain associated with Irritable Bowel Syndrome (IBS)',
      'Management of Infantile Colic: clinically proven to reduce crying time and abdominal spasms in infants when administered as a standardized, mild aqueous extract',
      'Supportive Treatment for Respiratory Tract Catarrh: eases productive coughs, mild bronchitis, and upper respiratory tract congestion by promoting expectoration',
      'Galactagogue Support: traditionally and clinically utilized to stimulate and improve breast milk production in lactating mothers via its estrogenic pathways',
    ],
    howToUse: [
      { method: 'Aqueous Infusion (Fennel Tea)', instruction: 'Steep 1.5 to 2.5 g of freshly crushed seeds in 150–200 mL of boiling water in a covered vessel for 10–15 minutes (to prevent the loss of volatile anethole). Take 3 times daily (Max: 7.5 g daily).' },
      { method: 'Standardized Oral Capsules', instruction: '200 to 400 mg of standardized dry extract or essential oil capsules, taken 2 to 3 times per day.' },
      { method: 'Pediatric Syrup / Aqueous Drops (for Colic)', instruction: 'Standardized aqueous extracts equivalent to 1–2 g of seeds daily for children over 4 years of age, or specialized lower doses for infants under strict medical supervision.' },
    ],
    suitableAgeGroups: [
      { group: 'Pregnancy & Lactation', notes: 'Safe during lactation at standard culinary or mild infusion doses (supports milk production). However, the pure essential oil is strictly contraindicated during pregnancy due to potential emmenagogue and uterine-stimulating properties.' },
      { group: 'Pediatrics', notes: 'Pure essential oil must not be administered to infants or children under 4 years old due to potential central nervous system sensitivities to fenchone. Safe only when using strictly regulated, age-appropriate pediatric aqueous formulations.' },
      { group: 'Geriatrics & Chronic Diseases', notes: 'Hormone-Sensitive Conditions: must be avoided or used with extreme caution in patients with a history of breast cancer, uterine cancer, ovarian cancer, or endometriosis, due to the weak phytoestrogenic activity of anethole.' },
    ],
    dosage: {
      standard: 'Fennel Tea: 1.5–2.5 g freshly crushed seeds in 150–200 mL boiling water (covered vessel), 10–15 min, 3× daily (Max 7.5 g/day). Capsules: 200–400 mg standardized extract, 2–3× daily.',
      forms: [
        { form: 'Aqueous Infusion (Fennel Tea)', dose: '1.5–2.5 g freshly crushed seeds in 150–200 mL boiling water, covered vessel, 10–15 min. 3× daily. Max 7.5 g daily.' },
        { form: 'Standardized Oral Capsules', dose: '200–400 mg standardized dry extract or essential oil capsules, 2–3× daily.' },
        { form: 'Pediatric Syrup / Aqueous Drops', dose: 'Standardized aqueous extracts equivalent to 1–2 g seeds daily for children over 4 years; lower specialized doses for infants under medical supervision.' },
      ],
    },
    overdose: {
      symptoms: [
        'Acute Oral Overdose (concentrated pure essential oil): gastrointestinal irritation (nausea, vomiting), skin rashes, and central nervous system stimulation — restlessness, delirium, and epileptic seizures (primarily induced by excessive fenchone and anethole accumulation in the CNS)',
        'Topical Irritation (Undiluted Essential Oil): erythema, photosensitivity reactions, and contact dermatitis',
      ],
      management: [
        'Discontinue use immediately; administer symptomatic treatment',
        'For seizures: administer anticonvulsants (e.g., benzodiazepines); maintain airway and monitoring',
        'For topical irritation: wash thoroughly with cool water and soap; avoid direct sunlight and apply a neutral emollient',
      ],
    },
    sideEffects: [],
    contraindications: [
      'Hypersensitivity: known hypersensitivity to Foeniculum vulgare or other members of the Apiaceae family (e.g., celery, cumin, anise, carrots)',
      'Malignancies: patients with active estrogen-dependent malignancies or endocrine disorders',
    ],
    drugInteractions: [
      'Hormonal Therapies (e.g., Oral Contraceptives, HRT): high therapeutic doses of fennel may competitively interfere with or potentiate the efficacy of exogenous estrogen therapies due to its phytoestrogenic properties.',
      'Ciprofloxacin / Fluoroquinolones: fennel may decrease the gastrointestinal absorption and bioavailability of ciprofloxacin; concurrent administration should be separated by at least 2 hours.',
    ],
    storage: {
      forms: [
        { form: 'Crushed / Whole Seeds & Standardized Capsules', storage: 'Store in tightly sealed, airtight, and light-resistant containers in a cool, dry environment (below 25°C) to prevent the volatilization of anethole and degradation of active components.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Fennel essential oil is 100% safe for infants to swallow for colic since it\'s natural.', fact: 'Pure, undiluted fennel essential oil is highly concentrated and can be toxic to an infant\'s developing central nervous system; only specialized, ultra-diluted aqueous pediatric drops are clinically safe.' },
    ],
    marketedProducts: [
      { name: 'Sekem Fennel Tea (سيكم شمر)', image: '/images/Fennel-Dyspepsia-2.jpg' },
      { name: 'Isis Fennel Tea (إيزيس شمر)', image: '/images/Fennel-Dyspepsia-3.jpg' },
      { name: 'Aqua Vera Syrup (ماء غريب / تركيبات المغص للرضع المحتوية على مستخلص الشمر المائي)', image: '' },
    ],
    benefits: [
      { icon: 'spa', title: 'Dyspepsia & Flatulence Relief', desc: 'trans-Anethole\'s calcium channel antagonism relaxes GI smooth muscle, expelling trapped gas and relieving bloating and dyspeptic discomfort.' },
      { icon: 'child_care', title: 'Infantile Colic Management', desc: 'Clinically proven standardized aqueous extracts reduce crying time and abdominal spasms in infants.' },
      { icon: 'air', title: 'Respiratory Expectorant', desc: 'Volatile components stimulate bronchial ciliated epithelium, reducing mucus viscosity and aiding clearance of catarrh and productive coughs.' },
      { icon: 'water_drop', title: 'Galactagogue Support', desc: 'Estrogenic modulation via trans-anethole stimulates prolactin secretion, supporting breast milk production in lactating mothers.' },
    ],
    botanicalFacts: {
      origin: 'Native to the Mediterranean region. Family: Apiaceae.',
      parts: 'Fruit (seed) — Foeniculi vulgaris fructus — and volatile essential oil.',
      history: 'Traditional Mediterranean and Ayurvedic herbal medicine. EMA and WHO monographs confirm its use for GI disorders, colic, and galactagogue support.',
    },
    preparation: [
      { method: 'Aqueous Infusion (Fennel Tea)', desc: 'Steep 1.5–2.5 g freshly crushed seeds in 150–200 mL boiling water in a covered vessel for 10–15 minutes; covering prevents anethole volatilization.', bestFor: 'Dyspepsia, flatulence, GI spasms, bloating' },
      { method: 'Standardized Capsules', desc: '200–400 mg standardized dry extract or essential oil capsules, 2–3× daily.', bestFor: 'Consistent dosing; respiratory support; lactation' },
      { method: 'Pediatric Aqueous Drops', desc: 'Specialized ultra-diluted aqueous extracts for infants with colic, under medical supervision.', bestFor: 'Infantile colic' },
    ],
    symptoms: ['Digestive discomfort', 'Flatulence', 'Bloating', 'IBS symptoms'],
    relatedPlants: ['peppermint-dyspepsia', 'chamomile-dyspepsia'],
    references: [
      { text: 'European Medicines Agency (EMA). (2016). European Union herbal monograph on Foeniculum vulgare Miller, fructus. Committee on Herbal Medicinal Products (HMPC).' },
      { text: 'World Health Organization (WHO). (2007). WHO Monographs on Selected Medicinal Plants (Vol. 3). Geneva.' },
      { text: 'Badgujar, S. B., Patel, V. V., & Bandivdekar, A. H. (2014). Foeniculum vulgare Mill: A review of its botany, phytochemistry, pharmacology, contemporary application, and toxicology. BioMed Research International, 2014.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // DIGESTIVE › IBS (isolated IDs)
  // ══════════════════════════════════════════════════════════════════════

  'peppermint-ibs': {
    id: 'peppermint-ibs',
    name: 'Peppermint',
    nameAr: 'النعناع الفلفلي',
    latinName: 'Mentha × piperita L.',
    commonNames: ['Peppermint'],
    category: 'digestive',
    subcategory: 'ibs',
    isDemo: false,
    tags: ['Antispasmodic', 'IBS Relief', 'Carminative', 'Enteric-Coated', 'Level A Evidence'],
    image: '/images/Peppermint-IBS-main.jpg',
    shortDescription: 'One of the few herbal medicines with Level A clinical evidence for IBS; menthol acts as a natural calcium channel blocker on colonic smooth muscle delivering dose-dependent antispasmodic relief. Enteric-coated capsules are clinically superior to tea for targeting the colon directly.',
    description: 'Peppermint (Mentha x piperita; Family: Lamiaceae) contains menthol as the major component of its essential oil. Menthol acts as a natural calcium channel blocker on the smooth muscle of the colon, leading to a direct, dose-dependent antispasmodic effect. It provides symptomatic relief of abdominal pain, bloating, cramps, and gas associated with IBS. Administered as enteric-coated capsules to ensure the oil bypasses the stomach and is released directly in the intestines; also available as herbal tea for mild symptoms.',
    history: '',
    activeConstituents: [
      { name: 'Menthol', percentage: 'Major component of the essential oil', effect: 'Natural calcium channel blocker on colonic smooth muscle; direct, dose-dependent antispasmodic effect; provides relief of abdominal pain, bloating, cramps, and gas in IBS' },
    ],
    moa: [
      { title: 'Calcium Channel Blockade (Antispasmodic)', detail: 'Menthol acts as a natural calcium channel blocker on the smooth muscle of the colon, leading to a direct, dose-dependent antispasmodic effect. This reduces colonic hypermotility and relieves abdominal pain, bloating, cramps, and gas associated with IBS.' },
    ],
    uses: [
      'Symptomatic relief of abdominal pain, bloating, cramps, and gas associated with IBS',
    ],
    howToUse: [
      { method: 'Enteric-Coated Capsules (Preferred)', instruction: 'Administered as enteric-coated capsules to ensure the oil bypasses the stomach and is released directly in the intestines. 180 mg to 360 mg (approximately 0.2 mL to 0.4 mL) or 1–2 capsules, three times daily. Must be administered strictly in enteric-coated capsules.' },
      { method: 'Herbal Tea', instruction: 'Can be taken as a herbal tea for mild symptoms.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Generally safe and effective.' },
      { group: 'Pediatrics', notes: 'Use with extreme caution; avoid in infants and very young children due to the risk of respiratory depression and laryngospasm from menthol.' },
      { group: 'Pregnancy & Lactation', notes: 'Considered safe in standard culinary / food amounts; medical supervision is advised for concentrated medicinal oils.' },
      { group: 'Chronic Diseases', notes: 'Use with caution in patients with GERD or hiatal hernia (may relax the lower esophageal sphincter, exacerbating reflux).' },
    ],
    dosage: {
      standard: '180 mg to 360 mg (approximately 0.2 mL to 0.4 mL) or 1–2 capsules, taken three times daily. Must be administered strictly in enteric-coated capsules.',
      forms: [
        { form: 'Enteric-Coated Capsules', dose: '180–360 mg (0.2–0.4 mL), or 1–2 capsules, 3× daily. Must be enteric-coated , swallow whole, do not crush or chew. 30-60 min before meals on an stomach empty' },
        { form: 'Herbal Tea', dose: 'Can be used as an infusion for mild digestive relief. Note: Unlike enteric-coated capsules, liquid tea may relax the lower esophageal sphincter and trigger heartburn in susceptible individuals.' },
      ],
    },
    overdose: {
      symptoms: [
        'Dizziness, slow heartbeat (bradycardia), or rapid breathing',
        'Rare: ingestion of very high doses of menthol can lead to central nervous system toxicity, including ataxia or seizures',
      ],
      management: [
        'Supportive care, symptomatic treatment, and gastric lavage if necessary',
      ],
    },
    sideEffects: [
      'Heartburn (acid reflux)',
      'Nausea',
      'Rarely, perianal burning',
    ],
    contraindications: [
      'Gallstones',
      'Bile duct obstruction',
      'Severe liver damage',
      'Achlorhydria (the absence of stomach acid causes premature dissolution of the enteric coating in the stomach)',
    ],
    drugInteractions: [],
    storage: {
      forms: [
        { form: 'Enteric-Coated Capsules', storage: 'Store in a cool, dry place (< 25°C) away from direct sunlight.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Drinking regular peppermint tea is just as effective as enteric-coated capsules for IBS.', fact: 'Enteric-coated capsules are clinically superior for IBS because they target the colon directly without causing gastric irritation or heartburn. Peppermint oil is one of the few herbal medicines with high-quality clinical evidence (Level A recommendation) for short-term IBS symptom relief.' },
    ],
    marketedProducts: [
      { name: 'Colpermin Capsules', image: '/images/Peppermint-IBS-product.jpg' },
      { name: 'Mintec Capsules', image: '' },
      { name: 'Spasmo-Colpermin Capsules', image: '' },
    ],
    benefits: [
      { icon: 'spa', title: 'Level A Evidence for IBS', desc: 'One of the few herbal medicines with high-quality clinical evidence (Level A recommendation) for short-term IBS symptom relief.' },
      { icon: 'air', title: 'Colonic Smooth Muscle Relaxant', desc: 'Menthol\'s calcium channel blockade delivers direct, dose-dependent antispasmodic relief targeting the colon.' },
      { icon: 'bubble_chart', title: 'Relieves IBS Symptoms', desc: 'Provides symptomatic relief of abdominal pain, bloating, cramps, and gas associated with IBS.' },
    ],
    botanicalFacts: {
      origin: 'Hybrid species (Mentha aquatica × Mentha spicata). Family: Lamiaceae.',
      parts: 'Leaves and distilled volatile essential oil (Aetheroleum Menthae Piperitae).',
      history: 'EMA (2020) herbal monograph on Mentha x piperita aetheroleum confirms Level A recommendation for IBS symptom relief.',
    },
    preparation: [
      { method: 'Enteric-Coated Capsules', desc: 'Pharmaceutical-grade enteric-coated capsules ensuring oil release directly in the intestines, bypassing the stomach.', bestFor: 'IBS — clinically superior delivery for colonic targeting' },
      { method: 'Herbal Tea', desc: 'Aqueous infusion of dried peppermint leaves for mild symptomatic relief.', bestFor: 'Mild IBS symptoms' },
    ],
    symptoms: ['IBS symptoms', 'Abdominal cramps', 'Flatulence', 'Bloating'],
    relatedPlants: ['psyllium-ibs', 'ginger-ibs'],
    references: [
      { text: 'European Medicines Agency (EMA). (2020). European Union herbal monograph on Mentha x piperita L., aetheroleum. Committee on Herbal Medicinal Products (HMPC). EMA/HMPC/517721/2019.' },
      { text: 'Khanna, R., MacDonald, J. K., & Levesque, B. G. (2014). Peppermint oil for the treatment of irritable bowel syndrome: a systematic review and meta-analysis. Journal of Clinical Gastroenterology, 48(6), 505-512.' },
    ],
  },

  'ginger-ibs': {
    id: 'ginger-ibs',
    name: 'Ginger',
    nameAr: 'الزنجبيل',
    latinName: 'Zingiber officinale Roscoe',
    commonNames: ['Ginger'],
    category: 'digestive',
    subcategory: 'ibs',
    isDemo: false,
    tags: ['Prokinetic', 'Anti-emetic', 'IBS Relief', 'Anti-inflammatory', 'Digestive Aid'],
    image: '/images/Ginger-IBS-main.jpg',
    shortDescription: 'A powerful prokinetic agent that accelerates gastric emptying by stimulating the antrum and corpus of the stomach; gingerols and shogaols act as peripheral 5-HT3 receptor antagonists (anti-emetic) and modulate cholinergic/5-HT4 receptors to regulate intestinal motility, helping manage nausea, dyspepsia, and secondary IBS symptoms.',
    description: 'Ginger (Zingiber officinale; Family: Zingiberaceae) contains gingerols and shogaols as active ingredients. It acts as a peripheral 5-HT3 receptor antagonist providing anti-emetic effects, and modulates cholinergic/5-HT4 receptors to stimulate gastric emptying and regulate intestinal motility (prokinetic effect). It also possesses anti-inflammatory activities in the GI mucosa. Reduces nausea, improves digestive motility, and helps manage functional dyspepsia often co-existing with IBS.',
    history: '',
    activeConstituents: [
      { name: 'Gingerols', percentage: '', effect: 'Primary active compounds; peripheral 5-HT3 receptor antagonist (anti-emetic); modulate cholinergic/5-HT4 receptors for prokinetic and intestinal motility regulation; anti-inflammatory in GI mucosa' },
      { name: 'Shogaols', percentage: '', effect: 'Formed from gingerols upon drying or heating; contribute to anti-emetic, prokinetic, and anti-inflammatory activities' },
    ],
    moa: [
      { title: 'Peripheral 5-HT3 Receptor Antagonism (Anti-emetic)', detail: 'Gingerols and shogaols act as peripheral 5-HT3 receptor antagonists, providing potent anti-emetic effects by blocking serotonin-mediated emetic signals in the GI tract.' },
      { title: 'Cholinergic / 5-HT4 Modulation (Prokinetic)', detail: 'Modulates cholinergic and 5-HT4 receptors to stimulate gastric emptying and regulate intestinal motility, producing a prokinetic effect that accelerates gastric emptying by stimulating the antrum and corpus of the stomach.' },
      { title: 'Anti-inflammatory Activity in the GI Mucosa', detail: 'Possesses anti-inflammatory activities in the GI mucosa, reducing local mucosal inflammation contributing to functional dyspepsia and nausea associated with IBS.' },
    ],
    uses: [
      'Reduces nausea associated with IBS and functional dyspepsia',
      'Improves digestive motility via prokinetic effect (accelerates gastric emptying)',
      'Helps manage functional dyspepsia often co-existing with IBS',
    ],
    howToUse: [
      { method: 'Fresh Root', instruction: 'Used as fresh root in cooking or as an infusion.' },
      { method: 'Dried Powder', instruction: 'Dried powdered ginger in capsules or mixed in warm water.' },
      { method: 'Standardized Capsules', instruction: '1 g to 2 g of dried powder or standardized extract daily, divided into multiple doses.' },
      { method: 'Herbal Infusions', instruction: 'Prepared as a herbal tea from fresh or dried ginger root.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Safe for general consumption.' },
      { group: 'Pregnancy', notes: 'Commonly used for pregnancy-induced nausea and morning sickness. Must be strictly limited to a maximum of 1 g/day of dried extract under medical guidance.' },
      { group: 'Pediatrics', notes: 'Safe in culinary amounts; medicinal extracts should be restricted.' },
    ],
    dosage: {
      standard: '1 g to 2 g of dried powder or standardized extract daily, divided into multiple doses.',
      forms: [
        { form: 'Dried Powder / Standardized Capsules', dose: '1–2 g daily, divided into multiple doses.' },
      ],
    },
    overdose: {
      symptoms: [
        'Consuming more than 4 g daily significantly increases GI adverse effects',
        'Mild diarrhea, severe heartburn, and oral mucosal irritation',
      ],
      management: [
        'Discontinuation of use and supportive symptomatic treatment',
      ],
    },
    sideEffects: [
      'Heartburn',
      'Abdominal discomfort',
      'Eructation (burping)',
      'Gas',
    ],
    contraindications: [
      'Use with caution in patients with active gallstones due to cholagogue effects (bile stimulation)',
    ],
    drugInteractions: [
      'Oral anticoagulants (e.g., Warfarin) or antiplatelets (e.g., Aspirin, Clopidogrel): avoid or use with extreme caution — ginger inhibits thromboxane synthetase and may prolong bleeding time.',
    ],
    storage: {
      forms: [
        { form: 'Dried / Powdered Forms', storage: 'Keep in airtight containers.' },
        { form: 'Fresh Root', storage: 'Store in the refrigerator.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Ginger can "cure" IBS.', fact: 'Ginger is a powerful prokinetic agent that accelerates gastric emptying by stimulating the antrum and corpus of the stomach. However, it only helps manage specific secondary symptoms like bloating, nausea, and dyspepsia rather than correcting the underlying gut-brain axis disorder.' },
    ],
    marketedProducts: [
      { name: 'Ginger Root Capsules (e.g., Nature\'s Way)', image: '/images/Ginger-IBS-product.jpg' },
      { name: 'Standardized Ginger Syrups', image: '' },
      { name: 'Ginger Liquid Extracts', image: '' },
    ],
    benefits: [
      { icon: 'spa', title: 'Powerful Prokinetic Agent', desc: 'Accelerates gastric emptying by stimulating the antrum and corpus of the stomach, improving digestive motility.' },
      { icon: 'water_drop', title: 'Anti-emetic Relief', desc: 'Peripheral 5-HT3 receptor antagonism provides potent anti-emetic effects, reducing nausea associated with IBS.' },
      { icon: 'healing', title: 'GI Mucosal Anti-inflammatory', desc: 'Reduces local mucosal inflammation contributing to functional dyspepsia co-existing with IBS.' },
    ],
    botanicalFacts: {
      origin: 'Native to Southeast Asia. Family: Zingiberaceae.',
      parts: 'Rhizome (underground stem) — fresh, dried, or powdered.',
      history: 'Used for centuries in traditional medicine systems worldwide for digestive and anti-nausea properties. Clinically validated as a prokinetic agent.',
    },
    preparation: [
      { method: 'Standardized Capsules', desc: '1–2 g dried powder or standardized extract daily, divided into multiple doses.', bestFor: 'Nausea, dyspepsia, IBS secondary symptoms' },
      { method: 'Herbal Infusion (Tea)', desc: 'Fresh or dried ginger root steeped in hot water.', bestFor: 'Mild nausea, GI comfort' },
    ],
    symptoms: ['IBS symptoms', 'Nausea', 'Digestive discomfort', 'Bloating'],
    relatedPlants: ['peppermint-ibs', 'psyllium-ibs'],
    references: [
      { text: 'Bodagh, M. N., Maleki, I., & Hekmatdoost, A. (2019). Ginger in gastrointestinal disorders: A systematic review of clinical trials. Food Science & Nutrition, 7(1), 96-108.' },
      { text: 'Hu, M. L., et al. (2011). Effect of ginger on gastric motility and emptying of filled stomach in healthy humans. World Journal of Gastroenterology, 17(2), 143-148.' },
    ],
  },

  'psyllium-ibs': {
    id: 'psyllium-ibs',
    name: 'Psyllium',
    nameAr: 'سيلليوم / إسباغول',
    latinName: 'Plantago ovata Forssk.',
    commonNames: ['Psyllium', 'Ispaghula'],
    category: 'digestive',
    subcategory: 'ibs',
    isDemo: false,
    tags: ['Bulk-Forming', 'IBS Relief', 'Soluble Fiber', 'IBS-C', 'IBS-D'],
    image: '/images/Psyllium-IBS-main.jpg',
    shortDescription: 'First-line dietary management for IBS; psyllium mucilage absorbs water in the intestinal lumen forming a viscous gel that normalizes stool consistency — softening hard stool in IBS-C and adding bulk to loose stools in IBS-D. Soluble fiber is highly recommended while insoluble fiber (wheat bran) can exacerbate IBS.',
    description: 'Psyllium (Plantago ovata; Family: Plantaginaceae) contains mucilage (soluble, gel-forming polysaccharide fiber) as its active ingredient. It acts as a bulk-forming agent that absorbs water in the intestinal lumen to form a viscous gel, normalizing stool consistency: softening hard stool in IBS-C (Constipation) and delaying gastric emptying while adding bulk to loose stools in IBS-D (Diarrhea). First-line dietary management for optimizing and normalizing bowel habits in both constipation-predominant (IBS-C) and alternating IBS.',
    history: '',
    activeConstituents: [
      { name: 'Mucilage (Soluble, Gel-forming Polysaccharide Fiber)', percentage: '', effect: 'Bulk-forming agent; absorbs water in the intestinal lumen forming a viscous gel; normalizes stool consistency in both IBS-C and IBS-D' },
    ],
    moa: [
      { title: 'Bulk-Forming (Normalizes Stool Consistency)', detail: 'Psyllium mucilage absorbs water in the intestinal lumen to form a viscous gel. This action normalizes stool consistency: it softens hard stool in IBS-C (Constipation) and delays gastric emptying while adding bulk to loose stools in IBS-D (Diarrhea).' },
    ],
    uses: [
      'First-line dietary management for optimizing and normalizing bowel habits in both constipation-predominant (IBS-C) and alternating IBS',
    ],
    howToUse: [
      { method: 'Powder or Husks in Water / Juice', instruction: 'Mix powder or husks thoroughly into a full glass of water or juice (at least 250 mL), followed immediately by drinking an extra glass of water to ensure proper hydration.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults / Elderly', notes: 'Safe and highly recommended as a first-line structural intervention.' },
      { group: 'Pregnancy', notes: 'Completely safe; it acts locally and is the preferred, non-absorbable choice for pregnancy-induced constipation.' },
      { group: 'Pediatrics', notes: 'Safe for children over 6 years old under medical supervision.' },
    ],
    dosage: {
      standard: '5 g to 10 g taken 1 to 3 times daily. Initiate at low doses to minimize initial gas.',
      forms: [
        { form: 'Powder / Husks', dose: '5–10 g mixed in at least 250 mL water or juice, 1–3× daily. Start at low doses. Follow immediately with an extra glass of water.' },
      ],
    },
    overdose: {
      symptoms: [
        'Caused by excessive intake of dry bulk fiber without adequate fluid intake',
        'Severe abdominal cramping, severe bloating, flatulence, mechanical fecal impaction, or intestinal obstruction',
      ],
      management: [
        'Aggressive oral or intravenous hydration',
        'Immediate medical evaluation is required if mechanical bowel obstruction is suspected',
      ],
    },
    sideEffects: [
      'Transient flatulence during the first few days of initiation',
      'Abdominal distension and bloating during the first few days of initiation',
    ],
    contraindications: [
      'Intestinal obstruction',
      'Fecal impaction',
      'Difficulty swallowing (dysphagia)',
      'Esophageal narrowing',
      'Undiagnosed acute abdominal pain',
    ],
    drugInteractions: [
      'Psyllium mucilage can physically trap or delay the absorption of concomitantly administered medications (e.g., Digoxin, Warfarin, Iron supplements, Lithium). Clinical Rule: All other oral medications must be administered at least 2 hours before or 2 hours after taking psyllium.',
    ],
    storage: {
      forms: [
        { form: 'Powder / Husks', storage: 'Store in a dry environment in tightly sealed containers to prevent premature moisture absorption and clumping.' },
      ],
    },
    factsAndMyths: [
      { myth: 'Psyllium can be safely swallowed dry or in capsule form with minimal water.', fact: 'This is a dangerous practice that can cause acute esophageal obstruction or severe choking. Soluble fiber (Psyllium) is highly recommended and well-tolerated by IBS patients, whereas insoluble fiber (e.g., wheat bran) can severely exacerbate abdominal pain and bloating.' },
    ],
    marketedProducts: [
      { name: 'Metamucil', image: '/images/Psyllium-IBS-3.jpg' },
      { name: 'Fybogel', image: '/images/Psyllium-IBS-4.jpg' },
    ],
    benefits: [
      { icon: 'spa', title: 'First-Line IBS Management', desc: 'Highly recommended and well-tolerated by IBS patients as a first-line dietary intervention for normalizing bowel habits.' },
      { icon: 'healing', title: 'Normalizes Stool in Both IBS-C and IBS-D', desc: 'Viscous gel softens hard stool in IBS-C and adds bulk to loose stools in IBS-D — addressing both extremes.' },
      { icon: 'water_drop', title: 'Safe in Pregnancy', desc: 'Acts locally, non-absorbable, and is the preferred choice for pregnancy-induced constipation.' },
    ],
    botanicalFacts: {
      origin: 'Plantago ovata; Family: Plantaginaceae. Native to the Mediterranean region and western Asia.',
      parts: 'Seed husk (psyllium husk) containing mucilage polysaccharides.',
      history: 'Long-established use as a bulk-forming laxative and fiber supplement. ACG Clinical Guidelines (2021) recommend soluble fiber for IBS management.',
    },
    preparation: [
      { method: 'Powder / Husks in Water', desc: 'Mix 5–10 g thoroughly in at least 250 mL water or juice; drink immediately followed by an extra glass of water. Never swallow dry.', bestFor: 'IBS-C (constipation), IBS-D (diarrhea), alternating IBS' },
    ],
    symptoms: ['IBS symptoms', 'Constipation', 'Bowel irregularity'],
    relatedPlants: ['peppermint-ibs', 'ginger-ibs'],
    references: [
      { text: 'Lacy, B. E., Pimentel, M., Brenner, D. M., Chey, W. D., Keefer, L. A., Long, M. D., & Mearin, F. (2021). ACG Clinical Guideline: Management of Irritable Bowel Syndrome. American Journal of Gastroenterology, 116(1), 17-44.' },
      { text: 'Sweetman, S. C. (Ed.). (2014). Martindale: The Complete Drug Reference (38th ed.). London: Pharmaceutical Press. (Section on Bulk-forming Laxatives: Ispaghula).' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // UTI › ANTI-SEPTIC (isolated IDs)
  // ══════════════════════════════════════════════════════════════════════

  'uva-ursi-antiseptic': {
    id: 'uva-ursi-antiseptic',
    name: 'Uva Ursi',
    nameAr: 'عنب الدب',
    latinName: 'Arctostaphylos uva-ursi (L.) Spreng.',
    commonNames: ['Uva Ursi', 'Bearberry', 'Kinnikinnick'],
    category: 'uti',
    subcategory: 'anti-septic',
    isDemo: false,
    tags: ['Urinary Antiseptic', 'Antibacterial', 'Arbutin', 'Astringent', 'UTI Relief'],
    image: '/images/uva-ursi.jpg',
    images: ['/images/uva-ursi.jpg'],
    shortDescription: 'Uva ursi has been used for centuries in traditional European, Native American, and Indigenous medicinal systems as a urinary tract remedy. Historical records indicate that its leaves were widely employed to manage urinary discomfort, bladder inflammation, and symptoms associated with urinary tract infections. During the 18th and 19th centuries, Uva ursi became a recognized herbal urinary antiseptic in European herbal medicine due to its arbutin content, which is metabolized into antibacterial compounds in the urinary tract.',
    description: 'Antibacterial Action: Upon ingestion, arbutin is absorbed, metabolized in the liver, and excreted by the kidneys. In the urinary tract, it converts to free hydroquinone, which is a potent antibacterial agent against common urinary pathogens such as E. coli. Astringent Properties: The leaves contain tannins, which help shrink and tighten swollen, inflamed mucous membranes in the bladder and urethra, reducing discomfort. Diuretic Effect: Uva ursi acts as a mild diuretic, potentially promoting the flushing of bacteria and toxins from the urinary tract.',
    activeConstituents: [
      { name: 'Arbutin', detail: '' },
      { name: 'Tannins', detail: '' },
      { name: 'Methylarbutin', detail: '' },
    ],
    moa: [
      { title: 'Urine Alkalinity', detail: 'The hydrolysis of arbutin conjugates into active hydroquinone is most effective and efficient in an alkaline urinary environment (pH > 7).' },
      { title: 'Tannin Astringency', detail: 'Uva Ursi is also rich in tannins, which provide an astringent effect. These compounds help tone and soothe inflamed mucosal tissues in the urinary tract.' },
      { title: 'Diuretic Action', detail: 'The plant possesses mild diuretic properties, which increase urine flow and promote the flushing of bacteria out of the urinary system.' },
    ],
    uses: [
      'Antibacterial Action: Upon ingestion, arbutin is absorbed, metabolized in the liver, and excreted by the kidneys. In the urinary tract, it converts to free hydroquinone, which is a potent antibacterial agent against common urinary pathogens such as E. coli.',
      'Astringent Properties: The leaves contain tannins, which help shrink and tighten swollen, inflamed mucous membranes in the bladder and urethra, reducing discomfort.',
      'Diuretic Effect: Uva ursi acts as a mild diuretic, potentially promoting the flushing of bacteria and toxins from the urinary tract.',
      'Gastrointestinal Support: Historically, the astringent nature of the leaves was used to soothe chronic diarrhea, reduce excess phlegm, and manage sluggish digestion.',
      'Pain & Inflammation: Native American traditional medicine used leaf poultices to soothe joint and back pain, rheumatism, and skin rashes.',
      'Mouth & Gum Health: Leaf infusions were utilized as a natural mouthwash to treat canker sores and sore gums.',
    ],
    howToUse: [
      { method: 'Dried Leaf (Tea/Infusion)', instruction: 'Dried leaves are typically steeped in boiling water for 15 to 30 minutes.' },
      { method: 'Liquid Tincture', instruction: 'Liquid preparations are often mixed with water.' },
      { method: 'Standardized Extract', instruction: 'Capsules or tablets are available, often standardized for their arbutin content.' },
    ],
    suitableAgeGroups: [
      { group: 'Adults', notes: 'Use is generally recommended only for adults.' },
    ],
    dosage: {
      standard: 'Typical adult doses provide approximately 400–840 mg arbutin daily in divided doses for short-term use only (maximum 1 week unless medically supervised).',
    },
    overdose: {
      symptoms: [
        'Gastrointestinal: Severe stomach cramps, nausea, and vomiting (partially due to the herb\'s high tannin content).',
        'Neurological & Psychological: Tinnitus, acute irritability, delirium, and seizures.',
        'Cardiovascular & Respiratory: Difficulty breathing, shortness of breath, and cardiovascular collapse.',
        'Renal/Hepatic Risks: Liver and kidney damage are major risks associated with chronic high doses of hydroquinone.',
      ],
      management: [
        'Emergency Intervention: Ingesting very high doses can lead to severe symptoms including delirium, convulsions, and cardiovascular collapse. Seek immediate emergency medical care.',
        'Decontamination: If the overdose was recent, medical professionals may employ activated charcoal or gastric lavage.',
        'Supportive Care: Provide intravenous fluids to protect the kidneys (nephrotoxicity) and liver (hepatotoxicity), and administer antiemetics for nausea and vomiting.',
      ],
    },
    sideEffects: [
      'Gastrointestinal Distress: Nausea, vomiting, and stomach cramps are frequent, usually caused by the plant\'s high tannin levels.',
      'Urine Discoloration: It is common and harmless for urine to turn a greenish-brown color when taking uva ursi.',
      'Mild Symptoms: In some cases, users might experience insomnia or irritability.',
    ],
    contraindications: [
      'Pregnancy and Lactation: Uva ursi can induce uterine contractions and may harm a developing fetus.',
      'Pediatrics: It is generally not recommended for children under 12 years old without direct medical supervision.',
      'Kidney and Liver Disease: People with existing renal or hepatic disorders, as well as those with acute kidney infections, must avoid this herb.',
      'Immunocompromised patients: Use is typically advised against without medical supervision.',
    ],
    drugInteractions: [
      'Drugs and Foods that Acidify Urine: Uva ursi\'s antiseptic mechanism requires slightly alkaline urine to properly convert hydroquinone into its active, bacteria-killing form. Acidifying agents hinder this conversion, severely reducing the herb\'s effectiveness. Examples: Vitamin C, cranberry juice, orange juice, and other citrus fruits/juices.',
      'The Interaction: Uva ursi has mild diuretic properties, which can cause the body to retain or\n' +
      'build up dangerous levels of lithium in the blood, potentially leading to toxicity.\n' +
      'Examples: Drugs used to treat bipolar disorder (e.g., Lithobid, Eskalith).',
      'Iron Supplements: Uva ursi leaves contain a high concentration of tannins. Tannins can bind to iron in the digestive tract, decreasing the absorption and effectiveness of iron supplements.',
      'Blood Pressure Medications: Because uva ursi can act as a diuretic, taking it alongside blood pressure medications may cause blood pressure to drop too low.',
    ],
    storage: {
      forms: [
        { form: 'All Uva Ursi Forms', instructions: 'Store Uva Ursi in a cool, dry place away from direct sunlight (under 25°C) and keep out of reach of children.' },
      ],
    },
    marketedProducts: [
      { name: 'NusaPure Uva Ursi', image: '/images/uva-ursi-2.jpeg' },
      { name: 'SOLARAY Uva Ursi Leaf', image: '/images/uva-ursi-3.jpeg' },
    ],
    benefits: [],
    botanicalFacts: {
      family: 'Ericaceae (Heath Family)',
      activeCompounds: 'Arbutin, tannins, methylarbutin',
      clinicalEvidence: 'Scientific evidence supports its use for the symptomatic relief of mild, uncomplicated lower urinary tract infections (UTIs), but the evidence is limited and not strong enough to replace antibiotics in confirmed bacterial infections.',
    },
    relatedPlants: ['cranberry-antiseptic', 'dandelion', 'parsley'],
    references: [
      { text: 'PMC — Uva Ursi pharmacological review.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12384774' },
      { text: 'EDAE Egypt — Arctostaphylos uva-ursi monograph.', url: 'https://dev.edaegypt.gov.eg/media/krehbcjl/arctostaphylos-uva-ursi_1.pdf' },
      { text: 'WebMD — Uva Ursi supplement information.', url: 'https://www.webmd.com/vitamins/ai/ingredientmono-350/uva-ursi' },
    ],
  },

  'cranberry-antiseptic': {
    id: 'cranberry-antiseptic',
    name: 'Cranberry',
    nameAr: 'التوت البري',
    latinName: 'Vaccinium macrocarpon Aiton',
    commonNames: ['Cranberry', 'American Cranberry'],
    category: 'uti',
    subcategory: 'anti-septic',
    isDemo: false,
    tags: ['UTI Prevention', 'Anti-adhesion', 'Proanthocyanidins', 'Antioxidant', 'Urinary Health'],
    image: '/images/cranberry-antiseptic.jpg',
    images: ['/images/cranberry-antiseptic.jpg'],
    shortDescription: 'Cranberry (Vaccinium macrocarpon) has been used for urinary tract disorders for many decades. During the early twentieth century, cranberry juice was widely recommended as a urinary antiseptic',
    description: 'Cranberry is utilized as a prophylactic agent for prevention of recurrent urinary tract infections (UTIs). Supports urinary tract health by preventing adhesion of uropathogenic Escherichia coli to the urinary epithelium. While cranberry is widely recognized to help prevent UTIs, evidence indicates it is not effective for treating an active infection.',
    activeConstituents: [
      { name: 'A-type Proanthocyanidins (PACs)', detail: '' },
      { name: 'Anthocyanins', detail: 'antioxidants' },
      { name: 'Flavonols (Quercetin)', detail: '' },
      { name: 'Phenolic Acids', detail: '' },
      { name: 'Ursolic Acid (Triterpenoids)', detail: '' },
    ],
    moa: [
      { title: 'Inhibition of E. coli Adhesion (Anti-Adhesion Activity)', detail: 'The active compounds, specifically A-type proanthocyanidins (PACs), interfere with the ability of P-fimbriated Escherichia coli (E. coli) to attach to the epithelial cells lining the urinary tract.' },
      { title: 'Structural Disruption of Fimbriae', detail: 'Cranberry constituents may change the conformation of surface molecules on E. coli and interfere with fimbrial adhesion mechanisms.' },
      { title: 'Fructose Inhibition', detail: 'Fructose present in cranberries acts in conjunction with PACs to inhibit the adhesion of type 1 pili to the bladder wall.' },
      { title: 'Direct Antibacterial and Anti-inflammatory Effects', detail: 'Beyond adhesion prevention, components of cranberry demonstrate direct antibacterial activity against various uropathogens and possess antioxidant properties that reduce inflammation caused by infections.' },
      { title: 'Modification of Urinary Environment', detail: 'Metabolites from ingested cranberry, when excreted in urine, decrease the adherence capacity of E. coli and other Gram-negative bacteria to uroepithelial cells.' },
    ],
    uses: [
      'Cranberry is utilized as a prophylactic agent for prevention of recurrent urinary tract infections (UTIs).',
      'Supports urinary tract health by preventing adhesion of uropathogenic Escherichia coli to the urinary epithelium.',
      'Gastrointestinal Health: The PACs in cranberries can inhibit the adhesion of Helicobacter pylori to gastric mucus, helping to manage or reduce the risk of stomach ulcers and related infection.',
      'Cardiovascular Protection: Regular consumption is associated with lower blood pressure, improved vascular function, and decreased LDL oxidation, which can help manage cardiovascular risks.',
      'Oral Health: Cranberry extracts can help prevent the adhesion of bacteria that cause plaque formation and dental caries.',
    ],
    howToUse: [
      { method: 'Juice Formulation', instruction: 'Choose 100% pure, unsweetened cranberry juice to minimize added sugar.' },
      { method: 'Alternative Forms', instruction: 'Dried cranberries can be added to yogurt or salads, and fresh cranberries can be added to smoothies.' },
      { method: 'Capsules or Tablets', instruction: 'If you take supplements, follow the specific dosing instructions on the packaging.' },
      { method: 'Timing', instruction: 'Consume cranberry products in the morning and evening to maintain a consistent bacterial anti-adhesion effect.' },
    ],
    suitableAgeGroups: [
      { group: 'Children (2 years and older)', notes: 'Cranberry juice or cranberry products may be used in age-appropriate amounts under adult supervision.' },
      { group: 'Adolescents and Adults', notes: 'Commonly used for prevention of recurrent urinary tract infections (UTIs).' },
      { group: 'Pregnant Women', notes: 'Generally considered safe in moderate dietary amounts and commonly used for urinary tract health support.' },
      { group: 'Elderly Patients', notes: 'May be used for recurrent UTI prevention with monitoring for potential drug interactions (especially Warfarin).' },
    ],
    dosage: {
      forms: [
        { form: 'Cranberry Juice (100% pure, unsweetened)', dose: '240–300 mL taken 1–3 times daily.' },
        { form: 'Cranberry Capsules/Tablets', dose: 'Commonly standardized to provide 36 mg of A-type proanthocyanidins (PACs) daily, the amount most frequently studied for prevention of recurrent UTIs.' },
        { form: 'Dried Cranberry Extract', dose: 'Typically 300–400 mg orally, twice daily.' },
      ],
    },
    overdose: {
      symptoms: [
        'Gastrointestinal Distress: The most common symptoms are stomach cramps, diarrhea, nausea, and vomiting.',
        'Kidney Stones: Long-term consumption of high doses can increase the risk of developing calcium-oxalate kidney stones.',
      ],
      management: [
        'Immediately stop taking cranberry supplements or drinking large amounts of juice.',
        'Seek medical advice.',
        'If symptoms are mild (e.g., mild diarrhea, stomach upset), increase fluid intake to ensure hydration.',
        'Keep watch for signs of worsening dehydration, severe diarrhea, or severe abdominal pain, which require immediate medical attention.',
      ],
    },
    sideEffects: [
      'Gastrointestinal Distress: Excessive intake of cranberry juice or supplements can lead to diarrhea, nausea, or stomach cramping.',
      'Kidney Stones: Cranberries contain high amounts of oxalates, which may increase the risk of kidney stones in susceptible individuals if consumed in high amounts.',
      'Blood Sugar Spikes: Commercial cranberry juice can be very high in added sugar, which may cause blood sugar issues in people with diabetes.',
    ],
    contraindications: [
      'Hypersensitivity or Allergy: Contraindicated in individuals with known allergy to cranberry or related plants.',
      'History of Kidney Stones: Cranberry contains oxalates, which may increase the risk of calcium oxalate kidney stone formation in susceptible individuals.',
      'Patients Taking Warfarin or Other Anticoagulants: Use cautiously due to potential enhancement of anticoagulant effects and increased bleeding risk.',
      'Atrophic Gastritis/Hypochlorhydria: Those with low stomach acid or gastric inflammation should use caution, as cranberry may alter gastric pH.',
    ],
    drugInteractions: [
      'Warfarin: The most significant interaction is with warfarin, where cranberry can enhance its anticoagulant effect, increasing bleeding risks.',
      'Blood Pressure/Cholesterol Medications: There is potential for increased effects of some medications, such as atorvastatin (cholesterol) and nifedipine (blood pressure).',
      'Iron Supplements: The polyphenol and tannin content of cranberry may reduce iron absorption when taken simultaneously.',
      'Acidifying Agents / Vitamin C Supplements: Excessive urinary acidification may influence urinary tract conditions and alter the urinary environment.',
      'Diabetes Medications: Sweetened cranberry juice products may affect blood glucose control in patients.',
    ],
    storage: {
      forms: [
        { form: 'Fresh Cranberries', instructions: 'Store in a refrigerator at 4°C and use within 2–4 weeks.' },
        { form: 'Dried Cranberry Products', instructions: 'Keep in a cool, dry place away from moisture and direct sunlight in a tightly closed container.' },
        { form: 'Cranberry Juice', instructions: 'Refrigerate after opening and consume according to the manufacturer\'s instructions.' },
        { form: 'Cranberry Capsules/Tablets', instructions: 'Store at room temperature (15–25°C) in a dry place away from heat, humidity, and direct light.' },
      ],
    },
    marketedProducts: [
      { name: 'Modern Cranberry Dietary Supplement', image: '/images/Cranberry Ema Pharm (30 Capsules).png' },
      { name: 'Cranberry Ema Pharm (30 Capsules)', image: '/images/Modern Cranberry Dietary Supplement.png' },
    ],
    benefits: [],
    botanicalFacts: {
      family: 'Ericaceae',
      activeCompounds: 'A-type proanthocyanidins (PACs), anthocyanins (antioxidants), flavonols (quercetin), phenolic acids, and ursolic acid (triterpenoids)',
      clinicalEvidence: 'Scientific evidence supports that cranberry is an effective preventative measure against urinary tract infections (UTIs), but it is not an antiseptic or a curative treatment for an active infection.',
    },
    relatedPlants: ['uva-ursi-antiseptic', 'dandelion', 'parsley'],
    references: [
      { text: 'PMC — Cranberry and UTI prevention.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7025796/' },
      { text: 'ScienceDirect — Cranberry polyphenols and health.', url: 'https://www.sciencedirect.com/science/article/pii/S2405456924001226' },
      { text: 'PubMed — Cranberry supplementation for recurrent UTIs.', url: 'https://pubmed.ncbi.nlm.nih.gov/37068952/' },
    ],
  },

};
// ══════════════════════════════════════════════════════════════════════════

export const CATEGORIES = [
  {
    id: 'womens-health',
    name: "Women's Health",
    icon: 'favorite',
    description: 'Botanical allies supporting hormonal balance, cycles, and vitality.',
    longDescription: "A thoughtful collection of plants that have supported women's health across cultures and centuries. These botanicals address hormonal balance, menstrual comfort, and the transitions of a woman's life with gentle, plant-based wisdom.",
    tags: ['Adaptogen', 'Nervine'],
    color: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    image: '/images/categories/cat-womens.jpeg',
    subcategories: [
      { id: 'menstrual-health',   name: 'Menstrual Health',              description: 'Support for cycle regulation and hormonal balance.',    image: '/images/categories/sub-menstrual.jpeg',    plants: ['ginger-menstrual', 'cinnamon-menstrual', 'dill-seed-menstrual'] },
      { id: 'pregnancy-support',  name: 'Pregnancy Support Plants',       description: 'Gentle, nourishing botanicals for expectant mothers.',  image: '/images/categories/sub-pregnancy.jpeg',    plants: ['ginger-pregnancy', 'psyllium-pregnancy', 'peppermint-pregnancy', 'cranberry-pregnancy'] },
      { id: 'breast-feeding',     name: 'Breast Feeding Support Plants',  description: 'Herbs to support lactation and nursing.',               image: '/images/categories/sub-breastfeeding.jpeg', plants: ['fenugreek-breastfeeding', 'fennel-breastfeeding', 'moringa-breastfeeding'] },
      { id: 'hair-care',          name: 'Hair Care Plants',               description: 'Botanical extracts for scalp health and hair vitality.', image: '/images/categories/sub-hair-care.jpeg',    plants: ['aloe-vera-hair', 'rocket', 'rosemary-hair', 'garlic'] },
      { id: 'skin-care',          name: 'Skin Care Plants',               description: 'Botanicals for a radiant, healthy complexion.',          image: '/images/categories/sub-skin-care.jpeg',    plants: ['aloe-vera', 'licorice', 'tea-tree', 'green-tea'] },
    ],
  },
  {
    id: 'digestive',
    name: 'Digestive Health',
    icon: 'nutrition',
    description: 'Soothe and optimize the digestive system with bitter tonics and carminatives.',
    longDescription: 'Support your digestive wellness with time-tested herbal preparations. From bitter tonics that stimulate digestive enzymes to carminatives that ease discomfort, these plants support every aspect of healthy digestion and nutrient absorption.',
    tags: ['Digestive', 'Culinary'],
    color: 'bg-tertiary-fixed text-on-tertiary-fixed',
    image: '/images/categories/cat-digestive.jpeg',
    subcategories: [
      { id: 'constipation-relief', name: 'Constipation Relief Plants', description: 'Support healthy bowel motility and regularity.',         image: '/images/categories/sub-constipation.jpeg', plants: ['senna-constipation', 'psyllium-constipation', 'castor-constipation'] },
      { id: 'diarrhea-support',    name: 'Diarrhea Support Plants',    description: 'Astringent herbs to soothe and settle the tract.',      image: '/images/categories/sub-diarrhea.jpeg',     plants: ['peppermint-diarrhea', 'chamomile-diarrhea', 'ginger-diarrhea', 'fennel-diarrhea'] },
      { id: 'dyspepsia',           name: 'Dyspepsia',                  description: 'Herbal relief for indigestion and stomach discomfort.', image: '/images/categories/sub-dyspepsia.jpeg',    plants: ['peppermint-dyspepsia', 'chamomile-dyspepsia', 'fennel-dyspepsia'] },
      { id: 'ibs',                 name: 'IBS',                        description: 'Calming carminatives to manage IBS symptoms.',          image: '/images/categories/sub-ibs.jpeg',          plants: ['peppermint-ibs', 'ginger-ibs', 'psyllium-ibs'] },
    ],
  },
  {
    id: 'respiratory',
    name: 'Respiratory Health',
    icon: 'air',
    description: 'Support clear airways and healthy lung function with herbal allies.',
    longDescription: 'Breathe easier with botanical support for your respiratory system. These time-honored herbs help maintain clear airways, soothe irritated mucous membranes, and support overall lung health through seasonal challenges.',
    tags: ['Medicinal', 'Nervine'],
    color: 'bg-primary-fixed text-on-primary-fixed',
    image: '/images/categories/cat-respiratory.jpeg',
    subcategories: [
      { id: 'cold',      name: 'Cold',      description: 'Herbs to ease cold symptoms and speed recovery.',           image: '/images/categories/sub-cold.jpeg',      plants: ['eucalyptus', 'ginger-cold', 'echinacea-cold'] },
      { id: 'rhinitis',  name: 'Rhinitis',  description: 'Botanical support for nasal inflammation and runny nose.',  image: '/images/categories/sub-rhinitis.jpeg',  plants: ['butterbur', 'stinging-nettle', 'black-seed-rhinitis'] },
      { id: 'sinusitis', name: 'Sinusitis', description: 'Clear congestion and sinus pressure naturally.',             image: '/images/categories/sub-sinusitis.jpeg', plants: ['pelargonium', 'eucalyptus', 'black-elderberry'] },
      { id: 'cough',     name: 'Cough',     description: 'Soothing herbs for irritated throats and airways.',         image: '/images/categories/sub-cough.jpeg',     plants: ['guava', 'anise', 'thyme', 'licorice-cough'] },
    ],
  },
  {
    id: 'immunity',
    name: 'Immunity',
    icon: 'shield',
    description: 'Fortify your natural defenses with potent botanical extracts.',
    longDescription: "Discover nature's powerful defenders. This curated selection of medicinal plants has been traditionally utilized to fortify the body's natural defenses, offering a holistic approach to maintaining wellness and vitality throughout the changing seasons.",
    tags: ['Medicinal', 'Adaptogen'],
    color: 'bg-secondary-fixed text-on-secondary-fixed',
    image: '/images/categories/cat-immunity.jpeg',
    subcategories: [
      { id: 'immune-boosting',   name: 'Immune Boosting Plants',   description: 'Deep immune system support with powerful botanicals.', image: '/images/categories/sub-immune-boosting.jpeg',    plants: ['echinacea-immunity', 'black-seed-immunity', 'astragalus-immunity'] },
      { id: 'anti-inflammatory', name: 'Anti-Inflammatory Plants', description: 'Modulate the inflammatory response naturally.',       image: '/images/categories/sub-anti-inflammatory.jpeg', plants: ['turmeric-immunity', 'rosemary-immunity', 'garlic-immunity'] },
    ],
  },
  {
    id: 'uti',
    name: 'Urinary Tract Health',
    icon: 'water_drop',
    description: 'Botanical support for urinary tract infections, diuresis, and prostate health.',
    longDescription: 'A specialized collection of medicinal plants addressing urinary tract wellness. From antiseptic herbs that fight urinary pathogens, to aquaretic diuretics that flush the urinary tract, to evidence-based phytomedicines for benign prostatic hyperplasia: these botanicals offer validated support for urological health.',
    tags: ['Diuretic', 'Antiseptic', 'Medicinal'],
    color: 'bg-primary-fixed text-on-primary-fixed',
    image: '/images/categories/cat-urinary.jpeg',
    subcategories: [
      { id: 'anti-septic', name: 'Anti-Septic Plants',  description: 'Antimicrobial botanicals for urinary tract antisepsis.',         image: '/images/categories/sub-antiseptic.jpeg', plants: ['uva-ursi-antiseptic', 'cranberry-antiseptic'] },
      { id: 'diuretics',   name: 'Diuretic Plants',     description: 'Aquaretic herbs that flush the urinary tract naturally.',        image: '/images/categories/sub-diuretics.jpeg',  plants: ['dandelion', 'parsley', 'halfabar'] },
      { id: 'bph',         name: 'BPH Support Plants',  description: 'Phytomedicines for benign prostatic hyperplasia management.',    image: '/images/categories/sub-bph.jpeg',        plants: ['saw-palmetto', 'stinging-nettle-root', 'pygeum'] },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════════════
// SYMPTOM TAG MAP
// ══════════════════════════════════════════════════════════════════════════

export const SYMPTOM_TAG_MAP = {
  'Skin irritation':         ['aloe-vera', 'tea-tree', 'licorice', 'green-tea'],
  'Burns':                   ['aloe-vera'],
  'Dry skin':                ['aloe-vera', 'licorice', 'green-tea'],
  'Acne':                    ['aloe-vera', 'tea-tree', 'green-tea', 'licorice'],
  'Wound healing':           ['aloe-vera', 'tea-tree'],
  'Fungal infection':        ['tea-tree'],
  'Dandruff':                ['tea-tree', 'rosemary', 'garlic'],
  'Minor wounds':            ['tea-tree', 'aloe-vera'],
  'Hyperpigmentation':       ['licorice', 'green-tea'],
  'Dark spots':              ['licorice', 'green-tea'],
  'Rosacea':                 ['licorice', 'green-tea'],
  'Eczema':                  ['licorice', 'aloe-vera'],
  'Cough':                   ['licorice', 'lemon', 'eucalyptus'],
  'Sore throat':             ['licorice', 'lemon', 'eucalyptus'],
  'Hair loss':               ['rosemary', 'rocket', 'garlic'],
  'Scalp issues':            ['rosemary', 'tea-tree', 'garlic', 'rocket'],
  'Hair breakage':           ['rocket', 'garlic'],
  'Memory':                  ['rosemary'],
  'Constipation':            ['senna-constipation', 'psyllium-constipation', 'castor-constipation'],
  'Bowel irregularity':      ['senna-constipation', 'psyllium-constipation', 'castor-constipation'],
  'Diarrhea':                ['peppermint-diarrhea', 'chamomile-diarrhea', 'ginger-diarrhea', 'fennel-diarrhea'],
  'IBS symptoms':            ['peppermint-ibs', 'ginger-ibs', 'psyllium-ibs'],
  'Abdominal cramps':        ['peppermint-diarrhea', 'chamomile-diarrhea', 'ginger-diarrhea', 'fennel-diarrhea'],
  'Gastritis':               ['chamomile-dyspepsia', 'licorice'],
  'Digestive discomfort':    ['rosemary', 'fennel-dyspepsia', 'peppermint-dyspepsia', 'chamomile-dyspepsia'],
  'Low milk supply':         ['fenugreek-breastfeeding', 'fennel-breastfeeding', 'moringa-breastfeeding'],
  'Infant colic':            ['fennel-breastfeeding'],
  'Bloating':                ['fennel-diarrhea'],
  'Menstrual cramps':        ['ginger-menstrual', 'dill-seed-menstrual', 'cinnamon-menstrual'],
  'Nausea':                  ['lemon', 'ginger-ibs'],
  'Vomiting':                ['lemon'],
  'Cold symptoms':           ['lemon', 'eucalyptus', 'echinacea'],
  'Joint pain':              ['stinging-nettle'],
  'Heavy bleeding':          ['cinnamon-menstrual'],
  'PCOS':                    ['cinnamon-menstrual'],
  'Rhinorrhea':              ['butterbur', 'stinging-nettle'],
  'Sneezing':                ['butterbur', 'stinging-nettle'],
  'Nasal congestion':        ['butterbur', 'stinging-nettle', 'eucalyptus'],
  'Hay fever':               ['butterbur', 'stinging-nettle'],
  'Productive cough':        ['eucalyptus', 'licorice'],
  'Sinus stuffiness':        ['eucalyptus'],
  'Reduced immunity':        ['echinacea', 'black-seed', 'astragalus'],
  'Asthma':                  ['black-seed'],
  'High blood sugar':        ['black-seed', 'fenugreek'],
  'High cholesterol':        ['black-seed', 'fenugreek'],
  'Chronic fatigue':         ['astragalus'],
  'Recurrent infections':    ['echinacea', 'astragalus'],
  'Joint pain':              ['turmeric', 'rosemary', 'stinging-nettle'],
  'Chronic inflammation':    ['turmeric', 'rosemary', 'garlic'],
  'Arthritis':               ['turmeric', 'stinging-nettle'],
  'Liver support':           ['turmeric', 'dandelion'],
  'Oral infections':         ['clove', 'tea-tree'],
  'Toothache':               ['clove'],
  'Gum inflammation':        ['clove', 'tea-tree'],
  'Hemorrhoid symptoms':     ['witch-hazel'],
  'Fluid retention':         ['dandelion', 'parsley'],
  'Kidney stones':           ['parsley', 'halfabar', 'dandelion'],
  'Ureteric colic':          ['halfabar'],
  'Renal colic':             ['halfabar'],
  'Urinary tract infections':['cranberry-antiseptic', 'uva-ursi-antiseptic', 'parsley'],
  'Recurrent UTIs':          ['cranberry-antiseptic', 'uva-ursi-antiseptic'],
  'Weak urine stream':       ['saw-palmetto', 'pygeum', 'stinging-nettle-root'],
  'Urinary hesitancy':       ['saw-palmetto', 'pygeum', 'stinging-nettle-root'],
  'Nocturia':                ['saw-palmetto', 'pygeum', 'stinging-nettle-root'],
  'BPH symptoms':            ['saw-palmetto', 'pygeum', 'stinging-nettle-root'],
  'Bronchitis':              ['thyme', 'anise', 'licorice', 'eucalyptus'],
  'Sinusitis':               ['pelargonium', 'eucalyptus', 'black-elderberry'],
  'Influenza':               ['black-elderberry', 'echinacea', 'ginger'],
  'Productive cough':        ['thyme', 'anise', 'eucalyptus', 'licorice', 'guava'],
};
