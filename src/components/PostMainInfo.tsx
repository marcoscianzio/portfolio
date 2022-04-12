import {
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PostMainInfoProps } from "../types/PostMainInfo";
import React from "react";
import Cover from "./Cover";
import Date from "./Date";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const PostMainInfo = ({ metadata }: PostMainInfoProps) => {
  const mobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  return (
    <Stack pb={10} spacing={10}>
      {mobile && (
        <HStack
          spacing={4}
          cursor="pointer"
          onClick={() => {
            router.back();
          }}
        >
          <ArrowBackIcon boxSize={6} color="#fff" />

          <Text color="#fff" fontSize="md">
            Go back
          </Text>
        </HStack>
      )}
      <Cover alt={`${metadata.title} cover`} image={metadata.cover} />
      <Stack spacing={6}>
        <Heading as="h1" fontSize="6xl" color="#fff">
          {metadata.title}
        </Heading>
        <Date
          role={metadata.role}
          workWith={metadata.workWith}
          date={metadata.date}
        />
      </Stack>
    </Stack>
  );
};

export default PostMainInfo;
