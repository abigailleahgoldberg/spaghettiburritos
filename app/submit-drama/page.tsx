"use client";

import { useState } from "react";
import Link from "next/link";

interface StoryResult {
  slug: string;
  headline: string;
  story: string;
  moral: string;
}

export default function SubmitDramaPage() {
  const [drama, setDrama] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState<StoryResult | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/drama", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ drama, characterName }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Try again.");
        setStatus("error");
        return;
      }

      setResult(data);
      setStatus("done");
    } catch {
      setErrorMsg("The drama machine broke. Try again.");
      setStatus("error");
    }
  }

  function handleReset() {
    setDrama("");
    setCharacterName("");
    setStatus("idle");
    setErrorMsg("");
    setResult(null);
    setCopied(false);
  }

  async function handleCopy() {
    if (!result) return;
    const text = `${result.headline}\n\n${result.story}\n\nMoral of the Story: ${result.moral}\n\nGenerated at spaghettiburritos.com/submit-drama`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
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
          <p
            style={{
              color: "#888888",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Drop the tea anonymously. Our AI turns your mess into a masterpiece.
          </p>
        </div>
      </section>

      {status === "done" && result ? (
        /* RESULT STATE */
        <section style={{ maxWidth: "740px", margin: "0 auto", padding: "48px 24px 80px" }}>
          {/* Disclaimer banner */}
          <div
            style={{
              background: "#FF3333",
              color: "#F0F0F0",
              fontSize: "0.75rem",
              fontWeight: 900,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "10px 20px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            FICTION — AI-GENERATED — NOT REAL — PROBABLY
          </div>

          {/* Generated headline */}
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
              whiteSpace: "pre-wrap",
            }}
          >
            {result.story}
          </div>

          {/* Moral */}
          <div
            style={{
              borderLeft: "3px solid #FFD700",
              paddingLeft: "20px",
              marginBottom: "48px",
            }}
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
              }}
            >
              {result.moral}
            </p>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={handleCopy}
              style={{
                background: copied ? "#333333" : "#FFD700",
                color: copied ? "#F0F0F0" : "#0A0A0A",
                border: "none",
                padding: "14px 32px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {copied ? "COPIED" : "COPY STORY"}
            </button>
            <button
              onClick={handleReset}
              style={{
                background: "transparent",
                color: "#FFD700",
                border: "2px solid rgba(255,215,0,0.4)",
                padding: "12px 32px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              SUBMIT ANOTHER
            </button>
          </div>
        </section>
      ) : (
        /* FORM STATE */
        <section style={{ maxWidth: "740px", margin: "0 auto", padding: "48px 24px 80px" }}>
          <form onSubmit={handleSubmit}>
            {/* Drama textarea */}
            <div style={{ marginBottom: "28px" }}>
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
              <p style={{ color: "#555555", fontSize: "0.75rem", margin: "6px 0 0", textAlign: "right" }}>
                {drama.length} / 5000
              </p>
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

            {/* Error message */}
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
                {errorMsg}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                background: status === "loading" ? "#555555" : "#FFD700",
                color: "#0A0A0A",
                border: "none",
                padding: "18px 48px",
                fontFamily: "var(--font-bebas), Arial, sans-serif",
                fontSize: "1.3rem",
                letterSpacing: "0.12em",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                width: "100%",
                transition: "background 0.2s",
                marginBottom: "24px",
              }}
            >
              {status === "loading" ? "GENERATING YOUR MASTERPIECE..." : "PUBLISH THIS CHAOS"}
            </button>

            {/* Disclaimer */}
            <p
              style={{
                color: "#555555",
                fontSize: "0.78rem",
                lineHeight: 1.7,
                margin: 0,
                textAlign: "center",
              }}
            >
              All submissions are anonymous. Stories generated are works of FICTION created by AI.
              Any resemblance to actual persons, living or dead, is purely coincidental and frankly impressive.
              By submitting, you agree to our{" "}
              <Link href="/terms" style={{ color: "#888888", textDecoration: "underline" }}>
                Terms of Service
              </Link>
              .
            </p>
          </form>
        </section>
      )}
    </div>
  );
}
