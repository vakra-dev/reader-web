import { NextRequest, NextResponse } from "next/server";

const READER_API_URL = process.env.READER_API_URL;
const READER_API_KEY = process.env.READER_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, formats = ["markdown"], onlyMainContent = true } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    if (!READER_API_URL || !READER_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Reader API not configured. Set READER_API_URL and READER_API_KEY environment variables.",
        },
        { status: 503 }
      );
    }

    const response = await fetch(`${READER_API_URL}/scrape`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": READER_API_KEY,
      },
      body: JSON.stringify({
        url,
        formats,
        onlyMainContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.error || "Failed to scrape URL" },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.success) {
      return NextResponse.json(
        { error: data.error || "Failed to scrape URL" },
        { status: 500 }
      );
    }

    // Map cloud API response to playground format
    return NextResponse.json({
      markdown: data.data.markdown,
      html: data.data.html,
      metadata: {
        baseUrl: data.data.metadata.url,
        scrapedAt: data.data.metadata.scrapedAt,
        duration: data.data.metadata.duration,
        website: {
          title: data.data.metadata.title,
          description: data.data.metadata.description,
        },
      },
    });
  } catch (error) {
    console.error("Scrape error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
