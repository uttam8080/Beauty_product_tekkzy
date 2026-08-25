import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Star, Heart, ShoppingBag, Check, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { useQuickView } from '../../context/QuickViewContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useToast } from '../../context/ToastContext';
import { ProductShade } from '../../types';
import { motion, AnimatePresence } from 'motion/react';

export const QuickViewModal: React.FC = () => {
  const { selectedProduct, closeQuickView } = useQuickView();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedShade, setSelectedShade] = useState<ProductShade | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setActiveImageIdx(0);
      setQuantity(1);
      setSelectedShade(selectedProduct.shades && selectedProduct.shades.length > 0 ? selectedProduct.shades[0] : undefined);
      setIsAdded(false);
    }
  }, [selectedProduct]);

  // Close with escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeQuickView();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeQuickView]);

  if (!selectedProduct) return null;

  const isLiked = isInWishlist(selectedProduct.id);

  const handleAdd = () => {
    addToCart(selectedProduct, quantity, selectedShade);
    setIsAdded(true);
    showToast({
      title: 'Added to your bag',
      description: `${quantity}x ${selectedProduct.name}`,
      type: 'cart',
      productImage: selectedProduct.images[0]
    });

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-[#2C2724]/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 260 }}
          className="relative bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#E8DCCE]"
        >
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 w-9 h-9 bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] text-[#2C2724] rounded-full flex items-center justify-center transition-colors border border-[#E8DCCE]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left: Gallery */}
            <div className="bg-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8DCCE]">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-inner">
                <img
                  src={selectedProduct.images[activeImageIdx] || selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                {selectedProduct.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#2C2724] text-[#FAF8F5] rounded-full">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProduct.images.length > 1 && (
                <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1 no-scrollbar">
                  {selectedProduct.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIdx(i)}
                      className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImageIdx === i ? 'border-[#8C6D53] scale-105 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info & Controls */}
            <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
              <div>
                <div className="flex items-center justify-between text-xs text-[#8C6D53] mb-2 uppercase tracking-[0.2em]">
                  <span>{selectedProduct.category} • {selectedProduct.subcategory}</span>
                  {selectedProduct.volume && (
                    <span className="text-[#8C7E72] lowercase tracking-normal">{selectedProduct.volume}</span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-serif text-[#2C2724] font-medium leading-snug">
                  {selectedProduct.name}
                </h2>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center text-[#DDB68C]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(selectedProduct.rating)
                            ? 'fill-[#DDB68C] text-[#DDB68C]'
                            : 'text-[#E8DCCE]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#2C2724]">{selectedProduct.rating.toFixed(1)}</span>
                  <span className="text-xs text-[#8C7E72]">({selectedProduct.reviewsCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-2xl font-semibold text-[#2C2724]">
                    ₹{selectedProduct.price.toLocaleString('en-IN')}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-sm text-[#A8988B] line-through">
                      ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#5C5046] leading-relaxed line-clamp-3">
                  {selectedProduct.description}
                </p>

                {/* Shades */}
                {selectedProduct.shades && selectedProduct.shades.length > 0 && (
                  <div className="mt-5">
                    <p className="text-xs font-medium text-[#2C2724] tracking-wide mb-2">
                      Shade: <span className="font-normal text-[#8C6D53]">{selectedShade?.name}</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.shades.map(shade => (
                        <button
                          key={shade.name}
                          onClick={() => setSelectedShade(shade)}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all border ${
                            selectedShade?.name === shade.name
                              ? 'border-[#8C6D53] bg-[#F4EFEB] font-medium text-[#2C2724]'
                              : 'border-[#E8DCCE] hover:border-[#8C6D53] text-[#5C5046]'
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-black/10"
                            style={{ backgroundColor: shade.hex }}
                          />
                          <span>{shade.name.split('(')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#2C2724]">Quantity</span>
                  <div className="flex items-center border border-[#D9CBBE] rounded-lg overflow-hidden bg-[#FAF8F5]">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-3 py-1.5 text-[#2C2724] hover:bg-[#E8DCCE] text-sm transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-3 py-1.5 text-[#2C2724] hover:bg-[#E8DCCE] text-sm transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#F2ECE4] space-y-3">
                <div className="flex gap-3">
                  <button
                    onClick={handleAdd}
                    disabled={isAdded}
                    className={`flex-1 py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all ${
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
                        <span>Add to Bag • ₹{(selectedProduct.price * quantity).toLocaleString('en-IN')}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    className={`p-3 rounded-xl border flex items-center justify-center transition-colors ${
                      isLiked
                        ? 'bg-[#8C6D53] text-white border-[#8C6D53]'
                        : 'border-[#D9CBBE] text-[#2C2724] hover:bg-[#FAF8F5]'
                    }`}
                    aria-label="Save to wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <div className="flex items-center gap-1 text-[#8C7E72]">
                    <Shield className="w-3.5 h-3.5 text-[#8C6D53]" />
                    <span>Free Shipping on orders over ₹999</span>
                  </div>

                  <Link
                    to={`/product/${selectedProduct.id}`}
                    onClick={closeQuickView}
                    className="flex items-center gap-1 text-[#8C6D53] hover:text-[#2C2724] font-medium hover:underline"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
