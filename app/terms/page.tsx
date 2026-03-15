import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Spaghetti Burritos',
  description: 'Terms of Service for Spaghetti Burritos. Please read these terms carefully before using our website.',
};

export default function TermsPage() {
  return (
    <main style={{ background: '#0A0008', color: '#F5F0EB', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#EC4899', marginBottom: '0.5rem' }}>
          Terms of Service
        </h1>
        <p style={{ color: '#F5F0EB', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: '#140012', border: '1px solid #2a0025', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            Please read these Terms of Service carefully before using https://spaghettiburritos.com operated by The Voice of Cash (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using our service, you agree to be bound by these terms.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            By accessing and using https://spaghettiburritos.com, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            2. Description of Service
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Spaghetti Burritos provides online content, information, and services through our website. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time without notice.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            3. Intellectual Property
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            All content on https://spaghettiburritos.com, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of The Voice of Cash / Spaghetti Burritos and is protected by United States and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            4. User Responsibilities
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>By using our service, you agree to:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Use the website only for lawful purposes</li>
            <li style={{ marginBottom: '0.5rem' }}>Not attempt to gain unauthorized access to any part of the website</li>
            <li style={{ marginBottom: '0.5rem' }}>Not transmit any harmful, offensive, or disruptive content</li>
            <li style={{ marginBottom: '0.5rem' }}>Not use automated tools to scrape or harvest data without permission</li>
            <li style={{ marginBottom: '0.5rem' }}>Provide accurate information when using our contact forms or services</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            5. Limitation of Liability
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            To the fullest extent permitted by law, The Voice of Cash and Spaghetti Burritos shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or its content. Our total liability shall not exceed the amount paid by you, if any, for accessing our services.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            6. Indemnification
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            You agree to indemnify, defend, and hold harmless The Voice of Cash, Spaghetti Burritos, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising out of your use of the website or violation of these Terms of Service.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            7. Governing Law
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            These Terms of Service shall be governed by and construed in accordance with the laws of the State of Nevada, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Nevada.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            8. Changes to Terms
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the website after changes are posted constitutes your acceptance of the modified terms.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            9. Contact Us
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            For questions about these Terms of Service, contact us at:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#EC4899' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
