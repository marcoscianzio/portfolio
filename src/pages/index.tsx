import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Layout from "@components/Layout";
import OGMeta from "@components/OGMeta";
import Post from "@components/Post";
import { getSelectedFilesMetadata } from "@lib/mdx";
import type { GetStaticProps, NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { IndexPage } from "../types/IndexPage";
import { orderByNewest } from "../utils/orderByNewest";

const Home: NextPage<IndexPage> = ({
  selectedBlogPosts,
  selectedProjectPosts,
}) => {
  let { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t("common:home")} - Marcos Cianzio</title>

        <OGMeta
          slug="/"
          title={`${t("common:home")} - Marcos Cianzio`}
          description={t("index:description")}
        />
        <meta name="description" content={t("index:description")} />
      </Head>

      <Stack pb={16} spacing={20}>
        <Stack spacing={4}>
          <Heading as="h1" color="#fff" fontSize="4xl">
            Marcos Cianzio
          </Heading>
          <Text color="#b7b4c7" fontSize="2xl">
            {t("index:description")}
          </Text>
          <Text color="#b7b4c7" fontSize="2xl">
            {t("index:also")}
          </Text>
        </Stack>
        <Stack spacing={6}>
          <Heading color="#fff" fontSize="4xl">
            {t("index:selectedWork")}
          </Heading>
          <Stack pb={6} overflowX="auto" px="25px" mx="-25px !important">
            <HStack mx="-25px !important" alignItems="start" spacing={6}>
              {selectedProjectPosts.map(
                ({ cover, type, date, title, slug }) => {
                  return (
                    <Post
                      key={slug}
                      type={type}
                      cover={cover}
                      date={date}
                      title={title}
                      slug={slug}
                    />
                  );
                }
              )}
            </HStack>
          </Stack>
        </Stack>
        <Stack spacing={8}>
          <Heading color="#fff" fontSize="4xl">
            Blog
          </Heading>
          <Stack mx="-25px !important" spacing={12}>
            {selectedBlogPosts.map(({ cover, type, date, title, slug }) => {
              return (
                <Post
                  key={slug}
                  type={type}
                  cover={cover}
                  date={date}
                  title={title}
                  slug={slug}
                />
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const selectedBlogPosts = getSelectedFilesMetadata("blog", locale);

  const selectedProjectPosts = getSelectedFilesMetadata("project", locale);

  return {
    props: {
      selectedBlogPosts: orderByNewest(selectedBlogPosts),
      selectedProjectPosts: orderByNewest(selectedProjectPosts),
    },
  };
};
