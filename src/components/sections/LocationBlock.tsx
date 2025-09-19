import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, MessageCircle, Instagram } from 'lucide-react';
import { trackWhatsAppClick, trackInstagramClick } from '@/lib/analytics';

export const LocationBlock = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/48123456789', '_blank', 'noopener,noreferrer');
    trackWhatsAppClick('location_block');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/bm.beauty.permanent', '_blank', 'noopener,noreferrer');
    trackInstagramClick('location_block');
  };

  const handleDirectionsClick = () => {
    window.open('https://maps.google.com/?q=Smolna+8+Warsaw', '_blank', 'noopener,noreferrer');
  };

  const arrivalSteps = [
    t('location.step_1'),
    t('location.step_2'),
    t('location.step_3')
  ];

  return (
    <section id="location" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Location Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('location.title')}
            </h2>
            
            {/* Address */}
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg font-medium text-foreground">
                  Smolna 8, 00-375 Śródmieście, Warsaw
                </p>
                <p className="text-muted-foreground">
                  {t('location.convenience')}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 mb-8">
              <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg font-medium text-foreground mb-2">
                  {t('location.hours_title')}
                </p>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 9:00 - 19:00</p>
                  <p>Saturday: 10:00 - 18:00</p>
                  <p>Sunday: By appointment</p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button 
                variant="whatsapp"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button 
                variant="instagram"
                onClick={handleInstagramClick}
                className="flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                Instagram DM
              </Button>
              <Button 
                variant="outline"
                onClick={handleDirectionsClick}
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                {t('location.directions')}
              </Button>
            </div>
          </div>

          {/* Right - Arrival Guide */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {t('location.arrival_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {arrivalSteps.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-accent">{index + 1}</span>
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-6 h-48 bg-secondary/50 rounded-lg flex items-center justify-center border border-accent/10">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {t('location.map_loading')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};