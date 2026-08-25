import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Star, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { motion, AnimatePresence } from 'motion/react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = ['Lip Tint', 'Dew Drop Serum', 'Moisturizer', 'Foundation', 'Sunscreen SPF 50', 'Peptide'];

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const matched = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.concerns.some(c => c.toLowerCase().includes(q)) ||
      p.skinType.some(s => s.toLowerCase().includes(q))
    );

    setResults(matched);
  }, [query]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleProductClick = (productId: string) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  const handleSearchTerm = (term: string) => {
    setQuery(term);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2C2724]/60 backdrop-blur-md"
        />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative bg-[#FAF8F5] min-h-[50vh] max-h-[85vh] shadow-2xl border-b border-[#E8DCCE] z-10 flex flex-col"
        >
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex-1 flex flex-col">
            
            {/* Top Bar with Close */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DCCE]">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D53]">
                Search Catalogue
              </span>
              <button
                onClick={onClose}
                className="p-1 text-[#8C7E72] hover:text-[#2C2724] rounded-lg transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Big Search Input */}
            <div className="mt-4 relative flex items-center">
              <Search className="w-6 h-6 text-[#8C6D53] absolute left-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for today? (e.g. serum, tint, moisturizer)"
                className="w-full pl-9 pr-8 py-3 bg-transparent text-lg sm:text-2xl font-serif text-[#2C2724] placeholder:text-[#A8988B] border-none focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-0 text-xs text-[#8C7E72] hover:text-[#2C2724]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Popular Searches Pills */}
            {!query && (
              <div className="mt-6 pt-4 border-t border-[#E8DCCE]/70">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#8C7E72] mb-3">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map(term => (
                    <button
                      key={term}
                      onClick={() => handleSearchTerm(term)}
                      className="px-3.5 py-1.5 bg-white border border-[#E8DCCE] hover:border-[#8C6D53] rounded-full text-xs text-[#4A4036] hover:text-[#8C6D53] transition-colors shadow-2xs"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Live Search Results */}
            {query && (
              <div className="mt-6 flex-1 overflow-y-auto pr-1">
                <div className="flex items-center justify-between mb-3 text-xs text-[#8C7E72]">
                  <span>{results.length} results for "{query}"</span>
                  {results.length > 0 && (
                    <button
                      onClick={() => {
                        onClose();
                        navigate(`/shop?search=${encodeURIComponent(query)}`);
                      }}
                      className="text-[#8C6D53] hover:underline flex items-center gap-1 font-medium"
                    >
                      View all in Shop <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {results.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="font-serif text-lg text-[#2C2724]">No products found</p>
                    <p className="text-xs text-[#8C7E72] mt-1">Try another keyword or category name.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {results.slice(0, 6).map(product => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="flex items-center gap-3.5 p-2.5 bg-white hover:bg-[#F4EFEB] rounded-xl border border-[#E8DCCE]/70 cursor-pointer transition-colors group shadow-2xs"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-14 h-16 object-cover rounded-lg bg-[#FAF8F5] flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] uppercase tracking-wider text-[#8C6D53] font-medium block">
                            {product.category}
                          </span>
                          <h4 className="text-xs font-serif font-medium text-[#2C2724] group-hover:text-[#8C6D53] transition-colors truncate">
                            {product.name}
                          </h4>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs font-semibold text-[#2C2724]">
                              ₹{product.price.toLocaleString('en-IN')}
                            </span>
                            <div className="flex items-center gap-0.5 text-[11px] text-[#DDB68C]">
                              <Star className="w-3 h-3 fill-current" />
                              <span className="text-[#2C2724] font-medium">{product.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
