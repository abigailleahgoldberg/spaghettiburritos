import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Spaghetti Burritos',
  description: 'You found the contact page. Bold move.',
};

export default function ContactPage() {
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
            CONTACT<br /><span style={{ color: '#FFD700' }}>US</span>
          </h1>
          <p style={{ color: '#888888', fontSize: '0.85rem', margin: '12px 0 0' }}>
            We exist. Occasionally we respond.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '740px', margin: '0 auto', padding: '60px 24px 80px', color: '#F0F0F0' }}>
        <div style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '4px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC', marginBottom: '1.5rem' }}>
            Got a hot tip? A complaint? A genuinely unhinged business proposal? We want to hear it.
          </p>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC' }}>
            <strong style={{ color: '#FFD700' }}>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#FFD700', textDecoration: 'none' }}>
              thevoiceofcash@gmail.com
            </a>
          </p>
        </div>

        <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFD700', marginBottom: '1rem' }}>
            Things We Can Actually Help With
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, color: '#CCCCCC' }}>
            <li style={{ marginBottom: '0.5rem' }}>Content tips or story ideas</li>
            <li style={{ marginBottom: '0.5rem' }}>Corrections (even satire has limits)</li>
            <li style={{ marginBottom: '0.5rem' }}>Advertising and partnerships</li>
            <li style={{ marginBottom: '0.5rem' }}>DMCA or copyright concerns</li>
            <li style={{ marginBottom: '0.5rem' }}>Existential questions about the nature of this website</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
