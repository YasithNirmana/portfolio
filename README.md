# Portfolio

A minimalist, content-driven personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. All visible content lives in JSON files under `/data` so the site can be updated without touching components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx        # root layout, no-flash theme script, fonts
│   ├── page.tsx          # composes Hero / About / Projects / Contact
│   └── globals.css       # Tailwind + CSS variables for theming
├── components/           # reusable UI
│   ├── Navbar.tsx
│   ├── ThemeToggle.tsx   # light/dark toggle, respects system preference
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/                 # edit these to update the site
│   ├── profile.json      # name, role, tagline, email, socials
│   ├── about.json        # bio paragraphs + skills
│   └── projects.json     # project list rendered in the grid
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Editing content

Update content by editing the JSON files. The dev server hot-reloads on save.

### `data/profile.json`

Top-of-page identity, footer, contact links.

```json
{
  "name": "Your Name",
  "role": "Software Engineer",
  "tagline": "Short one-line description.",
  "email": "you@example.com",
  "socials": [
    { "label": "GitHub", "href": "https://github.com/you" }
  ]
}
```

### `data/about.json`

Bio paragraphs and skill chips.

```json
{
  "paragraphs": ["First paragraph...", "Second paragraph..."],
  "skills": ["TypeScript", "React"]
}
```

### `data/projects.json`

Each project is rendered as a card. `links.live` and `links.source` are optional.

```json
{
  "slug": "unique-id",
  "title": "Project Name",
  "summary": "One-line pitch.",
  "tags": ["Next.js", "Postgres"],
  "year": 2025,
  "links": {
    "live": "https://example.com",
    "source": "https://github.com/you/repo"
  },
  "featured": true
}
```

## Theming

The aesthetic is monochrome by design. Color tokens live as CSS variables in `app/globals.css` and are exposed to Tailwind via `tailwind.config.ts` (`bg`, `fg`, `muted`, `subtle`, `accent`, `border`).

The light/dark toggle is in `components/ThemeToggle.tsx`. A small inline script in `app/layout.tsx` reads the saved choice (or system preference) before paint to avoid a flash.

## Deploy

Works out of the box on Vercel — push to GitHub and import. For static export, add `output: "export"` to `next.config.js`.
