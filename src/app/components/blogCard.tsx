"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

interface Post {
  image: any;
  title: string;
  summary: string;
  more: string;
}

const BlogCard = (props: Post) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="border-[4px] border-primary shadow-md shadow-primary max-h-svh cursor-pointer"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="md:ml-19 sm:ml-12 md:w-1/2">
        <div className="max-h-">{props.image}</div>
        <h3 className="text-center text-[#b0adad] my-2">
          <strong>
            <u>{props.title}</u>
          </strong>
        </h3>
        <p className="text-center">{props.summary}</p>
        <h5 className="bg-primary hover:bg-secondary p-3 text-center mt-2">
          {props.more}
        </h5>
      </div>
    </div>
  );
};

export default BlogCard;
