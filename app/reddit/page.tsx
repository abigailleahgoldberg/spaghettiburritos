import { Metadata } from 'next';
import Link from 'next/link';
import { redditStories } from '../data/reddit-stories';

export const metadata: Metadata = {
  title: 'Reddit-Inspired Fiction | Spaghetti Burritos',
  description: 'AI fiction inspired by Reddit drama. Real situations, completely fictional stories. All names changed, all details made up. Inspired by Reddit.',
  openGraph: {
    title: 'Fiction Inspired By The Internet\'s Finest Drama | Spaghetti Burritos',
    description: 'Real situations. Fictional stories. All names changed. All details made up.',
    type: 'website',
    siteName: 'Spaghetti Burritos',
    url: 'https://spaghettiburritos.com/reddit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reddit-Inspired Fiction | Spaghetti Burritos',
    description: 'AI fiction inspired by Reddit. Real drama, completely fictional stories.',
  },
  robots: { index: true, follow: true },
};

const CATEGORY_COLORS: Record<string, string> = {
  'Moral Dilemma': '#FF3333',
  'Epic Fail': '#FFD700',
  'Petty Revenge': '#FF3333',
  'Relationship Chaos': '#FFD700',
  'Malicious Compliance': '#FF3333',
  'Neighbor Drama': '#FFD700',
  'Internet Drama': '#FF3333',
};

function getCategoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] || '#FFD700';
}

export default function RedditPage() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>

      {/* FICTION DISCLAIMER BANNER */}
      <div style={{
        background: '#FF3333',
        padding: '14px 24px',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#FFFFFF',
          fontSize: '0.78rem',
          fontWeight: 900,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          margin: 0,
          fontFamily: 'var(--font-inter), Arial, sans-serif',
        }}>
          FICTION — All stories are AI-generated works of fiction. Not reproductions of real posts. All names, details, and events are invented.
        </p>
      </div>

      {/* HEADER */}
      <section style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '72px 24px 48px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          background: '#FFD700',
          color: '#0A0A0A',
          fontSize: '0.68rem',
          fontWeight: 900,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          padding: '4px 14px',
          marginBottom: '24px',
        }}>
          AI Fiction — Inspired By The Internet
        </div>

        <h1 style={{
          fontFamily: 'var(--font-bebas), "Arial Black", Arial, sans-serif',
          fontSize: 'clamp(3rem, 9vw, 7rem)',
          lineHeight: 0.95,
          letterSpacing: '0.02em',
          margin: '0 0 24px',
          color: '#F0F0F0',
        }}>
          FICTION INSPIRED BY<br />
          <span style={{ color: '#FFD700' }}>THE INTERNET&apos;S</span><br />
          <span style={{ color: '#FF3333' }}>FINEST DRAMA</span>
        </h1>

        <p style={{
          color: '#888888',
          fontSize: '1.1rem',
          maxWidth: '640px',
          margin: '0 auto 16px',
          lineHeight: 1.7,
          fontFamily: 'var(--font-inter), Arial, sans-serif',
        }}>
          Real situations. Fictional stories. All names changed. All details made up.
        </p>

        <p style={{
          color: '#555555',
          fontSize: '0.85rem',
          maxWidth: '640px',
          margin: '0 auto',
          lineHeight: 1.7,
          fontFamily: 'var(--font-inter), Arial, sans-serif',
        }}>
          Stories on this page are works of fiction created by AI. They are inspired by the general themes
          of public internet discussions but are not reproductions, summaries, or representations of any
          specific real post or person. All names, details, and events are fictional.
        </p>
      </section>

      {/* DIVIDER */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)',
        marginBottom: '48px',
      }} />

      {/* STORY GRID */}
      <section style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px 80px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {redditStories.map((story) => {
            const accentColor = getCategoryColor(story.category);
            return (
              <article
                key={story.slug}
                style={{
                  background: '#0F0F0F',
                  border: '1px solid rgba(255,215,0,0.1)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Category + subreddit */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{
                    background: accentColor,
                    color: '#0A0A0A',
                    fontSize: '0.62rem',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    fontFamily: 'var(--font-inter), Arial, sans-serif',
                  }}>
                    {story.category}
                  </span>
                  <a
                    href={story.redditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#555555',
                      fontSize: '0.72rem',
                      textDecoration: 'none',
                      letterSpacing: '0.04em',
                      fontFamily: 'var(--font-inter), Arial, sans-serif',
                      transition: 'color 0.2s',
                    }}
                  >
                    Inspired by r/{story.subreddit}
                  </a>
                </div>

                {/* Headline */}
                <h2 style={{
                  fontFamily: 'var(--font-bebas), "Arial Black", Arial, sans-serif',
                  fontSize: '1.5rem',
                  lineHeight: 1.1,
                  margin: 0,
                  letterSpacing: '0.02em',
                  color: '#F0F0F0',
                  flex: 1,
                }}>
                  {story.headline}
                </h2>

                {/* Story excerpt */}
                <p style={{
                  color: '#888888',
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
                }}>
                  {story.story.split('\n')[0].slice(0, 140)}...
                </p>

                {/* Date */}
                <p style={{
                  color: '#444444',
                  fontSize: '0.72rem',
                  margin: 0,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-bebas), Arial, sans-serif',
                }}>
                  {new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Read button */}
                <Link
                  href={`/reddit/${story.slug}`}
                  style={{
                    background: 'transparent',
                    border: `2px solid ${accentColor}`,
                    color: accentColor,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-bebas), Arial, sans-serif',
                    fontSize: '1rem',
                    letterSpacing: '0.1em',
                    padding: '10px 20px',
                    display: 'inline-block',
                    textAlign: 'center',
                    transition: 'background 0.2s, color 0.2s',
                    marginTop: 'auto',
                  }}
                >
                  READ THE FICTION
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* LEGAL DISCLAIMER */}
      <section style={{
        background: '#0F0F0F',
        borderTop: '1px solid rgba(255,215,0,0.08)',
        borderBottom: '1px solid rgba(255,215,0,0.08)',
        padding: '40px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <p style={{
            color: '#555555',
            fontSize: '0.8rem',
            lineHeight: 1.7,
            margin: 0,
            fontFamily: 'var(--font-inter), Arial, sans-serif',
          }}>
            Stories on this page are works of fiction created by AI. They are inspired by the general
            themes of public internet discussions but are not reproductions, summaries, or representations
            of any specific real post or person. All names, details, and events are fictional.
          </p>
        </div>
      </section>

      {/* SUBMIT DRAMA CTA */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        background: '#141414',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: '#FF3333',
            color: '#F0F0F0',
            fontSize: '0.7rem',
            fontWeight: 900,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '4px 14px',
            marginBottom: '20px',
            fontFamily: 'var(--font-inter), Arial, sans-serif',
          }}>
            Anonymous. AI-Powered. Completely Fictional.
          </div>
          <h2 style={{
            fontFamily: 'var(--font-bebas), "Arial Black", Arial, sans-serif',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 0.95,
            margin: '0 0 20px',
            color: '#F0F0F0',
            letterSpacing: '0.02em',
          }}>
            GOT YOUR OWN <span style={{ color: '#FFD700' }}>DRAMA?</span>
          </h2>
          <p style={{
            color: '#888888',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            marginBottom: '36px',
            fontFamily: 'var(--font-inter), Arial, sans-serif',
          }}>
            You don&apos;t need Reddit for this. Submit your mess anonymously and let our AI
            turn it into something beautiful and completely fictional.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/submit-drama" style={{
              background: '#FFD700',
              color: '#0A0A0A',
              textDecoration: 'none',
              fontFamily: 'var(--font-bebas), Arial, sans-serif',
              fontSize: '1.3rem',
              letterSpacing: '0.1em',
              padding: '16px 48px',
              display: 'inline-block',
            }}>
              SUBMIT YOUR DRAMA
            </Link>
            <Link href="/" style={{
              border: '2px solid rgba(255,215,0,0.4)',
              color: '#FFD700',
              textDecoration: 'none',
              fontFamily: 'var(--font-bebas), Arial, sans-serif',
              fontSize: '1.3rem',
              letterSpacing: '0.1em',
              padding: '14px 48px',
              display: 'inline-block',
            }}>
              BACK TO CHAOS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
