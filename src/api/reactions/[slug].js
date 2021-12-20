const { createClient } = require('@supabase/supabase-js');

async function incrementOrDecrement(supabase, type, slug, reaction) {
  if (type === 'increment') {
    await supabase.rpc(reaction.increment, {
      page_slug: slug,
    });
  } else if (type === 'decrement') {
    await supabase.rpc(reaction.decrement, {
      page_slug: slug,
    });
  }
}

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const slug = req.params.slug;

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const { reaction, type } = body;

    const rpcMap = {
      like_count: {
        increment: 'increment_like_count',
        decrement: 'decrement_like_count',
      },
      love_count: {
        increment: 'increment_love_count',
        decrement: 'decrement_love_count',
      },
      clap_count: {
        increment: 'increment_clap_count',
        decrement: 'decrement_clap_count',
      },
      party_count: {
        increment: 'increment_party_count',
        decrement: 'decrement_party_count',
      },
    };

    await incrementOrDecrement(supabase, type, slug, rpcMap[reaction]);

    return res.status(200).json({
      message: `Successfully performed reaction for: ${slug}`,
    });
  }

  if (req.method === 'GET') {
    const { data } = await supabase
      .from('content')
      .select('like_count, love_count, clap_count, party_count')
      .filter('slug', 'eq', slug);

    if (data) {
      return res.status(200).json({
        like_count: data[0]?.like_count || 0,
        love_count: data[0]?.love_count || 0,
        clap_count: data[0]?.clap_count || 0,
        party_count: data[0]?.party_count || 0,
      });
    }
  }

  return res.status(400).json({
    message: 'Unsupported Request',
  });
}
