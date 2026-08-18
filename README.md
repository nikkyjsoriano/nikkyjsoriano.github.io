# nikkyjsoriano.github.io

Personal portfolio site for Nikky Soriano — a single-page React app built with
Vite, TypeScript, and Chakra UI v3, deployed to GitHub Pages.

## Stack

| Concern        | Choice                                          |
| -------------- | ------------------------------------------------ |
| Build          | Vite 6                                          |
| Language       | TypeScript 6 (every strictness flag enabled)    |
| UI             | Chakra UI v3 + Emotion                          |
| Animation      | Framer Motion 12                                |
| Theming        | `next-themes` (dark by default)                 |
| Package manager| pnpm 10 — **required**, see below               |

## Getting started

This repo uses **pnpm**. `npm install` and `yarn install` are not supported: the
lockfile is `pnpm-lock.yaml`, and `packageManager` in `package.json` pins the
version.

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

### Scripts

| Script            | What it does                                              |
| ----------------- | ----------------------------------------------------------- |
| `pnpm dev`        | Vite dev server with HMR                                   |
| `pnpm build`      | Typecheck, then build to `dist/`                           |
| `pnpm preview`    | Serve the built `dist/` locally                            |
| `pnpm typecheck`  | `tsc --build --force` across all three tsconfigs           |
| `pnpm lint`       | ESLint with `--max-warnings 0`                             |
| `pnpm lint:fix`   | ESLint with autofix                                        |
| `pnpm check`      | `typecheck` + `lint` — run this before pushing             |

## Project layout

```
src/
├── main.tsx                 Entry point; mounts <App/> inside <Provider/>
├── App.tsx                  Section order, smooth-scroll handler, access gate
├── theme.ts                 Chakra system + the SemanticColorToken union
├── index.css                The only hand-written CSS (resets + scroll anchors)
├── components/
│   ├── SectionWrapper.tsx   Renders each <section>: id anchor + scroll reveal
│   ├── SectionHeader.tsx    Gradient section title + underline
│   ├── NavBar.tsx           Fixed nav; desktop links + mobile drawer
│   ├── Landing.tsx          Hero: typewriter roles + floating illustration
│   ├── AboutMe.tsx          Prose built from typed colored segments
│   ├── Experience.tsx       Work history cards (access-gated, see below)
│   ├── LanguageSkills.tsx   Skill and tool logo grids
│   ├── GitHubStats.tsx      Contribution calendar
│   ├── LeetCodeStats.tsx    Externally rendered stats card
│   ├── Contact.tsx          Phone / email / location tiles
│   ├── BackToTopButton.tsx  Scroll-triggered pill that expands on hover
│   └── ui/                  Chakra provider and color-mode plumbing
├── hooks/useColorMode.ts    Narrows next-themes' loose theme string
├── lib/
│   ├── motionComponents.ts  Chakra-styled Framer Motion primitives
│   └── animations.ts        Shared Variants (fade-in-up, stagger)
└── data/
    ├── siteData.ts          All page copy, typed
    └── navItems.ts          Nav anchors
```

Content lives in `src/data/`. Updating a job, a skill logo, or a phone number is
a one-file edit that needs no component changes.

## Two things worth knowing before you edit

**Use the typed motion primitives, not `as`.** Chakra v3's polymorphic `as` prop
does not narrow prop types, so `<Box as="a" href={…}>` fails to typecheck. Reach
for `chakra.a` / `chakra.img` for static elements, and `MotionAnchor`,
`MotionImage`, `MotionButton`, `MotionSpan` from `lib/motionComponents` for
animated ones.

**Colors go through `SemanticColorToken`.** Components accept a token name
(`"primary"`, `"fg.muted"`, …) rather than a hex value, so a palette change is a
single edit in `theme.ts` and a typo is a compile error.

## The Experience section is not private

The `?password=` query parameter in `App.tsx` hides the work-history section from
casual visitors. It is a soft gate, not a security boundary — the value ships in
the client bundle and anyone can read it. Treat everything behind it as public,
and never put anything genuinely sensitive there.

## Code quality

Both gates run at maximum strictness and must stay clean.

**TypeScript** — `tsconfig.base.json` enables every strictness flag the compiler
offers, including `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`,
`noPropertyAccessFromIndexSignature`, `verbatimModuleSyntax`, and
`erasableSyntaxOnly`. The one relaxed setting is `skipLibCheck`, which applies to
`node_modules` only: Chakra 3, Ark UI, and Vite ship `.d.ts` files that need the
React 19 typings and are not `exactOptionalPropertyTypes` clean. Revisit when
this project moves to React 19.

**ESLint** — `eslint.config.ts` layers typescript-eslint's `strictTypeChecked`
and `stylisticTypeChecked` (both type-aware) over `eslint-plugin-react`,
`react-hooks`, `react-refresh`, and `jsx-a11y`'s `strict` preset, plus extra
rules on top. Unused disable directives are themselves errors. The config file
is TypeScript and is linted and typechecked by the same gates.

## Deployment

Static build to `dist/`, served by GitHub Pages from this repo. Run
`pnpm run build` and publish `dist/`.
