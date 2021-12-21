import fetch from 'node-fetch';

export default async function handler(req, res) {
  const mokkappsTwitterId = 481186762;
  let followerCount = 0;

  let response = await fetch(
    `https://api.twitter.com/2/users/${mokkappsTwitterId}/followers?max_results=1000`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }
  );

  let data = await response.json();
  followerCount += data.meta?.result_count;

  while (data.meta?.next_token) {
    response = await fetch(
      `https://api.twitter.com/2/users/${mokkappsTwitterId}/followers?max_results=1000&pagination_token=${data.meta.next_token}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );
    data = await response.json();
    followerCount += data.meta?.result_count;
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=60'
  );

  return res.status(200).json({ followerCount });
}
