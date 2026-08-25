import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { FilterState, Product } from '../types';
import { ProductGrid } from '../components/product/ProductGrid';
import { FilterSidebar } from '../components/shop/FilterSidebar';
import { MobileFilterSheet } from '../components/shop/MobileFilterSheet';
import { SlidersHorizontal, Grid3X3, Grid2X2, ChevronRight, X, Sparkles } from 'lucide-react';

const INITIAL_FILTERS: FilterState = {
  category: 'all',
  subcategory: 'all',
  priceRange: [0, 5000],
  skinTypes: [],
  concerns: [],
  rating: 0,
  inStockOnly: false,
  sortBy: 'featured',
  searchQuery: ''
};

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [columns, setColumns] = useState<2 | 3 | 4>(3);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync URL query params with state
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const subcategoryParam = searchParams.get('subcategory');
    const filterParam = searchParams.get('filter');
    const searchParam = searchParams.get('search');

    setFilters(prev => ({
      ...prev,
      category: categoryParam || 'all',
      subcategory: subcategoryParam || 'all',
      sortBy: filterParam === 'new' ? 'newest' : filterParam === 'best-sellers' ? 'featured' : prev.sortBy,
      searchQuery: searchParam || ''
    }));
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // Subcategory filter
      if (filters.subcategory !== 'all' && product.subcategory !== filters.subcategory) {
        return false;
      }

      // Special Filter Param check (New / Best Seller)
      const filterParam = searchParams.get('filter');
      if (filterParam === 'new' && !product.isNewArrival && product.badge !== 'New') {
        return false;
      }
      if (filterParam === 'best-sellers' && !product.isBestSeller && product.badge !== 'Best Seller') {
        return false;
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Skin types filter
      if (filters.skinTypes.length > 0) {
        const hasSkinType = filters.skinTypes.some(st => product.skinType.includes(st) || product.skinType.includes('All'));
        if (!hasSkinType) return false;
      }

      // Concerns filter
      if (filters.concerns.length > 0) {
        const hasConcern = filters.concerns.some(c => product.concerns.includes(c));
        if (!hasConcern) return false;
      }

      // In stock only
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      // Search Query
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase().trim();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.tagline.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.subcategory.toLowerCase().includes(q) ||
          product.concerns.some(c => c.toLowerCase().includes(q));
        if (!matches) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [filters, searchParams]);

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setSearchParams({});
  };

  const getPageTitle = () => {
    const filterParam = searchParams.get('filter');
    if (filterParam === 'new') return 'New Arrivals';
    if (filterParam === 'best-sellers') return 'Best Sellers Collection';
    if (filters.category === 'makeup') return 'Luminous Makeup';
    if (filters.category === 'skincare') return 'Clinical Skincare Rituals';
    if (filters.category === 'haircare') return 'Botanical Haircare';
    if (filters.category === 'body') return 'Sensory Body Care';
    return 'Shop All Beauty';
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      
      {/* Header Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E8DCCE]/80 pt-8 pb-10 sm:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#8C7E72] mb-3">
            <Link to="/" className="hover:text-[#2C2724] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2C2724] font-medium">Shop</span>
            {filters.category !== 'all' && (
              <>
                <ChevronRight className="w-3 h-3" />
                <span className="capitalize text-[#8C6D53] font-medium">{filters.category}</span>
              </>
            )}
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#2C2724] font-medium tracking-tight">
            {getPageTitle()}
          </h1>

          <p className="text-xs sm:text-sm text-[#786C62] font-light mt-2 max-w-xl">
            Clean, cruelty-free, and dermatologically tested formulations designed for refined radiance.
          </p>

          {/* Active search chip */}
          {filters.searchQuery && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#D9CBBE] rounded-full text-xs text-[#2C2724]">
              <span>Results for: "<strong>{filters.searchQuery}</strong>"</span>
              <button
                onClick={() => {
                  setFilters({ ...filters, searchQuery: '' });
                  setSearchParams({});
                }}
                className="text-[#8C7E72] hover:text-[#2C2724]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Shop Content Area */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#E8DCCE] gap-4">
          
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-[#D9CBBE] rounded-xl text-xs font-semibold uppercase tracking-wider text-[#2C2724] shadow-2xs"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#8C6D53]" />
            <span>Filters</span>
          </button>

          {/* Product Count indicator */}
          <div className="text-xs text-[#8C7E72] font-medium">
            Showing <span className="font-bold text-[#2C2724]">{filteredProducts.length}</span> formulations
          </div>

          {/* Sort & Grid Controls */}
          <div className="flex items-center gap-4">
            
            {/* Sort Select */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#8C7E72] hidden sm:inline">Sort by:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                className="bg-white border border-[#D9CBBE] rounded-xl px-3 py-2 text-xs font-medium text-[#2C2724] focus:outline-none focus:ring-1 focus:ring-[#8C6D53] cursor-pointer shadow-2xs"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Grid Switchers (Desktop) */}
            <div className="hidden sm:flex items-center border border-[#D9CBBE] rounded-xl p-1 bg-white shadow-2xs">
              <button
                onClick={() => setColumns(2)}
                className={`p-1.5 rounded-lg transition-colors ${columns === 2 ? 'bg-[#2C2724] text-[#FAF8F5]' : 'text-[#8C7E72] hover:text-[#2C2724]'}`}
                title="2 Columns"
                aria-label="2 Columns View"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setColumns(3)}
                className={`p-1.5 rounded-lg transition-colors ${columns === 3 ? 'bg-[#2C2724] text-[#FAF8F5]' : 'text-[#8C7E72] hover:text-[#2C2724]'}`}
                title="3 Columns"
                aria-label="3 Columns View"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* 2-Column Desktop Grid (Left Filter, Right Products) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-2xl border border-[#E8DCCE] shadow-2xs h-fit sticky top-28">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onReset={handleResetFilters}
              totalResults={filteredProducts.length}
            />
          </aside>

          {/* Product Listing Grid */}
          <main className="lg:col-span-9">
            <ProductGrid products={filteredProducts} columns={columns} />
          </main>

        </div>

      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterSheet
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
        onReset={handleResetFilters}
        totalResults={filteredProducts.length}
      />

    </div>
  );
};
