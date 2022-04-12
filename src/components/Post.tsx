import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Metadata } from "../types/Metadata";
import { ChakraNextImage } from "./CharkaNextImage";

const Post: React.FC<Metadata> = ({ slug, title, cover, date, type }) => {
  return (
    <Link href={`/${type}/${slug}`}>
      <Stack
        p="25px"
        transition="all 0.4s"
        rounded="lg"
        _hover={{
          bg: "#282a36",
        }}
        w="full"
        minW="300px"
        cursor="pointer"
        spacing={6}
      >
        <ChakraNextImage pointerEvents="none" alt={title} rounded="lg" h="96" src={cover} />
        <Stack>
          <Text fontSize="2xl" color="#fff">
            {title}
          </Text>
          <Text color="#b7b4c7" fontSize="2xl">
            {date}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Post;
