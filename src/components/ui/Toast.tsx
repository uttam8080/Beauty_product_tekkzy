import React from 'react';
import { useToast } from '../../context/ToastContext';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Info } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto flex items-center gap-3.5 bg-[#2C2724] text-[#FAF8F5] p-3.5 sm:p-4 rounded-xl shadow-2xl border border-[#4A4036]/40"
          >
            {toast.productImage ? (
              <img
                src={toast.productImage}
                alt=""
                className="w-11 h-11 rounded-lg object-cover flex-shrink-0 border border-[#FAF8F5]/10"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#8C6D53]/30 text-[#E8DCCE] flex items-center justify-center flex-shrink-0">
                {toast.type === 'success' ? <Check className="w-4 h-4 text-[#E8DCCE]" /> : <Info className="w-4 h-4 text-[#DDB68C]" />}
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold tracking-wide text-[#FAF8F5] truncate">{toast.title}</p>
              {toast.description && (
                <p className="text-[11px] text-[#D9CBBE] line-clamp-1 mt-0.5">{toast.description}</p>
              )}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#BFAEA0] hover:text-[#FAF8F5] transition-colors p-1 rounded-md"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
