import { injectGlobal } from 'emotion';

import '@react-website-themes/default/styles/global';

/* ovveride/add new variables*/
injectGlobal`
  html {
    box-sizing: border-box;
    font-family: var(--fontFamily);
    font-size: 16px;
    color: white;

    background-color: #333333;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23424242' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");

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
      color: white;
  }

  ul {
    list-style-position: inside;
  }

  a {
    color: var(--linkColor);
    transition: .3s;
    text-decoration: underline;
  }

  @media (hover: hover)  {
    a:hover {
      color: var(--hoverLinkColor);
    }
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
