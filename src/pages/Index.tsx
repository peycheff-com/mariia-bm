import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { FitnessSection } from '@/components/sections/FitnessSection';

const Index = () => {
  return (
    <main className="pb-20 md:pb-0">
      <HeroSection />
      <ServicesGrid />
      <FitnessSection />
    </main>
  );
};

export default Index;
