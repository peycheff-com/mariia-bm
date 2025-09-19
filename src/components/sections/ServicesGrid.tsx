import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Euro } from 'lucide-react';
import browService from '@/assets/brow-service.jpg';
import lipService from '@/assets/lip-service.jpg';

const serviceImages = {
  ombre_brows: browService,
  lip_blush: lipService,
  eyeliner: browService, // Placeholder - would use actual eyeliner image
  brow_lamination: browService, // Placeholder - would use actual lamination image
};

export const ServicesGrid = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'ombre_brows',
      name: t('services.ombre_brows'),
      duration: '2.5-3h',
      priceRange: '800-1200 PLN',
      image: serviceImages.ombre_brows,
    },
    {
      key: 'lip_blush',
      name: t('services.lip_blush'),
      duration: '2-2.5h', 
      priceRange: '700-1000 PLN',
      image: serviceImages.lip_blush,
    },
    {
      key: 'eyeliner',
      name: t('services.eyeliner'),
      duration: '1.5-2h',
      priceRange: '600-900 PLN',
      image: serviceImages.eyeliner,
    },
    {
      key: 'brow_lamination',
      name: t('services.brow_lamination'),
      duration: '1-1.5h',
      priceRange: '150-250 PLN',
      image: serviceImages.brow_lamination,
    },
  ];

  const handleServiceClick = (serviceKey: string) => {
    const url = `${import.meta.env.VITE_BOOKSY_URL || '#'}?utm_source=web&utm_medium=services&utm_campaign=landing&utm_content=service-${serviceKey}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Track analytics event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'click_booksy', {
        service_name: serviceKey,
        page_location: window.location.href,
        language: navigator.language,
      });
    }
  };

  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.key} className="group hover:shadow-elegant transition-smooth overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t('services.benefit')}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{t('services.duration')} {service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Euro className="w-4 h-4" />
                    <span>{t('services.price')} {service.priceRange}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="booksy" 
                  size="sm" 
                  onClick={() => handleServiceClick(service.key)}
                  className="w-full"
                >
                  {t('services.book_service')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};