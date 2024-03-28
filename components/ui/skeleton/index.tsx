"use client";

import React from "react";
import { motion } from "framer-motion";
import { contentVarients, postsContainerVariants } from "@/lib/framer-varients";

export const BlogCardSkeleton = () => {
  return (
    <motion.div
      variants={postsContainerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="pt-20">
        <div className="w-[90%] mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Latest Blog Posts
          </h1>
          <motion.ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, index) => (
              <motion.li
                key={index}
                variants={contentVarients}
                className="bg-gray-200 shadow-md rounded-md py-16 px-6 skeleton"
              >
                {/* Skeleton elements for loading state */}
                <motion.div className="h-16 bg-gray-300 rounded-t-md mb-2 animate-pulse"></motion.div>
                <motion.p className="h-4 bg-gray-300 rounded-md mb-2 animate-pulse"></motion.p>
                <motion.p className="h-4 bg-gray-300 rounded-b-md animate-pulse"></motion.p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export const BlogPostSkeleton = () => {
  const skeletonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      variants={skeletonVariants}
      initial="initial"
      animate="animate"
      className="container mx-auto pt-20"
    >
      <motion.div
        className="bg-white p-8 rounded-md shadow-md max-w-2xl mx-auto"
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <motion.div className="animate-pulse">
          <motion.h1 className="text-3xl font-bold text-gray-800 mb-4 h-10 bg-gray-200 rounded-md" />
          <motion.p className="text-gray-700 bg-gray-200 h-6 rounded-md" />
          <motion.h2 className="text-xl font-bold mt-8 h-8 bg-gray-200 rounded-md" />
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="mt-4 border-b border-gray-200 pb-4"
            >
              <motion.h3 className="text-lg font-semibold h-6 bg-gray-200 rounded-md" />
              <motion.p className="text-gray-600 bg-gray-200 h-4 rounded-md" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
