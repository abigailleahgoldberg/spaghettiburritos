"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        background: "#0A0A0A",
        borderBottom: "3px solid #FFD700",
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
          fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
          fontSize: "1.8rem",
          letterSpacing: "0.05em",
          color: "#F0F0F0",
        }}>
          <span style={{ color: "#FFD700" }}>SPAGHETTI</span>
          {" "}
          <span style={{ color: "#FF3333" }}>BURRITOS</span>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav-links" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <Link href="/#hot-takes" style={{
            color: "#F0F0F0",
            textDecoration: "none",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#FFD700")}
          onMouseLeave={e => (e.currentTarget.style.color = "#F0F0F0")}
          >
            HOT TAKES
          </Link>
          <Link href="/blog" style={{
            color: "#F0F0F0",
            textDecoration: "none",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#FFD700")}
          onMouseLeave={e => (e.currentTarget.style.color = "#F0F0F0")}
          >
            BLOG
          </Link>
          <Link href="/about" style={{
            color: "#F0F0F0",
            textDecoration: "none",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#FFD700")}
          onMouseLeave={e => (e.currentTarget.style.color = "#F0F0F0")}
          >
            ABOUT
          </Link>
          <Link href="/submit-drama" style={{
            background: "#FFD700",
            color: "#0A0A0A",
            textDecoration: "none",
            fontFamily: "var(--font-bebas), Arial, sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            padding: "8px 20px",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#FFC200")}
          onMouseLeave={e => (e.currentTarget.style.background = "#FFD700")}
          >
            SUBMIT DRAMA
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile nav dropdown */}
      <div className={`mobile-nav${open ? " open" : ""}`}>
        <Link href="/#hot-takes" style={{
          color: "#F0F0F0",
          textDecoration: "none",
          fontFamily: "var(--font-bebas), Arial, sans-serif",
          fontSize: "1.5rem",
          letterSpacing: "0.1em",
        }} onClick={() => setOpen(false)}>
          HOT TAKES
        </Link>
        <Link href="/blog" style={{
          color: "#F0F0F0",
          textDecoration: "none",
          fontFamily: "var(--font-bebas), Arial, sans-serif",
          fontSize: "1.5rem",
          letterSpacing: "0.1em",
        }} onClick={() => setOpen(false)}>
          BLOG
        </Link>
        <Link href="/about" style={{
          color: "#F0F0F0",
          textDecoration: "none",
          fontFamily: "var(--font-bebas), Arial, sans-serif",
          fontSize: "1.5rem",
          letterSpacing: "0.1em",
        }} onClick={() => setOpen(false)}>
          ABOUT
        </Link>
        <Link href="/submit-drama" style={{
          background: "#FFD700",
          color: "#0A0A0A",
          textDecoration: "none",
          fontFamily: "var(--font-bebas), Arial, sans-serif",
          fontSize: "1.5rem",
          letterSpacing: "0.1em",
          padding: "8px 20px",
          display: "inline-block",
          textAlign: "center",
        }} onClick={() => setOpen(false)}>
          SUBMIT DRAMA
        </Link>
      </div>
    </>
  );
}
