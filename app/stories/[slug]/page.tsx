import { Metadata } from "next";
import StoryViewer from "./StoryViewer";

interface Props {
  params: Promise<{ slug: string }>;
}

// Decode slug back into a readable title for meta tags
function slugToTitle(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slugToTitle(slug);
  const description = `${title} — an AI-generated work of fiction from an anonymous submission on Spaghetti Burritos. All details are fictional.`;

  return {
    title: `${title} | Spaghetti Burritos`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Spaghetti Burritos",
      url: `https://spaghettiburritos.com/stories/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  return <StoryViewer slug={slug} />;
}
