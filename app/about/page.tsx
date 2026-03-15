import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Spaghetti Burritos",
  description: "What is Spaghetti Burritos and why does it exist. The honest answer and the slightly less honest answer.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{
        background: "#141414",
        borderBottom: "3px solid rgba(255,215,0,0.15)",
        padding: "60px 24px 48px",
      }}>
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
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
            An Explanation Nobody Asked For
          </div>
          <h1 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            margin: "0",
            color: "#F0F0F0",
          }}>
            ABOUT THIS<br />
            <span style={{ color: "#FFD700" }}>MESS</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "740px", margin: "0 auto", padding: "60px 24px 80px" }}>
        <p style={{
          fontSize: "1.15rem",
          lineHeight: 1.8,
          color: "#F0F0F0",
          opacity: 0.9,
          marginBottom: "28px",
        }}>
          Spaghetti Burritos is a website where people write opinions about things. That&apos;s it.
          Not journalism. Not analysis. Takes. Strong ones. Sometimes well-researched ones.
          Always delivered without the pretense that we&apos;re doing something important.
        </p>

        <p style={{
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "#888888",
          marginBottom: "28px",
        }}>
          We cover internet culture, sports, food, streaming, pop culture, and whatever else
          is generating enough discourse in the group chat to constitute a take worth writing down.
          The goal is to be the thing you send someone when you want to say &quot;yes, exactly, this.&quot;
        </p>

        <p style={{
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "#888888",
          marginBottom: "40px",
        }}>
          No ads. No sponsored content pretending not to be sponsored content. No hot take
          softened at the last second because somebody thought it might be too much.
          Just the takes, delivered at full volume.
        </p>

        <div style={{
          background: "#141414",
          borderLeft: "4px solid #FFD700",
          padding: "24px 28px",
          marginBottom: "40px",
        }}>
          <p style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "1.6rem",
            lineHeight: 1.2,
            margin: 0,
            color: "#FFD700",
            letterSpacing: "0.02em",
          }}>
            &quot;Nobody asked for this. You clicked anyway. We respect that.&quot;
          </p>
        </div>

        <h2 style={{
          fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
          fontSize: "2rem",
          letterSpacing: "0.05em",
          color: "#F0F0F0",
          marginBottom: "16px",
        }}>
          SEND TIPS
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#888888", marginBottom: "24px" }}>
          You have a take. You saw something. You have a bone to pick with the conventional wisdom
          about something minor that has been bothering you for months. Send it.
        </p>

        <a href="mailto:tips@spaghettiburritos.com" style={{
          display: "inline-block",
          background: "#FFD700",
          color: "#0A0A0A",
          textDecoration: "none",
          fontFamily: "var(--font-bebas), Arial, sans-serif",
          fontSize: "1.2rem",
          letterSpacing: "0.1em",
          padding: "14px 32px",
          marginBottom: "48px",
        }}>
          TIPS@SPAGHETTIBURRITOS.COM
        </a>

        <div style={{
          borderTop: "1px solid rgba(255,215,0,0.15)",
          paddingTop: "32px",
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
        }}>
          <Link href="/privacy" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem" }}>
            Terms of Service
          </Link>
          <Link href="/blog" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem" }}>
            Read The Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
