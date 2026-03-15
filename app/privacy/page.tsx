import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Spaghetti Burritos',
  description: 'Privacy Policy for Spaghetti Burritos. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main style={{ background: '#0A0008', color: '#F5F0EB', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#EC4899', marginBottom: '0.5rem' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#F5F0EB', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: '#140012', border: '1px solid #2a0025', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            Spaghetti Burritos (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates https://spaghettiburritos.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            1. Information We Collect
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>We collect information you voluntarily provide:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Email addresses</strong> — when you subscribe to our newsletter or sign up for updates</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Contact form submissions</strong> — name, email, and message when you contact us</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Usage data</strong> — pages visited, time spent, browser type, IP address (anonymized)</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Cookies</strong> — small files stored on your device to improve your experience</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            2. How We Use Your Information
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>To respond to your inquiries and provide customer support</li>
            <li style={{ marginBottom: '0.5rem' }}>To send newsletters and updates you have subscribed to</li>
            <li style={{ marginBottom: '0.5rem' }}>To improve and personalize your experience on our website</li>
            <li style={{ marginBottom: '0.5rem' }}>To analyze usage patterns and optimize our content</li>
            <li style={{ marginBottom: '0.5rem' }}>To comply with legal obligations</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            3. Third-Party Services
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>We use the following third-party services that may collect or process your data:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Vercel</strong> — website hosting and infrastructure (<a href="https://vercel.com/legal/privacy-policy" style={{ color: '#EC4899' }}>Privacy Policy</a>)</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Brevo (Sendinblue)</strong> — email marketing and newsletter management (<a href="https://www.brevo.com/legal/privacypolicy/" style={{ color: '#EC4899' }}>Privacy Policy</a>)</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Stripe</strong> — payment processing where applicable (<a href="https://stripe.com/privacy" style={{ color: '#EC4899' }}>Privacy Policy</a>)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            4. Cookies
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            We use cookies to enhance your browsing experience. These include essential cookies required for the site to function, analytics cookies to understand how visitors use our site, and preference cookies to remember your settings. You may disable cookies in your browser settings, though this may affect site functionality.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            5. Data Retention
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Newsletter subscriber data is retained until you unsubscribe. Contact form submissions are retained for up to 2 years.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            6. Your GDPR Rights
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>If you are located in the European Economic Area, you have the following rights:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Right of Access</strong> — request a copy of your personal data</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Right to Rectification</strong> — request correction of inaccurate data</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Right to Erasure</strong> — request deletion of your personal data</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Right to Portability</strong> — receive your data in a structured, machine-readable format</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Right to Object</strong> — object to processing of your personal data</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            7. Your CCPA Rights
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>If you are a California resident, you have the right to:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Right to Know</strong> — know what personal information we collect, use, and disclose</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Right to Delete</strong> — request deletion of your personal information</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Right to Opt-Out</strong> — opt out of the sale of your personal information (we do not sell personal information)</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Right to Non-Discrimination</strong> — equal service regardless of privacy choices</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#EC4899', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #2a0025' }}>
            8. Contact Us
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            To exercise your rights or for privacy-related questions, contact us at:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#EC4899' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
