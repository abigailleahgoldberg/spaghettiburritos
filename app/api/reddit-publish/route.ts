import { NextResponse } from 'next/server';
import type { RedditPost } from '../reddit-harvest/route';

const PUBLISH_SECRET = process.env.PUBLISH_SECRET || 'spaghetti-drama-2024';

export async function POST(req: Request) {
  try {
    // Protected: require secret header
    const secret = req.headers.get('x-publish-secret');
    if (secret !== PUBLISH_SECRET) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://spaghettiburritos.com';

    // Step 1: Fetch top Reddit posts
    const harvestRes = await fetch(`${baseUrl}/api/reddit-harvest`);
    if (!harvestRes.ok) {
      return NextResponse.json({ error: 'Harvest failed.' }, { status: 500 });
    }
    const harvestData = await harvestRes.json();
    const posts: RedditPost[] = harvestData.posts ?? [];

    if (posts.length === 0) {
      return NextResponse.json({ error: 'No posts found.' }, { status: 404 });
    }

    // Step 2: Pick the best one (highest engagement + longest text)
    const best = posts.reduce((winner: RedditPost, current: RedditPost) => {
      const winnerScore = winner.ups + winner.selftext.length * 0.1;
      const currentScore = current.ups + current.selftext.length * 0.1;
      return currentScore > winnerScore ? current : winner;
    });

    // Step 3: Generate fictional story
    const genRes = await fetch(`${baseUrl}/api/drama/reddit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        redditText: best.selftext,
        subreddit: best.subreddit,
        characterName: 'Alex',
      }),
    });

    if (!genRes.ok) {
      return NextResponse.json({ error: 'Generation failed.' }, { status: 500 });
    }

    const story = await genRes.json();

    return NextResponse.json({
      success: true,
      story: {
        slug: story.slug,
        headline: story.headline,
        story: story.story,
        moral: story.moral,
        subreddit: best.subreddit,
        redditUrl: best.permalink,
        date: new Date().toISOString().slice(0, 10),
        characterName: 'Alex',
        category: subredditToCategory(best.subreddit),
      },
      source: {
        subreddit: best.subreddit,
        redditUrl: best.permalink,
        ups: best.ups,
        title: best.title,
      },
    });
  } catch (err) {
    console.error('Publish error:', err);
    return NextResponse.json({ error: 'Publish pipeline failed.' }, { status: 500 });
  }
}

function subredditToCategory(subreddit: string): string {
  const map: Record<string, string> = {
    AmItheAsshole: 'Moral Dilemma',
    tifu: 'Epic Fail',
    relationship_advice: 'Relationship Chaos',
    pettyrevenge: 'Petty Revenge',
    maliciouscompliance: 'Malicious Compliance',
    neighborsfromhell: 'Neighbor Drama',
  };
  return map[subreddit] ?? 'Internet Drama';
}
