# CLAUDE.md

Portfolio site for Nikky Soriano. React + Vite + TypeScript + Chakra UI v3 +
Framer Motion, built statically for GitHub Pages. No backend, no router, no
tests.

## Commands

Use **pnpm**, not npm/yarn (`pnpm-lock.yaml`, `packageManager` pins it).

```bash
pnpm install
pnpm dev        # localhost:5173
pnpm check      # typecheck + lint — run before calling anything done
pnpm build      # typecheck, then build to dist/
```

`pnpm lint` runs `--max-warnings 0`; a warning fails it like an error.

## Gotchas

- **`Box as="a"` / `as="img"` don't typecheck.** Chakra's `as` doesn't narrow
  props, so `href`/`src` are rejected. Use `chakra.a`/`chakra.img`/`chakra.button`
  for static elements, `MotionAnchor`/`MotionImage`/`MotionButton`/`MotionSpan`
  (`src/lib/motionComponents.ts`) for animated ones. Plain swaps like
  `as="h2"`/`as="main"` are fine.
- **`transition` collides with Chakra.** Chakra treats it as a CSS prop and
  swallows Framer Motion's version unless forwarded. Every motion primitive
  already passes `forwardProps: ["transition"]` — as `chakra()`'s **third**
  arg, not the second (second is a recipe def and gets silently ignored).
- **Section ids live only on `SectionWrapper`.** It owns the `<section>` and
  the anchor id. Inner components (`AboutMe`, `Experience`, …) must not set
  `id` or `as="section"` — that reintroduces duplicate DOM ids.
- **Colors are `SemanticColorToken`, never hex.** Add new colors to
  `theme.ts`'s `semanticTokens` and the type union together.
- **Copy lives in `src/data/siteData.ts`**, not in components.
- **The `?password=` gate is not security.** `VALID_PASSWORD` in `App.tsx`
  ships in the client bundle. Don't treat it as a secret or "improve" it into
  real auth.

## Style

- Named `function` components, double quotes, typed exported props interfaces.
- Comments explain *why*, not *what*.
- `verbatimModuleSyntax` is on: inline type imports (`import { foo, type Bar }`).
- Fix the type error, don't widen the type. `any`, `!`, and unused
  `eslint-disable` are all lint errors.
