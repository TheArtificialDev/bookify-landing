import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookify - Write Your Non-Fiction Book 5x Faster",
  description: "AI-powered platform that helps you write non-fiction books faster without the overwhelm. Handle research chaos, beat writer's block, and structure your ideas professionally.",
  keywords: "book writing, AI writing assistant, non-fiction, writing tools, book publishing, research management",
  authors: [{ name: "Bookify Team" }],
  creator: "Bookify",
  publisher: "Bookify",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bookify.app",
    title: "Bookify - Write Your Non-Fiction Book 5x Faster",
    description: "AI-powered platform that helps you write non-fiction books faster without the overwhelm. Handle research chaos, beat writer's block, and structure your ideas professionally.",
    siteName: "Bookify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookify - Write Your Non-Fiction Book 5x Faster",
    description: "AI-powered platform that helps you write non-fiction books faster without the overwhelm.",
    creator: "@bookifyapp",
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
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
