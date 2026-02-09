# CLAUDE.md

## Project Overview

Personal portfolio website for Nikky Soriano — a single-page React application deployed via GitHub Pages at `nikkyjsoriano.github.io`.

### Tech Stack

- **Framework:** React 18 with Vite 6
- **Styling:** Tailwind CSS 4 + DaisyUI 5 (theme: "dim")
- **Animation:** Framer Motion 12, Typewriter Effect
- **Linting:** ESLint 9 with React plugins

### Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

### Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components (NavBar, Landing, AboutMe, etc.)
├── App.jsx          # Main app component
├── App.css          # Tailwind/app styles
├── index.css        # Global styles
└── main.jsx         # Entry point
```

## Git Guidelines

### Author Identity

All commits must be authored solely by:

```
nikkyjsoriano <nikkyjsoriano@gmail.com>
```

### Commit Rules

- **No co-authors.** Never add `Co-authored-by` trailers to commit messages.
- **No AI attribution.** Do not reference Claude, AI assistants, or any tool attribution in commit messages, titles, or descriptions.
- **No session links.** Do not append session URLs, tracking links, or any automated footers to commit messages.
- **Single author only.** Every commit must have exactly one author — the git user above. No additional contributors, co-authors, or signatories.
- **Clean commit messages.** Commit messages should describe the change itself. Keep them concise and focused on what was changed and why.

### Commit Message Style

Follow the existing convention in this repo:

```
Short summary of change (#PR-number)
```

Examples from this repo:
- `Fix header cutting off main content on various viewport sizes (#14)`
- `Setup Framer Motion Animations (#10)`
- `Themed Colors throughout text (#9)`

### Branch Workflow

- `main` is the production branch deployed to GitHub Pages.
- Feature work happens on separate branches and merges into `main`.

## Code Conventions

- Functional React components with hooks
- Tailwind utility classes for styling; use DaisyUI component classes where appropriate
- Framer Motion for scroll-triggered animations (`whileInView`, `viewport={{ once: true }}`)
- Responsive design using Tailwind breakpoints (`lg:`, `xl:`)
