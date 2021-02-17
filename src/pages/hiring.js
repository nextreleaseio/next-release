import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import help_image from '../images/NR_Help_Mast.png';
import Row from '../components/row';

const HiringIndex = ({ data }) => {
    const all = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title="Hiring" />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${help_image})` }}
            >
                <p className="text-small text-center text-teal-400 uppercase">
                    Next Release
                </p>
                <h1 className="text-4xl text-center font-bold text-white">
                    We're Recruiting New Team Members
                </h1>
                <p className="text-small text-center text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    Checkout our latest openings and join the team to help build
                    communities around release notes.
                </p>
            </Row>
            <Row classNames="flex sm:flex-wrap">
                <div className="sm:w-full mx-auto md:w-2/3 sm:px-2 md:px-4">
                    <h2 className="font-bold text-3xl">Open Positions</h2>
                    <div className="w-full mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
                        {all.map(post => {
                            return (
                                <div key={post.node.frontmatter.path}>
                                    <Link
                                        to={post.node.frontmatter.path}
                                        className="block"
                                    >
                                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                            {post.node.frontmatter.title}
                                        </h3>
                                        <div className="flex mt-3 ">
                                            <p className="text-base leading-6 text-gray-500">
                                                {post.node.frontmatter.overview}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="mt-3">
                                        <Link
                                            to={post.node.frontmatter.path}
                                            className="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                                        >
                                            More Details...
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Row>
        </Layout>
    );
};

export const query = graphql`
    query HiringQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/hiring/" } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        overview
                    }
                    excerpt
                }
            }
        }
    }
`;

export default HiringIndex;
