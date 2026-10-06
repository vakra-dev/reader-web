import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MarkdownHero } from "@/components/markdown/hero";
import { MarkdownHowItWorks } from "@/components/markdown/how-it-works";
import { MarkdownUseCases } from "@/components/markdown/use-cases";
import { MarkdownTryIt } from "@/components/markdown/try-it";

export const metadata = {
  title: "Markdown API - Reader",
  description:
    "Convert any URL to clean, LLM ready markdown. Free API, no auth required. Just prepend md.reader.dev to any URL.",
};

export default function MarkdownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MarkdownHero />
        <MarkdownTryIt />
        <MarkdownHowItWorks />
        <MarkdownUseCases />
      </main>
      <Footer />
    </div>
  );
}
