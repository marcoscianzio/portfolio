export const useExternalLink = (href: string) => {
  const isNotBlank = href.includes("mailto" || "tel");
  const target = isNotBlank ? "_parent" : "_blank";

  return {
    target,
  };
};
