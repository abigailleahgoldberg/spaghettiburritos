import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Spaghetti Burritos',
  description: 'Terms of Service for Spaghetti Burritos.',
};

export default function TermsPage() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <section style={{
        background: '#141414',
        borderBottom: '3px solid rgba(255,215,0,0.15)',
        padding: '60px 24px 40px',
      }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            lineHeight: 0.95,
            margin: '0',
            color: '#F0F0F0',
          }}>
            TERMS OF<br /><span style={{ color: '#FF3333' }}>SERVICE</span>
          </h1>
          <p style={{ color: '#888888', fontSize: '0.85rem', margin: '12px 0 0' }}>
            Last updated: March 2026
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '740px', margin: '0 auto', padding: '60px 24px 80px', color: '#F0F0F0' }}>
        <div style={{ background: '#141414', border: '1px solid rgba(255,215,0,0.15)', padding: '24px', marginBottom: '32px' }}>
          <p style={{ lineHeight: 1.8, margin: 0, color: '#888888' }}>
            By accessing https://spaghettiburritos.com, you agree to these Terms of Service.
            Operated by The Voice of Cash Team.
          </p>
        </div>

        {[
          {
            title: '1. Use of the Site',
            content: 'Use the site for lawful purposes only. Do not attempt unauthorized access, transmit harmful content, or use automated tools to harvest data without permission.',
          },
          {
            title: '2. Intellectual Property',
            content: 'All content on this site is owned by Spaghetti Burritos / The Voice of Cash Team. You may not reproduce or distribute content without written permission.',
          },
          {
            title: '3. Disclaimer',
            content: 'Content on this site is opinion and commentary, not professional advice of any kind. We make no warranties about accuracy or completeness.',
          },
          {
            title: '4. Limitation of Liability',
            content: 'To the maximum extent permitted by law, we are not liable for any damages arising from your use of this site.',
          },
          {
            title: '5. Governing Law',
            content: 'These terms are governed by the laws of the State of Nevada.',
          },
          {
            title: '6. Changes',
            content: 'We may update these terms at any time. Continued use of the site constitutes acceptance of updated terms.',
          },
          {
            title: '7. Contact',
            content: null,
          },
        ].map(({ title, content }) => (
          <section key={title} style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
              fontSize: '1.5rem',
              letterSpacing: '0.05em',
              color: '#FF3333',
              margin: '0 0 12px',
              borderBottom: '1px solid rgba(255,215,0,0.15)',
              paddingBottom: '8px',
            }}>
              {title}
            </h2>
            {content ? (
              <p style={{ lineHeight: 1.8, color: '#888888', margin: 0 }}>{content}</p>
            ) : (
              <p style={{ lineHeight: 1.8, color: '#888888', margin: 0 }}>
                Questions about these terms:{' '}
                <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#FFD700' }}>thevoiceofcash@gmail.com</a>
              </p>
            )}
          </section>
        ))}

        <div style={{ borderTop: '1px solid rgba(255,215,0,0.15)', paddingTop: '24px' }}>
          <Link href="/" style={{ color: '#888888', textDecoration: 'none', fontSize: '0.85rem' }}>
            &larr; Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
