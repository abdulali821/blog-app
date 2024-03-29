"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";

const avatarPlaceholder =
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&s=80";

export const NavBar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-indigo-500 to-blue-700 text-white p-4 fixed w-full z-10 top-0"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.h1
            className="text-2xl font-bold tracking-tight cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            My Blog
          </motion.h1>
        </Link>
        <div className="hidden md:block">
          {session ? (
            <div className="flex items-center gap-4">
              <motion.div className="flex items-center gap-1">
                <motion.img
                  src={session.user?.image || avatarPlaceholder}
                  className="rounded-full w-8 h-8 mr-2 object-cover cursor-pointer"
                  alt="User avatar"
                />
                <span data-testid="username" className="text-sm font-medium">
                  {session.user?.name}
                </span>
              </motion.div>
              <motion.div onClick={() => signOut()}>
                <motion.div
                  className="text-sm cursor-pointer font-medium rounded-md hover:bg-indigo-400 hover:text-white transition duration-300 px-3 py-2"
                  whileHover={{ scale: 1.1 }}
                >
                  Sign out
                </motion.div>
              </motion.div>
            </div>
          ) : (
            <motion.div onClick={() => signIn()}>
              <motion.div
                className="text-sm cursor-pointer font-medium rounded-md hover:bg-indigo-400 hover:text-white transition duration-300 px-3 py-2"
                whileHover={{ scale: 1.1 }}
              >
                Sign in
              </motion.div>
            </motion.div>
          )}
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden flex flex-col gap-2 pt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {session ? (
            <motion.div
              className="flex justify-between"
              onClick={() => signOut()}
            >
              <motion.div className="flex items-center gap-1">
                <motion.img
                  src={session.user?.image || avatarPlaceholder}
                  className="rounded-full w-8 h-8 mr-2 object-cover cursor-pointer"
                  alt="User avatar"
                />
                <span className="text-sm font-medium">
                  {session.user?.name}
                </span>
              </motion.div>
              <motion.div
                className="text-sm cursor-pointer font-medium rounded-md hover:bg-indigo-400 hover:text-white transition duration-300 px-3 py-2"
                whileHover={{ scale: 1.1 }}
              >
                Sign out
              </motion.div>
            </motion.div>
          ) : (
            <motion.div onClick={() => signIn()}>
              <motion.div
                className="text-sm cursor-pointer font-medium rounded-md hover:bg-indigo-400 hover:text-white transition duration-300 px-3 py-2"
                whileHover={{ scale: 1.1 }}
              >
                Sign in
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};
