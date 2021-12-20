const { createClient } = require('@supabase/supabase-js');

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const slug = req.params.slug;

  if (req.method === 'POST') {
    if (process.env.NODE_ENV === 'development') {
      return res.status(200).json({
        message: `Successfully incremented page: ${slug}`,
      });
    }

    const { error } = await supabase.rpc('increment_page_view', {
      page_slug: slug,
    });

    if (error) {
      return res.status(500).send(error);
    }

    return res.status(200).json({
      message: `Successfully incremented page: ${slug}`,
    });
  }

  if (req.method === 'GET') {
    if (process.env.NODE_ENV === 'development') {
      return res.status(200).json({
        total: 22346,
      });
    }

    // Query the pages table in the database where slug equals the request params slug.
    const { data, error } = await supabase
      .from('content')
      .select('view_count')
      .filter('slug', 'eq', slug);

    if (error) {
      return res.status(500).send(error);
    }

    if (data) {
      return res.status(200).json({
        total: data[0]?.view_count || null,
      });
    }
  }

  return res.status(400).json({
    message: 'Unsupported Request',
  });
}
