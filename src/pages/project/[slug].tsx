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
import { absUrl } from "src/utils/absUrl";
import useOpenGraph from "src/hooks/useOpenGraph";

const ProjectPost: NextPage<PostPage> = ({
  slug,
  source,
  metadata,
  nextFile,
  previousFile,
}) => {
  const router = useRouter();

  const ogProperties = useOpenGraph({
    locale: router.locale,
    url: absUrl(`/${router.locale}/project/${slug}`),
    title: `${metadata.title} - Marcos Cianzio`,
    image: {
      type: "image/jpeg",
      url: metadata.cover,
      alt: "Cover",
    },
    description: metadata.description,
    type: "article",
    section: "Project",
    published_time: metadata.date,
  });
  
  return (
    <Layout>
      <Head>
        <title>{`${metadata.title} - Marcos Cianzio`}</title>
        <meta name="description" content={metadata.description} />

        <OGMeta properties={ogProperties} />
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
