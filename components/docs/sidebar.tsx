"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsNav } from "@/lib/docs-nav";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 shrink-0 border-r border-neutral-200 overflow-y-auto py-6 pr-6">
      {docsNav.map((group) => (
        <div key={group.title} className="mb-6">
          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 px-3">
            {group.title}
          </h4>
          <ul className="space-y-0.5">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block px-3 py-1.5 text-sm rounded-md transition-colors",
                    pathname === item.href
                      ? "bg-accent-500/10 text-accent-600 font-medium"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
