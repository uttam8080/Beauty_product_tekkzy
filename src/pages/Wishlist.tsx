import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Heart, ShoppingBag, ArrowRight, Trash2, Sparkles } from 'lucide-react';

export const Wishlist: React.FC = () => {
  const { wishlistIds, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const savedProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  const handleAddAllToCart = () => {
    savedProducts.forEach(product => {
      addToCart(product, 1);
    });
    showToast({
      title: 'All saved rituals added to bag',
      description: `${savedProducts.length} items ready in your shopping bag`,
      type: 'success'
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      
      {/* Header */}
      <div className="bg-[#FAF8F5] border-b border-[#E8DCCE]/80 py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] mb-2">
                <span>Your Saved Rituals</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#2C2724] font-medium tracking-tight">
                Personal Wishlist
              </h1>
              <p className="text-xs sm:text-sm text-[#786C62] font-light mt-1.5">
                {savedProducts.length} {savedProducts.length === 1 ? 'item' : 'items'} saved to your beauty cabinet.
              </p>
            </div>

            {savedProducts.length > 0 && (
              <div className="flex items-center gap-3">
                <button
                  onClick={clearWishlist}
                  className="px-4 py-2.5 bg-white border border-[#D9CBBE] hover:border-[#B91C1C] hover:text-[#B91C1C] text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors text-[#5C5046] shadow-2xs"
                >
                  Clear All
                </button>
                <button
                  onClick={handleAddAllToCart}
                  className="px-6 py-2.5 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md transition-colors flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add All to Bag</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grid or Empty state */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-10">
        {savedProducts.length === 0 ? (
          <div className="py-20 bg-white rounded-3xl border border-[#E8DCCE] text-center max-w-lg mx-auto p-8 shadow-xs space-y-4">
            <div className="w-16 h-16 bg-[#F4EFEB] text-[#8C6D53] rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-2xl text-[#2C2724]">Your wishlist is waiting</h3>
            
            <p className="text-xs text-[#8C7E72] leading-relaxed max-w-xs mx-auto">
              Save your favorite high-potency formulations and cosmetic essentials by clicking the heart icon on any product.
            </p>

            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 py-3.5 px-8 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs uppercase tracking-[0.2em] font-semibold rounded-xl shadow-lg transition-all"
              >
                <span>Discover Formulations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {savedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
