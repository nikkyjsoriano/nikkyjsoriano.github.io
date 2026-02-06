import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { system } from "../../theme";

export function Provider({ children, ...props }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props}>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}
