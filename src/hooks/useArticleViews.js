import { useEffect, useState } from 'react';

export default function useArticleView(slug) {
  const [pageViews, setPageViews] = useState();

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}views${slug}`, { method: 'POST' })
      .then(() => {
        fetch(`${process.env.GATSBY_API_URL}views${slug}`)
          .then(response =>
            response.json().then(json => {
              setPageViews(json.total);
            })
          )
          .catch(error =>
            console.log(`Failed to get page views for slug ${slug}`, error)
          );
      })
      .catch(error =>
        console.log(`Failed to set page views for slug ${slug}`, error)
      );
  }, [slug]);

  return { pageViews };
}
