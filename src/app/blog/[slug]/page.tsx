"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Components } from "@/app/components/customComponents";
import { client } from "@/sanity/lib/client";

interface Post {
  title: string;
  image: any;
  summary: string;
  content: any;
  author: string;
  date: string;
}

interface Comment {
  id: number;
  text: string;
}

interface PageProps {
  params: { slug: string };
}

const Blog = ({ params }: PageProps) => {
  const { slug } = params;

  const [post, setPost] = useState<Post | null>(null);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [showCommentSection, setShowCommentSection] = useState<boolean>(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          title, image, summary, author, date, content
        }`;
        const postData = await client.fetch(query, { slug });
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [slug]);

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, text: comment.trim() },
      ]);
      setComment("");
    }
  };

  // Toggle comment section visibility
  const toggleCommentSection = () => {
    setShowCommentSection(!showCommentSection);
  };

  // Loading state while fetching post data
  if (!post) {
    return <div className="my-[40%] h-screen">Loading...</div>;
  }

  return (
    <div className="bg-whitesmoke px-5 py-8 max-w-[1500px] mx-auto mt-[60px]">
      <h1 className="text-2xl font-serif text-center pb-8">
        <u>{post.title}</u>
      </h1>

      <div className="md:flex justify-around gap-3 text-center md:text-left items-center mb-8 ">
        {post.image && (
          <Image
            src={urlFor(post.image)?.url() || "/placeholder.jpg"}
            alt={post.title}
            width={350}
            height={300}
            className="mx-auto"
          />
        )}
        <div>
          <p className="mt-8 md:mt-0">
            Author: <strong>{post.author}</strong>
          </p>
          <p className="my-8">Release date: {post.date}</p>
          <p>&quot;{post.summary}&quot;</p>
        </div>
      </div>

      <PortableText value={post.content} components={Components} />

      <button
        onClick={toggleCommentSection}
        className="fixed bottom-2 right-2 bg-secondary hover:bg-primary px-3 py-2 rounded-es-full"
      >
        {showCommentSection ? "Hide Comments" : "Show Comments"}
      </button>

      {/* Show Comment Section if toggled */}
      {showCommentSection && (
        <div className="fixed bottom-14 right-3 left-32 md:left-[75%] p-2 bg-secondary rounded-lg">
          {/* Comment Input */}
          <div className="mb-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment..."
              className="w-full p-2 border-[1px] border-secondary outline-none rounded-lg"
            ></textarea>
            <div>
              <button
                onClick={handleCommentSubmit}
                className="mt-2 border-[2px] border-purple-500 bg-purple-500 text-white px-8 py-1 rounded-full"
              >
                Submit
              </button>
            </div>
          </div>

          {/* List of Comments */}
          <div>
            {comments.map((comment) => (
              <div key={comment.id} className="mb-4">
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
