import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="relative bg-[#211D1A] text-[#FAF8F5] pt-16 pb-12">
      {/* Curved Section Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[25px] sm:h-[40px] md:h-[50px]"
          style={{ fill: '#211D1A' }}
        >
          <path d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z" />
        </svg>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Brand Promise Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pb-12 mb-12 border-b border-[#3D352E]/70">
          <div className="p-4 sm:p-5 bg-[#2C2824]/60 rounded-2xl border border-[#3D352E]/70 flex flex-col justify-center text-center shadow-xs">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">100% Clean Actives</h4>
            <p className="text-[10px] sm:text-[11px] text-[#BFAEA0] mt-1">Paraben & sulfate-free</p>
          </div>

          <div className="p-4 sm:p-5 bg-[#2C2824]/60 rounded-2xl border border-[#3D352E]/70 flex flex-col justify-center text-center shadow-xs">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Cruelty-Free</h4>
            <p className="text-[10px] sm:text-[11px] text-[#BFAEA0] mt-1">Leaping Bunny verified</p>
          </div>

          <div className="p-4 sm:p-5 bg-[#2C2824]/60 rounded-2xl border border-[#3D352E]/70 flex flex-col justify-center text-center shadow-xs">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Derm Approved</h4>
            <p className="text-[10px] sm:text-[11px] text-[#BFAEA0] mt-1">Safe for sensitive skin</p>
          </div>

          <div className="p-4 sm:p-5 bg-[#2C2824]/60 rounded-2xl border border-[#3D352E]/70 flex flex-col justify-center text-center shadow-xs">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Eco Packaging</h4>
            <p className="text-[10px] sm:text-[11px] text-[#BFAEA0] mt-1">Recyclable glass & FSC card</p>
          </div>
        </div>

        {/* Multi-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3D352E]/70">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.25em] font-medium text-[#FAF8F5] uppercase">
                LUMÉRA
              </span>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#DDB68C] -mt-0.5">Beauty, Refined</p>
            </Link>
            <p className="text-xs leading-relaxed text-[#BFAEA0] max-w-sm">
              Formulating clean, multi-peptide skincare and weightless cosmetics designed to elevate your everyday ritual into moments of pure mindful indulgence.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#DDB68C]">
              <span className="tracking-wide">Born in Paris & Crafted for global beauty rituals</span>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8DCCE] mb-4">Shop</h3>
            <ul className="space-y-2.5 text-xs text-[#A8988B]">
              <li><Link to="/shop?filter=new" className="hover:text-[#FAF8F5] transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?filter=best-sellers" className="hover:text-[#FAF8F5] transition-colors">Best Sellers</Link></li>
              <li><Link to="/shop?category=makeup" className="hover:text-[#FAF8F5] transition-colors">Makeup Collection</Link></li>
              <li><Link to="/shop?category=skincare" className="hover:text-[#FAF8F5] transition-colors">Skincare Rituals</Link></li>
              <li><Link to="/shop?category=haircare" className="hover:text-[#FAF8F5] transition-colors">Botanical Haircare</Link></li>
              <li><Link to="/shop?category=body" className="hover:text-[#FAF8F5] transition-colors">Body Care</Link></li>
            </ul>
          </div>

          {/* About Col */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8DCCE] mb-4">About</h3>
            <ul className="space-y-2.5 text-xs text-[#A8988B]">
              <li><Link to="/about" className="hover:text-[#FAF8F5] transition-colors">Our Philosophy</Link></li>
              <li><Link to="/about#ingredients" className="hover:text-[#FAF8F5] transition-colors">Ingredient Transparency</Link></li>
              <li><Link to="/about#sustainability" className="hover:text-[#FAF8F5] transition-colors">Sustainability & Glass</Link></li>
              <li><Link to="/about" className="hover:text-[#FAF8F5] transition-colors">Clinical Studies</Link></li>
              <li><Link to="/about" className="hover:text-[#FAF8F5] transition-colors">The LUMÉRA Journal</Link></li>
            </ul>
          </div>

          {/* Help & Follow Col */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8DCCE] mb-4">Client Care</h3>
            <ul className="space-y-2.5 text-xs text-[#A8988B] mb-6">
              <li><span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">Complimentary Shipping</span></li>
              <li><span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">30-Day Ritual Guarantee</span></li>
              <li><span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">Track Your Order</span></li>
              <li><span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">care@lumera.beauty</span></li>
            </ul>

            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8DCCE] mb-3">Follow Us</h3>
            <div className="flex gap-3 text-xs text-[#A8988B]">
              <a href="#instagram" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-0.5">
                Instagram <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="#pinterest" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-0.5">
                Pinterest <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
