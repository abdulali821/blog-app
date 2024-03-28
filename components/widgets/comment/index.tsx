"use client";

import { contentVarients } from "@/lib/framer-varients";
import React from "react";
import { motion } from "framer-motion";

export const Comment = ({ comment }: { comment: Comment }) => {
  return (
    <motion.div
      className="mt-4 border-b border-gray-200 pb-5 "
      variants={contentVarients}
    >
      <motion.div className="flex gap-2 items-center mb-2">
        <motion.div className="rounded-full min-h-[30px] min-w-[30px] capitalize text-white bg-blue-400 flex justify-center items-center  ">
          {comment.name[0]}
        </motion.div>
        <motion.h3 className="text-lg line-clamp-1 font-semibold capitalize">
          {comment.name}
        </motion.h3>
      </motion.div>
      <p className="text-gray-600 capitalize">{comment.body}</p>
    </motion.div>
  );
};
