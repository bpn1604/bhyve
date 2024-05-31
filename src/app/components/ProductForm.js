import { Box, Input, Textarea, Button, Center, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./Navbar";

const MotionBox = motion(Box);

const ProductForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues.name || "");
  const [description, setDescription] = useState(initialValues.description || "");
  const [productPrice, setProductPrice] = useState(initialValues.productPrice || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, productPrice });
  };

  return (
    <>
    
    <Center minHeight="10vh" box-shadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
      <MotionBox
        as="form"
        onSubmit={handleSubmit}
        p={8}
        bg="white"
        
        borderRadius="md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="Back to Home"
          onClick={() => window.history.back()}
          mb={4}
        />
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          mb={3}
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          mb={3}
        />
        <Input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
          mb={3}
        />
        <Center>
          <Button type="submit" colorScheme="teal" mr={2}>Submit</Button>
          
        </Center>
      </MotionBox>
    </Center>
    </>
  );
};

export default ProductForm;
