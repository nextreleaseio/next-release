import React from 'react';
import Layout from "../components/layout";
import Row from "../components/row";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const Privacy = ({data}) => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <Row classNames="text-center bg-grey-200">
        <h1 className="text-3xl">Privacy Policy</h1>
        <h2 className="text-lg">We actually take your privacy seriously</h2>
      </Row>
      <Row>
        <div className="w-3/4 mx-auto">

        </div>
      </Row>
    </Layout>
  )
};

export const query = graphql`
    query LegalQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/product/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        items
                        image {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    }
`;

export default Privacy;