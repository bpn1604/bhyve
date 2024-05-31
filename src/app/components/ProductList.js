
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const MotionBox = motion(Box);

const ProductList = ({ products }) => {
  return (
    <>
      <Box padding={8}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {products.map((product) => (
            <Link key=  { `${product.name}-${product.id}`} href={`/products/${product.id}`}>
              <MotionBox
                border="1px"
                p={4}
                borderRadius="md"
                _hover={{ bg: "gray.100" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                cursor="pointer"
              >
                <Text fontSize="lg" fontWeight="bold">
                  {product.name}
                </Text>
                <Text fontSize="md" color="gray.600" isTruncated>
                  {product.description}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Price - ${product.productPrice}
                </Text>
              </MotionBox>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ProductList;
