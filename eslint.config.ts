import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import type { Linter } from "eslint";

/**
 * `eslint-plugin-react` types `configs.flat` as an index-signature record, so
 * under `noPropertyAccessFromIndexSignature` every preset is a possibly-missing
 * bracket lookup. Resolve that once here rather than at each spread.
 */
const reactPreset = (name: string): Linter.RulesRecord =>
  react.configs.flat[name]?.rules ?? {};

export default defineConfig(
  globalIgnores(["dist", "node_modules", "**/*.tsbuildinfo"]),

  /* Baseline JS correctness rules. */
  js.configs.recommended,

  /*
   * typescript-eslint's strictest tiers. `strictTypeChecked` includes the
   * type-aware rules (no floating promises, no unsafe `any` flow, …) that need
   * a TypeScript program; `stylisticTypeChecked` adds the consistency rules.
   */
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    languageOptions: {
      parserOptions: {
        // Resolves each file against the tsconfig that owns it, so the type
        // information behind the rules above matches `pnpm run typecheck`.
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      // An unused disable comment is dead weight that hides a fixed problem.
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error",
    },
  },

  /* Application source: browser globals, React, accessibility. */
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactPreset("recommended"),
      ...reactPreset("jsx-runtime"),
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.strict.rules,

      // Vite's Fast Refresh only works when a module's exports are all
      // components; anything else forces a full reload on edit.
      "react-refresh/only-export-components": [
        "error",
        { allowConstantExport: true },
      ],

      // PropTypes are redundant once props are typed.
      "react/prop-types": "off",

      "react/jsx-no-leaked-render": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/no-unstable-nested-components": "error",
      "react/self-closing-comp": "error",
      "react/jsx-boolean-value": ["error", "never"],
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "arrow-function",
        },
      ],
    },
  },

  /* Tooling config files run in Node, not the browser. */
  {
    files: ["*.config.ts", "eslint.config.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },

  /* Rules that raise the bar beyond the shared presets, everywhere. */
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // `verbatimModuleSyntax` erases nothing implicitly, so type imports must
      // say so — inline where possible to keep the import list in one place.
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",

      // An escape hatch that is used silently stops being an escape hatch.
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true },
      ],

      // Core rules the TS presets do not turn on.
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-alert": "error",
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "all" }],
      "object-shorthand": ["error", "always"],
      "no-param-reassign": ["error", { props: true }],
      "no-implicit-coercion": "error",
      "no-nested-ternary": "error",
      curly: ["error", "all"],
      "prefer-template": "error",
      "require-atomic-updates": "error",
    },
  },
);
