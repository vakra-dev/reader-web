import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getDocBySlug, getAllDocSlugs } from "@/lib/docs";
import { mdxComponents } from "@/components/docs/mdx-components";

interface PageProps {
  params: { slug: string[] };
}

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps) {
  try {
    const { meta } = getDocBySlug(params.slug);
    return {
      title: `${meta.title} - Reader Docs`,
      description: meta.description,
    };
  } catch {
    return { title: "Not Found - Reader Docs" };
  }
}

export default function DocPage({ params }: PageProps) {
  let doc;
  try {
    doc = getDocBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          {doc.meta.title}
        </h1>
        {doc.meta.description && (
          <p className="text-lg text-neutral-600">{doc.meta.description}</p>
        )}
      </header>
      <div className="prose prose-neutral max-w-none prose-headings:scroll-mt-20 prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline prose-code:text-neutral-800 prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-neutral-100 prose-pre:text-neutral-800 prose-pre:border prose-pre:border-neutral-200">
        <MDXRemote
          source={doc.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
    </article>
  );
}
