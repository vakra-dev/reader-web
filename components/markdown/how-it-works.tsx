export function MarkdownHowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Prepend the URL",
      description: "Add md.reader.dev/ before any URL you want to convert.",
      code: "https://md.reader.dev/https://example.com",
    },
    {
      step: "2",
      title: "Get markdown back",
      description:
        "Reader renders the page in a real browser, extracts the main content, and converts it to clean markdown.",
      code: "curl https://md.reader.dev/https://example.com",
    },
    {
      step: "3",
      title: "Use it anywhere",
      description:
        "Pipe it into your LLM, RAG pipeline, or any tool that works with text.",
      code: 'curl -s https://md.reader.dev/https://example.com | llm "summarize this"',
    },
  ];

  return (
    <section className="py-20 px-6 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>

        <div className="space-y-12">
          {steps.map((item) => (
            <div key={item.step} className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-lg">
                {item.step}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-neutral-600 mb-3">{item.description}</p>
                <div className="bg-neutral-100 border border-neutral-200 rounded-lg px-4 py-3 overflow-x-auto">
                  <code className="text-sm font-mono text-neutral-800">
                    {item.code}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
