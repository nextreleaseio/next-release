require('dotenv').config({
    path: `.env`
});

const siteUrl = process.env.siteUrl || `https://www.nextrelease.io`;

module.exports = {
    siteMetadata: {
        title: `Next Release`,
        description: `Automatic Release Notes in 3 Steps`,
        author: `nextrelease.io`,
        siteUrl: siteUrl
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-postcss',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-twitter`,
        `gatsby-plugin-netlify`, // _redirects is defined in static dir
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: siteUrl,
                sitemap: siteUrl + '/sitemap.xml',
                policy: [
                    {
                        userAgent: '*',
                        disallow: ['https://auth.nextrelease.io/']
                    }
                ]
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                gfm: true,
                plugins: [
                    `gatsby-remark-prismjs`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 800
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'product'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'blog'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'hiring'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'kb'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                tailwind: true,
                purgeOnly: ['src/css/style.css'],
                purgeCSSOptions: {
                    safelist: ['mr-12', 'w-1/2']
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Next Release`,
                short_name: `Next Release`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#4dc0b5`,
                display: `minimal-ui`,
                icon: `static/favicon.png`
            }
        },
        {
            resolve: `gatsby-plugin-fullstory`,
            options: {
                fs_org: process.env.FULL_STORY_ORG
            }
        },
        {
            resolve: `gatsby-plugin-segment-js`,
            options: {
                prodKey: process.env.SEGMENT_PROD,
                devKey: process.env.SEGMENT_DEV,
                trackPage: true
            }
        },
        {
            resolve: `gatsby-plugin-intercom`,
            options: {
                appId: process.env.INTERCOM_APP_ID
            }
        },
        {
            resolve: `gatsby-plugin-statickit`,
            options: {
                siteId: process.env.STATICKIT_SITE_ID
            }
        }
    ]
};
