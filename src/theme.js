import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "[data-part='button'][data-variant='ghost']:hover, button[data-variant='ghost']:hover": {
      bg: "var(--chakra-colors-bg-muted) !important",
    },
    "[data-part='button'][data-variant='ghost']:active, button[data-variant='ghost']:active": {
      bg: "var(--chakra-colors-bg-emphasized) !important",
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        primary: { value: { base: "#4CAF50", _dark: "#9FE88D" } },
        secondary: { value: { base: "#E07B39", _dark: "#D9925B" } },
        accent: { value: { base: "#9B59B6", _dark: "#C58BDB" } },
        bg: {
          value: { base: "#FFFFFF", _dark: "#2A303C" },
          muted: { value: { base: "#F5F5F5", _dark: "#242933" } },
          emphasized: { value: { base: "#E8E8E8", _dark: "#1F2430" } },
        },
        fg: {
          value: { base: "#1A1A2E", _dark: "#B2C7D4" },
          muted: { value: { base: "#6B7280", _dark: "rgba(178,199,212,0.7)" } },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
