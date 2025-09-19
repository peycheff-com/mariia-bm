import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import heroImage from '@/assets/hero-beauty-studio.jpg';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="BM Beauty Studio Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-border animate-fade-in">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-rose-gold text-rose-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">5.0/5 Booksy Reviews</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-up">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button 
              variant="booksy" 
              size="lg"
              asChild
              className="text-base px-8"
            >
              <a 
                href={`${import.meta.env.VITE_BOOKSY_URL || '#'}?utm_source=web&utm_medium=hero&utm_campaign=landing&utm_content=primary_cta`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('hero.primary_cta')}
              </a>
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="text-base px-6"
            >
              <a href="#services">
                {t('hero.secondary_cta_1')}
              </a>
            </Button>
            
            <Button 
              variant="fitness" 
              size="lg"
              asChild
              className="text-base px-6"
            >
              <a href="#fitness">
                {t('hero.secondary_cta_2')}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-rose-gold to-rose-gold-light blur-3xl" />
      </div>
    </section>
  );
};