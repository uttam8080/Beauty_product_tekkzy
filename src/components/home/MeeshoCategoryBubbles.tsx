import React from 'react';
import { Link } from 'react-router-dom';

export const MEESHO_BUBBLES = [
  {
    id: 'skincare',
    label: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=skincare'
  },
  {
    id: 'makeup-lips',
    label: 'Lip & Velvets',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=makeup'
  },
  {
    id: 'hair-scalp',
    label: 'Hair Elixirs',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=haircare'
  },
  {
    id: 'bath-body',
    label: 'Body Crème',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=body'
  },
  {
    id: 'clean-fragrance',
    label: 'Haute Fragrance',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=body'
  },
  {
    id: 'serums-actives',
    label: 'Pure Serums',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=skincare&subcategory=Serums'
  },
  {
    id: 'sun-care-spf',
    label: 'Sun Mineral SPF',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=skincare&subcategory=Sun%20Care'
  },
  {
    id: 'beauty-tools',
    label: 'Gua Sha & Tools',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=makeup'
  },
  {
    id: 'mens-grooming',
    label: "Men's Atelier",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=haircare'
  },
  {
    id: 'ayurvedic-glow',
    label: 'Botanical Oils',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=skincare'
  },
  {
    id: 'masks-peels',
    label: 'Ritual Masks',
    image: 'https://images.unsplash.com/photo-1568569350062-ebad3d176090?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=skincare'
  },
  {
    id: 'gift-sets',
    label: 'Gift Cabinets',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=300&auto=format&fit=crop',
    href: '/shop?filter=new'
  },
  {
    id: 'wellness-teas',
    label: 'Inner Wellness',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=300&auto=format&fit=crop',
    href: '/shop'
  },
  {
    id: 'eye-care',
    label: 'Eye Recovery',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=skincare'
  },
  {
    id: 'nail-lacquers',
    label: 'Nail Lacquers',
    image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=300&auto=format&fit=crop',
    href: '/shop?category=makeup'
  }
];

export const MeeshoCategoryBubbles: React.FC = () => {
  // Repeat items for seamless continuous infinite marquee loop
  const marqueeItems = [...MEESHO_BUBBLES, ...MEESHO_BUBBLES];

  return (
    <section 
      id="category-bubbles-ticker"
      className="relative bg-[#e1f0df] border-b border-[#EAE3DC] py-4.5 overflow-hidden select-none"
    >
      {/* Subtle edge fade overlays for infinite seamless aesthetic */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#e1f0df] via-[#e1f0df]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#e1f0df] via-[#e1f0df]/80 to-transparent z-10" />

      {/* Auto Moving Marquee Track */}
      <div className="w-full overflow-hidden">
        <div className="animate-continuous-marquee flex items-center gap-6 sm:gap-10 py-1">
          {marqueeItems.map((bubble, idx) => (
            <Link
              key={`${bubble.id}-${idx}`}
              to={bubble.href}
              className="flex flex-col items-center gap-2 group flex-shrink-0 cursor-pointer text-center"
            >
              {/* Circular Avatar Ring with Luxury Bronze Glow */}
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#EADFD3] group-hover:border-[#9A724C] group-hover:shadow-[0_4px_14px_rgba(154,114,76,0.22)] transition-all duration-200 p-0.5 bg-[#FAF8F5]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#F5EFEB]">
                  <img
                    src={bubble.image}
                    alt={bubble.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=300&auto=format&fit=crop';
                    }}
                  />
                </div>
              </div>

              {/* Label */}
              <span className="text-[12px] sm:text-[13px] font-medium text-[#2C2523] group-hover:text-[#9A724C] group-hover:font-semibold transition-colors whitespace-nowrap">
                {bubble.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


