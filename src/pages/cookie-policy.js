import React from 'react';
import Layout from '../components/layout';
import Row from '../components/row';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const Cookie = ({ data }) => {
    const content = data.allMarkdownRemark.edges[0].node.html;
    return (
        <Layout>
            <SEO title="Cookie Policy" />
            <Row classNames="text-center bg-grey-200">
                <h1 className="text-3xl">Cookie Policy</h1>
            </Row>
            <Row>
                <div
                    className="w-3/4 mx-auto markdown-body"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </Row>
        </Layout>
    );
};

export const query = graphql`
    query CookieQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/cookies.md/" } }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;

export default Cookie;
