import fetch from 'node-fetch';

const baseUrl = 'http://analytics.mokkapps.de';

export default async function handler(req, res) {
  const authResponse = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: process.env.ANALYTICS_USERNAME,
      password: process.env.ANALYTICS_PASSWORD,
    }),
  });

  if (!authResponse.ok) {
    return res.status(500).json({ error: 'Error retrieving auth token' });
  }

  const authJson = await authResponse.json();
  const authToken = authJson.token;

  const start_at = new Date('2019-01-01').getTime();
  const end_at = new Date().getTime();
  const result = await fetch(
    `${baseUrl}/api/website/1/stats?start_at=${start_at}&end_at=${end_at}`,
    {
      headers: {
        Cookie: `umami.auth=${authToken}`,
      },
    }
  );

  if (!result.ok) {
    return res.status(500).json({ error: 'Error retrieving total pageviews' });
  }

  const data = await result.json();
  const views = data.pageviews.value;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=60'
  );

  return res.status(200).json({ pageviews: views });
}
