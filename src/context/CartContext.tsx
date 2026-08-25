import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product, ProductShade } from '../types';
import { PROMO_CODES } from '../data/content';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number, shade?: ProductShade) => void;
  removeFromCart: (productId: string, shadeName?: string) => void;
  updateQuantity: (productId: string, quantity: number, shadeName?: string) => void;
  clearCart: () => void;
  appliedPromo: string | null;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  promoDiscountPercent: number;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  freeShippingThreshold: number;
  total: number;
  itemCount: number;
  isCheckoutModalOpen: boolean;
  openCheckoutModal: () => void;
  closeCheckoutModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_FEE = 99;

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lumera_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(() => {
    try {
      return localStorage.getItem('lumera_promo') || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lumera_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  useEffect(() => {
    try {
      if (appliedPromo) {
        localStorage.setItem('lumera_promo', appliedPromo);
      } else {
        localStorage.removeItem('lumera_promo');
      }
    } catch {
      // ignore
    }
  }, [appliedPromo]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const openCheckoutModal = () => {
    setIsOpen(false);
    setIsCheckoutModalOpen(true);
  };
  const closeCheckoutModal = () => setIsCheckoutModalOpen(false);

  const addToCart = (product: Product, quantity = 1, shade?: ProductShade) => {
    const chosenShade = shade || (product.shades && product.shades.length > 0 ? product.shades[0] : undefined);
    
    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        item => item.product.id === product.id && item.selectedShade?.name === chosenShade?.name
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...prevItems, { product, quantity, selectedShade: chosenShade }];
      }
    });

    // Auto open cart drawer
    setIsOpen(true);
  };

  const removeFromCart = (productId: string, shadeName?: string) => {
    setItems(prev => prev.filter(
      item => !(item.product.id === productId && (shadeName ? item.selectedShade?.name === shadeName : true))
    ));
  };

  const updateQuantity = (productId: string, quantity: number, shadeName?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, shadeName);
      return;
    }

    setItems(prev => prev.map(item => {
      if (item.product.id === productId && (!shadeName || item.selectedShade?.name === shadeName)) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setItems([]);
    setAppliedPromo(null);
  };

  const applyPromoCode = (code: string) => {
    const formatted = code.trim().toUpperCase();
    if (PROMO_CODES[formatted]) {
      setAppliedPromo(formatted);
      return {
        success: true,
        message: `Promo code "${formatted}" applied! (${PROMO_CODES[formatted].discountPercent}% off)`
      };
    }
    return {
      success: false,
      message: 'Invalid promo code. Try LUMERA10 or GLOW20'
    };
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const promoDiscountPercent = appliedPromo && PROMO_CODES[appliedPromo] ? PROMO_CODES[appliedPromo].discountPercent : 0;
  const discountAmount = Math.round((subtotal * promoDiscountPercent) / 100);
  const discountedSubtotal = subtotal - discountAmount;
  
  const shippingFee = subtotal === 0 ? 0 : (discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE);
  const total = Math.max(0, discountedSubtotal + shippingFee);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        promoDiscountPercent,
        subtotal,
        discountAmount,
        shippingFee,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        total,
        itemCount,
        isCheckoutModalOpen,
        openCheckoutModal,
        closeCheckoutModal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
