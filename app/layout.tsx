import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spaghetti Burritos | The Internet's Worst Best Website",
  description: "Hot takes nobody asked for. Degenerate opinions delivered daily. Streamer drama, pop culture chaos, sports rants, and food crimes. No filter.",
  metadataBase: new URL("https://spaghettiburritos.com"),
  openGraph: {
    title: "Spaghetti Burritos | The Internet's Worst Best Website",
    description: "Hot takes nobody asked for. Degenerate opinions delivered daily.",
    url: "https://spaghettiburritos.com",
    siteName: "Spaghetti Burritos",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Spaghetti Burritos — The Internet's Worst Best Website" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spaghetti Burritos",
    description: "The internet's worst best website. No filter.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://spaghettiburritos.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Spaghetti Burritos",
          "url": "https://spaghettiburritos.com",
          "description": "The internet's worst best website. Hot takes, degenerate opinions, streamer drama, pop culture chaos, sports rants, and food crimes. No filter."
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Spaghetti Burritos",
          "url": "https://spaghettiburritos.com"
        }) }} />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        background: "#0A0A0A",
        fontFamily: "var(--font-inter), Arial, sans-serif",
        color: "#F0F0F0",
      }}>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
