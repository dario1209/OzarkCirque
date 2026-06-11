import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  return post
    ? { title: post.title, description: post.excerpt }
    : { title: "Writing" };
}

export default function Article({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="bg-paper text-ink">
      <article className="mx-auto max-w-3xl px-6 pb-32 pt-40">
        <p className="eyebrow text-gray">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h1 className="display mt-4 text-[clamp(2.25rem,5vw,3.75rem)]">
          {post.title}
        </h1>

        <div className="prose-writing mt-16 text-lg text-ink">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-24 border-t border-ink/10 pt-12">
          <p className="max-w-prose text-aubergine">
            Working in therapy or youth programming? I&apos;m looking for
            collaborators on circus-based social-emotional learning.
          </p>
          <Link
            href="/contact"
            className="eyebrow mt-6 inline-block border-b border-plum pb-1 text-ink hover:text-plum"
          >
            Reach out
          </Link>
        </footer>
      </article>
    </div>
  );
}
