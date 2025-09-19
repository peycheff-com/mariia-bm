import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import browService from '@/assets/brow-service.jpg';
import lipService from '@/assets/lip-service.jpg';
import fitnessImage from '@/assets/fitness-coaching.jpg';
import heroImage from '@/assets/hero-beauty-studio.jpg';

type FilterType = 'all' | 'brows' | 'lips' | 'eyeliner' | 'lamination';

interface GalleryItem {
  src: string;
  alt: string;
  credit: string;
  serviceTag: FilterType;
}

export const GalleryGrid = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const galleryItems: GalleryItem[] = [
    {
      src: browService,
      alt: 'Ombre brows results',
      credit: '@bm.beauty.permanent',
      serviceTag: 'brows'
    },
    {
      src: lipService,
      alt: 'Lip blush healing process',
      credit: '@bm.beauty.permanent',
      serviceTag: 'lips'
    },
    {
      src: heroImage,
      alt: 'Professional makeup studio',
      credit: '@maribo003',
      serviceTag: 'all'
    },
    {
      src: browService,
      alt: 'Brow lamination before and after',
      credit: '@bm.beauty.permanent',
      serviceTag: 'lamination'
    },
    {
      src: lipService,
      alt: 'Eyeliner permanent makeup',
      credit: '@bm.beauty.permanent',
      serviceTag: 'eyeliner'
    },
    {
      src: fitnessImage,
      alt: 'Personal training session',
      credit: '@maribo003',
      serviceTag: 'all'
    }
  ];

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t('gallery.filter_all') },
    { key: 'brows', label: t('gallery.filter_brows') },
    { key: 'lips', label: t('gallery.filter_lips') },
    { key: 'eyeliner', label: t('gallery.filter_eyeliner') },
    { key: 'lamination', label: t('gallery.filter_lamination') }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.serviceTag === activeFilter || item.serviceTag === 'all');

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.key)}
              className="transition-smooth"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-smooth"
            >
              <img 
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                <p className="text-white text-sm font-medium mb-1">{item.alt}</p>
                <p className="text-white/80 text-xs">{item.credit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('gallery.instagram_cta')}
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              window.open('https://instagram.com/bm.beauty.permanent', '_blank', 'noopener,noreferrer');
            }}
          >
            @bm.beauty.permanent
          </Button>
        </div>
      </div>
    </section>
  );
};