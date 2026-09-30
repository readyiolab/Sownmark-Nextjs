import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <section className="py-12 bg-gray-100 text-center min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Blog Post Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The requested blog post does not exist.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition self-center"
        aria-label="Return to blog homepage"
      >
        Back to Blog
      </Link>
    </section>
  );
}
