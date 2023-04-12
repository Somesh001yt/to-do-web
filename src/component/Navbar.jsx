import { Box, Flex, Spacer, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="blue.500"
      color="white"
    >
      <Box>
        <Link to="/">
          <ChakraLink fontSize="lg" fontWeight="bold">
            To Do App
          </ChakraLink>
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }}>
        <Link to="/">
          <ChakraLink mr={8}>Form</ChakraLink>
        </Link>
        <Link to="/taskform">
          <ChakraLink mr={8}>Dashboard</ChakraLink>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
