import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

// Function to fetch blog data
async function getBlogData(slug: string) {
  try {
    const res = await fetch("https://your-api-url.com/blogs/${slug}"); // ✅ Fix applied

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

export default async function BlogPage({ params }: PageProps) {
  if (!params || !params.slug) {
    return notFound();
  }

  const blog = await getBlogData(params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-700 mt-2">{blog.content}</p>
    </main>
  );
}
