const { createClient } = require('@supabase/supabase-js');

async function incrementOrDecrement(
  supabase,
  type,
  slug,
  increment,
  decrement
) {
  if (type === 'increment') {
    await supabase.rpc(increment, {
      page_slug: slug,
    });
  } else if (type === 'decrement') {
    await supabase.rpc(decrement, {
      page_slug: slug,
    });
  }
}

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  const slug = req.params.slug;

  if (req.method === 'POST') {
    if (process.env.NODE_ENV === 'development') {
      return res.status(200).json({
        message: `Successfully performed reaction for: ${slug}`,
      });
    }

    const body = JSON.parse(req.body);
    const { type } = body;

    await incrementOrDecrement(
      supabase,
      type,
      slug,
      'increment_clap_count',
      'decrement_clap_count'
    );

    return res.status(200).json({
      message: `Successfully performed reaction for: ${slug}`,
    });
  }

  if (req.method === 'GET') {
    if (process.env.NODE_ENV === 'development') {
      return res.status(200).json({
        clap_count: 3456,
      });
    }

    const { data } = await supabase
      .from('content')
      .select('clap_count')
      .filter('slug', 'eq', slug);

    if (data) {
      return res.status(200).json({
        clap_count: data[0]?.clap_count || 0,
      });
    }
  }

  return res.status(400).json({
    message: 'Unsupported Request',
  });
}
