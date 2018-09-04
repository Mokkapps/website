import { injectGlobal } from 'emotion';

import '@react-website-themes/default/styles/variables';

export const MokkappsRed = '#FC1A20';
export const MokkappsBlack = 'black';
export const MokkappsGray = '#424242';

/* ovveride/add new variables*/
injectGlobal`
  :root {
    --textColor: #555;
    --lightTextColor: #888;
    --superLightTextColor: #aaa;
    --fontFamily: "Bitter", sans-serif;
    --linkColor: ${MokkappsRed};
    --hoverLinkColor: #b21117;
    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 10px;
  }
`;
