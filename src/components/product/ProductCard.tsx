import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Check, Star } from 'lucide-react';
import { Product, ProductShade } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useQuickView } from '../../context/QuickViewContext';
import { useToast } from '../../context/ToastContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedShade, setSelectedShade] = useState<ProductShade | undefined>(
    product.shades && product.shades.length > 0 ? product.shades[0] : undefined
  );
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { openQuickView } = useQuickView();
  const { showToast } = useToast();

  const isLiked = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isAdding) return;
    setIsAdding(true);

    setTimeout(() => {
      addToCart(product, 1, selectedShade);
      setIsAdding(false);
      setIsAdded(true);
      showToast({
        title: 'Added to your bag',
        description: `${product.name}${selectedShade ? ` (${selectedShade.name})` : ''}`,
        type: 'cart',
        productImage: product.images[0]
      });

      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 300);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    showToast({
      title: isLiked ? 'Removed from wishlist' : 'Saved to wishlist',
      description: product.name,
      type: 'info',
      productImage: product.images[0]
    });
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col h-full bg-white rounded-2xl p-3 sm:p-3.5 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(44,39,36,0.06)] border border-[#EFE8DF]/80 hover:border-[#D9CBBE]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Box */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F4EFEB]">
        
        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1.5 pointer-events-none">
          {product.badge && (
            <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-[#2C2724]/90 backdrop-blur-sm text-[#FAF8F5] rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider bg-[#8C6D53] text-[#FAF8F5] rounded-full">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={handleWishlistClick}
          className={`absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            isLiked
              ? 'bg-[#8C6D53] text-white shadow-md'
              : 'bg-white/80 backdrop-blur-sm text-[#4A4036] hover:bg-white hover:text-[#8C6D53] shadow-sm'
          }`}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 transition-transform ${isLiked ? 'fill-current scale-110' : ''}`} />
        </button>

        {/* Product Image (Static on hover, no swap) */}
        <Link to={`/product/${product.id}`} className="block w-full h-full overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop';
            }}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Hover Quick Action Bar */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-20 hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <button
            id={`quick-add-btn-${product.id}`}
            onClick={handleQuickAdd}
            disabled={!product.inStock || isAdding}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg transition-all duration-200 ${
              isAdded
                ? 'bg-[#4A7C59] text-white'
                : 'bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : isAdding ? (
              <span>Adding...</span>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>

          <button
            id={`quick-view-btn-${product.id}`}
            onClick={handleQuickViewClick}
            className="w-10 h-10 bg-white/95 text-[#2C2724] hover:text-[#8C6D53] rounded-xl flex items-center justify-center shadow-lg transition-colors"
            title="Quick View"
            aria-label="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="mt-3.5 flex flex-col flex-1 justify-between">
        <div>
          {/* Subcategory & Star Rating */}
          <div className="flex items-center justify-between text-[11px] text-[#8C7E72] mb-1">
            <span className="uppercase tracking-widest font-medium text-[#8C6D53]">
              {product.subcategory || product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#DDB68C] text-[#DDB68C]" />
              <span className="font-semibold text-[#2C2724]">{product.rating.toFixed(1)}</span>
              <span className="text-[#A8988B]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <Link to={`/product/${product.id}`} className="group/title block">
            <h3
              style={{ fontFamily: "'Minggola', 'Squealer', sans-serif", fontSize: '1.8em' }}
              className="font-medium text-[#2C2724] group-hover/title:text-[#8C6D53] transition-colors line-clamp-1"
            >
              {product.name}
            </h3>
          </Link>

          {/* Tagline snippet */}
          <p className="text-[11px] text-[#786C62] line-clamp-1 mt-0.5 font-light">
            {product.tagline}
          </p>
        </div>

        {/* Shades preview spacer container to enforce identical alignment */}
        <div className="min-h-[24px] mt-2.5 flex items-center">
          {product.shades && product.shades.length > 0 ? (
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
              {product.shades.slice(0, 5).map(shade => (
                <button
                  key={shade.name}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedShade(shade);
                  }}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedShade?.name === shade.name
                      ? 'ring-2 ring-[#8C6D53] ring-offset-1 scale-110'
                      : 'border-black/15 opacity-85 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: shade.hex }}
                  title={shade.name}
                  aria-label={`Select shade ${shade.name}`}
                />
              ))}
              {product.shades.length > 5 && (
                <span className="text-[10px] text-[#8C7E72] pl-0.5">+{product.shades.length - 5}</span>
              )}
            </div>
          ) : null}
        </div>

        {/* Price & Mobile Add Button */}
        <div className="mt-3 pt-2.5 border-t border-[#F2ECE4] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-semibold text-[#2C2724] tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#A8988B] line-through font-light">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Mobile Quick Add Icon */}
          <button
            onClick={handleQuickAdd}
            className="sm:hidden p-2 rounded-lg bg-[#2C2724] text-[#FAF8F5] active:scale-95"
            aria-label="Add to bag"
          >
            {isAdded ? <Check className="w-4 h-4 text-green-400" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
