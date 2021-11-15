import React from "react";
import { Container, Flex, VStack } from "@chakra-ui/layout";
import Details from "./components/details";
import Cart from "./components/cart";

const App = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default App;
