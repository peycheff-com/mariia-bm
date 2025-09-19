import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'pl', name: 'PL', flag: '🇵🇱' }, 
  { code: 'ua', name: 'UA', flag: '🇺🇦' },
];

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={i18n.language === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => changeLanguage(lang.code)}
          className="h-8 px-2 text-xs font-medium transition-smooth"
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </Button>
      ))}
    </div>
  );
};