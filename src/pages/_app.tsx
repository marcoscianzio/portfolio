import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Background } from "@components/Background";
import Fonts from "@components/Fonts";
import { theme } from "../theme/theme";
import "@fontsource/ibm-plex-sans";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Fonts />
      <Background />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
