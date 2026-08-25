import React from 'react';
import { FilterState, ProductCategory } from '../../types';
import { X, RotateCcw, Check } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalResults: number;
}

const CATEGORIES: { label: string; value: string }[] = [
  { label: 'All Categories', value: 'all' },
  { label: 'Makeup', value: 'makeup' },
  { label: 'Skincare', value: 'skincare' },
  { label: 'Haircare', value: 'haircare' },
  { label: 'Body Care', value: 'body' }
];

const SKIN_TYPES = ['Dry', 'Oily', 'Sensitive', 'Combination', 'Normal'];
const CONCERNS = ['Hydration', 'Glow', 'Anti-Aging', 'Barrier Repair', 'Texture', 'Blemishes'];
const PRICE_BRACKETS = [
  { label: 'All Prices', min: 0, max: 5000 },
  { label: 'Under ₹1,000', min: 0, max: 1000 },
  { label: '₹1,000 - ₹2,000', min: 1000, max: 2000 },
  { label: 'Above ₹2,000', min: 2000, max: 5000 }
];

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onReset,
  totalResults
}) => {
  const handleCategorySelect = (cat: string) => {
    onFilterChange({ ...filters, category: cat, subcategory: 'all' });
  };

  const handlePriceSelect = (min: number, max: number) => {
    onFilterChange({ ...filters, priceRange: [min, max] });
  };

  const toggleSkinType = (type: string) => {
    const next = filters.skinTypes.includes(type)
      ? filters.skinTypes.filter(t => t !== type)
      : [...filters.skinTypes, type];
    onFilterChange({ ...filters, skinTypes: next });
  };

  const toggleConcern = (concern: string) => {
    const next = filters.concerns.includes(concern)
      ? filters.concerns.filter(c => c !== concern)
      : [...filters.concerns, concern];
    onFilterChange({ ...filters, concerns: next });
  };

  const isPriceSelected = (min: number, max: number) => {
    return filters.priceRange[0] === min && filters.priceRange[1] === max;
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.skinTypes.length > 0 ||
    filters.concerns.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 5000 ||
    filters.inStockOnly ||
    filters.rating > 0;

  return (
    <div className="space-y-6 text-xs text-[#2C2724]">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E8DCCE]">
        <div>
          <h3 className="font-serif text-lg font-medium text-[#2C2724]">Refine Rituals</h3>
          <p className="text-[11px] text-[#8C7E72]">{totalResults} products available</p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-[11px] text-[#8C6D53] hover:text-[#2C2724] font-medium transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Category Section */}
      <div>
        <h4 className="font-semibold uppercase tracking-wider text-[11px] text-[#8C6D53] mb-2.5">
          Category
        </h4>
        <div className="space-y-1.5">
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => handleCategorySelect(cat.value)}
              className={`w-full flex items-center justify-between py-1.5 px-2.5 rounded-lg text-left transition-colors ${
                filters.category === cat.value
                  ? 'bg-[#2C2724] text-[#FAF8F5] font-semibold'
                  : 'hover:bg-[#F2ECE4] text-[#4A4036]'
              }`}
            >
              <span>{cat.label}</span>
              {filters.category === cat.value && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold uppercase tracking-wider text-[11px] text-[#8C6D53] mb-2.5">
          Price Range
        </h4>
        <div className="space-y-1.5">
          {PRICE_BRACKETS.map(bracket => (
            <button
              key={bracket.label}
              onClick={() => handlePriceSelect(bracket.min, bracket.max)}
              className={`w-full flex items-center justify-between py-1.5 px-2.5 rounded-lg text-left transition-colors ${
                isPriceSelected(bracket.min, bracket.max)
                  ? 'bg-[#2C2724] text-[#FAF8F5] font-semibold'
                  : 'hover:bg-[#F2ECE4] text-[#4A4036]'
              }`}
            >
              <span>{bracket.label}</span>
              {isPriceSelected(bracket.min, bracket.max) && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Skin Type Filter */}
      <div>
        <h4 className="font-semibold uppercase tracking-wider text-[11px] text-[#8C6D53] mb-2.5">
          Skin Type
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {SKIN_TYPES.map(type => {
            const active = filters.skinTypes.includes(type);
            return (
              <button
                key={type}
                onClick={() => toggleSkinType(type)}
                className={`px-3 py-1.5 rounded-full border text-[11px] transition-colors ${
                  active
                    ? 'bg-[#8C6D53] text-[#FAF8F5] border-[#8C6D53] font-semibold'
                    : 'border-[#D9CBBE] bg-white text-[#4A4036] hover:border-[#8C6D53]'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Concern Filter */}
      <div>
        <h4 className="font-semibold uppercase tracking-wider text-[11px] text-[#8C6D53] mb-2.5">
          Skin & Hair Concern
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {CONCERNS.map(concern => {
            const active = filters.concerns.includes(concern);
            return (
              <button
                key={concern}
                onClick={() => toggleConcern(concern)}
                className={`px-3 py-1.5 rounded-full border text-[11px] transition-colors ${
                  active
                    ? 'bg-[#8C6D53] text-[#FAF8F5] border-[#8C6D53] font-semibold'
                    : 'border-[#D9CBBE] bg-white text-[#4A4036] hover:border-[#8C6D53]'
                }`}
              >
                {concern}
              </button>
            );
          })}
        </div>
      </div>

      {/* In Stock Only Checkbox */}
      <div className="pt-2 border-t border-[#E8DCCE]">
        <label className="flex items-center gap-2.5 cursor-pointer py-1">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFilterChange({ ...filters, inStockOnly: e.target.checked })}
            className="w-4 h-4 rounded text-[#8C6D53] focus:ring-[#8C6D53] border-[#D9CBBE]"
          />
          <span className="font-medium text-xs text-[#2C2724]">In Stock Formulations Only</span>
        </label>
      </div>

    </div>
  );
};
