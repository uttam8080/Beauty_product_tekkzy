import React, { useState } from 'react';
import { X, User, Package, MapPin, Heart, Shield, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'rewards'>('profile');
  const { wishlistCount } = useWishlist();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2C2724]/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#E8DCCE]"
        >
          {/* Header */}
          <div className="p-6 bg-[#FAF8F5] border-b border-[#E8DCCE] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#8C6D53] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-semibold shadow-sm">
                SR
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#2C2724] font-medium leading-tight">
                  Sophia Reynolds
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#8C6D53] mt-0.5">
                  <span>Vélure VIP Gold Circle</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#8C7E72] hover:text-[#2C2724] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#E8DCCE] text-xs uppercase tracking-wider font-semibold">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                activeTab === 'profile'
                  ? 'border-[#8C6D53] text-[#8C6D53] bg-white'
                  : 'border-transparent text-[#8C7E72] hover:text-[#2C2724]'
              }`}
            >
              Beauty Profile
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                activeTab === 'orders'
                  ? 'border-[#8C6D53] text-[#8C6D53] bg-white'
                  : 'border-transparent text-[#8C7E72] hover:text-[#2C2724]'
              }`}
            >
              Past Orders
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                activeTab === 'rewards'
                  ? 'border-[#8C6D53] text-[#8C6D53] bg-white'
                  : 'border-transparent text-[#8C7E72] hover:text-[#2C2724]'
              }`}
            >
              Glow Points (450)
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
            {activeTab === 'profile' && (
              <div className="space-y-4 text-xs">
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8DCCE] space-y-2.5">
                  <h4 className="font-semibold uppercase tracking-wider text-[#4A4036] text-[11px]">
                    My Skin & Undertone Profile
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-[#5C5046]">
                    <div>
                      <span className="text-[#8C7E72] block">Skin Type:</span>
                      <span className="font-medium text-[#2C2724]">Combination / Sensitive</span>
                    </div>
                    <div>
                      <span className="text-[#8C7E72] block">Primary Concern:</span>
                      <span className="font-medium text-[#2C2724]">Barrier Repair & Glow</span>
                    </div>
                    <div>
                      <span className="text-[#8C7E72] block">Foundation Match:</span>
                      <span className="font-medium text-[#2C2724]">03 Cashmere</span>
                    </div>
                    <div>
                      <span className="text-[#8C7E72] block">Preferred Finish:</span>
                      <span className="font-medium text-[#2C2724]">Satin Dewy</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8DCCE] space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold uppercase tracking-wider text-[#4A4036] text-[11px]">
                      Default Shipping Address
                    </h4>
                    <span className="text-[#8C6D53] text-[11px]">Edit</span>
                  </div>
                  <p className="text-[#5C5046]">
                    14A, Magnolia Boulevard, Bandra West, Mumbai 400050, Maharashtra, India
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    to="/wishlist"
                    onClick={onClose}
                    className="flex items-center gap-2 text-[#8C6D53] hover:underline font-medium"
                  >
                    <Heart className="w-4 h-4" />
                    <span>View Saved Wishlist ({wishlistCount})</span>
                  </Link>

                  <span className="text-[#8C7E72] cursor-pointer hover:text-[#2C2724]">Sign Out (Demo)</span>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-3 text-xs">
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8DCCE] space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-semibold text-[#2C2724]">Order #LUM-772910</span>
                      <p className="text-[11px] text-[#8C7E72]">Placed on Aug 18, 2026</p>
                    </div>
                    <span className="px-2 py-0.5 bg-[#4A7C59]/15 text-[#4A7C59] font-medium rounded-full text-[10px]">
                      Delivered
                    </span>
                  </div>
                  <p className="text-[#5C5046]">Dew Drop Serum, Rose Silk Lip Tint (Petal Nude)</p>
                  <div className="pt-1 flex justify-between font-semibold text-[#2C2724]">
                    <span>Total: ₹2,698</span>
                    <span className="text-[#8C6D53] hover:underline cursor-pointer">Reorder Ritual</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'rewards' && (
              <div className="space-y-4 text-xs text-center py-2">
                <div className="p-5 bg-gradient-to-br from-[#F4EFEB] to-[#E8DCCE] rounded-2xl border border-[#D9CBBE] text-[#2C2724]">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-[#8C6D53]">
                    Available Balance
                  </span>
                  <div className="text-3xl font-serif font-bold text-[#2C2724] my-1">450 Points</div>
                  <p className="text-[11px] text-[#5C5046]">
                    You have ₹450 redeemable toward your next luxury beauty formulation.
                  </p>
                </div>

                <div className="text-left space-y-2 pt-2">
                  <h5 className="font-semibold text-[#2C2724] uppercase tracking-wider text-[11px]">
                    How to Earn More Points
                  </h5>
                  <div className="flex items-center gap-2 text-[#5C5046]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#8C6D53]" />
                    <span>Earn 1 Point for every ₹10 spent on VÉLURE rituals</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5C5046]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#8C6D53]" />
                    <span>Receive 100 Points on your birthday</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5C5046]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#8C6D53]" />
                    <span>Earn 50 Points for every verified product review</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
