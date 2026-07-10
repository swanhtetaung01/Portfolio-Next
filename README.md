# Swan Htet Aung — Portfolio

A personal portfolio site built with Next.js, styled around a noir "case file" theme. Showcases background, skills, and projects.

Live sections: **Hero → Marquee → About → Arsenal (skills) → Case Files (projects) → Contact**

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Lucide React](https://lucide.dev) for icons
- TypeScript

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command         | Description                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack)   |
| `npm run build` | Build for production               |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Project Structure

```
src/
  app/            # App Router entry (layout, page, global styles)
  components/     # Section components (Hero, About, Arsenal, CaseFiles, Contact, Nav, Footer, ...)
  lib/data.ts     # All site content: bio, skills, and projects
public/           # Static images, resume/CV
```

## Editing Content

All personal content — name, bio, stats, skills, and projects — lives in a single file: [`src/lib/data.ts`](src/lib/data.ts). Update it and the relevant sections re-render automatically.

Static assets (profile photo, project screenshots, resume) live in [`public/`](public) and are referenced by root-relative paths (e.g. `/portrait.jpg`).

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/new) or any platform that supports Next.js. Run `npm run build` followed by `npm run start` to verify a production build locally.
