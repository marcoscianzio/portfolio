import { ArrowBackIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import Layout from "@components/Layout";
import PostMainInfo from "@components/PostMainInfo";
import PreviousAndNextButtons from "@components/PreviousAndNextButtons";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "@components/MDXComponents";
import { getAllFilesIds, getFileFromSlug } from "@lib/mdx";
import { Params } from "../../types/Params";
import { PostPage } from "../../types/PostPage";
import Head from "next/head";
import OGMeta from "@components/OGMeta";
import { useRouter } from "next/router";

const BlogPost: NextPage<PostPage> = ({
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
        <title>{metadata.title}</title>

        <OGMeta
          image={metadata.cover}
          slug={`/${router.locale}/${slug}`}
          title={`${metadata.title} - Marcos Cianzio`}
          description={metadata.description}
        />
        <meta name="description" content={metadata.description} />
      </Head>

      <PostMainInfo metadata={metadata} />

      <HStack w="full" spacing={10}>
        {previousFile && (
          <HStack
            w="full"
            p={4}
            justify="space-between"
            rounded="lg"
            bg="#282a36"
            color="#fff"
            borderWidth={1}
            borderColor="#ffffff0f"
          >
            <ArrowBackIcon boxSize={6} color="#fff" />
          </HStack>
        )}
      </HStack>

      <MDXRemote {...source} components={MDXComponents} />

      <PreviousAndNextButtons nextFile={nextFile} previousFile={previousFile} />
    </Layout>
  );
};

export default BlogPost;

export const getStaticProps: GetStaticProps<PostPage, Params> = async ({
  params,
  locale,
}) => {
  const { slug, source, content, metadata, nextFile, previousFile } =
    await getFileFromSlug(params!.slug, "blog", locale);

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
  const paths = getAllFilesIds(locales!, "blog");

  return {
    paths,
    fallback: false,
  };
};
