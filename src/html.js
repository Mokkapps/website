import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      // eslint-disable-next-line
      <html lang="en" {...this.props.htmlAttributes}>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function()
              {window.cookieconsent.initialise({
                palette: {
                  popup: {
                    background: '#000',
                  },
                  button: {
                    background: '#fc1a20',
                  },
                },
                theme: 'classic',
                content: {
                  href: 'https://www.mokkapps.de/privacy-policy',
                },
              })}
              );
            `,
          }}
        />
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="canonical" href="https://www.mokkapps.de" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Set to the same value as the web property used on the site
              var gaProperty = 'UA-93160141-1';

              // Disable tracking if the opt-out cookie exists.
              var disableStr = 'ga-disable-' + gaProperty;
              if (document.cookie.indexOf(disableStr + '=true') > -1) {
                window[disableStr] = true;
              }

              // Opt-out function
              function gaOptout() {
                document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
                window[disableStr] = true;
                console.log('Disabled google analytics for property', 'UA-93160141-1');
              }
            `,
          }}
        />
        <noscript>
          <p>
            I&#39;m sorry, but my website doesn&#39;t work properly without
            JavaScript enabled.
          </p>
        </noscript>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
