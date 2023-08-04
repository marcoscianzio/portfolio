import { Box, Center, Divider } from "@chakra-ui/react";
import React from "react";
import { navItems } from "src/utils/navItems";
import LocaleList from "./LocaleList";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      alignItems="center"
      as="nav"
      left="50%"
      transform="translateX(-50%)"
      top={10}
      bg="#1d1a27"
      zIndex={1000}
      maxW="container.md"
      rounded="2xl"
      boxShadow="dark-lg"
      p={2}
      borderWidth={1}
      borderColor="#ffffff0f"
      d="flex"
      justifyContent="space-around"
    >
      {navItems.map(({ icon, href, label, isExternal, divider }, i) => {
        return (
          <>
            <NavItem
              key={i}
              label={label}
              icon={icon}
              isExternal={isExternal}
              href={href}
            />

            {divider && (
              <Center height="50px" p="2">
                <Divider orientation="vertical" />
              </Center>
            )}
          </>
        );
      })}
      <LocaleList />
    </Box>
  );
};

export default Navbar;
