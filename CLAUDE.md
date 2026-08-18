# CLAUDE.md

Portfolio site for Nikky Soriano. React + Vite + TypeScript + Tailwind CSS +
DaisyUI + Framer Motion, built statically for GitHub Pages. No backend, no
router, no tests.

## Commands

Use **pnpm**, not npm/yarn (`pnpm-lock.yaml`, `packageManager` pins it).

```bash
pnpm install
pnpm dev        # localhost:5173
pnpm typecheck  # tsc --build --force
pnpm lint       # eslint .
pnpm build      # typecheck, then build to dist/
```

## Structure

```
src/
├── main.tsx                 Entry point; mounts <App/>
├── App.tsx                  Section order, smooth-scroll handler, access gate
├── App.css                  Tailwind + DaisyUI import and theme list
├── index.css                Resets, scroll anchors
├── components/
│   ├── SectionWrapper.tsx   Wraps each section: id anchor + scroll reveal
│   ├── SectionHeader.tsx    Gradient section title + underline
│   ├── NavBar.tsx           Fixed navbar; desktop menu + slide-out mobile menu
│   ├── Landing.tsx          Hero: typewriter roles + hero image
│   ├── AboutMe.tsx          Prose built from typed colored segments
│   ├── Experience.tsx       Work history cards (access-gated, see below)
│   ├── LanguageSkills.tsx   Skill and tool logo grids
│   ├── GitHubStats.tsx      Contribution chart (ghchart.rshah.org)
│   ├── LeetCodeStats.tsx    Externally rendered stats card
│   ├── Contact.tsx          Phone / email / location tiles
│   └── BackToTopButton.tsx  Scroll-triggered button that expands on hover
├── lib/animations.ts        Shared Framer Motion Variants
└── data/
    ├── siteData.ts          All page copy, typed
    └── navItems.ts          Nav anchors
```

Content lives in `src/data/`. Updating a job, a skill logo, or a phone number
is a one-file edit that needs no component changes.

## Gotchas

- **Copy lives in `src/data/siteData.ts`**, not in components.
- **Colors in `siteData.ts` are literal Tailwind classes** (`"text-primary"`,
  etc.), typed as the `HighlightClass` union in that file. Add new colors to
  the union when you add a new one, not just to the JSX.
- **The `?password=` gate is not security.** `VALID_PASSWORD` in `App.tsx`
  ships in the client bundle. Don't treat it as a secret or "improve" it into
  real auth.
- **DaisyUI theme is picked in `index.html`** (`data-theme="dim"`), not in
  JS. `App.css` declares which themes are compiled in.

## Style

- Named `function` components, double quotes, typed exported props interfaces.
- Comments explain *why*, not *what*.
- `verbatimModuleSyntax` is on: inline type imports (`import { foo, type Bar }`).
- Fix the type error, don't widen the type. `any` and `!` are both lint errors.
