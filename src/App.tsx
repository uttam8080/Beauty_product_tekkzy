/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ToastProvider } from './context/ToastContext';
import { QuickViewProvider } from './context/QuickViewContext';

// Layout & Global Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ToastContainer } from './components/ui/Toast';
import { QuickViewModal } from './components/product/QuickViewModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/cart/CheckoutModal';
import { SearchOverlay } from './components/search/SearchOverlay';
import { AccountModal } from './components/account/AccountModal';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Wishlist } from './pages/Wishlist';
import { About } from './pages/About';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <Router>
      <ToastProvider>
        <WishlistProvider>
          <CartProvider>
            <QuickViewProvider>
              <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2724] selection:bg-[#E8DCCE] selection:text-[#2C2724]">
                
                {/* Scroll to Top on Route Change */}
                <ScrollToTop />



                {/* Main Navigation Header */}
                <Navbar
                  onOpenSearch={() => setIsSearchOpen(true)}
                  onOpenAccount={() => setIsAccountOpen(true)}
                />

                {/* Main Page Routing */}
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>

                {/* Footer */}
                <Footer />

                {/* Modals & Overlays */}
                <CartDrawer />
                <CheckoutModal />
                <QuickViewModal />
                <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
                <AccountModal isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />

                {/* Notification Toasts */}
                <ToastContainer />

              </div>
            </QuickViewProvider>
          </CartProvider>
        </WishlistProvider>
      </ToastProvider>
    </Router>
  );
}
