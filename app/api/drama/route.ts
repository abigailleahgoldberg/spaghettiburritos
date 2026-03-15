import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { drama, characterName } = await req.json();

    if (!drama || drama.length < 20) {
      return NextResponse.json(
        { error: 'Give us more drama than that. Minimum 20 characters.' },
        { status: 400 }
      );
    }

    if (drama.length > 5000) {
      return NextResponse.json(
        { error: 'That is TOO much drama. Keep it under 5000 characters.' },
        { status: 400 }
      );
    }

    const openaiKey = process.env.OPENAI_API_KEY;
    if (!openaiKey) {
      return NextResponse.json(
        { error: 'Story engine is warming up. Try again later.' },
        { status: 503 }
      );
    }

    const mainChar = characterName?.trim() || 'Alex';

    const prompt = `You are a comedic fiction writer for a tabloid website called Spaghetti Burritos. Someone anonymously submitted the following drama. Turn it into a SHORT, hilarious fictional story (400-600 words). Make it absurd, over-the-top, and genuinely funny. Change all details enough that it is clearly fiction. The main character should be named "${mainChar}".

IMPORTANT: This MUST be clearly fictional. Exaggerate everything. Add ridiculous details. Make it obviously a comedy piece, not a report of real events.

The anonymous submission:
${drama}

Write the story with:
- A ridiculous clickbait headline
- A short story (400-600 words)
- A comedic "moral of the story" at the end

Format as JSON: {"headline": "...", "story": "...", "moral": "..."}`;

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + openaiKey,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.9,
        max_tokens: 1500,
      }),
    });

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || '';

    let parsed: { headline: string; story: string; moral: string };
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
    } catch {
      parsed = {
        headline: 'The Drama Was Too Hot For Our AI To Handle',
        story: content,
        moral: 'Some drama writes itself.',
      };
    }

    const slug =
      parsed.headline
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 60) +
      '-' +
      Date.now().toString(36);

    return NextResponse.json({
      success: true,
      slug,
      headline: parsed.headline,
      story: parsed.story,
      moral: parsed.moral,
    });
  } catch (err) {
    console.error('Drama engine error:', err);
    return NextResponse.json(
      { error: 'The drama machine broke. Try again.' },
      { status: 500 }
    );
  }
}
