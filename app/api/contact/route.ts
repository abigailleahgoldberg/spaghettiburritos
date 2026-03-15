import { NextResponse } from 'next/server';

const SITE_NAME = 'Spaghetti Burritos';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 });
    }

    const brevoKey = process.env.BREVO_API_KEY;
    if (!brevoKey) {
      console.error('BREVO_API_KEY not set');
      return NextResponse.json({ success: true }); // Graceful fallback
    }

    // Add contact to Brevo
    await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': brevoKey,
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name, SOURCE: SITE_NAME },
        listIds: [3],
        updateEnabled: true,
      }),
    });

    // Send notification email via Brevo
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': brevoKey,
      },
      body: JSON.stringify({
        sender: { name: SITE_NAME, email: 'abigailleahgoldberg@gmail.com' },
        to: [{ email: 'thevoiceofcash@gmail.com', name: 'The Voice of Cash' }],
        subject: `[${SITE_NAME}] New inquiry from ${name}`,
        htmlContent: `<h2>New Contact Form Submission</h2>
          <p><strong>Source:</strong> ${SITE_NAME}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p style="color:#888;font-size:12px;">Sent from ${SITE_NAME} contact form</p>`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
