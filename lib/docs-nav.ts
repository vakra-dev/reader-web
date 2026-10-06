export interface NavItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const docsNav: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/getting-started/introduction" },
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "Quickstart", href: "/docs/getting-started/quickstart" },
      { title: "Examples", href: "/docs/getting-started/examples" },
    ],
  },
  {
    title: "Concepts",
    items: [
      { title: "Scraping", href: "/docs/concepts/scraping" },
      { title: "Crawling", href: "/docs/concepts/crawling" },
      { title: "Content Extraction", href: "/docs/concepts/content-extraction" },
      { title: "Browser Pool", href: "/docs/concepts/browser-pool" },
      { title: "Browser Sessions", href: "/docs/concepts/browser-sessions" },
      { title: "Engine Waterfall", href: "/docs/concepts/engine-waterfall" },
      { title: "Proxy Tiers", href: "/docs/concepts/proxy-tiers" },
      { title: "Error Handling", href: "/docs/concepts/error-handling" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Basic Scraping", href: "/docs/guides/basic-scraping" },
      { title: "Batch Scraping", href: "/docs/guides/batch-scraping" },
      { title: "Website Crawling", href: "/docs/guides/website-crawling" },
      { title: "Proxy Configuration", href: "/docs/guides/proxy-configuration" },
      { title: "CLI", href: "/docs/guides/cli" },
      { title: "Daemon Mode", href: "/docs/guides/daemon-mode" },
      { title: "Browser Sessions", href: "/docs/guides/browser-sessions" },
      { title: "Deployment", href: "/docs/guides/deployment" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "ReaderClient", href: "/docs/api-reference/reader-client" },
      { title: "scrape()", href: "/docs/api-reference/scrape" },
      { title: "crawl()", href: "/docs/api-reference/crawl" },
      { title: "ScrapeOptions", href: "/docs/api-reference/scrape-options" },
      { title: "ScrapeResult", href: "/docs/api-reference/scrape-result" },
      { title: "CrawlOptions", href: "/docs/api-reference/crawl-options" },
      { title: "CrawlResult", href: "/docs/api-reference/crawl-result" },
      { title: "BrowserSession", href: "/docs/api-reference/browser-session" },
      { title: "Errors", href: "/docs/api-reference/errors" },
    ],
  },
];
