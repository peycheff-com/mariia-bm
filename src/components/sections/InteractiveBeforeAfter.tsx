import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

const beforeAfterData = [
  {
    id: 1,
    service: "Ombre Brows",
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    description: "Natural gradient technique creating perfectly shaped brows",
    technique: "Powder Brows Method",
    duration: "18-24 months"
  },
  {
    id: 2,
    service: "Lip Blush",
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    description: "Enhanced natural lip color with perfect symmetry",
    technique: "Lip Blush Technique",
    duration: "12-18 months"
  },
  {
    id: 3,
    service: "Eyeliner",
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    description: "Precise lash enhancement for naturally defined eyes",
    technique: "Lash Line Enhancement",
    duration: "18-24 months"
  },
  {
    id: 4,
    service: "Brow Lamination",
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    description: "Groomed, fuller-looking brows with perfect shape",
    technique: "Keratin Treatment",
    duration: "6-8 weeks"
  }
];

export const InteractiveBeforeAfter = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAfter, setIsAfter] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
    setIsAfter(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
    setIsAfter(false);
  };

  const currentItem = beforeAfterData[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-blush relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-64 h-64 bg-gradient-luxury rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-radial rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-luxury text-white px-6 py-2 rounded-full mb-6 shadow-glow">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold">Transformation Gallery</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t('gallery.interactive_title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('gallery.interactive_subtitle')}
          </p>
        </div>

        {/* Interactive Gallery */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-premium bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-0">
              {/* Image Container */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={isAfter ? currentItem.after : currentItem.before}
                    alt={`${currentItem.service} - ${isAfter ? 'After' : 'Before'}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  
                  {/* Before/After Toggle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Navigation Arrows */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-elegant"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-elegant"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>

                  {/* Before/After Label */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      isAfter 
                        ? 'bg-rose-gold text-white' 
                        : 'bg-white/90 text-foreground'
                    }`}>
                      {isAfter ? 'After' : 'Before'}
                    </div>
                  </div>

                  {/* Service Name */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{currentItem.service}</h3>
                    <p className="text-white/80">{currentItem.description}</p>
                  </div>
                </div>

                {/* Controls */}
                <div className="p-6 bg-card">
                  {/* Before/After Toggle */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Button
                      variant={!isAfter ? "booksy" : "outline"}
                      onClick={() => setIsAfter(false)}
                      className="flex-1 max-w-32"
                    >
                      Before
                    </Button>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Compare</span>
                    </div>
                    
                    <Button
                      variant={isAfter ? "booksy" : "outline"}
                      onClick={() => setIsAfter(true)}
                      className="flex-1 max-w-32"
                    >
                      After
                    </Button>
                  </div>

                  {/* Service Info */}
                  <div className="grid md:grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Technique</div>
                      <div className="font-semibold text-foreground">{currentItem.technique}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold text-foreground">{currentItem.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {beforeAfterData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAfter(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-rose-gold shadow-glow' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="text-lg px-10 py-6 shadow-premium hover:shadow-glow transform hover:scale-105 transition-luxury"
            >
              <a 
                href={`${import.meta.env.VITE_BOOKSY_URL || '#'}?utm_source=web&utm_medium=gallery&utm_campaign=landing&utm_content=view_transformations_cta`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('gallery.book_transformation')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};