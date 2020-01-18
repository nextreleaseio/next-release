exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const pages = ['blog', 'product'];
  pages.forEach(page => {
    PageMaker(page, createPage, graphql);
  })
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
              image
            }
          }
        }
      }
    }
  `);
  console.log(results.data)
  results.data.allMarkdownRemark.edges.forEach(function({node}) {
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