import { Container, Box } from "@chakra-ui/react";
import { Faq } from "./components/pages/Faq/Faq";

function App() {
  return (
    <Container maxW="container.xl" margin="0 auto">
      <Box w="full" px={8} my={12}>
        <Faq />
      </Box>
    </Container>
  );
}

export default App;
