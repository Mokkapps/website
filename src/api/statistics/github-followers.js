import fetch from 'node-fetch';

export default async function handler(req, res) {
  const githubUsername = 'mokkapps';

  const userResponse = await fetch(
    `https://api.github.com/users/${githubUsername}`
  );

  const user = await userResponse.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    followers: user.followers,
  });
}
