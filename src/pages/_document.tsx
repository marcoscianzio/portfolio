import Favicon from "@components/Favicon";
import OGMeta from "@components/OGMeta";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Favicon />

      <meta name="application-name" content="Marcos Cianzio" />

      <meta
        name="description"
        lang="en"
        content="Marcos Cianzio's portfolio. This is a collection of my work and
        projects, as a web developer based in Uruguay. You can also see my blog
        posts about programming and technology. Access to my all my social media
        such as Github and Linkedin! Furthermore, you are able to contact me by
        email"
      />

      <meta
        name="description"
        lang="es"
        content="El portfolio de Marcos Cianzio. Esta es una colección de mi trabajo y proyectos como desarrollador web en Uruguay. También puedes ver las publicaciones de mi blog sobre programación y tecnología. ¡Accede a mis redes sociales como Github y Linkedin! Puedes ponerte en contacto conmigo por cualquier consulta duda por email."
      />

      <link rel="me" href="mailto:marcoscianziogamero@gmail.com"></link>

      <OGMeta />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
