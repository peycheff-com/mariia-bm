import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { PremiumTestimonials } from '@/components/sections/PremiumTestimonials';
import { InteractiveBeforeAfter } from '@/components/sections/InteractiveBeforeAfter';
import { PricingShowcase } from '@/components/sections/PricingShowcase';
import { CertificationShowcase } from '@/components/sections/CertificationShowcase';
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
      <PremiumTestimonials />
      <InteractiveBeforeAfter />
      <PricingShowcase />
      <CertificationShowcase />
      <ReviewStrip />
      <GalleryGrid />
      <FitnessSection />
      <LocationBlock />
      <FAQAccordion />
    </main>
  );
};

export default Index;
