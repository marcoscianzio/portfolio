import path from "path";

import fs from "fs";
const { defaultLocale } = require("i18n.json");

const root = process.cwd();

export const getMdxSource = (
  type: string,
  locale?: string | undefined,
  slug?: string
) => {
  let fileName = null;
  let files = null;
  let folder = null;
  let mdxSource = null;
  let fullPath = null;

  folder = slug ? `src/posts/${type}/${slug}` : `src/posts/${type}`;

  if (locale) {
    fileName = defaultLocale === locale ? "index.mdx" : `index.${locale}.mdx`;

    fullPath = path.join(root, folder, fileName);
  } else {
    fullPath = path.join(root, folder);
  }

  if (!fs.existsSync(fullPath)) {
    return {
      mdxSource,
      files,
      fileName,
      folder,
      fullPath,
    };
  }

  if (locale) {
    mdxSource = fs.readFileSync(fullPath, "utf-8");
  } else {
    files = fs.readdirSync(fullPath);
  }

  return {
    mdxSource,
    files,
    fileName,
    folder,
    fullPath,
  };
};
