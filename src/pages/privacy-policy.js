import React from 'react';
import Layout from '../components/layout';
import Row from '../components/row';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const Privacy = ({ data }) => {
    const content = data.allMarkdownRemark.edges[0].node.html;
    return (
        <Layout>
            <SEO title="Privacy Policy" />
            <Row classNames="text-center bg-grey-200">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
                <h2 className="text-lg">
                    We actually take your privacy seriously
                </h2>
            </Row>
            <Row>
                <div
                    className="w-3/4 mx-auto"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </Row>
        </Layout>
    );
};

export const query = graphql`
    query PrivacyQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/privacy.md/" } }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;

export default Privacy;
