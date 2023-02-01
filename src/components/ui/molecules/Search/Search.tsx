import { Flex } from "@chakra-ui/react";
import { InputSearch } from "../../atoms/InputSearch";
import { useSearch } from "./useSearch";
import { QuestionButton } from "../../atoms/QuestionButton";

export function Search() {
  const { setQuery } = useSearch();

  return (
    <Flex my={8} gap={8}>
      <InputSearch setQuery={setQuery} />
      <Flex onClick={() => console.log("oi")}>
        <QuestionButton />
      </Flex>
    </Flex>
  );
}
