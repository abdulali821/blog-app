"use client";

import React from "react";
import { motion } from "framer-motion";

export const Button = ({ title }: { title: string }) => {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
    >
      {title}
    </motion.button>
  );
};
