import { Heading, Stack } from "@chakra-ui/react";
import Layout from "@components/Layout";
import Post from "@components/Post";
import Search from "@components/Search";
import { getFilesMetadata } from "@lib/mdx";
import { GetStaticProps, InferGetServerSidePropsType, NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import { useSearch } from "../hooks/useSearch";
import { orderByNewest } from "../utils/orderByNewest";

const Projects: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ posts }) => {
  const { filteredPosts, handleSearch } = useSearch(posts);
  let { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t("common:projects")} - Marcos Cianzio</title>
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
