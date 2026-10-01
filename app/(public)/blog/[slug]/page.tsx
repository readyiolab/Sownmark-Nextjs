import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import BlogComments from "./BlogComments";

// Types
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  meta_description: string;
  content: string | { blocks: any[] };
  image: string;
  author: string;
  author_bio: string;
  created_at: string;
  read_time: number;
  category: string[];
  tags: string[];
  is_featured: number;
  comments?: number;
  likes?: number;
  shares?: number;
}

type Props = {
  params: Promise<{ slug: string }>;
};

const API_BASE_URL = `${
  process.env.NEXT_PUBLIC_API_URL || "https://sownmark.com"
}/api`;

const REVALIDATE_SECONDS = 300;

const toStringArray = (value: unknown): string[] => {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
};

const getPost = async (slug: string): Promise<BlogPost | null> => {
  const res = await fetch(
    `${API_BASE_URL}/blogs/slug/${encodeURIComponent(slug)}`,
    { next: { revalidate: REVALIDATE_SECONDS } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  if (!data) return null;
  return {
    ...data,
    category: toStringArray(data.category),
    tags: toStringArray(data.tags),
  };
};

const getAllPosts = async (): Promise<BlogPost[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: { absolute: post.title },
    description: post.meta_description,
    robots: { index: true, follow: true, "max-image-preview": "large" },
    alternates: {
      canonical: `https://sownmark.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.meta_description,
      images: [{ url: post.image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.meta_description,
      images: [post.image],
    },
  };
}

const editorJSToHtml = (rawContent: string | { blocks: any[] }): string => {
  if (!rawContent) return "<p>No content available</p>";

  if (typeof rawContent === "string") {
    const trimmed = rawContent.trim();
    if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
      try {
        const parsed = JSON.parse(trimmed);
        return editorJSToHtml(parsed);
      } catch {
        return rawContent;
      }
    }
    return rawContent;
  }

  if (!rawContent || !("blocks" in rawContent) || !Array.isArray(rawContent.blocks)) {
    return "<p>No content available</p>";
  }

  return rawContent.blocks
    .map((block) => {
      if (!block || !block.type) return "";
      switch (block.type) {
        case "paragraph":
          return `<p class="text-gray-700 leading-relaxed my-3">${block.data?.text || ""}</p>`;

        case "header": {
          const level = block.data?.level || 2;
          const sizeClass =
            level === 1 ? "text-3xl font-extrabold" :
            level === 2 ? "text-2xl font-bold" :
            level === 3 ? "text-xl font-bold" : "text-lg font-semibold";
          return `<h${level} class="text-gray-900 ${sizeClass} mt-6 mb-3 tracking-tight">${block.data?.text || ""}</h${level}>`;
        }

        case "list": {
          const tag = block.data?.style === "ordered" ? "ol" : "ul";
          const listClass = block.data?.style === "ordered" ? "list-decimal" : "list-disc";
          const items = (block.data?.items || [])
            .map((item: any) => {
              const text = typeof item === "object" && item !== null ? (item.content || "") : String(item || "");
              return `<li class="text-gray-700 my-1 leading-relaxed">${text}</li>`;
            })
            .join("");
          return `<${tag} class="${listClass} pl-6 my-4 space-y-1">${items}</${tag}>`;
        }

        case "quote":
          return `
            <blockquote class="border-l-4 border-blue-600 bg-blue-50/40 pl-4 pr-3 py-2 italic text-gray-700 my-4 rounded-r-lg">
              <p class="mb-1">${block.data?.text || ""}</p>
              ${block.data?.caption ? `<cite class="block text-xs font-semibold text-gray-500 not-italic uppercase tracking-wide">— ${block.data.caption}</cite>` : ""}
            </blockquote>`;

        case "image":
          return `
            <figure class="my-6">
              <img src="${block.data?.file?.url || block.data?.url || ""}" alt="${block.data?.caption || "Blog image"}" class="w-full max-w-2xl h-auto rounded-xl shadow-md my-2 mx-auto object-cover" loading="lazy" />
              ${block.data?.caption ? `<figcaption class="text-center text-xs text-gray-500 mt-2">${block.data.caption}</figcaption>` : ""}
            </figure>`;

        case "table": {
          const rows = block.data?.content || [];
          if (!Array.isArray(rows) || rows.length === 0) return "";
          const withHeadings = block.data?.withHeadings;
          let tableHtml = '<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">';
          rows.forEach((row: string[], rowIndex: number) => {
            tableHtml += "<tr>";
            row.forEach((cell: string) => {
              if (rowIndex === 0 && withHeadings) {
                tableHtml += `<th class="bg-gray-100 p-3 text-left font-semibold text-gray-900 border border-gray-200">${cell}</th>`;
              } else {
                tableHtml += `<td class="p-3 border border-gray-200 text-gray-700">${cell}</td>`;
              }
            });
            tableHtml += "</tr>";
          });
          tableHtml += "</table></div>";
          return tableHtml;
        }

        case "code":
          return `<pre class="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto my-4 font-mono text-sm leading-normal"><code>${block.data?.code || ""}</code></pre>`;

        case "delimiter":
          return `<hr class="my-8 border-gray-200 border-t-2" />`;

        case "raw":
          return block.data?.html || "";

        default:
          return block.data?.text ? `<p class="text-gray-700 leading-relaxed my-3">${block.data.text}</p>` : "";
      }
    })
    .join("");
};

const getCategoryColor = (category: string): { bg: string; text: string } => {
  switch (category) {
    case "Marketing Tips":
      return { bg: "bg-blue-100", text: "text-blue-600" };
    case "SEO":
      return { bg: "bg-green-100", text: "text-green-600" };
    case "Social Media":
      return { bg: "bg-purple-100", text: "text-purple-600" };
    case "Hiring":
      return { bg: "bg-orange-100", text: "text-orange-600" };
    case "Web Dev":
      return { bg: "bg-teal-100", text: "text-teal-600" };
    default:
      return { bg: "bg-gray-100", text: "text-gray-600" };
  }
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, blogs] = await Promise.all([getPost(slug), getAllPosts()]);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs
    .filter(
      (p) =>
        p.id !== post.id &&
        p.image &&
        Array.isArray(p.category) &&
        p.category.some((cat) => post.category.includes(cat))
    )
    .slice(0, 3);

  const htmlContent = editorJSToHtml(post.content);
  const primaryCategory = post.category[0] || "Uncategorized";
  const primaryColor = getCategoryColor(primaryCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta_description,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.created_at,
    publisher: {
      "@type": "Organization",
      name: "Sownmark",
      logo: {
        "@type": "ImageObject",
        url: "https://sownmark.com/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sownmark.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <header>
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center text-gray-900 text-base hover:text-blue-600 transition-colors"
              aria-label="Return to blog homepage"
            >
              <ArrowLeft className="h-5 w-5 mr-2" /> Back to Blog
            </Link>
            <div className="relative">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={`${post.title} - Blog cover`}
                  width={1280}
                  height={720}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <div className="w-full aspect-video rounded-2xl bg-gray-200 shadow-lg" />
              )}
              <div className="absolute bottom-6 left-6 right-6">
                <span
                  className={`inline-block ${primaryColor.bg} ${primaryColor.text} text-sm font-medium py-1 px-3 rounded-full mb-2 shadow-sm`}
                >
                  {primaryCategory}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 mt-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.read_time} min read
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
            <div className="lg:col-span-2 overflow-y-auto">
              <div className="prose prose-sm sm:prose-base max-w-none text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 py-1 px-3 rounded-full shadow-sm"
                  >
                    <Tag className="h-4 w-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <aside className="lg:sticky lg:top-20 space-y-6">
              <div className="bg-white border border-gray-100 rounded-lg p-4 sm:p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  About the Author
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-600">{post.author_bio}</p>
                  </div>
                </div>
              </div>

              <BlogComments blogId={post.id} />
            </aside>
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                Explore More Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedPosts.map((relatedPost) => {
                  const relatedCategory =
                    relatedPost.category[0] || "Uncategorized";
                  const { bg, text } = getCategoryColor(relatedCategory);
                  return (
                    <article
                      key={relatedPost.id}
                      className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        aria-label={`Read ${relatedPost.title}`}
                      >
                        <div className="relative h-40 sm:h-48 overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={`${relatedPost.title} - Related blog post`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span
                            className={`absolute top-3 left-3 ${bg} ${text} text-xs font-medium py-1 px-2 rounded-full shadow-sm`}
                          >
                            {relatedCategory}
                          </span>
                        </div>
                        <div className="p-4 sm:p-5">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
