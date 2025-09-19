import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackBooksyClick } from '@/lib/analytics';

export const ReviewStrip = () => {
  const { t, i18n } = useTranslation();

  const handleBooksyClick = () => {
    const url = `${import.meta.env.VITE_BOOKSY_URL || '#'}?utm_source=web&utm_medium=reviews&utm_campaign=landing&utm_content=review-strip`;
    window.open(url, '_blank', 'noopener,noreferrer');
    trackBooksyClick('all_services', 'review_strip', i18n.language);
  };

  const reviews = [
    {
      text: t('reviews.review_1'),
      service: t('services.ombre_brows'),
      rating: 5
    },
    {
      text: t('reviews.review_2'),
      service: t('services.lip_blush'),
      rating: 5
    },
    {
      text: t('reviews.review_3'),
      service: t('services.brow_lamination'),
      rating: 5
    }
  ];

  return (
    <section className="py-12 bg-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">5.0/5</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('reviews.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-accent/10">
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{review.text}"</p>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">{review.service}</span>
                <span className="mx-2">•</span>
                <span>{t('reviews.verified')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="booksy" 
            size="lg"
            onClick={handleBooksyClick}
            className="px-8"
          >
            {t('reviews.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};