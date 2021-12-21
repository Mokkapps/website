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

  const now = new Date();
  const startDate = new Date();
  startDate.setMonth(now.getMonth() - 1)

  const endAt = now.getTime();
  const startAt = startDate.getTime();
  const result = await fetch(
    `${baseUrl}/api/website/1/metrics?start_at=${startAt}&end_at=${endAt}&type=url`,
    {
      headers: {
        Cookie: `umami.auth=${authToken}`,
      },
    }
  );

  if (!result.ok) {
    return res.status(500).json({ error: 'Error retrieving most view pages' });
  }

  const data = await result.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=60'
  );

  return res.status(200).json({ metrics: data });
}
