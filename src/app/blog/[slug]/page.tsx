import { use } from "react"; // Next.js 15 introduced "use" for async components

interface PageProps {
  params: Promise<{ slug: string }>; // Ensure params is a Promise
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params; // Await params

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ slug: "example-post" }]; // Ensure it returns an array
}
