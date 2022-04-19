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

const Blog: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const router = useRouter();
  const { filteredPosts, handleSearch } = useSearch(posts);

  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>Blog - Marcos Cianzio</title>

        <OGMeta
          slug={`/${router.locale}/blog`}
          title="Blog - Marcos Cianzio"
          description={t("blog:description")}
        />
        <meta name="description" content={t("blog:description")} />
      </Head>

      <Stack pb={10} spacing={8}>
        <Heading color="#fff" fontSize="4xl">
          Blog
        </Heading>
        <Search handleSearch={handleSearch} />

        <Stack overflowY="hidden" mx="-25px !important" spacing={6}>
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
  const posts = getFilesMetadata("blog", locale);

  return {
    props: { posts: orderByNewest(posts) },
  };
};

export default Blog;
