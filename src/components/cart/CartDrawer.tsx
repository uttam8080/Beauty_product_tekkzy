import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export const CartDrawer: React.FC = () => {
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    shippingFee,
    freeShippingThreshold,
    total,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    openCheckoutModal
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoStatus, setPromoStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    setPromoStatus(res);
    if (res.success) {
      setPromoInput('');
    }
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - (subtotal - discountAmount));
  const shippingProgress = Math.min(100, (((subtotal - discountAmount) / freeShippingThreshold) * 100));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-[#2C2724]/50 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-[#E8DCCE]"
            >
              {/* Drawer Header */}
              <div className="p-5 sm:p-6 border-b border-[#E8DCCE] bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#8C6D53]" />
                    <h2 className="font-serif text-xl text-[#2C2724] font-medium tracking-wide">
                      Your Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
                    </h2>
                  </div>
                  <button
                    onClick={closeCart}
                    className="p-1.5 text-[#8C7E72] hover:text-[#2C2724] rounded-lg transition-colors"
                    aria-label="Close bag"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Free Shipping Progress Bar */}
                <div className="mt-4 pt-3 border-t border-[#F2ECE4]">
                  {amountNeededForFreeShipping > 0 ? (
                    <p className="text-xs text-[#5C5046]">
                      Add <span className="font-semibold text-[#8C6D53]">₹{amountNeededForFreeShipping.toLocaleString('en-IN')}</span> more to unlock <span className="font-semibold">FREE Standard Delivery</span>!
                    </p>
                  ) : (
                    <p className="text-xs text-[#4A7C59] font-medium flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Congratulations! You’ve unlocked Complimentary Shipping.
                    </p>
                  )}
                  <div className="w-full bg-[#E8DCCE] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-[#8C6D53] h-full rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${shippingProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="py-16 text-center space-y-3">
                    <div className="w-16 h-16 bg-[#F4EFEB] rounded-full flex items-center justify-center mx-auto text-[#8C6D53]">
                      <ShoppingBag className="w-7 h-7" />
                    </div>
                    <p className="font-serif text-lg text-[#2C2724]">Your bag is empty</p>
                    <p className="text-xs text-[#8C7E72] max-w-xs mx-auto">
                      Discover our clean skincare formulations and glowing cosmetic essentials.
                    </p>
                    <div className="pt-3">
                      <button
                        onClick={closeCart}
                        className="px-6 py-2.5 bg-[#2C2724] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#8C6D53] transition-colors"
                      >
                        Explore Rituals
                      </button>
                    </div>
                  </div>
                ) : (
                  items.map((item, idx) => (
                    <div
                      key={`${item.product.id}-${item.selectedShade?.name || idx}`}
                      className="flex gap-4 p-3 bg-white rounded-xl border border-[#E8DCCE]/70 shadow-xs"
                    >
                      {/* Thumbnail */}
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover rounded-lg bg-[#FAF8F5] flex-shrink-0"
                      />

                      {/* Info */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4
                              style={
                                [
                                  'Celestial Gel-to-Milk Silken Cleanser',
                                  'Dew Drop Polyglutamic Peptide Serum',
                                  'Cloud Skin Ceramide Barrier Soufflé',
                                  'Luminary Liquid Champagne Highlighter'
                                ].includes(item.product.name)
                                  ? { fontFamily: "'Minggola', 'Squealer', sans-serif", fontSize: '1.6em' }
                                  : undefined
                              }
                              className="text-xs sm:text-sm font-medium text-[#2C2724] line-clamp-1"
                            >
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.selectedShade?.name)}
                              className="text-[#A8988B] hover:text-[#B91C1C] transition-colors p-0.5"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {item.selectedShade && (
                            <div className="flex items-center gap-1.5 mt-1">
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-black/10"
                                style={{ backgroundColor: item.selectedShade.hex }}
                              />
                              <span className="text-[11px] text-[#8C7E72]">{item.selectedShade.name}</span>
                            </div>
                          )}

                          <div className="mt-1 text-xs font-semibold text-[#2C2724]">
                            ₹{item.product.price.toLocaleString('en-IN')}
                          </div>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-[#D9CBBE] rounded-lg overflow-hidden bg-[#FAF8F5]">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedShade?.name)}
                              className="px-2 py-0.5 text-xs text-[#2C2724] hover:bg-[#E8DCCE]"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-2.5 text-xs font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedShade?.name)}
                              className="px-2 py-0.5 text-xs text-[#2C2724] hover:bg-[#E8DCCE]"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <span className="text-xs font-semibold text-[#8C6D53]">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer (Summary & Checkout) */}
              {items.length > 0 && (
                <div className="p-5 sm:p-6 bg-white border-t border-[#E8DCCE] space-y-4">
                  {/* Promo code input */}
                  <div>
                    {appliedPromo ? (
                      <div className="flex items-center justify-between p-2.5 bg-[#F4EFEB] rounded-xl text-xs">
                        <div className="flex items-center gap-2 text-[#8C6D53]">
                          <Tag className="w-3.5 h-3.5" />
                          <span className="font-semibold">{appliedPromo}</span> applied
                        </div>
                        <button
                          onClick={removePromoCode}
                          className="text-[11px] text-[#A8988B] hover:text-[#B91C1C] underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyPromo} className="flex gap-2">
                        <input
                          type="text"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          placeholder="Promo code (e.g. LUMERA10)"
                          className="flex-1 px-3 py-2 text-xs bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8C6D53]"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#2C2724] text-[#FAF8F5] text-xs font-semibold rounded-xl hover:bg-[#8C6D53] transition-colors uppercase tracking-wider"
                        >
                          Apply
                        </button>
                      </form>
                    )}
                    {promoStatus && !appliedPromo && (
                      <p className={`text-[11px] mt-1.5 ${promoStatus.success ? 'text-[#4A7C59]' : 'text-[#B91C1C]'}`}>
                        {promoStatus.message}
                      </p>
                    )}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-[#5C5046]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#4A7C59]">
                        <span>Discount ({appliedPromo})</span>
                        <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Standard Shipping</span>
                      <span>{shippingFee === 0 ? 'Complimentary' : `₹${shippingFee}`}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold text-[#2C2724] pt-2 border-t border-[#E8DCCE]">
                      <span>Estimated Total</span>
                      <span>₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Checkout CTA */}
                  <button
                    id="checkout-drawer-btn"
                    onClick={openCheckoutModal}
                    className="w-full py-3.5 px-4 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all group"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C7E72]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D53]" />
                    <span>Safe 256-Bit SSL Encrypted Ritual Checkout</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
