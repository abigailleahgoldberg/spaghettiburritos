import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spaghetti Burritos | Pop Culture and Internet Nonsense",
  description: "Streamer drama, viral moments, celebrity beef, sports betting chaos, and hot takes nobody asked for. Unhinged content for a broken internet.",
  metadataBase: new URL("https://spaghettiburritos.com"),
  openGraph: {
    title: "Spaghetti Burritos | Pop Culture and Internet Nonsense",
    description: "Streamer drama, viral moments, celebrity beef, sports betting chaos, and hot takes nobody asked for.",
    url: "https://spaghettiburritos.com",
    siteName: "Spaghetti Burritos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spaghetti Burritos",
    description: "Unhinged content for a broken internet.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
