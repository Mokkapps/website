const { createClient } = require('@supabase/supabase-js');

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  let clapCount = 0;

  const { data } = await supabase.from('content').select('clap_count');

  data.forEach(item => {
    clapCount += item.clap_count;
  });

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=60'
  );

  return res.status(200).json({
    totalReactions: clapCount,
  });
}
