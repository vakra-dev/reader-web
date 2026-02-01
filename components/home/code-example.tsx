"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const scrapeCode = `import { ReaderClient } from "@vakra-dev/reader";

const reader = new ReaderClient();

// Scrape URLs → clean markdown
const result = await reader.scrape({
  urls: ["https://example.com"],
});

console.log(result.data[0].markdown);

await reader.close();`;

const crawlCode = `import { ReaderClient } from "@vakra-dev/reader";

const reader = new ReaderClient();

// Crawl a site → discover + scrape pages
const result = await reader.crawl({
  url: "https://example.com",
  depth: 2,
  maxPages: 50,
  scrape: true,
});

console.log(\`Found \${result.urls.length} pages\`);

await reader.close();`;

export function CodeExample() {
  const [activeTab, setActiveTab] = useState<"scrape" | "crawl">("scrape");
  const [copied, setCopied] = useState(false);

  const code = activeTab === "scrape" ? scrapeCode : crawlCode;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Two primitives. That&apos;s it.
        </h2>
        <p className="text-neutral-600 text-center mb-8 max-w-2xl mx-auto">
          <code className="text-accent-500">scrape()</code> for URLs,{" "}
          <code className="text-accent-500">crawl()</code> for websites.
          Everything else happens under the hood.
        </p>

        <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
          <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("scrape")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "scrape"
                    ? "bg-neutral-800 text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                scrape()
              </button>
              <button
                onClick={() => setActiveTab("crawl")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "crawl"
                    ? "bg-neutral-800 text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                crawl()
              </button>
            </div>
            <button
              onClick={handleCopy}
              className="p-2 rounded-md hover:bg-neutral-800 transition-colors"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="w-4 h-4 text-accent-500" />
              ) : (
                <Copy className="w-4 h-4 text-neutral-500" />
              )}
            </button>
          </div>

          <pre className="p-4 overflow-x-auto">
            <code className="text-sm text-neutral-300 font-mono whitespace-pre">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
