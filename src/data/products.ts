import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'velvet-glow-foundation',
    name: 'Velvet Glow Liquid Foundation',
    tagline: 'Weightless medium-to-full coverage with a second-skin satin finish.',
    category: 'makeup',
    subcategory: 'Foundation',
    price: 2199,
    originalPrice: 2699,
    rating: 4.9,
    reviewsCount: 342,
    images: [
      '/transparent-products/velvet-glow-foundation.png',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    description: 'An ultra-breathable, serum-infused foundation that melts effortlessly into the skin. Formulated with fermented botanicals and niacinamide to blur imperfections, balance oil, and maintain a radiant, soft-matte veil for up to 16 hours.',
    benefits: [
      'Serum-infused formula with 2% Niacinamide & Hyaluronic Acid',
      'Non-comedogenic, breathable 16-hour wear',
      'Blurring micro-pigments resist creasing and oxidation',
      'Dermatologically tested on sensitive and acne-prone skin'
    ],
    ingredients: 'Aqua/Water/Eau, Cyclopentasiloxane, Dimethicone, Niacinamide, Glycerin, Titanium Dioxide, Squalane, Camellia Sinensis Leaf Extract, Sodium Hyaluronate, Tocopherol (Vitamin E), Polyglyceryl-4 Isostearate, Silica, Phenoxyethanol, Ethylhexylglycerin.',
    howToUse: 'Dispense 1-2 pumps onto the back of your hand. Gently dot across forehead, cheeks, and chin. Blend outwards using a damp sponge or dense buffer brush for a seamless, radiant veil.',
    skinType: ['All', 'Dry', 'Combination', 'Oily', 'Sensitive', 'Normal'],
    concerns: ['Uneven Tone', 'Texture', 'Glow', 'Redness'],
    shades: [
      { name: '01 Alabaster (Fair Cool)', hex: '#F9EAD9' },
      { name: '02 Vanilla (Fair Warm)', hex: '#F4DECB' },
      { name: '03 Cashmere (Light Neutral)', hex: '#ECCDB6' },
      { name: '04 Honey Amber (Medium Warm)', hex: '#DDB291' },
      { name: '05 Spiced Toffee (Tan Neutral)', hex: '#C28E66' },
      { name: '06 Rich Espresso (Deep Warm)', hex: '#875336' }
    ],
    badge: 'Best Seller',
    inStock: true,
    volume: '30 ml / 1.0 fl. oz.',
    isBestSeller: true,
    isNewArrival: false
  },
  {
    id: 'dew-drop-serum',
    name: 'Dew Drop Polyglutamic Peptide Serum',
    tagline: '4x more hydrating than Hyaluronic Acid for bouncy, glass skin.',
    category: 'skincare',
    subcategory: 'Serums',
    price: 1799,  
    originalPrice: 2099,
    rating: 5.0,
    reviewsCount: 518,
    images: [
      '/transparent-products/dew-drop-serum.png',
      'https://images.unsplash.com/photo-1608248597359-58673f1d82f7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1608248597359-58673f1d82f7?q=80&w=1000&auto=format&fit=crop',
    description: 'Our award-winning hydrating elixir combines ultra-pure Polyglutamic Acid, multi-molecular Peptides, and Damask Rose Water. Instantly quenches parched skin, strengthens the barrier, and creates the quintessential dewy bounce.',
    benefits: [
      'Instant 240% hydration boost verified in clinical panels',
      'Multi-molecular peptides firm and plump fine expression lines',
      '100% organic Damask Rose hydrosol calms redness and reactive skin',
      'Silky, non-sticky primer base under makeup'
    ],
    ingredients: 'Rosa Damascena Flower Water, Polyglutamic Acid, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Sodium Hyaluronate Crosspolymer, Tremella Fuciformis (Mushroom) Extract, Centella Asiatica Extract, Panthenol, Betaine, Allantoin.',
    howToUse: 'Apply 3-4 drops onto cleansed, slightly damp skin morning and evening. Pat gently with fingertips until absorbed before applying moisturizer or SPF.',
    skinType: ['All', 'Dry', 'Sensitive', 'Normal', 'Combination'],
    concerns: ['Hydration', 'Glow', 'Anti-Aging', 'Barrier Repair'],
    badge: 'Award Winner',
    inStock: true,
    volume: '50 ml / 1.7 fl. oz.',
    isBestSeller: true,
    isNewArrival: false
  },
  {
    id: 'rose-silk-lip-tint',
    name: 'Rose Silk Nourishing Lip Elixir & Tint',
    tagline: 'Hydrating cushion tint infused with Bulgarian rose oil and meadowfoam.',
    category: 'makeup',
    subcategory: 'Lip Care',
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviewsCount: 284,
    images: [
      '/transparent-products/rose-silk-lip-tint.png',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599732487372-b7b51b32f228?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1000&auto=format&fit=crop',
    description: 'A sumptuous conditioning lip tint that cushions lips with juicy, mirror-like shine and a buildable wash of romantic color. Infused with cold-pressed rosehip and botanical sterols.',
    benefits: [
      'Rich in antioxidants to smooth fine lip lines',
      'Non-sticky glass cushion texture',
      'Buildable petal-sheen tint that stays for hours',
      'Vanilla bean and cold-pressed botanical aroma'
    ],
    ingredients: 'Diisostearyl Malate, Limnanthes Alba (Meadowfoam) Seed Oil, Rosa Canina (Rosehip) Fruit Oil, Butyrospermum Parkii (Shea) Butter, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol, Natural Flavor/Aroma, CI 77491, CI 15850.',
    howToUse: 'Glide the doe-foot applicator directly onto bare lips. Layer for intensified pigment or dab over your favorite lip pencil for a plump ombre finish.',
    skinType: ['All'],
    concerns: ['Dryness', 'Texture'],
    shades: [
      { name: 'Petal Nude (Soft Rosewood)', hex: '#C77D74' },
      { name: 'Berry Glaze (Mauve Plum)', hex: '#8F4350' },
      { name: 'Amber Glow (Warm Terracotta)', hex: '#B86146' },
      { name: 'Cherry Aura (Rich Ruby)', hex: '#9E2A3A' },
      { name: 'Opal Mist (Clear High-Shine)', hex: '#EBE2DC' }
    ],
    badge: 'Best Seller',
    inStock: true,
    volume: '6 ml / 0.2 fl. oz.',
    isBestSeller: true,
    isNewArrival: false
  },
  {
    id: 'cloud-skin-moisturizer',
    name: 'Cloud Skin Ceramide Barrier Soufflé',
    tagline: 'Whipped cloud cream that repairs the lipid barrier in 60 minutes.',
    category: 'skincare',
    subcategory: 'Moisturizers',
    price: 1899,
    originalPrice: 2299,
    rating: 4.9,
    reviewsCount: 412,
    images: [
      '/transparent-products/cloud-skin-moisturizer.png',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
    description: 'A featherlight, airy moisturizer packed with 5 essential ceramides, squalane, and oat beta-glucan. It melts upon contact to flood skin with non-greasy lipid nourishment, locking in moisture all day.',
    benefits: [
      '5 Essential Ceramides (NP, AP, EOP, NS, AS) in golden ratio',
      'Colloidal Oat & Madecassoside calm irritation and sensitivity',
      'Weightless marshmallow texture that primes for makeup',
      'Zero pore-clogging waxes or synthetic dyes'
    ],
    ingredients: 'Aqua, Squalane, Caprylic/Capric Triglyceride, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Avena Sativa (Oat) Kernel Flour, Sodium Hyaluronate, Centella Asiatica Leaf Extract, Glycerin, Carbomer, Phenoxyethanol.',
    howToUse: 'Warm a dime-sized amount between clean fingertips. Press gently onto face, neck, and décolletage after your serum routine.',
    skinType: ['All', 'Dry', 'Sensitive', 'Normal', 'Combination'],
    concerns: ['Barrier Repair', 'Hydration', 'Sensitivity', 'Redness'],
    badge: 'Best Seller',
    inStock: true,
    volume: '60 ml / 2.0 fl. oz.',
    isBestSeller: true,
    isNewArrival: false
  },
  {
    id: 'luminous-glow-cleanser',
    name: 'Celestial Gel-to-Milk Silken Cleanser',
    tagline: 'Gentle melting cleanser that dissolves longwear makeup without stripping.',
    category: 'skincare',
    subcategory: 'Cleansers',
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviewsCount: 195,
    images: [
      'https://images.unsplash.com/photo-1556228722-d0b5be7490bf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?q=80&w=1000&auto=format&fit=crop',
    description: 'A transformative gel cleanser enriched with camellia seed oil, chamomile, and gentle prebiotic sugars. Transforms from golden gel to soothing milk on contact with water, lifting away waterproof mascara and SPF while maintaining the microbiome.',
    benefits: [
      'Preserves the acid mantle with a pH balanced 5.5 formula',
      'Dissolves stubborn waterproof makeup effortlessly',
      'Leaves zero filmy residue or tightness',
      'Enriched with calming organic chamomile extract'
    ],
    ingredients: 'Camellia Oleifera Seed Oil, Glycerin, Caprylic/Capric Triglyceride, Aqua, Sucrose Laurate, Chamomilla Recutita (Matricaria) Flower Extract, Inulin, Alpha-Glucan Oligosaccharide, Tocopherol, Citrus Aurantium Dulcis Flower Oil.',
    howToUse: 'Massage 1-2 pumps onto dry skin in circular motions to break down makeup and sebum. Add warm water to emulsify into a milky cleanser, then rinse clean.',
    skinType: ['All', 'Sensitive', 'Dry', 'Oily', 'Combination'],
    concerns: ['Cleanse', 'Redness', 'Texture'],
    badge: 'Clean Pick',
    inStock: true,
    volume: '150 ml / 5.1 fl. oz.',
    isBestSeller: false,
    isNewArrival: true
  },
  {
    id: 'golden-hour-liquid-highlighter',
    name: 'Luminary Liquid Champagne Highlighter',
    tagline: 'Ultra-refined micro-pearl fluid for candlelit radiance.',
    category: 'makeup',
    subcategory: 'Highlighter',
    price: 1499,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 220,
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop',
    description: 'A multidimensional liquid highlighter packed with ethically sourced pearlescent minerals and marula oil. Gives skin a wet-look sheen without chunky glitter or emphasize on texture.',
    benefits: [
      'Micro-refined diamond dust creates seamless sheen',
      'Can be worn alone, mixed into foundation, or over powder',
      'Transfer-resistant formula infused with Marula and Jojoba oils'
    ],
    ingredients: 'Isododecane, Mica, Hydrogenated Polyisobutene, Sclerocarya Birrea (Marula) Seed Oil, Synthetic Fluorphlogopite, Simmondsia Chinensis Seed Oil, Tin Oxide, Titanium Dioxide (CI 77891), Iron Oxides (CI 77491).',
    howToUse: 'Dab onto the high points of cheekbones, brow bones, cupid’s bow, and collarbones. Blend with fingertips or brush for an ethereal glow.',
    skinType: ['All'],
    concerns: ['Glow'],
    shades: [
      { name: 'Champagne Mirage (Pale Gold)', hex: '#EED9B7' },
      { name: 'Rose Quartz (Soft Pink Glow)', hex: '#F0C7C4' },
      { name: 'Bronze Solstice (Warm Amber)', hex: '#CA8B5D' }
    ],
    badge: 'New',
    inStock: true,
    volume: '25 ml / 0.85 fl. oz.',
    isBestSeller: false,
    isNewArrival: true
  },
  {
    id: 'botanical-hair-nectar',
    name: 'Silk Elixir Botanical Hair & Scalp Nectar',
    tagline: 'Multi-tasking treatment oil for mirror shine and scalp revitalization.',
    category: 'haircare',
    subcategory: 'Hair Oil',
    price: 1699,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 167,
    images: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608248597359-58673f1d82f7?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1608248597359-58673f1d82f7?q=80&w=1000&auto=format&fit=crop',
    description: 'A decadent blend of cold-pressed Moroccan Argan, Japanese Tsubaki, and Rosemary leaf extract. Seals split ends, protects from heat up to 230°C, and restores lustrous silkiness.',
    benefits: [
      'Heat protection up to 450°F / 230°C',
      'Rosemary extract invigorates hair follicles and boosts density',
      'Tames frizz and static in high humidity',
      'Non-greasy dry oil finish'
    ],
    ingredients: 'Argania Spinosa Kernel Oil, Camellia Japonica Seed Oil, Rosmarinus Officinalis (Rosemary) Leaf Extract, Simmondsia Chinensis Seed Oil, Crambe Abyssinica Seed Oil, Fragrance/Parfum (Botanical), Tocopherol.',
    howToUse: 'Warm 2-3 drops in palms and smooth through mid-lengths to ends on damp or dry hair. Or apply to scalp as a pre-wash stimulating treatment for 30 minutes.',
    skinType: ['All'],
    concerns: ['Damage Repair', 'Frizz Control', 'Shine'],
    badge: 'Award Winner',
    inStock: true,
    volume: '50 ml / 1.7 fl. oz.',
    isBestSeller: false,
    isNewArrival: true
  },
  {
    id: 'velvet-body-creme',
    name: 'Santal & Vanilla Whipped Body Crème',
    tagline: 'Rich, cocooning body souffle with raw shea, bakuchiol, and warm santal.',
    category: 'body',
    subcategory: 'Body Cream',
    price: 1599,
    originalPrice: 1899,
    rating: 4.9,
    reviewsCount: 310,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop',
    description: 'Wrap your body in pure indulgence. Our whipped body butter combines Fair-Trade African Shea Butter, Bakuchiol for skin firming, and an addictive fragrance of warm Australian sandalwood and Bourbon vanilla.',
    benefits: [
      'Provides 48-hour continuous hydration',
      'Bakuchiol visibly firms and smooths body texture',
      'Subtle linger of smoky sandalwood, amber, and vanilla',
      'Velvety texture absorbs with zero stickiness'
    ],
    ingredients: 'Aqua, Butyrospermum Parkii (Shea) Butter, Theobroma Cacao (Cocoa) Seed Butter, Bakuchiol, Santalum Album (Sandalwood) Oil, Vanilla Planifolia Fruit Extract, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Cetearyl Alcohol, Glycerin, Phenoxyethanol.',
    howToUse: 'Smooth generously over clean, towel-dried skin after bathing or whenever skin feels dry. Focus on elbows, knees, and décolleté.',
    skinType: ['All', 'Dry', 'Sensitive', 'Normal'],
    concerns: ['Dryness', 'Firming', 'Aroma Ritual'],
    badge: 'Best Seller',
    inStock: true,
    volume: '200 ml / 6.7 fl. oz.',
    isBestSeller: true,
    isNewArrival: false
  },
  {
    id: 'retinol-night-oil',
    name: 'Midnight Renewal 0.5% Granactive Retinoid Oil',
    tagline: 'Gentle night oil for firm, resurfaced skin with zero peeling.',
    category: 'skincare',
    subcategory: 'Face Oil',
    price: 2499,
    originalPrice: 2899,
    rating: 4.9,
    reviewsCount: 188,
    images: [
      'https://images.unsplash.com/photo-1608248597359-58673f1d82f7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop',
    description: 'An advanced youth-activating nocturnal treatment. Powered by non-irritating Hydroxypinacolone Retinoate (Granactive Retinoid) and blue tansy oil to stimulate cellular turnover, soften lines, and reveal smooth clarity by morning.',
    benefits: [
      'Clinically proven to reduce depth of fine lines in 4 weeks',
      'Blue tansy and bisabolol buffer irritation and reduce redness',
      'Replenishes depleted skin lipids while you sleep'
    ],
    ingredients: 'Squalane, Caprylic/Capric Triglyceride, Hydroxypinacolone Retinoate, Tanacetum Annuum (Blue Tansy) Flower Oil, Bisabolol, Rosa Rubiginosa Seed Oil, Helianthus Annuus Seed Oil, Tocopherol.',
    howToUse: 'At night, warm 3 drops in hands and press gently into clean skin after serum or moisturizer. Use 2-3 times per week initially, building to nightly use. Always wear SPF the following morning.',
    skinType: ['All', 'Combination', 'Dry', 'Normal'],
    concerns: ['Anti-Aging', 'Texture', 'Blemishes'],
    badge: 'Clean Pick',
    inStock: true,
    volume: '30 ml / 1.0 fl. oz.',
    isBestSeller: false,
    isNewArrival: true
  },
  {
    id: 'petal-flush-cream-blush',
    name: 'Petal Flush Buildable Velvet Cream Blush',
    tagline: 'Air-whipped cheek color that diffuses for a youthful, healthy flush.',
    category: 'makeup',
    subcategory: 'Blush',
    price: 999,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 260,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop',
    description: 'A melt-on cream blush that transforms into a soft-focus powder finish. Enriched with wild rose extract and vitamin E for cheeks that look naturally pinched and illuminated.',
    benefits: [
      'Weightless, mistake-proof blendability',
      'Longwear pigment that never clings to dry patches',
      'Dual use on cheeks and lips for a monochromatic glow'
    ],
    ingredients: 'Polyglyceryl-2 Triisostearate, Silica, Caprylic/Capric Triglyceride, Euphorbia Cerifera (Candelilla) Wax, Rosa Damascena Extract, Tocopheryl Acetate, CI 77891, CI 77491, CI 15850, CI 19140.',
    howToUse: 'Dab with fingertips onto the apples of the cheeks and blend upwards toward temples. Layer for added vibrancy.',
    skinType: ['All'],
    concerns: ['Glow'],
    shades: [
      { name: 'Peony Whisper (Soft Cool Pink)', hex: '#E8A3A8' },
      { name: 'Warm Terracotta (Spiced Apricot)', hex: '#CB725A' },
      { name: 'Wild Berry (Deep Merlot)', hex: '#873B4C' },
      { name: 'Nude Horizon (Toasted Almond)', hex: '#BC8A76' }
    ],
    badge: 'Best Seller',
    inStock: true,
    volume: '8 g / 0.28 oz.',
    isBestSeller: true,
    isNewArrival: false
  },
  {
    id: 'peptide-eye-sculpt',
    name: 'Eye Luminescence Peptide & Caffeine Contour Cream',
    tagline: 'De-puffs bags and brightens dark circles with copper peptides and green tea.',
    category: 'skincare',
    subcategory: 'Eye Care',
    price: 1599,
    originalPrice: 1899,
    rating: 4.7,
    reviewsCount: 143,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop',
    description: 'A cooling, targeted eye treatment that combats fatigue and loss of firmness. Features 3% purified green tea caffeine, palmitoyl peptides, and light-reflecting tourmaline.',
    benefits: [
      'Visibly reduces morning under-eye puffiness in 10 minutes',
      'Lightens chronic dark shadows and vascular discoloration',
      'Prevents makeup from settling into crow’s feet'
    ],
    ingredients: 'Aqua, Caffeine, Palmitoyl Tripeptide-38, Camellia Sinensis (Green Tea) Leaf Extract, Niacinamide, Sodium Hyaluronate, Escin, Tourmaline, Glycerin, Carbomer, Phenoxyethanol.',
    howToUse: 'Using your ring finger, tap a rice grain amount around the orbital bone morning and evening. Avoid direct contact with eyes.',
    skinType: ['All', 'Sensitive'],
    concerns: ['Dark Circles', 'Puffiness', 'Anti-Aging'],
    badge: 'Clean Pick',
    inStock: true,
    volume: '15 ml / 0.5 fl. oz.',
    isBestSeller: false,
    isNewArrival: false
  },
  {
    id: 'mineral-shield-spf50',
    name: 'Silk Veil Invisible Mineral Sunscreen SPF 50+',
    tagline: '100% Non-nano zinc oxide with zero white cast and primer finish.',
    category: 'skincare',
    subcategory: 'Sun Care',
    price: 1499,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 388,
    images: [
      'https://images.unsplash.com/photo-1556228722-d0b5be7490bf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1000&auto=format&fit=crop',
    description: 'Our revolutionary clean physical sunscreen feels like a weightless silk primer. Formulated with 18% micronized Zinc Oxide, Ectoin for pollution defense, and antioxidant rich green tea.',
    benefits: [
      'Broad spectrum UVA/UVB PA++++ physical defense',
      '100% invisible on all Fitzpatrick skin types with no white cast',
      'Ocean reef safe and biodegradable',
      'Controls shine while keeping skin dewy'
    ],
    ingredients: 'Zinc Oxide (Non-Nano) 18%, Aqua, Coco-Caprylate/Caprate, Ectoin, Camellia Sinensis Leaf Extract, Niacinamide, Silica, Polyhydroxystearic Acid, Tocopherol, Caprylyl Glycol.',
    howToUse: 'Apply liberally and evenly across face and neck as the final step in your morning skincare ritual, 15 minutes before sun exposure. Reapply every 2 hours.',
    skinType: ['All', 'Sensitive', 'Acne-Prone', 'Dry', 'Oily'],
    concerns: ['Sun Protection', 'Anti-Aging', 'Barrier Repair'],
    badge: 'Best Seller',
    inStock: true,
    volume: '50 ml / 1.7 fl. oz.',
    isBestSeller: true,
    isNewArrival: false
  },
  {
    id: 'exfoliating-glow-tonic',
    name: 'Aura Resurfacing AHA/BHA Clarifying Tonic',
    tagline: '5% Glycolic + 1% Salicylic Acid for unblemished, luminous clarity.',
    category: 'skincare',
    subcategory: 'Toners',
    price: 1399,
    originalPrice: 1699,
    rating: 4.8,
    reviewsCount: 176,
    images: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop',
    description: 'A gentle chemical exfoliant tonic that sweeps away dead surface cells and clears congested pores. Infused with centella asiatica and licorice root to soothe as it brightens.',
    benefits: [
      'Dissolves dead skin cell buildup for silky smoothness',
      'Clears blackheads and minimizes enlarged pores',
      'Brightens hyperpigmentation and post-acne marks'
    ],
    ingredients: 'Aqua, Glycolic Acid, Salicylic Acid, Glycyrrhiza Glabra (Licorice) Root Extract, Centella Asiatica Extract, Hamamelis Virginiana (Witch Hazel) Water, Sodium Hydroxide, Glycerin.',
    howToUse: 'After cleansing, soak a cotton pad and sweep across face and neck 2-3 nights per week. Follow with hydrating serum and moisturizer.',
    skinType: ['Oily', 'Combination', 'Normal'],
    concerns: ['Texture', 'Blemishes', 'Glow', 'Uneven Tone'],
    badge: 'Clean Pick',
    inStock: true,
    volume: '120 ml / 4.0 fl. oz.',
    isBestSeller: false,
    isNewArrival: true
  },
  {
    id: 'nourishing-scalp-scrub',
    name: 'Himalayan Pink Salt & Rosemary Scalp Detox Polish',
    tagline: 'Purifying scalp exfoliant that removes product buildup and stimulates growth.',
    category: 'haircare',
    subcategory: 'Scalp Care',
    price: 1499,
    originalPrice: 1799,
    rating: 4.8,
    reviewsCount: 122,
    images: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
    description: 'A pre-shampoo scalp micro-polish packed with fine Himalayan pink salt crystals, tea tree, and refreshing peppermint oils. Rebalances scalp microbiome, lifts excess sebum, and volumizes roots.',
    benefits: [
      'Clears scalp buildup and hard water deposits',
      'Stimulates microcirculation for fuller hair',
      'Cooling menthol sensory sensation'
    ],
    ingredients: 'Sodium Chloride (Himalayan Pink Salt), Aqua, Cocamidopropyl Betaine, Rosmarinus Officinalis Leaf Oil, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Mentha Piperita Oil, Jojoba Esters, Glycerin.',
    howToUse: 'Part damp hair in sections. Massage a scoop directly onto scalp in small circular motions. Rinse thoroughly and follow with shampoo.',
    skinType: ['All'],
    concerns: ['Scalp Health', 'Volume', 'Buildup'],
    badge: 'New',
    inStock: true,
    volume: '200 g / 7.0 oz.',
    isBestSeller: false,
    isNewArrival: true
  },
  {
    id: 'luminous-brow-gel',
    name: 'Arch Sculpt Featherweight Brow Laminating Gel',
    tagline: 'Fluffy, laminated brow hold with provitamin B5 peptide complex.',
    category: 'makeup',
    subcategory: 'Brows',
    price: 799,
    originalPrice: 999,
    rating: 4.7,
    reviewsCount: 154,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=1000&auto=format&fit=crop',
    description: 'Achieve the sleek, lifted salon brow look at home. Our flake-free clear styling gel locks every brow hair into place for 24 hours while nourishing follicles with biotin and peptides.',
    benefits: [
      '24-hour strong flexible hold with no white residue',
      'Infused with Biotinoyl Tripeptide-1 for thicker brows',
      'Micro-spoolie precision applicator for lifted feathering'
    ],
    ingredients: 'Aqua, VP/VA Copolymer, Butylene Glycol, Panthenol (Provitamin B5), Biotinoyl Tripeptide-1, Glycerin, Carbomer, Aminomethyl Propanol, Phenoxyethanol.',
    howToUse: 'Brush through clean brows using upward flicking strokes to fluff and set into your desired shape.',
    skinType: ['All'],
    concerns: ['Brows'],
    badge: 'Clean Pick',
    inStock: true,
    volume: '5 ml / 0.17 fl. oz.',
    isBestSeller: false,
    isNewArrival: false
  },
  {
    id: 'silk-body-glow-oil',
    name: 'Gilded Goddess Dry Shimmer Body Oil',
    tagline: 'Fast-absorbing dry oil with 24K gold mica for sun-kissed radiance.',
    category: 'body',
    subcategory: 'Body Oil',
    price: 1799,
    originalPrice: 2199,
    rating: 4.9,
    reviewsCount: 231,
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608248597359-58673f1d82f7?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1608248597359-58673f1d82f7?q=80&w=1000&auto=format&fit=crop',
    description: 'A luminous dry body oil that glides over skin to impart a bronzed, satin gleam. Scented with exotic monoi blossoms and coconut nectar.',
    benefits: [
      'Non-transfer formula dries down in under 60 seconds',
      'Deeply conditions with Camellia and Macadamia nut oils',
      'Enhances collarbones, shoulders, and legs with radiant golden warmth'
    ],
    ingredients: 'Caprylic/Capric Triglyceride, Macadamia Ternifolia Seed Oil, Camellia Japonica Seed Oil, Mica, Iron Oxides, Gardenia Taitensis (Monoi) Flower Extract, Parfum, Tocopherol.',
    howToUse: 'Shake well before use. Massage onto arms, legs, and décolleté for an irresistible sunlit sheen.',
    skinType: ['All'],
    concerns: ['Glow', 'Dryness'],
    badge: 'Limited Edition',
    inStock: true,
    volume: '100 ml / 3.4 fl. oz.',
    isBestSeller: false,
    isNewArrival: true
  },
  {
    id: 'hydro-cloud-lip-mask',
    name: 'Ceramide Peptide Overnight Lip Recovery Butter',
    tagline: 'Intensive overnight plumping mask with agave nectar and ceramides.',
    category: 'skincare',
    subcategory: 'Lip Care',
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 295,
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1000&auto=format&fit=crop',
    description: 'Wake up to soft, supple lips. This buttery overnight balm melts over flaking, chapped lips with ceramides, vegan agave nectar, and hyaluronic spheres.',
    benefits: [
      '8-hour barrier seal prevents overnight moisture loss',
      'Softens flakes and cracks with gentle fruit enzymes',
      'Natural vanilla sugar flavor'
    ],
    ingredients: 'Hydrogenated Polyisobutene, Phytosteryl/Isostearyl/Cetyl/Stearyl/Behenyl Dimer Dilinoleate, Agave Tequilana Leaf Extract, Ceramide NP, Sodium Hyaluronate, Vanilla Tahitensis Fruit Extract.',
    howToUse: 'Apply a generous layer to lips before sleeping. Can also be applied as an ultra-hydrating gloss throughout the day.',
    skinType: ['All'],
    concerns: ['Dryness', 'Texture'],
    badge: 'Best Seller',
    inStock: true,
    volume: '15 g / 0.5 oz.',
    isBestSeller: true,
    isNewArrival: false
  },
  {
    id: 'restorative-hair-mask',
    name: 'Caviar & Keratin Intensive Hair Repair Soufflé',
    tagline: 'Deep conditioning salon treatment to rebuild heat and chemically damaged bonds.',
    category: 'haircare',
    subcategory: 'Hair Mask',
    price: 1899,
    originalPrice: 2299,
    rating: 4.8,
    reviewsCount: 147,
    images: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
    description: 'A transformative hair therapy treatment with vegan green caviar algae, hydrolyzed quinoa proteins, and murumuru butter. Restores elasticity and high-shine slip to brittle hair in 5 minutes.',
    benefits: [
      'Strengthens broken disulfide bonds by up to 89%',
      'Seals open hair cuticles for extreme shine and softness',
      'Protects color vibrancy against fading'
    ],
    ingredients: 'Aqua, Cetearyl Alcohol, Astrocaryum Murumuru Seed Butter, Hydrolyzed Quinoa, Caulerpa Lentillifera (Green Caviar) Extract, Behentrimonium Chloride, Argania Spinosa Kernel Oil, Panthenol.',
    howToUse: 'After shampooing, squeeze out excess water and coat hair from mid-lengths to ends. Leave for 5-10 minutes, then rinse with cool water.',
    skinType: ['All'],
    concerns: ['Damage Repair', 'Frizz Control', 'Shine'],
    badge: 'Award Winner',
    inStock: true,
    volume: '250 ml / 8.5 fl. oz.',
    isBestSeller: false,
    isNewArrival: true
  },
  {
    id: 'clarifying-clay-mask',
    name: 'French Pink Clay & Rose Petal Detox Masque',
    tagline: 'Purifying mineral clay that tightens pores without tightening the skin.',
    category: 'skincare',
    subcategory: 'Face Masks',
    price: 1499,
    originalPrice: 1799,
    rating: 4.7,
    reviewsCount: 139,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1000&auto=format&fit=crop',
    description: 'A luxurious creamy clay mask featuring French Montmorillonite pink clay, crushed rose petals, and soothing marshmallow root. Draws out micro-pollutants while delivering hydration.',
    benefits: [
      'Gently detoxifies pores in 10 minutes without cracking or flaking',
      'Refines skin texture and minimizes excess sebum',
      'Enriched with botanical rose water for soothing comfort'
    ],
    ingredients: 'Kaolin (Pink Clay), Rosa Damascena Flower Water, Glycerin, Bentonite, Althaea Officinalis (Marshmallow) Root Extract, Pelargonium Graveolens Flower Oil, Phenoxyethanol.',
    howToUse: 'Apply an even layer to clean skin avoiding eye area. Relax for 10 minutes (do not let it dry completely). Rinse with warm water and soft washcloth.',
    skinType: ['All', 'Oily', 'Combination', 'Sensitive'],
    concerns: ['Pores', 'Texture', 'Blemishes'],
    badge: 'Clean Pick',
    inStock: true,
    volume: '100 g / 3.5 oz.',
    isBestSeller: false,
    isNewArrival: false
  },
  {
    id: 'satin-setting-powder',
    name: 'Cloud Air Translucent Micro-Blur Setting Powder',
    tagline: 'Talc-free silica setting powder that creates an airbrushed soft-focus filter.',
    category: 'makeup',
    subcategory: 'Powder',
    price: 1399,
    originalPrice: 1699,
    rating: 4.9,
    reviewsCount: 204,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1000&auto=format&fit=crop'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1000&auto=format&fit=crop',
    description: 'An ethereal loose setting powder made with bamboo silica and amino-acid coated mica. Sets makeup for all-day wear, banishes shine, and blurs pores with zero flashback in photos.',
    benefits: [
      '100% Talc-Free & Non-Drying',
      'Zero white cast or flashback in flash photography',
      'Infused with silk amino acids to keep skin supple'
    ],
    ingredients: 'Silica, Mica, Lauroyl Lysine, Squalane, Bambusa Arundinacea Stem Extract, Potassium Sorbate, CI 77492, CI 77491.',
    howToUse: 'Press lightly into the T-zone and under eyes using a velour powder puff or fluffy brush to set makeup and diffuse shine.',
    skinType: ['All'],
    concerns: ['Oil Control', 'Pores'],
    shades: [
      { name: 'Translucent (Universal Fair-Medium)', hex: '#FDFBF7' },
      { name: 'Warm Amber (Medium-Deep)', hex: '#DDB68C' }
    ],
    badge: 'Best Seller',
    inStock: true,
    volume: '15 g / 0.53 oz.',
    isBestSeller: true,
    isNewArrival: false
  }
];
