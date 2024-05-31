// app/providers.js
"use client";

import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { ToastContainer } from "react-toastify";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <ToastContainer />
        {children}
      </ChakraProvider>
    </Provider>
  );
}
