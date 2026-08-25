import React from 'react';
import { INSTAGRAM_POSTS } from '../../data/content';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const InstagramGrid: React.FC = () => {
  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] mb-2">
            <Instagram className="w-3.5 h-3.5" />
            <span>Community Gallery</span>
          </div>
          <h2 style={{ fontFamily: "'Squealer', sans-serif" }} className="text-3xl sm:text-4xl text-[#2C2724] font-medium tracking-tight">
            Follow the Glow
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D53] hover:text-[#2C2724] hover:underline mt-1.5 inline-block"
          >
            @lumera.beauty
          </a>
        </div>

        {/* 6 Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F4EFEB] shadow-xs cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-[#2C2724]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                <Instagram className="w-5 h-5 text-[#DDB68C] mb-2" />
                <div className="flex items-center gap-3 text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
