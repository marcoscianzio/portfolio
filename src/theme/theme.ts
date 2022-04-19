import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { semanticTokens } from "./tokens";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  fonts: {
    heading: "Manrope",
    body: `Archivo,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  styles: {
    global: {
      "html, body, #__next": {
        bg: "bg",
        lineHeight: "base",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
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
      ".highlight-line": {
        backgroundColor: "#f8f8f21f",
        display: "block",
        marginRight: "-1em",
        marginLeft: "-1em",
        paddingRight: "1em",
        paddingLeft: "0.75em",
        borderLeft: "0.3em solid #f8f8f21f",
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
