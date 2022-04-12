import { HStack } from "@chakra-ui/react";
import React from "react";
import { navItems } from "src/utils/navItems";
import LocaleList from "./LocaleList";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <HStack
      position="fixed"
      alignItems="start"
      as="nav"
      left="50%"
      transform="auto"
      translateX="-50%"
      boxShadow="dark-lg"
      top={10}
      bg="#1d1a27"
      zIndex={1000}
      maxW="container.md"
      rounded="2xl"
      p={2}
      borderWidth={1}
      borderColor="#ffffff0f"
    >
      {navItems.map(({ icon, href, label, isExternal }, i) => {
        return (
          <NavItem key={i} label={label} icon={icon} isExternal={isExternal} href={href} />
        );
      })}
      <LocaleList />
    </HStack>
  );
};

export default Navbar;
