import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/fitness', label: t('nav.fitness') },
    { href: '/policy', label: t('nav.policy') },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-rose-gold to-rose-gold-light rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BM</span>
            </div>
            <span className="font-semibold text-lg text-foreground">BM Beauty Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-smooth hover:text-rose-gold",
                  isActive(item.href) ? "text-rose-gold" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button 
              variant="booksy" 
              size="sm" 
              asChild
              className="ml-4"
            >
              <a 
                href={`${import.meta.env.VITE_BOOKSY_URL || '#'}?utm_source=web&utm_medium=nav&utm_campaign=landing`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('hero.primary_cta')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 w-8"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-2 py-2 text-sm font-medium transition-smooth hover:text-rose-gold",
                    isActive(item.href) ? "text-rose-gold" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="booksy" 
                size="sm" 
                asChild
                className="mt-4 self-start"
              >
                <a 
                  href={`${import.meta.env.VITE_BOOKSY_URL || '#'}?utm_source=web&utm_medium=mobile_nav&utm_campaign=landing`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('hero.primary_cta')}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};