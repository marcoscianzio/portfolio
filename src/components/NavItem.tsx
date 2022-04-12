import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useExternalLink } from "../hooks/useExternalLink";
import { NavItem } from "../types/NavItem";
import { isActive } from "../utils/IsActive";
import NavItemBox from "./NavItemBox";

const NavItem: React.FC<NavItem> = ({ icon, href, isExternal }) => {
  const isItemActive = isActive(href);

  const { target } = useExternalLink(href);

  const item = <NavItemBox icon={icon} isItemActive={isItemActive} />;

  if (isExternal) {
    return (
      <ChakraLink
        _focus={{
          boxShadow: "none",
        }}
        target={target}
        variant="unstyled"
        href={href}
      >
        {item}
      </ChakraLink>
    );
  }

  return (
    <Link href={href}>
      <span>{item}</span>
    </Link>
  );
};

export default NavItem;
