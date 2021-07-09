import React from 'react';
import Layout from '../components/layout';
import Row from '../components/row';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const AboutUs = ({ data }) => {
    const content = data.allMarkdownRemark.edges[0].node.html;
    return (
        <Layout>
            <SEO title="About Us" />
            <Row classNames="text-center bg-grey-200">
                <h1 className="text-3xl font-bold">About Us</h1>
                <h2 className="text-lg">
                    We're on a mission to help teams communicate changes to
                    their communities.
                </h2>
            </Row>
            <Row>
                <div
                    className="w-3/4 mx-auto markdown-body"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
                <div className="w-1/2 mr-12" />
            </Row>
        </Layout>
    );
};

export const query = graphql`
    query AboutUsQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/about-us.md/" } }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;

export default AboutUs;
