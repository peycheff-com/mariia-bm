import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Star, Users } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Advanced PMU Certification",
    issuer: "International Beauty Academy",
    year: "2023",
    description: "Advanced permanent makeup techniques and safety protocols",
    icon: Award,
    verified: true,
    level: "Expert"
  },
  {
    id: 2,
    title: "Microblading Master Certification",
    issuer: "European PMU Institute",
    year: "2022",
    description: "Precision microblading and hair stroke techniques",
    icon: Star,
    verified: true,
    level: "Master"
  },
  {
    id: 3,
    title: "Health & Safety Certification",
    issuer: "Polish Health Ministry",
    year: "2024",
    description: "Hygiene standards and safety protocols compliance",
    icon: Shield,
    verified: true,
    level: "Certified"
  },
  {
    id: 4,
    title: "Color Theory & Pigment Science",
    issuer: "Beauty Science Academy",
    year: "2023",
    description: "Advanced color matching and pigment behavior",
    icon: Users,
    verified: true,
    level: "Specialist"
  }
];

const achievements = [
  {
    title: "500+ Satisfied Clients",
    description: "Successfully completed transformations",
    value: "500+",
    icon: Users
  },
  {
    title: "3 Years Experience",
    description: "Professional PMU artistry",
    value: "3+",
    icon: Award
  },
  {
    title: "100% Safety Record",
    description: "Zero incidents or complications",
    value: "100%",
    icon: Shield
  },
  {
    title: "5.0 Star Rating",
    description: "Verified Booksy reviews",
    value: "5.0",
    icon: Star
  }
];

export const CertificationShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-background to-pearl relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-luxury rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-luxury text-white px-6 py-2 rounded-full mb-6 shadow-glow">
            <Shield className="w-4 h-4" />
            <span className="font-semibold">Certified Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t('certifications.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('certifications.subtitle')}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="text-center group hover:shadow-float transition-luxury bg-card/80 backdrop-blur-sm border-border/50 hover:border-rose-gold/30 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spring shadow-glow">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-rose-gold mb-2">{achievement.value}</div>
                <div className="font-semibold text-foreground mb-1">{achievement.title}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {t('certifications.credentials_title')}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t('certifications.credentials_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.id}
                className="group relative overflow-hidden transition-luxury hover:shadow-premium bg-card/80 backdrop-blur-sm border-border/50 hover:border-rose-gold/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-luxury rounded-full shadow-glow">
                        <cert.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      {cert.verified && (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          <Shield className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                      <Badge variant="outline" className="border-rose-gold text-rose-gold">
                        {cert.level}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-foreground leading-relaxed">{cert.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Certified: {cert.year}</span>
                      <span className="font-semibold text-rose-gold">Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Standards */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blush to-pearl shadow-premium">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-foreground mb-4">
                {t('certifications.standards_title')}
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('certifications.standards_subtitle')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Shield className="w-8 h-8 text-rose-gold mx-auto mb-2" />
                  <div className="font-semibold text-foreground">EU Safety Standards</div>
                </div>
                <div>
                  <Award className="w-8 h-8 text-rose-gold mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Continuous Education</div>
                </div>
                <div>
                  <Star className="w-8 h-8 text-rose-gold mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Quality Assurance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};