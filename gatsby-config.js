require('dotenv').config();
const config = require('./src/content/meta/config');

module.exports = {
  siteMetadata: {
    title: config.baseName,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
  },
  plugins: [
    // Import files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `parts`,
        path: `${__dirname}/src/content/parts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // PWA support
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Mokkapps Website',
        short_name: 'Mokkapps',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#fc1a20',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, // needs to be after the manifest plugin
    `gatsby-plugin-preact`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    `gatsby-plugin-resolve-src`, // resolve imports from src subdir
    `gatsby-plugin-catch-links`, // intercept markdown links
    // Following two are necessary for gatsby-image
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://mokkapps.com',
          'https://mokkapps.de',
          'https://mokkapps.dev',
        ],
      },
    },
    // Parse Markdown files
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: {
                  classes: 'alert alert-danger',
                },
                info: {
                  classes: 'alert alert-info',
                },
                warning: {
                  classes: 'alert alert-warning',
                },
              },
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: 'emoji-icon',
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    // Add SEO attributes
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: config.siteUrl,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.GATSBY_SENTRY_DNS_URL,
        config: {
          environment: 'production',
        },
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        // Class prefix for <pre> tags containing syntax highlighting;
        // defaults to 'language-' (eg <pre class="language-js">).
        // If your site loads Prism into the browser at runtime,
        // (eg for use with libraries like react-live),
        // you may use this to prevent Prism from re-processing syntax.
        // This is an uncommon use-case though;
        // If you're unsure, it's best to use the default value.
        classPrefix: 'language-',
        // This is used to allow setting a language for inline code
        // (i.e. single backticks) by creating a separator.
        // This separator is a string and will do no white-space
        // stripping.
        // A suggested value for English speakers is the non-ascii
        // character '›'.
        inlineCodeMarker: null,
        // This lets you set up language aliases.  For example,
        // setting this to '{ sh: "bash" }' will let you use
        // the language "sh" which will highlight using the
        // bash highlighter.
        aliases: { sh: 'bash' },
        // This toggles the display of line numbers alongside the code.
        // To use it, add the following line in src/layouts/index.js
        // right after importing the prism color scheme:
        //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
        // Defaults to false.
        showLineNumbers: false,
      },
    },
    // Create an RSS feed
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + "/blog" + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            title: "Michael Hoffmann's (Mokkapps) RSS Feed",
            output: '/rss.xml',
          },
        ],
      },
    },
  ],
};
