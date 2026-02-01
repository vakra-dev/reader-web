import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-background">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/text_logo.png"
            alt="Reader"
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/playground"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Playground
          </Link>
          <a
            href="https://docs.reader.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Docs
          </a>
          <a
            href="https://github.com/vakra-dev/reader"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
