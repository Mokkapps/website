require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config = require('./src/content/meta/config');

module.exports = {
  siteMetadata: {
    title: config.baseNameWithTitle,
    siteUrl: config.siteUrl,
    description: config.descriptionEn,
  },
  plugins: [
    `gatsby-transformer-json`,
    // Import files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stats`,
        path: `${__dirname}/data/stats/count_total.json`,
      },
    },
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
        name: `tips`,
        path: `${__dirname}/src/content/tips/`,
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
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
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
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
        },
      },
    },
    `gatsby-transformer-sharp`, // Needed for dynamic images
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
    {
      resolve: 'gatsby-source-revue',
      options: {
        token: process.env.REVUE_TOKEN,
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
                  title: 'optional',
                },
                info: {
                  classes: 'alert alert-info',
                  title: 'optional',
                },
                warning: {
                  classes: 'alert alert-warning',
                  title: 'optional',
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
              showCaptions: true,
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
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: 'bash' },
              // Use HTML for Vue until it is supported: https://github.com/PrismJS/prism/issues/2547
              languageExtensions: [
                {
                  language: 'vue',
                  extend: 'html',
                  definition: {
                    vue_types: /(Vue)/,
                  },
                },
              ],
            },
          },
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
        dsn: process.env.SENTRY,
        environment: process.env.NODE_ENV,
        enabled: process.env.NODE_ENV === 'production',
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
                  guid:
                    site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  limit: 5,
                  sort: { order: DESC, fields: [fields___prefix] },
                  filter: { fields: { source: {eq: "posts"}, slug: { ne: null } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                        prefix
                      }
                      frontmatter {
                        title
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
