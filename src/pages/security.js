import React from 'react';
import { graphql } from 'gatsby';
import Row from '../components/row';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bottom from '../components/bottom';

const Security = ({ data }) => {
    const content = data.allMarkdownRemark.edges[0].node.html;
    return (
        <Layout>
            <SEO title="Security" />
            <Row>
                <div className="sm:w-full md:w-9/12 mx-auto">
                    <h1 className="text-4xl font-bold">
                        We put our customer's data security first.
                    </h1>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </Row>
            <Bottom />
        </Layout>
    );
};

export const query = graphql`
    query SecurityQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/security.md/" } }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;

export default Security;
