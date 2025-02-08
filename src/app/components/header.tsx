import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed right-2 md:right-10 left-2 md:left-10 max-w-[1000px] mx-auto flex justify-center bg-secondary p-3 rounded-full">
      <h1 className="font-serif mx-auto text-2xl text-center hidden md:block">
        <strong>
          <u>"Express Yourself Freely Through Blogging"</u>
        </strong>
      </h1>
      <ul className="flex justify-center items-center gap-5 mr-3">
        <Link href="/">
          <li className="hover:text-purple-200">Home</li>
        </Link>
        <li className="cursor-pointer hover:text-purple-200">Create</li>
        <li className="cursor-pointer hover:text-purple-200">Sign Up</li>
        <li className="bg-black text-secondary px-2 py-1 rounded-full cursor-pointer hover:text-purple-200 ">
          Log In
        </li>
      </ul>
    </div>
  );
};

export default Header;
