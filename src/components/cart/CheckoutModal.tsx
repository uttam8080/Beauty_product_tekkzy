import React, { useState } from 'react';
import { X, Check, Shield, Sparkles, CreditCard, Smartphone, Truck, ArrowLeft, PackageCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutModalOpen, closeCheckoutModal, items, subtotal, discountAmount, shippingFee, total, clearCart } = useCart();

  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [formData, setFormData] = useState({
    fullName: 'Sophia Reynolds',
    email: 'sophia.reynolds@example.com',
    phone: '+91 98765 43210',
    address: '14A, Magnolia Boulevard, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    shippingMethod: 'standard',
    paymentMethod: 'card'
  });
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutModalOpen) return null;

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `LUM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('success');

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8C6D53', '#DDB68C', '#FAF8F5', '#2C2724']
      });
    } catch {
      // ignore
    }

    clearCart();
  };

  const handleClose = () => {
    setStep('shipping');
    closeCheckoutModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-[#2C2724]/60 backdrop-blur-sm"
        />

        {/* Checkout Modal Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative bg-white w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#E8DCCE]"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#FAF8F5] border-b border-[#E8DCCE] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl font-medium tracking-widest uppercase text-[#2C2724]">
                  VÉLURE
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#8C6D53]/15 text-[#8C6D53] rounded-md">
                  Demo Checkout
                </span>
              </div>
              <p className="text-[11px] text-[#8C7E72] mt-0.5">
                This is a frontend demonstration and does not process real payments.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 text-[#8C7E72] hover:text-[#2C2724] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 max-h-[75vh] overflow-y-auto">
            {step === 'shipping' && (
              <form onSubmit={handleNextToPayment} className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#E8DCCE] pb-3">
                  <h3 className="font-serif text-lg text-[#2C2724]">1. Shipping Information</h3>
                  <span className="text-xs text-[#8C6D53] font-medium">Step 1 of 2</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A4036] uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:ring-1 focus:ring-[#8C6D53] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A4036] uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:ring-1 focus:ring-[#8C6D53] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#4A4036] uppercase tracking-wider mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:ring-1 focus:ring-[#8C6D53] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A4036] uppercase tracking-wider mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:ring-1 focus:ring-[#8C6D53] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A4036] uppercase tracking-wider mb-1">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9CBBE] rounded-xl focus:ring-1 focus:ring-[#8C6D53] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Delivery Options */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#4A4036] uppercase tracking-wider mb-2">
                    Delivery Speed
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center justify-between p-3 border border-[#8C6D53] bg-[#FAF8F5] rounded-xl cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <Truck className="w-4 h-4 text-[#8C6D53]" />
                        <div>
                          <p className="text-xs font-semibold text-[#2C2724]">Standard Delivery</p>
                          <p className="text-[11px] text-[#8C7E72]">3–4 Business Days</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#8C6D53]">
                        {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8DCCE] flex items-center justify-between">
                  <div className="text-xs text-[#5C5046]">
                    Order Total: <span className="font-bold text-[#2C2724] text-sm">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-6 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            )}

            {step === 'payment' && (
              <form onSubmit={handlePlaceOrder} className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#E8DCCE] pb-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setStep('shipping')}
                      className="p-1 hover:bg-[#FAF8F5] rounded-md text-[#8C7E72]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <h3 className="font-serif text-lg text-[#2C2724]">2. Payment Method</h3>
                  </div>
                  <span className="text-xs text-[#8C6D53] font-medium">Step 2 of 2</span>
                </div>

                <div className="space-y-3">
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === 'card' ? 'border-[#8C6D53] bg-[#FAF8F5]' : 'border-[#E8DCCE]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-[#8C6D53]" />
                      <div>
                        <p className="text-xs font-semibold text-[#2C2724]">Credit / Debit Card</p>
                        <p className="text-[11px] text-[#8C7E72]">Visa, Mastercard, Amex, RuPay</p>
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.paymentMethod === 'card' ? 'border-[#8C6D53]' : 'border-[#D9CBBE]'}`}>
                      {formData.paymentMethod === 'card' && <div className="w-2 h-2 rounded-full bg-[#8C6D53]" />}
                    </div>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                    className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === 'upi' ? 'border-[#8C6D53] bg-[#FAF8F5]' : 'border-[#E8DCCE]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-[#8C6D53]" />
                      <div>
                        <p className="text-xs font-semibold text-[#2C2724]">UPI & QR Instant Pay</p>
                        <p className="text-[11px] text-[#8C7E72]">Google Pay, PhonePe, Paytm, Cred</p>
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.paymentMethod === 'upi' ? 'border-[#8C6D53]' : 'border-[#D9CBBE]'}`}>
                      {formData.paymentMethod === 'upi' && <div className="w-2 h-2 rounded-full bg-[#8C6D53]" />}
                    </div>
                  </label>
                </div>

                {/* Simulated payment detail box */}
                <div className="p-4 bg-[#F7F4F0] rounded-xl border border-[#E8DCCE] text-xs space-y-2">
                  <div className="flex items-center justify-between text-[#5C5046]">
                    <span>Delivering to:</span>
                    <span className="font-medium text-[#2C2724]">{formData.fullName} ({formData.city})</span>
                  </div>
                  <div className="flex items-center justify-between text-[#5C5046]">
                    <span>Total Payable:</span>
                    <span className="font-bold text-[#2C2724] text-sm">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8DCCE] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep('shipping')}
                    className="text-xs text-[#8C6D53] hover:underline"
                  >
                    Back to Shipping
                  </button>
                  <button
                    type="submit"
                    className="py-3.5 px-6 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4 text-[#DDB68C]" />
                    <span>Complete Demo Order</span>
                  </button>
                </div>
              </form>
            )}

            {step === 'success' && (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-[#4A7C59]/15 text-[#4A7C59] rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <PackageCheck className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D53]">
                    Ritual Confirmed
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2724] mt-1 font-medium">
                    Thank You, {formData.fullName.split(' ')[0]}
                  </h3>
                  <p className="text-xs text-[#8C7E72] mt-1">
                    Order confirmation #{orderId} has been simulated for this demo showcase.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DCCE] max-w-md mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between border-b border-[#E8DCCE]/70 pb-2">
                    <span className="text-[#8C7E72]">Estimated Arrival:</span>
                    <span className="font-semibold text-[#2C2724]">3 Business Days</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8DCCE]/70 pb-2">
                    <span className="text-[#8C7E72]">Shipping Address:</span>
                    <span className="font-medium text-[#2C2724] text-right">{formData.address}, {formData.city}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#8C7E72]">Amount Paid:</span>
                    <span className="font-bold text-[#8C6D53]">₹{total.toLocaleString('en-IN')} (Demo)</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleClose}
                    className="py-3 px-8 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors"
                  >
                    Continue Exploring VÉLURE
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
