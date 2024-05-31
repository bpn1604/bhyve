// components/ProductDetails.js
import { Box, Button, Text, Center, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import productService from "@/app/redux/productService";
import { fetchProducts, resetProducts } from "@/app/redux/productsSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProductDetails = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await productService.deleteProduct(product.id);
      toast.success("Product deleted successfully");
      dispatch(resetProducts());
      dispatch(fetchProducts());
      router.push("/");
    } catch (error) {
      toast.error("Error deleting product");
      console.error("Error deleting product:", error);
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <Center minHeight="100vh" bg="gray.100" p={4}>
      
      <MotionBox
       
      >
        <IconButton
          margin="30px"
          icon={<ArrowBackIcon />}
          onClick={handleBack}
          position="absolute"
          top={4}
          left={4}
          colorScheme="teal"
        />
        
        <Box
          border="1px solid"
          borderColor="gray.200"
          p={6}
          borderRadius="lg"
          mb={4}
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Product Title - {product.name}
            
          </Text>
          <hr />
          <Text fontSize="md" color="gray.600" mb={4}>
            Description - {product.description}
          </Text>
          <hr />
          <Text fontSize="lg" color="teal.500">
            ${product.productPrice}
          </Text>
        </Box>
        <Button
          mt={4}
          colorScheme="teal"
          onClick={() => router.push(`/products/edit/${product.id}`)}
          size="lg"
          mr={2}
        >
          Edit
        </Button>
        <Button
          mt={4}
          colorScheme="red"
          onClick={handleDelete}
          size="lg"
        >
          Delete
        </Button>
      </MotionBox>
    </Center>
  );
};

export default ProductDetails;
