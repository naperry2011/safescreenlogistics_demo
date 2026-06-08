import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
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
          <Reveal>
            <Link href="/learn" className="text-sm text-ink-soft hover:text-spruce-900">
              ← Back to the journal
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <span className="eyebrow text-mint-500">{article.category}</span>
              <span className="text-line">•</span>
              <span className="text-ink-soft">{article.readMinutes} min read</span>
              <span className="text-line">•</span>
              <span className="text-ink-soft">{formattedDate}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-spruce-950">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-xl text-ink-soft leading-relaxed">
              {article.excerpt}
            </p>
          </Reveal>

          <hr className="my-10 border-line" />

          <Reveal delay={0.05}>
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
          </Reveal>

          <div className="mt-12 rounded-2xl bg-paper-2/50 border border-line p-6 text-sm text-ink-soft">
            This article is for general education and isn&apos;t medical advice.
            Our clinicians screen every client to keep each session safe and
            effective.
          </div>
        </Container>
      </article>

      <CtaBand title="Curious to try it for yourself?" />
    </>
  );
}
