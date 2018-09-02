import { injectGlobal } from 'emotion';

import '@react-website-themes/default/styles/global';

/* override/add new variables*/
injectGlobal`
  html {
    box-sizing: border-box;
    font-family: var(--fontFamily);
    font-size: 16px;
    color: black;
    background: #424242;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  p {
    color: var(--lightTextColor);
  }

  h1 {
    font-size: 2.4em;
  }

  h2 {
    font-size: 1.8em;
  }

  h3 {
      color: black;
  }

  ul {
    list-style-position: inside;
  }

  a {
    color: var(--linkColor);
    transition: .3s;
    text-decoration: none;
  }

  a:hover {
    color: var(--linkColor);
    text-decoration: underline;
  }

  *::-webkit-scrollbar {
    width: var(--scrollBarWidth);
  }
  *::-webkit-scrollbar-track {
    background: var(--scrollBarTrack);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--scrollBarThumb);
  }

`;
