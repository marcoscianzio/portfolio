import {
  HStack,
  Icon,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import React from "react";
import { useExternalLink } from "src/hooks/useExternalLink";
import { isActive } from "src/utils/IsActive";
import { ResponsiveNavItem } from "../types/NavItem";

const ResponsiveNavItem: React.FC<ResponsiveNavItem> = ({
  sectionName,
  items,
}) => {
  return (
    <Stack spacing={4}>
      <Text color="#b7b4c7" fontSize="xl" textTransform="uppercase">
        {sectionName}
      </Text>
      {items.map(({ href, icon, isExternal, label }, i) => {
        let { t } = useTranslation();

        const { target } = useExternalLink(href);

        const isItemActive = isActive(href);
        const fontWeight = isItemActive ? "bold" : "nromal";
        const bg = isItemActive ? "#1d1a27" : undefined;

        const item = (
          <HStack
            transition="all 0.4s"
            rounded="lg"
            _hover={{
              bg: "#282a36",
            }}
            p={4}
            bg={bg}
            spacing={6}
            cursor="pointer"
          >
            <Icon as={icon} boxSize={6} color="#fff" />
            <Text fontWeight={fontWeight} color="#fff" fontSize="xl">
              {t(label)}
            </Text>
          </HStack>
        );

        if (isExternal) {
          return (
            <ChakraLink
              rel="noopener noreferrer"
              aria-label={t(label)}
              key={i}
              href={href}
              target={target}
            >
              {item}
            </ChakraLink>
          );
        }

        return (
          <NextLink key={i} href={href}>
            {item}
          </NextLink>
        );
      })}
    </Stack>
  );
};

export default ResponsiveNavItem;
