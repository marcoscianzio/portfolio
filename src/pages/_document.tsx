import Favicon from "@components/Favicon";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Favicon />

      <meta
        name="keywords"
        content="marcos, cianzio, marcos cianzio, blog, developer, desarrollador, desarrollador web, web developer, full-stack dev, dev, desarrollador full-stack, full-stack, uruguay, portfolio, ciancio, siansio, proyectos, programador, github, linkedin"
      />

      <meta
        name="application-name"
        content="Marcos Cianzio - Full Stack Web Developer"
      />

      <link rel="me" href="mailto:marcoscianziogamero@gmail.com"></link>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
