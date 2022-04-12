import React from "react";

const OGMeta = () => {
  const titleEn = "Marcos Cianzio - Full Stack Web Developer";
  const titleEs = "Marcos Cianzio - Full Stack Web Developer";

  const descriptionEn =
    "My portfolio. I'm a full stack web developer based in Uruguay. I'm passionate about building web applications and solving problems.";
  const descriptionEs =
    "Mi portfolio. Soy un desarrollador web full-stck de Uruguay. Me encanta construir aplicaciones web y resolver problemas.";

  const image = "/me.jpg";

  const url = "https://marcoscianzio.com/";

  const domain = "portfolio-marcoscianzio.vercel.app";

  return (
    <>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" lang="en" content={titleEn} />
      <meta property="og:title" lang="es" content={titleEs} />
      <meta property="og:description" lang="en" content={descriptionEn} />
      <meta property="og:description" lang="es" content={descriptionEs} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" lang="en" content={titleEn} />
      <meta name="twitter:title" lang="es" content={titleEs} />
      <meta name="twitter:description" lang="es" content={descriptionEs} />
      <meta name="twitter:description" lang="en" content={descriptionEn} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default OGMeta;
