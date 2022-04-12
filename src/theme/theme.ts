import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { semanticTokens } from "./tokens";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  fonts: {
    heading: "IBM Plex Sans",
    body: "IBM Plex Sans",
  },
  styles: {
    global: {
      "html, body, #__next": {
        bg: "bg",
        overflowX: "hidden",
      },
      ".chakra-text, .chakra-heading": {
        color: "black",
      },
      "::-webkit-scrollbar": {
        width: "7px",
        h: "7px",
      },
      "::-webkit-scrollbar-track": {
        background: "#282a36",
      },
      "::-webkit-scrollbar-thumb": {
        rounded: "lg",
        background: "#fff",
      },
    },
  },
  config,
  semanticTokens,
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            rounded: "lg",
            bg: "#282a36",
            color: "#fff",
            borderWidth: 1,
            borderColor: "#ffffff0f",
            fontSize: "xl",
            _placeholder: {
              color: "#b7b4c7",
            },
            _focus: {
              borderColor: "#fff",
              boxShadow: "none",
            },
          },
        },
      },
    },
  },
});
