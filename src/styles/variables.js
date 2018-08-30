import { injectGlobal } from 'emotion';

import '@react-website-themes/default/styles/variables';

/* ovveride/add new variables*/
injectGlobal`
  :root {
    --textColor: #555;
    --lightTextColor: #888;
    --superLightTextColor: #aaa;
    --fontFamily: "Bitter", sans-serif;
    --linkColor: #FC1A20;
    --hoverLinkColor: #b21117;
    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 10px;
  }
`;

