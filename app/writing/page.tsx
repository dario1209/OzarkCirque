import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Autobiographical musings and circus studies — history, philosophy, and co-learning research.",
};

export default function Writing() {
  const posts = getPosts();

  return (
    <div className="bg-paper text-ink">
      <section className="mx-auto max-w-4xl px-6 pb-32 pt-40">
        <Reveal>
          <p className="eyebrow text-plum">Writing</p>
          <h1 className="display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">
            Musings &amp; circus studies
          </h1>
        </Reveal>

        <div className="mt-24 space-y-20">
          {posts.map((p) => (
            <Reveal key={p.slug} as="article">
              <p className="eyebrow text-gray">
                {new Date(p.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h2 className="display mt-3 text-4xl">
                <Link href={`/writing/${p.slug}`} className="hover:text-plum">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-prose text-aubergine">{p.excerpt}</p>
            </Reveal>
          ))}
        </div>

        {/* Standing collaboration invitation */}
        <Reveal className="mt-40 border-t border-ink/10 pt-16">
          <p className="eyebrow text-plum">An open invitation</p>
          <p className="display mt-4 max-w-2xl text-2xl leading-snug">
            I&apos;m researching circus as a tool for social-emotional learning
            and at-risk youth programming. If you&apos;re a therapist or youth
            practitioner curious about collaborating, I&apos;d love to hear from
            you.
          </p>
          <Link
            href="/contact"
            className="eyebrow mt-8 inline-block border-b border-plum pb-1 text-ink hover:text-plum"
          >
            Reach out
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
