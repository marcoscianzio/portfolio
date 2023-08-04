import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiFlag } from "react-icons/fi";
import NavItemBox from "./NavItemBox";

const LocaleList = () => {
  const router = useRouter();

  return (
    <Menu>
      <MenuButton
        _focus={{
          boxShadow: "none",
        }}
      >
        <NavItemBox label="" icon={FiFlag}>
          <Text color="#fff" textTransform="uppercase">
            {router.locale}
          </Text>
        </NavItemBox>
      </MenuButton>
      <MenuList borderWidth={1} borderColor="#ffffff0f" bg="bg" mt={2}>
        {router.locales?.map((locale, i) => {
          const isDisabled = locale === router.locale;

          return (
            <Link key={i} href={router.asPath} locale={locale}>
              <MenuItem
                textTransform="uppercase"
                isDisabled={isDisabled}
                key={i}
              >
                {locale}
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default LocaleList;
