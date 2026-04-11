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

- `/` — Landing page (Hero, About, Memorial, Tournament, Contact)
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
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── About.tsx
│   ├── Memorial.tsx
│   ├── Tournament.tsx
│   ├── GalleryTeaser.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ...
└── data/
    └── gallery.ts                # Gallery image list
public/
├── galerija/                     # Gallery images
├── izletiste/                    # Recreational area images
└── logo.png
```

## Contact

- Facebook: [Udruženje građana "Ridžali-Džebe"](https://www.facebook.com/profile.php?id=100083602091090)
- Instagram: [@ug_ridzalidzebe](https://www.instagram.com/ug_ridzalidzebe)
- Email: amercoski@gmail.com
