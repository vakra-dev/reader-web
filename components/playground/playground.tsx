"use client";

import { useState } from "react";
import { Loader2, Copy, Check, Download, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrapeResult {
  markdown?: string;
  html?: string;
  metadata: {
    baseUrl: string;
    scrapedAt: string;
    duration: number;
    website: {
      title: string | null;
      description: string | null;
    };
  };
}

const DEFAULT_OPTIONS = {
  formats: ["markdown"] as string[],
  onlyMainContent: true,
};

export function Playground() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScrapeResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [activeTab, setActiveTab] = useState<"markdown" | "html">("markdown");

  const handleScrape = async () => {
    if (!url) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          ...options,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to scrape URL");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    const content = activeTab === "markdown" ? result?.markdown : result?.html;
    if (!content) return;

    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const content = activeTab === "markdown" ? result?.markdown : result?.html;
    if (!content) return;

    const ext = activeTab === "markdown" ? "md" : "html";
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `scraped.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleFormat = (format: string) => {
    setOptions((prev) => ({
      ...prev,
      formats: prev.formats.includes(format)
        ? prev.formats.filter((f) => f !== format)
        : [...prev.formats, format],
    }));
  };

  return (
    <div className="flex flex-col h-full">
      {/* Demo Notice */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-sm text-neutral-500">
          This playground is for demo purposes only, try scraping a URL to see
          Reader in action and decide if it&#39;s a good fit for you to
          self-host.
        </p>
      </div>

      {/* URL Input */}
      <div className="px-4 pb-4 border-b border-neutral-200">
        <div className="flex gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL to scrape..."
            className="flex-1 px-4 py-2.5 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-accent-500"
            onKeyDown={(e) => e.key === "Enter" && handleScrape()}
          />
          <button
            onClick={() => setShowOptions(!showOptions)}
            className={cn(
              "px-3 py-2.5 rounded-lg border transition-colors",
              showOptions
                ? "bg-neutral-100 border-neutral-400"
                : "border-neutral-300 hover:border-neutral-400",
            )}
          >
            <Settings2 className="w-5 h-5 text-neutral-600" />
          </button>
          <button
            onClick={handleScrape}
            disabled={loading || !url}
            className="px-6 py-2.5 bg-accent-500 hover:bg-accent-600 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Scraping...
              </>
            ) : (
              "Scrape"
            )}
          </button>
        </div>

        {/* Options Panel */}
        {showOptions && (
          <div className="mt-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-600 mb-2">
                  Output Formats
                </label>
                <div className="flex gap-2">
                  {["markdown", "html"].map((format) => (
                    <button
                      key={format}
                      onClick={() => toggleFormat(format)}
                      className={cn(
                        "px-3 py-1.5 text-sm rounded-md border transition-colors",
                        options.formats.includes(format)
                          ? "bg-accent-500/10 border-accent-500 text-accent-600"
                          : "border-neutral-300 text-neutral-600 hover:border-neutral-400",
                      )}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-600 mb-2">
                  Content Extraction
                </label>
                <button
                  onClick={() =>
                    setOptions((prev) => ({
                      ...prev,
                      onlyMainContent: !prev.onlyMainContent,
                    }))
                  }
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-md border transition-colors",
                    options.onlyMainContent
                      ? "bg-accent-500/10 border-accent-500 text-accent-600"
                      : "border-neutral-300 text-neutral-600 hover:border-neutral-400",
                  )}
                >
                  Main Content Only
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Result Area */}
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
        {error && (
          <div className="m-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            {error}
          </div>
        )}

        {result && (
          <>
            {/* Result Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-200 bg-neutral-900">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {options.formats.includes("markdown") && (
                    <button
                      onClick={() => setActiveTab("markdown")}
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                        activeTab === "markdown"
                          ? "bg-neutral-800 text-neutral-100"
                          : "text-neutral-500 hover:text-neutral-300",
                      )}
                    >
                      Markdown
                    </button>
                  )}
                  {options.formats.includes("html") && (
                    <button
                      onClick={() => setActiveTab("html")}
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                        activeTab === "html"
                          ? "bg-neutral-800 text-neutral-100"
                          : "text-neutral-500 hover:text-neutral-300",
                      )}
                    >
                      HTML
                    </button>
                  )}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-mono text-green-500">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  {result.metadata.duration}ms
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-md hover:bg-neutral-800 transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-accent-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-neutral-400" />
                  )}
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 rounded-md hover:bg-neutral-800 transition-colors"
                  title="Download"
                >
                  <Download className="w-4 h-4 text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Result Content */}
            <div className="flex-1 min-h-0 overflow-auto p-4 bg-neutral-900">
              <pre className="text-sm text-neutral-300 font-mono whitespace-pre-wrap">
                {activeTab === "markdown" ? result.markdown : result.html}
              </pre>
            </div>
          </>
        )}

        {!result && !error && !loading && (
          <div className="flex-1 flex items-center justify-center text-neutral-500">
            Enter a URL and click Scrape to get started
          </div>
        )}

        {loading && (
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-accent-500" />
              <span className="text-neutral-600">Scraping {url}...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
