import { Heading, Stack } from "@chakra-ui/react";
import Layout from "@components/Layout";
import OGMeta from "@components/OGMeta";
import Post from "@components/Post";
import Search from "@components/Search";
import { getFilesMetadata } from "@lib/mdx";
import { GetStaticProps, InferGetServerSidePropsType, NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useSearch } from "../hooks/useSearch";
import { orderByNewest } from "../utils/orderByNewest";
import { absUrl } from "src/utils/absUrl";
import useOpenGraph from "src/hooks/useOpenGraph";

const Projects: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ posts }) => {
  const { filteredPosts, handleSearch } = useSearch(posts);
  const router = useRouter();
  let { t } = useTranslation();

  const ogProperties = useOpenGraph({
    locale: router.locale,
    url: absUrl(`/${router.locale}/projects`),
    title: `${t("common:projects")} - Marcos Cianzio`,
    image: {
      type: "image/jpeg",
      url: "/me.jpg",
      alt: "A picture of me",
    },
    description: t("projects:description"),
    type: "website",
  });

  return (
    <Layout>
      <Head>
        <title>{t("common:projects")} - Marcos Cianzio</title>
        <meta name="description" content={t("projects:description")} />
       
        <OGMeta properties={ogProperties} />
      </Head>

      <Stack pb={10} spacing={8}>
        <Heading color="#fff" fontSize="4xl">
          {t("common:projects")}
        </Heading>
        <Search handleSearch={handleSearch} />

        <Stack mx={"-25px !important"} spacing={6}>
          {filteredPosts.map(({ cover, type, date, title, slug }) => {
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
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = ({ locale }) => {
  const posts = getFilesMetadata("project", locale);

  return {
    props: { posts: orderByNewest(posts) },
  };
};

export default Projects;
