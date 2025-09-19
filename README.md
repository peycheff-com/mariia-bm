# BM Beauty Studio - Marketing Website

A fast, mobile-first marketing website for Mariia Borysevych's beauty studio that converts Instagram traffic into Booksy bookings and qualified fitness leads.

## 🚀 Features

- **Mobile-first responsive design** with warm rose gold aesthetic
- **Multi-language support** (EN/PL/UA) using i18next
- **Booksy integration** with UTM tracking and analytics
- **Fitness consultation** form with lead capture
- **Analytics tracking** for GA4 and Meta Pixel
- **Component library** for easy maintenance

## 🛠 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui with custom variants
- **Routing**: React Router DOM
- **i18n**: react-i18next with language detection
- **Analytics**: GA4 + Meta Pixel integration

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Page sections
│   ├── Navigation.tsx      # Main navigation
│   ├── LanguageSwitcher.tsx # Language toggle
│   └── StickyCTA.tsx       # Mobile sticky CTA bar
├── pages/
│   ├── Index.tsx           # Home page
│   ├── Services.tsx        # Services listing
│   ├── Fitness.tsx         # Fitness coaching
│   └── Policy.tsx          # Studio policies
├── i18n/
│   ├── locales/           # Translation files (EN/PL/UA)
│   └── index.ts           # i18n configuration
├── lib/
│   ├── analytics.ts       # Analytics utilities
│   └── utils.ts           # Utility functions
└── assets/                # Generated images
```

## 🎨 Design System

The website uses a carefully crafted design system with:

- **Primary Colors**: Rose gold (#D4A574) and cream tones
- **Accent Colors**: Deep burgundy for emphasis
- **Typography**: Clean sans-serif with semantic sizing
- **Animations**: Smooth transitions and spring effects
- **Shadows**: Elegant depth with brand colors

### Component Variants

Custom button variants aligned with brand aesthetic:
- `booksy` - Primary CTA for Booksy bookings
- `hero` - Hero section accent buttons  
- `fitness` - Fitness consultation buttons
- `cta` - Mobile sticky CTA bar

## 🌐 Analytics & Tracking

### Events Tracked
- `click_booksy` - Booksy booking button clicks
- `click_whatsapp` - WhatsApp contact clicks
- `click_dm_instagram` - Instagram DM clicks
- `form_submit_fitness` - Fitness consultation form submissions
- `scroll_depth` - Service section scroll engagement

### UTM Parameters
All Booksy links include:
- `utm_source`: instagram|web
- `utm_medium`: bio|site|nav|hero|services|sticky_cta
- `utm_campaign`: landing
- `utm_content`: service-{slug}|primary_cta|mobile_cta

## 🔧 Environment Variables

Create a `.env` file with:

```env
VITE_BOOKSY_URL=https://booksy.com/your-studio-link
VITE_GA4_ID=G-XXXXXXXXXX
VITE_META_PIXEL_ID=123456789
```

## 📱 Mobile Features

- **Sticky CTA Bar**: Always-visible booking, fitness, and directions
- **Responsive Navigation**: Collapsible menu with language switcher
- **Touch-friendly**: Large buttons and touch targets
- **Performance**: Optimized images and lazy loading

## 🔄 Making Updates

### Using Lovable's Visual Edits
1. Click the **Edit** button in the chat interface
2. Select elements directly on the page
3. Edit text, colors, and fonts instantly
4. Use prompts for layout and functionality changes

### Using Dev Mode
1. Toggle **Dev Mode** in the top left
2. Edit code directly in the Lovable interface
3. Changes auto-save and deploy

### Using Chat Mode
1. Request architectural diagrams with Mermaid
2. Plan features before implementation
3. Get guidance on best practices

## 🚀 Deployment

1. Click **Publish** in Lovable interface
2. Choose staging or production environment
3. Monitor deployment status and logs
4. Verify analytics tracking with GA4 DebugView

## 📊 Content Management

### Adding New Services
1. Add service data to `ServicesGrid.tsx`
2. Update translation files in `src/i18n/locales/`
3. Generate or add service images to `src/assets/`

### Updating Translations
Edit files in `src/i18n/locales/`:
- `en.json` - English (default)
- `pl.json` - Polish
- `ua.json` - Ukrainian

### Analytics Verification
Use the analytics utilities in `src/lib/analytics.ts` to track custom events and verify implementation.

## 🎯 Performance

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Multiple sizes with lazy loading
- **Bundle Size**: Tree-shaking and code splitting
- **Caching**: Service worker for offline functionality

## 📞 Support

For technical issues or feature requests, use Lovable's chat interface or visit the [Lovable documentation](https://docs.lovable.dev/).

---

**Built with ❤️ using Lovable - The AI-powered web app builder**