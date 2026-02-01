import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Reader - Open-source web scraping for LLMs",
  description:
    "Production-grade web scraping engine. Two primitives. Clean markdown. Ready for your agents.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "web scraping",
    "markdown",
    "llm",
    "ai",
    "crawler",
    "headless browser",
    "nodejs",
  ],
  authors: [{ name: "Vakra Dev" }],
  openGraph: {
    title: "Reader - Open-source web scraping for LLMs",
    description:
      "Production-grade web scraping engine. Two primitives. Clean markdown. Ready for your agents.",
    url: "https://reader.dev",
    siteName: "Reader",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reader - Open-source web scraping for LLMs",
    description:
      "Production-grade web scraping engine. Two primitives. Clean markdown. Ready for your agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
