import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Flex p={4} bg="teal.500" color="white">
      <Box p="2">
        <Heading size="md">Logo</Heading>
      </Box>
      <Spacer />
      <Box>
        <Link href="/" passHref>
          <Button as="a" variant="ghost" mr={4}>
            Home
          </Button>
        </Link>
        <Link href="/products/new" passHref>
          <Button as="a" variant="ghost" mr={4}>
            Create Product
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
