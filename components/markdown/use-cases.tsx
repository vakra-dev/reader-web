import { Bot, Database, Terminal, FileText } from "lucide-react";

const useCases = [
  {
    icon: Bot,
    title: "AI agents",
    description:
      "Give your agents the ability to read any web page. One HTTP GET, clean markdown back.",
  },
  {
    icon: Database,
    title: "RAG pipelines",
    description:
      "Feed web content into your vector database. Reader extracts only the main content, no nav or ads.",
  },
  {
    icon: Terminal,
    title: "CLI workflows",
    description:
      "Pipe web pages into your command line tools. Works with curl, wget, or any HTTP client.",
  },
  {
    icon: FileText,
    title: "Content processing",
    description:
      "Convert web pages to markdown for documentation, archival, or content migration.",
  },
];

export function MarkdownUseCases() {
  return (
    <section className="py-20 px-6 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Use cases</h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Anywhere you need web content as text.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-neutral-200"
            >
              <item.icon className="w-8 h-8 text-accent-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
