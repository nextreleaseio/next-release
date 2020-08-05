import React from 'react';
import Layout from '../components/layout';
import Row from '../components/row';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const AccessPermissions = ({ data }) => {
    const content = data.allMarkdownRemark.edges[0].node.html;
    return (
        <Layout>
            <SEO title="Access Permissions" />
            <Row classNames="text-center bg-grey-200">
                <h1 className="text-3xl font-bold">Access Permissions</h1>
                <h2 className="text-lg">
                    We treat each customer’s project as if it contains the most
                    sensitive of our own data.
                </h2>
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
    query AccessPermissionsQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/access-permissions.md/" } }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;

export default AccessPermissions;
