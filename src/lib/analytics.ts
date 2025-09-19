// Analytics utilities for GA4 and Meta Pixel tracking

export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  // GA4 tracking
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', eventName, {
      ...parameters,
      page_location: window.location.href,
      timestamp: Date.now(),
    });
  }

  // Meta Pixel tracking (if needed)
  if (typeof window !== 'undefined' && 'fbq' in window) {
    (window as any).fbq('trackCustom', eventName, parameters);
  }

  // Debug logging
  console.log('Analytics Event:', eventName, parameters);
};

export const trackPageView = (pagePath: string, language: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'page_view', {
      page_path: pagePath,
      language: language,
      page_location: window.location.href,
    });
  }
};

export const trackBooksyClick = (serviceName: string, context: string, language: string) => {
  trackEvent('click_booksy', {
    service_name: serviceName,
    context: context,
    language: language,
  });

  // Meta Pixel specific event
  if (typeof window !== 'undefined' && 'fbq' in window) {
    (window as any).fbq('trackCustom', 'BooksyClick', {
      service: serviceName,
      context: context,
    });
  }
};

export const trackWhatsAppClick = (context: string) => {
  trackEvent('click_whatsapp', {
    context: context,
  });
};

export const trackInstagramClick = (context: string) => {
  trackEvent('click_dm_instagram', {
    context: context,
  });
};

export const trackScrollDepth = (section: string, depth: number) => {
  trackEvent('scroll_depth', {
    section: section,
    depth_percentage: depth,
  });
};