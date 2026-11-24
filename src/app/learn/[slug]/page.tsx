import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { articles, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article className="pt-14 pb-16 sm:pt-20">
        <Container className="max-w-2xl">
          <div>
            <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-spruce-900">
              <ArrowLeft className="size-4" /> All articles
            </Link>
          </div>
          <div>
            <p className="mt-8 text-sm text-ink-soft">
              {article.category}, {article.readMinutes} min read, {formattedDate}
            </p>
          </div>
          <div>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl leading-[1.0] text-spruce-950">
              {article.title}
            </h1>
          </div>
          <div>
            <p className="mt-5 text-xl text-ink-soft leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <hr className="my-10 border-line" />

          <div>
            <div className="flex flex-col gap-6">
              {article.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl text-spruce-950 mt-4"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="flex flex-col gap-3 pl-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-ink leading-relaxed">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-mint-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-lg text-ink leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="mt-12 border-l-2 border-mint-400 pl-5 text-sm text-ink-soft">
            This article is for general education and isn&apos;t medical advice.
            Our clinicians screen every client to keep each session safe and
            effective.
          </div>
        </Container>
      </article>

      <CtaBand />
    </>
  );
}
