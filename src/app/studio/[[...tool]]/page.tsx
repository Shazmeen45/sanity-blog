// src/app/blog/[slug]/page.tsx

import { GetStaticPropsContext } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

const BlogPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;
  // Yahan par apna blog post ka data fetch karke render karein
  return <div>{slug}</div>;
};

export default BlogPage;

// Agar aap data ko fetch kar rahe hain toh getStaticProps use karein:

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { slug } = params as { slug: string };
  // Blog post ka data fetch karne ka logic yahan likhein

  return {
    props: {
      params: { slug },
    },
  };
}

export async function getStaticPaths() {
  // Jo paths aap generate karna chahte hain unhe yahan return karein
  return {
    paths: [{ params: { slug: "example" } }],
    fallback: false,
  };
}
