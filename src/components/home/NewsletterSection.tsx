import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-[#E8DCCE]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] mb-3">
          <span>The LUMÉRA Circle</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2724] font-medium tracking-tight">
          A little beauty in your inbox.
        </h2>

        <p className="text-xs sm:text-sm text-[#786C62] font-light max-w-md mx-auto mt-3 leading-relaxed">
          Sign up for new launches, beauty rituals, exclusive member offers, and 10% off your first order with code <span className="font-semibold text-[#2C2724]">LUMERA10</span>.
        </p>

        <div className="mt-8 max-w-md mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-white rounded-2xl border border-[#D9CBBE] shadow-xs flex items-center justify-center gap-2.5 text-xs font-medium text-[#4A7C59]"
            >
              <Check className="w-4 h-4 text-[#4A7C59]" />
              <span>You're on the list. Check your inbox for welcome gifts.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3.5 text-xs sm:text-sm bg-white border border-[#D9CBBE] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8C6D53] placeholder:text-[#A8988B] text-[#2C2724] shadow-2xs"
              />
              <button
                type="submit"
                className="py-3.5 px-6 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs uppercase tracking-[0.18em] font-semibold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        <p className="text-[11px] text-[#A8988B] mt-4">
          By signing up, you agree to receive digital newsletters. You may unsubscribe anytime.
        </p>

      </div>
    </section>
  );
};
