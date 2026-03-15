"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface StoryResult {
  slug: string;
  headline: string;
  story: string;
  moral: string;
}

type PageState = "form" | "preview" | "published";

const DRAMA_CATEGORIES = [
  "Workplace",
  "Roommate",
  "Family",
  "Dating",
  "Friendship",
  "Neighbor",
  "Random",
] as const;

type DramaCategory = (typeof DRAMA_CATEGORIES)[number];

// Drama meter: score 0-100 based on juicy keywords
const HOT_KEYWORDS = [
  "fired", "quit", "cheating", "cheated", "lied", "stole", "betrayed",
  "screenshot", "text", "exposed", "confronted", "blocked", "ghosted",
  "pregnant", "affair", "divorce", "wedding", "money", "rent", "evicted",
  "police", "lawyer", "sued", "fight", "yelled", "cried", "drunk",
  "party", "secret", "found out", "told everyone", "group chat", "went viral",
  "embarrassing", "humiliated", "revenge", "karma", "fired them", "quit on",
  "breakup", "broke up", "cheater", "narcissist", "toxic", "manipulative",
];

function getDramaMeterScore(text: string): number {
  if (!text || text.length < 10) return 0;
  const lower = text.toLowerCase();
  let hits = 0;
  for (const kw of HOT_KEYWORDS) {
    if (lower.includes(kw)) hits++;
  }
  const lengthBonus = Math.min(text.length / 500, 1) * 20;
  const keywordScore = Math.min(hits * 12, 70);
  return Math.min(Math.round(keywordScore + lengthBonus), 100);
}

function getDramaMeterLabel(score: number): { label: string; color: string } {
  if (score === 0) return { label: "Type your drama above...", color: "#555555" };
  if (score < 20) return { label: "Mild Inconvenience", color: "#888888" };
  if (score < 40) return { label: "Getting Interesting", color: "#AAAAAA" };
  if (score < 55) return { label: "Spicy Situation", color: "#FFD700" };
  if (score < 70) return { label: "Full-On Mess", color: "#FF8C00" };
  if (score < 85) return { label: "This Is A Lot", color: "#FF5500" };
  return { label: "MAXIMUM CHAOS", color: "#FF3333" };
}

const LOADING_MESSAGES = [
  "Consulting the drama oracle...",
  "Turning your mess into art...",
  "Adding a little spice...",
  "Finding the perfect ridiculous details...",
  "Calling in the writing team...",
  "Summoning the chaos engine...",
  "Crafting your fictional masterpiece...",
  "Spinning the drama wheel...",
  "Translating hot takes to literature...",
  "Brewing the tea...",
];

function headlineToSlug(headline: string): string {
  return headline
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

export default function SubmitDramaPage() {
  const [pageState, setPageState] = useState<PageState>("form");
  const [drama, setDrama] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [category, setCategory] = useState<DramaCategory>("Random");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState<StoryResult | null>(null);
  const [approvalChecked, setApprovalChecked] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);
  const loadingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const dramaMeterScore = getDramaMeterScore(drama);
  const { label: meterLabel, color: meterColor } = getDramaMeterLabel(dramaMeterScore);

  useEffect(() => {
    if (status === "loading") {
      let idx = 0;
      loadingIntervalRef.current = setInterval(() => {
        idx = (idx + 1) % LOADING_MESSAGES.length;
        setLoadingMsg(LOADING_MESSAGES[idx]);
      }, 1800);
    } else {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
        loadingIntervalRef.current = null;
      }
      setLoadingMsg(LOADING_MESSAGES[0]);
    }
    return () => {
      if (loadingIntervalRef.current) clearInterval(loadingIntervalRef.current);
    };
  }, [status]);

  async function submitToApi() {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/drama", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ drama, characterName, category }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Try again.");
        setStatus("error");
        return null;
      }
      setStatus("idle");
      return data as StoryResult;
    } catch {
      setErrorMsg("The drama machine broke. Try again.");
      setStatus("error");
      return null;
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await submitToApi();
    if (data) {
      setResult(data);
      setPageState("preview");
    }
  }

  async function handleRegenerate() {
    setApprovalChecked(false);
    const data = await submitToApi();
    if (data) {
      setResult(data);
      // stay on preview, just update result
    }
  }

  function handleApproveAndPublish() {
    if (!result) return;
    const storyData = {
      headline: result.headline,
      story: result.story,
      moral: result.moral,
      date: new Date().toISOString(),
      category,
    };
    const encoded = btoa(encodeURIComponent(JSON.stringify(storyData)));
    const slug = headlineToSlug(result.headline);
    const url = `${window.location.origin}/stories/${slug}#${encoded}`;
    setPublishedUrl(url);
    setPageState("published");
  }

  function handleDiscard() {
    setDrama("");
    setCharacterName("");
    setCategory("Random");
    setStatus("idle");
    setErrorMsg("");
    setResult(null);
    setApprovalChecked(false);
    setPublishedUrl("");
    setLinkCopied(false);
    setPageState("form");
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(publishedUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
    } catch {
      setLinkCopied(false);
    }
  }

  function getTwitterShareUrl() {
    if (!result) return "#";
    const text = encodeURIComponent(
      `"${result.headline}" — AI-generated fiction from an anonymous submission:`
    );
    return `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(publishedUrl)}`;
  }

  // ─── LOADING OVERLAY ───
  if (status === "loading") {
    return (
      <div
        style={{
          background: "#0A0A0A",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        {/* Spinner */}
        <div
          style={{
            width: "64px",
            height: "64px",
            border: "4px solid rgba(255,215,0,0.15)",
            borderTop: "4px solid #FFD700",
            borderRadius: "50%",
            marginBottom: "40px",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

        <h2
          style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            color: "#F0F0F0",
            margin: "0 0 16px",
            letterSpacing: "0.02em",
          }}
        >
          CRAFTING YOUR <span style={{ color: "#FFD700" }}>MASTERPIECE</span>
        </h2>
        <p
          style={{
            color: "#888888",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            margin: "0 0 32px",
            minHeight: "1.7em",
            fontFamily: "var(--font-inter), Arial, sans-serif",
            transition: "opacity 0.4s",
          }}
        >
          {loadingMsg}
        </p>
        <div
          style={{
            background: "#FF3333",
            color: "#F0F0F0",
            fontSize: "0.7rem",
            fontWeight: 900,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "6px 16px",
          }}
        >
          AI at work — do not refresh
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      {/* Header */}
      <section
        style={{
          background: "#141414",
          borderBottom: "3px solid rgba(255,215,0,0.3)",
          padding: "60px 24px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "#FF3333",
              color: "#F0F0F0",
              fontSize: "0.7rem",
              fontWeight: 900,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "4px 14px",
              marginBottom: "20px",
            }}
          >
            Anonymous. Unfiltered. Fictional.
          </div>
          <h1
            style={{
              fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              lineHeight: 0.95,
              margin: "0 0 20px",
              color: "#F0F0F0",
              letterSpacing: "0.02em",
            }}
          >
            SUBMIT YOUR<br />
            <span style={{ color: "#FFD700" }}>DRAMA</span>
          </h1>
          <p style={{ color: "#888888", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>
            Drop the tea anonymously. Our AI turns your mess into a masterpiece.
          </p>
        </div>
      </section>

      {/* ─── FORM STATE ─── */}
      {pageState === "form" && (
        <section style={{ maxWidth: "740px", margin: "0 auto", padding: "48px 24px 80px" }}>
          <form onSubmit={handleSubmit}>

            {/* Category selector */}
            <div style={{ marginBottom: "28px" }}>
              <p
                style={{
                  fontFamily: "var(--font-bebas), Arial, sans-serif",
                  fontSize: "1.1rem",
                  letterSpacing: "0.1em",
                  color: "#F0F0F0",
                  margin: "0 0 12px",
                }}
              >
                DRAMA CATEGORY
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {DRAMA_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    style={{
                      background: category === cat ? "#FFD700" : "transparent",
                      color: category === cat ? "#0A0A0A" : "#888888",
                      border: `2px solid ${category === cat ? "#FFD700" : "rgba(255,215,0,0.2)"}`,
                      padding: "7px 18px",
                      fontFamily: "var(--font-bebas), Arial, sans-serif",
                      fontSize: "0.9rem",
                      letterSpacing: "0.1em",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (category !== cat) {
                        e.currentTarget.style.borderColor = "rgba(255,215,0,0.5)";
                        e.currentTarget.style.color = "#D0D0D0";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (category !== cat) {
                        e.currentTarget.style.borderColor = "rgba(255,215,0,0.2)";
                        e.currentTarget.style.color = "#888888";
                      }
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Drama textarea */}
            <div style={{ marginBottom: "12px" }}>
              <label
                htmlFor="drama"
                style={{
                  display: "block",
                  fontFamily: "var(--font-bebas), Arial, sans-serif",
                  fontSize: "1.1rem",
                  letterSpacing: "0.1em",
                  color: "#F0F0F0",
                  marginBottom: "10px",
                }}
              >
                THE DRAMA
              </label>
              <textarea
                id="drama"
                value={drama}
                onChange={(e) => setDrama(e.target.value)}
                placeholder="Tell us the drama. Names, details, the whole mess. We'll turn it into fiction."
                required
                minLength={20}
                maxLength={5000}
                rows={10}
                style={{
                  width: "100%",
                  background: "#141414",
                  border: "2px solid rgba(255,215,0,0.2)",
                  color: "#F0F0F0",
                  padding: "16px",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  fontFamily: "var(--font-inter), Arial, sans-serif",
                  resize: "vertical",
                  boxSizing: "border-box",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,215,0,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,215,0,0.2)")}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ color: "#555555", fontSize: "0.75rem" }}>
                  Minimum 20 characters
                </span>
                <span style={{ color: "#555555", fontSize: "0.75rem" }}>
                  {drama.length} / 5000
                </span>
              </div>
            </div>

            {/* Drama Meter */}
            <div
              style={{
                background: "#141414",
                border: "1px solid rgba(255,215,0,0.1)",
                padding: "14px 16px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bebas), Arial, sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    color: "#555555",
                    textTransform: "uppercase",
                  }}
                >
                  Drama Meter
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-bebas), Arial, sans-serif",
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    color: meterColor,
                    transition: "color 0.3s",
                  }}
                >
                  {meterLabel}
                </span>
              </div>
              {/* Bar */}
              <div
                style={{
                  height: "6px",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "3px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${dramaMeterScore}%`,
                    background: meterColor,
                    borderRadius: "3px",
                    transition: "width 0.4s ease, background 0.4s ease",
                  }}
                />
              </div>
            </div>

            {/* Character name */}
            <div style={{ marginBottom: "36px" }}>
              <label
                htmlFor="characterName"
                style={{
                  display: "block",
                  fontFamily: "var(--font-bebas), Arial, sans-serif",
                  fontSize: "1.1rem",
                  letterSpacing: "0.1em",
                  color: "#F0F0F0",
                  marginBottom: "10px",
                }}
              >
                GIVE US A FAKE NAME FOR THE MAIN CHARACTER{" "}
                <span style={{ color: "#555555", fontSize: "0.85rem" }}>(optional)</span>
              </label>
              <input
                id="characterName"
                type="text"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
                placeholder="Default: Alex"
                maxLength={50}
                style={{
                  width: "100%",
                  background: "#141414",
                  border: "2px solid rgba(255,215,0,0.2)",
                  color: "#F0F0F0",
                  padding: "14px 16px",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-inter), Arial, sans-serif",
                  boxSizing: "border-box",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,215,0,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,215,0,0.2)")}
              />
            </div>

            {/* Error */}
            {status === "error" && errorMsg && (
              <div
                style={{
                  background: "rgba(255,51,51,0.1)",
                  border: "1px solid rgba(255,51,51,0.4)",
                  color: "#FF3333",
                  padding: "12px 16px",
                  marginBottom: "24px",
                  fontSize: "0.9rem",
                }}
              >
                {errorMsg}{" "}
                <button
                  type="submit"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#FF3333",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    padding: 0,
                    fontFamily: "inherit",
                  }}
                >
                  Try again
                </button>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              style={{
                background: "#FFD700",
                color: "#0A0A0A",
                border: "none",
                padding: "18px 48px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1.3rem",
                letterSpacing: "0.12em",
                cursor: "pointer",
                width: "100%",
                transition: "background 0.2s",
                marginBottom: "24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FFC200")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFD700")}
            >
              GENERATE MY STORY
            </button>

            <p style={{ color: "#555555", fontSize: "0.78rem", lineHeight: 1.7, margin: 0, textAlign: "center" }}>
              Anonymous. AI-generated fiction. You review before publishing.
              By submitting, you agree to our{" "}
              <Link href="/terms" style={{ color: "#888888", textDecoration: "underline" }}>
                Terms of Service
              </Link>
              .
            </p>
          </form>
        </section>
      )}

      {/* ─── PREVIEW STATE ─── */}
      {pageState === "preview" && result && (
        <section style={{ maxWidth: "740px", margin: "0 auto", padding: "48px 24px 80px" }}>

          {/* Fiction banner */}
          <div
            style={{
              background: "#FF3333",
              color: "#F0F0F0",
              fontSize: "0.8rem",
              fontWeight: 900,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "14px 20px",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            THIS IS A WORK OF FICTION — AI-generated from an anonymous submission. All details are fictional.
          </div>

          {/* Preview badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div
              style={{
                display: "inline-block",
                border: "2px solid rgba(255,215,0,0.4)",
                color: "#FFD700",
                fontSize: "0.7rem",
                fontWeight: 900,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "4px 14px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
              }}
            >
              Preview — Not Yet Published
            </div>
            {category !== "Random" && (
              <div
                style={{
                  background: "rgba(255,215,0,0.08)",
                  border: "1px solid rgba(255,215,0,0.2)",
                  color: "#FFD700",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  fontFamily: "var(--font-bebas), Arial, sans-serif",
                }}
              >
                {category}
              </div>
            )}
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              lineHeight: 1.05,
              color: "#FFD700",
              margin: "0 0 32px",
              letterSpacing: "0.02em",
            }}
          >
            {result.headline}
          </h2>

          {/* Story body */}
          <div
            style={{
              color: "#D0D0D0",
              fontSize: "1rem",
              lineHeight: 1.85,
              marginBottom: "32px",
              fontFamily: "var(--font-inter), Arial, sans-serif",
            }}
          >
            {result.story.split("\n").map((para, i) =>
              para.trim() ? (
                <p key={i} style={{ margin: "0 0 1.4em" }}>
                  {para}
                </p>
              ) : null
            )}
          </div>

          {/* Moral */}
          <div
            style={{ borderLeft: "3px solid #FFD700", paddingLeft: "20px", marginBottom: "48px" }}
          >
            <p
              style={{
                color: "#888888",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 6px",
              }}
            >
              Moral of the Story
            </p>
            <p
              style={{
                color: "#D0D0D0",
                fontSize: "1rem",
                lineHeight: 1.7,
                fontStyle: "italic",
                margin: 0,
                fontFamily: "var(--font-inter), Arial, sans-serif",
              }}
            >
              {result.moral}
            </p>
          </div>

          {/* Regenerate option */}
          <div
            style={{
              background: "#141414",
              border: "1px solid rgba(255,215,0,0.1)",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                color: "#888888",
                fontSize: "0.85rem",
                margin: 0,
                fontFamily: "var(--font-inter), Arial, sans-serif",
              }}
            >
              Not feeling this version?
            </p>
            <button
              onClick={handleRegenerate}
              style={{
                background: "transparent",
                color: "#FFD700",
                border: "2px solid rgba(255,215,0,0.4)",
                padding: "8px 20px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "border-color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,215,0,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,215,0,0.4)")}
            >
              REGENERATE / TRY AGAIN
            </button>
          </div>

          {/* Legal disclaimer box */}
          <div
            style={{
              background: "#141414",
              border: "2px solid rgba(255,51,51,0.4)",
              padding: "28px",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                color: "#FF3333",
                margin: "0 0 16px",
                textTransform: "uppercase",
              }}
            >
              Before You Publish
            </p>
            <p
              style={{
                color: "#AAAAAA",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                margin: "0 0 12px",
                fontFamily: "var(--font-inter), Arial, sans-serif",
              }}
            >
              By clicking &ldquo;Approve &amp; Publish&rdquo;, you acknowledge and agree that:
            </p>
            <ol
              style={{
                color: "#AAAAAA",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                margin: "0 0 0 20px",
                padding: 0,
                fontFamily: "var(--font-inter), Arial, sans-serif",
              }}
            >
              <li>This story was generated by artificial intelligence based on your anonymous submission</li>
              <li>All details, names, and events in this story are fictional and created by AI</li>
              <li>This story has no personal connection to any real person, living or dead</li>
              <li>Spaghetti Burritos is not responsible for the content — it is based entirely on the input provided by you, the submitter</li>
              <li>The published story will receive a unique URL and be publicly visible</li>
              <li>You cannot request removal of a published story (don&rsquo;t submit what you can&rsquo;t laugh about later)</li>
            </ol>
          </div>

          {/* Approval checkbox */}
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              cursor: "pointer",
              marginBottom: "32px",
            }}
          >
            <input
              type="checkbox"
              checked={approvalChecked}
              onChange={(e) => setApprovalChecked(e.target.checked)}
              style={{
                width: "20px",
                height: "20px",
                marginTop: "2px",
                accentColor: "#FFD700",
                cursor: "pointer",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#D0D0D0",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                fontFamily: "var(--font-inter), Arial, sans-serif",
              }}
            >
              I understand this is fiction and I approve publication
            </span>
          </label>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={handleApproveAndPublish}
              disabled={!approvalChecked}
              style={{
                background: approvalChecked ? "#FFD700" : "#333333",
                color: approvalChecked ? "#0A0A0A" : "#666666",
                border: "none",
                padding: "16px 40px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1.2rem",
                letterSpacing: "0.1em",
                cursor: approvalChecked ? "pointer" : "not-allowed",
                transition: "background 0.2s, color 0.2s",
                flex: "1 1 auto",
              }}
            >
              APPROVE &amp; PUBLISH
            </button>
            <button
              onClick={handleDiscard}
              style={{
                background: "transparent",
                color: "#888888",
                border: "2px solid rgba(255,255,255,0.15)",
                padding: "14px 32px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.color = "#AAAAAA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "#888888";
              }}
            >
              DISCARD &amp; START OVER
            </button>
          </div>
        </section>
      )}

      {/* ─── PUBLISHED STATE ─── */}
      {pageState === "published" && result && (
        <section style={{ maxWidth: "740px", margin: "0 auto", padding: "48px 24px 80px" }}>

          {/* Success banner */}
          <div
            style={{
              background: "rgba(255,215,0,0.08)",
              border: "2px solid rgba(255,215,0,0.4)",
              padding: "24px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1.6rem",
                letterSpacing: "0.1em",
                color: "#FFD700",
                margin: "0 0 8px",
              }}
            >
              YOUR STORY IS LIVE
            </p>
            <p style={{ color: "#888888", fontSize: "0.9rem", margin: 0, fontFamily: "var(--font-inter), Arial, sans-serif" }}>
              Copy the link below to share your chaos with the world. The link IS the story — no database needed.
            </p>
          </div>

          {/* URL box */}
          <div style={{ marginBottom: "28px" }}>
            <p
              style={{
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                color: "#888888",
                margin: "0 0 8px",
                textTransform: "uppercase",
              }}
            >
              Your Story URL
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                background: "#141414",
                border: "2px solid rgba(255,215,0,0.2)",
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  color: "#AAAAAA",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-inter), Arial, sans-serif",
                  wordBreak: "break-all",
                  lineHeight: 1.5,
                }}
              >
                {publishedUrl.split("#")[0]}
              </div>
              <button
                onClick={handleCopyLink}
                style={{
                  background: linkCopied ? "#333333" : "#FFD700",
                  color: linkCopied ? "#F0F0F0" : "#0A0A0A",
                  border: "none",
                  padding: "12px 20px",
                  fontFamily: "var(--font-bebas), Arial, sans-serif",
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s, color 0.2s",
                  flexShrink: 0,
                }}
              >
                {linkCopied ? "COPIED" : "COPY LINK"}
              </button>
            </div>
          </div>

          {/* Share buttons */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
            <a
              href={getTwitterShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#1DA1F2",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "12px 24px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                display: "inline-block",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1a8fd1")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1DA1F2")}
            >
              SHARE ON X
            </a>
            <button
              onClick={handleDiscard}
              style={{
                background: "transparent",
                color: "#FFD700",
                border: "2px solid rgba(255,215,0,0.4)",
                padding: "10px 24px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,215,0,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,215,0,0.4)")}
            >
              SUBMIT MORE DRAMA
            </button>
          </div>

          {/* Story preview */}
          <div style={{ borderTop: "2px solid rgba(255,215,0,0.1)", paddingTop: "40px" }}>
            <p
              style={{
                color: "#555555",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                margin: "0 0 16px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
              }}
            >
              What You Published
            </p>

            <div
              style={{
                background: "#FF3333",
                color: "#F0F0F0",
                fontSize: "0.75rem",
                fontWeight: 900,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "10px 16px",
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              THIS IS A WORK OF FICTION — AI-generated from an anonymous submission. All details are fictional.
            </div>

            <h2
              style={{
                fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                lineHeight: 1.05,
                color: "#FFD700",
                margin: "0 0 24px",
                letterSpacing: "0.02em",
              }}
            >
              {result.headline}
            </h2>
            <div
              style={{
                color: "#D0D0D0",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                marginBottom: "24px",
                fontFamily: "var(--font-inter), Arial, sans-serif",
              }}
            >
              {result.story.split("\n").map((para, i) =>
                para.trim() ? (
                  <p key={i} style={{ margin: "0 0 1.2em" }}>
                    {para}
                  </p>
                ) : null
              )}
            </div>
            <div style={{ borderLeft: "3px solid #FFD700", paddingLeft: "16px" }}>
              <p
                style={{
                  color: "#888888",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 6px",
                }}
              >
                Moral of the Story
              </p>
              <p
                style={{
                  color: "#D0D0D0",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: 0,
                  fontFamily: "var(--font-inter), Arial, sans-serif",
                }}
              >
                {result.moral}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
