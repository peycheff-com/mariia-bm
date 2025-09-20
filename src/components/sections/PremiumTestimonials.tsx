import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    service: "Ombre Brows + Lip Blush",
    rating: 5,
    text: "Absolutely incredible work! My brows look so natural and my lips have the perfect subtle color. The healing process was exactly as described.",
    image: "/api/placeholder/80/80",
    verified: true,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Maria Nowak",
    service: "Eyeliner + Brow Lamination",
    rating: 5,
    text: "Professional, clean, and the results exceeded my expectations. The eyeliner is so precise and natural looking. Worth every zloty!",
    image: "/api/placeholder/80/80",
    verified: true,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Joanna Wiśniewska",
    service: "Full PMU Transformation",
    rating: 5,
    text: "Complete game changer! All three services done perfectly. I wake up looking ready for the day. The consultation was thorough and professional.",
    image: "/api/placeholder/80/80",
    verified: true,
    date: "3 weeks ago"
  }
];

export const PremiumTestimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-pearl to-cream relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-luxury rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-luxury text-white px-6 py-2 rounded-full mb-6 shadow-glow">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold">Verified Reviews</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t('testimonials.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-premium transition-luxury bg-card/80 backdrop-blur-sm border-border/50 hover:border-rose-gold/30 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-rose-gold opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rose-gold text-rose-gold" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">Verified</span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                    <div className="text-xs text-rose-gold">{testimonial.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-gold mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-gold mb-2">5.0</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-gold mb-2">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-gold mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="booksy" 
            size="lg"
            asChild
            className="text-lg px-10 py-6 shadow-premium hover:shadow-glow transform hover:scale-105 transition-luxury"
          >
            <a 
              href={`${import.meta.env.VITE_BOOKSY_URL || '#'}?utm_source=web&utm_medium=testimonials&utm_campaign=landing&utm_content=read_reviews_cta`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('testimonials.cta')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};