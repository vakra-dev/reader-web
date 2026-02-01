"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "p-2 rounded-md hover:bg-neutral-800 transition-colors",
        className
      )}
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-accent-500" />
      ) : (
        <Copy className="w-4 h-4 text-neutral-400" />
      )}
    </button>
  );
}
