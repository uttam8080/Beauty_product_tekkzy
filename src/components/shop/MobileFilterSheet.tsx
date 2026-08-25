import React from 'react';
import { FilterState } from '../../types';
import { FilterSidebar } from './FilterSidebar';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalResults: number;
}

export const MobileFilterSheet: React.FC<MobileFilterSheetProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onReset,
  totalResults
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#2C2724]/50 backdrop-blur-xs"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-xs sm:max-w-sm bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#E8DCCE]"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DCCE]">
                <h3 className="font-serif text-xl text-[#2C2724] font-medium">Filter Formulations</h3>
                <button onClick={onClose} className="p-1 text-[#8C7E72] hover:text-[#2C2724]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={onFilterChange}
                  onReset={onReset}
                  totalResults={totalResults}
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DCCE]">
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#2C2724] text-[#FAF8F5] font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg"
              >
                Apply Filters ({totalResults} Formulations)
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
