import Layout from '../../components/layout';
import SEO from '../../components/seo';
import help_image from '../../images/NR_Help_Mast.png';
import Bottom from '../../components/bottom';
import React from 'react';
import { graphql, Link } from 'gatsby';
import Row from '../../components/row';
import HelpCard from '../../components/help-card';

const GettingStarted = ({ data }) => {
    return (
        <Layout headerClass="bg-white relative">
            <SEO title="Help" />

            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${help_image})` }}
            >
                <p className="text-small text-center text-teal-400 uppercase">
                    Getting Started
                </p>
                <h1 className="text-4xl text-center font-bold text-white">
                    Up and Running With Next Release
                </h1>
                <p className="text-small text-center text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    Get your repositories connected and start generating release
                    notes with no extra effort!
                </p>
            </Row>
            <Row>
                <div className="grid gap-16 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
                    {data.allMarkdownRemark.edges.map(({ node }) => {
                        return (
                            <HelpCard
                                key={node.frontmatter.path}
                                url={node.frontmatter.path}
                                title={node.frontmatter.title}
                                excerpt={node.excerpt}
                            />
                        );
                    })}
                </div>
            </Row>

            <Bottom />
        </Layout>
    );
};

export const query = graphql`
    query GettingStartedQuery {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/content/kb/" }
                frontmatter: { section: { eq: "Get Started" } }
            }
            sort: { fields: [frontmatter___date], order: DESC }
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

export default GettingStarted;
