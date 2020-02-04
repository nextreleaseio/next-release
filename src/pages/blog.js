import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogIndex = ({ data }) => {
    return (
        <Layout>
            <SEO title="Blog" />
        </Layout>
    );
};

export const query = graphql`
    query BlogQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                    }
                    excerpt
                }
            }
        }
    }
`;

export default BlogIndex;
