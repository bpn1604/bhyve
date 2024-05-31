
import axios from "axios";

const baseUrl = "https://65d5af42f6967ba8e3bc35a3.mockapi.io/blogs/v1/articles";

const getAllProducts = async (page = 1) => {
  return axios.get(`${baseUrl}?page=${page}&limit=12`);
};

const createProduct = async (product) => {
  console.log(product, "123");
  try {
    const response = await axios.post(baseUrl, product);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

const updateProduct = async (id, product) => {
  return axios.put(`${baseUrl}/${id}`, product);
};

const deleteProduct = async (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAllProducts, createProduct, updateProduct, deleteProduct };
