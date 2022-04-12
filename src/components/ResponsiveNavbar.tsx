import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  Stack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { responsiveNavItems } from "src/utils/navItems";
import LocaleList from "./LocaleList";
import ResponsiveNavItem from "./ResponsiveNavItem";

const ResponsiveNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <IconButton
        hidden={!mobile}
        position="absolute"
        top={10}
        left={4}
        variant="unstyled"
        onClick={onOpen}
        aria-label="open-nav"
        icon={<Icon color="#fff" as={FiMenu} boxSize={8} />}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="bg">
          <DrawerCloseButton color="#fff" />

          <DrawerBody>
            <Stack py={14} h="full" justify="space-between">
              <Stack spacing={6}>
                {responsiveNavItems.map(({ sectionName, items }, i) => {
                  return (
                    <ResponsiveNavItem
                      key={i}
                      sectionName={sectionName}
                      items={items}
                    />
                  );
                })}
              </Stack>
              <LocaleList />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ResponsiveNavbar;
