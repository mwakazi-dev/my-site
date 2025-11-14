# Johnson Mwakazi - Portfolio Website

A modern, animated portfolio website built with Next.js, showcasing my work as a Senior Software Engineer.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn UI & Aceternity UI
- **Animations:** Framer Motion
- **CMS:** Strapi (optional)
- **Language:** TypeScript

## ✨ Features

- **Modern Design:** Dark theme with gradient accents and smooth animations
- **Responsive:** Fully responsive design that works on all devices
- **Animated Components:** Engaging animations using Framer Motion
- **CMS Integration:** Optional Strapi CMS for dynamic content management
- **Fallback Data:** Works perfectly even without CMS connection
- **SEO Optimized:** Proper meta tags and semantic HTML
- **Performance:** Optimized for speed and performance

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
# For local development with Strapi
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

# For production with deployed Strapi
# NEXT_PUBLIC_STRAPI_URL=https://intuitive-idea-4fd32251fd.strapiapp.com
```

3. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 🎨 Sections

The portfolio includes the following sections:

1. **Hero Section:** Eye-catching introduction with animated text and spotlight effect
2. **About Section:** Personal introduction with skills and statistics
3. **Experience Section:** Timeline of work experience with company details
4. **Projects Section:** Showcase of featured projects and client work
5. **Contact Section:** Contact form and social media links
6. **Footer:** Additional links and information

## 📝 Customization

### Update Personal Information

Edit the following files to customize your portfolio:

- **Hero Section:** `components/hero-section.tsx`
- **About Section:** `components/about-section.tsx`
- **Experience:** `components/experience-section.tsx` (fallback data)
- **Projects:** `components/projects-section.tsx` (fallback data)
- **Contact:** `components/contact-section.tsx`

### Update Metadata

Edit `app/layout.tsx` to update SEO metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  // ...
};
```

### Update Color Scheme

The color scheme uses Tailwind CSS. Main colors used:

- **Primary:** Blue (`blue-400`, `blue-500`)
- **Secondary:** Purple (`purple-400`, `purple-500`)
- **Accent:** Pink (`pink-400`)

Modify these in component files or update the Tailwind theme in `app/globals.css`.

## 🔗 Strapi CMS Integration

The portfolio supports optional Strapi CMS integration for dynamic content management.

### Without Strapi

The site includes fallback data and works perfectly without any CMS connection. This is ideal for:
- Quick deployment
- Static hosting
- Development without backend setup

### With Strapi

To enable dynamic content management:

1. Set up Strapi CMS (see `../my-site-cms/README.md`)
2. Configure the `NEXT_PUBLIC_STRAPI_URL` environment variable
3. Content will be automatically fetched from Strapi
4. Fallback data is still used if Strapi is unavailable

## 📱 Social Links

Update your social media links in:
- `components/hero-section.tsx`
- `components/contact-section.tsx`
- `components/footer.tsx`

Replace placeholder URLs with your actual profiles:
- GitHub
- LinkedIn
- Twitter
- Email

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud
- Self-hosted

## 📄 Build

To create a production build:

```bash
npm run build
npm run start
```

## 🎯 Project Structure

```
my-site/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page with all sections
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── bento-grid.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── infinite-moving-cards.tsx
│   │   ├── moving-border.tsx
│   │   ├── spotlight.tsx
│   │   └── text-generate-effect.tsx
│   ├── about-section.tsx     # About and skills section
│   ├── contact-section.tsx   # Contact form
│   ├── experience-section.tsx # Work experience timeline
│   ├── footer.tsx            # Footer component
│   ├── hero-section.tsx      # Hero section
│   ├── navigation.tsx        # Navigation bar
│   └── projects-section.tsx  # Projects showcase
├── lib/
│   ├── api.ts                # Strapi API integration
│   └── utils.ts              # Utility functions
├── types/
│   └── index.ts              # TypeScript types
└── public/                   # Static assets
```

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📧 Contact

- **Email:** johnson.mwakazi@example.com
- **GitHub:** [@johnsonmwakazi](https://github.com/johnsonmwakazi)
- **LinkedIn:** [Johnson Mwakazi](https://linkedin.com/in/johnsonmwakazi)

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion

