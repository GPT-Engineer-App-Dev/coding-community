import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">
            Forum
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/register" color="white" mr={4}>
            Register
          </Link>
          <Link as={RouterLink} to="/login" color="white" mr={4}>
            Login
          </Link>
          <Link as={RouterLink} to="/discussion" color="white">
            Discussion
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;