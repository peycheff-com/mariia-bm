import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, MapPin } from 'lucide-react';

export const StickyCTA = () => {
  const { t } = useTranslation();

  const openMapsDirections = () => {
    const address = "Smolna 8, 00-375 Warsaw, Poland";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank');
  };

  const handleFitnessConsult = () => {
    // Scroll to fitness form or navigate to fitness page
    const fitnessSection = document.getElementById('fitness-form');
    if (fitnessSection) {
      fitnessSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/fitness';
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border shadow-elegant">
      <div className="flex items-center justify-around p-3 gap-2">
        <Button
          variant="cta"
          size="sm"
          asChild
          className="flex-1 text-xs"
        >
          <a 
            href={`${import.meta.env.VITE_BOOKSY_URL || '#'}?utm_source=web&utm_medium=sticky_cta&utm_campaign=landing&utm_content=mobile_cta`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="w-3 h-3 mr-1" />
            {t('cta.booksy')}
          </a>
        </Button>
        
        <Button
          variant="fitness"
          size="sm"
          onClick={handleFitnessConsult}
          className="flex-1 text-xs"
        >
          <Heart className="w-3 h-3 mr-1" />
          {t('cta.fitness')}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={openMapsDirections}
          className="flex-1 text-xs"
        >
          <MapPin className="w-3 h-3 mr-1" />
          {t('cta.directions')}
        </Button>
      </div>
    </div>
  );
};