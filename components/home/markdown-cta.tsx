import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MarkdownCTA() {
  return (
    <section className="py-20 px-6 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Free markdown API
        </h2>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
          Prepend{" "}
          <code className="text-accent-500 font-mono">md.reader.dev/</code>{" "}
          to any URL and get clean, LLM-ready markdown back. No API key needed.
        </p>

        <div className="bg-neutral-100 border border-neutral-200 rounded-lg px-4 py-3 inline-block mb-8">
          <code className="text-sm font-mono text-neutral-700">
            curl https://md.reader.dev/https://example.com
          </code>
        </div>

        <div>
          <Link
            href="/markdown"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
          >
            Try it now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
