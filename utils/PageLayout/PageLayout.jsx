import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

export const PageLayout = ({ children, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...rest}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
};
