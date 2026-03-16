import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Spaghetti Burritos',
  description: 'This is a real disclaimer for a website that is not real. Or is it?',
};

export default function DisclaimerPage() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <div style={{
        background: '#141414',
        borderBottom: '3px solid rgba(255,215,0,0.15)',
        padding: '40px 24px 32px',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: '3rem',
            letterSpacing: '0.05em',
            color: '#F0F0F0',
            margin: 0,
          }}>
            DISCLAIMER<br /><span style={{ color: '#FFD700' }}>(yes, a real one)</span>
          </h1>
          <p style={{ color: '#888888', fontSize: '0.85rem', margin: '12px 0 0' }}>
            Last updated: March 2026 — please stop asking
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '740px', margin: '0 auto', padding: '60px 24px 80px', color: '#F0F0F0' }}>

        <div style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '4px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>
            Seriously though — this is a legally required disclaimer and you should read it, even if the site is absurd.
          </p>
        </div>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFD700', marginBottom: '1rem', borderBottom: '1px solid rgba(255,215,0,0.15)', paddingBottom: '0.5rem' }}>
            Satire &amp; Entertainment Disclaimer
          </h2>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC' }}>
            This website contains satire, humor, exaggeration, and entertainment content. Articles may be fictional, parodic, or deliberately absurd. Any resemblance to actual events, real people, or functioning food combinations is either coincidental or deeply unfortunate.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFD700', marginBottom: '1rem', borderBottom: '1px solid rgba(255,215,0,0.15)', paddingBottom: '0.5rem' }}>
            Not Factual News
          </h2>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC' }}>
            Do not rely on content from Spaghetti Burritos for factual news reporting. If you have cited this website in a school report, a legal document, or a congressional hearing, we are truly sorry and also impressed.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFD700', marginBottom: '1rem', borderBottom: '1px solid rgba(255,215,0,0.15)', paddingBottom: '0.5rem' }}>
            AI-Generated Content
          </h2>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC' }}>
            Some content on this website may be created or assisted by artificial intelligence tools. This may explain certain creative choices. Or it may not. AI is weird and so is this website.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFD700', marginBottom: '1rem', borderBottom: '1px solid rgba(255,215,0,0.15)', paddingBottom: '0.5rem' }}>
            External Links
          </h2>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC' }}>
            We may link to external websites. We are not responsible for their content, accuracy, or general vibes. Do not blame us if those sites are also weird.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFD700', marginBottom: '1rem', borderBottom: '1px solid rgba(255,215,0,0.15)', paddingBottom: '0.5rem' }}>
            Contact
          </h2>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC' }}>
            Serious legal concerns:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#FFD700' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
