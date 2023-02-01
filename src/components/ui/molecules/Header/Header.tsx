import { Flex } from "@chakra-ui/react";
import { PageTitle } from "../../atoms/PageTitle";
import { Logo } from "../../atoms/Logo";

export function Header() {
  return (
    <Flex
      background="primary"
      p={12}
      rounded="xl"
      shadow="xl"
      justifyContent="space-between"
      alignItems={{
        sm: "flex-start",
        base: "center",
        lg: "center",
      }}
      direction={{
        sm: "column-reverse",
        base: "row",
        lg: "row",
      }}
    >
      <PageTitle />
      <Logo />
    </Flex>
  );
}
