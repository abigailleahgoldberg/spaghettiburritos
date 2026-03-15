import { NextResponse } from 'next/server';

const SUBREDDITS = [
  'AmItheAsshole',
  'tifu',
  'relationship_advice',
  'pettyrevenge',
  'maliciouscompliance',
  'neighborsfromhell',
];

export interface RedditPost {
  title: string;
  selftext: string;
  subreddit: string;
  permalink: string;
  author: string;
  ups: number;
  created_utc: number;
}

export async function GET() {
  try {
    const results: RedditPost[] = [];

    for (const subreddit of SUBREDDITS) {
      try {
        const url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=5`;
        const res = await fetch(url, {
          headers: {
            'User-Agent': 'SpaghettiBurritos/1.0 (fiction content aggregator)',
          },
          next: { revalidate: 3600 },
        });

        if (!res.ok) continue;

        const data = await res.json();
        const posts = data?.data?.children ?? [];

        for (const child of posts) {
          const post = child?.data;
          if (!post) continue;

          // Filter: 100+ upvotes, has text content, selftext > 200 chars
          if (
            post.ups >= 100 &&
            post.selftext &&
            post.selftext !== '[deleted]' &&
            post.selftext !== '[removed]' &&
            post.selftext.length > 200
          ) {
            results.push({
              title: post.title,
              selftext: post.selftext,
              subreddit: post.subreddit,
              permalink: `https://www.reddit.com${post.permalink}`,
              author: post.author,
              ups: post.ups,
              created_utc: post.created_utc,
            });
          }
        }
      } catch {
        // Skip failed subreddit, continue
        continue;
      }
    }

    // Sort by upvotes descending
    results.sort((a, b) => b.ups - a.ups);

    return NextResponse.json({ success: true, count: results.length, posts: results });
  } catch (err) {
    console.error('Reddit harvest error:', err);
    return NextResponse.json({ error: 'Harvest failed.' }, { status: 500 });
  }
}
