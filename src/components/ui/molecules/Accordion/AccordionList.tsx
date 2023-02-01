import { Heading, Box, Text } from "@chakra-ui/react";
import { useItems } from "../../../../store/Context";

export function AccordionList() {
  const { items } = useItems();
  return (
    <>
      <Heading>Accordion</Heading>
      {items.length > 0 &&
        items.map((item) => (
          <Box key={item.id}>
            <Text>{item.title}</Text>
          </Box>
        ))}
    </>
  );
}
