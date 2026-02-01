"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const installCommand = "npm install @vakra-dev/reader";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Open-source web scraping
          <br />
          <span className="text-accent-500">for LLMs</span>
        </h1>

        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Two primitives. Clean markdown. Ready for your agents.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://docs.reader.dev/home/quickstart"
            className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://github.com/vakra-dev/reader"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-neutral-300 hover:border-neutral-400 text-neutral-700 font-medium rounded-lg transition-colors"
          >
            View on GitHub
          </a>
        </div>

        <div className="inline-flex items-center gap-3 bg-neutral-100 border border-neutral-200 rounded-lg px-4 py-3">
          <code className="text-sm font-mono text-neutral-700">
            {installCommand}
          </code>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-neutral-200 transition-colors"
            aria-label="Copy install command"
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
