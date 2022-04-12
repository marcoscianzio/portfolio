import React from "react";

const OGMeta = () => {
  return (
    <>
      <meta
        property="og:url"
        content="https://portfolio-marcoscianzio.vercel.app/"
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content="Marcos Cianzio - Full Stack Web Developer"
      />
      
      <meta
        property="og:description"
        lang="en"
        content="My portfolio. I'm a full stack web developer based in Uruguay. I'm passionate about building web applications and solving problems."
      />

      <meta
        property="og:description"
        lang="en"
        content="Mi portfolio. Soy un desarrollador web full-stck de Uruguay. Me encanta construir aplicaciones web y resolver problemas."
      />

      <meta property="og:image" content="/me.png" />
    </>
  );
};

export default OGMeta;
