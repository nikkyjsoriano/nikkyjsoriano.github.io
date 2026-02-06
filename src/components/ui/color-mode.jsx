import React from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { IconButton, ClientOnly, Skeleton } from "@chakra-ui/react";
import { LuSun, LuMoon } from "react-icons/lu";

export function ColorModeProvider(props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange {...props} />
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return {
    colorMode: resolvedTheme ?? "dark",
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export const ColorModeButton = React.forwardRef(function ColorModeButton(
  props,
  ref
) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        color="fg"
        aria-label="Toggle color mode"
        size="sm"
        _hover={{ bg: "bg.muted" }}
        _active={{ bg: "bg.emphasized" }}
        ref={ref}
        {...props}
      >
        {colorMode === "light" ? <LuMoon /> : <LuSun />}
      </IconButton>
    </ClientOnly>
  );
});
