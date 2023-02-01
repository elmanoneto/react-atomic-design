import { Button, Text, Hide } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export function QuestionButton() {
  return (
    <Button
      background="secondary"
      textColor="primary"
      width={{ base: "8rem", md: "16rem" }}
      fontSize="xl"
      fontWeight="bold"
      rounded="lg"
    >
      <Hide below="md">
        <Text>Nova Pergunta</Text>
      </Hide>
      <AddIcon ml={{ base: 0, md: 4 }} />
    </Button>
  );
}
