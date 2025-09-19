import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Heart, Clock, Users } from 'lucide-react';
import fitnessImage from '@/assets/fitness-coaching.jpg';

export const FitnessSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    goals: '',
    schedule: '',
    language: '',
    location: '',
    contact: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track analytics event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'form_submit_fitness', {
        form_goals: formData.goals,
        preferred_language: formData.language,
        page_location: window.location.href,
      });
    }

    // Handle form submission (could integrate with email service, etc.)
    console.log('Fitness consultation form submitted:', formData);
    alert('Thank you! We\'ll contact you within 24 hours to schedule your consultation.');
  };

  const benefits = [
    t('fitness.bullet_1'),
    t('fitness.bullet_2'), 
    t('fitness.bullet_3'),
  ];

  return (
    <section id="fitness" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('fitness.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('fitness.subtitle')}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Zdrofit Note */}
            <div className="bg-secondary/50 rounded-lg p-4 border border-accent/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-accent">📍 </span>
                {t('fitness.zdrofit_note')}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-soft">
              <img 
                src={fitnessImage}
                alt="Personal Training"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">
                {t('fitness.form_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form id="fitness-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="goals">{t('fitness.goals')}</Label>
                  <Textarea
                    id="goals"
                    placeholder="Tell us about your fitness goals..."
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="schedule">{t('fitness.schedule')}</Label>
                  <Select 
                    value={formData.schedule} 
                    onValueChange={(value) => setFormData({ ...formData, schedule: value })}
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your preferred time..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (6:00-10:00)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12:00-16:00)</SelectItem>
                      <SelectItem value="evening">Evening (18:00-21:00)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language">{t('fitness.language')}</Label>
                  <Select 
                    value={formData.language} 
                    onValueChange={(value) => setFormData({ ...formData, language: value })}
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose language..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="pl">Polish</SelectItem>
                      <SelectItem value="ua">Ukrainian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">{t('fitness.location')}</Label>
                  <Select 
                    value={formData.location} 
                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Preferred location..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zdrofit-pruszkow">Zdrofit Pruszków</SelectItem>
                      <SelectItem value="online">Online Coaching</SelectItem>
                      <SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contact">{t('fitness.contact')}</Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="WhatsApp, Email, or Instagram..."
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <Button type="submit" variant="cta" className="w-full mt-6">
                  {t('fitness.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};