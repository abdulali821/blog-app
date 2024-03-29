"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button, Comment } from "@/components";
import { containerVariants, contentVarients } from "@/lib/framer-varients";

export const BlogCard = ({ post }: { post: Post }) => {
  return (
    <motion.li
      variants={containerVariants}
      className="bg-white rounded-md shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <motion.div className="flex flex-col space-y-4">
        <motion.h2 className="text-xl font-bold text-gray-800 mb-2">
          {post.title.slice(0, 30) + "..."}
        </motion.h2>
        <motion.p data-testid="body" className="text-gray-700 line-clamp-3">
          {post.body.slice(0, 150) + "..."}
        </motion.p>
        <Link data-testid="button" href={`/posts/${post.id}`}>
          <Button title="Read More" />
        </Link>
      </motion.div>
    </motion.li>
  );
};

export const PostCard = ({
  post,
  comments,
}: {
  post?: Post;
  comments?: Comment[];
}) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-md shadow-md max-w-2xl mx-auto"
      style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl font-bold capitalize text-gray-800 mb-4"
        variants={contentVarients}
      >
        {post?.title}
      </motion.h1>
      <motion.p className="text-gray-700 font-bold" variants={contentVarients}>
        Description
      </motion.p>
      <motion.p className="text-gray-700 capitalize" variants={contentVarients}>
        {post?.body}
      </motion.p>
      <motion.h2 className="text-xl font-bold mt-8" variants={contentVarients}>
        Comments:
      </motion.h2>
      {comments ? (
        comments?.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))
      ) : (
        <motion.div className="text-center py-10">No Comments</motion.div>
      )}
    </motion.div>
  );
};
