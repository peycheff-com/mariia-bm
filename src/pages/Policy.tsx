import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Policy = () => {
  const { t } = useTranslation();

  return (
    <main className="py-8 pb-20 md:pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('policy.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('policy.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {/* Cancellation Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                {t('policy.cancellation_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t('policy.cancellation_text')}
              </p>
            </CardContent>
          </Card>

          {/* Health Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                {t('policy.contraindications_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('faq.contraindications_answer')}
              </p>
              <Separator className="my-4" />
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> Full health consultation required before all procedures. 
                  Please disclose all medical conditions, medications, and recent cosmetic treatments.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Preparation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                {t('policy.prep_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t('faq.prep_answer')}
              </p>
            </CardContent>
          </Card>

          {/* Healing Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                {t('policy.healing_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('faq.healing_answer')}
              </p>
              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <strong>Aftercare Included:</strong> {t('faq.aftercare_answer')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Touch-up Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                {t('policy.touchup_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t('policy.touchup_text')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Policy;