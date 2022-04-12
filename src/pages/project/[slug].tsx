import Layout from "@components/Layout";
import PostMainInfo from "@components/PostMainInfo";
import PreviousAndNextButtons from "@components/PreviousAndNextButtons";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import MDXComponents from "../../components/MDXComponents";
import { getAllFilesIds, getFileFromSlug } from "../../lib/mdx";
import { Params } from "../../types/Params";
import { PostPage } from "../../types/PostPage";

const ProjectPost: NextPage<PostPage> = ({
  source,
  metadata,
  nextFile,
  previousFile,
}) => {
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <PostMainInfo metadata={metadata} />

      <MDXRemote {...source} components={MDXComponents} />

      <PreviousAndNextButtons nextFile={nextFile} previousFile={previousFile} />
    </Layout>
  );
};

export default ProjectPost;

export const getStaticProps: GetStaticProps<PostPage, Params> = async ({
  params,
  locale,
}) => {
  const { slug, source, content, metadata, nextFile, previousFile } =
    await getFileFromSlug(params!.slug, "project", locale);

  return {
    props: {
      slug,
      source,
      content,
      metadata,
      nextFile,
      previousFile,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = ({ locales }) => {
  const paths = getAllFilesIds(locales!, "project");

  return {
    paths,
    fallback: false,
  };
};
