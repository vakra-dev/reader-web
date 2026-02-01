import Image from "next/image";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/text_logo.png"
              alt="Reader"
              width={100}
              height={33}
            />
            <span className="text-neutral-500 text-sm">
              Open-source web scraping for LLMs
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://docs.reader.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Documentation
            </a>
            <a
              href="https://github.com/vakra-dev/reader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
          <p>Apache 2.0 License</p>
        </div>
      </div>
    </footer>
  );
}
