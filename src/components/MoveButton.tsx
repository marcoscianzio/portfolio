import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";

interface MoveButtonProps {
  file: {
    slug: string;
    title: string;
  };
  oppositeFile: {
    slug: string;
    title: string;
  };
  type: "previous" | "next";
}

const MoveButton = ({ type, file, oppositeFile }: MoveButtonProps) => {
  let { t } = useTranslation();

  let align = "flex-start";

  if (type === "previous" && oppositeFile) {
    align = "flex-end";
  }

  return (
    <Link href={file.slug}>
      <HStack
        cursor="pointer"
        transition="opacity 0.2s"
        _hover={{
          opacity: 0.8,
        }}
        w="full"
        p={4}
        justify={!oppositeFile ? "center" : "space-between"}
        spacing={!oppositeFile ? 10 : undefined}
        rounded="lg"
        bg="#282a36"
        color="#fff"
        borderWidth={1}
        borderColor="#ffffff0f"
      >
        {type === "previous" && <ArrowBackIcon boxSize={6} color="#fff" />}
        <Stack align={align}>
          <Text color="#b7b4c7" fontSize="md" textTransform="capitalize">
            {t(`common:${type}`)}
          </Text>
          <Heading as="h3" fontSize="2xl" color="#fff">
            {file.title}
          </Heading>
        </Stack>
        {type === "next" && <ArrowForwardIcon boxSize={6} color="#fff" />}
      </HStack>
    </Link>
  );
};

export default MoveButton;
