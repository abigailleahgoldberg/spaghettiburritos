import Link from "next/link";
import { posts } from "./data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Spaghetti Burritos",
  description: "Streamer drama, internet chaos, pop culture hot takes, sports betting rants. All of it. No filter.",
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Streamer Drama": { bg: "#EC4899", text: "#0A0008" },
  "Internet Chaos": { bg: "#FBBF24", text: "#0A0008" },
  "Sports": { bg: "#14B8A6", text: "#0A0008" },
  "Pop Culture": { bg: "#EC4899", text: "#0A0008" },
  "Hot Takes": { bg: "#FBBF24", text: "#0A0008" },
};

export default function BlogPage() {
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
            color: "#EC4899",
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

      {/* Header */}
      <section style={{ padding: "60px 24px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "8px" }}>
          <h1 style={{
            color: "#FAFAF8",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            margin: 0,
          }}>
            All The Chaos
          </h1>
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, #EC4899, transparent)" }} />
        </div>
        <p style={{
          color: "#FAFAF8",
          opacity: 0.5,
          fontSize: "1rem",
          fontFamily: "Arial, sans-serif",
          margin: 0,
        }}>
          {posts.length} posts. Every one is someone's worst opinion in the best way.
        </p>
      </section>

      {/* Posts Grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}>
          {posts.map((post, i) => {
            const catColor = categoryColors[post.category] || { bg: "#EC4899", text: "#0A0008" };
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="post-card">
                  {i === 0 && (
                    <div style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "#FBBF24",
                      color: "#0A0008",
                      fontSize: "0.6rem",
                      fontWeight: 900,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                    }}>
                      Latest
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      background: catColor.bg,
                      color: catColor.text,
                      fontSize: "0.65rem",
                      fontWeight: 900,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      borderRadius: "2px",
                    }}>
                      {post.category}
                    </span>
                    <span style={{ color: "#FAFAF8", opacity: 0.35, fontSize: "0.75rem", fontFamily: "Arial, sans-serif" }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h2 style={{
                    color: "#FAFAF8",
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    lineHeight: 1.3,
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}>
                    {post.title}
                  </h2>
                  <p style={{
                    color: "#FAFAF8",
                    opacity: 0.55,
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: "Arial, sans-serif",
                    flex: 1,
                  }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      color: "#FAFAF8",
                      opacity: 0.3,
                      fontSize: "0.75rem",
                      fontFamily: "Arial, sans-serif",
                    }}>
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span style={{
                      color: "#EC4899",
                      fontSize: "0.8rem",
                      fontWeight: 900,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}>
                      Read &rarr;
                    </span>
                  </div>
                </article>
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
