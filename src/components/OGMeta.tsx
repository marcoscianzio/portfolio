import React from "react";

interface OGMeta {
  title: string;
  description: string;
  slug?: string;
}

const OGMeta = ({ title, description, slug }: OGMeta) => {
  const image = "/me.jpg";
  const domain = "marcoscianzio.com";
  
  const url = "https://marcoscianzio.com/";

  return (
    <>
      <meta property="og:url" content={`${url}${slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={`${url}${slug}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default OGMeta;
