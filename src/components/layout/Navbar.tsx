import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  User, 
  ChevronDown, 
  Package, 
  Heart
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { motion, AnimatePresence } from 'motion/react';
import { NavMegaMenu, MEESHO_MEGA_MENU_CONFIG } from './NavMegaMenu';
import { PRODUCTS } from '../../data/products';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenAccount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategoryKey, setActiveCategoryKey] = useState<string | null>(null);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero-section');
  
  // Search bar state inside navbar (Meesho style inline search)
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const profileTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { openCart, itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveCategoryKey(null);
    setProfileDropdownOpen(false);
    setSearchFocused(false);
  }, [location.pathname, location.search]);

  // Handle ESC key to close mega menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCategoryKey(null);
        setProfileDropdownOpen(false);
        setSearchFocused(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ScrollSpy for landing page sections
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['hero-section', 'editorial-scroll-section', 'main-footer'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry and set it active
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' } 
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const NAV_LINKS = [
    { id: 'hero-section', label: 'Home' },
    { id: 'editorial-scroll-section', label: 'Editorial' },
    { id: 'main-footer', label: 'Contact' }
  ];

  // Meesho exact categories list - 100% Curated Beauty & Cosmetics
  const meeshoCategories = [
    { key: 'popular', label: 'Popular Beauty', href: '/shop' },
    { key: 'serums', label: 'Serums', href: '/shop?category=skincare&subcategory=Serums' },
    { key: 'skincare', label: 'Skincare', href: '/shop?category=skincare' },
    { key: 'makeup', label: 'Makeup & Cosmetics', href: '/shop?category=makeup' },
    { key: 'haircare', label: 'Haircare & Scalp', href: '/shop?category=haircare' },
    { key: 'body-bath', label: 'Bath & Body', href: '/shop?category=body' },
    { key: 'fragrance', label: 'Fragrance & Mists', href: '/shop?category=body' },
    { key: 'beauty-tools', label: 'Beauty Tools', href: '/shop?category=makeup' },
    { key: 'men-grooming', label: "Men's Grooming", href: '/shop?category=haircare' },
    { key: 'ayurvedic-natural', label: 'Clean & Ayurvedic', href: '/shop?category=skincare' }
  ];

  // Clear any active hover timeout
  const cancelHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Mouse Enter on a specific category tab - activate immediately and keep open
  const handleNavMouseEnter = (key: string) => {
    cancelHoverTimeout();
    setActiveCategoryKey(key);
  };

  // Mouse Leave on the entire category bar container - start grace period
  const handleCategoryNavMouseLeave = () => {
    cancelHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategoryKey(null);
    }, 300);
  };

  // Mouse Enter on the Mega Menu itself - keep open firmly
  const handleMegaMenuMouseEnter = () => {
    cancelHoverTimeout();
  };

  // Mouse Leave on the Mega Menu - start grace period
  const handleMegaMenuMouseLeave = () => {
    cancelHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategoryKey(null);
    }, 300);
  };

  // Close immediately (e.g. clicking a link or pressing Escape)
  const handleCloseMegaMenu = () => {
    cancelHoverTimeout();
    setActiveCategoryKey(null);
  };

  // Search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchFocused(false);
    }
  };

  const trendingSearchKeywords = [
    'Dew Drop Serum',
    'Lip Tint',
    'Velvet Foundation',
    'Sunscreen SPF 50',
    'Botanical Hair Nectar',
    'Ceramide Cream',
    'Cream Blush',
    'Glow Body Oil'
  ];

  const searchResultsPreview = searchQuery.trim()
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <header id="velure-main-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs font-sans">
      
      {/* ========================================================= */}
      {/* TIER 1: LUXURY HAUTE BEAUTÉ TOP HEADER BAR               */}
      {/* ========================================================= */}
      <div className="border-b border-[#EAE3DC] bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            
            {/* Left: Mobile Toggle & Vélure Haute Beauté Logo */}
            <div className="flex items-center gap-4">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 -ml-1 text-[#2C2523] hover:text-[#9A724C] lg:hidden rounded-md transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Vélure Bespoke Luxury Wordmark & Emblem */}
              <Link
                id="brand-logo-link"
                to="/"
                onClick={handleCloseMegaMenu}
                className="flex items-center gap-2.5 select-none group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1C1917] text-[#D8B48D] flex items-center justify-center shadow-xs border border-[#D8B48D]/30 group-hover:bg-[#2C2724] group-hover:scale-105 transition-all">
                  <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#D8B48D]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15,25 L50,85 L60,85 L25,25 Z" fill="currentColor" />
                    <path d="M85,25 L50,85 L40,85 L75,25 Z" fill="currentColor" opacity="0.6" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#1C1917] text-[20px] sm:text-[23px] font-serif tracking-[0.16em] uppercase font-bold leading-tight group-hover:text-[#9A724C] transition-colors">
                    VÉLURE
                  </span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.28em] uppercase font-medium text-[#8C6D53] leading-none">
                    HAUTE BEAUTÉ
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: ScrollSpy Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative py-1 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
                    activeSection === link.id ? 'text-[#8C6D53]' : 'text-[#2C2523] hover:text-[#8C6D53]'
                  }`}
                >
                  {link.label}
                  {/* Subtle underline for active state */}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="active-nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8C6D53]"
                      initial={false}
                    />
                  )}
                </button>
              ))}
            </div>

          {/* Right Action Menu: Luxury Boutique Items */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-[#2C2523]">
            



          </div>
        </div>
      </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE DRAWER NAVIGATION                                  */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl p-5 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE3DC]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1C1917] text-[#D8B48D] flex items-center justify-center border border-[#D8B48D]/30">
                      <svg className="w-4 h-4 text-[#D8B48D]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15,25 L50,85 L60,85 L25,25 Z" fill="currentColor" />
                        <path d="M85,25 L50,85 L40,85 L75,25 Z" fill="currentColor" opacity="0.6" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#1C1917] text-lg font-serif font-bold tracking-[0.14em] uppercase leading-none">
                        VÉLURE
                      </span>
                      <span className="text-[7.5px] tracking-[0.25em] uppercase font-medium text-[#8C6D53] mt-0.5">
                        HAUTE BEAUTÉ
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-[#555555] hover:text-[#9A724C] rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>


                {/* Mobile Categories Accordion */}
                <div className="mt-5 space-y-4">
                  {/* Group 1: Core Categories */}
                  <div className="space-y-1">
                    <div className="text-[11px] uppercase font-bold text-[#8C6D53] px-1 pb-1 tracking-wider">
                      Beauty Formulations
                    </div>

                    {meeshoCategories.slice(0, 9).map((cat) => {
                      const isExpanded = mobileExpandedCategory === cat.key;
                      const catData = MEESHO_MEGA_MENU_CONFIG[cat.key];

                      return (
                        <div
                          key={cat.key}
                          className="border border-[#EAE3DC] rounded-lg overflow-hidden bg-white"
                        >
                          <div className="flex items-center justify-between p-2.5">
                            <Link
                              to={cat.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-semibold text-[#2C2523] hover:text-[#9A724C]"
                            >
                              {cat.label}
                            </Link>
                            <button
                              onClick={() => setMobileExpandedCategory(isExpanded ? null : cat.key)}
                              className="p-1 text-[#666666] hover:text-[#9A724C]"
                              aria-label={`Expand ${cat.label}`}
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#9A724C]' : ''}`}
                              />
                            </button>
                          </div>

                          {/* Accordion content */}
                          <AnimatePresence>
                            {isExpanded && catData && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="px-3 pb-3 pt-1 border-t border-[#F0EBE5] bg-[#FAF8F5] space-y-2"
                              >
                                <div className="flex flex-wrap gap-1.5">
                                  {catData.columns.flatMap(c => c.items).slice(0, 8).map((item, idx) => (
                                    <Link
                                      key={idx}
                                      to={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-[11px] px-2 py-1 rounded bg-white border border-[#E5DCD3] text-[#4A3E38] hover:text-[#9A724C]"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* Group 2: Featured Studios & Glow Sets */}
                  <div className="space-y-1 pt-2 border-t border-[#F0EBE5]">
                    <div className="text-[11px] uppercase font-bold text-[#8C6D53] px-1 pb-1 tracking-wider">
                      Atelier Collections & Kits
                    </div>

                    {meeshoCategories.slice(9).map((cat) => {
                      const isExpanded = mobileExpandedCategory === cat.key;
                      const catData = MEESHO_MEGA_MENU_CONFIG[cat.key];

                      return (
                        <div
                          key={cat.key}
                          className="border border-[#EAE3DC] rounded-lg overflow-hidden bg-white"
                        >
                          <div className="flex items-center justify-between p-2.5">
                            <Link
                              to={cat.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-semibold text-[#2C2523] hover:text-[#9A724C]"
                            >
                              {cat.label}
                            </Link>
                            <button
                              onClick={() => setMobileExpandedCategory(isExpanded ? null : cat.key)}
                              className="p-1 text-[#666666] hover:text-[#9A724C]"
                              aria-label={`Expand ${cat.label}`}
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#9A724C]' : ''}`}
                              />
                            </button>
                          </div>

                          {/* Accordion content */}
                          <AnimatePresence>
                            {isExpanded && catData && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="px-3 pb-3 pt-1 border-t border-[#F0EBE5] bg-[#FAF8F5] space-y-2"
                              >
                                <div className="flex flex-wrap gap-1.5">
                                  {catData.columns.flatMap(c => c.items).slice(0, 8).map((item, idx) => (
                                    <Link
                                      key={idx}
                                      to={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-[11px] px-2 py-1 rounded bg-white border border-[#E5DCD3] text-[#4A3E38] hover:text-[#9A724C]"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>


            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
};
