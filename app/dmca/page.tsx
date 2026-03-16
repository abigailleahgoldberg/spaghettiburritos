import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy | Spaghetti Burritos',
  description: 'DMCA copyright policy for Spaghetti Burritos.',
};

export default function DmcaPage() {
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
            DMCA<br /><span style={{ color: '#FFD700' }}>POLICY</span>
          </h1>
          <p style={{ color: '#888888', fontSize: '0.85rem', margin: '12px 0 0' }}>
            Last updated: March 2026
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '740px', margin: '0 auto', padding: '60px 24px 80px', color: '#F0F0F0' }}>

        <div style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '4px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC', margin: 0 }}>
            Spaghetti Burritos respects intellectual property rights. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we respond promptly to valid claims of copyright infringement.
          </p>
        </div>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFD700', marginBottom: '1rem', borderBottom: '1px solid rgba(255,215,0,0.15)', paddingBottom: '0.5rem' }}>
            DMCA Agent
          </h2>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC' }}>
            <strong>Designated Agent:</strong> The Voice of Cash<br />
            <strong>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#FFD700' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFD700', marginBottom: '1rem', borderBottom: '1px solid rgba(255,215,0,0.15)', paddingBottom: '0.5rem' }}>
            Filing a DMCA Takedown Notice
          </h2>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC', marginBottom: '1rem' }}>
            To submit a valid DMCA notice, include:
          </p>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: 1.8, color: '#CCCCCC' }}>
            <li style={{ marginBottom: '0.75rem' }}>A physical or electronic signature of the copyright owner or authorized agent.</li>
            <li style={{ marginBottom: '0.75rem' }}>Identification of the copyrighted work claimed to have been infringed.</li>
            <li style={{ marginBottom: '0.75rem' }}>Identification of the infringing material with URL or sufficient detail.</li>
            <li style={{ marginBottom: '0.75rem' }}>Your contact information: name, address, telephone, and email.</li>
            <li style={{ marginBottom: '0.75rem' }}>A good faith belief statement that the use is not authorized.</li>
            <li style={{ marginBottom: '0.75rem' }}>A statement under penalty of perjury that the information is accurate and you are authorized to act.</li>
          </ol>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFD700', marginBottom: '1rem', borderBottom: '1px solid rgba(255,215,0,0.15)', paddingBottom: '0.5rem' }}>
            Counter-Notification
          </h2>
          <p style={{ lineHeight: 1.8, color: '#CCCCCC' }}>
            If you believe material was removed in error, submit a counter-notification with your signature, identification of the removed material, a statement under penalty of perjury that the removal was a mistake, and your contact information. We will restore the material within 10–14 business days absent a court action.
          </p>
        </section>
      </div>
    </div>
  );
}
