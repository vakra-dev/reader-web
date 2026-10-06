import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DOCS_DIR = path.join(process.cwd(), "content/docs");

export interface DocMeta {
  title: string;
  description: string;
  slug: string;
}

export function getDocBySlug(slug: string[]): {
  content: string;
  meta: DocMeta;
} {
  const filePath = path.join(DOCS_DIR, ...slug) + ".mdx";
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return {
    content,
    meta: {
      title: data.title || "",
      description: data.description || "",
      slug: slug.join("/"),
    },
  };
}

export function getAllDocSlugs(): string[][] {
  const slugs: string[][] = [];

  function walk(dir: string, prefix: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...prefix, entry.name]);
      } else if (entry.name.endsWith(".mdx")) {
        slugs.push([...prefix, entry.name.replace(/\.mdx$/, "")]);
      }
    }
  }

  walk(DOCS_DIR, []);
  return slugs;
}
