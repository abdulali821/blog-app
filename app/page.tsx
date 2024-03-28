"use client";

import { useGetPostsQuery } from "@/app/slices/api";
import { BlogCard, Error } from "@/components";
import { BlogCardSkeleton } from "@/components";
import { useDebounce } from "@/hooks/useDebounce";
import { postsContainerVariants } from "@/lib/framer-varients";
import { motion } from "framer-motion";
import { useState } from "react";
import NotFound from "./not-found";

const Main = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery();
  const [searchQuery, setSearchQuery] = useState("");

  const searchInput = (e: any) => {
    const value = e.target.value;
    setSearchQuery(value);
  };
  const debounce = useDebounce(searchInput, 500);

  const filteredData = posts?.filter((post: Post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading || !posts) {
    return <BlogCardSkeleton />;
  }
  if (isError) {
    return <NotFound />;
  }

  return (
    <motion.div
      variants={postsContainerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="bg-gray-100 pt-20">
        <div className="w-[90%] mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Latest Blog Posts
          </h1>
          <input
            type="text"
            placeholder="Search blog posts..."
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            onChange={debounce}
          />
          {filteredData?.length !== 0 ? (
            <motion.ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredData?.map((post) => (
                <BlogCard post={post} key={post.id} />
              ))}
            </motion.ul>
          ) : (
            <motion.div className="flex justify-center items-center h-full w-full">
              No Post Found
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
