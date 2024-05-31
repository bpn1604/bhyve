// pages/products/new.js
"use client";
import ProductForm from "@/app/components/ProductForm";
import productService from "@/app/redux/productService";
import { fetchProducts } from "@/app/redux/productsSlice";
import { Box, Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

const NewProduct = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = async (formData) => {
    console.log(formData);
    try {
      await productService.createProduct(formData);
      dispatch(fetchProducts());
      toast({
        title: "Product created successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/");
    } catch (error) {
      toast({
        title: "Error creating product",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error creating product:", error);
    }
  };

  return (
    <Center>
      <Box>
        <ProductForm
          onSubmit={handleSubmit}
          initialValues={{ name: "", description: "", price: "" }}
        />
      </Box>
    </Center>
  );
};

export default NewProduct;
