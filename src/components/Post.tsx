import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useFormattedDate } from "../hooks/useFormattedDate";
import { Metadata } from "../types/Metadata";
import { ChakraNextImage } from "./CharkaNextImage";

const Post: React.FC<Omit<Metadata, "description">> = ({
  slug,
  title,
  cover,
  date,
  type,
}) => {
  const { formattedDate } = useFormattedDate(date);

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
        <ChakraNextImage
          pointerEvents="none"
          objectFit="cover"
          alt={title}
          rounded="lg"
          h="96"
          src={cover}
        />
        <Stack>
          <Text fontSize="2xl" color="#fff">
            {title}
          </Text>
          <Text textTransform="capitalize" color="#b7b4c7" fontSize="2xl">
            {formattedDate}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Post;
