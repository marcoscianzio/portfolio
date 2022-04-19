import Layout from "@components/Layout";
import OGMeta from "@components/OGMeta";
import PostMainInfo from "@components/PostMainInfo";
import PreviousAndNextButtons from "@components/PreviousAndNextButtons";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { useRouter } from "next/router";
import MDXComponents from "../../components/MDXComponents";
import { getAllFilesIds, getFileFromSlug } from "../../lib/mdx";
import { Params } from "../../types/Params";
import { PostPage } from "../../types/PostPage";

const ProjectPost: NextPage<PostPage> = ({
  slug,
  source,
  metadata,
  nextFile,
  previousFile,
}) => {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{`${metadata.title} - Marcos Cianzio`}</title>

        <OGMeta
          slug={`${router.locale}/${slug}`}
          title={`${metadata.title} - Marcos Cianzio`}
          description={metadata.description}
        />
        <meta name="description" content={metadata.description} />
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
