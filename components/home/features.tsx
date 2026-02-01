import {
  FileText,
  Layers,
  Globe,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Production-Grade",
    description: "Built on Ulixee Hero with TLS fingerprinting and stealth browsing",
  },
  {
    icon: FileText,
    title: "Clean Output",
    description: "Markdown and HTML with automatic main content extraction",
  },
  {
    icon: Layers,
    title: "Browser Pool",
    description: "Auto-recycling, health monitoring, and queue management",
  },
  {
    icon: Globe,
    title: "Website Crawling",
    description: "BFS link discovery with depth and page limits",
  },
  {
    icon: Shield,
    title: "Proxy Support",
    description: "Datacenter and residential proxies with rotation strategies",
  },
  {
    icon: Terminal,
    title: "CLI Included",
    description: "Use from command line or programmatically in your code",
  },
];

export function Features() {
  return (
    <section className="py-20 px-6 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Everything you need for web scraping
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Reader handles the hard parts so you can focus on building your AI applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-accent-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
