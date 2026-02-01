import { Header } from "@/components/layout/header";
import { Playground } from "@/components/playground/playground";

export const metadata = {
  title: "Playground - Reader",
  description: "Try Reader in your browser. Scrape any URL and see the results.",
};

export default function PlaygroundPage() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 overflow-hidden">
        <div className="h-full max-w-6xl mx-auto">
          <Playground />
        </div>
      </main>
    </div>
  );
}
