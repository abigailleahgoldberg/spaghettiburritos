import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { redditText, characterName, subreddit } = await req.json();

    if (!redditText || redditText.length < 50) {
      return NextResponse.json(
        { error: 'Need more text to work with.' },
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

    const prompt = `You are a comedic fiction writer for a tabloid website called Spaghetti Burritos.

Below is a real anonymous post from Reddit. Your job is to create a COMPLETELY FICTIONAL short story (400-600 words) INSPIRED BY the situation described. You must:

1. Change ALL names, locations, and identifying details
2. Exaggerate and fictionalize everything — make it absurd and funny
3. Keep the emotional core of the situation but make the details completely different
4. Add ridiculous fictional elements that clearly signal this is NOT the real story
5. The main character should be named "${mainChar}"

The Reddit post (for inspiration only — do NOT reproduce this text):
${redditText.slice(0, 3000)}

Write a fictional comedy piece with:
- A ridiculous clickbait headline
- A short story (400-600 words) that is CLEARLY fiction — not a retelling of the original post
- A comedic "moral of the story"

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
        headline: 'The Internet Drama Was Too Spicy For Our AI',
        story: content,
        moral: 'Some drama defies fictionalization.',
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
      subreddit: subreddit || null,
    });
  } catch (err) {
    console.error('Reddit drama engine error:', err);
    return NextResponse.json(
      { error: 'The drama machine broke. Try again.' },
      { status: 500 }
    );
  }
}
