"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/framer-varients";

export const Error = ({ status, error }: { status: number; error: string }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg border border-red-500 gap-5 text-red-600 h-screen w-full flex justify-center items-center"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <motion.span
        className="text-2xl font-medium animate-pulse"
        style={{ color: "#ff4444" }}
      >
        {status}
      </motion.span>
      <div className="h-[50px] w-[0.2px] bg-red-600"></div>
      <motion.span className="text-sm">{error}</motion.span>
    </motion.div>
  );
};
