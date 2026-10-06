import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { CodeExample } from "@/components/home/code-example";
import { MarkdownCTA } from "@/components/home/markdown-cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CodeExample />
        <MarkdownCTA />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
