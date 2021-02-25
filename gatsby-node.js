const axios = require('axios');

const get = endpoint =>
    axios.get(`https://api.nextrelease.io${endpoint}/?sort=-created`, {
        headers: {
            Authorization: 'Token ' + process.env.API_TOKEN,
            'Content-Type': 'application/vnd.api+json',
            'X-Organization': process.env.X_ORGANIZATION
        }
    });

const getPosts = names =>
    Promise.all(
        names.map(async name => {
            const { data: post } = await get(`/${name}`);
            if (typeof post.results === 'undefined') {
                return post;
            } else {
                return post.results;
            }
        })
    ).catch(error => {
        return [];
    });

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const pages = ['blog', 'product', 'kb', 'performance-notes', 'hiring'];
    const posts = await getPosts(['reddit_releases']);
    let releases = posts[0];
    createPage({
        path: `/reddit-community/showcase`,
        component: require.resolve(
            './src/templates/reddit-community/showcase.js'
        ),
        context: { releases }
    });

    const community_stats = await getPosts(['community_stats']);
    let stats = community_stats[0];
    createPage({
        path: `/communities`,
        component: require.resolve('./src/templates/communities.js'),
        context: { stats }
    });

    pages.forEach(page => {
        PageMaker(page, createPage, graphql);
    });
};

const PageMaker = async (page, createPage, graphql) => {
    const results = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(${page})/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
    results.data.allMarkdownRemark.edges.forEach(function({ node }) {
        const { path, image } = node.frontmatter;
        createPage({
            path,
            component: require.resolve(`./src/templates/${page}.js`),
            context: {
                id: node.id
            }
        });
    });
};
