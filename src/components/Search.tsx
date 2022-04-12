import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Search } from "../types/Search";

const Search: React.FC<Search> = ({ handleSearch }) => {
  let { t } = useTranslation();

  return (
    <InputGroup variant="outline">
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon color="#b7b4c7" boxSize={4} />}
      />
      <Input
        onChange={handleSearch}
        variant="outline"
        placeholder={t("search:search")}
      />
    </InputGroup>
  );
};

export default Search;
