import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import BlogCard from "../components/blogCard";
import Link from "next/link";

interface Blog {
  image: any;
  title: string;
  summary: string;
  slug: string;
}

// Revalidate every 10 seconds (ISR)
export const revalidate = 10;

const Home = async () => {
  const query = `
    *[_type == "post"] | order(_createdAt asc)[0..2] {
        image,
        title,
        summary,
        "slug": slug.current
    }`;

  const blogs: Blog[] = await client.fetch(query);

  return (
    <div>
      <h1 className="font-serif mx-auto mt-[70px] text-2xl text-center block md:hidden">
        <strong>
          <u>"Unleash Your Voice Through Blogging"</u>
        </strong>
      </h1>

      <p className="mt-[20px] md:mt-[100px]">
        In this space, I&apos;ll be exploring various aspects of personal
        development and productivity, where we can engage with individuals and
        groups alike. The blog will focus on sharing insightful content,
        including tips, strategies, and the latest trends in self-improvement.
        My goal is to foster a community where we can motivate each other,
        exchange ideas, and grow together in our journey toward success.
      </p>
      <h3 className="text-xl text-center mt-10">
        <u>*--- Most Recent Posts ---*</u>
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mx-10 mt-8">
        {blogs.map((blog) => {
          return (
            <Link href={`/blog/${blog.slug}`} key={blog.slug}>
              <BlogCard
                image={
                  <Image
                    src={urlFor(blog.image).url()}
                    alt={blog.title}
                    width={100}
                    height={40}
                    className="w-full"
                  />
                }
                title={blog.title}
                summary={blog.summary}
                more="read more"
              />
            </Link>
          );
        })}
      </section>
    </div>
  );
};

// Generate Static Params for Dynamic Routing
// export async function generateStaticParams() {
//   const query = `
//   *[_type == "post"] {
//       "slug": slug.current
//   }`;
//   const blogs = await client.fetch(query);

//   // Return params for each blog
//   return blogs.map((blog: { slug: string }) => ({
//     slug: blog.slug,
//   }));
// }

export default Home;
