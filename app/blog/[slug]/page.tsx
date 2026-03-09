import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Streamer Drama": { bg: "#EC4899", text: "#0A0008" },
  "Internet Chaos": { bg: "#FBBF24", text: "#0A0008" },
  "Sports": { bg: "#14B8A6", text: "#0A0008" },
  "Pop Culture": { bg: "#EC4899", text: "#0A0008" },
  "Hot Takes": { bg: "#FBBF24", text: "#0A0008" },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const catColor = categoryColors[post.category] || { bg: "#EC4899", text: "#0A0008" };

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <div style={{ background: "#0A0008", minHeight: "100vh", fontFamily: "'Arial Black', Arial, sans-serif" }}>
      {/* Nav */}
      <nav style={{
        background: "#0A0008",
        borderBottom: "2px solid #EC4899",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <Link href="/" style={{
          textDecoration: "none",
          fontSize: "1.4rem",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: "#FAFAF8",
          textTransform: "uppercase",
        }}>
          <span style={{ color: "#EC4899" }}>SPAGHETTI</span>
          <span style={{ color: "#FBBF24" }}> BURRITOS</span>
        </Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link href="/blog" style={{
            color: "#FAFAF8",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            Blog
          </Link>
          <a href="mailto:tips@spaghettiburritos.com" style={{
            background: "#EC4899",
            color: "#FAFAF8",
            textDecoration: "none",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "8px 16px",
            borderRadius: "2px",
          }}>
            Send Hot Takes
          </a>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: "740px", margin: "0 auto", padding: "60px 24px 80px" }}>
        {/* Back */}
        <Link href="/blog" style={{
          color: "#FAFAF8",
          opacity: 0.5,
          textDecoration: "none",
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "32px",
        }}>
          &larr; All Posts
        </Link>

        {/* Meta */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
          <span style={{
            background: catColor.bg,
            color: catColor.text,
            fontSize: "0.65rem",
            fontWeight: 900,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: "2px",
          }}>
            {post.category}
          </span>
          <span style={{ color: "#FAFAF8", opacity: 0.35, fontSize: "0.8rem", fontFamily: "Arial, sans-serif" }}>
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <span style={{ color: "#FAFAF8", opacity: 0.35, fontSize: "0.8rem", fontFamily: "Arial, sans-serif" }}>
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          color: "#FAFAF8",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          margin: "0 0 24px",
        }}>
          {post.title}
        </h1>

        {/* Excerpt */}
        <p style={{
          color: "#EC4899",
          fontSize: "1.1rem",
          fontWeight: 700,
          lineHeight: 1.5,
          margin: "0 0 40px",
          fontFamily: "Arial, sans-serif",
          borderLeft: "3px solid #EC4899",
          paddingLeft: "16px",
        }}>
          {post.excerpt}
        </p>

        {/* Divider */}
        <div style={{ height: "2px", background: "linear-gradient(90deg, #EC4899, transparent)", marginBottom: "40px" }} />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {paragraphs.map((para, i) => (
            <p key={i} style={{
              color: "#FAFAF8",
              opacity: 0.85,
              fontSize: "1.05rem",
              lineHeight: 1.75,
              margin: 0,
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
            }}>
              {para}
            </p>
          ))}
        </div>
      </article>

      {/* More Chaos */}
      <section style={{
        borderTop: "2px solid #2a0025",
        padding: "60px 24px 80px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "32px" }}>
          <h2 style={{
            color: "#FBBF24",
            fontSize: "1.4rem",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            margin: 0,
          }}>
            More Chaos:
          </h2>
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, #FBBF24, transparent)" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {otherPosts.map((p) => {
            const c = categoryColors[p.category] || { bg: "#EC4899", text: "#0A0008" };
            return (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                <div className="more-card">
                  <span style={{
                    background: c.bg,
                    color: c.text,
                    fontSize: "0.6rem",
                    fontWeight: 900,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "2px 8px",
                    borderRadius: "2px",
                    display: "inline-block",
                    marginBottom: "10px",
                  }}>
                    {p.category}
                  </span>
                  <h3 style={{
                    color: "#FAFAF8",
                    fontSize: "1rem",
                    fontWeight: 900,
                    lineHeight: 1.3,
                    margin: "0 0 8px",
                  }}>
                    {p.title}
                  </h3>
                  <span style={{
                    color: "#EC4899",
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    Read &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #2a0025",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <div style={{
          color: "#FAFAF8",
          fontSize: "1rem",
          fontWeight: 900,
          letterSpacing: "-0.01em",
          marginBottom: "8px",
        }}>
          <span style={{ color: "#EC4899" }}>SPAGHETTI</span>
          <span style={{ color: "#FBBF24" }}> BURRITOS</span>
        </div>
        <p style={{
          color: "#FAFAF8",
          opacity: 0.4,
          fontSize: "0.8rem",
          fontFamily: "Arial, sans-serif",
          margin: 0,
        }}>
          Unhinged content for a broken internet.
        </p>
      </footer>
    </div>
  );
}
