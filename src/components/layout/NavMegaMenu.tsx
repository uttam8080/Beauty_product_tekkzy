import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';
import { Product } from '../../types';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useQuickView } from '../../context/QuickViewContext';
import { useToast } from '../../context/ToastContext';

export interface MegaMenuColumn {
  title: string;
  isTinted?: boolean;
  items: {
    label: string;
    href: string;
    badge?: string;
  }[];
}

export interface MegaMenuData {
  key: string;
  label: string;
  href: string;
  columns: MegaMenuColumn[];
  productIds?: string[];
}

export const MEESHO_MEGA_MENU_CONFIG: Record<string, MegaMenuData> = {
  'popular': {
    key: 'popular',
    label: 'Popular Beauty',
    href: '/shop',
    columns: [
      {
        title: 'Featured On Luméra Beauty',
        isTinted: true,
        items: [
          { label: 'Top Beauty Brands', href: '/shop?filter=best-sellers' },
          { label: 'Dermatologist Picks', href: '/shop?category=skincare' },
          { label: 'Viral TikTok & Reels Beauty', href: '/shop?filter=new' },
          { label: 'Verified Clean Formulations', href: '/shop' },
          { label: 'Lowest Price Beauty Guaranteed', href: '/shop' }
        ]
      },
      {
        title: 'Top Beauty Categories',
        items: [
          { label: 'Polyglutamic & Hydrating Serums', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Velvet Glow Liquid Foundations', href: '/shop?category=makeup&subcategory=Foundation' },
          { label: 'Rose Silk Lip Tints & Balms', href: '/shop?category=makeup&subcategory=Lip%20Care' },
          { label: 'Botanical Hair & Scalp Nectars', href: '/shop?category=haircare&subcategory=Hair%20Oil' },
          { label: 'Whipped Santal Body Crème', href: '/shop?category=body&subcategory=Body%20Cream' },
          { label: 'Golden Hour Liquid Highlighters', href: '/shop?category=makeup&subcategory=Highlighter' },
          { label: 'Mineral Shield SPF 50+ Sunscreen', href: '/shop?category=skincare&subcategory=Sun%20Care' }
        ]
      },
      {
        title: 'Skin Concerns & Goals',
        items: [
          { label: 'Glass Skin & Deep Hydration', href: '/shop?category=skincare' },
          { label: 'Anti-Aging & Retinol Night Ritual', href: '/shop?category=skincare' },
          { label: 'Dark Spots & Vitamin C Brightening', href: '/shop?category=skincare' },
          { label: 'Skin Barrier Repair & Ceramides', href: '/shop?category=skincare' },
          { label: 'Pore Clarifying & Blemish Care', href: '/shop?category=skincare' }
        ]
      },
      {
        title: 'Beauty Hot Offers',
        items: [
          { label: 'Under ₹499 Beauty Essentials', href: '/shop' },
          { label: 'Under ₹999 Luxury Glow Edits', href: '/shop?filter=best-sellers' },
          { label: 'Buy 2 Get 1 Free Lip Tints', href: '/shop?category=makeup' },
          { label: 'Free Delivery on 1st Order', href: '/shop' },
          { label: 'Special Clearance Hub', href: '/shop' }
        ]
      }
    ],
    productIds: ['velvet-glow-foundation', 'rose-silk-lip-tint', 'dew-drop-serum']
  },
  'serums': {
    key: 'serums',
    label: 'Face Serums & Elixirs',
    href: '/shop?category=skincare&subcategory=Serums',
    columns: [
      {
        title: 'Active Serums',
        isTinted: true,
        items: [
          { label: 'All Face Serums & Drops', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Hydrating Polyglutamic Serums', href: '/product/dew-drop-serum' },
          { label: 'Niacinamide Clarifying Serums', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Vitamin C Brightening Boosters', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Bakuchiol & Retinoid Night Oils', href: '/product/retinol-night-oil' },
          { label: 'Hyaluronic Barrier Drops', href: '/shop?category=skincare&subcategory=Serums' }
        ]
      },
      {
        title: 'By Skin Benefit',
        items: [
          { label: 'Glass Skin Hydration', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Cellular Turnover & Anti-Aging', href: '/product/retinol-night-oil' },
          { label: 'Dark Spot Correction', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Pore Minimizing & Oil Balance', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Redness & Barrier Support', href: '/shop?category=skincare&subcategory=Serums' }
        ]
      },
      {
        title: 'Formulation Types',
        items: [
          { label: 'Water Gel Elixirs', href: '/product/dew-drop-serum' },
          { label: 'Botanical Facial Oils', href: '/product/retinol-night-oil' },
          { label: 'Concentrated Ampoules', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Peptide Infused Essences', href: '/shop?category=skincare&subcategory=Serums' }
        ]
      },
      {
        title: 'Expert Routines',
        items: [
          { label: 'Morning Glow Layering Guide', href: '/shop?category=skincare' },
          { label: 'Night Time Retinoid Protocol', href: '/shop?category=skincare' },
          { label: 'Serum + Moisturizer Combos', href: '/shop?filter=best-sellers' },
          { label: 'Clinical Diagnostic Consultation', href: '/shop' }
        ]
      }
    ],
    productIds: ['dew-drop-serum', 'retinol-night-oil', 'cloud-skin-moisturizer']
  },
  'skincare': {
    key: 'skincare',
    label: 'Skincare Formulations',
    href: '/shop?category=skincare',
    columns: [
      {
        title: 'Skincare Regimen',
        isTinted: true,
        items: [
          { label: 'All Skincare Formulations', href: '/shop?category=skincare' },
          { label: 'Facial Cleansers & Washes', href: '/shop?category=skincare&subcategory=Cleansers' },
          { label: 'Hydrating Toners & Mists', href: '/shop?category=skincare&subcategory=Toners' },
          { label: 'Active Face Serums', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Day & Night Moisturizers', href: '/shop?category=skincare&subcategory=Moisturizers' },
          { label: 'Mineral Sunscreens', href: '/shop?category=skincare&subcategory=Sun%20Care' }
        ]
      },
      {
        title: 'Targeted Serums',
        items: [
          { label: 'Dew Drop Polyglutamic Serum', href: '/product/dew-drop-serum' },
          { label: 'Niacinamide 10% Clarifying', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Vitamin C 15% Glow Booster', href: '/shop?category=skincare&subcategory=Serums' },
          { label: 'Bakuchiol & Retinol Night Oil', href: '/product/retinol-night-oil' },
          { label: 'Hyaluronic Deep Hydration', href: '/shop?category=skincare&subcategory=Serums' }
        ]
      },
      {
        title: 'Moisturizers & Creams',
        items: [
          { label: 'Cloud Skin Ceramide Gel', href: '/product/cloud-skin-moisturizer' },
          { label: 'Squalane Barrier Recovery Balm', href: '/shop?category=skincare&subcategory=Moisturizers' },
          { label: 'Peptide Firming Night Crème', href: '/shop?category=skincare&subcategory=Moisturizers' },
          { label: 'Centella Calming Gel Lotion', href: '/shop?category=skincare&subcategory=Moisturizers' }
        ]
      },
      {
        title: 'Masks & Eye Care',
        items: [
          { label: 'Hydra-Gel Depuffing Eye Patches', href: '/shop?category=skincare' },
          { label: 'Caffeine Brightening Eye Elixir', href: '/shop?category=skincare' },
          { label: 'Overnight Squalane Sleeping Mask', href: '/shop?category=skincare' },
          { label: 'Pink Clay Detox Face Mask', href: '/shop?category=skincare' }
        ]
      }
    ],
    productIds: ['dew-drop-serum', 'cloud-skin-moisturizer', 'retinol-night-oil']
  },
  'makeup': {
    key: 'makeup',
    label: 'Makeup & Cosmetics',
    href: '/shop?category=makeup',
    columns: [
      {
        title: 'Face Makeup',
        isTinted: true,
        items: [
          { label: 'All Face Makeup', href: '/shop?category=makeup' },
          { label: 'Liquid & Serum Foundations', href: '/shop?category=makeup&subcategory=Foundation' },
          { label: 'Skin Tints & BB Creams', href: '/shop?category=makeup&subcategory=Foundation' },
          { label: 'Hydrating Serum Concealers', href: '/shop?category=makeup' },
          { label: 'Translucent Setting Powders', href: '/shop?category=makeup' },
          { label: 'Dewy Finish Setting Sprays', href: '/shop?category=makeup' }
        ]
      },
      {
        title: 'Lips Studio',
        items: [
          { label: 'Rose Silk Lip Tints', href: '/product/rose-silk-lip-tint' },
          { label: 'Velvet Matte Lipsticks', href: '/shop?category=makeup&subcategory=Lip%20Care' },
          { label: 'Peptide Glaze Plumping Gloss', href: '/shop?category=makeup&subcategory=Lip%20Care' },
          { label: 'Hydrating Tinted Lip Balms', href: '/shop?category=makeup&subcategory=Lip%20Care' },
          { label: 'Precision Waterproof Lip Liners', href: '/shop?category=makeup&subcategory=Lip%20Care' }
        ]
      },
      {
        title: 'Cheeks & Glow',
        items: [
          { label: 'Petal Flush Cream Blush', href: '/product/petal-flush-cream-blush' },
          { label: 'Golden Hour Liquid Highlighter', href: '/product/golden-hour-liquid-highlighter' },
          { label: 'Sun-Kissed Bronzer Sticks', href: '/shop?category=makeup' },
          { label: 'Multi-use Lip & Cheek Tints', href: '/shop?category=makeup' }
        ]
      },
      {
        title: 'Eyes & Brows',
        items: [
          { label: 'Clean Lash Lengthening Mascara', href: '/shop?category=makeup' },
          { label: 'Waterproof Felt Tip Eyeliners', href: '/shop?category=makeup' },
          { label: 'Herbal Deep Black Kajal', href: '/shop?category=makeup' },
          { label: 'Micro-Sculpt Eyebrow Pencils', href: '/shop?category=makeup' },
          { label: 'Nude Warm Eyeshadow Palettes', href: '/shop?category=makeup' }
        ]
      }
    ],
    productIds: ['velvet-glow-foundation', 'petal-flush-cream-blush', 'golden-hour-liquid-highlighter']
  },
  'haircare': {
    key: 'haircare',
    label: 'Haircare & Scalp',
    href: '/shop?category=haircare',
    columns: [
      {
        title: 'Hair Rituals',
        isTinted: true,
        items: [
          { label: 'All Haircare Formulations', href: '/shop?category=haircare' },
          { label: 'Botanical Scalp & Hair Oils', href: '/shop?category=haircare&subcategory=Hair%20Oil' },
          { label: 'Scalp Detox & Scrubs', href: '/shop?category=haircare&subcategory=Scalp%20Care' },
          { label: 'Sulfate-Free Shampoos', href: '/shop?category=haircare' },
          { label: 'Silk Moisture Conditioners', href: '/shop?category=haircare' }
        ]
      },
      {
        title: 'Hair Oils & Nectars',
        items: [
          { label: 'Botanical Hair Nectar Elixir', href: '/product/botanical-hair-nectar' },
          { label: 'Rosemary & Bhringraj Drops', href: '/shop?category=haircare&subcategory=Hair%20Oil' },
          { label: 'Cold-Pressed Castor Growth Oil', href: '/shop?category=haircare&subcategory=Hair%20Oil' },
          { label: 'Golden Moroccan Argan Oil', href: '/shop?category=haircare&subcategory=Hair%20Oil' },
          { label: 'Amla Ayurvedic Scalp Oil', href: '/shop?category=haircare&subcategory=Hair%20Oil' }
        ]
      },
      {
        title: 'Treatments & Masks',
        items: [
          { label: 'Nourishing Scalp & Sea Salt Scrub', href: '/product/nourishing-scalp-scrub' },
          { label: 'Deep Bond Repair Hair Mask', href: '/shop?category=haircare' },
          { label: 'Leave-in Silk Detangling Milk', href: '/shop?category=haircare' },
          { label: 'Heat Protection Thermal Shield', href: '/shop?category=haircare' }
        ]
      },
      {
        title: 'Hair Goals',
        items: [
          { label: 'Anti-Hair Fall & Root Strengthening', href: '/shop?category=haircare' },
          { label: 'Frizz Control & Smooth Silk', href: '/shop?category=haircare' },
          { label: 'Volume & Density Boosters', href: '/shop?category=haircare' },
          { label: 'Scalp Soothing & Anti-Dandruff', href: '/shop?category=haircare' }
        ]
      }
    ],
    productIds: ['botanical-hair-nectar', 'nourishing-scalp-scrub', 'dew-drop-serum']
  },
  'body-bath': {
    key: 'body-bath',
    label: 'Bath & Body',
    href: '/shop?category=body',
    columns: [
      {
        title: 'Body Care Essentials',
        isTinted: true,
        items: [
          { label: 'All Bath & Body', href: '/shop?category=body' },
          { label: 'Whipped Body Crèmes', href: '/shop?category=body&subcategory=Body%20Cream' },
          { label: 'Illuminating Body Oils', href: '/shop?category=body&subcategory=Body%20Oil' },
          { label: 'Exfoliating Body Polishes', href: '/shop?category=body' },
          { label: 'Hydrating Body Lotions', href: '/shop?category=body' }
        ]
      },
      {
        title: 'Body Glow & Oils',
        items: [
          { label: 'Whipped Santal Body Crème', href: '/product/velvet-body-creme' },
          { label: '24K Silk Body Glow Dry Oil', href: '/product/silk-body-glow-oil' },
          { label: 'Sweet Almond Firming Elixir', href: '/shop?category=body&subcategory=Body%20Oil' },
          { label: 'Cocoa Butter Stretch Mark Balm', href: '/shop?category=body' }
        ]
      },
      {
        title: 'Shower & Cleansing',
        items: [
          { label: 'Damask Rose Botanical Body Wash', href: '/shop?category=body' },
          { label: 'Shea Butter Nourishing Shower Gel', href: '/shop?category=body' },
          { label: 'Epsom Salt & Lavender Bath Soak', href: '/shop?category=body' },
          { label: 'Coffee Exfoliating Body Scrub', href: '/shop?category=body' }
        ]
      },
      {
        title: 'Hand & Foot Rituals',
        items: [
          { label: 'Shea & Niacinamide Hand Cream', href: '/shop?category=body' },
          { label: 'Intensive Heel Repair Balm', href: '/shop?category=body' },
          { label: 'Nail & Cuticle Conditioning Oil', href: '/shop?category=body' },
          { label: 'Peppermint Revitalizing Foot Soak', href: '/shop?category=body' }
        ]
      }
    ],
    productIds: ['velvet-body-creme', 'silk-body-glow-oil', 'dew-drop-serum']
  },
  'fragrance': {
    key: 'fragrance',
    label: 'Fragrance & Mists',
    href: '/shop?category=body',
    columns: [
      {
        title: 'Fine Fragrances',
        isTinted: true,
        items: [
          { label: 'All Fragrances', href: '/shop?category=body' },
          { label: 'Eau De Parfum (EDP)', href: '/shop?category=body' },
          { label: 'Body & Hair Perfume Mists', href: '/shop?category=body' },
          { label: 'Pure Essential Scent Oils', href: '/shop?category=body' },
          { label: 'Luxury Discovery Sets', href: '/shop?category=body' }
        ]
      },
      {
        title: 'Signature Scent Notes',
        items: [
          { label: 'Velvet Santal & Warm Vanilla', href: '/shop?category=body' },
          { label: 'Damask Rose & Golden Amber', href: '/shop?category=body' },
          { label: 'White Jasmine & Citrus Blossom', href: '/shop?category=body' },
          { label: 'Bergamot & Sparkling Green Tea', href: '/shop?category=body' },
          { label: 'Smoked Oud & Saffron Glow', href: '/shop?category=body' }
        ]
      },
      {
        title: 'All-Day Body Mists',
        items: [
          { label: 'Dewy Bloom Refreshing Mist', href: '/shop?category=body' },
          { label: 'Shimmer Glow Scented Mist', href: '/shop?category=body' },
          { label: 'Bedtime Lavender & Chamomile', href: '/shop?category=body' },
          { label: 'Sun-Drenched Coconut Mist', href: '/shop?category=body' }
        ]
      },
      {
        title: 'Pocket & Travel Scents',
        items: [
          { label: 'Mini Pocket Roll-on EDPs', href: '/shop?category=body' },
          { label: 'Solid Perfume Compacts', href: '/shop?category=body' },
          { label: 'Luxury 5-Piece Sampler Kit', href: '/shop?category=body' },
          { label: 'Aromatherapy Scented Candles', href: '/shop?category=body' }
        ]
      }
    ],
    productIds: ['silk-body-glow-oil', 'velvet-body-creme', 'rose-silk-lip-tint']
  },
  'beauty-tools': {
    key: 'beauty-tools',
    label: 'Beauty Tools',
    href: '/shop?category=makeup',
    columns: [
      {
        title: 'Facial Tools',
        isTinted: true,
        items: [
          { label: 'All Beauty Tools', href: '/shop?category=makeup' },
          { label: 'Rose Quartz Gua Sha Stones', href: '/shop?category=skincare' },
          { label: 'Natural Jade Facial Rollers', href: '/shop?category=skincare' },
          { label: 'Ice Globes & Cooling Rollers', href: '/shop?category=skincare' },
          { label: 'Silicone Facial Cleansing Brushes', href: '/shop?category=skincare' }
        ]
      },
      {
        title: 'Makeup Brushes & Sponges',
        items: [
          { label: 'Pro Foundation Buffing Brush', href: '/shop?category=makeup' },
          { label: 'Velvet Teardrop Beauty Sponges', href: '/shop?category=makeup' },
          { label: '12-Piece Complete Brush Kit', href: '/shop?category=makeup' },
          { label: 'Precision Angled Eyebrow Brush', href: '/shop?category=makeup' },
          { label: 'Ergonomic Eyelash Curler', href: '/shop?category=makeup' }
        ]
      },
      {
        title: 'Haircare & Scalp Tools',
        items: [
          { label: 'Scalp Stimulator Massage Brush', href: '/shop?category=haircare' },
          { label: '100% Mulberry Silk Heatless Curler', href: '/shop?category=haircare' },
          { label: 'Bamboo Anti-Static Wide Tooth Comb', href: '/shop?category=haircare' },
          { label: 'Microfiber Quick-Dry Hair Wrap', href: '/shop?category=haircare' }
        ]
      },
      {
        title: 'Skincare Storage & Extras',
        items: [
          { label: 'Mini Beauty Skincare Fridge', href: '/shop?category=skincare' },
          { label: 'Sanitizing Brush Cleaner Sprays', href: '/shop?category=makeup' },
          { label: 'Spa Headbands & Wristbands Set', href: '/shop?category=skincare' }
        ]
      }
    ],
    productIds: ['golden-hour-liquid-highlighter', 'dew-drop-serum', 'luminous-glow-cleanser']
  },
  'men-grooming': {
    key: 'men-grooming',
    label: "Men's Grooming",
    href: '/shop?category=haircare',
    columns: [
      {
        title: "Men's Skincare",
        isTinted: true,
        items: [
          { label: "All Men's Grooming", href: '/shop?category=haircare' },
          { label: 'Deep Charcoal Face Cleanser', href: '/product/luminous-glow-cleanser' },
          { label: 'Oil-Free Mattifying Hydrator', href: '/product/cloud-skin-moisturizer' },
          { label: 'Invisible Mineral SPF 50+ Sunscreen', href: '/product/mineral-shield-spf50' },
          { label: 'Exfoliating Men Face Scrub', href: '/shop?category=skincare' }
        ]
      },
      {
        title: 'Beard & Mustache Care',
        items: [
          { label: 'Botanical Beard & Scalp Nectar', href: '/product/botanical-hair-nectar' },
          { label: 'Nourishing Cedarwood Beard Oil', href: '/shop?category=haircare' },
          { label: 'Beard Softening Conditioning Balm', href: '/shop?category=haircare' },
          { label: 'Natural Bristle Beard Brush', href: '/shop?category=haircare' }
        ]
      },
      {
        title: 'Shaving & Post-Shave',
        items: [
          { label: 'Soothing Aloe Vera Aftershave Lotion', href: '/shop?category=skincare' },
          { label: 'Rich Lather Shaving Butter', href: '/shop?category=body' },
          { label: 'Razor Bump & Ingrow Treatment', href: '/shop?category=skincare' }
        ]
      },
      {
        title: 'Hair Styling & Freshness',
        items: [
          { label: 'Scalp Detox Exfoliating Scrub', href: '/product/nourishing-scalp-scrub' },
          { label: 'Matte Clay Natural Hair Wax', href: '/shop?category=haircare' },
          { label: 'Energizing Sandalwood Body Wash', href: '/shop?category=body' }
        ]
      }
    ],
    productIds: ['botanical-hair-nectar', 'nourishing-scalp-scrub', 'luminous-glow-cleanser']
  },
  'ayurvedic-natural': {
    key: 'ayurvedic-natural',
    label: 'Clean & Ayurvedic',
    href: '/shop?category=skincare',
    columns: [
      {
        title: 'Ayurvedic Heritage',
        isTinted: true,
        items: [
          { label: 'All Ayurvedic Formulations', href: '/shop?category=skincare' },
          { label: 'Kumkumadi Radiance Facial Oil', href: '/product/retinol-night-oil' },
          { label: 'Pure Steam-Distilled Rose Water', href: '/shop?category=skincare&subcategory=Toners' },
          { label: 'Herbal Ubtan Glow Face Polish', href: '/shop?category=skincare' },
          { label: 'Nalpamaradi Skin Brightening Oil', href: '/product/silk-body-glow-oil' }
        ]
      },
      {
        title: 'Botanical Actives',
        items: [
          { label: 'Bakuchiol (Plant Retinol) Drops', href: '/product/retinol-night-oil' },
          { label: 'Saffron & Manjistha Glow Serum', href: '/product/dew-drop-serum' },
          { label: 'Gotu Kola Barrier Restoring Balm', href: '/product/cloud-skin-moisturizer' },
          { label: 'Neem & Tea Tree Clarifying Drops', href: '/shop?category=skincare' }
        ]
      },
      {
        title: 'Ayurvedic Hair Secrets',
        items: [
          { label: 'Bhringraj & Brahmi Scalp Nectar', href: '/product/botanical-hair-nectar' },
          { label: 'Hibiscus & Fenugreek Hair Mask', href: '/shop?category=haircare' },
          { label: 'Reetha & Shikakai Gentle Cleanser', href: '/shop?category=haircare' },
          { label: 'Methi Seed Root Stimulator Oil', href: '/shop?category=haircare' }
        ]
      },
      {
        title: 'Clean Beauty Standards',
        items: [
          { label: '100% Vegan & Cruelty Free', href: '/shop' },
          { label: 'Sulfate, Paraben & Phthalate Free', href: '/shop' },
          { label: 'Dermatologically Tested', href: '/shop' },
          { label: 'Sustainably Sourced Herbs', href: '/shop' }
        ]
      }
    ],
    productIds: ['retinol-night-oil', 'dew-drop-serum', 'silk-body-glow-oil']
  }
};

interface NavMegaMenuProps {
  categoryKey: string | null;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

export const NavMegaMenu: React.FC<NavMegaMenuProps> = ({
  categoryKey,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onClose
}) => {
  const { addToCart } = useCart();
  const { openQuickView } = useQuickView();
  const { showToast } = useToast();

  if (!categoryKey || !MEESHO_MEGA_MENU_CONFIG[categoryKey]) {
    return null;
  }

  const categoryData = MEESHO_MEGA_MENU_CONFIG[categoryKey];
  const products: Product[] = (categoryData.productIds || [])
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToast({
      title: 'Added to Bag',
      message: `${product.name} added to your cart.`,
      type: 'success'
    });
  };

  const handleQuickView = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={`meesho-mega-menu-${categoryKey}`}
          key="meesho-mega-menu-container"
          initial={{ opacity: 0, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute left-0 right-0 top-full bg-white border-b border-[#E0E0E0] shadow-[0_6px_20px_rgba(0,0,0,0.08)] z-40 max-h-[calc(100vh-120px)] overflow-y-auto before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:pointer-events-auto"
        >
          <div className="w-full px-6 py-6">
            
            {/* Multi-Column Layout for Luxury Beauty Formulations */}
            <div className="flex flex-row items-stretch divide-x divide-[#EFE9E2]">
              {categoryData.columns.map((col, colIdx) => (
                <div
                  key={`${categoryKey}-col-${colIdx}`}
                  className={`flex-1 px-5 first:pl-2 last:pr-2 ${
                    col.isTinted || colIdx === 3 ? 'bg-[#FAF7F2] rounded-lg py-3 -my-3 px-4' : ''
                  }`}
                >
                  {/* Luxury Column Header */}
                  <h4 className="text-[13.5px] font-semibold text-[#8C6D53] tracking-wide mb-3 uppercase font-sans">
                    {col.title}
                  </h4>

                  {/* Column Links List */}
                  <ul className="space-y-2">
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className="block text-[13.5px] text-[#4A3E38] hover:text-[#1C1917] hover:font-medium transition-colors font-sans"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Right side: Mini Product Preview Cards */}
              {products.length > 0 && (
                <div className="w-72 pl-6 flex flex-col gap-2.5 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-[#2C2523]">
                      Featured in {categoryData.label}
                    </span>
                    <Link
                      to={categoryData.href}
                      onClick={onClose}
                      className="text-[11px] font-semibold text-[#8C6D53] hover:text-[#1C1917] hover:underline"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="space-y-2">
                    {products.slice(0, 2).map((product) => (
                      <div
                        key={product.id}
                        className="group flex items-center gap-3 p-2 bg-[#FAF8F5] hover:bg-[#F5EFEB] border border-[#EBE3D9] hover:border-[#8C6D53]/40 rounded-lg transition-all"
                      >
                        <div className="relative w-14 h-14 rounded-md overflow-hidden bg-white flex-shrink-0 border border-[#E8E0D5]">
                          <img
                            src={product.images?.[0] || 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop'}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            loading="eager"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop';
                            }}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/product/${product.id}`}
                            onClick={onClose}
                            className="block text-[12px] font-medium text-[#2C2523] hover:text-[#8C6D53] truncate"
                            title={product.name}
                          >
                            {product.name}
                          </Link>
                          
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[12px] font-bold text-[#1C1917]">
                              ₹{product.price.toLocaleString('en-IN')}
                            </span>
                            <div className="bg-[#1C1917] text-[#D8B48D] text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                              <span>{product.rating}</span>
                              <Star className="w-2 h-2 fill-[#D8B48D] text-[#D8B48D]" />
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            <button
                              onClick={(e) => handleQuickAdd(e, product)}
                              className="text-[10px] font-bold text-[#8C6D53] hover:text-[#1C1917] hover:underline"
                            >
                              + Add to Bag
                            </button>
                            <span className="text-[#D0C7BD] text-[10px]">|</span>
                            <button
                              onClick={(e) => handleQuickView(e, product)}
                              className="text-[10px] text-[#7A6B61] hover:text-[#1C1917]"
                            >
                              Quick View
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
