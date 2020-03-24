import Layout from '../../components/layout';
import SEO from '../../components/seo';
import help_image from '../../images/NR_Help_Mast.png';
import Bottom from '../../components/bottom';
import React from 'react';
import { graphql, Link } from 'gatsby';

const HelpCard = ({ url, title, excerpt }) => {
    return (
        <div className="sm:w-full rounded bg-grey-100 sm:py-1 md:py-2 mt-4 mx-2 md:w-3/12 md:px-4 sm:px-2">
            <Link
                to={url}
                className="text-2xl px text-purple-700 hover:text-purple-600 hover:underline leading-none"
            >
                {title}
            </Link>
            <p className="mt-4 text-sm font-grey-500">{excerpt}</p>
            <p className="mt-4">
                <Link
                    to={url}
                    className="transition px-2 font-bold text-purple-600 hover:text-purple-900 rounded bg-purple-200 hover:bg-purple-300"
                >
                    Read
                </Link>
            </p>
        </div>
    );
};

const GettingStarted = ({ data }) => {
    return (
        <Layout headerClass="bg-white relative">
            <SEO title="Help" />

            <div
                className="w-100 bg-purple-800 text-center bg-no-repeat bg-center bg-cover sm:py-4"
                style={{ backgroundImage: `url(${help_image})` }}
            >
                <h1 className="text-4xl text-white font-black">
                    Getting Started With Next Release
                </h1>
            </div>
            <div className="flex flex-wrap justify-center py-6 pb-12 px-6 md:px-32 lg:px-32 bg-grey-200">
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
