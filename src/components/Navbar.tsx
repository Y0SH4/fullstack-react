import React from 'react';
import { Flex, Text, HStack, Button, Box } from '@chakra-ui/react';

export const Navbar: React.FC = () => {
  return (
    <Flex w="100vw" justifyItems="center" h="3rem">
      <HStack w="100%" flexDirection="row">
        <Box flex={1}>
          <Text
            ml="1rem"
            fontSize="36px"
            fontWeight="bold"
            lineHeight="42px"
            color="blue.500"
            flex={1}
          >
            SuperApp
          </Text>
        </Box>
        <Box display="flex">
          <HStack spacing="2rem">
            <Text fontWeight="bold" color="gray.600">
              Blog
            </Text>
            <Text fontWeight="bold" color="gray.600">
              Product
            </Text>
            <Text fontWeight="bold" color="gray.600">
              Pricing
            </Text>
          </HStack>
        </Box>
        <Box display="flex" pr="2rem" flex={1} justifyContent="flex-end">
          <Button colorScheme="green">Get Started</Button>
        </Box>
      </HStack>
    </Flex>
  );
};
