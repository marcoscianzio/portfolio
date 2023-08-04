import { Icon, Stack, Tooltip } from "@chakra-ui/react";
import React from "react";
import { NavItemBox } from "../types/NavItemBox";
import useTranslation from "next-translate/useTranslation";

const NavItemBox: React.FC<NavItemBox> = ({
  children,
  icon,
  isItemActive,
  label,
}) => {
  const borderColor = isItemActive ? "#fff" : "#ffffff0f";

  let { t } = useTranslation();

  const _after = isItemActive
    ? {
        content: `"."`,
        position: "absolute",
        bottom: -4,
        left: "50%",
        transform: "translateX(-50%)",
        color: "#fff",
      }
    : {};

  const mb = isItemActive ? "var(--chakra-space-3)" : 0;

  return (
    <Tooltip label={t(label)} px="2" mt="2" placement="bottom" bg="#282a36" color="white" rounded="2xl">
      <Stack
        align="center"
        direction="row"
        position="relative"
        py={3}
        px={4}
        mb={`${mb} !important`}
        ml={1}
        mr={1}
        cursor="pointer"
        verticalAlign="bottom"
        transition="all 0.2s"
        _hover={{
          transform: "scale(1.25)",
          mr: "1rem !important",
          ml: "1rem !important",
          zIndex: 200,
        }}
        _after={_after}
        rounded="xl"
        borderWidth={1}
        borderColor={borderColor}
      >
        <Icon color="#fff" as={icon} boxSize={6} />
        {children}
      </Stack>
    </Tooltip>
  );
};

export default NavItemBox;
