import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Spaghetti Burritos',
  description: 'Privacy Policy for Spaghetti Burritos.',
};

export default function PrivacyPage() {
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
            PRIVACY<br /><span style={{ color: '#FFD700' }}>POLICY</span>
          </h1>
          <p style={{ color: '#888888', fontSize: '0.85rem', margin: '12px 0 0' }}>
            Last updated: March 2026
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '740px', margin: '0 auto', padding: '60px 24px 80px', color: '#F0F0F0' }}>
        <div style={{ background: '#141414', border: '1px solid rgba(255,215,0,0.15)', padding: '24px', marginBottom: '32px' }}>
          <p style={{ lineHeight: 1.8, margin: 0, color: '#888888' }}>
            Spaghetti Burritos operates https://spaghettiburritos.com. This Privacy Policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {[
          {
            title: '1. Information We Collect',
            content: (
              <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, color: '#888888' }}>
                <li><strong style={{ color: '#F0F0F0' }}>Email addresses</strong> — newsletter signups and contact forms</li>
                <li><strong style={{ color: '#F0F0F0' }}>Contact form data</strong> — name, email, message</li>
                <li><strong style={{ color: '#F0F0F0' }}>Usage data</strong> — pages visited, browser type (anonymized)</li>
              </ul>
            ),
          },
          {
            title: '2. How We Use It',
            content: (
              <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, color: '#888888' }}>
                <li>Respond to inquiries</li>
                <li>Send newsletters you subscribed to</li>
                <li>Analyze usage to improve the site</li>
                <li>Comply with legal requirements</li>
              </ul>
            ),
          },
          {
            title: '3. Third-Party Services',
            content: (
              <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, color: '#888888' }}>
                <li><strong style={{ color: '#F0F0F0' }}>Vercel</strong> — hosting</li>
                <li><strong style={{ color: '#F0F0F0' }}>Brevo</strong> — email/newsletter</li>
              </ul>
            ),
          },
          {
            title: '4. Your Rights (GDPR/CCPA)',
            content: (
              <p style={{ lineHeight: 1.8, color: '#888888', margin: 0 }}>
                You have rights to access, correct, delete, and port your data. To exercise any of them, email{' '}
                <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#FFD700' }}>thevoiceofcash@gmail.com</a>.
                We do not sell personal information.
              </p>
            ),
          },
          {
            title: '5. Contact',
            content: (
              <p style={{ lineHeight: 1.8, color: '#888888', margin: 0 }}>
                Privacy questions:{' '}
                <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#FFD700' }}>thevoiceofcash@gmail.com</a>
              </p>
            ),
          },
        ].map(({ title, content }) => (
          <section key={title} style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
              fontSize: '1.5rem',
              letterSpacing: '0.05em',
              color: '#FFD700',
              margin: '0 0 12px',
              borderBottom: '1px solid rgba(255,215,0,0.15)',
              paddingBottom: '8px',
            }}>
              {title}
            </h2>
            {content}
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
