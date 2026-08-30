import { RoutineStep, Testimonial } from '../types';

export const CATEGORIES_DATA = [
  {
    id: 'makeup',
    name: 'Makeup',
    subtitle: 'Luminous Finishes',
    description: 'Second-skin formulas infused with skincare actives for an effortless, candlelit radiance.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    itemCount: '8 Products'
  },
  {
    id: 'skincare',
    name: 'Skincare',
    subtitle: 'Barrier-First Formulations',
    description: 'Clean, multi-peptide serums and ceramide creams that nourish deep within the dermis.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    itemCount: '10 Products'
  },
  {
    id: 'haircare',
    name: 'Haircare',
    subtitle: 'Silk Scalp & Strand Elixirs',
    description: 'Cold-pressed botanical oils and caviar repair treatments for mirror-like shine and bounce.',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1200&auto=format&fit=crop',
    itemCount: '4 Products'
  },
  {
    id: 'body',
    name: 'Body Care',
    subtitle: 'Sensory Rituals',
    description: 'Rich santal whipped soufflés and gold shimmer dry oils designed for total head-to-toe reverence.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
    itemCount: '4 Products'
  }
];

export const ROUTINE_STEPS: RoutineStep[] = [
  {
    stepNumber: 1,
    title: 'Cleanse',
    subtitle: 'Reset & Purify',
    description: 'Melt away daily pollutants, waterproof SPF, and impurities with nourishing camellia oil without stripping your delicate moisture barrier.',
    productId: 'luminous-glow-cleanser',
    visualImage: 'https://images.unsplash.com/photo-1556228722-d0b5be7490bf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    stepNumber: 2,
    title: 'Treat',
    subtitle: 'Targeted Peptide Infusion',
    description: 'Quench deep cellular thirst with 4x multi-molecular polyglutamic acid and firming peptides for glass-skin bounce.',
    productId: 'dew-drop-serum',
    visualImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop'
  },
  {
    stepNumber: 3,
    title: 'Hydrate',
    subtitle: 'Lock in 5 Essential Ceramides',
    description: 'Seal lipid barriers with whipped oat marshmallow soufflé that primes seamlessly under makeup or replenishes overnight.',
    productId: 'cloud-skin-moisturizer',
    visualImage: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1000&auto=format&fit=crop'
  },
  {
    stepNumber: 4,
    title: 'Glow',
    subtitle: 'Candlelit Liquid Luminescence',
    description: 'Dab refined champagne micro-pearls onto cheekbones and collarbones for a high-fashion, lit-from-within gleam.',
    productId: 'golden-hour-liquid-highlighter',
    visualImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'My skin has never looked this genuinely healthy and luminous. The Dew Drop serum and Cloud Cream have completely replaced my multi-step skincare drawer.',
    author: 'Ananya M.',
    location: 'Mumbai, IN',
    productName: 'Dew Drop Serum & Cloud Cream',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    quote: 'The Velvet Glow Foundation is magic in a bottle. It feels like wearing nothing at all, yet diffuses all my redness with a soft candlelit filter.',
    author: 'Natasha V.',
    location: 'Bengaluru, IN',
    productName: 'Velvet Glow Foundation',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    quote: 'The aesthetic, the clean glass packaging, the calming natural botanical scents — VÉLURE turns my morning routine into a serene spa ritual.',
    author: 'Rhea S.',
    location: 'New Delhi, IN',
    productName: 'Silk Elixir Hair & Body Duo',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '4',
    quote: 'Finally a mineral sunscreen with SPF 50 that leaves zero white cast and doesn’t pill beneath foundation. An absolute holy grail!',
    author: 'Priya K.',
    location: 'Hyderabad, IN',
    productName: 'Silk Veil Mineral SPF 50+',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
    likes: '2.4k',
    comments: '89',
    caption: 'Golden hour skin ritual with Velvet Glow.'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop',
    likes: '1.9k',
    comments: '44',
    caption: 'Pure hydration droplets. #DewDropSerum'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop',
    likes: '3.1k',
    comments: '120',
    caption: 'The Rose Silk Lip tint in Petal Nude.'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop',
    likes: '2.8k',
    comments: '95',
    caption: 'Marshmallow cloud hydration for morning and night.'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop',
    likes: '4.2k',
    comments: '215',
    caption: 'Shimmering in the sunset with Gilded Goddess oil.'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop',
    likes: '1.6k',
    comments: '38',
    caption: 'Hair rituals inspired by ancient Ayurvedic botanticals.'
  }
];

export const BRAND_VALUES = [
  {
    title: '100% Vegan & Cruelty Free',
    description: 'Leaping Bunny certified. We never test on animals and formulate solely with plant-derived actives.'
  },
  {
    title: 'Dermatologist Tested',
    description: 'Rigorous clinical patch-testing on sensitive skin to guarantee hypoallergenic safety.'
  },
  {
    title: 'Clean Actives, Zero Fillers',
    description: 'Free from synthetic parabens, phthalates, artificial sulfates, and microplastics.'
  },
  {
    title: 'Sustainable Luxury Packaging',
    description: 'Recyclable frosted Italian glass bottles with FSC-certified recycled paper boxes.'
  }
];

export const PROMO_CODES: Record<string, { discountPercent: number; description: string }> = {
  'velure10': { discountPercent: 10, description: '10% off your entire order' },
  'GLOW20': { discountPercent: 20, description: '20% off luxury rituals' },
  'WELCOME15': { discountPercent: 15, description: '15% welcome discount for new members' }
};
