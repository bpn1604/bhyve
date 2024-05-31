
"use client";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Center, Spinner, useToast } from "@chakra-ui/react";
import ProductForm from "@/app/components/ProductForm";
import { fetchProducts, resetProducts } from "@/app/redux/productsSlice";
import productService from "@/app/redux/productService";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const EditProduct = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const toast = useToast();
  const products = useSelector((state) => state.products.items);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleSubmit = async (formData) => {
    try {
      await productService.updateProduct(id, formData);
      toast({
        title: "updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch(resetProducts());
      dispatch(fetchProducts());
      router.push("/");
    } catch (error) {
      toast({
        title: "Error updating product",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error updating product:", error);
    }
  };

  return (
    <Center minHeight="100vh" bg="gray.100">
      <Box
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        width="100%"
        maxWidth="600px"
      >
        <Center>
          <Heading color="red" mb={5}>Update Product</Heading>
        </Center>
        {product ? (
          <ProductForm onSubmit={handleSubmit} initialValues={product} />
        ) : (
          <Center>
            <Spinner />
            <p>Loading...</p>
          </Center>
        )}
      </Box>
    </Center>
  );
};

export default EditProduct;
