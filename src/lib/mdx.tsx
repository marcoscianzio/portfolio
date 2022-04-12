import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { PostPage } from "../types/PostPage";
import { Metadata } from "../types/Metadata";
import { getMdxSource } from "../utils/getMdxSource";

export const getFiles = (type: "blog" | "project") => {
  const { files } = getMdxSource(type);

  if (!files) {
    return;
  }

  return files;
};

export const getFileFromSlug = async (
  slug: string,
  type: "blog" | "project",
  locale: string | undefined
) => {
  const { mdxSource } = getMdxSource(type, locale, slug);

  const { content, data } = await matter(mdxSource!);

  const metadata = {
    ...(data as Metadata),
  };

  const files = getFiles(type);

  const currentIndex = files!.findIndex((file) => file === slug);

  const { previousFile, nextFile } = getPreviousAndNextFiles(
    type,
    currentIndex,
    locale
  );

  const source = await serialize(content, {});

  return {
    slug,
    source,
    content,
    metadata,
    previousFile,
    nextFile,
  } as PostPage;
};

export const getPreviousAndNextFiles = (
  type: "blog" | "project",
  currentIndex: number,
  locale: string | undefined
) => {
  let nextFile = null;
  let previousFile = null;

  if (!locale) {
    return {
      nextFile,
      previousFile,
    };
  }

  const files = getFiles(type);

  if (!files) {
    return {
      nextFile,
      previousFile,
    };
  }

  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  const previousFileSlug = files[previousIndex];
  const nextFileSlug = files[nextIndex];

  if (previousFileSlug) {
    const previousFileTitle = getFileTitle(type, previousFileSlug, locale);

    previousFile = {
      slug: `/${type}/${previousFileSlug}`,
      title: previousFileTitle,
    };
  }

  if (nextFileSlug) {
    const nextFileTitle = getFileTitle(type, nextFileSlug, locale);

    nextFile = {
      slug: `/${type}/${replaceMdxExtension(nextFileSlug)}`,
      title: nextFileTitle,
    };
  }

  return {
    nextFile,
    previousFile,
  };
};

export const getFilesMetadata = (
  type: "blog" | "project",
  locale: string | undefined
) => {
  if (!locale) {
    return;
  }

  const files = getFiles(type);

  if (!files) {
    return;
  }

  return files.reduce((allFiles: any, fileSlug: string) => {
    const { mdxSource } = getMdxSource(type, locale, fileSlug);

    if (!mdxSource) {
      return;
    }

    const { data } = matter(mdxSource);

    return [
      { ...data, slug: replaceMdxExtension(fileSlug), type },
      ...allFiles,
    ] as Metadata[];
  }, []);
};

export const getSelectedFilesMetadata = (
  type: "blog" | "project",
  locale: string | undefined
) => {
  if (!locale) {
    return;
  }

  const files = getFilesMetadata(type, locale);

  if (!files) {
    return;
  }

  return files.filter((file) => {
    return file.selected;
  }) as Metadata[];
};

export const getFileTitle = (
  type: "blog" | "project",
  slug: string,
  locale: string | undefined
) => {
  if (!locale) {
    return;
  }

  const { mdxSource } = getMdxSource(type, locale, slug);

  if (!mdxSource) {
    return;
  }

  const { data: fileData } = matter(mdxSource);

  const fileTitle = (fileData as Metadata).title;

  return fileTitle;
};

const replaceMdxExtension = (file: string) => {
  return file.replace(".mdx", "");
};

export const getAllFilesIds = (locales: string[], type: string) => {
  const { files } = getMdxSource(type);

  const paths = files!
    .map((file) =>
      locales.map((locale) => ({
        params: { slug: file },
        locale,
      }))
    )
    .flat();

  return paths;
};
