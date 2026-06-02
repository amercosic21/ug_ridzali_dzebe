# UG "Ridžali-Džebe"

Official website of "Ridžali-Džebe" from Zavidovići, Bosnia and Herzegovina.

## About

Landing page for the Ridžali-Džebe recreational area featuring a photo gallery and information about the memorial football tournament held annually since 1996.

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) — hosting

## Pages

- `/` — Landing page (Hero, About, Memorial, QuoteCountdown, Tournament, GalleryTeaser, Contact)
- `/galerija` — Photo gallery (112 images, lightbox, pagination)
- `/politika-privatnosti` — Privacy policy

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout, metadata, fonts
│   ├── globals.css               # Global styles and animations
│   ├── galerija/page.tsx         # Gallery page
│   └── politika-privatnosti/     # Privacy policy
├── components/                   # React components
│   ├── Hero.tsx Navbar.tsx       # page sections + site chrome, composed by
│   ├── About.tsx Memorial.tsx    #   app/page.tsx (each section's private parts
│   ├── Tournament.tsx Contact.tsx#   live in a same-named folder below)
│   ├── GalleryTeaser.tsx Footer.tsx
│   ├── ui/                       # reusable primitives: Container, SectionHeading,
│   │                            #   ZoomImage, Pagination, AnimatedCounter
│   ├── effects/                  # global behaviors: ScrollReveal, ScrollProgress,
│   │                            #   BackToTop, CookieBanner, HashScroll
│   ├── about/                    # About breakpoint layouts + data
│   ├── hero/  hero/scene/        # Hero fixes + HeroScene SVG primitives + data
│   ├── contact/                  # ContactCard
│   ├── lightbox/                 # Lightbox controls, carousel, gesture hooks
│   └── icons/                    # SVG icon components
└── data/
    ├── gallery.ts                # Gallery image list
    └── site.ts                   # Contact info + navigation links
public/
├── galerija/                     # Gallery images
├── izletiste/                    # Recreational area images
└── logo.png
```

## Contact

- Facebook: [Udruženje građana "Ridžali-Džebe"](https://www.facebook.com/profile.php?id=100083602091090)
- Instagram: [@ug_ridzalidzebe](https://www.instagram.com/ug_ridzalidzebe)
- Email: amercoski@gmail.com
