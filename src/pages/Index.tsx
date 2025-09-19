import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ReviewStrip } from '@/components/sections/ReviewStrip';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { FitnessSection } from '@/components/sections/FitnessSection';
import { LocationBlock } from '@/components/sections/LocationBlock';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

const Index = () => {
  return (
    <main className="pb-20 md:pb-0">
      <HeroSection />
      <ServicesGrid />
      <ReviewStrip />
      <GalleryGrid />
      <FitnessSection />
      <LocationBlock />
      <FAQAccordion />
    </main>
  );
};

export default Index;
