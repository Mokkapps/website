import fetch from 'node-fetch';

export default async function handler(req, res) {
  const repoName = 'website';
  const ownerName = 'mokkapps';

  const userResponse = await fetch(
    `https://api.github.com/repos/${ownerName}/${repoName}`
  );

  const response = await userResponse.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    forks: response.forks_count,
    stars: response.stargazers_count,
  });
}
