import { Header } from "@/components/layout/header";
import { DocsSidebar } from "@/components/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 pt-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex h-full">
          <aside className="hidden md:block shrink-0 h-full overflow-y-auto scrollbar-hidden">
            <DocsSidebar />
          </aside>
          <main className="flex-1 min-w-0 px-8 py-8 overflow-y-auto scrollbar-hidden">{children}</main>
        </div>
      </div>
    </div>
  );
}
