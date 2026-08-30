import React from 'react';
import { MeeshoCategoryBubbles } from '../components/home/MeeshoCategoryBubbles';
import { Hero } from '../components/home/Hero';
import { CategorySection } from '../components/home/CategorySection';
import { BestSellersSection } from '../components/home/BestSellersSection';
import { EditorialSection } from '../components/home/EditorialSection';
import { RoutineBuilder } from '../components/home/RoutineBuilder';
import { AboutSection } from '../components/home/AboutSection';
import { OurStorySection } from '../components/home/OurStorySection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { StorehouseShowcase } from '../components/home/StorehouseShowcase';
import { WavyBubbleDivider } from '../components/ui/WavyBubbleDivider';

export const Home: React.FC = () => {
  return (
    <div className="overflow-x-clip bg-[#e3dcd2]">
      <Hero />
      <MeeshoCategoryBubbles />
      <div className="w-full h-[1.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(44, 39, 36, 0.25), transparent)' }} />

      <CategorySection />

      {/* 2. Divider: Categories to Best Sellers */}
      <WavyBubbleDivider topColor="#FAF8F5" bottomColor="#ffffff" height={80} />

      <BestSellersSection />

      {/* 3. Divider: Best Sellers to Editorial */}
      <WavyBubbleDivider topColor="#ffffff" bottomColor="editorialSplit" height={80} />

      <EditorialSection />


      <StorehouseShowcase />

      {/* 5. Divider: Storehouse to About Us */}
      <WavyBubbleDivider topColor="#e3dcd2" bottomColor="#ffffff" height={80} />

      <AboutSection />


      <OurStorySection />


      <TestimonialsSection />
    </div>
  );
};
