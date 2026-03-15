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

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const accentColor = getCatColor(post.category);

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  // Pick a pull quote (3rd paragraph if it exists, else 2nd)
  const pullQuoteIdx = paragraphs.length > 3 ? 2 : 1;
  const pullQuote = paragraphs[pullQuoteIdx];

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      {/* Article header */}
      <div style={{
        background: "#141414",
        borderBottom: "3px solid rgba(255,215,0,0.15)",
        padding: "60px 24px 48px",
      }}>
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
          <Link href="/blog" style={{
            color: "#888888",
            textDecoration: "none",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "32px",
            transition: "color 0.2s",
          }}>
            &larr; ALL POSTS
          </Link>

          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{
              background: accentColor,
              color: "#0A0A0A",
              fontSize: "0.65rem",
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "3px 10px",
            }}>
              {post.category}
            </span>
            <span style={{ color: "#888888", fontSize: "0.8rem" }}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span style={{ color: "#888888", fontSize: "0.8rem" }}>
              {post.readTime}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            lineHeight: 1.0,
            letterSpacing: "0.02em",
            margin: "0 0 20px",
            color: "#F0F0F0",
          }}>
            {post.title}
          </h1>

          {/* Excerpt as pull intro */}
          <p style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            lineHeight: 1.6,
            margin: 0,
            color: "#F0F0F0",
            borderLeft: `4px solid ${accentColor}`,
            paddingLeft: "16px",
          }}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Article body */}
      <article style={{ maxWidth: "740px", margin: "0 auto", padding: "60px 24px 80px" }}>
        {paragraphs.map((para, i) => {
          // Pull quote treatment for one paragraph
          if (i === pullQuoteIdx && para.length > 80) {
            return (
              <div key={i} style={{ margin: "40px 0" }}>
                <blockquote style={{
                  background: "#141414",
                  borderLeft: `4px solid ${accentColor}`,
                  margin: "0 0 40px",
                  padding: "24px 28px",
                }}>
                  <p style={{
                    fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    lineHeight: 1.2,
                    color: "#F0F0F0",
                    margin: 0,
                    letterSpacing: "0.02em",
                  }}>
                    &ldquo;{para.length > 180 ? para.substring(0, 180) + "..." : para}&rdquo;
                  </p>
                </blockquote>
                <p style={{
                  color: "#F0F0F0",
                  opacity: 0.85,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  margin: 0,
                }}>
                  {para}
                </p>
              </div>
            );
          }

          return (
            <p key={i} style={{
              color: "#F0F0F0",
              opacity: 0.85,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              margin: "0 0 24px",
            }}>
              {para}
            </p>
          );
        })}
      </article>

      {/* More Chaos */}
      <section style={{
        borderTop: "3px solid rgba(255,215,0,0.15)",
        background: "#141414",
        padding: "60px 24px 80px",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <h2 style={{
              fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
              fontSize: "2rem",
              letterSpacing: "0.05em",
              margin: 0,
              color: "#FFD700",
            }}>
              MORE CHAOS
            </h2>
            <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, rgba(255,215,0,0.4), transparent)" }} />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}>
            {otherPosts.map((p) => {
              const c = getCatColor(p.category);
              return (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div className="more-card">
                    <span style={{
                      background: c,
                      color: "#0A0A0A",
                      fontSize: "0.6rem",
                      fontWeight: 900,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "2px 8px",
                      display: "inline-block",
                      marginBottom: "10px",
                    }}>
                      {p.category}
                    </span>
                    <h3 style={{
                      fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
                      fontSize: "1.3rem",
                      lineHeight: 1.1,
                      margin: "0 0 10px",
                      color: "#F0F0F0",
                    }}>
                      {p.title}
                    </h3>
                    <p style={{ color: "#888888", fontSize: "0.83rem", lineHeight: 1.5, margin: "0 0 12px" }}>
                      {p.excerpt}
                    </p>
                    <span style={{
                      color: c,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}>
                      Read &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
