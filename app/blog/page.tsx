import Link from "next/link";
import { posts } from "./data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Spaghetti Burritos",
  description: "Every hot take we&apos;ve ever published. Streamer drama, internet chaos, pop culture crimes, sports rants, food takes. No filter.",
};

const categoryColors: Record<string, string> = {
  "Streamer Drama": "#FF3333",
  "Internet Chaos": "#FFD700",
  "Sports": "#FF3333",
  "Pop Culture": "#FFD700",
  "Hot Takes": "#FF3333",
  "FOOD": "#FFD700",
  "SPORTS": "#FF3333",
  "CULTURE": "#FFD700",
  "DEGENERATE": "#FF3333",
};

function getCatColor(cat: string): string {
  return categoryColors[cat] || "#FFD700";
}

export default function BlogPage() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{
        borderBottom: "3px solid rgba(255,215,0,0.15)",
        padding: "60px 24px 48px",
        background: "#141414",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            background: "#FF3333",
            color: "#F0F0F0",
            fontSize: "0.7rem",
            fontWeight: 900,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "4px 14px",
            marginBottom: "16px",
          }}>
            All The Chaos. Every Word of It.
          </div>
          <h1 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            margin: "0 0 16px",
            color: "#F0F0F0",
          }}>
            THE ARCHIVE
          </h1>
          <p style={{ color: "#888888", fontSize: "1rem", margin: 0, lineHeight: 1.6 }}>
            {posts.length} takes. Every one written by someone who cares way too much about things that don&apos;t matter.
          </p>
        </div>
      </section>

      {/* Featured — first post big */}
      {posts.length > 0 && (
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 0" }}>
          <Link href={`/blog/${posts[0].slug}`} style={{ textDecoration: "none" }}>
            <article style={{
              background: "#141414",
              border: "1px solid rgba(255,215,0,0.15)",
              padding: "48px",
              marginBottom: "48px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                background: "#FFD700",
                color: "#0A0A0A",
                fontSize: "0.65rem",
                fontWeight: 900,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "4px 12px",
              }}>
                Latest
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }}>
                <span style={{
                  background: getCatColor(posts[0].category),
                  color: "#0A0A0A",
                  fontSize: "0.65rem",
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                }}>
                  {posts[0].category}
                </span>
                <span style={{ color: "#888888", fontSize: "0.8rem" }}>
                  {new Date(posts[0].date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <span style={{ color: "#888888", fontSize: "0.8rem" }}>
                  {posts[0].readTime}
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.0,
                margin: "0 0 16px",
                color: "#F0F0F0",
                maxWidth: "800px",
              }}>
                {posts[0].title}
              </h2>

              <p style={{
                color: "#888888",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                margin: "0 0 20px",
                maxWidth: "680px",
              }}>
                {posts[0].excerpt}
              </p>

              <span style={{
                color: getCatColor(posts[0].category),
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
              }}>
                READ THE FULL TAKE &rarr;
              </span>
            </article>
          </Link>
        </section>
      )}

      {/* Posts Grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
        }}>
          {posts.slice(1).map((post) => {
            const accentColor = getCatColor(post.category);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="post-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      background: accentColor,
                      color: "#0A0A0A",
                      fontSize: "0.62rem",
                      fontWeight: 900,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                    }}>
                      {post.category}
                    </span>
                    <span style={{ color: "#888888", fontSize: "0.72rem" }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
                    fontSize: "1.45rem",
                    lineHeight: 1.1,
                    margin: 0,
                    color: "#F0F0F0",
                  }}>
                    {post.title}
                  </h2>

                  <p style={{
                    color: "#888888",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    margin: 0,
                    flex: 1,
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#888888", fontSize: "0.72rem" }}>
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span style={{
                      color: accentColor,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
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
    </div>
  );
}
