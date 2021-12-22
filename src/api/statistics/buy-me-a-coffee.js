import fetch from 'node-fetch';

export default async function handler(req, res) {
  const apiResponse = await fetch(
    `https://developers.buymeacoffee.com/api/v1/supporters`,
    {
      headers: {
        Authorization: `Bearer ${process.env.COFFEE_API_KEY}`,
      },
    }
  );

  const response = await apiResponse.json();

  const coffeeCount = response.data
    .map(supporter => supporter.support_coffees)
    .reduce((prev, current) => prev + current, 0);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    coffeeCount,
    supporters: response.data.map(supporter => ({
      name: supporter.supporter_name,
    })),
  });
}
