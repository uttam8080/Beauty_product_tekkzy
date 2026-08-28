import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product, ProductShade, ProductReview } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { ProductCarousel } from '../components/product/ProductCarousel';
import {
  Star,
  Heart,
  ShoppingBag,
  Check,
  ChevronRight,
  ChevronDown,
  MessageSquare,
  Send,
  Droplets,
  RotateCcw,
  CheckCircle2,
  Truck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedShade, setSelectedShade] = useState<ProductShade | undefined>(
    product.shades && product.shades.length > 0 ? product.shades[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<'benefits' | 'ingredients' | 'howToUse' | 'shipping'>('benefits');
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Review state
  const [reviews, setReviews] = useState<ProductReview[]>([
    {
      id: 'rev-1',
      author: 'Evelyn Taylor',
      rating: 5,
      date: 'Aug 14, 2026',
      title: 'Holy grail status achieved',
      comment: 'The texture is extraordinarily luxurious. It sinks into the skin instantly with zero tackiness, leaving a lit-from-within satin finish.',
      verified: true,
      skinType: 'Dry & Sensitive'
    },
    {
      id: 'rev-2',
      author: 'Kavya Sharma',
      rating: 5,
      date: 'Aug 02, 2026',
      title: 'Exceeded all expectations',
      comment: 'I usually break out with rich formulations, but this has visibly calmed my redness in just 2 weeks. The glass bottle feels so elegant on my vanity.',
      verified: true,
      skinType: 'Combination'
    },
    {
      id: 'rev-3',
      author: 'Marcus Chen',
      rating: 4,
      date: 'July 28, 2026',
      title: 'Refined, lightweight and smells divine',
      comment: 'Subtle natural botanical scent and very breathable under summer heat. Worth every rupee.',
      verified: true,
      skinType: 'Normal'
    }
  ]);
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [newReview, setNewReview] = useState({ author: '', rating: 5, title: '', comment: '', skinType: 'Combination' });

  const { addToCart, openCheckoutModal } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  useEffect(() => {
    setActiveImageIdx(0);
    setQuantity(1);
    setSelectedShade(product.shades && product.shades.length > 0 ? product.shades[0] : undefined);
    setIsAdded(false);
  }, [product]);

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart(product, quantity, selectedShade);
      setIsAdding(false);
      setIsAdded(true);
      showToast({
        title: 'Added to your bag',
        description: `${quantity}x ${product.name}`,
        type: 'cart',
        productImage: product.images[0]
      });

      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 300);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedShade);
    openCheckoutModal();
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author.trim() || !newReview.comment.trim()) return;

    const rev: ProductReview = {
      id: `rev-${Date.now()}`,
      author: newReview.author,
      rating: newReview.rating,
      date: 'Just now',
      title: newReview.title || 'Wonderful formulation',
      comment: newReview.comment,
      verified: true,
      skinType: newReview.skinType
    };

    setReviews([rev, ...reviews]);
    setIsWritingReview(false);
    setNewReview({ author: '', rating: 5, title: '', comment: '', skinType: 'Combination' });
    showToast({
      title: 'Review submitted',
      description: 'Thank you for sharing your ritual experience.',
      type: 'success'
    });
  };

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.isBestSeller)).slice(0, 6);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      
      {/* Breadcrumb Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs text-[#8C7E72]">
          <Link to="/" className="hover:text-[#2C2724] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-[#2C2724] transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${product.category}`} className="capitalize hover:text-[#2C2724] transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#2C2724] font-medium truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Hero Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left: Gallery (Sticky on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-[#E8DCCE] shadow-sm">
              <img
                src={product.images[activeImageIdx] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.badge && (
                  <span className="px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-[#2C2724] text-[#FAF8F5] rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="px-3.5 py-0.5 text-xs font-semibold tracking-wider bg-[#8C6D53] text-[#FAF8F5] rounded-full shadow-sm">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-white ${
                      activeImageIdx === idx
                        ? 'border-[#8C6D53] scale-105 shadow-sm'
                        : 'border-[#E8DCCE] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Purchase Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Volume */}
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#8C6D53] mb-2 font-medium">
                <span>{product.category} • {product.subcategory}</span>
                {product.volume && <span className="text-[#8C7E72] tracking-normal lowercase">{product.volume}</span>}
              </div>

              {/* Product Title */}
              <h1
                style={
                  [
                    'Celestial Gel-to-Milk Silken Cleanser',
                    'Dew Drop Polyglutamic Peptide Serum',
                    'Cloud Skin Ceramide Barrier Soufflé',
                    'Luminary Liquid Champagne Highlighter'
                  ].includes(product.name)
                    ? { fontFamily: "'Minggola', 'Squealer', sans-serif", fontSize: '2.2em' }
                    : undefined
                }
                className="font-serif text-3xl sm:text-4xl text-[#2C2724] font-medium leading-[1.15]"
              >
                {product.name}
              </h1>

              {/* Rating & Reviews Jump Link */}
              <div className="flex items-center gap-2.5 mt-3">
                <div className="flex text-[#DDB68C]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-[#DDB68C] text-[#DDB68C]' : 'text-[#E8DCCE]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#2C2724]">{product.rating.toFixed(1)}</span>
                <span className="text-xs text-[#8C7E72]">•</span>
                <a href="#reviews" className="text-xs text-[#8C6D53] hover:underline font-medium">
                  {product.reviewsCount + reviews.length - 3} Reviews
                </a>
              </div>

              {/* Price Display */}
              <div className="mt-4 pt-3 border-t border-[#E8DCCE]/70 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-semibold text-[#2C2724]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#A8988B] line-through font-light">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-[11px] text-[#8C7E72]">Inclusive of all taxes</span>
              </div>

              {/* Tagline */}
              <p className="mt-3 text-xs sm:text-sm text-[#5C5046] font-light leading-relaxed">
                {product.description}
              </p>

              {/* Shade Selector */}
              {product.shades && product.shades.length > 0 && (
                <div className="mt-6 p-4 bg-white rounded-2xl border border-[#E8DCCE] shadow-2xs">
                  <div className="flex justify-between items-center mb-2.5 text-xs">
                    <span className="font-semibold uppercase tracking-wider text-[#2C2724]">
                      Selected Shade:
                    </span>
                    <span className="text-[#8C6D53] font-medium">{selectedShade?.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.shades.map(shade => (
                      <button
                        key={shade.name}
                        onClick={() => setSelectedShade(shade)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all border ${
                          selectedShade?.name === shade.name
                            ? 'border-[#8C6D53] bg-[#F4EFEB] font-medium text-[#2C2724] ring-1 ring-[#8C6D53]'
                            : 'border-[#E8DCCE] hover:border-[#8C6D53] text-[#5C5046]'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: shade.hex }}
                        />
                        <span>{shade.name.split('(')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2724]">Quantity</span>
                <div className="flex items-center border border-[#D9CBBE] rounded-xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3.5 py-2 text-sm text-[#2C2724] hover:bg-[#F2ECE4] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-3.5 py-2 text-sm text-[#2C2724] hover:bg-[#F2ECE4] transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className={`flex-1 py-4 px-6 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] shadow-lg flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-[#4A7C59] text-white'
                        : 'bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-4 rounded-xl border flex items-center justify-center transition-colors ${
                      isLiked
                        ? 'bg-[#8C6D53] text-white border-[#8C6D53]'
                        : 'border-[#D9CBBE] bg-white text-[#2C2724] hover:bg-[#F4EFEB]'
                    }`}
                    aria-label="Toggle Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full py-3.5 px-6 rounded-xl bg-white border border-[#2C2724] text-[#2C2724] hover:bg-[#2C2724] hover:text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] transition-all shadow-xs"
                >
                  Buy Now (Demo Checkout)
                </button>
              </div>

              {/* Value Props Strip */}
              <div className="mt-6 p-4 bg-white rounded-2xl border border-[#E8DCCE] grid grid-cols-2 gap-3 text-xs text-[#5C5046]">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#8C6D53] shrink-0" />
                  <span>Free delivery over ₹999</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#8C6D53] shrink-0" />
                  <span>30-Day Ritual Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8C6D53] shrink-0" />
                  <span>100% Vegan & Clean</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8C6D53] shrink-0" />
                  <span>Dermatologist Approved</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Why You'll Love It Section */}
        <div className="mt-20 pt-12 border-t border-[#E8DCCE]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block mb-1">
              Pure Clean Standard
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2724]">
              Why You'll Love It
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#E8DCCE] text-center space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2724]">100% Vegan</h4>
              <p className="text-[11px] text-[#786C62]">Zero animal derivatives or byproducts ever used.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8DCCE] text-center space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2724]">Leaping Bunny</h4>
              <p className="text-[11px] text-[#786C62]">Certified 100% cruelty-free at every supply step.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8DCCE] text-center space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2724]">Derm Tested</h4>
              <p className="text-[11px] text-[#786C62]">Patch-tested on hyper-sensitive and reactive skin.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8DCCE] text-center space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2724]">No Toxic Fillers</h4>
              <p className="text-[11px] text-[#786C62]">Free from parabens, synthetic fragrances, and talc.</p>
            </div>
          </div>
        </div>

        {/* Detailed Accordions */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DCCE] shadow-xs space-y-4">
          
          {/* 1. Benefits */}
          <div className="border-b border-[#E8DCCE] pb-4">
            <button
              onClick={() => setOpenAccordion(openAccordion === 'benefits' ? ('' as any) : 'benefits')}
              className="w-full flex items-center justify-between py-2 text-left"
            >
              <span className="font-serif text-lg text-[#2C2724] font-medium">Description & Clinical Benefits</span>
              <ChevronDown className={`w-5 h-5 text-[#8C6D53] transition-transform ${openAccordion === 'benefits' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'benefits' && (
              <div className="pt-3 text-xs sm:text-sm text-[#5C5046] leading-relaxed space-y-3">
                <p>{product.description}</p>
                <ul className="space-y-2 pt-2">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8C6D53] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 2. Ingredients */}
          <div className="border-b border-[#E8DCCE] pb-4">
            <button
              onClick={() => setOpenAccordion(openAccordion === 'ingredients' ? ('' as any) : 'ingredients')}
              className="w-full flex items-center justify-between py-2 text-left"
            >
              <span className="font-serif text-lg text-[#2C2724] font-medium">Full Ingredient Transparency</span>
              <ChevronDown className={`w-5 h-5 text-[#8C6D53] transition-transform ${openAccordion === 'ingredients' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'ingredients' && (
              <div className="pt-3 text-xs text-[#5C5046] leading-relaxed">
                <p className="font-mono text-[11px] bg-[#FAF8F5] p-4 rounded-xl border border-[#E8DCCE] text-[#4A4036]">
                  {product.ingredients}
                </p>
                <p className="mt-2 text-[11px] text-[#8C7E72]">
                  *Organic farming certified. We practice radical transparency — every active and preservative is listed.
                </p>
              </div>
            )}
          </div>

          {/* 3. How to Use */}
          <div className="border-b border-[#E8DCCE] pb-4">
            <button
              onClick={() => setOpenAccordion(openAccordion === 'howToUse' ? ('' as any) : 'howToUse')}
              className="w-full flex items-center justify-between py-2 text-left"
            >
              <span className="font-serif text-lg text-[#2C2724] font-medium">The Everyday Ritual Guide</span>
              <ChevronDown className={`w-5 h-5 text-[#8C6D53] transition-transform ${openAccordion === 'howToUse' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'howToUse' && (
              <div className="pt-3 text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                <p>{product.howToUse}</p>
              </div>
            )}
          </div>

          {/* 4. Shipping & Returns */}
          <div>
            <button
              onClick={() => setOpenAccordion(openAccordion === 'shipping' ? ('' as any) : 'shipping')}
              className="w-full flex items-center justify-between py-2 text-left"
            >
              <span className="font-serif text-lg text-[#2C2724] font-medium">Complimentary Shipping & 30-Day Guarantee</span>
              <ChevronDown className={`w-5 h-5 text-[#8C6D53] transition-transform ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'shipping' && (
              <div className="pt-3 text-xs sm:text-sm text-[#5C5046] leading-relaxed space-y-2">
                <p>
                  Orders over ₹999 qualify for complimentary express carbon-neutral delivery across India (delivered in 2–4 business days).
                </p>
                <p>
                  If a formulation does not harmonize with your skin type, return it within 30 days for a full refund or exchange.
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Customer Reviews Section */}
        <div id="reviews" className="mt-20 pt-12 border-t border-[#E8DCCE]">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block mb-1">
                Verified Feedback
              </span>
              <h3 className="font-serif text-3xl text-[#2C2724]">
                Customer Reviews ({reviews.length})
              </h3>
            </div>

            <button
              onClick={() => setIsWritingReview(!isWritingReview)}
              className="py-2.5 px-6 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Write a Review</span>
            </button>
          </div>

          {/* Write a Review Modal / Form */}
          {isWritingReview && (
            <motion.form
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleAddReview}
              className="mb-10 p-6 bg-white rounded-2xl border border-[#D9CBBE] shadow-md space-y-4 text-xs"
            >
              <h4 className="font-serif text-lg text-[#2C2724] font-medium">Share Your Ritual Experience</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#4A4036] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    placeholder="e.g. Maya R."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:ring-1 focus:ring-[#8C6D53] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#4A4036] mb-1">Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:ring-1 focus:ring-[#8C6D53] focus:outline-none cursor-pointer"
                  >
                    <option value={5}>★★★★★ (5 - Excellent)</option>
                    <option value={4}>★★★★☆ (4 - Very Good)</option>
                    <option value={3}>★★★☆☆ (3 - Average)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold uppercase tracking-wider text-[#4A4036] mb-1">Review Title</label>
                  <input
                    type="text"
                    value={newReview.title}
                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                    placeholder="e.g. Radiant satin texture!"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:ring-1 focus:ring-[#8C6D53] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold uppercase tracking-wider text-[#4A4036] mb-1">Your Review</label>
                  <textarea
                    rows={3}
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="How does this formulation feel on your skin?"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:ring-1 focus:ring-[#8C6D53] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsWritingReview(false)}
                  className="px-4 py-2 text-[#8C7E72] hover:text-[#2C2724]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-6 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] font-semibold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Review</span>
                </button>
              </div>
            </motion.form>
          )}

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(rev => (
              <div key={rev.id} className="p-6 bg-white rounded-2xl border border-[#E8DCCE] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#DDB68C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#A8988B]">{rev.date}</span>
                </div>

                <h5 className="font-serif text-base text-[#2C2724] font-medium leading-snug">{rev.title}</h5>
                <p className="text-xs text-[#5C5046] leading-relaxed italic">"{rev.comment}"</p>

                <div className="pt-2 border-t border-[#F2ECE4] flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#2C2724]">{rev.author}</span>
                  {rev.skinType && <span className="text-[#8C7E72]">{rev.skinType} Skin</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-24">
          <ProductCarousel
            products={relatedProducts}
            title="Complete Your Ritual"
            subtitle="You May Also Like"
          />
        </div>

      </div>

    </div>
  );
};
