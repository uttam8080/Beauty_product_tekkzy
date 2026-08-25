import React from 'react';
import { MeeshoCategoryBubbles } from '../components/home/MeeshoCategoryBubbles';
import { Hero } from '../components/home/Hero';
import { CategorySection } from '../components/home/CategorySection';
import { BestSellersSection } from '../components/home/BestSellersSection';
import { EditorialSection } from '../components/home/EditorialSection';
import { RoutineBuilder } from '../components/home/RoutineBuilder';

import { InstagramGrid } from '../components/home/InstagramGrid';
import { FaqSection } from '../components/home/FaqSection';

export const Home: React.FC = () => {
  return (
    <div className="overflow-x-clip bg-[#FAF8F5]">
      <Hero />
      <div className="w-full h-[1.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(44, 39, 36, 0.25), transparent)' }} />
      <MeeshoCategoryBubbles />
      <div className="w-full h-[1.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(44, 39, 36, 0.25), transparent)' }} />
      <CategorySection />
      <div className="w-full h-[1.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(44, 39, 36, 0.25), transparent)' }} />
      <BestSellersSection />
      <div className="w-full h-[1.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(44, 39, 36, 0.25), transparent)' }} />
      <EditorialSection />
      <div className="w-full h-[1.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(44, 39, 36, 0.25), transparent)' }} />
      <RoutineBuilder />
      <div className="w-full h-[1.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(44, 39, 36, 0.25), transparent)' }} />

      <InstagramGrid />
      <div className="w-full h-[1.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(44, 39, 36, 0.25), transparent)' }} />
      <FaqSection />
    </div>
  );
};
