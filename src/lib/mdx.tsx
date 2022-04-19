import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { PostPage } from "../types/PostPage";
import { Metadata } from "../types/Metadata";
import { getMdxSource } from "../utils/getMdxSource";
import { orderByNewest } from "src/utils/orderByNewest";

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

  const files = orderByNewest(getFilesMetadata(type, locale));

  const currentIndex = files!.findIndex((file) => file.slug === slug);

  const { previousFile, nextFile } = getPreviousAndNextFiles(
    files,
    currentIndex
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
  files: Metadata[],
  currentIndex: number
) => {
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  const previousFile = files[previousIndex] || null;

  const nextFile = files[nextIndex] || null;

  console.log(nextFile, previousFile)

  return {
    previousFile,
    nextFile,
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

    return [{ ...data, slug: fileSlug, type }, ...allFiles] as Metadata[];
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
