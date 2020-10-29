import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      // eslint-disable-next-line
      <html lang="en" {...this.props.htmlAttributes}>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
          async
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
          async
        />
        <script
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
          data-cfasync="false"
          async
        />
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
          {process.env.NODE_ENV === 'production' && (
            <script
              async
              defer
              data-website-id="edf6a782-7c23-4db8-b386-622502f7295a"
              src="https://mokkapps-analytics.vercel.app/umami.js"
            ></script>
          )}
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
