# Automations Flow - Premium Landing Page

A boutique AI and automation consultancy website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Design Philosophy

This website follows premium design principles inspired by industry leaders like Linear, Vercel, and Notion:

- **No generic AI aesthetics** - Avoided Inter font, purple gradients, over-rounded corners
- **Distinctive typography** - Using Geist font family for a modern, technical feel
- **Boutique color system** - Deep navy palette with electric cyan accents and subtle orange highlights
- **Layered backgrounds** - Gradients, noise textures, animated patterns for depth
- **Purposeful micro-interactions** - Subtle hover states, staggered reveals, smooth transitions
- **Component-driven architecture** - Clean, modular, reusable components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Color System

```css
Navy:
- 900: #0A0E27 (Primary background)
- 800: #141B3D (Sections)
- 700: #1E2749 (Cards)
- 600: #2A3458 (Borders)

Cyan (Accent):
- 600: #00B8D9
- 500: #00D9FF (Primary)
- 400: #33E1FF

Orange (Highlight):
- 500: #FF6B35
- 400: #FF8559

Gray (Text):
- 50-200: Light backgrounds
- 400: Secondary text
- 600: Tertiary text
- 800: Dark elements
```

## Project Structure

```
/app
  layout.tsx          - Root layout with fonts
  page.tsx            - Main homepage
  globals.css         - Global styles

/components
  /ui
    Button.tsx        - Primary, secondary, outline variants
    Card.tsx          - Hover-enabled cards
    Container.tsx     - Responsive containers
    Input.tsx         - Form inputs
    Textarea.tsx      - Form textareas

  /sections
    Hero.tsx          - Full-screen hero with animations
    Services.tsx      - 6 service cards grid
    TechStack.tsx     - Tabbed technology showcase
    Infrastructure.tsx - Best practices grid
    Team.tsx          - Team profiles with badges
    Testimonials.tsx  - Client success stories
    Pricing.tsx       - 3-tier pricing cards
    Contact.tsx       - Contact form
    Footer.tsx        - Site footer

  Navigation.tsx      - Fixed navigation with scroll detection

/lib
  utils.ts            - Utility functions (cn helper)

tailwind.config.ts    - Extended theme configuration
```

## Key Features

### Design System
- Custom color palette with CSS variables
- Typography scale (display-xl to body-sm)
- Shadow system with glow effects
- Animation system (fade, slide, glow, float)
- Responsive spacing scale

### Components
- Accessible, semantic HTML
- Keyboard navigation support
- Focus states with custom ring colors
- Hover states with smooth transitions
- Responsive from mobile to desktop

### Animations
- Framer Motion for scroll-triggered reveals
- Staggered grid animations
- Floating background orbs
- Gradient spotlights
- Smooth page scrolling
- Respects `prefers-reduced-motion`

### Sections

**Hero**
- Full viewport height
- Animated background with gradients, noise, and orbs
- Gradient text effect on "10x Employee"
- Trust indicators with pulse animations
- Scroll indicator

**Services**
- 6 service cards in responsive grid
- Icon-based visual hierarchy
- Hover lift effects
- Staggered reveal on scroll

**Tech Stack**
- Tabbed interface for 5 categories
- Animated transitions between tabs
- Hover states on tech cards
- Mobile-responsive tabs

**Infrastructure**
- 6 pillars of best practices
- Icon-based layout
- Gradient hover effects
- Security badge

**Team**
- 2 team member profiles
- Ex-8200 badge for Liran
- Expertise lists
- Stats section

**Testimonials**
- Featured client quote
- Decorative quote marks
- Stats grid (satisfaction, uptime, monitoring)

**Pricing**
- 3-tier pricing cards
- Highlighted "Most Popular" tier
- Feature lists with check icons
- Continuous support option
- CTA to contact

**Contact**
- Two-column layout
- Contact methods (email, calendar)
- Full contact form with validation
- Project size selector

**Footer**
- Brand information
- Quick links navigation
- Scroll to top button
- Copyright

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
npm run start
```

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  navy: { ... },
  cyan: { ... },
  orange: { ... }
}
```

### Content
All content is located in the component files under `/components/sections/`. Edit the text, features, pricing, etc. directly in each component.

### Typography
The site uses Geist fonts. To change fonts:
1. Update imports in `app/layout.tsx`
2. Update `fontFamily` in `tailwind.config.ts`

### Animations
Framer Motion variants are defined in each component. Adjust timing, easing, and effects as needed.

## Performance Optimizations

- Next.js 14 App Router with automatic code splitting
- Font optimization with Geist font package
- CSS-in-JS avoided for better performance
- Tailwind CSS for minimal CSS bundle
- Framer Motion lazy-loaded animations
- Responsive images (when added)

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on all interactive elements
- Color contrast ratios meet WCAG AA standards
- Respects `prefers-reduced-motion`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Automations Flow © 2024

## Contact

For questions about this implementation:
- Email: shahar@automationsflow.com
