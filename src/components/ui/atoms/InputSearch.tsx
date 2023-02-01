import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

type InputSearchType = {
  setQuery: Function;
};

export function InputSearch({ setQuery }: InputSearchType) {
  return (
    <InputGroup>
      <InputLeftElement
        children={<SearchIcon color="#6C6C6C" fontSize="3xl" />}
      />
      <Input
        type="text"
        placeholder="Procure aqui"
        onChange={(e) => setQuery(e.target.value)}
      />
    </InputGroup>
  );
}
