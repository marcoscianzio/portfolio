import React from "react";

export type OGProperties = {
  locale?: string | undefined;
  url: string;
  title: string;
  type: "article" | "website";
  description: string;
  site_name: string;
  image: {
    alt: string;
    type: string;
    url: string;
    width: string;
    height: string;
  } | null;
  author?: string;
  section?: string;
  modified_time?: string;
  published_time?: string;
  card: "summary" | "summary_large_image" | "app" | "player";
};

const OGMeta = ({ properties }: { properties: OGProperties }) => {
  const {
    locale,
    url,
    site_name,
    title,
    type,
    description,
    author,
    section,
    image,
    modified_time,
    published_time,
    card,
  } = properties;

  const domain = "marcoscianzio.com";

  const baseUrl = "https://marcoscianzio.com";

  return (
    <>
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:url" content={`${baseUrl}${url}`} />
      <meta property="og:site_name" content={site_name} />
      {type === "article" && (
        <>
          <meta property="article:author" content={author || "Marcos Cianzio"} />
          <meta property="article:section" content={section} />
          <meta property="article:modified_time" content={modified_time} />
          <meta property="article:published_time" content={published_time} />
        </>
      )}
      {image && (
        <>
          <meta property="og:image" content={image.url} />
          <meta
            property="og:image:secure_url"
            content={image.url.replace("http://", "https://")}
          />
          <meta property="og:image:width" content={image.width} />
          <meta property="og:image:height" content={image.height} />
          <meta property="og:image:alt" content={image.alt} />
          <meta property="og:image:type" content={image.type} />
          <meta name="twitter:image" content={image.url} />
        </>
      )}
      <meta name="twitter:card" content={card} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:domain" content={domain} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || ""} />
    </>
  );
};

export default OGMeta;
