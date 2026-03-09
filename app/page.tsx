import Link from "next/link";
import { getRecentPosts } from "./blog/data";

const tickerItems = [
  "BREAKING: local man has opinions about strangers on the internet",
  "DEVELOPING: streamer posts vague tweet, nobody knows what it means, everyone has theories",
  "ALERT: algorithm shows you the same type of video for the 14th time today",
  "SOURCES SAY: celebrity apology video incoming, publicist already booked",
  "JUST IN: sports betting parlay hits at 2am, man wakes up everyone in the house",
  "REPORT: platform changes monetization policy, creators furious, nothing changes",
  "BREAKING: hot take goes viral, hot take about the hot take goes viral an hour later",
];

export default function Home() {
  const recentPosts = getRecentPosts(3);

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

      {/* Hero */}
      <section style={{
        padding: "80px 24px 60px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-block",
          background: "#EC4899",
          color: "#0A0008",
          fontSize: "0.7rem",
          fontWeight: 900,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "4px 12px",
          marginBottom: "24px",
        }}>
          Est. When The Internet Broke
        </div>
        <h1 style={{
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          margin: "0 0 24px",
          background: "linear-gradient(135deg, #EC4899 0%, #FBBF24 60%, #14B8A6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          The Internet Is Cooked.<br />We're Just Documenting It.
        </h1>
        <p style={{
          color: "#FAFAF8",
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "0 auto 40px",
          opacity: 0.8,
          fontWeight: 400,
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.6,
        }}>
          Streamer drama. Viral moments. Celebrity beef. Sports betting chaos. Hot takes nobody asked for. You found it.
        </p>
        <Link href="/blog" style={{
          background: "#EC4899",
          color: "#FAFAF8",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: 900,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "16px 40px",
          display: "inline-block",
          borderRadius: "2px",
        }}>
          Read The Chaos
        </Link>
      </section>

      {/* Ticker */}
      <div style={{
        background: "#EC4899",
        padding: "10px 0",
        overflow: "hidden",
        borderTop: "2px solid #FBBF24",
        borderBottom: "2px solid #FBBF24",
      }}>
        <div style={{
          display: "flex",
          gap: "80px",
          animation: "ticker 40s linear infinite",
          whiteSpace: "nowrap",
          width: "max-content",
        }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{
              color: "#0A0008",
              fontSize: "0.8rem",
              fontWeight: 900,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}>
              {"\u2605"} {item}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Latest Posts */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "40px" }}>
          <h2 style={{
            color: "#FAFAF8",
            fontSize: "1.8rem",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            margin: 0,
          }}>
            Latest
          </h2>
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, #EC4899, transparent)" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article className="post-card" style={{ gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    background: "#EC4899",
                    color: "#0A0008",
                    fontSize: "0.65rem",
                    fontWeight: 900,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    borderRadius: "2px",
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: "#FAFAF8", opacity: 0.4, fontSize: "0.75rem", fontFamily: "Arial, sans-serif" }}>
                    {post.readTime}
                  </span>
                </div>
                <h3 style={{
                  color: "#FAFAF8",
                  fontSize: "1.15rem",
                  fontWeight: 900,
                  lineHeight: 1.3,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}>
                  {post.title}
                </h3>
                <p style={{
                  color: "#FAFAF8",
                  opacity: 0.6,
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "Arial, sans-serif",
                  flex: 1,
                }}>
                  {post.excerpt}
                </p>
                <span style={{
                  color: "#EC4899",
                  fontSize: "0.8rem",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  Read more &rarr;
                </span>
              </article>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/blog" style={{
            border: "2px solid #EC4899",
            color: "#EC4899",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 900,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "14px 36px",
            display: "inline-block",
            borderRadius: "2px",
          }}>
            All Posts
          </Link>
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
          marginBottom: "12px",
        }}>
          <span style={{ color: "#EC4899" }}>SPAGHETTI</span>
          <span style={{ color: "#FBBF24" }}> BURRITOS</span>
        </div>
        <p style={{
          color: "#FAFAF8",
          opacity: 0.4,
          fontSize: "0.8rem",
          fontFamily: "Arial, sans-serif",
          margin: "0 0 20px",
        }}>
          Unhinged content for a broken internet.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {["Twitter", "Instagram", "TikTok"].map((s) => (
            <span key={s} style={{
              color: "#FAFAF8",
              opacity: 0.3,
              fontSize: "0.75rem",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.05em",
            }}>
              {s}
            </span>
          ))}
        </div>
        <p style={{ color: "#FAFAF8", opacity: 0.2, fontSize: "0.7rem", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
          &copy; {new Date().getFullYear()} Spaghetti Burritos. All chaos reserved.
        </p>
      </footer>
    </div>
  );
}
