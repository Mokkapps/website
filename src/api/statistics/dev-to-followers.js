import fetch from 'node-fetch';

export default async function handler(req, res) {
  const perPage = 1000;
  let followerCount = 0;
  let page = 1;

  let response = await fetch(
    `https://dev.to/api/followers/users?per_page=${perPage}&page=${page}`,
    {
      headers: {
        'api-key': process.env.DEV_TO_API_KEY,
      },
    }
  );

  let data = await response.json();
  followerCount += data.length;

  while (data.length > 0) {
    page += 1;
    response = await fetch(
      `https://dev.to/api/followers/users?per_page=${perPage}&page=${page}`,
      {
        headers: {
          'api-key': process.env.DEV_TO_API_KEY,
        },
      }
    );
    data = await response.json();
    followerCount += data.length;
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=60'
  );

  return res.status(200).json({ followerCount });
}
