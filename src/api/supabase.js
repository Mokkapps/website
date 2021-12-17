const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  const slug = req.body.slug;
  let { data: selectData, error: selectError } = await supabase
    .from('page_views')
    .select('slug, views')
    .eq('slug', slug)
    .limit(1)
    .single();

  if (selectError) {
    console.error(selectError);
    res.status(500).json({ error: selectError });
    return;
  }

  console.log(`${selectData.views} page views for slug ${slug}`);

  // Insert a row
  const { data: updateData, error: updateError } = await supabase
    .from('page_views')
    .update({ slug, page_views: selectData.views + 1 });

  if (updateError) {
    console.error(updateError);
    res.status(500).json({ error: updateError });
    return;
  }

  res.status(200).json({ updateData });
}
