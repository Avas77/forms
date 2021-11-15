import React from "react";
import { VStack, Heading, Text, HStack, Stack } from "@chakra-ui/layout";
import { Button, AspectRatio, Image, Divider } from "@chakra-ui/react";

const cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>If the price is too hard on your eyes,</Text>
        <Button variant="link" colorScheme="black">
          by changing the theme.
        </Button>
      </VStack>
      <HStack w="full" spacing={6} alignItems="center">
        <AspectRatio ratio={1} w={24}>
          <Image
            src="https://m.media-amazon.com/images/I/71PfGyStYmL._AC_SX466_.jpg"
            alt="skateboard"
          />
        </AspectRatio>
        <Stack
          w="full"
          spacing={0}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text color="gray.600">PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.20
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color="gray.600">Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color="gray.600">Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default cart;
