"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function MarkdownHero() {
  const [copied, setCopied] = useState(false);
  const exampleUrl = "https://md.reader.dev/https://example.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(exampleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Any URL to markdown
        </h1>

        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Prepend <code className="text-accent-500 font-mono">md.reader.dev/</code> to
          any URL. Get clean, LLM-ready markdown back. No API key, no setup.
        </p>

        <div className="inline-flex items-center gap-3 bg-neutral-100 border border-neutral-200 rounded-lg px-4 py-3">
          <code className="text-sm font-mono text-neutral-700">
            {exampleUrl}
          </code>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-neutral-200 transition-colors"
            aria-label="Copy URL"
          >
            {copied ? (
              <Check className="w-4 h-4 text-accent-500" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-500" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
