import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Zap } from 'lucide-react';

const pricingData = [
  {
    id: 1,
    name: "Ombre Brows",
    subtitle: "Premium Powder Technique",
    price: "800",
    originalPrice: "1000",
    duration: "2-3 hours",
    includes: [
      "Consultation & Design",
      "Numbing Cream",
      "Premium Pigments",
      "Aftercare Kit",
      "Free Touch-up (6-8 weeks)",
      "Healing Guidance"
    ],
    popular: false,
    luxury: true,
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    name: "Lip Blush",
    subtitle: "Natural Enhancement",
    price: "700",
    originalPrice: "900",
    duration: "2 hours",
    includes: [
      "Color Consultation",
      "Lip Mapping",
      "Double Numbing",
      "Premium Pigments",
      "Free Touch-up",
      "Lip Care Kit"
    ],
    popular: true,
    luxury: false,
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    name: "Eyeliner",
    subtitle: "Lash Enhancement",
    price: "600",
    originalPrice: "750",
    duration: "1.5-2 hours",
    includes: [
      "Precision Mapping",
      "Multiple Numbing",
      "Waterproof Pigments",
      "Aftercare Instructions",
      "Free Touch-up",
      "Eye Care Kit"
    ],
    popular: false,
    luxury: false,
    image: "/api/placeholder/300/200"
  }
];

const packageDeals = [
  {
    id: 1,
    name: "Full Face Transformation",
    services: ["Ombre Brows", "Lip Blush", "Eyeliner"],
    price: "1800",
    originalPrice: "2100",
    savings: "300",
    duration: "6-8 hours (2 sessions)",
    icon: Crown,
    luxury: true
  },
  {
    id: 2,
    name: "Perfect Pair",
    services: ["Ombre Brows", "Lip Blush"],
    price: "1200",
    originalPrice: "1500",
    savings: "300",
    duration: "4-5 hours",
    icon: Star,
    luxury: false
  }
];

export const PricingShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-cream to-background relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-luxury rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-luxury text-white px-6 py-2 rounded-full mb-6 shadow-glow">
            <Zap className="w-4 h-4" />
            <span className="font-semibold">Premium Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t('pricing.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Individual Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingData.map((service, index) => (
            <Card 
              key={service.id}
              className={`group relative overflow-hidden transition-luxury hover:shadow-premium ${
                service.popular ? 'ring-2 ring-rose-gold ring-offset-4' : ''
              } ${
                service.luxury ? 'bg-gradient-to-br from-card to-pearl' : 'bg-card/80'
              } backdrop-blur-sm border-border/50 hover:border-rose-gold/30 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-rose-gold text-white font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              {service.luxury && (
                <div className="absolute top-4 left-4">
                  <Crown className="w-5 h-5 text-gold-accent" />
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4 shadow-soft">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{service.name}</h3>
                  <p className="text-muted-foreground">{service.subtitle}</p>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-rose-gold">{service.price} zł</span>
                    <span className="text-lg text-muted-foreground line-through">{service.originalPrice} zł</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">Duration: {service.duration}</p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-rose-gold flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={service.popular ? "booksy" : "hero"}
                  className="w-full shadow-button hover:shadow-elegant transform hover:scale-105 transition-spring"
                  asChild
                >
                  <a 
                    href={`${import.meta.env.VITE_BOOKSY_URL || '#'}?service=${encodeURIComponent(service.name)}&utm_source=web&utm_medium=pricing&utm_campaign=landing&utm_content=${service.name.toLowerCase().replace(' ', '_')}_cta`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('pricing.book_service')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Package Deals */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {t('pricing.package_deals_title')}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t('pricing.package_deals_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packageDeals.map((deal, index) => (
              <Card 
                key={deal.id}
                className={`group relative overflow-hidden transition-luxury hover:shadow-premium ${
                  deal.luxury ? 'bg-gradient-to-br from-gold-accent/10 to-rose-gold/10' : 'bg-card/80'
                } backdrop-blur-sm border-border/50 hover:border-rose-gold/30 animate-scale-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full ${
                      deal.luxury ? 'bg-gradient-luxury' : 'bg-gradient-primary'
                    } text-white shadow-glow`}>
                      <deal.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{deal.name}</h4>
                      <p className="text-sm text-muted-foreground">{deal.duration}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {deal.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-rose-gold" />
                        <span className="text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-rose-gold">{deal.price} zł</span>
                        <span className="text-lg text-muted-foreground line-through">{deal.originalPrice} zł</span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold">Save {deal.savings} zł</div>
                    </div>

                    <Button 
                      variant={deal.luxury ? "booksy" : "hero"}
                      size="lg"
                      className="shadow-button hover:shadow-elegant transform hover:scale-105 transition-spring"
                      asChild
                    >
                      <a 
                        href={`${import.meta.env.VITE_BOOKSY_URL || '#'}?package=${encodeURIComponent(deal.name)}&utm_source=web&utm_medium=pricing&utm_campaign=landing&utm_content=${deal.name.toLowerCase().replace(' ', '_')}_package_cta`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('pricing.book_package')}
                      </a>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Financing Notice */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blush to-pearl rounded-2xl shadow-soft">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              {t('pricing.financing_title')}
            </h4>
            <p className="text-muted-foreground">
              {t('pricing.financing_subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};