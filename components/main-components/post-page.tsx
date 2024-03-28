"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/framer-varients";
import { PostCard } from "@/components";

export const PostPage = ({
  post,
  comments,
}: {
  post?: Post;
  comments?: Comment[];
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-[90%] mx-auto pt-20"
    >
      <PostCard post={post} comments={comments} />
    </motion.div>
  );
};
