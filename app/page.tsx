"use client";

import Link from "next/link";
import { useState } from "react";
import { posts } from "./blog/data";
import { redditStories } from "./data/reddit-stories";

const tickerItems = [
  "BREAKING: local man has opinions about strangers on the internet",
  "DEVELOPING: streamer posts vague tweet, nobody knows what it means, everyone has theories",
  "ALERT: algorithm shows you the same video for the 14th time today",
  "SOURCES SAY: gas station hot dog slaps harder than your favorite restaurant",
  "JUST IN: fantasy football league officially ruined a friendship",
  "REPORT: 2AM fast food run scientifically proven to be the best meal of the day",
  "BREAKING: hot take goes viral, hot take about the hot take goes viral an hour later",
  "EXCLUSIVE: group chat still has unread messages from three weeks ago",
];

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

export default function Home() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const latestPosts = posts.slice(0, 4);
  const trendingPosts = posts.slice(0, 4);
  const featuredRedditStories = redditStories.slice(0, 3);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Newsletter Subscriber", email, message: "Newsletter signup" }),
      });
      if (res.ok) {
        setSubStatus("done");
        setEmail("");
      } else {
        setSubStatus("error");
      }
    } catch {
      setSubStatus("error");
    }
  }

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>

      {/* NEWS TICKER */}
      <div style={{
        background: "#FF3333",
        padding: "10px 0",
        overflow: "hidden",
        borderBottom: "2px solid rgba(255,215,0,0.3)",
      }}>
        <div style={{
          display: "flex",
          gap: "80px",
          animation: "ticker 50s linear infinite",
          whiteSpace: "nowrap",
          width: "max-content",
        }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{
              color: "#F0F0F0",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter), Arial, sans-serif",
            }}>
              &#9733; {item}
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section style={{
        padding: "80px 24px 60px",
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-block",
          background: "#FFD700",
          color: "#0A0A0A",
          fontSize: "0.7rem",
          fontWeight: 900,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "4px 14px",
          marginBottom: "24px",
        }}>
          Est. When The Internet Peaked Then Immediately Went Downhill
        </div>

        <h1 style={{
          fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
          fontSize: "clamp(4rem, 12vw, 9rem)",
          lineHeight: 0.95,
          letterSpacing: "0.02em",
          margin: "0 0 24px",
          color: "#F0F0F0",
        }}>
          THE INTERNET&apos;S<br />
          <span style={{ color: "#FFD700" }}>WORST</span>{" "}
          <span style={{ color: "#FF3333" }}>BEST</span><br />
          WEBSITE
        </h1>

        <p style={{
          color: "#888888",
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto 40px",
          lineHeight: 1.7,
        }}>
          Hot takes. Degenerate opinions. Stuff your mom would not forward.
          Streamer drama, sports rants, food crimes, and cultural crimes.
          All of it. No filter. No apologies.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/blog" style={{
            background: "#FFD700",
            color: "#0A0A0A",
            textDecoration: "none",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1.2rem",
            letterSpacing: "0.1em",
            padding: "16px 40px",
            display: "inline-block",
            transition: "background 0.2s",
          }}>
            READ THE CHAOS
          </Link>
          <a href="#newsletter" style={{
            border: "2px solid #FFD700",
            color: "#FFD700",
            textDecoration: "none",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1.2rem",
            letterSpacing: "0.1em",
            padding: "14px 40px",
            display: "inline-block",
          }}>
            GET THE TAKES
          </a>
        </div>
      </section>

      {/* LATEST HOT TAKES */}
      <section id="hot-takes" style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px 24px 64px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div style={{
            background: "#FF3333",
            color: "#F0F0F0",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.15em",
            padding: "4px 14px",
          }}>
            LATEST
          </div>
          <h2 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "2rem",
            letterSpacing: "0.05em",
            margin: 0,
            color: "#F0F0F0",
          }}>
            HOT TAKES
          </h2>
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, rgba(255,215,0,0.4), transparent)" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}>
          {latestPosts.map((post) => {
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

                  <h3 style={{
                    fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: 1.1,
                    margin: 0,
                    letterSpacing: "0.02em",
                    color: "#F0F0F0",
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    color: "#888888",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    margin: 0,
                    flex: 1,
                  }}>
                    {post.excerpt}
                  </p>

                  <span style={{
                    color: accentColor,
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}>
                    Read it &rarr;
                  </span>
                </article>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/blog" style={{
            border: "2px solid rgba(255,215,0,0.4)",
            color: "#FFD700",
            textDecoration: "none",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.12em",
            padding: "12px 36px",
            display: "inline-block",
            transition: "border-color 0.2s",
          }}>
            ALL POSTS
          </Link>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto 0",
        padding: "0 24px",
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)",
      }} />

      {/* TRENDING */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div style={{
            background: "#FFD700",
            color: "#0A0A0A",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.15em",
            padding: "4px 14px",
          }}>
            TRENDING
          </div>
          <h2 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "2rem",
            letterSpacing: "0.05em",
            margin: 0,
            color: "#F0F0F0",
          }}>
            RIGHT NOW
          </h2>
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, rgba(255,215,0,0.4), transparent)" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {trendingPosts.map((post, i) => {
            const accentColor = getCatColor(post.category);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "24px",
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(255,215,0,0.1)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#141414")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <span style={{
                    fontFamily: "var(--font-bebas), Arial, sans-serif",
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    color: "rgba(255,215,0,0.2)",
                    minWidth: "60px",
                    textAlign: "right",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{
                        background: accentColor,
                        color: "#0A0A0A",
                        fontSize: "0.6rem",
                        fontWeight: 900,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "2px 7px",
                      }}>
                        {post.category}
                      </span>
                      <span style={{ color: "#888888", fontSize: "0.72rem" }}>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
                      fontSize: "1.6rem",
                      lineHeight: 1.1,
                      margin: "0 0 8px",
                      color: "#F0F0F0",
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ color: "#888888", fontSize: "0.88rem", lineHeight: 1.5, margin: 0 }}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* REDDIT DRAMA VAULT */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto 0",
        padding: "0 24px",
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(255,51,51,0.3), transparent)",
      }} />

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px", flexWrap: "wrap" }}>
          <div style={{
            background: "#FF3333",
            color: "#F0F0F0",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.15em",
            padding: "4px 14px",
          }}>
            FICTION
          </div>
          <h2 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "2rem",
            letterSpacing: "0.05em",
            margin: 0,
            color: "#F0F0F0",
          }}>
            FROM THE INTERNET&apos;S DRAMA VAULT
          </h2>
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, rgba(255,51,51,0.4), transparent)" }} />
        </div>

        <p style={{
          color: "#888888",
          fontSize: "0.88rem",
          lineHeight: 1.7,
          marginBottom: "32px",
          maxWidth: "640px",
          fontFamily: "var(--font-inter), Arial, sans-serif",
        }}>
          AI fiction inspired by real internet drama. All stories are completely fictional — names changed, details invented, everything exaggerated.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}>
          {featuredRedditStories.map((story) => {
            const accentColor = getCatColor(story.category);
            return (
              <Link key={story.slug} href={`/reddit/${story.slug}`} style={{ textDecoration: "none" }}>
                <article className="post-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{
                      background: accentColor,
                      color: "#0A0A0A",
                      fontSize: "0.62rem",
                      fontWeight: 900,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                    }}>
                      {story.category}
                    </span>
                    <span style={{ color: "#555555", fontSize: "0.68rem", fontFamily: "var(--font-inter), Arial, sans-serif" }}>
                      r/{story.subreddit}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
                    fontSize: "1.45rem",
                    lineHeight: 1.1,
                    margin: 0,
                    letterSpacing: "0.02em",
                    color: "#F0F0F0",
                  }}>
                    {story.headline}
                  </h3>

                  <p style={{
                    color: "#888888",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    margin: 0,
                    flex: 1,
                    fontFamily: "var(--font-inter), Arial, sans-serif",
                  }}>
                    {story.story.split("\n")[0].slice(0, 120)}...
                  </p>

                  <span style={{
                    color: accentColor,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}>
                    Read Fiction &rarr;
                  </span>
                </article>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/reddit" style={{
            border: "2px solid rgba(255,51,51,0.4)",
            color: "#FF3333",
            textDecoration: "none",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.12em",
            padding: "12px 36px",
            display: "inline-block",
            transition: "border-color 0.2s",
          }}>
            SEE ALL REDDIT DRAMA
          </Link>
        </div>
      </section>

      {/* GOT DRAMA CTA */}
      <section style={{
        background: "#141414",
        borderTop: "3px solid rgba(255,51,51,0.3)",
        borderBottom: "3px solid rgba(255,51,51,0.3)",
        padding: "80px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            background: "#FF3333",
            color: "#F0F0F0",
            fontSize: "0.7rem",
            fontWeight: 900,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "4px 14px",
            marginBottom: "20px",
          }}>
            Anonymous. AI-Powered. Completely Fictional.
          </div>
          <h2 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.95,
            margin: "0 0 20px",
            color: "#F0F0F0",
            letterSpacing: "0.02em",
          }}>
            GOT <span style={{ color: "#FFD700" }}>DRAMA?</span>
          </h2>
          <p style={{
            color: "#888888",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            marginBottom: "36px",
          }}>
            Submit your mess anonymously. Our AI turns it into fiction. It&apos;s art.
          </p>
          <Link href="/submit-drama" style={{
            background: "#FFD700",
            color: "#0A0A0A",
            textDecoration: "none",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1.4rem",
            letterSpacing: "0.1em",
            padding: "18px 56px",
            display: "inline-block",
            transition: "background 0.2s",
          }}>
            SUBMIT YOUR DRAMA
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" style={{
        background: "#141414",
        borderTop: "3px solid rgba(255,215,0,0.15)",
        borderBottom: "3px solid rgba(255,215,0,0.15)",
        padding: "80px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            background: "#FF3333",
            color: "#F0F0F0",
            fontSize: "0.7rem",
            fontWeight: 900,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "4px 14px",
            marginBottom: "20px",
          }}>
            FREE. UNSUBSCRIBE ANYTIME. PROBABLY WON&apos;T THO.
          </div>

          <h2 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            lineHeight: 1,
            margin: "0 0 16px",
            color: "#F0F0F0",
          }}>
            GET THE TAKES<br />
            <span style={{ color: "#FFD700" }}>NOBODY ASKED FOR</span>
          </h2>

          <p style={{ color: "#888888", fontSize: "1rem", lineHeight: 1.7, marginBottom: "32px" }}>
            Delivered to your inbox. Hot takes, degenerate opinions, and content
            your therapist would call a red flag. Subscribe or don&apos;t. We&apos;ll be fine.
          </p>

          {subStatus === "done" ? (
            <div style={{
              background: "#0A0A0A",
              border: "2px solid #FFD700",
              padding: "20px",
              color: "#FFD700",
              fontFamily: "var(--font-bebas), Arial, sans-serif",
              fontSize: "1.3rem",
              letterSpacing: "0.05em",
            }}>
              YOU&apos;RE IN. WELCOME TO THE CHAOS.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "0", maxWidth: "480px", margin: "0 auto" }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="newsletter-input"
                style={{ flex: 1, borderRight: "none" }}
              />
              <button
                type="submit"
                disabled={subStatus === "loading"}
                style={{
                  background: subStatus === "loading" ? "#888888" : "#FFD700",
                  color: "#0A0A0A",
                  border: "none",
                  padding: "14px 24px",
                  fontFamily: "var(--font-bebas), Arial, sans-serif",
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  cursor: subStatus === "loading" ? "not-allowed" : "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s",
                }}
              >
                {subStatus === "loading" ? "SENDING..." : "SEND IT"}
              </button>
            </form>
          )}

          {subStatus === "error" && (
            <p style={{ color: "#FF3333", fontSize: "0.85rem", marginTop: "12px" }}>
              Something broke. Try again or send hate mail to tips@spaghettiburritos.com.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
