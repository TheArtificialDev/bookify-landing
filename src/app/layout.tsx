import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookify - AI Book Writing Software & Editor for Non-Fiction Authors",
  description: "The best AI-powered book writing software and editor for non-fiction authors. Write your book 5x faster with intelligent research management, AI writing assistance, and professional formatting tools.",
  keywords: "book writing software, book editor, AI writing assistant, book writing app, non-fiction writing software, book authoring tools, writing editor, manuscript editor, book publishing software, digital book writing, online book editor, book writing platform, author tools, writing software for books, AI book writer, book creation software, manuscript writing software, book writing program, professional book editor, book writing tool",
  authors: [{ name: "Bookify Team" }],
  creator: "Bookify",
  publisher: "Bookify",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bookify.thekp.in",
    title: "Bookify - AI Book Writing Software & Editor for Non-Fiction Authors",
    description: "The best AI-powered book writing software and editor for non-fiction authors. Write your book 5x faster with intelligent research management, AI writing assistance, and professional formatting tools.",
    siteName: "Bookify - Book Writing Software",
    images: [
      {
        url: "https://bookify.thekp.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bookify - AI Book Writing Software Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookify - AI Book Writing Software & Editor",
    description: "Write your non-fiction book 5x faster with AI-powered book writing software and intelligent editor.",
    creator: "@bookifyapp",
    images: ["https://bookify.thekp.in/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bookify.thekp.in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bookify",
    "applicationCategory": "Book Writing Software",
    "description": "AI-powered book writing software and editor for non-fiction authors. Write books 5x faster with intelligent research management and AI writing assistance.",
    "url": "https://bookify.thekp.in",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free beta access for first 100 users"
    },
    "featureList": [
      "AI Writing Assistant",
      "Research Management",
      "Book Structure Templates",
      "Export to Multiple Formats",
      "Collaborative Editing",
      "Progress Tracking"
    ],
    "screenshot": "https://bookify.thekp.in/screenshot.jpg",
    "author": {
      "@type": "Organization",
      "name": "Bookify Team"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
