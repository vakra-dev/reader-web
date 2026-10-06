"use client";

import { useState } from "react";
import { Loader2, Copy, Check } from "lucide-react";

export function MarkdownTryIt() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    if (!url) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(
        `https://md.reader.dev/${url.startsWith("http") ? url : `https://${url}`}`
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Failed to convert URL");
      }

      const markdown = await response.text();
      setResult(markdown);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Try it</h2>
        <p className="text-neutral-600 text-center mb-8">
          Enter a URL and see the markdown output.
        </p>

        <div className="flex gap-3 mb-6">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 px-4 py-2.5 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-accent-500"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button
            onClick={handleSubmit}
            disabled={loading || !url}
            className="px-6 py-2.5 bg-accent-500 hover:bg-accent-600 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Converting...
              </>
            ) : (
              "Convert"
            )}
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        {result && (
          <div className="rounded-xl border border-neutral-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-neutral-100 border-b border-neutral-200">
              <span className="text-sm font-medium text-neutral-600">
                Markdown output
              </span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-md hover:bg-neutral-200 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-accent-500" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-500" />
                )}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto max-h-96 overflow-y-auto bg-white scrollbar-hidden">
              <code className="text-sm text-neutral-800 font-mono whitespace-pre-wrap">
                {result}
              </code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
