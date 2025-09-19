import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQAccordion = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      id: 'contraindications',
      question: t('faq.contraindications.question'),
      answer: t('faq.contraindications.answer')
    },
    {
      id: 'preparation',
      question: t('faq.preparation.question'),
      answer: t('faq.preparation.answer')
    },
    {
      id: 'healing',
      question: t('faq.healing.question'),
      answer: t('faq.healing.answer')
    },
    {
      id: 'touchup',
      question: t('faq.touchup.question'),
      answer: t('faq.touchup.answer')
    },
    {
      id: 'aftercare',
      question: t('faq.aftercare.question'),
      answer: t('faq.aftercare.answer')
    },
    {
      id: 'booking',
      question: t('faq.booking.question'),
      answer: t('faq.booking.answer')
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-background/50 backdrop-blur-sm rounded-lg border border-accent/10 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="text-muted-foreground whitespace-pre-line">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('faq.contact_cta')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => window.open('https://wa.me/48123456789', '_blank')}
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              WhatsApp
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => window.open('https://instagram.com/bm.beauty.permanent', '_blank')}
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Instagram DM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};