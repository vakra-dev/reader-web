import Link from "next/link";
import { cn } from "@/lib/utils";

function Card({
  title,
  href,
  children,
  horizontal,
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
  horizontal?: boolean;
  icon?: string;
}) {
  const isExternal = href.startsWith("http");

  const content = (
    <div
      className={cn(
        "group h-full p-4 rounded-lg border border-neutral-200 hover:border-accent-500/50 hover:bg-accent-50/50 transition-colors",
        horizontal && "flex items-center gap-3"
      )}
    >
      <div>
        <span className="font-medium text-neutral-900 group-hover:text-accent-600 transition-colors">
          {title}
        </span>
        {children && (
          <div className="text-sm text-neutral-600 mt-1">{children}</div>
        )}
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return <Link href={href} className="block h-full">{content}</Link>;
}

function CardGroup({
  cols = 2,
  children,
}: {
  cols?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid gap-3 not-prose my-6",
        cols === 2 && "grid-cols-1 sm:grid-cols-2",
        cols === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {children}
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
      <p className="text-sm text-yellow-800 font-medium mb-1">Warning</p>
      <div className="text-sm text-yellow-700">{children}</div>
    </div>
  );
}

function MdxLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href && !href.startsWith("http") && !href.startsWith("#")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

export const mdxComponents = {
  Card,
  CardGroup,
  Warning,
  a: MdxLink,
};
