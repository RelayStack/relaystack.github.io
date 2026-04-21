# RelayStack v2.0

Professional SEO & Web Development portfolio site with lead capture, admin dashboard, and bilingual support.

## 🚀 What's New in v2.0

- **New Architecture**: Component-based Astro 6 with TypeScript
- **Lead Capture System**: 3-step form with Supabase backend
- **Admin Dashboard**: View and manage leads
- **Bilingual**: English + German with Astro i18n routing
- **Programmatic SEO**: Industry-specific landing pages
- **Performance Optimized**: ~25% smaller bundle size
- **Modern Design**: Dark theme with Swiss precision aesthetic

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Header, Footer, Meta
│   ├── sections/        # Page sections (Hero, Pricing, etc.)
│   └── forms/           # Lead form modal
├── layouts/
│   └── Base.astro       # Main layout
├── pages/
│   ├── index.astro      # English homepage
│   ├── de/index.astro   # German homepage
│   ├── danke.astro      # Thank you page
│   ├── admin/           # Admin dashboard
│   ├── api/             # API routes
│   └── for/             # Industry pages
├── lib/
│   ├── supabase.ts      # Supabase client
│   ├── utils.ts         # Utility functions
│   └── industry-data.ts # Industry page data
├── i18n/
│   ├── en.json          # English translations
│   └── de.json          # German translations
└── styles/
    ├── global.css       # Tailwind + design tokens
    └── fonts.css        # Font imports
```

## 🛠️ Tech Stack

- **Framework**: Astro 6 (Static Site Generation)
- **Styling**: Tailwind CSS 4
- **Backend**: Supabase (Postgres + Edge Functions)
- **Deployment**: Vercel
- **Analytics**: Plausible (privacy-first)

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env` file:

```env
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
PUBLIC_SITE_URL=https://relaystack.vercel.app
```

### 3. Set Up Supabase

1. Create project at [supabase.com](https://supabase.com)
2. Run the migration in `supabase/migrations/001_initial_schema.sql`
3. Get your API keys from Settings → API

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | English homepage |
| `/de/` | German homepage |
| `/danke` | Thank you page (post-form) |
| `/for/[industry]` | Industry-specific landing pages |
| `/admin` | Admin dashboard (protected) |
| `/api/submit-lead` | Form submission API |

## 🎨 Design System

### Colors
- Background: `#050505` (primary), `#0a0a0a` (secondary)
- Accent: `#ff4d00` (orange)
- Text: `#fafafa` (primary), `#a1a1aa` (secondary)

### Typography
- Display: Space Grotesk (bold, technical)
- Body: IBM Plex Sans (readable)
- Mono: JetBrains Mono (code, accents)

## 📝 Content Management

### Translations
Edit `src/i18n/en.json` and `src/i18n/de.json`

### Industry Pages
Edit `src/lib/industry-data.ts`

### Components
All section components accept data via props from i18n files

## 🔒 Security

- RLS enabled on all tables
- Service role only for API routes
- No sensitive data in client bundle
- Form validation on client and server

## 📊 Analytics

Track custom events with Plausible:

```javascript
window.plausible('Form Submit');
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Vercel

```
PUBLIC_SUPABASE_URL
PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
PUBLIC_SITE_URL
```

## 🔄 Migration from v1.x

The old monolithic pages are backed up in `backup/` directory.

Key changes:
- Single-page design → Component-based sections
- Google Apps Script → Supabase backend
- Client-side i18n → Astro i18n routing
- 6 separate pages → 1 dynamic template

## 📞 Support

For issues or questions:
- Email: relaystack@proton.me
- Telegram: @relaystack

---

Built with ❤️ in Basel, Switzerland
